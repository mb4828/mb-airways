var DESTINATIONS = [
	{
		code: 'ewr',
		name: 'Newark Liberty International Airport (EWR)',
		city: 'Newark, USA - New Jersey 🇺🇸',
		pos: [40.70340156126785, -74.17330276840164],
		hubs: ['sfo', 'iah', 'mia', 'hnl'],
		isHub: true,
		tz: 'US/Eastern'
	},
	{
		code: 'sfo',
		name: 'San Francisco International Airport (SFO)',
		city: 'San Francisco, USA - California 🇺🇸',
		pos: [37.62141455145011, -122.37878377625846],
		hubs: ['ewr', 'iah', 'mia', 'hnl'],
		isHub: true,
		tz: 'US/Pacific'
	},
	{
		code: 'iah',
		name: 'George Bush Intercontinental Airport (IAH)',
		city: 'Houston, USA - Texas 🇺🇸',
		pos: [29.99029394928301, -95.33691148715191],
		hubs: ['ewr', 'sfo', 'mia', 'hnl'],
		isHub: true,
		tz: 'US/Central'
	},
	{
		code: 'mia',
		name: 'Miami International Airport (MIA)',
		city: 'Miami, USA - Florida 🇺🇸',
		pos: [25.796412980391715, -80.28700802739922],
		hubs: ['ewr', 'sfo', 'iah', 'hnl'],
		isHub: true,
		tz: 'US/Eastern'
	},
	{
		code: 'hnl',
		name: 'Daniel K. Inouye International Airport (HNL)',
		city: 'Honolulu, USA - Hawaii 🇺🇸',
		pos: [21.319087239318254, -157.9254318902438],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		isHub: true,
		tz: 'US/Hawaii'
	},
	{
		name: 'Albuquerque International Airport (ABQ)',
		city: 'Albuquerque, USA - New Mexico 🇺🇸',
		pos: [35.04446359549329, -106.61291166771365],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Kotoka International Airport (ACC)',
		city: 'Accra, Ghana 🇬🇭',
		pos: [5.606084818402552, -0.1681342315152777],
		hubs: ['mia'],
		tz: 'Africa/Accra'
	},
	{
		name: 'Auckland Airport (AKL)',
		city: 'Auckland, New Zealand 🇳🇿',
		pos: [-37.008565657401164, 174.7847156217281],
		hubs: ['hnl'],
		tz: 'Pacific/Auckland'
	},
	{
		name: 'Albany International Airport (ALB)',
		city: 'Albany, USA - New York 🇺🇸',
		pos: [42.74795631522345, -73.80264653273483],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Houari Boumediene Airport (ALG)',
		city: 'Algiers, Algeria 🇩🇿',
		pos: [36.69712417026543, 3.20821173847129],
		hubs: ['mia'],
		tz: 'Africa/Algiers'
	},
	{
		name: 'Amsterdam Schiphol Airport (AMS)',
		city: 'Amsterdam, The Netherlands 🇳🇱',
		pos: [52.310623851948954, 4.768263669222851],
		hubs: ['ewr'],
		tz: 'Europe/Amsterdam'
	},
	{
		name: 'Ted Stevens International Airport (ANC)',
		city: 'Anchorage, USA - Alaska 🇺🇸',
		pos: [61.171332648, -149.991162702],
		hubs: ['ewr', 'sfo', 'iah'],
		tz: 'US/Alaska'
	},
	{
		name: 'V.C. Bird International Airport (ANU)',
		city: 'Saint John\'s, Antigua and Barbuda 🇦🇬',
		pos: [17.141264458109006, -61.79075921641097],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Stockholm Arlanda Airport (ARN)',
		city: 'Stockholm, Sweden 🇸🇪',
		pos: [59.64946534644474, 17.93417522058218],
		hubs: ['ewr'],
		tz: 'Europe/Stockholm'
	},
	{
		name: 'Athens International Airport (ATH)',
		city: 'Athens, Greece 🇬🇷',
		pos: [37.93572283626069, 23.948437055281335],
		hubs: ['ewr'],
		tz: 'Europe/Athens'
	},
	{
		name: 'Hartsfield-Jackson Atlanta International Airport (ATL)',
		city: 'Atlanta, USA - Georgia 🇺🇸',
		pos: [33.64083507608079, -84.42787180090849],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Eastern'
	},
	{
		name: 'Queen Beatrix International Airport (AUA)',
		city: 'Oranjestad, Aruba 🇦🇼',
		pos: [12.502909500135036, -70.00820204601975],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Austin-Bergstrom International Airport (AUS)',
		city: 'Austin, USA - Texas 🇺🇸',
		pos: [30.19868847903938, -97.66571921787173],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'El Dorado International Airport (BOG)',
		city: 'Bogota, Colombia 🇨🇴',
		pos: [4.701527767834316, -74.14601141660555],
		hubs: ['iah'],
		tz: 'America/Bogota'
	},
	{
		name: 'Boise Airport (BOI)',
		city: 'Boise, USA - Idaho 🇺🇸',
		pos: [43.56613372250894, -116.22244467737012],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Boston Logan International Airport (BOS)',
		city: 'Boston, USA - Massachusetts 🇺🇸',
		pos: [42.365961658704904, -71.00960315045923],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Eastern'
	},
	{
		name: 'Barcelona-El Prat Airport (BCN)',
		city: 'Barcelona, Spain 🇪🇸',
		pos: [41.29799278042036, 2.0833798949812197],
		hubs: ['ewr'],
		tz: 'Europe/Madrid'
	},
	{
		name: 'L.F. Wade International Airport (BDA)',
		city: 'Hamilton, Bermuda 🇧🇲',
		pos: [32.359855537423016, -64.70471205965694],
		hubs: ['ewr', 'mia'],
		tz: 'Atlantic/Bermuda'
	},
	{
		name: 'Berlin Branderburg Airport (BER)',
		city: 'Berlin, Germany 🇩🇪',
		pos: [52.36421598862855, 13.509032947271669],
		hubs: ['ewr'],
		tz: 'Europe/Berlin'
	},
	{
		name: 'Nashville International Airport (BNA)',
		city: 'Nashville, USA - Tennessee 🇺🇸',
		pos: [36.126169659792566, -86.67743567520559],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Bradley International Airport (BDL)',
		city: 'Hartford, USA - Connecticut 🇺🇸',
		pos: [41.938985209387795, -72.68590265544461],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Western Nebraska-Scottsbluff Regional Airport (BFF)',
		city: 'Scottsbluff, USA - Nebraska 🇺🇸',
		pos: [41.87180880453483, -103.5942995049976],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Grantley Adams International Airport (BGI)',
		city: 'Christ Church, Barbados 🇧🇧',
		pos: [13.080035627493604, -59.48774184440369],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Birmingham-Shuttlesworth International Airport (BHM)',
		city: 'Birmingham, USA - Alabama 🇺🇸',
		pos: [33.5624358209084, -86.75405090040849],
		hubs: ['ewr', 'sfo', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Billings-Logan International Airport (BIL)',
		city: 'Billings, USA - Montana 🇺🇸',
		pos: [45.80363522704425, -108.53800003259418],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Brisbane Airport (BNE)',
		city: 'Brisbane, Australia 🇦🇺',
		pos: [-27.39418580574182, 153.1218517553009],
		hubs: ['hnl'],
		tz: 'Australia/Brisbane'
	},
	{
		name: 'Brussels Airport (BRU)',
		city: 'Brussels, Belgium 🇧🇪',
		pos: [50.90105310968497, 4.485595855926779],
		hubs: ['ewr'],
		tz: 'Europe/Brussels'
	},
	{
		name: 'Brasília International Airport (BSB)',
		city: 'Brasília, Brazil 🇧🇷',
		pos: [-15.869654340657481, -47.91706316214675],
		hubs: ['iah'],
		tz: 'Brazil/East'
	},
	{
		name: 'Burlington International Airport (BTV)',
		city: 'Burlington, USA - Vermont 🇺🇸',
		pos: [44.470755128608445, -73.1516788038435],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Buffalo Niagara International Airport (BUF)',
		city: 'Buffalo, USA - New York 🇺🇸',
		pos: [42.93973729622188, -78.72948524437224],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Hollywood Burbank Airport (BUR)',
		city: 'Burbank, USA - California 🇺🇸',
		pos: [34.19832105435531, -118.35736068695542],
		hubs: ['sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Baltimore/Washington International Airport (BWI)',
		city: 'Baltimore, USA - Maryland 🇺🇸',
		pos: [39.177536943139835, -76.66830640614698],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Eastern'
	},
	{
		name: 'Bozeman Yellowstone International Airport (BZN)',
		city: 'Bozeman, USA - Montana 🇺🇸',
		pos: [45.77835940397085, -111.16142041964636],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Akron-Canton Airport (CAK)',
		city: 'Akron, USA - Ohio 🇺🇸',
		pos: [40.91539520193488, -81.4415358425859],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Paris Charles de Gaulle Airport (CDG)',
		city: 'Paris, France 🇫🇷',
		pos: [49.01088754570143, 2.5481856293293754],
		hubs: ['ewr'],
		tz: 'Europe/Paris'
	},
	{
		name: 'Charleston International Airport (CHS)',
		city: 'Charleston, USA - South Carolina 🇺🇸',
		pos: [32.89249643, -80.037666516],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Eastern Iowa Airport (CID)',
		city: 'Cedar Rapids, USA - Iowa 🇺🇸',
		pos: [41.88633815541166, -91.70700758853724],
		hubs: ['ewr', 'sfo', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Cleveland Hopkins International Airport (CLE)',
		city: 'Cleveland, USA - Ohio 🇺🇸',
		pos: [41.405886997309366, -81.85371669778253],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Charlotte Douglas International Airport (CLT)',
		city: 'Charlotte, USA - North Carolina 🇺🇸',
		pos: [35.214358753004724, -80.94714294071665],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Eastern'
	},
	{
		name: 'John Glenn Columbus International Airport (CMH)',
		city: 'Columbus, USA - Ohio 🇺🇸',
		pos: [39.99990700422163, -82.88685483700165],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Mohammed V International Airport (CMN)',
		city: 'Casablanca, Morocco 🇲🇦',
		pos: [33.370015580895306, -7.5857562888435845],
		hubs: ['mia'],
		tz: 'Africa/Casablanca'
	},
	{
		name: 'Colorado Springs Airport (COS)',
		city: 'Colorado Springs, USA - Colorado 🇺🇸',
		pos: [38.80179559142115, -104.70258244384314],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Cape Town International Airport (CPT)',
		city: 'Cape Town, South Africa 🇿🇦',
		pos: [-33.971498570998, 18.60206364117647],
		hubs: ['mia'],
		tz: 'Africa/Johannesburg'
	},
	{
		name: 'Cancún International Airport (CUN)',
		city: 'Cancún, Mexico 🇲🇽',
		pos: [21.04198345163572, -86.87396332895656],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'America/Cancun'
	},
	{
		name: 'Curaçao International Airport (CUR)',
		city: 'Willemstad, Curaçao 🇨🇼',
		pos: [12.189339619252113, -68.96166422979832],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Cincinnati/Northern Kentucky International Airport (CVG)',
		city: 'Cincinnati, USA - Ohio 🇺🇸',
		pos: [39.05091119818685, -84.66749507901761],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Cassidy International Airport (CXI)',
		city: 'Kiritimati, Kiribati 🇰🇮',
		pos: [1.9867631645901074, -157.35021966168168],
		hubs: ['hnl'],
		tz: 'Pacific/Kiritimati'
	},
	{
		name: 'Indira Gandhi International Airport (DEL)',
		city: 'New Delhi, India 🇮🇳',
		pos: [28.556463675916227, 77.10008650432476],
		hubs: ['sfo'],
		tz: 'Asia/Kolkata'
	},
	{
		name: 'Denver International Airport (DEN)',
		city: 'Denver, USA - Colorado 🇺🇸',
		pos: [39.856787796502296, -104.67360889044873],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Mountain'
	},
	{
		name: 'Dallas/Fort Worth International Airport (DFW)',
		city: 'Dallas, USA - Texas 🇺🇸',
		pos: [32.90175623187377, -97.04011304308536],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Central'
	},
	{
		name: 'Des Moines International Airport (DSM)',
		city: 'Des Moines, USA - Iowa 🇺🇸',
		pos: [41.53421361181389, -93.65911766543995],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Blaise Diagne International Airport (DSS)',
		city: 'Ndiass, Senegal 🇸🇳',
		pos: [14.671072249456303, -17.06737968914397],
		hubs: ['mia'],
		tz: 'GMT'
	},
	{
		name: 'Detroit Metropolitan Wayne County Airport (DTW)',
		city: 'Detroit, USA - Michigan 🇺🇸',
		pos: [42.21640799753565, -83.35532128673535],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Eastern'
	},
	{
		name: 'Dublin Airport (DUB)',
		city: 'Dublin, Ireland 🇮🇪',
		pos: [53.42641611587296, -6.249684496130292],
		hubs: ['ewr'],
		tz: 'Europe/Dublin'
	},
	{
		name: 'Dubai International Airport (DXB)',
		city: 'Dubai, United Arab Emirates 🇦🇪',
		pos: [25.25309661391826, 55.36567275706557],
		hubs: ['sfo'],
		tz: 'Asia/Dubai'
	},
	{
		name: 'Edinburgh Airport (EDI)',
		city: 'Edinburgh, United Kingdom 🇬🇧',
		pos: [55.95077897347942, -3.3614102862399537],
		hubs: ['ewr'],
		tz: 'Europe/London'
	},
	{
		name: 'El Paso International Airport (ELP)',
		city: 'El Paso, USA - Texas 🇺🇸',
		pos: [31.80542655947106, -106.38241304461272],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Eugene Airport (EUG)',
		city: 'Eugene, USA - Oregon 🇺🇸',
		pos: [44.12185809726057, -123.21588957302129],
		hubs: ['ewr', 'sfo'],
		tz: 'US/Pacific'
	},
	{
		name: 'Ezeiza International Airport (EZE)',
		city: 'Buenos Aires, Argentina 🇦🇷',
		pos: [-34.81472221811849, -58.5349142696793],
		hubs: ['iah'],
		tz: 'America/Argentina/Buenos_Aires'
	},
	{
		name: 'Hector International Airport (FAR)',
		city: 'Fargo, USA - North Dakota 🇺🇸',
		pos: [46.92181462122193, -96.81670671316597],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Fresno Yosemite International Airport (FAT)',
		city: 'Fresno, USA - California 🇺🇸',
		pos: [36.77582349137883, -119.7182263207816],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Glacier Park International Airport (FCA)',
		city: 'Kalispell, USA - Montana 🇺🇸',
		pos: [48.30775754813589, -114.25254443066616],
		hubs: ['ewr', 'iah'],
		tz: 'US/Mountain'
	},
	{
		name: 'Leonardo da Vinci International Airport (FCO)',
		city: 'Rome, Italy 🇮🇹',
		pos: [41.80413085802929, 12.251849849230378],
		hubs: ['ewr'],
		tz: 'Europe/Rome'
	},
	{
		name: 'Fort Lauderdale-Hollywood International Airport (FLL)',
		city: 'Fort Lauderdale, USA - Florida 🇺🇸',
		pos: [26.074330752581144, -80.1506451175699],
		hubs: ['ewr', 'sfo', 'iah'],
		tz: 'US/Eastern'
	},
	{
		name: 'Grand Bahama Airport (FPO)',
		city: 'Freeport, Bahamas 🇧🇸',
		pos: [26.54776858081397, -78.70253123123514],
		hubs: ['mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Frankfurt Airport (FRA)',
		city: 'Frankfurt, Germany 🇩🇪',
		pos: [50.038235470253035, 8.562452176837837],
		hubs: ['ewr'],
		tz: 'Europe/Berlin'
	},
	{
		name: 'Sioux Falls Regional Airport (FSD)',
		city: 'Sioux Falls, USA - South Dakota 🇺🇸',
		pos: [43.58285310955137, -96.74018491546143],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Miguel Hidalgo y Costilla International Airport (GDL)',
		city: 'Guadalajara, Mexico 🇲🇽',
		pos: [20.52589580006699, -103.30765718888681],
		hubs: ['iah'],
		tz: 'America/Mexico_City'
	},
	{
		name: 'Rio de Janeiro/Galeao International Airport (GIG)',
		city: 'Rio di Janeiro, Brazil 🇧🇷',
		pos: [-22.804592230082836, -43.25675808978346],
		hubs: ['iah'],
		tz: 'Brazil/East'
	},
	{
		name: 'Gerald R. Ford International Airport (GRR)',
		city: 'Grand Rapids, USA - Michigan 🇺🇸',
		pos: [42.8824264791552, -85.52425954433107],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'São Paulo/Guarulhos International Airport (GRU)',
		city: 'São Paulo, Brazil 🇧🇷',
		pos: [-23.4301397120531, -46.47291429752642],
		hubs: ['iah'],
		tz: 'Brazil/East'
	},
	{
		name: 'Piedmont Triad International Airport (GSO)',
		city: 'Greensboro, USA - North Carolina 🇺🇸',
		pos: [36.10435840414433, -79.935191232335],
		hubs: ['ewr'],
		tz: 'US/Eastern'
	},
	{
		name: 'Antonio B. Won Pat International Airport (GUM)',
		city: 'Guam 🇬🇺, US Territories',
		pos: [13.4863791493778, 144.80040397596647],
		hubs: ['hnl'],
		tz: 'Pacific/Guam'
	},
	{
		name: 'Jose Marti International Airport (HAV)',
		city: 'Havana, Cuba 🇨🇺',
		pos: [22.98666272, -82.405331712],
		hubs: ['mia'],
		tz: 'Cuba'
	},
	{
		name: 'Helsinki Airport (HEL)',
		city: 'Helsinki, Finland 🇫🇮',
		pos: [60.31828039473722, 24.94972532743364],
		hubs: ['ewr'],
		tz: 'Europe/Helsinki'
	},
	{
		name: 'Hong Kong International Airport (HKG)',
		city: 'Hong Kong, China 🇨🇳',
		pos: [22.308602611679753, 113.91835201005935],
		hubs: ['sfo'],
		tz: 'Asia/Hong_Kong'
	},
	{
		name: 'Dulles International Airport (IAD)',
		city: 'Washington, USA - D.C. 🇺🇸',
		pos: [38.95327013665701, -77.4565514890331],
		hubs: ['sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Eastern'
	},
	{
		name: 'Incheon International Airport (ICN)',
		city: 'Seoul, South Korea 🇰🇷',
		pos: [37.460632804087396, 126.44057390291141],
		hubs: ['sfo'],
		tz: 'Asia/Seoul'
	},
	{
		name: 'Dwight D. Eisenhower Airport (ICT)',
		city: 'Wichita, USA - Kansas 🇺🇸',
		pos: [37.65083588295067, -97.42868807453723],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Hilo International Airport (ITO)',
		city: 'Hilo, USA - Hawaii 🇺🇸',
		pos: [19.71828308321948, -155.04165378827003],
		hubs: ['hnl'],
		tz: 'US/Hawaii'
	},
	{
		name: 'Indianapolis International Airport (IND)',
		city: 'Indianapolis, USA - Indiana 🇺🇸',
		pos: [39.716991323244, -86.29558447337403],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Jackson-Medgar Wiley Evers International Airport (JAN)',
		city: 'Jackson, USA - Mississippi 🇺🇸',
		pos: [32.31234643525699, -90.07632339635566],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Jacksonville International Airport (JAX)',
		city: 'Jacksonville, USA - Florida 🇺🇸',
		pos: [30.4940250575088, -81.68793680243796],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'John F. Kennedy International Airport (JFK)',
		city: 'New York, USA - New York 🇺🇸',
		pos: [40.64189712324801, -73.7779237593459],
		hubs: ['sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Eastern'
	},
	{
		name: 'O.R. Tambo International Airport (JNB)',
		city: 'Johannesburg, South Africa 🇿🇦',
		pos: [-26.136691994110528, 28.241156617041295],
		hubs: ['mia'],
		tz: 'Africa/Johannesburg'
	},
	{
		name: 'Keflavík International Airport (KEF)',
		city: 'Reykjavík, Iceland 🇮🇸',
		pos: [63.98070701155434, -22.627620001362224],
		hubs: ['ewr'],
		tz: 'Iceland'
	},
	{
		name: 'Kona International Airport (KOA)',
		city: 'Kailua-Kona, USA - Hawaii 🇺🇸',
		pos: [19.737769862987626, -156.0428956900814],
		hubs: ['sfo', 'hnl'],
		tz: 'US/Hawaii'
	},
	{
		name: 'Harry Reid International Airport (LAS)',
		city: 'Las Vegas, USA - Nevada 🇺🇸',
		pos: [36.08590149456017, -115.15072229119573],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Pacific'
	},
	{
		name: 'Los Angeles International Airport (LAX)',
		city: 'Los Angeles, USA - California 🇺🇸',
		pos: [33.9412952817257, -118.40872312135349],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Pacific'
	},
	{
		name: 'Blue Grass Airport (LEX)',
		city: 'Lexington, USA - Kentucky 🇺🇸',
		pos: [38.03779528003609, -84.60259757335659],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Long Beach Airport (LGB)',
		city: 'Long Beach, USA - California 🇺🇸',
		pos: [33.81616877737306, -118.1511592426201],
		hubs: ['sfo'],
		tz: 'US/Pacific'
	},
	{
		name: 'Heathrow Airport (LHR)',
		city: 'London, United Kingdom 🇬🇧',
		pos: [51.47058336357465, -0.4544242756733526],
		hubs: ['ewr'],
		tz: 'Europe/London'
	},
	{
		name: 'Lihue Airport (LIH)',
		city: 'Lihue, USA - Hawaii 🇺🇸',
		pos: [21.978913933768247, -159.34382035743394],
		hubs: ['hnl'],
		tz: 'US/Hawaii'
	},
	{
		name: 'Jorge Chavez International Airport (LIM)',
		city: 'Lima, Peru 🇵🇪',
		pos: [-12.023590851622739, -77.11199313107029],
		hubs: ['iah'],
		tz: 'America/Lima'
	},
	{
		name: 'Humberto Delgado Airport (LIS)',
		city: 'Lisbon, Portugal 🇵🇹',
		pos: [38.77616204030518, -9.135280903021002],
		hubs: ['ewr'],
		tz: 'Europe/Lisbon'
	},
	{
		name: 'Clinton National Airport (LIT)',
		city: 'Little Rock, USA - Arkansas 🇺🇸',
		pos: [34.73014934857, -92.219905134052],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Lanai Airport (LNY)',
		city: 'Lanai City, USA - Hawaii 🇺🇸',
		pos: [20.79129049571412, -156.95037799977516],
		hubs: ['hnl'],
		tz: 'US/Hawaii'
	},
	{
		name: 'Murtala Muhammed International Airport (LOS)',
		city: 'Lagos, Nigeria 🇳🇬',
		pos: [6.582042315799838, 3.3210704254376475],
		hubs: ['mia'],
		tz: 'Africa/Lagos'
	},
	{
		name: 'Adolfo Suarez Madrid-Barajas Airport (MAD)',
		city: 'Madrid, Spain 🇪🇸',
		pos: [40.49847903162269, -3.5676089311550063],
		hubs: ['ewr'],
		tz: 'Europe/Madrid'
	},
	{
		name: 'Sangster International Airport (MBJ)',
		city: 'Montego Bay, Jamaica 🇯🇲',
		pos: [18.502391775768107, -77.91451690151644],
		hubs: ['ewr', 'mia'],
		tz: 'America/Jamaica'
	},
	{
		name: 'Kansas City International Airport (MCI)',
		city: 'Kansas City, USA - Missouri 🇺🇸',
		pos: [39.30346588697873, -94.70907396438118],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Orlando International Airport (MCO)',
		city: 'Orlando, USA - Florida 🇺🇸',
		pos: [28.418822273035058, -81.30431680312665],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Eastern'
	},
	{
		name: 'Melbourne Airport (MEL)',
		city: 'Melbourne, Australia 🇦🇺',
		pos: [-37.670866092849224, 144.84387908076323],
		hubs: ['hnl'],
		tz: 'Australia/Melbourne'
	},
	{
		name: 'Memphis International Airport (MEM)',
		city: 'Memphis, USA - Tennessee 🇺🇸',
		pos: [35.041980059680945, -89.97921581534257],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Mexico City International Airport (MEX)',
		city: 'Mexico City, Mexico 🇲🇽',
		pos: [19.43624818319543, -99.07194048906919],
		hubs: ['ewr', 'sfo', 'iah'],
		tz: 'America/Mexico_City'
	},
	{
		name: 'Rogue Valley International Medford Airport (MFR)',
		city: 'Medford, USA - Oregon 🇺🇸',
		pos: [42.369094888174644, -122.87312247409928],
		hubs: ['ewr', 'sfo'],
		tz: 'US/Pacific'
	},
	{
		name: 'Manchester-Boston Regional Airport (MHT)',
		city: 'Manchester, USA - New Hampshire 🇺🇸',
		pos: [42.9297832621787, -71.43505763213719],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'General Mitchell International Airport (MKE)',
		city: 'Milwaukee, USA - Wisconsin 🇺🇸',
		pos: [42.94783578343849, -87.89664603166004],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Ninoy Aquino International Airport (MNL)',
		city: 'Manila, Philippines 🇵🇭',
		pos: [14.505164646, 121.01833326],
		hubs: ['hnl'],
		tz: 'Asia/Manila'
	},
	{
		name: 'Dane County Regional Airport (MSN)',
		city: 'Madison, USA - Wisconsin 🇺🇸',
		pos: [43.139089365511055, -89.33638061548804],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Missoula Montana Airport (MSO)',
		city: 'Missoula, USA - Montana 🇺🇸',
		pos: [46.91876701016805, -114.08363087487372],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Minneapolis-Saint Paul International Airport (MSP)',
		city: 'Minneapolis, USA - Minnesota 🇺🇸',
		pos: [44.88624650092833, -93.22250729555996],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Central'
	},
	{
		name: 'Louis Armstrong New Orleans International Airport (MSY)',
		city: 'New Orleans, USA - Louisiana 🇺🇸',
		pos: [29.991146272960744, -90.25862783681688],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Monterrey International (MTY)',
		city: 'Monterrey, Mexico 🇲🇽',
		pos: [25.777322304453758, -100.11456996208241],
		hubs: ['iah'],
		tz: 'America/Mexico_City'
	},
	{
		name: 'Munich International Airport (MUC)',
		city: 'Munich, Germany 🇩🇪',
		pos: [48.35101828934641, 11.776488342315458],
		hubs: ['ewr'],
		tz: 'Europe/Berlin'
	},
	{
		name: 'Malpensa Airport (MXP)',
		city: 'Milan, Italy 🇮🇹',
		pos: [45.63003246889486, 8.725487782741581],
		hubs: ['ewr'],
		tz: 'Europe/Rome'
	},
	{
		name: 'Nadi Airport (NAN)',
		city: 'Nadi, Fiji 🇫🇯',
		pos: [-17.75183452525651, 177.45078438213463],
		hubs: ['hnl'],
		tz: 'Pacific/Fiji'
	},
	{
		name: 'Lynden Pindling International Airport (NAS)',
		city: 'Nassau, Bahamas 🇧🇸',
		pos: [25.04400654513227, -77.46580015121297],
		hubs: ['ewr', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Narita International Airport (NRT)',
		city: 'Tokyo, Japan 🇯🇵',
		pos: [35.77226493717075, 140.39293589386335],
		hubs: ['ewr', 'sfo'],
		tz: 'Asia/Tokyo'
	},
	{
		name: 'Oakland International Airport (OAK)',
		city: 'Oakland, USA - California 🇺🇸',
		pos: [37.71148324911222, -122.2193824513291],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Kahului Airport (OGG)',
		city: 'Kahului, USA - Hawaii 🇺🇸',
		pos: [20.894645227300344, -156.43600538629138],
		hubs: ['sfo', 'hnl'],
		tz: 'US/Hawaii'
	},
	{
		name: 'Will Rogers Airport (OKC)',
		city: 'Oklahoma City, USA - Oklahoma 🇺🇸',
		pos: [35.39319572984369, -97.60050445075717],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Eppley Airfield (OMA)',
		city: 'Omaha, USA - Nebraska 🇺🇸',
		pos: [41.30224308640403, -95.89469287800654],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Ontario International Airport (ONT)',
		city: 'Ontario, USA - California 🇺🇸',
		pos: [34.05596214250547, -117.59904106790037],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'O\'Hare International Airport (ORD)',
		city: 'Chicago, USA - Illinois 🇺🇸',
		pos: [41.980694394637, -87.90899793532991],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Central'
	},
	{
		name: 'Norfolk International Airport (ORF)',
		city: 'Norfolk, USA - Virginia 🇺🇸',
		pos: [36.89570942043663, -76.20000537338909],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Oslo Airport (OSL)',
		city: 'Oslo, Norway 🇳🇴',
		pos: [60.197550081971016, 11.100372283252447],
		hubs: ['ewr'],
		tz: 'Europe/Oslo'
	},
	{
		name: 'Palm Beach International Airport (PBI)',
		city: 'West Palm Beach, USA - Florida 🇺🇸',
		pos: [26.685785827360075, -80.09283796017972],
		hubs: ['ewr', 'sfo', 'iah'],
		tz: 'US/Eastern'
	},
	{
		name: 'Portland International Airport (PDX)',
		city: 'Portland, USA - Oregon 🇺🇸',
		pos: [45.59024957185743, -122.59483674121826],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Beijing Capital International Airport (PEK)',
		city: 'Beijing, China 🇨🇳',
		pos: [40.0801853355692, 116.60315498033326],
		hubs: ['sfo'],
		tz: 'Asia/Shanghai'
	},
	{
		name: 'Philadelphia International Airport (PHL)',
		city: 'Philadelphia, USA - Pennsylvania 🇺🇸',
		pos: [39.87312718764114, -75.24362441975858],
		hubs: ['sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Eastern'
	},
	{
		name: 'Phoenix Sky Harbor International Airport (PHX)',
		city: 'Phoenix, USA - Arizona 🇺🇸',
		pos: [33.43582170243552, -112.0101240396323],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Mountain'
	},
	{
		name: 'Pittsburgh International Airport (PIT)',
		city: 'Pittsburgh, USA - Pennsylvania 🇺🇸',
		pos: [40.49183102751426, -80.23501945402671],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Providenciales International Airport (PLS)',
		city: 'Providenciales, Turks and Caicos Islands 🇹🇨',
		pos: [21.776326359168177, -72.27128035731569],
		hubs: ['mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Piarco International Airport (POS)',
		city: 'Piarco, Trinidad and Tobago 🇹🇹',
		pos: [10.597664754910571, -61.33951627377069],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Pago Pago International Airport (PPG)',
		city: 'Pago Pago, American Samoa 🇦🇸, US Territories',
		pos: [-14.328529463205866, -170.71318872964144],
		hubs: ['hnl'],
		tz: 'Pacific/Pago_Pago'
	},
	{
		name: 'Fa\'a\'a International Airport (PPT)',
		city: 'Tahiti, French Polynesia 🇵🇫',
		pos: [-17.55960524555043, -149.61021228790472],
		hubs: ['hnl'],
		tz: 'Pacific/Tahiti'
	},
	{
		name: 'Vaclav Havel Airport (PRG)',
		city: 'Prague, Czech Republic 🇨🇿',
		pos: [50.101859796884526, 14.263234742416973],
		hubs: ['ewr'],
		tz: 'Europe/Prague'
	},
	{
		name: 'Palm Springs International Airport (PSP)',
		city: 'Palm Springs, USA - California 🇺🇸',
		pos: [33.830568637238926, -116.50696100322521],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Punta Cana International Airport (PUJ)',
		city: 'Punta Cana, Dominican Republic 🇩🇴',
		pos: [18.563260946101263, -68.36852528802461],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'T.F. Green International Airport (PVD)',
		city: 'Providence, USA - Rhode Island 🇺🇸',
		pos: [41.723507528600045, -71.42691301444177],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Licenciado Gustavo Diaz Ordaz International (PVR)',
		city: 'Puerto Vallarta, Mexico 🇲🇽',
		pos: [20.68049831115806, -105.2524298465564],
		hubs: ['iah'],
		tz: 'America/Mexico_City'
	},
	{
		name: 'Portland International Jetport (PWM)',
		city: 'Portland, USA - Maine 🇺🇸',
		pos: [43.64570214332969, -70.31004072274055],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Rapid City Regional Airport (RAP)',
		city: 'Rapid City, USA - South Dakota 🇺🇸',
		pos: [44.038372066425026, -103.06043047128412],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Raleigh-Durham International Airport (RDU)',
		city: 'Raleigh, USA - North Carolina 🇺🇸',
		pos: [35.88007898015302, -78.78797484463837],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Richmond International Airport (RIC)',
		city: 'Richmond, USA - Virginia 🇺🇸',
		pos: [37.50677505510212, -77.32084242371478],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Reno-Tahoe International Airport (RNO)',
		city: 'Reno, USA - Nevada 🇺🇸',
		pos: [39.49964863013703, -119.76805218683198],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Greater Rochester International Airport (ROC)',
		city: 'Rochester, USA - New York 🇺🇸',
		pos: [43.12253070204068, -77.6666258473552],
		hubs: ['ewr'],
		tz: 'US/Eastern'
	},
	{
		name: 'Southwest Florida International Airport (RSW)',
		city: 'Fort Myers, USA - Florida 🇺🇸',
		pos: [26.533753077135888, -81.75534048896644],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'San Diego International Airport (SAN)',
		city: 'San Diego, USA - California 🇺🇸',
		pos: [32.733728095648374, -117.19304634789322],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'San Antonio International Airport (SAT)',
		city: 'San Antonio, USA - Texas 🇺🇸',
		pos: [29.531290632199877, -98.46845569088684],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Savannah/Hilton Head International Airport (SAV)',
		city: 'Savannah, USA - Georgia 🇺🇸',
		pos: [32.12939158823519, -81.20176254594122],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Seattle-Tacoma International Airport (SEA)',
		city: 'Seattle, USA - Washington 🇺🇸',
		pos: [47.45358306768111, -122.30824812930476],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Pacific'
	},
	{
		name: 'Arturo Merino Benitez Airport (SCL)',
		city: 'Santiago, Chile 🇨🇱',
		pos: [-33.38938543980737, -70.79442733965293],
		hubs: ['iah'],
		tz: 'America/Santiago'
	},
	{
		name: 'Louisville Muhammad Ali International Airport (SDF)',
		city: 'Louisville, USA - Kentucky 🇺🇸',
		pos: [38.183129274399, -85.741038508206],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Shanghai Hongqiao International Airport (SHA)',
		city: 'Shanghai, China 🇨🇳',
		pos: [31.193096387538194, 121.33369906532243],
		hubs: ['sfo'],
		tz: 'Asia/Shanghai'
	},
	{
		name: 'Singapore Changi Airport (SIN)',
		city: 'Singapore 🇸🇬',
		pos: [1.3655760814659688, 103.99134627431354],
		hubs: ['hnl'],
		tz: 'Asia/Singapore'
	},
	{
		name: 'Norman Y. Mineta San Jose International Airport (SJC)',
		city: 'San Jose, USA - California 🇺🇸',
		pos: [37.363665715803144, -121.92895897613796],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Los Cabos International Airport (SJD)',
		city: 'San José del Cabo, Mexico 🇲🇽',
		pos: [23.1456048417308, -109.71832014651572],
		hubs: ['iah'],
		tz: 'Mexico/BajaSur'
	},
	{
		name: 'Luis Munoz Marin International Airport (SJU)',
		city: 'San Juan, Puerto Rico 🇵🇷, US Territories',
		pos: [18.439669035343876, -65.99915740046777],
		hubs: ['ewr', 'mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Robert L. Bradshaw International Airport (SKB)',
		city: 'Basseterre, Saint Kitts & Nevis 🇰🇳',
		pos: [17.3108341120326, -62.71916974592183],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Salt Lake City International Airport (SLC)',
		city: 'Salt Lake City, USA - Utah 🇺🇸',
		pos: [40.79051939628816, -111.97902094610347],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Sacramento International Airport (SMF)',
		city: 'Sacramento, USA - California 🇺🇸',
		pos: [38.69506863213448, -121.59003261580382],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Shannon Airport (SNN)',
		city: 'Shannon, Ireland 🇮🇪',
		pos: [52.69897449709459, -8.914894175822724],
		hubs: ['ewr'],
		tz: 'Europe/Dublin'
	},
	{
		name: 'St. Louis Lambert International Airport (STL)',
		city: 'St. Louis, USA - Missouri 🇺🇸',
		pos: [38.74996298137237, -90.37484608851419],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Princess Juliana International Airport (SXM)',
		city: 'Sint Maarten 🇸🇽',
		pos: [18.04192078940854, -63.113028459403225],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Sydney Airport (SYD)',
		city: 'Sydney, Australia 🇦🇺',
		pos: [-33.94985609315001, 151.1818694507839],
		hubs: ['hnl'],
		tz: 'Australia/Sydney'
	},
	{
		name: 'Syracuse Hancock International Airport (SYR)',
		city: 'Syracuse, USA - New York 🇺🇸',
		pos: [43.113949680808936, -76.11362234818714],
		hubs: ['ewr'],
		tz: 'US/Eastern'
	},
	{
		name: 'Chengdu Shuangliu International Airport (TFU)',
		city: 'Chengdu, China 🇨🇳',
		pos: [30.271849965598296, 104.44447857901999],
		hubs: ['sfo'],
		tz: 'Asia/Shanghai'
	},
	{
		name: 'Ben Gurion Airport (TLV)',
		city: 'Tel Aviv, Israel 🇮🇱',
		pos: [32.0060775789537, 34.885625736443],
		hubs: ['ewr'],
		tz: 'Asia/Tel_Aviv'
	},
	{
		name: 'Tampa International Airport (TPA)',
		city: 'Tampa, USA - Florida 🇺🇸',
		pos: [27.977171332699836, -82.53112747358927],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Taiwan Taoyuan International Airport (TPE)',
		city: 'Taipei, Taiwan 🇹🇼',
		pos: [25.078385372504524, 121.23404549362135],
		hubs: ['sfo'],
		tz: 'Asia/Taipei'
	},
	{
		name: 'Bonriki International Airport (TRW)',
		city: 'Tarawa, Kiribati 🇰🇮',
		pos: [1.3816943367896826, 173.14677443116932],
		hubs: ['hnl'],
		tz: 'Pacific/Tarawa'
	},
	{
		name: 'Tulsa International Airport (TUL)',
		city: 'Tulsa, USA - Oklahoma 🇺🇸',
		pos: [36.198655852278264, -95.8837988854985],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
    {
		name: 'Tucson International Airport (TUS)',
		city: 'Tucson, USA - Arizona 🇺🇸',
		pos: [32.109666228, -110.937996248],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'McGhee Tyson Airport (TYS)',
		city: 'Knoxville, USA - Tennessee 🇺🇸',
		pos: [35.81082427967718, -83.99379244250953],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Mariscal Sucre Quito International Airport (UIO)',
		city: 'Quito, Ecuador 🇪🇨',
		pos: [-0.1234546241729393, -78.3604826167644],
		hubs: ['iah'],
		tz: 'America/Lima'
	},
	{
		name: 'Venice Marco Polo Airport (VCE)',
		city: 'Venice, Italy 🇮🇹',
		pos: [45.50475205289375, 12.346683142255474],
		hubs: ['ewr'],
		tz: 'Europe/Rome'
	},
	{
		name: 'Edmonton International Airport (YEG)',
		city: 'Edmonton, Canada 🇨🇦',
		pos: [53.30623686908562, -113.58276804327605],
		hubs: ['ewr', 'sfo', 'iah'],
		tz: 'Canada/Mountain'
	},
	{
		name: 'Ottawa International Airport (YOW)',
		city: 'Ottawa, Canada 🇨🇦',
		pos: [45.31923461124119, -75.66914374429483],
		hubs: ['ewr', 'iah'],
		tz: 'Canada/Eastern'
	},
	{
		name: 'Montreal-Pierre Elliott Trudeau International Airport (YUL)',
		city: 'Montreal, Canada 🇨🇦',
		pos: [45.461698664876224, -73.7478869554127],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'Canada/Eastern'
	},
	{
		name: 'Calgary International Airport (YYC)',
		city: 'Calgary, Canada 🇨🇦',
		pos: [51.12150310000004, -114.00819495762246],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'Canada/Mountain'
	},
	{
		name: 'Vancouver International Airport (YVR)',
		city: 'Vancouver, Canada 🇨🇦',
		pos: [49.19675521104217, -123.18147272578588],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'Canada/Pacific'
	},
	{
		name: 'Toronto Pearson International Airport (YYZ)',
		city: 'Toronto, Canada 🇨🇦',
		pos: [43.67779523959123, -79.6247972173393],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'Canada/Eastern'
	},
	{
		name: 'Zurich Airport (ZRH)',
		city: 'Zurich, Switzerland 🇨🇭',
		pos: [47.461358490923374, 8.553454682550841],
		hubs: ['ewr'],
		tz: 'Europe/Zurich'
	},
];

var FLIGHT_SCHEDULE = `Route,Flight,Aircraft,Type,Route Link,Flight Link,Aircraft Link,Departure,Arrival,Pax,Turnover,Result,$/pax,$/hr
EWR - ABQ,53722247173,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/53722247173,https://www.airlines-manager.com/aircraft/show/90717078,0:45,9:59,310,"$573,228.00","$527,252.00","$1,700.81","$57,103.10"
EWR - ABQ,53722247174,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/53722247174,https://www.airlines-manager.com/aircraft/show/95950199,2:45,11:59,310,"$573,228.00","$527,252.00","$1,700.81","$57,103.10"
EWR - ABQ,53742109019,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/53742109019,https://www.airlines-manager.com/aircraft/show/90717079,10:00,19:14,310,"$573,228.00","$527,252.00","$1,700.81","$57,103.10"
EWR - ABQ,53758909782,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/53758909782,https://www.airlines-manager.com/aircraft/show/90717077,16:45,1:59,310,"$573,228.00","$527,252.00","$1,700.81","$57,103.10"
EWR - ABQ,53758909783,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/53758909783,https://www.airlines-manager.com/aircraft/show/90717076,17:45,2:59,310,"$573,228.00","$527,252.00","$1,700.81","$57,103.10"
EWR - AMS,53747970602,EWR 56B-4 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/53747970602,https://www.airlines-manager.com/aircraft/show/94521247,11:30,2:44,748,"$2,318,738.00","$2,073,912.00","$2,772.61","$136,143.02"
EWR - AMS,53747970603,EWR 56B-2 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/53747970603,https://www.airlines-manager.com/aircraft/show/90656556,13:15,4:29,748,"$2,318,738.00","$2,073,912.00","$2,772.61","$136,143.02"
EWR - AMS,53753439576,EWR 56B-7 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/53753439576,https://www.airlines-manager.com/aircraft/show/89124072,15:00,6:14,748,"$2,076,963.00","$1,893,772.00","$2,531.78","$124,317.64"
EWR - ANC,53722247513,EWR CARGO 1,A321neo-LR,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/53722247513,https://www.airlines-manager.com/aircraft/show/103406580,4:00,18:59,0,"$313,843.00","$249,989.00",#DIV/0!,"$16,684.47"
EWR - ANC,53742108963,EWR-STL-PIT 3,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/53742108963,https://www.airlines-manager.com/aircraft/show/115400546,10:00,0:59,338,"$995,760.00","$932,676.00","$2,759.40","$62,247.56"
EWR - ANC,53747970872,EWR-STL-PIT 2,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/53747970872,https://www.airlines-manager.com/aircraft/show/115400547,13:15,4:14,338,"$995,760.00","$932,676.00","$2,759.40","$62,247.56"
EWR - ANC,53758909977,EWR-STL-PIT 1,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/53758909977,https://www.airlines-manager.com/aircraft/show/115400548,18:45,9:44,338,"$995,760.00","$932,676.00","$2,759.40","$62,247.56"
EWR - ANC,53768887027,EWR-STL-PIT 4,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/53768887027,https://www.airlines-manager.com/aircraft/show/115400545,21:45,12:44,338,"$906,775.00","$851,360.00","$2,518.82","$56,820.47"
EWR - ARN,53758909976,EWR 56D-5 E,787-10,https://www.airlines-manager.com/network/showline/50072203,https://www.airlines-manager.com/network/showflight/53758909976,https://www.airlines-manager.com/aircraft/show/118644440,18:45,10:44,648,"$1,965,373.00","$1,833,890.00","$2,830.08","$114,737.64"
EWR - ATH,53722247052,EWR 84A-7 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/53722247052,https://www.airlines-manager.com/aircraft/show/94521249,0:00,19:59,852,"$3,234,067.00","$2,941,774.00","$3,452.79","$147,211.38"
EWR - ATH,53764392548,EWR 84A-4 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/53764392548,https://www.airlines-manager.com/aircraft/show/90656551,19:45,15:44,852,"$3,234,067.00","$2,941,774.00","$3,452.79","$147,211.38"
EWR - ATL,53742109043,EWR-DFW-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/53742109043,https://www.airlines-manager.com/aircraft/show/90489724,10:00,14:59,320,"$316,346.00","$255,029.00",$796.97,"$51,176.39"
EWR - ATL,53753439521,EWR-DFW-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/53753439521,https://www.airlines-manager.com/aircraft/show/90489726,14:15,19:14,320,"$316,346.00","$255,029.00",$796.97,"$51,176.39"
EWR - ATL,53758909882,EWR-DFW-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/53758909882,https://www.airlines-manager.com/aircraft/show/90489725,17:30,22:29,320,"$316,346.00","$255,029.00",$796.97,"$51,176.39"
EWR - ATL,53758909883,EWR-DFW-ATL 6 B,A319-100,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/53758909883,https://www.airlines-manager.com/aircraft/show/105222360,18:30,23:29,198,"$240,998.00","$198,928.00","$1,004.69","$39,918.66"
EWR - ATL,53764392571,EWR-DFW-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/53764392571,https://www.airlines-manager.com/aircraft/show/86238752,19:45,0:44,320,"$316,346.00","$255,029.00",$796.97,"$51,176.39"
EWR - ATL,53768887130,EWR-DFW-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/53768887130,https://www.airlines-manager.com/aircraft/show/86238753,22:15,3:14,320,"$316,346.00","$255,029.00",$796.97,"$51,176.39"
EWR - AUS,53722247331,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/53722247331,https://www.airlines-manager.com/aircraft/show/90717077,2:00,9:59,310,"$499,170.00","$457,926.00","$1,477.18","$57,360.25"
EWR - AUS,53722247332,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/53722247332,https://www.airlines-manager.com/aircraft/show/90717076,3:00,10:59,310,"$499,170.00","$457,926.00","$1,477.18","$57,360.25"
EWR - AUS,53742109018,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/53742109018,https://www.airlines-manager.com/aircraft/show/90717078,10:00,17:59,310,"$499,170.00","$457,926.00","$1,477.18","$57,360.25"
EWR - AUS,53747970676,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/53747970676,https://www.airlines-manager.com/aircraft/show/95950199,12:00,19:59,310,"$499,170.00","$457,926.00","$1,477.18","$57,360.25"
EWR - AUS,53764392510,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/53764392510,https://www.airlines-manager.com/aircraft/show/90717079,19:15,3:14,310,"$499,170.00","$457,926.00","$1,477.18","$57,360.25"
EWR - BCN,53753439655,EWR 84A-5 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/53753439655,https://www.airlines-manager.com/aircraft/show/94521250,15:45,7:44,852,"$2,615,130.00","$2,372,833.00","$2,785.02","$148,456.70"
EWR - BCN,53764392599,EWR 84A-2 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/53764392599,https://www.airlines-manager.com/aircraft/show/94521252,20:00,11:59,852,"$2,615,130.00","$2,372,833.00","$2,785.02","$148,456.70"
EWR - BDA,53735281284,EWR-YEG-BFF 5 B,A319-100,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/53735281284,https://www.airlines-manager.com/aircraft/show/115493369,8:45,13:59,198,"$243,375.00","$221,602.00","$1,119.20","$42,344.33"
EWR - BDA,53742109209,EWR-YEG-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/53742109209,https://www.airlines-manager.com/aircraft/show/98936170,11:00,16:14,320,"$321,148.00","$290,358.00",$907.37,"$55,482.42"
EWR - BDA,53747970754,EWR-YEG-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/53747970754,https://www.airlines-manager.com/aircraft/show/98936171,13:00,18:14,320,"$321,148.00","$290,358.00",$907.37,"$55,482.42"
EWR - BDA,53764392786,EWR-YEG-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/53764392786,https://www.airlines-manager.com/aircraft/show/98936168,21:00,2:14,320,"$321,148.00","$290,358.00",$907.37,"$55,482.42"
EWR - BDA,53768887147,EWR-YEG-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/53768887147,https://www.airlines-manager.com/aircraft/show/98936169,22:30,3:44,252,"$258,071.00","$229,064.00",$908.98,"$43,770.19"
EWR - BDL,53722247218,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/53722247218,https://www.airlines-manager.com/aircraft/show/108834811,1:00,3:29,310,"$89,395.00","$71,067.00",$229.25,"$28,617.58"
EWR - BDL,53742108935,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/53742108935,https://www.airlines-manager.com/aircraft/show/108466265,9:30,11:59,112,"$38,361.00","$27,163.00",$242.53,"$10,938.12"
EWR - BDL,53753439415,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/53753439415,https://www.airlines-manager.com/aircraft/show/108834810,14:00,16:29,310,"$89,395.00","$71,067.00",$229.25,"$28,617.58"
EWR - BDL,53753439416,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/53753439416,https://www.airlines-manager.com/aircraft/show/108834809,16:00,18:29,310,"$89,395.00","$71,067.00",$229.25,"$28,617.58"
EWR - BDL,53768887190,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/53768887190,https://www.airlines-manager.com/aircraft/show/108834808,23:00,1:29,310,"$89,395.00","$71,067.00",$229.25,"$28,617.58"
EWR - BER,53735281075,EWR 84B-5  B2,777-300,https://www.airlines-manager.com/network/showline/49921899,https://www.airlines-manager.com/network/showflight/53735281075,https://www.airlines-manager.com/aircraft/show/117958699,5:45,22:14,852,"$2,705,265.00","$2,453,617.00","$2,879.83","$148,854.42"
EWR - BER,53758909892,EWR 84B-1  B2,777-300,https://www.airlines-manager.com/network/showline/49921899,https://www.airlines-manager.com/network/showflight/53758909892,https://www.airlines-manager.com/aircraft/show/117958695,17:45,10:14,852,"$2,705,265.00","$2,453,617.00","$2,879.83","$148,854.42"
EWR - BFF,53722247363,EWR-YEG-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/53722247363,https://www.airlines-manager.com/aircraft/show/98936168,2:15,10:14,320,"$505,586.00","$462,875.00","$1,446.48","$57,980.17"
EWR - BFF,53722247364,EWR-YEG-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/53722247364,https://www.airlines-manager.com/aircraft/show/98936169,3:45,11:44,320,"$505,586.00","$462,875.00","$1,446.48","$57,980.17"
EWR - BFF,53753439479,EWR-YEG-BFF 5 B,A319-100,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/53753439479,https://www.airlines-manager.com/aircraft/show/115493369,14:00,21:59,198,"$381,737.00","$350,827.00","$1,771.85","$43,944.93"
EWR - BFF,53753439480,EWR-YEG-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/53753439480,https://www.airlines-manager.com/aircraft/show/98936170,16:15,0:14,320,"$505,586.00","$462,875.00","$1,446.48","$57,980.17"
EWR - BFF,53758909951,EWR-YEG-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/53758909951,https://www.airlines-manager.com/aircraft/show/98936171,18:15,2:14,320,"$505,586.00","$462,875.00","$1,446.48","$57,980.17"
EWR - BHM,53722247357,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/53722247357,https://www.airlines-manager.com/aircraft/show/116042862,2:15,7:44,310,"$345,551.00","$316,758.00","$1,021.80","$57,767.42"
EWR - BHM,53735281273,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/53735281273,https://www.airlines-manager.com/aircraft/show/116042859,8:30,13:59,310,"$345,551.00","$316,758.00","$1,021.80","$57,767.42"
EWR - BHM,53753439472,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/53753439472,https://www.airlines-manager.com/aircraft/show/116042860,14:00,19:29,310,"$345,551.00","$316,758.00","$1,021.80","$57,767.42"
EWR - BHM,53753439473,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/53753439473,https://www.airlines-manager.com/aircraft/show/116042861,15:15,20:44,310,"$345,551.00","$316,758.00","$1,021.80","$57,767.42"
EWR - BIL,53742108961,EWR-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/53742108961,https://www.airlines-manager.com/aircraft/show/116047882,10:00,18:59,320,"$563,348.00","$517,391.00","$1,616.85","$57,594.55"
EWR - BIL,53747970689,EWR-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/53747970689,https://www.airlines-manager.com/aircraft/show/116047885,12:00,20:59,320,"$563,348.00","$517,391.00","$1,616.85","$57,594.55"
EWR - BIL,53764392848,EWR-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/53764392848,https://www.airlines-manager.com/aircraft/show/116047884,21:15,6:14,320,"$563,348.00","$517,391.00","$1,616.85","$57,594.55"
EWR - BIL,53768887159,EWR-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/53768887159,https://www.airlines-manager.com/aircraft/show/116047883,22:45,7:44,320,"$563,348.00","$517,391.00","$1,616.85","$57,594.55"
EWR - BNA,53722247458,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/53722247458,https://www.airlines-manager.com/aircraft/show/104610408,3:15,8:14,310,"$321,737.00","$292,397.00",$943.22,"$58,674.98"
EWR - BNA,53735281271,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/53735281271,https://www.airlines-manager.com/aircraft/show/104610409,8:30,13:29,310,"$321,737.00","$292,397.00",$943.22,"$58,674.98"
EWR - BNA,53747970742,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/53747970742,https://www.airlines-manager.com/aircraft/show/104610410,13:00,17:59,310,"$321,737.00","$292,397.00",$943.22,"$58,674.98"
EWR - BNA,53758909828,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/53758909828,https://www.airlines-manager.com/aircraft/show/96421247,17:00,21:59,112,"$152,744.00","$133,838.00","$1,194.98","$26,857.12"
EWR - BNA,53764392819,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/53764392819,https://www.airlines-manager.com/aircraft/show/104610407,21:15,2:14,310,"$321,737.00","$292,397.00",$943.22,"$58,674.98"
EWR - BOI,53722247289,EWR-BOI-PBI 5 B,A319-100,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/53722247289,https://www.airlines-manager.com/aircraft/show/110582846,1:30,11:59,198,"$490,416.00","$452,174.00","$2,283.71","$43,132.66"
EWR - BOI,53742108984,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/53742108984,https://www.airlines-manager.com/aircraft/show/104418460,10:00,20:29,310,"$652,968.00","$605,281.00","$1,952.52","$57,737.46"
EWR - BOI,53753439593,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/53753439593,https://www.airlines-manager.com/aircraft/show/104418463,15:00,1:29,310,"$652,968.00","$605,281.00","$1,952.52","$57,737.46"
EWR - BOI,53758909764,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/53758909764,https://www.airlines-manager.com/aircraft/show/104418462,16:30,2:59,310,"$652,968.00","$605,281.00","$1,952.52","$57,737.46"
EWR - BOI,53768887227,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/53768887227,https://www.airlines-manager.com/aircraft/show/104418461,23:30,9:59,310,"$652,968.00","$605,281.00","$1,952.52","$57,737.46"
EWR - BOS,53722247429,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/53722247429,https://www.airlines-manager.com/aircraft/show/104034464,3:00,5:59,216,"$93,775.00","$73,989.00",$342.54,"$24,800.78"
EWR - BOS,53742109000,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/53742109000,https://www.airlines-manager.com/aircraft/show/104034463,10:00,12:59,216,"$93,775.00","$73,989.00",$342.54,"$24,800.78"
EWR - BOS,53747970706,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/53747970706,https://www.airlines-manager.com/aircraft/show/104034462,12:45,15:44,216,"$93,775.00","$73,989.00",$342.54,"$24,800.78"
EWR - BOS,53747970707,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/53747970707,https://www.airlines-manager.com/aircraft/show/99316501,13:45,16:44,216,"$93,775.00","$73,989.00",$342.54,"$24,800.78"
EWR - BOS,53758909824,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/53758909824,https://www.airlines-manager.com/aircraft/show/104034464,17:00,19:59,216,"$93,775.00","$73,989.00",$342.54,"$24,800.78"
EWR - BOS,53764392616,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/53764392616,https://www.airlines-manager.com/aircraft/show/104034463,20:00,22:59,216,"$93,775.00","$73,989.00",$342.54,"$24,800.78"
EWR - BOS,53768887175,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/53768887175,https://www.airlines-manager.com/aircraft/show/104034462,22:45,1:44,216,"$93,775.00","$73,989.00",$342.54,"$24,800.78"
EWR - BOS,53770850191,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/53770850191,https://www.airlines-manager.com/aircraft/show/99316501,23:45,2:44,216,"$93,775.00","$73,989.00",$342.54,"$24,800.78"
EWR - BRU,53722247377,EWR 84B-1  B2,777-300,https://www.airlines-manager.com/network/showline/49921920,https://www.airlines-manager.com/network/showflight/53722247377,https://www.airlines-manager.com/aircraft/show/117958695,2:30,17:44,852,"$2,488,490.00","$2,262,476.00","$2,655.49","$148,521.40"
EWR - BRU,53753439536,EWR 84B-4  B2,777-300,https://www.airlines-manager.com/network/showline/49921920,https://www.airlines-manager.com/network/showflight/53753439536,https://www.airlines-manager.com/aircraft/show/117958698,14:30,5:44,852,"$2,488,490.00","$2,262,476.00","$2,655.49","$148,521.40"
EWR - BTV,53735281283,EWR-FCA-CID 1,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/53735281283,https://www.airlines-manager.com/aircraft/show/116042866,8:45,11:59,310,"$139,437.00","$120,222.00",$387.81,"$37,182.06"
EWR - BTV,53747970672,EWR-FCA-CID 4,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/53747970672,https://www.airlines-manager.com/aircraft/show/116042863,12:00,15:14,310,"$139,437.00","$120,222.00",$387.81,"$37,182.06"
EWR - BTV,53747970673,EWR-FCA-CID 3,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/53747970673,https://www.airlines-manager.com/aircraft/show/116042864,13:00,16:14,310,"$139,437.00","$120,222.00",$387.81,"$37,182.06"
EWR - BTV,53758909974,EWR-FCA-CID 2,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/53758909974,https://www.airlines-manager.com/aircraft/show/116042865,18:45,21:59,310,"$139,437.00","$120,222.00",$387.81,"$37,182.06"
EWR - BUF,53722247572,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/53722247572,https://www.airlines-manager.com/aircraft/show/106104450,5:30,8:44,112,"$70,545.00","$57,741.00",$515.54,"$17,858.04"
EWR - BUF,53742109160,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/53742109160,https://www.airlines-manager.com/aircraft/show/105731236,11:00,14:14,320,"$154,046.00","$130,076.00",$406.49,"$40,229.69"
EWR - BUF,53753439548,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/53753439548,https://www.airlines-manager.com/aircraft/show/88494376,14:45,17:59,320,"$154,046.00","$130,076.00",$406.49,"$40,229.69"
EWR - BUF,53758909953,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/53758909953,https://www.airlines-manager.com/aircraft/show/88494377,18:30,21:44,320,"$154,046.00","$130,076.00",$406.49,"$40,229.69"
EWR - BUF,53768887201,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/53768887201,https://www.airlines-manager.com/aircraft/show/88494375,23:00,2:14,320,"$154,046.00","$130,076.00",$406.49,"$40,229.69"
EWR - BWI,53722247092,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/53722247092,https://www.airlines-manager.com/aircraft/show/104034464,0:15,2:59,216,"$74,600.00","$56,030.00",$259.40,"$20,498.78"
EWR - BWI,53722247093,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/53722247093,https://www.airlines-manager.com/aircraft/show/104034463,3:15,5:59,216,"$74,600.00","$56,030.00",$259.40,"$20,498.78"
EWR - BWI,53742109001,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/53742109001,https://www.airlines-manager.com/aircraft/show/104034462,10:00,12:44,216,"$74,600.00","$56,030.00",$259.40,"$20,498.78"
EWR - BWI,53742109002,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/53742109002,https://www.airlines-manager.com/aircraft/show/99316501,11:00,13:44,216,"$74,600.00","$56,030.00",$259.40,"$20,498.78"
EWR - BWI,53753439516,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/53753439516,https://www.airlines-manager.com/aircraft/show/104034464,14:15,16:59,216,"$74,600.00","$56,030.00",$259.40,"$20,498.78"
EWR - BWI,53758909851,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/53758909851,https://www.airlines-manager.com/aircraft/show/104034463,17:15,19:59,216,"$74,600.00","$56,030.00",$259.40,"$20,498.78"
EWR - BWI,53764392617,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/53764392617,https://www.airlines-manager.com/aircraft/show/104034462,20:00,22:44,216,"$74,600.00","$56,030.00",$259.40,"$20,498.78"
EWR - BWI,53764392618,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/53764392618,https://www.airlines-manager.com/aircraft/show/99316501,21:00,23:44,216,"$74,600.00","$56,030.00",$259.40,"$20,498.78"
EWR - BZN,53722247123,EWR-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/53722247123,https://www.airlines-manager.com/aircraft/show/116047885,0:30,9:44,320,"$590,320.00","$543,416.00","$1,698.18","$58,853.72"
EWR - BZN,53747970627,EWR-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/53747970627,https://www.airlines-manager.com/aircraft/show/116047884,12:00,21:14,320,"$590,320.00","$543,416.00","$1,698.18","$58,853.72"
EWR - BZN,53747970628,EWR-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/53747970628,https://www.airlines-manager.com/aircraft/show/116047883,13:30,22:44,320,"$590,320.00","$543,416.00","$1,698.18","$58,853.72"
EWR - BZN,53768887136,EWR-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/53768887136,https://www.airlines-manager.com/aircraft/show/116047882,22:30,7:44,320,"$590,320.00","$543,416.00","$1,698.18","$58,853.72"
EWR - CAK,53735281262,EWR-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/53735281262,https://www.airlines-manager.com/aircraft/show/116047884,8:30,11:59,320,"$190,274.00","$166,172.00",$519.29,"$47,704.88"
EWR - CAK,53742108960,EWR-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/53742108960,https://www.airlines-manager.com/aircraft/show/116047883,10:00,13:29,320,"$190,274.00","$166,172.00",$519.29,"$47,704.88"
EWR - CAK,53764392448,EWR-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/53764392448,https://www.airlines-manager.com/aircraft/show/116047882,19:00,22:29,320,"$190,274.00","$166,172.00",$519.29,"$47,704.88"
EWR - CAK,53764392449,EWR-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/53764392449,https://www.airlines-manager.com/aircraft/show/116047885,21:00,0:29,284,"$177,287.00","$153,553.00",$540.68,"$44,082.20"
EWR - CDG,53722247443,EWR 56A-5 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/53722247443,https://www.airlines-manager.com/aircraft/show/106813011,3:00,18:14,748,"$2,328,133.00","$2,067,702.00","$2,764.31","$135,735.36"
EWR - CDG,53735281279,EWR 56A-6 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/53735281279,https://www.airlines-manager.com/aircraft/show/106813012,8:45,23:59,748,"$2,328,133.00","$2,067,702.00","$2,764.31","$135,735.36"
EWR - CDG,53764392442,EWR 56A-2 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/53764392442,https://www.airlines-manager.com/aircraft/show/106813008,19:00,10:14,559,"$1,742,337.00","$1,565,449.00","$2,800.45","$102,764.70"
EWR - CHS,53735281257,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/53735281257,https://www.airlines-manager.com/aircraft/show/110044463,8:30,12:59,310,"$288,564.00","$263,620.00",$850.39,"$58,800.00"
EWR - CHS,53747970650,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/53747970650,https://www.airlines-manager.com/aircraft/show/110113039,12:00,16:29,112,"$137,777.00","$121,714.00","$1,086.73","$27,148.10"
EWR - CHS,53753439527,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/53753439527,https://www.airlines-manager.com/aircraft/show/110044466,14:15,18:44,310,"$288,564.00","$263,620.00",$850.39,"$58,800.00"
EWR - CHS,53764392820,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/53764392820,https://www.airlines-manager.com/aircraft/show/110044465,21:15,1:44,310,"$288,564.00","$263,620.00",$850.39,"$58,800.00"
EWR - CHS,53768887186,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/53768887186,https://www.airlines-manager.com/aircraft/show/110044464,23:00,3:29,279,"$271,719.00","$247,309.00",$886.41,"$55,161.86"
EWR - CID,53722247227,EWR-FCA-CID 4,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/53722247227,https://www.airlines-manager.com/aircraft/show/116042863,1:15,6:59,310,"$356,225.00","$327,616.00","$1,056.83","$57,142.33"
EWR - CID,53722247228,EWR-FCA-CID 3,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/53722247228,https://www.airlines-manager.com/aircraft/show/116042864,2:15,7:59,310,"$356,225.00","$327,616.00","$1,056.83","$57,142.33"
EWR - CID,53742108953,EWR-FCA-CID 2,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/53742108953,https://www.airlines-manager.com/aircraft/show/116042865,10:00,15:44,310,"$356,225.00","$327,616.00","$1,056.83","$57,142.33"
EWR - CID,53768887056,EWR-FCA-CID 1,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/53768887056,https://www.airlines-manager.com/aircraft/show/116042866,22:00,3:44,293,"$344,795.00","$316,611.00","$1,080.58","$55,222.85"
EWR - CLE,53722247295,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/53722247295,https://www.airlines-manager.com/aircraft/show/106104450,1:45,5:29,112,"$91,793.00","$77,214.00",$689.41,"$20,682.32"
EWR - CLE,53722247296,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/53722247296,https://www.airlines-manager.com/aircraft/show/105731236,5:00,8:44,320,"$197,828.00","$171,014.00",$534.42,"$45,807.32"
EWR - CLE,53742109164,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/53742109164,https://www.airlines-manager.com/aircraft/show/88494376,11:00,14:44,320,"$197,828.00","$171,014.00",$534.42,"$45,807.32"
EWR - CLE,53753439549,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/53753439549,https://www.airlines-manager.com/aircraft/show/88494377,14:45,18:29,320,"$197,828.00","$171,014.00",$534.42,"$45,807.32"
EWR - CLE,53764392513,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/53764392513,https://www.airlines-manager.com/aircraft/show/88494375,19:15,22:59,320,"$197,828.00","$171,014.00",$534.42,"$45,807.32"
EWR - CLT,53722247329,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/53722247329,https://www.airlines-manager.com/aircraft/show/104034462,1:45,5:59,216,"$189,426.00","$162,915.00",$754.24,"$38,483.86"
EWR - CLT,53722247330,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/53722247330,https://www.airlines-manager.com/aircraft/show/99316501,2:45,6:59,216,"$189,426.00","$162,915.00",$754.24,"$38,483.86"
EWR - CLT,53742108993,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/53742108993,https://www.airlines-manager.com/aircraft/show/104034464,10:00,14:14,216,"$189,426.00","$162,915.00",$754.24,"$38,483.86"
EWR - CLT,53747970792,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/53747970792,https://www.airlines-manager.com/aircraft/show/104034463,13:00,17:14,216,"$189,426.00","$162,915.00",$754.24,"$38,483.86"
EWR - CLT,53753439654,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/53753439654,https://www.airlines-manager.com/aircraft/show/104034462,15:45,19:59,216,"$189,426.00","$162,915.00",$754.24,"$38,483.86"
EWR - CLT,53758909792,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/53758909792,https://www.airlines-manager.com/aircraft/show/99316501,16:45,20:59,216,"$189,426.00","$162,915.00",$754.24,"$38,483.86"
EWR - CLT,53764392613,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/53764392613,https://www.airlines-manager.com/aircraft/show/104034464,20:00,0:14,216,"$189,426.00","$162,915.00",$754.24,"$38,483.86"
EWR - CLT,53768887203,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/53768887203,https://www.airlines-manager.com/aircraft/show/104034463,23:00,3:14,216,"$189,426.00","$162,915.00",$754.24,"$38,483.86"
EWR - CMH,53722247535,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/53722247535,https://www.airlines-manager.com/aircraft/show/104610409,4:30,8:29,310,"$222,861.00","$198,707.00",$640.99,"$49,884.60"
EWR - CMH,53735281268,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/53735281268,https://www.airlines-manager.com/aircraft/show/104610410,8:30,12:29,310,"$222,861.00","$198,707.00",$640.99,"$49,884.60"
EWR - CMH,53747970785,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/53747970785,https://www.airlines-manager.com/aircraft/show/96421247,13:00,16:59,112,"$103,792.00","$88,495.00",$790.13,"$22,216.32"
EWR - CMH,53758909852,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/53758909852,https://www.airlines-manager.com/aircraft/show/104610407,17:15,21:14,310,"$222,861.00","$198,707.00",$640.99,"$49,884.60"
EWR - CMH,53768887209,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/53768887209,https://www.airlines-manager.com/aircraft/show/104610408,23:15,3:14,310,"$222,861.00","$198,707.00",$640.99,"$49,884.60"
EWR - COS,53722247276,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/53722247276,https://www.airlines-manager.com/aircraft/show/108834808,1:30,9:59,310,"$533,336.00","$491,684.00","$1,586.08","$57,958.82"
EWR - COS,53722247277,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/53722247277,https://www.airlines-manager.com/aircraft/show/108834811,3:30,11:59,310,"$533,336.00","$491,684.00","$1,586.08","$57,958.82"
EWR - COS,53747970759,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/53747970759,https://www.airlines-manager.com/aircraft/show/108466265,13:00,21:29,112,"$250,557.00","$222,739.00","$1,988.74","$26,256.07"
EWR - COS,53758909754,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/53758909754,https://www.airlines-manager.com/aircraft/show/108834810,16:30,0:59,310,"$533,336.00","$491,684.00","$1,586.08","$57,958.82"
EWR - COS,53758909755,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/53758909755,https://www.airlines-manager.com/aircraft/show/108834809,18:30,2:59,310,"$533,336.00","$491,684.00","$1,586.08","$57,958.82"
EWR - CUN,53722247159,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/53722247159,https://www.airlines-manager.com/aircraft/show/106581306,0:45,8:44,320,"$520,632.00","$472,856.00","$1,477.68","$59,230.40"
EWR - CUN,53722247160,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/53722247160,https://www.airlines-manager.com/aircraft/show/106581305,2:15,10:14,320,"$520,632.00","$472,856.00","$1,477.68","$59,230.40"
EWR - CUN,53747970727,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/53747970727,https://www.airlines-manager.com/aircraft/show/106581304,13:00,20:59,320,"$520,632.00","$472,856.00","$1,477.68","$59,230.40"
EWR - CUN,53753439537,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/53753439537,https://www.airlines-manager.com/aircraft/show/106581307,14:30,22:29,320,"$520,632.00","$472,856.00","$1,477.68","$59,230.40"
EWR - CUN,53768887063,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/53768887063,https://www.airlines-manager.com/aircraft/show/86238754,22:15,6:14,320,"$520,632.00","$472,856.00","$1,477.68","$59,230.40"
EWR - CVG,53722247094,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/53722247094,https://www.airlines-manager.com/aircraft/show/104610409,0:15,4:29,310,"$269,700.00","$241,975.00",$780.56,"$57,159.45"
EWR - CVG,53722247095,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/53722247095,https://www.airlines-manager.com/aircraft/show/104610410,4:15,8:29,310,"$269,700.00","$241,975.00",$780.56,"$57,159.45"
EWR - CVG,53735281241,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/53735281241,https://www.airlines-manager.com/aircraft/show/96421247,8:15,12:29,112,"$127,389.00","$109,763.00",$980.03,"$25,928.27"
EWR - CVG,53742108913,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/53742108913,https://www.airlines-manager.com/aircraft/show/107576645,9:00,13:14,0,"$69,000.00","$50,078.00",$0.00,"$11,829.45"
EWR - CVG,53747970788,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/53747970788,https://www.airlines-manager.com/aircraft/show/104610407,13:00,17:14,310,"$269,700.00","$241,975.00",$780.56,"$57,159.45"
EWR - CVG,53764392452,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/53764392452,https://www.airlines-manager.com/aircraft/show/104610408,19:00,23:14,310,"$269,700.00","$241,975.00",$780.56,"$57,159.45"
EWR - DEN,53722247302,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/53722247302,https://www.airlines-manager.com/aircraft/show/86270785,1:45,9:59,310,"$528,869.00","$464,763.00","$1,499.24","$56,448.95"
EWR - DEN,53722247303,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/53722247303,https://www.airlines-manager.com/aircraft/show/90452835,2:45,10:59,310,"$528,869.00","$464,763.00","$1,499.24","$56,448.95"
EWR - DEN,53742109037,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/53742109037,https://www.airlines-manager.com/aircraft/show/87153196,10:00,18:14,310,"$528,869.00","$464,763.00","$1,499.24","$56,448.95"
EWR - DEN,53742109038,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/53742109038,https://www.airlines-manager.com/aircraft/show/86270783,11:00,19:14,310,"$528,869.00","$464,763.00","$1,499.24","$56,448.95"
EWR - DEN,53753439694,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/53753439694,https://www.airlines-manager.com/aircraft/show/90452833,16:00,0:14,310,"$528,869.00","$464,763.00","$1,499.24","$56,448.95"
EWR - DEN,53758909839,EWR-DEN-SLC 6 B,A319-100,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/53758909839,https://www.airlines-manager.com/aircraft/show/105223076,17:00,1:14,198,"$398,370.00","$347,016.00","$1,752.61","$42,147.69"
EWR - DFW,53722247379,EWR-DFW-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/53722247379,https://www.airlines-manager.com/aircraft/show/90489724,2:30,9:59,320,"$473,208.00","$408,093.00","$1,275.29","$54,533.59"
EWR - DFW,53722247380,EWR-DFW-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/53722247380,https://www.airlines-manager.com/aircraft/show/86238753,3:30,10:59,320,"$473,208.00","$408,093.00","$1,275.29","$54,533.59"
EWR - DFW,53742109041,EWR-DFW-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/53742109041,https://www.airlines-manager.com/aircraft/show/90489725,10:00,17:29,320,"$473,208.00","$408,093.00","$1,275.29","$54,533.59"
EWR - DFW,53742109042,EWR-DFW-ATL 6 B,A319-100,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/53742109042,https://www.airlines-manager.com/aircraft/show/105222360,11:00,18:29,198,"$357,750.00","$312,148.00","$1,576.51","$41,712.43"
EWR - DFW,53747970696,EWR-DFW-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/53747970696,https://www.airlines-manager.com/aircraft/show/86238752,12:15,19:44,320,"$473,208.00","$408,093.00","$1,275.29","$54,533.59"
EWR - DFW,53764392498,EWR-DFW-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/53764392498,https://www.airlines-manager.com/aircraft/show/90489726,19:15,2:44,320,"$473,208.00","$408,093.00","$1,275.29","$54,533.59"
EWR - DSM,53722247336,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/53722247336,https://www.airlines-manager.com/aircraft/show/110113039,2:00,7:59,112,"$177,448.00","$157,408.00","$1,405.43","$26,307.74"
EWR - DSM,53722247337,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/53722247337,https://www.airlines-manager.com/aircraft/show/110044466,4:15,10:14,310,"$375,134.00","$344,684.00","$1,111.88","$57,607.35"
EWR - DSM,53747970687,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/53747970687,https://www.airlines-manager.com/aircraft/show/110044465,12:00,17:59,310,"$375,134.00","$344,684.00","$1,111.88","$57,607.35"
EWR - DSM,53747970688,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/53747970688,https://www.airlines-manager.com/aircraft/show/110044464,13:45,19:44,310,"$375,134.00","$344,684.00","$1,111.88","$57,607.35"
EWR - DSM,53768887149,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/53768887149,https://www.airlines-manager.com/aircraft/show/110044463,22:30,4:29,274,"$349,297.00","$319,847.00","$1,167.32","$53,456.32"
EWR - DTW,53722247466,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/53722247466,https://www.airlines-manager.com/aircraft/show/92003921,3:30,7:29,320,"$226,021.00","$188,774.00",$589.92,"$47,390.96"
EWR - DTW,53742109028,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/53742109028,https://www.airlines-manager.com/aircraft/show/92003925,10:00,13:59,320,"$226,021.00","$188,774.00",$589.92,"$47,390.96"
EWR - DTW,53747970887,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/53747970887,https://www.airlines-manager.com/aircraft/show/92003924,13:30,17:29,320,"$226,021.00","$188,774.00",$589.92,"$47,390.96"
EWR - DTW,53768887028,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/53768887028,https://www.airlines-manager.com/aircraft/show/92003923,21:45,1:44,320,"$226,021.00","$188,774.00",$589.92,"$47,390.96"
EWR - DTW,53768887029,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/53768887029,https://www.airlines-manager.com/aircraft/show/92003922,22:15,2:14,320,"$226,021.00","$188,774.00",$589.92,"$47,390.96"
EWR - DTW,53768887030,EWR CARGO 1,A321neo-LR,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/53768887030,https://www.airlines-manager.com/aircraft/show/103406580,22:45,2:44,0,"$77,953.00","$46,687.00",#DIV/0!,"$11,720.59"
EWR - DUB,53722247480,EWR 56C-2 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/53722247480,https://www.airlines-manager.com/aircraft/show/106721557,3:30,16:59,598,"$1,654,265.00","$1,543,001.00","$2,580.27","$114,437.65"
EWR - DUB,53722247481,EWR 56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/53722247481,https://www.airlines-manager.com/aircraft/show/106721559,5:15,18:44,598,"$1,654,265.00","$1,543,001.00","$2,580.27","$114,437.65"
EWR - DUB,53742109108,EWR 56C-6 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/53742109108,https://www.airlines-manager.com/aircraft/show/106721561,10:30,23:59,598,"$1,654,265.00","$1,543,001.00","$2,580.27","$114,437.65"
EWR - EDI,53722247520,EWR 56C-3 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/53722247520,https://www.airlines-manager.com/aircraft/show/106721558,4:15,17:59,598,"$1,639,756.00","$1,532,465.00","$2,562.65","$111,587.26"
EWR - EDI,53735281106,EWR 56C-5 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/53735281106,https://www.airlines-manager.com/aircraft/show/106721560,6:00,19:44,598,"$1,639,756.00","$1,532,465.00","$2,562.65","$111,587.26"
EWR - EDI,53764392569,EWR 56C-5 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/53764392569,https://www.airlines-manager.com/aircraft/show/106721560,19:45,9:29,598,"$1,639,756.00","$1,532,465.00","$2,562.65","$111,587.26"
EWR - ELP,53722247131,EWR-ELP-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/53722247131,https://www.airlines-manager.com/aircraft/show/103365577,0:30,9:59,320,"$590,378.00","$540,596.00","$1,689.36","$57,004.85"
EWR - ELP,53722247132,EWR-ELP-SAT 5 B,A319-100,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/53722247132,https://www.airlines-manager.com/aircraft/show/110582847,2:30,11:59,198,"$444,845.00","$408,642.00","$2,063.85","$43,090.54"
EWR - ELP,53742108998,EWR-ELP-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/53742108998,https://www.airlines-manager.com/aircraft/show/103365578,10:00,19:29,320,"$590,378.00","$540,596.00","$1,689.36","$57,004.85"
EWR - ELP,53747970665,EWR-ELP-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/53747970665,https://www.airlines-manager.com/aircraft/show/103365575,12:00,21:29,320,"$590,378.00","$540,596.00","$1,689.36","$57,004.85"
EWR - ELP,53753439704,EWR-ELP-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/53753439704,https://www.airlines-manager.com/aircraft/show/103365576,16:15,1:44,320,"$590,378.00","$540,596.00","$1,689.36","$57,004.85"
EWR - FAR,53722247308,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/53722247308,https://www.airlines-manager.com/aircraft/show/86270784,1:45,8:29,310,"$423,560.00","$390,593.00","$1,259.98","$58,008.86"
EWR - FAR,53722247309,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/53722247309,https://www.airlines-manager.com/aircraft/show/86270786,5:00,11:44,310,"$423,560.00","$390,593.00","$1,259.98","$58,008.86"
EWR - FAR,53753439582,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/53753439582,https://www.airlines-manager.com/aircraft/show/86270787,15:00,21:44,310,"$423,560.00","$390,593.00","$1,259.98","$58,008.86"
EWR - FAR,53764392505,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/53764392505,https://www.airlines-manager.com/aircraft/show/90452834,19:15,1:59,310,"$423,560.00","$390,593.00","$1,259.98","$58,008.86"
EWR - FCA,53747970674,EWR-FCA-CID 1,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/53747970674,https://www.airlines-manager.com/aircraft/show/116042866,12:00,21:59,310,"$623,241.00","$578,539.00","$1,866.25","$57,950.48"
EWR - FCA,53753439627,EWR-FCA-CID 4,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/53753439627,https://www.airlines-manager.com/aircraft/show/116042863,15:15,1:14,310,"$623,241.00","$578,539.00","$1,866.25","$57,950.48"
EWR - FCA,53753439628,EWR-FCA-CID 3,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/53753439628,https://www.airlines-manager.com/aircraft/show/116042864,16:15,2:14,310,"$623,241.00","$578,539.00","$1,866.25","$57,950.48"
EWR - FCA,53768887057,EWR-FCA-CID 2,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/53768887057,https://www.airlines-manager.com/aircraft/show/116042865,22:00,7:59,310,"$623,241.00","$578,539.00","$1,866.25","$57,950.48"
EWR - FCO,53722247397,EWR 84A-2 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/53722247397,https://www.airlines-manager.com/aircraft/show/94521252,2:30,19:59,852,"$2,900,124.00","$2,626,210.00","$3,082.41","$150,212.20"
EWR - FCO,53747970656,EWR 84A-3 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/53747970656,https://www.airlines-manager.com/aircraft/show/90656553,12:00,5:29,852,"$2,900,124.00","$2,626,210.00","$3,082.41","$150,212.20"
EWR - FLL,53722247236,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/53722247236,https://www.airlines-manager.com/aircraft/show/107576645,1:15,7:29,0,"$102,887.00","$77,339.00",$0.00,"$12,407.33"
EWR - FLL,53722247237,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/53722247237,https://www.airlines-manager.com/aircraft/show/92003924,3:45,9:59,320,"$388,966.00","$348,953.00","$1,090.48","$55,981.76"
EWR - FLL,53735281080,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/53735281080,https://www.airlines-manager.com/aircraft/show/92003922,5:45,11:59,320,"$388,966.00","$348,953.00","$1,090.48","$55,981.76"
EWR - FLL,53742109124,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/53742109124,https://www.airlines-manager.com/aircraft/show/92003921,11:00,17:14,320,"$388,966.00","$348,953.00","$1,090.48","$55,981.76"
EWR - FLL,53747970623,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/53747970623,https://www.airlines-manager.com/aircraft/show/92003923,12:00,18:14,320,"$388,966.00","$348,953.00","$1,090.48","$55,981.76"
EWR - FLL,53758909880,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/53758909880,https://www.airlines-manager.com/aircraft/show/92003925,17:30,23:44,320,"$388,966.00","$348,953.00","$1,090.48","$55,981.76"
EWR - FRA,53722247398,EWR 56B-5 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/53722247398,https://www.airlines-manager.com/aircraft/show/94521253,2:45,18:44,748,"$2,440,394.00","$2,175,490.00","$2,908.41","$136,109.91"
EWR - FRA,53722247399,EWR 56B-3 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/53722247399,https://www.airlines-manager.com/aircraft/show/90656555,4:30,20:29,748,"$2,440,394.00","$2,175,490.00","$2,908.41","$136,109.91"
EWR - FRA,53735281125,EWR 56B-1 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/53735281125,https://www.airlines-manager.com/aircraft/show/94521251,6:15,22:14,748,"$2,202,225.00","$2,001,233.00","$2,675.45","$125,207.49"
EWR - FSD,53722247527,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/53722247527,https://www.airlines-manager.com/aircraft/show/107161240,4:15,10:59,310,"$411,278.00","$378,797.00","$1,221.93","$56,256.98"
EWR - FSD,53742108891,EWR-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/53742108891,https://www.airlines-manager.com/aircraft/show/86782214,9:00,15:44,112,"$193,854.00","$172,324.00","$1,538.61","$25,592.67"
EWR - FSD,53742108892,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/53742108892,https://www.airlines-manager.com/aircraft/show/107161239,11:00,17:44,310,"$411,278.00","$378,797.00","$1,221.93","$56,256.98"
EWR - FSD,53753439629,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/53753439629,https://www.airlines-manager.com/aircraft/show/107161241,15:15,21:59,310,"$411,278.00","$378,797.00","$1,221.93","$56,256.98"
EWR - FSD,53758909946,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/53758909946,https://www.airlines-manager.com/aircraft/show/107161238,18:15,0:59,279,"$386,833.00","$355,346.00","$1,273.64","$52,774.16"
EWR - GRR,53735281272,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/53735281272,https://www.airlines-manager.com/aircraft/show/116042862,8:30,12:59,310,"$277,025.00","$252,083.00",$813.17,"$56,226.69"
EWR - GRR,53753439471,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/53753439471,https://www.airlines-manager.com/aircraft/show/116042859,14:00,18:29,310,"$277,025.00","$252,083.00",$813.17,"$56,226.69"
EWR - GRR,53764392534,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/53764392534,https://www.airlines-manager.com/aircraft/show/116042860,19:30,23:59,310,"$277,025.00","$252,083.00",$813.17,"$56,226.69"
EWR - GRR,53764392536,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/53764392536,https://www.airlines-manager.com/aircraft/show/116042861,20:45,1:14,310,"$277,025.00","$252,083.00",$813.17,"$56,226.69"
EWR - HEL,53764392624,EWR 56D-2 E,787-10,https://www.airlines-manager.com/network/showline/50072206,https://www.airlines-manager.com/network/showflight/53764392624,https://www.airlines-manager.com/aircraft/show/118644437,20:00,12:44,648,"$2,045,741.00","$1,910,556.00","$2,948.39","$114,176.65"
EWR - IAH,53722247473,EWR-IAH-LAS 3,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/53722247473,https://www.airlines-manager.com/aircraft/show/105859512,3:30,10:59,338,"$517,432.00","$469,570.00","$1,389.26","$62,748.78"
EWR - IAH,53722247474,EWR-IAH-LAS 5,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/53722247474,https://www.airlines-manager.com/aircraft/show/105859514,4:30,11:59,338,"$517,432.00","$469,570.00","$1,389.26","$62,748.78"
EWR - IAH,53735281206,EWR-IAH-LAS 1,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/53735281206,https://www.airlines-manager.com/aircraft/show/105859510,7:30,14:59,338,"$517,432.00","$469,570.00","$1,389.26","$62,748.78"
EWR - IAH,53742109158,EWR-IAH-LAS 2,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/53742109158,https://www.airlines-manager.com/aircraft/show/105859511,11:00,18:29,338,"$517,432.00","$469,570.00","$1,389.26","$62,748.78"
EWR - IAH,53747970658,EWR-IAH-LAS 4,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/53747970658,https://www.airlines-manager.com/aircraft/show/105859513,12:00,19:29,338,"$517,432.00","$469,570.00","$1,389.26","$62,748.78"
EWR - IAH,53758909980,EWR-IAH-LAS 6,ERJ-175,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/53758909980,https://www.airlines-manager.com/aircraft/show/105864236,18:45,2:14,112,"$225,538.00","$193,331.00","$1,726.17","$25,834.88"
EWR - ICT,53722247221,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/53722247221,https://www.airlines-manager.com/aircraft/show/108834810,1:00,7:59,310,"$441,027.00","$406,327.00","$1,310.73","$58,185.25"
EWR - ICT,53722247222,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/53722247222,https://www.airlines-manager.com/aircraft/show/108834809,3:00,9:59,310,"$441,027.00","$406,327.00","$1,310.73","$58,185.25"
EWR - ICT,53742109143,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/53742109143,https://www.airlines-manager.com/aircraft/show/108834808,11:00,17:59,310,"$441,027.00","$406,327.00","$1,310.73","$58,185.25"
EWR - ICT,53747970758,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/53747970758,https://www.airlines-manager.com/aircraft/show/108834811,13:00,19:59,310,"$441,027.00","$406,327.00","$1,310.73","$58,185.25"
EWR - ICT,53768886988,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/53768886988,https://www.airlines-manager.com/aircraft/show/108466265,21:30,4:29,112,"$208,777.00","$185,757.00","$1,658.54","$26,600.05"
EWR - IND,53722247110,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/53722247110,https://www.airlines-manager.com/aircraft/show/88494376,0:30,4:59,320,"$294,206.00","$262,638.00",$820.74,"$58,580.97"
EWR - IND,53722247111,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/53722247111,https://www.airlines-manager.com/aircraft/show/88494377,4:15,8:44,320,"$294,206.00","$262,638.00",$820.74,"$58,580.97"
EWR - IND,53742109171,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/53742109171,https://www.airlines-manager.com/aircraft/show/88494375,11:00,15:29,320,"$294,206.00","$262,638.00",$820.74,"$58,580.97"
EWR - IND,53758909864,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/53758909864,https://www.airlines-manager.com/aircraft/show/106104450,17:30,21:59,112,"$140,444.00","$122,789.00","$1,096.33","$27,387.88"
EWR - IND,53764392765,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/53764392765,https://www.airlines-manager.com/aircraft/show/105731236,20:45,1:14,320,"$294,206.00","$262,638.00",$820.74,"$58,580.97"
EWR - JAN,53722247349,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/53722247349,https://www.airlines-manager.com/aircraft/show/90452834,2:00,8:14,310,"$387,663.00","$356,982.00","$1,151.55","$57,269.84"
EWR - JAN,53735281255,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/53735281255,https://www.airlines-manager.com/aircraft/show/86270784,8:30,14:44,310,"$387,663.00","$356,982.00","$1,151.55","$57,269.84"
EWR - JAN,53747970661,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/53747970661,https://www.airlines-manager.com/aircraft/show/86270786,12:00,18:14,310,"$387,663.00","$356,982.00","$1,151.55","$57,269.84"
EWR - JAN,53768887016,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/53768887016,https://www.airlines-manager.com/aircraft/show/86270787,21:45,3:59,310,"$387,663.00","$356,982.00","$1,151.55","$57,269.84"
EWR - JAX,53722247367,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/53722247367,https://www.airlines-manager.com/aircraft/show/104610407,2:15,7:29,310,"$336,410.00","$307,387.00",$991.57,"$58,736.37"
EWR - JAX,53735281240,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/53735281240,https://www.airlines-manager.com/aircraft/show/104610408,8:15,13:29,310,"$336,410.00","$307,387.00",$991.57,"$58,736.37"
EWR - JAX,53753439427,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/53753439427,https://www.airlines-manager.com/aircraft/show/104610409,14:00,19:14,310,"$336,410.00","$307,387.00",$991.57,"$58,736.37"
EWR - JAX,53758909914,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/53758909914,https://www.airlines-manager.com/aircraft/show/104610410,18:00,23:14,310,"$336,410.00","$307,387.00",$991.57,"$58,736.37"
EWR - JAX,53768887055,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/53768887055,https://www.airlines-manager.com/aircraft/show/96421247,22:00,3:14,112,"$159,716.00","$140,870.00","$1,257.77","$26,917.83"
EWR - KEF,53758909798,EWR 56C-2 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/53758909798,https://www.airlines-manager.com/aircraft/show/106721557,17:00,4:14,598,"$1,336,918.00","$1,247,907.00","$2,086.80","$111,089.64"
EWR - KEF,53758909799,EWR 56C-3 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/53758909799,https://www.airlines-manager.com/aircraft/show/106721558,18:00,5:14,598,"$1,336,918.00","$1,247,907.00","$2,086.80","$111,089.64"
EWR - KEF,53758909800,EWR 56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/53758909800,https://www.airlines-manager.com/aircraft/show/106721559,18:45,5:59,598,"$1,336,918.00","$1,247,907.00","$2,086.80","$111,089.64"
EWR - LAS,53722247063,EWR-IAH-LAS 2,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/53722247063,https://www.airlines-manager.com/aircraft/show/105859511,0:15,10:59,338,"$734,476.00","$670,312.00","$1,983.17","$62,451.43"
EWR - LAS,53722247064,EWR-IAH-LAS 4,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/53722247064,https://www.airlines-manager.com/aircraft/show/105859513,1:15,11:59,338,"$734,476.00","$670,312.00","$1,983.17","$62,451.43"
EWR - LAS,53722247065,EWR-IAH-LAS 6,ERJ-175,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/53722247065,https://www.airlines-manager.com/aircraft/show/105864236,2:15,12:59,112,"$317,374.00","$273,329.00","$2,440.44","$25,465.43"
EWR - LAS,53747970657,EWR-IAH-LAS 5,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/53747970657,https://www.airlines-manager.com/aircraft/show/105859514,12:00,22:44,338,"$734,476.00","$670,312.00","$1,983.17","$62,451.43"
EWR - LAS,53753439605,EWR-IAH-LAS 1,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/53753439605,https://www.airlines-manager.com/aircraft/show/105859510,15:00,1:44,338,"$734,476.00","$670,312.00","$1,983.17","$62,451.43"
EWR - LAS,53758909777,EWR-IAH-LAS 3,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/53758909777,https://www.airlines-manager.com/aircraft/show/105859512,16:45,3:29,338,"$734,476.00","$670,312.00","$1,983.17","$62,451.43"
EWR - LAX,53722247028,EWR-SFO-LAX 4,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/53722247028,https://www.airlines-manager.com/aircraft/show/89233030,0:00,11:29,400,"$933,133.00","$841,910.00","$2,104.78","$73,315.82"
EWR - LAX,53722247029,EWR-SFO-LAX 5,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/53722247029,https://www.airlines-manager.com/aircraft/show/89233027,2:00,13:29,400,"$933,133.00","$841,910.00","$2,104.78","$73,315.82"
EWR - LAX,53747970702,EWR-SFO-LAX 1,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/53747970702,https://www.airlines-manager.com/aircraft/show/83716137,12:30,23:59,400,"$933,133.00","$841,910.00","$2,104.78","$73,315.82"
EWR - LAX,53753439430,EWR-SFO-LAX 2,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/53753439430,https://www.airlines-manager.com/aircraft/show/89233028,14:00,1:29,400,"$933,133.00","$841,910.00","$2,104.78","$73,315.82"
EWR - LAX,53753439431,EWR-SFO-LAX 3,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/53753439431,https://www.airlines-manager.com/aircraft/show/89233029,15:30,2:59,400,"$933,133.00","$841,910.00","$2,104.78","$73,315.82"
EWR - LHR,53722247354,EWR 56A-1 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/53722247354,https://www.airlines-manager.com/aircraft/show/106813007,2:15,16:44,748,"$2,220,102.00","$1,968,499.00","$2,631.68","$135,914.78"
EWR - LHR,53747970697,EWR 56A-4 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/53747970697,https://www.airlines-manager.com/aircraft/show/106813010,12:30,2:59,748,"$2,220,102.00","$1,968,499.00","$2,631.68","$135,914.78"
EWR - LHR,53758909942,EWR 56A-5 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/53758909942,https://www.airlines-manager.com/aircraft/show/106813011,18:15,8:44,748,"$2,003,986.00","$1,809,626.00","$2,419.29","$124,945.41"
EWR - LIS,53722247574,EWR 84A-4 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/53722247574,https://www.airlines-manager.com/aircraft/show/90656551,5:30,19:44,852,"$2,328,457.00","$2,120,122.00","$2,488.41","$148,954.71"
EWR - LIS,53747970694,EWR 84A-1 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/53747970694,https://www.airlines-manager.com/aircraft/show/90656554,12:15,2:29,852,"$2,328,457.00","$2,120,122.00","$2,488.41","$148,954.71"
EWR - LIT,53735281259,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/53735281259,https://www.airlines-manager.com/aircraft/show/86270787,8:30,14:44,310,"$393,416.00","$362,459.00","$1,169.22","$58,148.50"
EWR - LIT,53747970716,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/53747970716,https://www.airlines-manager.com/aircraft/show/90452834,13:00,19:14,310,"$393,416.00","$362,459.00","$1,169.22","$58,148.50"
EWR - LIT,53764392542,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/53764392542,https://www.airlines-manager.com/aircraft/show/86270784,19:30,1:44,310,"$393,416.00","$362,459.00","$1,169.22","$58,148.50"
EWR - LIT,53768887179,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/53768887179,https://www.airlines-manager.com/aircraft/show/86270786,22:45,4:59,310,"$393,416.00","$362,459.00","$1,169.22","$58,148.50"
EWR - MAD,53722247039,EWR 56B-7 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/53722247039,https://www.airlines-manager.com/aircraft/show/89124072,0:00,14:59,748,"$2,289,510.00","$2,036,551.00","$2,722.66","$135,921.09"
EWR - MAD,53764392754,EWR 56B-3 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/53764392754,https://www.airlines-manager.com/aircraft/show/90656555,20:30,11:29,748,"$2,289,510.00","$2,036,551.00","$2,722.66","$135,921.09"
EWR - MAD,53768887108,EWR 56B-1 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/53768887108,https://www.airlines-manager.com/aircraft/show/94521251,22:15,13:14,748,"$2,065,725.00","$1,872,334.00","$2,503.12","$124,961.11"
EWR - MBJ,53764392549,EWR 56D-1 E,787-10,https://www.airlines-manager.com/network/showline/50072192,https://www.airlines-manager.com/network/showflight/53764392549,https://www.airlines-manager.com/aircraft/show/118644436,19:45,3:14,648,"$941,073.00","$879,294.00","$1,356.94","$117,500.31"
EWR - MCI,53722247484,EWR-ELP-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/53722247484,https://www.airlines-manager.com/aircraft/show/103365578,3:45,9:59,320,"$393,086.00","$354,110.00","$1,106.59","$56,809.09"
EWR - MCI,53735281086,EWR-ELP-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/53735281086,https://www.airlines-manager.com/aircraft/show/103365575,5:45,11:59,320,"$393,086.00","$354,110.00","$1,106.59","$56,809.09"
EWR - MCI,53742108994,EWR-ELP-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/53742108994,https://www.airlines-manager.com/aircraft/show/103365576,10:00,16:14,320,"$393,086.00","$354,110.00","$1,106.59","$56,809.09"
EWR - MCI,53747970877,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/53747970877,https://www.airlines-manager.com/aircraft/show/107576645,13:15,19:29,0,"$103,090.00","$77,943.00",$0.00,"$12,504.22"
EWR - MCI,53758909945,EWR-ELP-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/53758909945,https://www.airlines-manager.com/aircraft/show/103365577,18:15,0:29,320,"$393,086.00","$354,110.00","$1,106.59","$56,809.09"
EWR - MCI,53764392634,EWR-ELP-SAT 5 B,A319-100,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/53764392634,https://www.airlines-manager.com/aircraft/show/110582847,20:15,2:29,198,"$297,566.00","$269,839.00","$1,362.82","$43,289.68"
EWR - MCO,53722247297,EWR-IAH-LAS 1,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/53722247297,https://www.airlines-manager.com/aircraft/show/105859510,1:45,7:29,338,"$389,629.00","$350,334.00","$1,036.49","$61,104.77"
EWR - MCO,53742109205,EWR-IAH-LAS 3,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/53742109205,https://www.airlines-manager.com/aircraft/show/105859512,11:00,16:44,338,"$389,629.00","$350,334.00","$1,036.49","$61,104.77"
EWR - MCO,53747970775,EWR-IAH-LAS 6,ERJ-175,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/53747970775,https://www.airlines-manager.com/aircraft/show/105864236,13:00,18:44,112,"$170,762.00","$144,844.00","$1,293.25","$25,263.49"
EWR - MCO,53758909961,EWR-IAH-LAS 2,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/53758909961,https://www.airlines-manager.com/aircraft/show/105859511,18:30,0:14,338,"$389,629.00","$350,334.00","$1,036.49","$61,104.77"
EWR - MCO,53764392522,EWR-IAH-LAS 4,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/53764392522,https://www.airlines-manager.com/aircraft/show/105859513,19:30,1:14,338,"$389,629.00","$350,334.00","$1,036.49","$61,104.77"
EWR - MCO,53768887170,EWR-IAH-LAS 5,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/53768887170,https://www.airlines-manager.com/aircraft/show/105859514,22:45,4:29,335,"$387,576.00","$348,345.00","$1,039.84","$60,757.85"
EWR - MEM,53722247246,EWR-RNO-MEM 4,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/53722247246,https://www.airlines-manager.com/aircraft/show/99920619,1:15,6:59,320,"$361,672.00","$324,614.00","$1,014.42","$56,618.72"
EWR - MEM,53722247247,EWR-RNO-MEM 3,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/53722247247,https://www.airlines-manager.com/aircraft/show/99920620,3:45,9:29,320,"$361,672.00","$324,614.00","$1,014.42","$56,618.72"
EWR - MEM,53742109102,EWR-RNO-MEM 2,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/53742109102,https://www.airlines-manager.com/aircraft/show/99920621,10:15,15:59,320,"$361,672.00","$324,614.00","$1,014.42","$56,618.72"
EWR - MEM,53764392520,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/53764392520,https://www.airlines-manager.com/aircraft/show/107576645,19:30,1:14,0,"$96,286.00","$72,851.00",$0.00,"$12,706.57"
EWR - MEM,53764392521,EWR-RNO-MEM 5 B,A319-100,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/53764392521,https://www.airlines-manager.com/aircraft/show/100096560,20:15,1:59,198,"$274,266.00","$248,050.00","$1,252.78","$43,264.53"
EWR - MEM,53768887000,EWR-RNO-MEM 1,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/53768887000,https://www.airlines-manager.com/aircraft/show/99920622,21:30,3:14,320,"$361,672.00","$324,614.00","$1,014.42","$56,618.72"
EWR - MEX,53722247313,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/53722247313,https://www.airlines-manager.com/aircraft/show/92003923,1:45,11:59,320,"$638,807.00","$575,207.00","$1,797.52","$56,209.15"
EWR - MEX,53742108985,EWR-DTW-YYZ 6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/53742108985,https://www.airlines-manager.com/aircraft/show/104258433,10:00,20:14,216,"$486,413.00","$439,908.00","$2,036.61","$42,987.75"
EWR - MEX,53747970625,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/53747970625,https://www.airlines-manager.com/aircraft/show/92003922,12:00,22:14,320,"$638,807.00","$575,207.00","$1,797.52","$56,209.15"
EWR - MEX,53758909855,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/53758909855,https://www.airlines-manager.com/aircraft/show/92003921,17:15,3:29,320,"$638,807.00","$575,207.00","$1,797.52","$56,209.15"
EWR - MEX,53758909856,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/53758909856,https://www.airlines-manager.com/aircraft/show/92003924,17:30,3:44,320,"$638,807.00","$575,207.00","$1,797.52","$56,209.15"
EWR - MEX,53764392636,EWR-DTW-YYZ 6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/53764392636,https://www.airlines-manager.com/aircraft/show/104258433,20:15,6:29,216,"$486,413.00","$439,908.00","$2,036.61","$42,987.75"
EWR - MEX,53770850182,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/53770850182,https://www.airlines-manager.com/aircraft/show/92003925,23:45,9:59,298,"$600,687.00","$538,625.00","$1,807.47","$52,634.36"
EWR - MHT,53722247486,EWR-FCA-CID 1,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/53722247486,https://www.airlines-manager.com/aircraft/show/116042866,3:45,6:44,310,"$126,333.00","$107,196.00",$345.79,"$35,931.62"
EWR - MHT,53742108906,EWR-FCA-CID 4,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/53742108906,https://www.airlines-manager.com/aircraft/show/116042863,9:00,11:59,310,"$126,333.00","$107,196.00",$345.79,"$35,931.62"
EWR - MHT,53742108907,EWR-FCA-CID 3,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/53742108907,https://www.airlines-manager.com/aircraft/show/116042864,10:00,12:59,310,"$126,333.00","$107,196.00",$345.79,"$35,931.62"
EWR - MHT,53742108908,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/53742108908,https://www.airlines-manager.com/aircraft/show/98887257,11:00,13:59,112,"$56,299.00","$44,452.00",$396.89,"$14,900.11"
EWR - MHT,53753439647,EWR-FCA-CID 2,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/53753439647,https://www.airlines-manager.com/aircraft/show/116042865,15:45,18:44,310,"$126,333.00","$107,196.00",$345.79,"$35,931.62"
EWR - MIA,53722247391,EWR-MIA-ORD 5,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/53722247391,https://www.airlines-manager.com/aircraft/show/113251309,2:30,8:44,338,"$429,805.00","$386,719.00","$1,144.14","$62,040.48"
EWR - MIA,53722247392,EWR-MIA-ORD 1,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/53722247392,https://www.airlines-manager.com/aircraft/show/113251305,4:00,10:14,338,"$429,805.00","$386,719.00","$1,144.14","$62,040.48"
EWR - MIA,53742108967,EWR-MIA-ORD 2,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/53742108967,https://www.airlines-manager.com/aircraft/show/113251306,10:00,16:14,338,"$429,805.00","$386,719.00","$1,144.14","$62,040.48"
EWR - MIA,53742108968,EWR-MIA-ORD 4,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/53742108968,https://www.airlines-manager.com/aircraft/show/113251308,11:00,17:14,338,"$429,805.00","$386,719.00","$1,144.14","$62,040.48"
EWR - MIA,53758909758,EWR-MIA-ORD 3,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/53758909758,https://www.airlines-manager.com/aircraft/show/113251307,16:30,22:44,338,"$429,805.00","$386,719.00","$1,144.14","$62,040.48"
EWR - MKE,53722247464,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/53722247464,https://www.airlines-manager.com/aircraft/show/96421247,3:15,8:14,112,"$149,880.00","$131,888.00","$1,177.57","$26,465.82"
EWR - MKE,53735281217,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/53735281217,https://www.airlines-manager.com/aircraft/show/104610407,7:30,12:29,310,"$315,504.00","$287,619.00",$927.80,"$57,716.19"
EWR - MKE,53753439507,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/53753439507,https://www.airlines-manager.com/aircraft/show/104610408,14:00,18:59,310,"$315,504.00","$287,619.00",$927.80,"$57,716.19"
EWR - MKE,53764392493,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/53764392493,https://www.airlines-manager.com/aircraft/show/104610409,19:15,0:14,310,"$315,504.00","$287,619.00",$927.80,"$57,716.19"
EWR - MKE,53768887210,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/53768887210,https://www.airlines-manager.com/aircraft/show/104610410,23:15,4:14,310,"$315,504.00","$287,619.00",$927.80,"$57,716.19"
EWR - MSN,53722247394,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/53722247394,https://www.airlines-manager.com/aircraft/show/116042859,2:30,7:44,310,"$330,385.00","$303,141.00",$977.87,"$57,925.03"
EWR - MSN,53735281280,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/53735281280,https://www.airlines-manager.com/aircraft/show/116042860,8:45,13:59,310,"$330,385.00","$303,141.00",$977.87,"$57,925.03"
EWR - MSN,53742108959,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/53742108959,https://www.airlines-manager.com/aircraft/show/116042861,10:00,15:14,310,"$330,385.00","$303,141.00",$977.87,"$57,925.03"
EWR - MSN,53764392811,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/53764392811,https://www.airlines-manager.com/aircraft/show/116042862,21:00,2:14,310,"$330,385.00","$303,141.00",$977.87,"$57,925.03"
EWR - MSO,53722247176,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/53722247176,https://www.airlines-manager.com/aircraft/show/107161238,1:00,10:59,310,"$615,656.00","$570,709.00","$1,841.00","$57,166.18"
EWR - MSO,53742109207,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/53742109207,https://www.airlines-manager.com/aircraft/show/107161240,11:00,20:59,310,"$615,656.00","$570,709.00","$1,841.00","$57,166.18"
EWR - MSO,53753439653,EWR-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/53753439653,https://www.airlines-manager.com/aircraft/show/86782214,15:45,1:44,112,"$289,178.00","$258,695.00","$2,309.78","$25,912.69"
EWR - MSO,53758909896,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/53758909896,https://www.airlines-manager.com/aircraft/show/107161239,17:45,3:44,310,"$615,656.00","$570,709.00","$1,841.00","$57,166.18"
EWR - MSO,53768887049,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/53768887049,https://www.airlines-manager.com/aircraft/show/107161241,22:00,7:59,310,"$615,656.00","$570,709.00","$1,841.00","$57,166.18"
EWR - MSP,53722247557,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/53722247557,https://www.airlines-manager.com/aircraft/show/86270783,5:00,10:59,310,"$374,578.00","$335,343.00","$1,081.75","$56,046.18"
EWR - MSP,53742109035,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/53742109035,https://www.airlines-manager.com/aircraft/show/90452833,10:00,15:59,310,"$374,578.00","$335,343.00","$1,081.75","$56,046.18"
EWR - MSP,53742109036,EWR-DEN-SLC 6 B,A319-100,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/53742109036,https://www.airlines-manager.com/aircraft/show/105223076,11:00,16:59,198,"$283,918.00","$252,487.00","$1,275.19","$42,198.38"
EWR - MSP,53758909938,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/53758909938,https://www.airlines-manager.com/aircraft/show/87153196,18:15,0:14,310,"$374,578.00","$335,343.00","$1,081.75","$56,046.18"
EWR - MSP,53764392557,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/53764392557,https://www.airlines-manager.com/aircraft/show/86270785,19:45,1:44,310,"$374,578.00","$335,343.00","$1,081.75","$56,046.18"
EWR - MSP,53764392558,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/53764392558,https://www.airlines-manager.com/aircraft/show/90452835,20:45,2:44,310,"$374,578.00","$335,343.00","$1,081.75","$56,046.18"
EWR - MSY,53722247463,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/53722247463,https://www.airlines-manager.com/aircraft/show/90717079,3:15,9:59,310,"$414,563.00","$379,812.00","$1,225.20","$56,407.72"
EWR - MSY,53742109016,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/53742109016,https://www.airlines-manager.com/aircraft/show/90717077,10:00,16:44,310,"$414,563.00","$379,812.00","$1,225.20","$56,407.72"
EWR - MSY,53742109017,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/53742109017,https://www.airlines-manager.com/aircraft/show/90717076,11:00,17:44,310,"$414,563.00","$379,812.00","$1,225.20","$56,407.72"
EWR - MSY,53758909933,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/53758909933,https://www.airlines-manager.com/aircraft/show/90717078,18:00,0:44,310,"$414,563.00","$379,812.00","$1,225.20","$56,407.72"
EWR - MSY,53764392625,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/53764392625,https://www.airlines-manager.com/aircraft/show/95950199,20:00,2:44,310,"$414,563.00","$379,812.00","$1,225.20","$56,407.72"
EWR - MUC,53722247043,EWR 56C-7 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/53722247043,https://www.airlines-manager.com/aircraft/show/106721562,0:00,16:29,598,"$2,038,935.00","$1,888,864.00","$3,158.64","$114,592.36"
EWR - MUC,53742109140,EWR 56C-1 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/53742109140,https://www.airlines-manager.com/aircraft/show/106721556,11:00,3:29,598,"$2,038,935.00","$1,888,864.00","$3,158.64","$114,592.36"
EWR - MUC,53758909954,EWR 56C-7 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/53758909954,https://www.airlines-manager.com/aircraft/show/106721562,18:30,10:59,598,"$2,038,935.00","$1,888,864.00","$3,158.64","$114,592.36"
EWR - MXP,53742108947,EWR 84B-7 B2,777-300,https://www.airlines-manager.com/network/showline/49921908,https://www.airlines-manager.com/network/showflight/53742108947,https://www.airlines-manager.com/aircraft/show/117958701,10:00,2:29,852,"$2,682,820.00","$2,437,530.00","$2,860.95","$147,878.46"
EWR - MXP,53768887054,EWR 84B-3  B2,777-300,https://www.airlines-manager.com/network/showline/49921908,https://www.airlines-manager.com/network/showflight/53768887054,https://www.airlines-manager.com/aircraft/show/117958697,22:00,14:29,852,"$2,682,820.00","$2,437,530.00","$2,860.95","$147,878.46"
EWR - NAS,53722247561,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/53722247561,https://www.airlines-manager.com/aircraft/show/98379319,5:15,11:44,310,"$395,405.00","$362,404.00","$1,169.05","$55,897.79"
EWR - NAS,53747970835,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/53747970835,https://www.airlines-manager.com/aircraft/show/98379317,13:00,19:29,310,"$395,405.00","$362,404.00","$1,169.05","$55,897.79"
EWR - NAS,53758909929,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/53758909929,https://www.airlines-manager.com/aircraft/show/98379316,18:00,0:29,310,"$395,405.00","$362,404.00","$1,169.05","$55,897.79"
EWR - NAS,53764392467,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/53764392467,https://www.airlines-manager.com/aircraft/show/98379318,19:00,1:29,310,"$395,405.00","$362,404.00","$1,169.05","$55,897.79"
EWR - NAS,53764392468,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/53764392468,https://www.airlines-manager.com/aircraft/show/98379315,21:00,3:29,289,"$371,894.00","$339,683.00","$1,175.37","$52,393.26"
EWR - NRT,53722247046,EWR 56A-7 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/53722247046,https://www.airlines-manager.com/aircraft/show/106813013,0:00,2:14,748,"$3,980,848.00","$3,582,146.00","$4,788.97","$1,603,945.97"
EWR - NRT,53742109093,EWR 56A-3 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/53742109093,https://www.airlines-manager.com/aircraft/show/106813009,10:15,12:29,748,"$3,955,032.00","$3,565,413.00","$4,766.59","$1,596,453.58"
EWR - NRT,53758909789,EWR 56A-1 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/53758909789,https://www.airlines-manager.com/aircraft/show/106813007,16:45,18:59,748,"$3,558,007.00","$3,272,841.00","$4,375.46","$1,465,451.19"
EWR - OAK,53722247185,EWR-OAK-SJC 5,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/53722247185,https://www.airlines-manager.com/aircraft/show/104717239,1:00,12:59,310,"$735,917.00","$680,343.00","$2,194.65","$56,774.10"
EWR - OAK,53742108982,EWR-OAK-SJC 1,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/53742108982,https://www.airlines-manager.com/aircraft/show/104717243,10:00,21:59,310,"$735,917.00","$680,343.00","$2,194.65","$56,774.10"
EWR - OAK,53747970637,EWR-OAK-SJC 2,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/53747970637,https://www.airlines-manager.com/aircraft/show/104717242,12:00,23:59,310,"$735,917.00","$680,343.00","$2,194.65","$56,774.10"
EWR - OAK,53753439467,EWR-OAK-SJC 3,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/53753439467,https://www.airlines-manager.com/aircraft/show/104717241,14:00,1:59,310,"$735,917.00","$680,343.00","$2,194.65","$56,774.10"
EWR - OAK,53768887150,EWR-OAK-SJC 4,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/53768887150,https://www.airlines-manager.com/aircraft/show/104717240,22:30,10:29,310,"$735,917.00","$680,343.00","$2,194.65","$56,774.10"
EWR - OKC,53722247316,EWR-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/53722247316,https://www.airlines-manager.com/aircraft/show/86782214,1:45,8:59,112,"$217,580.00","$193,834.00","$1,730.66","$26,797.33"
EWR - OKC,53722247317,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/53722247317,https://www.airlines-manager.com/aircraft/show/107161239,3:45,10:59,310,"$460,963.00","$425,234.00","$1,371.72","$58,788.11"
EWR - OKC,53735281230,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/53735281230,https://www.airlines-manager.com/aircraft/show/107161241,8:00,15:14,310,"$460,963.00","$425,234.00","$1,371.72","$58,788.11"
EWR - OKC,53742109153,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/53742109153,https://www.airlines-manager.com/aircraft/show/107161238,11:00,18:14,310,"$460,963.00","$425,234.00","$1,371.72","$58,788.11"
EWR - OKC,53764392801,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/53764392801,https://www.airlines-manager.com/aircraft/show/107161240,21:00,4:14,310,"$460,963.00","$425,234.00","$1,371.72","$58,788.11"
EWR - OMA,53722247393,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/53722247393,https://www.airlines-manager.com/aircraft/show/104418460,2:30,8:59,310,"$401,849.00","$368,874.00","$1,189.92","$56,895.73"
EWR - OMA,53735281203,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/53735281203,https://www.airlines-manager.com/aircraft/show/104418463,7:30,13:59,310,"$401,849.00","$368,874.00","$1,189.92","$56,895.73"
EWR - OMA,53742108983,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/53742108983,https://www.airlines-manager.com/aircraft/show/104418462,10:00,16:29,310,"$401,849.00","$368,874.00","$1,189.92","$56,895.73"
EWR - OMA,53758909826,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/53758909826,https://www.airlines-manager.com/aircraft/show/104418461,17:00,23:29,310,"$401,849.00","$368,874.00","$1,189.92","$56,895.73"
EWR - OMA,53764392488,EWR-BOI-PBI 5 B,A319-100,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/53764392488,https://www.airlines-manager.com/aircraft/show/110582846,19:00,1:29,194,"$300,961.00","$274,675.00","$1,415.85","$42,366.32"
EWR - ONT,53722247013,EWR-SMF-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/53722247013,https://www.airlines-manager.com/aircraft/show/94889153,0:00,11:29,320,"$702,981.00","$644,277.00","$2,013.37","$56,105.40"
EWR - ONT,53722247014,EWR-SMF-ONT 5,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/53722247014,https://www.airlines-manager.com/aircraft/show/94889154,2:00,13:29,320,"$702,981.00","$644,277.00","$2,013.37","$56,105.40"
EWR - ONT,53747970619,EWR-SMF-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/53747970619,https://www.airlines-manager.com/aircraft/show/94889150,11:45,23:14,320,"$702,981.00","$644,277.00","$2,013.37","$56,105.40"
EWR - ONT,53747970620,EWR-SMF-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/53747970620,https://www.airlines-manager.com/aircraft/show/94889151,13:15,0:44,320,"$702,981.00","$644,277.00","$2,013.37","$56,105.40"
EWR - ONT,53753439545,EWR-SMF-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/53753439545,https://www.airlines-manager.com/aircraft/show/94889152,14:45,2:14,298,"$673,090.00","$615,809.00","$2,066.47","$53,626.33"
EWR - ORD,53722247556,EWR-MIA-ORD 2,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/53722247556,https://www.airlines-manager.com/aircraft/show/113251306,5:00,9:59,338,"$340,455.00","$293,420.00",$868.11,"$58,880.27"
EWR - ORD,53742109107,EWR-MIA-ORD 1,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/53742109107,https://www.airlines-manager.com/aircraft/show/113251305,10:15,15:14,338,"$340,455.00","$293,420.00",$868.11,"$58,880.27"
EWR - ORD,53747970601,EWR-MIA-ORD 3,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/53747970601,https://www.airlines-manager.com/aircraft/show/113251307,11:30,16:29,338,"$340,455.00","$293,420.00",$868.11,"$58,880.27"
EWR - ORD,53758909850,EWR-MIA-ORD 4,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/53758909850,https://www.airlines-manager.com/aircraft/show/113251308,17:15,22:14,338,"$340,455.00","$293,420.00",$868.11,"$58,880.27"
EWR - ORD,53768886998,EWR-MIA-ORD 5,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/53768886998,https://www.airlines-manager.com/aircraft/show/113251309,21:30,2:29,338,"$340,455.00","$293,420.00",$868.11,"$58,880.27"
EWR - ORF,53722247359,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/53722247359,https://www.airlines-manager.com/aircraft/show/88494375,2:15,5:29,320,"$153,174.00","$129,624.00",$405.08,"$40,089.90"
EWR - ORF,53742109210,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/53742109210,https://www.airlines-manager.com/aircraft/show/106104450,11:00,14:14,112,"$70,275.00","$57,673.00",$514.94,"$17,837.01"
EWR - ORF,53753439525,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/53753439525,https://www.airlines-manager.com/aircraft/show/105731236,14:15,17:29,320,"$153,174.00","$129,624.00",$405.08,"$40,089.90"
EWR - ORF,53758909906,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/53758909906,https://www.airlines-manager.com/aircraft/show/88494376,18:00,21:14,320,"$153,174.00","$129,624.00",$405.08,"$40,089.90"
EWR - ORF,53768887013,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/53768887013,https://www.airlines-manager.com/aircraft/show/88494377,21:45,0:59,320,"$153,174.00","$129,624.00",$405.08,"$40,089.90"
EWR - OSL,53764392573,EWR 56D-4 E,787-10,https://www.airlines-manager.com/network/showline/50072202,https://www.airlines-manager.com/network/showflight/53764392573,https://www.airlines-manager.com/aircraft/show/118644439,20:00,11:14,648,"$1,884,538.00","$1,756,389.00","$2,710.48","$115,299.06"
EWR - PBI,53722247285,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/53722247285,https://www.airlines-manager.com/aircraft/show/104418463,1:30,7:29,310,"$379,359.00","$346,918.00","$1,119.09","$57,980.72"
EWR - PBI,53722247286,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/53722247286,https://www.airlines-manager.com/aircraft/show/104418462,3:00,8:59,310,"$379,359.00","$346,918.00","$1,119.09","$57,980.72"
EWR - PBI,53742109122,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/53742109122,https://www.airlines-manager.com/aircraft/show/104418461,11:00,16:59,310,"$379,359.00","$346,918.00","$1,119.09","$57,980.72"
EWR - PBI,53747970757,EWR-BOI-PBI 5 B,A319-100,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/53747970757,https://www.airlines-manager.com/aircraft/show/110582846,13:00,18:59,198,"$287,177.00","$261,181.00","$1,319.10","$43,651.42"
EWR - PBI,53764392750,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/53764392750,https://www.airlines-manager.com/aircraft/show/104418460,20:30,2:29,310,"$379,359.00","$346,918.00","$1,119.09","$57,980.72"
EWR - PDX,53722247025,EWR-PHX-PDX 3,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/53722247025,https://www.airlines-manager.com/aircraft/show/113595213,0:00,11:29,338,"$757,836.00","$705,129.00","$2,086.18","$61,404.56"
EWR - PDX,53722247026,EWR-PHX-PDX 4,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/53722247026,https://www.airlines-manager.com/aircraft/show/113595214,2:00,13:29,338,"$757,836.00","$705,129.00","$2,086.18","$61,404.56"
EWR - PDX,53722247027,EWR-PHX-PDX 5,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/53722247027,https://www.airlines-manager.com/aircraft/show/113595215,5:00,16:29,338,"$757,836.00","$705,129.00","$2,086.18","$61,404.56"
EWR - PDX,53735281147,EWR-PHX-PDX 6 B,A319-100,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/53735281147,https://www.airlines-manager.com/aircraft/show/99219630,6:30,17:59,198,"$526,507.00","$481,810.00","$2,433.38","$41,957.33"
EWR - PDX,53742109105,EWR-PHX-PDX 1,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/53742109105,https://www.airlines-manager.com/aircraft/show/113595211,10:15,21:44,338,"$757,836.00","$705,129.00","$2,086.18","$61,404.56"
EWR - PDX,53747970695,EWR-PHX-PDX 2,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/53747970695,https://www.airlines-manager.com/aircraft/show/113595212,12:15,23:44,304,"$711,269.00","$660,445.00","$2,172.52","$57,513.35"
EWR - PHX,53722246998,EWR-PHX-PDX 1,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/53722246998,https://www.airlines-manager.com/aircraft/show/113595211,0:00,10:14,338,"$704,047.00","$646,677.00","$1,913.25","$63,193.19"
EWR - PHX,53722246999,EWR-PHX-PDX 2,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/53722246999,https://www.airlines-manager.com/aircraft/show/113595212,2:00,12:14,338,"$704,047.00","$646,677.00","$1,913.25","$63,193.19"
EWR - PHX,53747970611,EWR-PHX-PDX 3,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/53747970611,https://www.airlines-manager.com/aircraft/show/113595213,11:30,21:44,338,"$704,047.00","$646,677.00","$1,913.25","$63,193.19"
EWR - PHX,53747970612,EWR-PHX-PDX 4,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/53747970612,https://www.airlines-manager.com/aircraft/show/113595214,13:30,23:44,338,"$704,047.00","$646,677.00","$1,913.25","$63,193.19"
EWR - PHX,53758909773,EWR-PHX-PDX 5,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/53758909773,https://www.airlines-manager.com/aircraft/show/113595215,16:30,2:44,338,"$704,047.00","$646,677.00","$1,913.25","$63,193.19"
EWR - PHX,53758909774,EWR-PHX-PDX 6 B,A319-100,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/53758909774,https://www.airlines-manager.com/aircraft/show/99219630,18:00,4:29,198,"$489,624.00","$441,509.00","$2,229.84","$42,115.33"
EWR - PIT,53722247519,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/53722247519,https://www.airlines-manager.com/aircraft/show/98887257,4:15,7:29,112,"$77,415.00","$63,055.00",$562.99,"$19,501.55"
EWR - PIT,53735281143,EWR-STL-PIT 3,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/53735281143,https://www.airlines-manager.com/aircraft/show/115400546,6:30,9:44,338,"$182,214.00","$159,602.00",$472.20,"$49,361.44"
EWR - PIT,53742108964,EWR-STL-PIT 2,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/53742108964,https://www.airlines-manager.com/aircraft/show/115400547,10:00,13:14,338,"$182,214.00","$159,602.00",$472.20,"$49,361.44"
EWR - PIT,53747970753,EWR-STL-PIT 4,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/53747970753,https://www.airlines-manager.com/aircraft/show/115400545,13:00,16:14,338,"$182,214.00","$159,602.00",$472.20,"$49,361.44"
EWR - PIT,53753439639,EWR-STL-PIT 1,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/53753439639,https://www.airlines-manager.com/aircraft/show/115400548,15:30,18:44,338,"$182,214.00","$159,602.00",$472.20,"$49,361.44"
EWR - PIT,53764392532,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/53764392532,https://www.airlines-manager.com/aircraft/show/98887257,19:30,22:44,112,"$77,415.00","$63,055.00",$562.99,"$19,501.55"
EWR - PRG,53742109096,EWR 84B-2  B2,777-300,https://www.airlines-manager.com/network/showline/44327652,https://www.airlines-manager.com/network/showflight/53742109096,https://www.airlines-manager.com/aircraft/show/117958696,10:15,2:59,852,"$2,735,955.00","$2,492,473.00","$2,925.44","$148,952.57"
EWR - PRG,53768887129,EWR 84B-5  B2,777-300,https://www.airlines-manager.com/network/showline/44327652,https://www.airlines-manager.com/network/showflight/53768887129,https://www.airlines-manager.com/aircraft/show/117958699,22:15,14:59,852,"$2,735,955.00","$2,492,473.00","$2,925.44","$148,952.57"
EWR - PVD,53722247282,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/53722247282,https://www.airlines-manager.com/aircraft/show/110044466,1:30,4:14,310,"$98,927.00","$81,292.00",$262.23,"$29,740.98"
EWR - PVD,53742108917,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/53742108917,https://www.airlines-manager.com/aircraft/show/110044465,9:15,11:59,310,"$98,927.00","$81,292.00",$262.23,"$29,740.98"
EWR - PVD,53742108918,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/53742108918,https://www.airlines-manager.com/aircraft/show/110044464,11:00,13:44,310,"$98,927.00","$81,292.00",$262.23,"$29,740.98"
EWR - PVD,53764392547,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/53764392547,https://www.airlines-manager.com/aircraft/show/110044463,19:45,22:29,310,"$98,927.00","$81,292.00",$262.23,"$29,740.98"
EWR - PVD,53768887213,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/53768887213,https://www.airlines-manager.com/aircraft/show/110113039,23:15,1:59,112,"$42,468.00","$31,610.00",$282.23,"$11,564.63"
EWR - PWM,53722247534,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/53722247534,https://www.airlines-manager.com/aircraft/show/110044463,4:30,7:44,310,"$154,039.00","$134,989.00",$435.45,"$41,749.18"
EWR - PWM,53735281289,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/53735281289,https://www.airlines-manager.com/aircraft/show/110113039,8:45,11:59,112,"$70,011.00","$58,085.00",$518.62,"$17,964.43"
EWR - PWM,53742109139,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/53742109139,https://www.airlines-manager.com/aircraft/show/110044466,11:00,14:14,310,"$154,039.00","$134,989.00",$435.45,"$41,749.18"
EWR - PWM,53758909913,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/53758909913,https://www.airlines-manager.com/aircraft/show/110044465,18:00,21:14,310,"$154,039.00","$134,989.00",$435.45,"$41,749.18"
EWR - PWM,53764392550,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/53764392550,https://www.airlines-manager.com/aircraft/show/110044464,19:45,22:59,299,"$150,846.00","$131,881.00",$441.07,"$40,787.94"
EWR - RAP,53722247047,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/53722247047,https://www.airlines-manager.com/aircraft/show/116042860,0:00,7:59,310,"$495,290.00","$458,274.00","$1,478.30","$57,403.84"
EWR - RAP,53722247048,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/53722247048,https://www.airlines-manager.com/aircraft/show/116042861,1:15,9:14,310,"$495,290.00","$458,274.00","$1,478.30","$57,403.84"
EWR - RAP,53747970720,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/53747970720,https://www.airlines-manager.com/aircraft/show/116042862,13:00,20:59,310,"$495,290.00","$458,274.00","$1,478.30","$57,403.84"
EWR - RAP,53758909959,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/53758909959,https://www.airlines-manager.com/aircraft/show/116042859,18:30,2:29,310,"$495,290.00","$458,274.00","$1,478.30","$57,403.84"
EWR - RDU,53722247233,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/53722247233,https://www.airlines-manager.com/aircraft/show/105731236,1:15,4:59,320,"$200,581.00","$172,613.00",$539.42,"$46,235.63"
EWR - RDU,53722247234,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/53722247234,https://www.airlines-manager.com/aircraft/show/88494376,5:00,8:44,320,"$200,581.00","$172,613.00",$539.42,"$46,235.63"
EWR - RDU,53742109169,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/53742109169,https://www.airlines-manager.com/aircraft/show/88494377,11:00,14:44,320,"$200,581.00","$172,613.00",$539.42,"$46,235.63"
EWR - RDU,53753439635,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/53753439635,https://www.airlines-manager.com/aircraft/show/88494375,15:30,19:14,320,"$200,581.00","$172,613.00",$539.42,"$46,235.63"
EWR - RDU,53768887053,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/53768887053,https://www.airlines-manager.com/aircraft/show/106104450,22:00,1:44,112,"$93,025.00","$77,828.00",$694.89,"$20,846.79"
EWR - RIC,53722247190,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/53722247190,https://www.airlines-manager.com/aircraft/show/88494377,1:00,4:14,320,"$139,037.00","$115,616.00",$361.30,"$35,757.53"
EWR - RIC,53722247191,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/53722247191,https://www.airlines-manager.com/aircraft/show/88494375,5:30,8:44,320,"$139,037.00","$115,616.00",$361.30,"$35,757.53"
EWR - RIC,53753439530,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/53753439530,https://www.airlines-manager.com/aircraft/show/106104450,14:15,17:29,112,"$62,634.00","$50,117.00",$447.47,"$15,500.10"
EWR - RIC,53758909875,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/53758909875,https://www.airlines-manager.com/aircraft/show/105731236,17:30,20:44,320,"$139,037.00","$115,616.00",$361.30,"$35,757.53"
EWR - RIC,53764392817,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/53764392817,https://www.airlines-manager.com/aircraft/show/88494376,21:15,0:29,320,"$139,037.00","$115,616.00",$361.30,"$35,757.53"
EWR - RNO,53722247343,EWR-RNO-MEM 5 B,A319-100,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/53722247343,https://www.airlines-manager.com/aircraft/show/100096560,2:00,13:29,198,"$529,840.00","$488,053.00","$2,464.91","$42,500.99"
EWR - RNO,53742109095,EWR-RNO-MEM 1,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/53742109095,https://www.airlines-manager.com/aircraft/show/99920622,10:15,21:29,320,"$702,795.00","$645,835.00","$2,018.23","$57,492.73"
EWR - RNO,53753439434,EWR-RNO-MEM 4,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/53753439434,https://www.airlines-manager.com/aircraft/show/99920619,14:00,1:14,320,"$702,795.00","$645,835.00","$2,018.23","$57,492.73"
EWR - RNO,53758909775,EWR-RNO-MEM 3,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/53758909775,https://www.airlines-manager.com/aircraft/show/99920620,16:30,3:44,320,"$702,795.00","$645,835.00","$2,018.23","$57,492.73"
EWR - RNO,53768887127,EWR-RNO-MEM 2,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/53768887127,https://www.airlines-manager.com/aircraft/show/99920621,22:15,9:29,320,"$702,795.00","$645,835.00","$2,018.23","$57,492.73"
EWR - RSW,53722247449,EWR-RNO-MEM 1,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/53722247449,https://www.airlines-manager.com/aircraft/show/99920622,3:15,9:29,320,"$388,911.00","$350,141.00","$1,094.19","$56,172.35"
EWR - RSW,53735281178,EWR-RNO-MEM 4,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/53735281178,https://www.airlines-manager.com/aircraft/show/99920619,7:00,13:14,320,"$388,911.00","$350,141.00","$1,094.19","$56,172.35"
EWR - RSW,53742109100,EWR-RNO-MEM 3,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/53742109100,https://www.airlines-manager.com/aircraft/show/99920620,10:15,16:29,320,"$388,911.00","$350,141.00","$1,094.19","$56,172.35"
EWR - RSW,53753439436,EWR-RNO-MEM 5 B,A319-100,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/53753439436,https://www.airlines-manager.com/aircraft/show/100096560,14:00,20:14,198,"$294,881.00","$267,322.00","$1,350.11","$42,885.88"
EWR - RSW,53753439437,EWR-RNO-MEM 2,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/53753439437,https://www.airlines-manager.com/aircraft/show/99920621,16:00,22:14,320,"$388,911.00","$350,141.00","$1,094.19","$56,172.35"
EWR - SAN,53722247040,EWR-MIA-ORD 3,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/53722247040,https://www.airlines-manager.com/aircraft/show/113251307,0:00,11:29,338,"$775,493.00","$723,197.00","$2,139.64","$62,977.97"
EWR - SAN,53742108966,EWR-MIA-ORD 5,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/53742108966,https://www.airlines-manager.com/aircraft/show/113251309,10:00,21:29,338,"$775,493.00","$723,197.00","$2,139.64","$62,977.97"
EWR - SAN,53753439625,EWR-MIA-ORD 1,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/53753439625,https://www.airlines-manager.com/aircraft/show/113251305,15:15,2:44,338,"$775,493.00","$723,197.00","$2,139.64","$62,977.97"
EWR - SAN,53753439626,EWR-MIA-ORD 2,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/53753439626,https://www.airlines-manager.com/aircraft/show/113251306,16:15,3:44,338,"$775,493.00","$723,197.00","$2,139.64","$62,977.97"
EWR - SAN,53768887062,EWR-MIA-ORD 4,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/53768887062,https://www.airlines-manager.com/aircraft/show/113251308,22:15,9:44,338,"$775,493.00","$723,197.00","$2,139.64","$62,977.97"
EWR - SAT,53722247328,EWR-ELP-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/53722247328,https://www.airlines-manager.com/aircraft/show/103365576,1:45,9:59,320,"$517,703.00","$473,909.00","$1,480.97","$57,559.80"
EWR - SAT,53742108997,EWR-ELP-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/53742108997,https://www.airlines-manager.com/aircraft/show/103365577,10:00,18:14,320,"$517,703.00","$473,909.00","$1,480.97","$57,559.80"
EWR - SAT,53747970685,EWR-ELP-SAT 5 B,A319-100,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/53747970685,https://www.airlines-manager.com/aircraft/show/110582847,12:00,20:14,198,"$390,698.00","$358,994.00","$1,813.10","$43,602.51"
EWR - SAT,53764392544,EWR-ELP-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/53764392544,https://www.airlines-manager.com/aircraft/show/103365578,19:30,3:44,320,"$517,703.00","$473,909.00","$1,480.97","$57,559.80"
EWR - SAT,53768886992,EWR-ELP-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/53768886992,https://www.airlines-manager.com/aircraft/show/103365575,21:30,5:44,320,"$517,703.00","$473,909.00","$1,480.97","$57,559.80"
EWR - SAV,53722247533,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/53722247533,https://www.airlines-manager.com/aircraft/show/108466265,4:30,9:29,112,"$146,318.00","$129,401.00","$1,155.37","$25,966.76"
EWR - SAV,53742108889,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/53742108889,https://www.airlines-manager.com/aircraft/show/108834810,9:00,13:59,310,"$307,563.00","$281,428.00",$907.83,"$56,473.85"
EWR - SAV,53742108890,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/53742108890,https://www.airlines-manager.com/aircraft/show/108834809,11:00,15:59,310,"$307,563.00","$281,428.00",$907.83,"$56,473.85"
EWR - SAV,53758909912,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/53758909912,https://www.airlines-manager.com/aircraft/show/108834808,18:00,22:59,310,"$307,563.00","$281,428.00",$907.83,"$56,473.85"
EWR - SAV,53764392585,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/53764392585,https://www.airlines-manager.com/aircraft/show/108834811,20:00,0:59,258,"$277,418.00","$252,292.00",$977.88,"$50,627.16"
EWR - SDF,53722247499,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/53722247499,https://www.airlines-manager.com/aircraft/show/86270787,4:00,8:29,310,"$295,460.00","$268,367.00",$865.70,"$59,858.81"
EWR - SDF,53735281244,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/53735281244,https://www.airlines-manager.com/aircraft/show/90452834,8:15,12:44,310,"$295,460.00","$268,367.00",$865.70,"$59,858.81"
EWR - SDF,53753439584,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/53753439584,https://www.airlines-manager.com/aircraft/show/86270784,15:00,19:29,310,"$295,460.00","$268,367.00",$865.70,"$59,858.81"
EWR - SDF,53758909947,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/53758909947,https://www.airlines-manager.com/aircraft/show/86270786,18:15,22:44,310,"$295,460.00","$268,367.00",$865.70,"$59,858.81"
EWR - SEA,53722247183,EWR-DFW-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/53722247183,https://www.airlines-manager.com/aircraft/show/86238752,1:00,12:14,320,"$709,859.00","$640,790.00","$2,002.47","$57,043.62"
EWR - SEA,53722247184,EWR-DFW-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/53722247184,https://www.airlines-manager.com/aircraft/show/90489726,3:00,14:14,320,"$709,859.00","$640,790.00","$2,002.47","$57,043.62"
EWR - SEA,53742109129,EWR-DFW-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/53742109129,https://www.airlines-manager.com/aircraft/show/86238753,11:00,22:14,320,"$709,859.00","$640,790.00","$2,002.47","$57,043.62"
EWR - SEA,53753439614,EWR-DFW-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/53753439614,https://www.airlines-manager.com/aircraft/show/90489724,15:00,2:14,320,"$709,859.00","$640,790.00","$2,002.47","$57,043.62"
EWR - SEA,53768887168,EWR-DFW-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/53768887168,https://www.airlines-manager.com/aircraft/show/90489725,22:45,9:59,320,"$709,859.00","$640,790.00","$2,002.47","$57,043.62"
EWR - SEA,53768887169,EWR-DFW-ATL 6 B,A319-100,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/53768887169,https://www.airlines-manager.com/aircraft/show/105222360,23:30,10:59,198,"$534,958.00","$485,080.00","$2,449.90","$42,242.09"
EWR - SFO,53722247005,EWR-SFO-LAX 1,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/53722247005,https://www.airlines-manager.com/aircraft/show/83716137,0:00,11:44,400,"$944,723.00","$860,114.00","$2,150.29","$73,305.17"
EWR - SFO,53722247006,EWR-SFO-LAX 2,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/53722247006,https://www.airlines-manager.com/aircraft/show/89233028,1:30,13:14,400,"$944,723.00","$860,114.00","$2,150.29","$73,305.17"
EWR - SFO,53722247007,EWR-SFO-LAX 3,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/53722247007,https://www.airlines-manager.com/aircraft/show/89233029,3:00,14:44,400,"$944,723.00","$860,114.00","$2,150.29","$73,305.17"
EWR - SFO,53747970692,EWR-SFO-LAX 4,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/53747970692,https://www.airlines-manager.com/aircraft/show/89233030,12:15,23:59,400,"$944,723.00","$860,114.00","$2,150.29","$73,305.17"
EWR - SFO,53753439526,EWR-SFO-LAX 5,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/53753439526,https://www.airlines-manager.com/aircraft/show/89233027,14:15,1:59,400,"$944,723.00","$860,114.00","$2,150.29","$73,305.17"
EWR - SJC,53722247003,EWR-OAK-SJC 2,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/53722247003,https://www.airlines-manager.com/aircraft/show/104717242,0:00,11:59,310,"$732,935.00","$676,985.00","$2,183.82","$56,493.88"
EWR - SJC,53722247004,EWR-OAK-SJC 3,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/53722247004,https://www.airlines-manager.com/aircraft/show/104717241,2:00,13:59,310,"$732,935.00","$676,985.00","$2,183.82","$56,493.88"
EWR - SJC,53742109111,EWR-OAK-SJC 4,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/53742109111,https://www.airlines-manager.com/aircraft/show/104717240,10:30,22:29,310,"$732,935.00","$676,985.00","$2,183.82","$56,493.88"
EWR - SJC,53747970783,EWR-OAK-SJC 5,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/53747970783,https://www.airlines-manager.com/aircraft/show/104717239,13:00,0:59,310,"$732,935.00","$676,985.00","$2,183.82","$56,493.88"
EWR - SJC,53768887045,EWR-OAK-SJC 1,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/53768887045,https://www.airlines-manager.com/aircraft/show/104717243,22:00,9:59,310,"$732,935.00","$676,985.00","$2,183.82","$56,493.88"
EWR - SJU,53722247108,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/53722247108,https://www.airlines-manager.com/aircraft/show/106581304,0:30,8:44,320,"$526,498.00","$480,601.00","$1,501.88","$58,372.59"
EWR - SJU,53722247109,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/53722247109,https://www.airlines-manager.com/aircraft/show/106581307,2:00,10:14,320,"$526,498.00","$480,601.00","$1,501.88","$58,372.59"
EWR - SJU,53735281171,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/53735281171,https://www.airlines-manager.com/aircraft/show/86238754,7:00,15:14,320,"$526,498.00","$480,601.00","$1,501.88","$58,372.59"
EWR - SJU,53747970726,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/53747970726,https://www.airlines-manager.com/aircraft/show/106581306,13:00,21:14,320,"$526,498.00","$480,601.00","$1,501.88","$58,372.59"
EWR - SJU,53753439534,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/53753439534,https://www.airlines-manager.com/aircraft/show/106581305,14:30,22:44,320,"$526,498.00","$480,601.00","$1,501.88","$58,372.59"
EWR - SLC,53722247071,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/53722247071,https://www.airlines-manager.com/aircraft/show/90452833,0:15,9:59,310,"$611,536.00","$559,607.00","$1,805.18","$57,493.87"
EWR - SLC,53722247072,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/53722247072,https://www.airlines-manager.com/aircraft/show/87153196,0:15,9:59,310,"$611,536.00","$559,607.00","$1,805.18","$57,493.87"
EWR - SLC,53722247073,EWR-DEN-SLC 6 B,A319-100,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/53722247073,https://www.airlines-manager.com/aircraft/show/105223076,1:15,10:59,198,"$459,927.00","$418,300.00","$2,112.63","$42,976.03"
EWR - SLC,53742109039,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/53742109039,https://www.airlines-manager.com/aircraft/show/86270785,10:00,19:44,310,"$611,536.00","$559,607.00","$1,805.18","$57,493.87"
EWR - SLC,53742109040,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/53742109040,https://www.airlines-manager.com/aircraft/show/90452835,11:00,20:44,310,"$611,536.00","$559,607.00","$1,805.18","$57,493.87"
EWR - SLC,53764392512,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/53764392512,https://www.airlines-manager.com/aircraft/show/86270783,19:15,4:59,310,"$611,536.00","$559,607.00","$1,805.18","$57,493.87"
EWR - SMF,53722247020,EWR-SMF-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/53722247020,https://www.airlines-manager.com/aircraft/show/94889150,0:00,11:44,320,"$717,342.00","$658,895.00","$2,059.05","$56,155.82"
EWR - SMF,53722247021,EWR-SMF-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/53722247021,https://www.airlines-manager.com/aircraft/show/94889151,1:30,13:14,320,"$717,342.00","$658,895.00","$2,059.05","$56,155.82"
EWR - SMF,53722247022,EWR-SMF-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/53722247022,https://www.airlines-manager.com/aircraft/show/94889152,3:00,14:44,320,"$717,342.00","$658,895.00","$2,059.05","$56,155.82"
EWR - SMF,53747970604,EWR-SMF-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/53747970604,https://www.airlines-manager.com/aircraft/show/94889153,11:30,23:14,320,"$717,342.00","$658,895.00","$2,059.05","$56,155.82"
EWR - SMF,53747970605,EWR-SMF-ONT 5,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/53747970605,https://www.airlines-manager.com/aircraft/show/94889154,13:30,1:14,320,"$717,342.00","$658,895.00","$2,059.05","$56,155.82"
EWR - SNN,53742109118,EWR 56B-6 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/53742109118,https://www.airlines-manager.com/aircraft/show/94521248,10:45,23:59,748,"$2,079,388.00","$1,896,127.00","$2,534.93","$143,284.16"
EWR - SNN,53758909975,EWR 56B-5 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/53758909975,https://www.airlines-manager.com/aircraft/show/94521253,18:45,7:59,748,"$1,993,195.00","$1,836,021.00","$2,454.57","$138,742.14"
EWR - STL,53722247203,EWR-STL-PIT 3,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/53722247203,https://www.airlines-manager.com/aircraft/show/115400546,1:00,6:29,338,"$373,017.00","$342,022.00","$1,011.90","$62,374.83"
EWR - STL,53722247204,EWR-STL-PIT 2,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/53722247204,https://www.airlines-manager.com/aircraft/show/115400547,4:15,9:44,338,"$373,017.00","$342,022.00","$1,011.90","$62,374.83"
EWR - STL,53742108965,EWR-STL-PIT 1,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/53742108965,https://www.airlines-manager.com/aircraft/show/115400548,10:00,15:29,338,"$373,017.00","$342,022.00","$1,011.90","$62,374.83"
EWR - STL,53753439468,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/53753439468,https://www.airlines-manager.com/aircraft/show/98887257,14:00,19:29,112,"$163,314.00","$142,547.00","$1,272.74","$25,996.41"
EWR - STL,53753439469,EWR-STL-PIT 4,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/53753439469,https://www.airlines-manager.com/aircraft/show/115400545,16:15,21:44,338,"$373,017.00","$342,022.00","$1,011.90","$62,374.83"
EWR - STL,53768887173,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/53768887173,https://www.airlines-manager.com/aircraft/show/98887257,22:45,4:14,112,"$163,314.00","$142,547.00","$1,272.74","$25,996.41"
EWR - TLV,53722247447,EWR-TLV 2 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/53722247447,https://www.airlines-manager.com/aircraft/show/89124073,3:00,1:29,884,"$3,653,033.00","$3,333,684.00","$3,771.14","$148,273.57"
EWR - TLV,53764392798,EWR-TLV 1 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/53764392798,https://www.airlines-manager.com/aircraft/show/93429385,21:00,19:29,884,"$3,653,033.00","$3,333,684.00","$3,771.14","$148,273.57"
EWR - TPA,53735281071,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/53735281071,https://www.airlines-manager.com/aircraft/show/98379317,5:45,11:44,310,"$376,361.00","$341,180.00","$1,100.58","$57,021.73"
EWR - TPA,53742109117,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/53742109117,https://www.airlines-manager.com/aircraft/show/98379316,10:45,16:44,310,"$376,361.00","$341,180.00","$1,100.58","$57,021.73"
EWR - TPA,53747970836,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/53747970836,https://www.airlines-manager.com/aircraft/show/98379318,13:00,18:59,310,"$376,361.00","$341,180.00","$1,100.58","$57,021.73"
EWR - TPA,53753439590,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/53753439590,https://www.airlines-manager.com/aircraft/show/98379315,15:00,20:59,310,"$376,361.00","$341,180.00","$1,100.58","$57,021.73"
EWR - TPA,53768887222,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/53768887222,https://www.airlines-manager.com/aircraft/show/98379319,23:15,5:14,310,"$376,361.00","$341,180.00","$1,100.58","$57,021.73"
EWR - TUL,53722247304,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/53722247304,https://www.airlines-manager.com/aircraft/show/110044465,1:45,8:29,310,"$426,549.00","$392,448.00","$1,265.96","$58,284.36"
EWR - TUL,53722247305,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/53722247305,https://www.airlines-manager.com/aircraft/show/110044464,3:30,10:14,310,"$426,549.00","$392,448.00","$1,265.96","$58,284.36"
EWR - TUL,53747970710,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/53747970710,https://www.airlines-manager.com/aircraft/show/110044463,13:00,19:44,310,"$426,549.00","$392,448.00","$1,265.96","$58,284.36"
EWR - TUL,53758909767,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/53758909767,https://www.airlines-manager.com/aircraft/show/110113039,16:30,23:14,112,"$200,788.00","$178,211.00","$1,591.17","$26,466.98"
EWR - TUL,53758909768,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/53758909768,https://www.airlines-manager.com/aircraft/show/110044466,18:45,1:29,310,"$426,549.00","$392,448.00","$1,265.96","$58,284.36"
EWR - TUS,53722247136,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/53722247136,https://www.airlines-manager.com/aircraft/show/98379316,0:30,10:44,310,"$638,846.00","$590,752.00","$1,905.65","$57,728.21"
EWR - TUS,53722247137,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/53722247137,https://www.airlines-manager.com/aircraft/show/98379318,1:30,11:44,310,"$638,846.00","$590,752.00","$1,905.65","$57,728.21"
EWR - TUS,53722247138,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/53722247138,https://www.airlines-manager.com/aircraft/show/98379315,3:30,13:44,310,"$638,846.00","$590,752.00","$1,905.65","$57,728.21"
EWR - TUS,53747970837,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/53747970837,https://www.airlines-manager.com/aircraft/show/98379319,13:00,23:14,310,"$638,846.00","$590,752.00","$1,905.65","$57,728.21"
EWR - TUS,53764392541,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/53764392541,https://www.airlines-manager.com/aircraft/show/98379317,19:30,5:44,310,"$638,846.00","$590,752.00","$1,905.65","$57,728.21"
EWR - VCE,53722247431,EWR 84B-3  B2,777-300,https://www.airlines-manager.com/network/showline/49921914,https://www.airlines-manager.com/network/showflight/53722247431,https://www.airlines-manager.com/aircraft/show/117958697,3:00,20:14,852,"$2,715,388.00","$2,474,998.00","$2,904.93","$143,616.91"
EWR - VCE,53753439571,EWR 84B-6  B2,777-300,https://www.airlines-manager.com/network/showline/49921914,https://www.airlines-manager.com/network/showflight/53753439571,https://www.airlines-manager.com/aircraft/show/117958700,15:00,8:14,818,"$2,630,356.00","$2,398,961.00","$2,932.72","$139,204.70"
EWR - YEG,53722247104,EWR-YEG-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/53722247104,https://www.airlines-manager.com/aircraft/show/98936170,0:15,10:14,320,"$633,835.00","$581,441.00","$1,817.00","$58,241.17"
EWR - YEG,53722247105,EWR-YEG-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/53722247105,https://www.airlines-manager.com/aircraft/show/98936171,2:15,12:14,320,"$633,835.00","$581,441.00","$1,817.00","$58,241.17"
EWR - YEG,53742109208,EWR-YEG-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/53742109208,https://www.airlines-manager.com/aircraft/show/98936168,11:00,20:59,320,"$633,835.00","$581,441.00","$1,817.00","$58,241.17"
EWR - YEG,53747970699,EWR-YEG-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/53747970699,https://www.airlines-manager.com/aircraft/show/98936169,12:30,22:29,320,"$633,835.00","$581,441.00","$1,817.00","$58,241.17"
EWR - YEG,53768887032,EWR-YEG-BFF 5 B,A319-100,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/53768887032,https://www.airlines-manager.com/aircraft/show/115493369,22:00,7:59,198,"$473,556.00","$435,398.00","$2,198.98","$43,612.49"
EWR - YOW,53742108929,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/53742108929,https://www.airlines-manager.com/aircraft/show/106581304,9:30,12:59,320,"$170,585.00","$145,254.00",$453.92,"$41,699.71"
EWR - YOW,53742108930,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/53742108930,https://www.airlines-manager.com/aircraft/show/106581307,11:00,14:29,320,"$170,585.00","$145,254.00",$453.92,"$41,699.71"
EWR - YOW,53758909972,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/53758909972,https://www.airlines-manager.com/aircraft/show/86238754,18:45,22:14,320,"$170,585.00","$145,254.00",$453.92,"$41,699.71"
EWR - YOW,53764392816,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/53764392816,https://www.airlines-manager.com/aircraft/show/106581306,21:15,0:44,320,"$170,585.00","$145,254.00",$453.92,"$41,699.71"
EWR - YOW,53768887164,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/53768887164,https://www.airlines-manager.com/aircraft/show/106581305,22:45,2:14,289,"$160,523.00","$135,466.00",$468.74,"$38,889.76"
EWR - YUL,53742108940,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/53742108940,https://www.airlines-manager.com/aircraft/show/106581306,9:30,12:59,320,"$174,011.00","$145,853.00",$455.79,"$41,871.67"
EWR - YUL,53742108941,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/53742108941,https://www.airlines-manager.com/aircraft/show/106581305,11:00,14:29,320,"$174,011.00","$145,853.00",$455.79,"$41,871.67"
EWR - YUL,53753439630,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/53753439630,https://www.airlines-manager.com/aircraft/show/86238754,15:15,18:44,320,"$174,011.00","$145,853.00",$455.79,"$41,871.67"
EWR - YUL,53764392803,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/53764392803,https://www.airlines-manager.com/aircraft/show/106581304,21:00,0:29,320,"$174,011.00","$145,853.00",$455.79,"$41,871.67"
EWR - YUL,53768887134,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/53768887134,https://www.airlines-manager.com/aircraft/show/106581307,22:30,1:59,320,"$174,011.00","$145,853.00",$455.79,"$41,871.67"
EWR - YVR,53722247017,EWR-YVR-YYC 1,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/53722247017,https://www.airlines-manager.com/aircraft/show/113681636,0:00,11:14,400,"$908,415.00","$836,037.00","$2,090.09","$74,424.66"
EWR - YVR,53722247018,EWR-YVR-YYC 2,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/53722247018,https://www.airlines-manager.com/aircraft/show/113681637,1:30,12:44,400,"$908,415.00","$836,037.00","$2,090.09","$74,424.66"
EWR - YVR,53722247019,EWR-YVR-YYC 3,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/53722247019,https://www.airlines-manager.com/aircraft/show/113681638,3:00,14:14,400,"$908,415.00","$836,037.00","$2,090.09","$74,424.66"
EWR - YVR,53742109219,EWR-YVR-YYC 4,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/53742109219,https://www.airlines-manager.com/aircraft/show/113681639,11:15,22:29,400,"$908,415.00","$836,037.00","$2,090.09","$74,424.66"
EWR - YVR,53747970703,EWR-YVR-YYC 5,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/53747970703,https://www.airlines-manager.com/aircraft/show/113681640,12:45,23:59,400,"$908,415.00","$836,037.00","$2,090.09","$74,424.66"
EWR - YYC,53722247269,EWR-YVR-YYC 4,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/53722247269,https://www.airlines-manager.com/aircraft/show/113681639,1:30,11:14,400,"$787,708.00","$724,155.00","$1,810.39","$74,399.49"
EWR - YYC,53722247270,EWR-YVR-YYC 5,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/53722247270,https://www.airlines-manager.com/aircraft/show/113681640,3:00,12:44,400,"$787,708.00","$724,155.00","$1,810.39","$74,399.49"
EWR - YYC,53742109215,EWR-YVR-YYC 1,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/53742109215,https://www.airlines-manager.com/aircraft/show/113681636,11:15,20:59,400,"$787,708.00","$724,155.00","$1,810.39","$74,399.49"
EWR - YYC,53747970704,EWR-YVR-YYC 2,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/53747970704,https://www.airlines-manager.com/aircraft/show/113681637,12:45,22:29,400,"$787,708.00","$724,155.00","$1,810.39","$74,399.49"
EWR - YYC,53753439524,EWR-YVR-YYC 3,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/53753439524,https://www.airlines-manager.com/aircraft/show/113681638,14:15,23:59,400,"$787,708.00","$724,155.00","$1,810.39","$74,399.49"
EWR - YYZ,53722247355,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/53722247355,https://www.airlines-manager.com/aircraft/show/92003922,2:15,5:44,320,"$178,732.00","$144,394.00",$451.23,"$41,452.82"
EWR - YYZ,53735281209,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/53735281209,https://www.airlines-manager.com/aircraft/show/92003921,7:30,10:59,320,"$178,732.00","$144,394.00",$451.23,"$41,452.82"
EWR - YYZ,53742109027,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/53742109027,https://www.airlines-manager.com/aircraft/show/92003924,10:00,13:29,320,"$178,732.00","$144,394.00",$451.23,"$41,452.82"
EWR - YYZ,53753439462,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/53753439462,https://www.airlines-manager.com/aircraft/show/92003925,14:00,17:29,320,"$178,732.00","$144,394.00",$451.23,"$41,452.82"
EWR - YYZ,53758909950,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/53758909950,https://www.airlines-manager.com/aircraft/show/92003923,18:15,21:44,320,"$178,732.00","$144,394.00",$451.23,"$41,452.82"
EWR - YYZ,53764392499,EWR CARGO 1,A321neo-LR,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/53764392499,https://www.airlines-manager.com/aircraft/show/103406580,19:15,22:44,0,"$63,938.00","$35,161.00",#DIV/0!,"$10,094.07"
EWR - ZRH,53735281220,EWR 84A-6 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/53735281220,https://www.airlines-manager.com/aircraft/show/90656552,7:45,23:59,852,"$2,628,800.00","$2,386,111.00","$2,800.60","$146,988.36"
EWR - ZRH,53764392602,EWR 84A-7 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/53764392602,https://www.airlines-manager.com/aircraft/show/94521249,20:00,12:14,852,"$2,628,800.00","$2,386,111.00","$2,800.60","$146,988.36"
HNL - AKL,53753439678,HNL 84B-2 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/53753439678,https://www.airlines-manager.com/aircraft/show/96807092,16:00,9:59,832,"$2,903,167.00","$2,645,977.00","$3,180.26","$147,134.96"
HNL - AKL,53768887192,HNL 84B-6 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/53768887192,https://www.airlines-manager.com/aircraft/show/96807088,23:00,16:59,832,"$2,885,772.00","$2,634,538.00","$3,166.51","$146,498.87"
HNL - ATL,53722247545,HNL 56B-2 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/53722247545,https://www.airlines-manager.com/aircraft/show/109187499,4:45,22:44,592,"$2,190,898.00","$2,005,043.00","$3,386.90","$111,494.51"
HNL - ATL,53753439680,HNL 56B-4 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/53753439680,https://www.airlines-manager.com/aircraft/show/109187501,16:00,9:59,592,"$2,190,898.00","$2,005,043.00","$3,386.90","$111,494.51"
HNL - ATL,53768887171,HNL 56B-2 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/53768887171,https://www.airlines-manager.com/aircraft/show/109187499,22:45,16:44,592,"$2,190,898.00","$2,005,043.00","$3,386.90","$111,494.51"
HNL - BNE,53722247496,HNL 84B-6 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/53722247496,https://www.airlines-manager.com/aircraft/show/96807088,4:00,22:59,832,"$3,045,822.00","$2,776,973.00","$3,337.71","$146,284.79"
HNL - BNE,53742108999,HNL 84B-3 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/53742108999,https://www.airlines-manager.com/aircraft/show/96807091,10:00,4:59,832,"$3,027,379.00","$2,764,876.00","$3,323.17","$145,647.55"
HNL - BOS,53722247008,HNL 56E-6 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/53722247008,https://www.airlines-manager.com/aircraft/show/117414505,0:00,19:59,592,"$2,395,125.00","$2,235,673.00","$3,776.47","$111,876.88"
HNL - BOS,53735281254,HNL 56E-1 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/53735281254,https://www.airlines-manager.com/aircraft/show/117414500,8:30,4:29,592,"$2,395,125.00","$2,235,673.00","$3,776.47","$111,876.88"
HNL - BOS,53742108948,HNL 56E-4 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/53742108948,https://www.airlines-manager.com/aircraft/show/117414503,10:00,5:59,592,"$2,395,125.00","$2,235,673.00","$3,776.47","$111,876.88"
HNL - BWI,53722247389,HNL 56F-4 B,787-10,https://www.airlines-manager.com/network/showline/50049284,https://www.airlines-manager.com/network/showflight/53722247389,https://www.airlines-manager.com/aircraft/show/118383854,2:30,21:44,592,"$2,281,246.00","$2,130,503.00","$3,598.82","$110,771.39"
HNL - BWI,53747970618,HNL 56F-5 B,787-10,https://www.airlines-manager.com/network/showline/50049284,https://www.airlines-manager.com/network/showflight/53747970618,https://www.airlines-manager.com/aircraft/show/118383855,11:45,6:59,592,"$2,281,246.00","$2,130,503.00","$3,598.82","$110,771.39"
HNL - BWI,53758909797,HNL 56F-1 B,787-10,https://www.airlines-manager.com/network/showline/50049284,https://www.airlines-manager.com/network/showflight/53758909797,https://www.airlines-manager.com/aircraft/show/118383851,17:00,12:14,584,"$2,261,650.00","$2,111,876.00","$3,616.23","$109,802.91"
HNL - CLT,53722247541,HNL 56D-3 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/53722247541,https://www.airlines-manager.com/aircraft/show/112066134,4:30,23:14,592,"$2,250,989.00","$2,095,290.00","$3,539.34","$111,848.22"
HNL - CLT,53722247542,HNL 56D-5 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/53722247542,https://www.airlines-manager.com/aircraft/show/112066136,5:30,0:14,592,"$2,250,989.00","$2,095,290.00","$3,539.34","$111,848.22"
HNL - CLT,53768887218,HNL 56D-3 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/53768887218,https://www.airlines-manager.com/aircraft/show/112066134,23:15,17:59,592,"$2,250,989.00","$2,095,290.00","$3,539.34","$111,848.22"
HNL - CXI,53722247489,HNL CARGO 2,737-700,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/53722247489,https://www.airlines-manager.com/aircraft/show/107563068,3:45,10:59,0,"$121,246.00","$97,580.00",#DIV/0!,"$13,490.32"
HNL - CXI,53722247490,HNL-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/53722247490,https://www.airlines-manager.com/aircraft/show/90717080,5:30,12:44,388,"$489,861.00","$459,353.00","$1,183.90","$63,505.02"
HNL - CXI,53753439609,HNL-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/53753439609,https://www.airlines-manager.com/aircraft/show/90717080,15:00,22:14,388,"$489,861.00","$459,353.00","$1,183.90","$63,505.02"
HNL - CXI,53768887064,HNL-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/53768887064,https://www.airlines-manager.com/aircraft/show/90717080,22:15,5:29,388,"$489,861.00","$459,353.00","$1,183.90","$63,505.02"
HNL - DEN,53735281168,HNL 56F-6 B,787-10,https://www.airlines-manager.com/network/showline/43762939,https://www.airlines-manager.com/network/showflight/53735281168,https://www.airlines-manager.com/aircraft/show/118383856,7:00,20:59,592,"$1,705,342.00","$1,560,550.00","$2,636.06","$111,600.72"
HNL - DEN,53758909838,HNL 56F-2 B,787-10,https://www.airlines-manager.com/network/showline/43762939,https://www.airlines-manager.com/network/showflight/53758909838,https://www.airlines-manager.com/aircraft/show/118383852,17:00,6:59,592,"$1,705,342.00","$1,560,550.00","$2,636.06","$111,600.72"
HNL - DEN,53768887020,HNL 56F-4 B,787-10,https://www.airlines-manager.com/network/showline/43762939,https://www.airlines-manager.com/network/showflight/53768887020,https://www.airlines-manager.com/aircraft/show/118383854,21:45,11:44,592,"$1,705,342.00","$1,560,550.00","$2,636.06","$111,600.72"
HNL - DFW,53722247536,HNL 56E-2 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/53722247536,https://www.airlines-manager.com/aircraft/show/117414501,4:30,19:59,592,"$1,884,682.00","$1,733,298.00","$2,927.87","$111,946.05"
HNL - DFW,53758909817,HNL 56E-7 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/53758909817,https://www.airlines-manager.com/aircraft/show/117414506,17:00,8:29,592,"$1,884,682.00","$1,733,298.00","$2,927.87","$111,946.05"
HNL - DFW,53758909818,HNL 56E-3 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/53758909818,https://www.airlines-manager.com/aircraft/show/117414502,18:30,9:59,592,"$1,884,682.00","$1,733,298.00","$2,927.87","$111,946.05"
HNL - DTW,53735281090,HNL 56E-5 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/53735281090,https://www.airlines-manager.com/aircraft/show/117414504,6:00,23:59,592,"$2,148,777.00","$1,998,982.00","$3,376.66","$111,157.48"
HNL - DTW,53764392574,HNL 56E-6 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/53764392574,https://www.airlines-manager.com/aircraft/show/117414505,20:00,13:59,592,"$2,148,777.00","$1,998,982.00","$3,376.66","$111,157.48"
HNL - DTW,53764392575,HNL 56E-2 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/53764392575,https://www.airlines-manager.com/aircraft/show/117414501,20:00,13:59,592,"$2,148,777.00","$1,998,982.00","$3,376.66","$111,157.48"
HNL - EWR,53722247521,HNL 56A-7 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/53722247521,https://www.airlines-manager.com/aircraft/show/95351586,4:15,23:59,592,"$2,361,246.00","$2,199,331.00","$3,715.09","$111,452.58"
HNL - EWR,53735281105,HNL 56A-6 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/53735281105,https://www.airlines-manager.com/aircraft/show/95351587,6:00,1:44,592,"$2,361,246.00","$2,199,331.00","$3,715.09","$111,452.58"
HNL - EWR,53764392566,HNL 56A-3 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/53764392566,https://www.airlines-manager.com/aircraft/show/95351590,19:45,15:29,592,"$2,361,246.00","$2,199,331.00","$3,715.09","$111,452.58"
HNL - GUM,53722246992,HNL-GUM,A321neo,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/53722246992,https://www.airlines-manager.com/aircraft/show/115400544,0:00,16:44,338,"$1,120,384.00","$1,057,325.00","$3,128.18","$63,186.75"
HNL - GUM,53722246993,HNL 84A-3 F,777-300,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/53722246993,https://www.airlines-manager.com/aircraft/show/95818924,4:45,20:29,832,"$2,549,287.00","$2,348,860.00","$2,823.15","$149,291.95"
HNL - IAD,53722247455,HNL 56C-3 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/53722247455,https://www.airlines-manager.com/aircraft/show/111639415,3:15,22:14,592,"$2,267,245.00","$2,114,518.00","$3,571.82","$111,388.13"
HNL - IAD,53742108927,HNL 56C-5 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/53742108927,https://www.airlines-manager.com/aircraft/show/111639417,9:15,4:14,592,"$2,267,245.00","$2,114,518.00","$3,571.82","$111,388.13"
HNL - IAD,53764392582,HNL 56C-7 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/53764392582,https://www.airlines-manager.com/aircraft/show/111639419,20:00,14:59,592,"$2,267,245.00","$2,114,518.00","$3,571.82","$111,388.13"
HNL - IAH,53722247055,HNL 56A-1 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/53722247055,https://www.airlines-manager.com/aircraft/show/95351592,0:00,15:59,592,"$1,925,971.00","$1,785,660.00","$3,016.32","$111,720.13"
HNL - IAH,53722247056,HNL 56A-3 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/53722247056,https://www.airlines-manager.com/aircraft/show/95351590,3:45,19:44,592,"$1,925,971.00","$1,785,660.00","$3,016.32","$111,720.13"
HNL - IAH,53753439671,HNL 56A-1 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/53753439671,https://www.airlines-manager.com/aircraft/show/95351592,16:00,7:59,592,"$1,925,971.00","$1,785,660.00","$3,016.32","$111,720.13"
HNL - ITO,53722247326,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/53722247326,https://www.airlines-manager.com/aircraft/show/94803593,1:45,4:44,170,"$77,005.00","$66,478.00",$391.05,"$22,283.13"
HNL - ITO,53722247327,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/53722247327,https://www.airlines-manager.com/aircraft/show/94803596,3:15,6:14,170,"$77,005.00","$66,478.00",$391.05,"$22,283.13"
HNL - ITO,53735281119,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/53735281119,https://www.airlines-manager.com/aircraft/show/94803595,6:00,8:59,170,"$77,005.00","$66,478.00",$391.05,"$22,283.13"
HNL - ITO,53742108938,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/53742108938,https://www.airlines-manager.com/aircraft/show/94803594,9:30,12:29,170,"$77,005.00","$66,478.00",$391.05,"$22,283.13"
HNL - ITO,53753439573,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/53753439573,https://www.airlines-manager.com/aircraft/show/94803593,15:00,17:59,170,"$77,005.00","$66,478.00",$391.05,"$22,283.13"
HNL - ITO,53758909757,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/53758909757,https://www.airlines-manager.com/aircraft/show/94803596,16:30,19:29,170,"$77,005.00","$66,478.00",$391.05,"$22,283.13"
HNL - ITO,53764392506,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/53764392506,https://www.airlines-manager.com/aircraft/show/94803595,19:15,22:14,170,"$77,005.00","$66,478.00",$391.05,"$22,283.13"
HNL - ITO,53768887176,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/53768887176,https://www.airlines-manager.com/aircraft/show/94803594,22:45,1:44,123,"$64,578.00","$54,549.00",$443.49,"$18,284.58"
HNL - JFK,53722247439,HNL 56B-6 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/53722247439,https://www.airlines-manager.com/aircraft/show/109187503,3:00,22:44,592,"$2,394,138.00","$2,211,698.00","$3,735.98","$112,079.29"
HNL - JFK,53742108893,HNL 56B-1 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/53742108893,https://www.airlines-manager.com/aircraft/show/109187498,9:00,4:44,592,"$2,394,138.00","$2,211,698.00","$3,735.98","$112,079.29"
HNL - JFK,53758909829,HNL 56B-3 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/53758909829,https://www.airlines-manager.com/aircraft/show/109187500,17:00,12:44,592,"$2,394,138.00","$2,211,698.00","$3,735.98","$112,079.29"
HNL - KOA,53722247164,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/53722247164,https://www.airlines-manager.com/aircraft/show/94803595,0:45,3:29,170,"$58,675.00","$48,297.00",$284.10,"$17,669.63"
HNL - KOA,53722247165,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/53722247165,https://www.airlines-manager.com/aircraft/show/94803594,4:15,6:59,170,"$58,675.00","$48,297.00",$284.10,"$17,669.63"
HNL - KOA,53735281194,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/53735281194,https://www.airlines-manager.com/aircraft/show/94803593,7:15,9:59,170,"$58,675.00","$48,297.00",$284.10,"$17,669.63"
HNL - KOA,53735281195,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/53735281195,https://www.airlines-manager.com/aircraft/show/94803596,8:45,11:29,170,"$58,675.00","$48,297.00",$284.10,"$17,669.63"
HNL - KOA,53753439428,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/53753439428,https://www.airlines-manager.com/aircraft/show/94803595,14:00,16:44,170,"$58,675.00","$48,297.00",$284.10,"$17,669.63"
HNL - KOA,53758909877,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/53758909877,https://www.airlines-manager.com/aircraft/show/94803594,17:30,20:14,170,"$58,675.00","$48,297.00",$284.10,"$17,669.63"
HNL - KOA,53764392753,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/53764392753,https://www.airlines-manager.com/aircraft/show/94803593,20:30,23:14,170,"$58,675.00","$48,297.00",$284.10,"$17,669.63"
HNL - KOA,53768887035,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/53768887035,https://www.airlines-manager.com/aircraft/show/94803596,22:00,0:44,170,"$58,675.00","$48,297.00",$284.10,"$17,669.63"
HNL - LAS,53735281135,HNL 84A-5 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/53735281135,https://www.airlines-manager.com/aircraft/show/95818922,6:30,18:29,832,"$1,888,368.00","$1,701,740.00","$2,045.36","$142,008.90"
HNL - LAS,53758909756,HNL-LAS S,A321-200,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/53758909756,https://www.airlines-manager.com/aircraft/show/116385511,16:30,5:14,232,"$743,934.00","$672,432.00","$2,898.41","$52,808.80"
HNL - LAS,53764392727,HNL 84A-3 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/53764392727,https://www.airlines-manager.com/aircraft/show/95818924,20:30,8:29,800,"$1,840,264.00","$1,656,621.00","$2,070.78","$138,243.76"
HNL - LAX,53735281182,HNL-SFO-LAX 3,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/53735281182,https://www.airlines-manager.com/aircraft/show/110044460,7:00,18:59,338,"$786,488.00","$718,216.00","$2,124.90","$59,934.58"
HNL - LAX,53742108914,HNL-SFO-LAX 4,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/53742108914,https://www.airlines-manager.com/aircraft/show/110044461,9:00,20:59,338,"$786,488.00","$718,216.00","$2,124.90","$59,934.58"
HNL - LAX,53742108915,HNL-SFO-LAX 6 B,A319-100,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/53742108915,https://www.airlines-manager.com/aircraft/show/106106389,10:00,21:59,198,"$544,408.00","$487,128.00","$2,460.24","$40,650.46"
HNL - LAX,53758909948,HNL-SFO-LAX 1,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/53758909948,https://www.airlines-manager.com/aircraft/show/110044458,18:15,6:14,338,"$786,488.00","$718,216.00","$2,124.90","$59,934.58"
HNL - LAX,53764392706,HNL-SFO-LAX 2,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/53764392706,https://www.airlines-manager.com/aircraft/show/110044459,20:15,8:14,338,"$786,488.00","$718,216.00","$2,124.90","$59,934.58"
HNL - LAX,53768887026,HNL-SFO-LAX 5,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/53768887026,https://www.airlines-manager.com/aircraft/show/110044462,21:45,9:44,338,"$786,488.00","$718,216.00","$2,124.90","$59,934.58"
HNL - LIH,53722247166,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/53722247166,https://www.airlines-manager.com/aircraft/show/94803596,0:45,3:14,170,"$50,884.00","$42,464.00",$249.79,"$17,099.60"
HNL - LIH,53722247167,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/53722247167,https://www.airlines-manager.com/aircraft/show/94803595,3:30,5:59,170,"$50,884.00","$42,464.00",$249.79,"$17,099.60"
HNL - LIH,53735281185,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/53735281185,https://www.airlines-manager.com/aircraft/show/94803594,7:00,9:29,170,"$50,884.00","$42,464.00",$249.79,"$17,099.60"
HNL - LIH,53742108986,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/53742108986,https://www.airlines-manager.com/aircraft/show/94803593,10:00,12:29,170,"$50,884.00","$42,464.00",$249.79,"$17,099.60"
HNL - LIH,53753439429,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/53753439429,https://www.airlines-manager.com/aircraft/show/94803596,14:00,16:29,170,"$50,884.00","$42,464.00",$249.79,"$17,099.60"
HNL - LIH,53758909790,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/53758909790,https://www.airlines-manager.com/aircraft/show/94803595,16:45,19:14,170,"$50,884.00","$42,464.00",$249.79,"$17,099.60"
HNL - LIH,53764392702,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/53764392702,https://www.airlines-manager.com/aircraft/show/94803594,20:15,22:44,170,"$50,884.00","$42,464.00",$249.79,"$17,099.60"
HNL - LIH,53768887214,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/53768887214,https://www.airlines-manager.com/aircraft/show/94803593,23:15,1:44,170,"$50,884.00","$42,464.00",$249.79,"$17,099.60"
HNL - LNY,53722247213,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/53722247213,https://www.airlines-manager.com/aircraft/show/106107514,1:00,3:29,116,"$30,301.00","$25,294.00",$218.05,"$10,185.50"
HNL - LNY,53722247214,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/53722247214,https://www.airlines-manager.com/aircraft/show/106107514,3:30,5:59,116,"$30,301.00","$25,294.00",$218.05,"$10,185.50"
HNL - LNY,53735281103,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/53735281103,https://www.airlines-manager.com/aircraft/show/106107514,6:00,8:29,116,"$30,301.00","$25,294.00",$218.05,"$10,185.50"
HNL - LNY,53735281104,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/53735281104,https://www.airlines-manager.com/aircraft/show/106107514,8:30,10:59,116,"$30,301.00","$25,294.00",$218.05,"$10,185.50"
HNL - LNY,53753439598,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/53753439598,https://www.airlines-manager.com/aircraft/show/106107514,15:00,17:29,116,"$30,301.00","$25,294.00",$218.05,"$10,185.50"
HNL - LNY,53758909874,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/53758909874,https://www.airlines-manager.com/aircraft/show/106107514,17:30,19:59,116,"$30,301.00","$25,294.00",$218.05,"$10,185.50"
HNL - LNY,53764392603,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/53764392603,https://www.airlines-manager.com/aircraft/show/106107514,20:00,22:29,116,"$30,301.00","$25,294.00",$218.05,"$10,185.50"
HNL - LNY,53768887155,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/53768887155,https://www.airlines-manager.com/aircraft/show/106107514,22:30,0:59,116,"$30,301.00","$25,294.00",$218.05,"$10,185.50"
HNL - MCO,53722247216,HNL 56C-7 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/53722247216,https://www.airlines-manager.com/aircraft/show/111639419,1:00,19:59,592,"$2,277,153.00","$2,117,054.00","$3,576.10","$111,521.72"
HNL - MCO,53722247217,HNL 56C-6 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/53722247217,https://www.airlines-manager.com/aircraft/show/111639418,4:15,23:14,592,"$2,277,153.00","$2,117,054.00","$3,576.10","$111,521.72"
HNL - MCO,53735281239,HNL 56C-2 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/53735281239,https://www.airlines-manager.com/aircraft/show/111639414,8:15,3:14,592,"$2,277,153.00","$2,117,054.00","$3,576.10","$111,521.72"
HNL - MEL,53735281258,HNL 84A-4 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/53735281258,https://www.airlines-manager.com/aircraft/show/95818923,8:30,6:29,832,"$3,527,480.00","$3,226,098.00","$3,877.52","$146,751.99"
HNL - MEL,53764392615,HNL 84A-7 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/53764392615,https://www.airlines-manager.com/aircraft/show/95818920,20:00,17:59,832,"$3,527,480.00","$3,226,098.00","$3,877.52","$146,751.99"
HNL - MIA,53735281276,HNL 56A-2 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/53735281276,https://www.airlines-manager.com/aircraft/show/95351591,8:30,3:44,592,"$2,322,627.00","$2,156,366.00","$3,642.51","$112,116.08"
HNL - MIA,53742109119,HNL 56A-5 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/53742109119,https://www.airlines-manager.com/aircraft/show/95351588,10:45,5:59,592,"$2,322,627.00","$2,156,366.00","$3,642.51","$112,116.08"
HNL - MIA,53753439637,HNL 56A-4 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/53753439637,https://www.airlines-manager.com/aircraft/show/95351589,15:30,10:44,592,"$2,322,627.00","$2,156,366.00","$3,642.51","$112,116.08"
HNL - MNL,53735281207,HNL 84A-2 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/53735281207,https://www.airlines-manager.com/aircraft/show/95818925,7:30,4:44,832,"$3,450,425.00","$3,161,128.00","$3,799.43","$148,875.73"
HNL - MNL,53758909963,HNL 84A-5 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/53758909963,https://www.airlines-manager.com/aircraft/show/95818922,18:30,15:44,832,"$3,450,425.00","$3,161,128.00","$3,799.43","$148,875.73"
HNL - MSP,53753439684,HNL 56C-1 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/53753439684,https://www.airlines-manager.com/aircraft/show/111639413,16:00,8:14,592,"$1,940,110.00","$1,805,737.00","$3,050.23","$111,236.37"
HNL - MSP,53758909823,HNL 56C-4 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/53758909823,https://www.airlines-manager.com/aircraft/show/111639416,17:00,9:14,592,"$1,940,110.00","$1,805,737.00","$3,050.23","$111,236.37"
HNL - MSP,53768887105,HNL 56C-3 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/53768887105,https://www.airlines-manager.com/aircraft/show/111639415,22:15,14:29,592,"$1,940,110.00","$1,805,737.00","$3,050.23","$111,236.37"
HNL - NAN,53722247487,HNL 84A-7 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/53722247487,https://www.airlines-manager.com/aircraft/show/95818920,3:45,17:14,832,"$2,066,228.00","$1,895,022.00","$2,277.67","$140,545.51"
HNL - NAN,53758909905,HNL 84A-1 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/53758909905,https://www.airlines-manager.com/aircraft/show/95818926,18:00,7:29,832,"$2,037,178.00","$1,875,626.00","$2,254.36","$139,107.00"
HNL - OGG,53722247324,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/53722247324,https://www.airlines-manager.com/aircraft/show/94803594,1:45,4:14,170,"$51,604.00","$42,806.00",$251.80,"$17,237.32"
HNL - OGG,53722247325,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/53722247325,https://www.airlines-manager.com/aircraft/show/94803593,4:45,7:14,170,"$51,604.00","$42,806.00",$251.80,"$17,237.32"
HNL - OGG,53735281128,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/53735281128,https://www.airlines-manager.com/aircraft/show/94803596,6:15,8:44,170,"$51,604.00","$42,806.00",$251.80,"$17,237.32"
HNL - OGG,53742108886,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/53742108886,https://www.airlines-manager.com/aircraft/show/94803595,9:00,11:29,170,"$51,604.00","$42,806.00",$251.80,"$17,237.32"
HNL - OGG,53753439574,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/53753439574,https://www.airlines-manager.com/aircraft/show/94803594,15:00,17:29,170,"$51,604.00","$42,806.00",$251.80,"$17,237.32"
HNL - OGG,53758909915,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/53758909915,https://www.airlines-manager.com/aircraft/show/94803593,18:00,20:29,170,"$51,604.00","$42,806.00",$251.80,"$17,237.32"
HNL - OGG,53764392545,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/53764392545,https://www.airlines-manager.com/aircraft/show/94803596,19:30,21:59,170,"$51,604.00","$42,806.00",$251.80,"$17,237.32"
HNL - OGG,53768887122,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/53768887122,https://www.airlines-manager.com/aircraft/show/94803595,22:15,0:44,170,"$51,604.00","$42,806.00",$251.80,"$17,237.32"
HNL - ORD,53742108970,HNL 56B-5 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/53742108970,https://www.airlines-manager.com/aircraft/show/109187502,10:00,2:59,592,"$2,079,450.00","$1,909,990.00","$3,226.33","$112,462.61"
HNL - ORD,53753439679,HNL 56B-7 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/53753439679,https://www.airlines-manager.com/aircraft/show/109187504,16:00,8:59,592,"$2,079,450.00","$1,909,990.00","$3,226.33","$112,462.61"
HNL - ORD,53768887172,HNL 56B-6 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/53768887172,https://www.airlines-manager.com/aircraft/show/109187503,22:45,15:44,592,"$2,079,450.00","$1,909,990.00","$3,226.33","$112,462.61"
HNL - PHL,53735281169,HNL 56F-3 B,787-10,https://www.airlines-manager.com/network/showline/50049283,https://www.airlines-manager.com/network/showflight/53735281169,https://www.airlines-manager.com/aircraft/show/118383853,7:00,2:29,592,"$2,333,755.00","$2,176,175.00","$3,675.97","$111,694.18"
HNL - PHL,53758909827,HNL 56F-7 B,787-10,https://www.airlines-manager.com/network/showline/50049283,https://www.airlines-manager.com/network/showflight/53758909827,https://www.airlines-manager.com/aircraft/show/118383857,17:00,12:29,592,"$2,333,755.00","$2,176,175.00","$3,675.97","$111,694.18"
HNL - PHL,53764392784,HNL 56F-6 B,787-10,https://www.airlines-manager.com/network/showline/50049283,https://www.airlines-manager.com/network/showflight/53764392784,https://www.airlines-manager.com/aircraft/show/118383856,21:00,16:29,592,"$2,333,755.00","$2,176,175.00","$3,675.97","$111,694.18"
HNL - PHX,53722247471,HNL 56D-7 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/53722247471,https://www.airlines-manager.com/aircraft/show/112066138,3:30,15:59,592,"$1,512,409.00","$1,401,274.00","$2,367.02","$112,251.59"
HNL - PHX,53753439569,HNL 56D-6 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/53753439569,https://www.airlines-manager.com/aircraft/show/112066137,15:00,3:29,592,"$1,512,409.00","$1,401,274.00","$2,367.02","$112,251.59"
HNL - PHX,53753439570,HNL 56D-2 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/53753439570,https://www.airlines-manager.com/aircraft/show/112066133,16:00,4:29,592,"$1,512,409.00","$1,401,274.00","$2,367.02","$112,251.59"
HNL - PPG,53722247373,HNL CARGO 1,737-700,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/53722247373,https://www.airlines-manager.com/aircraft/show/107564830,2:15,14:29,0,"$206,811.00","$166,336.00",#DIV/0!,"$13,596.95"
HNL - PPG,53722247374,HNL-TRW-PPG 1 S,A321-200,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/53722247374,https://www.airlines-manager.com/aircraft/show/88725599,3:30,15:44,380,"$785,616.00","$736,014.00","$1,936.88","$60,164.63"
HNL - PPG,53753439699,HNL-TRW-PPG 2 S,A321-200,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/53753439699,https://www.airlines-manager.com/aircraft/show/88725598,16:00,4:14,380,"$785,616.00","$736,014.00","$1,936.88","$60,164.63"
HNL - PPG,53758909931,HNL-TRW-PPG 3 S,A321-200,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/53758909931,https://www.airlines-manager.com/aircraft/show/88725597,18:00,6:14,380,"$785,616.00","$736,014.00","$1,936.88","$60,164.63"
HNL - PPT,53722247550,HNL-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/53722247550,https://www.airlines-manager.com/aircraft/show/88725600,4:45,17:29,310,"$766,196.00","$713,229.00","$2,300.74","$56,012.75"
HNL - PPT,53753439563,HNL CARGO 2,737-700,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/53753439563,https://www.airlines-manager.com/aircraft/show/107563068,15:00,3:44,0,"$211,034.00","$168,198.00",#DIV/0!,"$13,209.27"
HNL - PPT,53753439564,HNL 84A-6 F,777-300,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/53753439564,https://www.airlines-manager.com/aircraft/show/95818921,15:45,3:44,832,"$1,835,287.00","$1,699,043.00","$2,042.12","$141,783.84"
HNL - PPT,53758909869,HNL-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/53758909869,https://www.airlines-manager.com/aircraft/show/88725600,17:30,6:14,310,"$688,453.00","$643,008.00","$2,074.22","$50,498.01"
HNL - SEA,53722247485,HNL 56D-1 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/53722247485,https://www.airlines-manager.com/aircraft/show/112066132,3:45,15:14,592,"$1,411,026.00","$1,309,353.00","$2,211.74","$114,022.03"
HNL - SEA,53753439685,HNL 56D-1 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/53753439685,https://www.airlines-manager.com/aircraft/show/112066132,16:00,3:29,592,"$1,411,026.00","$1,309,353.00","$2,211.74","$114,022.03"
HNL - SEA,53758909916,HNL 56D-4 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/53758909916,https://www.airlines-manager.com/aircraft/show/112066135,18:00,5:29,592,"$1,411,026.00","$1,309,353.00","$2,211.74","$114,022.03"
HNL - SFO,53735281183,HNL-SFO-LAX 1,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/53735281183,https://www.airlines-manager.com/aircraft/show/110044458,7:00,18:14,338,"$755,506.00","$697,022.00","$2,062.20","$62,049.44"
HNL - SFO,53742108896,HNL-SFO-LAX 2,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/53742108896,https://www.airlines-manager.com/aircraft/show/110044459,9:00,20:14,338,"$755,506.00","$697,022.00","$2,062.20","$62,049.44"
HNL - SFO,53742108897,HNL-SFO-LAX 5,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/53742108897,https://www.airlines-manager.com/aircraft/show/110044462,10:30,21:44,338,"$755,506.00","$697,022.00","$2,062.20","$62,049.44"
HNL - SFO,53764392478,HNL-SFO-LAX 3,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/53764392478,https://www.airlines-manager.com/aircraft/show/110044460,19:00,6:14,338,"$755,506.00","$697,022.00","$2,062.20","$62,049.44"
HNL - SFO,53764392479,HNL-SFO-LAX 4,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/53764392479,https://www.airlines-manager.com/aircraft/show/110044461,21:00,8:14,338,"$755,506.00","$697,022.00","$2,062.20","$62,049.44"
HNL - SFO,53768887034,HNL-SFO-LAX 6 B,A319-100,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/53768887034,https://www.airlines-manager.com/aircraft/show/106106389,22:00,9:29,198,"$526,164.00","$476,877.00","$2,408.47","$41,527.75"
HNL - SIN,53722247560,HNL 84B-4 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/53722247560,https://www.airlines-manager.com/aircraft/show/96807090,5:15,7:29,832,"$4,308,151.00","$3,909,929.00","$4,699.43","$1,750,714.48"
HNL - SIN,53758909819,HNL 84B-7 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/53758909819,https://www.airlines-manager.com/aircraft/show/96807087,17:00,19:14,832,"$4,308,151.00","$3,909,929.00","$4,699.43","$1,750,714.48"
HNL - SYD,53735281205,HNL 84B-5 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/53735281205,https://www.airlines-manager.com/aircraft/show/96807089,7:30,3:59,832,"$3,117,929.00","$2,810,898.00","$3,378.48","$137,228.54"
HNL - SYD,53764392503,HNL 84B-1 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/53764392503,https://www.airlines-manager.com/aircraft/show/96807093,19:15,15:44,832,"$3,117,929.00","$2,810,898.00","$3,378.48","$137,228.54"
HNL - SYD,53764392504,Charter 2,747-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/53764392504,https://www.airlines-manager.com/aircraft/show/112787252,20:00,15:59,576,"$2,692,261.00","$2,533,420.00","$4,398.30","$126,776.65"
HNL - TRW,53722247522,HNL-TRW-PPG 2 S,A321-200,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/53722247522,https://www.airlines-manager.com/aircraft/show/88725598,4:15,15:44,380,"$764,424.00","$719,793.00","$1,894.19","$62,681.54"
HNL - TRW,53735281129,HNL-TRW-PPG 3 S,A321-200,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/53735281129,https://www.airlines-manager.com/aircraft/show/88725597,6:15,17:44,380,"$764,424.00","$719,793.00","$1,894.19","$62,681.54"
HNL - TRW,53753439561,HNL CARGO 1,737-700,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/53753439561,https://www.airlines-manager.com/aircraft/show/107564830,15:00,2:14,0,"$192,452.00","$155,886.00",#DIV/0!,"$13,877.09"
HNL - TRW,53753439562,HNL-TRW-PPG 1 S,A321-200,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/53753439562,https://www.airlines-manager.com/aircraft/show/88725599,16:00,3:29,380,"$764,424.00","$719,793.00","$1,894.19","$62,681.54"
HNL - YVR,53722247067,HNL 56D-6 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/53722247067,https://www.airlines-manager.com/aircraft/show/112066137,0:15,11:59,592,"$1,414,240.00","$1,318,834.00","$2,227.76","$112,400.63"
HNL - YVR,53722247068,HNL 56D-2 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/53722247068,https://www.airlines-manager.com/aircraft/show/112066133,3:30,15:14,592,"$1,414,240.00","$1,318,834.00","$2,227.76","$112,400.63"
HNL - YVR,53753439686,HNL 56D-7 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/53753439686,https://www.airlines-manager.com/aircraft/show/112066138,16:00,3:44,592,"$1,414,240.00","$1,318,834.00","$2,227.76","$112,400.63"
IAH - ABQ,53722247199,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/53722247199,https://www.airlines-manager.com/aircraft/show/103600700,1:00,5:59,310,"$316,874.00","$283,557.00",$914.70,"$56,901.07"
IAH - ABQ,53722247200,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/53722247200,https://www.airlines-manager.com/aircraft/show/110582844,2:30,7:29,198,"$240,844.00","$214,158.00","$1,081.61","$42,974.85"
IAH - ABQ,53735281118,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/53735281118,https://www.airlines-manager.com/aircraft/show/88725601,6:00,10:59,310,"$316,874.00","$283,557.00",$914.70,"$56,901.07"
IAH - ABQ,53747970797,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/53747970797,https://www.airlines-manager.com/aircraft/show/103600702,13:00,17:59,310,"$316,874.00","$283,557.00",$914.70,"$56,901.07"
IAH - ABQ,53758909973,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/53758909973,https://www.airlines-manager.com/aircraft/show/103600701,18:45,23:44,310,"$316,874.00","$283,557.00",$914.70,"$56,901.07"
IAH - ALB,53722247069,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/53722247069,https://www.airlines-manager.com/aircraft/show/114266976,0:15,7:59,320,"$495,326.00","$449,872.00","$1,405.85","$58,173.10"
IAH - ALB,53722247070,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/53722247070,https://www.airlines-manager.com/aircraft/show/92800067,2:00,9:59,112,"$234,453.00","$207,413.00","$1,851.90","$25,980.75"
IAH - ALB,53747970632,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/53747970632,https://www.airlines-manager.com/aircraft/show/114266971,12:00,19:44,320,"$495,326.00","$449,872.00","$1,405.85","$58,173.10"
IAH - ALB,53753439585,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/53753439585,https://www.airlines-manager.com/aircraft/show/114266970,15:00,22:44,320,"$495,326.00","$449,872.00","$1,405.85","$58,173.10"
IAH - ALB,53764392627,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/53764392627,https://www.airlines-manager.com/aircraft/show/114266972,20:15,3:59,320,"$495,326.00","$449,872.00","$1,405.85","$58,173.10"
IAH - ANC,53747970668,IAH-ANC-ONT 1,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/53747970668,https://www.airlines-manager.com/aircraft/show/108258010,12:00,2:44,310,"$896,871.00","$826,647.00","$2,666.60","$56,107.26"
IAH - ANC,53753439451,IAH-ANC-ONT 2,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/53753439451,https://www.airlines-manager.com/aircraft/show/108258011,14:00,4:44,310,"$896,871.00","$826,647.00","$2,666.60","$56,107.26"
IAH - ANC,53764392494,IAH-ANC-ONT 3,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/53764392494,https://www.airlines-manager.com/aircraft/show/108258012,19:15,9:59,310,"$896,871.00","$826,647.00","$2,666.60","$56,107.26"
IAH - ANC,53764392495,IAH-ANC-ONT 4,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/53764392495,https://www.airlines-manager.com/aircraft/show/108089220,21:15,11:59,310,"$896,871.00","$826,647.00","$2,666.60","$56,107.26"
IAH - ANC,53768887205,IAH-ANC-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/53768887205,https://www.airlines-manager.com/aircraft/show/108286957,23:15,13:59,198,"$669,375.00","$613,055.00","$3,096.24","$41,610.07"
IAH - ATL,53722247083,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/53722247083,https://www.airlines-manager.com/aircraft/show/82323704,0:15,4:59,112,"$146,148.00","$112,107.00","$1,000.96","$23,684.58"
IAH - ATL,53742109013,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/53742109013,https://www.airlines-manager.com/aircraft/show/95894466,10:00,14:44,320,"$306,745.00","$242,670.00",$758.34,"$51,268.31"
IAH - ATL,53742109014,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/53742109014,https://www.airlines-manager.com/aircraft/show/96256511,10:45,15:29,320,"$306,745.00","$242,670.00",$758.34,"$51,268.31"
IAH - ATL,53753439669,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/53753439669,https://www.airlines-manager.com/aircraft/show/96183549,16:00,20:44,320,"$306,745.00","$242,670.00",$758.34,"$51,268.31"
IAH - ATL,53758909900,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/53758909900,https://www.airlines-manager.com/aircraft/show/96177955,17:45,22:29,320,"$306,745.00","$242,670.00",$758.34,"$51,268.31"
IAH - ATL,53770850189,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/53770850189,https://www.airlines-manager.com/aircraft/show/96250652,23:45,4:29,320,"$306,745.00","$242,670.00",$758.34,"$51,268.31"
IAH - AUS,53722247526,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/53722247526,https://www.airlines-manager.com/aircraft/show/106007214,4:15,6:59,338,"$100,434.00","$76,833.00",$227.32,"$28,109.63"
IAH - AUS,53742109198,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/53742109198,https://www.airlines-manager.com/aircraft/show/106007213,11:00,13:44,338,"$100,434.00","$76,833.00",$227.32,"$28,109.63"
IAH - AUS,53747970648,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/53747970648,https://www.airlines-manager.com/aircraft/show/106007217,12:00,14:44,338,"$100,434.00","$76,833.00",$227.32,"$28,109.63"
IAH - AUS,53758909937,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/53758909937,https://www.airlines-manager.com/aircraft/show/106007216,18:15,20:59,338,"$100,434.00","$76,833.00",$227.32,"$28,109.63"
IAH - AUS,53768886991,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/53768886991,https://www.airlines-manager.com/aircraft/show/106007215,21:30,0:14,266,"$87,862.00","$64,490.00",$242.44,"$23,593.90"
IAH - BDL,53735281116,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/53735281116,https://www.airlines-manager.com/aircraft/show/103600700,6:00,13:59,310,"$498,192.00","$455,852.00","$1,470.49","$57,100.46"
IAH - BDL,53735281117,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/53735281117,https://www.airlines-manager.com/aircraft/show/110582844,7:30,15:29,198,"$375,515.00","$341,578.00","$1,725.14","$42,786.39"
IAH - BDL,53742109151,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/53742109151,https://www.airlines-manager.com/aircraft/show/88725601,11:00,18:59,310,"$498,192.00","$455,852.00","$1,470.49","$57,100.46"
IAH - BDL,53758909921,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/53758909921,https://www.airlines-manager.com/aircraft/show/103600702,18:00,1:59,310,"$498,192.00","$455,852.00","$1,470.49","$57,100.46"
IAH - BDL,53764392562,IAH-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/53764392562,https://www.airlines-manager.com/aircraft/show/96990010,19:45,3:44,112,"$234,492.00","$206,459.00","$1,843.38","$25,861.25"
IAH - BDL,53770850186,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/53770850186,https://www.airlines-manager.com/aircraft/show/103600701,23:45,7:44,310,"$498,192.00","$455,852.00","$1,470.49","$57,100.46"
IAH - BFF,53722247501,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/53722247501,https://www.airlines-manager.com/aircraft/show/114266972,4:00,9:44,320,"$365,524.00","$327,646.00","$1,023.89","$57,147.56"
IAH - BFF,53742109090,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/53742109090,https://www.airlines-manager.com/aircraft/show/114266976,10:15,15:59,320,"$365,524.00","$327,646.00","$1,023.89","$57,147.56"
IAH - BFF,53747970631,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/53747970631,https://www.airlines-manager.com/aircraft/show/92800067,12:00,17:44,112,"$173,234.00","$151,553.00","$1,353.15","$26,433.66"
IAH - BFF,53764392560,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/53764392560,https://www.airlines-manager.com/aircraft/show/114266971,19:45,1:29,320,"$365,524.00","$327,646.00","$1,023.89","$57,147.56"
IAH - BFF,53768887160,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/53768887160,https://www.airlines-manager.com/aircraft/show/114266970,22:45,4:29,320,"$365,524.00","$327,646.00","$1,023.89","$57,147.56"
IAH - BIL,53722247415,IAH-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/53722247415,https://www.airlines-manager.com/aircraft/show/117273390,2:45,9:59,320,"$455,489.00","$412,098.00","$1,287.81","$56,972.07"
IAH - BIL,53742108911,IAH-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/53742108911,https://www.airlines-manager.com/aircraft/show/117273392,9:00,16:14,320,"$455,489.00","$412,098.00","$1,287.81","$56,972.07"
IAH - BIL,53742108912,IAH-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/53742108912,https://www.airlines-manager.com/aircraft/show/117273389,11:00,18:14,320,"$455,489.00","$412,098.00","$1,287.81","$56,972.07"
IAH - BIL,53758909956,IAH-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/53758909956,https://www.airlines-manager.com/aircraft/show/117273391,18:30,1:44,320,"$455,489.00","$412,098.00","$1,287.81","$56,972.07"
IAH - BNA,53722247509,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/53722247509,https://www.airlines-manager.com/aircraft/show/104258214,4:00,8:44,310,"$301,869.00","$270,660.00",$873.10,"$57,181.69"
IAH - BNA,53742108916,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/53742108916,https://www.airlines-manager.com/aircraft/show/104258213,9:15,13:59,310,"$301,869.00","$270,660.00",$873.10,"$57,181.69"
IAH - BNA,53753439583,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/53753439583,https://www.airlines-manager.com/aircraft/show/104258212,15:00,19:44,310,"$301,869.00","$270,660.00",$873.10,"$57,181.69"
IAH - BNA,53768887043,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/53768887043,https://www.airlines-manager.com/aircraft/show/104258211,22:00,2:44,310,"$301,869.00","$270,660.00",$873.10,"$57,181.69"
IAH - BNA,53768887044,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/53768887044,https://www.airlines-manager.com/aircraft/show/103534664,23:00,3:44,112,"$143,481.00","$123,610.00","$1,103.66","$26,114.79"
IAH - BOG,53735281122,IAH 56A-4 E,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/53735281122,https://www.airlines-manager.com/aircraft/show/106676235,6:00,15:59,648,"$1,300,597.00","$1,208,305.00","$1,864.67","$121,032.22"
IAH - BOG,53753439504,IAH 56A-6 E,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/53753439504,https://www.airlines-manager.com/aircraft/show/106676237,14:00,23:59,648,"$1,300,597.00","$1,208,305.00","$1,864.67","$121,032.22"
IAH - BOG,53764392598,IAH 56A-1 E,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/53764392598,https://www.airlines-manager.com/aircraft/show/106676232,20:00,5:59,648,"$1,300,597.00","$1,208,305.00","$1,864.67","$121,032.22"
IAH - BOI,53722247223,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/53722247223,https://www.airlines-manager.com/aircraft/show/104258213,1:15,9:14,310,"$500,380.00","$458,753.00","$1,479.85","$57,463.84"
IAH - BOI,53735281172,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/53735281172,https://www.airlines-manager.com/aircraft/show/104258212,7:00,14:59,310,"$500,380.00","$458,753.00","$1,479.85","$57,463.84"
IAH - BOI,53753439512,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/53753439512,https://www.airlines-manager.com/aircraft/show/104258211,14:00,21:59,310,"$500,380.00","$458,753.00","$1,479.85","$57,463.84"
IAH - BOI,53753439513,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/53753439513,https://www.airlines-manager.com/aircraft/show/103534664,15:00,22:59,112,"$235,549.00","$207,987.00","$1,857.03","$26,052.65"
IAH - BOI,53764392609,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/53764392609,https://www.airlines-manager.com/aircraft/show/104258214,20:00,3:59,310,"$500,380.00","$458,753.00","$1,479.85","$57,463.84"
IAH - BOS,53722247323,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/53722247323,https://www.airlines-manager.com/aircraft/show/88400800,1:45,9:59,400,"$665,959.00","$604,155.00","$1,510.39","$73,379.15"
IAH - BOS,53742109130,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/53742109130,https://www.airlines-manager.com/aircraft/show/88400799,11:00,19:14,400,"$665,959.00","$604,155.00","$1,510.39","$73,379.15"
IAH - BOS,53747970643,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/53747970643,https://www.airlines-manager.com/aircraft/show/88400801,12:00,20:14,400,"$665,959.00","$604,155.00","$1,510.39","$73,379.15"
IAH - BOS,53758909888,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/53758909888,https://www.airlines-manager.com/aircraft/show/89233038,17:45,1:59,400,"$665,959.00","$604,155.00","$1,510.39","$73,379.15"
IAH - BOS,53758909889,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/53758909889,https://www.airlines-manager.com/aircraft/show/88400798,18:30,2:44,377,"$643,125.00","$582,274.00","$1,544.49","$70,721.54"
IAH - BSB,53742109218,IAH 84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/53742109218,https://www.airlines-manager.com/aircraft/show/89124076,11:15,5:29,932,"$3,053,991.00","$2,786,057.00","$2,989.33","$152,800.20"
IAH - BSB,53764392722,IAH 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/53764392722,https://www.airlines-manager.com/aircraft/show/88905140,20:15,14:29,932,"$3,053,991.00","$2,786,057.00","$2,989.33","$152,800.20"
IAH - BTV,53722247059,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/53722247059,https://www.airlines-manager.com/aircraft/show/86385103,0:00,8:14,310,"$515,451.00","$473,724.00","$1,528.14","$57,537.33"
IAH - BTV,53722247060,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/53722247060,https://www.airlines-manager.com/aircraft/show/82543907,4:15,12:29,112,"$242,906.00","$215,131.00","$1,920.81","$26,129.27"
IAH - BTV,53735281189,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/53735281189,https://www.airlines-manager.com/aircraft/show/114373409,7:15,15:29,310,"$515,451.00","$473,724.00","$1,528.14","$57,537.33"
IAH - BTV,53753439494,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/53753439494,https://www.airlines-manager.com/aircraft/show/114373410,14:00,22:14,310,"$515,451.00","$473,724.00","$1,528.14","$57,537.33"
IAH - BTV,53758909969,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/53758909969,https://www.airlines-manager.com/aircraft/show/113994196,18:45,2:59,310,"$515,451.00","$473,724.00","$1,528.14","$57,537.33"
IAH - BUF,53722247244,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/53722247244,https://www.airlines-manager.com/aircraft/show/107467127,1:15,8:14,310,"$452,151.00","$413,484.00","$1,333.82","$59,210.12"
IAH - BUF,53722247245,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/53722247245,https://www.airlines-manager.com/aircraft/show/107467128,4:00,10:59,310,"$452,151.00","$413,484.00","$1,333.82","$59,210.12"
IAH - BUF,53747970767,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/53747970767,https://www.airlines-manager.com/aircraft/show/107467129,13:00,19:59,310,"$452,151.00","$413,484.00","$1,333.82","$59,210.12"
IAH - BUF,53758909844,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/53758909844,https://www.airlines-manager.com/aircraft/show/110582843,17:00,23:59,198,"$341,310.00","$310,322.00","$1,567.28","$44,437.52"
IAH - BUF,53764392847,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/53764392847,https://www.airlines-manager.com/aircraft/show/107467130,21:15,4:14,310,"$452,151.00","$413,484.00","$1,333.82","$59,210.12"
IAH - BUR,53722247387,IAH-YEG-BUR 4,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/53722247387,https://www.airlines-manager.com/aircraft/show/117273341,2:30,9:59,310,"$467,550.00","$428,881.00","$1,383.49","$57,311.49"
IAH - BUR,53722247388,IAH-YEG-BUR 3,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/53722247388,https://www.airlines-manager.com/aircraft/show/117273342,3:15,10:44,310,"$467,550.00","$428,881.00","$1,383.49","$57,311.49"
IAH - BUR,53742109127,IAH-YEG-BUR 5,A321neo,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/53742109127,https://www.airlines-manager.com/aircraft/show/117273340,11:00,18:29,338,"$506,558.00","$469,607.00","$1,389.37","$62,753.72"
IAH - BUR,53758909935,IAH-YEG-BUR 2,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/53758909935,https://www.airlines-manager.com/aircraft/show/117273343,18:00,1:29,310,"$467,550.00","$428,881.00","$1,383.49","$57,311.49"
IAH - BUR,53764392699,IAH-YEG-BUR 1,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/53764392699,https://www.airlines-manager.com/aircraft/show/117273344,20:15,3:44,290,"$449,692.00","$411,776.00","$1,419.92","$55,025.75"
IAH - BWI,53722247099,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/53722247099,https://www.airlines-manager.com/aircraft/show/106007215,0:15,6:59,338,"$466,270.00","$424,899.00","$1,257.10","$63,103.81"
IAH - BWI,53722247100,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/53722247100,https://www.airlines-manager.com/aircraft/show/107543798,4:45,11:44,0,"$114,931.00","$84,213.00",$0.00,"$12,059.14"
IAH - BWI,53742109197,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/53742109197,https://www.airlines-manager.com/aircraft/show/106007214,11:00,17:44,338,"$466,270.00","$424,899.00","$1,257.10","$63,103.81"
IAH - BWI,53747970888,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/53747970888,https://www.airlines-manager.com/aircraft/show/106007213,13:45,20:29,338,"$466,270.00","$424,899.00","$1,257.10","$63,103.81"
IAH - BWI,53753439538,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/53753439538,https://www.airlines-manager.com/aircraft/show/106007217,14:45,21:29,338,"$466,270.00","$424,899.00","$1,257.10","$63,103.81"
IAH - BWI,53764392774,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/53764392774,https://www.airlines-manager.com/aircraft/show/106007216,21:00,3:44,338,"$466,270.00","$424,899.00","$1,257.10","$63,103.81"
IAH - BZN,53722247118,IAH-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/53722247118,https://www.airlines-manager.com/aircraft/show/117273392,0:30,7:59,320,"$473,001.00","$429,239.00","$1,341.37","$57,359.33"
IAH - BZN,53722247119,IAH-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/53722247119,https://www.airlines-manager.com/aircraft/show/117273389,2:30,9:59,320,"$473,001.00","$429,239.00","$1,341.37","$57,359.33"
IAH - BZN,53742109121,IAH-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/53742109121,https://www.airlines-manager.com/aircraft/show/117273391,11:00,18:29,320,"$473,001.00","$429,239.00","$1,341.37","$57,359.33"
IAH - BZN,53764392508,IAH-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/53764392508,https://www.airlines-manager.com/aircraft/show/117273390,19:15,2:44,320,"$473,001.00","$429,239.00","$1,341.37","$57,359.33"
IAH - CAK,53722247435,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/53722247435,https://www.airlines-manager.com/aircraft/show/113994196,3:00,9:14,310,"$391,760.00","$357,325.00","$1,152.66","$57,324.87"
IAH - CAK,53735281246,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/53735281246,https://www.airlines-manager.com/aircraft/show/86385103,8:15,14:29,310,"$391,760.00","$357,325.00","$1,152.66","$57,324.87"
IAH - CAK,53747970719,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/53747970719,https://www.airlines-manager.com/aircraft/show/82543907,13:00,19:14,112,"$185,160.00","$162,606.00","$1,451.84","$26,086.52"
IAH - CAK,53753439661,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/53753439661,https://www.airlines-manager.com/aircraft/show/114373409,16:00,22:14,310,"$391,760.00","$357,325.00","$1,152.66","$57,324.87"
IAH - CAK,53768887125,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/53768887125,https://www.airlines-manager.com/aircraft/show/114373410,22:15,4:29,291,"$377,501.00","$343,631.00","$1,180.86","$55,127.97"
IAH - CHS,53722247278,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/53722247278,https://www.airlines-manager.com/aircraft/show/107467211,1:30,7:14,112,"$169,673.00","$148,516.00","$1,326.04","$25,903.95"
IAH - CHS,53722247279,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/53722247279,https://www.airlines-manager.com/aircraft/show/107467131,3:30,9:14,310,"$357,728.00","$325,152.00","$1,048.88","$56,712.56"
IAH - CHS,53747970679,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/53747970679,https://www.airlines-manager.com/aircraft/show/107467132,12:00,17:44,310,"$357,728.00","$325,152.00","$1,048.88","$56,712.56"
IAH - CHS,53758909858,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/53758909858,https://www.airlines-manager.com/aircraft/show/107467133,17:15,22:59,310,"$357,728.00","$325,152.00","$1,048.88","$56,712.56"
IAH - CHS,53770850196,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/53770850196,https://www.airlines-manager.com/aircraft/show/107467134,23:45,5:29,310,"$357,728.00","$325,152.00","$1,048.88","$56,712.56"
IAH - CLE,53722247344,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/53722247344,https://www.airlines-manager.com/aircraft/show/103600702,2:00,8:14,310,"$399,426.00","$362,715.00","$1,170.05","$58,189.57"
IAH - CLE,53735281223,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/53735281223,https://www.airlines-manager.com/aircraft/show/103600701,7:45,13:59,310,"$399,426.00","$362,715.00","$1,170.05","$58,189.57"
IAH - CLE,53753439453,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/53753439453,https://www.airlines-manager.com/aircraft/show/103600700,14:00,20:14,310,"$399,426.00","$362,715.00","$1,170.05","$58,189.57"
IAH - CLE,53753439454,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/53753439454,https://www.airlines-manager.com/aircraft/show/110582844,15:30,21:44,198,"$301,699.00","$272,283.00","$1,375.17","$43,681.76"
IAH - CLE,53764392487,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/53764392487,https://www.airlines-manager.com/aircraft/show/88725601,19:00,1:14,310,"$399,426.00","$362,715.00","$1,170.05","$58,189.57"
IAH - CLT,53722247495,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/53722247495,https://www.airlines-manager.com/aircraft/show/93094697,3:45,9:29,310,"$360,318.00","$318,018.00","$1,025.86","$55,468.26"
IAH - CLT,53742109022,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/53742109022,https://www.airlines-manager.com/aircraft/show/93094698,10:00,15:44,310,"$360,318.00","$318,018.00","$1,025.86","$55,468.26"
IAH - CLT,53747970634,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/53747970634,https://www.airlines-manager.com/aircraft/show/93100455,12:00,17:44,112,"$170,541.00","$143,570.00","$1,281.88","$25,041.28"
IAH - CLT,53758909780,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/53758909780,https://www.airlines-manager.com/aircraft/show/93094699,16:45,22:29,310,"$360,318.00","$318,018.00","$1,025.86","$55,468.26"
IAH - CLT,53758909781,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/53758909781,https://www.airlines-manager.com/aircraft/show/93094695,18:45,0:29,310,"$360,318.00","$318,018.00","$1,025.86","$55,468.26"
IAH - CLT,53768887041,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/53768887041,https://www.airlines-manager.com/aircraft/show/93094696,22:00,3:44,310,"$360,318.00","$318,018.00","$1,025.86","$55,468.26"
IAH - CMH,53735281181,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/53735281181,https://www.airlines-manager.com/aircraft/show/103882355,7:00,12:59,310,"$377,783.00","$342,516.00","$1,104.89","$57,245.01"
IAH - CMH,53742109134,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/53742109134,https://www.airlines-manager.com/aircraft/show/103882358,11:00,16:59,310,"$377,783.00","$342,516.00","$1,104.89","$57,245.01"
IAH - CMH,53747970641,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/53747970641,https://www.airlines-manager.com/aircraft/show/105099861,12:00,17:59,112,"$178,529.00","$155,649.00","$1,389.72","$26,013.76"
IAH - CMH,53764392502,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/53764392502,https://www.airlines-manager.com/aircraft/show/103882357,19:15,1:14,310,"$377,783.00","$342,516.00","$1,104.89","$57,245.01"
IAH - CMH,53768887198,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/53768887198,https://www.airlines-manager.com/aircraft/show/103882356,23:00,4:59,310,"$377,783.00","$342,516.00","$1,104.89","$57,245.01"
IAH - COS,53722247306,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/53722247306,https://www.airlines-manager.com/aircraft/show/103882355,1:45,6:59,310,"$330,575.00","$297,660.00",$960.19,"$56,877.71"
IAH - COS,53735281072,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/53735281072,https://www.airlines-manager.com/aircraft/show/103882358,5:45,10:59,310,"$330,575.00","$297,660.00",$960.19,"$56,877.71"
IAH - COS,53753439452,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/53753439452,https://www.airlines-manager.com/aircraft/show/103882357,14:00,19:14,310,"$330,575.00","$297,660.00",$960.19,"$56,877.71"
IAH - COS,53758909893,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/53758909893,https://www.airlines-manager.com/aircraft/show/103882356,17:45,22:59,310,"$330,575.00","$297,660.00",$960.19,"$56,877.71"
IAH - COS,53768887174,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/53768887174,https://www.airlines-manager.com/aircraft/show/105099861,22:45,3:59,111,"$156,592.00","$135,466.00","$1,220.41","$25,885.22"
IAH - CUN,53722247211,IAH 56A-4 E,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/53722247211,https://www.airlines-manager.com/aircraft/show/106676235,1:00,5:59,648,"$623,370.00","$570,261.00",$880.03,"$114,433.65"
IAH - CUN,53747970701,IAH 56A-5 E,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/53747970701,https://www.airlines-manager.com/aircraft/show/106676236,12:30,17:29,648,"$623,370.00","$570,261.00",$880.03,"$114,433.65"
IAH - CUN,53764392757,IAH 56A-7 E,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/53764392757,https://www.airlines-manager.com/aircraft/show/106676238,20:30,1:29,648,"$623,370.00","$570,261.00",$880.03,"$114,433.65"
IAH - CVG,53722247087,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/53722247087,https://www.airlines-manager.com/aircraft/show/99093332,0:15,5:44,320,"$346,590.00","$305,889.00",$955.90,"$55,785.23"
IAH - CVG,53722247088,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/53722247088,https://www.airlines-manager.com/aircraft/show/99093333,4:00,9:29,320,"$346,590.00","$305,889.00",$955.90,"$55,785.23"
IAH - CVG,53735281227,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/53735281227,https://www.airlines-manager.com/aircraft/show/99093334,8:00,13:29,320,"$346,590.00","$305,889.00",$955.90,"$55,785.23"
IAH - CVG,53753439501,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/53753439501,https://www.airlines-manager.com/aircraft/show/99093335,14:00,19:29,320,"$346,590.00","$305,889.00",$955.90,"$55,785.23"
IAH - CVG,53753439502,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/53753439502,https://www.airlines-manager.com/aircraft/show/101412921,15:45,21:14,0,"$108,314.00","$74,133.00",#DIV/0!,"$13,519.70"
IAH - CVG,53753439503,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/53753439503,https://www.airlines-manager.com/aircraft/show/106499070,16:00,21:29,198,"$262,949.00","$234,422.00","$1,183.95","$42,751.73"
IAH - DEN,53747970645,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/53747970645,https://www.airlines-manager.com/aircraft/show/105562975,12:00,17:29,338,"$377,132.00","$323,898.00",$958.28,"$59,069.54"
IAH - DEN,53747970646,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/53747970646,https://www.airlines-manager.com/aircraft/show/105562971,13:00,18:29,338,"$377,132.00","$323,898.00",$958.28,"$59,069.54"
IAH - DEN,53768887141,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/53768887141,https://www.airlines-manager.com/aircraft/show/105562972,22:30,3:59,338,"$377,132.00","$323,898.00",$958.28,"$59,069.54"
IAH - DEN,53768887142,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/53768887142,https://www.airlines-manager.com/aircraft/show/105562973,23:00,4:29,338,"$377,132.00","$323,898.00",$958.28,"$59,069.54"
IAH - DEN,53768887143,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/53768887143,https://www.airlines-manager.com/aircraft/show/107543798,23:15,4:44,0,"$93,476.00","$57,419.00",$0.00,"$10,471.55"
IAH - DEN,53768887144,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/53768887144,https://www.airlines-manager.com/aircraft/show/105562974,23:30,4:59,338,"$377,132.00","$323,898.00",$958.28,"$59,069.54"
IAH - DFW,53722247219,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/53722247219,https://www.airlines-manager.com/aircraft/show/99093333,1:00,3:59,320,"$127,970.00","$80,376.00",$251.18,"$26,941.68"
IAH - DFW,53722247220,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/53722247220,https://www.airlines-manager.com/aircraft/show/99093334,5:00,7:59,320,"$127,970.00","$80,376.00",$251.18,"$26,941.68"
IAH - DFW,53742109196,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/53742109196,https://www.airlines-manager.com/aircraft/show/99093335,11:00,13:59,320,"$127,970.00","$80,376.00",$251.18,"$26,941.68"
IAH - DFW,53747970728,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/53747970728,https://www.airlines-manager.com/aircraft/show/106499070,13:00,15:59,198,"$96,695.00","$64,607.00",$326.30,"$21,655.98"
IAH - DFW,53747970729,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/53747970729,https://www.airlines-manager.com/aircraft/show/107543798,13:00,15:59,0,"$39,135.00","$14,173.00",$0.00,"$4,750.73"
IAH - DFW,53753439520,IAH-YEG-BUR 4,A321-200,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/53753439520,https://www.airlines-manager.com/aircraft/show/117273341,14:15,17:14,310,"$129,445.00","$89,347.00",$288.22,"$29,948.72"
IAH - DFW,53764392850,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/53764392850,https://www.airlines-manager.com/aircraft/show/99093332,21:15,0:14,320,"$127,970.00","$80,376.00",$251.18,"$26,941.68"
IAH - DSM,53722247448,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/53722247448,https://www.airlines-manager.com/aircraft/show/110424761,3:15,8:29,320,"$331,987.00","$297,057.00",$928.30,"$56,762.48"
IAH - DSM,53735281282,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/53735281282,https://www.airlines-manager.com/aircraft/show/110424758,8:45,13:59,320,"$331,987.00","$297,057.00",$928.30,"$56,762.48"
IAH - DSM,53753439445,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/53753439445,https://www.airlines-manager.com/aircraft/show/110424759,14:00,19:14,320,"$331,987.00","$297,057.00",$928.30,"$56,762.48"
IAH - DSM,53758909960,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/53758909960,https://www.airlines-manager.com/aircraft/show/110424760,18:30,23:44,320,"$331,987.00","$297,057.00",$928.30,"$56,762.48"
IAH - DTW,53722247121,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/53722247121,https://www.airlines-manager.com/aircraft/show/90183184,0:30,6:44,310,"$394,242.00","$349,485.00","$1,127.37","$56,067.11"
IAH - DTW,53722247122,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/53722247122,https://www.airlines-manager.com/aircraft/show/90183180,2:30,8:44,310,"$394,242.00","$349,485.00","$1,127.37","$56,067.11"
IAH - DTW,53735281110,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/53735281110,https://www.airlines-manager.com/aircraft/show/90183181,6:00,12:14,310,"$394,242.00","$349,485.00","$1,127.37","$56,067.11"
IAH - DTW,53747970862,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/53747970862,https://www.airlines-manager.com/aircraft/show/90183182,13:00,19:14,310,"$394,242.00","$349,485.00","$1,127.37","$56,067.11"
IAH - DTW,53758909978,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/53758909978,https://www.airlines-manager.com/aircraft/show/90183183,18:45,0:59,310,"$394,242.00","$349,485.00","$1,127.37","$56,067.11"
IAH - DTW,53764392762,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/53764392762,https://www.airlines-manager.com/aircraft/show/90140936,20:45,2:59,136,"$187,480.00","$158,934.00","$1,168.63","$25,497.43"
IAH - ELP,53722247465,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/53722247465,https://www.airlines-manager.com/aircraft/show/104717245,3:30,8:14,310,"$299,599.00","$269,242.00",$868.52,"$56,882.11"
IAH - ELP,53742109191,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/53742109191,https://www.airlines-manager.com/aircraft/show/104717246,11:00,15:44,310,"$299,599.00","$269,242.00",$868.52,"$56,882.11"
IAH - ELP,53758909779,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/53758909779,https://www.airlines-manager.com/aircraft/show/104717247,16:45,21:29,310,"$299,599.00","$269,242.00",$868.52,"$56,882.11"
IAH - ELP,53764392429,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/53764392429,https://www.airlines-manager.com/aircraft/show/104743902,19:00,23:44,112,"$142,796.00","$123,419.00","$1,101.96","$26,074.44"
IAH - ELP,53768887048,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/53768887048,https://www.airlines-manager.com/aircraft/show/104717244,22:00,2:44,310,"$299,599.00","$269,242.00",$868.52,"$56,882.11"
IAH - EZE,53722247511,IAH 84A-2 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/53722247511,https://www.airlines-manager.com/aircraft/show/89439130,4:00,0:29,932,"$3,364,104.00","$3,066,842.00","$3,290.60","$149,723.78"
IAH - EZE,53722247512,IAH 84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/53722247512,https://www.airlines-manager.com/aircraft/show/89124075,5:30,1:59,932,"$3,364,104.00","$3,066,842.00","$3,290.60","$149,723.78"
IAH - FAR,53722247283,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/53722247283,https://www.airlines-manager.com/aircraft/show/110424754,1:30,8:14,320,"$417,352.00","$376,905.00","$1,177.83","$55,975.99"
IAH - FAR,53722247284,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/53722247284,https://www.airlines-manager.com/aircraft/show/110424755,4:15,10:59,320,"$417,352.00","$376,905.00","$1,177.83","$55,975.99"
IAH - FAR,53747970667,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/53747970667,https://www.airlines-manager.com/aircraft/show/110424756,12:00,18:44,320,"$417,352.00","$376,905.00","$1,177.83","$55,975.99"
IAH - FAR,53768887040,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/53768887040,https://www.airlines-manager.com/aircraft/show/110424757,22:00,4:44,320,"$417,352.00","$376,905.00","$1,177.83","$55,975.99"
IAH - FAT,53722247497,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/53722247497,https://www.airlines-manager.com/aircraft/show/110424760,4:00,11:44,320,"$497,045.00","$451,592.00","$1,411.23","$58,395.52"
IAH - FAT,53753439446,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/53753439446,https://www.airlines-manager.com/aircraft/show/110424761,14:00,21:44,320,"$497,045.00","$451,592.00","$1,411.23","$58,395.52"
IAH - FAT,53758909939,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/53758909939,https://www.airlines-manager.com/aircraft/show/110424758,18:15,1:59,320,"$497,045.00","$451,592.00","$1,411.23","$58,395.52"
IAH - FAT,53768887228,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/53768887228,https://www.airlines-manager.com/aircraft/show/110424759,23:30,7:14,320,"$497,045.00","$451,592.00","$1,411.23","$58,395.52"
IAH - FCA,53722247319,IAH-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/53722247319,https://www.airlines-manager.com/aircraft/show/117273391,1:45,9:59,320,"$521,224.00","$474,034.00","$1,481.36","$57,574.98"
IAH - FCA,53742109120,IAH-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/53742109120,https://www.airlines-manager.com/aircraft/show/117273390,11:00,19:14,320,"$521,224.00","$474,034.00","$1,481.36","$57,574.98"
IAH - FCA,53753439700,IAH-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/53753439700,https://www.airlines-manager.com/aircraft/show/117273392,16:15,0:29,320,"$521,224.00","$474,034.00","$1,481.36","$57,574.98"
IAH - FCA,53758909943,IAH-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/53758909943,https://www.airlines-manager.com/aircraft/show/117273389,18:15,2:29,306,"$507,224.00","$460,641.00","$1,505.36","$55,948.30"
IAH - FLL,53722247112,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/53722247112,https://www.airlines-manager.com/aircraft/show/93094695,0:30,6:14,310,"$366,964.00","$329,736.00","$1,063.66","$57,512.09"
IAH - FLL,53722247113,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/53722247113,https://www.airlines-manager.com/aircraft/show/93094696,3:45,9:29,310,"$366,964.00","$329,736.00","$1,063.66","$57,512.09"
IAH - FLL,53742109021,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/53742109021,https://www.airlines-manager.com/aircraft/show/93094697,10:00,15:44,310,"$366,964.00","$329,736.00","$1,063.66","$57,512.09"
IAH - FLL,53753439650,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/53753439650,https://www.airlines-manager.com/aircraft/show/93094698,15:45,21:29,310,"$366,964.00","$329,736.00","$1,063.66","$57,512.09"
IAH - FLL,53758909891,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/53758909891,https://www.airlines-manager.com/aircraft/show/93100455,17:45,23:29,112,"$174,104.00","$150,084.00","$1,340.04","$26,177.44"
IAH - FLL,53768887151,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/53768887151,https://www.airlines-manager.com/aircraft/show/93094699,22:30,4:14,310,"$366,964.00","$329,736.00","$1,063.66","$57,512.09"
IAH - FSD,53722247544,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/53722247544,https://www.airlines-manager.com/aircraft/show/110424757,4:45,10:29,320,"$361,825.00","$324,990.00","$1,015.59","$56,684.30"
IAH - FSD,53735281242,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/53735281242,https://www.airlines-manager.com/aircraft/show/110424754,8:15,13:59,320,"$361,825.00","$324,990.00","$1,015.59","$56,684.30"
IAH - FSD,53742109138,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/53742109138,https://www.airlines-manager.com/aircraft/show/110424755,11:00,16:44,320,"$361,825.00","$324,990.00","$1,015.59","$56,684.30"
IAH - FSD,53758909971,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/53758909971,https://www.airlines-manager.com/aircraft/show/110424756,18:45,0:29,280,"$334,386.00","$298,566.00","$1,066.31","$52,075.47"
IAH - GDL,53722247547,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/53722247547,https://www.airlines-manager.com/aircraft/show/114266977,4:45,9:59,400,"$438,019.00","$395,506.00",$988.77,"$75,574.39"
IAH - GDL,53742109116,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/53742109116,https://www.airlines-manager.com/aircraft/show/114266980,10:45,15:59,400,"$438,019.00","$395,506.00",$988.77,"$75,574.39"
IAH - GDL,53747970662,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/53747970662,https://www.airlines-manager.com/aircraft/show/114266979,12:00,17:14,400,"$438,019.00","$395,506.00",$988.77,"$75,574.39"
IAH - GDL,53764392579,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/53764392579,https://www.airlines-manager.com/aircraft/show/114266978,20:00,1:14,354,"$394,220.00","$352,931.00",$996.98,"$67,439.04"
IAH - GIG,53722247044,IAH 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/53722247044,https://www.airlines-manager.com/aircraft/show/88905140,0:00,20:14,932,"$3,375,058.00","$3,072,413.00","$3,296.58","$151,849.08"
IAH - GIG,53722247045,IAH 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/53722247045,https://www.airlines-manager.com/aircraft/show/89124074,2:00,22:14,932,"$3,375,058.00","$3,072,413.00","$3,296.58","$151,849.08"
IAH - GRR,53722247226,IAH-GRR-MSN 3,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/53722247226,https://www.airlines-manager.com/aircraft/show/117273346,1:15,7:29,310,"$389,416.00","$354,658.00","$1,144.06","$56,897.01"
IAH - GRR,53735281197,IAH-GRR-MSN 2,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/53735281197,https://www.airlines-manager.com/aircraft/show/117273347,7:15,13:29,310,"$389,416.00","$354,658.00","$1,144.06","$56,897.01"
IAH - GRR,53753439460,IAH-GRR-MSN 1,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/53753439460,https://www.airlines-manager.com/aircraft/show/117273348,14:00,20:14,310,"$389,416.00","$354,658.00","$1,144.06","$56,897.01"
IAH - GRR,53753439461,IAH-GRR-MSN 4,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/53753439461,https://www.airlines-manager.com/aircraft/show/117273345,16:00,22:14,310,"$389,416.00","$354,658.00","$1,144.06","$56,897.01"
IAH - GRU,53722247179,IAH 56A-7 E,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/53722247179,https://www.airlines-manager.com/aircraft/show/106676238,1:00,20:29,648,"$2,475,775.00","$2,306,133.00","$3,558.85","$118,364.40"
IAH - GRU,53742109206,IAH 56A-2 E,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/53742109206,https://www.airlines-manager.com/aircraft/show/106676233,11:00,6:29,648,"$2,475,775.00","$2,306,133.00","$3,558.85","$118,364.40"
IAH - GRU,53758909802,IAH 56A-4 E,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/53758909802,https://www.airlines-manager.com/aircraft/show/106676235,17:00,12:29,648,"$2,475,775.00","$2,306,133.00","$3,558.85","$118,364.40"
IAH - IAD,53722247475,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/53722247475,https://www.airlines-manager.com/aircraft/show/105400635,3:30,10:14,112,"$198,874.00","$170,620.00","$1,523.39","$25,339.60"
IAH - IAD,53735281148,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/53735281148,https://www.airlines-manager.com/aircraft/show/98578923,6:45,13:29,320,"$421,810.00","$372,226.00","$1,163.21","$55,281.09"
IAH - IAD,53742108945,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/53742108945,https://www.airlines-manager.com/aircraft/show/98578920,9:45,16:29,320,"$421,810.00","$372,226.00","$1,163.21","$55,281.09"
IAH - IAD,53747970834,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/53747970834,https://www.airlines-manager.com/aircraft/show/98578924,13:00,19:44,320,"$421,810.00","$372,226.00","$1,163.21","$55,281.09"
IAH - IAD,53758909928,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/53758909928,https://www.airlines-manager.com/aircraft/show/98578921,18:00,0:44,320,"$421,810.00","$372,226.00","$1,163.21","$55,281.09"
IAH - IAD,53768886996,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/53768886996,https://www.airlines-manager.com/aircraft/show/98578922,21:30,4:14,320,"$421,810.00","$372,226.00","$1,163.21","$55,281.09"
IAH - ICT,53742108944,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/53742108944,https://www.airlines-manager.com/aircraft/show/110424761,9:45,13:59,320,"$249,947.00","$218,363.00",$682.38,"$51,581.81"
IAH - ICT,53753439444,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/53753439444,https://www.airlines-manager.com/aircraft/show/110424758,14:00,18:14,320,"$249,947.00","$218,363.00",$682.38,"$51,581.81"
IAH - ICT,53764392507,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/53764392507,https://www.airlines-manager.com/aircraft/show/110424759,19:15,23:29,320,"$249,947.00","$218,363.00",$682.38,"$51,581.81"
IAH - ICT,53770850190,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/53770850190,https://www.airlines-manager.com/aircraft/show/110424760,23:45,3:59,314,"$247,126.00","$215,630.00",$686.72,"$50,936.22"
IAH - IND,53722247030,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/53722247030,https://www.airlines-manager.com/aircraft/show/100684074,0:00,5:29,310,"$343,077.00","$309,211.00",$997.45,"$56,391.06"
IAH - IND,53722247031,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/53722247031,https://www.airlines-manager.com/aircraft/show/110582845,4:45,10:14,198,"$260,133.00","$233,004.00","$1,176.79","$42,493.13"
IAH - IND,53735281114,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/53735281114,https://www.airlines-manager.com/aircraft/show/100684071,6:00,11:29,310,"$343,077.00","$309,211.00",$997.45,"$56,391.06"
IAH - IND,53747970606,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/53747970606,https://www.airlines-manager.com/aircraft/show/100684072,11:30,16:59,310,"$343,077.00","$309,211.00",$997.45,"$56,391.06"
IAH - IND,53758909902,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/53758909902,https://www.airlines-manager.com/aircraft/show/100684073,17:45,23:14,310,"$343,077.00","$309,211.00",$997.45,"$56,391.06"
IAH - JAN,53722247133,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/53722247133,https://www.airlines-manager.com/aircraft/show/110424756,0:30,3:59,320,"$176,882.00","$149,431.00",$466.97,"$42,898.85"
IAH - JAN,53742109109,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/53742109109,https://www.airlines-manager.com/aircraft/show/110424757,10:30,13:59,320,"$176,882.00","$149,431.00",$466.97,"$42,898.85"
IAH - JAN,53753439450,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/53753439450,https://www.airlines-manager.com/aircraft/show/110424754,14:00,17:29,320,"$176,882.00","$149,431.00",$466.97,"$42,898.85"
IAH - JAN,53758909784,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/53758909784,https://www.airlines-manager.com/aircraft/show/110424755,16:45,20:14,305,"$171,863.00","$144,553.00",$473.94,"$41,498.47"
IAH - JAX,53722247432,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/53722247432,https://www.airlines-manager.com/aircraft/show/104717247,3:00,8:14,310,"$336,821.00","$304,593.00",$982.56,"$58,202.48"
IAH - JAX,53735281232,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/53735281232,https://www.airlines-manager.com/aircraft/show/104743902,8:00,13:14,112,"$159,757.00","$138,997.00","$1,241.04","$26,559.94"
IAH - JAX,53742109188,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/53742109188,https://www.airlines-manager.com/aircraft/show/104717244,11:00,16:14,310,"$336,821.00","$304,593.00",$982.56,"$58,202.48"
IAH - JAX,53758909766,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/53758909766,https://www.airlines-manager.com/aircraft/show/104717245,16:30,21:44,310,"$336,821.00","$304,593.00",$982.56,"$58,202.48"
IAH - JAX,53764392851,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/53764392851,https://www.airlines-manager.com/aircraft/show/104717246,21:15,2:29,310,"$336,821.00","$304,593.00",$982.56,"$58,202.48"
IAH - JFK,53722247334,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/53722247334,https://www.airlines-manager.com/aircraft/show/89233038,2:00,9:29,400,"$620,114.00","$546,805.00","$1,367.01","$73,069.71"
IAH - JFK,53742109168,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/53742109168,https://www.airlines-manager.com/aircraft/show/88400798,11:00,18:29,400,"$620,114.00","$546,805.00","$1,367.01","$73,069.71"
IAH - JFK,53758909940,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/53758909940,https://www.airlines-manager.com/aircraft/show/88400800,18:15,1:44,400,"$620,114.00","$546,805.00","$1,367.01","$73,069.71"
IAH - JFK,53764392489,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/53764392489,https://www.airlines-manager.com/aircraft/show/88400799,19:15,2:44,400,"$620,114.00","$546,805.00","$1,367.01","$73,069.71"
IAH - JFK,53764392490,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/53764392490,https://www.airlines-manager.com/aircraft/show/88400801,21:15,4:44,400,"$620,114.00","$546,805.00","$1,367.01","$73,069.71"
IAH - LAS,53722247506,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/53722247506,https://www.airlines-manager.com/aircraft/show/96256511,4:00,10:44,320,"$428,374.00","$366,893.00","$1,146.54","$54,489.06"
IAH - LAS,53722247507,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/53722247507,https://www.airlines-manager.com/aircraft/show/96250652,5:00,11:44,320,"$428,374.00","$366,893.00","$1,146.54","$54,489.06"
IAH - LAS,53722247508,IAH-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/53722247508,https://www.airlines-manager.com/aircraft/show/96990010,5:15,11:59,112,"$201,610.00","$167,316.00","$1,493.89","$24,848.91"
IAH - LAS,53742109128,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/53742109128,https://www.airlines-manager.com/aircraft/show/96177955,11:00,17:44,320,"$428,374.00","$366,893.00","$1,146.54","$54,489.06"
IAH - LAS,53753439544,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/53753439544,https://www.airlines-manager.com/aircraft/show/95894466,14:45,21:29,320,"$428,374.00","$366,893.00","$1,146.54","$54,489.06"
IAH - LAS,53758909884,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/53758909884,https://www.airlines-manager.com/aircraft/show/82323704,17:30,0:14,112,"$201,610.00","$167,316.00","$1,493.89","$24,848.91"
IAH - LAS,53764392760,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/53764392760,https://www.airlines-manager.com/aircraft/show/96183549,20:45,3:29,320,"$428,374.00","$366,893.00","$1,146.54","$54,489.06"
IAH - LAX,53722247423,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/53722247423,https://www.airlines-manager.com/aircraft/show/88400799,2:45,9:59,400,"$608,073.00","$535,900.00","$1,339.75","$74,087.56"
IAH - LAX,53722247424,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/53722247424,https://www.airlines-manager.com/aircraft/show/88400798,3:45,10:59,400,"$608,073.00","$535,900.00","$1,339.75","$74,087.56"
IAH - LAX,53722247425,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/53722247425,https://www.airlines-manager.com/aircraft/show/88400801,4:45,11:59,400,"$608,073.00","$535,900.00","$1,339.75","$74,087.56"
IAH - LAX,53742109113,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/53742109113,https://www.airlines-manager.com/aircraft/show/89233038,10:30,17:44,400,"$608,073.00","$535,900.00","$1,339.75","$74,087.56"
IAH - LAX,53742109114,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/53742109114,https://www.airlines-manager.com/aircraft/show/88400800,11:00,18:14,400,"$608,073.00","$535,900.00","$1,339.75","$74,087.56"
IAH - LEX,53722247543,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/53722247543,https://www.airlines-manager.com/aircraft/show/114373410,4:30,9:44,310,"$333,493.00","$303,515.00",$979.08,"$57,996.50"
IAH - LEX,53742108921,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/53742108921,https://www.airlines-manager.com/aircraft/show/113994196,9:15,14:29,310,"$333,493.00","$303,515.00",$979.08,"$57,996.50"
IAH - LEX,53753439586,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/53753439586,https://www.airlines-manager.com/aircraft/show/86385103,15:00,20:14,310,"$333,493.00","$303,515.00",$979.08,"$57,996.50"
IAH - LEX,53764392509,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/53764392509,https://www.airlines-manager.com/aircraft/show/82543907,19:15,0:29,112,"$158,473.00","$139,040.00","$1,241.43","$26,568.15"
IAH - LEX,53768887123,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/53768887123,https://www.airlines-manager.com/aircraft/show/114373409,22:15,3:29,263,"$303,685.00","$274,773.00","$1,044.76","$52,504.39"
IAH - LIM,53753439533,IAH 84A-1 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/53753439533,https://www.airlines-manager.com/aircraft/show/89439131,14:30,3:59,932,"$2,248,966.00","$2,049,121.00","$2,198.63","$151,974.36"
IAH - LIM,53770850181,IAH 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/53770850181,https://www.airlines-manager.com/aircraft/show/89124074,23:45,13:14,932,"$2,248,966.00","$2,049,121.00","$2,198.63","$151,974.36"
IAH - LIT,53722247491,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/53722247491,https://www.airlines-manager.com/aircraft/show/96692491,3:45,7:14,310,"$188,277.00","$164,271.00",$529.91,"$47,159.14"
IAH - LIT,53742109211,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/53742109211,https://www.airlines-manager.com/aircraft/show/96692343,11:00,14:29,310,"$188,277.00","$164,271.00",$529.91,"$47,159.14"
IAH - LIT,53764392525,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/53764392525,https://www.airlines-manager.com/aircraft/show/96691558,19:30,22:59,310,"$188,277.00","$164,271.00",$529.91,"$47,159.14"
IAH - LIT,53764392526,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/53764392526,https://www.airlines-manager.com/aircraft/show/106014350,20:00,23:29,198,"$142,091.00","$122,870.00",$620.56,"$35,273.68"
IAH - LIT,53768887224,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/53768887224,https://www.airlines-manager.com/aircraft/show/96694086,23:30,2:59,271,"$174,314.00","$150,708.00",$556.12,"$43,265.45"
IAH - MCI,53722247202,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/53722247202,https://www.airlines-manager.com/aircraft/show/103882358,1:00,5:44,310,"$298,385.00","$267,227.00",$862.02,"$56,456.41"
IAH - MCI,53742108920,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/53742108920,https://www.airlines-manager.com/aircraft/show/103882357,9:15,13:59,310,"$298,385.00","$267,227.00",$862.02,"$56,456.41"
IAH - MCI,53747970794,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/53747970794,https://www.airlines-manager.com/aircraft/show/103882356,13:00,17:44,310,"$298,385.00","$267,227.00",$862.02,"$56,456.41"
IAH - MCI,53758909910,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/53758909910,https://www.airlines-manager.com/aircraft/show/105099861,18:00,22:44,112,"$141,332.00","$121,512.00","$1,084.93","$25,671.55"
IAH - MCI,53764392781,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/53764392781,https://www.airlines-manager.com/aircraft/show/103882355,21:00,1:44,310,"$298,385.00","$267,227.00",$862.02,"$56,456.41"
IAH - MCI,53764392782,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/53764392782,https://www.airlines-manager.com/aircraft/show/101412921,21:15,1:59,0,"$90,879.00","$60,780.00",$0.00,"$12,840.85"
IAH - MCO,53722247195,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/53722247195,https://www.airlines-manager.com/aircraft/show/90183183,1:00,6:29,310,"$345,341.00","$302,947.00",$977.25,"$55,248.69"
IAH - MCO,53722247196,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/53722247196,https://www.airlines-manager.com/aircraft/show/90140936,3:00,8:29,136,"$164,440.00","$137,662.00","$1,012.22","$25,105.53"
IAH - MCO,53735281151,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/53735281151,https://www.airlines-manager.com/aircraft/show/90183184,6:45,12:14,310,"$345,341.00","$302,947.00",$977.25,"$55,248.69"
IAH - MCO,53735281152,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/53735281152,https://www.airlines-manager.com/aircraft/show/90183180,8:45,14:14,310,"$345,341.00","$302,947.00",$977.25,"$55,248.69"
IAH - MCO,53747970860,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/53747970860,https://www.airlines-manager.com/aircraft/show/90183181,13:00,18:29,310,"$345,341.00","$302,947.00",$977.25,"$55,248.69"
IAH - MCO,53764392511,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/53764392511,https://www.airlines-manager.com/aircraft/show/90183182,19:15,0:44,310,"$345,341.00","$302,947.00",$977.25,"$55,248.69"
IAH - MEM,53722247347,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/53722247347,https://www.airlines-manager.com/aircraft/show/101412921,2:00,5:59,0,"$71,952.00","$44,009.00",#DIV/0!,"$11,048.28"
IAH - MEM,53735281070,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/53735281070,https://www.airlines-manager.com/aircraft/show/99093332,5:45,9:44,320,"$221,718.00","$188,356.00",$588.61,"$47,286.03"
IAH - MEM,53742108939,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/53742108939,https://www.airlines-manager.com/aircraft/show/99093333,9:30,13:29,320,"$221,718.00","$188,356.00",$588.61,"$47,286.03"
IAH - MEM,53753439505,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/53753439505,https://www.airlines-manager.com/aircraft/show/99093334,14:00,17:59,320,"$221,718.00","$188,356.00",$588.61,"$47,286.03"
IAH - MEM,53764392540,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/53764392540,https://www.airlines-manager.com/aircraft/show/99093335,19:30,23:29,320,"$221,718.00","$188,356.00",$588.61,"$47,286.03"
IAH - MEM,53768886989,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/53768886989,https://www.airlines-manager.com/aircraft/show/106499070,21:30,1:29,198,"$168,315.00","$145,325.00",$733.96,"$36,483.26"
IAH - MEX,53722247321,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/53722247321,https://www.airlines-manager.com/aircraft/show/97026605,1:45,6:44,136,"$153,432.00","$128,531.00",$945.08,"$25,792.17"
IAH - MEX,53722247322,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/53722247322,https://www.airlines-manager.com/aircraft/show/97076945,5:30,10:29,400,"$414,085.00","$365,742.00",$914.36,"$73,393.04"
IAH - MEX,53735281270,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/53735281270,https://www.airlines-manager.com/aircraft/show/97076942,8:30,13:29,400,"$414,085.00","$365,742.00",$914.36,"$73,393.04"
IAH - MEX,53747970841,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/53747970841,https://www.airlines-manager.com/aircraft/show/97076946,13:00,17:59,400,"$414,085.00","$365,742.00",$914.36,"$73,393.04"
IAH - MEX,53753439668,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/53753439668,https://www.airlines-manager.com/aircraft/show/97076943,16:00,20:59,391,"$405,820.00","$357,701.00",$914.84,"$71,779.46"
IAH - MEX,53768887135,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/53768887135,https://www.airlines-manager.com/aircraft/show/97076944,22:30,3:29,284,"$307,549.00","$262,087.00",$922.84,"$52,592.71"
IAH - MHT,53722247281,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/53722247281,https://www.airlines-manager.com/aircraft/show/114266971,1:30,9:44,320,"$523,407.00","$475,551.00","$1,486.10","$57,759.23"
IAH - MHT,53735281153,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/53735281153,https://www.airlines-manager.com/aircraft/show/114266970,6:45,14:59,320,"$523,407.00","$475,551.00","$1,486.10","$57,759.23"
IAH - MHT,53747970633,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/53747970633,https://www.airlines-manager.com/aircraft/show/114266972,12:00,20:14,320,"$523,407.00","$475,551.00","$1,486.10","$57,759.23"
IAH - MHT,53753439664,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/53753439664,https://www.airlines-manager.com/aircraft/show/114266976,16:00,0:14,320,"$523,407.00","$475,551.00","$1,486.10","$57,759.23"
IAH - MHT,53758909886,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/53758909886,https://www.airlines-manager.com/aircraft/show/92800067,17:45,1:59,112,"$246,747.00","$218,180.00","$1,948.04","$26,499.60"
IAH - MIA,53722247172,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/53722247172,https://www.airlines-manager.com/aircraft/show/90183182,0:45,6:29,310,"$370,158.00","$324,401.00","$1,046.45","$56,581.57"
IAH - MIA,53735281144,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/53735281144,https://www.airlines-manager.com/aircraft/show/90183183,6:30,12:14,310,"$370,158.00","$324,401.00","$1,046.45","$56,581.57"
IAH - MIA,53735281145,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/53735281145,https://www.airlines-manager.com/aircraft/show/90140936,8:30,14:14,136,"$176,283.00","$147,315.00","$1,083.20","$25,694.48"
IAH - MIA,53747970712,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/53747970712,https://www.airlines-manager.com/aircraft/show/90183184,13:00,18:44,310,"$370,158.00","$324,401.00","$1,046.45","$56,581.57"
IAH - MIA,53753439601,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/53753439601,https://www.airlines-manager.com/aircraft/show/90183180,15:00,20:44,310,"$370,158.00","$324,401.00","$1,046.45","$56,581.57"
IAH - MIA,53758909957,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/53758909957,https://www.airlines-manager.com/aircraft/show/90183181,18:30,0:14,310,"$370,158.00","$324,401.00","$1,046.45","$56,581.57"
IAH - MKE,53722247215,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/53722247215,https://www.airlines-manager.com/aircraft/show/104258212,1:00,6:59,310,"$379,077.00","$343,943.00","$1,109.49","$57,483.51"
IAH - MKE,53735281233,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/53735281233,https://www.airlines-manager.com/aircraft/show/104258211,8:00,13:59,310,"$379,077.00","$343,943.00","$1,109.49","$57,483.51"
IAH - MKE,53742108885,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/53742108885,https://www.airlines-manager.com/aircraft/show/103534664,9:00,14:59,112,"$179,025.00","$156,225.00","$1,394.87","$26,110.03"
IAH - MKE,53753439495,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/53753439495,https://www.airlines-manager.com/aircraft/show/104258214,14:00,19:59,310,"$379,077.00","$343,943.00","$1,109.49","$57,483.51"
IAH - MKE,53764392497,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/53764392497,https://www.airlines-manager.com/aircraft/show/104258213,19:15,1:14,310,"$379,077.00","$343,943.00","$1,109.49","$57,483.51"
IAH - MSN,53735281213,IAH-GRR-MSN 3,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/53735281213,https://www.airlines-manager.com/aircraft/show/117273346,7:30,13:29,310,"$372,062.00","$338,977.00","$1,093.47","$56,653.54"
IAH - MSN,53753439459,IAH-GRR-MSN 2,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/53753439459,https://www.airlines-manager.com/aircraft/show/117273347,14:00,19:59,310,"$372,062.00","$338,977.00","$1,093.47","$56,653.54"
IAH - MSN,53764392632,IAH-GRR-MSN 1,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/53764392632,https://www.airlines-manager.com/aircraft/show/117273348,20:15,2:14,310,"$372,062.00","$338,977.00","$1,093.47","$56,653.54"
IAH - MSN,53768887124,IAH-GRR-MSN 4,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/53768887124,https://www.airlines-manager.com/aircraft/show/117273345,22:15,4:14,310,"$372,062.00","$338,977.00","$1,093.47","$56,653.54"
IAH - MSO,53722247514,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/53722247514,https://www.airlines-manager.com/aircraft/show/110424756,4:00,11:59,320,"$506,889.00","$460,456.00","$1,438.93","$57,677.16"
IAH - MSO,53753439443,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/53753439443,https://www.airlines-manager.com/aircraft/show/110424757,14:00,21:59,320,"$506,889.00","$460,456.00","$1,438.93","$57,677.16"
IAH - MSO,53758909870,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/53758909870,https://www.airlines-manager.com/aircraft/show/110424754,17:30,1:29,320,"$506,889.00","$460,456.00","$1,438.93","$57,677.16"
IAH - MSO,53764392714,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/53764392714,https://www.airlines-manager.com/aircraft/show/110424755,20:15,4:14,320,"$506,889.00","$460,456.00","$1,438.93","$57,677.16"
IAH - MSP,53722247502,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/53722247502,https://www.airlines-manager.com/aircraft/show/95894466,4:00,9:59,320,"$383,173.00","$333,877.00","$1,043.37","$55,801.17"
IAH - MSP,53722247503,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/53722247503,https://www.airlines-manager.com/aircraft/show/82323704,5:00,11:14,112,"$181,989.00","$154,324.00","$1,377.89","$24,757.86"
IAH - MSP,53742109015,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/53742109015,https://www.airlines-manager.com/aircraft/show/96183549,10:00,15:59,320,"$383,173.00","$333,877.00","$1,043.37","$55,801.17"
IAH - MSP,53758909898,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/53758909898,https://www.airlines-manager.com/aircraft/show/96250652,17:45,23:44,320,"$383,173.00","$333,877.00","$1,043.37","$55,801.17"
IAH - MSP,53768887007,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/53768887007,https://www.airlines-manager.com/aircraft/show/96256511,21:30,3:29,320,"$383,173.00","$333,877.00","$1,043.37","$55,801.17"
IAH - MSP,53768887008,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/53768887008,https://www.airlines-manager.com/aircraft/show/96177955,22:30,4:29,320,"$383,173.00","$333,877.00","$1,043.37","$55,801.17"
IAH - MSY,53722247492,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/53722247492,https://www.airlines-manager.com/aircraft/show/106007216,3:45,6:59,338,"$170,355.00","$145,708.00",$431.09,"$45,064.33"
IAH - MSY,53722247493,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/53722247493,https://www.airlines-manager.com/aircraft/show/106007217,4:45,7:59,338,"$170,355.00","$145,708.00",$431.09,"$45,064.33"
IAH - MSY,53742109162,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/53742109162,https://www.airlines-manager.com/aircraft/show/106007215,11:00,14:14,338,"$170,355.00","$145,708.00",$431.09,"$45,064.33"
IAH - MSY,53758909897,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/53758909897,https://www.airlines-manager.com/aircraft/show/106007214,17:45,20:59,338,"$170,355.00","$145,708.00",$431.09,"$45,064.33"
IAH - MSY,53764392756,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/53764392756,https://www.airlines-manager.com/aircraft/show/106007213,20:30,23:44,263,"$147,903.00","$123,776.00",$470.63,"$38,281.24"
IAH - MTY,53722247469,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/53722247469,https://www.airlines-manager.com/aircraft/show/114266974,3:30,7:14,320,"$202,486.00","$171,969.00",$537.40,"$46,063.13"
IAH - MTY,53742108928,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/53742108928,https://www.airlines-manager.com/aircraft/show/105099862,9:15,12:59,112,"$92,541.00","$76,086.00",$679.34,"$20,380.18"
IAH - MTY,53753439499,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/53753439499,https://www.airlines-manager.com/aircraft/show/114266975,14:00,17:44,320,"$202,486.00","$171,969.00",$537.40,"$46,063.13"
IAH - MTY,53758909868,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/53758909868,https://www.airlines-manager.com/aircraft/show/113250059,17:30,21:14,320,"$202,486.00","$171,969.00",$537.40,"$46,063.13"
IAH - MTY,53768887231,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/53768887231,https://www.airlines-manager.com/aircraft/show/113114108,23:30,3:14,320,"$202,486.00","$171,969.00",$537.40,"$46,063.13"
IAH - OAK,53722247229,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/53722247229,https://www.airlines-manager.com/aircraft/show/98578920,1:15,9:44,320,"$528,703.00","$477,880.00","$1,493.38","$56,331.63"
IAH - OAK,53722247230,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/53722247230,https://www.airlines-manager.com/aircraft/show/98578924,3:00,11:29,320,"$528,703.00","$477,880.00","$1,493.38","$56,331.63"
IAH - OAK,53735281238,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/53735281238,https://www.airlines-manager.com/aircraft/show/98578921,8:00,16:29,320,"$528,703.00","$477,880.00","$1,493.38","$56,331.63"
IAH - OAK,53747970714,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/53747970714,https://www.airlines-manager.com/aircraft/show/98578922,13:00,21:29,320,"$528,703.00","$477,880.00","$1,493.38","$56,331.63"
IAH - OAK,53764392454,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/53764392454,https://www.airlines-manager.com/aircraft/show/105400635,19:00,3:29,112,"$249,361.00","$219,214.00","$1,957.27","$25,840.55"
IAH - OAK,53768887128,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/53768887128,https://www.airlines-manager.com/aircraft/show/98578923,22:15,6:44,320,"$528,703.00","$477,880.00","$1,493.38","$56,331.63"
IAH - OKC,53722247573,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/53722247573,https://www.airlines-manager.com/aircraft/show/107467134,5:30,9:14,310,"$196,458.00","$171,197.00",$552.25,"$45,856.34"
IAH - OKC,53742108974,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/53742108974,https://www.airlines-manager.com/aircraft/show/107467211,10:00,13:44,112,"$90,701.00","$74,854.00",$668.34,"$20,050.18"
IAH - OKC,53747970655,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/53747970655,https://www.airlines-manager.com/aircraft/show/107467131,12:00,15:44,310,"$196,458.00","$171,197.00",$552.25,"$45,856.34"
IAH - OKC,53758909903,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/53758909903,https://www.airlines-manager.com/aircraft/show/107467132,17:45,21:29,310,"$196,458.00","$171,197.00",$552.25,"$45,856.34"
IAH - OKC,53768887191,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/53768887191,https://www.airlines-manager.com/aircraft/show/107467133,23:00,2:44,310,"$196,458.00","$171,197.00",$552.25,"$45,856.34"
IAH - OMA,53722247410,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/53722247410,https://www.airlines-manager.com/aircraft/show/104258211,2:45,7:59,310,"$328,759.00","$297,616.00",$960.05,"$56,869.30"
IAH - OMA,53722247411,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/53722247411,https://www.airlines-manager.com/aircraft/show/103534664,3:45,8:59,112,"$156,043.00","$135,992.00","$1,214.21","$25,985.73"
IAH - OMA,53735281288,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/53735281288,https://www.airlines-manager.com/aircraft/show/104258214,8:45,13:59,310,"$328,759.00","$297,616.00",$960.05,"$56,869.30"
IAH - OMA,53753439500,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/53753439500,https://www.airlines-manager.com/aircraft/show/104258213,14:00,19:14,310,"$328,759.00","$297,616.00",$960.05,"$56,869.30"
IAH - OMA,53764392554,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/53764392554,https://www.airlines-manager.com/aircraft/show/104258212,19:45,0:59,310,"$328,759.00","$297,616.00",$960.05,"$56,869.30"
IAH - ONT,53722247417,IAH-ANC-ONT 1,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/53722247417,https://www.airlines-manager.com/aircraft/show/108258010,2:45,9:59,310,"$463,433.00","$422,267.00","$1,362.15","$58,377.93"
IAH - ONT,53722247418,IAH-ANC-ONT 2,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/53722247418,https://www.airlines-manager.com/aircraft/show/108258011,4:45,11:59,310,"$463,433.00","$422,267.00","$1,362.15","$58,377.93"
IAH - ONT,53747970691,IAH-ANC-ONT 3,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/53747970691,https://www.airlines-manager.com/aircraft/show/108258012,12:00,19:14,310,"$463,433.00","$422,267.00","$1,362.15","$58,377.93"
IAH - ONT,53753439424,IAH-ANC-ONT 4,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/53753439424,https://www.airlines-manager.com/aircraft/show/108089220,14:00,21:14,310,"$463,433.00","$422,267.00","$1,362.15","$58,377.93"
IAH - ONT,53753439425,IAH-ANC-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/53753439425,https://www.airlines-manager.com/aircraft/show/108286957,16:00,23:14,198,"$349,825.00","$316,835.00","$1,600.18","$43,802.07"
IAH - ORD,53722247084,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/53722247084,https://www.airlines-manager.com/aircraft/show/90183181,0:15,5:59,310,"$363,079.00","$308,113.00",$993.91,"$53,740.64"
IAH - ORD,53735281146,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/53735281146,https://www.airlines-manager.com/aircraft/show/90183182,6:30,12:14,310,"$363,079.00","$308,113.00",$993.91,"$53,740.64"
IAH - ORD,53742108973,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/53742108973,https://www.airlines-manager.com/aircraft/show/101412921,10:00,15:44,0,"$114,458.00","$61,014.00",$0.00,"$10,641.98"
IAH - ORD,53747970864,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/53747970864,https://www.airlines-manager.com/aircraft/show/90183183,13:00,18:44,310,"$363,079.00","$308,113.00",$993.91,"$53,740.64"
IAH - ORD,53753439599,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/53753439599,https://www.airlines-manager.com/aircraft/show/90140936,15:00,20:44,136,"$172,559.00","$138,123.00","$1,015.61","$24,091.22"
IAH - ORD,53758909979,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/53758909979,https://www.airlines-manager.com/aircraft/show/90183184,18:45,0:29,310,"$363,079.00","$308,113.00",$993.91,"$53,740.64"
IAH - ORD,53764392761,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/53764392761,https://www.airlines-manager.com/aircraft/show/90183180,20:45,2:29,310,"$363,079.00","$308,113.00",$993.91,"$53,740.64"
IAH - ORF,53722246996,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/53722246996,https://www.airlines-manager.com/aircraft/show/110582843,0:00,6:44,198,"$319,502.00","$289,849.00","$1,463.88","$43,046.88"
IAH - ORF,53722246997,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/53722246997,https://www.airlines-manager.com/aircraft/show/107467130,4:15,10:59,310,"$423,249.00","$386,247.00","$1,245.96","$57,363.42"
IAH - ORF,53735281248,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/53735281248,https://www.airlines-manager.com/aircraft/show/107467127,8:15,14:59,310,"$423,249.00","$386,247.00","$1,245.96","$57,363.42"
IAH - ORF,53747970765,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/53747970765,https://www.airlines-manager.com/aircraft/show/107467128,13:00,19:44,310,"$423,249.00","$386,247.00","$1,245.96","$57,363.42"
IAH - ORF,53764392594,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/53764392594,https://www.airlines-manager.com/aircraft/show/107467129,20:00,2:44,310,"$423,249.00","$386,247.00","$1,245.96","$57,363.42"
IAH - PBI,53722247378,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/53722247378,https://www.airlines-manager.com/aircraft/show/104717246,2:30,8:14,310,"$369,248.00","$334,512.00","$1,079.07","$58,345.12"
IAH - PBI,53742109192,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/53742109192,https://www.airlines-manager.com/aircraft/show/104717247,11:00,16:44,310,"$369,248.00","$334,512.00","$1,079.07","$58,345.12"
IAH - PBI,53747970875,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/53747970875,https://www.airlines-manager.com/aircraft/show/104743902,13:15,18:59,112,"$174,724.00","$152,218.00","$1,359.09","$26,549.65"
IAH - PBI,53753439703,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/53753439703,https://www.airlines-manager.com/aircraft/show/104717244,16:15,21:59,310,"$369,248.00","$334,512.00","$1,079.07","$58,345.12"
IAH - PBI,53768887019,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/53768887019,https://www.airlines-manager.com/aircraft/show/104717245,21:45,3:29,310,"$369,248.00","$334,512.00","$1,079.07","$58,345.12"
IAH - PDX,53722247420,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/53722247420,https://www.airlines-manager.com/aircraft/show/105562975,2:45,11:44,338,"$619,638.00","$571,536.00","$1,690.93","$63,621.82"
IAH - PDX,53722247421,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/53722247421,https://www.airlines-manager.com/aircraft/show/105562972,4:00,12:59,338,"$619,638.00","$571,536.00","$1,690.93","$63,621.82"
IAH - PDX,53722247422,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/53722247422,https://www.airlines-manager.com/aircraft/show/105562974,5:00,13:59,338,"$619,638.00","$571,536.00","$1,690.93","$63,621.82"
IAH - PDX,53747970647,IAH-SEA-DEN 6,ERJ-175,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/53747970647,https://www.airlines-manager.com/aircraft/show/105601215,12:00,21:14,112,"$269,877.00","$236,466.00","$2,111.30","$25,610.04"
IAH - PDX,53753439458,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/53753439458,https://www.airlines-manager.com/aircraft/show/105562973,14:00,22:59,338,"$619,638.00","$571,536.00","$1,690.93","$63,621.82"
IAH - PDX,53758909958,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/53758909958,https://www.airlines-manager.com/aircraft/show/105562971,18:30,3:29,338,"$619,638.00","$571,536.00","$1,690.93","$63,621.82"
IAH - PHL,53742109214,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/53742109214,https://www.airlines-manager.com/aircraft/show/106007216,11:00,18:14,338,"$501,281.00","$456,099.00","$1,349.41","$63,055.16"
IAH - PHL,53753439522,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/53753439522,https://www.airlines-manager.com/aircraft/show/106007215,14:15,21:29,338,"$501,281.00","$456,099.00","$1,349.41","$63,055.16"
IAH - PHL,53753439523,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/53753439523,https://www.airlines-manager.com/aircraft/show/107543798,16:00,23:14,0,"$122,690.00","$89,259.00",$0.00,"$12,339.95"
IAH - PHL,53764392775,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/53764392775,https://www.airlines-manager.com/aircraft/show/106007214,21:00,4:14,338,"$501,281.00","$456,099.00","$1,349.41","$63,055.16"
IAH - PHL,53768886993,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/53768886993,https://www.airlines-manager.com/aircraft/show/106007217,21:30,4:44,338,"$501,281.00","$456,099.00","$1,349.41","$63,055.16"
IAH - PHL,53770850195,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/53770850195,https://www.airlines-manager.com/aircraft/show/106007213,23:45,6:59,338,"$501,281.00","$456,099.00","$1,349.41","$63,055.16"
IAH - PHX,53722247504,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/53722247504,https://www.airlines-manager.com/aircraft/show/96183549,4:00,9:59,320,"$379,088.00","$327,054.00","$1,022.04","$54,660.84"
IAH - PHX,53722247505,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/53722247505,https://www.airlines-manager.com/aircraft/show/96177955,5:00,10:59,320,"$379,088.00","$327,054.00","$1,022.04","$54,660.84"
IAH - PHX,53747970609,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/53747970609,https://www.airlines-manager.com/aircraft/show/82323704,11:30,17:29,112,"$179,363.00","$150,412.00","$1,342.96","$25,138.50"
IAH - PHX,53747970610,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/53747970610,https://www.airlines-manager.com/aircraft/show/96250652,11:45,17:44,320,"$379,088.00","$327,054.00","$1,022.04","$54,660.84"
IAH - PHX,53753439642,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/53753439642,https://www.airlines-manager.com/aircraft/show/96256511,15:30,21:29,320,"$379,088.00","$327,054.00","$1,022.04","$54,660.84"
IAH - PHX,53768887009,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/53768887009,https://www.airlines-manager.com/aircraft/show/95894466,21:30,3:29,320,"$379,088.00","$327,054.00","$1,022.04","$54,660.84"
IAH - PIT,53722247554,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/53722247554,https://www.airlines-manager.com/aircraft/show/100684073,5:00,11:29,310,"$405,248.00","$366,884.00","$1,183.50","$56,588.79"
IAH - PIT,53742109216,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/53742109216,https://www.airlines-manager.com/aircraft/show/100684074,11:15,17:44,310,"$405,248.00","$366,884.00","$1,183.50","$56,588.79"
IAH - PIT,53753439681,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/53753439681,https://www.airlines-manager.com/aircraft/show/110582845,16:00,22:29,198,"$306,127.00","$275,388.00","$1,390.85","$42,476.30"
IAH - PIT,53758909857,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/53758909857,https://www.airlines-manager.com/aircraft/show/100684071,17:15,23:44,310,"$405,248.00","$366,884.00","$1,183.50","$56,588.79"
IAH - PIT,53768887182,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/53768887182,https://www.airlines-manager.com/aircraft/show/100684072,22:45,5:14,310,"$405,248.00","$366,884.00","$1,183.50","$56,588.79"
IAH - PSP,53722247291,IAH-YEG-BUR 2,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/53722247291,https://www.airlines-manager.com/aircraft/show/117273343,1:30,8:29,310,"$450,598.00","$412,544.00","$1,330.79","$59,075.51"
IAH - PSP,53722247292,IAH-YEG-BUR 1,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/53722247292,https://www.airlines-manager.com/aircraft/show/117273344,3:45,10:44,310,"$450,598.00","$412,544.00","$1,330.79","$59,075.51"
IAH - PSP,53742109195,IAH-YEG-BUR 3,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/53742109195,https://www.airlines-manager.com/aircraft/show/117273342,11:00,17:59,310,"$450,598.00","$412,544.00","$1,330.79","$59,075.51"
IAH - PSP,53758909964,IAH-YEG-BUR 5,A321neo,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/53758909964,https://www.airlines-manager.com/aircraft/show/117273340,18:30,1:29,338,"$488,325.00","$451,854.00","$1,336.85","$64,704.63"
IAH - PVD,53722247419,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/53722247419,https://www.airlines-manager.com/aircraft/show/107467129,2:45,10:59,310,"$516,263.00","$474,753.00","$1,531.46","$57,662.31"
IAH - PVD,53735281165,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/53735281165,https://www.airlines-manager.com/aircraft/show/110582843,6:45,14:59,198,"$389,086.00","$355,811.00","$1,797.03","$43,215.91"
IAH - PVD,53747970769,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/53747970769,https://www.airlines-manager.com/aircraft/show/107467130,13:00,21:14,310,"$516,263.00","$474,753.00","$1,531.46","$57,662.31"
IAH - PVD,53758909843,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/53758909843,https://www.airlines-manager.com/aircraft/show/107467127,17:00,1:14,310,"$516,263.00","$474,753.00","$1,531.46","$57,662.31"
IAH - PVD,53764392553,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/53764392553,https://www.airlines-manager.com/aircraft/show/107467128,19:45,3:59,310,"$516,263.00","$474,753.00","$1,531.46","$57,662.31"
IAH - PVR,53722247436,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/53722247436,https://www.airlines-manager.com/aircraft/show/105099862,3:00,8:29,112,"$166,498.00","$145,084.00","$1,295.39","$26,459.09"
IAH - PVR,53735281277,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/53735281277,https://www.airlines-manager.com/aircraft/show/114266975,8:30,13:59,320,"$355,635.00","$318,001.00",$993.75,"$57,994.10"
IAH - PVR,53747970678,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/53747970678,https://www.airlines-manager.com/aircraft/show/113250059,12:00,17:29,320,"$355,635.00","$318,001.00",$993.75,"$57,994.10"
IAH - PVR,53758909922,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/53758909922,https://www.airlines-manager.com/aircraft/show/113114108,18:00,23:29,320,"$355,635.00","$318,001.00",$993.75,"$57,994.10"
IAH - PVR,53768887039,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/53768887039,https://www.airlines-manager.com/aircraft/show/114266974,22:00,3:29,320,"$355,635.00","$318,001.00",$993.75,"$57,994.10"
IAH - PWM,53735281219,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/53735281219,https://www.airlines-manager.com/aircraft/show/106014350,7:45,16:14,198,"$406,630.00","$372,446.00","$1,881.04","$43,903.26"
IAH - PWM,53742109212,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/53742109212,https://www.airlines-manager.com/aircraft/show/96691558,11:00,19:29,310,"$540,000.00","$497,359.00","$1,604.38","$58,627.78"
IAH - PWM,53753439600,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/53753439600,https://www.airlines-manager.com/aircraft/show/96694086,15:00,23:29,310,"$540,000.00","$497,359.00","$1,604.38","$58,627.78"
IAH - PWM,53764392516,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/53764392516,https://www.airlines-manager.com/aircraft/show/96692491,19:15,3:44,310,"$540,000.00","$497,359.00","$1,604.38","$58,627.78"
IAH - PWM,53768887181,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/53768887181,https://www.airlines-manager.com/aircraft/show/96692343,22:45,7:14,310,"$540,000.00","$497,359.00","$1,604.38","$58,627.78"
IAH - RAP,53722247375,IAH-GRR-MSN 1,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/53722247375,https://www.airlines-manager.com/aircraft/show/117273348,2:15,8:29,310,"$388,294.00","$354,046.00","$1,142.08","$56,798.82"
IAH - RAP,53722247376,IAH-GRR-MSN 4,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/53722247376,https://www.airlines-manager.com/aircraft/show/117273345,4:15,10:29,310,"$388,294.00","$354,046.00","$1,142.08","$56,798.82"
IAH - RAP,53753439456,IAH-GRR-MSN 3,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/53753439456,https://www.airlines-manager.com/aircraft/show/117273346,14:00,20:14,310,"$388,294.00","$354,046.00","$1,142.08","$56,798.82"
IAH - RAP,53764392576,IAH-GRR-MSN 2,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/53764392576,https://www.airlines-manager.com/aircraft/show/117273347,20:00,2:14,290,"$373,521.00","$339,854.00","$1,171.91","$54,522.03"
IAH - RDU,53722247563,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/53722247563,https://www.airlines-manager.com/aircraft/show/100684072,5:15,11:29,310,"$388,679.00","$351,875.00","$1,135.08","$56,450.53"
IAH - RDU,53747970613,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/53747970613,https://www.airlines-manager.com/aircraft/show/100684073,11:30,17:44,310,"$388,679.00","$351,875.00","$1,135.08","$56,450.53"
IAH - RDU,53758909887,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/53758909887,https://www.airlines-manager.com/aircraft/show/100684074,17:45,23:59,310,"$388,679.00","$351,875.00","$1,135.08","$56,450.53"
IAH - RDU,53768887148,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/53768887148,https://www.airlines-manager.com/aircraft/show/110582845,22:30,4:44,198,"$293,805.00","$264,316.00","$1,334.93","$42,403.64"
IAH - RDU,53770850194,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/53770850194,https://www.airlines-manager.com/aircraft/show/100684071,23:45,5:59,310,"$388,679.00","$351,875.00","$1,135.08","$56,450.53"
IAH - RIC,53722247414,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/53722247414,https://www.airlines-manager.com/aircraft/show/107467133,2:45,9:14,310,"$416,537.00","$380,223.00","$1,226.53","$58,646.22"
IAH - RIC,53747970651,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/53747970651,https://www.airlines-manager.com/aircraft/show/107467134,12:00,18:29,310,"$416,537.00","$380,223.00","$1,226.53","$58,646.22"
IAH - RIC,53747970652,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/53747970652,https://www.airlines-manager.com/aircraft/show/107467211,13:45,20:14,112,"$195,969.00","$172,163.00","$1,537.17","$26,554.70"
IAH - RIC,53753439656,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/53753439656,https://www.airlines-manager.com/aircraft/show/107467131,15:45,22:14,310,"$416,537.00","$380,223.00","$1,226.53","$58,646.22"
IAH - RIC,53768886987,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/53768886987,https://www.airlines-manager.com/aircraft/show/107467132,21:30,3:59,310,"$416,537.00","$380,223.00","$1,226.53","$58,646.22"
IAH - RNO,53722247248,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/53722247248,https://www.airlines-manager.com/aircraft/show/103882357,1:15,9:14,310,"$511,991.00","$468,883.00","$1,512.53","$58,732.73"
IAH - RNO,53722247249,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/53722247249,https://www.airlines-manager.com/aircraft/show/105099861,4:00,11:59,112,"$240,901.00","$212,369.00","$1,896.15","$26,601.54"
IAH - RNO,53722247250,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/53722247250,https://www.airlines-manager.com/aircraft/show/103882356,5:00,12:59,310,"$511,991.00","$468,883.00","$1,512.53","$58,732.73"
IAH - RNO,53747970743,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/53747970743,https://www.airlines-manager.com/aircraft/show/103882355,13:00,20:59,310,"$511,991.00","$468,883.00","$1,512.53","$58,732.73"
IAH - RNO,53758909820,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/53758909820,https://www.airlines-manager.com/aircraft/show/103882358,17:00,0:59,310,"$511,991.00","$468,883.00","$1,512.53","$58,732.73"
IAH - RSW,53722247426,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/53722247426,https://www.airlines-manager.com/aircraft/show/104717244,2:45,8:14,310,"$349,506.00","$314,948.00","$1,015.96","$57,437.33"
IAH - RSW,53742109190,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/53742109190,https://www.airlines-manager.com/aircraft/show/104717245,11:00,16:29,310,"$349,506.00","$314,948.00","$1,015.96","$57,437.33"
IAH - RSW,53753439652,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/53753439652,https://www.airlines-manager.com/aircraft/show/104717246,15:45,21:14,310,"$349,506.00","$314,948.00","$1,015.96","$57,437.33"
IAH - RSW,53768886994,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/53768886994,https://www.airlines-manager.com/aircraft/show/104717247,21:30,2:59,310,"$349,506.00","$314,948.00","$1,015.96","$57,437.33"
IAH - RSW,53770850188,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/53770850188,https://www.airlines-manager.com/aircraft/show/104743902,23:45,5:14,112,"$165,422.00","$143,186.00","$1,278.45","$26,112.95"
IAH - SAN,53722247142,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/53722247142,https://www.airlines-manager.com/aircraft/show/98578921,0:45,7:59,320,"$452,539.00","$405,198.00","$1,266.24","$56,018.16"
IAH - SAN,53722247143,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/53722247143,https://www.airlines-manager.com/aircraft/show/98578922,4:15,11:29,320,"$452,539.00","$405,198.00","$1,266.24","$56,018.16"
IAH - SAN,53742109091,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/53742109091,https://www.airlines-manager.com/aircraft/show/105400635,10:15,17:29,112,"$214,317.00","$186,858.00","$1,668.38","$25,832.90"
IAH - SAN,53753439589,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/53753439589,https://www.airlines-manager.com/aircraft/show/98578923,15:00,22:14,320,"$452,539.00","$405,198.00","$1,266.24","$56,018.16"
IAH - SAN,53758909925,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/53758909925,https://www.airlines-manager.com/aircraft/show/98578920,18:00,1:14,320,"$452,539.00","$405,198.00","$1,266.24","$56,018.16"
IAH - SAN,53764392555,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/53764392555,https://www.airlines-manager.com/aircraft/show/98578924,19:45,2:59,320,"$452,539.00","$405,198.00","$1,266.24","$56,018.16"
IAH - SAT,53722247271,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/53722247271,https://www.airlines-manager.com/aircraft/show/106499070,1:30,4:14,198,"$90,236.00","$72,357.00",$365.44,"$26,472.07"
IAH - SAT,53735281121,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/53735281121,https://www.airlines-manager.com/aircraft/show/101412921,6:00,8:44,0,"$44,058.00","$22,031.00",$0.00,"$8,060.12"
IAH - SAT,53742108943,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/53742108943,https://www.airlines-manager.com/aircraft/show/99093332,9:45,12:29,320,"$119,393.00","$93,029.00",$290.72,"$34,035.00"
IAH - SAT,53753439506,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/53753439506,https://www.airlines-manager.com/aircraft/show/99093333,14:00,16:44,320,"$119,393.00","$93,029.00",$290.72,"$34,035.00"
IAH - SAT,53758909924,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/53758909924,https://www.airlines-manager.com/aircraft/show/99093334,18:00,20:44,320,"$119,393.00","$93,029.00",$290.72,"$34,035.00"
IAH - SAT,53768887225,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/53768887225,https://www.airlines-manager.com/aircraft/show/99093335,23:30,2:14,320,"$119,393.00","$93,029.00",$290.72,"$34,035.00"
IAH - SAV,53722247350,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/53722247350,https://www.airlines-manager.com/aircraft/show/110424758,2:00,7:29,320,"$342,511.00","$306,705.00",$958.45,"$55,934.04"
IAH - SAV,53735281267,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/53735281267,https://www.airlines-manager.com/aircraft/show/110424759,8:30,13:59,320,"$342,511.00","$306,705.00",$958.45,"$55,934.04"
IAH - SAV,53747970711,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/53747970711,https://www.airlines-manager.com/aircraft/show/110424760,13:00,18:29,320,"$342,511.00","$306,705.00",$958.45,"$55,934.04"
IAH - SAV,53768887022,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/53768887022,https://www.airlines-manager.com/aircraft/show/110424761,21:45,3:14,320,"$342,511.00","$306,705.00",$958.45,"$55,934.04"
IAH - SCL,53722247275,IAH 56A-1 E,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/53722247275,https://www.airlines-manager.com/aircraft/show/106676232,1:30,19:59,648,"$2,288,301.00","$2,132,185.00","$3,290.41","$115,357.17"
IAH - SCL,53735281141,IAH 56A-3 E,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/53735281141,https://www.airlines-manager.com/aircraft/show/106676234,6:30,0:59,648,"$2,288,301.00","$2,132,185.00","$3,290.41","$115,357.17"
IAH - SCL,53758909873,IAH 56A-5 E,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/53758909873,https://www.airlines-manager.com/aircraft/show/106676236,17:30,11:59,648,"$2,288,301.00","$2,132,185.00","$3,290.41","$115,357.17"
IAH - SDF,53722247510,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/53722247510,https://www.airlines-manager.com/aircraft/show/107467132,4:00,9:14,310,"$328,899.00","$296,346.00",$955.95,"$56,626.62"
IAH - SDF,53747970680,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/53747970680,https://www.airlines-manager.com/aircraft/show/107467133,12:00,17:14,310,"$328,899.00","$296,346.00",$955.95,"$56,626.62"
IAH - SDF,53758909966,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/53758909966,https://www.airlines-manager.com/aircraft/show/107467134,18:30,23:44,310,"$328,899.00","$296,346.00",$955.95,"$56,626.62"
IAH - SDF,53764392710,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/53764392710,https://www.airlines-manager.com/aircraft/show/107467211,20:15,1:29,112,"$156,193.00","$135,286.00","$1,207.91","$25,850.83"
IAH - SDF,53768887066,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/53768887066,https://www.airlines-manager.com/aircraft/show/107467131,22:15,3:29,310,"$328,899.00","$296,346.00",$955.95,"$56,626.62"
IAH - SEA,53722247478,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/53722247478,https://www.airlines-manager.com/aircraft/show/105562971,3:30,12:44,338,"$643,742.00","$588,384.00","$1,740.78","$63,723.90"
IAH - SEA,53722247479,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/53722247479,https://www.airlines-manager.com/aircraft/show/105562973,4:30,13:44,338,"$643,742.00","$588,384.00","$1,740.78","$63,723.90"
IAH - SEA,53747970734,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/53747970734,https://www.airlines-manager.com/aircraft/show/105562972,13:00,22:14,338,"$643,742.00","$588,384.00","$1,740.78","$63,723.90"
IAH - SEA,53753439455,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/53753439455,https://www.airlines-manager.com/aircraft/show/105562974,14:00,23:14,338,"$643,742.00","$588,384.00","$1,740.78","$63,723.90"
IAH - SEA,53758909876,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/53758909876,https://www.airlines-manager.com/aircraft/show/105562975,17:30,2:44,338,"$643,742.00","$588,384.00","$1,740.78","$63,723.90"
IAH - SEA,53764392821,IAH-SEA-DEN 6,ERJ-175,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/53764392821,https://www.airlines-manager.com/aircraft/show/105601215,21:15,6:44,112,"$279,368.00","$241,480.00","$2,156.07","$25,463.62"
IAH - SJC,53722247444,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/53722247444,https://www.airlines-manager.com/aircraft/show/96694086,3:00,11:14,310,"$531,297.00","$485,668.00","$1,566.67","$58,988.02"
IAH - SJC,53742109213,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/53742109213,https://www.airlines-manager.com/aircraft/show/96692491,11:00,19:14,310,"$531,297.00","$485,668.00","$1,566.67","$58,988.02"
IAH - SJC,53753439532,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/53753439532,https://www.airlines-manager.com/aircraft/show/96692343,14:30,22:44,310,"$531,297.00","$485,668.00","$1,566.67","$58,988.02"
IAH - SJC,53768887193,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/53768887193,https://www.airlines-manager.com/aircraft/show/96691558,23:00,7:14,310,"$531,297.00","$485,668.00","$1,566.67","$58,988.02"
IAH - SJC,53768887194,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/53768887194,https://www.airlines-manager.com/aircraft/show/106014350,23:30,7:44,198,"$399,774.00","$363,202.00","$1,834.35","$44,113.60"
IAH - SJD,53722247299,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/53722247299,https://www.airlines-manager.com/aircraft/show/114266975,1:45,7:44,320,"$380,962.00","$342,124.00","$1,069.14","$57,179.50"
IAH - SJD,53722247300,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/53722247300,https://www.airlines-manager.com/aircraft/show/113250059,5:15,11:14,320,"$380,962.00","$342,124.00","$1,069.14","$57,179.50"
IAH - SJD,53747970683,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/53747970683,https://www.airlines-manager.com/aircraft/show/113114108,12:00,17:59,320,"$380,962.00","$342,124.00","$1,069.14","$57,179.50"
IAH - SJD,53753439659,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/53753439659,https://www.airlines-manager.com/aircraft/show/114266974,16:00,21:59,320,"$380,962.00","$342,124.00","$1,069.14","$57,179.50"
IAH - SJD,53764392773,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/53764392773,https://www.airlines-manager.com/aircraft/show/105099862,21:00,2:59,108,"$173,491.00","$151,362.00","$1,401.50","$25,297.27"
IAH - SLC,53722247403,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/53722247403,https://www.airlines-manager.com/aircraft/show/93094698,2:45,9:29,310,"$424,254.00","$380,767.00","$1,228.28","$56,549.55"
IAH - SLC,53722247404,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/53722247404,https://www.airlines-manager.com/aircraft/show/93100455,4:45,11:29,112,"$199,641.00","$171,464.00","$1,530.93","$25,464.95"
IAH - SLC,53742109023,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/53742109023,https://www.airlines-manager.com/aircraft/show/93094699,10:00,16:44,310,"$424,254.00","$380,767.00","$1,228.28","$56,549.55"
IAH - SLC,53747970630,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/53747970630,https://www.airlines-manager.com/aircraft/show/93094695,12:00,18:44,310,"$424,254.00","$380,767.00","$1,228.28","$56,549.55"
IAH - SLC,53753439633,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/53753439633,https://www.airlines-manager.com/aircraft/show/93094696,15:15,21:59,310,"$424,254.00","$380,767.00","$1,228.28","$56,549.55"
IAH - SLC,53764392799,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/53764392799,https://www.airlines-manager.com/aircraft/show/93094697,21:00,3:44,310,"$424,254.00","$380,767.00","$1,228.28","$56,549.55"
IAH - SMF,53722247360,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/53722247360,https://www.airlines-manager.com/aircraft/show/99093335,2:15,10:29,320,"$529,867.00","$480,638.00","$1,501.99","$58,377.09"
IAH - SMF,53722247361,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/53722247361,https://www.airlines-manager.com/aircraft/show/106499070,4:15,12:29,198,"$399,187.00","$363,798.00","$1,837.36","$44,185.99"
IAH - SMF,53747970807,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/53747970807,https://www.airlines-manager.com/aircraft/show/99093332,13:00,21:14,320,"$529,867.00","$480,638.00","$1,501.99","$58,377.09"
IAH - SMF,53758909791,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/53758909791,https://www.airlines-manager.com/aircraft/show/99093333,16:45,0:59,320,"$529,867.00","$480,638.00","$1,501.99","$58,377.09"
IAH - SMF,53764392759,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/53764392759,https://www.airlines-manager.com/aircraft/show/99093334,20:45,4:59,320,"$529,867.00","$480,638.00","$1,501.99","$58,377.09"
IAH - STL,53722247252,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/53722247252,https://www.airlines-manager.com/aircraft/show/88725601,1:15,5:59,310,"$299,834.00","$267,563.00",$863.11,"$56,527.39"
IAH - STL,53735281243,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/53735281243,https://www.airlines-manager.com/aircraft/show/103600702,8:15,12:59,310,"$299,834.00","$267,563.00",$863.11,"$56,527.39"
IAH - STL,53753439421,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/53753439421,https://www.airlines-manager.com/aircraft/show/103600701,14:00,18:44,310,"$299,834.00","$267,563.00",$863.11,"$56,527.39"
IAH - STL,53753439422,IAH-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/53753439422,https://www.airlines-manager.com/aircraft/show/96990010,15:00,19:44,112,"$142,579.00","$122,049.00","$1,089.72","$25,785.00"
IAH - STL,53764392718,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/53764392718,https://www.airlines-manager.com/aircraft/show/103600700,20:15,0:59,310,"$299,834.00","$267,563.00",$863.11,"$56,527.39"
IAH - STL,53768887015,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/53768887015,https://www.airlines-manager.com/aircraft/show/110582844,21:45,2:29,198,"$227,848.00","$202,002.00","$1,020.21","$42,676.48"
IAH - TPA,53722247518,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/53722247518,https://www.airlines-manager.com/aircraft/show/93094699,4:15,9:29,310,"$326,295.00","$291,073.00",$938.95,"$55,619.04"
IAH - TPA,53735281130,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/53735281130,https://www.airlines-manager.com/aircraft/show/93094695,6:15,11:29,310,"$326,295.00","$291,073.00",$938.95,"$55,619.04"
IAH - TPA,53742109020,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/53742109020,https://www.airlines-manager.com/aircraft/show/93094696,10:00,15:14,310,"$326,295.00","$291,073.00",$938.95,"$55,619.04"
IAH - TPA,53753439644,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/53753439644,https://www.airlines-manager.com/aircraft/show/93094697,15:45,20:59,310,"$326,295.00","$291,073.00",$938.95,"$55,619.04"
IAH - TPA,53768887011,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/53768887011,https://www.airlines-manager.com/aircraft/show/93094698,21:30,2:44,310,"$326,295.00","$291,073.00",$938.95,"$55,619.04"
IAH - TPA,53768887012,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/53768887012,https://www.airlines-manager.com/aircraft/show/93100455,23:30,4:44,107,"$152,102.00","$129,766.00","$1,212.77","$24,796.05"
IAH - TUL,53722247116,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/53722247116,https://www.airlines-manager.com/aircraft/show/82543907,0:30,4:14,112,"$93,654.00","$77,440.00",$691.43,"$20,742.86"
IAH - TUL,53722247117,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/53722247117,https://www.airlines-manager.com/aircraft/show/114373409,3:30,7:14,310,"$202,768.00","$176,997.00",$570.96,"$47,409.91"
IAH - TUL,53742108942,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/53742108942,https://www.airlines-manager.com/aircraft/show/114373410,9:45,13:29,310,"$202,768.00","$176,997.00",$570.96,"$47,409.91"
IAH - TUL,53753439587,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/53753439587,https://www.airlines-manager.com/aircraft/show/113994196,15:00,18:44,310,"$202,768.00","$176,997.00",$570.96,"$47,409.91"
IAH - TUL,53764392630,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/53764392630,https://www.airlines-manager.com/aircraft/show/86385103,20:15,23:59,310,"$202,768.00","$176,997.00",$570.96,"$47,409.91"
IAH - TUS,53722247568,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/53722247568,https://www.airlines-manager.com/aircraft/show/100684074,5:30,11:14,310,"$358,693.00","$324,614.00","$1,047.14","$56,618.72"
IAH - TUS,53742109103,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/53742109103,https://www.airlines-manager.com/aircraft/show/110582845,10:15,15:59,198,"$272,008.00","$244,705.00","$1,235.88","$42,681.10"
IAH - TUS,53747970607,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/53747970607,https://www.airlines-manager.com/aircraft/show/100684071,11:30,17:14,310,"$358,693.00","$324,614.00","$1,047.14","$56,618.72"
IAH - TUS,53758909816,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/53758909816,https://www.airlines-manager.com/aircraft/show/100684072,17:00,22:44,310,"$358,693.00","$324,614.00","$1,047.14","$56,618.72"
IAH - TUS,53768887216,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/53768887216,https://www.airlines-manager.com/aircraft/show/100684073,23:15,4:59,310,"$358,693.00","$324,614.00","$1,047.14","$56,618.72"
IAH - TYS,53722247358,IAH-GRR-MSN 2,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/53722247358,https://www.airlines-manager.com/aircraft/show/117273347,2:15,7:14,310,"$325,239.00","$295,080.00",$951.87,"$59,213.38"
IAH - TYS,53735281274,IAH-GRR-MSN 1,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/53735281274,https://www.airlines-manager.com/aircraft/show/117273348,8:30,13:29,310,"$325,239.00","$295,080.00",$951.87,"$59,213.38"
IAH - TYS,53742109189,IAH-GRR-MSN 4,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/53742109189,https://www.airlines-manager.com/aircraft/show/117273345,11:00,15:59,310,"$325,239.00","$295,080.00",$951.87,"$59,213.38"
IAH - TYS,53764392638,IAH-GRR-MSN 3,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/53764392638,https://www.airlines-manager.com/aircraft/show/117273346,20:15,1:14,310,"$325,239.00","$295,080.00",$951.87,"$59,213.38"
IAH - UIO,53722247128,IAH 84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/53722247128,https://www.airlines-manager.com/aircraft/show/89124076,0:30,11:14,932,"$1,795,179.00","$1,639,785.00","$1,759.43","$152,775.00"
IAH - UIO,53747970880,IAH 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/53747970880,https://www.airlines-manager.com/aircraft/show/88905141,13:15,23:59,932,"$1,795,179.00","$1,639,785.00","$1,759.43","$152,775.00"
IAH - YEG,53722247280,IAH-YEG-BUR 5,A321neo,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/53722247280,https://www.airlines-manager.com/aircraft/show/117273340,1:30,10:44,338,"$640,637.00","$594,021.00","$1,757.46","$64,334.40"
IAH - YEG,53735281264,IAH-YEG-BUR 2,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/53735281264,https://www.airlines-manager.com/aircraft/show/117273343,8:30,17:44,310,"$591,637.00","$542,704.00","$1,750.66","$58,776.61"
IAH - YEG,53742109193,IAH-YEG-BUR 1,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/53742109193,https://www.airlines-manager.com/aircraft/show/117273344,11:00,20:14,310,"$591,637.00","$542,704.00","$1,750.66","$58,776.61"
IAH - YEG,53758909860,IAH-YEG-BUR 4,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/53758909860,https://www.airlines-manager.com/aircraft/show/117273341,17:15,2:29,310,"$591,637.00","$542,704.00","$1,750.66","$58,776.61"
IAH - YEG,53758909861,IAH-YEG-BUR 3,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/53758909861,https://www.airlines-manager.com/aircraft/show/117273342,18:00,3:14,310,"$591,637.00","$542,704.00","$1,750.66","$58,776.61"
IAH - YOW,53722247462,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/53722247462,https://www.airlines-manager.com/aircraft/show/113114108,3:15,11:14,320,"$508,793.00","$461,136.00","$1,441.05","$57,762.34"
IAH - YOW,53735281226,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/53735281226,https://www.airlines-manager.com/aircraft/show/114266974,8:00,15:59,320,"$508,793.00","$461,136.00","$1,441.05","$57,762.34"
IAH - YOW,53747970718,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/53747970718,https://www.airlines-manager.com/aircraft/show/105099862,13:00,20:59,112,"$238,579.00","$210,374.00","$1,878.34","$26,351.65"
IAH - YOW,53758909890,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/53758909890,https://www.airlines-manager.com/aircraft/show/114266975,17:45,1:44,320,"$508,793.00","$461,136.00","$1,441.05","$57,762.34"
IAH - YOW,53764392849,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/53764392849,https://www.airlines-manager.com/aircraft/show/113250059,21:15,5:14,320,"$508,793.00","$461,136.00","$1,441.05","$57,762.34"
IAH - YUL,53722247153,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/53722247153,https://www.airlines-manager.com/aircraft/show/114266980,0:45,8:44,400,"$682,424.00","$624,483.00","$1,561.21","$78,223.34"
IAH - YUL,53722247154,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/53722247154,https://www.airlines-manager.com/aircraft/show/114266979,2:00,9:59,400,"$682,424.00","$624,483.00","$1,561.21","$78,223.34"
IAH - YUL,53747970663,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/53747970663,https://www.airlines-manager.com/aircraft/show/114266978,12:00,19:59,400,"$682,424.00","$624,483.00","$1,561.21","$78,223.34"
IAH - YUL,53764392771,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/53764392771,https://www.airlines-manager.com/aircraft/show/114266977,20:45,4:44,400,"$682,424.00","$624,483.00","$1,561.21","$78,223.34"
IAH - YVR,53722247177,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/53722247177,https://www.airlines-manager.com/aircraft/show/97076946,1:00,10:29,400,"$774,150.00","$706,088.00","$1,765.22","$74,455.68"
IAH - YVR,53722247178,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/53722247178,https://www.airlines-manager.com/aircraft/show/97076943,4:00,13:29,400,"$774,150.00","$706,088.00","$1,765.22","$74,455.68"
IAH - YVR,53747970839,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/53747970839,https://www.airlines-manager.com/aircraft/show/97076944,13:00,22:29,400,"$774,150.00","$706,088.00","$1,765.22","$74,455.68"
IAH - YVR,53753439657,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/53753439657,https://www.airlines-manager.com/aircraft/show/97026605,16:00,1:44,136,"$285,820.00","$249,912.00","$1,837.59","$25,675.89"
IAH - YVR,53764392572,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/53764392572,https://www.airlines-manager.com/aircraft/show/97076945,20:00,5:29,400,"$774,150.00","$706,088.00","$1,765.22","$74,455.68"
IAH - YVR,53768887189,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/53768887189,https://www.airlines-manager.com/aircraft/show/97076942,23:00,8:29,400,"$774,150.00","$706,088.00","$1,765.22","$74,455.68"
IAH - YYC,53722247251,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/53722247251,https://www.airlines-manager.com/aircraft/show/114266978,1:15,9:59,400,"$742,774.00","$680,022.00","$1,700.06","$77,865.11"
IAH - YYC,53747970664,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/53747970664,https://www.airlines-manager.com/aircraft/show/114266977,12:00,20:44,400,"$742,774.00","$680,022.00","$1,700.06","$77,865.11"
IAH - YYC,53753439658,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/53753439658,https://www.airlines-manager.com/aircraft/show/114266980,16:00,0:44,400,"$742,774.00","$680,022.00","$1,700.06","$77,865.11"
IAH - YYC,53758909853,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/53758909853,https://www.airlines-manager.com/aircraft/show/114266979,17:15,1:59,400,"$742,774.00","$680,022.00","$1,700.06","$77,865.11"
IAH - YYZ,53722247468,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/53722247468,https://www.airlines-manager.com/aircraft/show/97076944,3:30,10:29,400,"$572,430.00","$513,782.00","$1,284.46","$73,572.60"
IAH - YYZ,53735281155,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/53735281155,https://www.airlines-manager.com/aircraft/show/97026605,6:45,13:44,136,"$211,434.00","$180,891.00","$1,330.08","$25,903.25"
IAH - YYZ,53747970840,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/53747970840,https://www.airlines-manager.com/aircraft/show/97076945,13:00,19:59,400,"$572,430.00","$513,782.00","$1,284.46","$73,572.60"
IAH - YYZ,53753439667,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/53753439667,https://www.airlines-manager.com/aircraft/show/97076942,16:00,22:59,400,"$572,430.00","$513,782.00","$1,284.46","$73,572.60"
IAH - YYZ,53758909930,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/53758909930,https://www.airlines-manager.com/aircraft/show/97076946,18:00,0:59,400,"$572,430.00","$513,782.00","$1,284.46","$73,572.60"
IAH - YYZ,53764392796,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/53764392796,https://www.airlines-manager.com/aircraft/show/97076943,21:00,3:59,400,"$572,430.00","$513,782.00","$1,284.46","$73,572.60"
MIA - ABQ,53722247224,MIA-IAD-TUS 1,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/53722247224,https://www.airlines-manager.com/aircraft/show/97556721,1:15,9:59,310,"$547,286.00","$499,445.00","$1,611.11","$57,188.36"
MIA - ABQ,53722247225,MIA-IAD-TUS 4,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/53722247225,https://www.airlines-manager.com/aircraft/show/97556718,4:15,12:59,310,"$547,286.00","$499,445.00","$1,611.11","$57,188.36"
MIA - ABQ,53742109008,MIA-IAD-TUS 3,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/53742109008,https://www.airlines-manager.com/aircraft/show/97556719,10:00,18:44,310,"$547,286.00","$499,445.00","$1,611.11","$57,188.36"
MIA - ABQ,53764392539,MIA-IAD-TUS 2,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/53764392539,https://www.airlines-manager.com/aircraft/show/97556720,19:30,4:14,310,"$547,286.00","$499,445.00","$1,611.11","$57,188.36"
MIA - ABQ,53768887137,MIA-IAD-TUS 5,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/53768887137,https://www.airlines-manager.com/aircraft/show/97556716,22:30,7:14,310,"$547,286.00","$499,445.00","$1,611.11","$57,188.36"
MIA - ACC,53753439529,MIA 84B-2 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/53753439529,https://www.airlines-manager.com/aircraft/show/106676226,14:15,11:59,962,"$3,564,950.00","$3,254,637.00","$3,383.20","$149,753.24"
MIA - ACC,53768887158,MIA 84B-4 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/53768887158,https://www.airlines-manager.com/aircraft/show/106676228,22:45,20:29,962,"$3,564,950.00","$3,254,637.00","$3,383.20","$149,753.24"
MIA - ALB,53722247483,MIA-DSM-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/53722247483,https://www.airlines-manager.com/aircraft/show/113101233,3:30,10:14,320,"$427,642.00","$386,268.00","$1,207.09","$57,366.53"
MIA - ALB,53747970740,MIA-DSM-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/53747970740,https://www.airlines-manager.com/aircraft/show/113101230,13:00,19:44,320,"$427,642.00","$386,268.00","$1,207.09","$57,366.53"
MIA - ALB,53753439688,MIA-DSM-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/53753439688,https://www.airlines-manager.com/aircraft/show/100049776,16:00,22:59,112,"$202,282.00","$178,019.00","$1,589.46","$25,491.98"
MIA - ALB,53764392716,MIA-DSM-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/53764392716,https://www.airlines-manager.com/aircraft/show/111064081,20:15,2:59,320,"$427,642.00","$386,268.00","$1,207.09","$57,366.53"
MIA - ALB,53768887219,MIA-DSM-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/53768887219,https://www.airlines-manager.com/aircraft/show/113101228,23:15,5:59,320,"$427,642.00","$386,268.00","$1,207.09","$57,366.53"
MIA - ALG,53758909803,MIA 84B-7 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/53758909803,https://www.airlines-manager.com/aircraft/show/106676231,17:00,12:29,962,"$3,237,342.00","$2,951,810.00","$3,068.41","$151,504.36"
MIA - ALG,53764392752,MIA 84B-5 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/53764392752,https://www.airlines-manager.com/aircraft/show/106676229,20:30,15:59,962,"$3,237,342.00","$2,951,810.00","$3,068.41","$151,504.36"
MIA - ANU,53735281131,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/53735281131,https://www.airlines-manager.com/aircraft/show/110114297,6:30,13:44,228,"$355,422.00","$324,739.00","$1,424.29","$44,894.79"
MIA - ANU,53735281132,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/53735281132,https://www.airlines-manager.com/aircraft/show/110114298,8:30,15:44,228,"$355,422.00","$324,739.00","$1,424.29","$44,894.79"
MIA - ANU,53747970653,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/53747970653,https://www.airlines-manager.com/aircraft/show/110114295,12:00,19:14,228,"$355,422.00","$324,739.00","$1,424.29","$44,894.79"
MIA - ANU,53747970654,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/53747970654,https://www.airlines-manager.com/aircraft/show/110114296,13:00,20:14,228,"$355,422.00","$324,739.00","$1,424.29","$44,894.79"
MIA - ANU,53758909765,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/53758909765,https://www.airlines-manager.com/aircraft/show/110114300,16:30,23:44,228,"$355,422.00","$324,739.00","$1,424.29","$44,894.79"
MIA - ANU,53768887229,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/53768887229,https://www.airlines-manager.com/aircraft/show/110114299,23:30,6:44,228,"$355,422.00","$324,739.00","$1,424.29","$44,894.79"
MIA - ATL,53747970621,MIA-LAX-DEN 4,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/53747970621,https://www.airlines-manager.com/aircraft/show/91126652,12:00,16:29,400,"$365,129.00","$300,884.00",$752.21,"$67,111.67"
MIA - ATL,53747970622,MIA-LAX-DEN 2,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/53747970622,https://www.airlines-manager.com/aircraft/show/91126650,13:00,17:29,400,"$365,129.00","$300,884.00",$752.21,"$67,111.67"
MIA - ATL,53764392523,MIA-LAX-DEN 1,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/53764392523,https://www.airlines-manager.com/aircraft/show/91126649,19:30,23:59,400,"$365,129.00","$300,884.00",$752.21,"$67,111.67"
MIA - ATL,53764392524,MIA-LAX-DEN 3,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/53764392524,https://www.airlines-manager.com/aircraft/show/91126651,21:00,1:29,400,"$365,129.00","$300,884.00",$752.21,"$67,111.67"
MIA - AUA,53722247441,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/53722247441,https://www.airlines-manager.com/aircraft/show/107121795,3:00,9:29,320,"$403,740.00","$363,920.00","$1,137.25","$56,131.62"
MIA - AUA,53722247442,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/53722247442,https://www.airlines-manager.com/aircraft/show/107121798,4:30,10:59,320,"$403,740.00","$363,920.00","$1,137.25","$56,131.62"
MIA - AUA,53742109155,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/53742109155,https://www.airlines-manager.com/aircraft/show/107121797,11:00,17:29,320,"$403,740.00","$363,920.00","$1,137.25","$56,131.62"
MIA - AUA,53758909899,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/53758909899,https://www.airlines-manager.com/aircraft/show/107121796,17:45,0:14,320,"$403,740.00","$363,920.00","$1,137.25","$56,131.62"
MIA - AUA,53768887024,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/53768887024,https://www.airlines-manager.com/aircraft/show/107121799,21:45,4:14,241,"$313,495.00","$276,694.00","$1,148.11","$42,677.74"
MIA - AUS,53722247400,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/53722247400,https://www.airlines-manager.com/aircraft/show/99920625,2:45,9:14,320,"$402,281.00","$358,582.00","$1,120.57","$55,308.28"
MIA - AUS,53742109007,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/53742109007,https://www.airlines-manager.com/aircraft/show/99920626,10:00,16:29,320,"$402,281.00","$358,582.00","$1,120.57","$55,308.28"
MIA - AUS,53753439432,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/53753439432,https://www.airlines-manager.com/aircraft/show/82323689,14:00,20:29,112,"$189,894.00","$164,835.00","$1,471.74","$25,424.42"
MIA - AUS,53753439433,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/53753439433,https://www.airlines-manager.com/aircraft/show/99920623,14:45,21:14,320,"$402,281.00","$358,582.00","$1,120.57","$55,308.28"
MIA - AUS,53764392758,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/53764392758,https://www.airlines-manager.com/aircraft/show/99920624,20:45,3:14,320,"$402,281.00","$358,582.00","$1,120.57","$55,308.28"
MIA - BDA,53722247445,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/53722247445,https://www.airlines-manager.com/aircraft/show/104034457,3:00,9:14,228,"$294,998.00","$267,472.00","$1,173.12","$42,909.95"
MIA - BDA,53722247446,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/53722247446,https://www.airlines-manager.com/aircraft/show/104034459,3:45,9:59,228,"$294,998.00","$267,472.00","$1,173.12","$42,909.95"
MIA - BDA,53742108989,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/53742108989,https://www.airlines-manager.com/aircraft/show/104034460,10:00,16:14,228,"$294,998.00","$267,472.00","$1,173.12","$42,909.95"
MIA - BDA,53742108990,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/53742108990,https://www.airlines-manager.com/aircraft/show/99326789,11:00,17:14,228,"$294,998.00","$267,472.00","$1,173.12","$42,909.95"
MIA - BDA,53753439643,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/53753439643,https://www.airlines-manager.com/aircraft/show/104034461,15:45,21:59,228,"$294,998.00","$267,472.00","$1,173.12","$42,909.95"
MIA - BDA,53764392818,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/53764392818,https://www.airlines-manager.com/aircraft/show/104034458,21:15,3:29,228,"$294,998.00","$267,472.00","$1,173.12","$42,909.95"
MIA - BDL,53722247440,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/53722247440,https://www.airlines-manager.com/aircraft/show/107763565,3:00,9:44,320,"$426,255.00","$383,974.00","$1,199.92","$57,025.84"
MIA - BDL,53735281236,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/53735281236,https://www.airlines-manager.com/aircraft/show/107467213,8:00,14:44,112,"$200,632.00","$176,005.00","$1,571.47","$26,139.36"
MIA - BDL,53747970889,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/53747970889,https://www.airlines-manager.com/aircraft/show/107763561,13:45,20:29,320,"$426,255.00","$383,974.00","$1,199.92","$57,025.84"
MIA - BDL,53753439440,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/53753439440,https://www.airlines-manager.com/aircraft/show/107763566,14:00,20:44,320,"$426,255.00","$383,974.00","$1,199.92","$57,025.84"
MIA - BDL,53764392733,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/53764392733,https://www.airlines-manager.com/aircraft/show/107763562,20:30,3:14,320,"$426,255.00","$383,974.00","$1,199.92","$57,025.84"
MIA - BFF,53722247156,MIA-PSP-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/53722247156,https://www.airlines-manager.com/aircraft/show/116789634,0:45,9:29,320,"$554,176.00","$504,013.00","$1,575.04","$57,711.41"
MIA - BFF,53722247157,MIA-PSP-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/53722247157,https://www.airlines-manager.com/aircraft/show/116789632,1:00,9:44,320,"$554,176.00","$504,013.00","$1,575.04","$57,711.41"
MIA - BFF,53742108958,MIA-PSP-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/53742108958,https://www.airlines-manager.com/aircraft/show/116789633,10:00,18:44,320,"$554,176.00","$504,013.00","$1,575.04","$57,711.41"
MIA - BFF,53747970721,MIA-PSP-BFF 5,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/53747970721,https://www.airlines-manager.com/aircraft/show/116789630,13:00,21:44,320,"$554,176.00","$504,013.00","$1,575.04","$57,711.41"
MIA - BFF,53764392772,MIA-PSP-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/53764392772,https://www.airlines-manager.com/aircraft/show/116789631,20:45,5:29,320,"$554,176.00","$504,013.00","$1,575.04","$57,711.41"
MIA - BGI,53722247416,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/53722247416,https://www.airlines-manager.com/aircraft/show/107121796,2:45,10:59,320,"$515,730.00","$466,906.00","$1,459.08","$56,709.23"
MIA - BGI,53735281161,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/53735281161,https://www.airlines-manager.com/aircraft/show/107121799,6:45,14:59,320,"$515,730.00","$466,906.00","$1,459.08","$56,709.23"
MIA - BGI,53747970681,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/53747970681,https://www.airlines-manager.com/aircraft/show/107121795,12:00,20:14,320,"$515,730.00","$466,906.00","$1,459.08","$56,709.23"
MIA - BGI,53747970682,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/53747970682,https://www.airlines-manager.com/aircraft/show/107121798,13:30,21:44,320,"$515,730.00","$466,906.00","$1,459.08","$56,709.23"
MIA - BGI,53764392597,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/53764392597,https://www.airlines-manager.com/aircraft/show/107121797,20:00,4:14,320,"$515,730.00","$466,906.00","$1,459.08","$56,709.23"
MIA - BHM,53722247494,MIA-CID-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/53722247494,https://www.airlines-manager.com/aircraft/show/116789651,3:45,8:29,310,"$301,638.00","$272,460.00",$878.90,"$57,561.97"
MIA - BHM,53742108951,MIA-CID-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/53742108951,https://www.airlines-manager.com/aircraft/show/116789652,10:00,14:44,310,"$301,638.00","$272,460.00",$878.90,"$57,561.97"
MIA - BHM,53758909848,MIA-CID-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/53758909848,https://www.airlines-manager.com/aircraft/show/116789653,17:15,21:59,310,"$301,638.00","$272,460.00",$878.90,"$57,561.97"
MIA - BHM,53768887178,MIA-CID-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/53768887178,https://www.airlines-manager.com/aircraft/show/116789650,22:45,3:29,310,"$301,638.00","$272,460.00",$878.90,"$57,561.97"
MIA - BIL,53742108956,MIA-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/53742108956,https://www.airlines-manager.com/aircraft/show/116789629,10:00,20:14,320,"$631,281.00","$575,789.00","$1,799.34","$56,266.03"
MIA - BIL,53747970624,MIA-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/53747970624,https://www.airlines-manager.com/aircraft/show/116789628,12:00,22:14,320,"$631,281.00","$575,789.00","$1,799.34","$56,266.03"
MIA - BIL,53753439474,MIA-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/53753439474,https://www.airlines-manager.com/aircraft/show/116789627,14:00,0:14,320,"$631,281.00","$575,789.00","$1,799.34","$56,266.03"
MIA - BIL,53768886990,MIA-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/53768886990,https://www.airlines-manager.com/aircraft/show/116789626,21:30,7:44,320,"$631,281.00","$575,789.00","$1,799.34","$56,266.03"
MIA - BIL,53770850193,MIA-BIL-BZN 5,ERJ-175,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/53770850193,https://www.airlines-manager.com/aircraft/show/116042637,23:45,9:59,112,"$296,899.00","$263,087.00","$2,348.99","$25,708.83"
MIA - BNA,53722247144,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/53722247144,https://www.airlines-manager.com/aircraft/show/103534663,0:45,5:59,112,"$157,224.00","$135,746.00","$1,212.02","$25,938.73"
MIA - BNA,53722247145,MIA-BOI-BNA 4,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/53722247145,https://www.airlines-manager.com/aircraft/show/103775657,1:15,6:29,320,"$330,750.00","$292,499.00",$914.06,"$55,891.53"
MIA - BNA,53722247146,MIA-BOI-BNA 3,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/53722247146,https://www.airlines-manager.com/aircraft/show/104020880,4:45,9:59,320,"$330,750.00","$292,499.00",$914.06,"$55,891.53"
MIA - BNA,53742108995,MIA-BOI-BNA 2,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/53742108995,https://www.airlines-manager.com/aircraft/show/104022609,10:00,15:14,320,"$330,750.00","$292,499.00",$914.06,"$55,891.53"
MIA - BNA,53747970644,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/53747970644,https://www.airlines-manager.com/aircraft/show/103534663,12:00,17:14,112,"$157,224.00","$135,746.00","$1,212.02","$25,938.73"
MIA - BNA,53764392814,MIA-BOI-BNA 1,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/53764392814,https://www.airlines-manager.com/aircraft/show/104133006,21:15,2:29,320,"$330,750.00","$292,499.00",$914.06,"$55,891.53"
MIA - BOI,53722247318,MIA-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/53722247318,https://www.airlines-manager.com/aircraft/show/106339154,1:45,12:59,198,"$523,215.00","$479,346.00","$2,420.94","$42,671.75"
MIA - BOI,53742108996,MIA-BOI-BNA 1,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/53742108996,https://www.airlines-manager.com/aircraft/show/104133006,10:00,21:14,320,"$695,244.00","$635,092.00","$1,984.66","$56,536.38"
MIA - BOI,53753439435,MIA-BOI-BNA 4,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/53753439435,https://www.airlines-manager.com/aircraft/show/103775657,14:00,1:14,320,"$695,244.00","$635,092.00","$1,984.66","$56,536.38"
MIA - BOI,53758909878,MIA-BOI-BNA 3,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/53758909878,https://www.airlines-manager.com/aircraft/show/104020880,17:30,4:44,320,"$695,244.00","$635,092.00","$1,984.66","$56,536.38"
MIA - BOI,53768887167,MIA-BOI-BNA 2,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/53768887167,https://www.airlines-manager.com/aircraft/show/104022609,22:45,9:59,320,"$695,244.00","$635,092.00","$1,984.66","$56,536.38"
MIA - BOS,53722247351,MIA-SJU-BOS 5,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/53722247351,https://www.airlines-manager.com/aircraft/show/91352059,2:00,8:59,310,"$443,989.00","$399,580.00","$1,288.97","$57,219.09"
MIA - BOS,53722247352,MIA-SJU-BOS 1,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/53722247352,https://www.airlines-manager.com/aircraft/show/91352063,5:00,11:59,310,"$443,989.00","$399,580.00","$1,288.97","$57,219.09"
MIA - BOS,53742109217,MIA-SJU-BOS 4,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/53742109217,https://www.airlines-manager.com/aircraft/show/91352060,11:15,18:14,310,"$443,989.00","$399,580.00","$1,288.97","$57,219.09"
MIA - BOS,53758909769,MIA-SJU-BOS 2,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/53758909769,https://www.airlines-manager.com/aircraft/show/91352062,16:30,23:29,310,"$443,989.00","$399,580.00","$1,288.97","$57,219.09"
MIA - BOS,53764392445,MIA-SJU-BOS 3,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/53764392445,https://www.airlines-manager.com/aircraft/show/91352061,19:00,1:59,310,"$443,989.00","$399,580.00","$1,288.97","$57,219.09"
MIA - BOS,53764392446,MIA-SJU-BOS 6 B,A319-100,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/53764392446,https://www.airlines-manager.com/aircraft/show/110582841,20:15,3:14,198,"$335,807.00","$300,226.00","$1,516.29","$42,991.79"
MIA - BTV,53722247438,MIA-DSM-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/53722247438,https://www.airlines-manager.com/aircraft/show/111064081,3:00,10:14,320,"$459,413.00","$416,541.00","$1,301.69","$57,586.31"
MIA - BTV,53735281281,MIA-DSM-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/53735281281,https://www.airlines-manager.com/aircraft/show/113101228,8:45,15:59,320,"$459,413.00","$416,541.00","$1,301.69","$57,586.31"
MIA - BTV,53747970741,MIA-DSM-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/53747970741,https://www.airlines-manager.com/aircraft/show/113101233,13:00,20:14,320,"$459,413.00","$416,541.00","$1,301.69","$57,586.31"
MIA - BTV,53764392552,MIA-DSM-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/53764392552,https://www.airlines-manager.com/aircraft/show/113101230,19:45,2:59,320,"$459,413.00","$416,541.00","$1,301.69","$57,586.31"
MIA - BTV,53768887188,MIA-DSM-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/53768887188,https://www.airlines-manager.com/aircraft/show/100049776,23:00,6:29,109,"$215,686.00","$190,490.00","$1,747.61","$25,455.23"
MIA - BUF,53722247433,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/53722247433,https://www.airlines-manager.com/aircraft/show/107763561,3:00,9:44,320,"$424,121.00","$382,306.00","$1,194.71","$56,778.12"
MIA - BUF,53722247434,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/53722247434,https://www.airlines-manager.com/aircraft/show/107763566,3:15,9:59,320,"$424,121.00","$382,306.00","$1,194.71","$56,778.12"
MIA - BUF,53742109148,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/53742109148,https://www.airlines-manager.com/aircraft/show/107763562,11:00,17:44,320,"$424,121.00","$382,306.00","$1,194.71","$56,778.12"
MIA - BUF,53758909871,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/53758909871,https://www.airlines-manager.com/aircraft/show/107763565,17:30,0:14,320,"$424,121.00","$382,306.00","$1,194.71","$56,778.12"
MIA - BUF,53764392852,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/53764392852,https://www.airlines-manager.com/aircraft/show/107467213,21:15,3:59,112,"$199,651.00","$175,283.00","$1,565.03","$26,032.13"
MIA - BUR,53722247402,MIA-BUR-PVD 4,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/53722247402,https://www.airlines-manager.com/aircraft/show/108834806,2:45,13:59,310,"$701,092.00","$648,187.00","$2,090.93","$57,702.11"
MIA - BUR,53742109147,MIA-BUR-PVD 1,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/53742109147,https://www.airlines-manager.com/aircraft/show/108834803,11:00,22:14,310,"$701,092.00","$648,187.00","$2,090.93","$57,702.11"
MIA - BUR,53753439423,MIA-BUR-PVD 3,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/53753439423,https://www.airlines-manager.com/aircraft/show/108834805,14:00,1:14,310,"$701,092.00","$648,187.00","$2,090.93","$57,702.11"
MIA - BUR,53764392587,MIA-BUR-PVD 5 B,A319-100,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/53764392587,https://www.airlines-manager.com/aircraft/show/108834807,20:00,7:14,198,"$525,980.00","$483,555.00","$2,442.20","$43,046.44"
MIA - BUR,53764392589,MIA-BUR-PVD 2,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/53764392589,https://www.airlines-manager.com/aircraft/show/108834804,20:45,7:59,310,"$701,092.00","$648,187.00","$2,090.93","$57,702.11"
MIA - BWI,53722247517,MIA-BWI-YYZ 4,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/53722247517,https://www.airlines-manager.com/aircraft/show/92153442,4:00,9:44,310,"$364,242.00","$325,933.00","$1,051.40","$56,848.78"
MIA - BWI,53735281107,MIA-BWI-YYZ 5,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/53735281107,https://www.airlines-manager.com/aircraft/show/92153439,6:00,11:44,310,"$364,242.00","$325,933.00","$1,051.40","$56,848.78"
MIA - BWI,53742109026,MIA-BWI-YYZ 1,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/53742109026,https://www.airlines-manager.com/aircraft/show/92153443,10:00,15:44,310,"$364,242.00","$325,933.00","$1,051.40","$56,848.78"
MIA - BWI,53747970866,MIA-BWI-YYZ 2,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/53747970866,https://www.airlines-manager.com/aircraft/show/92153440,13:00,18:44,310,"$364,242.00","$325,933.00","$1,051.40","$56,848.78"
MIA - BWI,53764392809,MIA-BWI-YYZ 3,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/53764392809,https://www.airlines-manager.com/aircraft/show/92153441,21:00,2:44,310,"$364,242.00","$325,933.00","$1,051.40","$56,848.78"
MIA - BWI,53768887187,MIA-BWI-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/53768887187,https://www.airlines-manager.com/aircraft/show/92137503,23:00,4:44,85,"$121,050.00","$100,291.00","$1,179.89","$17,492.62"
MIA - BZN,53722247091,MIA-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/53722247091,https://www.airlines-manager.com/aircraft/show/116789627,0:15,10:44,320,"$653,842.00","$597,646.00","$1,867.64","$57,009.16"
MIA - BZN,53742109141,MIA-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/53742109141,https://www.airlines-manager.com/aircraft/show/116789626,11:00,21:29,320,"$653,842.00","$597,646.00","$1,867.64","$57,009.16"
MIA - BZN,53747970722,MIA-BIL-BZN 5,ERJ-175,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/53747970722,https://www.airlines-manager.com/aircraft/show/116042637,13:00,23:44,112,"$308,087.00","$273,608.00","$2,442.93","$25,491.43"
MIA - BZN,53764392704,MIA-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/53764392704,https://www.airlines-manager.com/aircraft/show/116789629,20:15,6:44,320,"$653,842.00","$597,646.00","$1,867.64","$57,009.16"
MIA - BZN,53768887061,MIA-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/53768887061,https://www.airlines-manager.com/aircraft/show/116789628,22:15,8:44,320,"$653,842.00","$597,646.00","$1,867.64","$57,009.16"
MIA - CAK,53722247338,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/53722247338,https://www.airlines-manager.com/aircraft/show/115493370,2:00,8:14,310,"$383,530.00","$349,760.00","$1,128.26","$56,111.23"
MIA - CAK,53735281249,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/53735281249,https://www.airlines-manager.com/aircraft/show/115493371,8:15,14:29,310,"$383,530.00","$349,760.00","$1,128.26","$56,111.23"
MIA - CAK,53742109194,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/53742109194,https://www.airlines-manager.com/aircraft/show/115493372,11:00,17:14,310,"$383,530.00","$349,760.00","$1,128.26","$56,111.23"
MIA - CAK,53758909932,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/53758909932,https://www.airlines-manager.com/aircraft/show/114912307,18:00,0:14,112,"$181,169.00","$159,079.00","$1,420.35","$25,520.70"
MIA - CAK,53764392797,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/53764392797,https://www.airlines-manager.com/aircraft/show/115493373,21:00,3:14,273,"$356,402.00","$323,693.00","$1,185.69","$51,929.36"
MIA - CHS,53722247460,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/53722247460,https://www.airlines-manager.com/aircraft/show/94886626,3:15,7:14,310,"$225,037.00","$199,045.00",$642.08,"$49,969.46"
MIA - CHS,53722247461,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/53722247461,https://www.airlines-manager.com/aircraft/show/107577220,4:15,8:14,0,"$60,700.00","$43,128.00",#DIV/0!,"$10,827.11"
MIA - CHS,53742108909,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/53742108909,https://www.airlines-manager.com/aircraft/show/96692674,9:00,12:59,310,"$225,037.00","$199,045.00",$642.08,"$49,969.46"
MIA - CHS,53742108910,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/53742108910,https://www.airlines-manager.com/aircraft/show/105601657,11:00,14:59,112,"$104,611.00","$88,159.00",$787.13,"$22,131.97"
MIA - CHS,53753439488,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/53753439488,https://www.airlines-manager.com/aircraft/show/94886625,14:00,17:59,310,"$225,037.00","$199,045.00",$642.08,"$49,969.46"
MIA - CHS,53764392766,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/53764392766,https://www.airlines-manager.com/aircraft/show/94886629,20:45,0:44,290,"$202,846.00","$178,199.00",$614.48,"$44,736.15"
MIA - CID,53722247253,MIA-CID-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/53722247253,https://www.airlines-manager.com/aircraft/show/116789652,1:15,8:29,310,"$453,870.00","$416,411.00","$1,343.26","$57,568.34"
MIA - CID,53742108952,MIA-CID-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/53742108952,https://www.airlines-manager.com/aircraft/show/116789653,10:00,17:14,310,"$453,870.00","$416,411.00","$1,343.26","$57,568.34"
MIA - CID,53753439641,MIA-CID-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/53753439641,https://www.airlines-manager.com/aircraft/show/116789650,15:30,22:44,310,"$453,870.00","$416,411.00","$1,343.26","$57,568.34"
MIA - CID,53764392751,MIA-CID-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/53764392751,https://www.airlines-manager.com/aircraft/show/116789651,20:30,3:44,310,"$453,870.00","$416,411.00","$1,343.26","$57,568.34"
MIA - CLE,53722247114,MIA-COS-CVG 5,ERJ-175,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/53722247114,https://www.airlines-manager.com/aircraft/show/103534665,0:30,6:44,112,"$188,033.00","$164,249.00","$1,466.51","$26,350.11"
MIA - CLE,53722247115,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/53722247115,https://www.airlines-manager.com/aircraft/show/103684630,4:15,10:29,320,"$398,480.00","$357,223.00","$1,116.32","$57,308.50"
MIA - CLE,53735281218,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/53735281218,https://www.airlines-manager.com/aircraft/show/103365574,7:45,13:59,320,"$398,480.00","$357,223.00","$1,116.32","$57,308.50"
MIA - CLE,53747970744,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/53747970744,https://www.airlines-manager.com/aircraft/show/103684632,13:00,19:14,320,"$398,480.00","$357,223.00","$1,116.32","$57,308.50"
MIA - CLE,53764392768,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/53764392768,https://www.airlines-manager.com/aircraft/show/103684631,20:45,2:59,320,"$398,480.00","$357,223.00","$1,116.32","$57,308.50"
MIA - CLT,53722247529,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/53722247529,https://www.airlines-manager.com/aircraft/show/82543123,4:15,8:59,112,"$142,241.00","$118,334.00","$1,056.55","$25,000.14"
MIA - CLT,53742109029,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/53742109029,https://www.airlines-manager.com/aircraft/show/91600939,10:00,14:44,310,"$298,699.00","$260,750.00",$841.13,"$55,088.03"
MIA - CLT,53753439693,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/53753439693,https://www.airlines-manager.com/aircraft/show/91600936,16:00,20:44,310,"$298,699.00","$260,750.00",$841.13,"$55,088.03"
MIA - CLT,53758909895,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/53758909895,https://www.airlines-manager.com/aircraft/show/91600937,17:45,22:29,310,"$298,699.00","$260,750.00",$841.13,"$55,088.03"
MIA - CLT,53768887138,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/53768887138,https://www.airlines-manager.com/aircraft/show/91600935,22:30,3:14,310,"$298,699.00","$260,750.00",$841.13,"$55,088.03"
MIA - CLT,53768887139,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/53768887139,https://www.airlines-manager.com/aircraft/show/91600938,23:30,4:14,310,"$298,699.00","$260,750.00",$841.13,"$55,088.03"
MIA - CMH,53722247320,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/53722247320,https://www.airlines-manager.com/aircraft/show/88494374,1:45,7:44,320,"$372,456.00","$332,435.00","$1,038.86","$55,560.17"
MIA - CMH,53735281192,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/53735281192,https://www.airlines-manager.com/aircraft/show/88494378,7:15,13:14,320,"$372,456.00","$332,435.00","$1,038.86","$55,560.17"
MIA - CMH,53753439466,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/53753439466,https://www.airlines-manager.com/aircraft/show/91806233,14:00,19:59,320,"$372,456.00","$332,435.00","$1,038.86","$55,560.17"
MIA - CMH,53758909917,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/53758909917,https://www.airlines-manager.com/aircraft/show/110582842,18:00,23:59,198,"$282,748.00","$254,479.00","$1,285.25","$42,531.31"
MIA - CMH,53764392777,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/53764392777,https://www.airlines-manager.com/aircraft/show/88239556,21:00,2:59,320,"$372,456.00","$332,435.00","$1,038.86","$55,560.17"
MIA - CMN,53722247558,MIA 84B-4 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/53722247558,https://www.airlines-manager.com/aircraft/show/106676228,5:00,22:44,962,"$2,958,140.00","$2,699,471.00","$2,806.10","$152,225.81"
MIA - CMN,53764392731,MIA 84B-1 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/53764392731,https://www.airlines-manager.com/aircraft/show/106676225,20:30,14:14,962,"$2,958,140.00","$2,699,471.00","$2,806.10","$152,225.81"
MIA - COS,53735281136,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/53735281136,https://www.airlines-manager.com/aircraft/show/103684631,6:30,14:59,320,"$543,615.00","$492,225.00","$1,538.20","$58,022.59"
MIA - COS,53742109003,MIA-COS-CVG 5,ERJ-175,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/53742109003,https://www.airlines-manager.com/aircraft/show/103534665,10:00,18:44,112,"$256,350.00","$225,769.00","$2,015.79","$25,851.41"
MIA - COS,53753439439,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/53753439439,https://www.airlines-manager.com/aircraft/show/103684630,14:00,22:29,320,"$543,615.00","$492,225.00","$1,538.20","$58,022.59"
MIA - COS,53758909879,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/53758909879,https://www.airlines-manager.com/aircraft/show/103365574,17:30,1:59,320,"$543,615.00","$492,225.00","$1,538.20","$58,022.59"
MIA - COS,53768887166,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/53768887166,https://www.airlines-manager.com/aircraft/show/103684632,22:45,7:14,320,"$543,615.00","$492,225.00","$1,538.20","$58,022.59"
MIA - CPT,53722247555,MIA 84A-6 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/53722247555,https://www.airlines-manager.com/aircraft/show/93731916,5:00,10:29,1124,"$5,606,472.00","$5,211,864.00","$4,636.89","$950,491.91"
MIA - CPT,53758909934,MIA 84A-2 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/53758909934,https://www.airlines-manager.com/aircraft/show/93686968,18:00,23:29,1124,"$5,606,472.00","$5,211,864.00","$4,636.89","$950,491.91"
MIA - CUN,53722247571,MIA-PSP-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/53722247571,https://www.airlines-manager.com/aircraft/show/116789631,5:30,9:44,320,"$250,489.00","$215,136.00",$672.30,"$50,819.53"
MIA - CUN,53742108936,MIA-PSP-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/53742108936,https://www.airlines-manager.com/aircraft/show/116789634,9:30,13:44,320,"$250,489.00","$215,136.00",$672.30,"$50,819.53"
MIA - CUN,53742108937,MIA-PSP-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/53742108937,https://www.airlines-manager.com/aircraft/show/116789632,10:00,14:14,320,"$250,489.00","$215,136.00",$672.30,"$50,819.53"
MIA - CUN,53758909984,MIA-PSP-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/53758909984,https://www.airlines-manager.com/aircraft/show/116789633,18:45,22:59,320,"$250,489.00","$215,136.00",$672.30,"$50,819.53"
MIA - CUN,53768887023,MIA-PSP-BFF 5,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/53768887023,https://www.airlines-manager.com/aircraft/show/116789630,21:45,1:59,314,"$246,228.00","$210,982.00",$671.92,"$49,838.27"
MIA - CUR,53722247528,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/53722247528,https://www.airlines-manager.com/aircraft/show/107121797,4:15,10:59,320,"$413,130.00","$371,117.00","$1,159.74","$55,116.39"
MIA - CUR,53742109157,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/53742109157,https://www.airlines-manager.com/aircraft/show/107121796,11:00,17:44,320,"$413,130.00","$371,117.00","$1,159.74","$55,116.39"
MIA - CUR,53753439575,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/53753439575,https://www.airlines-manager.com/aircraft/show/107121799,15:00,21:44,320,"$413,130.00","$371,117.00","$1,159.74","$55,116.39"
MIA - CUR,53764392641,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/53764392641,https://www.airlines-manager.com/aircraft/show/107121795,20:15,2:59,320,"$413,130.00","$371,117.00","$1,159.74","$55,116.39"
MIA - CUR,53768887025,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/53768887025,https://www.airlines-manager.com/aircraft/show/107121798,21:45,4:29,295,"$383,660.00","$342,652.00","$1,161.53","$50,888.91"
MIA - CVG,53722247335,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/53722247335,https://www.airlines-manager.com/aircraft/show/103365574,2:00,7:44,320,"$367,096.00","$325,215.00","$1,016.30","$56,723.55"
MIA - CVG,53735281201,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/53735281201,https://www.airlines-manager.com/aircraft/show/103684632,7:15,12:59,320,"$367,096.00","$325,215.00","$1,016.30","$56,723.55"
MIA - CVG,53742108971,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/53742108971,https://www.airlines-manager.com/aircraft/show/107527976,10:00,15:44,0,"$96,826.00","$70,947.00",$0.00,"$12,374.48"
MIA - CVG,53753439559,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/53753439559,https://www.airlines-manager.com/aircraft/show/103684631,15:00,20:44,320,"$367,096.00","$325,215.00","$1,016.30","$56,723.55"
MIA - CVG,53758909983,MIA-COS-CVG 5,ERJ-175,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/53758909983,https://www.airlines-manager.com/aircraft/show/103534665,18:45,0:29,112,"$173,197.00","$149,488.00","$1,334.71","$26,073.49"
MIA - CVG,53768887140,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/53768887140,https://www.airlines-manager.com/aircraft/show/103684630,22:30,4:14,320,"$367,096.00","$325,215.00","$1,016.30","$56,723.55"
MIA - DEN,53722247255,MIA-LAX-DEN 3,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/53722247255,https://www.airlines-manager.com/aircraft/show/91126651,1:30,9:59,400,"$727,404.00","$641,772.00","$1,604.43","$75,650.92"
MIA - DEN,53722247256,MIA-LAX-DEN 4,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/53722247256,https://www.airlines-manager.com/aircraft/show/91126652,3:30,11:59,400,"$727,404.00","$641,772.00","$1,604.43","$75,650.92"
MIA - DEN,53742109175,MIA-LAX-DEN 1,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/53742109175,https://www.airlines-manager.com/aircraft/show/91126649,11:00,19:29,400,"$727,404.00","$641,772.00","$1,604.43","$75,650.92"
MIA - DEN,53758909881,MIA-LAX-DEN 2,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/53758909881,https://www.airlines-manager.com/aircraft/show/91126650,17:30,1:59,400,"$727,404.00","$641,772.00","$1,604.43","$75,650.92"
MIA - DEN,53768887065,MIA-LAX-DEN 5 E,A319-100,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/53768887065,https://www.airlines-manager.com/aircraft/show/115181776,22:15,6:59,216,"$426,690.00","$370,298.00","$1,714.34","$42,400.53"
MIA - DFW,53722247472,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/53722247472,https://www.airlines-manager.com/aircraft/show/91600936,3:30,9:59,310,"$408,515.00","$352,594.00","$1,137.40","$54,384.68"
MIA - DFW,53742109031,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/53742109031,https://www.airlines-manager.com/aircraft/show/91600935,10:00,16:29,310,"$408,515.00","$352,594.00","$1,137.40","$54,384.68"
MIA - DFW,53742109032,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/53742109032,https://www.airlines-manager.com/aircraft/show/91600938,11:00,17:29,310,"$408,515.00","$352,594.00","$1,137.40","$54,384.68"
MIA - DFW,53753439651,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/53753439651,https://www.airlines-manager.com/aircraft/show/82543123,15:45,22:14,112,"$192,378.00","$156,871.00","$1,400.63","$24,196.04"
MIA - DFW,53768887005,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/53768887005,https://www.airlines-manager.com/aircraft/show/91600939,21:30,3:59,310,"$408,515.00","$352,594.00","$1,137.40","$54,384.68"
MIA - DFW,53768887006,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/53768887006,https://www.airlines-manager.com/aircraft/show/91600937,22:30,4:59,310,"$408,515.00","$352,594.00","$1,137.40","$54,384.68"
MIA - DSM,53722247437,MIA-DSM-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/53722247437,https://www.airlines-manager.com/aircraft/show/113101230,3:00,10:14,320,"$455,904.00","$412,875.00","$1,290.23","$57,079.49"
MIA - DSM,53735281285,MIA-DSM-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/53735281285,https://www.airlines-manager.com/aircraft/show/100049776,8:45,15:59,112,"$216,032.00","$190,648.00","$1,702.21","$26,356.87"
MIA - DSM,53747970739,MIA-DSM-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/53747970739,https://www.airlines-manager.com/aircraft/show/111064081,13:00,20:14,320,"$455,904.00","$412,875.00","$1,290.23","$57,079.49"
MIA - DSM,53753439687,MIA-DSM-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/53753439687,https://www.airlines-manager.com/aircraft/show/113101228,16:00,23:14,320,"$455,904.00","$412,875.00","$1,290.23","$57,079.49"
MIA - DSM,53764392695,MIA-DSM-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/53764392695,https://www.airlines-manager.com/aircraft/show/113101233,20:15,3:29,320,"$455,904.00","$412,875.00","$1,290.23","$57,079.49"
MIA - DSS,53722247058,MIA 84B-7 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/53722247058,https://www.airlines-manager.com/aircraft/show/106676231,0:00,16:59,962,"$2,849,310.00","$2,603,298.00","$2,706.13","$153,285.46"
MIA - DSS,53747970649,MIA 84B-3 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/53747970649,https://www.airlines-manager.com/aircraft/show/106676227,12:00,4:59,962,"$2,849,310.00","$2,603,298.00","$2,706.13","$153,285.46"
MIA - DTW,53722247293,MIA-PDX-DTW 3,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/53722247293,https://www.airlines-manager.com/aircraft/show/89943713,1:30,7:59,320,"$411,222.00","$358,900.00","$1,121.56","$55,357.33"
MIA - DTW,53722247294,MIA-PDX-DTW 4,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/53722247294,https://www.airlines-manager.com/aircraft/show/89943712,2:30,8:59,320,"$411,222.00","$358,900.00","$1,121.56","$55,357.33"
MIA - DTW,53742109011,MIA-PDX-DTW 2,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/53742109011,https://www.airlines-manager.com/aircraft/show/89943714,10:00,16:29,320,"$411,222.00","$358,900.00","$1,121.56","$55,357.33"
MIA - DTW,53753439487,MIA-PDX-DTW 5,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/53753439487,https://www.airlines-manager.com/aircraft/show/89943711,14:00,20:29,320,"$411,222.00","$358,900.00","$1,121.56","$55,357.33"
MIA - DTW,53768887017,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/53768887017,https://www.airlines-manager.com/aircraft/show/107577220,21:45,4:14,0,"$108,921.00","$76,799.00",#DIV/0!,"$11,845.60"
MIA - DTW,53768887018,MIA-PDX-DTW 1,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/53768887018,https://www.airlines-manager.com/aircraft/show/89943715,22:30,4:59,320,"$411,222.00","$358,900.00","$1,121.56","$55,357.33"
MIA - ELP,53735281247,MIA-ELP-MCI 5 B,A319-100,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/53735281247,https://www.airlines-manager.com/aircraft/show/105093924,8:15,16:44,198,"$401,184.00","$365,173.00","$1,844.31","$43,045.93"
MIA - ELP,53742108978,MIA-ELP-MCI 1,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/53742108978,https://www.airlines-manager.com/aircraft/show/91806234,10:00,18:29,320,"$531,824.00","$481,715.00","$1,505.36","$56,783.69"
MIA - ELP,53753439702,MIA-ELP-MCI 3,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/53753439702,https://www.airlines-manager.com/aircraft/show/91806232,16:15,0:44,320,"$531,824.00","$481,715.00","$1,505.36","$56,783.69"
MIA - ELP,53758909837,MIA-ELP-MCI 4,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/53758909837,https://www.airlines-manager.com/aircraft/show/91806231,17:00,1:29,320,"$531,824.00","$481,715.00","$1,505.36","$56,783.69"
MIA - ELP,53768887212,MIA-ELP-MCI 2,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/53768887212,https://www.airlines-manager.com/aircraft/show/91806235,23:15,7:44,320,"$531,824.00","$481,715.00","$1,505.36","$56,783.69"
MIA - FAR,53722247155,MIA-FAR-TUL 3,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/53722247155,https://www.airlines-manager.com/aircraft/show/110883161,0:45,9:29,320,"$546,219.00","$497,397.00","$1,554.37","$56,953.85"
MIA - FAR,53735281190,MIA-FAR-TUL 4,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/53735281190,https://www.airlines-manager.com/aircraft/show/110883162,7:15,15:59,320,"$546,219.00","$497,397.00","$1,554.37","$56,953.85"
MIA - FAR,53742109136,MIA-FAR-TUL 1,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/53742109136,https://www.airlines-manager.com/aircraft/show/110883159,11:00,19:44,320,"$546,219.00","$497,397.00","$1,554.37","$56,953.85"
MIA - FAR,53753439682,MIA-FAR-TUL 2,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/53753439682,https://www.airlines-manager.com/aircraft/show/110883160,16:00,0:44,320,"$546,219.00","$497,397.00","$1,554.37","$56,953.85"
MIA - FAR,53758909949,MIA-FAR-TUL 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/53758909949,https://www.airlines-manager.com/aircraft/show/87169421,18:15,2:59,112,"$257,649.00","$228,235.00","$2,037.81","$26,133.78"
MIA - FAT,53735281266,MIA-FAT-MSO 4,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/53735281266,https://www.airlines-manager.com/aircraft/show/113101232,8:30,19:59,320,"$722,280.00","$662,066.00","$2,068.96","$57,654.51"
MIA - FAT,53742109150,MIA-FAT-MSO 1,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/53742109150,https://www.airlines-manager.com/aircraft/show/113101229,11:00,22:29,320,"$722,280.00","$662,066.00","$2,068.96","$57,654.51"
MIA - FAT,53764392419,MIA-FAT-MSO 2,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/53764392419,https://www.airlines-manager.com/aircraft/show/113101231,19:00,6:29,320,"$722,280.00","$662,066.00","$2,068.96","$57,654.51"
MIA - FAT,53768887102,MIA-FAT-MSO 3,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/53768887102,https://www.airlines-manager.com/aircraft/show/113101234,22:15,9:44,320,"$722,280.00","$662,066.00","$2,068.96","$57,654.51"
MIA - FPO,53722247101,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/53722247101,https://www.airlines-manager.com/aircraft/show/107121796,0:15,2:44,320,"$83,963.00","$59,322.00",$185.38,"$23,888.05"
MIA - FPO,53722247102,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/53722247102,https://www.airlines-manager.com/aircraft/show/107121799,4:15,6:44,320,"$83,963.00","$59,322.00",$185.38,"$23,888.05"
MIA - FPO,53742108931,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/53742108931,https://www.airlines-manager.com/aircraft/show/107121795,9:30,11:59,320,"$83,963.00","$59,322.00",$185.38,"$23,888.05"
MIA - FPO,53742108932,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/53742108932,https://www.airlines-manager.com/aircraft/show/107121798,11:00,13:29,320,"$83,963.00","$59,322.00",$185.38,"$23,888.05"
MIA - FPO,53758909872,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/53758909872,https://www.airlines-manager.com/aircraft/show/107121797,17:30,19:59,199,"$60,079.00","$35,850.00",$180.15,"$14,436.24"
MIA - FSD,53722247192,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/53722247192,https://www.airlines-manager.com/aircraft/show/110883110,1:00,8:59,310,"$501,538.00","$460,205.00","$1,484.53","$57,645.72"
MIA - FSD,53722247193,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/53722247193,https://www.airlines-manager.com/aircraft/show/110883113,2:45,10:44,310,"$501,538.00","$460,205.00","$1,484.53","$57,645.72"
MIA - FSD,53753439447,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/53753439447,https://www.airlines-manager.com/aircraft/show/110883112,14:00,21:59,310,"$501,538.00","$460,205.00","$1,484.53","$57,645.72"
MIA - FSD,53753439448,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/53753439448,https://www.airlines-manager.com/aircraft/show/110883111,16:15,0:14,310,"$501,538.00","$460,205.00","$1,484.53","$57,645.72"
MIA - FSD,53768887052,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/53768887052,https://www.airlines-manager.com/aircraft/show/104353572,22:00,5:59,93,"$218,497.00","$192,272.00","$2,067.44","$24,084.18"
MIA - GRR,53722247053,MIA-RAP-GRR 5,ERJ-175,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/53722247053,https://www.airlines-manager.com/aircraft/show/116042630,0:00,6:44,112,"$199,811.00","$175,319.00","$1,565.35","$26,037.48"
MIA - GRR,53722247054,MIA-RAP-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/53722247054,https://www.airlines-manager.com/aircraft/show/116789623,2:15,8:59,320,"$423,112.00","$381,221.00","$1,191.32","$56,616.98"
MIA - GRR,53742108954,MIA-RAP-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/53742108954,https://www.airlines-manager.com/aircraft/show/116789624,10:00,16:44,320,"$423,112.00","$381,221.00","$1,191.32","$56,616.98"
MIA - GRR,53747970690,MIA-RAP-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/53747970690,https://www.airlines-manager.com/aircraft/show/116789622,12:00,18:44,320,"$423,112.00","$381,221.00","$1,191.32","$56,616.98"
MIA - GRR,53764392444,MIA-RAP-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/53764392444,https://www.airlines-manager.com/aircraft/show/116789625,19:00,1:44,320,"$423,112.00","$381,221.00","$1,191.32","$56,616.98"
MIA - HAV,53722247559,MIA-PDX-DTW 1,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/53722247559,https://www.airlines-manager.com/aircraft/show/89943715,5:00,7:59,320,"$131,414.00","$101,607.00",$317.52,"$34,058.21"
MIA - HAV,53742108904,MIA-PDX-DTW 4,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/53742108904,https://www.airlines-manager.com/aircraft/show/89943712,9:00,11:59,320,"$131,414.00","$101,607.00",$317.52,"$34,058.21"
MIA - HAV,53742108905,MIA-PDX-DTW 3,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/53742108905,https://www.airlines-manager.com/aircraft/show/89943713,10:00,12:59,320,"$131,414.00","$101,607.00",$317.52,"$34,058.21"
MIA - HAV,53758909761,MIA-PDX-DTW 2,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/53758909761,https://www.airlines-manager.com/aircraft/show/89943714,16:30,19:29,320,"$131,414.00","$101,607.00",$317.52,"$34,058.21"
MIA - HAV,53764392743,MIA-PDX-DTW 5,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/53764392743,https://www.airlines-manager.com/aircraft/show/89943711,20:30,23:29,288,"$119,825.00","$90,271.00",$313.44,"$30,258.44"
MIA - IAD,53722247530,MIA-IAD-TUS 2,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/53722247530,https://www.airlines-manager.com/aircraft/show/97556720,4:15,9:59,310,"$360,640.00","$321,339.00","$1,036.58","$56,047.50"
MIA - IAD,53735281198,MIA-IAD-TUS 5,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/53735281198,https://www.airlines-manager.com/aircraft/show/97556716,7:15,12:59,310,"$360,640.00","$321,339.00","$1,036.58","$56,047.50"
MIA - IAD,53742109010,MIA-IAD-TUS 1,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/53742109010,https://www.airlines-manager.com/aircraft/show/97556721,10:00,15:44,310,"$360,640.00","$321,339.00","$1,036.58","$56,047.50"
MIA - IAD,53747970713,MIA-IAD-TUS 4,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/53747970713,https://www.airlines-manager.com/aircraft/show/97556718,13:00,18:44,310,"$360,640.00","$321,339.00","$1,036.58","$56,047.50"
MIA - IAD,53758909982,MIA-IAD-TUS 3,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/53758909982,https://www.airlines-manager.com/aircraft/show/97556719,18:45,0:29,310,"$360,640.00","$321,339.00","$1,036.58","$56,047.50"
MIA - IAD,53768887010,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/53768887010,https://www.airlines-manager.com/aircraft/show/107527976,21:30,3:14,0,"$96,372.00","$69,073.00",$0.00,"$12,047.62"
MIA - ICT,53722247384,MIA-FAR-TUL 1,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/53722247384,https://www.airlines-manager.com/aircraft/show/110883159,2:30,9:29,320,"$446,928.00","$403,611.00","$1,261.28","$57,796.32"
MIA - ICT,53742108894,MIA-FAR-TUL 2,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/53742108894,https://www.airlines-manager.com/aircraft/show/110883160,9:00,15:59,320,"$446,928.00","$403,611.00","$1,261.28","$57,796.32"
MIA - ICT,53742108895,MIA-FAR-TUL 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/53742108895,https://www.airlines-manager.com/aircraft/show/87169421,11:00,18:14,112,"$212,522.00","$187,091.00","$1,670.46","$25,865.12"
MIA - ICT,53758909894,MIA-FAR-TUL 3,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/53758909894,https://www.airlines-manager.com/aircraft/show/110883161,17:45,0:44,320,"$446,928.00","$403,611.00","$1,261.28","$57,796.32"
MIA - ICT,53768887161,MIA-FAR-TUL 4,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/53768887161,https://www.airlines-manager.com/aircraft/show/110883162,22:45,5:44,320,"$446,928.00","$403,611.00","$1,261.28","$57,796.32"
MIA - IND,53722247395,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/53722247395,https://www.airlines-manager.com/aircraft/show/82323689,2:30,8:29,112,"$180,919.00","$157,231.00","$1,403.85","$26,278.16"
MIA - IND,53722247396,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/53722247396,https://www.airlines-manager.com/aircraft/show/99920623,3:15,9:14,320,"$382,687.00","$341,268.00","$1,066.46","$57,036.43"
MIA - IND,53742109005,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/53742109005,https://www.airlines-manager.com/aircraft/show/99920624,10:00,15:59,320,"$382,687.00","$341,268.00","$1,066.46","$57,036.43"
MIA - IND,53753439690,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/53753439690,https://www.airlines-manager.com/aircraft/show/99920625,16:00,21:59,320,"$382,687.00","$341,268.00","$1,066.46","$57,036.43"
MIA - IND,53768887131,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/53768887131,https://www.airlines-manager.com/aircraft/show/99920626,22:30,4:29,320,"$382,687.00","$341,268.00","$1,066.46","$57,036.43"
MIA - JAN,53722247567,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/53722247567,https://www.airlines-manager.com/aircraft/show/114912307,5:30,10:29,112,"$149,512.00","$130,617.00","$1,166.22","$26,210.77"
MIA - JAN,53735281269,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/53735281269,https://www.airlines-manager.com/aircraft/show/115493373,8:30,13:29,310,"$314,276.00","$284,944.00",$919.17,"$57,179.40"
MIA - JAN,53753439475,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/53753439475,https://www.airlines-manager.com/aircraft/show/115493370,14:00,18:59,310,"$314,276.00","$284,944.00",$919.17,"$57,179.40"
MIA - JAN,53764392720,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/53764392720,https://www.airlines-manager.com/aircraft/show/115493371,20:15,1:14,310,"$314,276.00","$284,944.00",$919.17,"$57,179.40"
MIA - JAN,53768887156,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/53768887156,https://www.airlines-manager.com/aircraft/show/115493372,22:30,3:29,252,"$279,758.00","$251,606.00",$998.44,"$50,489.50"
MIA - JAX,53722247427,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/53722247427,https://www.airlines-manager.com/aircraft/show/103684631,3:00,6:29,320,"$173,694.00","$144,655.00",$452.05,"$41,527.75"
MIA - JAX,53742109110,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/53742109110,https://www.airlines-manager.com/aircraft/show/103684630,10:30,13:59,320,"$173,694.00","$144,655.00",$452.05,"$41,527.75"
MIA - JAX,53753439426,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/53753439426,https://www.airlines-manager.com/aircraft/show/103365574,14:00,17:29,320,"$173,694.00","$144,655.00",$452.05,"$41,527.75"
MIA - JAX,53764392492,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/53764392492,https://www.airlines-manager.com/aircraft/show/103684632,19:15,22:44,320,"$173,694.00","$144,655.00",$452.05,"$41,527.75"
MIA - JAX,53768887121,MIA-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/53768887121,https://www.airlines-manager.com/aircraft/show/106339154,22:15,1:44,198,"$131,883.00","$111,987.00",$565.59,"$32,149.38"
MIA - JFK,53735281081,MIA-JFK-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/53735281081,https://www.airlines-manager.com/aircraft/show/105308264,5:45,11:59,338,"$428,918.00","$376,442.00","$1,113.73","$60,391.76"
MIA - JFK,53735281082,MIA-JFK-PHX 6,ERJ-175,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/53735281082,https://www.airlines-manager.com/aircraft/show/82683137,6:45,12:59,112,"$187,062.00","$152,852.00","$1,364.75","$24,521.71"
MIA - JFK,53742108975,MIA-JFK-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/53742108975,https://www.airlines-manager.com/aircraft/show/105308267,10:00,16:14,338,"$428,918.00","$376,442.00","$1,113.73","$60,391.76"
MIA - JFK,53747970659,MIA-JFK-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/53747970659,https://www.airlines-manager.com/aircraft/show/105308265,12:00,18:14,338,"$428,918.00","$376,442.00","$1,113.73","$60,391.76"
MIA - JFK,53758909908,MIA-JFK-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/53758909908,https://www.airlines-manager.com/aircraft/show/105308266,18:00,0:14,338,"$428,918.00","$376,442.00","$1,113.73","$60,391.76"
MIA - JFK,53764392770,MIA-JFK-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/53764392770,https://www.airlines-manager.com/aircraft/show/105308268,20:45,2:59,338,"$428,918.00","$376,442.00","$1,113.73","$60,391.76"
MIA - JNB,53722247000,MIA 84A-4 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/53722247000,https://www.airlines-manager.com/aircraft/show/93686966,0:00,6:44,1124,"$6,002,780.00","$5,569,148.00","$4,954.76","$827,101.19"
MIA - JNB,53747970717,MIA 84A-7 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/53747970717,https://www.airlines-manager.com/aircraft/show/93776641,13:00,19:44,1124,"$6,002,780.00","$5,569,148.00","$4,954.76","$827,101.19"
MIA - LAS,53722247261,MIA-LAS-SEA 5,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/53722247261,https://www.airlines-manager.com/aircraft/show/105093929,1:30,11:59,338,"$716,711.00","$649,535.00","$1,921.70","$61,958.82"
MIA - LAS,53742108980,MIA-LAS-SEA 1,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/53742108980,https://www.airlines-manager.com/aircraft/show/105093925,10:00,20:29,338,"$716,711.00","$649,535.00","$1,921.70","$61,958.82"
MIA - LAS,53747970635,MIA-LAS-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/53747970635,https://www.airlines-manager.com/aircraft/show/113251304,12:00,22:29,198,"$496,976.00","$440,972.00","$2,227.13","$42,064.10"
MIA - LAS,53747970636,MIA-LAS-SEA 2,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/53747970636,https://www.airlines-manager.com/aircraft/show/105093926,13:00,23:29,338,"$716,711.00","$649,535.00","$1,921.70","$61,958.82"
MIA - LAS,53753439618,MIA-LAS-SEA 3,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/53753439618,https://www.airlines-manager.com/aircraft/show/105093927,15:00,1:29,338,"$716,711.00","$649,535.00","$1,921.70","$61,958.82"
MIA - LAS,53768887146,MIA-LAS-SEA 4,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/53768887146,https://www.airlines-manager.com/aircraft/show/105093928,22:30,8:59,338,"$716,711.00","$649,535.00","$1,921.70","$61,958.82"
MIA - LAX,53722247032,MIA-LAX-DEN 1,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/53722247032,https://www.airlines-manager.com/aircraft/show/91126649,0:00,10:59,400,"$917,458.00","$823,986.00","$2,059.97","$75,021.49"
MIA - LAX,53722247033,MIA-LAX-DEN 2,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/53722247033,https://www.airlines-manager.com/aircraft/show/91126650,2:00,12:59,400,"$917,458.00","$823,986.00","$2,059.97","$75,021.49"
MIA - LAX,53742109033,MIA-LAX-DEN 3,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/53742109033,https://www.airlines-manager.com/aircraft/show/91126651,10:00,20:59,400,"$917,458.00","$823,986.00","$2,059.97","$75,021.49"
MIA - LAX,53742109034,MIA-LAX-DEN 5 E,A319-100,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/53742109034,https://www.airlines-manager.com/aircraft/show/115181776,11:00,22:14,216,"$537,212.00","$475,849.00","$2,203.00","$42,360.45"
MIA - LAX,53758909763,MIA-LAX-DEN 4,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/53758909763,https://www.airlines-manager.com/aircraft/show/91126652,16:30,3:29,400,"$917,458.00","$823,986.00","$2,059.97","$75,021.49"
MIA - LEX,53722247428,MIA-CID-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/53722247428,https://www.airlines-manager.com/aircraft/show/116789653,3:00,8:29,310,"$348,601.00","$317,916.00","$1,025.54","$57,978.60"
MIA - LEX,53742108949,MIA-CID-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/53742108949,https://www.airlines-manager.com/aircraft/show/116789650,10:00,15:29,310,"$348,601.00","$317,916.00","$1,025.54","$57,978.60"
MIA - LEX,53753439610,MIA-CID-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/53753439610,https://www.airlines-manager.com/aircraft/show/116789651,15:00,20:29,310,"$348,601.00","$317,916.00","$1,025.54","$57,978.60"
MIA - LEX,53764392568,MIA-CID-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/53764392568,https://www.airlines-manager.com/aircraft/show/116789652,19:45,1:14,299,"$341,355.00","$310,936.00","$1,039.92","$56,705.65"
MIA - LIT,53722247365,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/53722247365,https://www.airlines-manager.com/aircraft/show/96692674,2:15,7:59,310,"$360,566.00","$328,179.00","$1,058.64","$57,240.52"
MIA - LIT,53722247366,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/53722247366,https://www.airlines-manager.com/aircraft/show/105601657,4:15,9:59,112,"$171,082.00","$150,007.00","$1,339.35","$26,164.01"
MIA - LIT,53735281251,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/53735281251,https://www.airlines-manager.com/aircraft/show/94886625,8:15,13:59,310,"$360,566.00","$328,179.00","$1,058.64","$57,240.52"
MIA - LIT,53753439591,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/53753439591,https://www.airlines-manager.com/aircraft/show/94886629,15:00,20:44,310,"$360,566.00","$328,179.00","$1,058.64","$57,240.52"
MIA - LIT,53768886995,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/53768886995,https://www.airlines-manager.com/aircraft/show/94886626,21:30,3:14,303,"$355,770.00","$323,564.00","$1,067.87","$56,435.58"
MIA - LOS,53735281160,MIA 84A-5 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/53735281160,https://www.airlines-manager.com/aircraft/show/93704215,6:45,4:59,1124,"$4,253,118.00","$3,953,671.00","$3,517.50","$177,826.28"
MIA - LOS,53764392564,MIA 84A-1 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/53764392564,https://www.airlines-manager.com/aircraft/show/93686969,19:45,17:59,1115,"$4,194,315.00","$3,897,224.00","$3,495.27","$175,287.44"
MIA - MBJ,53722247149,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/53722247149,https://www.airlines-manager.com/aircraft/show/104034460,0:45,4:59,228,"$191,738.00","$170,412.00",$747.42,"$40,254.80"
MIA - MBJ,53722247150,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/53722247150,https://www.airlines-manager.com/aircraft/show/104034461,5:00,9:14,228,"$191,738.00","$170,412.00",$747.42,"$40,254.80"
MIA - MBJ,53742108887,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/53742108887,https://www.airlines-manager.com/aircraft/show/107577220,9:00,13:14,0,"$65,799.00","$47,711.00",#DIV/0!,"$11,270.31"
MIA - MBJ,53742108888,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/53742108888,https://www.airlines-manager.com/aircraft/show/104034459,10:00,14:14,228,"$191,738.00","$170,412.00",$747.42,"$40,254.80"
MIA - MBJ,53747970709,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/53747970709,https://www.airlines-manager.com/aircraft/show/104034457,12:45,16:59,228,"$191,738.00","$170,412.00",$747.42,"$40,254.80"
MIA - MBJ,53758909845,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/53758909845,https://www.airlines-manager.com/aircraft/show/104034458,17:00,21:14,228,"$191,738.00","$170,412.00",$747.42,"$40,254.80"
MIA - MBJ,53768887202,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/53768887202,https://www.airlines-manager.com/aircraft/show/99326789,23:00,3:14,228,"$191,738.00","$170,412.00",$747.42,"$40,254.80"
MIA - MCI,53722247162,MIA-ELP-MCI 3,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/53722247162,https://www.airlines-manager.com/aircraft/show/91806232,0:45,7:44,320,"$446,817.00","$401,234.00","$1,253.86","$57,455.94"
MIA - MCI,53722247163,MIA-ELP-MCI 4,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/53722247163,https://www.airlines-manager.com/aircraft/show/91806231,1:30,8:29,320,"$446,817.00","$401,234.00","$1,253.86","$57,455.94"
MIA - MCI,53742108977,MIA-ELP-MCI 2,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/53742108977,https://www.airlines-manager.com/aircraft/show/91806235,10:00,16:59,320,"$446,817.00","$401,234.00","$1,253.86","$57,455.94"
MIA - MCI,53758909952,MIA-ELP-MCI 1,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/53758909952,https://www.airlines-manager.com/aircraft/show/91806234,18:30,1:29,320,"$446,817.00","$401,234.00","$1,253.86","$57,455.94"
MIA - MCI,53764392443,MIA-ELP-MCI 5 B,A319-100,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/53764392443,https://www.airlines-manager.com/aircraft/show/105093924,19:00,1:59,198,"$337,670.00","$305,278.00","$1,541.81","$43,715.23"
MIA - MCO,53722247061,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/53722247061,https://www.airlines-manager.com/aircraft/show/107763565,0:15,2:59,320,"$122,006.00","$84,784.00",$264.95,"$31,018.54"
MIA - MCO,53722247062,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/53722247062,https://www.airlines-manager.com/aircraft/show/107467213,4:00,6:44,112,"$54,851.00","$35,679.00",$318.56,"$13,053.29"
MIA - MCO,53735281120,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/53735281120,https://www.airlines-manager.com/aircraft/show/103534663,6:00,8:44,112,"$54,851.00","$35,679.00",$318.56,"$13,053.29"
MIA - MCO,53742108924,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/53742108924,https://www.airlines-manager.com/aircraft/show/103534663,9:15,11:59,112,"$54,851.00","$35,679.00",$318.56,"$13,053.29"
MIA - MCO,53742108925,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/53742108925,https://www.airlines-manager.com/aircraft/show/107763566,10:00,12:44,320,"$122,006.00","$84,784.00",$264.95,"$31,018.54"
MIA - MCO,53742108926,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/53742108926,https://www.airlines-manager.com/aircraft/show/107763561,11:00,13:44,320,"$122,006.00","$84,784.00",$264.95,"$31,018.54"
MIA - MCO,53758909904,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/53758909904,https://www.airlines-manager.com/aircraft/show/107763562,17:45,20:29,320,"$122,006.00","$84,784.00",$264.95,"$31,018.54"
MIA - MEM,53722247023,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/53722247023,https://www.airlines-manager.com/aircraft/show/110582842,0:00,5:29,198,"$262,187.00","$234,418.00","$1,183.93","$42,751.00"
MIA - MEM,53722247024,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/53722247024,https://www.airlines-manager.com/aircraft/show/88239556,3:00,8:29,320,"$345,253.00","$305,664.00",$955.20,"$55,744.19"
MIA - MEM,53735281224,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/53735281224,https://www.airlines-manager.com/aircraft/show/88494374,7:45,13:14,320,"$345,253.00","$305,664.00",$955.20,"$55,744.19"
MIA - MEM,53753439470,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/53753439470,https://www.airlines-manager.com/aircraft/show/88494378,14:00,19:29,320,"$345,253.00","$305,664.00",$955.20,"$55,744.19"
MIA - MEM,53764392604,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/53764392604,https://www.airlines-manager.com/aircraft/show/91806233,20:00,1:29,320,"$345,253.00","$305,664.00",$955.20,"$55,744.19"
MIA - MHT,53722247242,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/53722247242,https://www.airlines-manager.com/aircraft/show/115493371,1:15,8:14,310,"$452,295.00","$414,040.00","$1,335.61","$59,289.74"
MIA - MHT,53722247243,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/53722247243,https://www.airlines-manager.com/aircraft/show/115493372,3:30,10:29,310,"$452,295.00","$414,040.00","$1,335.61","$59,289.74"
MIA - MHT,53742109123,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/53742109123,https://www.airlines-manager.com/aircraft/show/114912307,11:00,17:59,112,"$213,633.00","$188,436.00","$1,682.46","$26,983.68"
MIA - MHT,53753439478,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/53753439478,https://www.airlines-manager.com/aircraft/show/115493373,14:00,20:59,310,"$452,295.00","$414,040.00","$1,335.61","$59,289.74"
MIA - MHT,53764392450,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/53764392450,https://www.airlines-manager.com/aircraft/show/115493370,19:00,1:59,310,"$452,295.00","$414,040.00","$1,335.61","$59,289.74"
MIA - MKE,53722247096,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/53722247096,https://www.airlines-manager.com/aircraft/show/88494378,0:15,7:14,320,"$446,482.00","$402,355.00","$1,257.36","$57,616.47"
MIA - MKE,53735281123,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/53735281123,https://www.airlines-manager.com/aircraft/show/91806233,6:15,13:14,320,"$446,482.00","$402,355.00","$1,257.36","$57,616.47"
MIA - MKE,53742109132,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/53742109132,https://www.airlines-manager.com/aircraft/show/110582842,11:00,17:59,198,"$337,620.00","$306,185.00","$1,546.39","$43,845.11"
MIA - MKE,53753439465,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/53753439465,https://www.airlines-manager.com/aircraft/show/88239556,14:00,20:59,320,"$446,482.00","$402,355.00","$1,257.36","$57,616.47"
MIA - MKE,53758909985,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/53758909985,https://www.airlines-manager.com/aircraft/show/88494374,18:45,1:44,320,"$446,482.00","$402,355.00","$1,257.36","$57,616.47"
MIA - MSN,53722247307,MIA-RAP-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/53722247307,https://www.airlines-manager.com/aircraft/show/116789625,1:45,8:59,320,"$449,929.00","$407,356.00","$1,272.99","$56,316.50"
MIA - MSN,53735281221,MIA-RAP-GRR 5,ERJ-175,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/53735281221,https://www.airlines-manager.com/aircraft/show/116042630,7:45,14:59,112,"$213,319.00","$188,237.00","$1,680.69","$26,023.55"
MIA - MSN,53742108962,MIA-RAP-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/53742108962,https://www.airlines-manager.com/aircraft/show/116789623,10:00,17:14,320,"$449,929.00","$407,356.00","$1,272.99","$56,316.50"
MIA - MSN,53758909785,MIA-RAP-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/53758909785,https://www.airlines-manager.com/aircraft/show/116789624,16:45,23:59,320,"$449,929.00","$407,356.00","$1,272.99","$56,316.50"
MIA - MSN,53758909786,MIA-RAP-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/53758909786,https://www.airlines-manager.com/aircraft/show/116789622,18:45,1:59,320,"$449,929.00","$407,356.00","$1,272.99","$56,316.50"
MIA - MSO,53735281222,MIA-FAT-MSO 2,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/53735281222,https://www.airlines-manager.com/aircraft/show/113101231,7:45,18:59,320,"$697,127.00","$638,148.00","$1,994.21","$56,808.43"
MIA - MSO,53742109152,MIA-FAT-MSO 3,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/53742109152,https://www.airlines-manager.com/aircraft/show/113101234,11:00,22:14,320,"$697,127.00","$638,148.00","$1,994.21","$56,808.43"
MIA - MSO,53764392578,MIA-FAT-MSO 4,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/53764392578,https://www.airlines-manager.com/aircraft/show/113101232,20:00,7:14,320,"$697,127.00","$638,148.00","$1,994.21","$56,808.43"
MIA - MSO,53768887145,MIA-FAT-MSO 1,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/53768887145,https://www.airlines-manager.com/aircraft/show/113101229,22:30,9:44,320,"$697,127.00","$638,148.00","$1,994.21","$56,808.43"
MIA - MSP,53722247345,MIA-JFK-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/53722247345,https://www.airlines-manager.com/aircraft/show/105308267,2:00,9:59,338,"$541,729.00","$493,047.00","$1,458.72","$61,759.54"
MIA - MSP,53722247346,MIA-JFK-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/53722247346,https://www.airlines-manager.com/aircraft/show/105308268,3:00,10:59,338,"$541,729.00","$493,047.00","$1,458.72","$61,759.54"
MIA - MSP,53742108976,MIA-JFK-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/53742108976,https://www.airlines-manager.com/aircraft/show/105308266,10:00,17:59,338,"$541,729.00","$493,047.00","$1,458.72","$61,759.54"
MIA - MSP,53747970733,MIA-JFK-PHX 6,ERJ-175,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/53747970733,https://www.airlines-manager.com/aircraft/show/82683137,13:00,20:59,112,"$236,027.00","$203,069.00","$1,813.12","$25,436.62"
MIA - MSP,53758909941,MIA-JFK-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/53758909941,https://www.airlines-manager.com/aircraft/show/105308265,18:15,2:14,338,"$541,729.00","$493,047.00","$1,458.72","$61,759.54"
MIA - MSP,53768887021,MIA-JFK-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/53768887021,https://www.airlines-manager.com/aircraft/show/105308264,21:45,5:44,338,"$541,729.00","$493,047.00","$1,458.72","$61,759.54"
MIA - MSY,53722247267,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/53722247267,https://www.airlines-manager.com/aircraft/show/91806233,1:30,6:14,320,"$300,043.00","$264,920.00",$827.88,"$55,969.01"
MIA - MSY,53722247268,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/53722247268,https://www.airlines-manager.com/aircraft/show/110582842,5:30,10:14,198,"$228,739.00","$204,246.00","$1,031.55","$43,150.56"
MIA - MSY,53735281275,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/53735281275,https://www.airlines-manager.com/aircraft/show/88239556,8:30,13:14,320,"$300,043.00","$264,920.00",$827.88,"$55,969.01"
MIA - MSY,53753439457,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/53753439457,https://www.airlines-manager.com/aircraft/show/88494374,14:00,18:44,320,"$300,043.00","$264,920.00",$827.88,"$55,969.01"
MIA - MSY,53764392519,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/53764392519,https://www.airlines-manager.com/aircraft/show/88494378,19:30,0:14,320,"$300,043.00","$264,920.00",$827.88,"$55,969.01"
MIA - NAS,53722247353,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/53722247353,https://www.airlines-manager.com/aircraft/show/104034461,2:15,4:59,228,"$78,591.00","$60,620.00",$265.88,"$22,178.05"
MIA - NAS,53735281208,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/53735281208,https://www.airlines-manager.com/aircraft/show/99326789,7:30,10:14,228,"$78,591.00","$60,620.00",$265.88,"$22,178.05"
MIA - NAS,53742108992,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/53742108992,https://www.airlines-manager.com/aircraft/show/104034457,10:00,12:44,228,"$78,591.00","$60,620.00",$265.88,"$22,178.05"
MIA - NAS,53747970882,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/53747970882,https://www.airlines-manager.com/aircraft/show/107577220,13:15,15:59,0,"$34,003.00","$19,794.00",$0.00,"$7,241.71"
MIA - NAS,53753439531,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/53753439531,https://www.airlines-manager.com/aircraft/show/104034458,14:15,16:59,228,"$78,591.00","$60,620.00",$265.88,"$22,178.05"
MIA - NAS,53758909962,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/53758909962,https://www.airlines-manager.com/aircraft/show/104034459,18:30,21:14,228,"$78,591.00","$60,620.00",$265.88,"$22,178.05"
MIA - NAS,53768887038,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/53768887038,https://www.airlines-manager.com/aircraft/show/104034460,22:00,0:44,228,"$78,591.00","$60,620.00",$265.88,"$22,178.05"
MIA - OAK,53722247208,MIA-OAK-SMF 5,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/53722247208,https://www.airlines-manager.com/aircraft/show/91198617,1:00,12:59,320,"$737,460.00","$671,568.00","$2,098.65","$56,041.84"
MIA - OAK,53742109187,MIA-OAK-SMF 1,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/53742109187,https://www.airlines-manager.com/aircraft/show/91198615,11:00,22:59,320,"$737,460.00","$671,568.00","$2,098.65","$56,041.84"
MIA - OAK,53747970780,MIA-OAK-SMF 2,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/53747970780,https://www.airlines-manager.com/aircraft/show/91198619,13:00,0:59,320,"$737,460.00","$671,568.00","$2,098.65","$56,041.84"
MIA - OAK,53753439617,MIA-OAK-SMF 3,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/53753439617,https://www.airlines-manager.com/aircraft/show/91198616,15:00,2:59,320,"$737,460.00","$671,568.00","$2,098.65","$56,041.84"
MIA - OAK,53768887196,MIA-OAK-SMF 4,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/53768887196,https://www.airlines-manager.com/aircraft/show/91198618,23:00,10:59,320,"$737,460.00","$671,568.00","$2,098.65","$56,041.84"
MIA - OKC,53722247310,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/53722247310,https://www.airlines-manager.com/aircraft/show/110883112,1:45,8:29,310,"$430,426.00","$392,795.00","$1,267.08","$58,335.89"
MIA - OKC,53722247311,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/53722247311,https://www.airlines-manager.com/aircraft/show/110883111,4:00,10:44,310,"$430,426.00","$392,795.00","$1,267.08","$58,335.89"
MIA - OKC,53742108969,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/53742108969,https://www.airlines-manager.com/aircraft/show/104353572,10:00,16:44,112,"$202,427.00","$177,716.00","$1,586.75","$26,393.47"
MIA - OKC,53747970731,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/53747970731,https://www.airlines-manager.com/aircraft/show/110883110,13:00,19:44,310,"$430,426.00","$392,795.00","$1,267.08","$58,335.89"
MIA - OKC,53753439546,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/53753439546,https://www.airlines-manager.com/aircraft/show/110883113,14:45,21:29,310,"$430,426.00","$392,795.00","$1,267.08","$58,335.89"
MIA - OMA,53722247390,MIA-BOI-BNA 1,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/53722247390,https://www.airlines-manager.com/aircraft/show/104133006,2:30,9:59,320,"$477,506.00","$432,428.00","$1,351.34","$57,785.48"
MIA - OMA,53735281137,MIA-BOI-BNA 4,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/53735281137,https://www.airlines-manager.com/aircraft/show/103775657,6:30,13:59,320,"$477,506.00","$432,428.00","$1,351.34","$57,785.48"
MIA - OMA,53742108987,MIA-BOI-BNA 3,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/53742108987,https://www.airlines-manager.com/aircraft/show/104020880,10:00,17:29,320,"$477,506.00","$432,428.00","$1,351.34","$57,785.48"
MIA - OMA,53753439631,MIA-BOI-BNA 2,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/53753439631,https://www.airlines-manager.com/aircraft/show/104022609,15:15,22:44,320,"$477,506.00","$432,428.00","$1,351.34","$57,785.48"
MIA - OMA,53758909863,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/53758909863,https://www.airlines-manager.com/aircraft/show/103534663,17:15,0:44,112,"$225,479.00","$198,880.00","$1,775.71","$26,576.39"
MIA - ONT,53722247139,MIA-RNO-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/53722247139,https://www.airlines-manager.com/aircraft/show/90489722,0:30,11:29,320,"$691,257.00","$629,649.00","$1,967.65","$57,327.68"
MIA - ONT,53722247140,MIA-RNO-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/53722247140,https://www.airlines-manager.com/aircraft/show/86238756,2:30,13:29,320,"$691,257.00","$629,649.00","$1,967.65","$57,327.68"
MIA - ONT,53742109199,MIA-RNO-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/53742109199,https://www.airlines-manager.com/aircraft/show/90489723,11:00,21:59,320,"$691,257.00","$629,649.00","$1,967.65","$57,327.68"
MIA - ONT,53753439476,MIA-RNO-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/53753439476,https://www.airlines-manager.com/aircraft/show/105223010,14:00,0:59,198,"$519,083.00","$474,343.00","$2,395.67","$43,187.53"
MIA - ONT,53768887133,MIA-RNO-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/53768887133,https://www.airlines-manager.com/aircraft/show/86238755,22:30,9:29,320,"$691,257.00","$629,649.00","$1,967.65","$57,327.68"
MIA - ORD,53722247450,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/53722247450,https://www.airlines-manager.com/aircraft/show/91600935,3:15,9:59,310,"$423,914.00","$364,109.00","$1,174.55","$54,075.59"
MIA - ORD,53722247451,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/53722247451,https://www.airlines-manager.com/aircraft/show/91600938,4:15,10:59,310,"$423,914.00","$364,109.00","$1,174.55","$54,075.59"
MIA - ORD,53742108902,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/53742108902,https://www.airlines-manager.com/aircraft/show/82543123,9:00,15:44,112,"$199,175.00","$161,198.00","$1,439.27","$23,940.30"
MIA - ORD,53742108903,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/53742108903,https://www.airlines-manager.com/aircraft/show/91600937,11:00,17:44,310,"$423,914.00","$364,109.00","$1,174.55","$54,075.59"
MIA - ORD,53753439541,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/53753439541,https://www.airlines-manager.com/aircraft/show/91600939,14:45,21:29,310,"$423,914.00","$364,109.00","$1,174.55","$54,075.59"
MIA - ORD,53753439542,MIA-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/53753439542,https://www.airlines-manager.com/aircraft/show/106339154,15:30,22:14,198,"$319,739.00","$271,843.00","$1,372.94","$40,372.72"
MIA - ORD,53764392767,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/53764392767,https://www.airlines-manager.com/aircraft/show/91600936,20:45,3:29,310,"$423,914.00","$364,109.00","$1,174.55","$54,075.59"
MIA - ORF,53722247097,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/53722247097,https://www.airlines-manager.com/aircraft/show/114912307,0:15,5:29,112,"$157,418.00","$137,445.00","$1,227.19","$26,263.38"
MIA - ORF,53722247098,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/53722247098,https://www.airlines-manager.com/aircraft/show/115493373,3:15,8:29,310,"$331,248.00","$300,298.00",$968.70,"$57,381.78"
MIA - ORF,53735281250,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/53735281250,https://www.airlines-manager.com/aircraft/show/115493370,8:15,13:29,310,"$331,248.00","$300,298.00",$968.70,"$57,381.78"
MIA - ORF,53753439606,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/53753439606,https://www.airlines-manager.com/aircraft/show/115493371,15:00,20:14,310,"$331,248.00","$300,298.00",$968.70,"$57,381.78"
MIA - ORF,53758909859,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/53758909859,https://www.airlines-manager.com/aircraft/show/115493372,17:15,22:29,310,"$331,248.00","$300,298.00",$968.70,"$57,381.78"
MIA - PDX,53742109012,MIA-PDX-DTW 1,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/53742109012,https://www.airlines-manager.com/aircraft/show/89943715,10:00,22:29,320,"$771,170.00","$700,853.00","$2,190.17","$56,143.10"
MIA - PDX,53747970715,MIA-PDX-DTW 3,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/53747970715,https://www.airlines-manager.com/aircraft/show/89943713,13:00,1:29,320,"$771,170.00","$700,853.00","$2,190.17","$56,143.10"
MIA - PDX,53753439486,MIA-PDX-DTW 4,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/53753439486,https://www.airlines-manager.com/aircraft/show/89943712,14:00,2:29,320,"$771,170.00","$700,853.00","$2,190.17","$56,143.10"
MIA - PDX,53764392538,MIA-PDX-DTW 2,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/53764392538,https://www.airlines-manager.com/aircraft/show/89943714,19:30,7:59,320,"$771,170.00","$700,853.00","$2,190.17","$56,143.10"
MIA - PDX,53768887223,MIA-PDX-DTW 5,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/53768887223,https://www.airlines-manager.com/aircraft/show/89943711,23:30,11:59,320,"$771,170.00","$700,853.00","$2,190.17","$56,143.10"
MIA - PHL,53722247515,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/53722247515,https://www.airlines-manager.com/aircraft/show/91600939,4:00,9:59,310,"$379,784.00","$338,009.00","$1,090.35","$56,491.75"
MIA - PHL,53722247516,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/53722247516,https://www.airlines-manager.com/aircraft/show/91600937,5:00,10:59,310,"$379,784.00","$338,009.00","$1,090.35","$56,491.75"
MIA - PHL,53742109030,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/53742109030,https://www.airlines-manager.com/aircraft/show/91600936,10:00,15:59,310,"$379,784.00","$338,009.00","$1,090.35","$56,491.75"
MIA - PHL,53758909771,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/53758909771,https://www.airlines-manager.com/aircraft/show/91600935,16:30,22:29,310,"$379,784.00","$338,009.00","$1,090.35","$56,491.75"
MIA - PHL,53758909772,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/53758909772,https://www.airlines-manager.com/aircraft/show/91600938,17:30,23:29,310,"$379,784.00","$338,009.00","$1,090.35","$56,491.75"
MIA - PHL,53768887120,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/53768887120,https://www.airlines-manager.com/aircraft/show/82543123,22:15,4:14,112,"$179,528.00","$152,690.00","$1,363.30","$25,519.22"
MIA - PHX,53722247077,MIA-JFK-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/53722247077,https://www.airlines-manager.com/aircraft/show/105308266,0:15,9:59,338,"$670,464.00","$611,759.00","$1,809.94","$62,851.95"
MIA - PHX,53722247078,MIA-JFK-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/53722247078,https://www.airlines-manager.com/aircraft/show/105308265,2:15,11:59,338,"$670,464.00","$611,759.00","$1,809.94","$62,851.95"
MIA - PHX,53742109166,MIA-JFK-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/53742109166,https://www.airlines-manager.com/aircraft/show/105308268,11:00,20:44,338,"$670,464.00","$611,759.00","$1,809.94","$62,851.95"
MIA - PHX,53747970660,MIA-JFK-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/53747970660,https://www.airlines-manager.com/aircraft/show/105308264,12:00,21:44,338,"$670,464.00","$611,759.00","$1,809.94","$62,851.95"
MIA - PHX,53753439701,MIA-JFK-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/53753439701,https://www.airlines-manager.com/aircraft/show/105308267,16:15,1:59,338,"$670,464.00","$611,759.00","$1,809.94","$62,851.95"
MIA - PHX,53764392776,MIA-JFK-PHX 6,ERJ-175,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/53764392776,https://www.airlines-manager.com/aircraft/show/82683137,21:00,6:44,112,"$290,059.00","$249,922.00","$2,231.45","$25,676.92"
MIA - PIT,53722247452,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/53722247452,https://www.airlines-manager.com/aircraft/show/99920624,3:15,9:14,320,"$381,330.00","$339,654.00","$1,061.42","$56,766.69"
MIA - PIT,53742109006,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/53742109006,https://www.airlines-manager.com/aircraft/show/99920625,10:00,15:59,320,"$381,330.00","$339,654.00","$1,061.42","$56,766.69"
MIA - PIT,53758909762,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/53758909762,https://www.airlines-manager.com/aircraft/show/99920626,16:30,22:29,320,"$381,330.00","$339,654.00","$1,061.42","$56,766.69"
MIA - PIT,53764392737,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/53764392737,https://www.airlines-manager.com/aircraft/show/82323689,20:30,2:29,112,"$180,264.00","$156,468.00","$1,397.04","$26,150.64"
MIA - PIT,53764392740,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/53764392740,https://www.airlines-manager.com/aircraft/show/99920623,21:15,3:14,320,"$381,330.00","$339,654.00","$1,061.42","$56,766.69"
MIA - PLS,53722247453,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/53722247453,https://www.airlines-manager.com/aircraft/show/99326789,3:15,7:29,228,"$205,523.00","$184,430.00",$808.90,"$43,566.14"
MIA - PLS,53722247454,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/53722247454,https://www.airlines-manager.com/aircraft/show/104034460,5:00,9:14,228,"$205,523.00","$184,430.00",$808.90,"$43,566.14"
MIA - PLS,53742108991,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/53742108991,https://www.airlines-manager.com/aircraft/show/104034458,10:00,14:14,228,"$205,523.00","$184,430.00",$808.90,"$43,566.14"
MIA - PLS,53753439528,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/53753439528,https://www.airlines-manager.com/aircraft/show/104034459,14:15,18:29,228,"$205,523.00","$184,430.00",$808.90,"$43,566.14"
MIA - PLS,53758909825,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/53758909825,https://www.airlines-manager.com/aircraft/show/104034457,17:00,21:14,228,"$205,523.00","$184,430.00",$808.90,"$43,566.14"
MIA - PLS,53768887037,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/53768887037,https://www.airlines-manager.com/aircraft/show/104034461,22:00,2:14,228,"$205,523.00","$184,430.00",$808.90,"$43,566.14"
MIA - POS,53747970700,MIA 84B-1 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/53747970700,https://www.airlines-manager.com/aircraft/show/106676225,12:30,20:29,962,"$1,335,429.00","$1,218,322.00","$1,266.45","$152,608.18"
MIA - POS,53753439672,MIA 84B-6 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/53753439672,https://www.airlines-manager.com/aircraft/show/106676230,16:00,23:59,727,"$1,099,136.00","$994,924.00","$1,368.53","$124,625.14"
MIA - PSP,53722247341,MIA-PSP-BFF 5,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/53722247341,https://www.airlines-manager.com/aircraft/show/116789630,2:00,12:44,320,"$659,420.00","$601,722.00","$1,880.38","$56,061.06"
MIA - PSP,53742108957,MIA-PSP-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/53742108957,https://www.airlines-manager.com/aircraft/show/116789631,10:00,20:44,320,"$659,420.00","$601,722.00","$1,880.38","$56,061.06"
MIA - PSP,53753439463,MIA-PSP-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/53753439463,https://www.airlines-manager.com/aircraft/show/116789634,14:00,0:44,320,"$659,420.00","$601,722.00","$1,880.38","$56,061.06"
MIA - PSP,53753439464,MIA-PSP-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/53753439464,https://www.airlines-manager.com/aircraft/show/116789632,14:15,0:59,320,"$659,420.00","$601,722.00","$1,880.38","$56,061.06"
MIA - PSP,53768887199,MIA-PSP-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/53768887199,https://www.airlines-manager.com/aircraft/show/116789633,23:00,9:44,239,"$555,842.00","$503,003.00","$2,104.62","$46,863.63"
MIA - PUJ,53722247482,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/53722247482,https://www.airlines-manager.com/aircraft/show/104034458,3:30,9:14,228,"$275,787.00","$249,167.00","$1,092.84","$43,459.36"
MIA - PUJ,53742108988,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/53742108988,https://www.airlines-manager.com/aircraft/show/104034461,10:00,15:44,228,"$275,787.00","$249,167.00","$1,092.84","$43,459.36"
MIA - PUJ,53753439674,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/53753439674,https://www.airlines-manager.com/aircraft/show/107577220,16:00,21:44,0,"$94,907.00","$71,312.00",$0.00,"$12,438.14"
MIA - PUJ,53753439675,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/53753439675,https://www.airlines-manager.com/aircraft/show/104034460,16:15,21:59,228,"$275,787.00","$249,167.00","$1,092.84","$43,459.36"
MIA - PUJ,53758909846,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/53758909846,https://www.airlines-manager.com/aircraft/show/99326789,17:15,22:59,228,"$275,787.00","$249,167.00","$1,092.84","$43,459.36"
MIA - PUJ,53764392815,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/53764392815,https://www.airlines-manager.com/aircraft/show/104034457,21:15,2:59,228,"$275,787.00","$249,167.00","$1,092.84","$43,459.36"
MIA - PUJ,53768887036,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/53768887036,https://www.airlines-manager.com/aircraft/show/104034459,22:00,3:44,228,"$275,787.00","$249,167.00","$1,092.84","$43,459.36"
MIA - PVD,53722247240,MIA-BUR-PVD 3,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/53722247240,https://www.airlines-manager.com/aircraft/show/108834805,1:15,7:59,310,"$425,919.00","$389,690.00","$1,257.06","$57,874.75"
MIA - PVD,53735281191,MIA-BUR-PVD 5 B,A319-100,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/53735281191,https://www.airlines-manager.com/aircraft/show/108834807,7:15,13:59,198,"$321,428.00","$292,393.00","$1,476.73","$43,424.70"
MIA - PVD,53742109146,MIA-BUR-PVD 2,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/53742109146,https://www.airlines-manager.com/aircraft/show/108834804,11:00,17:44,310,"$425,919.00","$389,690.00","$1,257.06","$57,874.75"
MIA - PVD,53758909834,MIA-BUR-PVD 4,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/53758909834,https://www.airlines-manager.com/aircraft/show/108834806,17:00,23:44,310,"$425,919.00","$389,690.00","$1,257.06","$57,874.75"
MIA - PVD,53768887097,MIA-BUR-PVD 1,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/53768887097,https://www.airlines-manager.com/aircraft/show/108834803,22:15,4:59,310,"$425,919.00","$389,690.00","$1,257.06","$57,874.75"
MIA - PWM,53735281204,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/53735281204,https://www.airlines-manager.com/aircraft/show/94886629,7:30,14:59,310,"$466,211.00","$428,287.00","$1,381.57","$57,232.12"
MIA - PWM,53753439485,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/53753439485,https://www.airlines-manager.com/aircraft/show/94886626,14:00,21:29,310,"$466,211.00","$428,287.00","$1,381.57","$57,232.12"
MIA - PWM,53758909986,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/53758909986,https://www.airlines-manager.com/aircraft/show/96692674,18:45,2:14,310,"$466,211.00","$428,287.00","$1,381.57","$57,232.12"
MIA - PWM,53764392769,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/53764392769,https://www.airlines-manager.com/aircraft/show/105601657,20:45,4:14,112,"$220,140.00","$195,020.00","$1,741.25","$26,060.58"
MIA - PWM,53770850192,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/53770850192,https://www.airlines-manager.com/aircraft/show/94886625,23:45,7:14,310,"$466,211.00","$428,287.00","$1,381.57","$57,232.12"
MIA - RAP,53722246994,MIA-RAP-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/53722246994,https://www.airlines-manager.com/aircraft/show/116789624,0:00,8:59,320,"$561,298.00","$511,354.00","$1,597.98","$56,922.52"
MIA - RAP,53722246995,MIA-RAP-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/53722246995,https://www.airlines-manager.com/aircraft/show/116789622,2:00,10:59,320,"$561,298.00","$511,354.00","$1,597.98","$56,922.52"
MIA - RAP,53742108955,MIA-RAP-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/53742108955,https://www.airlines-manager.com/aircraft/show/116789625,10:00,18:59,320,"$561,298.00","$511,354.00","$1,597.98","$56,922.52"
MIA - RAP,53753439603,MIA-RAP-GRR 5,ERJ-175,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/53753439603,https://www.airlines-manager.com/aircraft/show/116042630,15:00,23:59,112,"$264,806.00","$234,612.00","$2,094.75","$26,116.36"
MIA - RAP,53758909847,MIA-RAP-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/53758909847,https://www.airlines-manager.com/aircraft/show/116789623,17:15,2:14,320,"$561,298.00","$511,354.00","$1,597.98","$56,922.52"
MIA - RDU,53722247540,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/53722247540,https://www.airlines-manager.com/aircraft/show/99920626,4:30,9:14,320,"$309,466.00","$273,290.00",$854.03,"$57,737.32"
MIA - RDU,53735281261,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/53735281261,https://www.airlines-manager.com/aircraft/show/82323689,8:30,13:14,112,"$147,399.00","$127,266.00","$1,136.30","$26,887.18"
MIA - RDU,53742109004,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/53742109004,https://www.airlines-manager.com/aircraft/show/99920623,10:00,14:44,320,"$309,466.00","$273,290.00",$854.03,"$57,737.32"
MIA - RDU,53753439689,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/53753439689,https://www.airlines-manager.com/aircraft/show/99920624,16:00,20:44,320,"$309,466.00","$273,290.00",$854.03,"$57,737.32"
MIA - RDU,53768887047,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/53768887047,https://www.airlines-manager.com/aircraft/show/99920625,22:00,2:44,320,"$309,466.00","$273,290.00",$854.03,"$57,737.32"
MIA - RIC,53735281265,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/53735281265,https://www.airlines-manager.com/aircraft/show/110883112,8:30,13:44,310,"$335,679.00","$304,397.00",$981.93,"$58,165.03"
MIA - RIC,53742109135,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/53742109135,https://www.airlines-manager.com/aircraft/show/110883111,11:00,16:14,310,"$335,679.00","$304,397.00",$981.93,"$58,165.03"
MIA - RIC,53758909788,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/53758909788,https://www.airlines-manager.com/aircraft/show/104353572,16:45,21:59,112,"$159,561.00","$139,347.00","$1,244.17","$26,626.82"
MIA - RIC,53764392570,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/53764392570,https://www.airlines-manager.com/aircraft/show/110883110,19:45,0:59,310,"$335,679.00","$304,397.00",$981.93,"$58,165.03"
MIA - RIC,53768886999,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/53768886999,https://www.airlines-manager.com/aircraft/show/110883113,21:30,2:44,310,"$335,679.00","$304,397.00",$981.93,"$58,165.03"
MIA - RNO,53722247194,MIA-RNO-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/53722247194,https://www.airlines-manager.com/aircraft/show/105223010,1:00,12:44,198,"$543,785.00","$497,948.00","$2,514.89","$42,438.75"
MIA - RNO,53742109204,MIA-RNO-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/53742109204,https://www.airlines-manager.com/aircraft/show/86238755,11:00,22:29,320,"$721,868.00","$659,017.00","$2,059.43","$57,389.00"
MIA - RNO,53747970773,MIA-RNO-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/53747970773,https://www.airlines-manager.com/aircraft/show/90489722,13:00,0:29,320,"$721,868.00","$659,017.00","$2,059.43","$57,389.00"
MIA - RNO,53753439604,MIA-RNO-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/53753439604,https://www.airlines-manager.com/aircraft/show/86238756,15:00,2:29,320,"$721,868.00","$659,017.00","$2,059.43","$57,389.00"
MIA - RNO,53768887042,MIA-RNO-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/53768887042,https://www.airlines-manager.com/aircraft/show/90489723,22:00,9:29,320,"$721,868.00","$659,017.00","$2,059.43","$57,389.00"
MIA - RSW,53722247500,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/53722247500,https://www.airlines-manager.com/aircraft/show/110114297,4:00,6:29,228,"$65,659.00","$47,406.00",$207.92,"$19,089.66"
MIA - RSW,53742108922,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/53742108922,https://www.airlines-manager.com/aircraft/show/110114295,9:15,11:44,228,"$65,659.00","$47,406.00",$207.92,"$19,089.66"
MIA - RSW,53742108923,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/53742108923,https://www.airlines-manager.com/aircraft/show/110114296,10:15,12:44,228,"$65,659.00","$47,406.00",$207.92,"$19,089.66"
MIA - RSW,53753439417,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/53753439417,https://www.airlines-manager.com/aircraft/show/110114300,14:00,16:29,228,"$65,659.00","$47,406.00",$207.92,"$19,089.66"
MIA - RSW,53764392780,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/53764392780,https://www.airlines-manager.com/aircraft/show/110114299,21:00,23:29,228,"$65,659.00","$47,406.00",$207.92,"$19,089.66"
MIA - RSW,53768887204,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/53768887204,https://www.airlines-manager.com/aircraft/show/110114298,23:00,1:29,228,"$65,659.00","$47,406.00",$207.92,"$19,089.66"
MIA - SAN,53722247301,MIA-BWI-YYZ 2,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/53722247301,https://www.airlines-manager.com/aircraft/show/92153440,1:45,12:44,310,"$686,006.00","$629,207.00","$2,029.70","$57,287.44"
MIA - SAN,53742109024,MIA-BWI-YYZ 3,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/53742109024,https://www.airlines-manager.com/aircraft/show/92153441,10:00,20:59,310,"$686,006.00","$629,207.00","$2,029.70","$57,287.44"
MIA - SAN,53747970684,MIA-BWI-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/53747970684,https://www.airlines-manager.com/aircraft/show/92137503,12:00,22:59,136,"$299,558.00","$265,819.00","$1,954.55","$24,202.03"
MIA - SAN,53758909804,MIA-BWI-YYZ 4,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/53758909804,https://www.airlines-manager.com/aircraft/show/92153442,17:00,3:59,310,"$686,006.00","$629,207.00","$2,029.70","$57,287.44"
MIA - SAN,53764392447,MIA-BWI-YYZ 5,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/53764392447,https://www.airlines-manager.com/aircraft/show/92153439,19:00,5:59,310,"$686,006.00","$629,207.00","$2,029.70","$57,287.44"
MIA - SAN,53768887184,MIA-BWI-YYZ 1,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/53768887184,https://www.airlines-manager.com/aircraft/show/92153443,22:45,9:44,310,"$686,006.00","$629,207.00","$2,029.70","$57,287.44"
MIA - SAT,53722247456,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/53722247456,https://www.airlines-manager.com/aircraft/show/107763562,3:15,9:44,320,"$410,437.00","$369,153.00","$1,153.60","$56,938.77"
MIA - SAT,53742109149,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/53742109149,https://www.airlines-manager.com/aircraft/show/107763565,11:00,17:29,320,"$410,437.00","$369,153.00","$1,153.60","$56,938.77"
MIA - SAT,53753439547,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/53753439547,https://www.airlines-manager.com/aircraft/show/107467213,14:45,21:14,112,"$193,677.00","$169,711.00","$1,515.28","$26,176.50"
MIA - SAT,53764392723,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/53764392723,https://www.airlines-manager.com/aircraft/show/107763561,20:30,2:59,320,"$410,437.00","$369,153.00","$1,153.60","$56,938.77"
MIA - SAT,53764392725,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/53764392725,https://www.airlines-manager.com/aircraft/show/107763566,20:45,3:14,320,"$410,437.00","$369,153.00","$1,153.60","$56,938.77"
MIA - SAV,53722247103,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/53722247103,https://www.airlines-manager.com/aircraft/show/110883111,0:15,3:59,310,"$214,539.00","$189,268.00",$610.54,"$50,696.79"
MIA - SAV,53735281089,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/53735281089,https://www.airlines-manager.com/aircraft/show/104353572,6:00,9:44,112,"$100,203.00","$84,270.00",$752.41,"$22,572.32"
MIA - SAV,53742108898,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/53742108898,https://www.airlines-manager.com/aircraft/show/110883110,9:00,12:44,310,"$214,539.00","$189,268.00",$610.54,"$50,696.79"
MIA - SAV,53742108899,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/53742108899,https://www.airlines-manager.com/aircraft/show/110883113,11:00,14:44,310,"$214,539.00","$189,268.00",$610.54,"$50,696.79"
MIA - SAV,53768887050,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/53768887050,https://www.airlines-manager.com/aircraft/show/110883112,22:00,1:44,267,"$197,041.00","$172,290.00",$645.28,"$46,149.11"
MIA - SDF,53722247161,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/53722247161,https://www.airlines-manager.com/aircraft/show/94886629,0:45,6:29,310,"$354,795.00","$320,429.00","$1,033.64","$55,888.78"
MIA - SDF,53735281252,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/53735281252,https://www.airlines-manager.com/aircraft/show/94886626,8:15,13:59,310,"$354,795.00","$320,429.00","$1,033.64","$55,888.78"
MIA - SDF,53747970771,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/53747970771,https://www.airlines-manager.com/aircraft/show/96692674,13:00,18:44,310,"$354,795.00","$320,429.00","$1,033.64","$55,888.78"
MIA - SDF,53753439557,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/53753439557,https://www.airlines-manager.com/aircraft/show/105601657,15:00,20:44,112,"$167,661.00","$145,448.00","$1,298.64","$25,368.84"
MIA - SDF,53753439558,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/53753439558,https://www.airlines-manager.com/aircraft/show/107527976,15:45,21:29,0,"$94,306.00","$70,011.00",$0.00,"$12,211.22"
MIA - SDF,53758909936,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/53758909936,https://www.airlines-manager.com/aircraft/show/94886625,18:00,23:44,310,"$346,824.00","$313,959.00","$1,012.77","$54,760.29"
MIA - SEA,53722247260,MIA-LAS-SEA 3,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/53722247260,https://www.airlines-manager.com/aircraft/show/105093927,1:30,13:59,338,"$830,781.00","$762,732.00","$2,256.60","$61,100.03"
MIA - SEA,53742108979,MIA-LAS-SEA 4,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/53742108979,https://www.airlines-manager.com/aircraft/show/105093928,10:00,22:29,338,"$830,781.00","$762,732.00","$2,256.60","$61,100.03"
MIA - SEA,53747970738,MIA-LAS-SEA 5,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/53747970738,https://www.airlines-manager.com/aircraft/show/105093929,13:00,1:29,338,"$830,781.00","$762,732.00","$2,256.60","$61,100.03"
MIA - SEA,53764392729,MIA-LAS-SEA 1,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/53764392729,https://www.airlines-manager.com/aircraft/show/105093925,20:30,8:59,338,"$830,781.00","$762,732.00","$2,256.60","$61,100.03"
MIA - SEA,53768887152,MIA-LAS-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/53768887152,https://www.airlines-manager.com/aircraft/show/113251304,22:30,11:14,198,"$575,630.00","$518,353.00","$2,617.94","$40,708.35"
MIA - SEA,53768887153,MIA-LAS-SEA 2,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/53768887153,https://www.airlines-manager.com/aircraft/show/105093926,23:30,11:59,338,"$830,781.00","$762,732.00","$2,256.60","$61,100.03"
MIA - SJC,53722247312,MIA-SJC-YYC 5,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/53722247312,https://www.airlines-manager.com/aircraft/show/107763563,1:45,13:44,320,"$731,356.00","$665,189.00","$2,078.72","$55,509.51"
MIA - SJC,53747970642,MIA-SJC-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/53747970642,https://www.airlines-manager.com/aircraft/show/107763569,12:00,23:59,320,"$731,356.00","$665,189.00","$2,078.72","$55,509.51"
MIA - SJC,53753439441,MIA-SJC-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/53753439441,https://www.airlines-manager.com/aircraft/show/107763568,14:00,1:59,320,"$731,356.00","$665,189.00","$2,078.72","$55,509.51"
MIA - SJC,53753439442,MIA-SJC-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/53753439442,https://www.airlines-manager.com/aircraft/show/107763567,16:00,3:59,320,"$731,356.00","$665,189.00","$2,078.72","$55,509.51"
MIA - SJC,53770850185,MIA-SJC-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/53770850185,https://www.airlines-manager.com/aircraft/show/107763564,23:45,11:44,320,"$731,356.00","$665,189.00","$2,078.72","$55,509.51"
MIA - SJU,53722247459,MIA-SJU-BOS 6 B,A319-100,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/53722247459,https://www.airlines-manager.com/aircraft/show/110582841,3:15,9:29,198,"$286,648.00","$257,583.00","$1,300.92","$41,323.48"
MIA - SJU,53742109098,MIA-SJU-BOS 2,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/53742109098,https://www.airlines-manager.com/aircraft/show/91352062,10:15,16:29,310,"$379,953.00","$343,678.00","$1,108.64","$55,135.51"
MIA - SJU,53747970693,MIA-SJU-BOS 3,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/53747970693,https://www.airlines-manager.com/aircraft/show/91352061,12:15,18:29,310,"$379,953.00","$343,678.00","$1,108.64","$55,135.51"
MIA - SJU,53758909944,MIA-SJU-BOS 4,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/53758909944,https://www.airlines-manager.com/aircraft/show/91352060,18:15,0:29,310,"$379,953.00","$343,678.00","$1,108.64","$55,135.51"
MIA - SJU,53764392491,MIA-SJU-BOS 5,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/53764392491,https://www.airlines-manager.com/aircraft/show/91352059,19:15,1:29,310,"$379,953.00","$343,678.00","$1,108.64","$55,135.51"
MIA - SJU,53768887185,MIA-SJU-BOS 1,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/53768887185,https://www.airlines-manager.com/aircraft/show/91352063,22:45,4:59,272,"$338,619.00","$303,704.00","$1,116.56","$48,722.57"
MIA - SKB,53722247272,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/53722247272,https://www.airlines-manager.com/aircraft/show/110114298,1:30,8:29,228,"$343,701.00","$314,172.00","$1,377.95","$44,988.83"
MIA - SKB,53722247273,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/53722247273,https://www.airlines-manager.com/aircraft/show/110114295,2:15,9:14,228,"$343,701.00","$314,172.00","$1,377.95","$44,988.83"
MIA - SKB,53722247274,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/53722247274,https://www.airlines-manager.com/aircraft/show/110114296,3:15,10:14,228,"$343,701.00","$314,172.00","$1,377.95","$44,988.83"
MIA - SKB,53735281162,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/53735281162,https://www.airlines-manager.com/aircraft/show/110114300,6:45,13:44,228,"$343,701.00","$314,172.00","$1,377.95","$44,988.83"
MIA - SKB,53753439418,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/53753439418,https://www.airlines-manager.com/aircraft/show/110114299,14:00,20:59,228,"$343,701.00","$314,172.00","$1,377.95","$44,988.83"
MIA - SKB,53764392779,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/53764392779,https://www.airlines-manager.com/aircraft/show/110114297,21:00,3:59,228,"$343,701.00","$314,172.00","$1,377.95","$44,988.83"
MIA - SLC,53722247036,MIA-SJU-BOS 2,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/53722247036,https://www.airlines-manager.com/aircraft/show/91352062,0:00,10:14,310,"$641,266.00","$583,680.00","$1,882.84","$57,037.13"
MIA - SLC,53722247037,MIA-SJU-BOS 4,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/53722247037,https://www.airlines-manager.com/aircraft/show/91352060,1:00,11:14,310,"$641,266.00","$583,680.00","$1,882.84","$57,037.13"
MIA - SLC,53722247038,MIA-SJU-BOS 3,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/53722247038,https://www.airlines-manager.com/aircraft/show/91352061,2:00,12:14,310,"$641,266.00","$583,680.00","$1,882.84","$57,037.13"
MIA - SLC,53742108900,MIA-SJU-BOS 5,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/53742108900,https://www.airlines-manager.com/aircraft/show/91352059,9:00,19:14,310,"$641,266.00","$583,680.00","$1,882.84","$57,037.13"
MIA - SLC,53742108901,MIA-SJU-BOS 6 B,A319-100,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/53742108901,https://www.airlines-manager.com/aircraft/show/110582841,10:00,20:14,198,"$481,931.00","$435,772.00","$2,200.87","$42,583.58"
MIA - SLC,53747970666,MIA-SJU-BOS 1,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/53747970666,https://www.airlines-manager.com/aircraft/show/91352063,12:00,22:14,310,"$641,266.00","$583,680.00","$1,882.84","$57,037.13"
MIA - SMF,53722247209,MIA-OAK-SMF 2,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/53722247209,https://www.airlines-manager.com/aircraft/show/91198619,1:00,12:59,320,"$731,563.00","$667,531.00","$2,086.03","$55,704.95"
MIA - SMF,53722247210,MIA-OAK-SMF 3,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/53722247210,https://www.airlines-manager.com/aircraft/show/91198616,3:00,14:59,320,"$731,563.00","$667,531.00","$2,086.03","$55,704.95"
MIA - SMF,53742109176,MIA-OAK-SMF 4,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/53742109176,https://www.airlines-manager.com/aircraft/show/91198618,11:00,22:59,320,"$731,563.00","$667,531.00","$2,086.03","$55,704.95"
MIA - SMF,53747970778,MIA-OAK-SMF 5,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/53747970778,https://www.airlines-manager.com/aircraft/show/91198617,13:00,0:59,320,"$731,563.00","$667,531.00","$2,086.03","$55,704.95"
MIA - SMF,53768887195,MIA-OAK-SMF 1,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/53768887195,https://www.airlines-manager.com/aircraft/show/91198615,23:00,10:59,320,"$731,563.00","$667,531.00","$2,086.03","$55,704.95"
MIA - STL,53722247262,MIA-ELP-MCI 1,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/53722247262,https://www.airlines-manager.com/aircraft/show/91806234,1:30,7:44,320,"$391,361.00","$347,788.00","$1,086.84","$55,794.87"
MIA - STL,53722247263,MIA-ELP-MCI 5 B,A319-100,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/53722247263,https://www.airlines-manager.com/aircraft/show/105093924,2:00,8:14,198,"$296,098.00","$265,339.00","$1,340.10","$42,567.75"
MIA - STL,53722247264,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/53722247264,https://www.airlines-manager.com/aircraft/show/107527976,3:15,9:29,0,"$102,664.00","$75,323.00",$0.00,"$12,083.90"
MIA - STL,53735281256,MIA-ELP-MCI 4,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/53735281256,https://www.airlines-manager.com/aircraft/show/91806231,8:30,14:44,320,"$391,361.00","$347,788.00","$1,086.84","$55,794.87"
MIA - STL,53742108981,MIA-ELP-MCI 3,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/53742108981,https://www.airlines-manager.com/aircraft/show/91806232,10:00,16:14,320,"$391,361.00","$347,788.00","$1,086.84","$55,794.87"
MIA - STL,53758909833,MIA-ELP-MCI 2,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/53758909833,https://www.airlines-manager.com/aircraft/show/91806235,17:00,23:14,320,"$391,361.00","$347,788.00","$1,086.84","$55,794.87"
MIA - SXM,53735281167,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/53735281167,https://www.airlines-manager.com/aircraft/show/110114299,6:45,13:44,228,"$333,459.00","$304,653.00","$1,336.20","$43,625.73"
MIA - SXM,53753439419,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/53753439419,https://www.airlines-manager.com/aircraft/show/110114297,14:00,20:59,228,"$333,459.00","$304,653.00","$1,336.20","$43,625.73"
MIA - SXM,53753439420,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/53753439420,https://www.airlines-manager.com/aircraft/show/110114298,16:00,22:59,228,"$333,459.00","$304,653.00","$1,336.20","$43,625.73"
MIA - SXM,53764392500,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/53764392500,https://www.airlines-manager.com/aircraft/show/110114295,19:15,2:14,228,"$333,459.00","$304,653.00","$1,336.20","$43,625.73"
MIA - SXM,53764392501,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/53764392501,https://www.airlines-manager.com/aircraft/show/110114296,20:15,3:14,228,"$333,459.00","$304,653.00","$1,336.20","$43,625.73"
MIA - SXM,53770850179,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/53770850179,https://www.airlines-manager.com/aircraft/show/110114300,23:45,6:44,228,"$333,459.00","$304,653.00","$1,336.20","$43,625.73"
MIA - TPA,53722247551,MIA-BUR-PVD 1,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/53722247551,https://www.airlines-manager.com/aircraft/show/108834803,5:00,7:59,310,"$127,616.00","$101,600.00",$327.74,"$34,055.87"
MIA - TPA,53742109145,MIA-BUR-PVD 3,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/53742109145,https://www.airlines-manager.com/aircraft/show/108834805,11:00,13:59,310,"$127,616.00","$101,600.00",$327.74,"$34,055.87"
MIA - TPA,53758909835,MIA-BUR-PVD 5 B,A319-100,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/53758909835,https://www.airlines-manager.com/aircraft/show/108834807,17:00,19:59,198,"$95,236.00","$74,415.00",$375.83,"$24,943.58"
MIA - TPA,53758909836,MIA-BUR-PVD 2,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/53758909836,https://www.airlines-manager.com/aircraft/show/108834804,17:45,20:44,310,"$127,616.00","$101,600.00",$327.74,"$34,055.87"
MIA - TPA,53770850187,MIA-BUR-PVD 4,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/53770850187,https://www.airlines-manager.com/aircraft/show/108834806,23:45,2:44,310,"$127,616.00","$101,600.00",$327.74,"$34,055.87"
MIA - TUL,53722247151,MIA-FAR-TUL 2,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/53722247151,https://www.airlines-manager.com/aircraft/show/110883160,0:45,7:29,320,"$415,861.00","$374,420.00","$1,170.06","$55,606.93"
MIA - TUL,53722247152,MIA-FAR-TUL 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/53722247152,https://www.airlines-manager.com/aircraft/show/87169421,3:00,9:44,112,"$196,167.00","$172,043.00","$1,536.10","$25,550.94"
MIA - TUL,53742109137,MIA-FAR-TUL 3,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/53742109137,https://www.airlines-manager.com/aircraft/show/110883161,11:00,17:44,320,"$415,861.00","$374,420.00","$1,170.06","$55,606.93"
MIA - TUL,53753439683,MIA-FAR-TUL 4,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/53753439683,https://www.airlines-manager.com/aircraft/show/110883162,16:00,22:44,320,"$415,861.00","$374,420.00","$1,170.06","$55,606.93"
MIA - TUL,53764392546,MIA-FAR-TUL 1,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/53764392546,https://www.airlines-manager.com/aircraft/show/110883159,19:45,2:29,320,"$415,861.00","$374,420.00","$1,170.06","$55,606.93"
MIA - TUS,53722247120,MIA-IAD-TUS 3,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/53722247120,https://www.airlines-manager.com/aircraft/show/97556719,0:30,9:59,310,"$591,231.00","$542,626.00","$1,750.41","$57,218.91"
MIA - TUS,53742109009,MIA-IAD-TUS 2,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/53742109009,https://www.airlines-manager.com/aircraft/show/97556720,10:00,19:29,310,"$591,231.00","$542,626.00","$1,750.41","$57,218.91"
MIA - TUS,53747970751,MIA-IAD-TUS 5,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/53747970751,https://www.airlines-manager.com/aircraft/show/97556716,13:00,22:29,310,"$591,231.00","$542,626.00","$1,750.41","$57,218.91"
MIA - TUS,53753439645,MIA-IAD-TUS 1,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/53753439645,https://www.airlines-manager.com/aircraft/show/97556721,15:45,1:14,310,"$591,231.00","$542,626.00","$1,750.41","$57,218.91"
MIA - TUS,53758909970,MIA-IAD-TUS 4,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/53758909970,https://www.airlines-manager.com/aircraft/show/97556718,18:45,4:14,310,"$591,231.00","$542,626.00","$1,750.41","$57,218.91"
MIA - TYS,53722247467,MIA-CID-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/53722247467,https://www.airlines-manager.com/aircraft/show/116789650,3:30,8:29,310,"$314,403.00","$285,010.00",$919.39,"$57,192.64"
MIA - TYS,53742108950,MIA-CID-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/53742108950,https://www.airlines-manager.com/aircraft/show/116789651,10:00,14:59,310,"$314,403.00","$285,010.00",$919.39,"$57,192.64"
MIA - TYS,53753439543,MIA-CID-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/53753439543,https://www.airlines-manager.com/aircraft/show/116789652,14:45,19:44,310,"$314,403.00","$285,010.00",$919.39,"$57,192.64"
MIA - TYS,53768887031,MIA-CID-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/53768887031,https://www.airlines-manager.com/aircraft/show/116789653,22:00,2:59,310,"$314,403.00","$285,010.00",$919.39,"$57,192.64"
MIA - YUL,53735281138,MIA-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/53735281138,https://www.airlines-manager.com/aircraft/show/113101225,6:30,13:59,400,"$628,165.00","$573,858.00","$1,434.65","$76,684.81"
MIA - YUL,53742109144,MIA-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/53742109144,https://www.airlines-manager.com/aircraft/show/113101226,11:00,18:29,400,"$628,165.00","$573,858.00","$1,434.65","$76,684.81"
MIA - YUL,53753439579,MIA-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/53753439579,https://www.airlines-manager.com/aircraft/show/113101227,15:00,22:29,400,"$628,165.00","$573,858.00","$1,434.65","$76,684.81"
MIA - YUL,53770850180,MIA-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/53770850180,https://www.airlines-manager.com/aircraft/show/113101224,23:45,7:14,400,"$628,165.00","$573,858.00","$1,434.65","$76,684.81"
MIA - YVR,53742109142,MIA-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/53742109142,https://www.airlines-manager.com/aircraft/show/113101224,11:00,23:44,400,"$1,044,001.00","$959,355.00","$2,398.39","$75,342.02"
MIA - YVR,53753439508,MIA-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/53753439508,https://www.airlines-manager.com/aircraft/show/113101225,14:00,2:44,400,"$1,044,001.00","$959,355.00","$2,398.39","$75,342.02"
MIA - YVR,53758909967,MIA-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/53758909967,https://www.airlines-manager.com/aircraft/show/113101226,18:30,7:14,400,"$1,044,001.00","$959,355.00","$2,398.39","$75,342.02"
MIA - YVR,53768887154,MIA-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/53768887154,https://www.airlines-manager.com/aircraft/show/113101227,22:30,11:14,400,"$1,044,001.00","$959,355.00","$2,398.39","$75,342.02"
MIA - YYC,53722247010,MIA-SJC-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/53722247010,https://www.airlines-manager.com/aircraft/show/107763569,0:00,11:44,320,"$729,765.00","$661,169.00","$2,066.15","$56,349.63"
MIA - YYC,53722247011,MIA-SJC-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/53722247011,https://www.airlines-manager.com/aircraft/show/107763568,2:00,13:44,320,"$729,765.00","$661,169.00","$2,066.15","$56,349.63"
MIA - YYC,53722247012,MIA-SJC-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/53722247012,https://www.airlines-manager.com/aircraft/show/107763567,4:00,15:44,320,"$729,765.00","$661,169.00","$2,066.15","$56,349.63"
MIA - YYC,53747970669,MIA-SJC-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/53747970669,https://www.airlines-manager.com/aircraft/show/107763564,12:00,23:44,320,"$729,765.00","$661,169.00","$2,066.15","$56,349.63"
MIA - YYC,53753439449,MIA-SJC-YYC 5,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/53753439449,https://www.airlines-manager.com/aircraft/show/107763563,14:00,1:44,320,"$729,765.00","$661,169.00","$2,066.15","$56,349.63"
MIA - YYZ,53722247412,MIA-BWI-YYZ 3,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/53722247412,https://www.airlines-manager.com/aircraft/show/92153441,2:45,9:44,310,"$441,120.00","$394,380.00","$1,272.19","$56,474.46"
MIA - YYZ,53722247413,MIA-BWI-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/53722247413,https://www.airlines-manager.com/aircraft/show/92137503,4:45,11:44,136,"$191,110.00","$163,252.00","$1,200.38","$23,377.37"
MIA - YYZ,53742109025,MIA-BWI-YYZ 4,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/53742109025,https://www.airlines-manager.com/aircraft/show/92153442,10:00,16:59,310,"$441,120.00","$394,380.00","$1,272.19","$56,474.46"
MIA - YYZ,53747970686,MIA-BWI-YYZ 5,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/53747970686,https://www.airlines-manager.com/aircraft/show/92153439,12:00,18:59,310,"$441,120.00","$394,380.00","$1,272.19","$56,474.46"
MIA - YYZ,53753439646,MIA-BWI-YYZ 1,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/53753439646,https://www.airlines-manager.com/aircraft/show/92153443,15:45,22:44,310,"$441,120.00","$394,380.00","$1,272.19","$56,474.46"
MIA - YYZ,53758909981,MIA-BWI-YYZ 2,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/53758909981,https://www.airlines-manager.com/aircraft/show/92153440,18:45,1:44,310,"$441,120.00","$394,380.00","$1,272.19","$56,474.46"
SFO - ABQ,53735281286,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/53735281286,https://www.airlines-manager.com/aircraft/show/88239553,8:45,14:14,320,"$349,794.00","$309,743.00",$967.95,"$56,488.09"
SFO - ABQ,53735281287,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/53735281287,https://www.airlines-manager.com/aircraft/show/105223003,8:45,14:14,198,"$265,648.00","$237,518.00","$1,199.59","$43,316.35"
SFO - ABQ,53742109112,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/53742109112,https://www.airlines-manager.com/aircraft/show/88239557,10:30,15:59,320,"$349,794.00","$309,743.00",$967.95,"$56,488.09"
SFO - ABQ,53753439555,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/53753439555,https://www.airlines-manager.com/aircraft/show/88239555,15:00,20:29,320,"$349,794.00","$309,743.00",$967.95,"$56,488.09"
SFO - ABQ,53768887165,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/53768887165,https://www.airlines-manager.com/aircraft/show/88239554,22:45,4:14,320,"$349,794.00","$309,743.00",$967.95,"$56,488.09"
SFO - ALB,53722247129,SFO-ALB-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/53722247129,https://www.airlines-manager.com/aircraft/show/112650097,0:30,12:29,310,"$733,764.00","$677,600.00","$2,185.81","$56,545.20"
SFO - ALB,53722247130,SFO-ALB-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/53722247130,https://www.airlines-manager.com/aircraft/show/112650096,5:30,17:29,310,"$733,764.00","$677,600.00","$2,185.81","$56,545.20"
SFO - ALB,53735281214,SFO-ALB-CAK 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/53735281214,https://www.airlines-manager.com/aircraft/show/112650090,7:30,19:29,198,"$548,975.00","$503,934.00","$2,545.12","$42,052.91"
SFO - ALB,53753439511,SFO-ALB-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/53753439511,https://www.airlines-manager.com/aircraft/show/112650099,14:00,1:59,310,"$733,764.00","$677,600.00","$2,185.81","$56,545.20"
SFO - ALB,53758909920,SFO-ALB-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/53758909920,https://www.airlines-manager.com/aircraft/show/112650098,18:00,5:59,310,"$733,764.00","$677,600.00","$2,185.81","$56,545.20"
SFO - ANC,53722247381,SFO-BWI-ANC 4,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/53722247381,https://www.airlines-manager.com/aircraft/show/106255848,2:30,12:14,338,"$662,649.00","$614,605.00","$1,818.36","$63,144.35"
SFO - ANC,53722247382,SFO-BWI-ANC 5,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/53722247382,https://www.airlines-manager.com/aircraft/show/106255849,3:30,13:14,338,"$662,649.00","$614,605.00","$1,818.36","$63,144.35"
SFO - ANC,53764392470,SFO-BWI-ANC 1,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/53764392470,https://www.airlines-manager.com/aircraft/show/106255845,19:00,4:44,338,"$662,649.00","$614,605.00","$1,818.36","$63,144.35"
SFO - ANC,53764392471,SFO-BWI-ANC 2,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/53764392471,https://www.airlines-manager.com/aircraft/show/106255846,20:00,5:44,338,"$662,649.00","$614,605.00","$1,818.36","$63,144.35"
SFO - ANC,53764392472,SFO-BWI-ANC 3,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/53764392472,https://www.airlines-manager.com/aircraft/show/106255847,21:00,6:44,338,"$662,649.00","$614,605.00","$1,818.36","$63,144.35"
SFO - ATL,53735281157,SFO 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/53735281157,https://www.airlines-manager.com/aircraft/show/85806724,6:45,16:29,932,"$1,616,492.00","$1,420,224.00","$1,523.85","$145,913.42"
SFO - ATL,53753439577,SFO-ATL-DFW S,A321-200,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/53753439577,https://www.airlines-manager.com/aircraft/show/106766698,15:00,1:29,232,"$628,938.00","$548,198.00","$2,362.92","$52,292.34"
SFO - ATL,53758909965,SFO 84A-2 E1,777-300,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/53758909965,https://www.airlines-manager.com/aircraft/show/86776211,18:30,4:14,853,"$1,518,842.00","$1,328,273.00","$1,557.18","$136,466.40"
SFO - ATL,53764392584,SFO-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/53764392584,https://www.airlines-manager.com/aircraft/show/107467212,20:00,6:29,56,"$233,404.00","$186,139.00","$3,323.91","$17,755.71"
SFO - AUS,53722247168,SFO-OGG-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/53722247168,https://www.airlines-manager.com/aircraft/show/92773481,0:45,8:44,310,"$500,986.00","$456,733.00","$1,473.33","$57,210.81"
SFO - AUS,53722247169,SFO-OGG-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/53722247169,https://www.airlines-manager.com/aircraft/show/92773480,2:45,10:44,310,"$500,986.00","$456,733.00","$1,473.33","$57,210.81"
SFO - AUS,53747970884,SFO-OGG-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/53747970884,https://www.airlines-manager.com/aircraft/show/92773479,13:30,21:29,310,"$500,986.00","$456,733.00","$1,473.33","$57,210.81"
SFO - AUS,53753439638,SFO-OGG-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/53753439638,https://www.airlines-manager.com/aircraft/show/92773478,15:30,23:29,310,"$500,986.00","$456,733.00","$1,473.33","$57,210.81"
SFO - AUS,53758909968,SFO-OGG-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/53758909968,https://www.airlines-manager.com/aircraft/show/92773477,18:30,2:29,310,"$500,986.00","$456,733.00","$1,473.33","$57,210.81"
SFO - BDL,53722247549,SFO-RSW-BDL 1,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/53722247549,https://www.airlines-manager.com/aircraft/show/84915098,4:45,16:59,320,"$741,734.00","$677,616.00","$2,117.55","$55,390.95"
SFO - BDL,53735281163,SFO-RSW-BDL 2,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/53735281163,https://www.airlines-manager.com/aircraft/show/84915099,6:45,18:59,320,"$741,734.00","$677,616.00","$2,117.55","$55,390.95"
SFO - BDL,53735281164,SFO-RSW-BDL 5,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/53735281164,https://www.airlines-manager.com/aircraft/show/84915102,8:45,20:59,320,"$741,734.00","$677,616.00","$2,117.55","$55,390.95"
SFO - BDL,53758909832,SFO-RSW-BDL 3,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/53758909832,https://www.airlines-manager.com/aircraft/show/84915100,17:00,5:14,320,"$741,734.00","$677,616.00","$2,117.55","$55,390.95"
SFO - BDL,53764392451,SFO-RSW-BDL 4,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/53764392451,https://www.airlines-manager.com/aircraft/show/84915101,19:00,7:14,320,"$741,734.00","$677,616.00","$2,117.55","$55,390.95"
SFO - BFF,53722247188,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/53722247188,https://www.airlines-manager.com/aircraft/show/114912306,1:00,7:14,112,"$183,580.00","$161,191.00","$1,439.21","$25,859.52"
SFO - BFF,53722247189,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/53722247189,https://www.airlines-manager.com/aircraft/show/114912268,2:15,8:29,310,"$389,607.00","$355,311.00","$1,146.16","$57,001.76"
SFO - BFF,53735281253,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/53735281253,https://www.airlines-manager.com/aircraft/show/114912263,8:15,14:29,310,"$389,607.00","$355,311.00","$1,146.16","$57,001.76"
SFO - BFF,53753439666,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/53753439666,https://www.airlines-manager.com/aircraft/show/114912264,16:00,22:14,310,"$389,607.00","$355,311.00","$1,146.16","$57,001.76"
SFO - BFF,53768887226,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/53768887226,https://www.airlines-manager.com/aircraft/show/114912267,23:30,5:44,310,"$389,607.00","$355,311.00","$1,146.16","$57,001.76"
SFO - BHM,53722247570,SFO-BHM-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/53722247570,https://www.airlines-manager.com/aircraft/show/117782568,5:30,15:29,320,"$621,859.00","$567,764.00","$1,774.26","$56,871.19"
SFO - BHM,53735281184,SFO-BHM-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/53735281184,https://www.airlines-manager.com/aircraft/show/117782569,7:00,16:59,320,"$621,859.00","$567,764.00","$1,774.26","$56,871.19"
SFO - BHM,53753439611,SFO-BHM-GRR 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/53753439611,https://www.airlines-manager.com/aircraft/show/117782583,15:00,0:59,198,"$468,047.00","$428,770.00","$2,165.51","$42,948.58"
SFO - BHM,53764392551,SFO-BHM-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/53764392551,https://www.airlines-manager.com/aircraft/show/117782567,19:45,5:44,320,"$621,859.00","$567,764.00","$1,774.26","$56,871.19"
SFO - BHM,53768887046,SFO-BHM-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/53768887046,https://www.airlines-manager.com/aircraft/show/117782566,22:00,7:59,320,"$621,859.00","$567,764.00","$1,774.26","$56,871.19"
SFO - BIL,53722247356,SFO-FAR-BIL 4,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/53722247356,https://www.airlines-manager.com/aircraft/show/117782587,2:15,7:59,310,"$355,725.00","$323,542.00","$1,043.68","$56,431.74"
SFO - BIL,53742108919,SFO-FAR-BIL 3,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/53742108919,https://www.airlines-manager.com/aircraft/show/117782586,9:15,14:59,310,"$355,725.00","$323,542.00","$1,043.68","$56,431.74"
SFO - BIL,53753439607,SFO-FAR-BIL 2,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/53753439607,https://www.airlines-manager.com/aircraft/show/117782585,15:00,20:44,310,"$355,725.00","$323,542.00","$1,043.68","$56,431.74"
SFO - BIL,53768887177,SFO-FAR-BIL 1,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/53768887177,https://www.airlines-manager.com/aircraft/show/117782584,22:45,4:29,307,"$353,713.00","$321,604.00","$1,047.57","$56,093.72"
SFO - BNA,53722247235,SFO-BNA-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/53722247235,https://www.airlines-manager.com/aircraft/show/103365580,1:15,10:59,320,"$605,610.00","$549,333.00","$1,716.67","$56,438.32"
SFO - BNA,53735281099,SFO-BNA-CMH 6,ERJ-175,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/53735281099,https://www.airlines-manager.com/aircraft/show/82323681,6:00,15:44,112,"$285,056.00","$251,196.00","$2,242.82","$25,807.81"
SFO - BNA,53747970790,SFO-BNA-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/53747970790,https://www.airlines-manager.com/aircraft/show/103365583,13:00,22:44,320,"$605,610.00","$549,333.00","$1,716.67","$56,438.32"
SFO - BNA,53753439552,SFO-BNA-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/53753439552,https://www.airlines-manager.com/aircraft/show/103365582,15:00,0:44,320,"$605,610.00","$549,333.00","$1,716.67","$56,438.32"
SFO - BNA,53753439553,SFO-BNA-CMH 5,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/53753439553,https://www.airlines-manager.com/aircraft/show/103365579,15:45,1:29,320,"$605,610.00","$549,333.00","$1,716.67","$56,438.32"
SFO - BNA,53768887207,SFO-BNA-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/53768887207,https://www.airlines-manager.com/aircraft/show/103365581,23:15,8:59,320,"$605,610.00","$549,333.00","$1,716.67","$56,438.32"
SFO - BOI,53722247241,SFO-CLE-MKE 2,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/53722247241,https://www.airlines-manager.com/aircraft/show/92519369,1:15,5:29,320,"$247,187.00","$216,452.00",$676.41,"$51,130.39"
SFO - BOI,53742108946,SFO-CLE-MKE 1,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/53742108946,https://www.airlines-manager.com/aircraft/show/92519368,9:45,13:59,320,"$247,187.00","$216,452.00",$676.41,"$51,130.39"
SFO - BOI,53753439539,SFO-CLE-MKE 4,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/53753439539,https://www.airlines-manager.com/aircraft/show/92519371,14:45,18:59,320,"$247,187.00","$216,452.00",$676.41,"$51,130.39"
SFO - BOI,53753439540,SFO-CLE-MKE 3,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/53753439540,https://www.airlines-manager.com/aircraft/show/92519367,16:00,20:14,320,"$247,187.00","$216,452.00",$676.41,"$51,130.39"
SFO - BOS,53722247079,SFO-BOS-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/53722247079,https://www.airlines-manager.com/aircraft/show/104864961,0:15,12:44,338,"$837,724.00","$774,367.00","$2,291.03","$62,032.07"
SFO - BOS,53747970670,SFO CARGO 2,737-700,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/53747970670,https://www.airlines-manager.com/aircraft/show/107573128,12:00,0:29,0,"$212,591.00","$161,688.00",$0.00,"$12,952.31"
SFO - BOS,53747970671,SFO-BOS-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/53747970671,https://www.airlines-manager.com/aircraft/show/104901564,13:00,1:29,338,"$837,724.00","$774,367.00","$2,291.03","$62,032.07"
SFO - BOS,53753439483,SFO-BOS-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/53753439483,https://www.airlines-manager.com/aircraft/show/104870960,14:00,2:29,338,"$837,724.00","$774,367.00","$2,291.03","$62,032.07"
SFO - BOS,53753439484,SFO-BOS-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/53753439484,https://www.airlines-manager.com/aircraft/show/104874465,15:45,4:14,338,"$837,724.00","$774,367.00","$2,291.03","$62,032.07"
SFO - BOS,53764392712,SFO-BOS-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/53764392712,https://www.airlines-manager.com/aircraft/show/104901544,20:15,8:44,338,"$837,724.00","$774,367.00","$2,291.03","$62,032.07"
SFO - BTV,53722247051,SFO-BTV-LEX 4,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/53722247051,https://www.airlines-manager.com/aircraft/show/112650092,0:00,11:59,310,"$729,848.00","$673,863.00","$2,173.75","$56,233.35"
SFO - BTV,53735281102,SFO-BTV-LEX 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/53735281102,https://www.airlines-manager.com/aircraft/show/112650089,6:00,17:59,198,"$546,636.00","$501,737.00","$2,534.03","$41,869.57"
SFO - BTV,53753439438,SFO-BTV-LEX 1,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/53753439438,https://www.airlines-manager.com/aircraft/show/112650095,14:00,1:59,310,"$729,848.00","$673,863.00","$2,173.75","$56,233.35"
SFO - BTV,53758909918,SFO-BTV-LEX 2,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/53758909918,https://www.airlines-manager.com/aircraft/show/112650094,18:00,5:59,310,"$729,848.00","$673,863.00","$2,173.75","$56,233.35"
SFO - BTV,53764392583,SFO-BTV-LEX 3,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/53764392583,https://www.airlines-manager.com/aircraft/show/112650093,20:00,7:59,310,"$729,848.00","$673,863.00","$2,173.75","$56,233.35"
SFO - BUF,53722247287,SFO-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/53722247287,https://www.airlines-manager.com/aircraft/show/112650108,1:30,12:29,310,"$687,067.00","$633,609.00","$2,043.90","$57,688.22"
SFO - BUF,53722247288,SFO-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/53722247288,https://www.airlines-manager.com/aircraft/show/112650107,5:30,16:29,310,"$687,067.00","$633,609.00","$2,043.90","$57,688.22"
SFO - BUF,53735281215,SFO-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/53735281215,https://www.airlines-manager.com/aircraft/show/112650106,7:30,18:29,310,"$687,067.00","$633,609.00","$2,043.90","$57,688.22"
SFO - BUF,53747970736,SFO-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/53747970736,https://www.airlines-manager.com/aircraft/show/112650105,13:00,23:59,310,"$687,067.00","$633,609.00","$2,043.90","$57,688.22"
SFO - BUF,53758909919,SFO-PVD-BUF 5,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/53758909919,https://www.airlines-manager.com/aircraft/show/112650104,18:00,4:59,310,"$687,067.00","$633,609.00","$2,043.90","$57,688.22"
SFO - BUR,53722247369,SFO-SAV-JAN 1,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/53722247369,https://www.airlines-manager.com/aircraft/show/114912265,2:15,5:44,310,"$173,461.00","$150,951.00",$486.94,"$43,335.22"
SFO - BUR,53722247370,SFO-SAV-JAN 4,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/53722247370,https://www.airlines-manager.com/aircraft/show/114912270,4:15,7:44,310,"$173,461.00","$150,951.00",$486.94,"$43,335.22"
SFO - BUR,53747970608,SFO-SAV-JAN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/53747970608,https://www.airlines-manager.com/aircraft/show/114917486,11:30,14:59,198,"$130,719.00","$112,697.00",$569.18,"$32,353.21"
SFO - BUR,53753439634,SFO-SAV-JAN 3,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/53753439634,https://www.airlines-manager.com/aircraft/show/114912269,15:30,18:59,310,"$173,461.00","$150,951.00",$486.94,"$43,335.22"
SFO - BUR,53758909810,SFO-SAV-JAN 2,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/53758909810,https://www.airlines-manager.com/aircraft/show/114912266,17:00,20:29,310,"$173,461.00","$150,951.00",$486.94,"$43,335.22"
SFO - BWI,53722247106,SFO CARGO 2,737-700,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/53722247106,https://www.airlines-manager.com/aircraft/show/107573128,0:30,11:59,0,"$197,440.00","$150,701.00",#DIV/0!,"$13,123.45"
SFO - BWI,53722247107,SFO-BWI-ANC 1,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/53722247107,https://www.airlines-manager.com/aircraft/show/106255845,4:45,16:14,338,"$785,039.00","$726,656.00","$2,149.87","$63,279.19"
SFO - BWI,53735281078,SFO-BWI-ANC 2,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/53735281078,https://www.airlines-manager.com/aircraft/show/106255846,5:45,17:14,338,"$785,039.00","$726,656.00","$2,149.87","$63,279.19"
SFO - BWI,53735281079,SFO-BWI-ANC 3,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/53735281079,https://www.airlines-manager.com/aircraft/show/106255847,6:45,18:14,338,"$785,039.00","$726,656.00","$2,149.87","$63,279.19"
SFO - BWI,53753439594,SFO-BWI-ANC 4,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/53753439594,https://www.airlines-manager.com/aircraft/show/106255848,15:00,2:29,338,"$785,039.00","$726,656.00","$2,149.87","$63,279.19"
SFO - BWI,53753439595,SFO-BWI-ANC 5,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/53753439595,https://www.airlines-manager.com/aircraft/show/106255849,16:00,3:29,338,"$785,039.00","$726,656.00","$2,149.87","$63,279.19"
SFO - CAK,53722247348,SFO-ALB-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/53722247348,https://www.airlines-manager.com/aircraft/show/112650099,2:00,12:29,310,"$657,886.00","$607,712.00","$1,960.36","$57,969.35"
SFO - CAK,53735281088,SFO-ALB-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/53735281088,https://www.airlines-manager.com/aircraft/show/112650098,6:00,16:29,310,"$657,886.00","$607,712.00","$1,960.36","$57,969.35"
SFO - CAK,53753439510,SFO-ALB-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/53753439510,https://www.airlines-manager.com/aircraft/show/112650097,14:00,0:29,310,"$657,886.00","$607,712.00","$1,960.36","$57,969.35"
SFO - CAK,53764392482,SFO-ALB-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/53764392482,https://www.airlines-manager.com/aircraft/show/112650096,19:00,5:29,310,"$657,886.00","$607,712.00","$1,960.36","$57,969.35"
SFO - CAK,53764392483,SFO-ALB-CAK 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/53764392483,https://www.airlines-manager.com/aircraft/show/112650090,21:00,7:29,198,"$494,289.00","$454,056.00","$2,293.21","$43,312.18"
SFO - CHS,53722247265,SFO-MHT-CHS 1,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/53722247265,https://www.airlines-manager.com/aircraft/show/114917465,1:30,12:44,320,"$701,616.00","$642,467.00","$2,007.71","$57,192.91"
SFO - CHS,53722247266,SFO-MHT-CHS 2,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/53722247266,https://www.airlines-manager.com/aircraft/show/114917464,5:30,16:44,320,"$701,616.00","$642,467.00","$2,007.71","$57,192.91"
SFO - CHS,53735281278,SFO-MHT-CHS 5 B,A319-100,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/53735281278,https://www.airlines-manager.com/aircraft/show/114912262,8:30,19:59,198,"$529,189.00","$485,932.00","$2,454.20","$42,316.28"
SFO - CHS,53747970755,SFO-MHT-CHS 3,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/53747970755,https://www.airlines-manager.com/aircraft/show/114917463,13:00,0:14,320,"$701,616.00","$642,467.00","$2,007.71","$57,192.91"
SFO - CHS,53758909812,SFO-MHT-CHS 4,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/53758909812,https://www.airlines-manager.com/aircraft/show/114266973,17:00,4:14,320,"$701,616.00","$642,467.00","$2,007.71","$57,192.91"
SFO - CID,53722247254,SFO-YEG-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/53722247254,https://www.airlines-manager.com/aircraft/show/117782561,1:30,9:59,320,"$528,124.00","$481,175.00","$1,503.67","$56,720.04"
SFO - CID,53735281142,SFO-YEG-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/53735281142,https://www.airlines-manager.com/aircraft/show/116932364,6:30,14:59,320,"$528,124.00","$481,175.00","$1,503.67","$56,720.04"
SFO - CID,53747970730,SFO-YEG-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/53747970730,https://www.airlines-manager.com/aircraft/show/117782559,13:00,21:29,320,"$528,124.00","$481,175.00","$1,503.67","$56,720.04"
SFO - CID,53764392480,SFO-YEG-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/53764392480,https://www.airlines-manager.com/aircraft/show/117782560,19:00,3:29,320,"$528,124.00","$481,175.00","$1,503.67","$56,720.04"
SFO - CID,53764392481,SFO-YEG-YYC 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/53764392481,https://www.airlines-manager.com/aircraft/show/117782581,21:00,5:29,198,"$399,077.00","$365,143.00","$1,844.16","$43,042.40"
SFO - CLE,53722247569,SFO-CLE-MKE 2,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/53722247569,https://www.airlines-manager.com/aircraft/show/92519369,5:30,15:59,320,"$650,843.00","$593,124.00","$1,853.51","$56,577.81"
SFO - CLE,53735281139,SFO-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/53735281139,https://www.airlines-manager.com/aircraft/show/107467212,6:30,16:59,112,"$305,917.00","$270,776.00","$2,417.64","$25,829.19"
SFO - CLE,53735281140,SFO-CLE-MKE 5,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/53735281140,https://www.airlines-manager.com/aircraft/show/92519370,7:30,17:59,320,"$650,843.00","$593,124.00","$1,853.51","$56,577.81"
SFO - CLE,53753439477,SFO-CLE-MKE 1,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/53753439477,https://www.airlines-manager.com/aircraft/show/92519368,14:00,0:29,320,"$650,843.00","$593,124.00","$1,853.51","$56,577.81"
SFO - CLE,53764392423,SFO-CLE-MKE 4,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/53764392423,https://www.airlines-manager.com/aircraft/show/92519371,19:00,5:29,320,"$650,843.00","$593,124.00","$1,853.51","$56,577.81"
SFO - CLE,53764392427,SFO-CLE-MKE 3,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/53764392427,https://www.airlines-manager.com/aircraft/show/92519367,20:15,6:44,320,"$650,843.00","$593,124.00","$1,853.51","$56,577.81"
SFO - CLT,53722247009,SFO-IAD-CLT 3,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/53722247009,https://www.airlines-manager.com/aircraft/show/96135563,0:00,10:44,400,"$889,119.00","$809,154.00","$2,022.89","$75,387.02"
SFO - CLT,53735281108,SFO-IAD-CLT 4,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/53735281108,https://www.airlines-manager.com/aircraft/show/96135562,6:00,16:44,400,"$889,119.00","$809,154.00","$2,022.89","$75,387.02"
SFO - CLT,53747970873,SFO-IAD-CLT 1,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/53747970873,https://www.airlines-manager.com/aircraft/show/96135565,13:15,23:59,400,"$889,119.00","$809,154.00","$2,022.89","$75,387.02"
SFO - CLT,53753439632,SFO-IAD-CLT 5,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/53753439632,https://www.airlines-manager.com/aircraft/show/96135561,15:15,1:59,400,"$889,119.00","$809,154.00","$2,022.89","$75,387.02"
SFO - CLT,53758909862,SFO-IAD-CLT 2,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/53758909862,https://www.airlines-manager.com/aircraft/show/96135564,17:15,3:59,400,"$889,119.00","$809,154.00","$2,022.89","$75,387.02"
SFO - CMH,53722247147,SFO-BNA-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/53722247147,https://www.airlines-manager.com/aircraft/show/103365582,0:45,10:59,320,"$635,712.00","$578,415.00","$1,807.55","$56,522.64"
SFO - CMH,53722247148,SFO-BNA-CMH 5,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/53722247148,https://www.airlines-manager.com/aircraft/show/103365579,5:30,15:44,320,"$635,712.00","$578,415.00","$1,807.55","$56,522.64"
SFO - CMH,53747970752,SFO-BNA-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/53747970752,https://www.airlines-manager.com/aircraft/show/103365581,13:00,23:14,320,"$635,712.00","$578,415.00","$1,807.55","$56,522.64"
SFO - CMH,53753439550,SFO-BNA-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/53753439550,https://www.airlines-manager.com/aircraft/show/103365580,15:00,1:14,320,"$635,712.00","$578,415.00","$1,807.55","$56,522.64"
SFO - CMH,53753439551,SFO-BNA-CMH 6,ERJ-175,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/53753439551,https://www.airlines-manager.com/aircraft/show/82323681,15:45,1:59,112,"$299,378.00","$264,568.00","$2,362.21","$25,853.55"
SFO - CMH,53768887157,SFO-BNA-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/53768887157,https://www.airlines-manager.com/aircraft/show/103365583,22:45,8:59,320,"$635,712.00","$578,415.00","$1,807.55","$56,522.64"
SFO - CVG,53722247552,SFO-IND-CVG 3,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/53722247552,https://www.airlines-manager.com/aircraft/show/99316504,5:00,14:59,310,"$627,255.00","$574,228.00","$1,852.35","$57,518.66"
SFO - CVG,53735281176,SFO-IND-CVG 5,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/53735281176,https://www.airlines-manager.com/aircraft/show/99316502,7:00,16:59,310,"$627,255.00","$574,228.00","$1,852.35","$57,518.66"
SFO - CVG,53747970830,SFO-IND-CVG 2,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/53747970830,https://www.airlines-manager.com/aircraft/show/99316505,13:00,22:59,310,"$627,255.00","$574,228.00","$1,852.35","$57,518.66"
SFO - CVG,53753439572,SFO-IND-CVG 4,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/53753439572,https://www.airlines-manager.com/aircraft/show/99316503,15:00,0:59,310,"$627,255.00","$574,228.00","$1,852.35","$57,518.66"
SFO - CVG,53758909809,SFO-IND-CVG 6,ERJ-175,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/53758909809,https://www.airlines-manager.com/aircraft/show/99174346,17:00,2:59,112,"$294,167.00","$258,804.00","$2,310.75","$25,923.61"
SFO - CVG,53768887183,SFO-IND-CVG 1,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/53768887183,https://www.airlines-manager.com/aircraft/show/99316506,22:45,8:44,310,"$627,255.00","$574,228.00","$1,852.35","$57,518.66"
SFO - DEL,53722247034,SFO 168B-1 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/53722247034,https://www.airlines-manager.com/aircraft/show/86832727,0:00,5:29,1046,"$5,781,072.00","$5,362,503.00","$5,126.68","$977,964.07"
SFO - DEL,53722247035,SFO 168A-1 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/53722247035,https://www.airlines-manager.com/aircraft/show/86969602,2:00,7:29,1046,"$5,781,072.00","$5,362,503.00","$5,126.68","$977,964.07"
SFO - DEN,53722247076,SFO-IAH-MEX 5,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/53722247076,https://www.airlines-manager.com/aircraft/show/101045335,0:15,5:59,400,"$473,056.00","$405,092.00","$1,012.73","$70,655.58"
SFO - DEN,53735281133,SFO-IAH-MEX 1,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/53735281133,https://www.airlines-manager.com/aircraft/show/101045339,6:30,12:14,400,"$473,056.00","$405,092.00","$1,012.73","$70,655.58"
SFO - DEN,53735281134,SFO-IAH-MEX 4,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/53735281134,https://www.airlines-manager.com/aircraft/show/101045336,8:30,14:14,400,"$473,056.00","$405,092.00","$1,012.73","$70,655.58"
SFO - DEN,53747970799,SFO-IAH-MEX 3,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/53747970799,https://www.airlines-manager.com/aircraft/show/101045337,13:00,18:44,400,"$473,056.00","$405,092.00","$1,012.73","$70,655.58"
SFO - DEN,53768887119,SFO-IAH-MEX 2,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/53768887119,https://www.airlines-manager.com/aircraft/show/101045338,22:15,3:59,376,"$456,354.00","$388,991.00","$1,034.55","$67,847.27"
SFO - DFW,53722247290,SFO-ATL-DFW S,A321-200,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/53722247290,https://www.airlines-manager.com/aircraft/show/106766698,1:30,9:14,232,"$481,033.00","$419,800.00","$1,809.48","$54,284.48"
SFO - DFW,53758909776,SFO 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/53758909776,https://www.airlines-manager.com/aircraft/show/85806724,16:30,23:59,932,"$1,227,311.00","$1,082,216.00","$1,161.18","$144,616.84"
SFO - DFW,53768887221,SFO 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/53768887221,https://www.airlines-manager.com/aircraft/show/85537213,23:15,6:44,738,"$1,046,514.00","$911,001.00","$1,234.42","$121,737.33"
SFO - DSM,53722247531,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/53722247531,https://www.airlines-manager.com/aircraft/show/108410858,4:30,12:29,320,"$506,531.00","$460,693.00","$1,439.67","$57,706.85"
SFO - DSM,53747970762,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/53747970762,https://www.airlines-manager.com/aircraft/show/108410857,13:00,20:59,320,"$506,531.00","$460,693.00","$1,439.67","$57,706.85"
SFO - DSM,53753439597,SFO-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/53753439597,https://www.airlines-manager.com/aircraft/show/108466264,15:00,23:14,112,"$239,963.00","$212,542.00","$1,897.70","$25,814.82"
SFO - DSM,53768887162,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/53768887162,https://www.airlines-manager.com/aircraft/show/108410856,22:45,6:44,320,"$506,531.00","$460,693.00","$1,439.67","$57,706.85"
SFO - DSM,53768887163,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/53768887163,https://www.airlines-manager.com/aircraft/show/108410859,23:30,7:29,320,"$506,531.00","$460,693.00","$1,439.67","$57,706.85"
SFO - DTW,53722247538,SFO-ORD-DTW 4,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/53722247538,https://www.airlines-manager.com/aircraft/show/101045331,4:30,14:29,400,"$819,690.00","$744,567.00","$1,861.42","$74,581.00"
SFO - DTW,53722247539,SFO-ORD-DTW 3,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/53722247539,https://www.airlines-manager.com/aircraft/show/101045332,5:00,14:59,400,"$819,690.00","$744,567.00","$1,861.42","$74,581.00"
SFO - DTW,53753439560,SFO-ORD-DTW 2,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/53753439560,https://www.airlines-manager.com/aircraft/show/101045333,15:00,0:59,400,"$819,690.00","$744,567.00","$1,861.42","$74,581.00"
SFO - DTW,53758909808,SFO-ORD-DTW 5,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/53758909808,https://www.airlines-manager.com/aircraft/show/101045330,17:00,2:59,400,"$819,690.00","$744,567.00","$1,861.42","$74,581.00"
SFO - DTW,53768887051,SFO-ORD-DTW 1,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/53768887051,https://www.airlines-manager.com/aircraft/show/101045334,22:00,7:59,400,"$819,690.00","$744,567.00","$1,861.42","$74,581.00"
SFO - DXB,53722247565,SFO 168B-2 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/53722247565,https://www.airlines-manager.com/aircraft/show/87566901,5:30,12:29,1046,"$5,983,901.00","$5,518,713.00","$5,276.02","$790,269.16"
SFO - DXB,53735281216,SFO 168A-2 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/53735281216,https://www.airlines-manager.com/aircraft/show/86596991,7:30,14:29,1046,"$5,983,901.00","$5,518,713.00","$5,276.02","$790,269.16"
SFO - ELP,53735281083,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/53735281083,https://www.airlines-manager.com/aircraft/show/114912267,5:45,11:44,310,"$374,706.00","$339,934.00","$1,096.56","$56,813.48"
SFO - ELP,53735281084,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/53735281084,https://www.airlines-manager.com/aircraft/show/114912306,7:15,13:14,112,"$177,463.00","$154,869.00","$1,382.76","$25,883.40"
SFO - ELP,53735281085,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/53735281085,https://www.airlines-manager.com/aircraft/show/114912268,8:30,14:29,310,"$374,706.00","$339,934.00","$1,096.56","$56,813.48"
SFO - ELP,53753439592,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/53753439592,https://www.airlines-manager.com/aircraft/show/114912263,15:00,20:59,310,"$374,706.00","$339,934.00","$1,096.56","$56,813.48"
SFO - ELP,53768887126,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/53768887126,https://www.airlines-manager.com/aircraft/show/114912264,22:15,4:14,310,"$374,706.00","$339,934.00","$1,096.56","$56,813.48"
SFO - EUG,53722247314,SFO-BHM-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/53722247314,https://www.airlines-manager.com/aircraft/show/117782568,1:45,5:29,320,"$216,870.00","$188,838.00",$590.12,"$50,581.61"
SFO - EUG,53722247315,SFO-BHM-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/53722247315,https://www.airlines-manager.com/aircraft/show/117782569,3:15,6:59,320,"$216,870.00","$188,838.00",$590.12,"$50,581.61"
SFO - EUG,53753439696,SFO-BHM-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/53753439696,https://www.airlines-manager.com/aircraft/show/117782567,16:00,19:44,320,"$216,870.00","$188,838.00",$590.12,"$50,581.61"
SFO - EUG,53758909885,SFO-BHM-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/53758909885,https://www.airlines-manager.com/aircraft/show/117782566,17:45,21:29,264,"$193,828.00","$166,475.00",$630.59,"$44,591.52"
SFO - FAR,53722247212,SFO-FAR-BIL 3,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/53722247212,https://www.airlines-manager.com/aircraft/show/117782586,1:00,8:44,310,"$489,736.00","$450,231.00","$1,452.36","$58,219.53"
SFO - FAR,53735281188,SFO-FAR-BIL 2,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/53735281188,https://www.airlines-manager.com/aircraft/show/117782585,7:15,14:59,310,"$489,736.00","$450,231.00","$1,452.36","$58,219.53"
SFO - FAR,53753439580,SFO-FAR-BIL 1,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/53753439580,https://www.airlines-manager.com/aircraft/show/117782584,15:00,22:44,310,"$489,736.00","$450,231.00","$1,452.36","$58,219.53"
SFO - FAR,53758909955,SFO-FAR-BIL 4,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/53758909955,https://www.airlines-manager.com/aircraft/show/117782587,18:30,2:14,310,"$489,736.00","$450,231.00","$1,452.36","$58,219.53"
SFO - FAT,53722247333,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/53722247333,https://www.airlines-manager.com/aircraft/show/108410857,2:00,4:44,320,"$95,282.00","$71,086.00",$222.14,"$26,007.07"
SFO - FAT,53747970616,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/53747970616,https://www.airlines-manager.com/aircraft/show/108410856,11:45,14:29,320,"$95,282.00","$71,086.00",$222.14,"$26,007.07"
SFO - FAT,53747970617,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/53747970617,https://www.airlines-manager.com/aircraft/show/108410859,13:00,15:44,320,"$95,282.00","$71,086.00",$222.14,"$26,007.07"
SFO - FAT,53758909911,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/53758909911,https://www.airlines-manager.com/aircraft/show/108410858,18:00,20:44,320,"$95,282.00","$71,086.00",$222.14,"$26,007.07"
SFO - FAT,53768887215,SFO-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/53768887215,https://www.airlines-manager.com/aircraft/show/108466264,23:15,1:59,66,"$33,258.00","$21,014.00",$318.39,"$7,688.05"
SFO - FLL,53722247085,SFO-FLL-TPA 2,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/53722247085,https://www.airlines-manager.com/aircraft/show/97955543,0:15,12:14,320,"$736,216.00","$668,188.00","$2,088.09","$55,759.78"
SFO - FLL,53722247086,SFO-FLL-TPA 4,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/53722247086,https://www.airlines-manager.com/aircraft/show/97955541,4:15,16:14,320,"$736,216.00","$668,188.00","$2,088.09","$55,759.78"
SFO - FLL,53735281202,SFO-FLL-TPA 6 B,A319-100,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/53735281202,https://www.airlines-manager.com/aircraft/show/97900729,7:30,19:44,198,"$553,648.00","$504,169.00","$2,546.31","$41,212.72"
SFO - FLL,53747970750,SFO-FLL-TPA 1,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/53747970750,https://www.airlines-manager.com/aircraft/show/97955544,13:00,0:59,320,"$736,216.00","$668,188.00","$2,088.09","$55,759.78"
SFO - FLL,53758909806,SFO-FLL-TPA 3,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/53758909806,https://www.airlines-manager.com/aircraft/show/97955542,17:00,4:59,320,"$736,216.00","$668,188.00","$2,088.09","$55,759.78"
SFO - FLL,53764392623,SFO-FLL-TPA 5,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/53764392623,https://www.airlines-manager.com/aircraft/show/97955540,20:00,7:59,320,"$736,216.00","$668,188.00","$2,088.09","$55,759.78"
SFO - FSD,53722247124,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/53722247124,https://www.airlines-manager.com/aircraft/show/107160378,0:30,7:59,320,"$469,831.00","$426,549.00","$1,332.97","$56,999.87"
SFO - FSD,53722247125,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/53722247125,https://www.airlines-manager.com/aircraft/show/107132310,2:00,9:29,112,"$222,435.00","$196,716.00","$1,756.39","$26,287.22"
SFO - FSD,53722247126,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/53722247126,https://www.airlines-manager.com/aircraft/show/107160381,3:00,10:29,320,"$469,831.00","$426,549.00","$1,332.97","$56,999.87"
SFO - FSD,53735281235,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/53735281235,https://www.airlines-manager.com/aircraft/show/107160380,8:00,15:29,320,"$469,831.00","$426,549.00","$1,332.97","$56,999.87"
SFO - FSD,53753439673,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/53753439673,https://www.airlines-manager.com/aircraft/show/107160379,16:00,23:29,284,"$437,296.00","$395,370.00","$1,392.15","$52,833.41"
SFO - GRR,53722247180,SFO-BHM-GRR 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/53722247180,https://www.airlines-manager.com/aircraft/show/117782583,1:00,10:44,198,"$456,419.00","$417,968.00","$2,110.95","$42,941.92"
SFO - GRR,53735281068,SFO-BHM-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/53735281068,https://www.airlines-manager.com/aircraft/show/117782567,5:45,15:29,320,"$605,707.00","$552,735.00","$1,727.30","$56,787.84"
SFO - GRR,53735281069,SFO-BHM-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/53735281069,https://www.airlines-manager.com/aircraft/show/117782566,8:00,17:44,320,"$605,707.00","$552,735.00","$1,727.30","$56,787.84"
SFO - GRR,53753439695,SFO-BHM-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/53753439695,https://www.airlines-manager.com/aircraft/show/117782568,16:00,1:44,320,"$605,707.00","$552,735.00","$1,727.30","$56,787.84"
SFO - GRR,53758909865,SFO-BHM-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/53758909865,https://www.airlines-manager.com/aircraft/show/117782569,17:30,3:14,320,"$605,707.00","$552,735.00","$1,727.30","$56,787.84"
SFO - HKG,53764392813,SFO 168B-6 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/53764392813,https://www.airlines-manager.com/aircraft/show/87083947,21:15,23:59,1046,"$5,253,940.00","$4,855,351.00","$4,641.83","$1,776,347.93"
SFO - HKG,53768887211,SFO 168A-6 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/53768887211,https://www.airlines-manager.com/aircraft/show/88032836,23:15,1:59,1046,"$5,253,940.00","$4,855,351.00","$4,641.83","$1,776,347.93"
SFO - IAD,53722247001,SFO-IAD-CLT 1,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/53722247001,https://www.airlines-manager.com/aircraft/show/96135565,0:00,11:14,400,"$907,937.00","$829,919.00","$2,074.80","$73,880.03"
SFO - IAD,53722247002,SFO-IAD-CLT 5,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/53722247002,https://www.airlines-manager.com/aircraft/show/96135561,4:00,15:14,400,"$907,937.00","$829,919.00","$2,074.80","$73,880.03"
SFO - IAD,53735281109,SFO-IAD-CLT 2,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/53735281109,https://www.airlines-manager.com/aircraft/show/96135564,6:00,17:14,400,"$907,937.00","$829,919.00","$2,074.80","$73,880.03"
SFO - IAD,53747970708,SFO-IAD-CLT 3,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/53747970708,https://www.airlines-manager.com/aircraft/show/96135563,12:45,23:59,400,"$907,937.00","$829,919.00","$2,074.80","$73,880.03"
SFO - IAD,53758909787,SFO-IAD-CLT 4,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/53758909787,https://www.airlines-manager.com/aircraft/show/96135562,16:45,3:59,400,"$907,937.00","$829,919.00","$2,074.80","$73,880.03"
SFO - IAH,53722247546,SFO-IAH-MEX 2,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/53722247546,https://www.airlines-manager.com/aircraft/show/101045338,4:45,12:59,400,"$691,517.00","$621,709.00","$1,554.27","$75,511.21"
SFO - IAH,53735281156,SFO-IAH-MEX 5,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/53735281156,https://www.airlines-manager.com/aircraft/show/101045335,6:45,14:59,400,"$691,517.00","$621,709.00","$1,554.27","$75,511.21"
SFO - IAH,53747970804,SFO-IAH-MEX 1,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/53747970804,https://www.airlines-manager.com/aircraft/show/101045339,13:00,21:14,400,"$691,517.00","$621,709.00","$1,554.27","$75,511.21"
SFO - IAH,53753439566,SFO-IAH-MEX 4,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/53753439566,https://www.airlines-manager.com/aircraft/show/101045336,15:00,23:14,400,"$691,517.00","$621,709.00","$1,554.27","$75,511.21"
SFO - IAH,53764392543,SFO-IAH-MEX 3,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/53764392543,https://www.airlines-manager.com/aircraft/show/101045337,19:30,3:44,400,"$691,517.00","$621,709.00","$1,554.27","$75,511.21"
SFO - ICN,53722247082,SFO 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/53722247082,https://www.airlines-manager.com/aircraft/show/85537213,0:15,22:44,932,"$3,589,018.00","$3,238,995.00","$3,475.32","$144,062.05"
SFO - ICN,53747970723,SFO-ICN B,787-10,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/53747970723,https://www.airlines-manager.com/aircraft/show/110213648,13:00,10:59,592,"$2,626,537.00","$2,428,664.00","$4,102.47","$110,477.51"
SFO - ICN,53764392626,SFO 84A-1 E1,777-300,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/53764392626,https://www.airlines-manager.com/aircraft/show/86776212,20:00,18:29,865,"$3,400,628.00","$3,063,392.00","$3,541.49","$136,251.68"
SFO - ICT,53722247158,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/53722247158,https://www.airlines-manager.com/aircraft/show/114912263,0:45,8:14,310,"$467,206.00","$428,071.00","$1,380.87","$57,203.25"
SFO - ICT,53735281228,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/53735281228,https://www.airlines-manager.com/aircraft/show/114912264,8:00,15:29,310,"$467,206.00","$428,071.00","$1,380.87","$57,203.25"
SFO - ICT,53753439665,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/53753439665,https://www.airlines-manager.com/aircraft/show/114912267,16:00,23:29,310,"$467,206.00","$428,071.00","$1,380.87","$57,203.25"
SFO - ICT,53758909866,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/53758909866,https://www.airlines-manager.com/aircraft/show/114912306,17:30,0:59,112,"$220,592.00","$194,736.00","$1,738.71","$26,022.63"
SFO - ICT,53758909867,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/53758909867,https://www.airlines-manager.com/aircraft/show/114912268,18:45,2:14,310,"$467,206.00","$428,071.00","$1,380.87","$57,203.25"
SFO - IND,53722247562,SFO-IND-CVG 4,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/53722247562,https://www.airlines-manager.com/aircraft/show/99316503,5:15,14:59,310,"$602,937.00","$552,887.00","$1,783.51","$56,803.46"
SFO - IND,53735281196,SFO-IND-CVG 6,ERJ-175,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/53735281196,https://www.airlines-manager.com/aircraft/show/99174346,7:15,16:59,112,"$283,094.00","$249,680.00","$2,229.29","$25,652.05"
SFO - IND,53747970831,SFO-IND-CVG 1,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/53747970831,https://www.airlines-manager.com/aircraft/show/99316506,13:00,22:44,310,"$602,937.00","$552,887.00","$1,783.51","$56,803.46"
SFO - IND,53753439578,SFO-IND-CVG 3,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/53753439578,https://www.airlines-manager.com/aircraft/show/99316504,15:00,0:44,310,"$602,937.00","$552,887.00","$1,783.51","$56,803.46"
SFO - IND,53758909807,SFO-IND-CVG 5,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/53758909807,https://www.airlines-manager.com/aircraft/show/99316502,17:00,2:44,310,"$602,937.00","$552,887.00","$1,783.51","$56,803.46"
SFO - IND,53768887200,SFO-IND-CVG 2,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/53768887200,https://www.airlines-manager.com/aircraft/show/99316505,23:00,8:44,310,"$602,937.00","$552,887.00","$1,783.51","$56,803.46"
SFO - JAN,53722247368,SFO-SAV-JAN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/53722247368,https://www.airlines-manager.com/aircraft/show/114917486,2:15,11:29,198,"$437,594.00","$401,149.00","$2,026.01","$43,445.74"
SFO - JAN,53735281126,SFO-SAV-JAN 3,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/53735281126,https://www.airlines-manager.com/aircraft/show/114912269,6:15,15:29,310,"$581,341.00","$535,884.00","$1,728.66","$58,037.98"
SFO - JAN,53735281127,SFO-SAV-JAN 2,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/53735281127,https://www.airlines-manager.com/aircraft/show/114912266,7:45,16:59,310,"$581,341.00","$535,884.00","$1,728.66","$58,037.98"
SFO - JAN,53758909811,SFO-SAV-JAN 1,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/53758909811,https://www.airlines-manager.com/aircraft/show/114912265,17:00,2:14,310,"$581,341.00","$535,884.00","$1,728.66","$58,037.98"
SFO - JAN,53764392464,SFO-SAV-JAN 4,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/53764392464,https://www.airlines-manager.com/aircraft/show/114912270,19:00,4:14,310,"$581,341.00","$535,884.00","$1,728.66","$58,037.98"
SFO - JAX,53735281115,SFO-JAX-SAT 5,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/53735281115,https://www.airlines-manager.com/aircraft/show/86377315,6:00,17:14,310,"$701,478.00","$646,409.00","$2,085.19","$57,543.83"
SFO - JAX,53747970747,SFO-JAX-SAT 1,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/53747970747,https://www.airlines-manager.com/aircraft/show/86375568,13:00,0:14,310,"$701,478.00","$646,409.00","$2,085.19","$57,543.83"
SFO - JAX,53753439624,SFO-JAX-SAT 2,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/53753439624,https://www.airlines-manager.com/aircraft/show/86371267,15:00,2:14,310,"$701,478.00","$646,409.00","$2,085.19","$57,543.83"
SFO - JAX,53764392783,SFO-JAX-SAT 3,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/53764392783,https://www.airlines-manager.com/aircraft/show/86385102,21:00,8:14,310,"$701,478.00","$646,409.00","$2,085.19","$57,543.83"
SFO - JAX,53768887197,SFO-JAX-SAT 4,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/53768887197,https://www.airlines-manager.com/aircraft/show/86378760,23:00,10:14,310,"$701,478.00","$646,409.00","$2,085.19","$57,543.83"
SFO - JFK,53722247201,SFO-MIA-JFK 4,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/53722247201,https://www.airlines-manager.com/aircraft/show/89233034,1:00,12:59,400,"$960,740.00","$862,242.00","$2,155.61","$71,953.44"
SFO - JFK,53735281186,SFO-MIA-JFK 5,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/53735281186,https://www.airlines-manager.com/aircraft/show/89233035,7:00,18:59,400,"$960,740.00","$862,242.00","$2,155.61","$71,953.44"
SFO - JFK,53747970870,SFO-MIA-JFK 1,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/53747970870,https://www.airlines-manager.com/aircraft/show/89233032,13:00,0:59,400,"$960,740.00","$862,242.00","$2,155.61","$71,953.44"
SFO - JFK,53753439691,SFO-MIA-JFK 2,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/53753439691,https://www.airlines-manager.com/aircraft/show/84622093,16:00,3:59,400,"$960,740.00","$862,242.00","$2,155.61","$71,953.44"
SFO - JFK,53764392486,SFO-MIA-JFK 3,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/53764392486,https://www.airlines-manager.com/aircraft/show/89233031,19:00,6:59,400,"$960,740.00","$862,242.00","$2,155.61","$71,953.44"
SFO - KOA,53722247405,SFO-KOA-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/53722247405,https://www.airlines-manager.com/aircraft/show/112650101,2:45,13:59,310,"$702,530.00","$647,658.00","$2,089.22","$57,655.01"
SFO - KOA,53722247406,SFO-KOA-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/53722247406,https://www.airlines-manager.com/aircraft/show/112650100,4:45,15:59,310,"$702,530.00","$647,658.00","$2,089.22","$57,655.01"
SFO - KOA,53747970737,SFO-KOA-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/53747970737,https://www.airlines-manager.com/aircraft/show/112650091,13:00,0:14,198,"$527,337.00","$483,338.00","$2,441.10","$43,027.12"
SFO - KOA,53758909821,SFO-KOA-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/53758909821,https://www.airlines-manager.com/aircraft/show/112650103,17:00,4:14,310,"$702,530.00","$647,658.00","$2,089.22","$57,655.01"
SFO - KOA,53764392581,SFO-KOA-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/53764392581,https://www.airlines-manager.com/aircraft/show/112650102,20:00,7:14,310,"$702,530.00","$647,658.00","$2,089.22","$57,655.01"
SFO - LAS,53735281091,SFO-BOS-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/53735281091,https://www.airlines-manager.com/aircraft/show/104901564,6:00,9:44,338,"$216,975.00","$178,282.00",$527.46,"$47,754.11"
SFO - LAS,53735281092,SFO-BOS-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/53735281092,https://www.airlines-manager.com/aircraft/show/104870960,7:00,10:44,338,"$216,975.00","$178,282.00",$527.46,"$47,754.11"
SFO - LAS,53747970639,SFO-BOS-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/53747970639,https://www.airlines-manager.com/aircraft/show/104874465,12:00,15:44,338,"$216,975.00","$178,282.00",$527.46,"$47,754.11"
SFO - LAS,53747970640,SFO CARGO 1,737-700,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/53747970640,https://www.airlines-manager.com/aircraft/show/107343113,12:00,15:44,0,"$55,783.00","$30,593.00",$0.00,"$8,194.55"
SFO - LAS,53758909770,SFO-BOS-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/53758909770,https://www.airlines-manager.com/aircraft/show/104901544,16:30,20:14,338,"$216,975.00","$178,282.00",$527.46,"$47,754.11"
SFO - LAS,53764392748,SFO-BOS-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/53764392748,https://www.airlines-manager.com/aircraft/show/104864961,20:30,0:14,338,"$216,975.00","$178,282.00",$527.46,"$47,754.11"
SFO - LAX,53722247339,SFO-PHL-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/53722247339,https://www.airlines-manager.com/aircraft/show/97900730,2:00,5:29,198,"$133,274.00","$101,260.00",$511.41,"$29,069.86"
SFO - LAX,53722247340,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/53722247340,https://www.airlines-manager.com/aircraft/show/92390872,4:30,7:59,320,"$175,700.00","$128,489.00",$401.53,"$36,886.79"
SFO - LAX,53735281210,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/53735281210,https://www.airlines-manager.com/aircraft/show/92390869,7:30,10:59,320,"$175,700.00","$128,489.00",$401.53,"$36,886.79"
SFO - LAX,53735281211,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/53735281211,https://www.airlines-manager.com/aircraft/show/92390870,8:15,11:44,320,"$175,700.00","$128,489.00",$401.53,"$36,886.79"
SFO - LAX,53747970626,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/53747970626,https://www.airlines-manager.com/aircraft/show/92390873,12:00,15:29,320,"$175,700.00","$128,489.00",$401.53,"$36,886.79"
SFO - LAX,53758909778,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/53758909778,https://www.airlines-manager.com/aircraft/show/92390871,16:45,20:14,320,"$175,700.00","$128,489.00",$401.53,"$36,886.79"
SFO - LEX,53722247342,SFO-BTV-LEX 1,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/53722247342,https://www.airlines-manager.com/aircraft/show/112650095,2:00,11:59,310,"$622,836.00","$575,388.00","$1,856.09","$57,634.86"
SFO - LEX,53735281093,SFO-BTV-LEX 2,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/53735281093,https://www.airlines-manager.com/aircraft/show/112650094,6:00,15:59,310,"$622,836.00","$575,388.00","$1,856.09","$57,634.86"
SFO - LEX,53735281094,SFO-BTV-LEX 3,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/53735281094,https://www.airlines-manager.com/aircraft/show/112650093,8:00,17:59,310,"$622,836.00","$575,388.00","$1,856.09","$57,634.86"
SFO - LEX,53753439509,SFO-BTV-LEX 4,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/53753439509,https://www.airlines-manager.com/aircraft/show/112650092,14:00,23:59,310,"$622,836.00","$575,388.00","$1,856.09","$57,634.86"
SFO - LEX,53764392580,SFO-BTV-LEX 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/53764392580,https://www.airlines-manager.com/aircraft/show/112650089,20:00,5:59,198,"$468,601.00","$430,555.00","$2,174.52","$43,127.38"
SFO - LGB,53722247457,SFO-FAR-BIL 2,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/53722247457,https://www.airlines-manager.com/aircraft/show/117782585,3:15,6:44,310,"$180,890.00","$156,791.00",$505.78,"$45,011.77"
SFO - LGB,53742109131,SFO-FAR-BIL 1,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/53742109131,https://www.airlines-manager.com/aircraft/show/117782584,11:00,14:29,310,"$180,890.00","$156,791.00",$505.78,"$45,011.77"
SFO - LGB,53753439613,SFO-FAR-BIL 4,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/53753439613,https://www.airlines-manager.com/aircraft/show/117782587,15:00,18:29,310,"$180,890.00","$156,791.00",$505.78,"$45,011.77"
SFO - LGB,53768887004,SFO-FAR-BIL 3,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/53768887004,https://www.airlines-manager.com/aircraft/show/117782586,21:30,0:59,310,"$180,890.00","$156,791.00",$505.78,"$45,011.77"
SFO - LIT,53722247371,SFO-SDF-LIT 3,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/53722247371,https://www.airlines-manager.com/aircraft/show/94886627,2:15,10:59,310,"$540,459.00","$497,431.00","$1,604.62","$56,957.75"
SFO - LIT,53722247372,SFO-SDF-LIT 5,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/53722247372,https://www.airlines-manager.com/aircraft/show/106453498,3:15,11:59,310,"$540,459.00","$497,431.00","$1,604.62","$56,957.75"
SFO - LIT,53753439490,SFO-SDF-LIT 2,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/53753439490,https://www.airlines-manager.com/aircraft/show/94886628,14:00,22:44,310,"$540,459.00","$497,431.00","$1,604.62","$56,957.75"
SFO - LIT,53753439491,SFO-SDF-LIT 4,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/53753439491,https://www.airlines-manager.com/aircraft/show/106453500,15:00,23:44,310,"$540,459.00","$497,431.00","$1,604.62","$56,957.75"
SFO - LIT,53770850183,SFO-SDF-LIT 1,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/53770850183,https://www.airlines-manager.com/aircraft/show/106453499,23:45,8:29,310,"$540,459.00","$497,431.00","$1,604.62","$56,957.75"
SFO - MCI,53735281180,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/53735281180,https://www.airlines-manager.com/aircraft/show/88239554,7:00,14:59,320,"$505,017.00","$456,091.00","$1,425.28","$57,130.40"
SFO - MCI,53758909840,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/53758909840,https://www.airlines-manager.com/aircraft/show/88239553,17:00,0:59,320,"$505,017.00","$456,091.00","$1,425.28","$57,130.40"
SFO - MCI,53758909841,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/53758909841,https://www.airlines-manager.com/aircraft/show/105223003,17:00,0:59,198,"$380,902.00","$345,894.00","$1,746.94","$43,327.01"
SFO - MCI,53758909842,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/53758909842,https://www.airlines-manager.com/aircraft/show/88239557,18:45,2:44,320,"$505,017.00","$456,091.00","$1,425.28","$57,130.40"
SFO - MCI,53768887208,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/53768887208,https://www.airlines-manager.com/aircraft/show/88239555,23:15,7:14,320,"$505,017.00","$456,091.00","$1,425.28","$57,130.40"
SFO - MCO,53722247476,SFO-MCO-MSP 2,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/53722247476,https://www.airlines-manager.com/aircraft/show/105367367,3:30,14:59,338,"$791,753.00","$726,784.00","$2,150.25","$63,290.33"
SFO - MCO,53722247477,SFO-MCO-MSP 5,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/53722247477,https://www.airlines-manager.com/aircraft/show/105367364,4:30,15:59,338,"$791,753.00","$726,784.00","$2,150.25","$63,290.33"
SFO - MCO,53753439608,SFO-MCO-MSP 1,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/53753439608,https://www.airlines-manager.com/aircraft/show/105367368,15:00,2:29,338,"$791,753.00","$726,784.00","$2,150.25","$63,290.33"
SFO - MCO,53758909831,SFO-MCO-MSP 4,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/53758909831,https://www.airlines-manager.com/aircraft/show/105367365,17:00,4:29,338,"$791,753.00","$726,784.00","$2,150.25","$63,290.33"
SFO - MCO,53764392514,SFO-MCO-MSP 3,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/53764392514,https://www.airlines-manager.com/aircraft/show/105367366,19:15,6:44,338,"$791,753.00","$726,784.00","$2,150.25","$63,290.33"
SFO - MCO,53764392515,SFO CARGO 1,737-700,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/53764392515,https://www.airlines-manager.com/aircraft/show/107343113,20:30,7:59,0,"$198,945.00","$148,298.00",#DIV/0!,"$12,914.19"
SFO - MEM,53722247401,SFO-MEM-PIT 4,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/53722247401,https://www.airlines-manager.com/aircraft/show/98788934,2:45,11:59,310,"$574,328.00","$525,604.00","$1,695.50","$56,924.62"
SFO - MEM,53735281087,SFO-MEM-PIT 6,ERJ-175,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/53735281087,https://www.airlines-manager.com/aircraft/show/98675305,5:45,14:59,112,"$269,663.00","$237,281.00","$2,118.58","$25,698.30"
SFO - MEM,53747970833,SFO-MEM-PIT 1,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/53747970833,https://www.airlines-manager.com/aircraft/show/98788937,13:00,22:14,310,"$574,328.00","$525,604.00","$1,695.50","$56,924.62"
SFO - MEM,53753439670,SFO-MEM-PIT 3,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/53753439670,https://www.airlines-manager.com/aircraft/show/98788935,16:00,1:14,310,"$574,328.00","$525,604.00","$1,695.50","$56,924.62"
SFO - MEM,53764392473,SFO-MEM-PIT 5,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/53764392473,https://www.airlines-manager.com/aircraft/show/98788933,19:00,4:14,310,"$574,328.00","$525,604.00","$1,695.50","$56,924.62"
SFO - MEM,53770850197,SFO-MEM-PIT 2,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/53770850197,https://www.airlines-manager.com/aircraft/show/98788936,23:45,8:59,310,"$574,328.00","$525,604.00","$1,695.50","$56,924.62"
SFO - MEX,53722247488,SFO-IAH-MEX 3,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/53722247488,https://www.airlines-manager.com/aircraft/show/101045337,3:45,12:59,400,"$769,718.00","$698,851.00","$1,747.13","$75,687.83"
SFO - MEX,53747970801,SFO-IAH-MEX 2,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/53747970801,https://www.airlines-manager.com/aircraft/show/101045338,13:00,22:14,400,"$769,718.00","$698,851.00","$1,747.13","$75,687.83"
SFO - MEX,53753439565,SFO-IAH-MEX 5,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/53753439565,https://www.airlines-manager.com/aircraft/show/101045335,15:00,0:14,400,"$769,718.00","$698,851.00","$1,747.13","$75,687.83"
SFO - MEX,53764392812,SFO-IAH-MEX 1,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/53764392812,https://www.airlines-manager.com/aircraft/show/101045339,21:15,6:29,400,"$769,718.00","$698,851.00","$1,747.13","$75,687.83"
SFO - MEX,53768887217,SFO-IAH-MEX 4,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/53768887217,https://www.airlines-manager.com/aircraft/show/101045336,23:15,8:29,369,"$719,673.00","$650,698.00","$1,763.41","$70,472.71"
SFO - MFR,53722247181,SFO-TYS-MSN 2,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/53722247181,https://www.airlines-manager.com/aircraft/show/117782564,1:00,4:29,320,"$172,586.00","$145,954.00",$456.11,"$41,900.67"
SFO - MFR,53722247182,SFO-TYS-MSN 1,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/53722247182,https://www.airlines-manager.com/aircraft/show/117782565,4:00,7:29,320,"$172,586.00","$145,954.00",$456.11,"$41,900.67"
SFO - MFR,53753439692,SFO-TYS-MSN 3,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/53753439692,https://www.airlines-manager.com/aircraft/show/117782563,16:00,19:29,320,"$172,586.00","$145,954.00",$456.11,"$41,900.67"
SFO - MFR,53758909849,SFO-TYS-MSN 4,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/53758909849,https://www.airlines-manager.com/aircraft/show/117782562,17:15,20:44,289,"$162,495.00","$136,138.00",$471.07,"$39,082.68"
SFO - MHT,53722247080,SFO-MHT-CHS 3,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/53722247080,https://www.airlines-manager.com/aircraft/show/114917463,0:15,12:44,320,"$758,403.00","$694,418.00","$2,170.06","$55,627.61"
SFO - MHT,53722247081,SFO-MHT-CHS 4,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/53722247081,https://www.airlines-manager.com/aircraft/show/114266973,4:15,16:44,320,"$758,403.00","$694,418.00","$2,170.06","$55,627.61"
SFO - MHT,53747970756,SFO-MHT-CHS 1,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/53747970756,https://www.airlines-manager.com/aircraft/show/114917465,13:00,1:29,320,"$758,403.00","$694,418.00","$2,170.06","$55,627.61"
SFO - MHT,53758909813,SFO-MHT-CHS 2,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/53758909813,https://www.airlines-manager.com/aircraft/show/114917464,17:00,5:29,320,"$758,403.00","$694,418.00","$2,170.06","$55,627.61"
SFO - MHT,53764392577,SFO-MHT-CHS 5 B,A319-100,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/53764392577,https://www.airlines-manager.com/aircraft/show/114912262,20:00,8:29,198,"$568,571.00","$521,644.00","$2,634.57","$41,787.24"
SFO - MIA,53722247197,SFO-MIA-JFK 1,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/53722247197,https://www.airlines-manager.com/aircraft/show/89233032,1:00,12:59,400,"$954,153.00","$864,310.00","$2,160.78","$72,126.01"
SFO - MIA,53722247198,SFO-MIA-JFK 2,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/53722247198,https://www.airlines-manager.com/aircraft/show/84622093,4:00,15:59,400,"$954,153.00","$864,310.00","$2,160.78","$72,126.01"
SFO - MIA,53735281177,SFO-MIA-JFK 3,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/53735281177,https://www.airlines-manager.com/aircraft/show/89233031,7:00,18:59,400,"$954,153.00","$864,310.00","$2,160.78","$72,126.01"
SFO - MIA,53747970868,SFO-MIA-JFK 4,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/53747970868,https://www.airlines-manager.com/aircraft/show/89233034,13:00,0:59,400,"$954,153.00","$864,310.00","$2,160.78","$72,126.01"
SFO - MIA,53764392484,SFO-MIA-JFK 5,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/53764392484,https://www.airlines-manager.com/aircraft/show/89233035,19:00,6:59,400,"$954,153.00","$864,310.00","$2,160.78","$72,126.01"
SFO - MKE,53722247134,SFO-CLE-MKE 1,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/53722247134,https://www.airlines-manager.com/aircraft/show/92519368,0:30,9:44,320,"$583,505.00","$530,737.00","$1,658.55","$57,480.54"
SFO - MKE,53722247135,SFO-CLE-MKE 4,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/53722247135,https://www.airlines-manager.com/aircraft/show/92519371,5:30,14:44,320,"$583,505.00","$530,737.00","$1,658.55","$57,480.54"
SFO - MKE,53735281166,SFO-CLE-MKE 3,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/53735281166,https://www.airlines-manager.com/aircraft/show/92519367,6:45,15:59,320,"$583,505.00","$530,737.00","$1,658.55","$57,480.54"
SFO - MKE,53753439698,SFO-CLE-MKE 2,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/53753439698,https://www.airlines-manager.com/aircraft/show/92519369,16:00,1:14,320,"$583,505.00","$530,737.00","$1,658.55","$57,480.54"
SFO - MKE,53758909923,SFO-CLE-MKE 5,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/53758909923,https://www.airlines-manager.com/aircraft/show/92519370,18:00,3:14,320,"$583,505.00","$530,737.00","$1,658.55","$57,480.54"
SFO - MSN,53722247362,SFO-TYS-MSN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/53722247362,https://www.airlines-manager.com/aircraft/show/117782582,2:15,11:14,198,"$422,498.00","$386,836.00","$1,953.72","$43,061.52"
SFO - MSN,53735281174,SFO-TYS-MSN 3,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/53735281174,https://www.airlines-manager.com/aircraft/show/117782563,7:00,15:59,320,"$559,952.00","$510,703.00","$1,595.95","$56,850.06"
SFO - MSN,53735281175,SFO-TYS-MSN 4,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/53735281175,https://www.airlines-manager.com/aircraft/show/117782562,7:00,15:59,320,"$559,952.00","$510,703.00","$1,595.95","$56,850.06"
SFO - MSN,53753439677,SFO-TYS-MSN 2,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/53753439677,https://www.airlines-manager.com/aircraft/show/117782564,16:00,0:59,320,"$559,952.00","$510,703.00","$1,595.95","$56,850.06"
SFO - MSN,53764392469,SFO-TYS-MSN 1,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/53764392469,https://www.airlines-manager.com/aircraft/show/117782565,19:00,3:59,320,"$559,952.00","$510,703.00","$1,595.95","$56,850.06"
SFO - MSO,53735281149,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/53735281149,https://www.airlines-manager.com/aircraft/show/108410856,6:45,11:44,320,"$321,211.00","$287,500.00",$898.44,"$57,692.31"
SFO - MSO,53735281150,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/53735281150,https://www.airlines-manager.com/aircraft/show/108410859,7:30,12:29,320,"$321,211.00","$287,500.00",$898.44,"$57,692.31"
SFO - MSO,53747970760,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/53747970760,https://www.airlines-manager.com/aircraft/show/108410858,13:00,17:59,320,"$321,211.00","$287,500.00",$898.44,"$57,692.31"
SFO - MSO,53764392778,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/53764392778,https://www.airlines-manager.com/aircraft/show/108410857,21:00,1:59,265,"$287,829.00","$255,256.00",$963.23,"$51,221.94"
SFO - MSP,53722247385,SFO-MCO-MSP 1,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/53722247385,https://www.airlines-manager.com/aircraft/show/105367368,2:30,10:44,338,"$570,087.00","$520,649.00","$1,540.38","$63,236.72"
SFO - MSP,53722247386,SFO-MCO-MSP 4,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/53722247386,https://www.airlines-manager.com/aircraft/show/105367365,4:30,12:44,338,"$570,087.00","$520,649.00","$1,540.38","$63,236.72"
SFO - MSP,53735281154,SFO-MCO-MSP 3,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/53735281154,https://www.airlines-manager.com/aircraft/show/105367366,6:45,14:59,338,"$570,087.00","$520,649.00","$1,540.38","$63,236.72"
SFO - MSP,53753439619,SFO-MCO-MSP 2,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/53753439619,https://www.airlines-manager.com/aircraft/show/105367367,15:00,23:14,338,"$570,087.00","$520,649.00","$1,540.38","$63,236.72"
SFO - MSP,53753439620,SFO-MCO-MSP 5,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/53753439620,https://www.airlines-manager.com/aircraft/show/105367364,16:00,0:14,338,"$570,087.00","$520,649.00","$1,540.38","$63,236.72"
SFO - MSY,53722247430,SFO-MSY-STL 6,ERJ-175,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/53722247430,https://www.airlines-manager.com/aircraft/show/103534666,3:00,12:29,112,"$278,463.00","$245,789.00","$2,194.54","$25,918.00"
SFO - MSY,53735281095,SFO-MSY-STL 2,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/53735281095,https://www.airlines-manager.com/aircraft/show/98075266,6:00,15:29,320,"$591,162.00","$536,928.00","$1,677.90","$56,618.07"
SFO - MSY,53735281096,SFO-MSY-STL 4,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/53735281096,https://www.airlines-manager.com/aircraft/show/98075264,8:00,17:29,320,"$591,162.00","$536,928.00","$1,677.90","$56,618.07"
SFO - MSY,53747970838,SFO-MSY-STL 1,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/53747970838,https://www.airlines-manager.com/aircraft/show/98075267,13:00,22:29,320,"$591,162.00","$536,928.00","$1,677.90","$56,618.07"
SFO - MSY,53764392846,SFO-MSY-STL 3,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/53764392846,https://www.airlines-manager.com/aircraft/show/98075265,21:15,6:44,320,"$591,162.00","$536,928.00","$1,677.90","$56,618.07"
SFO - MSY,53768887206,SFO-MSY-STL 5,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/53768887206,https://www.airlines-manager.com/aircraft/show/98075263,23:15,8:44,320,"$591,162.00","$536,928.00","$1,677.90","$56,618.07"
SFO - NRT,53722247015,SFO 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/53722247015,https://www.airlines-manager.com/aircraft/show/85806656,0:00,20:29,932,"$3,433,419.00","$3,108,763.00","$3,335.58","$151,770.37"
SFO - NRT,53722247016,SFO 84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/53722247016,https://www.airlines-manager.com/aircraft/show/86776210,4:15,0:44,932,"$3,433,419.00","$3,108,763.00","$3,335.58","$151,770.37"
SFO - OGG,53722247383,SFO-OGG-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/53722247383,https://www.airlines-manager.com/aircraft/show/92773477,2:30,13:44,310,"$694,716.00","$642,154.00","$2,071.46","$57,165.04"
SFO - OGG,53747970886,SFO-OGG-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/53747970886,https://www.airlines-manager.com/aircraft/show/92773481,13:30,0:44,310,"$694,716.00","$642,154.00","$2,071.46","$57,165.04"
SFO - OGG,53753439640,SFO-OGG-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/53753439640,https://www.airlines-manager.com/aircraft/show/92773480,15:30,2:44,310,"$694,716.00","$642,154.00","$2,071.46","$57,165.04"
SFO - OGG,53768887001,SFO-OGG-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/53768887001,https://www.airlines-manager.com/aircraft/show/92773479,21:30,8:44,310,"$694,716.00","$642,154.00","$2,071.46","$57,165.04"
SFO - OGG,53768887002,SFO-OGG-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/53768887002,https://www.airlines-manager.com/aircraft/show/92773478,23:30,10:44,310,"$694,716.00","$642,154.00","$2,071.46","$57,165.04"
SFO - OKC,53722247127,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/53722247127,https://www.airlines-manager.com/aircraft/show/107160380,0:30,7:59,320,"$474,286.00","$430,044.00","$1,343.89","$57,466.90"
SFO - OKC,53735281234,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/53735281234,https://www.airlines-manager.com/aircraft/show/107160379,8:00,15:29,320,"$474,286.00","$430,044.00","$1,343.89","$57,466.90"
SFO - OKC,53758909795,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/53758909795,https://www.airlines-manager.com/aircraft/show/107160378,17:00,0:29,320,"$474,286.00","$430,044.00","$1,343.89","$57,466.90"
SFO - OKC,53758909796,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/53758909796,https://www.airlines-manager.com/aircraft/show/107132310,18:30,1:59,112,"$224,021.00","$197,878.00","$1,766.77","$26,442.49"
SFO - OKC,53764392527,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/53764392527,https://www.airlines-manager.com/aircraft/show/107160381,19:30,2:59,320,"$474,286.00","$430,044.00","$1,343.89","$57,466.90"
SFO - OMA,53722247205,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/53722247205,https://www.airlines-manager.com/aircraft/show/88239553,1:00,8:44,320,"$482,863.00","$437,791.00","$1,368.10","$56,610.91"
SFO - OMA,53722247206,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/53722247206,https://www.airlines-manager.com/aircraft/show/105223003,1:00,8:44,198,"$365,184.00","$332,849.00","$1,681.06","$43,040.82"
SFO - OMA,53722247207,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/53722247207,https://www.airlines-manager.com/aircraft/show/88239557,2:45,10:29,320,"$482,863.00","$437,791.00","$1,368.10","$56,610.91"
SFO - OMA,53735281193,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/53735281193,https://www.airlines-manager.com/aircraft/show/88239555,7:15,14:59,320,"$482,863.00","$437,791.00","$1,368.10","$56,610.91"
SFO - OMA,53753439615,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/53753439615,https://www.airlines-manager.com/aircraft/show/88239554,15:00,22:44,320,"$482,863.00","$437,791.00","$1,368.10","$56,610.91"
SFO - ONT,53722247537,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/53722247537,https://www.airlines-manager.com/aircraft/show/107160379,4:30,7:59,320,"$179,764.00","$149,631.00",$467.60,"$42,956.27"
SFO - ONT,53747970725,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/53747970725,https://www.airlines-manager.com/aircraft/show/107160378,13:00,16:29,320,"$179,764.00","$149,631.00",$467.60,"$42,956.27"
SFO - ONT,53753439567,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/53753439567,https://www.airlines-manager.com/aircraft/show/107132310,15:00,18:29,112,"$82,970.00","$66,847.00",$596.85,"$19,190.53"
SFO - ONT,53753439568,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/53753439568,https://www.airlines-manager.com/aircraft/show/107160381,16:00,19:29,320,"$179,764.00","$149,631.00",$467.60,"$42,956.27"
SFO - ONT,53764392806,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/53764392806,https://www.airlines-manager.com/aircraft/show/107160380,21:00,0:29,320,"$179,764.00","$149,631.00",$467.60,"$42,956.27"
SFO - ORD,53735281097,SFO-ORD-DTW 2,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/53735281097,https://www.airlines-manager.com/aircraft/show/101045333,6:00,14:59,400,"$756,958.00","$669,557.00","$1,673.89","$74,533.25"
SFO - ORD,53735281098,SFO-ORD-DTW 5,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/53735281098,https://www.airlines-manager.com/aircraft/show/101045330,7:30,16:29,400,"$756,958.00","$669,557.00","$1,673.89","$74,533.25"
SFO - ORD,53747970748,SFO-ORD-DTW 1,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/53747970748,https://www.airlines-manager.com/aircraft/show/101045334,13:00,21:59,400,"$756,958.00","$669,557.00","$1,673.89","$74,533.25"
SFO - ORD,53753439554,SFO-ORD-DTW 4,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/53753439554,https://www.airlines-manager.com/aircraft/show/101045331,15:00,23:59,400,"$756,958.00","$669,557.00","$1,673.89","$74,533.25"
SFO - ORD,53764392619,SFO-ORD-DTW 3,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/53764392619,https://www.airlines-manager.com/aircraft/show/101045332,20:00,4:59,400,"$756,958.00","$669,557.00","$1,673.89","$74,533.25"
SFO - ORF,53722247566,SFO-ORF-RIC 3,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/53722247566,https://www.airlines-manager.com/aircraft/show/108328836,5:30,17:29,310,"$729,217.00","$673,105.00","$2,171.31","$56,170.10"
SFO - ORF,53735281212,SFO-ORF-RIC 4,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/53735281212,https://www.airlines-manager.com/aircraft/show/108328837,7:30,19:29,310,"$729,217.00","$673,105.00","$2,171.31","$56,170.10"
SFO - ORF,53758909909,SFO-ORF-RIC 1,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/53758909909,https://www.airlines-manager.com/aircraft/show/108328834,18:00,5:59,310,"$729,217.00","$673,105.00","$2,171.31","$56,170.10"
SFO - ORF,53764392586,SFO-ORF-RIC 2,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/53764392586,https://www.airlines-manager.com/aircraft/show/108328835,20:00,7:59,310,"$729,217.00","$673,105.00","$2,171.31","$56,170.10"
SFO - ORF,53768887033,SFO-ORF-RIC 5 B,A319-100,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/53768887033,https://www.airlines-manager.com/aircraft/show/108328833,22:00,9:59,198,"$545,378.00","$500,379.00","$2,527.17","$41,756.24"
SFO - PBI,53722247525,SFO-PBI-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/53722247525,https://www.airlines-manager.com/aircraft/show/100301186,4:15,16:14,320,"$730,653.00","$666,322.00","$2,082.26","$55,604.06"
SFO - PBI,53735281124,SFO-PBI-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/53735281124,https://www.airlines-manager.com/aircraft/show/100301185,6:15,18:14,320,"$730,653.00","$666,322.00","$2,082.26","$55,604.06"
SFO - PBI,53758909814,SFO-PBI-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/53758909814,https://www.airlines-manager.com/aircraft/show/100301188,17:00,4:59,320,"$730,653.00","$666,322.00","$2,082.26","$55,604.06"
SFO - PBI,53764392475,SFO-PBI-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/53764392475,https://www.airlines-manager.com/aircraft/show/100301187,19:00,6:59,320,"$730,653.00","$666,322.00","$2,082.26","$55,604.06"
SFO - PBI,53764392476,SFO-PBI-RDU 5,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/53764392476,https://www.airlines-manager.com/aircraft/show/100301184,21:00,8:59,320,"$730,653.00","$666,322.00","$2,082.26","$55,604.06"
SFO - PDX,53722247066,SFO-MCO-MSP 5,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/53722247066,https://www.airlines-manager.com/aircraft/show/105367364,0:15,4:29,338,"$271,208.00","$241,811.00",$715.42,"$57,120.71"
SFO - PDX,53742109115,SFO-MCO-MSP 1,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/53742109115,https://www.airlines-manager.com/aircraft/show/105367368,10:45,14:59,338,"$271,208.00","$241,811.00",$715.42,"$57,120.71"
SFO - PDX,53747970705,SFO-MCO-MSP 4,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/53747970705,https://www.airlines-manager.com/aircraft/show/105367365,12:45,16:59,338,"$271,208.00","$241,811.00",$715.42,"$57,120.71"
SFO - PDX,53753439602,SFO-MCO-MSP 3,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/53753439602,https://www.airlines-manager.com/aircraft/show/105367366,15:00,19:14,338,"$271,208.00","$241,811.00",$715.42,"$57,120.71"
SFO - PDX,53768887220,SFO-MCO-MSP 2,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/53768887220,https://www.airlines-manager.com/aircraft/show/105367367,23:15,3:29,270,"$238,986.00","$210,443.00",$779.42,"$49,710.94"
SFO - PEK,53722247175,SFO 84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/53722247175,https://www.airlines-manager.com/aircraft/show/86776213,0:45,0:14,932,"$3,795,557.00","$3,394,050.00","$3,641.68","$144,530.16"
SFO - PEK,53758909801,SFO-PEK E,787-10,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/53758909801,https://www.airlines-manager.com/aircraft/show/106813006,17:00,15:59,648,"$2,825,530.00","$2,590,954.00","$3,998.39","$112,731.86"
SFO - PEK,53764392735,SFO 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/53764392735,https://www.airlines-manager.com/aircraft/show/85806656,20:30,19:59,932,"$3,795,557.00","$3,394,050.00","$3,641.68","$144,530.16"
SFO - PHL,53722247057,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/53722247057,https://www.airlines-manager.com/aircraft/show/92390871,0:00,11:44,320,"$727,252.00","$654,700.00","$2,045.94","$55,798.30"
SFO - PHL,53747970675,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/53747970675,https://www.airlines-manager.com/aircraft/show/92390872,12:00,23:44,320,"$727,252.00","$654,700.00","$2,045.94","$55,798.30"
SFO - PHL,53753439496,SFO-PHL-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/53753439496,https://www.airlines-manager.com/aircraft/show/97900730,14:00,1:59,198,"$546,374.00","$493,982.00","$2,494.86","$41,222.42"
SFO - PHL,53753439497,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/53753439497,https://www.airlines-manager.com/aircraft/show/92390869,15:00,2:44,320,"$727,252.00","$654,700.00","$2,045.94","$55,798.30"
SFO - PHL,53753439498,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/53753439498,https://www.airlines-manager.com/aircraft/show/92390870,15:45,3:29,320,"$727,252.00","$654,700.00","$2,045.94","$55,798.30"
SFO - PHL,53764392496,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/53764392496,https://www.airlines-manager.com/aircraft/show/92390873,19:15,6:59,320,"$727,252.00","$654,700.00","$2,045.94","$55,798.30"
SFO - PHX,53722247257,SFO-BOS-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/53722247257,https://www.airlines-manager.com/aircraft/show/104901564,1:30,5:59,338,"$320,643.00","$282,585.00",$836.05,"$63,030.11"
SFO - PHX,53722247258,SFO-BOS-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/53722247258,https://www.airlines-manager.com/aircraft/show/104870960,2:30,6:59,338,"$320,643.00","$282,585.00",$836.05,"$63,030.11"
SFO - PHX,53722247259,SFO-BOS-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/53722247259,https://www.airlines-manager.com/aircraft/show/104874465,4:15,8:44,338,"$320,643.00","$282,585.00",$836.05,"$63,030.11"
SFO - PHX,53747970638,SFO-BOS-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/53747970638,https://www.airlines-manager.com/aircraft/show/104901544,12:00,16:29,338,"$320,643.00","$282,585.00",$836.05,"$63,030.11"
SFO - PHX,53753439648,SFO CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/53753439648,https://www.airlines-manager.com/aircraft/show/107343113,15:45,20:29,0,"$78,319.00","$52,379.00",$0.00,"$11,065.99"
SFO - PHX,53753439649,SFO-BOS-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/53753439649,https://www.airlines-manager.com/aircraft/show/104864961,16:00,20:29,338,"$320,643.00","$282,585.00",$836.05,"$63,030.11"
SFO - PIT,53722247231,SFO-MEM-PIT 3,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/53722247231,https://www.airlines-manager.com/aircraft/show/98788935,1:15,11:59,310,"$673,591.00","$618,435.00","$1,994.95","$57,618.17"
SFO - PIT,53722247232,SFO-MEM-PIT 5,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/53722247232,https://www.airlines-manager.com/aircraft/show/98788933,4:15,14:59,310,"$673,591.00","$618,435.00","$1,994.95","$57,618.17"
SFO - PIT,53747970832,SFO-MEM-PIT 2,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/53747970832,https://www.airlines-manager.com/aircraft/show/98788936,13:00,23:44,310,"$673,591.00","$618,435.00","$1,994.95","$57,618.17"
SFO - PIT,53753439660,SFO-MEM-PIT 4,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/53753439660,https://www.airlines-manager.com/aircraft/show/98788934,16:00,2:44,310,"$673,591.00","$618,435.00","$1,994.95","$57,618.17"
SFO - PIT,53764392474,SFO-MEM-PIT 6,ERJ-175,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/53764392474,https://www.airlines-manager.com/aircraft/show/98675305,19:00,5:44,112,"$315,839.00","$278,820.00","$2,489.46","$25,977.02"
SFO - PIT,53768887060,SFO-MEM-PIT 1,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/53768887060,https://www.airlines-manager.com/aircraft/show/98788937,22:15,8:59,310,"$673,591.00","$618,435.00","$1,994.95","$57,618.17"
SFO - PSP,53722247523,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/53722247523,https://www.airlines-manager.com/aircraft/show/114912264,4:15,7:59,310,"$199,494.00","$174,696.00",$563.54,"$46,793.57"
SFO - PSP,53747970614,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/53747970614,https://www.airlines-manager.com/aircraft/show/114912267,11:45,15:29,310,"$199,494.00","$174,696.00",$563.54,"$46,793.57"
SFO - PSP,53747970615,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/53747970615,https://www.airlines-manager.com/aircraft/show/114912306,13:15,16:59,112,"$92,098.00","$76,487.00",$682.92,"$20,487.59"
SFO - PSP,53753439596,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/53753439596,https://www.airlines-manager.com/aircraft/show/114912268,15:00,18:44,310,"$199,494.00","$174,696.00",$563.54,"$46,793.57"
SFO - PSP,53764392794,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/53764392794,https://www.airlines-manager.com/aircraft/show/114912263,21:00,0:44,276,"$186,610.00","$162,203.00",$587.69,"$43,447.23"
SFO - PVD,53722247041,SFO-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/53722247041,https://www.airlines-manager.com/aircraft/show/112650105,0:00,12:29,310,"$759,776.00","$702,109.00","$2,264.87","$56,243.71"
SFO - PVD,53722247042,SFO-PVD-BUF 5,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/53722247042,https://www.airlines-manager.com/aircraft/show/112650104,5:00,17:29,310,"$759,776.00","$702,109.00","$2,264.87","$56,243.71"
SFO - PVD,53747970735,SFO-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/53747970735,https://www.airlines-manager.com/aircraft/show/112650108,13:00,1:29,310,"$759,776.00","$702,109.00","$2,264.87","$56,243.71"
SFO - PVD,53758909822,SFO-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/53758909822,https://www.airlines-manager.com/aircraft/show/112650107,17:00,5:29,310,"$759,776.00","$702,109.00","$2,264.87","$56,243.71"
SFO - PVD,53764392485,SFO-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/53764392485,https://www.airlines-manager.com/aircraft/show/112650106,19:00,7:29,310,"$759,776.00","$702,109.00","$2,264.87","$56,243.71"
SFO - PWM,53722247074,SFO-KOA-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/53722247074,https://www.airlines-manager.com/aircraft/show/112650091,0:15,12:59,198,"$574,433.00","$528,236.00","$2,667.86","$41,484.50"
SFO - PWM,53722247075,SFO-KOA-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/53722247075,https://www.airlines-manager.com/aircraft/show/112650103,4:15,16:59,310,"$767,544.00","$709,944.00","$2,290.14","$55,754.76"
SFO - PWM,53735281199,SFO-KOA-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/53735281199,https://www.airlines-manager.com/aircraft/show/112650102,7:15,19:59,310,"$767,544.00","$709,944.00","$2,290.14","$55,754.76"
SFO - PWM,53753439514,SFO-KOA-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/53753439514,https://www.airlines-manager.com/aircraft/show/112650101,14:00,2:44,310,"$767,544.00","$709,944.00","$2,290.14","$55,754.76"
SFO - PWM,53753439515,SFO-KOA-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/53753439515,https://www.airlines-manager.com/aircraft/show/112650100,16:00,4:44,310,"$767,544.00","$709,944.00","$2,290.14","$55,754.76"
SFO - RAP,53722247532,SFO-FAR-BIL 1,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/53722247532,https://www.airlines-manager.com/aircraft/show/117782584,4:30,10:59,310,"$397,901.00","$363,608.00","$1,172.93","$56,083.50"
SFO - RAP,53735281263,SFO-FAR-BIL 4,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/53735281263,https://www.airlines-manager.com/aircraft/show/117782587,8:30,14:59,310,"$397,901.00","$363,608.00","$1,172.93","$56,083.50"
SFO - RAP,53753439612,SFO-FAR-BIL 3,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/53753439612,https://www.airlines-manager.com/aircraft/show/117782586,15:00,21:29,310,"$397,901.00","$363,608.00","$1,172.93","$56,083.50"
SFO - RAP,53764392763,SFO-FAR-BIL 2,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/53764392763,https://www.airlines-manager.com/aircraft/show/117782585,20:45,3:14,285,"$378,982.00","$345,442.00","$1,212.08","$53,281.54"
SFO - RDU,53722247553,SFO-PBI-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/53722247553,https://www.airlines-manager.com/aircraft/show/100301188,5:00,16:14,320,"$709,519.00","$646,796.00","$2,021.24","$57,578.28"
SFO - RDU,53735281179,SFO-PBI-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/53735281179,https://www.airlines-manager.com/aircraft/show/100301187,7:00,18:14,320,"$709,519.00","$646,796.00","$2,021.24","$57,578.28"
SFO - RDU,53742108884,SFO-PBI-RDU 5,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/53742108884,https://www.airlines-manager.com/aircraft/show/100301184,9:00,20:14,320,"$709,519.00","$646,796.00","$2,021.24","$57,578.28"
SFO - RDU,53758909815,SFO-PBI-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/53758909815,https://www.airlines-manager.com/aircraft/show/100301186,17:00,4:14,320,"$709,519.00","$646,796.00","$2,021.24","$57,578.28"
SFO - RDU,53764392477,SFO-PBI-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/53764392477,https://www.airlines-manager.com/aircraft/show/100301185,19:00,6:14,320,"$709,519.00","$646,796.00","$2,021.24","$57,578.28"
SFO - RIC,53735281100,SFO-ORF-RIC 1,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/53735281100,https://www.airlines-manager.com/aircraft/show/108328834,6:00,17:29,310,"$723,392.00","$668,358.00","$2,155.99","$58,202.44"
SFO - RIC,53735281101,SFO-ORF-RIC 2,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/53735281101,https://www.airlines-manager.com/aircraft/show/108328835,8:00,19:29,310,"$723,392.00","$668,358.00","$2,155.99","$58,202.44"
SFO - RIC,53742108972,SFO-ORF-RIC 5 B,A319-100,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/53742108972,https://www.airlines-manager.com/aircraft/show/108328833,10:00,21:29,198,"$542,563.00","$498,431.00","$2,517.33","$43,404.73"
SFO - RIC,53758909907,SFO-ORF-RIC 3,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/53758909907,https://www.airlines-manager.com/aircraft/show/108328836,18:00,5:29,310,"$723,392.00","$668,358.00","$2,155.99","$58,202.44"
SFO - RIC,53764392592,SFO-ORF-RIC 4,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/53764392592,https://www.airlines-manager.com/aircraft/show/108328837,20:00,7:29,310,"$723,392.00","$668,358.00","$2,155.99","$58,202.44"
SFO - RNO,53722247524,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/53722247524,https://www.airlines-manager.com/aircraft/show/88239554,4:15,6:59,320,"$118,943.00","$92,623.00",$289.45,"$33,886.46"
SFO - RNO,53753439517,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/53753439517,https://www.airlines-manager.com/aircraft/show/88239553,14:15,16:59,320,"$118,943.00","$92,623.00",$289.45,"$33,886.46"
SFO - RNO,53753439518,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/53753439518,https://www.airlines-manager.com/aircraft/show/105223003,14:15,16:59,198,"$90,039.00","$72,187.00",$364.58,"$26,409.88"
SFO - RNO,53753439519,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/53753439519,https://www.airlines-manager.com/aircraft/show/88239557,16:00,18:44,320,"$118,943.00","$92,623.00",$289.45,"$33,886.46"
SFO - RNO,53764392745,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/53764392745,https://www.airlines-manager.com/aircraft/show/88239555,20:30,23:14,320,"$118,943.00","$92,623.00",$289.45,"$33,886.46"
SFO - RSW,53722247564,SFO-RSW-BDL 3,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/53722247564,https://www.airlines-manager.com/aircraft/show/84915100,5:15,16:59,320,"$726,988.00","$662,174.00","$2,069.29","$56,435.28"
SFO - RSW,53735281200,SFO-RSW-BDL 4,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/53735281200,https://www.airlines-manager.com/aircraft/show/84915101,7:15,18:59,320,"$726,988.00","$662,174.00","$2,069.29","$56,435.28"
SFO - RSW,53758909830,SFO-RSW-BDL 1,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/53758909830,https://www.airlines-manager.com/aircraft/show/84915098,17:00,4:44,320,"$726,988.00","$662,174.00","$2,069.29","$56,435.28"
SFO - RSW,53764392440,SFO-RSW-BDL 2,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/53764392440,https://www.airlines-manager.com/aircraft/show/84915099,19:00,6:44,320,"$726,988.00","$662,174.00","$2,069.29","$56,435.28"
SFO - RSW,53764392441,SFO-RSW-BDL 5,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/53764392441,https://www.airlines-manager.com/aircraft/show/84915102,21:00,8:44,320,"$726,988.00","$662,174.00","$2,069.29","$56,435.28"
SFO - SAN,53735281237,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/53735281237,https://www.airlines-manager.com/aircraft/show/92390872,8:00,11:44,320,"$216,450.00","$183,611.00",$573.78,"$49,181.52"
SFO - SAN,53742109173,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/53742109173,https://www.airlines-manager.com/aircraft/show/92390869,11:00,14:44,320,"$216,450.00","$183,611.00",$573.78,"$49,181.52"
SFO - SAN,53747970629,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/53747970629,https://www.airlines-manager.com/aircraft/show/92390870,12:00,15:44,320,"$216,450.00","$183,611.00",$573.78,"$49,181.52"
SFO - SAN,53753439636,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/53753439636,https://www.airlines-manager.com/aircraft/show/92390873,15:30,19:14,320,"$216,450.00","$183,611.00",$573.78,"$49,181.52"
SFO - SAN,53764392708,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/53764392708,https://www.airlines-manager.com/aircraft/show/92390871,20:15,23:59,314,"$213,998.00","$181,231.00",$577.17,"$48,544.02"
SFO - SAT,53722247089,SFO-JAX-SAT 1,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/53722247089,https://www.airlines-manager.com/aircraft/show/86375568,0:15,8:14,310,"$496,378.00","$455,108.00","$1,468.09","$57,007.27"
SFO - SAT,53722247090,SFO-JAX-SAT 2,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/53722247090,https://www.airlines-manager.com/aircraft/show/86371267,2:15,10:14,310,"$496,378.00","$455,108.00","$1,468.09","$57,007.27"
SFO - SAT,53747970746,SFO-JAX-SAT 3,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/53747970746,https://www.airlines-manager.com/aircraft/show/86385102,13:00,20:59,310,"$496,378.00","$455,108.00","$1,468.09","$57,007.27"
SFO - SAT,53753439623,SFO-JAX-SAT 4,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/53753439623,https://www.airlines-manager.com/aircraft/show/86378760,15:00,22:59,310,"$496,378.00","$455,108.00","$1,468.09","$57,007.27"
SFO - SAT,53758909854,SFO-JAX-SAT 5,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/53758909854,https://www.airlines-manager.com/aircraft/show/86377315,17:15,1:14,310,"$496,378.00","$455,108.00","$1,468.09","$57,007.27"
SFO - SAV,53735281076,SFO-SAV-JAN 1,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/53735281076,https://www.airlines-manager.com/aircraft/show/114912265,5:45,16:59,310,"$693,508.00","$640,203.00","$2,065.17","$56,991.36"
SFO - SAV,53735281077,SFO-SAV-JAN 4,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/53735281077,https://www.airlines-manager.com/aircraft/show/114912270,7:45,18:59,310,"$693,508.00","$640,203.00","$2,065.17","$56,991.36"
SFO - SAV,53753439588,SFO-SAV-JAN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/53753439588,https://www.airlines-manager.com/aircraft/show/114917486,15:00,2:14,198,"$521,067.00","$478,322.00","$2,415.77","$42,580.59"
SFO - SAV,53764392465,SFO-SAV-JAN 3,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/53764392465,https://www.airlines-manager.com/aircraft/show/114912269,19:00,6:14,310,"$693,508.00","$640,203.00","$2,065.17","$56,991.36"
SFO - SAV,53764392466,SFO-SAV-JAN 2,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/53764392466,https://www.airlines-manager.com/aircraft/show/114912266,20:30,7:44,310,"$693,508.00","$640,203.00","$2,065.17","$56,991.36"
SFO - SDF,53722247238,SFO-SDF-LIT 2,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/53722247238,https://www.airlines-manager.com/aircraft/show/94886628,1:15,10:59,310,"$611,784.00","$561,541.00","$1,811.42","$57,692.57"
SFO - SDF,53722247239,SFO-SDF-LIT 4,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/53722247239,https://www.airlines-manager.com/aircraft/show/106453500,2:15,11:59,310,"$611,784.00","$561,541.00","$1,811.42","$57,692.57"
SFO - SDF,53753439489,SFO-SDF-LIT 1,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/53753439489,https://www.airlines-manager.com/aircraft/show/106453499,14:00,23:44,310,"$611,784.00","$561,541.00","$1,811.42","$57,692.57"
SFO - SDF,53758909759,SFO-SDF-LIT 3,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/53758909759,https://www.airlines-manager.com/aircraft/show/94886627,16:30,2:14,310,"$611,784.00","$561,541.00","$1,811.42","$57,692.57"
SFO - SDF,53758909760,SFO-SDF-LIT 5,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/53758909760,https://www.airlines-manager.com/aircraft/show/106453498,17:30,3:14,310,"$611,784.00","$561,541.00","$1,811.42","$57,692.57"
SFO - SEA,53722247407,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/53722247407,https://www.airlines-manager.com/aircraft/show/92390869,2:45,7:29,320,"$300,138.00","$256,530.00",$801.66,"$54,196.48"
SFO - SEA,53722247408,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/53722247408,https://www.airlines-manager.com/aircraft/show/92390870,3:30,8:14,320,"$300,138.00","$256,530.00",$801.66,"$54,196.48"
SFO - SEA,53722247409,SFO-PHL-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/53722247409,https://www.airlines-manager.com/aircraft/show/97900730,5:30,10:14,198,"$228,859.00","$198,701.00","$1,003.54","$41,979.08"
SFO - SEA,53735281173,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/53735281173,https://www.airlines-manager.com/aircraft/show/92390873,7:00,11:44,320,"$300,138.00","$256,530.00",$801.66,"$54,196.48"
SFO - SEA,53747970677,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/53747970677,https://www.airlines-manager.com/aircraft/show/92390871,12:00,16:44,320,"$300,138.00","$256,530.00",$801.66,"$54,196.48"
SFO - SEA,53770850198,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/53770850198,https://www.airlines-manager.com/aircraft/show/92390872,23:45,4:29,298,"$287,684.00","$244,479.00",$820.40,"$51,650.49"
SFO - SHA,53764392620,SFO 168B-4 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/53764392620,https://www.airlines-manager.com/aircraft/show/87933798,20:00,19:59,1046,"$4,630,367.00","$4,294,834.00","$4,105.96","$179,075.77"
SFO - SHA,53768887058,SFO 168A-4 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/53768887058,https://www.airlines-manager.com/aircraft/show/86817628,22:00,21:59,1046,"$4,630,367.00","$4,294,834.00","$4,105.96","$179,075.77"
SFO - SLC,53722247049,SFO-ORD-DTW 4,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/53722247049,https://www.airlines-manager.com/aircraft/show/101045331,0:00,4:29,400,"$360,537.00","$319,636.00",$799.09,"$71,294.28"
SFO - SLC,53722247050,SFO-ORD-DTW 2,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/53722247050,https://www.airlines-manager.com/aircraft/show/101045333,1:00,5:29,400,"$360,537.00","$319,636.00",$799.09,"$71,294.28"
SFO - SLC,53735281225,SFO-ORD-DTW 1,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/53735281225,https://www.airlines-manager.com/aircraft/show/101045334,8:00,12:29,400,"$360,537.00","$319,636.00",$799.09,"$71,294.28"
SFO - SLC,53753439556,SFO-ORD-DTW 3,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/53753439556,https://www.airlines-manager.com/aircraft/show/101045332,15:00,19:29,400,"$360,537.00","$319,636.00",$799.09,"$71,294.28"
SFO - SMF,53735281260,SFO-SDF-LIT 1,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/53735281260,https://www.airlines-manager.com/aircraft/show/106453499,8:30,10:59,310,"$82,768.00","$62,186.00",$200.60,"$25,041.34"
SFO - SMF,53753439492,SFO-SDF-LIT 3,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/53753439492,https://www.airlines-manager.com/aircraft/show/94886627,14:00,16:29,310,"$82,768.00","$62,186.00",$200.60,"$25,041.34"
SFO - SMF,53753439493,SFO-SDF-LIT 5,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/53753439493,https://www.airlines-manager.com/aircraft/show/106453498,15:00,17:29,310,"$82,768.00","$62,186.00",$200.60,"$25,041.34"
SFO - SMF,53768887180,SFO-SDF-LIT 2,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/53768887180,https://www.airlines-manager.com/aircraft/show/94886628,22:45,1:14,310,"$82,768.00","$62,186.00",$200.60,"$25,041.34"
SFO - SMF,53770850184,SFO-SDF-LIT 4,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/53770850184,https://www.airlines-manager.com/aircraft/show/106453500,23:45,2:14,310,"$82,768.00","$62,186.00",$200.60,"$25,041.34"
SFO - STL,53735281158,SFO-MSY-STL 3,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/53735281158,https://www.airlines-manager.com/aircraft/show/98075265,6:45,15:29,320,"$554,957.00","$501,203.00","$1,566.26","$57,389.66"
SFO - STL,53735281159,SFO-MSY-STL 5,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/53735281159,https://www.airlines-manager.com/aircraft/show/98075263,8:45,17:29,320,"$554,957.00","$501,203.00","$1,566.26","$57,389.66"
SFO - STL,53747970732,SFO-MSY-STL 6,ERJ-175,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/53747970732,https://www.airlines-manager.com/aircraft/show/103534666,13:00,21:44,112,"$261,292.00","$229,370.00","$2,047.95","$26,263.74"
SFO - STL,53753439663,SFO-MSY-STL 2,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/53753439663,https://www.airlines-manager.com/aircraft/show/98075266,16:00,0:44,320,"$554,957.00","$501,203.00","$1,566.26","$57,389.66"
SFO - STL,53758909927,SFO-MSY-STL 4,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/53758909927,https://www.airlines-manager.com/aircraft/show/98075264,18:00,2:44,320,"$554,957.00","$501,203.00","$1,566.26","$57,389.66"
SFO - STL,53768887132,SFO-MSY-STL 1,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/53768887132,https://www.airlines-manager.com/aircraft/show/98075267,22:30,7:14,320,"$554,957.00","$501,203.00","$1,566.26","$57,389.66"
SFO - TFU,53747970698,SFO 168B-3 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/53747970698,https://www.airlines-manager.com/aircraft/show/87566902,12:30,14:59,1046,"$5,210,012.00","$4,802,353.00","$4,591.16","$1,933,833.42"
SFO - TFU,53753439535,SFO 168A-3 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/53753439535,https://www.airlines-manager.com/aircraft/show/86483501,14:30,16:59,1046,"$5,210,012.00","$4,802,353.00","$4,591.16","$1,933,833.42"
SFO - TPA,53722247186,SFO-FLL-TPA 1,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/53722247186,https://www.airlines-manager.com/aircraft/show/97955544,1:00,12:14,320,"$701,298.00","$635,247.00","$1,985.15","$56,550.18"
SFO - TPA,53722247187,SFO-FLL-TPA 3,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/53722247187,https://www.airlines-manager.com/aircraft/show/97955542,5:00,16:14,320,"$701,298.00","$635,247.00","$1,985.15","$56,550.18"
SFO - TPA,53735281229,SFO-FLL-TPA 5,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/53735281229,https://www.airlines-manager.com/aircraft/show/97955540,8:00,19:14,320,"$701,298.00","$635,247.00","$1,985.15","$56,550.18"
SFO - TPA,53747970749,SFO-FLL-TPA 2,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/53747970749,https://www.airlines-manager.com/aircraft/show/97955543,13:00,0:14,320,"$701,298.00","$635,247.00","$1,985.15","$56,550.18"
SFO - TPA,53758909805,SFO-FLL-TPA 4,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/53758909805,https://www.airlines-manager.com/aircraft/show/97955541,17:00,4:14,320,"$701,298.00","$635,247.00","$1,985.15","$56,550.18"
SFO - TPA,53764392622,SFO-FLL-TPA 6 B,A319-100,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/53764392622,https://www.airlines-manager.com/aircraft/show/97900729,20:00,7:29,198,"$529,365.00","$481,509.00","$2,431.86","$41,931.12"
SFO - TPE,53764392621,SFO 168B-5 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/53764392621,https://www.airlines-manager.com/aircraft/show/87933799,20:00,21:14,1046,"$4,755,660.00","$4,405,634.00","$4,211.89","$3,572,135.68"
SFO - TPE,53768887059,SFO 168A-5 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/53768887059,https://www.airlines-manager.com/aircraft/show/86808589,22:00,23:14,1026,"$4,692,068.00","$4,346,049.00","$4,235.92","$3,523,823.51"
SFO - TUL,53722247548,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/53722247548,https://www.airlines-manager.com/aircraft/show/108410857,4:45,12:29,320,"$491,543.00","$446,045.00","$1,393.89","$57,678.23"
SFO - TUL,53735281170,SFO-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/53735281170,https://www.airlines-manager.com/aircraft/show/108466264,7:00,14:44,112,"$232,110.00","$205,102.00","$1,831.27","$26,521.81"
SFO - TUL,53753439621,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/53753439621,https://www.airlines-manager.com/aircraft/show/108410856,15:00,22:44,320,"$491,543.00","$446,045.00","$1,393.89","$57,678.23"
SFO - TUL,53753439622,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/53753439622,https://www.airlines-manager.com/aircraft/show/108410859,15:45,23:29,320,"$491,543.00","$446,045.00","$1,393.89","$57,678.23"
SFO - TUL,53764392764,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/53764392764,https://www.airlines-manager.com/aircraft/show/108410858,20:45,4:29,320,"$491,543.00","$446,045.00","$1,393.89","$57,678.23"
SFO - TUS,53735281231,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/53735281231,https://www.airlines-manager.com/aircraft/show/107160378,8:00,12:59,320,"$318,002.00","$282,841.00",$883.88,"$56,757.39"
SFO - TUS,53742108933,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/53742108933,https://www.airlines-manager.com/aircraft/show/107132310,9:30,14:29,112,"$151,573.00","$131,806.00","$1,176.84","$26,449.36"
SFO - TUS,53742108934,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/53742108934,https://www.airlines-manager.com/aircraft/show/107160381,10:30,15:29,320,"$318,002.00","$282,841.00",$883.88,"$56,757.39"
SFO - TUS,53753439676,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/53753439676,https://www.airlines-manager.com/aircraft/show/107160380,16:00,20:59,320,"$318,002.00","$282,841.00",$883.88,"$56,757.39"
SFO - TUS,53768887230,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/53768887230,https://www.airlines-manager.com/aircraft/show/107160379,23:30,4:29,320,"$318,002.00","$282,841.00",$883.88,"$56,757.39"
SFO - TYS,53735281073,SFO-TYS-MSN 2,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/53735281073,https://www.airlines-manager.com/aircraft/show/117782564,5:45,15:59,320,"$639,914.00","$585,231.00","$1,828.85","$57,188.70"
SFO - TYS,53735281074,SFO-TYS-MSN 1,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/53735281074,https://www.airlines-manager.com/aircraft/show/117782565,7:30,17:44,320,"$639,914.00","$585,231.00","$1,828.85","$57,188.70"
SFO - TYS,53753439697,SFO-TYS-MSN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/53753439697,https://www.airlines-manager.com/aircraft/show/117782582,16:00,2:14,198,"$481,892.00","$442,053.00","$2,232.59","$43,197.36"
SFO - TYS,53764392517,SFO-TYS-MSN 3,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/53764392517,https://www.airlines-manager.com/aircraft/show/117782563,19:30,5:44,320,"$639,914.00","$585,231.00","$1,828.85","$57,188.70"
SFO - TYS,53764392518,SFO-TYS-MSN 4,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/53764392518,https://www.airlines-manager.com/aircraft/show/117782562,20:45,6:59,320,"$639,914.00","$585,231.00","$1,828.85","$57,188.70"
SFO - YEG,53722247470,SFO-YEG-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/53722247470,https://www.airlines-manager.com/aircraft/show/117782560,3:30,9:59,320,"$419,195.00","$376,577.00","$1,176.80","$58,083.86"
SFO - YEG,53735281245,SFO-YEG-YYC 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/53735281245,https://www.airlines-manager.com/aircraft/show/117782581,8:15,14:59,198,"$316,101.00","$285,829.00","$1,443.58","$42,449.85"
SFO - YEG,53747970724,SFO-YEG-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/53747970724,https://www.airlines-manager.com/aircraft/show/117782561,13:00,19:29,320,"$419,195.00","$376,577.00","$1,176.80","$58,083.86"
SFO - YEG,53753439616,SFO-YEG-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/53753439616,https://www.airlines-manager.com/aircraft/show/116932364,15:00,21:29,320,"$419,195.00","$376,577.00","$1,176.80","$58,083.86"
SFO - YEG,53768887003,SFO-YEG-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/53768887003,https://www.airlines-manager.com/aircraft/show/117782559,21:30,3:59,320,"$419,195.00","$376,577.00","$1,176.80","$58,083.86"
SFO - YUL,53722247141,SFO-YYZ-YUL 1,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/53722247141,https://www.airlines-manager.com/aircraft/show/115413609,0:45,12:29,400,"$922,307.00","$846,283.00","$2,115.71","$72,126.39"
SFO - YUL,53735281111,SFO-YYZ-YUL 4,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/53735281111,https://www.airlines-manager.com/aircraft/show/115413612,6:00,17:44,400,"$922,307.00","$846,283.00","$2,115.71","$72,126.39"
SFO - YUL,53753439481,SFO-YYZ-YUL 2,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/53753439481,https://www.airlines-manager.com/aircraft/show/115413610,14:00,1:44,400,"$922,307.00","$846,283.00","$2,115.71","$72,126.39"
SFO - YUL,53758909793,SFO-YYZ-YUL 3,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/53758909793,https://www.airlines-manager.com/aircraft/show/115413611,16:45,4:29,400,"$922,307.00","$846,283.00","$2,115.71","$72,126.39"
SFO - YUL,53758909794,SFO-YYZ-YUL 5,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/53758909794,https://www.airlines-manager.com/aircraft/show/91126653,18:45,6:29,400,"$922,307.00","$846,283.00","$2,115.71","$72,126.39"
SFO - YVR,53722247170,SFO-MSY-STL 2,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/53722247170,https://www.airlines-manager.com/aircraft/show/98075266,0:45,5:59,320,"$330,083.00","$289,120.00",$903.50,"$55,245.86"
SFO - YVR,53722247171,SFO-MSY-STL 4,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/53722247171,https://www.airlines-manager.com/aircraft/show/98075264,2:45,7:59,320,"$330,083.00","$289,120.00",$903.50,"$55,245.86"
SFO - YVR,53735281187,SFO-MSY-STL 1,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/53735281187,https://www.airlines-manager.com/aircraft/show/98075267,7:15,12:29,320,"$330,083.00","$289,120.00",$903.50,"$55,245.86"
SFO - YVR,53753439662,SFO-MSY-STL 3,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/53753439662,https://www.airlines-manager.com/aircraft/show/98075265,16:00,21:14,320,"330,083$","289,120$",$903.50,"$55,245.86"
SFO - YVR,53758909926,SFO-MSY-STL 5,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/53758909926,https://www.airlines-manager.com/aircraft/show/98075263,18:00,23:14,320,"330,083$","289,120$",$903.50,"$55,245.86"
SFO - YVR,53768887014,SFO-MSY-STL 6,ERJ-175,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/53768887014,https://www.airlines-manager.com/aircraft/show/103534666,21:45,2:59,112,"156,483$","133,669$","$1,193.47","$25,541.85"
SFO - YYC,53722247498,SFO-YEG-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/53722247498,https://www.airlines-manager.com/aircraft/show/117782559,4:00,9:59,320,"385,106$","341,317$","$1,066.62","$57,044.62"
SFO - YYC,53747970745,SFO-YEG-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/53747970745,https://www.airlines-manager.com/aircraft/show/117782560,13:00,18:59,320,"385,106$","341,317$","$1,066.62","$57,044.62"
SFO - YYC,53753439581,SFO-YEG-YYC 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/53753439581,https://www.airlines-manager.com/aircraft/show/117782581,15:00,20:59,198,"289,706$","258,886$","$1,307.51","$43,267.86"
SFO - YYC,53764392537,SFO-YEG-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/53764392537,https://www.airlines-manager.com/aircraft/show/117782561,19:30,1:29,320,"385,106$","341,317$","$1,066.62","$57,044.62"
SFO - YYC,53768886997,SFO-YEG-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/53768886997,https://www.airlines-manager.com/aircraft/show/116932364,21:30,3:29,320,"385,106$","341,317$","$1,066.62","$57,044.62"
SFO - YYZ,53722247298,SFO-YYZ-YUL 2,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/53722247298,https://www.airlines-manager.com/aircraft/show/115413610,1:45,12:29,400,"881,945$","803,825$","$2,009.56","$74,890.53"
SFO - YYZ,53735281112,SFO-YYZ-YUL 3,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/53735281112,https://www.airlines-manager.com/aircraft/show/115413611,6:00,16:44,400,"881,945$","803,825$","$2,009.56","$74,890.53"
SFO - YYZ,53735281113,SFO-YYZ-YUL 5,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/53735281113,https://www.airlines-manager.com/aircraft/show/91126653,8:00,18:44,400,"881,945$","803,825$","$2,009.56","$74,890.53"
SFO - YYZ,53753439482,SFO-YYZ-YUL 1,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/53753439482,https://www.airlines-manager.com/aircraft/show/115413609,14:00,0:44,400,"881,945$","803,825$","$2,009.56","$74,890.53"
SFO - YYZ,53758909901,SFO-YYZ-YUL 4,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/53758909901,https://www.airlines-manager.com/aircraft/show/115413612,17:45,4:29,400,"881,945$","803,825$","$2,009.56","$74,890.53"`;