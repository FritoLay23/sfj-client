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
    </div>
  );
};
export default BranchList;
