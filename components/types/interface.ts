export interface Gender {
  male: boolean;
}

export interface ChoiceGender extends Gender {
  onChangeMale: () => void;
  onChangeFemale: () => void;
}

export interface PopupSet {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PopupWithParams extends PopupSet {
  productId: number;
}

export interface PopupProps extends PopupSet {
  visible: boolean;
  Component?: () => JSX.Element;
}
