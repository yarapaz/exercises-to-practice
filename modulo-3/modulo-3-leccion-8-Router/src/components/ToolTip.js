import '../styles/ToolTip.scss';

function ToolTip(props) {
  console.log(props);
  //   const handleHover = () => {
  //     const
  //       return (
  //       props.children =
  //         <h4>Hola</h4>
  //         <p>¿Necesitas ayuda?</p>

  //     );
  //   };
  return <section className='ToolTip'>{props.children}</section>;
}

export default ToolTip;
