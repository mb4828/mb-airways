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
		hubs: ['sfo', 'iah', 'mia'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
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
		hubs: ['sfo'],
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
		hubs: ['sfo', 'iah', 'mia'],
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
		hubs: ['sfo', 'iah', 'mia'],
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
		hubs: ['mia'],
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
		hubs: ['sfo'],
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
		hubs: ['sfo', 'iah', 'mia'],
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
		hubs: ['sfo', 'iah', 'mia'],
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
		name: 'Savannah/Hilton Head International Airport (SAV)',
		city: 'Savannah, USA - Georgia 🇺🇸',
		pos: [32.12939158823519, -81.20176254594122],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Louisville Muhammad Ali International Airport (SDF)',
		city: 'Louisville, USA - Kentucky 🇺🇸',
		pos: [38.183129274399, -85.741038508206],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Norman Y. Mineta San Jose International Airport (SJC)',
		city: 'San Jose, USA - California 🇺🇸',
		pos: [37.363665715803144, -121.92895897613796],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Robert L. Bradshaw International Airport (SKB)',
		city: 'Basseterre, Saint Kitts & Nevis 🇰🇳',
		pos: [17.3108341120326, -62.71916974592183],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Shannon Airport (SNN)',
		city: 'Shannon, Ireland 🇮🇪',
		pos: [52.69897449709459, -8.914894175822724],
		hubs: ['ewr'],
		tz: 'Europe/Dublin'
	},
	{
		name: 'Princess Juliana International Airport (SXM)',
		city: 'Sint Maarten 🇸🇽',
		pos: [18.04192078940854, -63.113028459403225],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'San Antonio International Airport (SAT)',
		city: 'San Antonio, USA - Texas 🇺🇸',
		pos: [29.531290632199877, -98.46845569088684],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
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
		name: 'St. Louis Lambert International Airport (STL)',
		city: 'St. Louis, USA - Missouri 🇺🇸',
		pos: [38.74996298137237, -90.37484608851419],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Sydney Airport (SYD)',
		city: 'Sydney, Australia 🇦🇺',
		pos: [-33.94985609315001, 151.1818694507839],
		hubs: ['hnl'],
		tz: 'Australia/Sydney'
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
		hubs: ['sfo', 'iah', 'mia'],
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

var FLIGHT_SCHEDULE = `Route,Flight,Aircraft,Type,Route Link,Flight Link,Aircraft Link,Departure,Arrival,Pax,Turnover,Result
EWR - ABQ,52940290694,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/52940290694,https://www.airlines-manager.com/aircraft/show/90717078,0:45,9:59,310,"$573,408.00","$527,432.00"
EWR - ABQ,52940290695,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/52940290695,https://www.airlines-manager.com/aircraft/show/95950199,2:45,11:59,310,"$573,408.00","$527,432.00"
EWR - ABQ,52955473048,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/52955473048,https://www.airlines-manager.com/aircraft/show/90717079,10:00,19:14,310,"$573,408.00","$527,432.00"
EWR - ABQ,52975649176,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/52975649176,https://www.airlines-manager.com/aircraft/show/90717077,16:45,1:59,310,"$573,408.00","$527,432.00"
EWR - ABQ,52975649177,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/52975649177,https://www.airlines-manager.com/aircraft/show/90717076,17:45,2:59,310,"$573,408.00","$527,432.00"
EWR - AMS,52963026893,EWR 56B-4 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/52963026893,https://www.airlines-manager.com/aircraft/show/94521247,11:30,2:44,748,"$2,319,170.00","$2,074,344.00"
EWR - AMS,52963026894,EWR 56B-2 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/52963026894,https://www.airlines-manager.com/aircraft/show/90656556,13:15,4:29,748,"$2,319,170.00","$2,074,344.00"
EWR - AMS,52969613913,EWR 56B-7 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/52969613913,https://www.airlines-manager.com/aircraft/show/89124072,15:00,6:14,746,"$2,070,066.00","$1,887,214.00"
EWR - ANC,52940291056,EWR CARGO 1,A321neo-LR,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/52940291056,https://www.airlines-manager.com/aircraft/show/103406580,4:00,18:59,0,"$313,603.00","$249,749.00"
EWR - ANC,52955473041,EWR-STL-PIT 3,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/52955473041,https://www.airlines-manager.com/aircraft/show/115400546,10:00,0:59,338,"$995,934.00","$932,850.00"
EWR - ANC,52963027053,EWR-STL-PIT 2,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/52963027053,https://www.airlines-manager.com/aircraft/show/115400547,13:15,4:14,338,"$995,934.00","$932,850.00"
EWR - ANC,52975649363,EWR-STL-PIT 1,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/52975649363,https://www.airlines-manager.com/aircraft/show/115400548,18:45,9:44,338,"$995,934.00","$932,850.00"
EWR - ANC,52985325376,EWR-STL-PIT 4,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/52985325376,https://www.airlines-manager.com/aircraft/show/115400545,21:45,12:44,338,"$906,999.00","$851,584.00"
EWR - ATH,52940290493,EWR 84A-7 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/52940290493,https://www.airlines-manager.com/aircraft/show/94521249,0:00,19:59,852,"$3,233,821.00","$2,941,528.00"
EWR - ATH,52980970845,EWR 84A-4 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/52980970845,https://www.airlines-manager.com/aircraft/show/90656551,19:45,15:44,851,"$3,226,561.00","$2,934,518.00"
EWR - ATL,52955473075,EWR-DFW-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/52955473075,https://www.airlines-manager.com/aircraft/show/90489724,10:00,14:59,320,"$316,316.00","$254,999.00"
EWR - ATL,52969613860,EWR-DFW-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/52969613860,https://www.airlines-manager.com/aircraft/show/90489726,14:15,19:14,320,"$316,316.00","$254,999.00"
EWR - ATL,52975649274,EWR-DFW-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/52975649274,https://www.airlines-manager.com/aircraft/show/90489725,17:30,22:29,320,"$316,316.00","$254,999.00"
EWR - ATL,52975649275,EWR-DFW-ATL 6 B,A319-100,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/52975649275,https://www.airlines-manager.com/aircraft/show/105222360,18:30,23:29,198,"$240,974.00","$198,904.00"
EWR - ATL,52980970861,EWR-DFW-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/52980970861,https://www.airlines-manager.com/aircraft/show/86238752,19:45,0:44,320,"$316,316.00","$254,999.00"
EWR - ATL,52985325425,EWR-DFW-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/52985325425,https://www.airlines-manager.com/aircraft/show/86238753,22:15,3:14,320,"$316,316.00","$254,999.00"
EWR - AUS,52940290901,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/52940290901,https://www.airlines-manager.com/aircraft/show/90717077,2:00,9:59,310,"$499,234.00","$457,990.00"
EWR - AUS,52940290902,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/52940290902,https://www.airlines-manager.com/aircraft/show/90717076,3:00,10:59,310,"$499,234.00","$457,990.00"
EWR - AUS,52955473079,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/52955473079,https://www.airlines-manager.com/aircraft/show/90717078,10:00,17:59,310,"$499,234.00","$457,990.00"
EWR - AUS,52963026959,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/52963026959,https://www.airlines-manager.com/aircraft/show/95950199,12:00,19:59,310,"$499,234.00","$457,990.00"
EWR - AUS,52980970800,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/52980970800,https://www.airlines-manager.com/aircraft/show/90717079,19:15,3:14,310,"$499,234.00","$457,990.00"
EWR - BCN,52969613962,EWR 84A-5 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/52969613962,https://www.airlines-manager.com/aircraft/show/94521250,15:45,7:44,852,"$2,614,290.00","$2,371,993.00"
EWR - BCN,52980970882,EWR 84A-2 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/52980970882,https://www.airlines-manager.com/aircraft/show/94521252,20:00,11:59,852,"$2,614,290.00","$2,371,993.00"
EWR - BDA,52955472964,EWR-YEG-BFF 5 B,A319-100,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/52955472964,https://www.airlines-manager.com/aircraft/show/115493369,8:45,13:59,198,"$243,367.00","$221,594.00"
EWR - BDA,52963026823,EWR-YEG-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/52963026823,https://www.airlines-manager.com/aircraft/show/98936170,11:00,16:14,320,"$321,138.00","$290,348.00"
EWR - BDA,52963026824,EWR-YEG-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/52963026824,https://www.airlines-manager.com/aircraft/show/98936171,13:00,18:14,320,"$321,138.00","$290,348.00"
EWR - BDA,52980970968,EWR-YEG-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/52980970968,https://www.airlines-manager.com/aircraft/show/98936168,21:00,2:14,320,"$321,138.00","$290,348.00"
EWR - BDA,52985325465,EWR-YEG-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/52985325465,https://www.airlines-manager.com/aircraft/show/98936169,22:30,3:44,252,"$258,061.00","$229,054.00"
EWR - BDL,52940290738,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/52940290738,https://www.airlines-manager.com/aircraft/show/108834811,1:00,3:29,310,"$89,395.00","$71,067.00"
EWR - BDL,52955472999,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/52955472999,https://www.airlines-manager.com/aircraft/show/108466265,9:30,11:59,112,"$38,361.00","$27,163.00"
EWR - BDL,52969613839,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/52969613839,https://www.airlines-manager.com/aircraft/show/108834810,14:00,16:29,310,"$89,395.00","$71,067.00"
EWR - BDL,52969613840,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/52969613840,https://www.airlines-manager.com/aircraft/show/108834809,16:00,18:29,310,"$89,395.00","$71,067.00"
EWR - BDL,52985325516,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/52985325516,https://www.airlines-manager.com/aircraft/show/108834808,23:00,1:29,310,"$89,395.00","$71,067.00"
EWR - BFF,52940290910,EWR-YEG-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/52940290910,https://www.airlines-manager.com/aircraft/show/98936168,2:15,10:14,320,"$505,556.00","$462,845.00"
EWR - BFF,52940290911,EWR-YEG-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/52940290911,https://www.airlines-manager.com/aircraft/show/98936169,3:45,11:44,320,"$505,556.00","$462,845.00"
EWR - BFF,52969613810,EWR-YEG-BFF 5 B,A319-100,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/52969613810,https://www.airlines-manager.com/aircraft/show/115493369,14:00,21:59,198,"$381,713.00","$350,803.00"
EWR - BFF,52969613811,EWR-YEG-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/52969613811,https://www.airlines-manager.com/aircraft/show/98936170,16:15,0:14,320,"$505,556.00","$462,845.00"
EWR - BFF,52975649337,EWR-YEG-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/52975649337,https://www.airlines-manager.com/aircraft/show/98936171,18:15,2:14,320,"$505,556.00","$462,845.00"
EWR - BHM,52940290913,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/52940290913,https://www.airlines-manager.com/aircraft/show/116042862,2:15,7:44,310,"$345,531.00","$316,738.00"
EWR - BHM,52955472930,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/52955472930,https://www.airlines-manager.com/aircraft/show/116042859,8:30,13:59,310,"$345,531.00","$316,738.00"
EWR - BHM,52969613752,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/52969613752,https://www.airlines-manager.com/aircraft/show/116042860,14:00,19:29,310,"$345,531.00","$316,738.00"
EWR - BHM,52969613753,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/52969613753,https://www.airlines-manager.com/aircraft/show/116042861,15:15,20:44,310,"$345,531.00","$316,738.00"
EWR - BIL,52955473055,EWR-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/52955473055,https://www.airlines-manager.com/aircraft/show/116047882,10:00,18:59,320,"$563,328.00","$517,371.00"
EWR - BIL,52963026906,EWR-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/52963026906,https://www.airlines-manager.com/aircraft/show/116047885,12:00,20:59,320,"$563,328.00","$517,371.00"
EWR - BIL,52980970991,EWR-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/52980970991,https://www.airlines-manager.com/aircraft/show/116047884,21:15,6:14,320,"$563,328.00","$517,371.00"
EWR - BIL,52985325491,EWR-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/52985325491,https://www.airlines-manager.com/aircraft/show/116047883,22:45,7:44,320,"$563,328.00","$517,371.00"
EWR - BNA,52940291012,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/52940291012,https://www.airlines-manager.com/aircraft/show/104610408,3:15,8:14,310,"$321,727.00","$292,387.00"
EWR - BNA,52955472949,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/52955472949,https://www.airlines-manager.com/aircraft/show/104610409,8:30,13:29,310,"$321,727.00","$292,387.00"
EWR - BNA,52963027030,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/52963027030,https://www.airlines-manager.com/aircraft/show/104610410,13:00,17:59,310,"$321,727.00","$292,387.00"
EWR - BNA,52975649222,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/52975649222,https://www.airlines-manager.com/aircraft/show/96421247,17:00,21:59,112,"$152,736.00","$133,830.00"
EWR - BNA,52980970978,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/52980970978,https://www.airlines-manager.com/aircraft/show/104610407,21:15,2:14,310,"$321,727.00","$292,387.00"
EWR - BOI,52940290808,EWR-BOI-PBI 5 B,A319-100,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/52940290808,https://www.airlines-manager.com/aircraft/show/110582846,1:30,11:59,198,"$490,320.00","$452,078.00"
EWR - BOI,52955473010,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/52955473010,https://www.airlines-manager.com/aircraft/show/104418460,10:00,20:29,310,"$652,848.00","$605,161.00"
EWR - BOI,52969613906,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/52969613906,https://www.airlines-manager.com/aircraft/show/104418463,15:00,1:29,310,"$652,848.00","$605,161.00"
EWR - BOI,52969800879,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/52969800879,https://www.airlines-manager.com/aircraft/show/104418462,16:30,2:59,310,"$652,848.00","$605,161.00"
EWR - BOI,52985325544,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/52985325544,https://www.airlines-manager.com/aircraft/show/104418461,23:30,9:59,310,"$652,848.00","$605,161.00"
EWR - BOS,52940290992,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/52940290992,https://www.airlines-manager.com/aircraft/show/104034464,3:00,5:59,216,"$93,767.00","$73,981.00"
EWR - BOS,52955473063,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/52955473063,https://www.airlines-manager.com/aircraft/show/104034463,10:00,12:59,216,"$93,767.00","$73,981.00"
EWR - BOS,52963026973,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/52963026973,https://www.airlines-manager.com/aircraft/show/104034462,12:45,15:44,216,"$93,767.00","$73,981.00"
EWR - BOS,52969613741,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/52969613741,https://www.airlines-manager.com/aircraft/show/99316501,13:45,16:44,216,"$93,767.00","$73,981.00"
EWR - BOS,52975649226,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/52975649226,https://www.airlines-manager.com/aircraft/show/104034464,17:00,19:59,216,"$93,767.00","$73,981.00"
EWR - BOS,52980970889,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/52980970889,https://www.airlines-manager.com/aircraft/show/104034463,20:00,22:59,216,"$93,767.00","$73,981.00"
EWR - BOS,52985325483,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/52985325483,https://www.airlines-manager.com/aircraft/show/104034462,22:45,1:44,216,"$93,767.00","$73,981.00"
EWR - BOS,52985325484,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/52985325484,https://www.airlines-manager.com/aircraft/show/99316501,23:45,2:44,216,"$93,767.00","$73,981.00"
EWR - BTV,52955472961,EWR-FCA-CID 1,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/52955472961,https://www.airlines-manager.com/aircraft/show/116042866,8:45,11:59,310,"$139,427.00","$120,212.00"
EWR - BTV,52963026952,EWR-FCA-CID 4,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/52963026952,https://www.airlines-manager.com/aircraft/show/116042863,12:00,15:14,310,"$139,427.00","$120,212.00"
EWR - BTV,52963026953,EWR-FCA-CID 3,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/52963026953,https://www.airlines-manager.com/aircraft/show/116042864,13:00,16:14,310,"$139,427.00","$120,212.00"
EWR - BTV,52975649362,EWR-FCA-CID 2,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/52975649362,https://www.airlines-manager.com/aircraft/show/116042865,18:45,21:59,310,"$139,427.00","$120,212.00"
EWR - BUF,52940291130,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/52940291130,https://www.airlines-manager.com/aircraft/show/106104450,5:30,8:44,112,"$70,537.00","$57,733.00"
EWR - BUF,52963026801,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/52963026801,https://www.airlines-manager.com/aircraft/show/105731236,11:00,14:14,320,"$154,036.00","$130,066.00"
EWR - BUF,52969613872,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/52969613872,https://www.airlines-manager.com/aircraft/show/88494376,14:45,17:59,320,"$154,036.00","$130,066.00"
EWR - BUF,52975649352,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/52975649352,https://www.airlines-manager.com/aircraft/show/88494377,18:30,21:44,320,"$154,036.00","$130,066.00"
EWR - BUF,52985325501,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/52985325501,https://www.airlines-manager.com/aircraft/show/88494375,23:00,2:14,320,"$154,036.00","$130,066.00"
EWR - BWI,52940290544,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/52940290544,https://www.airlines-manager.com/aircraft/show/104034464,0:15,2:59,216,"$74,600.00","$56,030.00"
EWR - BWI,52940290545,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/52940290545,https://www.airlines-manager.com/aircraft/show/104034463,3:15,5:59,216,"$74,600.00","$56,030.00"
EWR - BWI,52955473064,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/52955473064,https://www.airlines-manager.com/aircraft/show/104034462,10:00,12:44,216,"$74,600.00","$56,030.00"
EWR - BWI,52963026786,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/52963026786,https://www.airlines-manager.com/aircraft/show/99316501,11:00,13:44,216,"$74,600.00","$56,030.00"
EWR - BWI,52969613853,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/52969613853,https://www.airlines-manager.com/aircraft/show/104034464,14:15,16:59,216,"$74,600.00","$56,030.00"
EWR - BWI,52975649249,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/52975649249,https://www.airlines-manager.com/aircraft/show/104034463,17:15,19:59,216,"$74,600.00","$56,030.00"
EWR - BWI,52980970890,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/52980970890,https://www.airlines-manager.com/aircraft/show/104034462,20:00,22:44,216,"$74,600.00","$56,030.00"
EWR - BWI,52980970891,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/52980970891,https://www.airlines-manager.com/aircraft/show/99316501,21:00,23:44,216,"$74,600.00","$56,030.00"
EWR - BZN,52940290670,EWR-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/52940290670,https://www.airlines-manager.com/aircraft/show/116047885,0:30,9:44,320,"$590,594.00","$543,690.00"
EWR - BZN,52963026905,EWR-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/52963026905,https://www.airlines-manager.com/aircraft/show/116047884,12:00,21:14,320,"$590,594.00","$543,690.00"
EWR - BZN,52969613734,EWR-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/52969613734,https://www.airlines-manager.com/aircraft/show/116047883,13:30,22:44,320,"$590,594.00","$543,690.00"
EWR - BZN,52985325460,EWR-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/52985325460,https://www.airlines-manager.com/aircraft/show/116047882,22:30,7:44,318,"$587,706.00","$540,916.00"
EWR - CAK,52955472950,EWR-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/52955472950,https://www.airlines-manager.com/aircraft/show/116047884,8:30,11:59,320,"$190,264.00","$166,162.00"
EWR - CAK,52955472951,EWR-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/52955472951,https://www.airlines-manager.com/aircraft/show/116047883,10:00,13:29,320,"$190,264.00","$166,162.00"
EWR - CAK,52980970775,EWR-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/52980970775,https://www.airlines-manager.com/aircraft/show/116047882,19:00,22:29,320,"$190,264.00","$166,162.00"
EWR - CAK,52980970776,EWR-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/52980970776,https://www.airlines-manager.com/aircraft/show/116047885,21:00,0:29,284,"$177,277.00","$153,543.00"
EWR - CDG,52940291002,EWR 56A-5 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/52940291002,https://www.airlines-manager.com/aircraft/show/106813011,3:00,18:14,748,"$2,328,257.00","$2,067,826.00"
EWR - CDG,52955472957,EWR 56A-6 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/52955472957,https://www.airlines-manager.com/aircraft/show/106813012,8:45,23:59,748,"$2,328,257.00","$2,067,826.00"
EWR - CDG,52980970777,EWR 56A-2 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/52980970777,https://www.airlines-manager.com/aircraft/show/106813008,19:00,10:14,558,"$1,737,704.00","$1,561,001.00"
EWR - CHS,52955472945,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/52955472945,https://www.airlines-manager.com/aircraft/show/110044463,8:30,12:59,310,"$288,524.00","$263,580.00"
EWR - CHS,52963026947,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/52963026947,https://www.airlines-manager.com/aircraft/show/110113039,12:00,16:29,112,"$137,745.00","$121,682.00"
EWR - CHS,52969613848,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/52969613848,https://www.airlines-manager.com/aircraft/show/110044466,14:15,18:44,310,"$288,524.00","$263,580.00"
EWR - CHS,52980970981,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/52980970981,https://www.airlines-manager.com/aircraft/show/110044465,21:15,1:44,310,"$288,524.00","$263,580.00"
EWR - CHS,52985325515,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/52985325515,https://www.airlines-manager.com/aircraft/show/110044464,23:00,3:29,279,"$271,679.00","$247,269.00"
EWR - CID,52940290790,EWR-FCA-CID 4,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/52940290790,https://www.airlines-manager.com/aircraft/show/116042863,1:15,6:59,310,"$356,205.00","$327,596.00"
EWR - CID,52940290791,EWR-FCA-CID 3,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/52940290791,https://www.airlines-manager.com/aircraft/show/116042864,2:15,7:59,310,"$356,205.00","$327,596.00"
EWR - CID,52955473044,EWR-FCA-CID 2,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/52955473044,https://www.airlines-manager.com/aircraft/show/116042865,10:00,15:44,310,"$356,205.00","$327,596.00"
EWR - CID,52985325415,EWR-FCA-CID 1,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/52985325415,https://www.airlines-manager.com/aircraft/show/116042866,22:00,3:44,293,"$344,775.00","$316,591.00"
EWR - CLE,52940290869,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/52940290869,https://www.airlines-manager.com/aircraft/show/106104450,1:45,5:29,112,"$91,777.00","$77,198.00"
EWR - CLE,52940290870,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/52940290870,https://www.airlines-manager.com/aircraft/show/105731236,5:00,8:44,320,"$197,808.00","$170,994.00"
EWR - CLE,52963026855,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/52963026855,https://www.airlines-manager.com/aircraft/show/88494376,11:00,14:44,320,"$197,808.00","$170,994.00"
EWR - CLE,52969613871,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/52969613871,https://www.airlines-manager.com/aircraft/show/88494377,14:45,18:29,320,"$197,808.00","$170,994.00"
EWR - CLE,52980970795,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/52980970795,https://www.airlines-manager.com/aircraft/show/88494375,19:15,22:59,320,"$197,808.00","$170,994.00"
EWR - CLT,52940290851,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/52940290851,https://www.airlines-manager.com/aircraft/show/104034462,1:45,5:59,216,"$189,402.00","$162,891.00"
EWR - CLT,52940290852,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/52940290852,https://www.airlines-manager.com/aircraft/show/99316501,2:45,6:59,216,"$189,402.00","$162,891.00"
EWR - CLT,52955473050,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/52955473050,https://www.airlines-manager.com/aircraft/show/104034464,10:00,14:14,216,"$189,402.00","$162,891.00"
EWR - CLT,52963027004,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/52963027004,https://www.airlines-manager.com/aircraft/show/104034463,13:00,17:14,216,"$189,402.00","$162,891.00"
EWR - CLT,52969613967,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/52969613967,https://www.airlines-manager.com/aircraft/show/104034462,15:45,19:59,216,"$189,402.00","$162,891.00"
EWR - CLT,52975649180,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/52975649180,https://www.airlines-manager.com/aircraft/show/99316501,16:45,20:59,216,"$189,402.00","$162,891.00"
EWR - CLT,52980970887,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/52980970887,https://www.airlines-manager.com/aircraft/show/104034464,20:00,0:14,216,"$189,402.00","$162,891.00"
EWR - CLT,52985325504,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/52985325504,https://www.airlines-manager.com/aircraft/show/104034463,23:00,3:14,216,"$189,402.00","$162,891.00"
EWR - CMH,52940291097,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/52940291097,https://www.airlines-manager.com/aircraft/show/104610409,4:30,8:29,310,"$222,861.00","$198,707.00"
EWR - CMH,52955472940,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/52955472940,https://www.airlines-manager.com/aircraft/show/104610410,8:30,12:29,310,"$222,861.00","$198,707.00"
EWR - CMH,52963027000,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/52963027000,https://www.airlines-manager.com/aircraft/show/96421247,13:00,16:59,112,"$103,792.00","$88,495.00"
EWR - CMH,52975649252,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/52975649252,https://www.airlines-manager.com/aircraft/show/104610407,17:15,21:14,310,"$222,861.00","$198,707.00"
EWR - CMH,52985325528,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/52985325528,https://www.airlines-manager.com/aircraft/show/104610408,23:15,3:14,310,"$222,861.00","$198,707.00"
EWR - COS,52940290823,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/52940290823,https://www.airlines-manager.com/aircraft/show/108834808,1:30,9:59,310,"$533,296.00","$491,644.00"
EWR - COS,52940290824,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/52940290824,https://www.airlines-manager.com/aircraft/show/108834811,3:30,11:59,310,"$533,296.00","$491,644.00"
EWR - COS,52963027043,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/52963027043,https://www.airlines-manager.com/aircraft/show/108466265,13:00,21:29,112,"$250,525.00","$222,707.00"
EWR - COS,52969800875,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/52969800875,https://www.airlines-manager.com/aircraft/show/108834810,16:30,0:59,310,"$533,296.00","$491,644.00"
EWR - COS,52975649350,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/52975649350,https://www.airlines-manager.com/aircraft/show/108834809,18:30,2:59,310,"$533,296.00","$491,644.00"
EWR - CUN,52940290706,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/52940290706,https://www.airlines-manager.com/aircraft/show/106581306,0:45,8:44,320,"$520,592.00","$472,816.00"
EWR - CUN,52940290707,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/52940290707,https://www.airlines-manager.com/aircraft/show/106581305,2:15,10:14,320,"$520,592.00","$472,816.00"
EWR - CUN,52963027021,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/52963027021,https://www.airlines-manager.com/aircraft/show/106581304,13:00,20:59,320,"$520,592.00","$472,816.00"
EWR - CUN,52969613864,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/52969613864,https://www.airlines-manager.com/aircraft/show/106581307,14:30,22:29,320,"$520,592.00","$472,816.00"
EWR - CUN,52985325422,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/52985325422,https://www.airlines-manager.com/aircraft/show/86238754,22:15,6:14,320,"$520,592.00","$472,816.00"
EWR - CVG,52940290639,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/52940290639,https://www.airlines-manager.com/aircraft/show/104610409,0:15,4:29,310,"$269,690.00","$241,965.00"
EWR - CVG,52940290640,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/52940290640,https://www.airlines-manager.com/aircraft/show/104610410,4:15,8:29,310,"$269,690.00","$241,965.00"
EWR - CVG,52955472908,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/52955472908,https://www.airlines-manager.com/aircraft/show/96421247,8:15,12:29,112,"$127,381.00","$109,755.00"
EWR - CVG,52955472909,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/52955472909,https://www.airlines-manager.com/aircraft/show/107576645,9:00,13:14,0,"$68,966.00","$50,044.00"
EWR - CVG,52963027001,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/52963027001,https://www.airlines-manager.com/aircraft/show/104610407,13:00,17:14,310,"$269,690.00","$241,965.00"
EWR - CVG,52980970765,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/52980970765,https://www.airlines-manager.com/aircraft/show/104610408,19:00,23:14,310,"$269,690.00","$241,965.00"
EWR - DEN,52940290843,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/52940290843,https://www.airlines-manager.com/aircraft/show/86270785,1:45,9:59,310,"$528,845.00","$464,739.00"
EWR - DEN,52940290844,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/52940290844,https://www.airlines-manager.com/aircraft/show/90452835,2:45,10:59,310,"$528,845.00","$464,739.00"
EWR - DEN,52955473073,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/52955473073,https://www.airlines-manager.com/aircraft/show/87153196,10:00,18:14,310,"$528,845.00","$464,739.00"
EWR - DEN,52963026770,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/52963026770,https://www.airlines-manager.com/aircraft/show/86270783,11:00,19:14,310,"$528,845.00","$464,739.00"
EWR - DEN,52969614007,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/52969614007,https://www.airlines-manager.com/aircraft/show/90452833,16:00,0:14,310,"$528,845.00","$464,739.00"
EWR - DEN,52975649218,EWR-DEN-SLC 6 B,A319-100,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/52975649218,https://www.airlines-manager.com/aircraft/show/105223076,17:00,1:14,197,"$395,360.00","$344,081.00"
EWR - DFW,52940290934,EWR-DFW-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/52940290934,https://www.airlines-manager.com/aircraft/show/90489724,2:30,9:59,320,"$473,204.00","$408,089.00"
EWR - DFW,52940290935,EWR-DFW-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/52940290935,https://www.airlines-manager.com/aircraft/show/86238753,3:30,10:59,320,"$473,204.00","$408,089.00"
EWR - DFW,52955473031,EWR-DFW-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/52955473031,https://www.airlines-manager.com/aircraft/show/90489725,10:00,17:29,320,"$473,204.00","$408,089.00"
EWR - DFW,52963026859,EWR-DFW-ATL 6 B,A319-100,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/52963026859,https://www.airlines-manager.com/aircraft/show/105222360,11:00,18:29,198,"$357,750.00","$312,148.00"
EWR - DFW,52963026860,EWR-DFW-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/52963026860,https://www.airlines-manager.com/aircraft/show/86238752,12:15,19:44,320,"$473,204.00","$408,089.00"
EWR - DFW,52980970806,EWR-DFW-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/52980970806,https://www.airlines-manager.com/aircraft/show/90489726,19:15,2:44,319,"$470,502.00","$405,442.00"
EWR - DSM,52940290890,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/52940290890,https://www.airlines-manager.com/aircraft/show/110113039,2:00,7:59,112,"$177,392.00","$157,352.00"
EWR - DSM,52940290891,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/52940290891,https://www.airlines-manager.com/aircraft/show/110044466,4:15,10:14,310,"$375,064.00","$344,614.00"
EWR - DSM,52963026938,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/52963026938,https://www.airlines-manager.com/aircraft/show/110044465,12:00,17:59,310,"$375,064.00","$344,614.00"
EWR - DSM,52969613738,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/52969613738,https://www.airlines-manager.com/aircraft/show/110044464,13:45,19:44,310,"$375,064.00","$344,614.00"
EWR - DSM,52985325459,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/52985325459,https://www.airlines-manager.com/aircraft/show/110044463,22:30,4:29,274,"$349,227.00","$319,777.00"
EWR - DTW,52940291023,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/52940291023,https://www.airlines-manager.com/aircraft/show/92003921,3:30,7:29,320,"$226,011.00","$188,764.00"
EWR - DTW,52955473068,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/52955473068,https://www.airlines-manager.com/aircraft/show/92003925,10:00,13:59,320,"$226,011.00","$188,764.00"
EWR - DTW,52969613737,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/52969613737,https://www.airlines-manager.com/aircraft/show/92003924,13:30,17:29,320,"$226,011.00","$188,764.00"
EWR - DTW,52985325377,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/52985325377,https://www.airlines-manager.com/aircraft/show/92003923,21:45,1:44,320,"$226,011.00","$188,764.00"
EWR - DTW,52985325378,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/52985325378,https://www.airlines-manager.com/aircraft/show/92003922,22:15,2:14,320,"$226,011.00","$188,764.00"
EWR - DTW,52985325379,EWR CARGO 1,A321neo-LR,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/52985325379,https://www.airlines-manager.com/aircraft/show/103406580,22:45,2:44,0,"$77,907.00","$46,641.00"
EWR - DUB,52940291037,EWR 56C-2 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/52940291037,https://www.airlines-manager.com/aircraft/show/106721557,3:30,16:59,598,"$1,654,247.00","$1,542,983.00"
EWR - DUB,52940291038,EWR 56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/52940291038,https://www.airlines-manager.com/aircraft/show/106721559,5:15,18:44,598,"$1,654,247.00","$1,542,983.00"
EWR - DUB,52955473092,EWR 56C-6 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/52955473092,https://www.airlines-manager.com/aircraft/show/106721561,10:30,23:59,597,"$1,649,930.00","$1,538,785.00"
EWR - EDI,52940291075,EWR 56C-3 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/52940291075,https://www.airlines-manager.com/aircraft/show/106721558,4:15,17:59,598,"$1,639,790.00","$1,532,499.00"
EWR - EDI,52940291076,EWR 56C-5 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/52940291076,https://www.airlines-manager.com/aircraft/show/106721560,6:00,19:44,598,"$1,639,790.00","$1,532,499.00"
EWR - EDI,52980970853,EWR 56C-5 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/52980970853,https://www.airlines-manager.com/aircraft/show/106721560,19:45,9:29,597,"$1,637,257.00","$1,530,067.00"
EWR - ELP,52940290643,EWR-ELP-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/52940290643,https://www.airlines-manager.com/aircraft/show/103365577,0:30,9:59,320,"$590,338.00","$540,556.00"
EWR - ELP,52940290644,EWR-ELP-SAT 5 B,A319-100,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/52940290644,https://www.airlines-manager.com/aircraft/show/110582847,2:30,11:59,198,"$444,813.00","$408,610.00"
EWR - ELP,52955473021,EWR-ELP-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/52955473021,https://www.airlines-manager.com/aircraft/show/103365578,10:00,19:29,320,"$590,338.00","$540,556.00"
EWR - ELP,52963026948,EWR-ELP-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/52963026948,https://www.airlines-manager.com/aircraft/show/103365575,12:00,21:29,320,"$590,338.00","$540,556.00"
EWR - ELP,52969614012,EWR-ELP-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/52969614012,https://www.airlines-manager.com/aircraft/show/103365576,16:15,1:44,320,"$590,338.00","$540,556.00"
EWR - FAR,52940290866,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/52940290866,https://www.airlines-manager.com/aircraft/show/86270784,1:45,8:29,310,"$423,530.00","$390,563.00"
EWR - FAR,52940290867,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/52940290867,https://www.airlines-manager.com/aircraft/show/86270786,5:00,11:44,310,"$423,530.00","$390,563.00"
EWR - FAR,52969613939,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/52969613939,https://www.airlines-manager.com/aircraft/show/86270787,15:00,21:44,310,"$423,530.00","$390,563.00"
EWR - FAR,52980970805,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/52980970805,https://www.airlines-manager.com/aircraft/show/90452834,19:15,1:59,310,"$423,530.00","$390,563.00"
EWR - FCA,52963026945,EWR-FCA-CID 1,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/52963026945,https://www.airlines-manager.com/aircraft/show/116042866,12:00,21:59,310,"$623,211.00","$578,509.00"
EWR - FCA,52969613952,EWR-FCA-CID 4,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/52969613952,https://www.airlines-manager.com/aircraft/show/116042863,15:15,1:14,310,"$623,211.00","$578,509.00"
EWR - FCA,52969613953,EWR-FCA-CID 3,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/52969613953,https://www.airlines-manager.com/aircraft/show/116042864,16:15,2:14,310,"$623,211.00","$578,509.00"
EWR - FCA,52985325416,EWR-FCA-CID 2,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/52985325416,https://www.airlines-manager.com/aircraft/show/116042865,22:00,7:59,310,"$623,211.00","$578,509.00"
EWR - FCO,52940290933,EWR 84A-2 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/52940290933,https://www.airlines-manager.com/aircraft/show/94521252,2:30,19:59,852,"$2,900,064.00","$2,626,150.00"
EWR - FCO,52963026925,EWR 84A-3 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/52963026925,https://www.airlines-manager.com/aircraft/show/90656553,12:00,5:29,851,"$2,897,737.00","$2,623,967.00"
EWR - FLL,52940290773,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/52940290773,https://www.airlines-manager.com/aircraft/show/107576645,1:15,7:29,0,"$102,853.00","$77,305.00"
EWR - FLL,52940290774,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/52940290774,https://www.airlines-manager.com/aircraft/show/92003924,3:45,9:59,320,"$388,956.00","$348,943.00"
EWR - FLL,52940290775,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/52940290775,https://www.airlines-manager.com/aircraft/show/92003922,5:45,11:59,320,"$388,956.00","$348,943.00"
EWR - FLL,52963026792,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/52963026792,https://www.airlines-manager.com/aircraft/show/92003921,11:00,17:14,320,"$388,956.00","$348,943.00"
EWR - FLL,52963026793,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/52963026793,https://www.airlines-manager.com/aircraft/show/92003923,12:00,18:14,320,"$388,956.00","$348,943.00"
EWR - FLL,52975649255,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/52975649255,https://www.airlines-manager.com/aircraft/show/92003925,17:30,23:44,320,"$388,956.00","$348,943.00"
EWR - FRA,52940290960,EWR 56B-5 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/52940290960,https://www.airlines-manager.com/aircraft/show/94521253,2:45,18:44,748,"$2,440,930.00","$2,176,026.00"
EWR - FRA,52940290961,EWR 56B-3 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/52940290961,https://www.airlines-manager.com/aircraft/show/90656555,4:30,20:29,748,"$2,440,930.00","$2,176,026.00"
EWR - FRA,52940290962,EWR 56B-1 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/52940290962,https://www.airlines-manager.com/aircraft/show/94521251,6:15,22:14,746,"$2,195,972.00","$1,995,306.00"
EWR - FSD,52940291085,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/52940291085,https://www.airlines-manager.com/aircraft/show/107161240,4:15,10:59,310,"$411,342.00","$378,861.00"
EWR - FSD,52955472985,EWR-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/52955472985,https://www.airlines-manager.com/aircraft/show/86782214,9:00,15:44,112,"$193,886.00","$172,356.00"
EWR - FSD,52963026840,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/52963026840,https://www.airlines-manager.com/aircraft/show/107161239,11:00,17:44,310,"$411,342.00","$378,861.00"
EWR - FSD,52969613948,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/52969613948,https://www.airlines-manager.com/aircraft/show/107161241,15:15,21:59,310,"$411,342.00","$378,861.00"
EWR - FSD,52975649329,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/52975649329,https://www.airlines-manager.com/aircraft/show/107161238,18:15,0:59,278,"$385,695.00","$354,248.00"
EWR - GRR,52955472928,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/52955472928,https://www.airlines-manager.com/aircraft/show/116042862,8:30,12:59,310,"$277,011.00","$252,069.00"
EWR - GRR,52969613751,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/52969613751,https://www.airlines-manager.com/aircraft/show/116042859,14:00,18:29,310,"$277,011.00","$252,069.00"
EWR - GRR,52980970842,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/52980970842,https://www.airlines-manager.com/aircraft/show/116042860,19:30,23:59,310,"$277,011.00","$252,069.00"
EWR - GRR,52980970843,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/52980970843,https://www.airlines-manager.com/aircraft/show/116042861,20:45,1:14,309,"$275,381.00","$250,464.00"
EWR - IAH,52940291026,EWR-IAH-LAS 3,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/52940291026,https://www.airlines-manager.com/aircraft/show/105859512,3:30,10:59,338,"$517,412.00","$469,550.00"
EWR - IAH,52940291027,EWR-IAH-LAS 5,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/52940291027,https://www.airlines-manager.com/aircraft/show/105859514,4:30,11:59,338,"$517,412.00","$469,550.00"
EWR - IAH,52955472820,EWR-IAH-LAS 1,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/52955472820,https://www.airlines-manager.com/aircraft/show/105859510,7:30,14:59,338,"$517,412.00","$469,550.00"
EWR - IAH,52963026802,EWR-IAH-LAS 2,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/52963026802,https://www.airlines-manager.com/aircraft/show/105859511,11:00,18:29,338,"$517,412.00","$469,550.00"
EWR - IAH,52963026803,EWR-IAH-LAS 4,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/52963026803,https://www.airlines-manager.com/aircraft/show/105859513,12:00,19:29,338,"$517,412.00","$469,550.00"
EWR - IAH,52975649369,EWR-IAH-LAS 6,ERJ-175,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/52975649369,https://www.airlines-manager.com/aircraft/show/105864236,18:45,2:14,112,"$225,522.00","$193,315.00"
EWR - ICT,52940290739,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/52940290739,https://www.airlines-manager.com/aircraft/show/108834810,1:00,7:59,310,"$441,091.00","$406,391.00"
EWR - ICT,52940290740,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/52940290740,https://www.airlines-manager.com/aircraft/show/108834809,3:00,9:59,310,"$441,091.00","$406,391.00"
EWR - ICT,52963026833,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/52963026833,https://www.airlines-manager.com/aircraft/show/108834808,11:00,17:59,310,"$441,091.00","$406,391.00"
EWR - ICT,52963026834,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/52963026834,https://www.airlines-manager.com/aircraft/show/108834811,13:00,19:59,310,"$441,091.00","$406,391.00"
EWR - ICT,52980970994,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/52980970994,https://www.airlines-manager.com/aircraft/show/108466265,21:30,4:29,112,"$208,809.00","$185,789.00"
EWR - IND,52940290678,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/52940290678,https://www.airlines-manager.com/aircraft/show/88494376,0:30,4:59,320,"$294,196.00","$262,628.00"
EWR - IND,52940290679,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/52940290679,https://www.airlines-manager.com/aircraft/show/88494377,4:15,8:44,320,"$294,196.00","$262,628.00"
EWR - IND,52963026794,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/52963026794,https://www.airlines-manager.com/aircraft/show/88494375,11:00,15:29,320,"$294,196.00","$262,628.00"
EWR - IND,52975649264,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/52975649264,https://www.airlines-manager.com/aircraft/show/106104450,17:30,21:59,112,"$140,436.00","$122,781.00"
EWR - IND,52980970940,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/52980970940,https://www.airlines-manager.com/aircraft/show/105731236,20:45,1:14,320,"$294,196.00","$262,628.00"
EWR - JAN,52940290894,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/52940290894,https://www.airlines-manager.com/aircraft/show/90452834,2:00,8:14,310,"$387,653.00","$356,972.00"
EWR - JAN,52955472937,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/52955472937,https://www.airlines-manager.com/aircraft/show/86270784,8:30,14:44,310,"$387,653.00","$356,972.00"
EWR - JAN,52963026958,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/52963026958,https://www.airlines-manager.com/aircraft/show/86270786,12:00,18:14,310,"$387,653.00","$356,972.00"
EWR - JAN,52985325382,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/52985325382,https://www.airlines-manager.com/aircraft/show/86270787,21:45,3:59,310,"$387,653.00","$356,972.00"
EWR - JAX,52940290912,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/52940290912,https://www.airlines-manager.com/aircraft/show/104610407,2:15,7:29,310,"$336,390.00","$307,367.00"
EWR - JAX,52955472907,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/52955472907,https://www.airlines-manager.com/aircraft/show/104610408,8:15,13:29,310,"$336,390.00","$307,367.00"
EWR - JAX,52969613826,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/52969613826,https://www.airlines-manager.com/aircraft/show/104610409,14:00,19:14,310,"$336,390.00","$307,367.00"
EWR - JAX,52975649307,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/52975649307,https://www.airlines-manager.com/aircraft/show/104610410,18:00,23:14,310,"$336,390.00","$307,367.00"
EWR - JAX,52985325398,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/52985325398,https://www.airlines-manager.com/aircraft/show/96421247,22:00,3:14,112,"$159,700.00","$140,854.00"
EWR - KEF,52975649212,EWR 56C-2 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/52975649212,https://www.airlines-manager.com/aircraft/show/106721557,17:00,4:14,598,"$1,336,808.00","$1,247,797.00"
EWR - KEF,52975649213,EWR 56C-3 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/52975649213,https://www.airlines-manager.com/aircraft/show/106721558,18:00,5:14,598,"$1,336,808.00","$1,247,797.00"
EWR - KEF,52975649214,EWR 56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/52975649214,https://www.airlines-manager.com/aircraft/show/106721559,18:45,5:59,598,"$1,336,808.00","$1,247,797.00"
EWR - LAS,52940290630,EWR-IAH-LAS 2,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/52940290630,https://www.airlines-manager.com/aircraft/show/105859511,0:15,10:59,338,"$734,436.00","$670,272.00"
EWR - LAS,52940290631,EWR-IAH-LAS 4,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/52940290631,https://www.airlines-manager.com/aircraft/show/105859513,1:15,11:59,338,"$734,436.00","$670,272.00"
EWR - LAS,52940290632,EWR-IAH-LAS 6,ERJ-175,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/52940290632,https://www.airlines-manager.com/aircraft/show/105864236,2:15,12:59,112,"$317,342.00","$273,297.00"
EWR - LAS,52963026926,EWR-IAH-LAS 5,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/52963026926,https://www.airlines-manager.com/aircraft/show/105859514,12:00,22:44,338,"$734,436.00","$670,272.00"
EWR - LAS,52969613908,EWR-IAH-LAS 1,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/52969613908,https://www.airlines-manager.com/aircraft/show/105859510,15:00,1:44,338,"$734,436.00","$670,272.00"
EWR - LAS,52975649183,EWR-IAH-LAS 3,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/52975649183,https://www.airlines-manager.com/aircraft/show/105859512,16:45,3:29,338,"$734,436.00","$670,272.00"
EWR - LAX,52940290489,EWR-SFO-LAX 4,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/52940290489,https://www.airlines-manager.com/aircraft/show/89233030,0:00,11:29,400,"$933,337.00","$842,114.00"
EWR - LAX,52940290490,EWR-SFO-LAX 5,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/52940290490,https://www.airlines-manager.com/aircraft/show/89233027,2:00,13:29,400,"$933,337.00","$842,114.00"
EWR - LAX,52963026967,EWR-SFO-LAX 1,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/52963026967,https://www.airlines-manager.com/aircraft/show/83716137,12:30,23:59,400,"$933,337.00","$842,114.00"
EWR - LAX,52969613824,EWR-SFO-LAX 2,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/52969613824,https://www.airlines-manager.com/aircraft/show/89233028,14:00,1:29,400,"$933,337.00","$842,114.00"
EWR - LAX,52969613825,EWR-SFO-LAX 3,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/52969613825,https://www.airlines-manager.com/aircraft/show/89233029,15:30,2:59,400,"$933,337.00","$842,114.00"
EWR - LHR,52940290927,EWR 56A-1 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/52940290927,https://www.airlines-manager.com/aircraft/show/106813007,2:15,16:44,748,"$2,220,066.00","$1,968,463.00"
EWR - LHR,52963026970,EWR 56A-4 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/52963026970,https://www.airlines-manager.com/aircraft/show/106813010,12:30,2:59,748,"$2,220,066.00","$1,968,463.00"
EWR - LHR,52975649330,EWR 56A-5 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/52975649330,https://www.airlines-manager.com/aircraft/show/106813011,18:15,8:44,747,"$1,999,642.00","$1,805,458.00"
EWR - LIS,52940291128,EWR 84A-4 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/52940291128,https://www.airlines-manager.com/aircraft/show/90656551,5:30,19:44,852,"$2,329,069.00","$2,120,734.00"
EWR - LIS,52963026965,EWR 84A-1 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/52963026965,https://www.airlines-manager.com/aircraft/show/90656554,12:15,2:29,852,"$2,329,069.00","$2,120,734.00"
EWR - LIT,52955472936,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/52955472936,https://www.airlines-manager.com/aircraft/show/86270787,8:30,14:44,310,"$393,366.00","$362,409.00"
EWR - LIT,52963027034,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/52963027034,https://www.airlines-manager.com/aircraft/show/90452834,13:00,19:14,310,"$393,366.00","$362,409.00"
EWR - LIT,52980970831,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/52980970831,https://www.airlines-manager.com/aircraft/show/86270784,19:30,1:44,310,"$393,366.00","$362,409.00"
EWR - LIT,52985325470,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/52985325470,https://www.airlines-manager.com/aircraft/show/86270786,22:45,4:59,310,"$393,366.00","$362,409.00"
EWR - MAD,52940290514,EWR 56B-7 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/52940290514,https://www.airlines-manager.com/aircraft/show/89124072,0:00,14:59,748,"$2,289,942.00","$2,036,983.00"
EWR - MAD,52980970936,EWR 56B-3 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/52980970936,https://www.airlines-manager.com/aircraft/show/90656555,20:30,11:29,748,"$2,289,942.00","$2,036,983.00"
EWR - MAD,52985325419,EWR 56B-1 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/52985325419,https://www.airlines-manager.com/aircraft/show/94521251,22:15,13:14,746,"$2,061,764.00","$1,868,647.00"
EWR - MCI,52940291047,EWR-ELP-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/52940291047,https://www.airlines-manager.com/aircraft/show/103365578,3:45,9:59,320,"$393,066.00","$354,090.00"
EWR - MCI,52940291048,EWR-ELP-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/52940291048,https://www.airlines-manager.com/aircraft/show/103365575,5:45,11:59,320,"$393,066.00","$354,090.00"
EWR - MCI,52955473062,EWR-ELP-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/52955473062,https://www.airlines-manager.com/aircraft/show/103365576,10:00,16:14,320,"$393,066.00","$354,090.00"
EWR - MCI,52963027051,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/52963027051,https://www.airlines-manager.com/aircraft/show/107576645,13:15,19:29,0,"$103,022.00","$77,875.00"
EWR - MCI,52975649335,EWR-ELP-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/52975649335,https://www.airlines-manager.com/aircraft/show/103365577,18:15,0:29,320,"$393,066.00","$354,090.00"
EWR - MCI,52980970900,EWR-ELP-SAT 5 B,A319-100,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/52980970900,https://www.airlines-manager.com/aircraft/show/110582847,20:15,2:29,198,"$297,550.00","$269,823.00"
EWR - MCO,52940290860,EWR-IAH-LAS 1,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/52940290860,https://www.airlines-manager.com/aircraft/show/105859510,1:45,7:29,338,"$389,609.00","$350,314.00"
EWR - MCO,52963026804,EWR-IAH-LAS 3,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/52963026804,https://www.airlines-manager.com/aircraft/show/105859512,11:00,16:44,338,"$389,609.00","$350,314.00"
EWR - MCO,52963026805,EWR-IAH-LAS 6,ERJ-175,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/52963026805,https://www.airlines-manager.com/aircraft/show/105864236,13:00,18:44,112,"$170,746.00","$144,828.00"
EWR - MCO,52975649355,EWR-IAH-LAS 2,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/52975649355,https://www.airlines-manager.com/aircraft/show/105859511,18:30,0:14,338,"$389,609.00","$350,314.00"
EWR - MCO,52980970821,EWR-IAH-LAS 4,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/52980970821,https://www.airlines-manager.com/aircraft/show/105859513,19:30,1:14,338,"$389,609.00","$350,314.00"
EWR - MCO,52985325472,EWR-IAH-LAS 5,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/52985325472,https://www.airlines-manager.com/aircraft/show/105859514,22:45,4:29,335,"$387,556.00","$348,325.00"
EWR - MEM,52940290768,EWR-RNO-MEM 4,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/52940290768,https://www.airlines-manager.com/aircraft/show/99920619,1:15,6:59,320,"$361,662.00","$324,604.00"
EWR - MEM,52940290769,EWR-RNO-MEM 3,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/52940290769,https://www.airlines-manager.com/aircraft/show/99920620,3:45,9:29,320,"$361,662.00","$324,604.00"
EWR - MEM,52955473086,EWR-RNO-MEM 2,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/52955473086,https://www.airlines-manager.com/aircraft/show/99920621,10:15,15:59,320,"$361,662.00","$324,604.00"
EWR - MEM,52980970822,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/52980970822,https://www.airlines-manager.com/aircraft/show/107576645,19:30,1:14,0,"$96,252.00","$72,817.00"
EWR - MEM,52980970823,EWR-RNO-MEM 5 B,A319-100,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/52980970823,https://www.airlines-manager.com/aircraft/show/100096560,20:15,1:59,198,"$274,258.00","$248,042.00"
EWR - MEM,52980970824,EWR-RNO-MEM 1,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/52980970824,https://www.airlines-manager.com/aircraft/show/99920622,21:30,3:14,320,"$361,662.00","$324,604.00"
EWR - MEX,52940290865,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/52940290865,https://www.airlines-manager.com/aircraft/show/92003923,1:45,11:59,320,"$638,697.00","$575,097.00"
EWR - MEX,52955473011,EWR-DTW-YYZ 6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/52955473011,https://www.airlines-manager.com/aircraft/show/104258433,10:00,20:14,216,"$486,325.00","$439,820.00"
EWR - MEX,52963026932,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/52963026932,https://www.airlines-manager.com/aircraft/show/92003922,12:00,22:14,320,"$638,697.00","$575,097.00"
EWR - MEX,52975649243,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/52975649243,https://www.airlines-manager.com/aircraft/show/92003921,17:15,3:29,320,"$638,697.00","$575,097.00"
EWR - MEX,52975649244,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/52975649244,https://www.airlines-manager.com/aircraft/show/92003924,17:30,3:44,320,"$638,697.00","$575,097.00"
EWR - MEX,52980970913,EWR-DTW-YYZ 6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/52980970913,https://www.airlines-manager.com/aircraft/show/104258433,20:15,6:29,216,"$486,325.00","$439,820.00"
EWR - MEX,52985325562,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/52985325562,https://www.airlines-manager.com/aircraft/show/92003925,23:45,9:59,298,"$600,577.00","$538,515.00"
EWR - MHT,52940291044,EWR-FCA-CID 1,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/52940291044,https://www.airlines-manager.com/aircraft/show/116042866,3:45,6:44,310,"$126,417.00","$107,280.00"
EWR - MHT,52955472972,EWR-FCA-CID 4,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/52955472972,https://www.airlines-manager.com/aircraft/show/116042863,9:00,11:59,310,"$126,417.00","$107,280.00"
EWR - MHT,52955472973,EWR-FCA-CID 3,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/52955472973,https://www.airlines-manager.com/aircraft/show/116042864,10:00,12:59,310,"$126,417.00","$107,280.00"
EWR - MHT,52963026816,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/52963026816,https://www.airlines-manager.com/aircraft/show/98887257,11:00,13:59,112,"$56,347.00","$44,500.00"
EWR - MHT,52969613966,EWR-FCA-CID 2,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/52969613966,https://www.airlines-manager.com/aircraft/show/116042865,15:45,18:44,310,"$126,417.00","$107,280.00"
EWR - MIA,52940290944,EWR-MIA-ORD 5,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/52940290944,https://www.airlines-manager.com/aircraft/show/113251309,2:30,8:44,338,"$429,795.00","$386,709.00"
EWR - MIA,52940290945,EWR-MIA-ORD 1,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/52940290945,https://www.airlines-manager.com/aircraft/show/113251305,4:00,10:14,338,"$429,795.00","$386,709.00"
EWR - MIA,52955473032,EWR-MIA-ORD 2,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/52955473032,https://www.airlines-manager.com/aircraft/show/113251306,10:00,16:14,338,"$429,795.00","$386,709.00"
EWR - MIA,52963026829,EWR-MIA-ORD 4,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/52963026829,https://www.airlines-manager.com/aircraft/show/113251308,11:00,17:14,338,"$429,795.00","$386,709.00"
EWR - MIA,52969800876,EWR-MIA-ORD 3,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/52969800876,https://www.airlines-manager.com/aircraft/show/113251307,16:30,22:44,338,"$429,795.00","$386,709.00"
EWR - MKE,52940291017,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/52940291017,https://www.airlines-manager.com/aircraft/show/96421247,3:15,8:14,112,"$149,872.00","$131,880.00"
EWR - MKE,52955472821,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/52955472821,https://www.airlines-manager.com/aircraft/show/104610407,7:30,12:29,310,"$315,494.00","$287,609.00"
EWR - MKE,52969613828,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/52969613828,https://www.airlines-manager.com/aircraft/show/104610408,14:00,18:59,310,"$315,494.00","$287,609.00"
EWR - MKE,52980970817,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/52980970817,https://www.airlines-manager.com/aircraft/show/104610409,19:15,0:14,310,"$315,494.00","$287,609.00"
EWR - MKE,52985325527,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/52985325527,https://www.airlines-manager.com/aircraft/show/104610410,23:15,4:14,310,"$315,494.00","$287,609.00"
EWR - MSN,52940290938,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/52940290938,https://www.airlines-manager.com/aircraft/show/116042859,2:30,7:44,310,"$330,335.00","$303,091.00"
EWR - MSN,52955472967,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/52955472967,https://www.airlines-manager.com/aircraft/show/116042860,8:45,13:59,310,"$330,335.00","$303,091.00"
EWR - MSN,52955472968,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/52955472968,https://www.airlines-manager.com/aircraft/show/116042861,10:00,15:14,310,"$330,335.00","$303,091.00"
EWR - MSN,52980970972,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/52980970972,https://www.airlines-manager.com/aircraft/show/116042862,21:00,2:14,310,"$330,335.00","$303,091.00"
EWR - MSO,52940290736,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/52940290736,https://www.airlines-manager.com/aircraft/show/107161238,1:00,10:59,310,"$615,626.00","$570,679.00"
EWR - MSO,52963026845,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/52963026845,https://www.airlines-manager.com/aircraft/show/107161240,11:00,20:59,310,"$615,626.00","$570,679.00"
EWR - MSO,52969613972,EWR-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/52969613972,https://www.airlines-manager.com/aircraft/show/86782214,15:45,1:44,112,"$289,154.00","$258,671.00"
EWR - MSO,52975649276,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/52975649276,https://www.airlines-manager.com/aircraft/show/107161239,17:45,3:44,310,"$615,626.00","$570,679.00"
EWR - MSO,52985325412,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/52985325412,https://www.airlines-manager.com/aircraft/show/107161241,22:00,7:59,310,"$615,626.00","$570,679.00"
EWR - MSP,52940291120,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/52940291120,https://www.airlines-manager.com/aircraft/show/86270783,5:00,10:59,310,"$374,558.00","$335,323.00"
EWR - MSP,52955473072,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/52955473072,https://www.airlines-manager.com/aircraft/show/90452833,10:00,15:59,310,"$374,558.00","$335,323.00"
EWR - MSP,52963026858,EWR-DEN-SLC 6 B,A319-100,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/52963026858,https://www.airlines-manager.com/aircraft/show/105223076,11:00,16:59,198,"$283,902.00","$252,471.00"
EWR - MSP,52975649336,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/52975649336,https://www.airlines-manager.com/aircraft/show/87153196,18:15,0:14,310,"$374,558.00","$335,323.00"
EWR - MSP,52980970849,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/52980970849,https://www.airlines-manager.com/aircraft/show/86270785,19:45,1:44,310,"$374,558.00","$335,323.00"
EWR - MSP,52980970850,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/52980970850,https://www.airlines-manager.com/aircraft/show/90452835,20:45,2:44,310,"$374,558.00","$335,323.00"
EWR - MSY,52940291004,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/52940291004,https://www.airlines-manager.com/aircraft/show/90717079,3:15,9:59,310,"$414,493.00","$379,742.00"
EWR - MSY,52955473078,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/52955473078,https://www.airlines-manager.com/aircraft/show/90717077,10:00,16:44,310,"$414,493.00","$379,742.00"
EWR - MSY,52963026872,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/52963026872,https://www.airlines-manager.com/aircraft/show/90717076,11:00,17:44,310,"$414,493.00","$379,742.00"
EWR - MSY,52975649308,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/52975649308,https://www.airlines-manager.com/aircraft/show/90717078,18:00,0:44,310,"$414,493.00","$379,742.00"
EWR - MSY,52980970898,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/52980970898,https://www.airlines-manager.com/aircraft/show/95950199,20:00,2:44,310,"$414,493.00","$379,742.00"
EWR - MUC,52940290513,EWR 56C-7 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/52940290513,https://www.airlines-manager.com/aircraft/show/106721562,0:00,16:29,598,"$2,039,205.00","$1,889,134.00"
EWR - MUC,52963026782,EWR 56C-1 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/52963026782,https://www.airlines-manager.com/aircraft/show/106721556,11:00,3:29,598,"$2,039,205.00","$1,889,134.00"
EWR - MUC,52975649346,EWR 56C-7 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/52975649346,https://www.airlines-manager.com/aircraft/show/106721562,18:30,10:59,597,"$2,036,965.00","$1,886,995.00"
EWR - NAS,52940291125,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/52940291125,https://www.airlines-manager.com/aircraft/show/98379319,5:15,11:44,310,"$395,375.00","$362,374.00"
EWR - NAS,52963027015,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/52963027015,https://www.airlines-manager.com/aircraft/show/98379317,13:00,19:29,310,"$395,375.00","$362,374.00"
EWR - NAS,52975649309,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/52975649309,https://www.airlines-manager.com/aircraft/show/98379316,18:00,0:29,310,"$395,375.00","$362,374.00"
EWR - NAS,52980970761,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/52980970761,https://www.airlines-manager.com/aircraft/show/98379318,19:00,1:29,310,"$395,375.00","$362,374.00"
EWR - NAS,52980970762,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/52980970762,https://www.airlines-manager.com/aircraft/show/98379315,21:00,3:29,289,"$371,864.00","$339,653.00"
EWR - NRT,52940290494,EWR 56A-7 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/52940290494,https://www.airlines-manager.com/aircraft/show/106813013,0:00,2:14,748,"$3,981,602.00","$3,582,900.00"
EWR - NRT,52955473081,EWR 56A-3 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/52955473081,https://www.airlines-manager.com/aircraft/show/106813009,10:15,12:29,748,"$3,955,826.00","$3,566,207.00"
EWR - NRT,52975649186,EWR 56A-1 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/52975649186,https://www.airlines-manager.com/aircraft/show/106813007,16:45,18:59,746,"$3,546,774.00","$3,262,233.00"
EWR - OAK,52940290719,EWR-OAK-SJC 5,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/52940290719,https://www.airlines-manager.com/aircraft/show/104717239,1:00,12:59,310,"$735,997.00","$680,423.00"
EWR - OAK,52955473060,EWR-OAK-SJC 1,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/52955473060,https://www.airlines-manager.com/aircraft/show/104717243,10:00,21:59,310,"$735,997.00","$680,423.00"
EWR - OAK,52963026946,EWR-OAK-SJC 2,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/52963026946,https://www.airlines-manager.com/aircraft/show/104717242,12:00,23:59,310,"$735,997.00","$680,423.00"
EWR - OAK,52969613829,EWR-OAK-SJC 3,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/52969613829,https://www.airlines-manager.com/aircraft/show/104717241,14:00,1:59,310,"$735,997.00","$680,423.00"
EWR - OAK,52985325454,EWR-OAK-SJC 4,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/52985325454,https://www.airlines-manager.com/aircraft/show/104717240,22:30,10:29,309,"$734,553.00","$679,049.00"
EWR - OKC,52940290878,EWR-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/52940290878,https://www.airlines-manager.com/aircraft/show/86782214,1:45,8:59,112,"$217,564.00","$193,818.00"
EWR - OKC,52940290879,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/52940290879,https://www.airlines-manager.com/aircraft/show/107161239,3:45,10:59,310,"$460,943.00","$425,214.00"
EWR - OKC,52955472895,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/52955472895,https://www.airlines-manager.com/aircraft/show/107161241,8:00,15:14,310,"$460,943.00","$425,214.00"
EWR - OKC,52963026841,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/52963026841,https://www.airlines-manager.com/aircraft/show/107161238,11:00,18:14,310,"$460,943.00","$425,214.00"
EWR - OKC,52980970956,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/52980970956,https://www.airlines-manager.com/aircraft/show/107161240,21:00,4:14,310,"$460,943.00","$425,214.00"
EWR - OMA,52940290948,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/52940290948,https://www.airlines-manager.com/aircraft/show/104418460,2:30,8:59,310,"$401,829.00","$368,854.00"
EWR - OMA,52955472806,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/52955472806,https://www.airlines-manager.com/aircraft/show/104418463,7:30,13:59,310,"$401,829.00","$368,854.00"
EWR - OMA,52955472807,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/52955472807,https://www.airlines-manager.com/aircraft/show/104418462,10:00,16:29,310,"$401,829.00","$368,854.00"
EWR - OMA,52975649223,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/52975649223,https://www.airlines-manager.com/aircraft/show/104418461,17:00,23:29,310,"$401,829.00","$368,854.00"
EWR - OMA,52980970773,EWR-BOI-PBI 5 B,A319-100,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/52980970773,https://www.airlines-manager.com/aircraft/show/110582846,19:00,1:29,194,"$300,945.00","$274,659.00"
EWR - ONT,52940290474,EWR-SMF-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/52940290474,https://www.airlines-manager.com/aircraft/show/94889153,0:00,11:29,320,"$703,027.00","$644,323.00"
EWR - ONT,52940290475,EWR-SMF-ONT 5,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/52940290475,https://www.airlines-manager.com/aircraft/show/94889154,2:00,13:29,320,"$703,027.00","$644,323.00"
EWR - ONT,52963026902,EWR-SMF-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/52963026902,https://www.airlines-manager.com/aircraft/show/94889150,11:45,23:14,320,"$703,027.00","$644,323.00"
EWR - ONT,52963026903,EWR-SMF-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/52963026903,https://www.airlines-manager.com/aircraft/show/94889151,13:15,0:44,320,"$703,027.00","$644,323.00"
EWR - ONT,52969613867,EWR-SMF-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/52969613867,https://www.airlines-manager.com/aircraft/show/94889152,14:45,2:14,298,"$673,136.00","$615,855.00"
EWR - ORD,52940291116,EWR-MIA-ORD 2,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/52940291116,https://www.airlines-manager.com/aircraft/show/113251306,5:00,9:59,338,"$340,445.00","$293,410.00"
EWR - ORD,52955473084,EWR-MIA-ORD 1,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/52955473084,https://www.airlines-manager.com/aircraft/show/113251305,10:15,15:14,338,"$340,445.00","$293,410.00"
EWR - ORD,52963026896,EWR-MIA-ORD 3,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/52963026896,https://www.airlines-manager.com/aircraft/show/113251307,11:30,16:29,338,"$340,445.00","$293,410.00"
EWR - ORD,52975649246,EWR-MIA-ORD 4,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/52975649246,https://www.airlines-manager.com/aircraft/show/113251308,17:15,22:14,338,"$340,445.00","$293,410.00"
EWR - ORD,52980970997,EWR-MIA-ORD 5,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/52980970997,https://www.airlines-manager.com/aircraft/show/113251309,21:30,2:29,338,"$340,445.00","$293,410.00"
EWR - ORF,52940290907,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/52940290907,https://www.airlines-manager.com/aircraft/show/88494375,2:15,5:29,320,"$153,164.00","$129,614.00"
EWR - ORF,52963026796,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/52963026796,https://www.airlines-manager.com/aircraft/show/106104450,11:00,14:14,112,"$70,267.00","$57,665.00"
EWR - ORF,52969613846,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/52969613846,https://www.airlines-manager.com/aircraft/show/105731236,14:15,17:29,320,"$153,164.00","$129,614.00"
EWR - ORF,52975649324,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/52975649324,https://www.airlines-manager.com/aircraft/show/88494376,18:00,21:14,320,"$153,164.00","$129,614.00"
EWR - ORF,52985325387,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/52985325387,https://www.airlines-manager.com/aircraft/show/88494377,21:45,0:59,320,"$153,164.00","$129,614.00"
EWR - PBI,52940290827,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/52940290827,https://www.airlines-manager.com/aircraft/show/104418463,1:30,7:29,310,"$379,349.00","$346,908.00"
EWR - PBI,52940290828,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/52940290828,https://www.airlines-manager.com/aircraft/show/104418462,3:00,8:59,310,"$379,349.00","$346,908.00"
EWR - PBI,52963026869,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/52963026869,https://www.airlines-manager.com/aircraft/show/104418461,11:00,16:59,310,"$379,349.00","$346,908.00"
EWR - PBI,52963026870,EWR-BOI-PBI 5 B,A319-100,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/52963026870,https://www.airlines-manager.com/aircraft/show/110582846,13:00,18:59,198,"$287,169.00","$261,173.00"
EWR - PBI,52980970931,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/52980970931,https://www.airlines-manager.com/aircraft/show/104418460,20:30,2:29,310,"$379,349.00","$346,908.00"
EWR - PDX,52940290470,EWR-PHX-PDX 3,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/52940290470,https://www.airlines-manager.com/aircraft/show/113595213,0:00,11:29,338,"$757,706.00","$704,999.00"
EWR - PDX,52940290471,EWR-PHX-PDX 4,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/52940290471,https://www.airlines-manager.com/aircraft/show/113595214,2:00,13:29,338,"$757,706.00","$704,999.00"
EWR - PDX,52940290472,EWR-PHX-PDX 5,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/52940290472,https://www.airlines-manager.com/aircraft/show/113595215,5:00,16:29,338,"$757,706.00","$704,999.00"
EWR - PDX,52940290473,EWR-PHX-PDX 6 B,A319-100,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/52940290473,https://www.airlines-manager.com/aircraft/show/99219630,6:30,17:59,198,"$526,403.00","$481,706.00"
EWR - PDX,52955473088,EWR-PHX-PDX 1,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/52955473088,https://www.airlines-manager.com/aircraft/show/113595211,10:15,21:44,338,"$757,706.00","$704,999.00"
EWR - PDX,52963026963,EWR-PHX-PDX 2,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/52963026963,https://www.airlines-manager.com/aircraft/show/113595212,12:15,23:44,304,"$711,139.00","$660,315.00"
EWR - PHX,52940290476,EWR-PHX-PDX 1,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/52940290476,https://www.airlines-manager.com/aircraft/show/113595211,0:00,10:14,338,"$704,047.00","$646,677.00"
EWR - PHX,52940290477,EWR-PHX-PDX 2,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/52940290477,https://www.airlines-manager.com/aircraft/show/113595212,2:00,12:14,338,"$704,047.00","$646,677.00"
EWR - PHX,52963026895,EWR-PHX-PDX 3,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/52963026895,https://www.airlines-manager.com/aircraft/show/113595213,11:30,21:44,338,"$704,047.00","$646,677.00"
EWR - PHX,52969613736,EWR-PHX-PDX 4,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/52969613736,https://www.airlines-manager.com/aircraft/show/113595214,13:30,23:44,338,"$704,047.00","$646,677.00"
EWR - PHX,52969800873,EWR-PHX-PDX 5,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/52969800873,https://www.airlines-manager.com/aircraft/show/113595215,16:30,2:44,338,"$704,047.00","$646,677.00"
EWR - PHX,52975649315,EWR-PHX-PDX 6 B,A319-100,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/52975649315,https://www.airlines-manager.com/aircraft/show/99219630,18:00,4:29,198,"$489,640.00","$441,525.00"
EWR - PIT,52940291090,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/52940291090,https://www.airlines-manager.com/aircraft/show/98887257,4:15,7:29,112,"$77,407.00","$63,047.00"
EWR - PIT,52940291091,EWR-STL-PIT 3,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/52940291091,https://www.airlines-manager.com/aircraft/show/115400546,6:30,9:44,338,"$182,204.00","$159,592.00"
EWR - PIT,52955473040,EWR-STL-PIT 2,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/52955473040,https://www.airlines-manager.com/aircraft/show/115400547,10:00,13:14,338,"$182,204.00","$159,592.00"
EWR - PIT,52963027031,EWR-STL-PIT 4,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/52963027031,https://www.airlines-manager.com/aircraft/show/115400545,13:00,16:14,338,"$182,204.00","$159,592.00"
EWR - PIT,52969613955,EWR-STL-PIT 1,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/52969613955,https://www.airlines-manager.com/aircraft/show/115400548,15:30,18:44,338,"$182,204.00","$159,592.00"
EWR - PIT,52980970840,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/52980970840,https://www.airlines-manager.com/aircraft/show/98887257,19:30,22:44,112,"$77,407.00","$63,047.00"
EWR - PVD,52940290811,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/52940290811,https://www.airlines-manager.com/aircraft/show/110044466,1:30,4:14,310,"$98,907.00","$81,272.00"
EWR - PVD,52955472988,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/52955472988,https://www.airlines-manager.com/aircraft/show/110044465,9:15,11:59,310,"$98,907.00","$81,272.00"
EWR - PVD,52963026779,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/52963026779,https://www.airlines-manager.com/aircraft/show/110044464,11:00,13:44,310,"$98,907.00","$81,272.00"
EWR - PVD,52980970855,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/52980970855,https://www.airlines-manager.com/aircraft/show/110044463,19:45,22:29,310,"$98,907.00","$81,272.00"
EWR - PVD,52985325525,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/52985325525,https://www.airlines-manager.com/aircraft/show/110113039,23:15,1:59,112,"$42,452.00","$31,594.00"
EWR - PWM,52940291101,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/52940291101,https://www.airlines-manager.com/aircraft/show/110044463,4:30,7:44,310,"$154,025.00","$134,975.00"
EWR - PWM,52955472955,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/52955472955,https://www.airlines-manager.com/aircraft/show/110113039,8:45,11:59,112,"$69,995.00","$58,069.00"
EWR - PWM,52963026781,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/52963026781,https://www.airlines-manager.com/aircraft/show/110044466,11:00,14:14,310,"$154,025.00","$134,975.00"
EWR - PWM,52975649296,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/52975649296,https://www.airlines-manager.com/aircraft/show/110044465,18:00,21:14,310,"$154,025.00","$134,975.00"
EWR - PWM,52980970856,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/52980970856,https://www.airlines-manager.com/aircraft/show/110044464,19:45,22:59,299,"$150,832.00","$131,867.00"
EWR - RAP,52940290483,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/52940290483,https://www.airlines-manager.com/aircraft/show/116042860,0:00,7:59,310,"$495,270.00","$458,254.00"
EWR - RAP,52940290484,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/52940290484,https://www.airlines-manager.com/aircraft/show/116042861,1:15,9:14,310,"$495,270.00","$458,254.00"
EWR - RAP,52963027008,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/52963027008,https://www.airlines-manager.com/aircraft/show/116042862,13:00,20:59,310,"$495,270.00","$458,254.00"
EWR - RAP,52975649345,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/52975649345,https://www.airlines-manager.com/aircraft/show/116042859,18:30,2:29,310,"$495,270.00","$458,254.00"
EWR - RDU,52940290788,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/52940290788,https://www.airlines-manager.com/aircraft/show/105731236,1:15,4:59,320,"$200,571.00","$172,603.00"
EWR - RDU,52940290789,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/52940290789,https://www.airlines-manager.com/aircraft/show/88494376,5:00,8:44,320,"$200,571.00","$172,603.00"
EWR - RDU,52963026798,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/52963026798,https://www.airlines-manager.com/aircraft/show/88494377,11:00,14:44,320,"$200,571.00","$172,603.00"
EWR - RDU,52969613956,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/52969613956,https://www.airlines-manager.com/aircraft/show/88494375,15:30,19:14,320,"$200,571.00","$172,603.00"
EWR - RDU,52985325404,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/52985325404,https://www.airlines-manager.com/aircraft/show/106104450,22:00,1:44,112,"$93,017.00","$77,820.00"
EWR - RIC,52940290762,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/52940290762,https://www.airlines-manager.com/aircraft/show/88494377,1:00,4:14,320,"$139,017.00","$115,596.00"
EWR - RIC,52940290763,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/52940290763,https://www.airlines-manager.com/aircraft/show/88494375,5:30,8:44,320,"$139,017.00","$115,596.00"
EWR - RIC,52969613849,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/52969613849,https://www.airlines-manager.com/aircraft/show/106104450,14:15,17:29,112,"$62,618.00","$50,101.00"
EWR - RIC,52975649265,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/52975649265,https://www.airlines-manager.com/aircraft/show/105731236,17:30,20:44,320,"$139,017.00","$115,596.00"
EWR - RIC,52980970992,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/52980970992,https://www.airlines-manager.com/aircraft/show/88494376,21:15,0:29,320,"$139,017.00","$115,596.00"
EWR - RNO,52940290888,EWR-RNO-MEM 5 B,A319-100,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/52940290888,https://www.airlines-manager.com/aircraft/show/100096560,2:00,13:29,198,"$529,808.00","$488,021.00"
EWR - RNO,52955473085,EWR-RNO-MEM 1,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/52955473085,https://www.airlines-manager.com/aircraft/show/99920622,10:15,21:29,320,"$702,755.00","$645,795.00"
EWR - RNO,52969613746,EWR-RNO-MEM 4,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/52969613746,https://www.airlines-manager.com/aircraft/show/99920619,14:00,1:14,320,"$702,755.00","$645,795.00"
EWR - RNO,52969800884,EWR-RNO-MEM 3,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/52969800884,https://www.airlines-manager.com/aircraft/show/99920620,16:30,3:44,320,"$702,755.00","$645,795.00"
EWR - RNO,52985325423,EWR-RNO-MEM 2,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/52985325423,https://www.airlines-manager.com/aircraft/show/99920621,22:15,9:29,320,"$702,755.00","$645,795.00"
EWR - RSW,52940291011,EWR-RNO-MEM 1,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/52940291011,https://www.airlines-manager.com/aircraft/show/99920622,3:15,9:29,320,"$388,891.00","$350,121.00"
EWR - RSW,52955472781,EWR-RNO-MEM 4,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/52955472781,https://www.airlines-manager.com/aircraft/show/99920619,7:00,13:14,320,"$388,891.00","$350,121.00"
EWR - RSW,52955472782,EWR-RNO-MEM 3,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/52955472782,https://www.airlines-manager.com/aircraft/show/99920620,10:15,16:29,320,"$388,891.00","$350,121.00"
EWR - RSW,52969613747,EWR-RNO-MEM 5 B,A319-100,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/52969613747,https://www.airlines-manager.com/aircraft/show/100096560,14:00,20:14,198,"$294,865.00","$267,306.00"
EWR - RSW,52969613748,EWR-RNO-MEM 2,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/52969613748,https://www.airlines-manager.com/aircraft/show/99920621,16:00,22:14,320,"$388,891.00","$350,121.00"
EWR - SAN,52940290498,EWR-MIA-ORD 3,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/52940290498,https://www.airlines-manager.com/aircraft/show/113251307,0:00,11:29,338,"$775,667.00","$723,371.00"
EWR - SAN,52955473034,EWR-MIA-ORD 5,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/52955473034,https://www.airlines-manager.com/aircraft/show/113251309,10:00,21:29,338,"$775,667.00","$723,371.00"
EWR - SAN,52969613949,EWR-MIA-ORD 1,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/52969613949,https://www.airlines-manager.com/aircraft/show/113251305,15:15,2:44,338,"$775,667.00","$723,371.00"
EWR - SAN,52969613950,EWR-MIA-ORD 2,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/52969613950,https://www.airlines-manager.com/aircraft/show/113251306,16:15,3:44,338,"$775,667.00","$723,371.00"
EWR - SAN,52985325426,EWR-MIA-ORD 4,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/52985325426,https://www.airlines-manager.com/aircraft/show/113251308,22:15,9:44,337,"$774,266.00","$722,026.00"
EWR - SAT,52940290855,EWR-ELP-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/52940290855,https://www.airlines-manager.com/aircraft/show/103365576,1:45,9:59,320,"$517,673.00","$473,879.00"
EWR - SAT,52955473020,EWR-ELP-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/52955473020,https://www.airlines-manager.com/aircraft/show/103365577,10:00,18:14,320,"$517,673.00","$473,879.00"
EWR - SAT,52963026912,EWR-ELP-SAT 5 B,A319-100,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/52963026912,https://www.airlines-manager.com/aircraft/show/110582847,12:00,20:14,198,"$390,674.00","$358,970.00"
EWR - SAT,52980970835,EWR-ELP-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/52980970835,https://www.airlines-manager.com/aircraft/show/103365578,19:30,3:44,320,"$517,673.00","$473,879.00"
EWR - SAT,52980970836,EWR-ELP-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/52980970836,https://www.airlines-manager.com/aircraft/show/103365575,21:30,5:44,320,"$517,673.00","$473,879.00"
EWR - SAV,52940291103,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/52940291103,https://www.airlines-manager.com/aircraft/show/108466265,4:30,9:29,112,"$146,310.00","$129,393.00"
EWR - SAV,52955472970,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/52955472970,https://www.airlines-manager.com/aircraft/show/108834810,9:00,13:59,310,"$307,553.00","$281,418.00"
EWR - SAV,52963026832,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/52963026832,https://www.airlines-manager.com/aircraft/show/108834809,11:00,15:59,310,"$307,553.00","$281,418.00"
EWR - SAV,52975649317,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/52975649317,https://www.airlines-manager.com/aircraft/show/108834808,18:00,22:59,310,"$307,553.00","$281,418.00"
EWR - SAV,52980970874,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/52980970874,https://www.airlines-manager.com/aircraft/show/108834811,20:00,0:59,258,"$277,408.00","$252,282.00"
EWR - SDF,52940291052,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/52940291052,https://www.airlines-manager.com/aircraft/show/86270787,4:00,8:29,310,"$295,450.00","$268,357.00"
EWR - SDF,52955472920,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/52955472920,https://www.airlines-manager.com/aircraft/show/90452834,8:15,12:44,310,"$295,450.00","$268,357.00"
EWR - SDF,52969613940,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/52969613940,https://www.airlines-manager.com/aircraft/show/86270784,15:00,19:29,310,"$295,450.00","$268,357.00"
EWR - SDF,52975649339,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/52975649339,https://www.airlines-manager.com/aircraft/show/86270786,18:15,22:44,310,"$295,450.00","$268,357.00"
EWR - SEA,52940290744,EWR-DFW-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/52940290744,https://www.airlines-manager.com/aircraft/show/86238752,1:00,12:14,320,"$709,749.00","$640,680.00"
EWR - SEA,52940290745,EWR-DFW-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/52940290745,https://www.airlines-manager.com/aircraft/show/90489726,3:00,14:14,320,"$709,749.00","$640,680.00"
EWR - SEA,52963026788,EWR-DFW-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/52963026788,https://www.airlines-manager.com/aircraft/show/86238753,11:00,22:14,320,"$709,749.00","$640,680.00"
EWR - SEA,52969613879,EWR-DFW-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/52969613879,https://www.airlines-manager.com/aircraft/show/90489724,15:00,2:14,320,"$709,749.00","$640,680.00"
EWR - SEA,52985325498,EWR-DFW-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/52985325498,https://www.airlines-manager.com/aircraft/show/90489725,22:45,9:59,320,"$709,749.00","$640,680.00"
EWR - SEA,52985325499,EWR-DFW-ATL 6 B,A319-100,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/52985325499,https://www.airlines-manager.com/aircraft/show/105222360,23:30,10:59,198,"$534,870.00","$484,992.00"
EWR - SFO,52940290530,EWR-SFO-LAX 1,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/52940290530,https://www.airlines-manager.com/aircraft/show/83716137,0:00,11:44,400,"$944,775.00","$860,166.00"
EWR - SFO,52940290531,EWR-SFO-LAX 2,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/52940290531,https://www.airlines-manager.com/aircraft/show/89233028,1:30,13:14,400,"$944,775.00","$860,166.00"
EWR - SFO,52940290532,EWR-SFO-LAX 3,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/52940290532,https://www.airlines-manager.com/aircraft/show/89233029,3:00,14:44,400,"$944,775.00","$860,166.00"
EWR - SFO,52963026964,EWR-SFO-LAX 4,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/52963026964,https://www.airlines-manager.com/aircraft/show/89233030,12:15,23:59,400,"$944,775.00","$860,166.00"
EWR - SFO,52969613854,EWR-SFO-LAX 5,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/52969613854,https://www.airlines-manager.com/aircraft/show/89233027,14:15,1:59,399,"$942,688.00","$858,163.00"
EWR - SJC,52940290468,EWR-OAK-SJC 2,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/52940290468,https://www.airlines-manager.com/aircraft/show/104717242,0:00,11:59,310,"$732,895.00","$676,945.00"
EWR - SJC,52940290469,EWR-OAK-SJC 3,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/52940290469,https://www.airlines-manager.com/aircraft/show/104717241,2:00,13:59,310,"$732,895.00","$676,945.00"
EWR - SJC,52955473091,EWR-OAK-SJC 4,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/52955473091,https://www.airlines-manager.com/aircraft/show/104717240,10:30,22:29,310,"$732,895.00","$676,945.00"
EWR - SJC,52963026999,EWR-OAK-SJC 5,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/52963026999,https://www.airlines-manager.com/aircraft/show/104717239,13:00,0:59,310,"$732,895.00","$676,945.00"
EWR - SJC,52985325406,EWR-OAK-SJC 1,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/52985325406,https://www.airlines-manager.com/aircraft/show/104717243,22:00,9:59,310,"$732,895.00","$676,945.00"
EWR - SJU,52940290653,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/52940290653,https://www.airlines-manager.com/aircraft/show/106581304,0:30,8:44,320,"$526,686.00","$480,789.00"
EWR - SJU,52940290654,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/52940290654,https://www.airlines-manager.com/aircraft/show/106581307,2:00,10:14,320,"$526,686.00","$480,789.00"
EWR - SJU,52955472763,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/52955472763,https://www.airlines-manager.com/aircraft/show/86238754,7:00,15:14,320,"$526,686.00","$480,789.00"
EWR - SJU,52963027020,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/52963027020,https://www.airlines-manager.com/aircraft/show/106581306,13:00,21:14,320,"$526,686.00","$480,789.00"
EWR - SJU,52969613863,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/52969613863,https://www.airlines-manager.com/aircraft/show/106581305,14:30,22:44,320,"$526,686.00","$480,789.00"
EWR - SLC,52940290607,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/52940290607,https://www.airlines-manager.com/aircraft/show/87153196,0:15,9:59,310,"$611,496.00","$559,567.00"
EWR - SLC,52940290608,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/52940290608,https://www.airlines-manager.com/aircraft/show/90452833,0:15,9:59,310,"$611,496.00","$559,567.00"
EWR - SLC,52940290609,EWR-DEN-SLC 6 B,A319-100,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/52940290609,https://www.airlines-manager.com/aircraft/show/105223076,1:15,10:59,198,"$459,895.00","$418,268.00"
EWR - SLC,52955473074,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/52955473074,https://www.airlines-manager.com/aircraft/show/86270785,10:00,19:44,310,"$611,496.00","$559,567.00"
EWR - SLC,52963026787,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/52963026787,https://www.airlines-manager.com/aircraft/show/90452835,11:00,20:44,310,"$611,496.00","$559,567.00"
EWR - SLC,52980970820,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/52980970820,https://www.airlines-manager.com/aircraft/show/86270783,19:15,4:59,310,"$611,496.00","$559,567.00"
EWR - SMF,52940290486,EWR-SMF-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/52940290486,https://www.airlines-manager.com/aircraft/show/94889150,0:00,11:44,320,"$717,510.00","$659,063.00"
EWR - SMF,52940290487,EWR-SMF-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/52940290487,https://www.airlines-manager.com/aircraft/show/94889151,1:30,13:14,320,"$717,510.00","$659,063.00"
EWR - SMF,52940290488,EWR-SMF-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/52940290488,https://www.airlines-manager.com/aircraft/show/94889152,3:00,14:44,320,"$717,510.00","$659,063.00"
EWR - SMF,52963026892,EWR-SMF-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/52963026892,https://www.airlines-manager.com/aircraft/show/94889153,11:30,23:14,320,"$717,510.00","$659,063.00"
EWR - SMF,52969613735,EWR-SMF-ONT 5,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/52969613735,https://www.airlines-manager.com/aircraft/show/94889154,13:30,1:14,320,"$717,510.00","$659,063.00"
EWR - SNN,52963026750,EWR 56B-6 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/52963026750,https://www.airlines-manager.com/aircraft/show/94521248,10:45,23:59,748,"$2,079,138.00","$1,895,877.00"
EWR - SNN,52975649372,EWR 56B-5 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/52975649372,https://www.airlines-manager.com/aircraft/show/94521253,18:45,7:59,748,"$1,993,070.00","$1,835,896.00"
EWR - STL,52940290728,EWR-STL-PIT 3,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/52940290728,https://www.airlines-manager.com/aircraft/show/115400546,1:00,6:29,338,"$372,997.00","$342,002.00"
EWR - STL,52940290729,EWR-STL-PIT 2,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/52940290729,https://www.airlines-manager.com/aircraft/show/115400547,4:15,9:44,338,"$372,997.00","$342,002.00"
EWR - STL,52955473035,EWR-STL-PIT 1,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/52955473035,https://www.airlines-manager.com/aircraft/show/115400548,10:00,15:29,338,"$372,997.00","$342,002.00"
EWR - STL,52969613749,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/52969613749,https://www.airlines-manager.com/aircraft/show/98887257,14:00,19:29,112,"$163,298.00","$142,531.00"
EWR - STL,52969613750,EWR-STL-PIT 4,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/52969613750,https://www.airlines-manager.com/aircraft/show/115400545,16:15,21:44,338,"$372,997.00","$342,002.00"
EWR - STL,52985325477,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/52985325477,https://www.airlines-manager.com/aircraft/show/98887257,22:45,4:14,112,"$163,298.00","$142,531.00"
EWR - TLV,52940291001,EWR-TLV 2 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/52940291001,https://www.airlines-manager.com/aircraft/show/89124073,3:00,1:29,884,"$3,652,509.00","$3,333,160.00"
EWR - TLV,52980970970,EWR-TLV 1 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/52980970970,https://www.airlines-manager.com/aircraft/show/93429385,21:00,19:29,883,"$3,649,632.00","$3,330,475.00"
EWR - TPA,52940291140,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/52940291140,https://www.airlines-manager.com/aircraft/show/98379317,5:45,11:44,310,"$376,331.00","$341,150.00"
EWR - TPA,52963026741,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/52963026741,https://www.airlines-manager.com/aircraft/show/98379316,10:45,16:44,310,"$376,331.00","$341,150.00"
EWR - TPA,52963026743,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/52963026743,https://www.airlines-manager.com/aircraft/show/98379318,13:00,18:59,310,"$376,331.00","$341,150.00"
EWR - TPA,52969613891,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/52969613891,https://www.airlines-manager.com/aircraft/show/98379315,15:00,20:59,310,"$376,331.00","$341,150.00"
EWR - TPA,52985325531,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/52985325531,https://www.airlines-manager.com/aircraft/show/98379319,23:15,5:14,310,"$376,331.00","$341,150.00"
EWR - TUL,52940290853,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/52940290853,https://www.airlines-manager.com/aircraft/show/110044465,1:45,8:29,310,"$426,479.00","$392,378.00"
EWR - TUL,52940290854,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/52940290854,https://www.airlines-manager.com/aircraft/show/110044464,3:30,10:14,310,"$426,479.00","$392,378.00"
EWR - TUL,52963027040,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/52963027040,https://www.airlines-manager.com/aircraft/show/110044463,13:00,19:44,310,"$426,479.00","$392,378.00"
EWR - TUL,52969800885,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/52969800885,https://www.airlines-manager.com/aircraft/show/110113039,16:30,23:14,112,"$200,732.00","$178,155.00"
EWR - TUL,52975649365,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/52975649365,https://www.airlines-manager.com/aircraft/show/110044466,18:45,1:29,310,"$426,479.00","$392,378.00"
EWR - TUS,52940290661,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/52940290661,https://www.airlines-manager.com/aircraft/show/98379316,0:30,10:44,310,"$638,716.00","$590,622.00"
EWR - TUS,52940290662,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/52940290662,https://www.airlines-manager.com/aircraft/show/98379318,1:30,11:44,310,"$638,716.00","$590,622.00"
EWR - TUS,52940290663,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/52940290663,https://www.airlines-manager.com/aircraft/show/98379315,3:30,13:44,310,"$638,716.00","$590,622.00"
EWR - TUS,52963027016,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/52963027016,https://www.airlines-manager.com/aircraft/show/98379319,13:00,23:14,310,"$638,716.00","$590,622.00"
EWR - TUS,52980970832,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/52980970832,https://www.airlines-manager.com/aircraft/show/98379317,19:30,5:44,310,"$638,716.00","$590,622.00"
EWR - YEG,52940290628,EWR-YEG-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/52940290628,https://www.airlines-manager.com/aircraft/show/98936170,0:15,10:14,320,"$633,811.00","$581,417.00"
EWR - YEG,52940290629,EWR-YEG-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/52940290629,https://www.airlines-manager.com/aircraft/show/98936171,2:15,12:14,320,"$633,811.00","$581,417.00"
EWR - YEG,52963026825,EWR-YEG-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/52963026825,https://www.airlines-manager.com/aircraft/show/98936168,11:00,20:59,320,"$633,811.00","$581,417.00"
EWR - YEG,52963026826,EWR-YEG-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/52963026826,https://www.airlines-manager.com/aircraft/show/98936169,12:30,22:29,320,"$633,811.00","$581,417.00"
EWR - YEG,52985325403,EWR-YEG-BFF 5 B,A319-100,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/52985325403,https://www.airlines-manager.com/aircraft/show/115493369,22:00,7:59,198,"$473,556.00","$435,398.00"
EWR - YOW,52955472996,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/52955472996,https://www.airlines-manager.com/aircraft/show/106581304,9:30,12:59,320,"$170,575.00","$145,244.00"
EWR - YOW,52963026795,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/52963026795,https://www.airlines-manager.com/aircraft/show/106581307,11:00,14:29,320,"$170,575.00","$145,244.00"
EWR - YOW,52975649373,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/52975649373,https://www.airlines-manager.com/aircraft/show/86238754,18:45,22:14,320,"$170,575.00","$145,244.00"
EWR - YOW,52980970976,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/52980970976,https://www.airlines-manager.com/aircraft/show/106581306,21:15,0:44,320,"$170,575.00","$145,244.00"
EWR - YOW,52985325479,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/52985325479,https://www.airlines-manager.com/aircraft/show/106581305,22:45,2:14,289,"$160,513.00","$135,456.00"
EWR - YUL,52955473000,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/52955473000,https://www.airlines-manager.com/aircraft/show/106581306,9:30,12:59,320,"$173,991.00","$145,833.00"
EWR - YUL,52963026846,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/52963026846,https://www.airlines-manager.com/aircraft/show/106581305,11:00,14:29,320,"$173,991.00","$145,833.00"
EWR - YUL,52969613947,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/52969613947,https://www.airlines-manager.com/aircraft/show/86238754,15:15,18:44,320,"$173,991.00","$145,833.00"
EWR - YUL,52980970974,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/52980970974,https://www.airlines-manager.com/aircraft/show/106581304,21:00,0:29,320,"$173,991.00","$145,833.00"
EWR - YUL,52985325450,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/52985325450,https://www.airlines-manager.com/aircraft/show/106581307,22:30,1:59,320,"$173,991.00","$145,833.00"
EWR - YVR,52940290501,EWR-YVR-YYC 1,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/52940290501,https://www.airlines-manager.com/aircraft/show/113681636,0:00,11:14,400,"$908,451.00","$836,073.00"
EWR - YVR,52940290502,EWR-YVR-YYC 2,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/52940290502,https://www.airlines-manager.com/aircraft/show/113681637,1:30,12:44,400,"$908,451.00","$836,073.00"
EWR - YVR,52940290503,EWR-YVR-YYC 3,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/52940290503,https://www.airlines-manager.com/aircraft/show/113681638,3:00,14:14,400,"$908,451.00","$836,073.00"
EWR - YVR,52963026885,EWR-YVR-YYC 4,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/52963026885,https://www.airlines-manager.com/aircraft/show/113681639,11:15,22:29,400,"$908,451.00","$836,073.00"
EWR - YVR,52963026886,EWR-YVR-YYC 5,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/52963026886,https://www.airlines-manager.com/aircraft/show/113681640,12:45,23:59,400,"$908,451.00","$836,073.00"
EWR - YYC,52940290802,EWR-YVR-YYC 4,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/52940290802,https://www.airlines-manager.com/aircraft/show/113681639,1:30,11:14,400,"$787,644.00","$724,091.00"
EWR - YYC,52940290803,EWR-YVR-YYC 5,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/52940290803,https://www.airlines-manager.com/aircraft/show/113681640,3:00,12:44,400,"$787,644.00","$724,091.00"
EWR - YYC,52963026882,EWR-YVR-YYC 1,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/52963026882,https://www.airlines-manager.com/aircraft/show/113681636,11:15,20:59,400,"$787,644.00","$724,091.00"
EWR - YYC,52963026883,EWR-YVR-YYC 2,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/52963026883,https://www.airlines-manager.com/aircraft/show/113681637,12:45,22:29,400,"$787,644.00","$724,091.00"
EWR - YYC,52969613847,EWR-YVR-YYC 3,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/52969613847,https://www.airlines-manager.com/aircraft/show/113681638,14:15,23:59,400,"$787,644.00","$724,091.00"
EWR - YYZ,52940290917,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/52940290917,https://www.airlines-manager.com/aircraft/show/92003922,2:15,5:44,320,"$178,732.00","$144,394.00"
EWR - YYZ,52955472822,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/52955472822,https://www.airlines-manager.com/aircraft/show/92003921,7:30,10:59,320,"$178,732.00","$144,394.00"
EWR - YYZ,52955472823,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/52955472823,https://www.airlines-manager.com/aircraft/show/92003924,10:00,13:29,320,"$178,732.00","$144,394.00"
EWR - YYZ,52969613842,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/52969613842,https://www.airlines-manager.com/aircraft/show/92003925,14:00,17:29,320,"$178,732.00","$144,394.00"
EWR - YYZ,52975649333,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/52975649333,https://www.airlines-manager.com/aircraft/show/92003923,18:15,21:44,320,"$178,732.00","$144,394.00"
EWR - YYZ,52980970807,EWR CARGO 1,A321neo-LR,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/52980970807,https://www.airlines-manager.com/aircraft/show/103406580,19:15,22:44,0,"$63,938.00","$35,161.00"
EWR - ZRH,52955472834,EWR 84A-6 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/52955472834,https://www.airlines-manager.com/aircraft/show/90656552,7:45,23:59,852,"$2,628,548.00","$2,385,859.00"
EWR - ZRH,52980970883,EWR 84A-7 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/52980970883,https://www.airlines-manager.com/aircraft/show/94521249,20:00,12:14,852,"$2,628,548.00","$2,385,859.00"
HNL - AKL,52969613998,HNL 84B-2 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/52969613998,https://www.airlines-manager.com/aircraft/show/96807092,16:00,9:59,832,"$2,903,979.00","$2,653,303.00"
HNL - AKL,52985325503,HNL 84B-6 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/52985325503,https://www.airlines-manager.com/aircraft/show/96807088,23:00,16:59,830,"$2,856,612.00","$2,619,709.00"
HNL - ATL,52940291108,HNL 56B-2 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/52940291108,https://www.airlines-manager.com/aircraft/show/109187499,4:45,22:44,592,"$2,191,004.00","$2,005,149.00"
HNL - ATL,52969613999,HNL 56B-4 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/52969613999,https://www.airlines-manager.com/aircraft/show/109187501,16:00,9:59,592,"$2,191,004.00","$2,005,149.00"
HNL - ATL,52985325474,HNL 56B-2 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/52985325474,https://www.airlines-manager.com/aircraft/show/109187499,22:45,16:44,591,"$2,187,676.00","$2,001,961.00"
HNL - BNE,52940291067,HNL 84B-6 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/52940291067,https://www.airlines-manager.com/aircraft/show/96807088,4:00,22:59,832,"$3,046,440.00","$2,777,591.00"
HNL - BNE,52955473033,HNL 84B-3 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/52955473033,https://www.airlines-manager.com/aircraft/show/96807091,10:00,4:59,831,"$3,024,284.00","$2,761,979.00"
HNL - BOS,52940290495,HNL 56E-6 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/52940290495,https://www.airlines-manager.com/aircraft/show/117414505,0:00,19:59,592,"$2,395,125.00","$2,235,673.00"
HNL - BOS,52955472931,HNL 56E-1 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/52955472931,https://www.airlines-manager.com/aircraft/show/117414500,8:30,4:29,592,"$2,395,125.00","$2,235,673.00"
HNL - BOS,52955472932,HNL 56E-4 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/52955472932,https://www.airlines-manager.com/aircraft/show/117414503,10:00,5:59,592,"$2,395,125.00","$2,235,673.00"
HNL - CLT,52940291098,HNL 56D-3 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/52940291098,https://www.airlines-manager.com/aircraft/show/112066134,4:30,23:14,592,"$2,251,187.00","$2,095,488.00"
HNL - CLT,52940291099,HNL 56D-5 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/52940291099,https://www.airlines-manager.com/aircraft/show/112066136,5:30,0:14,592,"$2,251,187.00","$2,095,488.00"
HNL - CLT,52985325523,HNL 56D-3 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/52985325523,https://www.airlines-manager.com/aircraft/show/112066134,23:15,17:59,591,"$2,247,777.00","$2,092,224.00"
HNL - CXI,52940291045,HNL CARGO 2,737-700,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/52940291045,https://www.airlines-manager.com/aircraft/show/107563068,3:45,10:59,0,"$121,178.00","$97,512.00"
HNL - CXI,52940291046,HNL-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/52940291046,https://www.airlines-manager.com/aircraft/show/90717080,5:30,12:44,388,"$489,853.00","$459,345.00"
HNL - CXI,52969613878,HNL-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/52969613878,https://www.airlines-manager.com/aircraft/show/90717080,15:00,22:14,388,"$489,853.00","$459,345.00"
HNL - CXI,52985325440,HNL-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/52985325440,https://www.airlines-manager.com/aircraft/show/90717080,22:15,5:29,388,"$489,853.00","$459,345.00"
HNL - DFW,52940291100,HNL 56E-2 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/52940291100,https://www.airlines-manager.com/aircraft/show/117414501,4:30,19:59,592,"$1,884,682.00","$1,733,298.00"
HNL - DFW,52975649189,HNL 56E-7 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/52975649189,https://www.airlines-manager.com/aircraft/show/117414506,17:00,8:29,592,"$1,884,682.00","$1,733,298.00"
HNL - DFW,52975649190,HNL 56E-3 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/52975649190,https://www.airlines-manager.com/aircraft/show/117414502,18:30,9:59,592,"$1,884,682.00","$1,733,298.00"
HNL - DTW,52940291145,HNL 56E-5 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/52940291145,https://www.airlines-manager.com/aircraft/show/117414504,6:00,23:59,592,"$2,148,777.00","$1,998,982.00"
HNL - DTW,52980970863,HNL 56E-6 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/52980970863,https://www.airlines-manager.com/aircraft/show/117414505,20:00,13:59,592,"$2,148,777.00","$1,998,982.00"
HNL - DTW,52980970864,HNL 56E-2 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/52980970864,https://www.airlines-manager.com/aircraft/show/117414501,20:00,13:59,592,"$2,148,777.00","$1,998,982.00"
HNL - EWR,52940291077,HNL 56A-7 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/52940291077,https://www.airlines-manager.com/aircraft/show/95351586,4:15,23:59,592,"$2,361,440.00","$2,199,525.00"
HNL - EWR,52940291078,HNL 56A-6 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/52940291078,https://www.airlines-manager.com/aircraft/show/95351587,6:00,1:44,592,"$2,361,440.00","$2,199,525.00"
HNL - EWR,52980970848,HNL 56A-3 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/52980970848,https://www.airlines-manager.com/aircraft/show/95351590,19:45,15:29,590,"$2,355,323.00","$2,193,686.00"
HNL - GUM,52940290522,HNL-GUM,A321neo,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/52940290522,https://www.airlines-manager.com/aircraft/show/115400544,0:00,16:44,338,"$1,120,414.00","$1,057,355.00"
HNL - GUM,52940290523,HNL 84A-3 F,777-300,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/52940290523,https://www.airlines-manager.com/aircraft/show/95818924,4:45,20:29,832,"$2,549,213.00","$2,348,786.00"
HNL - IAD,52940291018,HNL 56C-3 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/52940291018,https://www.airlines-manager.com/aircraft/show/111639415,3:15,22:14,592,"$2,267,231.00","$2,114,504.00"
HNL - IAD,52955472992,HNL 56C-5 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/52955472992,https://www.airlines-manager.com/aircraft/show/111639417,9:15,4:14,592,"$2,267,231.00","$2,114,504.00"
HNL - IAD,52980970871,HNL 56C-7 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/52980970871,https://www.airlines-manager.com/aircraft/show/111639419,20:00,14:59,590,"$2,257,258.00","$2,104,862.00"
HNL - IAH,52940290526,HNL 56A-1 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/52940290526,https://www.airlines-manager.com/aircraft/show/95351592,0:00,15:59,592,"$1,926,347.00","$1,786,036.00"
HNL - IAH,52940290527,HNL 56A-3 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/52940290527,https://www.airlines-manager.com/aircraft/show/95351590,3:45,19:44,592,"$1,926,347.00","$1,786,036.00"
HNL - IAH,52969613980,HNL 56A-1 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/52969613980,https://www.airlines-manager.com/aircraft/show/95351592,16:00,7:59,591,"$1,920,807.00","$1,780,642.00"
HNL - ITO,52940290872,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/52940290872,https://www.airlines-manager.com/aircraft/show/94803593,1:45,4:44,170,"$77,005.00","$66,478.00"
HNL - ITO,52940290873,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/52940290873,https://www.airlines-manager.com/aircraft/show/94803596,3:15,6:14,170,"$77,005.00","$66,478.00"
HNL - ITO,52940290874,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/52940290874,https://www.airlines-manager.com/aircraft/show/94803595,6:00,8:59,170,"$77,005.00","$66,478.00"
HNL - ITO,52955473002,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/52955473002,https://www.airlines-manager.com/aircraft/show/94803594,9:30,12:29,170,"$77,005.00","$66,478.00"
HNL - ITO,52969613927,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/52969613927,https://www.airlines-manager.com/aircraft/show/94803593,15:00,17:59,170,"$77,005.00","$66,478.00"
HNL - ITO,52969800878,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/52969800878,https://www.airlines-manager.com/aircraft/show/94803596,16:30,19:29,170,"$77,005.00","$66,478.00"
HNL - ITO,52980970815,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/52980970815,https://www.airlines-manager.com/aircraft/show/94803595,19:15,22:14,170,"$77,005.00","$66,478.00"
HNL - ITO,52985325485,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/52985325485,https://www.airlines-manager.com/aircraft/show/94803594,22:45,1:44,123,"$64,578.00","$54,549.00"
HNL - JFK,52940290982,HNL 56B-6 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/52940290982,https://www.airlines-manager.com/aircraft/show/109187503,3:00,22:44,592,"$2,393,940.00","$2,211,500.00"
HNL - JFK,52955472969,HNL 56B-1 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/52955472969,https://www.airlines-manager.com/aircraft/show/109187498,9:00,4:44,592,"$2,393,940.00","$2,211,500.00"
HNL - JFK,52975649200,HNL 56B-3 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/52975649200,https://www.airlines-manager.com/aircraft/show/109187500,17:00,12:44,592,"$2,393,940.00","$2,211,500.00"
HNL - KOA,52940290700,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/52940290700,https://www.airlines-manager.com/aircraft/show/94803595,0:45,3:29,170,"$58,675.00","$48,297.00"
HNL - KOA,52940290701,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/52940290701,https://www.airlines-manager.com/aircraft/show/94803594,4:15,6:59,170,"$58,675.00","$48,297.00"
HNL - KOA,52955472788,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/52955472788,https://www.airlines-manager.com/aircraft/show/94803593,7:15,9:59,170,"$58,675.00","$48,297.00"
HNL - KOA,52955472789,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/52955472789,https://www.airlines-manager.com/aircraft/show/94803596,8:45,11:29,170,"$58,675.00","$48,297.00"
HNL - KOA,52969613821,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/52969613821,https://www.airlines-manager.com/aircraft/show/94803595,14:00,16:44,170,"$58,675.00","$48,297.00"
HNL - KOA,52975649257,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/52975649257,https://www.airlines-manager.com/aircraft/show/94803594,17:30,20:14,170,"$58,675.00","$48,297.00"
HNL - KOA,52980970938,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/52980970938,https://www.airlines-manager.com/aircraft/show/94803593,20:30,23:14,170,"$58,675.00","$48,297.00"
HNL - KOA,52985325394,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/52985325394,https://www.airlines-manager.com/aircraft/show/94803596,22:00,0:44,170,"$58,675.00","$48,297.00"
HNL - LAS,52940291150,HNL 84A-5 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/52940291150,https://www.airlines-manager.com/aircraft/show/95818922,6:30,18:29,832,"$1,887,756.00","$1,701,128.00"
HNL - LAS,52969800883,HNL-LAS S,A321-200,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/52969800883,https://www.airlines-manager.com/aircraft/show/116385511,16:30,5:14,232,"$743,696.00","$672,194.00"
HNL - LAS,52980970925,HNL 84A-3 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/52980970925,https://www.airlines-manager.com/aircraft/show/95818924,20:30,8:29,800,"$1,839,652.00","$1,656,009.00"
HNL - LAX,52955472766,HNL-SFO-LAX 3,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/52955472766,https://www.airlines-manager.com/aircraft/show/110044460,7:00,18:59,338,"$786,358.00","$718,086.00"
HNL - LAX,52955472767,HNL-SFO-LAX 4,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/52955472767,https://www.airlines-manager.com/aircraft/show/110044461,9:00,20:59,338,"$786,358.00","$718,086.00"
HNL - LAX,52955472768,HNL-SFO-LAX 6 B,A319-100,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/52955472768,https://www.airlines-manager.com/aircraft/show/106106389,10:00,21:59,198,"$544,304.00","$487,024.00"
HNL - LAX,52975649328,HNL-SFO-LAX 1,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/52975649328,https://www.airlines-manager.com/aircraft/show/110044458,18:15,6:14,338,"$786,358.00","$718,086.00"
HNL - LAX,52980970919,HNL-SFO-LAX 2,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/52980970919,https://www.airlines-manager.com/aircraft/show/110044459,20:15,8:14,338,"$786,358.00","$718,086.00"
HNL - LAX,52985325391,HNL-SFO-LAX 5,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/52985325391,https://www.airlines-manager.com/aircraft/show/110044462,21:45,9:44,338,"$786,358.00","$718,086.00"
HNL - LIH,52940290717,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/52940290717,https://www.airlines-manager.com/aircraft/show/94803596,0:45,3:14,170,"$50,934.00","$42,514.00"
HNL - LIH,52940290718,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/52940290718,https://www.airlines-manager.com/aircraft/show/94803595,3:30,5:59,170,"$50,934.00","$42,514.00"
HNL - LIH,52955472779,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/52955472779,https://www.airlines-manager.com/aircraft/show/94803594,7:00,9:29,170,"$50,934.00","$42,514.00"
HNL - LIH,52955472780,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/52955472780,https://www.airlines-manager.com/aircraft/show/94803593,10:00,12:29,170,"$50,934.00","$42,514.00"
HNL - LIH,52969613820,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/52969613820,https://www.airlines-manager.com/aircraft/show/94803596,14:00,16:29,170,"$50,934.00","$42,514.00"
HNL - LIH,52975649181,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/52975649181,https://www.airlines-manager.com/aircraft/show/94803595,16:45,19:14,170,"$50,934.00","$42,514.00"
HNL - LIH,52980970916,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/52980970916,https://www.airlines-manager.com/aircraft/show/94803594,20:15,22:44,170,"$50,934.00","$42,514.00"
HNL - LIH,52985325532,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/52985325532,https://www.airlines-manager.com/aircraft/show/94803593,23:15,1:44,169,"$50,707.00","$42,292.00"
HNL - LNY,52940290725,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/52940290725,https://www.airlines-manager.com/aircraft/show/106107514,1:00,3:29,116,"$30,293.00","$25,286.00"
HNL - LNY,52940290726,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/52940290726,https://www.airlines-manager.com/aircraft/show/106107514,3:30,5:59,116,"$30,293.00","$25,286.00"
HNL - LNY,52940290727,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/52940290727,https://www.airlines-manager.com/aircraft/show/106107514,6:00,8:29,116,"$30,293.00","$25,286.00"
HNL - LNY,52955472938,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/52955472938,https://www.airlines-manager.com/aircraft/show/106107514,8:30,10:59,116,"$30,293.00","$25,286.00"
HNL - LNY,52969613915,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/52969613915,https://www.airlines-manager.com/aircraft/show/106107514,15:00,17:29,116,"$30,293.00","$25,286.00"
HNL - LNY,52975649263,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/52975649263,https://www.airlines-manager.com/aircraft/show/106107514,17:30,19:59,116,"$30,293.00","$25,286.00"
HNL - LNY,52980970884,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/52980970884,https://www.airlines-manager.com/aircraft/show/106107514,20:00,22:29,116,"$30,293.00","$25,286.00"
HNL - LNY,52985325449,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/52985325449,https://www.airlines-manager.com/aircraft/show/106107514,22:30,0:59,116,"$30,293.00","$25,286.00"
HNL - MCO,52940290720,HNL 56C-7 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/52940290720,https://www.airlines-manager.com/aircraft/show/111639419,1:00,19:59,592,"$2,277,699.00","$2,117,600.00"
HNL - MCO,52940290721,HNL 56C-6 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/52940290721,https://www.airlines-manager.com/aircraft/show/111639418,4:15,23:14,592,"$2,277,699.00","$2,117,600.00"
HNL - MCO,52955472916,HNL 56C-2 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/52955472916,https://www.airlines-manager.com/aircraft/show/111639414,8:15,3:14,590,"$2,271,796.00","$2,111,964.00"
HNL - MEL,52955472922,HNL 84A-4 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/52955472922,https://www.airlines-manager.com/aircraft/show/95818923,8:30,6:29,832,"$3,528,582.00","$3,227,200.00"
HNL - MEL,52980970888,HNL 84A-7 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/52980970888,https://www.airlines-manager.com/aircraft/show/95818920,20:00,17:59,830,"$3,521,380.00","$3,220,417.00"
HNL - MIA,52955472946,HNL 56A-2 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/52955472946,https://www.airlines-manager.com/aircraft/show/95351591,8:30,3:44,592,"$2,322,429.00","$2,156,168.00"
HNL - MIA,52963026739,HNL 56A-5 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/52963026739,https://www.airlines-manager.com/aircraft/show/95351588,10:45,5:59,592,"$2,322,429.00","$2,156,168.00"
HNL - MIA,52969613954,HNL 56A-4 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/52969613954,https://www.airlines-manager.com/aircraft/show/95351589,15:30,10:44,592,"$2,322,429.00","$2,156,168.00"
HNL - MNL,52955472803,HNL 84A-2 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/52955472803,https://www.airlines-manager.com/aircraft/show/95818925,7:30,4:44,832,"$3,449,381.00","$3,160,084.00"
HNL - MNL,52975649357,HNL 84A-5 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/52975649357,https://www.airlines-manager.com/aircraft/show/95818922,18:30,15:44,832,"$3,449,381.00","$3,160,084.00"
HNL - MSP,52969613979,HNL 56C-1 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/52969613979,https://www.airlines-manager.com/aircraft/show/111639413,16:00,8:14,592,"$1,940,392.00","$1,806,019.00"
HNL - MSP,52975649198,HNL 56C-4 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/52975649198,https://www.airlines-manager.com/aircraft/show/111639416,17:00,9:14,592,"$1,940,392.00","$1,806,019.00"
HNL - MSP,52985325427,HNL 56C-3 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/52985325427,https://www.airlines-manager.com/aircraft/show/111639415,22:15,14:29,590,"$1,935,365.00","$1,801,215.00"
HNL - NAN,52940291049,HNL 84A-7 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/52940291049,https://www.airlines-manager.com/aircraft/show/95818920,3:45,17:14,832,"$2,066,860.00","$1,895,654.00"
HNL - NAN,52975649321,HNL 84A-1 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/52975649321,https://www.airlines-manager.com/aircraft/show/95818926,18:00,7:29,830,"$2,031,287.00","$1,870,030.00"
HNL - OGG,52940290875,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/52940290875,https://www.airlines-manager.com/aircraft/show/94803594,1:45,4:14,170,"$51,604.00","$42,806.00"
HNL - OGG,52940290876,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/52940290876,https://www.airlines-manager.com/aircraft/show/94803593,4:45,7:14,170,"$51,604.00","$42,806.00"
HNL - OGG,52940290877,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/52940290877,https://www.airlines-manager.com/aircraft/show/94803596,6:15,8:44,170,"$51,604.00","$42,806.00"
HNL - OGG,52955472984,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/52955472984,https://www.airlines-manager.com/aircraft/show/94803595,9:00,11:29,170,"$51,604.00","$42,806.00"
HNL - OGG,52969613926,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/52969613926,https://www.airlines-manager.com/aircraft/show/94803594,15:00,17:29,170,"$51,604.00","$42,806.00"
HNL - OGG,52975649311,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/52975649311,https://www.airlines-manager.com/aircraft/show/94803593,18:00,20:29,170,"$51,604.00","$42,806.00"
HNL - OGG,52980970825,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/52980970825,https://www.airlines-manager.com/aircraft/show/94803596,19:30,21:59,170,"$51,604.00","$42,806.00"
HNL - OGG,52985325432,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/52985325432,https://www.airlines-manager.com/aircraft/show/94803595,22:15,0:44,170,"$51,604.00","$42,806.00"
HNL - ORD,52955473019,HNL 56B-5 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/52955473019,https://www.airlines-manager.com/aircraft/show/109187502,10:00,2:59,592,"$2,079,578.00","$1,910,118.00"
HNL - ORD,52969614008,HNL 56B-7 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/52969614008,https://www.airlines-manager.com/aircraft/show/109187504,16:00,8:59,592,"$2,079,578.00","$1,910,118.00"
HNL - ORD,52985325475,HNL 56B-6 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/52985325475,https://www.airlines-manager.com/aircraft/show/109187503,22:45,15:44,590,"$2,074,167.00","$1,904,945.00"
HNL - PHX,52940291024,HNL 56D-7 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/52940291024,https://www.airlines-manager.com/aircraft/show/112066138,3:30,15:59,592,"$1,512,475.00","$1,401,340.00"
HNL - PHX,52969613901,HNL 56D-6 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/52969613901,https://www.airlines-manager.com/aircraft/show/112066137,15:00,3:29,592,"$1,512,475.00","$1,401,340.00"
HNL - PHX,52969613902,HNL 56D-2 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/52969613902,https://www.airlines-manager.com/aircraft/show/112066133,16:00,4:29,592,"$1,512,475.00","$1,401,340.00"
HNL - PPG,52940290914,HNL CARGO 1,737-700,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/52940290914,https://www.airlines-manager.com/aircraft/show/107564830,2:15,14:29,0,"$206,675.00","$166,200.00"
HNL - PPG,52940290915,HNL-TRW-PPG 1 S,A321-200,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/52940290915,https://www.airlines-manager.com/aircraft/show/88725599,3:30,15:44,380,"$785,972.00","$736,370.00"
HNL - PPG,52969613995,HNL-TRW-PPG 2 S,A321-200,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/52969613995,https://www.airlines-manager.com/aircraft/show/88725598,16:00,4:14,380,"$785,972.00","$736,370.00"
HNL - PPG,52975649303,HNL-TRW-PPG 3 S,A321-200,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/52975649303,https://www.airlines-manager.com/aircraft/show/88725597,18:00,6:14,380,"$785,972.00","$736,370.00"
HNL - PPT,52940291107,HNL-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/52940291107,https://www.airlines-manager.com/aircraft/show/88725600,4:45,17:29,310,"$766,366.00","$713,399.00"
HNL - PPT,52969613911,HNL CARGO 2,737-700,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/52969613911,https://www.airlines-manager.com/aircraft/show/107563068,15:00,3:44,0,"$210,898.00","$168,062.00"
HNL - PPT,52969613912,HNL 84A-6 F,777-300,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/52969613912,https://www.airlines-manager.com/aircraft/show/95818921,15:45,3:44,832,"$1,835,853.00","$1,699,609.00"
HNL - PPT,52975649259,HNL-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/52975649259,https://www.airlines-manager.com/aircraft/show/88725600,17:30,6:14,310,"$688,663.00","$643,218.00"
HNL - SEA,52940291043,HNL 56D-1 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/52940291043,https://www.airlines-manager.com/aircraft/show/112066132,3:45,15:14,592,"$1,411,308.00","$1,309,635.00"
HNL - SEA,52969613981,HNL 56D-1 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/52969613981,https://www.airlines-manager.com/aircraft/show/112066132,16:00,3:29,592,"$1,411,308.00","$1,309,635.00"
HNL - SEA,52975649323,HNL 56D-4 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/52975649323,https://www.airlines-manager.com/aircraft/show/112066135,18:00,5:29,592,"$1,411,308.00","$1,309,635.00"
HNL - SFO,52955472769,HNL-SFO-LAX 1,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/52955472769,https://www.airlines-manager.com/aircraft/show/110044458,7:00,18:14,338,"$755,466.00","$696,982.00"
HNL - SFO,52955472770,HNL-SFO-LAX 2,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/52955472770,https://www.airlines-manager.com/aircraft/show/110044459,9:00,20:14,338,"$755,466.00","$696,982.00"
HNL - SFO,52955472771,HNL-SFO-LAX 5,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/52955472771,https://www.airlines-manager.com/aircraft/show/110044462,10:30,21:44,338,"$755,466.00","$696,982.00"
HNL - SFO,52980970770,HNL-SFO-LAX 3,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/52980970770,https://www.airlines-manager.com/aircraft/show/110044460,19:00,6:14,338,"$755,466.00","$696,982.00"
HNL - SFO,52980970771,HNL-SFO-LAX 4,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/52980970771,https://www.airlines-manager.com/aircraft/show/110044461,21:00,8:14,338,"$755,466.00","$696,982.00"
HNL - SFO,52985325400,HNL-SFO-LAX 6 B,A319-100,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/52985325400,https://www.airlines-manager.com/aircraft/show/106106389,22:00,9:29,198,"$526,132.00","$476,845.00"
HNL - SIN,52940291126,HNL 84B-4 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/52940291126,https://www.airlines-manager.com/aircraft/show/96807090,5:15,7:29,832,"$4,307,851.00","$3,909,629.00"
HNL - SIN,52975649228,HNL 84B-7 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/52975649228,https://www.airlines-manager.com/aircraft/show/96807087,17:00,19:14,831,"$4,304,373.00","$3,906,378.00"
HNL - SYD,52955472809,HNL 84B-5 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/52955472809,https://www.airlines-manager.com/aircraft/show/96807089,7:30,3:59,832,"$3,117,577.00","$2,810,546.00"
HNL - SYD,52980970809,HNL 84B-1 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/52980970809,https://www.airlines-manager.com/aircraft/show/96807093,19:15,15:44,832,"$3,117,577.00","$2,810,546.00"
HNL - SYD,52980970810,Charter 2,747-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/52980970810,https://www.airlines-manager.com/aircraft/show/112787252,20:00,15:59,576,"$2,692,245.00","$2,533,404.00"
HNL - TRW,52940291087,HNL-TRW-PPG 2 S,A321-200,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/52940291087,https://www.airlines-manager.com/aircraft/show/88725598,4:15,15:44,380,"$764,408.00","$719,777.00"
HNL - TRW,52940291088,HNL-TRW-PPG 3 S,A321-200,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/52940291088,https://www.airlines-manager.com/aircraft/show/88725597,6:15,17:44,380,"$764,408.00","$719,777.00"
HNL - TRW,52969613909,HNL CARGO 1,737-700,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/52969613909,https://www.airlines-manager.com/aircraft/show/107564830,15:00,2:14,0,"$192,316.00","$155,750.00"
HNL - TRW,52969613910,HNL-TRW-PPG 1 S,A321-200,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/52969613910,https://www.airlines-manager.com/aircraft/show/88725599,16:00,3:29,380,"$764,408.00","$719,777.00"
HNL - YVR,52940290626,HNL 56D-6 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/52940290626,https://www.airlines-manager.com/aircraft/show/112066137,0:15,11:59,592,"$1,414,130.00","$1,318,724.00"
HNL - YVR,52940290627,HNL 56D-2 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/52940290627,https://www.airlines-manager.com/aircraft/show/112066133,3:30,15:14,592,"$1,414,130.00","$1,318,724.00"
HNL - YVR,52969613982,HNL 56D-7 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/52969613982,https://www.airlines-manager.com/aircraft/show/112066138,16:00,3:44,592,"$1,414,130.00","$1,318,724.00"
IAH - ABQ,52940290757,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/52940290757,https://www.airlines-manager.com/aircraft/show/103600700,1:00,5:59,310,"$316,834.00","$283,517.00"
IAH - ABQ,52940290758,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/52940290758,https://www.airlines-manager.com/aircraft/show/110582844,2:30,7:29,198,"$240,812.00","$214,126.00"
IAH - ABQ,52940290759,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/52940290759,https://www.airlines-manager.com/aircraft/show/88725601,6:00,10:59,310,"$316,834.00","$283,517.00"
IAH - ABQ,52963027006,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/52963027006,https://www.airlines-manager.com/aircraft/show/103600702,13:00,17:59,310,"$316,834.00","$283,517.00"
IAH - ABQ,52975649359,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/52975649359,https://www.airlines-manager.com/aircraft/show/103600701,18:45,23:44,310,"$316,834.00","$283,517.00"
IAH - ALB,52940290601,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/52940290601,https://www.airlines-manager.com/aircraft/show/114266976,0:15,7:59,320,"$495,306.00","$449,852.00"
IAH - ALB,52940290602,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/52940290602,https://www.airlines-manager.com/aircraft/show/92800067,2:00,9:59,112,"$234,437.00","$207,397.00"
IAH - ALB,52963026908,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/52963026908,https://www.airlines-manager.com/aircraft/show/114266971,12:00,19:44,320,"$495,306.00","$449,852.00"
IAH - ALB,52969613897,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/52969613897,https://www.airlines-manager.com/aircraft/show/114266970,15:00,22:44,320,"$495,306.00","$449,852.00"
IAH - ALB,52980970910,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/52980970910,https://www.airlines-manager.com/aircraft/show/114266972,20:15,3:59,320,"$495,306.00","$449,852.00"
IAH - ANC,52963026914,IAH-ANC-ONT 1,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/52963026914,https://www.airlines-manager.com/aircraft/show/108258010,12:00,2:44,310,"$897,063.00","$826,839.00"
IAH - ANC,52969613797,IAH-ANC-ONT 2,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/52969613797,https://www.airlines-manager.com/aircraft/show/108258011,14:00,4:44,310,"$897,063.00","$826,839.00"
IAH - ANC,52980970793,IAH-ANC-ONT 3,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/52980970793,https://www.airlines-manager.com/aircraft/show/108258012,19:15,9:59,310,"$897,063.00","$826,839.00"
IAH - ANC,52980970794,IAH-ANC-ONT 4,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/52980970794,https://www.airlines-manager.com/aircraft/show/108089220,21:15,11:59,310,"$897,063.00","$826,839.00"
IAH - ANC,52985325529,IAH-ANC-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/52985325529,https://www.airlines-manager.com/aircraft/show/108286957,23:15,13:59,195,"$660,856.00","$604,894.00"
IAH - ATL,52940290636,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/52940290636,https://www.airlines-manager.com/aircraft/show/82323704,0:15,4:59,112,"$146,132.00","$112,091.00"
IAH - ATL,52955473046,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/52955473046,https://www.airlines-manager.com/aircraft/show/95894466,10:00,14:44,320,"$306,731.00","$242,656.00"
IAH - ATL,52963026752,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/52963026752,https://www.airlines-manager.com/aircraft/show/96256511,10:45,15:29,320,"$306,731.00","$242,656.00"
IAH - ATL,52969613996,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/52969613996,https://www.airlines-manager.com/aircraft/show/96183549,16:00,20:44,320,"$306,731.00","$242,656.00"
IAH - ATL,52975649282,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/52975649282,https://www.airlines-manager.com/aircraft/show/96177955,17:45,22:29,320,"$306,731.00","$242,656.00"
IAH - ATL,52985325556,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/52985325556,https://www.airlines-manager.com/aircraft/show/96250652,23:45,4:29,319,"$304,932.00","$240,885.00"
IAH - AUS,52940291082,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/52940291082,https://www.airlines-manager.com/aircraft/show/106007214,4:15,6:59,338,"$100,434.00","$76,833.00"
IAH - AUS,52963026851,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/52963026851,https://www.airlines-manager.com/aircraft/show/106007213,11:00,13:44,338,"$100,434.00","$76,833.00"
IAH - AUS,52963026852,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/52963026852,https://www.airlines-manager.com/aircraft/show/106007217,12:00,14:44,338,"$100,434.00","$76,833.00"
IAH - AUS,52975649331,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/52975649331,https://www.airlines-manager.com/aircraft/show/106007216,18:15,20:59,338,"$100,434.00","$76,833.00"
IAH - AUS,52980971003,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/52980971003,https://www.airlines-manager.com/aircraft/show/106007215,21:30,0:14,266,"$87,862.00","$64,490.00"
IAH - BDL,52940291149,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/52940291149,https://www.airlines-manager.com/aircraft/show/103600700,6:00,13:59,310,"$498,372.00","$456,032.00"
IAH - BDL,52955472819,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/52955472819,https://www.airlines-manager.com/aircraft/show/110582844,7:30,15:29,198,"$375,585.00","$341,648.00"
IAH - BDL,52963026755,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/52963026755,https://www.airlines-manager.com/aircraft/show/88725601,11:00,18:59,310,"$498,372.00","$456,032.00"
IAH - BDL,52975649313,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/52975649313,https://www.airlines-manager.com/aircraft/show/103600702,18:00,1:59,310,"$498,372.00","$456,032.00"
IAH - BDL,52980970846,IAH-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/52980970846,https://www.airlines-manager.com/aircraft/show/96990010,19:45,3:44,112,"$234,524.00","$206,491.00"
IAH - BDL,52985325564,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/52985325564,https://www.airlines-manager.com/aircraft/show/103600701,23:45,7:44,310,"$498,372.00","$456,032.00"
IAH - BFF,52940291069,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/52940291069,https://www.airlines-manager.com/aircraft/show/114266972,4:00,9:44,320,"$365,514.00","$327,636.00"
IAH - BFF,52955473083,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/52955473083,https://www.airlines-manager.com/aircraft/show/114266976,10:15,15:59,320,"$365,514.00","$327,636.00"
IAH - BFF,52963026907,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/52963026907,https://www.airlines-manager.com/aircraft/show/92800067,12:00,17:44,112,"$173,226.00","$151,545.00"
IAH - BFF,52980970862,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/52980970862,https://www.airlines-manager.com/aircraft/show/114266971,19:45,1:29,320,"$365,514.00","$327,636.00"
IAH - BFF,52985325487,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/52985325487,https://www.airlines-manager.com/aircraft/show/114266970,22:45,4:29,320,"$365,514.00","$327,636.00"
IAH - BIL,52940290976,IAH-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/52940290976,https://www.airlines-manager.com/aircraft/show/117273390,2:45,9:59,320,"$455,489.00","$412,098.00"
IAH - BIL,52955472971,IAH-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/52955472971,https://www.airlines-manager.com/aircraft/show/117273392,9:00,16:14,320,"$455,489.00","$412,098.00"
IAH - BIL,52963026821,IAH-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/52963026821,https://www.airlines-manager.com/aircraft/show/117273389,11:00,18:14,320,"$455,489.00","$412,098.00"
IAH - BIL,52975649343,IAH-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/52975649343,https://www.airlines-manager.com/aircraft/show/117273391,18:30,1:44,320,"$455,489.00","$412,098.00"
IAH - BNA,52940291062,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/52940291062,https://www.airlines-manager.com/aircraft/show/104258214,4:00,8:44,310,"$301,859.00","$270,650.00"
IAH - BNA,52955472995,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/52955472995,https://www.airlines-manager.com/aircraft/show/104258213,9:15,13:59,310,"$301,859.00","$270,650.00"
IAH - BNA,52969613907,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/52969613907,https://www.airlines-manager.com/aircraft/show/104258212,15:00,19:44,310,"$301,859.00","$270,650.00"
IAH - BNA,52985325417,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/52985325417,https://www.airlines-manager.com/aircraft/show/104258211,22:00,2:44,310,"$301,859.00","$270,650.00"
IAH - BNA,52985325418,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/52985325418,https://www.airlines-manager.com/aircraft/show/103534664,23:00,3:44,112,"$143,473.00","$123,602.00"
IAH - BOG,52940291148,IAH 56A-4 B,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/52940291148,https://www.airlines-manager.com/aircraft/show/106676235,6:00,15:59,648,"$1,300,543.00","$1,208,251.00"
IAH - BOG,52969613835,IAH 56A-6 B,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/52969613835,https://www.airlines-manager.com/aircraft/show/106676237,14:00,23:59,648,"$1,300,543.00","$1,208,251.00"
IAH - BOG,52980970881,IAH 56A-1 B,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/52980970881,https://www.airlines-manager.com/aircraft/show/106676232,20:00,5:59,648,"$1,300,543.00","$1,208,251.00"
IAH - BOI,52940290778,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/52940290778,https://www.airlines-manager.com/aircraft/show/104258213,1:15,9:14,310,"$500,500.00","$458,873.00"
IAH - BOI,52955472773,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/52955472773,https://www.airlines-manager.com/aircraft/show/104258212,7:00,14:59,310,"$500,500.00","$458,873.00"
IAH - BOI,52969613822,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/52969613822,https://www.airlines-manager.com/aircraft/show/104258211,14:00,21:59,310,"$500,500.00","$458,873.00"
IAH - BOI,52969613823,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/52969613823,https://www.airlines-manager.com/aircraft/show/103534664,15:00,22:59,112,"$235,533.00","$207,971.00"
IAH - BOI,52980970886,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/52980970886,https://www.airlines-manager.com/aircraft/show/104258214,20:00,3:59,310,"$500,500.00","$458,873.00"
IAH - BOS,52940290850,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/52940290850,https://www.airlines-manager.com/aircraft/show/88400800,1:45,9:59,400,"$665,911.00","$604,107.00"
IAH - BOS,52963026877,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/52963026877,https://www.airlines-manager.com/aircraft/show/88400799,11:00,19:14,400,"$665,911.00","$604,107.00"
IAH - BOS,52963026878,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/52963026878,https://www.airlines-manager.com/aircraft/show/88400801,12:00,20:14,400,"$665,911.00","$604,107.00"
IAH - BOS,52975649277,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/52975649277,https://www.airlines-manager.com/aircraft/show/89233038,17:45,1:59,400,"$665,911.00","$604,107.00"
IAH - BOS,52975649278,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/52975649278,https://www.airlines-manager.com/aircraft/show/88400798,18:30,2:44,377,"$643,077.00","$582,226.00"
IAH - BSB,52963026881,IAH 84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/52963026881,https://www.airlines-manager.com/aircraft/show/89124076,11:15,5:29,932,"$3,054,473.00","$2,786,539.00"
IAH - BSB,52980970908,IAH 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/52980970908,https://www.airlines-manager.com/aircraft/show/88905140,20:15,14:29,931,"$3,052,083.00","$2,784,300.00"
IAH - BTV,52940290533,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/52940290533,https://www.airlines-manager.com/aircraft/show/86385103,0:00,8:14,310,"$515,411.00","$473,684.00"
IAH - BTV,52940290534,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/52940290534,https://www.airlines-manager.com/aircraft/show/82543907,4:15,12:29,112,"$242,874.00","$215,099.00"
IAH - BTV,52955472796,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/52955472796,https://www.airlines-manager.com/aircraft/show/114373409,7:15,15:29,310,"$515,411.00","$473,684.00"
IAH - BTV,52969613768,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/52969613768,https://www.airlines-manager.com/aircraft/show/114373410,14:00,22:14,310,"$515,411.00","$473,684.00"
IAH - BTV,52975649368,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/52975649368,https://www.airlines-manager.com/aircraft/show/113994196,18:45,2:59,310,"$515,411.00","$473,684.00"
IAH - BUF,52940290796,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/52940290796,https://www.airlines-manager.com/aircraft/show/107467127,1:15,8:14,310,"$452,131.00","$413,464.00"
IAH - BUF,52940290797,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/52940290797,https://www.airlines-manager.com/aircraft/show/107467128,4:00,10:59,310,"$452,131.00","$413,464.00"
IAH - BUF,52963026979,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/52963026979,https://www.airlines-manager.com/aircraft/show/107467129,13:00,19:59,310,"$452,131.00","$413,464.00"
IAH - BUF,52975649199,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/52975649199,https://www.airlines-manager.com/aircraft/show/110582843,17:00,23:59,198,"$341,294.00","$310,306.00"
IAH - BUF,52980970984,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/52980970984,https://www.airlines-manager.com/aircraft/show/107467130,21:15,4:14,310,"$452,131.00","$413,464.00"
IAH - BUR,52940290928,IAH-YEG-BUR 4,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/52940290928,https://www.airlines-manager.com/aircraft/show/117273341,2:30,9:59,310,"$467,550.00","$428,881.00"
IAH - BUR,52940290929,IAH-YEG-BUR 3,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/52940290929,https://www.airlines-manager.com/aircraft/show/117273342,3:15,10:44,310,"$467,550.00","$428,881.00"
IAH - BUR,52963026879,IAH-YEG-BUR 5,A321neo,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/52963026879,https://www.airlines-manager.com/aircraft/show/117273340,11:00,18:29,338,"$506,558.00","$469,607.00"
IAH - BUR,52975649312,IAH-YEG-BUR 2,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/52975649312,https://www.airlines-manager.com/aircraft/show/117273343,18:00,1:29,310,"$467,550.00","$428,881.00"
IAH - BUR,52980970907,IAH-YEG-BUR 1,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/52980970907,https://www.airlines-manager.com/aircraft/show/117273344,20:15,3:44,290,"$449,692.00","$411,776.00"
IAH - BWI,52940290613,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/52940290613,https://www.airlines-manager.com/aircraft/show/106007215,0:15,6:59,338,"$466,250.00","$424,879.00"
IAH - BWI,52940290614,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/52940290614,https://www.airlines-manager.com/aircraft/show/107543798,4:45,11:44,0,"$114,863.00","$84,145.00"
IAH - BWI,52963026850,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/52963026850,https://www.airlines-manager.com/aircraft/show/106007214,11:00,17:44,338,"$466,250.00","$424,879.00"
IAH - BWI,52969613742,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/52969613742,https://www.airlines-manager.com/aircraft/show/106007213,13:45,20:29,338,"$466,250.00","$424,879.00"
IAH - BWI,52969613743,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/52969613743,https://www.airlines-manager.com/aircraft/show/106007217,14:45,21:29,338,"$466,250.00","$424,879.00"
IAH - BWI,52980970957,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/52980970957,https://www.airlines-manager.com/aircraft/show/106007216,21:00,3:44,338,"$466,250.00","$424,879.00"
IAH - BZN,52940290671,IAH-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/52940290671,https://www.airlines-manager.com/aircraft/show/117273392,0:30,7:59,320,"$473,001.00","$429,239.00"
IAH - BZN,52940290672,IAH-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/52940290672,https://www.airlines-manager.com/aircraft/show/117273389,2:30,9:59,320,"$473,001.00","$429,239.00"
IAH - BZN,52963026819,IAH-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/52963026819,https://www.airlines-manager.com/aircraft/show/117273391,11:00,18:29,320,"$473,001.00","$429,239.00"
IAH - BZN,52980970798,IAH-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/52980970798,https://www.airlines-manager.com/aircraft/show/117273390,19:15,2:44,320,"$473,001.00","$429,239.00"
IAH - CAK,52940290999,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/52940290999,https://www.airlines-manager.com/aircraft/show/113994196,3:00,9:14,310,"$391,740.00","$357,305.00"
IAH - CAK,52955472910,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/52955472910,https://www.airlines-manager.com/aircraft/show/86385103,8:15,14:29,310,"$391,740.00","$357,305.00"
IAH - CAK,52963027009,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/52963027009,https://www.airlines-manager.com/aircraft/show/82543907,13:00,19:14,112,"$185,144.00","$162,590.00"
IAH - CAK,52969613997,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/52969613997,https://www.airlines-manager.com/aircraft/show/114373409,16:00,22:14,310,"$391,740.00","$357,305.00"
IAH - CAK,52985325435,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/52985325435,https://www.airlines-manager.com/aircraft/show/114373410,22:15,4:29,291,"$377,481.00","$343,611.00"
IAH - CHS,52940290834,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/52940290834,https://www.airlines-manager.com/aircraft/show/107467211,1:30,7:14,112,"$169,665.00","$148,508.00"
IAH - CHS,52940290835,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/52940290835,https://www.airlines-manager.com/aircraft/show/107467131,3:30,9:14,310,"$357,718.00","$325,142.00"
IAH - CHS,52963026922,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/52963026922,https://www.airlines-manager.com/aircraft/show/107467132,12:00,17:44,310,"$357,718.00","$325,142.00"
IAH - CHS,52975649245,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/52975649245,https://www.airlines-manager.com/aircraft/show/107467133,17:15,22:59,310,"$357,718.00","$325,142.00"
IAH - CHS,52985325554,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/52985325554,https://www.airlines-manager.com/aircraft/show/107467134,23:45,5:29,310,"$357,718.00","$325,142.00"
IAH - CLE,52940290889,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/52940290889,https://www.airlines-manager.com/aircraft/show/103600702,2:00,8:14,310,"$399,406.00","$362,695.00"
IAH - CLE,52955472826,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/52955472826,https://www.airlines-manager.com/aircraft/show/103600701,7:45,13:59,310,"$399,406.00","$362,695.00"
IAH - CLE,52969613754,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/52969613754,https://www.airlines-manager.com/aircraft/show/103600700,14:00,20:14,310,"$399,406.00","$362,695.00"
IAH - CLE,52969613755,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/52969613755,https://www.airlines-manager.com/aircraft/show/110582844,15:30,21:44,198,"$301,683.00","$272,267.00"
IAH - CLE,52980970772,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/52980970772,https://www.airlines-manager.com/aircraft/show/88725601,19:00,1:14,310,"$399,406.00","$362,695.00"
IAH - CLT,52940291051,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/52940291051,https://www.airlines-manager.com/aircraft/show/93094697,3:45,9:29,310,"$360,268.00","$317,968.00"
IAH - CLT,52955473024,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/52955473024,https://www.airlines-manager.com/aircraft/show/93094698,10:00,15:44,310,"$360,268.00","$317,968.00"
IAH - CLT,52963026949,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/52963026949,https://www.airlines-manager.com/aircraft/show/93100455,12:00,17:44,112,"$170,501.00","$143,530.00"
IAH - CLT,52975649174,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/52975649174,https://www.airlines-manager.com/aircraft/show/93094699,16:45,22:29,310,"$360,268.00","$317,968.00"
IAH - CLT,52975649175,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/52975649175,https://www.airlines-manager.com/aircraft/show/93094695,18:45,0:29,310,"$360,268.00","$317,968.00"
IAH - CLT,52985325409,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/52985325409,https://www.airlines-manager.com/aircraft/show/93094696,22:00,3:44,310,"$360,268.00","$317,968.00"
IAH - CMH,52955472774,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/52955472774,https://www.airlines-manager.com/aircraft/show/103882355,7:00,12:59,310,"$377,763.00","$342,496.00"
IAH - CMH,52963026760,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/52963026760,https://www.airlines-manager.com/aircraft/show/103882358,11:00,16:59,310,"$377,763.00","$342,496.00"
IAH - CMH,52963026762,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/52963026762,https://www.airlines-manager.com/aircraft/show/105099861,12:00,17:59,112,"$178,513.00","$155,633.00"
IAH - CMH,52980970813,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/52980970813,https://www.airlines-manager.com/aircraft/show/103882357,19:15,1:14,310,"$377,763.00","$342,496.00"
IAH - CMH,52985325510,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/52985325510,https://www.airlines-manager.com/aircraft/show/103882356,23:00,4:59,310,"$377,763.00","$342,496.00"
IAH - COS,52940290846,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/52940290846,https://www.airlines-manager.com/aircraft/show/103882355,1:45,6:59,310,"$330,565.00","$297,650.00"
IAH - COS,52940290847,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/52940290847,https://www.airlines-manager.com/aircraft/show/103882358,5:45,10:59,310,"$330,565.00","$297,650.00"
IAH - COS,52969613759,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/52969613759,https://www.airlines-manager.com/aircraft/show/103882357,14:00,19:14,310,"$330,565.00","$297,650.00"
IAH - COS,52975649293,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/52975649293,https://www.airlines-manager.com/aircraft/show/103882356,17:45,22:59,310,"$330,565.00","$297,650.00"
IAH - COS,52985325478,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/52985325478,https://www.airlines-manager.com/aircraft/show/105099861,22:45,3:59,111,"$156,584.00","$135,458.00"
IAH - CUN,52940290764,IAH 56A-4 B,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/52940290764,https://www.airlines-manager.com/aircraft/show/106676235,1:00,5:59,648,"$623,298.00","$570,189.00"
IAH - CUN,52963026969,IAH 56A-5 B,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/52963026969,https://www.airlines-manager.com/aircraft/show/106676236,12:30,17:29,648,"$623,298.00","$570,189.00"
IAH - CUN,52980970926,IAH 56A-7 B,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/52980970926,https://www.airlines-manager.com/aircraft/show/106676238,20:30,1:29,648,"$623,298.00","$570,189.00"
IAH - CVG,52940290637,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/52940290637,https://www.airlines-manager.com/aircraft/show/99093332,0:15,5:44,320,"$346,580.00","$305,879.00"
IAH - CVG,52940290638,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/52940290638,https://www.airlines-manager.com/aircraft/show/99093333,4:00,9:29,320,"$346,580.00","$305,879.00"
IAH - CVG,52955472840,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/52955472840,https://www.airlines-manager.com/aircraft/show/99093334,8:00,13:29,320,"$346,580.00","$305,879.00"
IAH - CVG,52969613806,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/52969613806,https://www.airlines-manager.com/aircraft/show/99093335,14:00,19:29,320,"$346,580.00","$305,879.00"
IAH - CVG,52969613807,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/52969613807,https://www.airlines-manager.com/aircraft/show/101412921,15:45,21:14,0,"$108,278.00","$74,097.00"
IAH - CVG,52969613808,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/52969613808,https://www.airlines-manager.com/aircraft/show/106499070,16:00,21:29,198,"$262,941.00","$234,414.00"
IAH - DEN,52963026928,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/52963026928,https://www.airlines-manager.com/aircraft/show/105562975,12:00,17:29,338,"$377,092.00","$323,858.00"
IAH - DEN,52963026929,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/52963026929,https://www.airlines-manager.com/aircraft/show/105562971,13:00,18:29,338,"$377,092.00","$323,858.00"
IAH - DEN,52985325461,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/52985325461,https://www.airlines-manager.com/aircraft/show/105562972,22:30,3:59,338,"$377,092.00","$323,858.00"
IAH - DEN,52985325462,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/52985325462,https://www.airlines-manager.com/aircraft/show/105562973,23:00,4:29,338,"$377,092.00","$323,858.00"
IAH - DEN,52985325463,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/52985325463,https://www.airlines-manager.com/aircraft/show/107543798,23:15,4:44,0,"$93,340.00","$57,283.00"
IAH - DEN,52985325464,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/52985325464,https://www.airlines-manager.com/aircraft/show/105562974,23:30,4:59,338,"$377,092.00","$323,858.00"
IAH - DFW,52940290753,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/52940290753,https://www.airlines-manager.com/aircraft/show/99093333,1:00,3:59,320,"$127,970.00","$80,376.00"
IAH - DFW,52940290754,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/52940290754,https://www.airlines-manager.com/aircraft/show/99093334,5:00,7:59,320,"$127,970.00","$80,376.00"
IAH - DFW,52963026783,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/52963026783,https://www.airlines-manager.com/aircraft/show/99093335,11:00,13:59,320,"$127,970.00","$80,376.00"
IAH - DFW,52963026784,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/52963026784,https://www.airlines-manager.com/aircraft/show/107543798,13:00,15:59,0,"$39,135.00","$14,173.00"
IAH - DFW,52963026785,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/52963026785,https://www.airlines-manager.com/aircraft/show/106499070,13:00,15:59,198,"$96,695.00","$64,607.00"
IAH - DFW,52969613861,IAH-YEG-BUR 4,A321-200,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/52969613861,https://www.airlines-manager.com/aircraft/show/117273341,14:15,17:14,310,"$129,445.00","$89,347.00"
IAH - DFW,52980970982,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/52980970982,https://www.airlines-manager.com/aircraft/show/99093332,21:15,0:14,320,"$127,970.00","$80,376.00"
IAH - DSM,52940291009,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/52940291009,https://www.airlines-manager.com/aircraft/show/110424761,3:15,8:29,320,"$331,947.00","$297,017.00"
IAH - DSM,52955472954,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/52955472954,https://www.airlines-manager.com/aircraft/show/110424758,8:45,13:59,320,"$331,947.00","$297,017.00"
IAH - DSM,52969613833,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/52969613833,https://www.airlines-manager.com/aircraft/show/110424759,14:00,19:14,320,"$331,947.00","$297,017.00"
IAH - DSM,52975649342,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/52975649342,https://www.airlines-manager.com/aircraft/show/110424760,18:30,23:44,320,"$331,947.00","$297,017.00"
IAH - DTW,52940290675,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/52940290675,https://www.airlines-manager.com/aircraft/show/90183184,0:30,6:44,310,"$394,212.00","$349,455.00"
IAH - DTW,52940290676,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/52940290676,https://www.airlines-manager.com/aircraft/show/90183180,2:30,8:44,310,"$394,212.00","$349,455.00"
IAH - DTW,52940290677,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/52940290677,https://www.airlines-manager.com/aircraft/show/90183181,6:00,12:14,310,"$394,212.00","$349,455.00"
IAH - DTW,52963027024,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/52963027024,https://www.airlines-manager.com/aircraft/show/90183182,13:00,19:14,310,"$394,212.00","$349,455.00"
IAH - DTW,52975649374,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/52975649374,https://www.airlines-manager.com/aircraft/show/90183183,18:45,0:59,310,"$394,212.00","$349,455.00"
IAH - DTW,52980970949,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/52980970949,https://www.airlines-manager.com/aircraft/show/90140936,20:45,2:59,136,"$187,462.00","$158,916.00"
IAH - ELP,52940291030,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/52940291030,https://www.airlines-manager.com/aircraft/show/104717245,3:30,8:14,310,"$299,579.00","$269,222.00"
IAH - ELP,52963026866,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/52963026866,https://www.airlines-manager.com/aircraft/show/104717246,11:00,15:44,310,"$299,579.00","$269,222.00"
IAH - ELP,52975649182,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/52975649182,https://www.airlines-manager.com/aircraft/show/104717247,16:45,21:29,310,"$299,579.00","$269,222.00"
IAH - ELP,52980970785,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/52980970785,https://www.airlines-manager.com/aircraft/show/104743902,19:00,23:44,112,"$142,780.00","$123,403.00"
IAH - ELP,52985325411,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/52985325411,https://www.airlines-manager.com/aircraft/show/104717244,22:00,2:44,310,"$299,579.00","$269,222.00"
IAH - EZE,52940291063,IAH 84A-2 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/52940291063,https://www.airlines-manager.com/aircraft/show/89439130,4:00,0:29,932,"$3,363,852.00","$3,066,590.00"
IAH - EZE,52940291064,IAH 84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/52940291064,https://www.airlines-manager.com/aircraft/show/89124075,5:30,1:59,932,"$3,363,852.00","$3,066,590.00"
IAH - FAR,52940290809,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/52940290809,https://www.airlines-manager.com/aircraft/show/110424754,1:30,8:14,320,"$417,332.00","$376,885.00"
IAH - FAR,52940290810,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/52940290810,https://www.airlines-manager.com/aircraft/show/110424755,4:15,10:59,320,"$417,332.00","$376,885.00"
IAH - FAR,52963026939,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/52963026939,https://www.airlines-manager.com/aircraft/show/110424756,12:00,18:44,320,"$417,332.00","$376,885.00"
IAH - FAR,52985325396,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/52985325396,https://www.airlines-manager.com/aircraft/show/110424757,22:00,4:44,320,"$417,332.00","$376,885.00"
IAH - FAT,52940291068,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/52940291068,https://www.airlines-manager.com/aircraft/show/110424760,4:00,11:44,320,"$497,031.00","$451,578.00"
IAH - FAT,52969613834,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/52969613834,https://www.airlines-manager.com/aircraft/show/110424761,14:00,21:44,320,"$497,031.00","$451,578.00"
IAH - FAT,52975649341,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/52975649341,https://www.airlines-manager.com/aircraft/show/110424758,18:15,1:59,320,"$497,031.00","$451,578.00"
IAH - FAT,52985325538,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/52985325538,https://www.airlines-manager.com/aircraft/show/110424759,23:30,7:14,319,"$494,179.00","$448,786.00"
IAH - FCA,52940290859,IAH-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/52940290859,https://www.airlines-manager.com/aircraft/show/117273391,1:45,9:59,320,"$521,224.00","$474,034.00"
IAH - FCA,52963026820,IAH-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/52963026820,https://www.airlines-manager.com/aircraft/show/117273390,11:00,19:14,320,"$521,224.00","$474,034.00"
IAH - FCA,52969614015,IAH-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/52969614015,https://www.airlines-manager.com/aircraft/show/117273392,16:15,0:29,320,"$521,224.00","$474,034.00"
IAH - FCA,52975649327,IAH-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/52975649327,https://www.airlines-manager.com/aircraft/show/117273389,18:15,2:29,306,"$507,224.00","$460,641.00"
IAH - FLL,52940290655,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/52940290655,https://www.airlines-manager.com/aircraft/show/93094695,0:30,6:14,310,"$366,934.00","$329,706.00"
IAH - FLL,52940290656,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/52940290656,https://www.airlines-manager.com/aircraft/show/93094696,3:45,9:29,310,"$366,934.00","$329,706.00"
IAH - FLL,52955473049,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/52955473049,https://www.airlines-manager.com/aircraft/show/93094697,10:00,15:44,310,"$366,934.00","$329,706.00"
IAH - FLL,52969613965,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/52969613965,https://www.airlines-manager.com/aircraft/show/93094698,15:45,21:29,310,"$366,934.00","$329,706.00"
IAH - FLL,52975649289,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/52975649289,https://www.airlines-manager.com/aircraft/show/93100455,17:45,23:29,112,"$174,080.00","$150,060.00"
IAH - FLL,52985325466,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/52985325466,https://www.airlines-manager.com/aircraft/show/93094699,22:30,4:14,310,"$366,934.00","$329,706.00"
IAH - FSD,52940291109,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/52940291109,https://www.airlines-manager.com/aircraft/show/110424757,4:45,10:29,320,"$361,805.00","$324,970.00"
IAH - FSD,52955472919,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/52955472919,https://www.airlines-manager.com/aircraft/show/110424754,8:15,13:59,320,"$361,805.00","$324,970.00"
IAH - FSD,52963026777,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/52963026777,https://www.airlines-manager.com/aircraft/show/110424755,11:00,16:44,320,"$361,805.00","$324,970.00"
IAH - FSD,52975649376,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/52975649376,https://www.airlines-manager.com/aircraft/show/110424756,18:45,0:29,280,"$334,366.00","$298,546.00"
IAH - GDL,52940291113,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/52940291113,https://www.airlines-manager.com/aircraft/show/114266977,4:45,9:59,400,"$438,003.00","$395,490.00"
IAH - GDL,52963026745,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/52963026745,https://www.airlines-manager.com/aircraft/show/114266980,10:45,15:59,400,"$438,003.00","$395,490.00"
IAH - GDL,52963026748,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/52963026748,https://www.airlines-manager.com/aircraft/show/114266979,12:00,17:14,400,"$438,003.00","$395,490.00"
IAH - GDL,52980970868,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/52980970868,https://www.airlines-manager.com/aircraft/show/114266978,20:00,1:14,354,"$394,204.00","$352,915.00"
IAH - GIG,52940290515,IAH 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/52940290515,https://www.airlines-manager.com/aircraft/show/88905140,0:00,20:14,932,"$3,374,734.00","$3,072,089.00"
IAH - GIG,52940290516,IAH 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/52940290516,https://www.airlines-manager.com/aircraft/show/89124074,2:00,22:14,932,"$3,374,734.00","$3,072,089.00"
IAH - GRR,52940290792,IAH-GRR-MSN 3,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/52940290792,https://www.airlines-manager.com/aircraft/show/117273346,1:15,7:29,310,"$389,416.00","$354,658.00"
IAH - GRR,52955472797,IAH-GRR-MSN 2,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/52955472797,https://www.airlines-manager.com/aircraft/show/117273347,7:15,13:29,310,"$389,416.00","$354,658.00"
IAH - GRR,52969613801,IAH-GRR-MSN 1,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/52969613801,https://www.airlines-manager.com/aircraft/show/117273348,14:00,20:14,310,"$389,416.00","$354,658.00"
IAH - GRR,52969613802,IAH-GRR-MSN 4,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/52969613802,https://www.airlines-manager.com/aircraft/show/117273345,16:00,22:14,310,"$389,416.00","$354,658.00"
IAH - GRU,52940290733,IAH 56A-7 B,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/52940290733,https://www.airlines-manager.com/aircraft/show/106676238,1:00,20:29,648,"$2,475,631.00","$2,305,989.00"
IAH - GRU,52963026757,IAH 56A-2 B,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/52963026757,https://www.airlines-manager.com/aircraft/show/106676233,11:00,6:29,648,"$2,475,631.00","$2,305,989.00"
IAH - GRU,52975649210,IAH 56A-4 B,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/52975649210,https://www.airlines-manager.com/aircraft/show/106676235,17:00,12:29,648,"$2,475,631.00","$2,305,989.00"
IAH - IAD,52940291019,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/52940291019,https://www.airlines-manager.com/aircraft/show/105400635,3:30,10:14,112,"$198,858.00","$170,604.00"
IAH - IAD,52940291020,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/52940291020,https://www.airlines-manager.com/aircraft/show/98578923,6:45,13:29,320,"$421,790.00","$372,206.00"
IAH - IAD,52955473004,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/52955473004,https://www.airlines-manager.com/aircraft/show/98578920,9:45,16:29,320,"$421,790.00","$372,206.00"
IAH - IAD,52963027013,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/52963027013,https://www.airlines-manager.com/aircraft/show/98578924,13:00,19:44,320,"$421,790.00","$372,206.00"
IAH - IAD,52975649298,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/52975649298,https://www.airlines-manager.com/aircraft/show/98578921,18:00,0:44,320,"$421,790.00","$372,206.00"
IAH - IAD,52980970998,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/52980970998,https://www.airlines-manager.com/aircraft/show/98578922,21:30,4:14,320,"$421,790.00","$372,206.00"
IAH - ICT,52955473005,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/52955473005,https://www.airlines-manager.com/aircraft/show/110424761,9:45,13:59,320,"$249,907.00","$218,323.00"
IAH - ICT,52969613832,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/52969613832,https://www.airlines-manager.com/aircraft/show/110424758,14:00,18:14,320,"$249,907.00","$218,323.00"
IAH - ICT,52980970808,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/52980970808,https://www.airlines-manager.com/aircraft/show/110424759,19:15,23:29,320,"$249,907.00","$218,323.00"
IAH - ICT,52985325558,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/52985325558,https://www.airlines-manager.com/aircraft/show/110424760,23:45,3:59,314,"$247,086.00","$215,590.00"
IAH - IND,52940290517,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/52940290517,https://www.airlines-manager.com/aircraft/show/100684074,0:00,5:29,310,"$343,057.00","$309,191.00"
IAH - IND,52940290518,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/52940290518,https://www.airlines-manager.com/aircraft/show/110582845,4:45,10:14,198,"$260,117.00","$232,988.00"
IAH - IND,52940290519,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/52940290519,https://www.airlines-manager.com/aircraft/show/100684071,6:00,11:29,310,"$343,057.00","$309,191.00"
IAH - IND,52963026891,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/52963026891,https://www.airlines-manager.com/aircraft/show/100684072,11:30,16:59,310,"$343,057.00","$309,191.00"
IAH - IND,52975649280,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/52975649280,https://www.airlines-manager.com/aircraft/show/100684073,17:45,23:14,310,"$343,057.00","$309,191.00"
IAH - JAN,52940290652,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/52940290652,https://www.airlines-manager.com/aircraft/show/110424756,0:30,3:59,320,"$176,872.00","$149,421.00"
IAH - JAN,52955473093,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/52955473093,https://www.airlines-manager.com/aircraft/show/110424757,10:30,13:59,320,"$176,872.00","$149,421.00"
IAH - JAN,52969613838,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/52969613838,https://www.airlines-manager.com/aircraft/show/110424754,14:00,17:29,320,"$176,872.00","$149,421.00"
IAH - JAN,52975649187,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/52975649187,https://www.airlines-manager.com/aircraft/show/110424755,16:45,20:14,305,"$171,853.00","$144,543.00"
IAH - JAX,52940290984,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/52940290984,https://www.airlines-manager.com/aircraft/show/104717247,3:00,8:14,310,"$336,801.00","$304,573.00"
IAH - JAX,52955472837,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/52955472837,https://www.airlines-manager.com/aircraft/show/104743902,8:00,13:14,112,"$159,741.00","$138,981.00"
IAH - JAX,52963026764,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/52963026764,https://www.airlines-manager.com/aircraft/show/104717244,11:00,16:14,310,"$336,801.00","$304,573.00"
IAH - JAX,52969800877,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/52969800877,https://www.airlines-manager.com/aircraft/show/104717245,16:30,21:44,310,"$336,801.00","$304,573.00"
IAH - JAX,52980970988,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/52980970988,https://www.airlines-manager.com/aircraft/show/104717246,21:15,2:29,310,"$336,801.00","$304,573.00"
IAH - JFK,52940290883,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/52940290883,https://www.airlines-manager.com/aircraft/show/89233038,2:00,9:29,400,"$620,082.00","$546,773.00"
IAH - JFK,52963026817,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/52963026817,https://www.airlines-manager.com/aircraft/show/88400798,11:00,18:29,400,"$620,082.00","$546,773.00"
IAH - JFK,52975649338,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/52975649338,https://www.airlines-manager.com/aircraft/show/88400800,18:15,1:44,400,"$620,082.00","$546,773.00"
IAH - JFK,52980970802,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/52980970802,https://www.airlines-manager.com/aircraft/show/88400799,19:15,2:44,400,"$620,082.00","$546,773.00"
IAH - JFK,52980970803,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/52980970803,https://www.airlines-manager.com/aircraft/show/88400801,21:15,4:44,400,"$620,082.00","$546,773.00"
IAH - LAS,52940291053,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/52940291053,https://www.airlines-manager.com/aircraft/show/96256511,4:00,10:44,320,"$428,360.00","$366,879.00"
IAH - LAS,52940291054,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/52940291054,https://www.airlines-manager.com/aircraft/show/96250652,5:00,11:44,320,"$428,360.00","$366,879.00"
IAH - LAS,52940291055,IAH-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/52940291055,https://www.airlines-manager.com/aircraft/show/96990010,5:15,11:59,112,"$201,594.00","$167,300.00"
IAH - LAS,52963026811,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/52963026811,https://www.airlines-manager.com/aircraft/show/96177955,11:00,17:44,320,"$428,360.00","$366,879.00"
IAH - LAS,52969613870,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/52969613870,https://www.airlines-manager.com/aircraft/show/95894466,14:45,21:29,320,"$428,360.00","$366,879.00"
IAH - LAS,52975649270,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/52975649270,https://www.airlines-manager.com/aircraft/show/82323704,17:30,0:14,112,"$201,594.00","$167,300.00"
IAH - LAS,52980970951,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/52980970951,https://www.airlines-manager.com/aircraft/show/96183549,20:45,3:29,319,"$425,890.00","$364,458.00"
IAH - LAX,52940290951,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/52940290951,https://www.airlines-manager.com/aircraft/show/88400799,2:45,9:59,400,"$607,961.00","$535,788.00"
IAH - LAX,52940290952,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/52940290952,https://www.airlines-manager.com/aircraft/show/88400798,3:45,10:59,400,"$607,961.00","$535,788.00"
IAH - LAX,52940290953,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/52940290953,https://www.airlines-manager.com/aircraft/show/88400801,4:45,11:59,400,"$607,961.00","$535,788.00"
IAH - LAX,52955473090,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/52955473090,https://www.airlines-manager.com/aircraft/show/89233038,10:30,17:44,400,"$607,961.00","$535,788.00"
IAH - LAX,52963026876,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/52963026876,https://www.airlines-manager.com/aircraft/show/88400800,11:00,18:14,400,"$607,961.00","$535,788.00"
IAH - LEX,52940291104,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/52940291104,https://www.airlines-manager.com/aircraft/show/114373410,4:30,9:44,310,"$333,473.00","$303,495.00"
IAH - LEX,52955472987,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/52955472987,https://www.airlines-manager.com/aircraft/show/113994196,9:15,14:29,310,"$333,473.00","$303,495.00"
IAH - LEX,52969613898,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/52969613898,https://www.airlines-manager.com/aircraft/show/86385103,15:00,20:14,310,"$333,473.00","$303,495.00"
IAH - LEX,52980970804,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/52980970804,https://www.airlines-manager.com/aircraft/show/82543907,19:15,0:29,112,"$158,457.00","$139,024.00"
IAH - LEX,52985325436,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/52985325436,https://www.airlines-manager.com/aircraft/show/114373409,22:15,3:29,263,"$303,665.00","$274,753.00"
IAH - LIM,52969613865,IAH 84A-1 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/52969613865,https://www.airlines-manager.com/aircraft/show/89439131,14:30,3:59,932,"$2,248,750.00","$2,048,905.00"
IAH - LIM,52985325560,IAH 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/52985325560,https://www.airlines-manager.com/aircraft/show/89124074,23:45,13:14,932,"$2,248,750.00","$2,048,905.00"
IAH - LIT,52940291042,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/52940291042,https://www.airlines-manager.com/aircraft/show/96692491,3:45,7:14,310,"$188,267.00","$164,261.00"
IAH - LIT,52963026797,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/52963026797,https://www.airlines-manager.com/aircraft/show/96692343,11:00,14:29,310,"$188,267.00","$164,261.00"
IAH - LIT,52980970827,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/52980970827,https://www.airlines-manager.com/aircraft/show/96691558,19:30,22:59,310,"$188,267.00","$164,261.00"
IAH - LIT,52980970828,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/52980970828,https://www.airlines-manager.com/aircraft/show/106014350,20:00,23:29,198,"$142,083.00","$122,862.00"
IAH - LIT,52985325543,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/52985325543,https://www.airlines-manager.com/aircraft/show/96694086,23:30,2:59,271,"$174,304.00","$150,698.00"
IAH - MCI,52940290760,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/52940290760,https://www.airlines-manager.com/aircraft/show/103882358,1:00,5:44,310,"$298,335.00","$267,177.00"
IAH - MCI,52955472991,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/52955472991,https://www.airlines-manager.com/aircraft/show/103882357,9:15,13:59,310,"$298,335.00","$267,177.00"
IAH - MCI,52963027005,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/52963027005,https://www.airlines-manager.com/aircraft/show/103882356,13:00,17:44,310,"$298,335.00","$267,177.00"
IAH - MCI,52975649301,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/52975649301,https://www.airlines-manager.com/aircraft/show/105099861,18:00,22:44,112,"$141,292.00","$121,472.00"
IAH - MCI,52980970959,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/52980970959,https://www.airlines-manager.com/aircraft/show/103882355,21:00,1:44,310,"$298,335.00","$267,177.00"
IAH - MCI,52980970960,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/52980970960,https://www.airlines-manager.com/aircraft/show/101412921,21:15,1:59,0,"$90,699.00","$60,600.00"
IAH - MCO,52940290746,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/52940290746,https://www.airlines-manager.com/aircraft/show/90183183,1:00,6:29,310,"$345,311.00","$302,917.00"
IAH - MCO,52940290747,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/52940290747,https://www.airlines-manager.com/aircraft/show/90140936,3:00,8:29,136,"$164,422.00","$137,644.00"
IAH - MCO,52940290748,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/52940290748,https://www.airlines-manager.com/aircraft/show/90183184,6:45,12:14,310,"$345,311.00","$302,917.00"
IAH - MCO,52955472966,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/52955472966,https://www.airlines-manager.com/aircraft/show/90183180,8:45,14:14,310,"$345,311.00","$302,917.00"
IAH - MCO,52963027023,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/52963027023,https://www.airlines-manager.com/aircraft/show/90183181,13:00,18:29,310,"$345,311.00","$302,917.00"
IAH - MCO,52980970801,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/52980970801,https://www.airlines-manager.com/aircraft/show/90183182,19:15,0:44,310,"$345,311.00","$302,917.00"
IAH - MEM,52940290897,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/52940290897,https://www.airlines-manager.com/aircraft/show/101412921,2:00,5:59,0,"$71,916.00","$43,973.00"
IAH - MEM,52940290898,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/52940290898,https://www.airlines-manager.com/aircraft/show/99093332,5:45,9:44,320,"$221,708.00","$188,346.00"
IAH - MEM,52955473001,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/52955473001,https://www.airlines-manager.com/aircraft/show/99093333,9:30,13:29,320,"$221,708.00","$188,346.00"
IAH - MEM,52969613814,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/52969613814,https://www.airlines-manager.com/aircraft/show/99093334,14:00,17:59,320,"$221,708.00","$188,346.00"
IAH - MEM,52980970833,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/52980970833,https://www.airlines-manager.com/aircraft/show/99093335,19:30,23:29,320,"$221,708.00","$188,346.00"
IAH - MEM,52980970834,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/52980970834,https://www.airlines-manager.com/aircraft/show/106499070,21:30,1:29,198,"$168,307.00","$145,317.00"
IAH - MEX,52940290861,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/52940290861,https://www.airlines-manager.com/aircraft/show/97026605,1:45,6:44,136,"$153,426.00","$128,525.00"
IAH - MEX,52940290862,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/52940290862,https://www.airlines-manager.com/aircraft/show/97076945,5:30,10:29,400,"$414,069.00","$365,726.00"
IAH - MEX,52955472944,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/52955472944,https://www.airlines-manager.com/aircraft/show/97076942,8:30,13:29,400,"$414,069.00","$365,726.00"
IAH - MEX,52963027022,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/52963027022,https://www.airlines-manager.com/aircraft/show/97076946,13:00,17:59,400,"$414,069.00","$365,726.00"
IAH - MEX,52969613994,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/52969613994,https://www.airlines-manager.com/aircraft/show/97076943,16:00,20:59,391,"$405,804.00","$357,685.00"
IAH - MEX,52985325467,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/52985325467,https://www.airlines-manager.com/aircraft/show/97076944,22:30,3:29,284,"$307,533.00","$262,071.00"
IAH - MHT,52940290825,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/52940290825,https://www.airlines-manager.com/aircraft/show/114266971,1:30,9:44,320,"$523,377.00","$475,521.00"
IAH - MHT,52940290826,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/52940290826,https://www.airlines-manager.com/aircraft/show/114266970,6:45,14:59,320,"$523,377.00","$475,521.00"
IAH - MHT,52963026909,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/52963026909,https://www.airlines-manager.com/aircraft/show/114266972,12:00,20:14,320,"$523,377.00","$475,521.00"
IAH - MHT,52969613986,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/52969613986,https://www.airlines-manager.com/aircraft/show/114266976,16:00,0:14,320,"$523,377.00","$475,521.00"
IAH - MHT,52975649291,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/52975649291,https://www.airlines-manager.com/aircraft/show/92800067,17:45,1:59,112,"$246,723.00","$218,156.00"
IAH - MIA,52940290691,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/52940290691,https://www.airlines-manager.com/aircraft/show/90183182,0:45,6:29,310,"$370,108.00","$324,351.00"
IAH - MIA,52940290692,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/52940290692,https://www.airlines-manager.com/aircraft/show/90183183,6:30,12:14,310,"$370,108.00","$324,351.00"
IAH - MIA,52955472935,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/52955472935,https://www.airlines-manager.com/aircraft/show/90140936,8:30,14:14,136,"$176,253.00","$147,285.00"
IAH - MIA,52963026990,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/52963026990,https://www.airlines-manager.com/aircraft/show/90183184,13:00,18:44,310,"$370,108.00","$324,351.00"
IAH - MIA,52969613943,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/52969613943,https://www.airlines-manager.com/aircraft/show/90183180,15:00,20:44,310,"$370,108.00","$324,351.00"
IAH - MIA,52975649351,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/52975649351,https://www.airlines-manager.com/aircraft/show/90183181,18:30,0:14,310,"$370,108.00","$324,351.00"
IAH - MKE,52940290761,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/52940290761,https://www.airlines-manager.com/aircraft/show/104258212,1:00,6:59,310,"$379,057.00","$343,923.00"
IAH - MKE,52955472891,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/52955472891,https://www.airlines-manager.com/aircraft/show/104258211,8:00,13:59,310,"$379,057.00","$343,923.00"
IAH - MKE,52955472892,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/52955472892,https://www.airlines-manager.com/aircraft/show/103534664,9:00,14:59,112,"$179,009.00","$156,209.00"
IAH - MKE,52969613762,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/52969613762,https://www.airlines-manager.com/aircraft/show/104258214,14:00,19:59,310,"$379,057.00","$343,923.00"
IAH - MKE,52980970816,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/52980970816,https://www.airlines-manager.com/aircraft/show/104258213,19:15,1:14,310,"$379,057.00","$343,923.00"
IAH - MSN,52955472808,IAH-GRR-MSN 3,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/52955472808,https://www.airlines-manager.com/aircraft/show/117273346,7:30,13:29,310,"$372,062.00","$338,977.00"
IAH - MSN,52969613800,IAH-GRR-MSN 2,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/52969613800,https://www.airlines-manager.com/aircraft/show/117273347,14:00,19:59,310,"$372,062.00","$338,977.00"
IAH - MSN,52980970915,IAH-GRR-MSN 1,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/52980970915,https://www.airlines-manager.com/aircraft/show/117273348,20:15,2:14,310,"$372,062.00","$338,977.00"
IAH - MSN,52985325433,IAH-GRR-MSN 4,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/52985325433,https://www.airlines-manager.com/aircraft/show/117273345,22:15,4:14,310,"$372,062.00","$338,977.00"
IAH - MSO,52940291061,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/52940291061,https://www.airlines-manager.com/aircraft/show/110424756,4:00,11:59,320,"$507,087.00","$460,654.00"
IAH - MSO,52969613831,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/52969613831,https://www.airlines-manager.com/aircraft/show/110424757,14:00,21:59,320,"$507,087.00","$460,654.00"
IAH - MSO,52975649272,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/52975649272,https://www.airlines-manager.com/aircraft/show/110424754,17:30,1:29,320,"$507,087.00","$460,654.00"
IAH - MSO,52980970901,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/52980970901,https://www.airlines-manager.com/aircraft/show/110424755,20:15,4:14,320,"$507,087.00","$460,654.00"
IAH - MSP,52940291059,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/52940291059,https://www.airlines-manager.com/aircraft/show/95894466,4:00,9:59,320,"$383,163.00","$333,867.00"
IAH - MSP,52940291060,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/52940291060,https://www.airlines-manager.com/aircraft/show/82323704,5:00,11:14,112,"$181,981.00","$154,316.00"
IAH - MSP,52955473047,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/52955473047,https://www.airlines-manager.com/aircraft/show/96183549,10:00,15:59,320,"$383,163.00","$333,867.00"
IAH - MSP,52975649283,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/52975649283,https://www.airlines-manager.com/aircraft/show/96250652,17:45,23:44,320,"$383,163.00","$333,867.00"
IAH - MSP,52980971001,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/52980971001,https://www.airlines-manager.com/aircraft/show/96256511,21:30,3:29,320,"$383,163.00","$333,867.00"
IAH - MSP,52985325457,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/52985325457,https://www.airlines-manager.com/aircraft/show/96177955,22:30,4:29,320,"$383,163.00","$333,867.00"
IAH - MSY,52940291039,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/52940291039,https://www.airlines-manager.com/aircraft/show/106007216,3:45,6:59,338,"$170,345.00","$145,698.00"
IAH - MSY,52940291040,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/52940291040,https://www.airlines-manager.com/aircraft/show/106007217,4:45,7:59,338,"$170,345.00","$145,698.00"
IAH - MSY,52963026854,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/52963026854,https://www.airlines-manager.com/aircraft/show/106007215,11:00,14:14,338,"$170,345.00","$145,698.00"
IAH - MSY,52975649288,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/52975649288,https://www.airlines-manager.com/aircraft/show/106007214,17:45,20:59,338,"$170,345.00","$145,698.00"
IAH - MSY,52980970924,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/52980970924,https://www.airlines-manager.com/aircraft/show/106007213,20:30,23:44,263,"$147,893.00","$123,766.00"
IAH - MTY,52940291025,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/52940291025,https://www.airlines-manager.com/aircraft/show/114266974,3:30,7:14,320,"$202,476.00","$171,959.00"
IAH - MTY,52955472986,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/52955472986,https://www.airlines-manager.com/aircraft/show/105099862,9:15,12:59,112,"$92,533.00","$76,078.00"
IAH - MTY,52969613815,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/52969613815,https://www.airlines-manager.com/aircraft/show/114266975,14:00,17:44,320,"$202,476.00","$171,959.00"
IAH - MTY,52975649267,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/52975649267,https://www.airlines-manager.com/aircraft/show/113250059,17:30,21:14,320,"$202,476.00","$171,959.00"
IAH - MTY,52985325540,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/52985325540,https://www.airlines-manager.com/aircraft/show/113114108,23:30,3:14,320,"$202,476.00","$171,959.00"
IAH - OAK,52940290793,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/52940290793,https://www.airlines-manager.com/aircraft/show/98578920,1:15,9:44,320,"$528,613.00","$477,790.00"
IAH - OAK,52940290794,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/52940290794,https://www.airlines-manager.com/aircraft/show/98578924,3:00,11:29,320,"$528,613.00","$477,790.00"
IAH - OAK,52955472898,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/52955472898,https://www.airlines-manager.com/aircraft/show/98578921,8:00,16:29,320,"$528,613.00","$477,790.00"
IAH - OAK,52963026988,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/52963026988,https://www.airlines-manager.com/aircraft/show/98578922,13:00,21:29,320,"$528,613.00","$477,790.00"
IAH - OAK,52980970790,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/52980970790,https://www.airlines-manager.com/aircraft/show/105400635,19:00,3:29,112,"$249,289.00","$219,142.00"
IAH - OAK,52985325424,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/52985325424,https://www.airlines-manager.com/aircraft/show/98578923,22:15,6:44,320,"$528,613.00","$477,790.00"
IAH - OKC,52940291137,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/52940291137,https://www.airlines-manager.com/aircraft/show/107467134,5:30,9:14,310,"$196,458.00","$171,197.00"
IAH - OKC,52955473012,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/52955473012,https://www.airlines-manager.com/aircraft/show/107467211,10:00,13:44,112,"$90,701.00","$74,854.00"
IAH - OKC,52963026918,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/52963026918,https://www.airlines-manager.com/aircraft/show/107467131,12:00,15:44,310,"$196,458.00","$171,197.00"
IAH - OKC,52975649287,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/52975649287,https://www.airlines-manager.com/aircraft/show/107467132,17:45,21:29,310,"$196,458.00","$171,197.00"
IAH - OKC,52985325518,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/52985325518,https://www.airlines-manager.com/aircraft/show/107467133,23:00,2:44,310,"$196,458.00","$171,197.00"
IAH - OMA,52940290969,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/52940290969,https://www.airlines-manager.com/aircraft/show/104258211,2:45,7:59,310,"$328,749.00","$297,606.00"
IAH - OMA,52940290970,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/52940290970,https://www.airlines-manager.com/aircraft/show/103534664,3:45,8:59,112,"$156,035.00","$135,984.00"
IAH - OMA,52955472965,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/52955472965,https://www.airlines-manager.com/aircraft/show/104258214,8:45,13:59,310,"$328,749.00","$297,606.00"
IAH - OMA,52969613761,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/52969613761,https://www.airlines-manager.com/aircraft/show/104258213,14:00,19:14,310,"$328,749.00","$297,606.00"
IAH - OMA,52980970858,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/52980970858,https://www.airlines-manager.com/aircraft/show/104258212,19:45,0:59,310,"$328,749.00","$297,606.00"
IAH - ONT,52940290977,IAH-ANC-ONT 1,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/52940290977,https://www.airlines-manager.com/aircraft/show/108258010,2:45,9:59,310,"$463,623.00","$422,457.00"
IAH - ONT,52940290978,IAH-ANC-ONT 2,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/52940290978,https://www.airlines-manager.com/aircraft/show/108258011,4:45,11:59,310,"$463,623.00","$422,457.00"
IAH - ONT,52963026913,IAH-ANC-ONT 3,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/52963026913,https://www.airlines-manager.com/aircraft/show/108258012,12:00,19:14,310,"$463,623.00","$422,457.00"
IAH - ONT,52969613795,IAH-ANC-ONT 4,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/52969613795,https://www.airlines-manager.com/aircraft/show/108089220,14:00,21:14,310,"$463,623.00","$422,457.00"
IAH - ONT,52969613796,IAH-ANC-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/52969613796,https://www.airlines-manager.com/aircraft/show/108286957,16:00,23:14,197,"$349,002.00","$316,053.00"
IAH - ORD,52940290615,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/52940290615,https://www.airlines-manager.com/aircraft/show/90183181,0:15,5:59,310,"$363,019.00","$308,053.00"
IAH - ORD,52940290616,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/52940290616,https://www.airlines-manager.com/aircraft/show/90183182,6:30,12:14,310,"$363,019.00","$308,053.00"
IAH - ORD,52955473057,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/52955473057,https://www.airlines-manager.com/aircraft/show/101412921,10:00,15:44,0,"$114,242.00","$60,798.00"
IAH - ORD,52963027025,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/52963027025,https://www.airlines-manager.com/aircraft/show/90183183,13:00,18:44,310,"$363,019.00","$308,053.00"
IAH - ORD,52969613942,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/52969613942,https://www.airlines-manager.com/aircraft/show/90140936,15:00,20:44,136,"$172,523.00","$138,087.00"
IAH - ORD,52975649375,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/52975649375,https://www.airlines-manager.com/aircraft/show/90183184,18:45,0:29,310,"$363,019.00","$308,053.00"
IAH - ORD,52980970950,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/52980970950,https://www.airlines-manager.com/aircraft/show/90183180,20:45,2:29,310,"$363,019.00","$308,053.00"
IAH - ORF,52940290528,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/52940290528,https://www.airlines-manager.com/aircraft/show/110582843,0:00,6:44,198,"$319,486.00","$289,833.00"
IAH - ORF,52940290529,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/52940290529,https://www.airlines-manager.com/aircraft/show/107467130,4:15,10:59,310,"$423,229.00","$386,227.00"
IAH - ORF,52955472913,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/52955472913,https://www.airlines-manager.com/aircraft/show/107467127,8:15,14:59,310,"$423,229.00","$386,227.00"
IAH - ORF,52963026980,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/52963026980,https://www.airlines-manager.com/aircraft/show/107467128,13:00,19:44,310,"$423,229.00","$386,227.00"
IAH - ORF,52980970879,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/52980970879,https://www.airlines-manager.com/aircraft/show/107467129,20:00,2:44,310,"$423,229.00","$386,227.00"
IAH - PBI,52940290939,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/52940290939,https://www.airlines-manager.com/aircraft/show/104717246,2:30,8:14,310,"$369,228.00","$334,492.00"
IAH - PBI,52963026867,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/52963026867,https://www.airlines-manager.com/aircraft/show/104717247,11:00,16:44,310,"$369,228.00","$334,492.00"
IAH - PBI,52963026868,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/52963026868,https://www.airlines-manager.com/aircraft/show/104743902,13:15,18:59,112,"$174,708.00","$152,202.00"
IAH - PBI,52969614016,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/52969614016,https://www.airlines-manager.com/aircraft/show/104717244,16:15,21:59,310,"$369,228.00","$334,492.00"
IAH - PBI,52985325380,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/52985325380,https://www.airlines-manager.com/aircraft/show/104717245,21:45,3:29,310,"$369,228.00","$334,492.00"
IAH - PDX,52940290964,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/52940290964,https://www.airlines-manager.com/aircraft/show/105562975,2:45,11:44,338,"$619,638.00","$571,536.00"
IAH - PDX,52940290965,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/52940290965,https://www.airlines-manager.com/aircraft/show/105562972,4:00,12:59,338,"$619,638.00","$571,536.00"
IAH - PDX,52940290966,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/52940290966,https://www.airlines-manager.com/aircraft/show/105562974,5:00,13:59,338,"$619,638.00","$571,536.00"
IAH - PDX,52963026927,IAH-SEA-DEN 6,ERJ-175,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/52963026927,https://www.airlines-manager.com/aircraft/show/105601215,12:00,21:14,112,"$269,853.00","$236,442.00"
IAH - PDX,52969613769,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/52969613769,https://www.airlines-manager.com/aircraft/show/105562973,14:00,22:59,338,"$619,638.00","$571,536.00"
IAH - PDX,52975649353,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/52975649353,https://www.airlines-manager.com/aircraft/show/105562971,18:30,3:29,337,"$617,960.00","$569,910.00"
IAH - PHL,52963026849,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/52963026849,https://www.airlines-manager.com/aircraft/show/106007216,11:00,18:14,338,"$501,211.00","$456,029.00"
IAH - PHL,52969613856,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/52969613856,https://www.airlines-manager.com/aircraft/show/106007215,14:15,21:29,338,"$501,211.00","$456,029.00"
IAH - PHL,52969613857,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/52969613857,https://www.airlines-manager.com/aircraft/show/107543798,16:00,23:14,0,"$122,452.00","$89,021.00"
IAH - PHL,52980970954,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/52980970954,https://www.airlines-manager.com/aircraft/show/106007214,21:00,4:14,338,"$501,211.00","$456,029.00"
IAH - PHL,52980970955,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/52980970955,https://www.airlines-manager.com/aircraft/show/106007217,21:30,4:44,338,"$501,211.00","$456,029.00"
IAH - PHL,52985325549,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/52985325549,https://www.airlines-manager.com/aircraft/show/106007213,23:45,6:59,338,"$501,211.00","$456,029.00"
IAH - PHX,52940291057,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/52940291057,https://www.airlines-manager.com/aircraft/show/96183549,4:00,9:59,320,"$379,048.00","$327,014.00"
IAH - PHX,52940291058,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/52940291058,https://www.airlines-manager.com/aircraft/show/96177955,5:00,10:59,320,"$379,048.00","$327,014.00"
IAH - PHX,52963026887,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/52963026887,https://www.airlines-manager.com/aircraft/show/82323704,11:30,17:29,112,"$179,331.00","$150,380.00"
IAH - PHX,52963026888,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/52963026888,https://www.airlines-manager.com/aircraft/show/96250652,11:45,17:44,320,"$379,048.00","$327,014.00"
IAH - PHX,52969613959,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/52969613959,https://www.airlines-manager.com/aircraft/show/96256511,15:30,21:29,320,"$379,048.00","$327,014.00"
IAH - PHX,52980971000,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/52980971000,https://www.airlines-manager.com/aircraft/show/95894466,21:30,3:29,320,"$379,048.00","$327,014.00"
IAH - PIT,52940291119,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/52940291119,https://www.airlines-manager.com/aircraft/show/100684073,5:00,11:29,310,"$405,238.00","$366,874.00"
IAH - PIT,52963026884,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/52963026884,https://www.airlines-manager.com/aircraft/show/100684074,11:15,17:44,310,"$405,238.00","$366,874.00"
IAH - PIT,52969614003,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/52969614003,https://www.airlines-manager.com/aircraft/show/110582845,16:00,22:29,198,"$306,119.00","$275,380.00"
IAH - PIT,52975649247,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/52975649247,https://www.airlines-manager.com/aircraft/show/100684071,17:15,23:44,310,"$405,238.00","$366,874.00"
IAH - PIT,52985325497,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/52985325497,https://www.airlines-manager.com/aircraft/show/100684072,22:45,5:14,310,"$405,238.00","$366,874.00"
IAH - PSP,52940290812,IAH-YEG-BUR 2,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/52940290812,https://www.airlines-manager.com/aircraft/show/117273343,1:30,8:29,310,"$450,598.00","$412,544.00"
IAH - PSP,52940290813,IAH-YEG-BUR 1,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/52940290813,https://www.airlines-manager.com/aircraft/show/117273344,3:45,10:44,310,"$450,598.00","$412,544.00"
IAH - PSP,52963026818,IAH-YEG-BUR 3,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/52963026818,https://www.airlines-manager.com/aircraft/show/117273342,11:00,17:59,310,"$450,598.00","$412,544.00"
IAH - PSP,52975649347,IAH-YEG-BUR 5,A321neo,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/52975649347,https://www.airlines-manager.com/aircraft/show/117273340,18:30,1:29,338,"$488,325.00","$451,854.00"
IAH - PVD,52940290980,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/52940290980,https://www.airlines-manager.com/aircraft/show/107467129,2:45,10:59,310,"$516,173.00","$474,663.00"
IAH - PVD,52940290981,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/52940290981,https://www.airlines-manager.com/aircraft/show/110582843,6:45,14:59,198,"$389,014.00","$355,739.00"
IAH - PVD,52963026978,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/52963026978,https://www.airlines-manager.com/aircraft/show/107467130,13:00,21:14,310,"$516,173.00","$474,663.00"
IAH - PVD,52975649206,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/52975649206,https://www.airlines-manager.com/aircraft/show/107467127,17:00,1:14,310,"$516,173.00","$474,663.00"
IAH - PVD,52980970854,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/52980970854,https://www.airlines-manager.com/aircraft/show/107467128,19:45,3:59,310,"$516,173.00","$474,663.00"
IAH - PVR,52940290998,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/52940290998,https://www.airlines-manager.com/aircraft/show/105099862,3:00,8:29,112,"$166,482.00","$145,068.00"
IAH - PVR,52955472948,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/52955472948,https://www.airlines-manager.com/aircraft/show/114266975,8:30,13:59,320,"$355,615.00","$317,981.00"
IAH - PVR,52963026956,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/52963026956,https://www.airlines-manager.com/aircraft/show/113250059,12:00,17:29,320,"$355,615.00","$317,981.00"
IAH - PVR,52975649325,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/52975649325,https://www.airlines-manager.com/aircraft/show/113114108,18:00,23:29,320,"$355,615.00","$317,981.00"
IAH - PVR,52985325393,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/52985325393,https://www.airlines-manager.com/aircraft/show/114266974,22:00,3:29,320,"$355,615.00","$317,981.00"
IAH - PWM,52955472829,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/52955472829,https://www.airlines-manager.com/aircraft/show/106014350,7:45,16:14,198,"$406,606.00","$372,422.00"
IAH - PWM,52963026847,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/52963026847,https://www.airlines-manager.com/aircraft/show/96691558,11:00,19:29,310,"$539,970.00","$497,329.00"
IAH - PWM,52969613916,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/52969613916,https://www.airlines-manager.com/aircraft/show/96694086,15:00,23:29,310,"$539,970.00","$497,329.00"
IAH - PWM,52980970796,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/52980970796,https://www.airlines-manager.com/aircraft/show/96692491,19:15,3:44,310,"$539,970.00","$497,329.00"
IAH - PWM,52985325494,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/52985325494,https://www.airlines-manager.com/aircraft/show/96692343,22:45,7:14,310,"$539,970.00","$497,329.00"
IAH - RAP,52940290905,IAH-GRR-MSN 1,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/52940290905,https://www.airlines-manager.com/aircraft/show/117273348,2:15,8:29,310,"$388,294.00","$354,046.00"
IAH - RAP,52940290906,IAH-GRR-MSN 4,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/52940290906,https://www.airlines-manager.com/aircraft/show/117273345,4:15,10:29,310,"$388,294.00","$354,046.00"
IAH - RAP,52969613799,IAH-GRR-MSN 3,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/52969613799,https://www.airlines-manager.com/aircraft/show/117273346,14:00,20:14,310,"$388,294.00","$354,046.00"
IAH - RAP,52980970865,IAH-GRR-MSN 2,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/52980970865,https://www.airlines-manager.com/aircraft/show/117273347,20:00,2:14,290,"$373,521.00","$339,854.00"
IAH - RDU,52940291123,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/52940291123,https://www.airlines-manager.com/aircraft/show/100684072,5:15,11:29,310,"$388,669.00","$351,865.00"
IAH - RDU,52963026890,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/52963026890,https://www.airlines-manager.com/aircraft/show/100684073,11:30,17:44,310,"$388,669.00","$351,865.00"
IAH - RDU,52975649281,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/52975649281,https://www.airlines-manager.com/aircraft/show/100684074,17:45,23:59,310,"$388,669.00","$351,865.00"
IAH - RDU,52985325445,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/52985325445,https://www.airlines-manager.com/aircraft/show/110582845,22:30,4:44,198,"$293,797.00","$264,308.00"
IAH - RDU,52985325446,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/52985325446,https://www.airlines-manager.com/aircraft/show/100684071,23:45,5:59,310,"$388,669.00","$351,865.00"
IAH - RIC,52940290959,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/52940290959,https://www.airlines-manager.com/aircraft/show/107467133,2:45,9:14,310,"$416,517.00","$380,203.00"
IAH - RIC,52963026919,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/52963026919,https://www.airlines-manager.com/aircraft/show/107467134,12:00,18:29,310,"$416,517.00","$380,203.00"
IAH - RIC,52969613744,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/52969613744,https://www.airlines-manager.com/aircraft/show/107467211,13:45,20:14,112,"$195,953.00","$172,147.00"
IAH - RIC,52969613745,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/52969613745,https://www.airlines-manager.com/aircraft/show/107467131,15:45,22:14,310,"$416,517.00","$380,203.00"
IAH - RIC,52980971005,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/52980971005,https://www.airlines-manager.com/aircraft/show/107467132,21:30,3:59,310,"$416,517.00","$380,203.00"
IAH - RNO,52940290765,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/52940290765,https://www.airlines-manager.com/aircraft/show/103882357,1:15,9:14,310,"$511,951.00","$468,843.00"
IAH - RNO,52940290766,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/52940290766,https://www.airlines-manager.com/aircraft/show/105099861,4:00,11:59,112,"$240,869.00","$212,337.00"
IAH - RNO,52940290767,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/52940290767,https://www.airlines-manager.com/aircraft/show/103882356,5:00,12:59,310,"$511,951.00","$468,843.00"
IAH - RNO,52963027002,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/52963027002,https://www.airlines-manager.com/aircraft/show/103882355,13:00,20:59,310,"$511,951.00","$468,843.00"
IAH - RNO,52975649227,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/52975649227,https://www.airlines-manager.com/aircraft/show/103882358,17:00,0:59,310,"$511,951.00","$468,843.00"
IAH - RSW,52940290963,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/52940290963,https://www.airlines-manager.com/aircraft/show/104717244,2:45,8:14,310,"$349,476.00","$314,918.00"
IAH - RSW,52963026865,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/52963026865,https://www.airlines-manager.com/aircraft/show/104717245,11:00,16:29,310,"$349,476.00","$314,918.00"
IAH - RSW,52969613964,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/52969613964,https://www.airlines-manager.com/aircraft/show/104717246,15:45,21:14,310,"$349,476.00","$314,918.00"
IAH - RSW,52980970996,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/52980970996,https://www.airlines-manager.com/aircraft/show/104717247,21:30,2:59,310,"$349,476.00","$314,918.00"
IAH - RSW,52985325551,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/52985325551,https://www.airlines-manager.com/aircraft/show/104743902,23:45,5:14,112,"$165,398.00","$143,162.00"
IAH - SAN,52940290713,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/52940290713,https://www.airlines-manager.com/aircraft/show/98578921,0:45,7:59,320,"$452,595.00","$405,254.00"
IAH - SAN,52940290714,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/52940290714,https://www.airlines-manager.com/aircraft/show/98578922,4:15,11:29,320,"$452,595.00","$405,254.00"
IAH - SAN,52955473082,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/52955473082,https://www.airlines-manager.com/aircraft/show/105400635,10:15,17:29,112,"$214,341.00","$186,882.00"
IAH - SAN,52969613890,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/52969613890,https://www.airlines-manager.com/aircraft/show/98578923,15:00,22:14,320,"$452,595.00","$405,254.00"
IAH - SAN,52975649306,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/52975649306,https://www.airlines-manager.com/aircraft/show/98578920,18:00,1:14,320,"$452,595.00","$405,254.00"
IAH - SAN,52980970859,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/52980970859,https://www.airlines-manager.com/aircraft/show/98578924,19:45,2:59,320,"$452,595.00","$405,254.00"
IAH - SAT,52940290817,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/52940290817,https://www.airlines-manager.com/aircraft/show/106499070,1:30,4:14,198,"$90,228.00","$72,349.00"
IAH - SAT,52940290818,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/52940290818,https://www.airlines-manager.com/aircraft/show/101412921,6:00,8:44,0,"$44,022.00","$21,995.00"
IAH - SAT,52955473006,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/52955473006,https://www.airlines-manager.com/aircraft/show/99093332,9:45,12:29,320,"$119,383.00","$93,019.00"
IAH - SAT,52969613816,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/52969613816,https://www.airlines-manager.com/aircraft/show/99093333,14:00,16:44,320,"$119,383.00","$93,019.00"
IAH - SAT,52975649314,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/52975649314,https://www.airlines-manager.com/aircraft/show/99093334,18:00,20:44,320,"$119,383.00","$93,019.00"
IAH - SAT,52985325539,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/52985325539,https://www.airlines-manager.com/aircraft/show/99093335,23:30,2:14,320,"$119,383.00","$93,019.00"
IAH - SAV,52940290882,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/52940290882,https://www.airlines-manager.com/aircraft/show/110424758,2:00,7:29,320,"$342,491.00","$306,685.00"
IAH - SAV,52955472952,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/52955472952,https://www.airlines-manager.com/aircraft/show/110424759,8:30,13:59,320,"$342,491.00","$306,685.00"
IAH - SAV,52963027049,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/52963027049,https://www.airlines-manager.com/aircraft/show/110424760,13:00,18:29,320,"$342,491.00","$306,685.00"
IAH - SAV,52985325383,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/52985325383,https://www.airlines-manager.com/aircraft/show/110424761,21:45,3:14,320,"$342,491.00","$306,685.00"
IAH - SCL,52940290815,IAH 56A-1 B,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/52940290815,https://www.airlines-manager.com/aircraft/show/106676232,1:30,19:59,648,"$2,288,163.00","$2,132,047.00"
IAH - SCL,52940290816,IAH 56A-3 B,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/52940290816,https://www.airlines-manager.com/aircraft/show/106676234,6:30,0:59,648,"$2,288,163.00","$2,132,047.00"
IAH - SCL,52975649256,IAH 56A-5 B,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/52975649256,https://www.airlines-manager.com/aircraft/show/106676236,17:30,11:59,647,"$2,284,672.00","$2,128,702.00"
IAH - SDF,52940291065,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/52940291065,https://www.airlines-manager.com/aircraft/show/107467132,4:00,9:14,310,"$328,879.00","$296,326.00"
IAH - SDF,52963026923,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/52963026923,https://www.airlines-manager.com/aircraft/show/107467133,12:00,17:14,310,"$328,879.00","$296,326.00"
IAH - SDF,52975649349,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/52975649349,https://www.airlines-manager.com/aircraft/show/107467134,18:30,23:44,310,"$328,879.00","$296,326.00"
IAH - SDF,52980970905,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/52980970905,https://www.airlines-manager.com/aircraft/show/107467211,20:15,1:29,112,"$156,177.00","$135,270.00"
IAH - SDF,52985325438,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/52985325438,https://www.airlines-manager.com/aircraft/show/107467131,22:15,3:29,310,"$328,879.00","$296,326.00"
IAH - SEA,52940291028,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/52940291028,https://www.airlines-manager.com/aircraft/show/105562971,3:30,12:44,338,"$643,802.00","$588,444.00"
IAH - SEA,52940291029,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/52940291029,https://www.airlines-manager.com/aircraft/show/105562973,4:30,13:44,338,"$643,802.00","$588,444.00"
IAH - SEA,52963027028,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/52963027028,https://www.airlines-manager.com/aircraft/show/105562972,13:00,22:14,338,"$643,802.00","$588,444.00"
IAH - SEA,52969613767,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/52969613767,https://www.airlines-manager.com/aircraft/show/105562974,14:00,23:14,338,"$643,802.00","$588,444.00"
IAH - SEA,52975649262,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/52975649262,https://www.airlines-manager.com/aircraft/show/105562975,17:30,2:44,338,"$643,802.00","$588,444.00"
IAH - SEA,52980970980,IAH-SEA-DEN 6,ERJ-175,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/52980970980,https://www.airlines-manager.com/aircraft/show/105601215,21:15,6:44,111,"$277,647.00","$239,860.00"
IAH - SJC,52940290983,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/52940290983,https://www.airlines-manager.com/aircraft/show/96694086,3:00,11:14,310,"$531,257.00","$485,628.00"
IAH - SJC,52963026848,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/52963026848,https://www.airlines-manager.com/aircraft/show/96692491,11:00,19:14,310,"$531,257.00","$485,628.00"
IAH - SJC,52969613866,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/52969613866,https://www.airlines-manager.com/aircraft/show/96692343,14:30,22:44,310,"$531,257.00","$485,628.00"
IAH - SJC,52985325505,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/52985325505,https://www.airlines-manager.com/aircraft/show/96691558,23:00,7:14,310,"$531,257.00","$485,628.00"
IAH - SJC,52985325506,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/52985325506,https://www.airlines-manager.com/aircraft/show/106014350,23:30,7:44,198,"$399,742.00","$363,170.00"
IAH - SJD,52940290857,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/52940290857,https://www.airlines-manager.com/aircraft/show/114266975,1:45,7:44,320,"$380,942.00","$342,104.00"
IAH - SJD,52940290858,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/52940290858,https://www.airlines-manager.com/aircraft/show/113250059,5:15,11:14,320,"$380,942.00","$342,104.00"
IAH - SJD,52963026957,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/52963026957,https://www.airlines-manager.com/aircraft/show/113114108,12:00,17:59,320,"$380,942.00","$342,104.00"
IAH - SJD,52969614009,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/52969614009,https://www.airlines-manager.com/aircraft/show/114266974,16:00,21:59,320,"$380,942.00","$342,104.00"
IAH - SJD,52980970963,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/52980970963,https://www.airlines-manager.com/aircraft/show/105099862,21:00,2:59,108,"$173,475.00","$151,346.00"
IAH - SLC,52940290949,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/52940290949,https://www.airlines-manager.com/aircraft/show/93094698,2:45,9:29,310,"$424,234.00","$380,747.00"
IAH - SLC,52940290950,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/52940290950,https://www.airlines-manager.com/aircraft/show/93100455,4:45,11:29,112,"$199,625.00","$171,448.00"
IAH - SLC,52955473025,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/52955473025,https://www.airlines-manager.com/aircraft/show/93094699,10:00,16:44,310,"$424,234.00","$380,747.00"
IAH - SLC,52963026951,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/52963026951,https://www.airlines-manager.com/aircraft/show/93094695,12:00,18:44,310,"$424,234.00","$380,747.00"
IAH - SLC,52969613951,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/52969613951,https://www.airlines-manager.com/aircraft/show/93094696,15:15,21:59,310,"$424,234.00","$380,747.00"
IAH - SLC,52980970971,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/52980970971,https://www.airlines-manager.com/aircraft/show/93094697,21:00,3:44,310,"$424,234.00","$380,747.00"
IAH - SMF,52940290908,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/52940290908,https://www.airlines-manager.com/aircraft/show/99093335,2:15,10:29,320,"$529,913.00","$480,684.00"
IAH - SMF,52940290909,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/52940290909,https://www.airlines-manager.com/aircraft/show/106499070,4:15,12:29,198,"$399,243.00","$363,854.00"
IAH - SMF,52963026982,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/52963026982,https://www.airlines-manager.com/aircraft/show/99093332,13:00,21:14,320,"$529,913.00","$480,684.00"
IAH - SMF,52975649179,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/52975649179,https://www.airlines-manager.com/aircraft/show/99093333,16:45,0:59,320,"$529,913.00","$480,684.00"
IAH - SMF,52980970948,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/52980970948,https://www.airlines-manager.com/aircraft/show/99093334,20:45,4:59,319,"$528,369.00","$479,194.00"
IAH - STL,52940290781,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/52940290781,https://www.airlines-manager.com/aircraft/show/88725601,1:15,5:59,310,"$299,824.00","$267,553.00"
IAH - STL,52955472905,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/52955472905,https://www.airlines-manager.com/aircraft/show/103600702,8:15,12:59,310,"$299,824.00","$267,553.00"
IAH - STL,52969613756,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/52969613756,https://www.airlines-manager.com/aircraft/show/103600701,14:00,18:44,310,"$299,824.00","$267,553.00"
IAH - STL,52969613757,IAH-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/52969613757,https://www.airlines-manager.com/aircraft/show/96990010,15:00,19:44,112,"$142,571.00","$122,041.00"
IAH - STL,52980970917,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/52980970917,https://www.airlines-manager.com/aircraft/show/103600700,20:15,0:59,310,"$299,824.00","$267,553.00"
IAH - STL,52985325384,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/52985325384,https://www.airlines-manager.com/aircraft/show/110582844,21:45,2:29,198,"$227,840.00","$201,994.00"
IAH - TPA,52940291083,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/52940291083,https://www.airlines-manager.com/aircraft/show/93094699,4:15,9:29,310,"$326,285.00","$291,063.00"
IAH - TPA,52940291084,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/52940291084,https://www.airlines-manager.com/aircraft/show/93094695,6:15,11:29,310,"$326,285.00","$291,063.00"
IAH - TPA,52955473066,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/52955473066,https://www.airlines-manager.com/aircraft/show/93094696,10:00,15:14,310,"$326,285.00","$291,063.00"
IAH - TPA,52969613963,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/52969613963,https://www.airlines-manager.com/aircraft/show/93094697,15:45,20:59,310,"$326,285.00","$291,063.00"
IAH - TPA,52980971002,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/52980971002,https://www.airlines-manager.com/aircraft/show/93094698,21:30,2:44,310,"$326,285.00","$291,063.00"
IAH - TPA,52985325546,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/52985325546,https://www.airlines-manager.com/aircraft/show/93100455,23:30,4:44,107,"$152,094.00","$129,758.00"
IAH - TUL,52940290647,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/52940290647,https://www.airlines-manager.com/aircraft/show/82543907,0:30,4:14,112,"$93,654.00","$77,440.00"
IAH - TUL,52940290648,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/52940290648,https://www.airlines-manager.com/aircraft/show/114373409,3:30,7:14,310,"$202,768.00","$176,997.00"
IAH - TUL,52955473008,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/52955473008,https://www.airlines-manager.com/aircraft/show/114373410,9:45,13:29,310,"$202,768.00","$176,997.00"
IAH - TUL,52969613899,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/52969613899,https://www.airlines-manager.com/aircraft/show/113994196,15:00,18:44,310,"$202,768.00","$176,997.00"
IAH - TUL,52980970906,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/52980970906,https://www.airlines-manager.com/aircraft/show/86385103,20:15,23:59,310,"$202,768.00","$176,997.00"
IAH - TUS,52940291136,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/52940291136,https://www.airlines-manager.com/aircraft/show/100684074,5:30,11:14,310,"$358,699.00","$324,620.00"
IAH - TUS,52955473080,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/52955473080,https://www.airlines-manager.com/aircraft/show/110582845,10:15,15:59,198,"$272,016.00","$244,713.00"
IAH - TUS,52963026889,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/52963026889,https://www.airlines-manager.com/aircraft/show/100684071,11:30,17:14,310,"$358,699.00","$324,620.00"
IAH - TUS,52975649229,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/52975649229,https://www.airlines-manager.com/aircraft/show/100684072,17:00,22:44,310,"$358,699.00","$324,620.00"
IAH - TUS,52985325530,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/52985325530,https://www.airlines-manager.com/aircraft/show/100684073,23:15,4:59,310,"$358,699.00","$324,620.00"
IAH - TYS,52940290916,IAH-GRR-MSN 2,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/52940290916,https://www.airlines-manager.com/aircraft/show/117273347,2:15,7:14,310,"$325,239.00","$295,080.00"
IAH - TYS,52955472933,IAH-GRR-MSN 1,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/52955472933,https://www.airlines-manager.com/aircraft/show/117273348,8:30,13:29,310,"$325,239.00","$295,080.00"
IAH - TYS,52963026815,IAH-GRR-MSN 4,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/52963026815,https://www.airlines-manager.com/aircraft/show/117273345,11:00,15:59,310,"$325,239.00","$295,080.00"
IAH - TYS,52980970914,IAH-GRR-MSN 3,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/52980970914,https://www.airlines-manager.com/aircraft/show/117273346,20:15,1:14,310,"$325,239.00","$295,080.00"
IAH - UIO,52940290669,IAH 84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/52940290669,https://www.airlines-manager.com/aircraft/show/89124076,0:30,11:14,932,"$1,794,639.00","$1,639,245.00"
IAH - UIO,52963027050,IAH 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/52963027050,https://www.airlines-manager.com/aircraft/show/88905141,13:15,23:59,932,"$1,794,639.00","$1,639,245.00"
IAH - YEG,52940290814,IAH-YEG-BUR 5,A321neo,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/52940290814,https://www.airlines-manager.com/aircraft/show/117273340,1:30,10:44,338,"$640,637.00","$594,021.00"
IAH - YEG,52955472929,IAH-YEG-BUR 2,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/52955472929,https://www.airlines-manager.com/aircraft/show/117273343,8:30,17:44,310,"$591,637.00","$542,704.00"
IAH - YEG,52963026814,IAH-YEG-BUR 1,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/52963026814,https://www.airlines-manager.com/aircraft/show/117273344,11:00,20:14,310,"$591,637.00","$542,704.00"
IAH - YEG,52975649239,IAH-YEG-BUR 4,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/52975649239,https://www.airlines-manager.com/aircraft/show/117273341,17:15,2:29,310,"$591,637.00","$542,704.00"
IAH - YEG,52975649240,IAH-YEG-BUR 3,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/52975649240,https://www.airlines-manager.com/aircraft/show/117273342,18:00,3:14,310,"$591,637.00","$542,704.00"
IAH - YOW,52940291008,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/52940291008,https://www.airlines-manager.com/aircraft/show/113114108,3:15,11:14,320,"$508,703.00","$461,046.00"
IAH - YOW,52955472896,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/52955472896,https://www.airlines-manager.com/aircraft/show/114266974,8:00,15:59,320,"$508,703.00","$461,046.00"
IAH - YOW,52963026993,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/52963026993,https://www.airlines-manager.com/aircraft/show/105099862,13:00,20:59,112,"$238,507.00","$210,302.00"
IAH - YOW,52975649290,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/52975649290,https://www.airlines-manager.com/aircraft/show/114266975,17:45,1:44,320,"$508,703.00","$461,046.00"
IAH - YOW,52980970990,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/52980970990,https://www.airlines-manager.com/aircraft/show/113250059,21:15,5:14,320,"$508,703.00","$461,046.00"
IAH - YUL,52940290710,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/52940290710,https://www.airlines-manager.com/aircraft/show/114266980,0:45,8:44,400,"$682,280.00","$624,339.00"
IAH - YUL,52940290711,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/52940290711,https://www.airlines-manager.com/aircraft/show/114266979,2:00,9:59,400,"$682,280.00","$624,339.00"
IAH - YUL,52963026910,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/52963026910,https://www.airlines-manager.com/aircraft/show/114266978,12:00,19:59,400,"$682,280.00","$624,339.00"
IAH - YUL,52980970946,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/52980970946,https://www.airlines-manager.com/aircraft/show/114266977,20:45,4:44,400,"$682,280.00","$624,339.00"
IAH - YVR,52940290749,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/52940290749,https://www.airlines-manager.com/aircraft/show/97076946,1:00,10:29,400,"$774,218.00","$706,156.00"
IAH - YVR,52940290750,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/52940290750,https://www.airlines-manager.com/aircraft/show/97076943,4:00,13:29,400,"$774,218.00","$706,156.00"
IAH - YVR,52963027018,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/52963027018,https://www.airlines-manager.com/aircraft/show/97076944,13:00,22:29,400,"$774,218.00","$706,156.00"
IAH - YVR,52969613990,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/52969613990,https://www.airlines-manager.com/aircraft/show/97026605,16:00,1:44,136,"$285,818.00","$249,910.00"
IAH - YVR,52980970897,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/52980970897,https://www.airlines-manager.com/aircraft/show/97076945,20:00,5:29,400,"$774,218.00","$706,156.00"
IAH - YVR,52985325514,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/52985325514,https://www.airlines-manager.com/aircraft/show/97076942,23:00,8:29,399,"$772,528.00","$704,530.00"
IAH - YYC,52940290795,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/52940290795,https://www.airlines-manager.com/aircraft/show/114266978,1:15,9:59,400,"$742,614.00","$679,862.00"
IAH - YYC,52963026911,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/52963026911,https://www.airlines-manager.com/aircraft/show/114266977,12:00,20:44,400,"$742,614.00","$679,862.00"
IAH - YYC,52969614006,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/52969614006,https://www.airlines-manager.com/aircraft/show/114266980,16:00,0:44,400,"$742,614.00","$679,862.00"
IAH - YYC,52975649248,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/52975649248,https://www.airlines-manager.com/aircraft/show/114266979,17:15,1:59,400,"$742,614.00","$679,862.00"
IAH - YYZ,52940291033,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/52940291033,https://www.airlines-manager.com/aircraft/show/97076944,3:30,10:29,400,"$572,398.00","$513,750.00"
IAH - YYZ,52940291034,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/52940291034,https://www.airlines-manager.com/aircraft/show/97026605,6:45,13:44,136,"$211,422.00","$180,879.00"
IAH - YYZ,52963027019,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/52963027019,https://www.airlines-manager.com/aircraft/show/97076945,13:00,19:59,400,"$572,398.00","$513,750.00"
IAH - YYZ,52969613993,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/52969613993,https://www.airlines-manager.com/aircraft/show/97076942,16:00,22:59,400,"$572,398.00","$513,750.00"
IAH - YYZ,52975649318,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/52975649318,https://www.airlines-manager.com/aircraft/show/97076946,18:00,0:59,400,"$572,398.00","$513,750.00"
IAH - YYZ,52980970966,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/52980970966,https://www.airlines-manager.com/aircraft/show/97076943,21:00,3:59,400,"$572,398.00","$513,750.00"
MIA - ABQ,52940290786,MIA-IAD-TUS 1,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/52940290786,https://www.airlines-manager.com/aircraft/show/97556721,1:15,9:59,310,"$547,406.00","$499,565.00"
MIA - ABQ,52940290787,MIA-IAD-TUS 4,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/52940290787,https://www.airlines-manager.com/aircraft/show/97556718,4:15,12:59,310,"$547,406.00","$499,565.00"
MIA - ABQ,52955473042,MIA-IAD-TUS 3,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/52955473042,https://www.airlines-manager.com/aircraft/show/97556719,10:00,18:44,310,"$547,406.00","$499,565.00"
MIA - ABQ,52980970839,MIA-IAD-TUS 2,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/52980970839,https://www.airlines-manager.com/aircraft/show/97556720,19:30,4:14,310,"$547,406.00","$499,565.00"
MIA - ABQ,52985325444,MIA-IAD-TUS 5,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/52985325444,https://www.airlines-manager.com/aircraft/show/97556716,22:30,7:14,309,"$546,348.00","$498,553.00"
MIA - ACC,52969613855,MIA 84B-2 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/52969613855,https://www.airlines-manager.com/aircraft/show/106676226,14:15,11:59,962,"$3,564,678.00","$3,254,365.00"
MIA - ACC,52985325488,MIA 84B-4 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/52985325488,https://www.airlines-manager.com/aircraft/show/106676228,22:45,20:29,962,"$3,564,678.00","$3,254,365.00"
MIA - ALB,52940291035,MIA-DSM-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/52940291035,https://www.airlines-manager.com/aircraft/show/113101233,3:30,10:14,320,"$427,622.00","$386,248.00"
MIA - ALB,52963027036,MIA-DSM-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/52963027036,https://www.airlines-manager.com/aircraft/show/113101230,13:00,19:44,320,"$427,622.00","$386,248.00"
MIA - ALB,52969613984,MIA-DSM-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/52969613984,https://www.airlines-manager.com/aircraft/show/100049776,16:00,22:59,112,"$202,266.00","$178,003.00"
MIA - ALB,52980970912,MIA-DSM-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/52980970912,https://www.airlines-manager.com/aircraft/show/111064081,20:15,2:59,320,"$427,622.00","$386,248.00"
MIA - ALB,52985325533,MIA-DSM-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/52985325533,https://www.airlines-manager.com/aircraft/show/113101228,23:15,5:59,320,"$427,622.00","$386,248.00"
MIA - ALG,52975649209,MIA 84B-7 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/52975649209,https://www.airlines-manager.com/aircraft/show/106676231,17:00,12:29,962,"$3,237,914.00","$2,952,382.00"
MIA - ALG,52980970927,MIA 84B-5 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/52980970927,https://www.airlines-manager.com/aircraft/show/106676229,20:30,15:59,961,"$3,235,430.00","$2,950,062.00"
MIA - ANU,52940291151,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/52940291151,https://www.airlines-manager.com/aircraft/show/110114297,6:30,13:44,228,"$355,410.00","$324,727.00"
MIA - ANU,52955472947,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/52955472947,https://www.airlines-manager.com/aircraft/show/110114298,8:30,15:44,228,"$355,410.00","$324,727.00"
MIA - ANU,52963026954,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/52963026954,https://www.airlines-manager.com/aircraft/show/110114295,12:00,19:14,228,"$355,410.00","$324,727.00"
MIA - ANU,52963026955,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/52963026955,https://www.airlines-manager.com/aircraft/show/110114296,13:00,20:14,228,"$355,410.00","$324,727.00"
MIA - ANU,52969800871,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/52969800871,https://www.airlines-manager.com/aircraft/show/110114300,16:30,23:44,228,"$355,410.00","$324,727.00"
MIA - ANU,52985325537,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/52985325537,https://www.airlines-manager.com/aircraft/show/110114299,23:30,6:44,228,"$355,410.00","$324,727.00"
MIA - ATL,52963026943,MIA-LAX-DEN 4,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/52963026943,https://www.airlines-manager.com/aircraft/show/91126652,12:00,16:29,400,"$365,113.00","$300,868.00"
MIA - ATL,52963026944,MIA-LAX-DEN 2,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/52963026944,https://www.airlines-manager.com/aircraft/show/91126650,13:00,17:29,400,"$365,113.00","$300,868.00"
MIA - ATL,52980970829,MIA-LAX-DEN 1,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/52980970829,https://www.airlines-manager.com/aircraft/show/91126649,19:30,23:59,400,"$365,113.00","$300,868.00"
MIA - ATL,52980970830,MIA-LAX-DEN 3,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/52980970830,https://www.airlines-manager.com/aircraft/show/91126651,21:00,1:29,400,"$365,113.00","$300,868.00"
MIA - AUA,52940290986,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/52940290986,https://www.airlines-manager.com/aircraft/show/107121795,3:00,9:29,320,"$403,670.00","$363,850.00"
MIA - AUA,52940290987,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/52940290987,https://www.airlines-manager.com/aircraft/show/107121798,4:30,10:59,320,"$403,670.00","$363,850.00"
MIA - AUA,52963026843,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/52963026843,https://www.airlines-manager.com/aircraft/show/107121797,11:00,17:29,320,"$403,670.00","$363,850.00"
MIA - AUA,52975649286,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/52975649286,https://www.airlines-manager.com/aircraft/show/107121796,17:45,0:14,320,"$403,670.00","$363,850.00"
MIA - AUA,52985325385,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/52985325385,https://www.airlines-manager.com/aircraft/show/107121799,21:45,4:14,241,"$313,425.00","$276,624.00"
MIA - AUS,52940290979,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/52940290979,https://www.airlines-manager.com/aircraft/show/99920625,2:45,9:14,320,"$402,251.00","$358,552.00"
MIA - AUS,52955473038,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/52955473038,https://www.airlines-manager.com/aircraft/show/99920626,10:00,16:29,320,"$402,251.00","$358,552.00"
MIA - AUS,52969613817,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/52969613817,https://www.airlines-manager.com/aircraft/show/82323689,14:00,20:29,112,"$189,870.00","$164,811.00"
MIA - AUS,52969613818,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/52969613818,https://www.airlines-manager.com/aircraft/show/99920623,14:45,21:14,320,"$402,251.00","$358,552.00"
MIA - AUS,52980970947,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/52980970947,https://www.airlines-manager.com/aircraft/show/99920624,20:45,3:14,320,"$402,251.00","$358,552.00"
MIA - BDA,52940290990,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/52940290990,https://www.airlines-manager.com/aircraft/show/104034457,3:00,9:14,228,"$294,986.00","$267,460.00"
MIA - BDA,52940290991,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/52940290991,https://www.airlines-manager.com/aircraft/show/104034459,3:45,9:59,228,"$294,986.00","$267,460.00"
MIA - BDA,52955473015,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/52955473015,https://www.airlines-manager.com/aircraft/show/104034460,10:00,16:14,228,"$294,986.00","$267,460.00"
MIA - BDA,52963026871,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/52963026871,https://www.airlines-manager.com/aircraft/show/99326789,11:00,17:14,228,"$294,986.00","$267,460.00"
MIA - BDA,52969613968,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/52969613968,https://www.airlines-manager.com/aircraft/show/104034461,15:45,21:59,228,"$294,986.00","$267,460.00"
MIA - BDA,52980970985,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/52980970985,https://www.airlines-manager.com/aircraft/show/104034458,21:15,3:29,228,"$294,986.00","$267,460.00"
MIA - BDL,52940290985,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/52940290985,https://www.airlines-manager.com/aircraft/show/107763565,3:00,9:44,320,"$426,195.00","$383,914.00"
MIA - BDL,52955472890,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/52955472890,https://www.airlines-manager.com/aircraft/show/107467213,8:00,14:44,112,"$200,584.00","$175,957.00"
MIA - BDL,52969613739,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/52969613739,https://www.airlines-manager.com/aircraft/show/107763561,13:45,20:29,320,"$426,195.00","$383,914.00"
MIA - BDL,52969613740,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/52969613740,https://www.airlines-manager.com/aircraft/show/107763566,14:00,20:44,320,"$426,195.00","$383,914.00"
MIA - BDL,52980970935,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/52980970935,https://www.airlines-manager.com/aircraft/show/107763562,20:30,3:14,320,"$426,195.00","$383,914.00"
MIA - BFF,52940290683,MIA-PSP-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/52940290683,https://www.airlines-manager.com/aircraft/show/116789634,0:45,9:29,320,"$554,136.00","$503,973.00"
MIA - BFF,52940290684,MIA-PSP-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/52940290684,https://www.airlines-manager.com/aircraft/show/116789632,1:00,9:44,320,"$554,136.00","$503,973.00"
MIA - BFF,52955473054,MIA-PSP-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/52955473054,https://www.airlines-manager.com/aircraft/show/116789633,10:00,18:44,320,"$554,136.00","$503,973.00"
MIA - BFF,52963026996,MIA-PSP-BFF 5,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/52963026996,https://www.airlines-manager.com/aircraft/show/116789630,13:00,21:44,320,"$554,136.00","$503,973.00"
MIA - BFF,52980970944,MIA-PSP-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/52980970944,https://www.airlines-manager.com/aircraft/show/116789631,20:45,5:29,320,"$554,136.00","$503,973.00"
MIA - BGI,52940290974,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/52940290974,https://www.airlines-manager.com/aircraft/show/107121796,2:45,10:59,320,"$515,786.00","$466,962.00"
MIA - BGI,52940290975,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/52940290975,https://www.airlines-manager.com/aircraft/show/107121799,6:45,14:59,320,"$515,786.00","$466,962.00"
MIA - BGI,52963026924,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/52963026924,https://www.airlines-manager.com/aircraft/show/107121795,12:00,20:14,320,"$515,786.00","$466,962.00"
MIA - BGI,52969613729,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/52969613729,https://www.airlines-manager.com/aircraft/show/107121798,13:30,21:44,320,"$515,786.00","$466,962.00"
MIA - BGI,52980970880,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/52980970880,https://www.airlines-manager.com/aircraft/show/107121797,20:00,4:14,320,"$515,786.00","$466,962.00"
MIA - BHM,52940291041,MIA-CID-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/52940291041,https://www.airlines-manager.com/aircraft/show/116789651,3:45,8:29,310,"$301,628.00","$272,450.00"
MIA - BHM,52955473026,MIA-CID-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/52955473026,https://www.airlines-manager.com/aircraft/show/116789652,10:00,14:44,310,"$301,628.00","$272,450.00"
MIA - BHM,52975649253,MIA-CID-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/52975649253,https://www.airlines-manager.com/aircraft/show/116789653,17:15,21:59,310,"$301,628.00","$272,450.00"
MIA - BHM,52985325486,MIA-CID-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/52985325486,https://www.airlines-manager.com/aircraft/show/116789650,22:45,3:29,310,"$301,628.00","$272,450.00"
MIA - BIL,52955473052,MIA-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/52955473052,https://www.airlines-manager.com/aircraft/show/116789629,10:00,20:14,320,"$631,241.00","$575,749.00"
MIA - BIL,52963026904,MIA-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/52963026904,https://www.airlines-manager.com/aircraft/show/116789628,12:00,22:14,320,"$631,241.00","$575,749.00"
MIA - BIL,52969613830,MIA-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/52969613830,https://www.airlines-manager.com/aircraft/show/116789627,14:00,0:14,320,"$631,241.00","$575,749.00"
MIA - BIL,52980971006,MIA-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/52980971006,https://www.airlines-manager.com/aircraft/show/116789626,21:30,7:44,320,"$631,241.00","$575,749.00"
MIA - BIL,52985325561,MIA-BIL-BZN 5,ERJ-175,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/52985325561,https://www.airlines-manager.com/aircraft/show/116042637,23:45,9:59,112,"$296,867.00","$263,055.00"
MIA - BNA,52940290685,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/52940290685,https://www.airlines-manager.com/aircraft/show/103534663,0:45,5:59,112,"$157,208.00","$135,730.00"
MIA - BNA,52940290686,MIA-BOI-BNA 4,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/52940290686,https://www.airlines-manager.com/aircraft/show/103775657,1:15,6:29,320,"$330,730.00","$292,479.00"
MIA - BNA,52940290687,MIA-BOI-BNA 3,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/52940290687,https://www.airlines-manager.com/aircraft/show/104020880,4:45,9:59,320,"$330,730.00","$292,479.00"
MIA - BNA,52955473017,MIA-BOI-BNA 2,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/52955473017,https://www.airlines-manager.com/aircraft/show/104022609,10:00,15:14,320,"$330,730.00","$292,479.00"
MIA - BNA,52963026962,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/52963026962,https://www.airlines-manager.com/aircraft/show/103534663,12:00,17:14,112,"$157,208.00","$135,730.00"
MIA - BNA,52980970979,MIA-BOI-BNA 1,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/52980970979,https://www.airlines-manager.com/aircraft/show/104133006,21:15,2:29,320,"$330,730.00","$292,479.00"
MIA - BOI,52940290868,MIA-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/52940290868,https://www.airlines-manager.com/aircraft/show/106339154,1:45,12:59,198,"$523,191.00","$479,322.00"
MIA - BOI,52955473018,MIA-BOI-BNA 1,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/52955473018,https://www.airlines-manager.com/aircraft/show/104133006,10:00,21:14,320,"$695,214.00","$635,062.00"
MIA - BOI,52969613760,MIA-BOI-BNA 4,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/52969613760,https://www.airlines-manager.com/aircraft/show/103775657,14:00,1:14,320,"$695,214.00","$635,062.00"
MIA - BOI,52975649271,MIA-BOI-BNA 3,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/52975649271,https://www.airlines-manager.com/aircraft/show/104020880,17:30,4:44,320,"$695,214.00","$635,062.00"
MIA - BOI,52985325496,MIA-BOI-BNA 2,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/52985325496,https://www.airlines-manager.com/aircraft/show/104022609,22:45,9:59,320,"$695,214.00","$635,062.00"
MIA - BOS,52940290903,MIA-SJU-BOS 5,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/52940290903,https://www.airlines-manager.com/aircraft/show/91352059,2:00,8:59,310,"$443,969.00","$399,560.00"
MIA - BOS,52940290904,MIA-SJU-BOS 1,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/52940290904,https://www.airlines-manager.com/aircraft/show/91352063,5:00,11:59,310,"$443,969.00","$399,560.00"
MIA - BOS,52963026880,MIA-SJU-BOS 4,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/52963026880,https://www.airlines-manager.com/aircraft/show/91352060,11:15,18:14,310,"$443,969.00","$399,560.00"
MIA - BOS,52969800881,MIA-SJU-BOS 2,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/52969800881,https://www.airlines-manager.com/aircraft/show/91352062,16:30,23:29,310,"$443,969.00","$399,560.00"
MIA - BOS,52980970779,MIA-SJU-BOS 3,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/52980970779,https://www.airlines-manager.com/aircraft/show/91352061,19:00,1:59,310,"$443,969.00","$399,560.00"
MIA - BOS,52980970780,MIA-SJU-BOS 6 B,A319-100,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/52980970780,https://www.airlines-manager.com/aircraft/show/110582841,20:15,3:14,198,"$335,791.00","$300,210.00"
MIA - BTV,52940290996,MIA-DSM-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/52940290996,https://www.airlines-manager.com/aircraft/show/111064081,3:00,10:14,320,"$459,393.00","$416,521.00"
MIA - BTV,52955472963,MIA-DSM-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/52955472963,https://www.airlines-manager.com/aircraft/show/113101228,8:45,15:59,320,"$459,393.00","$416,521.00"
MIA - BTV,52963027035,MIA-DSM-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/52963027035,https://www.airlines-manager.com/aircraft/show/113101233,13:00,20:14,320,"$459,393.00","$416,521.00"
MIA - BTV,52980970860,MIA-DSM-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/52980970860,https://www.airlines-manager.com/aircraft/show/113101230,19:45,2:59,320,"$459,393.00","$416,521.00"
MIA - BTV,52985325508,MIA-DSM-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/52985325508,https://www.airlines-manager.com/aircraft/show/100049776,23:00,6:29,109,"$215,670.00","$190,474.00"
MIA - BUF,52940290988,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/52940290988,https://www.airlines-manager.com/aircraft/show/107763561,3:00,9:44,320,"$424,051.00","$382,236.00"
MIA - BUF,52940290989,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/52940290989,https://www.airlines-manager.com/aircraft/show/107763566,3:15,9:59,320,"$424,051.00","$382,236.00"
MIA - BUF,52963026838,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/52963026838,https://www.airlines-manager.com/aircraft/show/107763562,11:00,17:44,320,"$424,051.00","$382,236.00"
MIA - BUF,52975649268,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/52975649268,https://www.airlines-manager.com/aircraft/show/107763565,17:30,0:14,320,"$424,051.00","$382,236.00"
MIA - BUF,52980970987,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/52980970987,https://www.airlines-manager.com/aircraft/show/107467213,21:15,3:59,112,"$199,595.00","$175,227.00"
MIA - BUR,52940290956,MIA-BUR-PVD 4,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/52940290956,https://www.airlines-manager.com/aircraft/show/108834806,2:45,13:59,310,"$701,042.00","$648,137.00"
MIA - BUR,52963026837,MIA-BUR-PVD 1,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/52963026837,https://www.airlines-manager.com/aircraft/show/108834803,11:00,22:14,310,"$701,042.00","$648,137.00"
MIA - BUR,52969613794,MIA-BUR-PVD 3,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/52969613794,https://www.airlines-manager.com/aircraft/show/108834805,14:00,1:14,310,"$701,042.00","$648,137.00"
MIA - BUR,52980970876,MIA-BUR-PVD 5 B,A319-100,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/52980970876,https://www.airlines-manager.com/aircraft/show/108834807,20:00,7:14,198,"$525,940.00","$483,515.00"
MIA - BUR,52980970877,MIA-BUR-PVD 2,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/52980970877,https://www.airlines-manager.com/aircraft/show/108834804,20:45,7:59,310,"$701,042.00","$648,137.00"
MIA - BWI,52940291072,MIA-BWI-YYZ 4,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/52940291072,https://www.airlines-manager.com/aircraft/show/92153442,4:00,9:44,310,"$364,232.00","$325,923.00"
MIA - BWI,52940291073,MIA-BWI-YYZ 5,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/52940291073,https://www.airlines-manager.com/aircraft/show/92153439,6:00,11:44,310,"$364,232.00","$325,923.00"
MIA - BWI,52955473067,MIA-BWI-YYZ 1,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/52955473067,https://www.airlines-manager.com/aircraft/show/92153443,10:00,15:44,310,"$364,232.00","$325,923.00"
MIA - BWI,52963026995,MIA-BWI-YYZ 2,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/52963026995,https://www.airlines-manager.com/aircraft/show/92153440,13:00,18:44,310,"$364,232.00","$325,923.00"
MIA - BWI,52980970958,MIA-BWI-YYZ 3,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/52980970958,https://www.airlines-manager.com/aircraft/show/92153441,21:00,2:44,310,"$364,232.00","$325,923.00"
MIA - BWI,52985325500,MIA-BWI-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/52985325500,https://www.airlines-manager.com/aircraft/show/92137503,23:00,4:44,85,"$121,048.00","$100,289.00"
MIA - BZN,52940290610,MIA-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/52940290610,https://www.airlines-manager.com/aircraft/show/116789627,0:15,10:44,320,"$653,716.00","$597,520.00"
MIA - BZN,52963026789,MIA-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/52963026789,https://www.airlines-manager.com/aircraft/show/116789626,11:00,21:29,320,"$653,716.00","$597,520.00"
MIA - BZN,52963026790,MIA-BIL-BZN 5,ERJ-175,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/52963026790,https://www.airlines-manager.com/aircraft/show/116042637,13:00,23:44,112,"$308,007.00","$273,528.00"
MIA - BZN,52980970918,MIA-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/52980970918,https://www.airlines-manager.com/aircraft/show/116789629,20:15,6:44,320,"$653,716.00","$597,520.00"
MIA - BZN,52985325420,MIA-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/52985325420,https://www.airlines-manager.com/aircraft/show/116789628,22:15,8:44,320,"$653,716.00","$597,520.00"
MIA - CAK,52940290895,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/52940290895,https://www.airlines-manager.com/aircraft/show/115493370,2:00,8:14,310,"$383,510.00","$349,740.00"
MIA - CAK,52955472911,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/52955472911,https://www.airlines-manager.com/aircraft/show/115493371,8:15,14:29,310,"$383,510.00","$349,740.00"
MIA - CAK,52963026822,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/52963026822,https://www.airlines-manager.com/aircraft/show/115493372,11:00,17:14,310,"$383,510.00","$349,740.00"
MIA - CAK,52975649302,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/52975649302,https://www.airlines-manager.com/aircraft/show/114912307,18:00,0:14,112,"$181,153.00","$159,063.00"
MIA - CAK,52980970962,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/52980970962,https://www.airlines-manager.com/aircraft/show/115493373,21:00,3:14,273,"$356,382.00","$323,673.00"
MIA - CHS,52940291015,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/52940291015,https://www.airlines-manager.com/aircraft/show/94886626,3:15,7:14,310,"$225,027.00","$199,035.00"
MIA - CHS,52940291016,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/52940291016,https://www.airlines-manager.com/aircraft/show/107577220,4:15,8:14,0,"$60,666.00","$43,094.00"
MIA - CHS,52955472977,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/52955472977,https://www.airlines-manager.com/aircraft/show/96692674,9:00,12:59,310,"$225,027.00","$199,035.00"
MIA - CHS,52963026812,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/52963026812,https://www.airlines-manager.com/aircraft/show/105601657,11:00,14:59,112,"$104,603.00","$88,151.00"
MIA - CHS,52969613781,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/52969613781,https://www.airlines-manager.com/aircraft/show/94886625,14:00,17:59,310,"$225,027.00","$199,035.00"
MIA - CHS,52980970952,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/52980970952,https://www.airlines-manager.com/aircraft/show/94886629,20:45,0:44,290,"$202,844.00","$178,197.00"
MIA - CID,52940290779,MIA-CID-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/52940290779,https://www.airlines-manager.com/aircraft/show/116789652,1:15,8:29,310,"$453,834.00","$416,375.00"
MIA - CID,52955473045,MIA-CID-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/52955473045,https://www.airlines-manager.com/aircraft/show/116789653,10:00,17:14,310,"$453,834.00","$416,375.00"
MIA - CID,52969613958,MIA-CID-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/52969613958,https://www.airlines-manager.com/aircraft/show/116789650,15:30,22:44,310,"$453,834.00","$416,375.00"
MIA - CID,52980970937,MIA-CID-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/52980970937,https://www.airlines-manager.com/aircraft/show/116789651,20:30,3:44,310,"$453,834.00","$416,375.00"
MIA - CLE,52940290673,MIA-COS-CVG 5,ERJ-175,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/52940290673,https://www.airlines-manager.com/aircraft/show/103534665,0:30,6:44,112,"$188,017.00","$164,233.00"
MIA - CLE,52940290674,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/52940290674,https://www.airlines-manager.com/aircraft/show/103684630,4:15,10:29,320,"$398,460.00","$357,203.00"
MIA - CLE,52955472827,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/52955472827,https://www.airlines-manager.com/aircraft/show/103365574,7:45,13:59,320,"$398,460.00","$357,203.00"
MIA - CLE,52963027003,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/52963027003,https://www.airlines-manager.com/aircraft/show/103684632,13:00,19:14,320,"$398,460.00","$357,203.00"
MIA - CLE,52980970943,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/52980970943,https://www.airlines-manager.com/aircraft/show/103684631,20:45,2:59,320,"$398,460.00","$357,203.00"
MIA - CLT,52940291089,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/52940291089,https://www.airlines-manager.com/aircraft/show/82543123,4:15,8:59,112,"$142,233.00","$118,326.00"
MIA - CLT,52955473069,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/52955473069,https://www.airlines-manager.com/aircraft/show/91600939,10:00,14:44,310,"$298,689.00","$260,740.00"
MIA - CLT,52969613985,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/52969613985,https://www.airlines-manager.com/aircraft/show/91600936,16:00,20:44,310,"$298,689.00","$260,740.00"
MIA - CLT,52975649279,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/52975649279,https://www.airlines-manager.com/aircraft/show/91600937,17:45,22:29,310,"$298,689.00","$260,740.00"
MIA - CLT,52985325455,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/52985325455,https://www.airlines-manager.com/aircraft/show/91600935,22:30,3:14,310,"$298,689.00","$260,740.00"
MIA - CLT,52985325456,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/52985325456,https://www.airlines-manager.com/aircraft/show/91600938,23:30,4:14,310,"$298,689.00","$260,740.00"
MIA - CMH,52940290845,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/52940290845,https://www.airlines-manager.com/aircraft/show/88494374,1:45,7:44,320,"$372,446.00","$332,425.00"
MIA - CMH,52955472795,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/52955472795,https://www.airlines-manager.com/aircraft/show/88494378,7:15,13:14,320,"$372,446.00","$332,425.00"
MIA - CMH,52969613775,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/52969613775,https://www.airlines-manager.com/aircraft/show/91806233,14:00,19:59,320,"$372,446.00","$332,425.00"
MIA - CMH,52975649316,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/52975649316,https://www.airlines-manager.com/aircraft/show/110582842,18:00,23:59,198,"$282,740.00","$254,471.00"
MIA - CMH,52980970965,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/52980970965,https://www.airlines-manager.com/aircraft/show/88239556,21:00,2:59,320,"$372,446.00","$332,425.00"
MIA - CMN,52940291122,MIA 84B-4 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/52940291122,https://www.airlines-manager.com/aircraft/show/106676228,5:00,22:44,962,"$2,958,880.00","$2,700,211.00"
MIA - CMN,52980970920,MIA 84B-1 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/52980970920,https://www.airlines-manager.com/aircraft/show/106676225,20:30,14:14,961,"$2,956,585.00","$2,698,061.00"
MIA - COS,52940291153,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/52940291153,https://www.airlines-manager.com/aircraft/show/103684631,6:30,14:59,320,"$543,585.00","$492,195.00"
MIA - COS,52955473065,MIA-COS-CVG 5,ERJ-175,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/52955473065,https://www.airlines-manager.com/aircraft/show/103534665,10:00,18:44,112,"$256,326.00","$225,745.00"
MIA - COS,52969613819,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/52969613819,https://www.airlines-manager.com/aircraft/show/103684630,14:00,22:29,320,"$543,585.00","$492,195.00"
MIA - COS,52975649254,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/52975649254,https://www.airlines-manager.com/aircraft/show/103365574,17:30,1:59,320,"$543,585.00","$492,195.00"
MIA - COS,52985325471,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/52985325471,https://www.airlines-manager.com/aircraft/show/103684632,22:45,7:14,320,"$543,585.00","$492,195.00"
MIA - CPT,52940291117,MIA 84A-6 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/52940291117,https://www.airlines-manager.com/aircraft/show/93731916,5:00,10:29,1124,"$5,606,688.00","$5,212,080.00"
MIA - CPT,52975649305,MIA 84A-2 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/52975649305,https://www.airlines-manager.com/aircraft/show/93686968,18:00,23:29,1124,"$5,606,688.00","$5,212,080.00"
MIA - CUN,52940291131,MIA-PSP-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/52940291131,https://www.airlines-manager.com/aircraft/show/116789631,5:30,9:44,320,"$250,479.00","$215,126.00"
MIA - CUN,52955472997,MIA-PSP-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/52955472997,https://www.airlines-manager.com/aircraft/show/116789634,9:30,13:44,320,"$250,479.00","$215,126.00"
MIA - CUN,52955472998,MIA-PSP-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/52955472998,https://www.airlines-manager.com/aircraft/show/116789632,10:00,14:14,320,"$250,479.00","$215,126.00"
MIA - CUN,52975649370,MIA-PSP-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/52975649370,https://www.airlines-manager.com/aircraft/show/116789633,18:45,22:59,320,"$250,479.00","$215,126.00"
MIA - CUN,52985325381,MIA-PSP-BFF 5,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/52985325381,https://www.airlines-manager.com/aircraft/show/116789630,21:45,1:59,314,"$246,218.00","$210,972.00"
MIA - CUR,52940291086,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/52940291086,https://www.airlines-manager.com/aircraft/show/107121797,4:15,10:59,320,"$413,110.00","$371,097.00"
MIA - CUR,52963026844,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/52963026844,https://www.airlines-manager.com/aircraft/show/107121796,11:00,17:44,320,"$413,110.00","$371,097.00"
MIA - CUR,52969613903,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/52969613903,https://www.airlines-manager.com/aircraft/show/107121799,15:00,21:44,320,"$413,110.00","$371,097.00"
MIA - CUR,52980970902,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/52980970902,https://www.airlines-manager.com/aircraft/show/107121795,20:15,2:59,320,"$413,110.00","$371,097.00"
MIA - CUR,52985325386,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/52985325386,https://www.airlines-manager.com/aircraft/show/107121798,21:45,4:29,295,"$383,640.00","$342,632.00"
MIA - CVG,52940290887,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/52940290887,https://www.airlines-manager.com/aircraft/show/103365574,2:00,7:44,320,"$367,076.00","$325,195.00"
MIA - CVG,52955472785,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/52955472785,https://www.airlines-manager.com/aircraft/show/103684632,7:15,12:59,320,"$367,076.00","$325,195.00"
MIA - CVG,52955472786,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/52955472786,https://www.airlines-manager.com/aircraft/show/107527976,10:00,15:44,0,"$96,758.00","$70,879.00"
MIA - CVG,52969613929,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/52969613929,https://www.airlines-manager.com/aircraft/show/103684631,15:00,20:44,320,"$367,076.00","$325,195.00"
MIA - CVG,52975649360,MIA-COS-CVG 5,ERJ-175,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/52975649360,https://www.airlines-manager.com/aircraft/show/103534665,18:45,0:29,112,"$173,181.00","$149,472.00"
MIA - CVG,52985325468,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/52985325468,https://www.airlines-manager.com/aircraft/show/103684630,22:30,4:14,320,"$367,076.00","$325,195.00"
MIA - DEN,52940290798,MIA-LAX-DEN 3,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/52940290798,https://www.airlines-manager.com/aircraft/show/91126651,1:30,9:59,400,"$727,340.00","$641,708.00"
MIA - DEN,52940290799,MIA-LAX-DEN 4,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/52940290799,https://www.airlines-manager.com/aircraft/show/91126652,3:30,11:59,400,"$727,340.00","$641,708.00"
MIA - DEN,52963026875,MIA-LAX-DEN 1,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/52963026875,https://www.airlines-manager.com/aircraft/show/91126649,11:00,19:29,400,"$727,340.00","$641,708.00"
MIA - DEN,52975649266,MIA-LAX-DEN 2,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/52975649266,https://www.airlines-manager.com/aircraft/show/91126650,17:30,1:59,400,"$727,340.00","$641,708.00"
MIA - DEN,52985325430,MIA-LAX-DEN 5 E,A319-100,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/52985325430,https://www.airlines-manager.com/aircraft/show/115181776,22:15,6:59,216,"$426,658.00","$370,266.00"
MIA - DFW,52940291032,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/52940291032,https://www.airlines-manager.com/aircraft/show/91600936,3:30,9:59,310,"$408,495.00","$352,574.00"
MIA - DFW,52955473071,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/52955473071,https://www.airlines-manager.com/aircraft/show/91600935,10:00,16:29,310,"$408,495.00","$352,574.00"
MIA - DFW,52963026873,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/52963026873,https://www.airlines-manager.com/aircraft/show/91600938,11:00,17:29,310,"$408,495.00","$352,574.00"
MIA - DFW,52969613973,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/52969613973,https://www.airlines-manager.com/aircraft/show/82543123,15:45,22:14,112,"$192,362.00","$156,855.00"
MIA - DFW,52980970999,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/52980970999,https://www.airlines-manager.com/aircraft/show/91600939,21:30,3:59,310,"$408,495.00","$352,574.00"
MIA - DFW,52985325443,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/52985325443,https://www.airlines-manager.com/aircraft/show/91600937,22:30,4:59,310,"$408,495.00","$352,574.00"
MIA - DSM,52940290997,MIA-DSM-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/52940290997,https://www.airlines-manager.com/aircraft/show/113101230,3:00,10:14,320,"$455,884.00","$412,855.00"
MIA - DSM,52955472962,MIA-DSM-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/52955472962,https://www.airlines-manager.com/aircraft/show/100049776,8:45,15:59,112,"$216,016.00","$190,632.00"
MIA - DSM,52963027037,MIA-DSM-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/52963027037,https://www.airlines-manager.com/aircraft/show/111064081,13:00,20:14,320,"$455,884.00","$412,855.00"
MIA - DSM,52969613983,MIA-DSM-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/52969613983,https://www.airlines-manager.com/aircraft/show/113101228,16:00,23:14,320,"$455,884.00","$412,855.00"
MIA - DSM,52980970911,MIA-DSM-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/52980970911,https://www.airlines-manager.com/aircraft/show/113101233,20:15,3:29,320,"$455,884.00","$412,855.00"
MIA - DSS,52940290510,MIA 84B-7 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/52940290510,https://www.airlines-manager.com/aircraft/show/106676231,0:00,16:59,962,"$2,849,072.00","$2,603,060.00"
MIA - DSS,52963026941,MIA 84B-3 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/52963026941,https://www.airlines-manager.com/aircraft/show/106676227,12:00,4:59,962,"$2,849,072.00","$2,603,060.00"
MIA - DTW,52940290804,MIA-PDX-DTW 3,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/52940290804,https://www.airlines-manager.com/aircraft/show/89943713,1:30,7:59,320,"$411,192.00","$358,870.00"
MIA - DTW,52940290805,MIA-PDX-DTW 4,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/52940290805,https://www.airlines-manager.com/aircraft/show/89943712,2:30,8:59,320,"$411,192.00","$358,870.00"
MIA - DTW,52955473076,MIA-PDX-DTW 2,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/52955473076,https://www.airlines-manager.com/aircraft/show/89943714,10:00,16:29,320,"$411,192.00","$358,870.00"
MIA - DTW,52969613803,MIA-PDX-DTW 5,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/52969613803,https://www.airlines-manager.com/aircraft/show/89943711,14:00,20:29,320,"$411,192.00","$358,870.00"
MIA - DTW,52985325389,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/52985325389,https://www.airlines-manager.com/aircraft/show/107577220,21:45,4:14,0,"$108,819.00","$76,697.00"
MIA - DTW,52985325390,MIA-PDX-DTW 1,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/52985325390,https://www.airlines-manager.com/aircraft/show/89943715,22:30,4:59,320,"$411,192.00","$358,870.00"
MIA - ELP,52955472917,MIA-ELP-MCI 5 B,A319-100,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/52955472917,https://www.airlines-manager.com/aircraft/show/105093924,8:15,16:44,198,"$401,160.00","$365,149.00"
MIA - ELP,52955472918,MIA-ELP-MCI 1,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/52955472918,https://www.airlines-manager.com/aircraft/show/91806234,10:00,18:29,320,"$531,794.00","$481,685.00"
MIA - ELP,52969614013,MIA-ELP-MCI 3,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/52969614013,https://www.airlines-manager.com/aircraft/show/91806232,16:15,0:44,320,"$531,794.00","$481,685.00"
MIA - ELP,52975649219,MIA-ELP-MCI 4,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/52975649219,https://www.airlines-manager.com/aircraft/show/91806231,17:00,1:29,320,"$531,794.00","$481,685.00"
MIA - ELP,52985325520,MIA-ELP-MCI 2,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/52985325520,https://www.airlines-manager.com/aircraft/show/91806235,23:15,7:44,320,"$531,794.00","$481,685.00"
MIA - FAR,52940290690,MIA-FAR-TUL 3,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/52940290690,https://www.airlines-manager.com/aircraft/show/110883161,0:45,9:29,320,"$546,099.00","$497,277.00"
MIA - FAR,52955472801,MIA-FAR-TUL 4,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/52955472801,https://www.airlines-manager.com/aircraft/show/110883162,7:15,15:59,320,"$546,099.00","$497,277.00"
MIA - FAR,52963026810,MIA-FAR-TUL 1,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/52963026810,https://www.airlines-manager.com/aircraft/show/110883159,11:00,19:44,320,"$546,099.00","$497,277.00"
MIA - FAR,52969613992,MIA-FAR-TUL 2,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/52969613992,https://www.airlines-manager.com/aircraft/show/110883160,16:00,0:44,320,"$546,099.00","$497,277.00"
MIA - FAR,52975649340,MIA-FAR-TUL 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/52975649340,https://www.airlines-manager.com/aircraft/show/87169421,18:15,2:59,112,"$257,553.00","$228,139.00"
MIA - FAT,52955472921,MIA-FAT-MSO 4,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/52955472921,https://www.airlines-manager.com/aircraft/show/113101232,8:30,19:59,320,"$722,230.00","$662,016.00"
MIA - FAT,52963026828,MIA-FAT-MSO 1,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/52963026828,https://www.airlines-manager.com/aircraft/show/113101229,11:00,22:29,320,"$722,230.00","$662,016.00"
MIA - FAT,52980970760,MIA-FAT-MSO 2,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/52980970760,https://www.airlines-manager.com/aircraft/show/113101231,19:00,6:29,320,"$722,230.00","$662,016.00"
MIA - FAT,52985325421,MIA-FAT-MSO 3,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/52985325421,https://www.airlines-manager.com/aircraft/show/113101234,22:15,9:44,320,"$722,230.00","$662,016.00"
MIA - FPO,52940290621,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/52940290621,https://www.airlines-manager.com/aircraft/show/107121796,0:15,2:44,320,"$83,963.00","$59,322.00"
MIA - FPO,52940290622,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/52940290622,https://www.airlines-manager.com/aircraft/show/107121799,4:15,6:44,320,"$83,963.00","$59,322.00"
MIA - FPO,52955473003,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/52955473003,https://www.airlines-manager.com/aircraft/show/107121795,9:30,11:59,320,"$83,963.00","$59,322.00"
MIA - FPO,52963026842,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/52963026842,https://www.airlines-manager.com/aircraft/show/107121798,11:00,13:29,320,"$83,963.00","$59,322.00"
MIA - FPO,52975649273,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/52975649273,https://www.airlines-manager.com/aircraft/show/107121797,17:30,19:59,199,"$60,079.00","$35,850.00"
MIA - FSD,52940290755,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/52940290755,https://www.airlines-manager.com/aircraft/show/110883110,1:00,8:59,310,"$501,518.00","$460,185.00"
MIA - FSD,52940290756,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/52940290756,https://www.airlines-manager.com/aircraft/show/110883113,2:45,10:44,310,"$501,518.00","$460,185.00"
MIA - FSD,52969613836,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/52969613836,https://www.airlines-manager.com/aircraft/show/110883112,14:00,21:59,310,"$501,518.00","$460,185.00"
MIA - FSD,52969613837,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/52969613837,https://www.airlines-manager.com/aircraft/show/110883111,16:15,0:14,310,"$501,518.00","$460,185.00"
MIA - FSD,52985325405,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/52985325405,https://www.airlines-manager.com/aircraft/show/104353572,22:00,5:59,93,"$218,481.00","$192,256.00"
MIA - GRR,52940290491,MIA-RAP-GRR 5,ERJ-175,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/52940290491,https://www.airlines-manager.com/aircraft/show/116042630,0:00,6:44,112,"$199,795.00","$175,303.00"
MIA - GRR,52940290492,MIA-RAP-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/52940290492,https://www.airlines-manager.com/aircraft/show/116789623,2:15,8:59,320,"$423,092.00","$381,201.00"
MIA - GRR,52955473061,MIA-RAP-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/52955473061,https://www.airlines-manager.com/aircraft/show/116789624,10:00,16:44,320,"$423,092.00","$381,201.00"
MIA - GRR,52963026936,MIA-RAP-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/52963026936,https://www.airlines-manager.com/aircraft/show/116789622,12:00,18:44,320,"$423,092.00","$381,201.00"
MIA - GRR,52980970774,MIA-RAP-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/52980970774,https://www.airlines-manager.com/aircraft/show/116789625,19:00,1:44,320,"$423,092.00","$381,201.00"
MIA - HAV,52940291115,MIA-PDX-DTW 1,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/52940291115,https://www.airlines-manager.com/aircraft/show/89943715,5:00,7:59,320,"$131,404.00","$101,597.00"
MIA - HAV,52955472980,MIA-PDX-DTW 4,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/52955472980,https://www.airlines-manager.com/aircraft/show/89943712,9:00,11:59,320,"$131,404.00","$101,597.00"
MIA - HAV,52955472981,MIA-PDX-DTW 3,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/52955472981,https://www.airlines-manager.com/aircraft/show/89943713,10:00,12:59,320,"$131,404.00","$101,597.00"
MIA - HAV,52969800872,MIA-PDX-DTW 2,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/52969800872,https://www.airlines-manager.com/aircraft/show/89943714,16:30,19:29,320,"$131,404.00","$101,597.00"
MIA - HAV,52980970934,MIA-PDX-DTW 5,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/52980970934,https://www.airlines-manager.com/aircraft/show/89943711,20:30,23:29,288,"$119,815.00","$90,261.00"
MIA - IAD,52940291079,MIA-IAD-TUS 2,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/52940291079,https://www.airlines-manager.com/aircraft/show/97556720,4:15,9:59,310,"$360,630.00","$321,329.00"
MIA - IAD,52955472799,MIA-IAD-TUS 5,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/52955472799,https://www.airlines-manager.com/aircraft/show/97556716,7:15,12:59,310,"$360,630.00","$321,329.00"
MIA - IAD,52955472800,MIA-IAD-TUS 1,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/52955472800,https://www.airlines-manager.com/aircraft/show/97556721,10:00,15:44,310,"$360,630.00","$321,329.00"
MIA - IAD,52963026987,MIA-IAD-TUS 4,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/52963026987,https://www.airlines-manager.com/aircraft/show/97556718,13:00,18:44,310,"$360,630.00","$321,329.00"
MIA - IAD,52975649367,MIA-IAD-TUS 3,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/52975649367,https://www.airlines-manager.com/aircraft/show/97556719,18:45,0:29,310,"$360,630.00","$321,329.00"
MIA - IAD,52980971004,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/52980971004,https://www.airlines-manager.com/aircraft/show/107527976,21:30,3:14,0,"$96,338.00","$69,039.00"
MIA - ICT,52940290946,MIA-FAR-TUL 1,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/52940290946,https://www.airlines-manager.com/aircraft/show/110883159,2:30,9:29,320,"$446,898.00","$403,581.00"
MIA - ICT,52955472974,MIA-FAR-TUL 2,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/52955472974,https://www.airlines-manager.com/aircraft/show/110883160,9:00,15:59,320,"$446,898.00","$403,581.00"
MIA - ICT,52963026808,MIA-FAR-TUL 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/52963026808,https://www.airlines-manager.com/aircraft/show/87169421,11:00,18:14,112,"$212,498.00","$187,067.00"
MIA - ICT,52975649285,MIA-FAR-TUL 3,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/52975649285,https://www.airlines-manager.com/aircraft/show/110883161,17:45,0:44,320,"$446,898.00","$403,581.00"
MIA - ICT,52985325482,MIA-FAR-TUL 4,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/52985325482,https://www.airlines-manager.com/aircraft/show/110883162,22:45,5:44,320,"$446,898.00","$403,581.00"
MIA - IND,52940290940,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/52940290940,https://www.airlines-manager.com/aircraft/show/82323689,2:30,8:29,112,"$180,903.00","$157,215.00"
MIA - IND,52940290941,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/52940290941,https://www.airlines-manager.com/aircraft/show/99920623,3:15,9:14,320,"$382,667.00","$341,248.00"
MIA - IND,52955473036,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/52955473036,https://www.airlines-manager.com/aircraft/show/99920624,10:00,15:59,320,"$382,667.00","$341,248.00"
MIA - IND,52969614002,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/52969614002,https://www.airlines-manager.com/aircraft/show/99920625,16:00,21:59,320,"$382,667.00","$341,248.00"
MIA - IND,52985325453,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/52985325453,https://www.airlines-manager.com/aircraft/show/99920626,22:30,4:29,320,"$382,667.00","$341,248.00"
MIA - JAN,52940291132,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/52940291132,https://www.airlines-manager.com/aircraft/show/114912307,5:30,10:29,112,"$149,496.00","$130,601.00"
MIA - JAN,52955472925,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/52955472925,https://www.airlines-manager.com/aircraft/show/115493373,8:30,13:29,310,"$314,256.00","$284,924.00"
MIA - JAN,52969613841,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/52969613841,https://www.airlines-manager.com/aircraft/show/115493370,14:00,18:59,310,"$314,256.00","$284,924.00"
MIA - JAN,52980970903,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/52980970903,https://www.airlines-manager.com/aircraft/show/115493371,20:15,1:14,310,"$314,256.00","$284,924.00"
MIA - JAN,52985325469,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/52985325469,https://www.airlines-manager.com/aircraft/show/115493372,22:30,3:29,252,"$279,738.00","$251,586.00"
MIA - JAX,52940290993,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/52940290993,https://www.airlines-manager.com/aircraft/show/103684631,3:00,6:29,320,"$173,684.00","$144,645.00"
MIA - JAX,52955473089,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/52955473089,https://www.airlines-manager.com/aircraft/show/103684630,10:30,13:59,320,"$173,684.00","$144,645.00"
MIA - JAX,52969613758,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/52969613758,https://www.airlines-manager.com/aircraft/show/103365574,14:00,17:29,320,"$173,684.00","$144,645.00"
MIA - JAX,52980970814,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/52980970814,https://www.airlines-manager.com/aircraft/show/103684632,19:15,22:44,320,"$173,684.00","$144,645.00"
MIA - JAX,52985325431,MIA-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/52985325431,https://www.airlines-manager.com/aircraft/show/106339154,22:15,1:44,198,"$131,875.00","$111,979.00"
MIA - JFK,52940291141,MIA-JFK-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/52940291141,https://www.airlines-manager.com/aircraft/show/105308264,5:45,11:59,338,"$428,898.00","$376,422.00"
MIA - JFK,52940291142,MIA-JFK-PHX 6,ERJ-175,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/52940291142,https://www.airlines-manager.com/aircraft/show/82683137,6:45,12:59,112,"$187,046.00","$152,836.00"
MIA - JFK,52955473058,MIA-JFK-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/52955473058,https://www.airlines-manager.com/aircraft/show/105308267,10:00,16:14,338,"$428,898.00","$376,422.00"
MIA - JFK,52963026950,MIA-JFK-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/52963026950,https://www.airlines-manager.com/aircraft/show/105308265,12:00,18:14,338,"$428,898.00","$376,422.00"
MIA - JFK,52975649295,MIA-JFK-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/52975649295,https://www.airlines-manager.com/aircraft/show/105308266,18:00,0:14,338,"$428,898.00","$376,422.00"
MIA - JFK,52980970941,MIA-JFK-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/52980970941,https://www.airlines-manager.com/aircraft/show/105308268,20:45,2:59,338,"$428,898.00","$376,422.00"
MIA - JNB,52940290485,MIA 84A-4 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/52940290485,https://www.airlines-manager.com/aircraft/show/93686966,0:00,6:44,1124,"$6,002,258.00","$5,568,626.00"
MIA - JNB,52963027027,MIA 84A-7 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/52963027027,https://www.airlines-manager.com/aircraft/show/93776641,13:00,19:44,1124,"$6,002,258.00","$5,568,626.00"
MIA - LAS,52940290833,MIA-LAS-SEA 5,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/52940290833,https://www.airlines-manager.com/aircraft/show/105093929,1:30,11:59,338,"$716,751.00","$649,575.00"
MIA - LAS,52955473022,MIA-LAS-SEA 1,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/52955473022,https://www.airlines-manager.com/aircraft/show/105093925,10:00,20:29,338,"$716,751.00","$649,575.00"
MIA - LAS,52963026960,MIA-LAS-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/52963026960,https://www.airlines-manager.com/aircraft/show/113251304,12:00,22:29,198,"$497,024.00","$441,020.00"
MIA - LAS,52963026961,MIA-LAS-SEA 2,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/52963026961,https://www.airlines-manager.com/aircraft/show/105093926,13:00,23:29,338,"$716,751.00","$649,575.00"
MIA - LAS,52969613900,MIA-LAS-SEA 3,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/52969613900,https://www.airlines-manager.com/aircraft/show/105093927,15:00,1:29,338,"$716,751.00","$649,575.00"
MIA - LAS,52985325442,MIA-LAS-SEA 4,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/52985325442,https://www.airlines-manager.com/aircraft/show/105093928,22:30,8:59,338,"$716,751.00","$649,575.00"
MIA - LAX,52940290496,MIA-LAX-DEN 1,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/52940290496,https://www.airlines-manager.com/aircraft/show/91126649,0:00,10:59,400,"$917,510.00","$824,038.00"
MIA - LAX,52940290497,MIA-LAX-DEN 2,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/52940290497,https://www.airlines-manager.com/aircraft/show/91126650,2:00,12:59,400,"$917,510.00","$824,038.00"
MIA - LAX,52955473030,MIA-LAX-DEN 3,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/52955473030,https://www.airlines-manager.com/aircraft/show/91126651,10:00,20:59,400,"$917,510.00","$824,038.00"
MIA - LAX,52963026768,MIA-LAX-DEN 5 E,A319-100,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/52963026768,https://www.airlines-manager.com/aircraft/show/115181776,11:00,22:14,216,"$537,244.00","$475,881.00"
MIA - LAX,52969800874,MIA-LAX-DEN 4,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/52969800874,https://www.airlines-manager.com/aircraft/show/91126652,16:30,3:29,399,"$915,475.00","$822,079.00"
MIA - LEX,52940291000,MIA-CID-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/52940291000,https://www.airlines-manager.com/aircraft/show/116789653,3:00,8:29,310,"$348,591.00","$317,906.00"
MIA - LEX,52955473039,MIA-CID-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/52955473039,https://www.airlines-manager.com/aircraft/show/116789650,10:00,15:29,310,"$348,591.00","$317,906.00"
MIA - LEX,52969613885,MIA-CID-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/52969613885,https://www.airlines-manager.com/aircraft/show/116789651,15:00,20:29,310,"$348,591.00","$317,906.00"
MIA - LEX,52980970844,MIA-CID-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/52980970844,https://www.airlines-manager.com/aircraft/show/116789652,19:45,1:14,299,"$341,345.00","$310,926.00"
MIA - LIT,52940290925,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/52940290925,https://www.airlines-manager.com/aircraft/show/96692674,2:15,7:59,310,"$360,506.00","$328,119.00"
MIA - LIT,52940290926,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/52940290926,https://www.airlines-manager.com/aircraft/show/105601657,4:15,9:59,112,"$171,034.00","$149,959.00"
MIA - LIT,52955472914,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/52955472914,https://www.airlines-manager.com/aircraft/show/94886625,8:15,13:59,310,"$360,506.00","$328,119.00"
MIA - LIT,52969613905,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/52969613905,https://www.airlines-manager.com/aircraft/show/94886629,15:00,20:44,310,"$360,506.00","$328,119.00"
MIA - LIT,52980970995,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/52980970995,https://www.airlines-manager.com/aircraft/show/94886626,21:30,3:14,303,"$355,710.00","$323,504.00"
MIA - LOS,52940291157,MIA 84A-5 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/52940291157,https://www.airlines-manager.com/aircraft/show/93704215,6:45,4:59,1124,"$4,253,540.00","$3,954,093.00"
MIA - LOS,52980970857,MIA 84A-1 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/52980970857,https://www.airlines-manager.com/aircraft/show/93686969,19:45,17:59,1114,"$4,190,849.00","$3,893,976.00"
MIA - MBJ,52940290698,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/52940290698,https://www.airlines-manager.com/aircraft/show/104034460,0:45,4:59,228,"$191,732.00","$170,406.00"
MIA - MBJ,52940290699,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/52940290699,https://www.airlines-manager.com/aircraft/show/104034461,5:00,9:14,228,"$191,732.00","$170,406.00"
MIA - MBJ,52955472982,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/52955472982,https://www.airlines-manager.com/aircraft/show/107577220,9:00,13:14,0,"$65,765.00","$47,677.00"
MIA - MBJ,52955472983,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/52955472983,https://www.airlines-manager.com/aircraft/show/104034459,10:00,14:14,228,"$191,732.00","$170,406.00"
MIA - MBJ,52963026974,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/52963026974,https://www.airlines-manager.com/aircraft/show/104034457,12:45,16:59,228,"$191,732.00","$170,406.00"
MIA - MBJ,52975649224,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/52975649224,https://www.airlines-manager.com/aircraft/show/104034458,17:00,21:14,228,"$191,732.00","$170,406.00"
MIA - MBJ,52985325513,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/52985325513,https://www.airlines-manager.com/aircraft/show/99326789,23:00,3:14,228,"$191,732.00","$170,406.00"
MIA - MCI,52940290708,MIA-ELP-MCI 3,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/52940290708,https://www.airlines-manager.com/aircraft/show/91806232,0:45,7:44,320,"$446,777.00","$401,194.00"
MIA - MCI,52940290709,MIA-ELP-MCI 4,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/52940290709,https://www.airlines-manager.com/aircraft/show/91806231,1:30,8:29,320,"$446,777.00","$401,194.00"
MIA - MCI,52955473009,MIA-ELP-MCI 2,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/52955473009,https://www.airlines-manager.com/aircraft/show/91806235,10:00,16:59,320,"$446,777.00","$401,194.00"
MIA - MCI,52975649348,MIA-ELP-MCI 1,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/52975649348,https://www.airlines-manager.com/aircraft/show/91806234,18:30,1:29,320,"$446,777.00","$401,194.00"
MIA - MCI,52980970755,MIA-ELP-MCI 5 B,A319-100,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/52980970755,https://www.airlines-manager.com/aircraft/show/105093924,19:00,1:59,198,"$337,638.00","$305,246.00"
MIA - MCO,52940290603,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/52940290603,https://www.airlines-manager.com/aircraft/show/107763565,0:15,2:59,320,"$122,006.00","$84,784.00"
MIA - MCO,52940290604,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/52940290604,https://www.airlines-manager.com/aircraft/show/107467213,4:00,6:44,112,"$54,851.00","$35,679.00"
MIA - MCO,52940290605,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/52940290605,https://www.airlines-manager.com/aircraft/show/103534663,6:00,8:44,112,"$54,851.00","$35,679.00"
MIA - MCO,52955472993,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/52955472993,https://www.airlines-manager.com/aircraft/show/103534663,9:15,11:59,112,"$54,851.00","$35,679.00"
MIA - MCO,52955472994,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/52955472994,https://www.airlines-manager.com/aircraft/show/107763566,10:00,12:44,320,"$122,006.00","$84,784.00"
MIA - MCO,52963026766,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/52963026766,https://www.airlines-manager.com/aircraft/show/107763561,11:00,13:44,320,"$122,006.00","$84,784.00"
MIA - MCO,52975649284,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/52975649284,https://www.airlines-manager.com/aircraft/show/107763562,17:45,20:29,320,"$122,006.00","$84,784.00"
MIA - MEM,52940290524,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/52940290524,https://www.airlines-manager.com/aircraft/show/110582842,0:00,5:29,198,"$262,147.00","$234,378.00"
MIA - MEM,52940290525,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/52940290525,https://www.airlines-manager.com/aircraft/show/88239556,3:00,8:29,320,"$345,203.00","$305,614.00"
MIA - MEM,52955472833,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/52955472833,https://www.airlines-manager.com/aircraft/show/88494374,7:45,13:14,320,"$345,203.00","$305,614.00"
MIA - MEM,52969613778,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/52969613778,https://www.airlines-manager.com/aircraft/show/88494378,14:00,19:29,320,"$345,203.00","$305,614.00"
MIA - MEM,52980970885,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/52980970885,https://www.airlines-manager.com/aircraft/show/91806233,20:00,1:29,320,"$345,203.00","$305,614.00"
MIA - MHT,52940290776,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/52940290776,https://www.airlines-manager.com/aircraft/show/115493371,1:15,8:14,310,"$452,309.00","$414,054.00"
MIA - MHT,52940290777,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/52940290777,https://www.airlines-manager.com/aircraft/show/115493372,3:30,10:29,310,"$452,309.00","$414,054.00"
MIA - MHT,52963026791,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/52963026791,https://www.airlines-manager.com/aircraft/show/114912307,11:00,17:59,112,"$213,625.00","$188,428.00"
MIA - MHT,52969613809,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/52969613809,https://www.airlines-manager.com/aircraft/show/115493373,14:00,20:59,310,"$452,309.00","$414,054.00"
MIA - MHT,52980970778,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/52980970778,https://www.airlines-manager.com/aircraft/show/115493370,19:00,1:59,309,"$450,976.00","$412,765.00"
MIA - MKE,52940290617,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/52940290617,https://www.airlines-manager.com/aircraft/show/88494378,0:15,7:14,320,"$446,422.00","$402,295.00"
MIA - MKE,52940290618,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/52940290618,https://www.airlines-manager.com/aircraft/show/91806233,6:15,13:14,320,"$446,422.00","$402,295.00"
MIA - MKE,52963026813,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/52963026813,https://www.airlines-manager.com/aircraft/show/110582842,11:00,17:59,198,"$337,572.00","$306,137.00"
MIA - MKE,52969613770,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/52969613770,https://www.airlines-manager.com/aircraft/show/88239556,14:00,20:59,320,"$446,422.00","$402,295.00"
MIA - MKE,52975649364,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/52975649364,https://www.airlines-manager.com/aircraft/show/88494374,18:45,1:44,320,"$446,422.00","$402,295.00"
MIA - MSN,52940290856,MIA-RAP-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/52940290856,https://www.airlines-manager.com/aircraft/show/116789625,1:45,8:59,320,"$449,859.00","$407,286.00"
MIA - MSN,52955472830,MIA-RAP-GRR 5,ERJ-175,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/52955472830,https://www.airlines-manager.com/aircraft/show/116042630,7:45,14:59,112,"$213,263.00","$188,181.00"
MIA - MSN,52955472831,MIA-RAP-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/52955472831,https://www.airlines-manager.com/aircraft/show/116789623,10:00,17:14,320,"$449,859.00","$407,286.00"
MIA - MSN,52975649184,MIA-RAP-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/52975649184,https://www.airlines-manager.com/aircraft/show/116789624,16:45,23:59,320,"$449,859.00","$407,286.00"
MIA - MSN,52975649185,MIA-RAP-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/52975649185,https://www.airlines-manager.com/aircraft/show/116789622,18:45,1:59,320,"$449,859.00","$407,286.00"
MIA - MSO,52955472835,MIA-FAT-MSO 2,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/52955472835,https://www.airlines-manager.com/aircraft/show/113101231,7:45,18:59,320,"$697,087.00","$638,108.00"
MIA - MSO,52963026827,MIA-FAT-MSO 3,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/52963026827,https://www.airlines-manager.com/aircraft/show/113101234,11:00,22:14,320,"$697,087.00","$638,108.00"
MIA - MSO,52980970867,MIA-FAT-MSO 4,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/52980970867,https://www.airlines-manager.com/aircraft/show/113101232,20:00,7:14,320,"$697,087.00","$638,108.00"
MIA - MSO,52985325441,MIA-FAT-MSO 1,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/52985325441,https://www.airlines-manager.com/aircraft/show/113101229,22:30,9:44,320,"$697,087.00","$638,108.00"
MIA - MSP,52940290880,MIA-JFK-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/52940290880,https://www.airlines-manager.com/aircraft/show/105308267,2:00,9:59,338,"$541,699.00","$493,017.00"
MIA - MSP,52940290881,MIA-JFK-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/52940290881,https://www.airlines-manager.com/aircraft/show/105308268,3:00,10:59,338,"$541,699.00","$493,017.00"
MIA - MSP,52955473059,MIA-JFK-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/52955473059,https://www.airlines-manager.com/aircraft/show/105308266,10:00,17:59,338,"$541,699.00","$493,017.00"
MIA - MSP,52963027026,MIA-JFK-PHX 6,ERJ-175,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/52963027026,https://www.airlines-manager.com/aircraft/show/82683137,13:00,20:59,112,"$236,003.00","$203,045.00"
MIA - MSP,52975649332,MIA-JFK-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/52975649332,https://www.airlines-manager.com/aircraft/show/105308265,18:15,2:14,338,"$541,699.00","$493,017.00"
MIA - MSP,52985325375,MIA-JFK-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/52985325375,https://www.airlines-manager.com/aircraft/show/105308264,21:45,5:44,338,"$541,699.00","$493,017.00"
MIA - MSY,52940290839,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/52940290839,https://www.airlines-manager.com/aircraft/show/91806233,1:30,6:14,320,"$300,033.00","$264,910.00"
MIA - MSY,52940290840,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/52940290840,https://www.airlines-manager.com/aircraft/show/110582842,5:30,10:14,198,"$228,731.00","$204,238.00"
MIA - MSY,52955472934,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/52955472934,https://www.airlines-manager.com/aircraft/show/88239556,8:30,13:14,320,"$300,033.00","$264,910.00"
MIA - MSY,52969613766,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/52969613766,https://www.airlines-manager.com/aircraft/show/88494374,14:00,18:44,320,"$300,033.00","$264,910.00"
MIA - MSY,52980970837,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/52980970837,https://www.airlines-manager.com/aircraft/show/88494378,19:30,0:14,320,"$300,033.00","$264,910.00"
MIA - NAS,52940290918,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/52940290918,https://www.airlines-manager.com/aircraft/show/104034461,2:15,4:59,228,"$78,573.00","$60,602.00"
MIA - NAS,52955472810,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/52955472810,https://www.airlines-manager.com/aircraft/show/99326789,7:30,10:14,228,"$78,573.00","$60,602.00"
MIA - NAS,52955472811,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/52955472811,https://www.airlines-manager.com/aircraft/show/104034457,10:00,12:44,228,"$78,573.00","$60,602.00"
MIA - NAS,52963027052,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/52963027052,https://www.airlines-manager.com/aircraft/show/107577220,13:15,15:59,0,"$33,901.00","$19,692.00"
MIA - NAS,52969613859,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/52969613859,https://www.airlines-manager.com/aircraft/show/104034458,14:15,16:59,228,"$78,573.00","$60,602.00"
MIA - NAS,52975649356,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/52975649356,https://www.airlines-manager.com/aircraft/show/104034459,18:30,21:14,228,"$78,573.00","$60,602.00"
MIA - NAS,52985325397,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/52985325397,https://www.airlines-manager.com/aircraft/show/104034460,22:00,0:44,228,"$78,573.00","$60,602.00"
MIA - OAK,52940290737,MIA-OAK-SMF 5,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/52940290737,https://www.airlines-manager.com/aircraft/show/91198617,1:00,12:59,320,"$737,496.00","$671,604.00"
MIA - OAK,52963026863,MIA-OAK-SMF 1,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/52963026863,https://www.airlines-manager.com/aircraft/show/91198615,11:00,22:59,320,"$737,496.00","$671,604.00"
MIA - OAK,52963026864,MIA-OAK-SMF 2,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/52963026864,https://www.airlines-manager.com/aircraft/show/91198619,13:00,0:59,320,"$737,496.00","$671,604.00"
MIA - OAK,52969613922,MIA-OAK-SMF 3,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/52969613922,https://www.airlines-manager.com/aircraft/show/91198616,15:00,2:59,320,"$737,496.00","$671,604.00"
MIA - OAK,52985325509,MIA-OAK-SMF 4,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/52985325509,https://www.airlines-manager.com/aircraft/show/91198618,23:00,10:59,319,"$735,332.00","$669,527.00"
MIA - OKC,52940290848,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/52940290848,https://www.airlines-manager.com/aircraft/show/110883112,1:45,8:29,310,"$430,406.00","$392,775.00"
MIA - OKC,52940290849,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/52940290849,https://www.airlines-manager.com/aircraft/show/110883111,4:00,10:44,310,"$430,406.00","$392,775.00"
MIA - OKC,52955473056,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/52955473056,https://www.airlines-manager.com/aircraft/show/104353572,10:00,16:44,112,"$202,411.00","$177,700.00"
MIA - OKC,52963027048,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/52963027048,https://www.airlines-manager.com/aircraft/show/110883110,13:00,19:44,310,"$430,406.00","$392,775.00"
MIA - OKC,52969613868,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/52969613868,https://www.airlines-manager.com/aircraft/show/110883113,14:45,21:29,310,"$430,406.00","$392,775.00"
MIA - OMA,52940290936,MIA-BOI-BNA 1,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/52940290936,https://www.airlines-manager.com/aircraft/show/104133006,2:30,9:59,320,"$477,588.00","$432,510.00"
MIA - OMA,52940290937,MIA-BOI-BNA 4,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/52940290937,https://www.airlines-manager.com/aircraft/show/103775657,6:30,13:59,320,"$477,588.00","$432,510.00"
MIA - OMA,52955473013,MIA-BOI-BNA 3,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/52955473013,https://www.airlines-manager.com/aircraft/show/104020880,10:00,17:29,320,"$477,588.00","$432,510.00"
MIA - OMA,52969613946,MIA-BOI-BNA 2,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/52969613946,https://www.airlines-manager.com/aircraft/show/104022609,15:15,22:44,320,"$477,588.00","$432,510.00"
MIA - OMA,52975649238,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/52975649238,https://www.airlines-manager.com/aircraft/show/103534663,17:15,0:44,111,"$224,113.00","$197,589.00"
MIA - ONT,52940290645,MIA-RNO-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/52940290645,https://www.airlines-manager.com/aircraft/show/90489722,0:30,11:29,320,"$691,137.00","$629,529.00"
MIA - ONT,52940290646,MIA-RNO-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/52940290646,https://www.airlines-manager.com/aircraft/show/86238756,2:30,13:29,320,"$691,137.00","$629,529.00"
MIA - ONT,52963026853,MIA-RNO-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/52963026853,https://www.airlines-manager.com/aircraft/show/90489723,11:00,21:59,320,"$691,137.00","$629,529.00"
MIA - ONT,52969613779,MIA-RNO-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/52969613779,https://www.airlines-manager.com/aircraft/show/105223010,14:00,0:59,198,"$518,987.00","$474,247.00"
MIA - ONT,52985325451,MIA-RNO-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/52985325451,https://www.airlines-manager.com/aircraft/show/86238755,22:30,9:29,320,"$691,137.00","$629,529.00"
MIA - ORD,52940291005,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/52940291005,https://www.airlines-manager.com/aircraft/show/91600935,3:15,9:59,310,"$423,894.00","$364,089.00"
MIA - ORD,52940291006,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/52940291006,https://www.airlines-manager.com/aircraft/show/91600938,4:15,10:59,310,"$423,894.00","$364,089.00"
MIA - ORD,52955472975,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/52955472975,https://www.airlines-manager.com/aircraft/show/82543123,9:00,15:44,112,"$199,159.00","$161,182.00"
MIA - ORD,52963026874,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/52963026874,https://www.airlines-manager.com/aircraft/show/91600937,11:00,17:44,310,"$423,894.00","$364,089.00"
MIA - ORD,52969613876,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/52969613876,https://www.airlines-manager.com/aircraft/show/91600939,14:45,21:29,310,"$423,894.00","$364,089.00"
MIA - ORD,52969613877,MIA-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/52969613877,https://www.airlines-manager.com/aircraft/show/106339154,15:30,22:14,198,"$319,723.00","$271,827.00"
MIA - ORD,52980970939,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/52980970939,https://www.airlines-manager.com/aircraft/show/91600936,20:45,3:29,310,"$423,894.00","$364,089.00"
MIA - ORF,52940290619,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/52940290619,https://www.airlines-manager.com/aircraft/show/114912307,0:15,5:29,112,"$157,394.00","$137,421.00"
MIA - ORF,52940290620,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/52940290620,https://www.airlines-manager.com/aircraft/show/115493373,3:15,8:29,310,"$331,218.00","$300,268.00"
MIA - ORF,52955472906,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/52955472906,https://www.airlines-manager.com/aircraft/show/115493370,8:15,13:29,310,"$331,218.00","$300,268.00"
MIA - ORF,52969613944,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/52969613944,https://www.airlines-manager.com/aircraft/show/115493371,15:00,20:14,310,"$331,218.00","$300,268.00"
MIA - ORF,52975649251,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/52975649251,https://www.airlines-manager.com/aircraft/show/115493372,17:15,22:29,310,"$331,218.00","$300,268.00"
MIA - PDX,52955473077,MIA-PDX-DTW 1,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/52955473077,https://www.airlines-manager.com/aircraft/show/89943715,10:00,22:29,320,"$771,126.00","$700,809.00"
MIA - PDX,52963026989,MIA-PDX-DTW 3,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/52963026989,https://www.airlines-manager.com/aircraft/show/89943713,13:00,1:29,320,"$771,126.00","$700,809.00"
MIA - PDX,52969613798,MIA-PDX-DTW 4,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/52969613798,https://www.airlines-manager.com/aircraft/show/89943712,14:00,2:29,320,"$771,126.00","$700,809.00"
MIA - PDX,52980970841,MIA-PDX-DTW 2,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/52980970841,https://www.airlines-manager.com/aircraft/show/89943714,19:30,7:59,320,"$771,126.00","$700,809.00"
MIA - PDX,52985325541,MIA-PDX-DTW 5,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/52985325541,https://www.airlines-manager.com/aircraft/show/89943711,23:30,11:59,319,"$766,780.00","$696,572.00"
MIA - PHL,52940291070,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/52940291070,https://www.airlines-manager.com/aircraft/show/91600939,4:00,9:59,310,"$379,764.00","$337,989.00"
MIA - PHL,52940291071,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/52940291071,https://www.airlines-manager.com/aircraft/show/91600937,5:00,10:59,310,"$379,764.00","$337,989.00"
MIA - PHL,52955473070,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/52955473070,https://www.airlines-manager.com/aircraft/show/91600936,10:00,15:59,310,"$379,764.00","$337,989.00"
MIA - PHL,52969800887,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/52969800887,https://www.airlines-manager.com/aircraft/show/91600935,16:30,22:29,310,"$379,764.00","$337,989.00"
MIA - PHL,52975649269,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/52975649269,https://www.airlines-manager.com/aircraft/show/91600938,17:30,23:29,310,"$379,764.00","$337,989.00"
MIA - PHL,52985325429,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/52985325429,https://www.airlines-manager.com/aircraft/show/82543123,22:15,4:14,112,"$179,512.00","$152,674.00"
MIA - PHX,52940290641,MIA-JFK-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/52940290641,https://www.airlines-manager.com/aircraft/show/105308266,0:15,9:59,338,"$670,424.00","$611,719.00"
MIA - PHX,52940290642,MIA-JFK-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/52940290642,https://www.airlines-manager.com/aircraft/show/105308265,2:15,11:59,338,"$670,424.00","$611,719.00"
MIA - PHX,52963026856,MIA-JFK-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/52963026856,https://www.airlines-manager.com/aircraft/show/105308268,11:00,20:44,338,"$670,424.00","$611,719.00"
MIA - PHX,52963026857,MIA-JFK-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/52963026857,https://www.airlines-manager.com/aircraft/show/105308264,12:00,21:44,338,"$670,424.00","$611,719.00"
MIA - PHX,52969614014,MIA-JFK-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/52969614014,https://www.airlines-manager.com/aircraft/show/105308267,16:15,1:59,338,"$670,424.00","$611,719.00"
MIA - PHX,52980970973,MIA-JFK-PHX 6,ERJ-175,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/52980970973,https://www.airlines-manager.com/aircraft/show/82683137,21:00,6:44,112,"$290,027.00","$249,890.00"
MIA - PIT,52940291010,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/52940291010,https://www.airlines-manager.com/aircraft/show/99920624,3:15,9:14,320,"$381,300.00","$339,624.00"
MIA - PIT,52955473037,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/52955473037,https://www.airlines-manager.com/aircraft/show/99920625,10:00,15:59,320,"$381,300.00","$339,624.00"
MIA - PIT,52969800886,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/52969800886,https://www.airlines-manager.com/aircraft/show/99920626,16:30,22:29,320,"$381,300.00","$339,624.00"
MIA - PIT,52980970922,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/52980970922,https://www.airlines-manager.com/aircraft/show/82323689,20:30,2:29,112,"$180,240.00","$156,444.00"
MIA - PIT,52980970923,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/52980970923,https://www.airlines-manager.com/aircraft/show/99920623,21:15,3:14,320,"$381,300.00","$339,624.00"
MIA - PLS,52940291013,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/52940291013,https://www.airlines-manager.com/aircraft/show/99326789,3:15,7:29,228,"$205,499.00","$184,406.00"
MIA - PLS,52940291014,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/52940291014,https://www.airlines-manager.com/aircraft/show/104034460,5:00,9:14,228,"$205,499.00","$184,406.00"
MIA - PLS,52955473016,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/52955473016,https://www.airlines-manager.com/aircraft/show/104034458,10:00,14:14,228,"$205,499.00","$184,406.00"
MIA - PLS,52969613858,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/52969613858,https://www.airlines-manager.com/aircraft/show/104034459,14:15,18:29,228,"$205,499.00","$184,406.00"
MIA - PLS,52975649225,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/52975649225,https://www.airlines-manager.com/aircraft/show/104034457,17:00,21:14,228,"$205,499.00","$184,406.00"
MIA - PLS,52985325399,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/52985325399,https://www.airlines-manager.com/aircraft/show/104034461,22:00,2:14,228,"$205,499.00","$184,406.00"
MIA - POS,52963026968,MIA 84B-1 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/52963026968,https://www.airlines-manager.com/aircraft/show/106676225,12:30,20:29,962,"$1,335,155.00","$1,218,048.00"
MIA - POS,52969614000,MIA 84B-6 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/52969614000,https://www.airlines-manager.com/aircraft/show/106676230,16:00,23:59,726,"$1,097,183.00","$993,040.00"
MIA - PSP,52940290896,MIA-PSP-BFF 5,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/52940290896,https://www.airlines-manager.com/aircraft/show/116789630,2:00,12:44,320,"$659,194.00","$601,496.00"
MIA - PSP,52955473053,MIA-PSP-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/52955473053,https://www.airlines-manager.com/aircraft/show/116789631,10:00,20:44,320,"$659,194.00","$601,496.00"
MIA - PSP,52969613804,MIA-PSP-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/52969613804,https://www.airlines-manager.com/aircraft/show/116789634,14:00,0:44,320,"$659,194.00","$601,496.00"
MIA - PSP,52969613805,MIA-PSP-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/52969613805,https://www.airlines-manager.com/aircraft/show/116789632,14:15,0:59,320,"$659,194.00","$601,496.00"
MIA - PSP,52985325507,MIA-PSP-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/52985325507,https://www.airlines-manager.com/aircraft/show/116789633,23:00,9:44,239,"$555,616.00","$502,777.00"
MIA - PUJ,52940291031,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/52940291031,https://www.airlines-manager.com/aircraft/show/104034458,3:30,9:14,228,"$275,733.00","$249,113.00"
MIA - PUJ,52955473014,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/52955473014,https://www.airlines-manager.com/aircraft/show/104034461,10:00,15:44,228,"$275,733.00","$249,113.00"
MIA - PUJ,52969613976,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/52969613976,https://www.airlines-manager.com/aircraft/show/107577220,16:00,21:44,0,"$94,601.00","$71,006.00"
MIA - PUJ,52969613977,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/52969613977,https://www.airlines-manager.com/aircraft/show/104034460,16:15,21:59,228,"$275,733.00","$249,113.00"
MIA - PUJ,52975649237,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/52975649237,https://www.airlines-manager.com/aircraft/show/99326789,17:15,22:59,228,"$275,733.00","$249,113.00"
MIA - PUJ,52980970983,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/52980970983,https://www.airlines-manager.com/aircraft/show/104034457,21:15,2:59,228,"$275,733.00","$249,113.00"
MIA - PUJ,52985325395,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/52985325395,https://www.airlines-manager.com/aircraft/show/104034459,22:00,3:44,228,"$275,733.00","$249,113.00"
MIA - PVD,52940290780,MIA-BUR-PVD 3,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/52940290780,https://www.airlines-manager.com/aircraft/show/108834805,1:15,7:59,310,"$425,889.00","$389,660.00"
MIA - PVD,52955472798,MIA-BUR-PVD 5 B,A319-100,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/52955472798,https://www.airlines-manager.com/aircraft/show/108834807,7:15,13:59,198,"$321,404.00","$292,369.00"
MIA - PVD,52963026836,MIA-BUR-PVD 2,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/52963026836,https://www.airlines-manager.com/aircraft/show/108834804,11:00,17:44,310,"$425,889.00","$389,660.00"
MIA - PVD,52975649203,MIA-BUR-PVD 4,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/52975649203,https://www.airlines-manager.com/aircraft/show/108834806,17:00,23:44,310,"$425,889.00","$389,660.00"
MIA - PVD,52985325437,MIA-BUR-PVD 1,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/52985325437,https://www.airlines-manager.com/aircraft/show/108834803,22:15,4:59,310,"$425,889.00","$389,660.00"
MIA - PWM,52955472818,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/52955472818,https://www.airlines-manager.com/aircraft/show/94886629,7:30,14:59,310,"$466,181.00","$428,257.00"
MIA - PWM,52969613780,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/52969613780,https://www.airlines-manager.com/aircraft/show/94886626,14:00,21:29,310,"$466,181.00","$428,257.00"
MIA - PWM,52975649371,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/52975649371,https://www.airlines-manager.com/aircraft/show/96692674,18:45,2:14,310,"$466,181.00","$428,257.00"
MIA - PWM,52980970945,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/52980970945,https://www.airlines-manager.com/aircraft/show/105601657,20:45,4:14,112,"$220,116.00","$194,996.00"
MIA - PWM,52985325563,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/52985325563,https://www.airlines-manager.com/aircraft/show/94886625,23:45,7:14,310,"$466,181.00","$428,257.00"
MIA - RAP,52940290511,MIA-RAP-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/52940290511,https://www.airlines-manager.com/aircraft/show/116789624,0:00,8:59,320,"$561,258.00","$511,314.00"
MIA - RAP,52940290512,MIA-RAP-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/52940290512,https://www.airlines-manager.com/aircraft/show/116789622,2:00,10:59,320,"$561,258.00","$511,314.00"
MIA - RAP,52955473051,MIA-RAP-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/52955473051,https://www.airlines-manager.com/aircraft/show/116789625,10:00,18:59,320,"$561,258.00","$511,314.00"
MIA - RAP,52969613941,MIA-RAP-GRR 5,ERJ-175,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/52969613941,https://www.airlines-manager.com/aircraft/show/116042630,15:00,23:59,112,"$264,774.00","$234,580.00"
MIA - RAP,52975649242,MIA-RAP-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/52975649242,https://www.airlines-manager.com/aircraft/show/116789623,17:15,2:14,320,"$561,258.00","$511,314.00"
MIA - RDU,52940291093,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/52940291093,https://www.airlines-manager.com/aircraft/show/99920626,4:30,9:14,320,"$309,456.00","$273,280.00"
MIA - RDU,52955472923,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/52955472923,https://www.airlines-manager.com/aircraft/show/82323689,8:30,13:14,112,"$147,391.00","$127,258.00"
MIA - RDU,52955472924,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/52955472924,https://www.airlines-manager.com/aircraft/show/99920623,10:00,14:44,320,"$309,456.00","$273,280.00"
MIA - RDU,52969614001,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/52969614001,https://www.airlines-manager.com/aircraft/show/99920624,16:00,20:44,320,"$309,456.00","$273,280.00"
MIA - RDU,52985325407,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/52985325407,https://www.airlines-manager.com/aircraft/show/99920625,22:00,2:44,320,"$309,456.00","$273,280.00"
MIA - RIC,52955472941,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/52955472941,https://www.airlines-manager.com/aircraft/show/110883112,8:30,13:44,310,"$335,669.00","$304,387.00"
MIA - RIC,52963026831,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/52963026831,https://www.airlines-manager.com/aircraft/show/110883111,11:00,16:14,310,"$335,669.00","$304,387.00"
MIA - RIC,52975649188,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/52975649188,https://www.airlines-manager.com/aircraft/show/104353572,16:45,21:59,112,"$159,553.00","$139,339.00"
MIA - RIC,52980970851,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/52980970851,https://www.airlines-manager.com/aircraft/show/110883110,19:45,0:59,310,"$335,669.00","$304,387.00"
MIA - RIC,52980970852,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/52980970852,https://www.airlines-manager.com/aircraft/show/110883113,21:30,2:44,310,"$335,669.00","$304,387.00"
MIA - RNO,52940290741,MIA-RNO-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/52940290741,https://www.airlines-manager.com/aircraft/show/105223010,1:00,12:44,198,"$543,745.00","$497,908.00"
MIA - RNO,52963026799,MIA-RNO-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/52963026799,https://www.airlines-manager.com/aircraft/show/86238755,11:00,22:29,320,"$721,818.00","$658,967.00"
MIA - RNO,52963026800,MIA-RNO-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/52963026800,https://www.airlines-manager.com/aircraft/show/90489722,13:00,0:29,320,"$721,818.00","$658,967.00"
MIA - RNO,52969613894,MIA-RNO-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/52969613894,https://www.airlines-manager.com/aircraft/show/86238756,15:00,2:29,320,"$721,818.00","$658,967.00"
MIA - RNO,52985325414,MIA-RNO-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/52985325414,https://www.airlines-manager.com/aircraft/show/90489723,22:00,9:29,320,"$721,818.00","$658,967.00"
MIA - RSW,52940291066,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/52940291066,https://www.airlines-manager.com/aircraft/show/110114297,4:00,6:29,228,"$65,653.00","$47,400.00"
MIA - RSW,52955472989,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/52955472989,https://www.airlines-manager.com/aircraft/show/110114295,9:15,11:44,228,"$65,653.00","$47,400.00"
MIA - RSW,52955472990,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/52955472990,https://www.airlines-manager.com/aircraft/show/110114296,10:15,12:44,228,"$65,653.00","$47,400.00"
MIA - RSW,52969613789,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/52969613789,https://www.airlines-manager.com/aircraft/show/110114300,14:00,16:29,228,"$65,653.00","$47,400.00"
MIA - RSW,52980970961,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/52980970961,https://www.airlines-manager.com/aircraft/show/110114299,21:00,23:29,228,"$65,653.00","$47,400.00"
MIA - RSW,52985325512,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/52985325512,https://www.airlines-manager.com/aircraft/show/110114298,23:00,1:29,228,"$65,653.00","$47,400.00"
MIA - SAN,52940290842,MIA-BWI-YYZ 2,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/52940290842,https://www.airlines-manager.com/aircraft/show/92153440,1:45,12:44,310,"$685,956.00","$629,157.00"
MIA - SAN,52955473027,MIA-BWI-YYZ 3,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/52955473027,https://www.airlines-manager.com/aircraft/show/92153441,10:00,20:59,310,"$685,956.00","$629,157.00"
MIA - SAN,52963026933,MIA-BWI-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/52963026933,https://www.airlines-manager.com/aircraft/show/92137503,12:00,22:59,136,"$299,548.00","$265,809.00"
MIA - SAN,52975649236,MIA-BWI-YYZ 4,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/52975649236,https://www.airlines-manager.com/aircraft/show/92153442,17:00,3:59,310,"$685,956.00","$629,157.00"
MIA - SAN,52980970784,MIA-BWI-YYZ 5,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/52980970784,https://www.airlines-manager.com/aircraft/show/92153439,19:00,5:59,310,"$685,956.00","$629,157.00"
MIA - SAN,52985325489,MIA-BWI-YYZ 1,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/52985325489,https://www.airlines-manager.com/aircraft/show/92153443,22:45,9:44,310,"$685,956.00","$629,157.00"
MIA - SAT,52940291007,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/52940291007,https://www.airlines-manager.com/aircraft/show/107763562,3:15,9:44,320,"$410,377.00","$369,093.00"
MIA - SAT,52963026839,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/52963026839,https://www.airlines-manager.com/aircraft/show/107763565,11:00,17:29,320,"$410,377.00","$369,093.00"
MIA - SAT,52969613869,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/52969613869,https://www.airlines-manager.com/aircraft/show/107467213,14:45,21:14,112,"$193,629.00","$169,663.00"
MIA - SAT,52980970928,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/52980970928,https://www.airlines-manager.com/aircraft/show/107763561,20:30,2:59,320,"$410,377.00","$369,093.00"
MIA - SAT,52980970929,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/52980970929,https://www.airlines-manager.com/aircraft/show/107763566,20:45,3:14,320,"$410,377.00","$369,093.00"
MIA - SAV,52940290599,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/52940290599,https://www.airlines-manager.com/aircraft/show/110883111,0:15,3:59,310,"$214,539.00","$189,268.00"
MIA - SAV,52940290600,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/52940290600,https://www.airlines-manager.com/aircraft/show/104353572,6:00,9:44,112,"$100,203.00","$84,270.00"
MIA - SAV,52955472976,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/52955472976,https://www.airlines-manager.com/aircraft/show/110883110,9:00,12:44,310,"$214,539.00","$189,268.00"
MIA - SAV,52963026830,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/52963026830,https://www.airlines-manager.com/aircraft/show/110883113,11:00,14:44,310,"$214,539.00","$189,268.00"
MIA - SAV,52985325413,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/52985325413,https://www.airlines-manager.com/aircraft/show/110883112,22:00,1:44,267,"$197,041.00","$172,290.00"
MIA - SDF,52940290712,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/52940290712,https://www.airlines-manager.com/aircraft/show/94886629,0:45,6:29,310,"$354,785.00","$320,419.00"
MIA - SDF,52955472912,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/52955472912,https://www.airlines-manager.com/aircraft/show/94886626,8:15,13:59,310,"$354,785.00","$320,419.00"
MIA - SDF,52963026998,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/52963026998,https://www.airlines-manager.com/aircraft/show/96692674,13:00,18:44,310,"$354,785.00","$320,419.00"
MIA - SDF,52969613924,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/52969613924,https://www.airlines-manager.com/aircraft/show/105601657,15:00,20:44,112,"$167,653.00","$145,440.00"
MIA - SDF,52969613925,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/52969613925,https://www.airlines-manager.com/aircraft/show/107527976,15:45,21:29,0,"$94,272.00","$69,977.00"
MIA - SDF,52975649294,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/52975649294,https://www.airlines-manager.com/aircraft/show/94886625,18:00,23:44,310,"$346,820.00","$313,955.00"
MIA - SEA,52940290832,MIA-LAS-SEA 3,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/52940290832,https://www.airlines-manager.com/aircraft/show/105093927,1:30,13:59,338,"$830,741.00","$762,692.00"
MIA - SEA,52955473023,MIA-LAS-SEA 4,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/52955473023,https://www.airlines-manager.com/aircraft/show/105093928,10:00,22:29,338,"$830,741.00","$762,692.00"
MIA - SEA,52963027007,MIA-LAS-SEA 5,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/52963027007,https://www.airlines-manager.com/aircraft/show/105093929,13:00,1:29,338,"$830,741.00","$762,692.00"
MIA - SEA,52980970921,MIA-LAS-SEA 1,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/52980970921,https://www.airlines-manager.com/aircraft/show/105093925,20:30,8:59,338,"$830,741.00","$762,692.00"
MIA - SEA,52985325447,MIA-LAS-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/52985325447,https://www.airlines-manager.com/aircraft/show/113251304,22:30,11:14,198,"$575,598.00","$518,321.00"
MIA - SEA,52985325448,MIA-LAS-SEA 2,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/52985325448,https://www.airlines-manager.com/aircraft/show/105093926,23:30,11:59,338,"$830,741.00","$762,692.00"
MIA - SJC,52940290871,MIA-SJC-YYC 5,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/52940290871,https://www.airlines-manager.com/aircraft/show/107763563,1:45,13:44,320,"$731,402.00","$665,235.00"
MIA - SJC,52963026937,MIA-SJC-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/52963026937,https://www.airlines-manager.com/aircraft/show/107763569,12:00,23:59,320,"$731,402.00","$665,235.00"
MIA - SJC,52969613787,MIA-SJC-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/52969613787,https://www.airlines-manager.com/aircraft/show/107763568,14:00,1:59,320,"$731,402.00","$665,235.00"
MIA - SJC,52969613788,MIA-SJC-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/52969613788,https://www.airlines-manager.com/aircraft/show/107763567,16:00,3:59,320,"$731,402.00","$665,235.00"
MIA - SJC,52985325550,MIA-SJC-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/52985325550,https://www.airlines-manager.com/aircraft/show/107763564,23:45,11:44,320,"$731,402.00","$665,235.00"
MIA - SJU,52940291003,MIA-SJU-BOS 6 B,A319-100,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/52940291003,https://www.airlines-manager.com/aircraft/show/110582841,3:15,9:29,198,"$286,632.00","$257,567.00"
MIA - SJU,52955473087,MIA-SJU-BOS 2,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/52955473087,https://www.airlines-manager.com/aircraft/show/91352062,10:15,16:29,310,"$379,933.00","$343,658.00"
MIA - SJU,52963026966,MIA-SJU-BOS 3,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/52963026966,https://www.airlines-manager.com/aircraft/show/91352061,12:15,18:29,310,"$379,933.00","$343,658.00"
MIA - SJU,52975649334,MIA-SJU-BOS 4,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/52975649334,https://www.airlines-manager.com/aircraft/show/91352060,18:15,0:29,310,"$379,933.00","$343,658.00"
MIA - SJU,52980970797,MIA-SJU-BOS 5,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/52980970797,https://www.airlines-manager.com/aircraft/show/91352059,19:15,1:29,310,"$379,933.00","$343,658.00"
MIA - SJU,52985325490,MIA-SJU-BOS 1,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/52985325490,https://www.airlines-manager.com/aircraft/show/91352063,22:45,4:59,272,"$338,599.00","$303,684.00"
MIA - SKB,52940290819,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/52940290819,https://www.airlines-manager.com/aircraft/show/110114298,1:30,8:29,228,"$343,689.00","$314,160.00"
MIA - SKB,52940290820,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/52940290820,https://www.airlines-manager.com/aircraft/show/110114295,2:15,9:14,228,"$343,689.00","$314,160.00"
MIA - SKB,52940290821,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/52940290821,https://www.airlines-manager.com/aircraft/show/110114296,3:15,10:14,228,"$343,689.00","$314,160.00"
MIA - SKB,52940290822,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/52940290822,https://www.airlines-manager.com/aircraft/show/110114300,6:45,13:44,228,"$343,689.00","$314,160.00"
MIA - SKB,52969613790,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/52969613790,https://www.airlines-manager.com/aircraft/show/110114299,14:00,20:59,228,"$343,689.00","$314,160.00"
MIA - SKB,52980970953,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/52980970953,https://www.airlines-manager.com/aircraft/show/110114297,21:00,3:59,228,"$343,689.00","$314,160.00"
MIA - SLC,52940290507,MIA-SJU-BOS 2,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/52940290507,https://www.airlines-manager.com/aircraft/show/91352062,0:00,10:14,310,"$641,166.00","$583,580.00"
MIA - SLC,52940290508,MIA-SJU-BOS 4,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/52940290508,https://www.airlines-manager.com/aircraft/show/91352060,1:00,11:14,310,"$641,166.00","$583,580.00"
MIA - SLC,52940290509,MIA-SJU-BOS 3,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/52940290509,https://www.airlines-manager.com/aircraft/show/91352061,2:00,12:14,310,"$641,166.00","$583,580.00"
MIA - SLC,52955472978,MIA-SJU-BOS 5,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/52955472978,https://www.airlines-manager.com/aircraft/show/91352059,9:00,19:14,310,"$641,166.00","$583,580.00"
MIA - SLC,52955472979,MIA-SJU-BOS 6 B,A319-100,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/52955472979,https://www.airlines-manager.com/aircraft/show/110582841,10:00,20:14,198,"$481,851.00","$435,692.00"
MIA - SLC,52963026935,MIA-SJU-BOS 1,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/52963026935,https://www.airlines-manager.com/aircraft/show/91352063,12:00,22:14,310,"$641,166.00","$583,580.00"
MIA - SMF,52940290734,MIA-OAK-SMF 2,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/52940290734,https://www.airlines-manager.com/aircraft/show/91198619,1:00,12:59,320,"$731,523.00","$667,491.00"
MIA - SMF,52940290735,MIA-OAK-SMF 3,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/52940290735,https://www.airlines-manager.com/aircraft/show/91198616,3:00,14:59,320,"$731,523.00","$667,491.00"
MIA - SMF,52963026861,MIA-OAK-SMF 4,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/52963026861,https://www.airlines-manager.com/aircraft/show/91198618,11:00,22:59,320,"$731,523.00","$667,491.00"
MIA - SMF,52963026862,MIA-OAK-SMF 5,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/52963026862,https://www.airlines-manager.com/aircraft/show/91198617,13:00,0:59,320,"$731,523.00","$667,491.00"
MIA - SMF,52985325511,MIA-OAK-SMF 1,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/52985325511,https://www.airlines-manager.com/aircraft/show/91198615,23:00,10:59,320,"$731,523.00","$667,491.00"
MIA - STL,52940290836,MIA-ELP-MCI 1,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/52940290836,https://www.airlines-manager.com/aircraft/show/91806234,1:30,7:44,320,"$391,351.00","$347,778.00"
MIA - STL,52940290837,MIA-ELP-MCI 5 B,A319-100,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/52940290837,https://www.airlines-manager.com/aircraft/show/105093924,2:00,8:14,198,"$296,090.00","$265,331.00"
MIA - STL,52940290838,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/52940290838,https://www.airlines-manager.com/aircraft/show/107527976,3:15,9:29,0,"$102,630.00","$75,289.00"
MIA - STL,52955472926,MIA-ELP-MCI 4,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/52955472926,https://www.airlines-manager.com/aircraft/show/91806231,8:30,14:44,320,"$391,351.00","$347,778.00"
MIA - STL,52955472927,MIA-ELP-MCI 3,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/52955472927,https://www.airlines-manager.com/aircraft/show/91806232,10:00,16:14,320,"$391,351.00","$347,778.00"
MIA - STL,52975649220,MIA-ELP-MCI 2,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/52975649220,https://www.airlines-manager.com/aircraft/show/91806235,17:00,23:14,320,"$391,351.00","$347,778.00"
MIA - SXM,52940291155,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/52940291155,https://www.airlines-manager.com/aircraft/show/110114299,6:45,13:44,228,"$333,447.00","$304,641.00"
MIA - SXM,52969613791,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/52969613791,https://www.airlines-manager.com/aircraft/show/110114297,14:00,20:59,228,"$333,447.00","$304,641.00"
MIA - SXM,52969613792,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/52969613792,https://www.airlines-manager.com/aircraft/show/110114298,16:00,22:59,228,"$333,447.00","$304,641.00"
MIA - SXM,52980970811,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/52980970811,https://www.airlines-manager.com/aircraft/show/110114295,19:15,2:14,228,"$333,447.00","$304,641.00"
MIA - SXM,52980970812,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/52980970812,https://www.airlines-manager.com/aircraft/show/110114296,20:15,3:14,228,"$333,447.00","$304,641.00"
MIA - SXM,52985325559,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/52985325559,https://www.airlines-manager.com/aircraft/show/110114300,23:45,6:44,228,"$333,447.00","$304,641.00"
MIA - TPA,52940291118,MIA-BUR-PVD 1,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/52940291118,https://www.airlines-manager.com/aircraft/show/108834803,5:00,7:59,310,"$127,606.00","$101,590.00"
MIA - TPA,52963026835,MIA-BUR-PVD 3,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/52963026835,https://www.airlines-manager.com/aircraft/show/108834805,11:00,13:59,310,"$127,606.00","$101,590.00"
MIA - TPA,52975649204,MIA-BUR-PVD 5 B,A319-100,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/52975649204,https://www.airlines-manager.com/aircraft/show/108834807,17:00,19:59,198,"$95,228.00","$74,407.00"
MIA - TPA,52975649205,MIA-BUR-PVD 2,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/52975649205,https://www.airlines-manager.com/aircraft/show/108834804,17:45,20:44,310,"$127,606.00","$101,590.00"
MIA - TPA,52985325555,MIA-BUR-PVD 4,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/52985325555,https://www.airlines-manager.com/aircraft/show/108834806,23:45,2:44,310,"$127,606.00","$101,590.00"
MIA - TUL,52940290702,MIA-FAR-TUL 2,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/52940290702,https://www.airlines-manager.com/aircraft/show/110883160,0:45,7:29,320,"$415,831.00","$374,390.00"
MIA - TUL,52940290703,MIA-FAR-TUL 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/52940290703,https://www.airlines-manager.com/aircraft/show/87169421,3:00,9:44,112,"$196,143.00","$172,019.00"
MIA - TUL,52963026809,MIA-FAR-TUL 3,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/52963026809,https://www.airlines-manager.com/aircraft/show/110883161,11:00,17:44,320,"$415,831.00","$374,390.00"
MIA - TUL,52969613974,MIA-FAR-TUL 4,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/52969613974,https://www.airlines-manager.com/aircraft/show/110883162,16:00,22:44,320,"$415,831.00","$374,390.00"
MIA - TUL,52980970847,MIA-FAR-TUL 1,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/52980970847,https://www.airlines-manager.com/aircraft/show/110883159,19:45,2:29,320,"$415,831.00","$374,390.00"
MIA - TUS,52940290664,MIA-IAD-TUS 3,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/52940290664,https://www.airlines-manager.com/aircraft/show/97556719,0:30,9:59,310,"$591,201.00","$542,596.00"
MIA - TUS,52955473043,MIA-IAD-TUS 2,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/52955473043,https://www.airlines-manager.com/aircraft/show/97556720,10:00,19:29,310,"$591,201.00","$542,596.00"
MIA - TUS,52963026986,MIA-IAD-TUS 5,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/52963026986,https://www.airlines-manager.com/aircraft/show/97556716,13:00,22:29,310,"$591,201.00","$542,596.00"
MIA - TUS,52969613969,MIA-IAD-TUS 1,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/52969613969,https://www.airlines-manager.com/aircraft/show/97556721,15:45,1:14,310,"$591,201.00","$542,596.00"
MIA - TUS,52975649366,MIA-IAD-TUS 4,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/52975649366,https://www.airlines-manager.com/aircraft/show/97556718,18:45,4:14,310,"$591,201.00","$542,596.00"
MIA - TYS,52940291036,MIA-CID-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/52940291036,https://www.airlines-manager.com/aircraft/show/116789650,3:30,8:29,310,"$314,393.00","$285,000.00"
MIA - TYS,52955473029,MIA-CID-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/52955473029,https://www.airlines-manager.com/aircraft/show/116789651,10:00,14:59,310,"$314,393.00","$285,000.00"
MIA - TYS,52969613875,MIA-CID-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/52969613875,https://www.airlines-manager.com/aircraft/show/116789652,14:45,19:44,310,"$314,393.00","$285,000.00"
MIA - TYS,52985325392,MIA-CID-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/52985325392,https://www.airlines-manager.com/aircraft/show/116789653,22:00,2:59,310,"$314,393.00","$285,000.00"
MIA - YUL,52940291152,MIA-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/52940291152,https://www.airlines-manager.com/aircraft/show/113101225,6:30,13:59,400,"$628,133.00","$573,826.00"
MIA - YUL,52963026806,MIA-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/52963026806,https://www.airlines-manager.com/aircraft/show/113101226,11:00,18:29,400,"$628,133.00","$573,826.00"
MIA - YUL,52969613928,MIA-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/52969613928,https://www.airlines-manager.com/aircraft/show/113101227,15:00,22:29,400,"$628,133.00","$573,826.00"
MIA - YUL,52985325557,MIA-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/52985325557,https://www.airlines-manager.com/aircraft/show/113101224,23:45,7:14,400,"$628,133.00","$573,826.00"
MIA - YVR,52963026807,MIA-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/52963026807,https://www.airlines-manager.com/aircraft/show/113101224,11:00,23:44,400,"$1,044,351.00","$959,705.00"
MIA - YVR,52969613771,MIA-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/52969613771,https://www.airlines-manager.com/aircraft/show/113101225,14:00,2:44,400,"$1,044,351.00","$959,705.00"
MIA - YVR,52975649344,MIA-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/52975649344,https://www.airlines-manager.com/aircraft/show/113101226,18:30,7:14,400,"$1,044,351.00","$959,705.00"
MIA - YVR,52985325458,MIA-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/52985325458,https://www.airlines-manager.com/aircraft/show/113101227,22:30,11:14,400,"$1,044,351.00","$959,705.00"
MIA - YYC,52940290480,MIA-SJC-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/52940290480,https://www.airlines-manager.com/aircraft/show/107763569,0:00,11:44,320,"$729,933.00","$661,337.00"
MIA - YYC,52940290481,MIA-SJC-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/52940290481,https://www.airlines-manager.com/aircraft/show/107763568,2:00,13:44,320,"$729,933.00","$661,337.00"
MIA - YYC,52940290482,MIA-SJC-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/52940290482,https://www.airlines-manager.com/aircraft/show/107763567,4:00,15:44,320,"$729,933.00","$661,337.00"
MIA - YYC,52963026915,MIA-SJC-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/52963026915,https://www.airlines-manager.com/aircraft/show/107763564,12:00,23:44,320,"$729,933.00","$661,337.00"
MIA - YYC,52969613793,MIA-SJC-YYC 5,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/52969613793,https://www.airlines-manager.com/aircraft/show/107763563,14:00,1:44,320,"$729,933.00","$661,337.00"
MIA - YYZ,52940290967,MIA-BWI-YYZ 3,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/52940290967,https://www.airlines-manager.com/aircraft/show/92153441,2:45,9:44,310,"$441,106.00","$394,366.00"
MIA - YYZ,52940290968,MIA-BWI-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/52940290968,https://www.airlines-manager.com/aircraft/show/92137503,4:45,11:44,136,"$191,112.00","$163,254.00"
MIA - YYZ,52955473028,MIA-BWI-YYZ 4,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/52955473028,https://www.airlines-manager.com/aircraft/show/92153442,10:00,16:59,310,"$441,106.00","$394,366.00"
MIA - YYZ,52963026934,MIA-BWI-YYZ 5,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/52963026934,https://www.airlines-manager.com/aircraft/show/92153439,12:00,18:59,310,"$441,106.00","$394,366.00"
MIA - YYZ,52969613961,MIA-BWI-YYZ 1,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/52969613961,https://www.airlines-manager.com/aircraft/show/92153443,15:45,22:44,310,"$441,106.00","$394,366.00"
MIA - YYZ,52975649361,MIA-BWI-YYZ 2,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/52975649361,https://www.airlines-manager.com/aircraft/show/92153440,18:45,1:44,309,"$438,631.00","$391,942.00"
SFO - ABQ,52955472958,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/52955472958,https://www.airlines-manager.com/aircraft/show/105223003,8:45,14:14,198,"$265,632.00","$237,502.00"
SFO - ABQ,52955472959,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/52955472959,https://www.airlines-manager.com/aircraft/show/88239553,8:45,14:14,320,"$349,774.00","$309,723.00"
SFO - ABQ,52955472960,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/52955472960,https://www.airlines-manager.com/aircraft/show/88239557,10:30,15:59,320,"$349,774.00","$309,723.00"
SFO - ABQ,52969613917,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/52969613917,https://www.airlines-manager.com/aircraft/show/88239555,15:00,20:29,320,"$349,774.00","$309,723.00"
SFO - ABQ,52985325473,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/52985325473,https://www.airlines-manager.com/aircraft/show/88239554,22:45,4:14,320,"$349,774.00","$309,723.00"
SFO - ALB,52940290680,SFO-ALB-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/52940290680,https://www.airlines-manager.com/aircraft/show/112650097,0:30,12:29,310,"$733,708.00","$677,544.00"
SFO - ALB,52940290681,SFO-ALB-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/52940290681,https://www.airlines-manager.com/aircraft/show/112650096,5:30,17:29,310,"$733,708.00","$677,544.00"
SFO - ALB,52955472824,SFO-ALB-CAK 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/52955472824,https://www.airlines-manager.com/aircraft/show/112650090,7:30,19:29,198,"$548,951.00","$503,910.00"
SFO - ALB,52969613774,SFO-ALB-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/52969613774,https://www.airlines-manager.com/aircraft/show/112650099,14:00,1:59,310,"$733,708.00","$677,544.00"
SFO - ALB,52975649297,SFO-ALB-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/52975649297,https://www.airlines-manager.com/aircraft/show/112650098,18:00,5:59,310,"$733,708.00","$677,544.00"
SFO - ANC,52940290942,SFO-BWI-ANC 4,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/52940290942,https://www.airlines-manager.com/aircraft/show/106255848,2:30,12:14,338,"$662,539.00","$614,495.00"
SFO - ANC,52940290943,SFO-BWI-ANC 5,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/52940290943,https://www.airlines-manager.com/aircraft/show/106255849,3:30,13:14,338,"$662,539.00","$614,495.00"
SFO - ANC,52980970767,SFO-BWI-ANC 1,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/52980970767,https://www.airlines-manager.com/aircraft/show/106255845,19:00,4:44,338,"$662,539.00","$614,495.00"
SFO - ANC,52980970768,SFO-BWI-ANC 2,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/52980970768,https://www.airlines-manager.com/aircraft/show/106255846,20:00,5:44,338,"$662,539.00","$614,495.00"
SFO - ANC,52980970769,SFO-BWI-ANC 3,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/52980970769,https://www.airlines-manager.com/aircraft/show/106255847,21:00,6:44,338,"$662,539.00","$614,495.00"
SFO - ATL,52940291158,SFO 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/52940291158,https://www.airlines-manager.com/aircraft/show/85806724,6:45,16:29,932,"$1,616,312.00","$1,420,044.00"
SFO - ATL,52969613914,SFO-ATL-DFW S,A321-200,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/52969613914,https://www.airlines-manager.com/aircraft/show/106766698,15:00,1:29,232,"$628,868.00","$548,128.00"
SFO - ATL,52975649358,SFO 84A-2 E1,777-300,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/52975649358,https://www.airlines-manager.com/aircraft/show/86776211,18:30,4:14,853,"$1,518,662.00","$1,328,093.00"
SFO - ATL,52980970873,SFO-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/52980970873,https://www.airlines-manager.com/aircraft/show/107467212,20:00,6:29,56,"$233,364.00","$186,099.00"
SFO - AUS,52940290696,SFO-OGG-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/52940290696,https://www.airlines-manager.com/aircraft/show/92773481,0:45,8:44,310,"$500,966.00","$456,713.00"
SFO - AUS,52940290697,SFO-OGG-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/52940290697,https://www.airlines-manager.com/aircraft/show/92773480,2:45,10:44,310,"$500,966.00","$456,713.00"
SFO - AUS,52969613730,SFO-OGG-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/52969613730,https://www.airlines-manager.com/aircraft/show/92773479,13:30,21:29,310,"$500,966.00","$456,713.00"
SFO - AUS,52969613731,SFO-OGG-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/52969613731,https://www.airlines-manager.com/aircraft/show/92773478,15:30,23:29,310,"$500,966.00","$456,713.00"
SFO - AUS,52975649354,SFO-OGG-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/52975649354,https://www.airlines-manager.com/aircraft/show/92773477,18:30,2:29,310,"$500,966.00","$456,713.00"
SFO - BDL,52940291105,SFO-RSW-BDL 1,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/52940291105,https://www.airlines-manager.com/aircraft/show/84915098,4:45,16:59,320,"$741,674.00","$677,556.00"
SFO - BDL,52940291106,SFO-RSW-BDL 2,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/52940291106,https://www.airlines-manager.com/aircraft/show/84915099,6:45,18:59,320,"$741,674.00","$677,556.00"
SFO - BDL,52955472956,SFO-RSW-BDL 5,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/52955472956,https://www.airlines-manager.com/aircraft/show/84915102,8:45,20:59,320,"$741,674.00","$677,556.00"
SFO - BDL,52975649202,SFO-RSW-BDL 3,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/52975649202,https://www.airlines-manager.com/aircraft/show/84915100,17:00,5:14,320,"$741,674.00","$677,556.00"
SFO - BDL,52980970754,SFO-RSW-BDL 4,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/52980970754,https://www.airlines-manager.com/aircraft/show/84915101,19:00,7:14,320,"$741,674.00","$677,556.00"
SFO - BFF,52940290742,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/52940290742,https://www.airlines-manager.com/aircraft/show/114912306,1:00,7:14,112,"$183,532.00","$161,143.00"
SFO - BFF,52940290743,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/52940290743,https://www.airlines-manager.com/aircraft/show/114912268,2:15,8:29,310,"$389,547.00","$355,251.00"
SFO - BFF,52955472915,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/52955472915,https://www.airlines-manager.com/aircraft/show/114912263,8:15,14:29,310,"$389,547.00","$355,251.00"
SFO - BFF,52969613989,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/52969613989,https://www.airlines-manager.com/aircraft/show/114912264,16:00,22:14,310,"$389,547.00","$355,251.00"
SFO - BFF,52985325542,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/52985325542,https://www.airlines-manager.com/aircraft/show/114912267,23:30,5:44,310,"$389,547.00","$355,251.00"
SFO - BNA,52940290782,SFO-BNA-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/52940290782,https://www.airlines-manager.com/aircraft/show/103365580,1:15,10:59,320,"$605,500.00","$549,223.00"
SFO - BNA,52940290783,SFO-BNA-CMH 6,ERJ-175,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/52940290783,https://www.airlines-manager.com/aircraft/show/82323681,6:00,15:44,112,"$284,968.00","$251,108.00"
SFO - BNA,52963027039,SFO-BNA-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/52963027039,https://www.airlines-manager.com/aircraft/show/103365583,13:00,22:44,320,"$605,500.00","$549,223.00"
SFO - BNA,52969613930,SFO-BNA-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/52969613930,https://www.airlines-manager.com/aircraft/show/103365582,15:00,0:44,320,"$605,500.00","$549,223.00"
SFO - BNA,52969613931,SFO-BNA-CMH 5,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/52969613931,https://www.airlines-manager.com/aircraft/show/103365579,15:45,1:29,320,"$605,500.00","$549,223.00"
SFO - BNA,52985325524,SFO-BNA-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/52985325524,https://www.airlines-manager.com/aircraft/show/103365581,23:15,8:59,320,"$605,500.00","$549,223.00"
SFO - BOI,52940290772,SFO-CLE-MKE 2,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/52940290772,https://www.airlines-manager.com/aircraft/show/92519369,1:15,5:29,320,"$247,177.00","$216,442.00"
SFO - BOI,52955473007,SFO-CLE-MKE 1,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/52955473007,https://www.airlines-manager.com/aircraft/show/92519368,9:45,13:59,320,"$247,177.00","$216,442.00"
SFO - BOI,52969613873,SFO-CLE-MKE 4,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/52969613873,https://www.airlines-manager.com/aircraft/show/92519371,14:45,18:59,320,"$247,177.00","$216,442.00"
SFO - BOI,52969613874,SFO-CLE-MKE 3,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/52969613874,https://www.airlines-manager.com/aircraft/show/92519367,16:00,20:14,320,"$247,177.00","$216,442.00"
SFO - BOS,52940290606,SFO-BOS-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/52940290606,https://www.airlines-manager.com/aircraft/show/104864961,0:15,12:44,338,"$837,798.00","$774,441.00"
SFO - BOS,52963026916,SFO CARGO 2,737-700,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/52963026916,https://www.airlines-manager.com/aircraft/show/107573128,12:00,0:29,0,"$212,081.00","$161,178.00"
SFO - BOS,52963026917,SFO-BOS-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/52963026917,https://www.airlines-manager.com/aircraft/show/104901564,13:00,1:29,338,"$837,798.00","$774,441.00"
SFO - BOS,52969613763,SFO-BOS-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/52969613763,https://www.airlines-manager.com/aircraft/show/104870960,14:00,2:29,338,"$837,798.00","$774,441.00"
SFO - BOS,52969613764,SFO-BOS-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/52969613764,https://www.airlines-manager.com/aircraft/show/104874465,15:45,4:14,338,"$837,798.00","$774,441.00"
SFO - BOS,52980970909,SFO-BOS-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/52980970909,https://www.airlines-manager.com/aircraft/show/104901544,20:15,8:44,337,"$836,254.00","$772,959.00"
SFO - BTV,52940290535,SFO-BTV-LEX 4,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/52940290535,https://www.airlines-manager.com/aircraft/show/112650092,0:00,11:59,310,"$729,808.00","$673,823.00"
SFO - BTV,52940290536,SFO-BTV-LEX 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/52940290536,https://www.airlines-manager.com/aircraft/show/112650089,6:00,17:59,198,"$546,604.00","$501,705.00"
SFO - BTV,52969613827,SFO-BTV-LEX 1,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/52969613827,https://www.airlines-manager.com/aircraft/show/112650095,14:00,1:59,310,"$729,808.00","$673,823.00"
SFO - BTV,52975649320,SFO-BTV-LEX 2,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/52975649320,https://www.airlines-manager.com/aircraft/show/112650094,18:00,5:59,310,"$729,808.00","$673,823.00"
SFO - BTV,52980970872,SFO-BTV-LEX 3,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/52980970872,https://www.airlines-manager.com/aircraft/show/112650093,20:00,7:59,310,"$729,808.00","$673,823.00"
SFO - BUF,52940290806,SFO-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/52940290806,https://www.airlines-manager.com/aircraft/show/112650108,1:30,12:29,310,"$687,237.00","$633,779.00"
SFO - BUF,52940290807,SFO-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/52940290807,https://www.airlines-manager.com/aircraft/show/112650107,5:30,16:29,310,"$687,237.00","$633,779.00"
SFO - BUF,52955472805,SFO-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/52955472805,https://www.airlines-manager.com/aircraft/show/112650106,7:30,18:29,310,"$687,237.00","$633,779.00"
SFO - BUF,52963027045,SFO-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/52963027045,https://www.airlines-manager.com/aircraft/show/112650105,13:00,23:59,310,"$687,237.00","$633,779.00"
SFO - BUF,52975649310,SFO-PVD-BUF 5,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/52975649310,https://www.airlines-manager.com/aircraft/show/112650104,18:00,4:59,309,"$685,903.00","$632,509.00"
SFO - BUR,52940290921,SFO-SAV-JAN 1,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/52940290921,https://www.airlines-manager.com/aircraft/show/114912265,2:15,5:44,310,"$173,431.00","$150,921.00"
SFO - BUR,52940290922,SFO-SAV-JAN 4,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/52940290922,https://www.airlines-manager.com/aircraft/show/114912270,4:15,7:44,310,"$173,431.00","$150,921.00"
SFO - BUR,52963026897,SFO-SAV-JAN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/52963026897,https://www.airlines-manager.com/aircraft/show/114917486,11:30,14:59,198,"$130,695.00","$112,673.00"
SFO - BUR,52969613957,SFO-SAV-JAN 3,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/52969613957,https://www.airlines-manager.com/aircraft/show/114912269,15:30,18:59,310,"$173,431.00","$150,921.00"
SFO - BUR,52975649192,SFO-SAV-JAN 2,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/52975649192,https://www.airlines-manager.com/aircraft/show/114912266,17:00,20:29,310,"$173,431.00","$150,921.00"
SFO - BWI,52940290657,SFO CARGO 2,737-700,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/52940290657,https://www.airlines-manager.com/aircraft/show/107573128,0:30,11:59,0,"$197,304.00","$150,565.00"
SFO - BWI,52940290658,SFO-BWI-ANC 1,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/52940290658,https://www.airlines-manager.com/aircraft/show/106255845,4:45,16:14,338,"$785,047.00","$726,664.00"
SFO - BWI,52940290659,SFO-BWI-ANC 2,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/52940290659,https://www.airlines-manager.com/aircraft/show/106255846,5:45,17:14,338,"$785,047.00","$726,664.00"
SFO - BWI,52940290660,SFO-BWI-ANC 3,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/52940290660,https://www.airlines-manager.com/aircraft/show/106255847,6:45,18:14,338,"$785,047.00","$726,664.00"
SFO - BWI,52969613888,SFO-BWI-ANC 4,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/52969613888,https://www.airlines-manager.com/aircraft/show/106255848,15:00,2:29,338,"$785,047.00","$726,664.00"
SFO - BWI,52969613889,SFO-BWI-ANC 5,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/52969613889,https://www.airlines-manager.com/aircraft/show/106255849,16:00,3:29,337,"$781,076.00","$722,777.00"
SFO - CAK,52940290899,SFO-ALB-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/52940290899,https://www.airlines-manager.com/aircraft/show/112650099,2:00,12:29,310,"$657,846.00","$607,672.00"
SFO - CAK,52940290900,SFO-ALB-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/52940290900,https://www.airlines-manager.com/aircraft/show/112650098,6:00,16:29,310,"$657,846.00","$607,672.00"
SFO - CAK,52969613773,SFO-ALB-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/52969613773,https://www.airlines-manager.com/aircraft/show/112650097,14:00,0:29,310,"$657,846.00","$607,672.00"
SFO - CAK,52980970756,SFO-ALB-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/52980970756,https://www.airlines-manager.com/aircraft/show/112650096,19:00,5:29,310,"$657,846.00","$607,672.00"
SFO - CAK,52980970757,SFO-ALB-CAK 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/52980970757,https://www.airlines-manager.com/aircraft/show/112650090,21:00,7:29,198,"$494,257.00","$454,024.00"
SFO - CHS,52940290800,SFO-MHT-CHS 1,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/52940290800,https://www.airlines-manager.com/aircraft/show/114917465,1:30,12:44,320,"$701,576.00","$642,427.00"
SFO - CHS,52940290801,SFO-MHT-CHS 2,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/52940290801,https://www.airlines-manager.com/aircraft/show/114917464,5:30,16:44,320,"$701,576.00","$642,427.00"
SFO - CHS,52955472942,SFO-MHT-CHS 5 B,A319-100,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/52955472942,https://www.airlines-manager.com/aircraft/show/114912262,8:30,19:59,198,"$529,157.00","$485,900.00"
SFO - CHS,52963027032,SFO-MHT-CHS 3,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/52963027032,https://www.airlines-manager.com/aircraft/show/114917463,13:00,0:14,320,"$701,576.00","$642,427.00"
SFO - CHS,52975649194,SFO-MHT-CHS 4,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/52975649194,https://www.airlines-manager.com/aircraft/show/114266973,17:00,4:14,320,"$701,576.00","$642,427.00"
SFO - CLE,52940291134,SFO-CLE-MKE 2,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/52940291134,https://www.airlines-manager.com/aircraft/show/92519369,5:30,15:59,320,"$650,941.00","$593,222.00"
SFO - CLE,52940291135,SFO-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/52940291135,https://www.airlines-manager.com/aircraft/show/107467212,6:30,16:59,112,"$305,877.00","$270,736.00"
SFO - CLE,52955472812,SFO-CLE-MKE 5,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/52955472812,https://www.airlines-manager.com/aircraft/show/92519370,7:30,17:59,320,"$650,941.00","$593,222.00"
SFO - CLE,52969613765,SFO-CLE-MKE 1,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/52969613765,https://www.airlines-manager.com/aircraft/show/92519368,14:00,0:29,320,"$650,941.00","$593,222.00"
SFO - CLE,52980970781,SFO-CLE-MKE 4,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/52980970781,https://www.airlines-manager.com/aircraft/show/92519371,19:00,5:29,320,"$650,941.00","$593,222.00"
SFO - CLE,52980970782,SFO-CLE-MKE 3,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/52980970782,https://www.airlines-manager.com/aircraft/show/92519367,20:15,6:44,319,"$649,674.00","$592,013.00"
SFO - CLT,52940290537,SFO-IAD-CLT 3,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/52940290537,https://www.airlines-manager.com/aircraft/show/96135563,0:00,10:44,400,"$889,055.00","$809,090.00"
SFO - CLT,52940290538,SFO-IAD-CLT 4,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/52940290538,https://www.airlines-manager.com/aircraft/show/96135562,6:00,16:44,400,"$889,055.00","$809,090.00"
SFO - CLT,52963027054,SFO-IAD-CLT 1,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/52963027054,https://www.airlines-manager.com/aircraft/show/96135565,13:15,23:59,400,"$889,055.00","$809,090.00"
SFO - CLT,52969613945,SFO-IAD-CLT 5,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/52969613945,https://www.airlines-manager.com/aircraft/show/96135561,15:15,1:59,400,"$889,055.00","$809,090.00"
SFO - CLT,52975649250,SFO-IAD-CLT 2,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/52975649250,https://www.airlines-manager.com/aircraft/show/96135564,17:15,3:59,400,"$889,055.00","$809,090.00"
SFO - CMH,52940290704,SFO-BNA-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/52940290704,https://www.airlines-manager.com/aircraft/show/103365582,0:45,10:59,320,"$635,900.00","$578,603.00"
SFO - CMH,52940290705,SFO-BNA-CMH 5,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/52940290705,https://www.airlines-manager.com/aircraft/show/103365579,5:30,15:44,320,"$635,900.00","$578,603.00"
SFO - CMH,52963027038,SFO-BNA-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/52963027038,https://www.airlines-manager.com/aircraft/show/103365581,13:00,23:14,320,"$635,900.00","$578,603.00"
SFO - CMH,52969613932,SFO-BNA-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/52969613932,https://www.airlines-manager.com/aircraft/show/103365580,15:00,1:14,320,"$635,900.00","$578,603.00"
SFO - CMH,52969613933,SFO-BNA-CMH 6,ERJ-175,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/52969613933,https://www.airlines-manager.com/aircraft/show/82323681,15:45,1:59,112,"$299,410.00","$264,600.00"
SFO - CMH,52985325495,SFO-BNA-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/52985325495,https://www.airlines-manager.com/aircraft/show/103365583,22:45,8:59,320,"$635,900.00","$578,603.00"
SFO - CVG,52940291114,SFO-IND-CVG 3,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/52940291114,https://www.airlines-manager.com/aircraft/show/99316504,5:00,14:59,310,"$627,161.00","$574,134.00"
SFO - CVG,52955472784,SFO-IND-CVG 5,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/52955472784,https://www.airlines-manager.com/aircraft/show/99316502,7:00,16:59,310,"$627,161.00","$574,134.00"
SFO - CVG,52963027010,SFO-IND-CVG 2,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/52963027010,https://www.airlines-manager.com/aircraft/show/99316505,13:00,22:59,310,"$627,161.00","$574,134.00"
SFO - CVG,52969613886,SFO-IND-CVG 4,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/52969613886,https://www.airlines-manager.com/aircraft/show/99316503,15:00,0:59,310,"$627,161.00","$574,134.00"
SFO - CVG,52975649232,SFO-IND-CVG 6,ERJ-175,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/52975649232,https://www.airlines-manager.com/aircraft/show/99174346,17:00,2:59,112,"$294,087.00","$258,724.00"
SFO - CVG,52985325476,SFO-IND-CVG 1,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/52985325476,https://www.airlines-manager.com/aircraft/show/99316506,22:45,8:44,310,"$627,161.00","$574,134.00"
SFO - DEL,52940290539,SFO 168B-1 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/52940290539,https://www.airlines-manager.com/aircraft/show/86832727,0:00,5:29,1046,"$5,780,760.00","$5,362,191.00"
SFO - DEL,52940290540,SFO 168A-1 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/52940290540,https://www.airlines-manager.com/aircraft/show/86969602,2:00,7:29,1046,"$5,780,760.00","$5,362,191.00"
SFO - DEN,52940290634,SFO-IAH-MEX 5,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/52940290634,https://www.airlines-manager.com/aircraft/show/101045335,0:15,5:59,400,"$473,040.00","$405,076.00"
SFO - DEN,52940290635,SFO-IAH-MEX 1,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/52940290635,https://www.airlines-manager.com/aircraft/show/101045339,6:30,12:14,400,"$473,040.00","$405,076.00"
SFO - DEN,52955472939,SFO-IAH-MEX 4,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/52955472939,https://www.airlines-manager.com/aircraft/show/101045336,8:30,14:14,400,"$473,040.00","$405,076.00"
SFO - DEN,52963026975,SFO-IAH-MEX 3,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/52963026975,https://www.airlines-manager.com/aircraft/show/101045337,13:00,18:44,400,"$473,040.00","$405,076.00"
SFO - DEN,52985325428,SFO-IAH-MEX 2,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/52985325428,https://www.airlines-manager.com/aircraft/show/101045338,22:15,3:59,376,"$456,338.00","$388,975.00"
SFO - DFW,52940290841,SFO-ATL-DFW S,A321-200,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/52940290841,https://www.airlines-manager.com/aircraft/show/106766698,1:30,9:14,232,"$481,005.00","$419,772.00"
SFO - DFW,52969800888,SFO 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/52969800888,https://www.airlines-manager.com/aircraft/show/85806724,16:30,23:59,932,"$1,227,239.00","$1,082,144.00"
SFO - DFW,52985325526,SFO 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/52985325526,https://www.airlines-manager.com/aircraft/show/85537213,23:15,6:44,738,"$1,046,442.00","$910,929.00"
SFO - DSM,52940291096,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/52940291096,https://www.airlines-manager.com/aircraft/show/108410858,4:30,12:29,320,"$506,511.00","$460,673.00"
SFO - DSM,52963026981,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/52963026981,https://www.airlines-manager.com/aircraft/show/108410857,13:00,20:59,320,"$506,511.00","$460,673.00"
SFO - DSM,52969613882,SFO-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/52969613882,https://www.airlines-manager.com/aircraft/show/108466264,15:00,23:14,112,"$239,947.00","$212,526.00"
SFO - DSM,52985325480,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/52985325480,https://www.airlines-manager.com/aircraft/show/108410856,22:45,6:44,320,"$506,511.00","$460,673.00"
SFO - DSM,52985325481,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/52985325481,https://www.airlines-manager.com/aircraft/show/108410859,23:30,7:29,320,"$506,511.00","$460,673.00"
SFO - DTW,52940291094,SFO-ORD-DTW 4,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/52940291094,https://www.airlines-manager.com/aircraft/show/101045331,4:30,14:29,400,"$819,544.00","$744,421.00"
SFO - DTW,52940291095,SFO-ORD-DTW 3,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/52940291095,https://www.airlines-manager.com/aircraft/show/101045332,5:00,14:59,400,"$819,544.00","$744,421.00"
SFO - DTW,52969613936,SFO-ORD-DTW 2,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/52969613936,https://www.airlines-manager.com/aircraft/show/101045333,15:00,0:59,400,"$819,544.00","$744,421.00"
SFO - DTW,52975649191,SFO-ORD-DTW 5,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/52975649191,https://www.airlines-manager.com/aircraft/show/101045330,17:00,2:59,400,"$819,544.00","$744,421.00"
SFO - DTW,52985325402,SFO-ORD-DTW 1,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/52985325402,https://www.airlines-manager.com/aircraft/show/101045334,22:00,7:59,400,"$819,544.00","$744,421.00"
SFO - DXB,52940291133,SFO 168B-2 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/52940291133,https://www.airlines-manager.com/aircraft/show/87566901,5:30,12:29,1046,"$5,984,877.00","$5,519,689.00"
SFO - DXB,52955472825,SFO 168A-2 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/52955472825,https://www.airlines-manager.com/aircraft/show/86596991,7:30,14:29,1044,"$5,976,746.00","$5,512,060.00"
SFO - ELP,52940291138,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/52940291138,https://www.airlines-manager.com/aircraft/show/114912267,5:45,11:44,310,"$374,686.00","$339,914.00"
SFO - ELP,52955472793,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/52955472793,https://www.airlines-manager.com/aircraft/show/114912306,7:15,13:14,112,"$177,447.00","$154,853.00"
SFO - ELP,52955472794,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/52955472794,https://www.airlines-manager.com/aircraft/show/114912268,8:30,14:29,310,"$374,686.00","$339,914.00"
SFO - ELP,52969613880,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/52969613880,https://www.airlines-manager.com/aircraft/show/114912263,15:00,20:59,310,"$374,686.00","$339,914.00"
SFO - ELP,52985325434,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/52985325434,https://www.airlines-manager.com/aircraft/show/114912264,22:15,4:14,310,"$374,686.00","$339,914.00"
SFO - FAT,52940290884,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/52940290884,https://www.airlines-manager.com/aircraft/show/108410857,2:00,4:44,320,"$95,282.00","$71,086.00"
SFO - FAT,52963026898,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/52963026898,https://www.airlines-manager.com/aircraft/show/108410856,11:45,14:29,320,"$95,282.00","$71,086.00"
SFO - FAT,52963026899,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/52963026899,https://www.airlines-manager.com/aircraft/show/108410859,13:00,15:44,320,"$95,282.00","$71,086.00"
SFO - FAT,52975649319,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/52975649319,https://www.airlines-manager.com/aircraft/show/108410858,18:00,20:44,320,"$95,282.00","$71,086.00"
SFO - FAT,52985325534,SFO-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/52985325534,https://www.airlines-manager.com/aircraft/show/108466264,23:15,1:59,66,"$33,258.00","$21,014.00"
SFO - FLL,52940290542,SFO-FLL-TPA 2,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/52940290542,https://www.airlines-manager.com/aircraft/show/97955543,0:15,12:14,320,"$736,242.00","$668,214.00"
SFO - FLL,52940290543,SFO-FLL-TPA 4,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/52940290543,https://www.airlines-manager.com/aircraft/show/97955541,4:15,16:14,320,"$736,242.00","$668,214.00"
SFO - FLL,52955472814,SFO-FLL-TPA 6 B,A319-100,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/52955472814,https://www.airlines-manager.com/aircraft/show/97900729,7:30,19:44,198,"$553,688.00","$504,209.00"
SFO - FLL,52963026985,SFO-FLL-TPA 1,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/52963026985,https://www.airlines-manager.com/aircraft/show/97955544,13:00,0:59,320,"$736,242.00","$668,214.00"
SFO - FLL,52975649234,SFO-FLL-TPA 3,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/52975649234,https://www.airlines-manager.com/aircraft/show/97955542,17:00,4:59,320,"$736,242.00","$668,214.00"
SFO - FLL,52980970896,SFO-FLL-TPA 5,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/52980970896,https://www.airlines-manager.com/aircraft/show/97955540,20:00,7:59,320,"$736,242.00","$668,214.00"
SFO - FSD,52940290649,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/52940290649,https://www.airlines-manager.com/aircraft/show/107160378,0:30,7:59,320,"$469,741.00","$426,459.00"
SFO - FSD,52940290650,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/52940290650,https://www.airlines-manager.com/aircraft/show/107132310,2:00,9:29,112,"$222,363.00","$196,644.00"
SFO - FSD,52940290651,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/52940290651,https://www.airlines-manager.com/aircraft/show/107160381,3:00,10:29,320,"$469,741.00","$426,459.00"
SFO - FSD,52955472893,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/52955472893,https://www.airlines-manager.com/aircraft/show/107160380,8:00,15:29,320,"$469,741.00","$426,459.00"
SFO - FSD,52969613978,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/52969613978,https://www.airlines-manager.com/aircraft/show/107160379,16:00,23:29,284,"$437,206.00","$395,280.00"
SFO - HKG,52980970986,SFO 168B-6 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/52980970986,https://www.airlines-manager.com/aircraft/show/87083947,21:15,23:59,1046,"$5,254,512.00","$4,855,923.00"
SFO - HKG,52985325536,SFO 168A-6 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/52985325536,https://www.airlines-manager.com/aircraft/show/88032836,23:15,1:59,1046,"$5,254,512.00","$4,855,923.00"
SFO - IAD,52940290504,SFO-IAD-CLT 1,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/52940290504,https://www.airlines-manager.com/aircraft/show/96135565,0:00,11:14,400,"$907,875.00","$829,857.00"
SFO - IAD,52940290505,SFO-IAD-CLT 5,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/52940290505,https://www.airlines-manager.com/aircraft/show/96135561,4:00,15:14,400,"$907,875.00","$829,857.00"
SFO - IAD,52940290506,SFO-IAD-CLT 2,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/52940290506,https://www.airlines-manager.com/aircraft/show/96135564,6:00,17:14,400,"$907,875.00","$829,857.00"
SFO - IAD,52963026972,SFO-IAD-CLT 3,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/52963026972,https://www.airlines-manager.com/aircraft/show/96135563,12:45,23:59,400,"$907,875.00","$829,857.00"
SFO - IAD,52975649178,SFO-IAD-CLT 4,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/52975649178,https://www.airlines-manager.com/aircraft/show/96135562,16:45,3:59,400,"$907,875.00","$829,857.00"
SFO - IAH,52940291110,SFO-IAH-MEX 2,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/52940291110,https://www.airlines-manager.com/aircraft/show/101045338,4:45,12:59,400,"$691,469.00","$621,661.00"
SFO - IAH,52940291111,SFO-IAH-MEX 5,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/52940291111,https://www.airlines-manager.com/aircraft/show/101045335,6:45,14:59,400,"$691,469.00","$621,661.00"
SFO - IAH,52963026977,SFO-IAH-MEX 1,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/52963026977,https://www.airlines-manager.com/aircraft/show/101045339,13:00,21:14,400,"$691,469.00","$621,661.00"
SFO - IAH,52969613938,SFO-IAH-MEX 4,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/52969613938,https://www.airlines-manager.com/aircraft/show/101045336,15:00,23:14,400,"$691,469.00","$621,661.00"
SFO - IAH,52980970826,SFO-IAH-MEX 3,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/52980970826,https://www.airlines-manager.com/aircraft/show/101045337,19:30,3:44,400,"$691,469.00","$621,661.00"
SFO - ICN,52940290633,SFO 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/52940290633,https://www.airlines-manager.com/aircraft/show/85537213,0:15,22:44,932,"$3,589,022.00","$3,238,999.00"
SFO - ICN,52963027029,SFO-ICN B,787-10,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/52963027029,https://www.airlines-manager.com/aircraft/show/110213648,13:00,10:59,592,"$2,626,713.00","$2,428,840.00"
SFO - ICN,52980970899,SFO 84A-1 E1,777-300,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/52980970899,https://www.airlines-manager.com/aircraft/show/86776212,20:00,18:29,864,"$3,396,667.00","$3,059,670.00"
SFO - ICT,52940290693,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/52940290693,https://www.airlines-manager.com/aircraft/show/114912263,0:45,8:14,310,"$467,186.00","$428,051.00"
SFO - ICT,52955472841,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/52955472841,https://www.airlines-manager.com/aircraft/show/114912264,8:00,15:29,310,"$467,186.00","$428,051.00"
SFO - ICT,52969613988,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/52969613988,https://www.airlines-manager.com/aircraft/show/114912267,16:00,23:29,310,"$467,186.00","$428,051.00"
SFO - ICT,52975649260,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/52975649260,https://www.airlines-manager.com/aircraft/show/114912306,17:30,0:59,112,"$220,576.00","$194,720.00"
SFO - ICT,52975649261,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/52975649261,https://www.airlines-manager.com/aircraft/show/114912268,18:45,2:14,310,"$467,186.00","$428,051.00"
SFO - IND,52940291124,SFO-IND-CVG 4,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/52940291124,https://www.airlines-manager.com/aircraft/show/99316503,5:15,14:59,310,"$602,897.00","$552,847.00"
SFO - IND,52955472791,SFO-IND-CVG 6,ERJ-175,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/52955472791,https://www.airlines-manager.com/aircraft/show/99174346,7:15,16:59,112,"$283,062.00","$249,648.00"
SFO - IND,52963027044,SFO-IND-CVG 1,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/52963027044,https://www.airlines-manager.com/aircraft/show/99316506,13:00,22:44,310,"$602,897.00","$552,847.00"
SFO - IND,52969613887,SFO-IND-CVG 3,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/52969613887,https://www.airlines-manager.com/aircraft/show/99316504,15:00,0:44,310,"$602,897.00","$552,847.00"
SFO - IND,52975649233,SFO-IND-CVG 5,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/52975649233,https://www.airlines-manager.com/aircraft/show/99316502,17:00,2:44,310,"$602,897.00","$552,847.00"
SFO - IND,52985325517,SFO-IND-CVG 2,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/52985325517,https://www.airlines-manager.com/aircraft/show/99316505,23:00,8:44,310,"$602,897.00","$552,847.00"
SFO - JAN,52940290919,SFO-SAV-JAN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/52940290919,https://www.airlines-manager.com/aircraft/show/114917486,2:15,11:29,198,"$437,554.00","$401,109.00"
SFO - JAN,52940290920,SFO-SAV-JAN 3,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/52940290920,https://www.airlines-manager.com/aircraft/show/114912269,6:15,15:29,310,"$581,291.00","$535,834.00"
SFO - JAN,52955472828,SFO-SAV-JAN 2,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/52955472828,https://www.airlines-manager.com/aircraft/show/114912266,7:45,16:59,310,"$581,291.00","$535,834.00"
SFO - JAN,52975649193,SFO-SAV-JAN 1,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/52975649193,https://www.airlines-manager.com/aircraft/show/114912265,17:00,2:14,310,"$581,291.00","$535,834.00"
SFO - JAN,52980970789,SFO-SAV-JAN 4,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/52980970789,https://www.airlines-manager.com/aircraft/show/114912270,19:00,4:14,310,"$581,291.00","$535,834.00"
SFO - JAX,52940291147,SFO-JAX-SAT 5,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/52940291147,https://www.airlines-manager.com/aircraft/show/86377315,6:00,17:14,310,"$701,428.00","$646,359.00"
SFO - JAX,52963027041,SFO-JAX-SAT 1,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/52963027041,https://www.airlines-manager.com/aircraft/show/86375568,13:00,0:14,310,"$701,428.00","$646,359.00"
SFO - JAX,52969613884,SFO-JAX-SAT 2,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/52969613884,https://www.airlines-manager.com/aircraft/show/86371267,15:00,2:14,310,"$701,428.00","$646,359.00"
SFO - JAX,52980970967,SFO-JAX-SAT 3,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/52980970967,https://www.airlines-manager.com/aircraft/show/86385102,21:00,8:14,310,"$701,428.00","$646,359.00"
SFO - JAX,52985325502,SFO-JAX-SAT 4,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/52985325502,https://www.airlines-manager.com/aircraft/show/86378760,23:00,10:14,310,"$701,428.00","$646,359.00"
SFO - JFK,52940290732,SFO-MIA-JFK 4,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/52940290732,https://www.airlines-manager.com/aircraft/show/89233034,1:00,12:59,400,"$960,770.00","$862,272.00"
SFO - JFK,52955472764,SFO-MIA-JFK 5,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/52955472764,https://www.airlines-manager.com/aircraft/show/89233035,7:00,18:59,400,"$960,770.00","$862,272.00"
SFO - JFK,52963026994,SFO-MIA-JFK 1,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/52963026994,https://www.airlines-manager.com/aircraft/show/89233032,13:00,0:59,400,"$960,770.00","$862,272.00"
SFO - JFK,52969614010,SFO-MIA-JFK 2,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/52969614010,https://www.airlines-manager.com/aircraft/show/84622093,16:00,3:59,400,"$960,770.00","$862,272.00"
SFO - JFK,52980970786,SFO-MIA-JFK 3,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/52980970786,https://www.airlines-manager.com/aircraft/show/89233031,19:00,6:59,399,"$959,303.00","$860,872.00"
SFO - KOA,52940290954,SFO-KOA-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/52940290954,https://www.airlines-manager.com/aircraft/show/112650101,2:45,13:59,310,"$702,732.00","$647,860.00"
SFO - KOA,52940290955,SFO-KOA-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/52940290955,https://www.airlines-manager.com/aircraft/show/112650100,4:45,15:59,310,"$702,732.00","$647,860.00"
SFO - KOA,52963026991,SFO-KOA-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/52963026991,https://www.airlines-manager.com/aircraft/show/112650091,13:00,0:14,198,"$527,431.00","$483,432.00"
SFO - KOA,52975649196,SFO-KOA-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/52975649196,https://www.airlines-manager.com/aircraft/show/112650103,17:00,4:14,310,"$702,732.00","$647,860.00"
SFO - KOA,52980970870,SFO-KOA-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/52980970870,https://www.airlines-manager.com/aircraft/show/112650102,20:00,7:14,309,"$701,349.00","$646,542.00"
SFO - LAS,52940291146,SFO-BOS-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/52940291146,https://www.airlines-manager.com/aircraft/show/104901564,6:00,9:44,338,"$216,955.00","$178,262.00"
SFO - LAS,52955472765,SFO-BOS-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/52955472765,https://www.airlines-manager.com/aircraft/show/104870960,7:00,10:44,338,"$216,955.00","$178,262.00"
SFO - LAS,52963026920,SFO CARGO 1,737-700,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/52963026920,https://www.airlines-manager.com/aircraft/show/107343113,12:00,15:44,0,"$55,715.00","$30,525.00"
SFO - LAS,52963026921,SFO-BOS-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/52963026921,https://www.airlines-manager.com/aircraft/show/104874465,12:00,15:44,338,"$216,955.00","$178,262.00"
SFO - LAS,52969800882,SFO-BOS-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/52969800882,https://www.airlines-manager.com/aircraft/show/104901544,16:30,20:14,338,"$216,955.00","$178,262.00"
SFO - LAS,52980970930,SFO-BOS-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/52980970930,https://www.airlines-manager.com/aircraft/show/104864961,20:30,0:14,338,"$216,955.00","$178,262.00"
SFO - LAX,52940290892,SFO-PHL-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/52940290892,https://www.airlines-manager.com/aircraft/show/97900730,2:00,5:29,198,"$133,274.00","$101,260.00"
SFO - LAX,52940290893,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/52940290893,https://www.airlines-manager.com/aircraft/show/92390872,4:30,7:59,320,"$175,700.00","$128,489.00"
SFO - LAX,52955472815,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/52955472815,https://www.airlines-manager.com/aircraft/show/92390869,7:30,10:59,320,"$175,700.00","$128,489.00"
SFO - LAX,52955472816,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/52955472816,https://www.airlines-manager.com/aircraft/show/92390870,8:15,11:44,320,"$175,700.00","$128,489.00"
SFO - LAX,52963026931,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/52963026931,https://www.airlines-manager.com/aircraft/show/92390873,12:00,15:29,320,"$175,700.00","$128,489.00"
SFO - LAX,52975649173,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/52975649173,https://www.airlines-manager.com/aircraft/show/92390871,16:45,20:14,320,"$175,700.00","$128,489.00"
SFO - LEX,52940290885,SFO-BTV-LEX 1,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/52940290885,https://www.airlines-manager.com/aircraft/show/112650095,2:00,11:59,310,"$622,706.00","$575,258.00"
SFO - LEX,52940290886,SFO-BTV-LEX 2,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/52940290886,https://www.airlines-manager.com/aircraft/show/112650094,6:00,15:59,310,"$622,706.00","$575,258.00"
SFO - LEX,52955472897,SFO-BTV-LEX 3,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/52955472897,https://www.airlines-manager.com/aircraft/show/112650093,8:00,17:59,310,"$622,706.00","$575,258.00"
SFO - LEX,52969613772,SFO-BTV-LEX 4,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/52969613772,https://www.airlines-manager.com/aircraft/show/112650092,14:00,23:59,310,"$622,706.00","$575,258.00"
SFO - LEX,52980970869,SFO-BTV-LEX 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/52980970869,https://www.airlines-manager.com/aircraft/show/112650089,20:00,5:59,198,"$468,497.00","$430,451.00"
SFO - LIT,52940290923,SFO-SDF-LIT 3,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/52940290923,https://www.airlines-manager.com/aircraft/show/94886627,2:15,10:59,310,"$540,445.00","$497,417.00"
SFO - LIT,52940290924,SFO-SDF-LIT 5,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/52940290924,https://www.airlines-manager.com/aircraft/show/106453498,3:15,11:59,310,"$540,445.00","$497,417.00"
SFO - LIT,52969613783,SFO-SDF-LIT 2,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/52969613783,https://www.airlines-manager.com/aircraft/show/94886628,14:00,22:44,310,"$540,445.00","$497,417.00"
SFO - LIT,52969613784,SFO-SDF-LIT 4,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/52969613784,https://www.airlines-manager.com/aircraft/show/106453500,15:00,23:44,310,"$540,445.00","$497,417.00"
SFO - LIT,52985325548,SFO-SDF-LIT 1,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/52985325548,https://www.airlines-manager.com/aircraft/show/106453499,23:45,8:29,309,"$537,351.00","$494,392.00"
SFO - MCI,52955472778,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/52955472778,https://www.airlines-manager.com/aircraft/show/88239554,7:00,14:59,320,"$504,987.00","$456,061.00"
SFO - MCI,52975649215,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/52975649215,https://www.airlines-manager.com/aircraft/show/105223003,17:00,0:59,198,"$380,878.00","$345,870.00"
SFO - MCI,52975649216,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/52975649216,https://www.airlines-manager.com/aircraft/show/88239553,17:00,0:59,320,"$504,987.00","$456,061.00"
SFO - MCI,52975649217,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/52975649217,https://www.airlines-manager.com/aircraft/show/88239557,18:45,2:44,320,"$504,987.00","$456,061.00"
SFO - MCI,52985325535,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/52985325535,https://www.airlines-manager.com/aircraft/show/88239555,23:15,7:14,320,"$504,987.00","$456,061.00"
SFO - MCO,52940291021,SFO-MCO-MSP 2,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/52940291021,https://www.airlines-manager.com/aircraft/show/105367367,3:30,14:59,338,"$791,737.00","$726,768.00"
SFO - MCO,52940291022,SFO-MCO-MSP 5,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/52940291022,https://www.airlines-manager.com/aircraft/show/105367364,4:30,15:59,338,"$791,737.00","$726,768.00"
SFO - MCO,52969613918,SFO-MCO-MSP 1,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/52969613918,https://www.airlines-manager.com/aircraft/show/105367368,15:00,2:29,338,"$791,737.00","$726,768.00"
SFO - MCO,52975649221,SFO-MCO-MSP 4,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/52975649221,https://www.airlines-manager.com/aircraft/show/105367365,17:00,4:29,338,"$791,737.00","$726,768.00"
SFO - MCO,52980970818,SFO-MCO-MSP 3,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/52980970818,https://www.airlines-manager.com/aircraft/show/105367366,19:15,6:44,338,"$791,737.00","$726,768.00"
SFO - MCO,52980970819,SFO CARGO 1,737-700,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/52980970819,https://www.airlines-manager.com/aircraft/show/107343113,20:30,7:59,0,"$198,809.00","$148,162.00"
SFO - MEM,52940290957,SFO-MEM-PIT 4,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/52940290957,https://www.airlines-manager.com/aircraft/show/98788934,2:45,11:59,310,"$574,608.00","$525,884.00"
SFO - MEM,52940290958,SFO-MEM-PIT 6,ERJ-175,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/52940290958,https://www.airlines-manager.com/aircraft/show/98675305,5:45,14:59,112,"$269,751.00","$237,369.00"
SFO - MEM,52963027012,SFO-MEM-PIT 1,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/52963027012,https://www.airlines-manager.com/aircraft/show/98788937,13:00,22:14,310,"$574,608.00","$525,884.00"
SFO - MEM,52969613991,SFO-MEM-PIT 3,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/52969613991,https://www.airlines-manager.com/aircraft/show/98788935,16:00,1:14,310,"$574,608.00","$525,884.00"
SFO - MEM,52980970766,SFO-MEM-PIT 5,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/52980970766,https://www.airlines-manager.com/aircraft/show/98788933,19:00,4:14,310,"$574,608.00","$525,884.00"
SFO - MEM,52985325553,SFO-MEM-PIT 2,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/52985325553,https://www.airlines-manager.com/aircraft/show/98788936,23:45,8:59,308,"$569,679.00","$521,091.00"
SFO - MEX,52940291050,SFO-IAH-MEX 3,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/52940291050,https://www.airlines-manager.com/aircraft/show/101045337,3:45,12:59,400,"$769,654.00","$698,787.00"
SFO - MEX,52963026976,SFO-IAH-MEX 2,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/52963026976,https://www.airlines-manager.com/aircraft/show/101045338,13:00,22:14,400,"$769,654.00","$698,787.00"
SFO - MEX,52969613937,SFO-IAH-MEX 5,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/52969613937,https://www.airlines-manager.com/aircraft/show/101045335,15:00,0:14,400,"$769,654.00","$698,787.00"
SFO - MEX,52980970989,SFO-IAH-MEX 1,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/52980970989,https://www.airlines-manager.com/aircraft/show/101045339,21:15,6:29,400,"$769,654.00","$698,787.00"
SFO - MEX,52985325519,SFO-IAH-MEX 4,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/52985325519,https://www.airlines-manager.com/aircraft/show/101045336,23:15,8:29,369,"$719,609.00","$650,634.00"
SFO - MHT,52940290624,SFO-MHT-CHS 3,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/52940290624,https://www.airlines-manager.com/aircraft/show/114917463,0:15,12:44,320,"$758,657.00","$694,672.00"
SFO - MHT,52940290625,SFO-MHT-CHS 4,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/52940290625,https://www.airlines-manager.com/aircraft/show/114266973,4:15,16:44,320,"$758,657.00","$694,672.00"
SFO - MHT,52963027033,SFO-MHT-CHS 1,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/52963027033,https://www.airlines-manager.com/aircraft/show/114917465,13:00,1:29,320,"$758,657.00","$694,672.00"
SFO - MHT,52975649195,SFO-MHT-CHS 2,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/52975649195,https://www.airlines-manager.com/aircraft/show/114917464,17:00,5:29,320,"$758,657.00","$694,672.00"
SFO - MHT,52980970866,SFO-MHT-CHS 5 B,A319-100,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/52980970866,https://www.airlines-manager.com/aircraft/show/114912262,20:00,8:29,197,"$566,531.00","$519,708.00"
SFO - MIA,52940290730,SFO-MIA-JFK 1,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/52940290730,https://www.airlines-manager.com/aircraft/show/89233032,1:00,12:59,400,"$954,235.00","$864,392.00"
SFO - MIA,52940290731,SFO-MIA-JFK 2,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/52940290731,https://www.airlines-manager.com/aircraft/show/84622093,4:00,15:59,400,"$954,235.00","$864,392.00"
SFO - MIA,52955472777,SFO-MIA-JFK 3,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/52955472777,https://www.airlines-manager.com/aircraft/show/89233031,7:00,18:59,400,"$954,235.00","$864,392.00"
SFO - MIA,52963026992,SFO-MIA-JFK 4,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/52963026992,https://www.airlines-manager.com/aircraft/show/89233034,13:00,0:59,400,"$954,235.00","$864,392.00"
SFO - MIA,52980970763,SFO-MIA-JFK 5,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/52980970763,https://www.airlines-manager.com/aircraft/show/89233035,19:00,6:59,398,"$948,142.00","$858,483.00"
SFO - MKE,52940290666,SFO-CLE-MKE 1,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/52940290666,https://www.airlines-manager.com/aircraft/show/92519368,0:30,9:44,320,"$583,475.00","$530,707.00"
SFO - MKE,52940290667,SFO-CLE-MKE 4,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/52940290667,https://www.airlines-manager.com/aircraft/show/92519371,5:30,14:44,320,"$583,475.00","$530,707.00"
SFO - MKE,52940290668,SFO-CLE-MKE 3,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/52940290668,https://www.airlines-manager.com/aircraft/show/92519367,6:45,15:59,320,"$583,475.00","$530,707.00"
SFO - MKE,52969613987,SFO-CLE-MKE 2,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/52969613987,https://www.airlines-manager.com/aircraft/show/92519369,16:00,1:14,320,"$583,475.00","$530,707.00"
SFO - MKE,52975649299,SFO-CLE-MKE 5,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/52975649299,https://www.airlines-manager.com/aircraft/show/92519370,18:00,3:14,320,"$583,475.00","$530,707.00"
SFO - MSO,52940291154,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/52940291154,https://www.airlines-manager.com/aircraft/show/108410856,6:45,11:44,320,"$321,201.00","$287,490.00"
SFO - MSO,52955472813,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/52955472813,https://www.airlines-manager.com/aircraft/show/108410859,7:30,12:29,320,"$321,201.00","$287,490.00"
SFO - MSO,52963026983,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/52963026983,https://www.airlines-manager.com/aircraft/show/108410858,13:00,17:59,320,"$321,201.00","$287,490.00"
SFO - MSO,52980970964,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/52980970964,https://www.airlines-manager.com/aircraft/show/108410857,21:00,1:59,265,"$287,819.00","$255,246.00"
SFO - MSP,52940290930,SFO-MCO-MSP 1,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/52940290930,https://www.airlines-manager.com/aircraft/show/105367368,2:30,10:44,338,"$570,131.00","$520,693.00"
SFO - MSP,52940290931,SFO-MCO-MSP 4,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/52940290931,https://www.airlines-manager.com/aircraft/show/105367365,4:30,12:44,338,"$570,131.00","$520,693.00"
SFO - MSP,52940290932,SFO-MCO-MSP 3,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/52940290932,https://www.airlines-manager.com/aircraft/show/105367366,6:45,14:59,338,"$570,131.00","$520,693.00"
SFO - MSP,52969613920,SFO-MCO-MSP 2,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/52969613920,https://www.airlines-manager.com/aircraft/show/105367367,15:00,23:14,338,"$570,131.00","$520,693.00"
SFO - MSP,52969613921,SFO-MCO-MSP 5,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/52969613921,https://www.airlines-manager.com/aircraft/show/105367364,16:00,0:14,336,"$565,663.00","$516,324.00"
SFO - MSY,52940290994,SFO-MSY-STL 6,ERJ-175,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/52940290994,https://www.airlines-manager.com/aircraft/show/103534666,3:00,12:29,112,"$278,431.00","$245,757.00"
SFO - MSY,52940290995,SFO-MSY-STL 2,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/52940290995,https://www.airlines-manager.com/aircraft/show/98075266,6:00,15:29,320,"$591,122.00","$536,888.00"
SFO - MSY,52955472902,SFO-MSY-STL 4,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/52955472902,https://www.airlines-manager.com/aircraft/show/98075264,8:00,17:29,320,"$591,122.00","$536,888.00"
SFO - MSY,52963027017,SFO-MSY-STL 1,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/52963027017,https://www.airlines-manager.com/aircraft/show/98075267,13:00,22:29,320,"$591,122.00","$536,888.00"
SFO - MSY,52980970977,SFO-MSY-STL 3,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/52980970977,https://www.airlines-manager.com/aircraft/show/98075265,21:15,6:44,320,"$591,122.00","$536,888.00"
SFO - MSY,52985325522,SFO-MSY-STL 5,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/52985325522,https://www.airlines-manager.com/aircraft/show/98075263,23:15,8:44,320,"$591,122.00","$536,888.00"
SFO - NRT,52940290499,SFO 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/52940290499,https://www.airlines-manager.com/aircraft/show/85806656,0:00,20:29,932,"$3,433,901.00","$3,109,245.00"
SFO - NRT,52940290500,SFO 84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/52940290500,https://www.airlines-manager.com/aircraft/show/86776210,4:15,0:44,932,"$3,433,901.00","$3,109,245.00"
SFO - OGG,52940290947,SFO-OGG-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/52940290947,https://www.airlines-manager.com/aircraft/show/92773477,2:30,13:44,310,"$694,596.00","$642,034.00"
SFO - OGG,52969613732,SFO-OGG-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/52969613732,https://www.airlines-manager.com/aircraft/show/92773481,13:30,0:44,310,"$694,596.00","$642,034.00"
SFO - OGG,52969613733,SFO-OGG-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/52969613733,https://www.airlines-manager.com/aircraft/show/92773480,15:30,2:44,310,"$694,596.00","$642,034.00"
SFO - OGG,52980970993,SFO-OGG-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/52980970993,https://www.airlines-manager.com/aircraft/show/92773479,21:30,8:44,310,"$694,596.00","$642,034.00"
SFO - OGG,52985325545,SFO-OGG-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/52985325545,https://www.airlines-manager.com/aircraft/show/92773478,23:30,10:44,310,"$694,596.00","$642,034.00"
SFO - OKC,52940290665,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/52940290665,https://www.airlines-manager.com/aircraft/show/107160380,0:30,7:59,320,"$474,216.00","$429,974.00"
SFO - OKC,52955472894,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/52955472894,https://www.airlines-manager.com/aircraft/show/107160379,8:00,15:29,320,"$474,216.00","$429,974.00"
SFO - OKC,52975649207,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/52975649207,https://www.airlines-manager.com/aircraft/show/107160378,17:00,0:29,320,"$474,216.00","$429,974.00"
SFO - OKC,52975649208,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/52975649208,https://www.airlines-manager.com/aircraft/show/107132310,18:30,1:59,112,"$223,965.00","$197,822.00"
SFO - OKC,52980970838,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/52980970838,https://www.airlines-manager.com/aircraft/show/107160381,19:30,2:59,320,"$474,216.00","$429,974.00"
SFO - OMA,52940290722,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/52940290722,https://www.airlines-manager.com/aircraft/show/88239553,1:00,8:44,320,"$482,833.00","$437,761.00"
SFO - OMA,52940290723,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/52940290723,https://www.airlines-manager.com/aircraft/show/105223003,1:00,8:44,198,"$365,160.00","$332,825.00"
SFO - OMA,52940290724,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/52940290724,https://www.airlines-manager.com/aircraft/show/88239557,2:45,10:29,320,"$482,833.00","$437,761.00"
SFO - OMA,52955472802,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/52955472802,https://www.airlines-manager.com/aircraft/show/88239555,7:15,14:59,320,"$482,833.00","$437,761.00"
SFO - OMA,52969613923,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/52969613923,https://www.airlines-manager.com/aircraft/show/88239554,15:00,22:44,320,"$482,833.00","$437,761.00"
SFO - ONT,52940291102,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/52940291102,https://www.airlines-manager.com/aircraft/show/107160379,4:30,7:59,320,"$179,754.00","$149,621.00"
SFO - ONT,52963027014,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/52963027014,https://www.airlines-manager.com/aircraft/show/107160378,13:00,16:29,320,"$179,754.00","$149,621.00"
SFO - ONT,52969613892,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/52969613892,https://www.airlines-manager.com/aircraft/show/107132310,15:00,18:29,112,"$82,962.00","$66,839.00"
SFO - ONT,52969613893,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/52969613893,https://www.airlines-manager.com/aircraft/show/107160381,16:00,19:29,320,"$179,754.00","$149,621.00"
SFO - ONT,52980970975,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/52980970975,https://www.airlines-manager.com/aircraft/show/107160380,21:00,0:29,320,"$179,754.00","$149,621.00"
SFO - ORD,52940291143,SFO-ORD-DTW 2,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/52940291143,https://www.airlines-manager.com/aircraft/show/101045333,6:00,14:59,400,"$756,894.00","$669,493.00"
SFO - ORD,52955472804,SFO-ORD-DTW 5,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/52955472804,https://www.airlines-manager.com/aircraft/show/101045330,7:30,16:29,400,"$756,894.00","$669,493.00"
SFO - ORD,52963027042,SFO-ORD-DTW 1,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/52963027042,https://www.airlines-manager.com/aircraft/show/101045334,13:00,21:59,400,"$756,894.00","$669,493.00"
SFO - ORD,52969613934,SFO-ORD-DTW 4,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/52969613934,https://www.airlines-manager.com/aircraft/show/101045331,15:00,23:59,400,"$756,894.00","$669,493.00"
SFO - ORD,52980970892,SFO-ORD-DTW 3,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/52980970892,https://www.airlines-manager.com/aircraft/show/101045332,20:00,4:59,400,"$756,894.00","$669,493.00"
SFO - ORF,52940291129,SFO-ORF-RIC 3,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/52940291129,https://www.airlines-manager.com/aircraft/show/108328836,5:30,17:29,310,"$729,167.00","$673,055.00"
SFO - ORF,52955472817,SFO-ORF-RIC 4,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/52955472817,https://www.airlines-manager.com/aircraft/show/108328837,7:30,19:29,310,"$729,167.00","$673,055.00"
SFO - ORF,52975649326,SFO-ORF-RIC 1,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/52975649326,https://www.airlines-manager.com/aircraft/show/108328834,18:00,5:59,310,"$729,167.00","$673,055.00"
SFO - ORF,52980970875,SFO-ORF-RIC 2,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/52980970875,https://www.airlines-manager.com/aircraft/show/108328835,20:00,7:59,310,"$729,167.00","$673,055.00"
SFO - ORF,52985325401,SFO-ORF-RIC 5 B,A319-100,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/52985325401,https://www.airlines-manager.com/aircraft/show/108328833,22:00,9:59,198,"$545,338.00","$500,339.00"
SFO - PBI,52940291080,SFO-PBI-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/52940291080,https://www.airlines-manager.com/aircraft/show/100301186,4:15,16:14,320,"$730,619.00","$666,288.00"
SFO - PBI,52940291081,SFO-PBI-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/52940291081,https://www.airlines-manager.com/aircraft/show/100301185,6:15,18:14,320,"$730,619.00","$666,288.00"
SFO - PBI,52975649231,SFO-PBI-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/52975649231,https://www.airlines-manager.com/aircraft/show/100301188,17:00,4:59,320,"$730,619.00","$666,288.00"
SFO - PBI,52980970758,SFO-PBI-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/52980970758,https://www.airlines-manager.com/aircraft/show/100301187,19:00,6:59,320,"$730,619.00","$666,288.00"
SFO - PBI,52980970759,SFO-PBI-RDU 5,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/52980970759,https://www.airlines-manager.com/aircraft/show/100301184,21:00,8:59,320,"$730,619.00","$666,288.00"
SFO - PDX,52940290623,SFO-MCO-MSP 5,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/52940290623,https://www.airlines-manager.com/aircraft/show/105367364,0:15,4:29,338,"$271,198.00","$241,801.00"
SFO - PDX,52963026731,SFO-MCO-MSP 1,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/52963026731,https://www.airlines-manager.com/aircraft/show/105367368,10:45,14:59,338,"$271,198.00","$241,801.00"
SFO - PDX,52963026735,SFO-MCO-MSP 4,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/52963026735,https://www.airlines-manager.com/aircraft/show/105367365,12:45,16:59,338,"$271,198.00","$241,801.00"
SFO - PDX,52969613919,SFO-MCO-MSP 3,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/52969613919,https://www.airlines-manager.com/aircraft/show/105367366,15:00,19:14,338,"$271,198.00","$241,801.00"
SFO - PDX,52985325521,SFO-MCO-MSP 2,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/52985325521,https://www.airlines-manager.com/aircraft/show/105367367,23:15,3:29,270,"$238,976.00","$210,433.00"
SFO - PEK,52940290682,SFO 84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/52940290682,https://www.airlines-manager.com/aircraft/show/86776213,0:45,0:14,932,"$3,796,331.00","$3,394,824.00"
SFO - PEK,52975649211,SFO-PEK E,787-10,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/52975649211,https://www.airlines-manager.com/aircraft/show/106813006,17:00,15:59,648,"$2,826,112.00","$2,591,536.00"
SFO - PEK,52980970932,SFO 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/52980970932,https://www.airlines-manager.com/aircraft/show/85806656,20:30,19:59,931,"$3,792,081.00","$3,390,823.00"
SFO - PHL,52940290541,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/52940290541,https://www.airlines-manager.com/aircraft/show/92390871,0:00,11:44,320,"$727,420.00","$654,868.00"
SFO - PHL,52963026942,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/52963026942,https://www.airlines-manager.com/aircraft/show/92390872,12:00,23:44,320,"$727,420.00","$654,868.00"
SFO - PHL,52969613843,SFO-PHL-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/52969613843,https://www.airlines-manager.com/aircraft/show/97900730,14:00,1:59,198,"$546,428.00","$494,036.00"
SFO - PHL,52969613844,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/52969613844,https://www.airlines-manager.com/aircraft/show/92390869,15:00,2:44,320,"$727,420.00","$654,868.00"
SFO - PHL,52969613845,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/52969613845,https://www.airlines-manager.com/aircraft/show/92390870,15:45,3:29,320,"$727,420.00","$654,868.00"
SFO - PHL,52980970799,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/52980970799,https://www.airlines-manager.com/aircraft/show/92390873,19:15,6:59,319,"$725,978.00","$653,494.00"
SFO - PHX,52940290829,SFO-BOS-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/52940290829,https://www.airlines-manager.com/aircraft/show/104901564,1:30,5:59,338,"$320,633.00","$282,575.00"
SFO - PHX,52940290830,SFO-BOS-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/52940290830,https://www.airlines-manager.com/aircraft/show/104870960,2:30,6:59,338,"$320,633.00","$282,575.00"
SFO - PHX,52940290831,SFO-BOS-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/52940290831,https://www.airlines-manager.com/aircraft/show/104874465,4:15,8:44,338,"$320,633.00","$282,575.00"
SFO - PHX,52963026930,SFO-BOS-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/52963026930,https://www.airlines-manager.com/aircraft/show/104901544,12:00,16:29,338,"$320,633.00","$282,575.00"
SFO - PHX,52969613970,SFO CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/52969613970,https://www.airlines-manager.com/aircraft/show/107343113,15:45,20:29,0,"$78,285.00","$52,345.00"
SFO - PHX,52969613971,SFO-BOS-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/52969613971,https://www.airlines-manager.com/aircraft/show/104864961,16:00,20:29,338,"$320,633.00","$282,575.00"
SFO - PIT,52940290770,SFO-MEM-PIT 3,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/52940290770,https://www.airlines-manager.com/aircraft/show/98788935,1:15,11:59,310,"$673,551.00","$618,395.00"
SFO - PIT,52940290771,SFO-MEM-PIT 5,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/52940290771,https://www.airlines-manager.com/aircraft/show/98788933,4:15,14:59,310,"$673,551.00","$618,395.00"
SFO - PIT,52963027011,SFO-MEM-PIT 2,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/52963027011,https://www.airlines-manager.com/aircraft/show/98788936,13:00,23:44,310,"$673,551.00","$618,395.00"
SFO - PIT,52969614004,SFO-MEM-PIT 4,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/52969614004,https://www.airlines-manager.com/aircraft/show/98788934,16:00,2:44,310,"$673,551.00","$618,395.00"
SFO - PIT,52980970764,SFO-MEM-PIT 6,ERJ-175,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/52980970764,https://www.airlines-manager.com/aircraft/show/98675305,19:00,5:44,112,"$315,807.00","$278,788.00"
SFO - PIT,52985325439,SFO-MEM-PIT 1,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/52985325439,https://www.airlines-manager.com/aircraft/show/98788937,22:15,8:59,310,"$673,551.00","$618,395.00"
SFO - PSP,52940291074,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/52940291074,https://www.airlines-manager.com/aircraft/show/114912264,4:15,7:59,310,"$199,494.00","$174,696.00"
SFO - PSP,52963026900,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/52963026900,https://www.airlines-manager.com/aircraft/show/114912267,11:45,15:29,310,"$199,494.00","$174,696.00"
SFO - PSP,52963026901,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/52963026901,https://www.airlines-manager.com/aircraft/show/114912306,13:15,16:59,112,"$92,098.00","$76,487.00"
SFO - PSP,52969613881,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/52969613881,https://www.airlines-manager.com/aircraft/show/114912268,15:00,18:44,310,"$199,494.00","$174,696.00"
SFO - PSP,52980970969,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/52980970969,https://www.airlines-manager.com/aircraft/show/114912263,21:00,0:44,276,"$186,610.00","$162,203.00"
SFO - PVD,52940290520,SFO-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/52940290520,https://www.airlines-manager.com/aircraft/show/112650105,0:00,12:29,310,"$760,030.00","$702,363.00"
SFO - PVD,52940290521,SFO-PVD-BUF 5,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/52940290521,https://www.airlines-manager.com/aircraft/show/112650104,5:00,17:29,310,"$760,030.00","$702,363.00"
SFO - PVD,52963027046,SFO-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/52963027046,https://www.airlines-manager.com/aircraft/show/112650108,13:00,1:29,310,"$760,030.00","$702,363.00"
SFO - PVD,52975649197,SFO-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/52975649197,https://www.airlines-manager.com/aircraft/show/112650107,17:00,5:29,310,"$760,030.00","$702,363.00"
SFO - PVD,52980970753,SFO-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/52980970753,https://www.airlines-manager.com/aircraft/show/112650106,19:00,7:29,309,"$758,545.00","$700,952.00"
SFO - PWM,52940290611,SFO-KOA-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/52940290611,https://www.airlines-manager.com/aircraft/show/112650091,0:15,12:59,198,"$574,393.00","$528,196.00"
SFO - PWM,52940290612,SFO-KOA-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/52940290612,https://www.airlines-manager.com/aircraft/show/112650103,4:15,16:59,310,"$767,494.00","$709,894.00"
SFO - PWM,52955472787,SFO-KOA-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/52955472787,https://www.airlines-manager.com/aircraft/show/112650102,7:15,19:59,310,"$767,494.00","$709,894.00"
SFO - PWM,52969613776,SFO-KOA-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/52969613776,https://www.airlines-manager.com/aircraft/show/112650101,14:00,2:44,310,"$767,494.00","$709,894.00"
SFO - PWM,52969613777,SFO-KOA-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/52969613777,https://www.airlines-manager.com/aircraft/show/112650100,16:00,4:44,310,"$767,494.00","$709,894.00"
SFO - RDU,52940291121,SFO-PBI-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/52940291121,https://www.airlines-manager.com/aircraft/show/100301188,5:00,16:14,320,"$709,617.00","$646,894.00"
SFO - RDU,52955472775,SFO-PBI-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/52955472775,https://www.airlines-manager.com/aircraft/show/100301187,7:00,18:14,320,"$709,617.00","$646,894.00"
SFO - RDU,52955472776,SFO-PBI-RDU 5,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/52955472776,https://www.airlines-manager.com/aircraft/show/100301184,9:00,20:14,320,"$709,617.00","$646,894.00"
SFO - RDU,52975649230,SFO-PBI-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/52975649230,https://www.airlines-manager.com/aircraft/show/100301186,17:00,4:14,320,"$709,617.00","$646,894.00"
SFO - RDU,52980970783,SFO-PBI-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/52980970783,https://www.airlines-manager.com/aircraft/show/100301185,19:00,6:14,320,"$709,617.00","$646,894.00"
SFO - RIC,52940291144,SFO-ORF-RIC 1,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/52940291144,https://www.airlines-manager.com/aircraft/show/108328834,6:00,17:29,310,"$723,262.00","$668,228.00"
SFO - RIC,52955472903,SFO-ORF-RIC 2,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/52955472903,https://www.airlines-manager.com/aircraft/show/108328835,8:00,19:29,310,"$723,262.00","$668,228.00"
SFO - RIC,52955472904,SFO-ORF-RIC 5 B,A319-100,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/52955472904,https://www.airlines-manager.com/aircraft/show/108328833,10:00,21:29,198,"$542,459.00","$498,327.00"
SFO - RIC,52975649322,SFO-ORF-RIC 3,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/52975649322,https://www.airlines-manager.com/aircraft/show/108328836,18:00,5:29,310,"$723,262.00","$668,228.00"
SFO - RIC,52980970878,SFO-ORF-RIC 4,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/52980970878,https://www.airlines-manager.com/aircraft/show/108328837,20:00,7:29,310,"$723,262.00","$668,228.00"
SFO - RNO,52940291092,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/52940291092,https://www.airlines-manager.com/aircraft/show/88239554,4:15,6:59,320,"$118,943.00","$92,623.00"
SFO - RNO,52969613850,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/52969613850,https://www.airlines-manager.com/aircraft/show/105223003,14:15,16:59,198,"$90,039.00","$72,187.00"
SFO - RNO,52969613851,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/52969613851,https://www.airlines-manager.com/aircraft/show/88239553,14:15,16:59,320,"$118,943.00","$92,623.00"
SFO - RNO,52969613852,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/52969613852,https://www.airlines-manager.com/aircraft/show/88239557,16:00,18:44,320,"$118,943.00","$92,623.00"
SFO - RNO,52980970933,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/52980970933,https://www.airlines-manager.com/aircraft/show/88239555,20:30,23:14,320,"$118,943.00","$92,623.00"
SFO - RSW,52940291127,SFO-RSW-BDL 3,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/52940291127,https://www.airlines-manager.com/aircraft/show/84915100,5:15,16:59,320,"$726,858.00","$662,044.00"
SFO - RSW,52955472790,SFO-RSW-BDL 4,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/52955472790,https://www.airlines-manager.com/aircraft/show/84915101,7:15,18:59,320,"$726,858.00","$662,044.00"
SFO - RSW,52975649201,SFO-RSW-BDL 1,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/52975649201,https://www.airlines-manager.com/aircraft/show/84915098,17:00,4:44,320,"$726,858.00","$662,044.00"
SFO - RSW,52980970787,SFO-RSW-BDL 2,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/52980970787,https://www.airlines-manager.com/aircraft/show/84915099,19:00,6:44,320,"$726,858.00","$662,044.00"
SFO - RSW,52980970788,SFO-RSW-BDL 5,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/52980970788,https://www.airlines-manager.com/aircraft/show/84915102,21:00,8:44,320,"$726,858.00","$662,044.00"
SFO - SAN,52955472838,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/52955472838,https://www.airlines-manager.com/aircraft/show/92390872,8:00,11:44,320,"$216,440.00","$183,601.00"
SFO - SAN,52963026772,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/52963026772,https://www.airlines-manager.com/aircraft/show/92390869,11:00,14:44,320,"$216,440.00","$183,601.00"
SFO - SAN,52963026775,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/52963026775,https://www.airlines-manager.com/aircraft/show/92390870,12:00,15:44,320,"$216,440.00","$183,601.00"
SFO - SAN,52969613960,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/52969613960,https://www.airlines-manager.com/aircraft/show/92390873,15:30,19:14,320,"$216,440.00","$183,601.00"
SFO - SAN,52980970904,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/52980970904,https://www.airlines-manager.com/aircraft/show/92390871,20:15,23:59,314,"$213,988.00","$181,221.00"
SFO - SAT,52940290546,SFO-JAX-SAT 1,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/52940290546,https://www.airlines-manager.com/aircraft/show/86375568,0:15,8:14,310,"$496,348.00","$455,078.00"
SFO - SAT,52940290547,SFO-JAX-SAT 2,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/52940290547,https://www.airlines-manager.com/aircraft/show/86371267,2:15,10:14,310,"$496,348.00","$455,078.00"
SFO - SAT,52963027047,SFO-JAX-SAT 3,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/52963027047,https://www.airlines-manager.com/aircraft/show/86385102,13:00,20:59,310,"$496,348.00","$455,078.00"
SFO - SAT,52969613883,SFO-JAX-SAT 4,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/52969613883,https://www.airlines-manager.com/aircraft/show/86378760,15:00,22:59,310,"$496,348.00","$455,078.00"
SFO - SAT,52975649241,SFO-JAX-SAT 5,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/52975649241,https://www.airlines-manager.com/aircraft/show/86377315,17:15,1:14,310,"$496,348.00","$455,078.00"
SFO - SAV,52940291139,SFO-SAV-JAN 1,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/52940291139,https://www.airlines-manager.com/aircraft/show/114912265,5:45,16:59,310,"$693,452.00","$640,147.00"
SFO - SAV,52955472832,SFO-SAV-JAN 4,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/52955472832,https://www.airlines-manager.com/aircraft/show/114912270,7:45,18:59,310,"$693,452.00","$640,147.00"
SFO - SAV,52969613904,SFO-SAV-JAN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/52969613904,https://www.airlines-manager.com/aircraft/show/114917486,15:00,2:14,198,"$521,043.00","$478,298.00"
SFO - SAV,52980970791,SFO-SAV-JAN 3,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/52980970791,https://www.airlines-manager.com/aircraft/show/114912269,19:00,6:14,310,"$693,452.00","$640,147.00"
SFO - SAV,52980970792,SFO-SAV-JAN 2,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/52980970792,https://www.airlines-manager.com/aircraft/show/114912266,20:30,7:44,309,"$691,463.00","$638,239.00"
SFO - SDF,52940290784,SFO-SDF-LIT 2,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/52940290784,https://www.airlines-manager.com/aircraft/show/94886628,1:15,10:59,310,"$611,674.00","$561,431.00"
SFO - SDF,52940290785,SFO-SDF-LIT 4,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/52940290785,https://www.airlines-manager.com/aircraft/show/106453500,2:15,11:59,310,"$611,674.00","$561,431.00"
SFO - SDF,52969613782,SFO-SDF-LIT 1,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/52969613782,https://www.airlines-manager.com/aircraft/show/106453499,14:00,23:44,310,"$611,674.00","$561,431.00"
SFO - SDF,52969800880,SFO-SDF-LIT 3,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/52969800880,https://www.airlines-manager.com/aircraft/show/94886627,16:30,2:14,310,"$611,674.00","$561,431.00"
SFO - SDF,52975649258,SFO-SDF-LIT 5,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/52975649258,https://www.airlines-manager.com/aircraft/show/106453498,17:30,3:14,310,"$611,674.00","$561,431.00"
SFO - SEA,52940290971,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/52940290971,https://www.airlines-manager.com/aircraft/show/92390869,2:45,7:29,320,"$300,108.00","$256,500.00"
SFO - SEA,52940290972,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/52940290972,https://www.airlines-manager.com/aircraft/show/92390870,3:30,8:14,320,"$300,108.00","$256,500.00"
SFO - SEA,52940290973,SFO-PHL-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/52940290973,https://www.airlines-manager.com/aircraft/show/97900730,5:30,10:14,198,"$228,835.00","$198,677.00"
SFO - SEA,52955472783,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/52955472783,https://www.airlines-manager.com/aircraft/show/92390873,7:00,11:44,320,"$300,108.00","$256,500.00"
SFO - SEA,52963026940,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/52963026940,https://www.airlines-manager.com/aircraft/show/92390871,12:00,16:44,320,"$300,108.00","$256,500.00"
SFO - SEA,52985325552,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/52985325552,https://www.airlines-manager.com/aircraft/show/92390872,23:45,4:29,298,"$287,654.00","$244,449.00"
SFO - SHA,52980970893,SFO 168B-4 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/52980970893,https://www.airlines-manager.com/aircraft/show/87933798,20:00,19:59,1046,"$4,630,627.00","$4,295,094.00"
SFO - SHA,52985325410,SFO 168A-4 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/52985325410,https://www.airlines-manager.com/aircraft/show/86817628,22:00,21:59,1044,"$4,624,248.00","$4,289,097.00"
SFO - SLC,52940290478,SFO-ORD-DTW 4,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/52940290478,https://www.airlines-manager.com/aircraft/show/101045331,0:00,4:29,400,"$360,521.00","$319,620.00"
SFO - SLC,52940290479,SFO-ORD-DTW 2,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/52940290479,https://www.airlines-manager.com/aircraft/show/101045333,1:00,5:29,400,"$360,521.00","$319,620.00"
SFO - SLC,52955472842,SFO-ORD-DTW 1,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/52955472842,https://www.airlines-manager.com/aircraft/show/101045334,8:00,12:29,400,"$360,521.00","$319,620.00"
SFO - SLC,52969613935,SFO-ORD-DTW 3,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/52969613935,https://www.airlines-manager.com/aircraft/show/101045332,15:00,19:29,400,"$360,521.00","$319,620.00"
SFO - SMF,52955472943,SFO-SDF-LIT 1,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/52955472943,https://www.airlines-manager.com/aircraft/show/106453499,8:30,10:59,310,"$82,768.00","$62,186.00"
SFO - SMF,52969613785,SFO-SDF-LIT 3,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/52969613785,https://www.airlines-manager.com/aircraft/show/94886627,14:00,16:29,310,"$82,768.00","$62,186.00"
SFO - SMF,52969613786,SFO-SDF-LIT 5,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/52969613786,https://www.airlines-manager.com/aircraft/show/106453498,15:00,17:29,310,"$82,768.00","$62,186.00"
SFO - SMF,52985325492,SFO-SDF-LIT 2,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/52985325492,https://www.airlines-manager.com/aircraft/show/94886628,22:45,1:14,310,"$82,768.00","$62,186.00"
SFO - SMF,52985325493,SFO-SDF-LIT 4,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/52985325493,https://www.airlines-manager.com/aircraft/show/106453500,23:45,2:14,310,"$82,768.00","$62,186.00"
SFO - STL,52940291156,SFO-MSY-STL 3,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/52940291156,https://www.airlines-manager.com/aircraft/show/98075265,6:45,15:29,320,"$554,969.00","$501,215.00"
SFO - STL,52955472953,SFO-MSY-STL 5,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/52955472953,https://www.airlines-manager.com/aircraft/show/98075263,8:45,17:29,320,"$554,969.00","$501,215.00"
SFO - STL,52963026997,SFO-MSY-STL 6,ERJ-175,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/52963026997,https://www.airlines-manager.com/aircraft/show/103534666,13:00,21:44,112,"$261,276.00","$229,354.00"
SFO - STL,52969614005,SFO-MSY-STL 2,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/52969614005,https://www.airlines-manager.com/aircraft/show/98075266,16:00,0:44,320,"$554,969.00","$501,215.00"
SFO - STL,52975649300,SFO-MSY-STL 4,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/52975649300,https://www.airlines-manager.com/aircraft/show/98075264,18:00,2:44,320,"$554,969.00","$501,215.00"
SFO - STL,52985325452,SFO-MSY-STL 1,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/52985325452,https://www.airlines-manager.com/aircraft/show/98075267,22:30,7:14,319,"$551,803.00","$498,119.00"
SFO - TFU,52963026971,SFO 168B-3 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/52963026971,https://www.airlines-manager.com/aircraft/show/87566902,12:30,14:59,1046,"$5,210,536.00","$4,802,877.00"
SFO - TFU,52969613862,SFO 168A-3 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/52969613862,https://www.airlines-manager.com/aircraft/show/86483501,14:30,16:59,1045,"$5,206,920.00","$4,799,474.00"
SFO - TPA,52940290751,SFO-FLL-TPA 1,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/52940290751,https://www.airlines-manager.com/aircraft/show/97955544,1:00,12:14,320,"$701,178.00","$635,127.00"
SFO - TPA,52940290752,SFO-FLL-TPA 3,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/52940290752,https://www.airlines-manager.com/aircraft/show/97955542,5:00,16:14,320,"$701,178.00","$635,127.00"
SFO - TPA,52955472836,SFO-FLL-TPA 5,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/52955472836,https://www.airlines-manager.com/aircraft/show/97955540,8:00,19:14,320,"$701,178.00","$635,127.00"
SFO - TPA,52963026984,SFO-FLL-TPA 2,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/52963026984,https://www.airlines-manager.com/aircraft/show/97955543,13:00,0:14,320,"$701,178.00","$635,127.00"
SFO - TPA,52975649235,SFO-FLL-TPA 4,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/52975649235,https://www.airlines-manager.com/aircraft/show/97955541,17:00,4:14,320,"$701,178.00","$635,127.00"
SFO - TPA,52980970895,SFO-FLL-TPA 6 B,A319-100,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/52980970895,https://www.airlines-manager.com/aircraft/show/97900729,20:00,7:29,198,"$529,269.00","$481,413.00"
SFO - TPE,52980970894,SFO 168B-5 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/52980970894,https://www.airlines-manager.com/aircraft/show/87933799,20:00,21:14,1046,"$4,755,060.00","$4,405,034.00"
SFO - TPE,52985325408,SFO 168A-5 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/52985325408,https://www.airlines-manager.com/aircraft/show/86808589,22:00,23:14,1026,"$4,691,468.00","$4,345,449.00"
SFO - TUL,52940291112,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/52940291112,https://www.airlines-manager.com/aircraft/show/108410857,4:45,12:29,320,"$491,609.00","$446,111.00"
SFO - TUL,52955472772,SFO-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/52955472772,https://www.airlines-manager.com/aircraft/show/108466264,7:00,14:44,112,"$232,142.00","$205,134.00"
SFO - TUL,52969613895,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/52969613895,https://www.airlines-manager.com/aircraft/show/108410856,15:00,22:44,320,"$491,609.00","$446,111.00"
SFO - TUL,52969613896,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/52969613896,https://www.airlines-manager.com/aircraft/show/108410859,15:45,23:29,320,"$491,609.00","$446,111.00"
SFO - TUL,52980970942,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/52980970942,https://www.airlines-manager.com/aircraft/show/108410858,20:45,4:29,320,"$491,609.00","$446,111.00"
SFO - TUS,52955472899,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/52955472899,https://www.airlines-manager.com/aircraft/show/107160378,8:00,12:59,320,"$317,992.00","$282,831.00"
SFO - TUS,52955472900,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/52955472900,https://www.airlines-manager.com/aircraft/show/107132310,9:30,14:29,112,"$151,565.00","$131,798.00"
SFO - TUS,52955472901,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/52955472901,https://www.airlines-manager.com/aircraft/show/107160381,10:30,15:29,320,"$317,992.00","$282,831.00"
SFO - TUS,52969613975,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/52969613975,https://www.airlines-manager.com/aircraft/show/107160380,16:00,20:59,320,"$317,992.00","$282,831.00"
SFO - TUS,52985325547,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/52985325547,https://www.airlines-manager.com/aircraft/show/107160379,23:30,4:29,320,"$317,992.00","$282,831.00"
SFO - YUL,52940290715,SFO-YYZ-YUL 1,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/52940290715,https://www.airlines-manager.com/aircraft/show/115413609,0:45,12:29,400,"$922,243.00","$846,219.00"
SFO - YUL,52940290716,SFO-YYZ-YUL 4,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/52940290716,https://www.airlines-manager.com/aircraft/show/115413612,6:00,17:44,400,"$922,243.00","$846,219.00"
SFO - YUL,52969613812,SFO-YYZ-YUL 2,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/52969613812,https://www.airlines-manager.com/aircraft/show/115413610,14:00,1:44,400,"$922,243.00","$846,219.00"
SFO - YUL,52975649171,SFO-YYZ-YUL 3,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/52975649171,https://www.airlines-manager.com/aircraft/show/115413611,16:45,4:29,400,"$922,243.00","$846,219.00"
SFO - YUL,52975649172,SFO-YYZ-YUL 5,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/52975649172,https://www.airlines-manager.com/aircraft/show/91126653,18:45,6:29,400,"$922,243.00","$846,219.00"
SFO - YVR,52940290688,SFO-MSY-STL 2,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/52940290688,https://www.airlines-manager.com/aircraft/show/98075266,0:45,5:59,320,"$330,023.00","$289,060.00"
SFO - YVR,52940290689,SFO-MSY-STL 4,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/52940290689,https://www.airlines-manager.com/aircraft/show/98075264,2:45,7:59,320,"$330,023.00","$289,060.00"
SFO - YVR,52955472792,SFO-MSY-STL 1,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/52955472792,https://www.airlines-manager.com/aircraft/show/98075267,7:15,12:29,320,"$330,023.00","$289,060.00"
SFO - YVR,52969614011,SFO-MSY-STL 3,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/52969614011,https://www.airlines-manager.com/aircraft/show/98075265,16:00,21:14,320,"$330,023.00","$289,060.00"
SFO - YVR,52975649304,SFO-MSY-STL 5,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/52975649304,https://www.airlines-manager.com/aircraft/show/98075263,18:00,23:14,320,"$330,023.00","$289,060.00"
SFO - YVR,52985325388,SFO-MSY-STL 6,ERJ-175,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/52985325388,https://www.airlines-manager.com/aircraft/show/103534666,21:45,2:59,112,"$156,435.00","$133,621.00"
SFO - YYZ,52940290863,SFO-YYZ-YUL 2,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/52940290863,https://www.airlines-manager.com/aircraft/show/115413610,1:45,12:29,400,"$881,753.00","$803,633.00"
SFO - YYZ,52940290864,SFO-YYZ-YUL 3,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/52940290864,https://www.airlines-manager.com/aircraft/show/115413611,6:00,16:44,400,"$881,753.00","$803,633.00"
SFO - YYZ,52955472839,SFO-YYZ-YUL 5,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/52955472839,https://www.airlines-manager.com/aircraft/show/91126653,8:00,18:44,400,"$881,753.00","$803,633.00"
SFO - YYZ,52969613813,SFO-YYZ-YUL 1,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/52969613813,https://www.airlines-manager.com/aircraft/show/115413609,14:00,0:44,400,"$881,753.00","$803,633.00"
SFO - YYZ,52975649292,SFO-YYZ-YUL 4,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/52975649292,https://www.airlines-manager.com/aircraft/show/115413612,17:45,4:29,400,"$881,753.00","$803,633.00"`;