import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';

interface SelectLimitProps {
  limit: number;
  limitOptions: number[];
  onChangeLimit: (limit: number) => void;
}

export default function SelectLimit({ limit, limitOptions, onChangeLimit }: SelectLimitProps) {
  const handleChangeLimit = ({ target: { value } }: SelectChangeEvent<number>) => {
    onChangeLimit(Number(value));
  };

  return (
    <FormControl
      size="small"
      sx={{
        minWidth: 140,
        textAlign: 'left',
      }}
    >
      <Select<number>
        value={limit}
        onChange={handleChangeLimit}
      >
        {limitOptions.map((limitOption, index) => (
          <MenuItem
            key={index}
            value={limitOption}
          >
            {limitOption}
            개 보기
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
