import { Button } from "../ui/button";

export const Pagination = () => {
  return (
    <div className="flex justify-between">
      <Button variant="destructive">Anterior</Button>
      <Button variant="destructive">Próximo</Button>
    </div>
  );
};
