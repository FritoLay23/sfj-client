import { imgs, branches } from "../data";
import BranchCardC from "./BranchCard.c";

const [
  imgCiencia,
  imgDeportes,
  imgFilosofia,
  imgGeografia,
  imgHistoria,
  imgLiteratura,
  imgTecnologia,
] = imgs;

const BranchList = () => {
  return (
    <div className="cont_cardBranch">
      {/* branch Link Ciencia */}
      <BranchCardC
        branch={branches.ciencia}
        src={imgCiencia}
        alt={`branch ${branches.ciencia}`}
      />
      {/* branch Link Deportes */}
      <BranchCardC
        branch={branches.deportes}
        src={imgDeportes}
        alt={`branch ${branches.deportes}`}
      />
      {/* branch Link Filosofia */}
      <BranchCardC
        branch={branches.filosofia}
        src={imgFilosofia}
        alt={`branch ${branches.filosofia}`}
      />
      {/* branch Link Geografia */}
      <BranchCardC
        branch={branches.geografia}
        src={imgGeografia}
        alt={`branch ${branches.geografia}`}
      />
      {/* branch Link Historia */}
      <BranchCardC
        branch={branches.historia}
        src={imgHistoria}
        alt={`branch ${branches.historia}`}
      />
      {/* branch Link Literatura */}
      <BranchCardC
        branch={branches.literatura}
        src={imgLiteratura}
        alt={`branch ${branches.literatura}`}
      />
      {/* branch Link Tecnologia */}
      <BranchCardC
        branch={branches.tecnologia}
        src={imgTecnologia}
        alt={`branch ${branches.tecnologia}`}
      />
    </div>
  );
};
export default BranchList;
