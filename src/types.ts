export type MajorSection = {
  title: string
  type: 'major'
  data: Array<{
    id: number
    date: string
    title: string
    description: string
    location: string
    summary: Array<string>
  }>
}

export type MinorSection = {
  title: string
  type: 'minor'
  data: Array<{
    title: string
    text: string
  }>
}

export type CV = {
  sections: Array<MajorSection | MinorSection>
  fullName: string
  university: string
  email: string
  phoneNumber: string
  linkedInURL: string
}
