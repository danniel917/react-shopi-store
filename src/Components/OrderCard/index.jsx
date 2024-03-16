import { CloseIcon } from "../CloseIcon";

function OrderCard(props) {
  const { id, title, price, image, handleDelete } = props;
  let renderCloseIcon

  if(handleDelete){
    renderCloseIcon = <CloseIcon />
  }

  return (
    <div className="flex justify-between items-center py-6">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={image}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-bold">${price}</p>
        <div className="cursor-pointer" onClick={()=>{
          handleDelete(id)
        }}>
          {renderCloseIcon}
        </div>
      </div>
      
    </div>
  );
}

export { OrderCard };
