import React from "react";
import { Input, Button } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";

const Banner = () => {
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);

  return (
    <div className="md:h-[450px] relative flex flex-col justify-center items-center ">
        <div className="absolute inset-0 bg-[url('/images/bg.png')] bg-cover bg-no-repeat opacity-10">

        </div>
      <Typography variant="h2" className="py-6">
        I Grow By Helping People In Need
      </Typography>
      <div className="relative flex w-full max-w-[24rem]">
        <Input
          type="email"
          label="Email Address"
          value={email}
          onChange={onChange}
          className="pr-20 bg-white"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          size="sm"
          color={email ? "gray" : "blue-gray"}
          disabled={!email}
          className="!absolute right-1 top-1 rounded bg-[#FF444A] border-none outline-none">
          Search
        </Button>
      </div>
    </div>
  );
};

export default Banner;
