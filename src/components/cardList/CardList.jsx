import { Pagination } from "../pagination/Pagination";
import { Card } from "../card/Card";

export const CardList = () => {
  return (
    <div className="flex-5 mt-10 max-w-3xl">
      <h1 className="font-bold text-2xl capitalize">Mais recentes</h1>
      <div className="mt-6 max-w-5xl">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};
