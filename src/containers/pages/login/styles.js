import styled from 'styled-components'

export const LoginContainer = styled.div`
  background: rgb(205, 255, 244);
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1em 2em;
  box-shadow: 5px 6px 8px 5px #000000;

  .title_head {
    text-align: center;
    font-size: 1.5em;
    font-weight: bold;
    margin: 0.8em 1em 1.3em;
  }

  .username_section {
    margin: 0 1.5em 2em;
  }

  .password_section {
    margin: 0em 0 1.5em;
  }

  .username_label {
    margin: 5px;
    font-size: 14px;
  }

  .password_label {
    margin: 5px;
    font-size: 14px;
  }

  .password_input {
    border: 1px solid;
  }

  .username_input {
    border: 1px solid;
  }

  .submit_button {
    cursor: pointer;
  }

	@media screen and (max-width: 767px) {

	
	}
`