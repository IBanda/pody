import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html{
  height:100%;
}
*{
  box-sizing:border-box;
}
body{
  height:inherit;
  margin:0;
  font-family: 'Montserrat', sans-serif !important;
  color: #74767b;
  &.light{
      background-color:#fff;
    .theme-toggler{
      background-color: #eaeaea;
      .toggle{
        transform:translateX(2px)
      }
    }

    }

  &.dark{
      background-color:#011627;
      .theme-toggler{
        background-color: #70e000;
      .toggle{
        transform:translateX(30px)
      }
    }
    .modal-cstbody,.modal-header{
      background-color:#011627;
      color: #bfc0c5;
      button.close{
          color:#fff;
        }
      .episodes{
      button{
        background-color:transparent;
        &,p{
        color:#bfc0c5;
        }
     
      }
      }
    }
  }
}
button{
  &:focus{
    outline:none;
  }
}
#root{
  height:100%;
}
.rhap_container{
  background: transparent;
    border: none;
    box-shadow: none;
    outline:none;
    .rhap_main-controls-button{
      color:#eee;
      outline:none;
    }
    .rhap_progress-bar{
      outline:none;
    }
    .rhap_progress-indicator{
      background-color:#c70039;
    }
    .rhap_progress-filled{
      background-color:#0e49b5;
    }
    .rhap_time{
      color:#fff;
    }
  
}

`;

export default GlobalStyle;
