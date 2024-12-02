// import React from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { useForm } from "react-hook-form";

// export function OrderForm() {
//   const form = useForm({
//     defaultValues: {
//       name: "",
//       phoneNumber: "",
//       email: "",
//       orderDate: new Date(),
//       orderTime: "",
//       quantity: 1,
//       note: "",
//     },
//   }, );

//   function onSubmit(data: any) {
//     // Handle form submission
//     console.log(data);
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//         <FormField
//           control={form.control}
//           name="name"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Tên</FormLabel>
//               <FormControl>
//                 <Input placeholder="Nhập tên của bạn" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="phoneNumber"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Số điện thoại</FormLabel>
//               <FormControl>
//                 <Input placeholder="Nhập số điện thoại" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="email"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Email</FormLabel>
//               <FormControl>
//                 <Input placeholder="Nhập email" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="orderDate"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Ngày đặt</FormLabel>
//               <FormControl>
//                 <Input
//                   type="date"
//                   {...field}
//                   value={
//                     field.value instanceof Date
//                       ? field.value.toISOString().split("T")[0]
//                       : field.value
//                   }
//                   onChange={(e) => {
//                     const date = new Date(e.target.value);
//                     field.onChange(date);
//                   }}
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="orderTime"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Thời gian</FormLabel>
//               <FormControl>
//                 <Input type="time" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="quantity"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Số lượng</FormLabel>
//               <FormControl>
//                 <Input
//                   type="number"
//                   {...field}
//                   onChange={(e) => field.onChange(Number(e.target.value))}
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="note"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Ghi chú</FormLabel>
//               <FormControl>
//                 <Input placeholder="Nhập ghi chú (tùy chọn)" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <Button type="submit" className="w-full">
//           Đặt hàng
//         </Button>
//       </form>
//     </Form>
//   );
// }
