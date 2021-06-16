export type ComponentWithDrawer = {
  openDrawer: () => void;
};

export type Components = {
  Component?: (any: ComponentWithDrawer) => JSX.Element;
};

export type HeaderProps = {
  Component?: () => JSX.Element;
  openDrawer?: () => void;
  title?: string;
};

export type TermsType = string[];

export type OpenSourceURL = {
  title: string;
  url: string;
};

export type QuestionType = {
  title: string;
  content: string;
};
