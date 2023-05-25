export type TabEntranceValue = {
  id: number,
  isActive: boolean,
  label: string,
  placeholder: string,
  connection: string,
  type: string,
  isRequired: boolean,
  mt: string,
}

export type TabSignUpData = [number, TabEntranceValue];