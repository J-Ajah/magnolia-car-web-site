declare module '@magnolia/react-editor' {
  import type { FC, PropsWithChildren } from 'react'

  type PageConfig = {
    readonly componentMappings: {
      readonly [key: string]: FC
    }
  }

  type TemplateAnnotations = {
    readonly [key: string]: string
  }

  type EditablePageProps<T> = {
    readonly content: T
    readonly config: PageConfig
    readonly templateAnnotations: TemplateAnnotations
  }

  type EditableAreaProps<T> = {
    readonly key: string
    readonly content: T
  }

  export function EditablePage<T>(
    props: PropsWithChildren<EditablePageProps<T>>,
  ): JSX.Element

  export function EditableArea<T>(
    props: PropsWithChildren<EditableAreaProps<T>>,
  ): JSX.Element
}
