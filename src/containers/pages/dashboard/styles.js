import styled from 'styled-components'

export const MainContainer = styled.div`

  background:#1d5954;
  padding: 2%;

  .info_section {
    height: 50px;
    border: 1px solid green;
    margin: 6px;
    padding: 8px;
    border-radius: 9px;
    background: #cdfff4;
  }
  
  .logout_button {
    padding: 5px;
    width: 5em;
    border: 1px solid;
    margin: 0 7px  5px auto;
    background: #0f342c;
    color: white;
    cursor: pointer;
  }

  .info_container {
    vertical-align: top;
    display: inline-block;
    text-align: left;
    width: 68%;
    margin-left: 2%;
    font-size: 14px
  }


  .image_container {
    display: inline-block;
    width: 30%;
    text-align: right;
    >img {
      margin-right: 10px;
      border-radius: 25px;
    }
  }

  .scroll_top {
    position: fixed;
    bottom: 1.1em;
    right: 2%;
    padding: 5px;
    width: 7em;
    font-size: 15px;
    border: 1px solid;
    margin: 0 7px  5px auto;
    background: #0f342c;
    color: white;
    cursor: pointer;
  }

`