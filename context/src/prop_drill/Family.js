import Parent from './Parent';

const Family = ({info}) => {
//    console.log(info)
  return (
    <div className="family">
     <Parent parentInfo={info} />
    </div>
  );
}

export default Family;