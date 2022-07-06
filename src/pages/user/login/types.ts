export interface FormValue {
  file_format?: string[],
  file_type?: string
  files_req?: {
    file_limit?: number
  }
  num?: number,
  size?: number
  radio_name?: number
  text_name?: string
  upload_ins?: string
}

export interface OptionsType {
  value: string,
  label: string
}

export interface PropsType {
  visible?: false,
  cancelClick: () => void,
  showModal: () => void,
  gatherValue: (value: ItemType) => void,
  handlOk:()=>void
}

export interface ItemType {
  file_format?: string[] | undefined,
  file_type: null,
  files_req: {
    file_limit: number,
    size: number,
    num: number
  } | undefined
  radio_name: number,
  text_name: string
  upload_ins: string
}
