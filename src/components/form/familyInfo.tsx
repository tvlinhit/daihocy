import React, { useEffect } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { get } from "lodash";
import Select from "components/control/select";

export type FormFamilyInfoValues = {
  phone: string;
  fullName: string;
  isFamily: boolean;
  familyPhone: string;
  address: string;
  reason: string;
  yearOfBirth: number;
  yearOfMarried: number;
  careerType: number;
  height: number;
  weight: number;
  BMI?: number;
  nation: string;
};

interface Props {
  defaultValue?: FormFamilyInfoValues;
  formControl: UseFormReturn<any>
}

const FormFamilyInfo: React.FC<Props>= ({formControl, defaultValue})=> {
  const {
    control,
    formState: { errors },
    watch,
    setValue
  } = formControl;
  const watchIsFamily = watch("isFamily", false);
  const watchHeight = watch("height", 0);
  const watchWeight = watch("weight", 0);
  useEffect(()=> {
      if(watchHeight> 0 && watchWeight > 0) {
        const height = watchHeight/100
        const bmi = watchWeight/(height*height)
        setValue('BMI', Math.round(bmi*100)/100);
      } else {
        setValue('BMI', 0);
      }
  }, [setValue, watchHeight, watchWeight])

  return (
    <div className="my-6 p-6 bg-white rounded-2xl">
      <div className="font-bold text-xl mb-6 uppercase">Thông tin gia đình</div>
      <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
        <Controller
          name="thirdGenarateType"
          control={control}
          defaultValue={get(defaultValue, "thirdGenarateType", 0)}
          render={({ field: { ref, ...others } }) => (
            <Select
              className="w-full mb-3 sm:col-span-6"
              options={[
                {value: 0, label: 'Không'},
                {value: 1, label: 'Có'},
              ]}
              inputProps={{label: "Trong 3 thế hệ có ai bị thai bất thường không"}}
              {...others}
            />
          )}
        />
        <Controller
          name="thirdGenarateGeneticType"
          control={control}
          defaultValue={get(defaultValue, "thirdGenarateGeneticType", 0)}
          render={({ field: { ref, ...others } }) => (
            <Select
              className="w-full mb-3 sm:col-span-6"
              options={[
                {value: 0, label: 'Không'},
                {value: 1, label: 'Có'},
              ]}
              inputProps={{label: "Trong 3 thế hệ có ai mắc hoặc sinh con bị các bệnh di truyền hoặc dị tật bẩm sinh không? Đặc biệt các bệnh Down, Dị tật ống thần kinh (hộp sọ, cột sống), Chậm phát triển tâm thần, Teo cơ, Bệnh tim, Lùn, Vô kinh, Vô sinh"}}
              {...others}
            />
          )}
        />
        <Controller
          name="whereWarType"
          control={control}
          defaultValue={get(defaultValue, "whereWarType", 0)}
          render={({ field: { ref, ...others } }) => (
            <Select
              className="w-full mb-3 sm:col-span-6"
              options={[
                {value: 0, label: 'Không'},
                {value: 1, label: 'Có'},
              ]}
              inputProps={{label: "Ông bà, bố mẹ bên vợ, bên chồng có ai đi bộ đội ở chiến trường miền Nam trước năm 1975 không? Ở đâu"}}
              {...others}
            />
          )}
        />
        <Controller
          name="diagnosticType"
          control={control}
          defaultValue={get(defaultValue, "diagnosticType", 1)}
          render={({field: {ref, ...others}}) => (
            <Select
              className="w-full mb-3 sm:col-span-6"
              options={[
                {value: 1, label: 'Không'},
                {value: 2, label: 'Dị tật bẩm sinh'},
                {value: 3, label: 'Trước hôn nhân'},
                {value: 4, label: 'Sàng lọc trước sinh'},
                {value: 5, label: 'Di truyền sinh sản'},
                {value: 6, label: 'Khác'},
              ]}
              inputProps={{label: "Chuẩn đoán"}}
              {...others}
            />
          )}
        />
      </div>
    </div>
  );
}

export default FormFamilyInfo;