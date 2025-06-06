# Energy Alert App - React Native

## Descrição do Projeto

O **Energy Alert App** é um aplicativo móvel desenvolvido com React Native que permite aos usuários registrar e visualizar eventos relacionados a quedas de energia causadas por eventos naturais, como chuvas intensas, ventos ou deslizamentos de terra. O objetivo principal é fornecer uma plataforma para monitorar interrupções no fornecimento de energia, enquanto ajuda as autoridades e os cidadãos a reagirem de forma eficiente durante apagões.

Este projeto integra conceitos de **Monitoramento de Consumo de Energia**, **Gestão de Falhas Elétricas** e **Recomendações Preventivas**, utilizando tecnologias como **React Native** e **AsyncStorage** para persistência local dos dados.

## Funcionalidades

O aplicativo contém 5 telas principais, cada uma com a seguinte funcionalidade:

1. **Panorama Geral**: Exibe um resumo dos eventos registrados pelo usuário, incluindo as informações sobre as interrupções de energia.
2. **Localização Atingida**: Permite o cadastro e visualização das regiões afetadas, como bairro, cidade ou CEP.
3. **Tempo de Interrupção**: Registra e exibe o tempo estimado ou real da interrupção de energia em uma região.
4. **Prejuízos Causados**: Permite que o usuário descreva os prejuízos observados devido à falta de energia, como residências e estabelecimentos afetados.
5. **Recomendações**: Exibe orientações preventivas sobre como lidar com quedas de energia e como se preparar para futuros apagões.

## Tecnologias Utilizadas

- **React Native**: Para o desenvolvimento do aplicativo móvel.
- **AsyncStorage**: Para persistência de dados locais no dispositivo do usuário.
- **React Navigation**: Para navegação entre as telas do aplicativo.
- **JavaScript/TypeScript**: Para a lógica do aplicativo.
- **CSS/Styles**: Para o layout e estilos das telas.


## Como Rodar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/usuario/energy-alert-app.git
   cd energy-alert-app
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Para rodar o aplicativo:

   ```bash
   npx expo start
   ```

## Instruções para Uso

1. **Tela de Panorama Geral**:  
   Nesta tela, você verá um resumo das quedas de energia registradas. Você pode visualizar os eventos anteriores, incluindo informações detalhadas sobre cada interrupção de energia.

2. **Tela de Localização Atingida**:  
   Esta tela permite que você cadastre e visualize as regiões afetadas pela falta de energia. Você deve fornecer informações sobre o bairro, cidade ou CEP da área impactada.

3. **Tela de Tempo de Interrupção**:  
   Registre o tempo estimado ou real da interrupção de energia nesta tela. O tempo pode ser adicionado manualmente para cada evento, permitindo o acompanhamento da duração da falta de energia.

4. **Tela de Prejuízos Causados**:  
   Nesta tela, você poderá descrever os danos observados devido à falta de energia, como residências e estabelecimentos afetados. Essa informação pode ser útil para análise posterior dos impactos das quedas de energia.

5. **Tela de Recomendações**:  
   A tela de recomendações fornece orientações preventivas e boas práticas para lidar com eventos de falta de energia. Ela inclui dicas sobre como se preparar para apagões e como minimizar os impactos de eventos climáticos extremos.


### Navegação

- O aplicativo possui uma navegação simples e fluida entre as telas, permitindo que o usuário acesse rapidamente as informações registradas e forneça novos dados sobre eventos de falta de energia.
  
- Para registrar um novo evento, basta acessar as telas correspondentes (Localização Atingida, Tempo de Interrupção e Prejuízos Causados) e preencher os campos necessários.
  
- O fluxo de navegação entre as telas é intuitivo e o aplicativo preserva os dados localmente usando o **AsyncStorage**, permitindo que as informações sejam armazenadas e recuperadas a qualquer momento.

### Telas

![image](https://github.com/user-attachments/assets/34dd467e-00a0-43c4-95e4-7837158b51b2)


![image](https://github.com/user-attachments/assets/be553092-6af3-4ec5-a929-aecc11045aef)


![image](https://github.com/user-attachments/assets/cde0ff27-b789-47d7-8b70-0b02f069378a)


![image](https://github.com/user-attachments/assets/665a906e-0aea-4c86-9882-42cab8817e73)


![image](https://github.com/user-attachments/assets/e8e57981-9b78-45e3-b8ff-86ca9e7fc9c8)


![image](https://github.com/user-attachments/assets/e6b5c71b-d317-4df5-bb1c-de05f4903df6)


---

## Integrantes

Aline Fernandes Zeppelini - RM97966

Camilly Breitbach Ishida - RM551474

Julia Leite Galvão - RM550201



