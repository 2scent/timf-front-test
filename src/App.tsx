import { SubmitHandler, useForm } from 'react-hook-form';

import ErrorMessage from 'shared/components/ErrorMessage';
import InputAddress from 'shared/components/InputAddress';
import InputDate from 'shared/components/InputDate';
import InputText from 'shared/components/InputText';
import Select from 'shared/components/Select';

interface Inputs {
  name: string;
  date: string;
  item: string;
  address: string;
}

function App() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <span>이름</span>
        {' '}
        <InputText
          type="text"
          name="name"
          maxLength={20}
          control={control}
          rules={{
            required: '값을 입력 해주세요',
            pattern: {
              value: /^[ㄱ-ㅎ가-힣a-zA-Z\s]+$/,
              message: '한글, 영어, 공백만 입력 가능 합니다',
            },
          }}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </div>
      <div>
        날짜
        {' '}
        <InputDate
          name="date"
          control={control}
          rules={{
            required: '값을 입력 해주세요',
          }}
        />
        {errors.date && <ErrorMessage>{errors.date.message}</ErrorMessage>}
      </div>
      <div>
        품목
        {' '}
        <Select
          name="item"
          control={control}
          rules={{
            required: '값을 입력 해주세요',
          }}
          options={[
            { label: '선택', value: '' },
            { label: '냉장품', value: '냉장품' },
            { label: '냉동품', value: '냉동품' },
            { label: '직접입력', value: '직접입력' },
          ]}
        />
        {errors.item && <ErrorMessage>{errors.item.message}</ErrorMessage>}
      </div>
      <div>
        출근지
        {' '}
        <InputAddress
          name="address"
          control={control}
          rules={{
            required: '값을 입력 해주세요',
          }}
        />
        {errors.address && <ErrorMessage>{errors.address.message}</ErrorMessage>}
      </div>
      <div>
        <button type="submit">등록</button>
      </div>
    </form>
  );
}

export default App;
