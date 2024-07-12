import { Autocomplete, Box, CardMedia } from "@mui/material";
import {
  SearchBarBoxSx,
  SearchButton,
  SearchIconSx,
  StyledTextField,
} from "./SearchBarStyles";
import { useCallback, useState } from "react";
import { AlertSnackBar } from "../../../../components";
import { Option, dropdownOptionsHandler } from "../../utils";
import { MAX_SEARCH_DROPDOWN_OPTIONS_LENGTH } from "../../constants";

type SearchBarProps = {
  label?: string;
  handleSearch: (params: string) => any;
  searchResultSetter: (result: any) => void;
  icon?: string;
  isLoadingGetter?: boolean;
  isLoadingSetter?: (isLoading: any) => void;
};

export const SearchBar = ({
  label,
  handleSearch,
  searchResultSetter,
  icon,
  isLoadingGetter,
  isLoadingSetter,
}: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [dropdownOptions, setDropdownOptions] = useState<Option[]>([]);

  const onChange = useCallback((event: any) => {
    setSearchTerm(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    async (event: any) => {
      event.preventDefault();
      if (searchTerm.trim().length <= 0) return;
      if (isLoadingSetter) isLoadingSetter(true);

      const newDropdownList = dropdownOptionsHandler(
        { name: searchTerm },
        dropdownOptions,
        MAX_SEARCH_DROPDOWN_OPTIONS_LENGTH
      );
      setDropdownOptions(newDropdownList);

      const searchResults = await handleSearch(searchTerm);
      if (searchResults.error) {
        setHasError(true);
        setErrorMessage(searchResults.error);
      } else {
        searchResultSetter(searchResults.response);
      }

      if (isLoadingSetter) isLoadingSetter(false);
    },
    [
      searchTerm,
      dropdownOptions,
      handleSearch,
      searchResultSetter,
      isLoadingSetter,
    ]
  );

  const onKeyDownHandler = useCallback(
    (event: any) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handleSubmit(event);
      }
    },
    [handleSubmit]
  );

  return (
    <Box sx={SearchBarBoxSx}>
      <Autocomplete
        disabled={isLoadingGetter}
        forcePopupIcon={false}
        options={[...dropdownOptions.map((option) => option.name)]}
        renderInput={(params) => (
          <Box>
            <StyledTextField
              label={label ?? ""}
              onChange={onChange}
              value={searchTerm}
              {...params}
              onKeyDown={onKeyDownHandler}
            />
            <SearchButton type="submit" onClick={handleSubmit}>
              {icon && (
                <CardMedia component="img" image={icon} sx={SearchIconSx} />
              )}
            </SearchButton>
          </Box>
        )}
      />

      <AlertSnackBar
        open={hasError}
        message={errorMessage}
        onCloseSetter={() => setHasError(false)}
      />
    </Box>
  );
};
