import ParentC from './ParentC';

const FamilyC = ({info}) => {
//    console.log(info)
  return (
    <div className="family">
     <ParentC parentInfo={info} />
    </div>
  );
}

export default FamilyC;