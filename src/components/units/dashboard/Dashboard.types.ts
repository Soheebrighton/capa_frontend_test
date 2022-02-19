export interface IPropsDashboardUI {
  stores: any[];
  methods: string[];
  materials: string[];
  onList: any[];
  checkedList: string[];
  isOn: boolean;
  isMethod: boolean;
  isMaterial: boolean;
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>;
  setIsMaterial: React.Dispatch<React.SetStateAction<boolean>>;
  onClickMethod: (event: any) => void;
  onClickMaterial: (event: any) => void;
  onChangedChecked: (el: any) => (event: any) => void;
}
