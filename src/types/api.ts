export type TechIcon = {
  icon: {
    url: string
  }
  title: string
}

export type module = {
  title: string
  subtitle: string
  description: string
}

export type button = {
  label: string
  url: string
}

export type socialLink = {
  title: string
  url: string
}

export type Image = {
  alternativeText: string
  url: string
}

export type Author = {
  photo: Image
  socialLinks: socialLink[]
  role: string
  description: string
}

export type Review = {
  id: number
  photo: {
    url: string
  }
  name: string
  text: string
}

export type Question = {
  question: string
  answer: string
}

export type LogoProps = Image

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: Image
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  media: Image
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: [
    {
      title: string
    }
  ]
}

export type SectionModulesProps = {
  title: string
  modules: module[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: button
}

export type SectionAboutUsProps = {
  title: string
  authors: Author[]
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type SectionFaqProps = {
  title: string
  questions: Question[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
