"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const OrderForm = () => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen px-4 bg-gray-50">
        <div className="w-full max-w-2xl bg-white shadow-md rounded-xl p-25 m-8 space-y-6">
          <h1 className="text-2xl font-bold text-[#408B69] text-center">
            Order Now
          </h1>
          <p className="text-center text-black font-semibold">
            Please fill out the form below to place your order.
          </p>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-sm font-normal pb-2">
                Full Name
              </Label>
              <Input id="name" placeholder="" />
            </div>
            <div>
              <Label htmlFor="phone" className="text-sm font-normal pb-2">
                Phone Number
              </Label>
              <Input id="phone" placeholder="" />
            </div>
            <div>
              <Label htmlFor="email" className="text-sm font-normal pb-2">
                Email (Optional)
              </Label>
              <Input id="email" placeholder="" />
            </div>
            <div>
              <Label htmlFor="product" className="text-sm font-normal pb-2">
                Product
              </Label>
              <Select>
                <SelectTrigger id="product" className="w-full">
                  <SelectValue placeholder="Select Product" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="egusi-soup">Egusi Soup</SelectItem>
                  <SelectItem value="plantain-chips">Plantain Chips</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="quantity" className="text-sm font-normal pb-2">
                Quantity / Size
              </Label>
              <Input id="quantity" placeholder="" />
            </div>
            <div>
              <Label htmlFor="address" className="text-sm font-normal pb-2">
                Delivery Address
              </Label>
              <Input id="address" placeholder="" />
            </div>
            <div>
              <Label htmlFor="method" className="text-sm font-normal pb-2">
                Preferred Delivery Method (Pickup / Delivery)
              </Label>
              <Input id="method" placeholder="" />
            </div>
            <Button className="w-full bg-[#408B69] hover:bg-[#408B69] text-white text-lg mt-2">
              Place Your Order Now
            </Button>
            <p className="text-sm text-black mt-2 font-bold">
              Or Order via{" "}
              <span className="text-[#408B69] cursor-pointer hover:underline">
                WhatsApp
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
