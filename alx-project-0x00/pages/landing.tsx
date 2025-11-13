import Card from "@/components/Card";
import Button from "@/components/Button";
const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card /> <Card /> <Card />
      <Button
        title="Small Button"
        styles="text-sm rounded-sm bg-blue-500 text-white"
      />
      <Button
        title="Medium Button"
        styles="text-md rounded-md bg-green-500 text-white"
      />
      <Button
        title="Large Button"
        styles="text-lg rounded-full bg-red-500 text-white"
      />
    </div>
  );
};
export default Landing;
