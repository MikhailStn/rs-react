import { IValidationForm } from 'interfaces/interfaces';
export const addedItems: IValidationForm[] = [];

export const states = {
  nameInputBorder: {
    border: '1px solid rgb(167, 167, 167)',
  },
  nameErrorVisibility: {
    opacity: '0',
  },
  dateInputBorder: {
    border: '1px solid rgb(167, 167, 167)',
  },
  dateErrorVisibility: {
    opacity: '0',
  },
  platformErrorVisibility: {
    opacity: '0',
  },
  inputFileBorder: {
    border: '1px solid rgb(167, 167, 167)',
  },
  addedCard: {
    opacity: '0',
  },
  inputFileName: 'No file upload',
  addedItems: addedItems,
  inputNameVal: '',
  inputDateVal: '',
  inputFileVal: '',
  isWindowsChecked: false,
  isPs5Checked: false,
  isPs4Checked: false,
  isXboxOneChecked: false,
  isNintendoChecked: false,
  isXboxSeriesChecked: false,
};
