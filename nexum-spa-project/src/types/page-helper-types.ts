type WithNodes = {
  readonly '@nodes': readonly string[]
}

type ContentNode<T = {}, C = {}> = T &
  WithNodes & {
    readonly [key: string]: ContentNode<{}, C>
  }

type WithContent = {
  readonly [key: string]: ContentNode
}

type MagnoliaError = {
  readonly error: {
    readonly code: 'pathNotFound'
  }
}

export type AuthorPageProps = WithContent & {
  readonly title: string
  readonly metadata: {
    readonly '@nodes': readonly string[]
  }
}

type IsError<T> = T | MagnoliaError

type PageContentResponse = IsError<AuthorPageProps>
type TemplateAnnotationsResponse = IsError<any>

export type AuthorProps = {
  readonly pageContent: PageContentResponse
  readonly templateAnnotations: TemplateAnnotationsResponse
}

export type PathInterface = {
  path: {
    readonly '@id': string
    readonly '@name': string
    readonly '@nodeType': string
    readonly '@nodes': readonly any[]
    readonly '@path': string
    readonly 'mgnl:created': Date
    readonly 'mgnl:lastModified': Date
    readonly 'mgnl:template': string
    readonly title: string
  }
}
