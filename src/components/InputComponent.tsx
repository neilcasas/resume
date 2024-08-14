interface InputComponentProps {
    title: string;
    id: string;
    type: "text"|"email"|"number"|"date";
    placeholder: string;
}

function InputComponent(props: InputComponentProps) {
    return (  
    <div className="mb-3">
        <label htmlFor={props.id} className="form-label">{props.title}</label>
        <input type={props.type} className="form-control" id={props.id} placeholder={props.placeholder}/>
    </div>
    )
}

export default InputComponent;