import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import logo from './logo.svg';
import { SvgXml } from 'react-native-svg';

const Header = () => {


  return (
    <SafeAreaView style={{ backgroundColor: "#191920" }}>
      <Logo />
      <Text style={{ color: "red" }}>Header</Text>
    </SafeAreaView>
  );
}


const Logo = () => {

  const logo = `<svg width="276px" height="36px" viewBox="0 0 276 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- Generator: Sketch 55.2 (78181) - https://sketchapp.com -->
  <title>Logo</title>
  <desc>Created with Sketch.</desc>
  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="Home" transform="translate(-250.000000, -50.000000)" fill="#FFFFFF" fill-rule="nonzero">
          <g id="Logo" transform="translate(250.000000, 50.000000)">
              <g id="noun_Running_1473810" transform="translate(224.890323, 0.000000)">
                  <g id="Group">
                      <path d="M17.6410822,30.9272727 C17.6410822,30.4363636 17.3113424,30.1090909 16.8167326,30.1090909 L2.47304891,30.1090909 C1.97843913,30.1090909 1.64869927,30.4363636 1.64869927,30.9272727 C1.64869927,31.4181818 1.97843913,31.7454545 2.47304891,31.7454545 L16.8167326,31.7454545 C17.3113424,31.7454545 17.6410822,31.3363636 17.6410822,30.9272727 Z" id="Path"></path>
                      <path d="M5.77044745,34.2 L4.12174818,34.2 C3.6271384,34.2 3.29739854,34.5272727 3.29739854,35.0181818 C3.29739854,35.5090909 3.6271384,35.8363636 4.12174818,35.8363636 L5.77044745,35.8363636 C6.26505723,35.8363636 6.59479709,35.5090909 6.59479709,35.0181818 C6.59479709,34.5272727 6.26505723,34.2 5.77044745,34.2 Z" id="Path"></path>
                      <path d="M9.64489074,26.8363636 C9.64489074,26.3454545 9.31515088,26.0181818 8.8205411,26.0181818 L0.824349636,26.0181818 C0.329739854,26.0181818 0,26.3454545 0,26.8363636 C0,27.3272727 0.329739854,27.6545455 0.824349636,27.6545455 L8.8205411,27.6545455 C9.31515088,27.6545455 9.64489074,27.2454545 9.64489074,26.8363636 Z" id="Path"></path>
                      <path d="M50.6150676,28.2272727 C50.3677627,27.7363636 49.873153,27.3272727 49.3785432,27.0818182 L43.113486,24.7090909 L43.113486,24.7090909 L43.113486,24.7090909 L40.5580021,23.8090909 C39.8160874,23.4818182 39.1566077,22.9909091 38.7444329,22.3363636 L36.6011238,18.8181818 C37.0132986,18.7363636 37.2606035,18.4090909 37.2606035,18 C37.2606035,17.5090909 36.9308637,17.1818182 36.4362539,17.1818182 L35.6119043,17.1818182 L34.6226847,15.5454545 C35.0348595,15.4636364 35.2821644,15.1363636 35.2821644,14.7272727 C35.2821644,14.2363636 34.9524246,13.9090909 34.4578148,13.9090909 L33.6334651,13.9090909 L32.8091155,12.6 C33.1388554,12.5181818 33.3861602,12.1909091 33.3861602,11.8636364 C33.3861602,11.3727273 33.0564204,11.0454545 32.5618106,11.0454545 L31.8198959,11.0454545 L30.7482414,9.32727273 C30.7482414,9.32727273 30.7482414,9.24545455 30.6658065,9.24545455 C29.6765869,8.1 28.3576275,7.52727273 26.9562331,7.69090909 C25.7197086,7.85454545 24.7304891,8.59090909 24.3183143,9.49090909 C24.2358793,9.73636364 24.2358793,9.98181818 24.4007492,10.2272727 L31.2428512,21.8454545 C31.3252862,22.0090909 31.4901561,22.1727273 31.655026,22.1727273 L40.0633923,25.3636364 L40.1458273,25.3636364 L42.6188762,26.2636364 L42.6188762,26.2636364 L42.6188762,26.2636364 L42.6188762,26.2636364 L42.6188762,26.2636364 L42.6188762,26.2636364 L48.8014984,28.6363636 C48.9663684,28.7181818 49.1312383,28.8 49.2136733,29.0454545 C49.5434131,29.7 49.5434131,30.3545455 49.1312383,31.0090909 L35.6943392,31.0090909 C34.8699896,31.0090909 34.04564,30.7636364 33.3861602,30.2727273 L10.3868054,13.3363636 C10.3868054,13.3363636 10.7165453,13.1727273 11.1287201,12.6 C11.5408949,12.0272727 11.7057648,11.2909091 11.7057648,10.5545455 L10.9638502,3.68181818 L11.9530697,2.12727273 C12.2003746,1.8 12.6949844,1.71818182 13.0247242,1.96363636 C13.2720291,2.20909091 14.2612487,3.02727273 16.6518626,6.87272727 C17.8883871,8.67272727 19.8668262,9.98181818 22.0925702,10.3090909 C22.5047451,10.3909091 22.9993548,10.0636364 23.0817898,9.65454545 C23.1642248,9.24545455 22.8344849,8.75454545 22.4223101,8.67272727 C20.6911759,8.34545455 19.0424766,7.36363636 18.053257,5.89090909 C15.1680333,1.47272727 14.3436837,0.818181818 14.0139438,0.572727273 C12.9422893,-0.163636364 11.4584599,0.0818181818 10.6341103,1.14545455 L5.60557752,9.08181818 C5.27583767,9.57272727 5.19340271,10.1454545 5.27583767,10.7181818 C4.78122789,10.8818182 4.28661811,11.1272727 4.03931322,11.6181818 L2.7203538,13.6636364 C1.97843913,14.7272727 2.30817898,16.2 3.37983351,16.9363636 C4.12174818,17.5090909 5.68801249,18.4909091 7.99619147,19.9636364 C8.16106139,20.0454545 8.32593132,20.1272727 8.40836629,20.1272727 C8.65567118,20.1272727 8.90297607,19.9636364 9.06784599,19.7181818 C9.31515088,19.3090909 9.23271592,18.8181818 8.8205411,18.5727273 C6.59479709,17.1 5.02853278,16.1181818 4.28661811,15.5454545 C3.95687825,15.3 3.87444329,14.8909091 4.12174818,14.4818182 L5.35827263,12.6 C5.60557752,12.2727273 6.1001873,12.1909091 6.42992716,12.4363636 L6.42992716,12.4363636 L32.3145057,31.5818182 C33.3037253,32.3181818 34.4578148,32.6454545 35.6119043,32.6454545 L46.9879292,32.6454545 C45.256795,33.4636364 42.8661811,34.2 40.805307,34.2 L40.805307,34.2 L37.9200832,34.2 L35.5294693,34.2 L35.5294693,34.2 C34.1280749,34.2 32.7266805,33.7909091 31.5725911,33.0545455 C26.7913632,30.0272727 17.8883871,24.3818182 11.376025,20.2090909 C10.9638502,19.9636364 10.4692404,20.0454545 10.2219355,20.4545455 C9.97463059,20.8636364 10.0570656,21.3545455 10.4692404,21.6 C16.8167326,25.6909091 25.4724037,31.1727273 30.3360666,34.2818182 L9.06784599,34.2818182 C8.57323621,34.2818182 8.24349636,34.6090909 8.24349636,35.1 C8.24349636,35.5909091 8.57323621,35.9181818 9.06784599,35.9181818 L35.5294693,35.9181818 L35.5294693,35.9181818 L37.9200832,35.9181818 L40.722872,35.9181818 L40.722872,35.9181818 C44.1027055,35.9181818 48.9663684,34.1181818 50.2028928,32.4 C51.2745473,30.9272727 51.3569823,29.5363636 50.6150676,28.2272727 Z M32.3969407,20.8636364 L25.9670135,9.98181818 C26.2143184,9.73636364 26.6264932,9.49090909 27.121103,9.40909091 C27.6157128,9.32727273 28.5224974,9.40909091 29.346847,10.3090909 L29.8414568,11.1272727 L29.0995421,11.1272727 C28.6049324,11.1272727 28.2751925,11.4545455 28.2751925,11.9454545 C28.2751925,12.4363636 28.6049324,12.7636364 29.0995421,12.7636364 L30.8306764,12.7636364 L31.655026,14.0727273 L30.9955463,14.0727273 C30.5009365,14.0727273 30.1711967,14.4 30.1711967,14.8909091 C30.1711967,15.3818182 30.5009365,15.7090909 30.9955463,15.7090909 L32.6442456,15.7090909 L33.6334651,17.2636364 L32.9739854,17.2636364 C32.4793757,17.2636364 32.1496358,17.5909091 32.1496358,18.0818182 C32.1496358,18.5727273 32.4793757,18.9 32.9739854,18.9 L34.6226847,18.9 L36.9308637,22.5 L32.3969407,20.8636364 Z M7.0069719,9.98181818 L9.56245578,5.97272727 L10.0570656,10.7181818 C10.0570656,11.0454545 9.97463059,11.3727273 9.80976067,11.6181818 C9.64489074,11.8636364 9.31515088,12.5181818 8.57323621,11.9454545 C8.57323621,11.9454545 8.16106139,11.7 7.41914672,11.1272727 C6.92453694,10.7181818 6.84210198,10.3090909 7.0069719,9.98181818 Z" id="Shape"></path>
                  </g>
              </g>
              <path d="M8.48144531,27.4707031 L5.69824219,27.4707031 L5.69824219,35 L0.556640625,35 L0.556640625,13.671875 L8.95019531,13.671875 C11.4795048,13.671875 13.4570241,14.2333928 14.8828125,15.3564453 C16.3086009,16.4794978 17.0214844,18.066396 17.0214844,20.1171875 C17.0214844,21.6015699 16.7211944,22.8320264 16.1206055,23.8085938 C15.5200165,24.7851611 14.5800845,25.5761688 13.3007812,26.1816406 L17.7539062,34.7802734 L17.7539062,35 L12.2460938,35 L8.48144531,27.4707031 Z M5.69824219,23.5009766 L8.95019531,23.5009766 C9.9267627,23.5009766 10.6616186,23.2446315 11.1547852,22.7319336 C11.6479517,22.2192357 11.8945312,21.5039108 11.8945312,20.5859375 C11.8945312,19.6679642 11.6455103,18.9477565 11.1474609,18.425293 C10.6494116,17.9028294 9.91699702,17.6416016 8.95019531,17.6416016 L5.69824219,17.6416016 L5.69824219,23.5009766 Z M38.1884766,24.7753906 C38.1884766,26.8554792 37.8027382,28.6962811 37.03125,30.2978516 C36.2597618,31.8994221 35.1635813,33.1323199 33.7426758,33.996582 C32.3217702,34.8608442 30.7031341,35.2929688 28.8867188,35.2929688 C27.0703034,35.2929688 25.4589914,34.8754925 24.0527344,34.0405273 C22.6464773,33.2055622 21.5502969,32.0117265 20.7641602,30.4589844 C19.9780234,28.9062422 19.5654299,27.1240335 19.5263672,25.1123047 L19.5263672,23.9111328 C19.5263672,21.8212786 19.9096641,19.9780353 20.6762695,18.3813477 C21.4428749,16.78466 22.5414968,15.5517622 23.972168,14.6826172 C25.4028392,13.8134722 27.0312409,13.3789062 28.8574219,13.3789062 C30.6640715,13.3789062 32.2753835,13.8085895 33.6914062,14.6679688 C35.107429,15.527348 36.2084922,16.7504803 36.9946289,18.3374023 C37.7807656,19.9243243 38.1787109,21.7431538 38.1884766,23.7939453 L38.1884766,24.7753906 Z M32.9589844,23.8818359 C32.9589844,21.7626847 32.604984,20.1538141 31.8969727,19.0551758 C31.1889613,17.9565375 30.1757878,17.4072266 28.8574219,17.4072266 C26.279284,17.4072266 24.9169929,19.340801 24.7705078,23.2080078 L24.7558594,24.7753906 C24.7558594,26.8652448 25.1025356,28.4716741 25.7958984,29.5947266 C26.4892613,30.7177791 27.5195244,31.2792969 28.8867188,31.2792969 C30.1855534,31.2792969 31.1865199,30.7275446 31.8896484,29.6240234 C32.592777,28.5205023 32.9492187,26.9336041 32.9589844,24.8632812 L32.9589844,23.8818359 Z M58.0957031,27.7783203 C58.0273434,29.2627027 57.6269568,30.5737248 56.8945312,31.7114258 C56.1621057,32.8491268 55.134284,33.7304656 53.8110352,34.3554688 C52.4877864,34.9804719 50.976571,35.2929688 49.2773438,35.2929688 C46.4745954,35.2929688 44.2675862,34.3798919 42.65625,32.5537109 C41.0449138,30.7275299 40.2392578,28.1494307 40.2392578,24.8193359 L40.2392578,23.7646484 C40.2392578,21.6747942 40.6030237,19.8461992 41.3305664,18.2788086 C42.0581091,16.7114179 43.1054619,15.5004926 44.4726562,14.6459961 C45.8398506,13.7914996 47.421866,13.3642578 49.21875,13.3642578 C51.8066536,13.3642578 53.8867109,14.0454033 55.4589844,15.4077148 C57.0312579,16.7700263 57.9248036,18.647449 58.1396484,21.0400391 L53.0126953,21.0400391 C52.9736326,19.7412044 52.6464875,18.8085966 52.03125,18.2421875 C51.4160125,17.6757784 50.4785219,17.3925781 49.21875,17.3925781 C47.9394467,17.3925781 47.0019561,17.871089 46.40625,18.828125 C45.8105439,19.785161 45.498047,21.3134661 45.46875,23.4130859 L45.46875,24.921875 C45.46875,27.197277 45.7543917,28.8232373 46.3256836,29.7998047 C46.8969755,30.7763721 47.8808524,31.2646484 49.2773438,31.2646484 C50.4589903,31.2646484 51.3623016,30.9863309 51.9873047,30.4296875 C52.6123078,29.8730441 52.9443357,28.9892639 52.9833984,27.7783203 L58.0957031,27.7783203 Z M67.7783203,27.0605469 L65.6689453,29.375 L65.6689453,35 L60.5273438,35 L60.5273438,13.671875 L65.6689453,13.671875 L65.6689453,23.0761719 L67.4560547,20.3662109 L72.0556641,13.671875 L78.4130859,13.671875 L71.2060547,23.1054688 L78.4130859,35 L72.3193359,35 L67.7783203,27.0605469 Z M92.9443359,25.9619141 L84.8583984,25.9619141 L84.8583984,31.0449219 L94.4091797,31.0449219 L94.4091797,35 L79.7167969,35 L79.7167969,13.671875 L94.4384766,13.671875 L94.4384766,17.6416016 L84.8583984,17.6416016 L84.8583984,22.1386719 L92.9443359,22.1386719 L92.9443359,25.9619141 Z M113.540039,17.6416016 L107.138672,17.6416016 L107.138672,35 L101.99707,35 L101.99707,17.6416016 L95.7128906,17.6416016 L95.7128906,13.671875 L113.540039,13.671875 L113.540039,17.6416016 Z M126.474609,29.3310547 C126.474609,28.5790978 126.208499,27.9931662 125.67627,27.5732422 C125.14404,27.1533182 124.208991,26.7187522 122.871094,26.2695312 C121.533196,25.8203103 120.439457,25.3857443 119.589844,24.9658203 C116.826158,23.6083917 115.444336,21.7431759 115.444336,19.3701172 C115.444336,18.1884707 115.788571,17.1460006 116.477051,16.2426758 C117.165531,15.339351 118.139642,14.636233 119.399414,14.1333008 C120.659186,13.6303686 122.075187,13.3789062 123.647461,13.3789062 C125.180672,13.3789062 126.55517,13.652341 127.770996,14.1992188 C128.986822,14.7460965 129.931637,15.5248973 130.605469,16.5356445 C131.2793,17.5463918 131.616211,18.7011654 131.616211,20 L126.489258,20 C126.489258,19.130855 126.223147,18.4570336 125.690918,17.9785156 C125.158689,17.4999976 124.438481,17.2607422 123.530273,17.2607422 C122.6123,17.2607422 121.88721,17.4633769 121.35498,17.8686523 C120.822751,18.2739278 120.556641,18.7890594 120.556641,19.4140625 C120.556641,19.9609402 120.849606,20.4565407 121.435547,20.9008789 C122.021487,21.3452171 123.05175,21.8041969 124.526367,22.277832 C126.000984,22.7514672 127.211909,23.261716 128.15918,23.8085938 C130.463879,25.1367254 131.616211,26.9677618 131.616211,29.3017578 C131.616211,31.1670015 130.913093,32.6318306 129.506836,33.6962891 C128.100579,34.7607475 126.171887,35.2929688 123.720703,35.2929688 C121.992179,35.2929688 120.427253,34.9829133 119.025879,34.362793 C117.624505,33.7426727 116.569828,32.8930718 115.861816,31.8139648 C115.153805,30.7348579 114.799805,29.4921945 114.799805,28.0859375 L119.956055,28.0859375 C119.956055,29.2285213 120.251462,30.0707981 120.842285,30.612793 C121.433108,31.1547879 122.392571,31.4257812 123.720703,31.4257812 C124.570317,31.4257812 125.241697,31.2426776 125.734863,30.8764648 C126.22803,30.5102521 126.474609,29.9951205 126.474609,29.3310547 Z M152.080078,35 L146.967773,35 L146.967773,26.09375 L139.394531,26.09375 L139.394531,35 L134.25293,35 L134.25293,13.671875 L139.394531,13.671875 L139.394531,22.1386719 L146.967773,22.1386719 L146.967773,13.671875 L152.080078,13.671875 L152.080078,35 Z M173.393555,24.7753906 C173.393555,26.8554792 173.007816,28.6962811 172.236328,30.2978516 C171.46484,31.8994221 170.368659,33.1323199 168.947754,33.996582 C167.526848,34.8608442 165.908212,35.2929688 164.091797,35.2929688 C162.275382,35.2929688 160.66407,34.8754925 159.257812,34.0405273 C157.851555,33.2055622 156.755375,32.0117265 155.969238,30.4589844 C155.183102,28.9062422 154.770508,27.1240335 154.731445,25.1123047 L154.731445,23.9111328 C154.731445,21.8212786 155.114742,19.9780353 155.881348,18.3813477 C156.647953,16.78466 157.746575,15.5517622 159.177246,14.6826172 C160.607917,13.8134722 162.236319,13.3789062 164.0625,13.3789062 C165.86915,13.3789062 167.480462,13.8085895 168.896484,14.6679688 C170.312507,15.527348 171.41357,16.7504803 172.199707,18.3374023 C172.985844,19.9243243 173.383789,21.7431538 173.393555,23.7939453 L173.393555,24.7753906 Z M168.164062,23.8818359 C168.164062,21.7626847 167.810062,20.1538141 167.102051,19.0551758 C166.394039,17.9565375 165.380866,17.4072266 164.0625,17.4072266 C161.484362,17.4072266 160.122071,19.340801 159.975586,23.2080078 L159.960938,24.7753906 C159.960938,26.8652448 160.307614,28.4716741 161.000977,29.5947266 C161.694339,30.7177791 162.724603,31.2792969 164.091797,31.2792969 C165.390631,31.2792969 166.391598,30.7275446 167.094727,29.6240234 C167.797855,28.5205023 168.154297,26.9336041 168.164062,24.8632812 L168.164062,23.8818359 Z M189.272461,25.9619141 L181.186523,25.9619141 L181.186523,31.0449219 L190.737305,31.0449219 L190.737305,35 L176.044922,35 L176.044922,13.671875 L190.766602,13.671875 L190.766602,17.6416016 L181.186523,17.6416016 L181.186523,22.1386719 L189.272461,22.1386719 L189.272461,25.9619141 Z M203.833008,29.3310547 C203.833008,28.5790978 203.566897,27.9931662 203.034668,27.5732422 C202.502439,27.1533182 201.56739,26.7187522 200.229492,26.2695312 C198.891595,25.8203103 197.797856,25.3857443 196.948242,24.9658203 C194.184556,23.6083917 192.802734,21.7431759 192.802734,19.3701172 C192.802734,18.1884707 193.146969,17.1460006 193.835449,16.2426758 C194.523929,15.339351 195.498041,14.636233 196.757812,14.1333008 C198.017584,13.6303686 199.433586,13.3789062 201.005859,13.3789062 C202.53907,13.3789062 203.913568,13.652341 205.129395,14.1992188 C206.345221,14.7460965 207.290036,15.5248973 207.963867,16.5356445 C208.637699,17.5463918 208.974609,18.7011654 208.974609,20 L203.847656,20 C203.847656,19.130855 203.581546,18.4570336 203.049316,17.9785156 C202.517087,17.4999976 201.79688,17.2607422 200.888672,17.2607422 C199.970699,17.2607422 199.245608,17.4633769 198.713379,17.8686523 C198.18115,18.2739278 197.915039,18.7890594 197.915039,19.4140625 C197.915039,19.9609402 198.208005,20.4565407 198.793945,20.9008789 C199.379886,21.3452171 200.410149,21.8041969 201.884766,22.277832 C203.359382,22.7514672 204.570308,23.261716 205.517578,23.8085938 C207.822277,25.1367254 208.974609,26.9677618 208.974609,29.3017578 C208.974609,31.1670015 208.271491,32.6318306 206.865234,33.6962891 C205.458977,34.7607475 203.530286,35.2929688 201.079102,35.2929688 C199.350577,35.2929688 197.785652,34.9829133 196.384277,34.362793 C194.982903,33.7426727 193.928226,32.8930718 193.220215,31.8139648 C192.512203,30.7348579 192.158203,29.4921945 192.158203,28.0859375 L197.314453,28.0859375 C197.314453,29.2285213 197.60986,30.0707981 198.200684,30.612793 C198.791507,31.1547879 199.75097,31.4257812 201.079102,31.4257812 C201.928715,31.4257812 202.600095,31.2426776 203.093262,30.8764648 C203.586428,30.5102521 203.833008,29.9951205 203.833008,29.3310547 Z" id="ROCKETSHOES"></path>
          </g>
      </g>
  </g>
</svg>`

  return <SvgXml xml={logo} width="200px" />
}
export { Header }