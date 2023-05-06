import { useState } from 'react';

export function Avatar({ styleDiv, styleIMG, imgLink, altTXT }) {
  return (
    <div className={styleDiv}>
      <img src={imgLink} className={styleIMG} alt={altTXT} />
    </div>
  );
}

export function Repire({ style, height, width }) {
  return (

    <svg
      className={style}
      height={`${height}px`}
      width={`${width}px`}
      version="1.1"
      viewBox="0 0 81.159 81.159"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="M74.175,5.262c-1.068-1.069-2.527-1.659-4.107-1.659c-1.775,0-3.563,0.748-4.934,2.058l-5.884,4.776l-0.229,0.208
        c-1.301,1.299-1.813,3.124-1.498,4.962L43.806,28.926l-2.302-1.992c1.65-6.453,1.447-15.049-4.118-20.614
        C33.311,2.245,28.097,0,22.706,0c-2.143,0-4.261,0.358-6.296,1.063c-0.932,0.323-1.646,1.083-1.909,2.034s-0.042,1.969,0.59,2.726
        l7.393,8.836l-0.364,5.683l-6.144,0.701l-8.771-7.338c-0.757-0.634-1.776-0.855-2.727-0.59c-0.951,0.264-1.711,0.978-2.034,1.91
        c-2.396,6.919-0.285,14.371,5.792,20.444c3.274,3.276,7.988,5.007,13.63,5.007c0.413,0,0.829-0.021,1.245-0.041
        c-0.209,0.182-0.419,0.362-0.617,0.56L5.641,57.847c-4.679,4.679-4.679,12.291,0,16.97l2.827,2.827
        c2.266,2.267,5.28,3.515,8.485,3.515s6.219-1.248,8.485-3.515L42.29,60.791c0.934-0.933,1.669-1.982,2.223-3.103l14.969,17.296
        c0.048,0.055,0.098,0.107,0.148,0.159c1.678,1.677,4.196,2.601,7.094,2.601c3.521,0,7.095-1.385,9.326-3.615
        c3.922-3.922,5.158-12.267,1.012-16.416c-0.053-0.051-0.104-0.101-0.159-0.146L55.108,38.709L67.682,25.76
        c0.346,0.059,0.692,0.088,1.041,0.088c1.506,0,2.896-0.563,3.916-1.582l4.984-6.113c1.141-1.192,1.855-2.695,2.021-4.251
        c0.193-1.822-0.398-3.568-1.621-4.79L74.175,5.262z M38.048,56.549L21.196,73.402c-1.133,1.133-2.64,1.757-4.243,1.757
        s-3.109-0.624-4.243-1.757l-2.827-2.827c-2.339-2.34-2.339-6.146,0-8.484l16.853-16.854c1.133-1.133,2.64-1.757,4.242-1.757
        c0.471,0,0.932,0.062,1.379,0.165l7.438,8.595C39.813,53.797,39.234,55.363,38.048,56.549z M71.806,69.887
        c-1.111,1.111-3.154,1.857-5.084,1.857c-1.211,0-2.246-0.293-2.793-0.789L32.121,34.203c-0.797-0.921-2.073-1.269-3.225-0.88
        c-2.24,0.754-4.671,1.152-7.031,1.152c-3.958,0-7.292-1.154-9.387-3.25c-1.896-1.896-4.559-5.25-4.957-9.432l5.59,4.677
        c0.63,0.528,1.447,0.773,2.266,0.68l9.915-1.132c1.443-0.165,2.561-1.339,2.653-2.789l0.601-9.384
        c0.049-0.769-0.199-1.526-0.693-2.116l-4.789-5.724c3.663,0.1,7.229,1.709,10.077,4.557c3.918,3.919,3.833,11.259,2.095,16.421
        c-0.389,1.154-0.041,2.429,0.88,3.226l36.757,31.808C74.206,63.476,73.891,67.801,71.806,69.887z M73.261,14.035l-4.707,5.772
        c-0.049-0.019-0.104-0.045-0.164-0.081l-2.037-1.21l-15.787,16.26l-2.207-1.909l16.41-15.935l-1.209-2.035
        c-0.035-0.062-0.063-0.117-0.08-0.165l5.541-4.499l0.23-0.208c0.299-0.297,0.598-0.4,0.784-0.417l3.646,3.646
        C73.669,13.404,73.572,13.723,73.261,14.035z"
        />
      </g>
    </svg>
  );
}

export function Ac({ style, height, width }) {
  return (
    <svg
      className={style}
      height={`${height}px`}
      width={`${width}px`}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 490 490"
    >
      <g>
        <path d="M425,79.859H65c-35.841,0-65,29.159-65,65v189c0,35.841,29.159,65,65,65h32.182c-0.054,0.421-0.091,0.847-0.091,1.282
        c0,5.522,4.477,10,10,10h40.498c5.523,0,10-4.478,10-10c0-0.436-0.037-0.861-0.091-1.282h175.007
        c-0.054,0.421-0.091,0.847-0.091,1.282c0,5.522,4.477,10,10,10h40.498c5.523,0,10-4.478,10-10c0-0.436-0.037-0.861-0.091-1.282H425
        c35.841,0,65-29.159,65-65v-189C490,109.018,460.841,79.859,425,79.859z M460,333.859c0,19.299-15.701,35-35,35H65
        c-19.299,0-35-15.701-35-35v-189c0-19.299,15.701-35,35-35h360c19.299,0,35,15.701,35,35V333.859z"
        />
        <path d="M131.717,239.923c0-7.399,2.817-14.139,7.437-19.208l-31.548-5.985c-8.105-1.538-15.609,4.676-15.609,12.926v24.535
		    463,15.609,12.926l31.548-5.985C134.535,254.062,131.717,247.322,131.717,239.923z"
        />
        <path d="M212.88,214.73l-31.548,5.985c4.62,5.069,7.437,11.81,7.437,19.208c0,7.398-2.817,14.139-7.437,19.208l31.548,5.985
		    c8.105,1.538,15.609-4.677,15.609-12.926v-24.535C228.489,219.406,220.985,213.192,212.88,214.73z"
        />
        <path d="M141.32,214.985c0.189,0.996,0.498,1.941,0.891,2.837c4.915-4.015,11.191-6.425,18.032-6.425
        c6.841,0,13.117,2.41,18.032,6.425c0.394-0.896,0.703-1.841,0.891-2.837l6.27-33.049c1.538-8.104-4.677-15.608-12.926-15.608
        h-24.535c-8.249,0-14.463,7.504-12.926,15.608L141.32,214.985z"
        />
        <path d="M179.167,264.861c-0.189-0.996-0.498-1.941-0.891-2.837c-4.915,4.015-11.191,6.425-18.032,6.425
        s-13.117-2.411-18.032-6.425c-0.394,0.896-0.703,1.842-0.891,2.837l-6.27,33.049c-1.538,8.104,4.677,15.608,12.926,15.608h24.535
        c8.249,0,14.463-7.504,12.926-15.608L179.167,264.861z"
        />
        <circle cx="160.243" cy="239.923" r="18.924" />
        <path d="M160.243,134.556c-58.1,0-105.367,47.268-105.367,105.367s47.268,105.367,105.367,105.367S265.61,298.023,265.61,239.923
        S218.343,134.556,160.243,134.556z M160.243,325.291c-47.072,0-85.367-38.296-85.367-85.367s38.295-85.367,85.367-85.367
        s85.367,38.296,85.367,85.367S207.315,325.291,160.243,325.291z"
        />
        <path d="M418.567,156.328h-36.085c-5.523,0-10,4.478-10,10s4.477,10,10,10h36.085c5.523,0,10-4. 478,10-10
		    S424.09,156.328,418.567,156.328z"
        />
      </g>
    </svg>
  );
}

export function Parts({ style, height, width }) {
  return (

    <svg
      className={style}
      height={`${height}px`}
      width={`${width}px`}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 556.705 556.705"
    >
      <path d="M549.205,86.508H7.5c-4.143,0-7.5,3.358-7.5,7.5v303.996c0,4.142,3.357,7.5,7.5,7.5h25.266
      c-14.057,3.741-24.447,16.574-24.447,31.793c0,18.141,14.759,32.899,32.899,32.899s32.899-14.759,32.899-32.899
      c0-15.219-10.389-28.053-24.447-31.793H248.66c-14.057,3.741-24.446,16.574-24.446,31.793c0,18.141,14.758,32.899,32.898,32.899
      s32.899-14.759,32.899-32.899c0-15.219-10.389-28.053-24.447-31.793h243.322c-12.74,4.54-21.886,16.718-21.886,30.997
      c0,18.141,14.759,32.899,32.899,32.899s32.899-14.759,32.899-32.899c0-14.279-9.146-26.457-21.886-30.997h18.291
      c4.143,0,7.5-3.358,7.5-7.5V94.008C556.705,89.867,553.348,86.508,549.205,86.508z M519.9,454.4c-9.87,0-17.899-8.03-17.899-17.899
      c0-7.19,4.27-13.386,10.399-16.23v16.23c0,4.142,3.357,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-16.23c6.129,2.844,10.399,9.041,10.399,16.23
      C537.8,446.371,529.771,454.4,519.9,454.4z M257.112,455.197c-9.869,0-17.898-8.03-17.898-17.899c0-7.189,4.27-13.386,10.398-16.23
      v16.23c0,4.142,3.357,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-16.23c6.129,2.844,10.399,9.041,10.399,16.23
      C275.012,447.167,266.982,455.197,257.112,455.197z M41.219,455.197c-9.87,0-17.899-8.03-17.899-17.899
      c0-7.19,4.27-13.386,10.399-16.23v16.23c0,4.142,3.357,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-16.23c6.129,2.844,10.399,9.041,10.399,16.23
      C59.118,447.167,51.089,455.197,41.219,455.197z M239.214,390.504v-27.935c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v27.935H15
      V101.508h209.214v221.094c0,4.142,3.357,7.5,7.5,7.5s7.5-3.358,7.5-7.5V101.508h302.491v288.996H239.214z M164.649,143.246h-91.67
      c-4.143,0-7.5,3.357-7.5,7.5v65.479c0,4.142,3.357,7.5,7.5,7.5h91.67c4.143,0,7.5-3.358,7.5-7.5v-65.479
      C172.149,146.603,168.792,143.246,164.649,143.246z M80.479,208.724v-50.479h76.67v50.479H80.479z M200.529,109.106H33.691
      c-4.143,0-7.5,3.357-7.5,7.5v192.243c0,4.142,3.357,7.5,7.5,7.5h166.838c4.143,0,7.5-3.358,7.5-7.5V116.606
      C208.029,112.464,204.672,109.106,200.529,109.106z M41.191,301.349V124.106h151.838v177.243H41.191z M200.529,327.802H33.691
      c-4.143,0-7.5,3.358-7.5,7.5v38.502c0,4.142,3.357,7.5,7.5,7.5h166.838c4.143,0,7.5-3.358,7.5-7.5v-38.502
      C208.029,331.16,204.672,327.802,200.529,327.802z M41.191,366.304v-23.502h151.838v23.502H41.191z M523.806,327.802H263.892
      c-4.143,0-7.5,3.358-7.5,7.5v38.502c0,4.142,3.357,7.5,7.5,7.5h259.914c4.143,0,7.5-3.358,7.5-7.5v-38.502
      C531.306,331.16,527.948,327.802,523.806,327.802z M271.392,366.304v-23.502h244.914v23.502H271.392z M523.806,109.106H263.892
      c-4.143,0-7.5,3.357-7.5,7.5v193.297c0,4.142,3.357,7.5,7.5,7.5h259.914c4.143,0,7.5-3.358,7.5-7.5V116.606
      C531.306,112.464,527.948,109.106,523.806,109.106z M271.392,302.403V124.106h244.914v178.297H271.392z"
      />
    </svg>
  );
}

export function ComponentLoarder() {
  return (
    <div className="w-full h-[500px] flex justify-center items-center">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid border-t-blue-500 border-t-4 h-12 w-12" />
    </div>
  );
}

export const CopyClipboard = function ({ num }) {
  const [isCopied, setIsCopied] = useState(false);

  const ClipBoard = () => {
    navigator.clipboard.writeText(num);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000); // Reset "Copied!" prompt after 2 seconds
  };
  return (
    <>
      {isCopied && <p className="bg-green-600 rounded p-2 text-slate-300 absolute top-6 right-0">Copied!{num}</p>}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="38"
        viewBox="0 0 24 24"
        className="fill-secondary dark:fill-primary cursor-pointer"
        onClick={ClipBoard}
      ><path d="M12.043 6.925a4.985 4.985 0 0 0-4.98 4.979c-.001.94.263 1.856.761 2.649l.118.188-.503 1.837 1.885-.494.181.108a4.97 4.97 0 0 0 2.535.693h.001a4.986 4.986 0 0 0 4.979-4.978 4.946 4.946 0 0 0-1.456-3.522 4.946 4.946 0 0 0-3.521-1.46zm2.928 7.118c-.125.35-.723.668-1.01.711a2.044 2.044 0 0 1-.943-.059 8.51 8.51 0 0 1-.853-.315c-1.502-.648-2.482-2.159-2.558-2.26-.074-.1-.61-.812-.61-1.548 0-.737.386-1.099.523-1.249a.552.552 0 0 1 .4-.186c.1 0 .199.001.287.005.092.004.215-.035.336.257.125.3.425 1.036.462 1.111.037.074.062.162.013.262-.05.101-.074.162-.15.25-.074.088-.157.195-.224.263-.075.074-.153.155-.066.305.088.149.388.64.832 1.037.572.51 1.055.667 1.204.743.15.074.237.063.325-.038.087-.101.374-.437.474-.586.1-.15.199-.125.337-.076.137.051.873.412 1.022.487.148.074.249.112.287.175.036.062.036.361-.088.711z" /><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-7.96 14.896h-.002a5.98 5.98 0 0 1-2.862-.729L6 18l.85-3.104a5.991 5.991 0 0 1 5.19-8.983 5.95 5.95 0 0 1 4.238 1.757 5.95 5.95 0 0 1 1.751 4.237 5.998 5.998 0 0 1-5.989 5.989z" />
      </svg>
    </>
  );
};

export const NumberCopyClipboard = function ({ num }) {
  const [isCopied, setIsCopied] = useState(false);

  const ClipBoard = () => {
    navigator.clipboard.writeText(num);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000); // Reset "Copied!" prompt after 2 seconds
  };
  return (
    <>
      {isCopied && <p className="bg-green-600 rounded p-2 text-slate-300 absolute top-0 right-0">Copied!{num}</p>}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-secondary dark:fill-primary my-2 cursor-pointer" onClick={ClipBoard}>
        <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z" /><path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z" />
      </svg>
    </>
  );
};


