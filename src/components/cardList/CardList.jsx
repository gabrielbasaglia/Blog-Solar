import { Pagination } from "../pagination/Pagination";
import { Card } from "../card/Card";

export const CardList = () => {
  return (
    <div className="flex-5 mt-12 max-w-3xl">
      <h1 className="font-bold text-2xl capitalize">Mais recentes</h1>
      <div className="mt-6">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};
