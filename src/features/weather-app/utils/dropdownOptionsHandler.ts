export type Option = {
  name: string;
};

export const dropdownOptionsHandler = (
  option: Option,
  optionList: Option[],
  maxDropdownOptionLength: number
): Option[] => {
  if (optionList.length < maxDropdownOptionLength) {
    return [option, ...optionList.filter((item) => item.name !== option.name)];
  } else {
    if (optionList.map((item) => item.name).includes(option.name)) {
      return [
        option,
        ...optionList.filter((item) => item.name !== option.name),
      ];
    } else {
      return [option, ...optionList.slice(0, maxDropdownOptionLength - 1)];
    }
  }
};
