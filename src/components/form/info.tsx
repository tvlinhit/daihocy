import React, { useEffect } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import Input from "components/control/input";
import { get } from "lodash";
import * as yup from "yup";
import { FormControlLabel } from "@material-ui/core";
import Select from "components/control/select";
import Checkbox from "components/control/checkbox";

export type FormInfoValues = {
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

export const FormInfoSchema = {
  phone: yup
    .string()
    .required("Vui lòng điền số điện thoại"),
  fullName: yup
    .string()
    .required("Vui lòng điền họ tên"),
}

interface Props {
  defaultValue?: FormInfoValues;
  formControl: UseFormReturn<any>
}

const YEAR_LIST = (()=> {
  let index = 1900;
  const result =[]
  const yearNow = new Date().getFullYear();
  while (index <= yearNow) {
    result.push({
      value: index,
      label: index
    })
    index ++;
  }
  return result;
})();

const JOB = [
  {
    value: 1,
    label: "Văn phòng"
  },{
    value: 2,
    label: "Công nhân"
  },{
    value: 3,
    label: "Nông dân"
  },{
    value: 4,
    label: "Buôn bán"
  },{
    value: 5,
    label: "Y tế"
  },{
    value: 6,
    label: "Khác"
  },
]

const FormInfo: React.FC<Props>= ({formControl, defaultValue})=> {
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
      <div className="font-bold text-md mb-6 uppercase">THÔNG TIN CHUNG</div>
      <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
        <Controller
          name="phone"
          control={control}
          defaultValue={get(defaultValue, "phone", "" )}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Số điện thoại *"
              className="w-full mb-3 sm:col-span-3"
              type="text"
              errorMsg={get(errors, "phone.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />
        <Controller
          name="fullName"
          control={control}
          defaultValue={get(defaultValue, "fullName")}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Họ và tên *"
              className="w-full mb-3 sm:col-span-3"
              type="text"
              errorMsg={get(errors, "fullName.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />
        <Controller
          name="isFamily"
          control={control}
          defaultValue={get(defaultValue, "isFamily", false)}
          render={({ field: { ref, ...others } }) => (
            <FormControlLabel
              className="justify-end sm:col-span-3"
              control={<Checkbox />}
              label="Hỗ trợ người thân"
              labelPlacement="start"
              {...others}
            />
          )}
        />
        {watchIsFamily &&
        <Controller
          name="familyPhone"
          control={control}
          defaultValue={get(defaultValue, "familyPhone")}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Số điện thoại người thân"
              className="w-full mb-3 sm:col-span-3"
              type="text"
              errorMsg={get(errors, "familyPhone.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />}
        <Controller
          name="address"
          control={control}
          defaultValue={get(defaultValue, "address")}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Địa chỉ"
              className="w-full mb-3 sm:col-span-6"
              type="text"
              errorMsg={get(errors, "address.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />
        <Controller
          name="reason"
          control={control}
          defaultValue={get(defaultValue, "reason")}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Lý do khám (xét nghiệm)"
              className="w-full mb-3 sm:col-span-6"
              type="text"
              errorMsg={get(errors, "reason.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />
        <Controller
          name="yearOfBirth"
          control={control}
          defaultValue={get(defaultValue, "yearOfBirth")}
          render={({ field: { ref, ...others } }) => (
            <Select
              className="w-full mb-3 sm:col-span-3"
              options={YEAR_LIST}
              inputProps={{ label: "Năm sinh" }}
              {...others}
            />
          )}
        />
        <Controller
          name="yearOfMarried"
          control={control}
          defaultValue={get(defaultValue, "yearOfMarried")}
          render={({ field: { ref, ...others } }) => (
            <Select
              className="w-full mb-3 sm:col-span-3"
              options={YEAR_LIST}
              inputProps={{ label: "Năm kết hôn" }}
              {...others}
            />
          )}
        />
        <Controller
          name="careerType"
          control={control}
          defaultValue={get(defaultValue, "careerType")}
          render={({ field: { ref, ...others } }) => (
            <Select
              className="w-full mb-3 sm:col-span-3"
              options={JOB}
              inputProps={{ label: "Nghề nghiệp" }}
              {...others}
            />
          )}
        />
        <Controller
          name="height"
          control={control}
          defaultValue={get(defaultValue, "height", 0)}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Chiều cao"
              className="w-full mb-3 sm:col-start-1 sm:col-span-2"
              type="number"
              errorMsg={get(errors, "height.message", "")}
              inputRef={ref}
              endAdornment={<span className="transform translate-y-[0.125rem] pl-2 text-primary-4">cm</span>}
              {...others}
            />
          )}
        />
        <Controller
          name="weight"
          control={control}
          defaultValue={get(defaultValue, "weight", 0)}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Cân nặng"
              className="w-full mb-3 sm:col-span-2"
              type="number"
              errorMsg={get(errors, "weight.message", "")}
              inputRef={ref}
              endAdornment={<span className="ransform translate-y-[0.125rem] pl-2 text-primary-4">kg</span>}
              {...others}
            />
          )}
        />
        <Controller
          name="BMI"
          control={control}
          defaultValue={get(defaultValue, "BMI", 0)}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="BMI"
              className="w-full mb-3 sm:col-span-2"
              type="number"
              disabled={true}
              errorMsg={get(errors, "BMI.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />
        <Controller
          name="nation"
          control={control}
          defaultValue={get(defaultValue, "nation")}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Dân tộc"
              className="w-full mb-3 sm:col-span-6"
              type="text"
              errorMsg={get(errors, "nation.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />
      </div>
    </div>
  );
}

export default FormInfo;