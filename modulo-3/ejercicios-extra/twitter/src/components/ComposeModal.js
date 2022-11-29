import '../styles/components/ComposeModal.scss';

function ComposeModal(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
    props.handleSubmit();
  };

  const handleToggle = () => {
    props.handleToggle();
  };

  const handleComposeText = (ev) => {
    props.handleComposeText(ev.target.value);
  };

  const isButtonDisabled = props.composeText.length === 0;

  return (
    <div className='compose__modal-overlay'>
      <form action='' onSubmit={handleSubmit}>
        <div className='compose__modal-wrapper'>
          <div className='compose__modal-header'>
            <button className='compose__modal-close-btn' onClick={handleToggle}>
              Cerrar
            </button>
          </div>
          <div className='compose__modal-content'>
            <img
              className='compose__profile-logo'
              src={props.adalabLogo}
              alt='Logo de Adalab'
            />
            <textarea
              className='compose__profile-textarea'
              placeholder='¿Qué está pasando?'
              value={props.composeText}
              onChange={handleComposeText}
            />
          </div>
          <div className='compose__modal-footer'>
            <button
              className='compose__modal-tweet-btn'
              disabled={isButtonDisabled}
            >
              Twittear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ComposeModal;
