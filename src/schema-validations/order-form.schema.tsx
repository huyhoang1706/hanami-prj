import z from "zod";

export const OrderFormSchema = z.object({
  name: z.string().min(1, "Tên không được để trống").max(100, "Tên không được vượt quá 100 ký tự"),
  phoneNumber: z
    .string()
    .min(10, "Số địên thoại định dạng không hợp lệ")
    .max(10, "Số địên thoại định dạng không hợp lệ"),
  email: z.string().email("Email không hợp lệ"),
  orderDate: z.date().refine((date) => date > new Date(), {
    message: "Ngày đi phải là một ngày trong tương lai",
  }),
  orderTime: z.string().refine(
    (time) => {
      if (!/^\d{2}:\d{2}$/.test(time)) {
        return false;
      }

      const [hours, minutes] = time.split(":").map(Number);

      const now = new Date();
      const orderDateTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        hours,
        minutes,
      );

      return orderDateTime > now;
    },
    {
      message: "Thời gian đặt phải là thời gian trong tương lai",
    },
  ),
  note: z.string().optional(),
  quantity: z.number().min(1, "Số lượng không hợp lệ"),
});

export type OrderFormType = z.TypeOf<typeof OrderFormSchema>;
