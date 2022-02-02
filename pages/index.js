import appConfig from '../config.json';
import React from 'react';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import { useRouter } from 'next/router';



function Titulo(props) {
  const Tag = props.tag;
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
                ${Tag} {
                  color: #F5CC00;
                  letter-spacing: 4px;
                  font-size: 55px;
                  font-weigth: 600;
                  text-shadow: 0px 0px 8px yellow,
                                0px 0px 12px yellow,
                                0px 0px 18px yellow,
                                0px 0px 2px #fff,
                                0px 0px 4px #fff;
                }
            `}</style>
    </>
  );
}


export default function PaginaInicial() {

  const [username, setUsername] = React.useState('');
  const roteamento = useRouter();

  return (
    <>
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundImage: 'url(https://img.wallpapersafari.com/desktop/1680/1050/43/76/3PjCvN.jpg)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          height: '100vh'
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: '#002966',
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (event) {
              event.preventDefault();
              roteamento.push(`/chat?username=${username}`);
            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Titulo tag="h2">BELLO!</Titulo>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[400] }}>
              {appConfig.name}
            </Text>

            <TextField
             placeholder="Insira o seu usuário do github aqui..."
              value={username}
              onChange={function handler(event) {
                // Onde ta o valor?
                const nome = event.target.value;

                // Trocar o valor da variavel
                if (nome.length > 2) { setUsername(nome); }
                setUsername(nome);
              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: '##000814',
                  mainColorHighlight: '#FFD60A',
                  backgroundColor: '#003566',
                },
              }}
            />
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: '#FFD60A',
                mainColorLight: '#FFD60A',
                mainColorStrong: '#FFC300',
              }}
            />
          </Box>
          {/* Formulário */}
          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '220px',
              padding: '16px',
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}

              src={username.length > 2 ? `https://github.com/${username}.png` : `https://thumbs.gfycat.com/RevolvingFatalIlladopsis-size_restricted.gif`}
            />
            

              {username.length > 2 ? <Text
                                      variant="body4"
                                      styleSheet={{
                                        color: appConfig.theme.colors.neutrals[400],
                                        backgroundColor: '#FFCB1F',
                                        boxShadow: '0 0 20px #FFD60A',
                                        padding: '3px 10px',
                                        borderRadius: '10%'
                                                   }} >
                                                {username}
                                              </Text>
            
                                               :
          
                                                ``
                                                  }
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}