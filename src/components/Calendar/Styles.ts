// ---------------------------------------------------------------------- //
//                          import library                                //
// ---------------------------------------------------------------------- //

import styled from "styled-components";

export const flex = {
  display: "flex",
};

export const flexCenter = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const flexSpaceBetween = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export const RtlDiv = styled.div`
  direction: rtl;
`;

export const FullWidthDiv = styled.div`
  width: 100% !important;
`;

export const MyInputDiv = styled.div`
  /* سایر استایل‌های شما */
`;

export const StyledDatePicker = styled.div`
  .rmdp-wrapper {
    background: #fff;
    border-radius: 8px;
    border: 1px solid #ccc;
    position: absolute !important;
    left: -40px !important;
    padding: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .rmdp-calendar-container {
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .rmdp-day-picker {
    border: none;
  }

  .rmdp-day-picker .rmdp-day {
    border-radius: 50%;
  }

  .rmdp-day-picker .rmdp-day:hover,
  .rmdp-day-picker .rmdp-day:focus {
    background-color: #007bff;
    color: white;
    outline: none;
  }

  @media (max-width: 768px) {
    .rmdp-wrapper {
      width: 100%;
    }

    .rmdp-calendar-container {
      width: 100%;
      max-width: 100%;
      top: auto !important;
      bottom: 0 !important;
      border-radius: 0;
    }
  }

  .fullWidth {
    width: 100%;
  }

  .myInput {
    /* سایر استایل‌های شما */
  }
`;
