interface myTypes {
  number: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function PageHeader({number, title, description, children}:myTypes){
  return(
    <div className="page-header">
      <header>
        <div className="hdr-left">
          <h6>{number}</h6>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="hdr-right">
          {children}
        </div>
      </header>
    </div>
  );
}

// const PageHeader1 = function(){}
// const PageHeader2 = () => {}