import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const CardDeafault = ({ item }) => {
    const{title,image,description,cardBg,textColor,categorybg,price,id}=item
  return (
    <Card className="mt-6 ">
      <CardHeader color="blue-gray" className="relative h-56 rounded-b-none shadow-none p-0">
        <img
          src={image}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>
          {description.slice(0,100)}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button size="sm" className="cursor-pointer">Read More</Button>
      </CardFooter>
    </Card>
  );
};

export default CardDeafault;
