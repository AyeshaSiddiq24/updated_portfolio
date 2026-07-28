import { jsPDF } from 'jspdf'
import { profile, about, experience, skills } from '../data/content'

const ACCENT = [63, 97, 138]
const DIM = [90, 100, 115]
const DARK = [20, 24, 32]

export function generateResumePdf() {
  const doc = new jsPDF({ unit: 'pt', format: 'letter' })
  const pageWidth = doc.internal.pageSize.getWidth()
  const margin = 54
  let y = 56

  const setDim = () => doc.setTextColor(...DIM)
  const setDark = () => doc.setTextColor(...DARK)
  const setAccent = () => doc.setTextColor(...ACCENT)

  const checkPageBreak = (needed = 60) => {
    if (y + needed > doc.internal.pageSize.getHeight() - 48) {
      doc.addPage()
      y = 56
    }
  }

  const heading = (text) => {
    checkPageBreak(40)
    setAccent()
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(12)
    doc.text(text.toUpperCase(), margin, y)
    doc.setDrawColor(...ACCENT)
    doc.setLineWidth(1)
    doc.line(margin, y + 4, pageWidth - margin, y + 4)
    y += 20
  }

  const paragraph = (text, opts = {}) => {
    setDark()
    doc.setFont('helvetica', opts.bold ? 'bold' : 'normal')
    doc.setFontSize(opts.size || 10)
    const lines = doc.splitTextToSize(text, pageWidth - margin * 2)
    checkPageBreak(lines.length * 13 + 6)
    doc.text(lines, margin, y)
    y += lines.length * 13 + (opts.gap ?? 6)
  }

  // Header
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(24)
  setDark()
  doc.text(profile.name, margin, y)
  y += 20

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(11)
  setAccent()
  doc.text('AI/ML Engineer', margin, y)
  y += 16

  setDim()
  doc.setFontSize(9)
  doc.text(`${profile.email}   |   ${profile.linkedin}   |   ${profile.github}`, margin, y)
  y += 22

  doc.setDrawColor(200, 205, 214)
  doc.setLineWidth(0.75)
  doc.line(margin, y, pageWidth - margin, y)
  y += 20

  // Summary
  heading('Summary')
  paragraph(about.paragraphs.join(' '), { gap: 14 })

  // Experience
  heading('Experience')
  experience
    .filter((e) => e.type === 'job')
    .forEach((job) => {
      checkPageBreak(50)
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(11)
      setDark()
      doc.text(`${job.title} — ${job.company}`, margin, y)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(9)
      setDim()
      const dateText = `${job.range}`
      doc.text(dateText, pageWidth - margin - doc.getTextWidth(dateText), y)
      y += 14
      doc.setFontSize(9)
      doc.text(job.location, margin, y)
      y += 14
      paragraph(job.description, { size: 9.5, gap: 14 })
    })

  // Education
  heading('Education')
  experience
    .filter((e) => e.type === 'education')
    .forEach((edu) => {
      checkPageBreak(40)
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(11)
      setDark()
      doc.text(`${edu.title} — ${edu.company}`, margin, y)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(9)
      setDim()
      doc.text(edu.range, pageWidth - margin - doc.getTextWidth(edu.range), y)
      y += 14
      doc.text(edu.location, margin, y)
      y += 14
      paragraph(edu.description, { size: 9.5, gap: 14 })
    })

  // Skills
  heading('Skills')
  skills.categories.forEach((cat) => {
    checkPageBreak(30)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(9.5)
    setDark()
    doc.text(`${cat.title}:`, margin, y)
    doc.setFont('helvetica', 'normal')
    setDim()
    const text = cat.items.join(', ')
    const lines = doc.splitTextToSize(text, pageWidth - margin * 2 - 10)
    doc.text(lines, margin + doc.getTextWidth(`${cat.title}: `) > pageWidth - margin * 2 ? margin : margin, y + 12)
    y += 12 + lines.length * 12 + 6
  })

  // Certifications
  heading('Certifications')
  skills.certifications.forEach((c) => {
    checkPageBreak(24)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(9.5)
    setDark()
    doc.text(c.title, margin, y)
    doc.setFont('helvetica', 'normal')
    setDim()
    const meta = c.issuer
    doc.text(meta, pageWidth - margin - doc.getTextWidth(meta), y)
    y += 14
  })

  doc.save(profile.resumeFileName)
}
