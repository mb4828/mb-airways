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
EWR - ABQ,53492178601,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/53492178601,https://www.airlines-manager.com/aircraft/show/90717078,0:45,9:59,310,"$573,228.00","$527,252.00"
EWR - ABQ,53492178602,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/53492178602,https://www.airlines-manager.com/aircraft/show/95950199,2:45,11:59,310,"$573,228.00","$527,252.00"
EWR - ABQ,53511675182,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/53511675182,https://www.airlines-manager.com/aircraft/show/90717079,10:00,19:14,310,"$573,228.00","$527,252.00"
EWR - ABQ,53526170979,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/53526170979,https://www.airlines-manager.com/aircraft/show/90717077,16:45,1:59,310,"$573,228.00","$527,252.00"
EWR - ABQ,53531796311,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/53531796311,https://www.airlines-manager.com/aircraft/show/90717076,17:45,2:59,310,"$573,228.00","$527,252.00"
EWR - AMS,53516803709,EWR 56B-1 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/53516803709,https://www.airlines-manager.com/aircraft/show/94521251,11:30,2:44,748,"$2,318,738.00","$2,073,912.00"
EWR - AMS,53521848673,EWR 56B-6 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/53521848673,https://www.airlines-manager.com/aircraft/show/94521248,13:15,4:29,748,"$2,318,738.00","$2,073,912.00"
EWR - AMS,53521848674,EWR 56B-4 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/53521848674,https://www.airlines-manager.com/aircraft/show/94521247,15:00,6:14,748,"$2,076,963.00","$1,893,772.00"
EWR - ANC,53492178917,EWR CARGO 1,A321neo-LR,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/53492178917,https://www.airlines-manager.com/aircraft/show/103406580,4:00,18:59,0,"$313,843.00","$249,989.00"
EWR - ANC,53511675196,EWR-STL-PIT 3,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/53511675196,https://www.airlines-manager.com/aircraft/show/115400546,10:00,0:59,338,"$995,760.00","$932,676.00"
EWR - ANC,53521848681,EWR-STL-PIT 2,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/53521848681,https://www.airlines-manager.com/aircraft/show/115400547,13:15,4:14,338,"$995,760.00","$932,676.00"
EWR - ANC,53531796425,EWR-STL-PIT 1,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/53531796425,https://www.airlines-manager.com/aircraft/show/115400548,18:45,9:44,338,"$995,760.00","$932,676.00"
EWR - ANC,53536307304,EWR-STL-PIT 4,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/53536307304,https://www.airlines-manager.com/aircraft/show/115400545,21:45,12:44,338,"$906,775.00","$851,360.00"
EWR - ATH,53492178437,EWR 84A-4 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/53492178437,https://www.airlines-manager.com/aircraft/show/90656551,0:00,19:59,852,"$3,234,067.00","$2,941,774.00"
EWR - ATH,53531796533,EWR 84A-1 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/53531796533,https://www.airlines-manager.com/aircraft/show/90656554,19:45,15:44,852,"$3,234,067.00","$2,941,774.00"
EWR - ATL,53511675204,EWR-DFW-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/53511675204,https://www.airlines-manager.com/aircraft/show/90489724,10:00,14:59,320,"$316,346.00","$255,029.00"
EWR - ATL,53521848777,EWR-DFW-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/53521848777,https://www.airlines-manager.com/aircraft/show/90489726,14:15,19:14,320,"$316,346.00","$255,029.00"
EWR - ATL,53531796289,EWR-DFW-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/53531796289,https://www.airlines-manager.com/aircraft/show/90489725,17:30,22:29,320,"$316,346.00","$255,029.00"
EWR - ATL,53531796290,EWR-DFW-ATL 6 B,A319-100,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/53531796290,https://www.airlines-manager.com/aircraft/show/105222360,18:30,23:29,198,"$240,998.00","$198,928.00"
EWR - ATL,53531796291,EWR-DFW-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/53531796291,https://www.airlines-manager.com/aircraft/show/86238752,19:45,0:44,320,"$316,346.00","$255,029.00"
EWR - ATL,53536307345,EWR-DFW-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/53536307345,https://www.airlines-manager.com/aircraft/show/86238753,22:15,3:14,320,"$316,346.00","$255,029.00"
EWR - AUS,53492178766,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/53492178766,https://www.airlines-manager.com/aircraft/show/90717077,2:00,9:59,310,"$499,170.00","$457,926.00"
EWR - AUS,53492178767,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/53492178767,https://www.airlines-manager.com/aircraft/show/90717076,3:00,10:59,310,"$499,170.00","$457,926.00"
EWR - AUS,53511675181,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/53511675181,https://www.airlines-manager.com/aircraft/show/90717078,10:00,17:59,310,"$499,170.00","$457,926.00"
EWR - AUS,53516803764,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/53516803764,https://www.airlines-manager.com/aircraft/show/95950199,12:00,19:59,310,"$499,170.00","$457,926.00"
EWR - AUS,53531796475,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/53531796475,https://www.airlines-manager.com/aircraft/show/90717079,19:15,3:14,310,"$499,170.00","$457,926.00"
EWR - BCN,53526170869,EWR 84A-2 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/53526170869,https://www.airlines-manager.com/aircraft/show/94521252,15:45,7:44,852,"$2,615,130.00","$2,372,833.00"
EWR - BCN,53531796604,EWR 84A-6 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/53531796604,https://www.airlines-manager.com/aircraft/show/90656552,20:00,11:59,852,"$2,615,130.00","$2,372,833.00"
EWR - BDA,53511675091,EWR-YEG-BFF 5 B,A319-100,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/53511675091,https://www.airlines-manager.com/aircraft/show/115493369,8:45,13:59,198,"$243,375.00","$221,602.00"
EWR - BDA,53516803673,EWR-YEG-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/53516803673,https://www.airlines-manager.com/aircraft/show/98936170,11:00,16:14,320,"$321,148.00","$290,358.00"
EWR - BDA,53521848633,EWR-YEG-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/53521848633,https://www.airlines-manager.com/aircraft/show/98936171,13:00,18:14,320,"$321,148.00","$290,358.00"
EWR - BDA,53536307225,EWR-YEG-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/53536307225,https://www.airlines-manager.com/aircraft/show/98936168,21:00,2:14,320,"$321,148.00","$290,358.00"
EWR - BDA,53540025380,EWR-YEG-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/53540025380,https://www.airlines-manager.com/aircraft/show/98936169,22:30,3:44,252,"$258,071.00","$229,064.00"
EWR - BDL,53492178657,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/53492178657,https://www.airlines-manager.com/aircraft/show/108834811,1:00,3:29,310,"$89,395.00","$71,067.00"
EWR - BDL,53511675138,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/53511675138,https://www.airlines-manager.com/aircraft/show/108466265,9:30,11:59,112,"$38,361.00","$27,163.00"
EWR - BDL,53521848753,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/53521848753,https://www.airlines-manager.com/aircraft/show/108834810,14:00,16:29,310,"$89,395.00","$71,067.00"
EWR - BDL,53526170910,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/53526170910,https://www.airlines-manager.com/aircraft/show/108834809,16:00,18:29,310,"$89,395.00","$71,067.00"
EWR - BDL,53540025445,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/53540025445,https://www.airlines-manager.com/aircraft/show/108834808,23:00,1:29,310,"$89,395.00","$71,067.00"
EWR - BER,53505148687,EWR 84B-2  B2,777-300,https://www.airlines-manager.com/network/showline/49921899,https://www.airlines-manager.com/network/showflight/53505148687,https://www.airlines-manager.com/aircraft/show/117958696,5:45,22:14,852,"$2,705,265.00","$2,453,617.00"
EWR - BER,53531796323,EWR 84B-5  B2,777-300,https://www.airlines-manager.com/network/showline/49921899,https://www.airlines-manager.com/network/showflight/53531796323,https://www.airlines-manager.com/aircraft/show/117958699,17:45,10:14,852,"$2,705,265.00","$2,453,617.00"
EWR - BFF,53492178800,EWR-YEG-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/53492178800,https://www.airlines-manager.com/aircraft/show/98936168,2:15,10:14,320,"$505,586.00","$462,875.00"
EWR - BFF,53492178801,EWR-YEG-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/53492178801,https://www.airlines-manager.com/aircraft/show/98936169,3:45,11:44,320,"$505,586.00","$462,875.00"
EWR - BFF,53521848701,EWR-YEG-BFF 5 B,A319-100,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/53521848701,https://www.airlines-manager.com/aircraft/show/115493369,14:00,21:59,198,"$381,737.00","$350,827.00"
EWR - BFF,53526170945,EWR-YEG-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/53526170945,https://www.airlines-manager.com/aircraft/show/98936170,16:15,0:14,320,"$505,586.00","$462,875.00"
EWR - BFF,53531796381,EWR-YEG-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/53531796381,https://www.airlines-manager.com/aircraft/show/98936171,18:15,2:14,320,"$505,586.00","$462,875.00"
EWR - BHM,53492178787,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/53492178787,https://www.airlines-manager.com/aircraft/show/116042862,2:15,7:44,310,"$345,551.00","$316,758.00"
EWR - BHM,53511675077,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/53511675077,https://www.airlines-manager.com/aircraft/show/116042859,8:30,13:59,310,"$345,551.00","$316,758.00"
EWR - BHM,53521848699,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/53521848699,https://www.airlines-manager.com/aircraft/show/116042860,14:00,19:29,310,"$345,551.00","$316,758.00"
EWR - BHM,53526170833,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/53526170833,https://www.airlines-manager.com/aircraft/show/116042861,15:15,20:44,310,"$345,551.00","$316,758.00"
EWR - BIL,53511675176,EWR-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/53511675176,https://www.airlines-manager.com/aircraft/show/116047882,10:00,18:59,320,"$563,348.00","$517,391.00"
EWR - BIL,53516803728,EWR-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/53516803728,https://www.airlines-manager.com/aircraft/show/116047885,12:00,20:59,320,"$563,348.00","$517,391.00"
EWR - BIL,53536307274,EWR-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/53536307274,https://www.airlines-manager.com/aircraft/show/116047884,21:15,6:14,320,"$563,348.00","$517,391.00"
EWR - BIL,53540025424,EWR-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/53540025424,https://www.airlines-manager.com/aircraft/show/116047883,22:45,7:44,320,"$563,348.00","$517,391.00"
EWR - BNA,53492178879,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/53492178879,https://www.airlines-manager.com/aircraft/show/104610408,3:15,8:14,310,"$321,737.00","$292,397.00"
EWR - BNA,53511675054,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/53511675054,https://www.airlines-manager.com/aircraft/show/104610409,8:30,13:29,310,"$321,737.00","$292,397.00"
EWR - BNA,53521848593,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/53521848593,https://www.airlines-manager.com/aircraft/show/104610410,13:00,17:59,310,"$321,737.00","$292,397.00"
EWR - BNA,53526170991,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/53526170991,https://www.airlines-manager.com/aircraft/show/96421247,17:00,21:59,112,"$152,744.00","$133,838.00"
EWR - BNA,53536307262,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/53536307262,https://www.airlines-manager.com/aircraft/show/104610407,21:15,2:14,310,"$321,737.00","$292,397.00"
EWR - BOI,53492178707,EWR-BOI-PBI 5 B,A319-100,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/53492178707,https://www.airlines-manager.com/aircraft/show/110582846,1:30,11:59,198,"$490,416.00","$452,174.00"
EWR - BOI,53511675209,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/53511675209,https://www.airlines-manager.com/aircraft/show/104418460,10:00,20:29,310,"$652,968.00","$605,281.00"
EWR - BOI,53521848837,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/53521848837,https://www.airlines-manager.com/aircraft/show/104418463,15:00,1:29,310,"$652,968.00","$605,281.00"
EWR - BOI,53526170962,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/53526170962,https://www.airlines-manager.com/aircraft/show/104418462,16:30,2:59,310,"$652,968.00","$605,281.00"
EWR - BOI,53540025475,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/53540025475,https://www.airlines-manager.com/aircraft/show/104418461,23:30,9:59,310,"$652,968.00","$605,281.00"
EWR - BOS,53492178854,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/53492178854,https://www.airlines-manager.com/aircraft/show/104034464,3:00,5:59,216,"$93,775.00","$73,989.00"
EWR - BOS,53511675212,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/53511675212,https://www.airlines-manager.com/aircraft/show/104034463,10:00,12:59,216,"$93,775.00","$73,989.00"
EWR - BOS,53516803784,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/53516803784,https://www.airlines-manager.com/aircraft/show/104034462,12:45,15:44,216,"$93,775.00","$73,989.00"
EWR - BOS,53521848695,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/53521848695,https://www.airlines-manager.com/aircraft/show/99316501,13:45,16:44,216,"$93,775.00","$73,989.00"
EWR - BOS,53526170995,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/53526170995,https://www.airlines-manager.com/aircraft/show/104034464,17:00,19:59,216,"$93,775.00","$73,989.00"
EWR - BOS,53531796616,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/53531796616,https://www.airlines-manager.com/aircraft/show/104034463,20:00,22:59,216,"$93,775.00","$73,989.00"
EWR - BOS,53540025418,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/53540025418,https://www.airlines-manager.com/aircraft/show/104034462,22:45,1:44,216,"$93,775.00","$73,989.00"
EWR - BOS,53540025419,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/53540025419,https://www.airlines-manager.com/aircraft/show/99316501,23:45,2:44,216,"$93,775.00","$73,989.00"
EWR - BRU,53492178811,EWR 84B-5  B2,777-300,https://www.airlines-manager.com/network/showline/49921920,https://www.airlines-manager.com/network/showflight/53492178811,https://www.airlines-manager.com/aircraft/show/117958699,2:30,17:44,852,"$2,488,490.00","$2,262,476.00"
EWR - BRU,53521848788,EWR 84B-1  B2,777-300,https://www.airlines-manager.com/network/showline/49921920,https://www.airlines-manager.com/network/showflight/53521848788,https://www.airlines-manager.com/aircraft/show/117958695,14:30,5:44,852,"$2,488,490.00","$2,262,476.00"
EWR - BTV,53511675092,EWR-FCA-CID 1,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/53511675092,https://www.airlines-manager.com/aircraft/show/116042866,8:45,11:59,310,"$139,437.00","$120,222.00"
EWR - BTV,53516803723,EWR-FCA-CID 4,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/53516803723,https://www.airlines-manager.com/aircraft/show/116042863,12:00,15:14,310,"$139,437.00","$120,222.00"
EWR - BTV,53521848606,EWR-FCA-CID 3,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/53521848606,https://www.airlines-manager.com/aircraft/show/116042864,13:00,16:14,310,"$139,437.00","$120,222.00"
EWR - BTV,53531796427,EWR-FCA-CID 2,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/53531796427,https://www.airlines-manager.com/aircraft/show/116042865,18:45,21:59,310,"$139,437.00","$120,222.00"
EWR - BUF,53505148656,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/53505148656,https://www.airlines-manager.com/aircraft/show/106104450,5:30,8:44,112,"$70,545.00","$57,741.00"
EWR - BUF,53516803627,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/53516803627,https://www.airlines-manager.com/aircraft/show/105731236,11:00,14:14,320,"$154,046.00","$130,076.00"
EWR - BUF,53521848796,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/53521848796,https://www.airlines-manager.com/aircraft/show/88494376,14:45,17:59,320,"$154,046.00","$130,076.00"
EWR - BUF,53531796392,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/53531796392,https://www.airlines-manager.com/aircraft/show/88494377,18:30,21:44,320,"$154,046.00","$130,076.00"
EWR - BUF,53540025431,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/53540025431,https://www.airlines-manager.com/aircraft/show/88494375,23:00,2:14,320,"$154,046.00","$130,076.00"
EWR - BWI,53492178484,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/53492178484,https://www.airlines-manager.com/aircraft/show/104034464,0:15,2:59,216,"$74,600.00","$56,030.00"
EWR - BWI,53492178485,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/53492178485,https://www.airlines-manager.com/aircraft/show/104034463,3:15,5:59,216,"$74,600.00","$56,030.00"
EWR - BWI,53511675215,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/53511675215,https://www.airlines-manager.com/aircraft/show/104034462,10:00,12:44,216,"$74,600.00","$56,030.00"
EWR - BWI,53516803651,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/53516803651,https://www.airlines-manager.com/aircraft/show/99316501,11:00,13:44,216,"$74,600.00","$56,030.00"
EWR - BWI,53521848784,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/53521848784,https://www.airlines-manager.com/aircraft/show/104034464,14:15,16:59,216,"$74,600.00","$56,030.00"
EWR - BWI,53526171032,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/53526171032,https://www.airlines-manager.com/aircraft/show/104034463,17:15,19:59,216,"$74,600.00","$56,030.00"
EWR - BWI,53531796615,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/53531796615,https://www.airlines-manager.com/aircraft/show/104034462,20:00,22:44,216,"$74,600.00","$56,030.00"
EWR - BWI,53536307245,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/53536307245,https://www.airlines-manager.com/aircraft/show/99316501,21:00,23:44,216,"$74,600.00","$56,030.00"
EWR - BZN,53492178582,EWR-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/53492178582,https://www.airlines-manager.com/aircraft/show/116047885,0:30,9:44,320,"$590,320.00","$543,416.00"
EWR - BZN,53516803726,EWR-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/53516803726,https://www.airlines-manager.com/aircraft/show/116047884,12:00,21:14,320,"$590,320.00","$543,416.00"
EWR - BZN,53521848687,EWR-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/53521848687,https://www.airlines-manager.com/aircraft/show/116047883,13:30,22:44,320,"$590,320.00","$543,416.00"
EWR - BZN,53540025387,EWR-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/53540025387,https://www.airlines-manager.com/aircraft/show/116047882,22:30,7:44,320,"$590,320.00","$543,416.00"
EWR - CAK,53511675066,EWR-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/53511675066,https://www.airlines-manager.com/aircraft/show/116047884,8:30,11:59,320,"$190,274.00","$166,172.00"
EWR - CAK,53511675067,EWR-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/53511675067,https://www.airlines-manager.com/aircraft/show/116047883,10:00,13:29,320,"$190,274.00","$166,172.00"
EWR - CAK,53531796461,EWR-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/53531796461,https://www.airlines-manager.com/aircraft/show/116047882,19:00,22:29,320,"$190,274.00","$166,172.00"
EWR - CAK,53536307224,EWR-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/53536307224,https://www.airlines-manager.com/aircraft/show/116047885,21:00,0:29,284,"$177,287.00","$153,553.00"
EWR - CDG,53492178859,EWR 56A-2 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/53492178859,https://www.airlines-manager.com/aircraft/show/106813008,3:00,18:14,748,"$2,328,133.00","$2,067,702.00"
EWR - CDG,53511675079,EWR 56A-3 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/53511675079,https://www.airlines-manager.com/aircraft/show/106813009,8:45,23:59,748,"$2,328,133.00","$2,067,702.00"
EWR - CDG,53531796445,EWR 56A-6 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/53531796445,https://www.airlines-manager.com/aircraft/show/106813012,19:00,10:14,559,"$1,742,337.00","$1,565,449.00"
EWR - CHS,53511675049,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/53511675049,https://www.airlines-manager.com/aircraft/show/110044463,8:30,12:59,310,"$288,564.00","$263,620.00"
EWR - CHS,53516803739,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/53516803739,https://www.airlines-manager.com/aircraft/show/110113039,12:00,16:29,112,"$137,777.00","$121,714.00"
EWR - CHS,53521848781,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/53521848781,https://www.airlines-manager.com/aircraft/show/110044466,14:15,18:44,310,"$288,564.00","$263,620.00"
EWR - CHS,53536307272,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/53536307272,https://www.airlines-manager.com/aircraft/show/110044465,21:15,1:44,310,"$288,564.00","$263,620.00"
EWR - CHS,53540025448,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/53540025448,https://www.airlines-manager.com/aircraft/show/110044464,23:00,3:29,279,"$271,719.00","$247,309.00"
EWR - CID,53492178680,EWR-FCA-CID 4,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/53492178680,https://www.airlines-manager.com/aircraft/show/116042863,1:15,6:59,310,"$356,225.00","$327,616.00"
EWR - CID,53492178681,EWR-FCA-CID 3,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/53492178681,https://www.airlines-manager.com/aircraft/show/116042864,2:15,7:59,310,"$356,225.00","$327,616.00"
EWR - CID,53511675194,EWR-FCA-CID 2,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/53511675194,https://www.airlines-manager.com/aircraft/show/116042865,10:00,15:44,310,"$356,225.00","$327,616.00"
EWR - CID,53536307311,EWR-FCA-CID 1,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/53536307311,https://www.airlines-manager.com/aircraft/show/116042866,22:00,3:44,293,"$344,795.00","$316,611.00"
EWR - CLE,53492178743,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/53492178743,https://www.airlines-manager.com/aircraft/show/106104450,1:45,5:29,112,"$91,793.00","$77,214.00"
EWR - CLE,53505148624,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/53505148624,https://www.airlines-manager.com/aircraft/show/105731236,5:00,8:44,320,"$197,828.00","$171,014.00"
EWR - CLE,53516803629,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/53516803629,https://www.airlines-manager.com/aircraft/show/88494376,11:00,14:44,320,"$197,828.00","$171,014.00"
EWR - CLE,53521848794,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/53521848794,https://www.airlines-manager.com/aircraft/show/88494377,14:45,18:29,320,"$197,828.00","$171,014.00"
EWR - CLE,53531796492,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/53531796492,https://www.airlines-manager.com/aircraft/show/88494375,19:15,22:59,320,"$197,828.00","$171,014.00"
EWR - CLT,53492178738,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/53492178738,https://www.airlines-manager.com/aircraft/show/104034462,1:45,5:59,216,"$189,426.00","$162,915.00"
EWR - CLT,53492178739,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/53492178739,https://www.airlines-manager.com/aircraft/show/99316501,2:45,6:59,216,"$189,426.00","$162,915.00"
EWR - CLT,53511675211,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/53511675211,https://www.airlines-manager.com/aircraft/show/104034464,10:00,14:14,216,"$189,426.00","$162,915.00"
EWR - CLT,53521848576,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/53521848576,https://www.airlines-manager.com/aircraft/show/104034463,13:00,17:14,216,"$189,426.00","$162,915.00"
EWR - CLT,53526170866,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/53526170866,https://www.airlines-manager.com/aircraft/show/104034462,15:45,19:59,216,"$189,426.00","$162,915.00"
EWR - CLT,53526170867,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/53526170867,https://www.airlines-manager.com/aircraft/show/99316501,16:45,20:59,216,"$189,426.00","$162,915.00"
EWR - CLT,53531796601,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/53531796601,https://www.airlines-manager.com/aircraft/show/104034464,20:00,0:14,216,"$189,426.00","$162,915.00"
EWR - CLT,53540025436,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/53540025436,https://www.airlines-manager.com/aircraft/show/104034463,23:00,3:14,216,"$189,426.00","$162,915.00"
EWR - CMH,53505148575,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/53505148575,https://www.airlines-manager.com/aircraft/show/104610409,4:30,8:29,310,"$222,861.00","$198,707.00"
EWR - CMH,53511675053,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/53511675053,https://www.airlines-manager.com/aircraft/show/104610410,8:30,12:29,310,"$222,861.00","$198,707.00"
EWR - CMH,53521848586,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/53521848586,https://www.airlines-manager.com/aircraft/show/96421247,13:00,16:59,112,"$103,792.00","$88,495.00"
EWR - CMH,53526171025,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/53526171025,https://www.airlines-manager.com/aircraft/show/104610407,17:15,21:14,310,"$222,861.00","$198,707.00"
EWR - CMH,53540025465,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/53540025465,https://www.airlines-manager.com/aircraft/show/104610408,23:15,3:14,310,"$222,861.00","$198,707.00"
EWR - COS,53492178702,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/53492178702,https://www.airlines-manager.com/aircraft/show/108834808,1:30,9:59,310,"$533,336.00","$491,684.00"
EWR - COS,53492178703,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/53492178703,https://www.airlines-manager.com/aircraft/show/108834811,3:30,11:59,310,"$533,336.00","$491,684.00"
EWR - COS,53521848648,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/53521848648,https://www.airlines-manager.com/aircraft/show/108466265,13:00,21:29,112,"$250,557.00","$222,739.00"
EWR - COS,53526170964,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/53526170964,https://www.airlines-manager.com/aircraft/show/108834810,16:30,0:59,310,"$533,336.00","$491,684.00"
EWR - COS,53531796415,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/53531796415,https://www.airlines-manager.com/aircraft/show/108834809,18:30,2:59,310,"$533,336.00","$491,684.00"
EWR - CUN,53492178604,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/53492178604,https://www.airlines-manager.com/aircraft/show/106581306,0:45,8:44,320,"$520,632.00","$472,856.00"
EWR - CUN,53492178605,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/53492178605,https://www.airlines-manager.com/aircraft/show/106581305,2:15,10:14,320,"$520,632.00","$472,856.00"
EWR - CUN,53521848555,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/53521848555,https://www.airlines-manager.com/aircraft/show/106581304,13:00,20:59,320,"$520,632.00","$472,856.00"
EWR - CUN,53521848556,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/53521848556,https://www.airlines-manager.com/aircraft/show/106581307,14:30,22:29,320,"$520,632.00","$472,856.00"
EWR - CUN,53536307349,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/53536307349,https://www.airlines-manager.com/aircraft/show/86238754,22:15,6:14,320,"$520,632.00","$472,856.00"
EWR - CVG,53492178546,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/53492178546,https://www.airlines-manager.com/aircraft/show/104610409,0:15,4:29,310,"$269,700.00","$241,975.00"
EWR - CVG,53492178547,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/53492178547,https://www.airlines-manager.com/aircraft/show/104610410,4:15,8:29,310,"$269,700.00","$241,975.00"
EWR - CVG,53511675040,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/53511675040,https://www.airlines-manager.com/aircraft/show/96421247,8:15,12:29,112,"$127,389.00","$109,763.00"
EWR - CVG,53511675041,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/53511675041,https://www.airlines-manager.com/aircraft/show/107576645,9:00,13:14,0,"$69,000.00","$50,078.00"
EWR - CVG,53521848583,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/53521848583,https://www.airlines-manager.com/aircraft/show/104610407,13:00,17:14,310,"$269,700.00","$241,975.00"
EWR - CVG,53531796458,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/53531796458,https://www.airlines-manager.com/aircraft/show/104610408,19:00,23:14,310,"$269,700.00","$241,975.00"
EWR - DEN,53492178730,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/53492178730,https://www.airlines-manager.com/aircraft/show/86270785,1:45,9:59,310,"$528,869.00","$464,763.00"
EWR - DEN,53492178731,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/53492178731,https://www.airlines-manager.com/aircraft/show/90452835,2:45,10:59,310,"$528,869.00","$464,763.00"
EWR - DEN,53511675186,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/53511675186,https://www.airlines-manager.com/aircraft/show/87153196,10:00,18:14,310,"$528,869.00","$464,763.00"
EWR - DEN,53516803633,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/53516803633,https://www.airlines-manager.com/aircraft/show/86270783,11:00,19:14,310,"$528,869.00","$464,763.00"
EWR - DEN,53526170942,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/53526170942,https://www.airlines-manager.com/aircraft/show/90452833,16:00,0:14,310,"$528,869.00","$464,763.00"
EWR - DEN,53526170943,EWR-DEN-SLC 6 B,A319-100,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/53526170943,https://www.airlines-manager.com/aircraft/show/105223076,17:00,1:14,198,"$398,370.00","$347,016.00"
EWR - DFW,53492178821,EWR-DFW-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/53492178821,https://www.airlines-manager.com/aircraft/show/90489724,2:30,9:59,320,"$473,208.00","$408,093.00"
EWR - DFW,53492178822,EWR-DFW-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/53492178822,https://www.airlines-manager.com/aircraft/show/86238753,3:30,10:59,320,"$473,208.00","$408,093.00"
EWR - DFW,53511675205,EWR-DFW-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/53511675205,https://www.airlines-manager.com/aircraft/show/90489725,10:00,17:29,320,"$473,208.00","$408,093.00"
EWR - DFW,53516803604,EWR-DFW-ATL 6 B,A319-100,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/53516803604,https://www.airlines-manager.com/aircraft/show/105222360,11:00,18:29,198,"$357,750.00","$312,148.00"
EWR - DFW,53516803605,EWR-DFW-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/53516803605,https://www.airlines-manager.com/aircraft/show/86238752,12:15,19:44,320,"$473,208.00","$408,093.00"
EWR - DFW,53531796479,EWR-DFW-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/53531796479,https://www.airlines-manager.com/aircraft/show/90489726,19:15,2:44,320,"$473,208.00","$408,093.00"
EWR - DSM,53492178760,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/53492178760,https://www.airlines-manager.com/aircraft/show/110113039,2:00,7:59,112,"$177,448.00","$157,408.00"
EWR - DSM,53492178761,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/53492178761,https://www.airlines-manager.com/aircraft/show/110044466,4:15,10:14,310,"$375,134.00","$344,684.00"
EWR - DSM,53516803742,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/53516803742,https://www.airlines-manager.com/aircraft/show/110044465,12:00,17:59,310,"$375,134.00","$344,684.00"
EWR - DSM,53521848692,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/53521848692,https://www.airlines-manager.com/aircraft/show/110044464,13:45,19:44,310,"$375,134.00","$344,684.00"
EWR - DSM,53540025369,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/53540025369,https://www.airlines-manager.com/aircraft/show/110044463,22:30,4:29,274,"$349,297.00","$319,847.00"
EWR - DTW,53492178889,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/53492178889,https://www.airlines-manager.com/aircraft/show/92003921,3:30,7:29,320,"$226,021.00","$188,774.00"
EWR - DTW,53511675191,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/53511675191,https://www.airlines-manager.com/aircraft/show/92003925,10:00,13:59,320,"$226,021.00","$188,774.00"
EWR - DTW,53521848684,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/53521848684,https://www.airlines-manager.com/aircraft/show/92003924,13:30,17:29,320,"$226,021.00","$188,774.00"
EWR - DTW,53536307305,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/53536307305,https://www.airlines-manager.com/aircraft/show/92003923,21:45,1:44,320,"$226,021.00","$188,774.00"
EWR - DTW,53536307306,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/53536307306,https://www.airlines-manager.com/aircraft/show/92003922,22:15,2:14,320,"$226,021.00","$188,774.00"
EWR - DTW,53540025421,EWR CARGO 1,A321neo-LR,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/53540025421,https://www.airlines-manager.com/aircraft/show/103406580,22:45,2:44,0,"$77,953.00","$46,687.00"
EWR - DUB,53492178893,EWR 56C-6 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/53492178893,https://www.airlines-manager.com/aircraft/show/106721561,3:30,16:59,598,"$1,654,265.00","$1,543,001.00"
EWR - DUB,53505148638,EWR 56C-1 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/53505148638,https://www.airlines-manager.com/aircraft/show/106721556,5:15,18:44,598,"$1,654,265.00","$1,543,001.00"
EWR - DUB,53511675240,EWR 56C-3 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/53511675240,https://www.airlines-manager.com/aircraft/show/106721558,10:30,23:59,598,"$1,654,265.00","$1,543,001.00"
EWR - EDI,53492178921,EWR 56C-7 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/53492178921,https://www.airlines-manager.com/aircraft/show/106721562,4:15,17:59,598,"$1,639,756.00","$1,532,465.00"
EWR - EDI,53505148721,EWR 56C-2 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/53505148721,https://www.airlines-manager.com/aircraft/show/106721557,6:00,19:44,598,"$1,639,756.00","$1,532,465.00"
EWR - EDI,53531796531,EWR 56C-2 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/53531796531,https://www.airlines-manager.com/aircraft/show/106721557,19:45,9:29,598,"$1,639,756.00","$1,532,465.00"
EWR - ELP,53492178557,EWR-ELP-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/53492178557,https://www.airlines-manager.com/aircraft/show/103365577,0:30,9:59,320,"$590,378.00","$540,596.00"
EWR - ELP,53492178558,EWR-ELP-SAT 5 B,A319-100,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/53492178558,https://www.airlines-manager.com/aircraft/show/110582847,2:30,11:59,198,"$444,845.00","$408,642.00"
EWR - ELP,53511675165,EWR-ELP-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/53511675165,https://www.airlines-manager.com/aircraft/show/103365578,10:00,19:29,320,"$590,378.00","$540,596.00"
EWR - ELP,53516803722,EWR-ELP-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/53516803722,https://www.airlines-manager.com/aircraft/show/103365575,12:00,21:29,320,"$590,378.00","$540,596.00"
EWR - ELP,53526170947,EWR-ELP-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/53526170947,https://www.airlines-manager.com/aircraft/show/103365576,16:15,1:44,320,"$590,378.00","$540,596.00"
EWR - FAR,53492178757,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/53492178757,https://www.airlines-manager.com/aircraft/show/86270784,1:45,8:29,310,"$423,560.00","$390,593.00"
EWR - FAR,53505148614,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/53505148614,https://www.airlines-manager.com/aircraft/show/86270786,5:00,11:44,310,"$423,560.00","$390,593.00"
EWR - FAR,53521848829,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/53521848829,https://www.airlines-manager.com/aircraft/show/86270787,15:00,21:44,310,"$423,560.00","$390,593.00"
EWR - FAR,53531796499,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/53531796499,https://www.airlines-manager.com/aircraft/show/90452834,19:15,1:59,310,"$423,560.00","$390,593.00"
EWR - FCA,53516803724,EWR-FCA-CID 1,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/53516803724,https://www.airlines-manager.com/aircraft/show/116042866,12:00,21:59,310,"$623,241.00","$578,539.00"
EWR - FCA,53526170841,EWR-FCA-CID 4,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/53526170841,https://www.airlines-manager.com/aircraft/show/116042863,15:15,1:14,310,"$623,241.00","$578,539.00"
EWR - FCA,53526170842,EWR-FCA-CID 3,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/53526170842,https://www.airlines-manager.com/aircraft/show/116042864,16:15,2:14,310,"$623,241.00","$578,539.00"
EWR - FCA,53536307310,EWR-FCA-CID 2,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/53536307310,https://www.airlines-manager.com/aircraft/show/116042865,22:00,7:59,310,"$623,241.00","$578,539.00"
EWR - FCO,53492178807,EWR 84A-6 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/53492178807,https://www.airlines-manager.com/aircraft/show/90656552,2:30,19:59,852,"$2,900,124.00","$2,626,210.00"
EWR - FCO,53516803757,EWR 84A-7 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/53516803757,https://www.airlines-manager.com/aircraft/show/94521249,12:00,5:29,852,"$2,900,124.00","$2,626,210.00"
EWR - FLL,53492178689,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/53492178689,https://www.airlines-manager.com/aircraft/show/107576645,1:15,7:29,0,"$102,887.00","$77,339.00"
EWR - FLL,53492178690,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/53492178690,https://www.airlines-manager.com/aircraft/show/92003924,3:45,9:59,320,"$388,966.00","$348,953.00"
EWR - FLL,53505148686,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/53505148686,https://www.airlines-manager.com/aircraft/show/92003922,5:45,11:59,320,"$388,966.00","$348,953.00"
EWR - FLL,53516803654,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/53516803654,https://www.airlines-manager.com/aircraft/show/92003921,11:00,17:14,320,"$388,966.00","$348,953.00"
EWR - FLL,53516803655,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/53516803655,https://www.airlines-manager.com/aircraft/show/92003923,12:00,18:14,320,"$388,966.00","$348,953.00"
EWR - FLL,53531796301,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/53531796301,https://www.airlines-manager.com/aircraft/show/92003925,17:30,23:44,320,"$388,966.00","$348,953.00"
EWR - FRA,53492178827,EWR 56B-2 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/53492178827,https://www.airlines-manager.com/aircraft/show/90656556,2:45,18:44,748,"$2,440,394.00","$2,175,490.00"
EWR - FRA,53505148568,EWR 56B-7 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/53505148568,https://www.airlines-manager.com/aircraft/show/89124072,4:30,20:29,748,"$2,440,394.00","$2,175,490.00"
EWR - FRA,53505148569,EWR 56B-5 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/53505148569,https://www.airlines-manager.com/aircraft/show/94521253,6:15,22:14,748,"$2,202,225.00","$2,001,233.00"
EWR - FSD,53492178930,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/53492178930,https://www.airlines-manager.com/aircraft/show/107161240,4:15,10:59,310,"$411,278.00","$378,797.00"
EWR - FSD,53511675103,EWR-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/53511675103,https://www.airlines-manager.com/aircraft/show/86782214,9:00,15:44,112,"$193,854.00","$172,324.00"
EWR - FSD,53516803691,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/53516803691,https://www.airlines-manager.com/aircraft/show/107161239,11:00,17:44,310,"$411,278.00","$378,797.00"
EWR - FSD,53526170838,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/53526170838,https://www.airlines-manager.com/aircraft/show/107161241,15:15,21:59,310,"$411,278.00","$378,797.00"
EWR - FSD,53531796375,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/53531796375,https://www.airlines-manager.com/aircraft/show/107161238,18:15,0:59,279,"$386,833.00","$355,346.00"
EWR - GRR,53511675058,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/53511675058,https://www.airlines-manager.com/aircraft/show/116042862,8:30,12:59,310,"$277,025.00","$252,083.00"
EWR - GRR,53521848698,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/53521848698,https://www.airlines-manager.com/aircraft/show/116042859,14:00,18:29,310,"$277,025.00","$252,083.00"
EWR - GRR,53531796509,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/53531796509,https://www.airlines-manager.com/aircraft/show/116042860,19:30,23:59,310,"$277,025.00","$252,083.00"
EWR - GRR,53536307211,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/53536307211,https://www.airlines-manager.com/aircraft/show/116042861,20:45,1:14,310,"$277,025.00","$252,083.00"
EWR - IAH,53492178880,EWR-IAH-LAS 3,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/53492178880,https://www.airlines-manager.com/aircraft/show/105859512,3:30,10:59,338,"$517,432.00","$469,570.00"
EWR - IAH,53505148563,EWR-IAH-LAS 5,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/53505148563,https://www.airlines-manager.com/aircraft/show/105859514,4:30,11:59,338,"$517,432.00","$469,570.00"
EWR - IAH,53505148564,EWR-IAH-LAS 1,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/53505148564,https://www.airlines-manager.com/aircraft/show/105859510,7:30,14:59,338,"$517,432.00","$469,570.00"
EWR - IAH,53516803649,EWR-IAH-LAS 2,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/53516803649,https://www.airlines-manager.com/aircraft/show/105859511,11:00,18:29,338,"$517,432.00","$469,570.00"
EWR - IAH,53516803650,EWR-IAH-LAS 4,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/53516803650,https://www.airlines-manager.com/aircraft/show/105859513,12:00,19:29,338,"$517,432.00","$469,570.00"
EWR - IAH,53531796418,EWR-IAH-LAS 6,ERJ-175,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/53531796418,https://www.airlines-manager.com/aircraft/show/105864236,18:45,2:14,112,"$225,538.00","$193,331.00"
EWR - ICT,53492178655,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/53492178655,https://www.airlines-manager.com/aircraft/show/108834810,1:00,7:59,310,"$441,027.00","$406,327.00"
EWR - ICT,53492178656,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/53492178656,https://www.airlines-manager.com/aircraft/show/108834809,3:00,9:59,310,"$441,027.00","$406,327.00"
EWR - ICT,53516803675,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/53516803675,https://www.airlines-manager.com/aircraft/show/108834808,11:00,17:59,310,"$441,027.00","$406,327.00"
EWR - ICT,53521848647,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/53521848647,https://www.airlines-manager.com/aircraft/show/108834811,13:00,19:59,310,"$441,027.00","$406,327.00"
EWR - ICT,53536307288,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/53536307288,https://www.airlines-manager.com/aircraft/show/108466265,21:30,4:29,112,"$208,777.00","$185,757.00"
EWR - IND,53492178580,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/53492178580,https://www.airlines-manager.com/aircraft/show/88494376,0:30,4:59,320,"$294,206.00","$262,638.00"
EWR - IND,53492178581,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/53492178581,https://www.airlines-manager.com/aircraft/show/88494377,4:15,8:44,320,"$294,206.00","$262,638.00"
EWR - IND,53516803606,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/53516803606,https://www.airlines-manager.com/aircraft/show/88494375,11:00,15:29,320,"$294,206.00","$262,638.00"
EWR - IND,53531796286,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/53531796286,https://www.airlines-manager.com/aircraft/show/106104450,17:30,21:59,112,"$140,444.00","$122,789.00"
EWR - IND,53536307216,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/53536307216,https://www.airlines-manager.com/aircraft/show/105731236,20:45,1:14,320,"$294,206.00","$262,638.00"
EWR - JAN,53492178763,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/53492178763,https://www.airlines-manager.com/aircraft/show/90452834,2:00,8:14,310,"$387,663.00","$356,982.00"
EWR - JAN,53511675047,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/53511675047,https://www.airlines-manager.com/aircraft/show/86270784,8:30,14:44,310,"$387,663.00","$356,982.00"
EWR - JAN,53516803733,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/53516803733,https://www.airlines-manager.com/aircraft/show/86270786,12:00,18:14,310,"$387,663.00","$356,982.00"
EWR - JAN,53536307302,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/53536307302,https://www.airlines-manager.com/aircraft/show/86270787,21:45,3:59,310,"$387,663.00","$356,982.00"
EWR - JAX,53492178799,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/53492178799,https://www.airlines-manager.com/aircraft/show/104610407,2:15,7:29,310,"$336,410.00","$307,387.00"
EWR - JAX,53511675034,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/53511675034,https://www.airlines-manager.com/aircraft/show/104610408,8:15,13:29,310,"$336,410.00","$307,387.00"
EWR - JAX,53521848723,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/53521848723,https://www.airlines-manager.com/aircraft/show/104610409,14:00,19:14,310,"$336,410.00","$307,387.00"
EWR - JAX,53531796368,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/53531796368,https://www.airlines-manager.com/aircraft/show/104610410,18:00,23:14,310,"$336,410.00","$307,387.00"
EWR - JAX,53536307308,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/53536307308,https://www.airlines-manager.com/aircraft/show/96421247,22:00,3:14,112,"$159,716.00","$140,870.00"
EWR - KEF,53526171018,EWR 56C-6 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/53526171018,https://www.airlines-manager.com/aircraft/show/106721561,17:00,4:14,598,"$1,336,918.00","$1,247,907.00"
EWR - KEF,53531796333,EWR 56C-7 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/53531796333,https://www.airlines-manager.com/aircraft/show/106721562,18:00,5:14,598,"$1,336,918.00","$1,247,907.00"
EWR - KEF,53531796334,EWR 56C-1 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/53531796334,https://www.airlines-manager.com/aircraft/show/106721556,18:45,5:59,598,"$1,336,918.00","$1,247,907.00"
EWR - LAS,53492178531,EWR-IAH-LAS 2,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/53492178531,https://www.airlines-manager.com/aircraft/show/105859511,0:15,10:59,338,"$734,476.00","$670,312.00"
EWR - LAS,53492178532,EWR-IAH-LAS 4,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/53492178532,https://www.airlines-manager.com/aircraft/show/105859513,1:15,11:59,338,"$734,476.00","$670,312.00"
EWR - LAS,53492178533,EWR-IAH-LAS 6,ERJ-175,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/53492178533,https://www.airlines-manager.com/aircraft/show/105864236,2:15,12:59,112,"$317,374.00","$273,329.00"
EWR - LAS,53516803758,EWR-IAH-LAS 5,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/53516803758,https://www.airlines-manager.com/aircraft/show/105859514,12:00,22:44,338,"$734,476.00","$670,312.00"
EWR - LAS,53521848814,EWR-IAH-LAS 1,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/53521848814,https://www.airlines-manager.com/aircraft/show/105859510,15:00,1:44,338,"$734,476.00","$670,312.00"
EWR - LAS,53526170977,EWR-IAH-LAS 3,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/53526170977,https://www.airlines-manager.com/aircraft/show/105859512,16:45,3:29,338,"$734,476.00","$670,312.00"
EWR - LAX,53492178463,EWR-SFO-LAX 4,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/53492178463,https://www.airlines-manager.com/aircraft/show/89233030,0:00,11:29,400,"$933,133.00","$841,910.00"
EWR - LAX,53492178464,EWR-SFO-LAX 5,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/53492178464,https://www.airlines-manager.com/aircraft/show/89233027,2:00,13:29,400,"$933,133.00","$841,910.00"
EWR - LAX,53516803783,EWR-SFO-LAX 1,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/53516803783,https://www.airlines-manager.com/aircraft/show/83716137,12:30,23:59,400,"$933,133.00","$841,910.00"
EWR - LAX,53521848770,EWR-SFO-LAX 2,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/53521848770,https://www.airlines-manager.com/aircraft/show/89233028,14:00,1:29,400,"$933,133.00","$841,910.00"
EWR - LAX,53526170849,EWR-SFO-LAX 3,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/53526170849,https://www.airlines-manager.com/aircraft/show/89233029,15:30,2:59,400,"$933,133.00","$841,910.00"
EWR - LHR,53492178786,EWR 56A-5 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/53492178786,https://www.airlines-manager.com/aircraft/show/106813011,2:15,16:44,748,"$2,220,102.00","$1,968,499.00"
EWR - LHR,53516803780,EWR 56A-1 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/53516803780,https://www.airlines-manager.com/aircraft/show/106813007,12:30,2:59,748,"$2,220,102.00","$1,968,499.00"
EWR - LHR,53531796384,EWR 56A-2 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/53531796384,https://www.airlines-manager.com/aircraft/show/106813008,18:15,8:44,748,"$2,003,986.00","$1,809,626.00"
EWR - LIS,53505148655,EWR 84A-1 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/53505148655,https://www.airlines-manager.com/aircraft/show/90656554,5:30,19:44,852,"$2,328,457.00","$2,120,122.00"
EWR - LIS,53516803775,EWR 84A-5 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/53516803775,https://www.airlines-manager.com/aircraft/show/94521250,12:15,2:29,852,"$2,328,457.00","$2,120,122.00"
EWR - LIT,53511675048,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/53511675048,https://www.airlines-manager.com/aircraft/show/86270787,8:30,14:44,310,"$393,416.00","$362,459.00"
EWR - LIT,53521848639,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/53521848639,https://www.airlines-manager.com/aircraft/show/90452834,13:00,19:14,310,"$393,416.00","$362,459.00"
EWR - LIT,53531796515,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/53531796515,https://www.airlines-manager.com/aircraft/show/86270784,19:30,1:44,310,"$393,416.00","$362,459.00"
EWR - LIT,53540025404,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/53540025404,https://www.airlines-manager.com/aircraft/show/86270786,22:45,4:59,310,"$393,416.00","$362,459.00"
EWR - MAD,53492178462,EWR 56B-4 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/53492178462,https://www.airlines-manager.com/aircraft/show/94521247,0:00,14:59,748,"$2,289,510.00","$2,036,551.00"
EWR - MAD,53536307190,EWR 56B-7 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/53536307190,https://www.airlines-manager.com/aircraft/show/89124072,20:30,11:29,748,"$2,289,510.00","$2,036,551.00"
EWR - MAD,53536307191,EWR 56B-5 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/53536307191,https://www.airlines-manager.com/aircraft/show/94521253,22:15,13:14,748,"$2,065,725.00","$1,872,334.00"
EWR - MCI,53492178903,EWR-ELP-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/53492178903,https://www.airlines-manager.com/aircraft/show/103365578,3:45,9:59,320,"$393,086.00","$354,110.00"
EWR - MCI,53505148673,EWR-ELP-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/53505148673,https://www.airlines-manager.com/aircraft/show/103365575,5:45,11:59,320,"$393,086.00","$354,110.00"
EWR - MCI,53511675214,EWR-ELP-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/53511675214,https://www.airlines-manager.com/aircraft/show/103365576,10:00,16:14,320,"$393,086.00","$354,110.00"
EWR - MCI,53521848672,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/53521848672,https://www.airlines-manager.com/aircraft/show/107576645,13:15,19:29,0,"$103,090.00","$77,943.00"
EWR - MCI,53531796385,EWR-ELP-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/53531796385,https://www.airlines-manager.com/aircraft/show/103365577,18:15,0:29,320,"$393,086.00","$354,110.00"
EWR - MCI,53536307160,EWR-ELP-SAT 5 B,A319-100,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/53536307160,https://www.airlines-manager.com/aircraft/show/110582847,20:15,2:29,198,"$297,566.00","$269,839.00"
EWR - MCO,53492178748,EWR-IAH-LAS 1,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/53492178748,https://www.airlines-manager.com/aircraft/show/105859510,1:45,7:29,338,"$389,629.00","$350,334.00"
EWR - MCO,53516803626,EWR-IAH-LAS 3,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/53516803626,https://www.airlines-manager.com/aircraft/show/105859512,11:00,16:44,338,"$389,629.00","$350,334.00"
EWR - MCO,53521848574,EWR-IAH-LAS 6,ERJ-175,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/53521848574,https://www.airlines-manager.com/aircraft/show/105864236,13:00,18:44,112,"$170,762.00","$144,844.00"
EWR - MCO,53531796410,EWR-IAH-LAS 2,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/53531796410,https://www.airlines-manager.com/aircraft/show/105859511,18:30,0:14,338,"$389,629.00","$350,334.00"
EWR - MCO,53531796411,EWR-IAH-LAS 4,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/53531796411,https://www.airlines-manager.com/aircraft/show/105859513,19:30,1:14,338,"$389,629.00","$350,334.00"
EWR - MCO,53540025409,EWR-IAH-LAS 5,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/53540025409,https://www.airlines-manager.com/aircraft/show/105859514,22:45,4:29,335,"$387,576.00","$348,345.00"
EWR - MEM,53492178685,EWR-RNO-MEM 4,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/53492178685,https://www.airlines-manager.com/aircraft/show/99920619,1:15,6:59,320,"$361,672.00","$324,614.00"
EWR - MEM,53492178686,EWR-RNO-MEM 3,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/53492178686,https://www.airlines-manager.com/aircraft/show/99920620,3:45,9:29,320,"$361,672.00","$324,614.00"
EWR - MEM,53511675231,EWR-RNO-MEM 2,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/53511675231,https://www.airlines-manager.com/aircraft/show/99920621,10:15,15:59,320,"$361,672.00","$324,614.00"
EWR - MEM,53531796512,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/53531796512,https://www.airlines-manager.com/aircraft/show/107576645,19:30,1:14,0,"$96,286.00","$72,851.00"
EWR - MEM,53536307166,EWR-RNO-MEM 5 B,A319-100,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/53536307166,https://www.airlines-manager.com/aircraft/show/100096560,20:15,1:59,198,"$274,266.00","$248,050.00"
EWR - MEM,53536307167,EWR-RNO-MEM 1,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/53536307167,https://www.airlines-manager.com/aircraft/show/99920622,21:30,3:14,320,"$361,672.00","$324,614.00"
EWR - MEX,53492178733,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/53492178733,https://www.airlines-manager.com/aircraft/show/92003923,1:45,11:59,320,"$638,807.00","$575,207.00"
EWR - MEX,53511675210,EWR-DTW-YYZ 6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/53511675210,https://www.airlines-manager.com/aircraft/show/104258433,10:00,20:14,216,"$486,413.00","$439,908.00"
EWR - MEX,53516803770,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/53516803770,https://www.airlines-manager.com/aircraft/show/92003922,12:00,22:14,320,"$638,807.00","$575,207.00"
EWR - MEX,53526171024,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/53526171024,https://www.airlines-manager.com/aircraft/show/92003921,17:15,3:29,320,"$638,807.00","$575,207.00"
EWR - MEX,53531796298,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/53531796298,https://www.airlines-manager.com/aircraft/show/92003924,17:30,3:44,320,"$638,807.00","$575,207.00"
EWR - MEX,53536307151,EWR-DTW-YYZ 6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/53536307151,https://www.airlines-manager.com/aircraft/show/104258433,20:15,6:29,216,"$486,413.00","$439,908.00"
EWR - MEX,53540025484,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/53540025484,https://www.airlines-manager.com/aircraft/show/92003925,23:45,9:59,298,"$600,687.00","$538,625.00"
EWR - MHT,53492178904,EWR-FCA-CID 1,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/53492178904,https://www.airlines-manager.com/aircraft/show/116042866,3:45,6:44,310,"$126,333.00","$107,196.00"
EWR - MHT,53511675108,EWR-FCA-CID 4,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/53511675108,https://www.airlines-manager.com/aircraft/show/116042863,9:00,11:59,310,"$126,333.00","$107,196.00"
EWR - MHT,53511675109,EWR-FCA-CID 3,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/53511675109,https://www.airlines-manager.com/aircraft/show/116042864,10:00,12:59,310,"$126,333.00","$107,196.00"
EWR - MHT,53516803657,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/53516803657,https://www.airlines-manager.com/aircraft/show/98887257,11:00,13:59,112,"$56,299.00","$44,452.00"
EWR - MHT,53526170863,EWR-FCA-CID 2,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/53526170863,https://www.airlines-manager.com/aircraft/show/116042865,15:45,18:44,310,"$126,333.00","$107,196.00"
EWR - MIA,53492178818,EWR-MIA-ORD 5,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/53492178818,https://www.airlines-manager.com/aircraft/show/113251309,2:30,8:44,338,"$429,805.00","$386,719.00"
EWR - MIA,53492178819,EWR-MIA-ORD 1,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/53492178819,https://www.airlines-manager.com/aircraft/show/113251305,4:00,10:14,338,"$429,805.00","$386,719.00"
EWR - MIA,53511675200,EWR-MIA-ORD 2,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/53511675200,https://www.airlines-manager.com/aircraft/show/113251306,10:00,16:14,338,"$429,805.00","$386,719.00"
EWR - MIA,53516803698,EWR-MIA-ORD 4,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/53516803698,https://www.airlines-manager.com/aircraft/show/113251308,11:00,17:14,338,"$429,805.00","$386,719.00"
EWR - MIA,53526170963,EWR-MIA-ORD 3,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/53526170963,https://www.airlines-manager.com/aircraft/show/113251307,16:30,22:44,338,"$429,805.00","$386,719.00"
EWR - MKE,53492178867,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/53492178867,https://www.airlines-manager.com/aircraft/show/96421247,3:15,8:14,112,"$149,880.00","$131,888.00"
EWR - MKE,53505148784,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/53505148784,https://www.airlines-manager.com/aircraft/show/104610407,7:30,12:29,310,"$315,504.00","$287,619.00"
EWR - MKE,53521848722,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/53521848722,https://www.airlines-manager.com/aircraft/show/104610408,14:00,18:59,310,"$315,504.00","$287,619.00"
EWR - MKE,53531796472,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/53531796472,https://www.airlines-manager.com/aircraft/show/104610409,19:15,0:14,310,"$315,504.00","$287,619.00"
EWR - MKE,53540025467,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/53540025467,https://www.airlines-manager.com/aircraft/show/104610410,23:15,4:14,310,"$315,504.00","$287,619.00"
EWR - MSN,53492178804,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/53492178804,https://www.airlines-manager.com/aircraft/show/116042859,2:30,7:44,310,"$330,385.00","$303,141.00"
EWR - MSN,53511675083,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/53511675083,https://www.airlines-manager.com/aircraft/show/116042860,8:45,13:59,310,"$330,385.00","$303,141.00"
EWR - MSN,53511675084,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/53511675084,https://www.airlines-manager.com/aircraft/show/116042861,10:00,15:14,310,"$330,385.00","$303,141.00"
EWR - MSN,53536307246,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/53536307246,https://www.airlines-manager.com/aircraft/show/116042862,21:00,2:14,310,"$330,385.00","$303,141.00"
EWR - MSO,53492178627,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/53492178627,https://www.airlines-manager.com/aircraft/show/107161238,1:00,10:59,310,"$615,656.00","$570,709.00"
EWR - MSO,53516803701,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/53516803701,https://www.airlines-manager.com/aircraft/show/107161240,11:00,20:59,310,"$615,656.00","$570,709.00"
EWR - MSO,53526170875,EWR-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/53526170875,https://www.airlines-manager.com/aircraft/show/86782214,15:45,1:44,112,"$289,178.00","$258,695.00"
EWR - MSO,53531796309,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/53531796309,https://www.airlines-manager.com/aircraft/show/107161239,17:45,3:44,310,"$615,656.00","$570,709.00"
EWR - MSO,53536307319,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/53536307319,https://www.airlines-manager.com/aircraft/show/107161241,22:00,7:59,310,"$615,656.00","$570,709.00"
EWR - MSP,53505148611,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/53505148611,https://www.airlines-manager.com/aircraft/show/86270783,5:00,10:59,310,"$374,578.00","$335,343.00"
EWR - MSP,53511675168,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/53511675168,https://www.airlines-manager.com/aircraft/show/90452833,10:00,15:59,310,"$374,578.00","$335,343.00"
EWR - MSP,53516803603,EWR-DEN-SLC 6 B,A319-100,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/53516803603,https://www.airlines-manager.com/aircraft/show/105223076,11:00,16:59,198,"$283,918.00","$252,487.00"
EWR - MSP,53531796390,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/53531796390,https://www.airlines-manager.com/aircraft/show/87153196,18:15,0:14,310,"$374,578.00","$335,343.00"
EWR - MSP,53531796391,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/53531796391,https://www.airlines-manager.com/aircraft/show/86270785,19:45,1:44,310,"$374,578.00","$335,343.00"
EWR - MSP,53536307215,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/53536307215,https://www.airlines-manager.com/aircraft/show/90452835,20:45,2:44,310,"$374,578.00","$335,343.00"
EWR - MSY,53492178876,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/53492178876,https://www.airlines-manager.com/aircraft/show/90717079,3:15,9:59,310,"$414,563.00","$379,812.00"
EWR - MSY,53511675180,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/53511675180,https://www.airlines-manager.com/aircraft/show/90717077,10:00,16:44,310,"$414,563.00","$379,812.00"
EWR - MSY,53516803656,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/53516803656,https://www.airlines-manager.com/aircraft/show/90717076,11:00,17:44,310,"$414,563.00","$379,812.00"
EWR - MSY,53531796350,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/53531796350,https://www.airlines-manager.com/aircraft/show/90717078,18:00,0:44,310,"$414,563.00","$379,812.00"
EWR - MSY,53531796351,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/53531796351,https://www.airlines-manager.com/aircraft/show/95950199,20:00,2:44,310,"$414,563.00","$379,812.00"
EWR - MUC,53492178474,EWR 56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/53492178474,https://www.airlines-manager.com/aircraft/show/106721559,0:00,16:29,598,"$2,038,935.00","$1,888,864.00"
EWR - MUC,53516803632,EWR 56C-5 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/53516803632,https://www.airlines-manager.com/aircraft/show/106721560,11:00,3:29,598,"$2,038,935.00","$1,888,864.00"
EWR - MUC,53531796401,EWR 56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/53531796401,https://www.airlines-manager.com/aircraft/show/106721559,18:30,10:59,598,"$2,038,935.00","$1,888,864.00"
EWR - MXP,53511675199,EWR 84B-4  B2,777-300,https://www.airlines-manager.com/network/showline/49921908,https://www.airlines-manager.com/network/showflight/53511675199,https://www.airlines-manager.com/aircraft/show/117958698,10:00,2:29,852,"$2,682,820.00","$2,437,530.00"
EWR - MXP,53536307320,EWR 84B-7 B2,777-300,https://www.airlines-manager.com/network/showline/49921908,https://www.airlines-manager.com/network/showflight/53536307320,https://www.airlines-manager.com/aircraft/show/117958701,22:00,14:29,852,"$2,682,820.00","$2,437,530.00"
EWR - NAS,53505148634,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/53505148634,https://www.airlines-manager.com/aircraft/show/98379319,5:15,11:44,310,"$395,405.00","$362,404.00"
EWR - NAS,53521848592,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/53521848592,https://www.airlines-manager.com/aircraft/show/98379317,13:00,19:29,310,"$395,405.00","$362,404.00"
EWR - NAS,53531796361,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/53531796361,https://www.airlines-manager.com/aircraft/show/98379316,18:00,0:29,310,"$395,405.00","$362,404.00"
EWR - NAS,53531796362,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/53531796362,https://www.airlines-manager.com/aircraft/show/98379318,19:00,1:29,310,"$395,405.00","$362,404.00"
EWR - NAS,53536307253,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/53536307253,https://www.airlines-manager.com/aircraft/show/98379315,21:00,3:29,289,"$371,894.00","$339,683.00"
EWR - NRT,53492178450,EWR 56A-4 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/53492178450,https://www.airlines-manager.com/aircraft/show/106813010,0:00,2:14,748,"$3,980,848.00","$3,582,146.00"
EWR - NRT,53511675229,EWR 56A-7 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/53511675229,https://www.airlines-manager.com/aircraft/show/106813013,10:15,12:29,748,"$3,955,032.00","$3,565,413.00"
EWR - NRT,53526170983,EWR 56A-5 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/53526170983,https://www.airlines-manager.com/aircraft/show/106813011,16:45,18:59,748,"$3,558,007.00","$3,272,841.00"
EWR - OAK,53492178647,EWR-OAK-SJC 5,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/53492178647,https://www.airlines-manager.com/aircraft/show/104717239,1:00,12:59,310,"$735,917.00","$680,343.00"
EWR - OAK,53511675150,EWR-OAK-SJC 1,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/53511675150,https://www.airlines-manager.com/aircraft/show/104717243,10:00,21:59,310,"$735,917.00","$680,343.00"
EWR - OAK,53516803763,EWR-OAK-SJC 2,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/53516803763,https://www.airlines-manager.com/aircraft/show/104717242,12:00,23:59,310,"$735,917.00","$680,343.00"
EWR - OAK,53521848724,EWR-OAK-SJC 3,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/53521848724,https://www.airlines-manager.com/aircraft/show/104717241,14:00,1:59,310,"$735,917.00","$680,343.00"
EWR - OAK,53540025378,EWR-OAK-SJC 4,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/53540025378,https://www.airlines-manager.com/aircraft/show/104717240,22:30,10:29,310,"$735,917.00","$680,343.00"
EWR - OKC,53492178744,EWR-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/53492178744,https://www.airlines-manager.com/aircraft/show/86782214,1:45,8:59,112,"$217,580.00","$193,834.00"
EWR - OKC,53492178745,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/53492178745,https://www.airlines-manager.com/aircraft/show/107161239,3:45,10:59,310,"$460,963.00","$425,234.00"
EWR - OKC,53505148795,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/53505148795,https://www.airlines-manager.com/aircraft/show/107161241,8:00,15:14,310,"$460,963.00","$425,234.00"
EWR - OKC,53516803692,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/53516803692,https://www.airlines-manager.com/aircraft/show/107161238,11:00,18:14,310,"$460,963.00","$425,234.00"
EWR - OKC,53536307249,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/53536307249,https://www.airlines-manager.com/aircraft/show/107161240,21:00,4:14,310,"$460,963.00","$425,234.00"
EWR - OMA,53492178820,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/53492178820,https://www.airlines-manager.com/aircraft/show/104418460,2:30,8:59,310,"$401,849.00","$368,874.00"
EWR - OMA,53505148777,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/53505148777,https://www.airlines-manager.com/aircraft/show/104418463,7:30,13:59,310,"$401,849.00","$368,874.00"
EWR - OMA,53511675208,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/53511675208,https://www.airlines-manager.com/aircraft/show/104418462,10:00,16:29,310,"$401,849.00","$368,874.00"
EWR - OMA,53526170992,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/53526170992,https://www.airlines-manager.com/aircraft/show/104418461,17:00,23:29,310,"$401,849.00","$368,874.00"
EWR - OMA,53531796466,EWR-BOI-PBI 5 B,A319-100,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/53531796466,https://www.airlines-manager.com/aircraft/show/110582846,19:00,1:29,194,"$300,961.00","$274,675.00"
EWR - ONT,53492178475,EWR-SMF-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/53492178475,https://www.airlines-manager.com/aircraft/show/94889153,0:00,11:29,320,"$702,981.00","$644,277.00"
EWR - ONT,53492178476,EWR-SMF-ONT 5,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/53492178476,https://www.airlines-manager.com/aircraft/show/94889154,2:00,13:29,320,"$702,981.00","$644,277.00"
EWR - ONT,53516803719,EWR-SMF-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/53516803719,https://www.airlines-manager.com/aircraft/show/94889150,11:45,23:14,320,"$702,981.00","$644,277.00"
EWR - ONT,53521848679,EWR-SMF-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/53521848679,https://www.airlines-manager.com/aircraft/show/94889151,13:15,0:44,320,"$702,981.00","$644,277.00"
EWR - ONT,53521848680,EWR-SMF-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/53521848680,https://www.airlines-manager.com/aircraft/show/94889152,14:45,2:14,298,"$673,090.00","$615,809.00"
EWR - ORD,53505148608,EWR-MIA-ORD 2,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/53505148608,https://www.airlines-manager.com/aircraft/show/113251306,5:00,9:59,338,"$340,455.00","$293,420.00"
EWR - ORD,53511675228,EWR-MIA-ORD 1,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/53511675228,https://www.airlines-manager.com/aircraft/show/113251305,10:15,15:14,338,"$340,455.00","$293,420.00"
EWR - ORD,53516803712,EWR-MIA-ORD 3,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/53516803712,https://www.airlines-manager.com/aircraft/show/113251307,11:30,16:29,338,"$340,455.00","$293,420.00"
EWR - ORD,53526171023,EWR-MIA-ORD 4,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/53526171023,https://www.airlines-manager.com/aircraft/show/113251308,17:15,22:14,338,"$340,455.00","$293,420.00"
EWR - ORD,53536307280,EWR-MIA-ORD 5,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/53536307280,https://www.airlines-manager.com/aircraft/show/113251309,21:30,2:29,338,"$340,455.00","$293,420.00"
EWR - ORF,53492178780,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/53492178780,https://www.airlines-manager.com/aircraft/show/88494375,2:15,5:29,320,"$153,174.00","$129,624.00"
EWR - ORF,53516803637,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/53516803637,https://www.airlines-manager.com/aircraft/show/106104450,11:00,14:14,112,"$70,275.00","$57,673.00"
EWR - ORF,53521848785,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/53521848785,https://www.airlines-manager.com/aircraft/show/105731236,14:15,17:29,320,"$153,174.00","$129,624.00"
EWR - ORF,53531796341,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/53531796341,https://www.airlines-manager.com/aircraft/show/88494376,18:00,21:14,320,"$153,174.00","$129,624.00"
EWR - ORF,53536307299,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/53536307299,https://www.airlines-manager.com/aircraft/show/88494377,21:45,0:59,320,"$153,174.00","$129,624.00"
EWR - PBI,53492178695,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/53492178695,https://www.airlines-manager.com/aircraft/show/104418463,1:30,7:29,310,"$379,359.00","$346,918.00"
EWR - PBI,53492178696,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/53492178696,https://www.airlines-manager.com/aircraft/show/104418462,3:00,8:59,310,"$379,359.00","$346,918.00"
EWR - PBI,53516803617,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/53516803617,https://www.airlines-manager.com/aircraft/show/104418461,11:00,16:59,310,"$379,359.00","$346,918.00"
EWR - PBI,53521848646,EWR-BOI-PBI 5 B,A319-100,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/53521848646,https://www.airlines-manager.com/aircraft/show/110582846,13:00,18:59,198,"$287,177.00","$261,181.00"
EWR - PBI,53536307200,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/53536307200,https://www.airlines-manager.com/aircraft/show/104418460,20:30,2:29,310,"$379,359.00","$346,918.00"
EWR - PDX,53492178448,EWR-PHX-PDX 3,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/53492178448,https://www.airlines-manager.com/aircraft/show/113595213,0:00,11:29,338,"$757,836.00","$705,129.00"
EWR - PDX,53492178449,EWR-PHX-PDX 4,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/53492178449,https://www.airlines-manager.com/aircraft/show/113595214,2:00,13:29,338,"$757,836.00","$705,129.00"
EWR - PDX,53505148606,EWR-PHX-PDX 5,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/53505148606,https://www.airlines-manager.com/aircraft/show/113595215,5:00,16:29,338,"$757,836.00","$705,129.00"
EWR - PDX,53505148607,EWR-PHX-PDX 6 B,A319-100,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/53505148607,https://www.airlines-manager.com/aircraft/show/99219630,6:30,17:59,198,"$526,507.00","$481,810.00"
EWR - PDX,53511675234,EWR-PHX-PDX 1,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/53511675234,https://www.airlines-manager.com/aircraft/show/113595211,10:15,21:44,338,"$757,836.00","$705,129.00"
EWR - PDX,53516803777,EWR-PHX-PDX 2,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/53516803777,https://www.airlines-manager.com/aircraft/show/113595212,12:15,23:44,304,"$711,269.00","$660,445.00"
EWR - PHX,53492178414,EWR-PHX-PDX 1,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/53492178414,https://www.airlines-manager.com/aircraft/show/113595211,0:00,10:14,338,"$704,047.00","$646,677.00"
EWR - PHX,53492178415,EWR-PHX-PDX 2,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/53492178415,https://www.airlines-manager.com/aircraft/show/113595212,2:00,12:14,338,"$704,047.00","$646,677.00"
EWR - PHX,53516803713,EWR-PHX-PDX 3,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/53516803713,https://www.airlines-manager.com/aircraft/show/113595213,11:30,21:44,338,"$704,047.00","$646,677.00"
EWR - PHX,53521848682,EWR-PHX-PDX 4,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/53521848682,https://www.airlines-manager.com/aircraft/show/113595214,13:30,23:44,338,"$704,047.00","$646,677.00"
EWR - PHX,53526170970,EWR-PHX-PDX 5,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/53526170970,https://www.airlines-manager.com/aircraft/show/113595215,16:30,2:44,338,"$704,047.00","$646,677.00"
EWR - PHX,53531796372,EWR-PHX-PDX 6 B,A319-100,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/53531796372,https://www.airlines-manager.com/aircraft/show/99219630,18:00,4:29,198,"$489,624.00","$441,509.00"
EWR - PIT,53492178928,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/53492178928,https://www.airlines-manager.com/aircraft/show/98887257,4:15,7:29,112,"$77,415.00","$63,055.00"
EWR - PIT,53505148737,EWR-STL-PIT 3,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/53505148737,https://www.airlines-manager.com/aircraft/show/115400546,6:30,9:44,338,"$182,214.00","$159,602.00"
EWR - PIT,53511675197,EWR-STL-PIT 2,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/53511675197,https://www.airlines-manager.com/aircraft/show/115400547,10:00,13:14,338,"$182,214.00","$159,602.00"
EWR - PIT,53521848549,EWR-STL-PIT 4,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/53521848549,https://www.airlines-manager.com/aircraft/show/115400545,13:00,16:14,338,"$182,214.00","$159,602.00"
EWR - PIT,53526170848,EWR-STL-PIT 1,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/53526170848,https://www.airlines-manager.com/aircraft/show/115400548,15:30,18:44,338,"$182,214.00","$159,602.00"
EWR - PIT,53531796504,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/53531796504,https://www.airlines-manager.com/aircraft/show/98887257,19:30,22:44,112,"$77,415.00","$63,055.00"
EWR - PRG,53511675232,EWR 84B-6  B2,777-300,https://www.airlines-manager.com/network/showline/44327652,https://www.airlines-manager.com/network/showflight/53511675232,https://www.airlines-manager.com/aircraft/show/117958700,10:15,2:59,852,"$2,735,955.00","$2,492,473.00"
EWR - PRG,53536307338,EWR 84B-2  B2,777-300,https://www.airlines-manager.com/network/showline/44327652,https://www.airlines-manager.com/network/showflight/53536307338,https://www.airlines-manager.com/aircraft/show/117958696,22:15,14:59,852,"$2,735,955.00","$2,492,473.00"
EWR - PVD,53492178727,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/53492178727,https://www.airlines-manager.com/aircraft/show/110044466,1:30,4:14,310,"$98,927.00","$81,292.00"
EWR - PVD,53511675122,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/53511675122,https://www.airlines-manager.com/aircraft/show/110044465,9:15,11:59,310,"$98,927.00","$81,292.00"
EWR - PVD,53516803671,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/53516803671,https://www.airlines-manager.com/aircraft/show/110044464,11:00,13:44,310,"$98,927.00","$81,292.00"
EWR - PVD,53531796522,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/53531796522,https://www.airlines-manager.com/aircraft/show/110044463,19:45,22:29,310,"$98,927.00","$81,292.00"
EWR - PVD,53540025452,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/53540025452,https://www.airlines-manager.com/aircraft/show/110113039,23:15,1:59,112,"$42,468.00","$31,610.00"
EWR - PWM,53505148558,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/53505148558,https://www.airlines-manager.com/aircraft/show/110044463,4:30,7:44,310,"$154,039.00","$134,989.00"
EWR - PWM,53511675090,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/53511675090,https://www.airlines-manager.com/aircraft/show/110113039,8:45,11:59,112,"$70,011.00","$58,085.00"
EWR - PWM,53516803672,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/53516803672,https://www.airlines-manager.com/aircraft/show/110044466,11:00,14:14,310,"$154,039.00","$134,989.00"
EWR - PWM,53531796352,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/53531796352,https://www.airlines-manager.com/aircraft/show/110044465,18:00,21:14,310,"$154,039.00","$134,989.00"
EWR - PWM,53531796353,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/53531796353,https://www.airlines-manager.com/aircraft/show/110044464,19:45,22:59,299,"$150,846.00","$131,881.00"
EWR - RAP,53492178431,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/53492178431,https://www.airlines-manager.com/aircraft/show/116042860,0:00,7:59,310,"$495,290.00","$458,274.00"
EWR - RAP,53492178432,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/53492178432,https://www.airlines-manager.com/aircraft/show/116042861,1:15,9:14,310,"$495,290.00","$458,274.00"
EWR - RAP,53521848613,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/53521848613,https://www.airlines-manager.com/aircraft/show/116042862,13:00,20:59,310,"$495,290.00","$458,274.00"
EWR - RAP,53531796403,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/53531796403,https://www.airlines-manager.com/aircraft/show/116042859,18:30,2:29,310,"$495,290.00","$458,274.00"
EWR - RDU,53492178688,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/53492178688,https://www.airlines-manager.com/aircraft/show/105731236,1:15,4:59,320,"$200,581.00","$172,613.00"
EWR - RDU,53505148625,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/53505148625,https://www.airlines-manager.com/aircraft/show/88494376,5:00,8:44,320,"$200,581.00","$172,613.00"
EWR - RDU,53516803630,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/53516803630,https://www.airlines-manager.com/aircraft/show/88494377,11:00,14:44,320,"$200,581.00","$172,613.00"
EWR - RDU,53526170856,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/53526170856,https://www.airlines-manager.com/aircraft/show/88494375,15:30,19:14,320,"$200,581.00","$172,613.00"
EWR - RDU,53536307314,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/53536307314,https://www.airlines-manager.com/aircraft/show/106104450,22:00,1:44,112,"$93,025.00","$77,828.00"
EWR - RIC,53492178661,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/53492178661,https://www.airlines-manager.com/aircraft/show/88494377,1:00,4:14,320,"$139,037.00","$115,616.00"
EWR - RIC,53505148657,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/53505148657,https://www.airlines-manager.com/aircraft/show/88494375,5:30,8:44,320,"$139,037.00","$115,616.00"
EWR - RIC,53521848783,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/53521848783,https://www.airlines-manager.com/aircraft/show/106104450,14:15,17:29,112,"$62,634.00","$50,117.00"
EWR - RIC,53531796292,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/53531796292,https://www.airlines-manager.com/aircraft/show/105731236,17:30,20:44,320,"$139,037.00","$115,616.00"
EWR - RIC,53536307273,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/53536307273,https://www.airlines-manager.com/aircraft/show/88494376,21:15,0:29,320,"$139,037.00","$115,616.00"
EWR - RNO,53492178770,EWR-RNO-MEM 5 B,A319-100,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/53492178770,https://www.airlines-manager.com/aircraft/show/100096560,2:00,13:29,198,"$529,840.00","$488,053.00"
EWR - RNO,53511675226,EWR-RNO-MEM 1,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/53511675226,https://www.airlines-manager.com/aircraft/show/99920622,10:15,21:29,320,"$702,795.00","$645,835.00"
EWR - RNO,53521848729,EWR-RNO-MEM 4,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/53521848729,https://www.airlines-manager.com/aircraft/show/99920619,14:00,1:14,320,"$702,795.00","$645,835.00"
EWR - RNO,53526170960,EWR-RNO-MEM 3,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/53526170960,https://www.airlines-manager.com/aircraft/show/99920620,16:30,3:44,320,"$702,795.00","$645,835.00"
EWR - RNO,53536307346,EWR-RNO-MEM 2,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/53536307346,https://www.airlines-manager.com/aircraft/show/99920621,22:15,9:29,320,"$702,795.00","$645,835.00"
EWR - RSW,53492178872,EWR-RNO-MEM 1,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/53492178872,https://www.airlines-manager.com/aircraft/show/99920622,3:15,9:29,320,"$388,911.00","$350,141.00"
EWR - RSW,53505148760,EWR-RNO-MEM 4,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/53505148760,https://www.airlines-manager.com/aircraft/show/99920619,7:00,13:14,320,"$388,911.00","$350,141.00"
EWR - RSW,53511675235,EWR-RNO-MEM 3,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/53511675235,https://www.airlines-manager.com/aircraft/show/99920620,10:15,16:29,320,"$388,911.00","$350,141.00"
EWR - RSW,53521848728,EWR-RNO-MEM 5 B,A319-100,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/53521848728,https://www.airlines-manager.com/aircraft/show/100096560,14:00,20:14,198,"$294,881.00","$267,322.00"
EWR - RSW,53526170928,EWR-RNO-MEM 2,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/53526170928,https://www.airlines-manager.com/aircraft/show/99920621,16:00,22:14,320,"$388,911.00","$350,141.00"
EWR - SAN,53492178451,EWR-MIA-ORD 3,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/53492178451,https://www.airlines-manager.com/aircraft/show/113251307,0:00,11:29,338,"$775,493.00","$723,197.00"
EWR - SAN,53511675175,EWR-MIA-ORD 5,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/53511675175,https://www.airlines-manager.com/aircraft/show/113251309,10:00,21:29,338,"$775,493.00","$723,197.00"
EWR - SAN,53526170834,EWR-MIA-ORD 1,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/53526170834,https://www.airlines-manager.com/aircraft/show/113251305,15:15,2:44,338,"$775,493.00","$723,197.00"
EWR - SAN,53526170835,EWR-MIA-ORD 2,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/53526170835,https://www.airlines-manager.com/aircraft/show/113251306,16:15,3:44,338,"$775,493.00","$723,197.00"
EWR - SAN,53536307344,EWR-MIA-ORD 4,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/53536307344,https://www.airlines-manager.com/aircraft/show/113251308,22:15,9:44,338,"$775,493.00","$723,197.00"
EWR - SAT,53492178742,EWR-ELP-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/53492178742,https://www.airlines-manager.com/aircraft/show/103365576,1:45,9:59,320,"$517,703.00","$473,909.00"
EWR - SAT,53511675164,EWR-ELP-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/53511675164,https://www.airlines-manager.com/aircraft/show/103365577,10:00,18:14,320,"$517,703.00","$473,909.00"
EWR - SAT,53516803741,EWR-ELP-SAT 5 B,A319-100,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/53516803741,https://www.airlines-manager.com/aircraft/show/110582847,12:00,20:14,198,"$390,698.00","$358,994.00"
EWR - SAT,53531796507,EWR-ELP-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/53531796507,https://www.airlines-manager.com/aircraft/show/103365578,19:30,3:44,320,"$517,703.00","$473,909.00"
EWR - SAT,53536307289,EWR-ELP-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/53536307289,https://www.airlines-manager.com/aircraft/show/103365575,21:30,5:44,320,"$517,703.00","$473,909.00"
EWR - SAV,53505148570,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/53505148570,https://www.airlines-manager.com/aircraft/show/108466265,4:30,9:29,112,"$146,318.00","$129,401.00"
EWR - SAV,53511675116,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/53511675116,https://www.airlines-manager.com/aircraft/show/108834810,9:00,13:59,310,"$307,563.00","$281,428.00"
EWR - SAV,53516803674,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/53516803674,https://www.airlines-manager.com/aircraft/show/108834809,11:00,15:59,310,"$307,563.00","$281,428.00"
EWR - SAV,53531796354,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/53531796354,https://www.airlines-manager.com/aircraft/show/108834808,18:00,22:59,310,"$307,563.00","$281,428.00"
EWR - SAV,53531796355,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/53531796355,https://www.airlines-manager.com/aircraft/show/108834811,20:00,0:59,258,"$277,418.00","$252,292.00"
EWR - SDF,53492178907,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/53492178907,https://www.airlines-manager.com/aircraft/show/86270787,4:00,8:29,310,"$295,460.00","$268,367.00"
EWR - SDF,53511675033,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/53511675033,https://www.airlines-manager.com/aircraft/show/90452834,8:15,12:44,310,"$295,460.00","$268,367.00"
EWR - SDF,53521848830,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/53521848830,https://www.airlines-manager.com/aircraft/show/86270784,15:00,19:29,310,"$295,460.00","$268,367.00"
EWR - SDF,53531796377,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/53531796377,https://www.airlines-manager.com/aircraft/show/86270786,18:15,22:44,310,"$295,460.00","$268,367.00"
EWR - SEA,53492178644,EWR-DFW-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/53492178644,https://www.airlines-manager.com/aircraft/show/86238752,1:00,12:14,320,"$709,859.00","$640,790.00"
EWR - SEA,53492178645,EWR-DFW-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/53492178645,https://www.airlines-manager.com/aircraft/show/90489726,3:00,14:14,320,"$709,859.00","$640,790.00"
EWR - SEA,53516803699,EWR-DFW-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/53516803699,https://www.airlines-manager.com/aircraft/show/86238753,11:00,22:14,320,"$709,859.00","$640,790.00"
EWR - SEA,53521848799,EWR-DFW-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/53521848799,https://www.airlines-manager.com/aircraft/show/90489724,15:00,2:14,320,"$709,859.00","$640,790.00"
EWR - SEA,53540025429,EWR-DFW-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/53540025429,https://www.airlines-manager.com/aircraft/show/90489725,22:45,9:59,320,"$709,859.00","$640,790.00"
EWR - SEA,53540025430,EWR-DFW-ATL 6 B,A319-100,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/53540025430,https://www.airlines-manager.com/aircraft/show/105222360,23:30,10:59,198,"$534,958.00","$485,080.00"
EWR - SFO,53492178419,EWR-SFO-LAX 1,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/53492178419,https://www.airlines-manager.com/aircraft/show/83716137,0:00,11:44,400,"$944,723.00","$860,114.00"
EWR - SFO,53492178420,EWR-SFO-LAX 2,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/53492178420,https://www.airlines-manager.com/aircraft/show/89233028,1:30,13:14,400,"$944,723.00","$860,114.00"
EWR - SFO,53492178421,EWR-SFO-LAX 3,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/53492178421,https://www.airlines-manager.com/aircraft/show/89233029,3:00,14:44,400,"$944,723.00","$860,114.00"
EWR - SFO,53516803778,EWR-SFO-LAX 4,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/53516803778,https://www.airlines-manager.com/aircraft/show/89233030,12:15,23:59,400,"$944,723.00","$860,114.00"
EWR - SFO,53521848787,EWR-SFO-LAX 5,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/53521848787,https://www.airlines-manager.com/aircraft/show/89233027,14:15,1:59,400,"$944,723.00","$860,114.00"
EWR - SJC,53492178433,EWR-OAK-SJC 2,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/53492178433,https://www.airlines-manager.com/aircraft/show/104717242,0:00,11:59,310,"$732,935.00","$676,985.00"
EWR - SJC,53492178434,EWR-OAK-SJC 3,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/53492178434,https://www.airlines-manager.com/aircraft/show/104717241,2:00,13:59,310,"$732,935.00","$676,985.00"
EWR - SJC,53511675238,EWR-OAK-SJC 4,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/53511675238,https://www.airlines-manager.com/aircraft/show/104717240,10:30,22:29,310,"$732,935.00","$676,985.00"
EWR - SJC,53521848589,EWR-OAK-SJC 5,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/53521848589,https://www.airlines-manager.com/aircraft/show/104717239,13:00,0:59,310,"$732,935.00","$676,985.00"
EWR - SJC,53536307326,EWR-OAK-SJC 1,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/53536307326,https://www.airlines-manager.com/aircraft/show/104717243,22:00,9:59,310,"$732,935.00","$676,985.00"
EWR - SJU,53492178565,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/53492178565,https://www.airlines-manager.com/aircraft/show/106581304,0:30,8:44,320,"$526,498.00","$480,601.00"
EWR - SJU,53492178566,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/53492178566,https://www.airlines-manager.com/aircraft/show/106581307,2:00,10:14,320,"$526,498.00","$480,601.00"
EWR - SJU,53505148757,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/53505148757,https://www.airlines-manager.com/aircraft/show/86238754,7:00,15:14,320,"$526,498.00","$480,601.00"
EWR - SJU,53521848553,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/53521848553,https://www.airlines-manager.com/aircraft/show/106581306,13:00,21:14,320,"$526,498.00","$480,601.00"
EWR - SJU,53521848554,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/53521848554,https://www.airlines-manager.com/aircraft/show/106581305,14:30,22:44,320,"$526,498.00","$480,601.00"
EWR - SLC,53492178528,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/53492178528,https://www.airlines-manager.com/aircraft/show/87153196,0:15,9:59,310,"$611,536.00","$559,607.00"
EWR - SLC,53492178529,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/53492178529,https://www.airlines-manager.com/aircraft/show/90452833,0:15,9:59,310,"$611,536.00","$559,607.00"
EWR - SLC,53492178530,EWR-DEN-SLC 6 B,A319-100,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/53492178530,https://www.airlines-manager.com/aircraft/show/105223076,1:15,10:59,198,"$459,927.00","$418,300.00"
EWR - SLC,53511675172,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/53511675172,https://www.airlines-manager.com/aircraft/show/86270785,10:00,19:44,310,"$611,536.00","$559,607.00"
EWR - SLC,53516803634,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/53516803634,https://www.airlines-manager.com/aircraft/show/90452835,11:00,20:44,310,"$611,536.00","$559,607.00"
EWR - SLC,53531796483,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/53531796483,https://www.airlines-manager.com/aircraft/show/86270783,19:15,4:59,310,"$611,536.00","$559,607.00"
EWR - SMF,53492178458,EWR-SMF-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/53492178458,https://www.airlines-manager.com/aircraft/show/94889150,0:00,11:44,320,"$717,342.00","$658,895.00"
EWR - SMF,53492178459,EWR-SMF-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/53492178459,https://www.airlines-manager.com/aircraft/show/94889151,1:30,13:14,320,"$717,342.00","$658,895.00"
EWR - SMF,53492178460,EWR-SMF-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/53492178460,https://www.airlines-manager.com/aircraft/show/94889152,3:00,14:44,320,"$717,342.00","$658,895.00"
EWR - SMF,53516803710,EWR-SMF-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/53516803710,https://www.airlines-manager.com/aircraft/show/94889153,11:30,23:14,320,"$717,342.00","$658,895.00"
EWR - SMF,53521848683,EWR-SMF-ONT 5,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/53521848683,https://www.airlines-manager.com/aircraft/show/94889154,13:30,1:14,320,"$717,342.00","$658,895.00"
EWR - SNN,53516803598,EWR 56B-3 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/53516803598,https://www.airlines-manager.com/aircraft/show/90656555,10:45,23:59,748,"$2,079,388.00","$1,896,127.00"
EWR - SNN,53531796436,EWR 56B-2 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/53531796436,https://www.airlines-manager.com/aircraft/show/90656556,18:45,7:59,748,"$1,993,195.00","$1,836,021.00"
EWR - STL,53492178623,EWR-STL-PIT 3,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/53492178623,https://www.airlines-manager.com/aircraft/show/115400546,1:00,6:29,338,"$373,017.00","$342,022.00"
EWR - STL,53492178624,EWR-STL-PIT 2,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/53492178624,https://www.airlines-manager.com/aircraft/show/115400547,4:15,9:44,338,"$373,017.00","$342,022.00"
EWR - STL,53511675198,EWR-STL-PIT 1,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/53511675198,https://www.airlines-manager.com/aircraft/show/115400548,10:00,15:29,338,"$373,017.00","$342,022.00"
EWR - STL,53521848697,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/53521848697,https://www.airlines-manager.com/aircraft/show/98887257,14:00,19:29,112,"$163,314.00","$142,547.00"
EWR - STL,53526170950,EWR-STL-PIT 4,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/53526170950,https://www.airlines-manager.com/aircraft/show/115400545,16:15,21:44,338,"$373,017.00","$342,022.00"
EWR - STL,53540025422,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/53540025422,https://www.airlines-manager.com/aircraft/show/98887257,22:45,4:14,112,"$163,314.00","$142,547.00"
EWR - TLV,53492178862,EWR-TLV 2 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/53492178862,https://www.airlines-manager.com/aircraft/show/89124073,3:00,1:29,884,"$3,653,033.00","$3,333,684.00"
EWR - TLV,53536307223,EWR-TLV 1 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/53536307223,https://www.airlines-manager.com/aircraft/show/93429385,21:00,19:29,884,"$3,653,033.00","$3,333,684.00"
EWR - TPA,53505148677,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/53505148677,https://www.airlines-manager.com/aircraft/show/98379317,5:45,11:44,310,"$376,361.00","$341,180.00"
EWR - TPA,53516803597,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/53516803597,https://www.airlines-manager.com/aircraft/show/98379316,10:45,16:44,310,"$376,361.00","$341,180.00"
EWR - TPA,53521848580,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/53521848580,https://www.airlines-manager.com/aircraft/show/98379318,13:00,18:59,310,"$376,361.00","$341,180.00"
EWR - TPA,53521848581,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/53521848581,https://www.airlines-manager.com/aircraft/show/98379315,15:00,20:59,310,"$376,361.00","$341,180.00"
EWR - TPA,53540025468,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/53540025468,https://www.airlines-manager.com/aircraft/show/98379319,23:15,5:14,310,"$376,361.00","$341,180.00"
EWR - TUL,53492178752,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/53492178752,https://www.airlines-manager.com/aircraft/show/110044465,1:45,8:29,310,"$426,549.00","$392,448.00"
EWR - TUL,53492178753,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/53492178753,https://www.airlines-manager.com/aircraft/show/110044464,3:30,10:14,310,"$426,549.00","$392,448.00"
EWR - TUL,53521848611,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/53521848611,https://www.airlines-manager.com/aircraft/show/110044463,13:00,19:44,310,"$426,549.00","$392,448.00"
EWR - TUL,53526170957,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/53526170957,https://www.airlines-manager.com/aircraft/show/110113039,16:30,23:14,112,"$200,788.00","$178,211.00"
EWR - TUL,53531796428,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/53531796428,https://www.airlines-manager.com/aircraft/show/110044466,18:45,1:29,310,"$426,549.00","$392,448.00"
EWR - TUS,53492178573,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/53492178573,https://www.airlines-manager.com/aircraft/show/98379316,0:30,10:44,310,"$638,846.00","$590,752.00"
EWR - TUS,53492178574,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/53492178574,https://www.airlines-manager.com/aircraft/show/98379318,1:30,11:44,310,"$638,846.00","$590,752.00"
EWR - TUS,53492178575,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/53492178575,https://www.airlines-manager.com/aircraft/show/98379315,3:30,13:44,310,"$638,846.00","$590,752.00"
EWR - TUS,53521848566,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/53521848566,https://www.airlines-manager.com/aircraft/show/98379319,13:00,23:14,310,"$638,846.00","$590,752.00"
EWR - TUS,53531796516,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/53531796516,https://www.airlines-manager.com/aircraft/show/98379317,19:30,5:44,310,"$638,846.00","$590,752.00"
EWR - VCE,53492178850,EWR 84B-7 B2,777-300,https://www.airlines-manager.com/network/showline/49921914,https://www.airlines-manager.com/network/showflight/53492178850,https://www.airlines-manager.com/aircraft/show/117958701,3:00,20:14,852,"$2,715,388.00","$2,474,998.00"
EWR - VCE,53521848805,EWR 84B-3  B2,777-300,https://www.airlines-manager.com/network/showline/49921914,https://www.airlines-manager.com/network/showflight/53521848805,https://www.airlines-manager.com/aircraft/show/117958697,15:00,8:14,818,"$2,630,356.00","$2,398,961.00"
EWR - YEG,53492178543,EWR-YEG-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/53492178543,https://www.airlines-manager.com/aircraft/show/98936170,0:15,10:14,320,"$633,835.00","$581,441.00"
EWR - YEG,53492178544,EWR-YEG-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/53492178544,https://www.airlines-manager.com/aircraft/show/98936171,2:15,12:14,320,"$633,835.00","$581,441.00"
EWR - YEG,53516803679,EWR-YEG-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/53516803679,https://www.airlines-manager.com/aircraft/show/98936168,11:00,20:59,320,"$633,835.00","$581,441.00"
EWR - YEG,53516803680,EWR-YEG-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/53516803680,https://www.airlines-manager.com/aircraft/show/98936169,12:30,22:29,320,"$633,835.00","$581,441.00"
EWR - YEG,53536307322,EWR-YEG-BFF 5 B,A319-100,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/53536307322,https://www.airlines-manager.com/aircraft/show/115493369,22:00,7:59,198,"$473,556.00","$435,398.00"
EWR - YOW,53511675134,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/53511675134,https://www.airlines-manager.com/aircraft/show/106581304,9:30,12:59,320,"$170,585.00","$145,254.00"
EWR - YOW,53516803636,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/53516803636,https://www.airlines-manager.com/aircraft/show/106581307,11:00,14:29,320,"$170,585.00","$145,254.00"
EWR - YOW,53531796424,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/53531796424,https://www.airlines-manager.com/aircraft/show/86238754,18:45,22:14,320,"$170,585.00","$145,254.00"
EWR - YOW,53536307259,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/53536307259,https://www.airlines-manager.com/aircraft/show/106581306,21:15,0:44,320,"$170,585.00","$145,254.00"
EWR - YOW,53540025400,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/53540025400,https://www.airlines-manager.com/aircraft/show/106581305,22:45,2:14,289,"$160,523.00","$135,466.00"
EWR - YUL,53511675137,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/53511675137,https://www.airlines-manager.com/aircraft/show/106581306,9:30,12:59,320,"$174,011.00","$145,853.00"
EWR - YUL,53516803631,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/53516803631,https://www.airlines-manager.com/aircraft/show/106581305,11:00,14:29,320,"$174,011.00","$145,853.00"
EWR - YUL,53526170832,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/53526170832,https://www.airlines-manager.com/aircraft/show/86238754,15:15,18:44,320,"$174,011.00","$145,853.00"
EWR - YUL,53536307229,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/53536307229,https://www.airlines-manager.com/aircraft/show/106581304,21:00,0:29,320,"$174,011.00","$145,853.00"
EWR - YUL,53540025371,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/53540025371,https://www.airlines-manager.com/aircraft/show/106581307,22:30,1:59,320,"$174,011.00","$145,853.00"
EWR - YVR,53492178445,EWR-YVR-YYC 1,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/53492178445,https://www.airlines-manager.com/aircraft/show/113681636,0:00,11:14,400,"$908,415.00","$836,037.00"
EWR - YVR,53492178446,EWR-YVR-YYC 2,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/53492178446,https://www.airlines-manager.com/aircraft/show/113681637,1:30,12:44,400,"$908,415.00","$836,037.00"
EWR - YVR,53492178447,EWR-YVR-YYC 3,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/53492178447,https://www.airlines-manager.com/aircraft/show/113681638,3:00,14:14,400,"$908,415.00","$836,037.00"
EWR - YVR,53516803702,EWR-YVR-YYC 4,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/53516803702,https://www.airlines-manager.com/aircraft/show/113681639,11:15,22:29,400,"$908,415.00","$836,037.00"
EWR - YVR,53516803703,EWR-YVR-YYC 5,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/53516803703,https://www.airlines-manager.com/aircraft/show/113681640,12:45,23:59,400,"$908,415.00","$836,037.00"
EWR - YYC,53492178708,EWR-YVR-YYC 4,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/53492178708,https://www.airlines-manager.com/aircraft/show/113681639,1:30,11:14,400,"$787,708.00","$724,155.00"
EWR - YYC,53492178709,EWR-YVR-YYC 5,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/53492178709,https://www.airlines-manager.com/aircraft/show/113681640,3:00,12:44,400,"$787,708.00","$724,155.00"
EWR - YYC,53516803705,EWR-YVR-YYC 1,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/53516803705,https://www.airlines-manager.com/aircraft/show/113681636,11:15,20:59,400,"$787,708.00","$724,155.00"
EWR - YYC,53516803706,EWR-YVR-YYC 2,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/53516803706,https://www.airlines-manager.com/aircraft/show/113681637,12:45,22:29,400,"$787,708.00","$724,155.00"
EWR - YYC,53521848786,EWR-YVR-YYC 3,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/53521848786,https://www.airlines-manager.com/aircraft/show/113681638,14:15,23:59,400,"$787,708.00","$724,155.00"
EWR - YYZ,53492178798,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/53492178798,https://www.airlines-manager.com/aircraft/show/92003922,2:15,5:44,320,"$178,732.00","$144,394.00"
EWR - YYZ,53505148779,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/53505148779,https://www.airlines-manager.com/aircraft/show/92003921,7:30,10:59,320,"$178,732.00","$144,394.00"
EWR - YYZ,53511675190,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/53511675190,https://www.airlines-manager.com/aircraft/show/92003924,10:00,13:29,320,"$178,732.00","$144,394.00"
EWR - YYZ,53521848731,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/53521848731,https://www.airlines-manager.com/aircraft/show/92003925,14:00,17:29,320,"$178,732.00","$144,394.00"
EWR - YYZ,53531796386,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/53531796386,https://www.airlines-manager.com/aircraft/show/92003923,18:15,21:44,320,"$178,732.00","$144,394.00"
EWR - YYZ,53531796387,EWR CARGO 1,A321neo-LR,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/53531796387,https://www.airlines-manager.com/aircraft/show/103406580,19:15,22:44,0,"$63,938.00","$35,161.00"
EWR - ZRH,53505148791,EWR 84A-3 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/53505148791,https://www.airlines-manager.com/aircraft/show/90656553,7:45,23:59,852,"$2,628,800.00","$2,386,111.00"
EWR - ZRH,53531796605,EWR 84A-4 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/53531796605,https://www.airlines-manager.com/aircraft/show/90656551,20:00,12:14,852,"$2,628,800.00","$2,386,111.00"
HNL - AKL,53526170927,HNL 84B-6 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/53526170927,https://www.airlines-manager.com/aircraft/show/96807088,16:00,9:59,832,"$2,903,167.00","$2,645,977.00"
HNL - AKL,53540025435,HNL 84B-3 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/53540025435,https://www.airlines-manager.com/aircraft/show/96807091,23:00,16:59,832,"$2,885,772.00","$2,634,538.00"
HNL - ATL,53505148587,HNL 56B-6 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/53505148587,https://www.airlines-manager.com/aircraft/show/109187503,4:45,22:44,592,"$2,190,898.00","$2,005,043.00"
HNL - ATL,53526170908,HNL 56B-1 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/53526170908,https://www.airlines-manager.com/aircraft/show/109187498,16:00,9:59,592,"$2,190,898.00","$2,005,043.00"
HNL - ATL,53540025410,HNL 56B-6 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/53540025410,https://www.airlines-manager.com/aircraft/show/109187503,22:45,16:44,592,"$2,190,898.00","$2,005,043.00"
HNL - BNE,53492178911,HNL 84B-3 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/53492178911,https://www.airlines-manager.com/aircraft/show/96807091,4:00,22:59,832,"$3,045,822.00","$2,776,973.00"
HNL - BNE,53511675167,HNL 84B-7 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/53511675167,https://www.airlines-manager.com/aircraft/show/96807087,10:00,4:59,832,"$3,027,379.00","$2,764,876.00"
HNL - BOS,53492178426,HNL 56E-3 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/53492178426,https://www.airlines-manager.com/aircraft/show/117414502,0:00,19:59,592,"$2,395,125.00","$2,235,673.00"
HNL - BOS,53511675072,HNL 56E-5 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/53511675072,https://www.airlines-manager.com/aircraft/show/117414504,8:30,4:29,592,"$2,395,125.00","$2,235,673.00"
HNL - BOS,53511675073,HNL 56E-1 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/53511675073,https://www.airlines-manager.com/aircraft/show/117414500,10:00,5:59,592,"$2,395,125.00","$2,235,673.00"
HNL - CLT,53505148559,HNL 56D-7 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/53505148559,https://www.airlines-manager.com/aircraft/show/112066138,4:30,23:14,592,"$2,250,989.00","$2,095,290.00"
HNL - CLT,53505148560,HNL 56D-2 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/53505148560,https://www.airlines-manager.com/aircraft/show/112066133,5:30,0:14,592,"$2,250,989.00","$2,095,290.00"
HNL - CLT,53540025462,HNL 56D-7 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/53540025462,https://www.airlines-manager.com/aircraft/show/112066138,23:15,17:59,592,"$2,250,989.00","$2,095,290.00"
HNL - CXI,53492178898,HNL CARGO 2,737-700,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/53492178898,https://www.airlines-manager.com/aircraft/show/107563068,3:45,10:59,0,"$121,246.00","$97,580.00"
HNL - CXI,53505148671,HNL-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/53505148671,https://www.airlines-manager.com/aircraft/show/90717080,5:30,12:44,388,"$489,861.00","$459,353.00"
HNL - CXI,53521848809,HNL-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/53521848809,https://www.airlines-manager.com/aircraft/show/90717080,15:00,22:14,388,"$489,861.00","$459,353.00"
HNL - CXI,53536307334,HNL-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/53536307334,https://www.airlines-manager.com/aircraft/show/90717080,22:15,5:29,388,"$489,861.00","$459,353.00"
HNL - DFW,53505148573,HNL 56E-6 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/53505148573,https://www.airlines-manager.com/aircraft/show/117414505,4:30,19:59,592,"$1,884,682.00","$1,733,298.00"
HNL - DFW,53526171015,HNL 56E-4 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/53526171015,https://www.airlines-manager.com/aircraft/show/117414503,17:00,8:29,592,"$1,884,682.00","$1,733,298.00"
HNL - DFW,53531796396,HNL 56E-7 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/53531796396,https://www.airlines-manager.com/aircraft/show/117414506,18:30,9:59,592,"$1,884,682.00","$1,733,298.00"
HNL - DTW,53505148718,HNL 56E-2 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/53505148718,https://www.airlines-manager.com/aircraft/show/117414501,6:00,23:59,592,"$2,148,777.00","$1,998,982.00"
HNL - DTW,53531796545,HNL 56E-6 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/53531796545,https://www.airlines-manager.com/aircraft/show/117414505,20:00,13:59,592,"$2,148,777.00","$1,998,982.00"
HNL - DTW,53531796600,HNL 56E-3 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/53531796600,https://www.airlines-manager.com/aircraft/show/117414502,20:00,13:59,592,"$2,148,777.00","$1,998,982.00"
HNL - EWR,53492178922,HNL 56A-4 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/53492178922,https://www.airlines-manager.com/aircraft/show/95351589,4:15,23:59,592,"$2,361,246.00","$2,199,331.00"
HNL - EWR,53505148720,HNL 56A-3 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/53505148720,https://www.airlines-manager.com/aircraft/show/95351590,6:00,1:44,592,"$2,361,246.00","$2,199,331.00"
HNL - EWR,53531796530,HNL 56A-7 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/53531796530,https://www.airlines-manager.com/aircraft/show/95351586,19:45,15:29,592,"$2,361,246.00","$2,199,331.00"
HNL - GUM,53492178430,HNL-GUM,A321neo,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/53492178430,https://www.airlines-manager.com/aircraft/show/115400544,0:00,16:44,338,"$1,120,384.00","$1,057,325.00"
HNL - GUM,53505148584,HNL 84A-7 F,777-300,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/53505148584,https://www.airlines-manager.com/aircraft/show/95818920,4:45,20:29,832,"$2,549,287.00","$2,348,860.00"
HNL - IAD,53492178865,HNL 56C-7 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/53492178865,https://www.airlines-manager.com/aircraft/show/111639419,3:15,22:14,592,"$2,267,245.00","$2,114,518.00"
HNL - IAD,53511675125,HNL 56C-2 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/53511675125,https://www.airlines-manager.com/aircraft/show/111639414,9:15,4:14,592,"$2,267,245.00","$2,114,518.00"
HNL - IAD,53531796608,HNL 56C-4 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/53531796608,https://www.airlines-manager.com/aircraft/show/111639416,20:00,14:59,592,"$2,267,245.00","$2,114,518.00"
HNL - IAH,53492178477,HNL 56A-5 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/53492178477,https://www.airlines-manager.com/aircraft/show/95351588,0:00,15:59,592,"$1,925,971.00","$1,785,660.00"
HNL - IAH,53492178478,HNL 56A-7 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/53492178478,https://www.airlines-manager.com/aircraft/show/95351586,3:45,19:44,592,"$1,925,971.00","$1,785,660.00"
HNL - IAH,53526170920,HNL 56A-5 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/53526170920,https://www.airlines-manager.com/aircraft/show/95351588,16:00,7:59,592,"$1,925,971.00","$1,785,660.00"
HNL - ITO,53492178735,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/53492178735,https://www.airlines-manager.com/aircraft/show/94803593,1:45,4:44,170,"$77,005.00","$66,478.00"
HNL - ITO,53492178736,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/53492178736,https://www.airlines-manager.com/aircraft/show/94803596,3:15,6:14,170,"$77,005.00","$66,478.00"
HNL - ITO,53505148690,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/53505148690,https://www.airlines-manager.com/aircraft/show/94803595,6:00,8:59,170,"$77,005.00","$66,478.00"
HNL - ITO,53511675135,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/53511675135,https://www.airlines-manager.com/aircraft/show/94803594,9:30,12:29,170,"$77,005.00","$66,478.00"
HNL - ITO,53521848812,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/53521848812,https://www.airlines-manager.com/aircraft/show/94803593,15:00,17:59,170,"$77,005.00","$66,478.00"
HNL - ITO,53526170968,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/53526170968,https://www.airlines-manager.com/aircraft/show/94803596,16:30,19:29,170,"$77,005.00","$66,478.00"
HNL - ITO,53531796486,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/53531796486,https://www.airlines-manager.com/aircraft/show/94803595,19:15,22:14,170,"$77,005.00","$66,478.00"
HNL - ITO,53540025411,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/53540025411,https://www.airlines-manager.com/aircraft/show/94803594,22:45,1:44,123,"$64,578.00","$54,549.00"
HNL - JFK,53492178858,HNL 56B-3 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/53492178858,https://www.airlines-manager.com/aircraft/show/109187500,3:00,22:44,592,"$2,394,138.00","$2,211,698.00"
HNL - JFK,53511675115,HNL 56B-5 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/53511675115,https://www.airlines-manager.com/aircraft/show/109187502,9:00,4:44,592,"$2,394,138.00","$2,211,698.00"
HNL - JFK,53526171013,HNL 56B-7 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/53526171013,https://www.airlines-manager.com/aircraft/show/109187504,17:00,12:44,592,"$2,394,138.00","$2,211,698.00"
HNL - KOA,53492178592,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/53492178592,https://www.airlines-manager.com/aircraft/show/94803595,0:45,3:29,170,"$58,675.00","$48,297.00"
HNL - KOA,53492178593,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/53492178593,https://www.airlines-manager.com/aircraft/show/94803594,4:15,6:59,170,"$58,675.00","$48,297.00"
HNL - KOA,53505148773,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/53505148773,https://www.airlines-manager.com/aircraft/show/94803593,7:15,9:59,170,"$58,675.00","$48,297.00"
HNL - KOA,53511675093,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/53511675093,https://www.airlines-manager.com/aircraft/show/94803596,8:45,11:29,170,"$58,675.00","$48,297.00"
HNL - KOA,53521848725,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/53521848725,https://www.airlines-manager.com/aircraft/show/94803595,14:00,16:44,170,"$58,675.00","$48,297.00"
HNL - KOA,53531796288,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/53531796288,https://www.airlines-manager.com/aircraft/show/94803594,17:30,20:14,170,"$58,675.00","$48,297.00"
HNL - KOA,53536307201,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/53536307201,https://www.airlines-manager.com/aircraft/show/94803593,20:30,23:14,170,"$58,675.00","$48,297.00"
HNL - KOA,53536307202,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/53536307202,https://www.airlines-manager.com/aircraft/show/94803596,22:00,0:44,170,"$58,675.00","$48,297.00"
HNL - LAS,53505148733,HNL 84A-2 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/53505148733,https://www.airlines-manager.com/aircraft/show/95818925,6:30,18:29,832,"$1,888,368.00","$1,701,740.00"
HNL - LAS,53526170955,HNL-LAS S,A321-200,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/53526170955,https://www.airlines-manager.com/aircraft/show/116385511,16:30,5:14,232,"$743,934.00","$672,432.00"
HNL - LAS,53536307180,HNL 84A-7 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/53536307180,https://www.airlines-manager.com/aircraft/show/95818920,20:30,8:29,800,"$1,840,264.00","$1,656,621.00"
HNL - LAX,53505148756,HNL-SFO-LAX 3,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/53505148756,https://www.airlines-manager.com/aircraft/show/110044460,7:00,18:59,338,"$786,488.00","$718,216.00"
HNL - LAX,53511675099,HNL-SFO-LAX 4,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/53511675099,https://www.airlines-manager.com/aircraft/show/110044461,9:00,20:59,338,"$786,488.00","$718,216.00"
HNL - LAX,53511675100,HNL-SFO-LAX 6 B,A319-100,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/53511675100,https://www.airlines-manager.com/aircraft/show/106106389,10:00,21:59,198,"$544,408.00","$487,128.00"
HNL - LAX,53531796383,HNL-SFO-LAX 1,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/53531796383,https://www.airlines-manager.com/aircraft/show/110044458,18:15,6:14,338,"$786,488.00","$718,216.00"
HNL - LAX,53536307158,HNL-SFO-LAX 2,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/53536307158,https://www.airlines-manager.com/aircraft/show/110044459,20:15,8:14,338,"$786,488.00","$718,216.00"
HNL - LAX,53536307159,HNL-SFO-LAX 5,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/53536307159,https://www.airlines-manager.com/aircraft/show/110044462,21:45,9:44,338,"$786,488.00","$718,216.00"
HNL - LIH,53492178586,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/53492178586,https://www.airlines-manager.com/aircraft/show/94803596,0:45,3:14,170,"$50,884.00","$42,464.00"
HNL - LIH,53492178587,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/53492178587,https://www.airlines-manager.com/aircraft/show/94803595,3:30,5:59,170,"$50,884.00","$42,464.00"
HNL - LIH,53505148758,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/53505148758,https://www.airlines-manager.com/aircraft/show/94803594,7:00,9:29,170,"$50,884.00","$42,464.00"
HNL - LIH,53511675155,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/53511675155,https://www.airlines-manager.com/aircraft/show/94803593,10:00,12:29,170,"$50,884.00","$42,464.00"
HNL - LIH,53521848726,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/53521848726,https://www.airlines-manager.com/aircraft/show/94803596,14:00,16:29,170,"$50,884.00","$42,464.00"
HNL - LIH,53526170984,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/53526170984,https://www.airlines-manager.com/aircraft/show/94803595,16:45,19:14,170,"$50,884.00","$42,464.00"
HNL - LIH,53536307174,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/53536307174,https://www.airlines-manager.com/aircraft/show/94803594,20:15,22:44,170,"$50,884.00","$42,464.00"
HNL - LIH,53540025453,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/53540025453,https://www.airlines-manager.com/aircraft/show/94803593,23:15,1:44,170,"$50,884.00","$42,464.00"
HNL - LNY,53492178618,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/53492178618,https://www.airlines-manager.com/aircraft/show/106107514,1:00,3:29,116,"$30,301.00","$25,294.00"
HNL - LNY,53492178619,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/53492178619,https://www.airlines-manager.com/aircraft/show/106107514,3:30,5:59,116,"$30,301.00","$25,294.00"
HNL - LNY,53505148702,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/53505148702,https://www.airlines-manager.com/aircraft/show/106107514,6:00,8:29,116,"$30,301.00","$25,294.00"
HNL - LNY,53511675075,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/53511675075,https://www.airlines-manager.com/aircraft/show/106107514,8:30,10:59,116,"$30,301.00","$25,294.00"
HNL - LNY,53521848823,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/53521848823,https://www.airlines-manager.com/aircraft/show/106107514,15:00,17:29,116,"$30,301.00","$25,294.00"
HNL - LNY,53531796281,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/53531796281,https://www.airlines-manager.com/aircraft/show/106107514,17:30,19:59,116,"$30,301.00","$25,294.00"
HNL - LNY,53531796282,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/53531796282,https://www.airlines-manager.com/aircraft/show/106107514,20:00,22:29,116,"$30,301.00","$25,294.00"
HNL - LNY,53540025370,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/53540025370,https://www.airlines-manager.com/aircraft/show/106107514,22:30,0:59,116,"$30,301.00","$25,294.00"
HNL - MCO,53492178652,HNL 56C-4 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/53492178652,https://www.airlines-manager.com/aircraft/show/111639416,1:00,19:59,592,"$2,277,153.00","$2,117,054.00"
HNL - MCO,53492178653,HNL 56C-3 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/53492178653,https://www.airlines-manager.com/aircraft/show/111639415,4:15,23:14,592,"$2,277,153.00","$2,117,054.00"
HNL - MCO,53511675031,HNL 56C-6 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/53511675031,https://www.airlines-manager.com/aircraft/show/111639418,8:15,3:14,592,"$2,277,153.00","$2,117,054.00"
HNL - MEL,53511675052,HNL 84A-1 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/53511675052,https://www.airlines-manager.com/aircraft/show/95818926,8:30,6:29,832,"$3,527,480.00","$3,226,098.00"
HNL - MEL,53531796543,HNL 84A-4 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/53531796543,https://www.airlines-manager.com/aircraft/show/95818923,20:00,17:59,832,"$3,527,480.00","$3,226,098.00"
HNL - MIA,53511675063,HNL 56A-6 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/53511675063,https://www.airlines-manager.com/aircraft/show/95351587,8:30,3:44,592,"$2,322,627.00","$2,156,366.00"
HNL - MIA,53516803595,HNL 56A-2 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/53516803595,https://www.airlines-manager.com/aircraft/show/95351591,10:45,5:59,592,"$2,322,627.00","$2,156,366.00"
HNL - MIA,53526170844,HNL 56A-1 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/53526170844,https://www.airlines-manager.com/aircraft/show/95351592,15:30,10:44,592,"$2,322,627.00","$2,156,366.00"
HNL - MNL,53505148781,HNL 84A-6 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/53505148781,https://www.airlines-manager.com/aircraft/show/95818921,7:30,4:44,832,"$3,450,425.00","$3,161,128.00"
HNL - MNL,53531796402,HNL 84A-2 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/53531796402,https://www.airlines-manager.com/aircraft/show/95818925,18:30,15:44,832,"$3,450,425.00","$3,161,128.00"
HNL - MSP,53526170899,HNL 56C-5 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/53526170899,https://www.airlines-manager.com/aircraft/show/111639417,16:00,8:14,592,"$1,940,110.00","$1,805,737.00"
HNL - MSP,53526170900,HNL 56C-1 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/53526170900,https://www.airlines-manager.com/aircraft/show/111639413,17:00,9:14,592,"$1,940,110.00","$1,805,737.00"
HNL - MSP,53536307342,HNL 56C-7 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/53536307342,https://www.airlines-manager.com/aircraft/show/111639419,22:15,14:29,592,"$1,940,110.00","$1,805,737.00"
HNL - NAN,53492178902,HNL 84A-4 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/53492178902,https://www.airlines-manager.com/aircraft/show/95818923,3:45,17:14,832,"$2,066,228.00","$1,895,022.00"
HNL - NAN,53531796327,HNL 84A-5 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/53531796327,https://www.airlines-manager.com/aircraft/show/95818922,18:00,7:29,832,"$2,037,178.00","$1,875,626.00"
HNL - OGG,53492178740,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/53492178740,https://www.airlines-manager.com/aircraft/show/94803594,1:45,4:14,170,"$51,604.00","$42,806.00"
HNL - OGG,53505148596,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/53505148596,https://www.airlines-manager.com/aircraft/show/94803593,4:45,7:14,170,"$51,604.00","$42,806.00"
HNL - OGG,53505148597,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/53505148597,https://www.airlines-manager.com/aircraft/show/94803596,6:15,8:44,170,"$51,604.00","$42,806.00"
HNL - OGG,53511675114,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/53511675114,https://www.airlines-manager.com/aircraft/show/94803595,9:00,11:29,170,"$51,604.00","$42,806.00"
HNL - OGG,53521848811,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/53521848811,https://www.airlines-manager.com/aircraft/show/94803594,15:00,17:29,170,"$51,604.00","$42,806.00"
HNL - OGG,53531796339,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/53531796339,https://www.airlines-manager.com/aircraft/show/94803593,18:00,20:29,170,"$51,604.00","$42,806.00"
HNL - OGG,53531796340,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/53531796340,https://www.airlines-manager.com/aircraft/show/94803596,19:30,21:59,170,"$51,604.00","$42,806.00"
HNL - OGG,53536307350,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/53536307350,https://www.airlines-manager.com/aircraft/show/94803595,22:15,0:44,170,"$51,604.00","$42,806.00"
HNL - ORD,53511675201,HNL 56B-2 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/53511675201,https://www.airlines-manager.com/aircraft/show/109187499,10:00,2:59,592,"$2,079,450.00","$1,909,990.00"
HNL - ORD,53526170907,HNL 56B-4 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/53526170907,https://www.airlines-manager.com/aircraft/show/109187501,16:00,8:59,592,"$2,079,450.00","$1,909,990.00"
HNL - ORD,53540025415,HNL 56B-3 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/53540025415,https://www.airlines-manager.com/aircraft/show/109187500,22:45,15:44,592,"$2,079,450.00","$1,909,990.00"
HNL - PHX,53492178891,HNL 56D-4 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/53492178891,https://www.airlines-manager.com/aircraft/show/112066135,3:30,15:59,592,"$1,512,409.00","$1,401,274.00"
HNL - PHX,53521848827,HNL 56D-3 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/53521848827,https://www.airlines-manager.com/aircraft/show/112066134,15:00,3:29,592,"$1,512,409.00","$1,401,274.00"
HNL - PHX,53526170898,HNL 56D-6 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/53526170898,https://www.airlines-manager.com/aircraft/show/112066137,16:00,4:29,592,"$1,512,409.00","$1,401,274.00"
HNL - PPG,53492178781,HNL CARGO 1,737-700,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/53492178781,https://www.airlines-manager.com/aircraft/show/107564830,2:15,14:29,0,"$206,811.00","$166,336.00"
HNL - PPG,53492178782,HNL-TRW-PPG 1 S,A321-200,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/53492178782,https://www.airlines-manager.com/aircraft/show/88725599,3:30,15:44,380,"$785,616.00","$736,014.00"
HNL - PPG,53526170939,HNL-TRW-PPG 2 S,A321-200,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/53526170939,https://www.airlines-manager.com/aircraft/show/88725598,16:00,4:14,380,"$785,616.00","$736,014.00"
HNL - PPG,53531796331,HNL-TRW-PPG 3 S,A321-200,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/53531796331,https://www.airlines-manager.com/aircraft/show/88725597,18:00,6:14,380,"$785,616.00","$736,014.00"
HNL - PPT,53511675130,HNL-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/53511675130,https://www.airlines-manager.com/aircraft/show/88725600,9:15,21:59,310,"$766,196.00","$713,229.00"
HNL - PPT,53521848800,HNL CARGO 2,737-700,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/53521848800,https://www.airlines-manager.com/aircraft/show/107563068,15:00,3:44,0,"$211,034.00","$168,198.00"
HNL - PPT,53526170868,HNL 84A-3 F,777-300,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/53526170868,https://www.airlines-manager.com/aircraft/show/95818924,15:45,3:44,832,"$1,835,287.00","$1,699,043.00"
HNL - PPT,53536307317,HNL-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/53536307317,https://www.airlines-manager.com/aircraft/show/88725600,22:00,10:44,310,"$688,453.00","$643,008.00"
HNL - SEA,53492178897,HNL 56D-5 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/53492178897,https://www.airlines-manager.com/aircraft/show/112066136,3:45,15:14,592,"$1,411,026.00","$1,309,353.00"
HNL - SEA,53526170904,HNL 56D-5 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/53526170904,https://www.airlines-manager.com/aircraft/show/112066136,16:00,3:29,592,"$1,411,026.00","$1,309,353.00"
HNL - SEA,53531796336,HNL 56D-1 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/53531796336,https://www.airlines-manager.com/aircraft/show/112066132,18:00,5:29,592,"$1,411,026.00","$1,309,353.00"
HNL - SFO,53505148763,HNL-SFO-LAX 1,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/53505148763,https://www.airlines-manager.com/aircraft/show/110044458,7:00,18:14,338,"$755,506.00","$697,022.00"
HNL - SFO,53511675112,HNL-SFO-LAX 2,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/53511675112,https://www.airlines-manager.com/aircraft/show/110044459,9:00,20:14,338,"$755,506.00","$697,022.00"
HNL - SFO,53511675113,HNL-SFO-LAX 5,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/53511675113,https://www.airlines-manager.com/aircraft/show/110044462,10:30,21:44,338,"$755,506.00","$697,022.00"
HNL - SFO,53531796442,HNL-SFO-LAX 3,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/53531796442,https://www.airlines-manager.com/aircraft/show/110044460,19:00,6:14,338,"$755,506.00","$697,022.00"
HNL - SFO,53536307232,HNL-SFO-LAX 4,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/53536307232,https://www.airlines-manager.com/aircraft/show/110044461,21:00,8:14,338,"$755,506.00","$697,022.00"
HNL - SFO,53536307233,HNL-SFO-LAX 6 B,A319-100,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/53536307233,https://www.airlines-manager.com/aircraft/show/106106389,22:00,9:29,198,"$526,164.00","$476,877.00"
HNL - SIN,53505148635,HNL 84B-1 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/53505148635,https://www.airlines-manager.com/aircraft/show/96807093,5:15,7:29,832,"$4,308,151.00","$3,909,929.00"
HNL - SIN,53526170998,HNL 84B-4 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/53526170998,https://www.airlines-manager.com/aircraft/show/96807090,17:00,19:14,832,"$4,308,151.00","$3,909,929.00"
HNL - SYD,53505148780,HNL 84B-2 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/53505148780,https://www.airlines-manager.com/aircraft/show/96807092,7:30,3:59,832,"$3,117,929.00","$2,810,898.00"
HNL - SYD,53531796488,HNL 84B-5 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/53531796488,https://www.airlines-manager.com/aircraft/show/96807089,19:15,15:44,832,"$3,117,929.00","$2,810,898.00"
HNL - SYD,53531796490,Charter 2,747-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/53531796490,https://www.airlines-manager.com/aircraft/show/112787252,20:00,15:59,576,"$2,692,261.00","$2,533,420.00"
HNL - TRW,53492178924,HNL-TRW-PPG 2 S,A321-200,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/53492178924,https://www.airlines-manager.com/aircraft/show/88725598,4:15,15:44,380,"$764,424.00","$719,793.00"
HNL - TRW,53505148728,HNL-TRW-PPG 3 S,A321-200,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/53505148728,https://www.airlines-manager.com/aircraft/show/88725597,6:15,17:44,380,"$764,424.00","$719,793.00"
HNL - TRW,53521848801,HNL CARGO 1,737-700,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/53521848801,https://www.airlines-manager.com/aircraft/show/107564830,15:00,2:14,0,"$192,452.00","$155,886.00"
HNL - TRW,53526170940,HNL-TRW-PPG 1 S,A321-200,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/53526170940,https://www.airlines-manager.com/aircraft/show/88725599,16:00,3:29,380,"$764,424.00","$719,793.00"
HNL - YVR,53492178481,HNL 56D-3 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/53492178481,https://www.airlines-manager.com/aircraft/show/112066134,0:15,11:59,592,"$1,414,240.00","$1,318,834.00"
HNL - YVR,53492178482,HNL 56D-6 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/53492178482,https://www.airlines-manager.com/aircraft/show/112066137,3:30,15:14,592,"$1,414,240.00","$1,318,834.00"
HNL - YVR,53526170903,HNL 56D-4 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/53526170903,https://www.airlines-manager.com/aircraft/show/112066135,16:00,3:44,592,"$1,414,240.00","$1,318,834.00"
IAH - ABQ,53492178636,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/53492178636,https://www.airlines-manager.com/aircraft/show/103600700,1:00,5:59,310,"$316,874.00","$283,557.00"
IAH - ABQ,53492178637,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/53492178637,https://www.airlines-manager.com/aircraft/show/110582844,2:30,7:29,198,"$240,844.00","$214,158.00"
IAH - ABQ,53505148697,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/53505148697,https://www.airlines-manager.com/aircraft/show/88725601,6:00,10:59,310,"$316,874.00","$283,557.00"
IAH - ABQ,53521848660,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/53521848660,https://www.airlines-manager.com/aircraft/show/103600702,13:00,17:59,310,"$316,874.00","$283,557.00"
IAH - ABQ,53531796417,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/53531796417,https://www.airlines-manager.com/aircraft/show/103600701,18:45,23:44,310,"$316,874.00","$283,557.00"
IAH - ALB,53492178479,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/53492178479,https://www.airlines-manager.com/aircraft/show/114266976,0:15,7:59,320,"$495,326.00","$449,872.00"
IAH - ALB,53492178480,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/53492178480,https://www.airlines-manager.com/aircraft/show/92800067,2:00,9:59,112,"$234,453.00","$207,413.00"
IAH - ALB,53516803729,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/53516803729,https://www.airlines-manager.com/aircraft/show/114266971,12:00,19:44,320,"$495,326.00","$449,872.00"
IAH - ALB,53521848802,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/53521848802,https://www.airlines-manager.com/aircraft/show/114266970,15:00,22:44,320,"$495,326.00","$449,872.00"
IAH - ALB,53536307178,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/53536307178,https://www.airlines-manager.com/aircraft/show/114266972,20:15,3:59,320,"$495,326.00","$449,872.00"
IAH - ANC,53516803744,IAH-ANC-ONT 1,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/53516803744,https://www.airlines-manager.com/aircraft/show/108258010,12:00,2:44,310,"$896,871.00","$826,647.00"
IAH - ANC,53521848711,IAH-ANC-ONT 2,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/53521848711,https://www.airlines-manager.com/aircraft/show/108258011,14:00,4:44,310,"$896,871.00","$826,647.00"
IAH - ANC,53531796503,IAH-ANC-ONT 3,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/53531796503,https://www.airlines-manager.com/aircraft/show/108258012,19:15,9:59,310,"$896,871.00","$826,647.00"
IAH - ANC,53536307271,IAH-ANC-ONT 4,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/53536307271,https://www.airlines-manager.com/aircraft/show/108089220,21:15,11:59,310,"$896,871.00","$826,647.00"
IAH - ANC,53540025460,IAH-ANC-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/53540025460,https://www.airlines-manager.com/aircraft/show/108286957,23:15,13:59,198,"$669,375.00","$613,055.00"
IAH - ATL,53492178483,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/53492178483,https://www.airlines-manager.com/aircraft/show/82323704,0:15,4:59,112,"$146,148.00","$112,107.00"
IAH - ATL,53511675223,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/53511675223,https://www.airlines-manager.com/aircraft/show/95894466,10:00,14:44,320,"$306,745.00","$242,670.00"
IAH - ATL,53516803596,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/53516803596,https://www.airlines-manager.com/aircraft/show/96256511,10:45,15:29,320,"$306,745.00","$242,670.00"
IAH - ATL,53526170938,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/53526170938,https://www.airlines-manager.com/aircraft/show/96183549,16:00,20:44,320,"$306,745.00","$242,670.00"
IAH - ATL,53531796320,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/53531796320,https://www.airlines-manager.com/aircraft/show/96177955,17:45,22:29,320,"$306,745.00","$242,670.00"
IAH - ATL,53540025491,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/53540025491,https://www.airlines-manager.com/aircraft/show/96250652,23:45,4:29,320,"$306,745.00","$242,670.00"
IAH - AUS,53492178926,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/53492178926,https://www.airlines-manager.com/aircraft/show/106007214,4:15,6:59,338,"$100,434.00","$76,833.00"
IAH - AUS,53516803644,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/53516803644,https://www.airlines-manager.com/aircraft/show/106007213,11:00,13:44,338,"$100,434.00","$76,833.00"
IAH - AUS,53516803645,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/53516803645,https://www.airlines-manager.com/aircraft/show/106007217,12:00,14:44,338,"$100,434.00","$76,833.00"
IAH - AUS,53531796374,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/53531796374,https://www.airlines-manager.com/aircraft/show/106007216,18:15,20:59,338,"$100,434.00","$76,833.00"
IAH - AUS,53536307295,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/53536307295,https://www.airlines-manager.com/aircraft/show/106007215,21:30,0:14,266,"$87,862.00","$64,490.00"
IAH - BDL,53505148712,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/53505148712,https://www.airlines-manager.com/aircraft/show/103600700,6:00,13:59,310,"$498,192.00","$455,852.00"
IAH - BDL,53505148713,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/53505148713,https://www.airlines-manager.com/aircraft/show/110582844,7:30,15:29,198,"$375,515.00","$341,578.00"
IAH - BDL,53516803624,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/53516803624,https://www.airlines-manager.com/aircraft/show/88725601,11:00,18:59,310,"$498,192.00","$455,852.00"
IAH - BDL,53531796343,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/53531796343,https://www.airlines-manager.com/aircraft/show/103600702,18:00,1:59,310,"$498,192.00","$455,852.00"
IAH - BDL,53531796344,IAH-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/53531796344,https://www.airlines-manager.com/aircraft/show/96990010,19:45,3:44,112,"$234,492.00","$206,459.00"
IAH - BDL,53540025488,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/53540025488,https://www.airlines-manager.com/aircraft/show/103600701,23:45,7:44,310,"$498,192.00","$455,852.00"
IAH - BFF,53492178913,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/53492178913,https://www.airlines-manager.com/aircraft/show/114266972,4:00,9:44,320,"$365,524.00","$327,646.00"
IAH - BFF,53511675227,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/53511675227,https://www.airlines-manager.com/aircraft/show/114266976,10:15,15:59,320,"$365,524.00","$327,646.00"
IAH - BFF,53516803734,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/53516803734,https://www.airlines-manager.com/aircraft/show/92800067,12:00,17:44,112,"$173,234.00","$151,553.00"
IAH - BFF,53531796528,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/53531796528,https://www.airlines-manager.com/aircraft/show/114266971,19:45,1:29,320,"$365,524.00","$327,646.00"
IAH - BFF,53540025425,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/53540025425,https://www.airlines-manager.com/aircraft/show/114266970,22:45,4:29,320,"$365,524.00","$327,646.00"
IAH - BIL,53492178838,IAH-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/53492178838,https://www.airlines-manager.com/aircraft/show/117273390,2:45,9:59,320,"$455,489.00","$412,098.00"
IAH - BIL,53511675097,IAH-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/53511675097,https://www.airlines-manager.com/aircraft/show/117273392,9:00,16:14,320,"$455,489.00","$412,098.00"
IAH - BIL,53516803616,IAH-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/53516803616,https://www.airlines-manager.com/aircraft/show/117273389,11:00,18:14,320,"$455,489.00","$412,098.00"
IAH - BIL,53531796398,IAH-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/53531796398,https://www.airlines-manager.com/aircraft/show/117273391,18:30,1:44,320,"$455,489.00","$412,098.00"
IAH - BNA,53492178906,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/53492178906,https://www.airlines-manager.com/aircraft/show/104258214,4:00,8:44,310,"$301,869.00","$270,660.00"
IAH - BNA,53511675119,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/53511675119,https://www.airlines-manager.com/aircraft/show/104258213,9:15,13:59,310,"$301,869.00","$270,660.00"
IAH - BNA,53521848836,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/53521848836,https://www.airlines-manager.com/aircraft/show/104258212,15:00,19:44,310,"$301,869.00","$270,660.00"
IAH - BNA,53536307328,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/53536307328,https://www.airlines-manager.com/aircraft/show/104258211,22:00,2:44,310,"$301,869.00","$270,660.00"
IAH - BNA,53540025446,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/53540025446,https://www.airlines-manager.com/aircraft/show/103534664,23:00,3:44,112,"$143,481.00","$123,610.00"
IAH - BOG,53505148700,IAH 56A-1 B,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/53505148700,https://www.airlines-manager.com/aircraft/show/106676232,6:00,15:59,648,"$1,300,597.00","$1,208,305.00"
IAH - BOG,53521848769,IAH 56A-3 B,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/53521848769,https://www.airlines-manager.com/aircraft/show/106676234,14:00,23:59,648,"$1,300,597.00","$1,208,305.00"
IAH - BOG,53531796606,IAH 56A-5 B,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/53531796606,https://www.airlines-manager.com/aircraft/show/106676236,20:00,5:59,648,"$1,300,597.00","$1,208,305.00"
IAH - BOI,53492178687,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/53492178687,https://www.airlines-manager.com/aircraft/show/104258213,1:15,9:14,310,"$500,380.00","$458,753.00"
IAH - BOI,53505148753,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/53505148753,https://www.airlines-manager.com/aircraft/show/104258212,7:00,14:59,310,"$500,380.00","$458,753.00"
IAH - BOI,53521848757,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/53521848757,https://www.airlines-manager.com/aircraft/show/104258211,14:00,21:59,310,"$500,380.00","$458,753.00"
IAH - BOI,53521848758,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/53521848758,https://www.airlines-manager.com/aircraft/show/103534664,15:00,22:59,112,"$235,549.00","$207,987.00"
IAH - BOI,53531796617,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/53531796617,https://www.airlines-manager.com/aircraft/show/104258214,20:00,3:59,310,"$500,380.00","$458,753.00"
IAH - BOS,53492178747,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/53492178747,https://www.airlines-manager.com/aircraft/show/88400800,1:45,9:59,400,"$665,959.00","$604,155.00"
IAH - BOS,53516803688,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/53516803688,https://www.airlines-manager.com/aircraft/show/88400799,11:00,19:14,400,"$665,959.00","$604,155.00"
IAH - BOS,53516803689,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/53516803689,https://www.airlines-manager.com/aircraft/show/88400801,12:00,20:14,400,"$665,959.00","$604,155.00"
IAH - BOS,53531796315,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/53531796315,https://www.airlines-manager.com/aircraft/show/89233038,17:45,1:59,400,"$665,959.00","$604,155.00"
IAH - BOS,53531796316,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/53531796316,https://www.airlines-manager.com/aircraft/show/88400798,18:30,2:44,377,"$643,125.00","$582,274.00"
IAH - BSB,53516803707,IAH 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/53516803707,https://www.airlines-manager.com/aircraft/show/88905140,11:15,5:29,932,"$3,053,991.00","$2,786,057.00"
IAH - BSB,53536307163,IAH 84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/53536307163,https://www.airlines-manager.com/aircraft/show/89124075,20:15,14:29,932,"$3,053,991.00","$2,786,057.00"
IAH - BTV,53492178456,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/53492178456,https://www.airlines-manager.com/aircraft/show/86385103,0:00,8:14,310,"$515,451.00","$473,724.00"
IAH - BTV,53492178457,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/53492178457,https://www.airlines-manager.com/aircraft/show/82543907,4:15,12:29,112,"$242,906.00","$215,131.00"
IAH - BTV,53505148765,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/53505148765,https://www.airlines-manager.com/aircraft/show/114373409,7:15,15:29,310,"$515,451.00","$473,724.00"
IAH - BTV,53521848703,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/53521848703,https://www.airlines-manager.com/aircraft/show/114373410,14:00,22:14,310,"$515,451.00","$473,724.00"
IAH - BTV,53531796416,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/53531796416,https://www.airlines-manager.com/aircraft/show/113994196,18:45,2:59,310,"$515,451.00","$473,724.00"
IAH - BUF,53492178665,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/53492178665,https://www.airlines-manager.com/aircraft/show/107467127,1:15,8:14,310,"$452,151.00","$413,484.00"
IAH - BUF,53492178666,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/53492178666,https://www.airlines-manager.com/aircraft/show/107467128,4:00,10:59,310,"$452,151.00","$413,484.00"
IAH - BUF,53521848551,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/53521848551,https://www.airlines-manager.com/aircraft/show/107467129,13:00,19:59,310,"$452,151.00","$413,484.00"
IAH - BUF,53526171019,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/53526171019,https://www.airlines-manager.com/aircraft/show/110582843,17:00,23:59,198,"$341,310.00","$310,322.00"
IAH - BUF,53536307270,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/53536307270,https://www.airlines-manager.com/aircraft/show/107467130,21:15,4:14,310,"$452,151.00","$413,484.00"
IAH - BUR,53492178814,IAH-YEG-BUR 4,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/53492178814,https://www.airlines-manager.com/aircraft/show/117273341,2:30,9:59,310,"$467,550.00","$428,881.00"
IAH - BUR,53492178815,IAH-YEG-BUR 3,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/53492178815,https://www.airlines-manager.com/aircraft/show/117273342,3:15,10:44,310,"$467,550.00","$428,881.00"
IAH - BUR,53516803665,IAH-YEG-BUR 5,A321neo,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/53516803665,https://www.airlines-manager.com/aircraft/show/117273340,11:00,18:29,338,"$506,558.00","$469,607.00"
IAH - BUR,53531796349,IAH-YEG-BUR 2,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/53531796349,https://www.airlines-manager.com/aircraft/show/117273343,18:00,1:29,310,"$467,550.00","$428,881.00"
IAH - BUR,53536307169,IAH-YEG-BUR 1,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/53536307169,https://www.airlines-manager.com/aircraft/show/117273344,20:15,3:44,290,"$449,692.00","$411,776.00"
IAH - BWI,53492178487,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/53492178487,https://www.airlines-manager.com/aircraft/show/106007215,0:15,6:59,338,"$466,270.00","$424,899.00"
IAH - BWI,53505148590,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/53505148590,https://www.airlines-manager.com/aircraft/show/107543798,4:45,11:44,0,"$114,931.00","$84,213.00"
IAH - BWI,53516803643,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/53516803643,https://www.airlines-manager.com/aircraft/show/106007214,11:00,17:44,338,"$466,270.00","$424,899.00"
IAH - BWI,53521848690,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/53521848690,https://www.airlines-manager.com/aircraft/show/106007213,13:45,20:29,338,"$466,270.00","$424,899.00"
IAH - BWI,53521848691,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/53521848691,https://www.airlines-manager.com/aircraft/show/106007217,14:45,21:29,338,"$466,270.00","$424,899.00"
IAH - BWI,53536307235,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/53536307235,https://www.airlines-manager.com/aircraft/show/106007216,21:00,3:44,338,"$466,270.00","$424,899.00"
IAH - BZN,53492178583,IAH-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/53492178583,https://www.airlines-manager.com/aircraft/show/117273392,0:30,7:59,320,"$473,001.00","$429,239.00"
IAH - BZN,53492178584,IAH-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/53492178584,https://www.airlines-manager.com/aircraft/show/117273389,2:30,9:59,320,"$473,001.00","$429,239.00"
IAH - BZN,53516803648,IAH-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/53516803648,https://www.airlines-manager.com/aircraft/show/117273391,11:00,18:29,320,"$473,001.00","$429,239.00"
IAH - BZN,53531796481,IAH-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/53531796481,https://www.airlines-manager.com/aircraft/show/117273390,19:15,2:44,320,"$473,001.00","$429,239.00"
IAH - CAK,53492178856,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/53492178856,https://www.airlines-manager.com/aircraft/show/113994196,3:00,9:14,310,"$391,760.00","$357,325.00"
IAH - CAK,53511675032,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/53511675032,https://www.airlines-manager.com/aircraft/show/86385103,8:15,14:29,310,"$391,760.00","$357,325.00"
IAH - CAK,53521848622,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/53521848622,https://www.airlines-manager.com/aircraft/show/82543907,13:00,19:14,112,"$185,160.00","$162,606.00"
IAH - CAK,53526170891,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/53526170891,https://www.airlines-manager.com/aircraft/show/114373409,16:00,22:14,310,"$391,760.00","$357,325.00"
IAH - CAK,53536307341,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/53536307341,https://www.airlines-manager.com/aircraft/show/114373410,22:15,4:29,291,"$377,501.00","$343,631.00"
IAH - CHS,53492178710,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/53492178710,https://www.airlines-manager.com/aircraft/show/107467211,1:30,7:14,112,"$169,673.00","$148,516.00"
IAH - CHS,53492178711,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/53492178711,https://www.airlines-manager.com/aircraft/show/107467131,3:30,9:14,310,"$357,728.00","$325,152.00"
IAH - CHS,53516803750,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/53516803750,https://www.airlines-manager.com/aircraft/show/107467132,12:00,17:44,310,"$357,728.00","$325,152.00"
IAH - CHS,53526171027,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/53526171027,https://www.airlines-manager.com/aircraft/show/107467133,17:15,22:59,310,"$357,728.00","$325,152.00"
IAH - CHS,53540025486,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/53540025486,https://www.airlines-manager.com/aircraft/show/107467134,23:45,5:29,310,"$357,728.00","$325,152.00"
IAH - CLE,53492178775,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/53492178775,https://www.airlines-manager.com/aircraft/show/103600702,2:00,8:14,310,"$399,426.00","$362,715.00"
IAH - CLE,53505148790,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/53505148790,https://www.airlines-manager.com/aircraft/show/103600701,7:45,13:59,310,"$399,426.00","$362,715.00"
IAH - CLE,53521848760,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/53521848760,https://www.airlines-manager.com/aircraft/show/103600700,14:00,20:14,310,"$399,426.00","$362,715.00"
IAH - CLE,53526170847,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/53526170847,https://www.airlines-manager.com/aircraft/show/110582844,15:30,21:44,198,"$301,699.00","$272,283.00"
IAH - CLE,53531796467,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/53531796467,https://www.airlines-manager.com/aircraft/show/88725601,19:00,1:14,310,"$399,426.00","$362,715.00"
IAH - CLT,53492178899,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/53492178899,https://www.airlines-manager.com/aircraft/show/93094697,3:45,9:29,310,"$360,318.00","$318,018.00"
IAH - CLT,53511675225,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/53511675225,https://www.airlines-manager.com/aircraft/show/93094698,10:00,15:44,310,"$360,318.00","$318,018.00"
IAH - CLT,53516803765,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/53516803765,https://www.airlines-manager.com/aircraft/show/93100455,12:00,17:44,112,"$170,541.00","$143,570.00"
IAH - CLT,53526170981,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/53526170981,https://www.airlines-manager.com/aircraft/show/93094699,16:45,22:29,310,"$360,318.00","$318,018.00"
IAH - CLT,53531796429,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/53531796429,https://www.airlines-manager.com/aircraft/show/93094695,18:45,0:29,310,"$360,318.00","$318,018.00"
IAH - CLT,53536307312,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/53536307312,https://www.airlines-manager.com/aircraft/show/93094696,22:00,3:44,310,"$360,318.00","$318,018.00"
IAH - CMH,53505148759,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/53505148759,https://www.airlines-manager.com/aircraft/show/103882355,7:00,12:59,310,"$377,783.00","$342,516.00"
IAH - CMH,53516803622,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/53516803622,https://www.airlines-manager.com/aircraft/show/103882358,11:00,16:59,310,"$377,783.00","$342,516.00"
IAH - CMH,53516803623,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/53516803623,https://www.airlines-manager.com/aircraft/show/105099861,12:00,17:59,112,"$178,529.00","$155,649.00"
IAH - CMH,53531796473,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/53531796473,https://www.airlines-manager.com/aircraft/show/103882357,19:15,1:14,310,"$377,783.00","$342,516.00"
IAH - CMH,53540025449,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/53540025449,https://www.airlines-manager.com/aircraft/show/103882356,23:00,4:59,310,"$377,783.00","$342,516.00"
IAH - COS,53492178741,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/53492178741,https://www.airlines-manager.com/aircraft/show/103882355,1:45,6:59,310,"$330,575.00","$297,660.00"
IAH - COS,53505148685,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/53505148685,https://www.airlines-manager.com/aircraft/show/103882358,5:45,10:59,310,"$330,575.00","$297,660.00"
IAH - COS,53521848737,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/53521848737,https://www.airlines-manager.com/aircraft/show/103882357,14:00,19:14,310,"$330,575.00","$297,660.00"
IAH - COS,53531796305,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/53531796305,https://www.airlines-manager.com/aircraft/show/103882356,17:45,22:59,310,"$330,575.00","$297,660.00"
IAH - COS,53540025408,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/53540025408,https://www.airlines-manager.com/aircraft/show/105099861,22:45,3:59,111,"$156,592.00","$135,466.00"
IAH - CUN,53492178628,IAH 56A-1 B,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/53492178628,https://www.airlines-manager.com/aircraft/show/106676232,1:00,5:59,648,"$623,370.00","$570,261.00"
IAH - CUN,53516803781,IAH 56A-2 B,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/53516803781,https://www.airlines-manager.com/aircraft/show/106676233,12:30,17:29,648,"$623,370.00","$570,261.00"
IAH - CUN,53536307189,IAH 56A-4 B,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/53536307189,https://www.airlines-manager.com/aircraft/show/106676235,20:30,1:29,648,"$623,370.00","$570,261.00"
IAH - CVG,53492178526,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/53492178526,https://www.airlines-manager.com/aircraft/show/99093332,0:15,5:44,320,"$346,590.00","$305,889.00"
IAH - CVG,53492178527,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/53492178527,https://www.airlines-manager.com/aircraft/show/99093333,4:00,9:29,320,"$346,590.00","$305,889.00"
IAH - CVG,53505148799,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/53505148799,https://www.airlines-manager.com/aircraft/show/99093334,8:00,13:29,320,"$346,590.00","$305,889.00"
IAH - CVG,53521848743,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/53521848743,https://www.airlines-manager.com/aircraft/show/99093335,14:00,19:29,320,"$346,590.00","$305,889.00"
IAH - CVG,53526170879,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/53526170879,https://www.airlines-manager.com/aircraft/show/101412921,15:45,21:14,0,"$108,314.00","$74,133.00"
IAH - CVG,53526170880,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/53526170880,https://www.airlines-manager.com/aircraft/show/106499070,16:00,21:29,198,"$262,949.00","$234,422.00"
IAH - DEN,53516803761,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/53516803761,https://www.airlines-manager.com/aircraft/show/105562975,12:00,17:29,338,"$377,132.00","$323,898.00"
IAH - DEN,53521848579,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/53521848579,https://www.airlines-manager.com/aircraft/show/105562971,13:00,18:29,338,"$377,132.00","$323,898.00"
IAH - DEN,53540025373,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/53540025373,https://www.airlines-manager.com/aircraft/show/105562972,22:30,3:59,338,"$377,132.00","$323,898.00"
IAH - DEN,53540025374,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/53540025374,https://www.airlines-manager.com/aircraft/show/105562973,23:00,4:29,338,"$377,132.00","$323,898.00"
IAH - DEN,53540025375,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/53540025375,https://www.airlines-manager.com/aircraft/show/107543798,23:15,4:44,0,"$93,476.00","$57,419.00"
IAH - DEN,53540025376,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/53540025376,https://www.airlines-manager.com/aircraft/show/105562974,23:30,4:59,338,"$377,132.00","$323,898.00"
IAH - DFW,53492178638,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/53492178638,https://www.airlines-manager.com/aircraft/show/99093333,1:00,3:59,320,"$127,970.00","$80,376.00"
IAH - DFW,53505148613,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/53505148613,https://www.airlines-manager.com/aircraft/show/99093334,5:00,7:59,320,"$127,970.00","$80,376.00"
IAH - DFW,53516803652,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/53516803652,https://www.airlines-manager.com/aircraft/show/99093335,11:00,13:59,320,"$127,970.00","$80,376.00"
IAH - DFW,53521848559,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/53521848559,https://www.airlines-manager.com/aircraft/show/106499070,13:00,15:59,198,"$96,695.00","$64,607.00"
IAH - DFW,53521848560,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/53521848560,https://www.airlines-manager.com/aircraft/show/107543798,13:00,15:59,0,"$39,135.00","$14,173.00"
IAH - DFW,53521848561,IAH-YEG-BUR 4,A321-200,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/53521848561,https://www.airlines-manager.com/aircraft/show/117273341,14:15,17:14,310,"$129,445.00","$89,347.00"
IAH - DFW,53536307261,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/53536307261,https://www.airlines-manager.com/aircraft/show/99093332,21:15,0:14,320,"$127,970.00","$80,376.00"
IAH - DSM,53492178864,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/53492178864,https://www.airlines-manager.com/aircraft/show/110424761,3:15,8:29,320,"$331,987.00","$297,057.00"
IAH - DSM,53511675094,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/53511675094,https://www.airlines-manager.com/aircraft/show/110424758,8:45,13:59,320,"$331,987.00","$297,057.00"
IAH - DSM,53521848750,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/53521848750,https://www.airlines-manager.com/aircraft/show/110424759,14:00,19:14,320,"$331,987.00","$297,057.00"
IAH - DSM,53531796414,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/53531796414,https://www.airlines-manager.com/aircraft/show/110424760,18:30,23:44,320,"$331,987.00","$297,057.00"
IAH - DTW,53492178576,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/53492178576,https://www.airlines-manager.com/aircraft/show/90183184,0:30,6:44,310,"$394,242.00","$349,485.00"
IAH - DTW,53492178577,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/53492178577,https://www.airlines-manager.com/aircraft/show/90183180,2:30,8:44,310,"$394,242.00","$349,485.00"
IAH - DTW,53505148707,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/53505148707,https://www.airlines-manager.com/aircraft/show/90183181,6:00,12:14,310,"$394,242.00","$349,485.00"
IAH - DTW,53521848632,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/53521848632,https://www.airlines-manager.com/aircraft/show/90183182,13:00,19:14,310,"$394,242.00","$349,485.00"
IAH - DTW,53531796419,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/53531796419,https://www.airlines-manager.com/aircraft/show/90183183,18:45,0:59,310,"$394,242.00","$349,485.00"
IAH - DTW,53536307218,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/53536307218,https://www.airlines-manager.com/aircraft/show/90140936,20:45,2:59,136,"$187,480.00","$158,934.00"
IAH - ELP,53492178887,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/53492178887,https://www.airlines-manager.com/aircraft/show/104717245,3:30,8:14,310,"$299,599.00","$269,242.00"
IAH - ELP,53516803614,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/53516803614,https://www.airlines-manager.com/aircraft/show/104717246,11:00,15:44,310,"$299,599.00","$269,242.00"
IAH - ELP,53526170974,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/53526170974,https://www.airlines-manager.com/aircraft/show/104717247,16:45,21:29,310,"$299,599.00","$269,242.00"
IAH - ELP,53531796456,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/53531796456,https://www.airlines-manager.com/aircraft/show/104743902,19:00,23:44,112,"$142,796.00","$123,419.00"
IAH - ELP,53536307321,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/53536307321,https://www.airlines-manager.com/aircraft/show/104717244,22:00,2:44,310,"$299,599.00","$269,242.00"
IAH - EZE,53492178909,IAH 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/53492178909,https://www.airlines-manager.com/aircraft/show/88905141,4:00,0:29,932,"$3,364,104.00","$3,066,842.00"
IAH - EZE,53505148650,IAH 84A-1 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/53505148650,https://www.airlines-manager.com/aircraft/show/89439131,5:30,1:59,932,"$3,364,104.00","$3,066,842.00"
IAH - FAR,53492178717,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/53492178717,https://www.airlines-manager.com/aircraft/show/110424754,1:30,8:14,320,"$417,352.00","$376,905.00"
IAH - FAR,53492178718,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/53492178718,https://www.airlines-manager.com/aircraft/show/110424755,4:15,10:59,320,"$417,352.00","$376,905.00"
IAH - FAR,53516803738,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/53516803738,https://www.airlines-manager.com/aircraft/show/110424756,12:00,18:44,320,"$417,352.00","$376,905.00"
IAH - FAR,53536307332,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/53536307332,https://www.airlines-manager.com/aircraft/show/110424757,22:00,4:44,320,"$417,352.00","$376,905.00"
IAH - FAT,53492178912,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/53492178912,https://www.airlines-manager.com/aircraft/show/110424760,4:00,11:44,320,"$497,045.00","$451,592.00"
IAH - FAT,53521848751,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/53521848751,https://www.airlines-manager.com/aircraft/show/110424761,14:00,21:44,320,"$497,045.00","$451,592.00"
IAH - FAT,53531796373,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/53531796373,https://www.airlines-manager.com/aircraft/show/110424758,18:15,1:59,320,"$497,045.00","$451,592.00"
IAH - FAT,53540025476,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/53540025476,https://www.airlines-manager.com/aircraft/show/110424759,23:30,7:14,320,"$497,045.00","$451,592.00"
IAH - FCA,53492178755,IAH-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/53492178755,https://www.airlines-manager.com/aircraft/show/117273391,1:45,9:59,320,"$521,224.00","$474,034.00"
IAH - FCA,53516803625,IAH-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/53516803625,https://www.airlines-manager.com/aircraft/show/117273390,11:00,19:14,320,"$521,224.00","$474,034.00"
IAH - FCA,53526170948,IAH-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/53526170948,https://www.airlines-manager.com/aircraft/show/117273392,16:15,0:29,320,"$521,224.00","$474,034.00"
IAH - FCA,53531796380,IAH-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/53531796380,https://www.airlines-manager.com/aircraft/show/117273389,18:15,2:29,306,"$507,224.00","$460,641.00"
IAH - FLL,53492178563,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/53492178563,https://www.airlines-manager.com/aircraft/show/93094695,0:30,6:14,310,"$366,964.00","$329,736.00"
IAH - FLL,53492178564,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/53492178564,https://www.airlines-manager.com/aircraft/show/93094696,3:45,9:29,310,"$366,964.00","$329,736.00"
IAH - FLL,53511675187,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/53511675187,https://www.airlines-manager.com/aircraft/show/93094697,10:00,15:44,310,"$366,964.00","$329,736.00"
IAH - FLL,53526170857,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/53526170857,https://www.airlines-manager.com/aircraft/show/93094698,15:45,21:29,310,"$366,964.00","$329,736.00"
IAH - FLL,53531796318,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/53531796318,https://www.airlines-manager.com/aircraft/show/93100455,17:45,23:29,112,"$174,104.00","$150,084.00"
IAH - FLL,53540025372,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/53540025372,https://www.airlines-manager.com/aircraft/show/93094699,22:30,4:14,310,"$366,964.00","$329,736.00"
IAH - FSD,53505148588,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/53505148588,https://www.airlines-manager.com/aircraft/show/110424757,4:45,10:29,320,"$361,825.00","$324,990.00"
IAH - FSD,53511675027,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/53511675027,https://www.airlines-manager.com/aircraft/show/110424754,8:15,13:59,320,"$361,825.00","$324,990.00"
IAH - FSD,53516803670,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/53516803670,https://www.airlines-manager.com/aircraft/show/110424755,11:00,16:44,320,"$361,825.00","$324,990.00"
IAH - FSD,53531796420,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/53531796420,https://www.airlines-manager.com/aircraft/show/110424756,18:45,0:29,280,"$334,386.00","$298,566.00"
IAH - GDL,53505148603,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/53505148603,https://www.airlines-manager.com/aircraft/show/114266977,4:45,9:59,400,"$438,019.00","$395,506.00"
IAH - GDL,53516803599,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/53516803599,https://www.airlines-manager.com/aircraft/show/114266980,10:45,15:59,400,"$438,019.00","$395,506.00"
IAH - GDL,53516803600,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/53516803600,https://www.airlines-manager.com/aircraft/show/114266979,12:00,17:14,400,"$438,019.00","$395,506.00"
IAH - GDL,53531796613,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/53531796613,https://www.airlines-manager.com/aircraft/show/114266978,20:00,1:14,354,"$394,220.00","$352,931.00"
IAH - GIG,53492178417,IAH 84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/53492178417,https://www.airlines-manager.com/aircraft/show/89124075,0:00,20:14,932,"$3,375,058.00","$3,072,413.00"
IAH - GIG,53492178418,IAH 84A-2 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/53492178418,https://www.airlines-manager.com/aircraft/show/89439130,2:00,22:14,932,"$3,375,058.00","$3,072,413.00"
IAH - GRR,53492178684,IAH-GRR-MSN 3,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/53492178684,https://www.airlines-manager.com/aircraft/show/117273346,1:15,7:29,310,"$389,416.00","$354,658.00"
IAH - GRR,53505148774,IAH-GRR-MSN 2,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/53505148774,https://www.airlines-manager.com/aircraft/show/117273347,7:15,13:29,310,"$389,416.00","$354,658.00"
IAH - GRR,53521848740,IAH-GRR-MSN 1,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/53521848740,https://www.airlines-manager.com/aircraft/show/117273348,14:00,20:14,310,"$389,416.00","$354,658.00"
IAH - GRR,53526170885,IAH-GRR-MSN 4,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/53526170885,https://www.airlines-manager.com/aircraft/show/117273345,16:00,22:14,310,"$389,416.00","$354,658.00"
IAH - GRU,53492178658,IAH 56A-4 B,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/53492178658,https://www.airlines-manager.com/aircraft/show/106676235,1:00,20:29,648,"$2,475,775.00","$2,306,133.00"
IAH - GRU,53516803700,IAH 56A-6 B,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/53516803700,https://www.airlines-manager.com/aircraft/show/106676237,11:00,6:29,648,"$2,475,775.00","$2,306,133.00"
IAH - GRU,53526171020,IAH 56A-1 B,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/53526171020,https://www.airlines-manager.com/aircraft/show/106676232,17:00,12:29,648,"$2,475,775.00","$2,306,133.00"
IAH - IAD,53492178890,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/53492178890,https://www.airlines-manager.com/aircraft/show/105400635,3:30,10:14,112,"$198,874.00","$170,620.00"
IAH - IAD,53505148742,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/53505148742,https://www.airlines-manager.com/aircraft/show/98578923,6:45,13:29,320,"$421,810.00","$372,226.00"
IAH - IAD,53511675144,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/53511675144,https://www.airlines-manager.com/aircraft/show/98578920,9:45,16:29,320,"$421,810.00","$372,226.00"
IAH - IAD,53521848597,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/53521848597,https://www.airlines-manager.com/aircraft/show/98578924,13:00,19:44,320,"$421,810.00","$372,226.00"
IAH - IAD,53531796364,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/53531796364,https://www.airlines-manager.com/aircraft/show/98578921,18:00,0:44,320,"$421,810.00","$372,226.00"
IAH - IAD,53536307287,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/53536307287,https://www.airlines-manager.com/aircraft/show/98578922,21:30,4:14,320,"$421,810.00","$372,226.00"
IAH - ICT,53511675143,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/53511675143,https://www.airlines-manager.com/aircraft/show/110424761,9:45,13:59,320,"$249,947.00","$218,363.00"
IAH - ICT,53521848749,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/53521848749,https://www.airlines-manager.com/aircraft/show/110424758,14:00,18:14,320,"$249,947.00","$218,363.00"
IAH - ICT,53531796469,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/53531796469,https://www.airlines-manager.com/aircraft/show/110424759,19:15,23:29,320,"$249,947.00","$218,363.00"
IAH - ICT,53540025494,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/53540025494,https://www.airlines-manager.com/aircraft/show/110424760,23:45,3:59,314,"$247,126.00","$215,630.00"
IAH - IND,53492178427,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/53492178427,https://www.airlines-manager.com/aircraft/show/100684074,0:00,5:29,310,"$343,077.00","$309,211.00"
IAH - IND,53505148579,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/53505148579,https://www.airlines-manager.com/aircraft/show/110582845,4:45,10:14,198,"$260,133.00","$233,004.00"
IAH - IND,53505148580,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/53505148580,https://www.airlines-manager.com/aircraft/show/100684071,6:00,11:29,310,"$343,077.00","$309,211.00"
IAH - IND,53516803715,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/53516803715,https://www.airlines-manager.com/aircraft/show/100684072,11:30,16:59,310,"$343,077.00","$309,211.00"
IAH - IND,53531796322,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/53531796322,https://www.airlines-manager.com/aircraft/show/100684073,17:45,23:14,310,"$343,077.00","$309,211.00"
IAH - JAN,53492178568,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/53492178568,https://www.airlines-manager.com/aircraft/show/110424756,0:30,3:59,320,"$176,882.00","$149,431.00"
IAH - JAN,53511675237,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/53511675237,https://www.airlines-manager.com/aircraft/show/110424757,10:30,13:59,320,"$176,882.00","$149,431.00"
IAH - JAN,53521848752,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/53521848752,https://www.airlines-manager.com/aircraft/show/110424754,14:00,17:29,320,"$176,882.00","$149,431.00"
IAH - JAN,53526170980,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/53526170980,https://www.airlines-manager.com/aircraft/show/110424755,16:45,20:14,305,"$171,863.00","$144,553.00"
IAH - JAX,53492178845,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/53492178845,https://www.airlines-manager.com/aircraft/show/104717247,3:00,8:14,310,"$336,821.00","$304,593.00"
IAH - JAX,53505148800,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/53505148800,https://www.airlines-manager.com/aircraft/show/104743902,8:00,13:14,112,"$159,757.00","$138,997.00"
IAH - JAX,53516803612,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/53516803612,https://www.airlines-manager.com/aircraft/show/104717244,11:00,16:14,310,"$336,821.00","$304,593.00"
IAH - JAX,53526170959,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/53526170959,https://www.airlines-manager.com/aircraft/show/104717245,16:30,21:44,310,"$336,821.00","$304,593.00"
IAH - JAX,53536307267,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/53536307267,https://www.airlines-manager.com/aircraft/show/104717246,21:15,2:29,310,"$336,821.00","$304,593.00"
IAH - JFK,53492178773,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/53492178773,https://www.airlines-manager.com/aircraft/show/89233038,2:00,9:29,400,"$620,114.00","$546,805.00"
IAH - JFK,53516803669,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/53516803669,https://www.airlines-manager.com/aircraft/show/88400798,11:00,18:29,400,"$620,114.00","$546,805.00"
IAH - JFK,53531796378,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/53531796378,https://www.airlines-manager.com/aircraft/show/88400800,18:15,1:44,400,"$620,114.00","$546,805.00"
IAH - JFK,53531796379,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/53531796379,https://www.airlines-manager.com/aircraft/show/88400799,19:15,2:44,400,"$620,114.00","$546,805.00"
IAH - JFK,53536307269,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/53536307269,https://www.airlines-manager.com/aircraft/show/88400801,21:15,4:44,400,"$620,114.00","$546,805.00"
IAH - LAS,53492178915,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/53492178915,https://www.airlines-manager.com/aircraft/show/96256511,4:00,10:44,320,"$428,374.00","$366,893.00"
IAH - LAS,53505148604,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/53505148604,https://www.airlines-manager.com/aircraft/show/96250652,5:00,11:44,320,"$428,374.00","$366,893.00"
IAH - LAS,53505148605,IAH-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/53505148605,https://www.airlines-manager.com/aircraft/show/96990010,5:15,11:59,112,"$201,610.00","$167,316.00"
IAH - LAS,53516803653,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/53516803653,https://www.airlines-manager.com/aircraft/show/96177955,11:00,17:44,320,"$428,374.00","$366,893.00"
IAH - LAS,53521848792,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/53521848792,https://www.airlines-manager.com/aircraft/show/95894466,14:45,21:29,320,"$428,374.00","$366,893.00"
IAH - LAS,53531796283,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/53531796283,https://www.airlines-manager.com/aircraft/show/82323704,17:30,0:14,112,"$201,610.00","$167,316.00"
IAH - LAS,53536307204,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/53536307204,https://www.airlines-manager.com/aircraft/show/96183549,20:45,3:29,320,"$428,374.00","$366,893.00"
IAH - LAX,53492178834,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/53492178834,https://www.airlines-manager.com/aircraft/show/88400799,2:45,9:59,400,"$608,073.00","$535,900.00"
IAH - LAX,53492178835,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/53492178835,https://www.airlines-manager.com/aircraft/show/88400798,3:45,10:59,400,"$608,073.00","$535,900.00"
IAH - LAX,53505148581,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/53505148581,https://www.airlines-manager.com/aircraft/show/88400801,4:45,11:59,400,"$608,073.00","$535,900.00"
IAH - LAX,53511675241,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/53511675241,https://www.airlines-manager.com/aircraft/show/89233038,10:30,17:44,400,"$608,073.00","$535,900.00"
IAH - LAX,53516803690,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/53516803690,https://www.airlines-manager.com/aircraft/show/88400800,11:00,18:14,400,"$608,073.00","$535,900.00"
IAH - LEX,53505148565,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/53505148565,https://www.airlines-manager.com/aircraft/show/114373410,4:30,9:44,310,"$333,493.00","$303,515.00"
IAH - LEX,53511675121,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/53511675121,https://www.airlines-manager.com/aircraft/show/113994196,9:15,14:29,310,"$333,493.00","$303,515.00"
IAH - LEX,53521848803,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/53521848803,https://www.airlines-manager.com/aircraft/show/86385103,15:00,20:14,310,"$333,493.00","$303,515.00"
IAH - LEX,53531796497,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/53531796497,https://www.airlines-manager.com/aircraft/show/82543907,19:15,0:29,112,"$158,473.00","$139,040.00"
IAH - LEX,53536307343,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/53536307343,https://www.airlines-manager.com/aircraft/show/114373409,22:15,3:29,263,"$303,685.00","$274,773.00"
IAH - LIM,53521848791,IAH 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/53521848791,https://www.airlines-manager.com/aircraft/show/89124074,14:30,3:59,932,"$2,248,966.00","$2,049,121.00"
IAH - LIM,53540025482,IAH 84A-2 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/53540025482,https://www.airlines-manager.com/aircraft/show/89439130,23:45,13:14,932,"$2,248,966.00","$2,049,121.00"
IAH - LIT,53492178900,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/53492178900,https://www.airlines-manager.com/aircraft/show/96692491,3:45,7:14,310,"$188,277.00","$164,271.00"
IAH - LIT,53516803638,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/53516803638,https://www.airlines-manager.com/aircraft/show/96692343,11:00,14:29,310,"$188,277.00","$164,271.00"
IAH - LIT,53531796518,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/53531796518,https://www.airlines-manager.com/aircraft/show/96691558,19:30,22:59,310,"$188,277.00","$164,271.00"
IAH - LIT,53531796519,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/53531796519,https://www.airlines-manager.com/aircraft/show/106014350,20:00,23:29,198,"$142,091.00","$122,870.00"
IAH - LIT,53540025470,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/53540025470,https://www.airlines-manager.com/aircraft/show/96694086,23:30,2:59,271,"$174,314.00","$150,708.00"
IAH - MCI,53492178659,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/53492178659,https://www.airlines-manager.com/aircraft/show/103882358,1:00,5:44,310,"$298,385.00","$267,227.00"
IAH - MCI,53511675126,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/53511675126,https://www.airlines-manager.com/aircraft/show/103882357,9:15,13:59,310,"$298,385.00","$267,227.00"
IAH - MCI,53521848661,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/53521848661,https://www.airlines-manager.com/aircraft/show/103882356,13:00,17:44,310,"$298,385.00","$267,227.00"
IAH - MCI,53531796338,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/53531796338,https://www.airlines-manager.com/aircraft/show/105099861,18:00,22:44,112,"$141,332.00","$121,512.00"
IAH - MCI,53536307250,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/53536307250,https://www.airlines-manager.com/aircraft/show/103882355,21:00,1:44,310,"$298,385.00","$267,227.00"
IAH - MCI,53536307251,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/53536307251,https://www.airlines-manager.com/aircraft/show/101412921,21:15,1:59,0,"$90,879.00","$60,780.00"
IAH - MCO,53492178642,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/53492178642,https://www.airlines-manager.com/aircraft/show/90183183,1:00,6:29,310,"$345,341.00","$302,947.00"
IAH - MCO,53492178643,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/53492178643,https://www.airlines-manager.com/aircraft/show/90140936,3:00,8:29,136,"$164,440.00","$137,662.00"
IAH - MCO,53505148748,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/53505148748,https://www.airlines-manager.com/aircraft/show/90183184,6:45,12:14,310,"$345,341.00","$302,947.00"
IAH - MCO,53511675089,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/53511675089,https://www.airlines-manager.com/aircraft/show/90183180,8:45,14:14,310,"$345,341.00","$302,947.00"
IAH - MCO,53521848634,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/53521848634,https://www.airlines-manager.com/aircraft/show/90183181,13:00,18:29,310,"$345,341.00","$302,947.00"
IAH - MCO,53531796474,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/53531796474,https://www.airlines-manager.com/aircraft/show/90183182,19:15,0:44,310,"$345,341.00","$302,947.00"
IAH - MEM,53492178778,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/53492178778,https://www.airlines-manager.com/aircraft/show/101412921,2:00,5:59,0,"$71,952.00","$44,009.00"
IAH - MEM,53505148676,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/53505148676,https://www.airlines-manager.com/aircraft/show/99093332,5:45,9:44,320,"$221,718.00","$188,356.00"
IAH - MEM,53511675131,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/53511675131,https://www.airlines-manager.com/aircraft/show/99093333,9:30,13:29,320,"$221,718.00","$188,356.00"
IAH - MEM,53521848744,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/53521848744,https://www.airlines-manager.com/aircraft/show/99093334,14:00,17:59,320,"$221,718.00","$188,356.00"
IAH - MEM,53531796505,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/53531796505,https://www.airlines-manager.com/aircraft/show/99093335,19:30,23:29,320,"$221,718.00","$188,356.00"
IAH - MEM,53536307276,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/53536307276,https://www.airlines-manager.com/aircraft/show/106499070,21:30,1:29,198,"$168,315.00","$145,325.00"
IAH - MEX,53492178732,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/53492178732,https://www.airlines-manager.com/aircraft/show/97026605,1:45,6:44,136,"$153,432.00","$128,531.00"
IAH - MEX,53505148672,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/53505148672,https://www.airlines-manager.com/aircraft/show/97076945,5:30,10:29,400,"$414,085.00","$365,742.00"
IAH - MEX,53511675051,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/53511675051,https://www.airlines-manager.com/aircraft/show/97076942,8:30,13:29,400,"$414,085.00","$365,742.00"
IAH - MEX,53521848637,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/53521848637,https://www.airlines-manager.com/aircraft/show/97076946,13:00,17:59,400,"$414,085.00","$365,742.00"
IAH - MEX,53526170937,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/53526170937,https://www.airlines-manager.com/aircraft/show/97076943,16:00,20:59,391,"$405,820.00","$357,701.00"
IAH - MEX,53540025390,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/53540025390,https://www.airlines-manager.com/aircraft/show/97076944,22:30,3:29,284,"$307,549.00","$262,087.00"
IAH - MHT,53492178715,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/53492178715,https://www.airlines-manager.com/aircraft/show/114266971,1:30,9:44,320,"$523,407.00","$475,551.00"
IAH - MHT,53505148740,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/53505148740,https://www.airlines-manager.com/aircraft/show/114266970,6:45,14:59,320,"$523,407.00","$475,551.00"
IAH - MHT,53516803730,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/53516803730,https://www.airlines-manager.com/aircraft/show/114266972,12:00,20:14,320,"$523,407.00","$475,551.00"
IAH - MHT,53526170890,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/53526170890,https://www.airlines-manager.com/aircraft/show/114266976,16:00,0:14,320,"$523,407.00","$475,551.00"
IAH - MHT,53531796325,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/53531796325,https://www.airlines-manager.com/aircraft/show/92800067,17:45,1:59,112,"$246,747.00","$218,180.00"
IAH - MIA,53492178609,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/53492178609,https://www.airlines-manager.com/aircraft/show/90183182,0:45,6:29,310,"$370,158.00","$324,401.00"
IAH - MIA,53505148734,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/53505148734,https://www.airlines-manager.com/aircraft/show/90183183,6:30,12:14,310,"$370,158.00","$324,401.00"
IAH - MIA,53511675064,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/53511675064,https://www.airlines-manager.com/aircraft/show/90140936,8:30,14:14,136,"$176,283.00","$147,315.00"
IAH - MIA,53521848628,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/53521848628,https://www.airlines-manager.com/aircraft/show/90183184,13:00,18:44,310,"$370,158.00","$324,401.00"
IAH - MIA,53521848629,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/53521848629,https://www.airlines-manager.com/aircraft/show/90183180,15:00,20:44,310,"$370,158.00","$324,401.00"
IAH - MIA,53531796405,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/53531796405,https://www.airlines-manager.com/aircraft/show/90183181,18:30,0:14,310,"$370,158.00","$324,401.00"
IAH - MKE,53492178635,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/53492178635,https://www.airlines-manager.com/aircraft/show/104258212,1:00,6:59,310,"$379,077.00","$343,943.00"
IAH - MKE,53505148798,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/53505148798,https://www.airlines-manager.com/aircraft/show/104258211,8:00,13:59,310,"$379,077.00","$343,943.00"
IAH - MKE,53511675111,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/53511675111,https://www.airlines-manager.com/aircraft/show/103534664,9:00,14:59,112,"$179,025.00","$156,225.00"
IAH - MKE,53521848735,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/53521848735,https://www.airlines-manager.com/aircraft/show/104258214,14:00,19:59,310,"$379,077.00","$343,943.00"
IAH - MKE,53531796468,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/53531796468,https://www.airlines-manager.com/aircraft/show/104258213,19:15,1:14,310,"$379,077.00","$343,943.00"
IAH - MSN,53505148783,IAH-GRR-MSN 3,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/53505148783,https://www.airlines-manager.com/aircraft/show/117273346,7:30,13:29,310,"$372,062.00","$338,977.00"
IAH - MSN,53521848739,IAH-GRR-MSN 2,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/53521848739,https://www.airlines-manager.com/aircraft/show/117273347,14:00,19:59,310,"$372,062.00","$338,977.00"
IAH - MSN,53536307154,IAH-GRR-MSN 1,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/53536307154,https://www.airlines-manager.com/aircraft/show/117273348,20:15,2:14,310,"$372,062.00","$338,977.00"
IAH - MSN,53536307155,IAH-GRR-MSN 4,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/53536307155,https://www.airlines-manager.com/aircraft/show/117273345,22:15,4:14,310,"$372,062.00","$338,977.00"
IAH - MSO,53492178919,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/53492178919,https://www.airlines-manager.com/aircraft/show/110424756,4:00,11:59,320,"$506,889.00","$460,456.00"
IAH - MSO,53521848748,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/53521848748,https://www.airlines-manager.com/aircraft/show/110424757,14:00,21:59,320,"$506,889.00","$460,456.00"
IAH - MSO,53531796285,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/53531796285,https://www.airlines-manager.com/aircraft/show/110424754,17:30,1:29,320,"$506,889.00","$460,456.00"
IAH - MSO,53536307157,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/53536307157,https://www.airlines-manager.com/aircraft/show/110424755,20:15,4:14,320,"$506,889.00","$460,456.00"
IAH - MSP,53492178918,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/53492178918,https://www.airlines-manager.com/aircraft/show/95894466,4:00,9:59,320,"$383,173.00","$333,877.00"
IAH - MSP,53505148633,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/53505148633,https://www.airlines-manager.com/aircraft/show/82323704,5:00,11:14,112,"$181,989.00","$154,324.00"
IAH - MSP,53511675222,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/53511675222,https://www.airlines-manager.com/aircraft/show/96183549,10:00,15:59,320,"$383,173.00","$333,877.00"
IAH - MSP,53531796319,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/53531796319,https://www.airlines-manager.com/aircraft/show/96250652,17:45,23:44,320,"$383,173.00","$333,877.00"
IAH - MSP,53536307291,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/53536307291,https://www.airlines-manager.com/aircraft/show/96256511,21:30,3:29,320,"$383,173.00","$333,877.00"
IAH - MSP,53540025393,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/53540025393,https://www.airlines-manager.com/aircraft/show/96177955,22:30,4:29,320,"$383,173.00","$333,877.00"
IAH - MSY,53492178896,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/53492178896,https://www.airlines-manager.com/aircraft/show/106007216,3:45,6:59,338,"$170,355.00","$145,708.00"
IAH - MSY,53505148586,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/53505148586,https://www.airlines-manager.com/aircraft/show/106007217,4:45,7:59,338,"$170,355.00","$145,708.00"
IAH - MSY,53516803628,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/53516803628,https://www.airlines-manager.com/aircraft/show/106007215,11:00,14:14,338,"$170,355.00","$145,708.00"
IAH - MSY,53531796307,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/53531796307,https://www.airlines-manager.com/aircraft/show/106007214,17:45,20:59,338,"$170,355.00","$145,708.00"
IAH - MSY,53536307193,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/53536307193,https://www.airlines-manager.com/aircraft/show/106007213,20:30,23:44,263,"$147,903.00","$123,776.00"
IAH - MTY,53492178892,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/53492178892,https://www.airlines-manager.com/aircraft/show/114266974,3:30,7:14,320,"$202,486.00","$171,969.00"
IAH - MTY,53511675127,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/53511675127,https://www.airlines-manager.com/aircraft/show/105099862,9:15,12:59,112,"$92,541.00","$76,086.00"
IAH - MTY,53521848704,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/53521848704,https://www.airlines-manager.com/aircraft/show/114266975,14:00,17:44,320,"$202,486.00","$171,969.00"
IAH - MTY,53531796300,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/53531796300,https://www.airlines-manager.com/aircraft/show/113250059,17:30,21:14,320,"$202,486.00","$171,969.00"
IAH - MTY,53540025479,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/53540025479,https://www.airlines-manager.com/aircraft/show/113114108,23:30,3:14,320,"$202,486.00","$171,969.00"
IAH - OAK,53492178668,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/53492178668,https://www.airlines-manager.com/aircraft/show/98578920,1:15,9:44,320,"$528,703.00","$477,880.00"
IAH - OAK,53492178669,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/53492178669,https://www.airlines-manager.com/aircraft/show/98578924,3:00,11:29,320,"$528,703.00","$477,880.00"
IAH - OAK,53505148803,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/53505148803,https://www.airlines-manager.com/aircraft/show/98578921,8:00,16:29,320,"$528,703.00","$477,880.00"
IAH - OAK,53521848619,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/53521848619,https://www.airlines-manager.com/aircraft/show/98578922,13:00,21:29,320,"$528,703.00","$477,880.00"
IAH - OAK,53531796463,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/53531796463,https://www.airlines-manager.com/aircraft/show/105400635,19:00,3:29,112,"$249,361.00","$219,214.00"
IAH - OAK,53536307340,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/53536307340,https://www.airlines-manager.com/aircraft/show/98578923,22:15,6:44,320,"$528,703.00","$477,880.00"
IAH - OKC,53505148667,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/53505148667,https://www.airlines-manager.com/aircraft/show/107467134,5:30,9:14,310,"$196,458.00","$171,197.00"
IAH - OKC,53511675203,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/53511675203,https://www.airlines-manager.com/aircraft/show/107467211,10:00,13:44,112,"$90,701.00","$74,854.00"
IAH - OKC,53516803749,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/53516803749,https://www.airlines-manager.com/aircraft/show/107467131,12:00,15:44,310,"$196,458.00","$171,197.00"
IAH - OKC,53531796326,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/53531796326,https://www.airlines-manager.com/aircraft/show/107467132,17:45,21:29,310,"$196,458.00","$171,197.00"
IAH - OKC,53540025447,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/53540025447,https://www.airlines-manager.com/aircraft/show/107467133,23:00,2:44,310,"$196,458.00","$171,197.00"
IAH - OMA,53492178831,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/53492178831,https://www.airlines-manager.com/aircraft/show/104258211,2:45,7:59,310,"$328,759.00","$297,616.00"
IAH - OMA,53492178832,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/53492178832,https://www.airlines-manager.com/aircraft/show/103534664,3:45,8:59,112,"$156,043.00","$135,992.00"
IAH - OMA,53511675085,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/53511675085,https://www.airlines-manager.com/aircraft/show/104258214,8:45,13:59,310,"$328,759.00","$297,616.00"
IAH - OMA,53521848736,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/53521848736,https://www.airlines-manager.com/aircraft/show/104258213,14:00,19:14,310,"$328,759.00","$297,616.00"
IAH - OMA,53531796523,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/53531796523,https://www.airlines-manager.com/aircraft/show/104258212,19:45,0:59,310,"$328,759.00","$297,616.00"
IAH - ONT,53492178836,IAH-ANC-ONT 1,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/53492178836,https://www.airlines-manager.com/aircraft/show/108258010,2:45,9:59,310,"$463,433.00","$422,267.00"
IAH - ONT,53505148598,IAH-ANC-ONT 2,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/53505148598,https://www.airlines-manager.com/aircraft/show/108258011,4:45,11:59,310,"$463,433.00","$422,267.00"
IAH - ONT,53516803743,IAH-ANC-ONT 3,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/53516803743,https://www.airlines-manager.com/aircraft/show/108258012,12:00,19:14,310,"$463,433.00","$422,267.00"
IAH - ONT,53521848710,IAH-ANC-ONT 4,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/53521848710,https://www.airlines-manager.com/aircraft/show/108089220,14:00,21:14,310,"$463,433.00","$422,267.00"
IAH - ONT,53526170911,IAH-ANC-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/53526170911,https://www.airlines-manager.com/aircraft/show/108286957,16:00,23:14,198,"$349,825.00","$316,835.00"
IAH - ORD,53492178542,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/53492178542,https://www.airlines-manager.com/aircraft/show/90183181,0:15,5:59,310,"$363,079.00","$308,113.00"
IAH - ORD,53505148738,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/53505148738,https://www.airlines-manager.com/aircraft/show/90183182,6:30,12:14,310,"$363,079.00","$308,113.00"
IAH - ORD,53511675171,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/53511675171,https://www.airlines-manager.com/aircraft/show/101412921,10:00,15:44,0,"$114,458.00","$61,014.00"
IAH - ORD,53521848630,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/53521848630,https://www.airlines-manager.com/aircraft/show/90183183,13:00,18:44,310,"$363,079.00","$308,113.00"
IAH - ORD,53521848631,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/53521848631,https://www.airlines-manager.com/aircraft/show/90140936,15:00,20:44,136,"$172,559.00","$138,123.00"
IAH - ORD,53531796421,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/53531796421,https://www.airlines-manager.com/aircraft/show/90183184,18:45,0:29,310,"$363,079.00","$308,113.00"
IAH - ORD,53536307206,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/53536307206,https://www.airlines-manager.com/aircraft/show/90183180,20:45,2:29,310,"$363,079.00","$308,113.00"
IAH - ORF,53492178441,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/53492178441,https://www.airlines-manager.com/aircraft/show/110582843,0:00,6:44,198,"$319,502.00","$289,849.00"
IAH - ORF,53492178442,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/53492178442,https://www.airlines-manager.com/aircraft/show/107467130,4:15,10:59,310,"$423,249.00","$386,247.00"
IAH - ORF,53511675044,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/53511675044,https://www.airlines-manager.com/aircraft/show/107467127,8:15,14:59,310,"$423,249.00","$386,247.00"
IAH - ORF,53521848550,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/53521848550,https://www.airlines-manager.com/aircraft/show/107467128,13:00,19:44,310,"$423,249.00","$386,247.00"
IAH - ORF,53531796620,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/53531796620,https://www.airlines-manager.com/aircraft/show/107467129,20:00,2:44,310,"$423,249.00","$386,247.00"
IAH - PBI,53492178805,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/53492178805,https://www.airlines-manager.com/aircraft/show/104717246,2:30,8:14,310,"$369,248.00","$334,512.00"
IAH - PBI,53516803615,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/53516803615,https://www.airlines-manager.com/aircraft/show/104717247,11:00,16:44,310,"$369,248.00","$334,512.00"
IAH - PBI,53521848678,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/53521848678,https://www.airlines-manager.com/aircraft/show/104743902,13:15,18:59,112,"$174,724.00","$152,218.00"
IAH - PBI,53526170949,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/53526170949,https://www.airlines-manager.com/aircraft/show/104717244,16:15,21:59,310,"$369,248.00","$334,512.00"
IAH - PBI,53536307303,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/53536307303,https://www.airlines-manager.com/aircraft/show/104717245,21:45,3:29,310,"$369,248.00","$334,512.00"
IAH - PDX,53492178828,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/53492178828,https://www.airlines-manager.com/aircraft/show/105562975,2:45,11:44,338,"$619,638.00","$571,536.00"
IAH - PDX,53492178829,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/53492178829,https://www.airlines-manager.com/aircraft/show/105562972,4:00,12:59,338,"$619,638.00","$571,536.00"
IAH - PDX,53505148626,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/53505148626,https://www.airlines-manager.com/aircraft/show/105562974,5:00,13:59,338,"$619,638.00","$571,536.00"
IAH - PDX,53516803760,IAH-SEA-DEN 6,ERJ-175,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/53516803760,https://www.airlines-manager.com/aircraft/show/105601215,12:00,21:14,112,"$269,877.00","$236,466.00"
IAH - PDX,53521848747,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/53521848747,https://www.airlines-manager.com/aircraft/show/105562973,14:00,22:59,338,"$619,638.00","$571,536.00"
IAH - PDX,53531796404,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/53531796404,https://www.airlines-manager.com/aircraft/show/105562971,18:30,3:29,338,"$619,638.00","$571,536.00"
IAH - PHL,53516803642,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/53516803642,https://www.airlines-manager.com/aircraft/show/106007216,11:00,18:14,338,"$501,281.00","$456,099.00"
IAH - PHL,53521848782,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/53521848782,https://www.airlines-manager.com/aircraft/show/106007215,14:15,21:29,338,"$501,281.00","$456,099.00"
IAH - PHL,53526170918,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/53526170918,https://www.airlines-manager.com/aircraft/show/107543798,16:00,23:14,0,"$122,690.00","$89,259.00"
IAH - PHL,53536307236,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/53536307236,https://www.airlines-manager.com/aircraft/show/106007214,21:00,4:14,338,"$501,281.00","$456,099.00"
IAH - PHL,53536307237,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/53536307237,https://www.airlines-manager.com/aircraft/show/106007217,21:30,4:44,338,"$501,281.00","$456,099.00"
IAH - PHL,53540025480,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/53540025480,https://www.airlines-manager.com/aircraft/show/106007213,23:45,6:59,338,"$501,281.00","$456,099.00"
IAH - PHX,53492178914,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/53492178914,https://www.airlines-manager.com/aircraft/show/96183549,4:00,9:59,320,"$379,088.00","$327,054.00"
IAH - PHX,53505148610,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/53505148610,https://www.airlines-manager.com/aircraft/show/96177955,5:00,10:59,320,"$379,088.00","$327,054.00"
IAH - PHX,53516803717,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/53516803717,https://www.airlines-manager.com/aircraft/show/82323704,11:30,17:29,112,"$179,363.00","$150,412.00"
IAH - PHX,53516803718,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/53516803718,https://www.airlines-manager.com/aircraft/show/96250652,11:45,17:44,320,"$379,088.00","$327,054.00"
IAH - PHX,53526170846,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/53526170846,https://www.airlines-manager.com/aircraft/show/96256511,15:30,21:29,320,"$379,088.00","$327,054.00"
IAH - PHX,53536307294,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/53536307294,https://www.airlines-manager.com/aircraft/show/95894466,21:30,3:29,320,"$379,088.00","$327,054.00"
IAH - PIT,53505148629,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/53505148629,https://www.airlines-manager.com/aircraft/show/100684073,5:00,11:29,310,"$405,248.00","$366,884.00"
IAH - PIT,53516803708,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/53516803708,https://www.airlines-manager.com/aircraft/show/100684074,11:15,17:44,310,"$405,248.00","$366,884.00"
IAH - PIT,53526170905,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/53526170905,https://www.airlines-manager.com/aircraft/show/110582845,16:00,22:29,198,"$306,127.00","$275,388.00"
IAH - PIT,53526170906,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/53526170906,https://www.airlines-manager.com/aircraft/show/100684071,17:15,23:44,310,"$405,248.00","$366,884.00"
IAH - PIT,53540025428,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/53540025428,https://www.airlines-manager.com/aircraft/show/100684072,22:45,5:14,310,"$405,248.00","$366,884.00"
IAH - PSP,53492178691,IAH-YEG-BUR 2,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/53492178691,https://www.airlines-manager.com/aircraft/show/117273343,1:30,8:29,310,"$450,598.00","$412,544.00"
IAH - PSP,53492178692,IAH-YEG-BUR 1,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/53492178692,https://www.airlines-manager.com/aircraft/show/117273344,3:45,10:44,310,"$450,598.00","$412,544.00"
IAH - PSP,53516803681,IAH-YEG-BUR 3,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/53516803681,https://www.airlines-manager.com/aircraft/show/117273342,11:00,17:59,310,"$450,598.00","$412,544.00"
IAH - PSP,53531796407,IAH-YEG-BUR 5,A321neo,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/53531796407,https://www.airlines-manager.com/aircraft/show/117273340,18:30,1:29,338,"$488,325.00","$451,854.00"
IAH - PVD,53492178824,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/53492178824,https://www.airlines-manager.com/aircraft/show/107467129,2:45,10:59,310,"$516,263.00","$474,753.00"
IAH - PVD,53505148749,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/53505148749,https://www.airlines-manager.com/aircraft/show/110582843,6:45,14:59,198,"$389,086.00","$355,811.00"
IAH - PVD,53521848552,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/53521848552,https://www.airlines-manager.com/aircraft/show/107467130,13:00,21:14,310,"$516,263.00","$474,753.00"
IAH - PVD,53526171014,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/53526171014,https://www.airlines-manager.com/aircraft/show/107467127,17:00,1:14,310,"$516,263.00","$474,753.00"
IAH - PVD,53531796520,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/53531796520,https://www.airlines-manager.com/aircraft/show/107467128,19:45,3:59,310,"$516,263.00","$474,753.00"
IAH - PVR,53492178857,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/53492178857,https://www.airlines-manager.com/aircraft/show/105099862,3:00,8:29,112,"$166,498.00","$145,084.00"
IAH - PVR,53511675046,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/53511675046,https://www.airlines-manager.com/aircraft/show/114266975,8:30,13:59,320,"$355,635.00","$318,001.00"
IAH - PVR,53516803731,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/53516803731,https://www.airlines-manager.com/aircraft/show/113250059,12:00,17:29,320,"$355,635.00","$318,001.00"
IAH - PVR,53531796342,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/53531796342,https://www.airlines-manager.com/aircraft/show/113114108,18:00,23:29,320,"$355,635.00","$318,001.00"
IAH - PVR,53536307313,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/53536307313,https://www.airlines-manager.com/aircraft/show/114266974,22:00,3:29,320,"$355,635.00","$318,001.00"
IAH - PWM,53505148788,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/53505148788,https://www.airlines-manager.com/aircraft/show/106014350,7:45,16:14,198,"$406,630.00","$372,446.00"
IAH - PWM,53516803639,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/53516803639,https://www.airlines-manager.com/aircraft/show/96691558,11:00,19:29,310,"$540,000.00","$497,359.00"
IAH - PWM,53521848822,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/53521848822,https://www.airlines-manager.com/aircraft/show/96694086,15:00,23:29,310,"$540,000.00","$497,359.00"
IAH - PWM,53531796471,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/53531796471,https://www.airlines-manager.com/aircraft/show/96692491,19:15,3:44,310,"$540,000.00","$497,359.00"
IAH - PWM,53540025420,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/53540025420,https://www.airlines-manager.com/aircraft/show/96692343,22:45,7:14,310,"$540,000.00","$497,359.00"
IAH - RAP,53492178784,IAH-GRR-MSN 1,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/53492178784,https://www.airlines-manager.com/aircraft/show/117273348,2:15,8:29,310,"$388,294.00","$354,046.00"
IAH - RAP,53492178785,IAH-GRR-MSN 4,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/53492178785,https://www.airlines-manager.com/aircraft/show/117273345,4:15,10:29,310,"$388,294.00","$354,046.00"
IAH - RAP,53521848738,IAH-GRR-MSN 3,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/53521848738,https://www.airlines-manager.com/aircraft/show/117273346,14:00,20:14,310,"$388,294.00","$354,046.00"
IAH - RAP,53531796622,IAH-GRR-MSN 2,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/53531796622,https://www.airlines-manager.com/aircraft/show/117273347,20:00,2:14,290,"$373,521.00","$339,854.00"
IAH - RDU,53505148642,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/53505148642,https://www.airlines-manager.com/aircraft/show/100684072,5:15,11:29,310,"$388,679.00","$351,875.00"
IAH - RDU,53516803716,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/53516803716,https://www.airlines-manager.com/aircraft/show/100684073,11:30,17:44,310,"$388,679.00","$351,875.00"
IAH - RDU,53531796321,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/53531796321,https://www.airlines-manager.com/aircraft/show/100684074,17:45,23:59,310,"$388,679.00","$351,875.00"
IAH - RDU,53540025382,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/53540025382,https://www.airlines-manager.com/aircraft/show/110582845,22:30,4:44,198,"$293,805.00","$264,316.00"
IAH - RDU,53540025383,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/53540025383,https://www.airlines-manager.com/aircraft/show/100684071,23:45,5:59,310,"$388,679.00","$351,875.00"
IAH - RIC,53492178825,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/53492178825,https://www.airlines-manager.com/aircraft/show/107467133,2:45,9:14,310,"$416,537.00","$380,223.00"
IAH - RIC,53516803751,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/53516803751,https://www.airlines-manager.com/aircraft/show/107467134,12:00,18:29,310,"$416,537.00","$380,223.00"
IAH - RIC,53521848689,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/53521848689,https://www.airlines-manager.com/aircraft/show/107467211,13:45,20:14,112,"$195,969.00","$172,163.00"
IAH - RIC,53526170878,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/53526170878,https://www.airlines-manager.com/aircraft/show/107467131,15:45,22:14,310,"$416,537.00","$380,223.00"
IAH - RIC,53536307290,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/53536307290,https://www.airlines-manager.com/aircraft/show/107467132,21:30,3:59,310,"$416,537.00","$380,223.00"
IAH - RNO,53492178671,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/53492178671,https://www.airlines-manager.com/aircraft/show/103882357,1:15,9:14,310,"$511,991.00","$468,883.00"
IAH - RNO,53492178672,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/53492178672,https://www.airlines-manager.com/aircraft/show/105099861,4:00,11:59,112,"$240,901.00","$212,369.00"
IAH - RNO,53505148619,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/53505148619,https://www.airlines-manager.com/aircraft/show/103882356,5:00,12:59,310,"$511,991.00","$468,883.00"
IAH - RNO,53521848575,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/53521848575,https://www.airlines-manager.com/aircraft/show/103882355,13:00,20:59,310,"$511,991.00","$468,883.00"
IAH - RNO,53526171000,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/53526171000,https://www.airlines-manager.com/aircraft/show/103882358,17:00,0:59,310,"$511,991.00","$468,883.00"
IAH - RSW,53492178830,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/53492178830,https://www.airlines-manager.com/aircraft/show/104717244,2:45,8:14,310,"$349,506.00","$314,948.00"
IAH - RSW,53516803613,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/53516803613,https://www.airlines-manager.com/aircraft/show/104717245,11:00,16:29,310,"$349,506.00","$314,948.00"
IAH - RSW,53526170865,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/53526170865,https://www.airlines-manager.com/aircraft/show/104717246,15:45,21:14,310,"$349,506.00","$314,948.00"
IAH - RSW,53536307277,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/53536307277,https://www.airlines-manager.com/aircraft/show/104717247,21:30,2:59,310,"$349,506.00","$314,948.00"
IAH - RSW,53540025495,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/53540025495,https://www.airlines-manager.com/aircraft/show/104743902,23:45,5:14,112,"$165,422.00","$143,186.00"
IAH - SAN,53492178599,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/53492178599,https://www.airlines-manager.com/aircraft/show/98578921,0:45,7:59,320,"$452,539.00","$405,198.00"
IAH - SAN,53492178600,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/53492178600,https://www.airlines-manager.com/aircraft/show/98578922,4:15,11:29,320,"$452,539.00","$405,198.00"
IAH - SAN,53511675230,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/53511675230,https://www.airlines-manager.com/aircraft/show/105400635,10:15,17:29,112,"$214,317.00","$186,858.00"
IAH - SAN,53521848807,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/53521848807,https://www.airlines-manager.com/aircraft/show/98578923,15:00,22:14,320,"$452,539.00","$405,198.00"
IAH - SAN,53531796370,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/53531796370,https://www.airlines-manager.com/aircraft/show/98578920,18:00,1:14,320,"$452,539.00","$405,198.00"
IAH - SAN,53531796371,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/53531796371,https://www.airlines-manager.com/aircraft/show/98578924,19:45,2:59,320,"$452,539.00","$405,198.00"
IAH - SAT,53492178697,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/53492178697,https://www.airlines-manager.com/aircraft/show/106499070,1:30,4:14,198,"$90,236.00","$72,357.00"
IAH - SAT,53505148696,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/53505148696,https://www.airlines-manager.com/aircraft/show/101412921,6:00,8:44,0,"$44,058.00","$22,031.00"
IAH - SAT,53511675145,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/53511675145,https://www.airlines-manager.com/aircraft/show/99093332,9:45,12:29,320,"$119,393.00","$93,029.00"
IAH - SAT,53521848771,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/53521848771,https://www.airlines-manager.com/aircraft/show/99093333,14:00,16:44,320,"$119,393.00","$93,029.00"
IAH - SAT,53531796330,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/53531796330,https://www.airlines-manager.com/aircraft/show/99093334,18:00,20:44,320,"$119,393.00","$93,029.00"
IAH - SAT,53540025469,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/53540025469,https://www.airlines-manager.com/aircraft/show/99093335,23:30,2:14,320,"$119,393.00","$93,029.00"
IAH - SAV,53492178777,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/53492178777,https://www.airlines-manager.com/aircraft/show/110424758,2:00,7:29,320,"$342,511.00","$306,705.00"
IAH - SAV,53511675050,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/53511675050,https://www.airlines-manager.com/aircraft/show/110424759,8:30,13:59,320,"$342,511.00","$306,705.00"
IAH - SAV,53521848609,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/53521848609,https://www.airlines-manager.com/aircraft/show/110424760,13:00,18:29,320,"$342,511.00","$306,705.00"
IAH - SAV,53536307296,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/53536307296,https://www.airlines-manager.com/aircraft/show/110424761,21:45,3:14,320,"$342,511.00","$306,705.00"
IAH - SCL,53492178722,IAH 56A-5 B,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/53492178722,https://www.airlines-manager.com/aircraft/show/106676236,1:30,19:59,648,"$2,288,301.00","$2,132,185.00"
IAH - SCL,53505148729,IAH 56A-7 B,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/53505148729,https://www.airlines-manager.com/aircraft/show/106676238,6:30,0:59,648,"$2,288,301.00","$2,132,185.00"
IAH - SCL,53531796284,IAH 56A-2 B,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/53531796284,https://www.airlines-manager.com/aircraft/show/106676233,17:30,11:59,648,"$2,288,301.00","$2,132,185.00"
IAH - SDF,53492178916,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/53492178916,https://www.airlines-manager.com/aircraft/show/107467132,4:00,9:14,310,"$328,899.00","$296,346.00"
IAH - SDF,53516803754,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/53516803754,https://www.airlines-manager.com/aircraft/show/107467133,12:00,17:14,310,"$328,899.00","$296,346.00"
IAH - SDF,53531796397,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/53531796397,https://www.airlines-manager.com/aircraft/show/107467134,18:30,23:44,310,"$328,899.00","$296,346.00"
IAH - SDF,53536307161,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/53536307161,https://www.airlines-manager.com/aircraft/show/107467211,20:15,1:29,112,"$156,193.00","$135,286.00"
IAH - SDF,53536307162,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/53536307162,https://www.airlines-manager.com/aircraft/show/107467131,22:15,3:29,310,"$328,899.00","$296,346.00"
IAH - SEA,53492178883,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/53492178883,https://www.airlines-manager.com/aircraft/show/105562971,3:30,12:44,338,"$643,742.00","$588,384.00"
IAH - SEA,53505148562,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/53505148562,https://www.airlines-manager.com/aircraft/show/105562973,4:30,13:44,338,"$643,742.00","$588,384.00"
IAH - SEA,53521848577,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/53521848577,https://www.airlines-manager.com/aircraft/show/105562972,13:00,22:14,338,"$643,742.00","$588,384.00"
IAH - SEA,53521848578,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/53521848578,https://www.airlines-manager.com/aircraft/show/105562974,14:00,23:14,338,"$643,742.00","$588,384.00"
IAH - SEA,53531796287,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/53531796287,https://www.airlines-manager.com/aircraft/show/105562975,17:30,2:44,338,"$643,742.00","$588,384.00"
IAH - SEA,53536307265,IAH-SEA-DEN 6,ERJ-175,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/53536307265,https://www.airlines-manager.com/aircraft/show/105601215,21:15,6:44,112,"$279,368.00","$241,480.00"
IAH - SJC,53492178844,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/53492178844,https://www.airlines-manager.com/aircraft/show/96694086,3:00,11:14,310,"$531,297.00","$485,668.00"
IAH - SJC,53516803640,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/53516803640,https://www.airlines-manager.com/aircraft/show/96692491,11:00,19:14,310,"$531,297.00","$485,668.00"
IAH - SJC,53521848789,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/53521848789,https://www.airlines-manager.com/aircraft/show/96692343,14:30,22:44,310,"$531,297.00","$485,668.00"
IAH - SJC,53540025438,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/53540025438,https://www.airlines-manager.com/aircraft/show/96691558,23:00,7:14,310,"$531,297.00","$485,668.00"
IAH - SJC,53540025439,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/53540025439,https://www.airlines-manager.com/aircraft/show/106014350,23:30,7:44,198,"$399,774.00","$363,202.00"
IAH - SJD,53492178754,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/53492178754,https://www.airlines-manager.com/aircraft/show/114266975,1:45,7:44,320,"$380,962.00","$342,124.00"
IAH - SJD,53505148641,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/53505148641,https://www.airlines-manager.com/aircraft/show/113250059,5:15,11:14,320,"$380,962.00","$342,124.00"
IAH - SJD,53516803732,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/53516803732,https://www.airlines-manager.com/aircraft/show/113114108,12:00,17:59,320,"$380,962.00","$342,124.00"
IAH - SJD,53526170892,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/53526170892,https://www.airlines-manager.com/aircraft/show/114266974,16:00,21:59,320,"$380,962.00","$342,124.00"
IAH - SJD,53536307240,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/53536307240,https://www.airlines-manager.com/aircraft/show/105099862,21:00,2:59,108,"$173,491.00","$151,362.00"
IAH - SLC,53492178833,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/53492178833,https://www.airlines-manager.com/aircraft/show/93094698,2:45,9:29,310,"$424,254.00","$380,767.00"
IAH - SLC,53505148602,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/53505148602,https://www.airlines-manager.com/aircraft/show/93100455,4:45,11:29,112,"$199,641.00","$171,464.00"
IAH - SLC,53511675188,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/53511675188,https://www.airlines-manager.com/aircraft/show/93094699,10:00,16:44,310,"$424,254.00","$380,767.00"
IAH - SLC,53516803766,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/53516803766,https://www.airlines-manager.com/aircraft/show/93094695,12:00,18:44,310,"$424,254.00","$380,767.00"
IAH - SLC,53526170843,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/53526170843,https://www.airlines-manager.com/aircraft/show/93094696,15:15,21:59,310,"$424,254.00","$380,767.00"
IAH - SLC,53536307254,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/53536307254,https://www.airlines-manager.com/aircraft/show/93094697,21:00,3:44,310,"$424,254.00","$380,767.00"
IAH - SMF,53492178790,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/53492178790,https://www.airlines-manager.com/aircraft/show/99093335,2:15,10:29,320,"$529,867.00","$480,638.00"
IAH - SMF,53492178791,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/53492178791,https://www.airlines-manager.com/aircraft/show/106499070,4:15,12:29,198,"$399,187.00","$363,798.00"
IAH - SMF,53521848621,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/53521848621,https://www.airlines-manager.com/aircraft/show/99093332,13:00,21:14,320,"$529,867.00","$480,638.00"
IAH - SMF,53526170976,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/53526170976,https://www.airlines-manager.com/aircraft/show/99093333,16:45,0:59,320,"$529,867.00","$480,638.00"
IAH - SMF,53536307221,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/53536307221,https://www.airlines-manager.com/aircraft/show/99093334,20:45,4:59,320,"$529,867.00","$480,638.00"
IAH - STL,53492178662,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/53492178662,https://www.airlines-manager.com/aircraft/show/88725601,1:15,5:59,310,"$299,834.00","$267,563.00"
IAH - STL,53511675030,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/53511675030,https://www.airlines-manager.com/aircraft/show/103600702,8:15,12:59,310,"$299,834.00","$267,563.00"
IAH - STL,53521848755,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/53521848755,https://www.airlines-manager.com/aircraft/show/103600701,14:00,18:44,310,"$299,834.00","$267,563.00"
IAH - STL,53521848756,IAH-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/53521848756,https://www.airlines-manager.com/aircraft/show/96990010,15:00,19:44,112,"$142,579.00","$122,049.00"
IAH - STL,53536307164,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/53536307164,https://www.airlines-manager.com/aircraft/show/103600700,20:15,0:59,310,"$299,834.00","$267,563.00"
IAH - STL,53536307165,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/53536307165,https://www.airlines-manager.com/aircraft/show/110582844,21:45,2:29,198,"$227,848.00","$202,002.00"
IAH - TPA,53492178932,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/53492178932,https://www.airlines-manager.com/aircraft/show/93094699,4:15,9:29,310,"$326,295.00","$291,073.00"
IAH - TPA,53505148727,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/53505148727,https://www.airlines-manager.com/aircraft/show/93094695,6:15,11:29,310,"$326,295.00","$291,073.00"
IAH - TPA,53511675224,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/53511675224,https://www.airlines-manager.com/aircraft/show/93094696,10:00,15:14,310,"$326,295.00","$291,073.00"
IAH - TPA,53526170870,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/53526170870,https://www.airlines-manager.com/aircraft/show/93094697,15:45,20:59,310,"$326,295.00","$291,073.00"
IAH - TPA,53536307283,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/53536307283,https://www.airlines-manager.com/aircraft/show/93094698,21:30,2:44,310,"$326,295.00","$291,073.00"
IAH - TPA,53540025478,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/53540025478,https://www.airlines-manager.com/aircraft/show/93100455,23:30,4:44,107,"$152,102.00","$129,766.00"
IAH - TUL,53492178578,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/53492178578,https://www.airlines-manager.com/aircraft/show/82543907,0:30,4:14,112,"$93,654.00","$77,440.00"
IAH - TUL,53492178579,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/53492178579,https://www.airlines-manager.com/aircraft/show/114373409,3:30,7:14,310,"$202,768.00","$176,997.00"
IAH - TUL,53511675142,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/53511675142,https://www.airlines-manager.com/aircraft/show/114373410,9:45,13:29,310,"$202,768.00","$176,997.00"
IAH - TUL,53521848804,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/53521848804,https://www.airlines-manager.com/aircraft/show/113994196,15:00,18:44,310,"$202,768.00","$176,997.00"
IAH - TUL,53536307173,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/53536307173,https://www.airlines-manager.com/aircraft/show/86385103,20:15,23:59,310,"$202,768.00","$176,997.00"
IAH - TUS,53505148663,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/53505148663,https://www.airlines-manager.com/aircraft/show/100684074,5:30,11:14,310,"$358,693.00","$324,614.00"
IAH - TUS,53511675233,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/53511675233,https://www.airlines-manager.com/aircraft/show/110582845,10:15,15:59,198,"$272,008.00","$244,705.00"
IAH - TUS,53516803714,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/53516803714,https://www.airlines-manager.com/aircraft/show/100684071,11:30,17:14,310,"$358,693.00","$324,614.00"
IAH - TUS,53526171002,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/53526171002,https://www.airlines-manager.com/aircraft/show/100684072,17:00,22:44,310,"$358,693.00","$324,614.00"
IAH - TUS,53540025455,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/53540025455,https://www.airlines-manager.com/aircraft/show/100684073,23:15,4:59,310,"$358,693.00","$324,614.00"
IAH - TYS,53492178783,IAH-GRR-MSN 2,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/53492178783,https://www.airlines-manager.com/aircraft/show/117273347,2:15,7:14,310,"$325,239.00","$295,080.00"
IAH - TYS,53511675059,IAH-GRR-MSN 1,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/53511675059,https://www.airlines-manager.com/aircraft/show/117273348,8:30,13:29,310,"$325,239.00","$295,080.00"
IAH - TYS,53516803686,IAH-GRR-MSN 4,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/53516803686,https://www.airlines-manager.com/aircraft/show/117273345,11:00,15:59,310,"$325,239.00","$295,080.00"
IAH - TYS,53536307156,IAH-GRR-MSN 3,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/53536307156,https://www.airlines-manager.com/aircraft/show/117273346,20:15,1:14,310,"$325,239.00","$295,080.00"
IAH - UIO,53492178562,IAH 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/53492178562,https://www.airlines-manager.com/aircraft/show/88905140,0:30,11:14,932,"$1,795,179.00","$1,639,785.00"
IAH - UIO,53521848669,IAH 84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/53521848669,https://www.airlines-manager.com/aircraft/show/89124076,13:15,23:59,932,"$1,795,179.00","$1,639,785.00"
IAH - YEG,53492178693,IAH-YEG-BUR 5,A321neo,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/53492178693,https://www.airlines-manager.com/aircraft/show/117273340,1:30,10:44,338,"$640,637.00","$594,021.00"
IAH - YEG,53511675074,IAH-YEG-BUR 2,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/53511675074,https://www.airlines-manager.com/aircraft/show/117273343,8:30,17:44,310,"$591,637.00","$542,704.00"
IAH - YEG,53516803683,IAH-YEG-BUR 1,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/53516803683,https://www.airlines-manager.com/aircraft/show/117273344,11:00,20:14,310,"$591,637.00","$542,704.00"
IAH - YEG,53526171028,IAH-YEG-BUR 4,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/53526171028,https://www.airlines-manager.com/aircraft/show/117273341,17:15,2:29,310,"$591,637.00","$542,704.00"
IAH - YEG,53531796367,IAH-YEG-BUR 3,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/53531796367,https://www.airlines-manager.com/aircraft/show/117273342,18:00,3:14,310,"$591,637.00","$542,704.00"
IAH - YOW,53492178866,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/53492178866,https://www.airlines-manager.com/aircraft/show/113114108,3:15,11:14,320,"$508,793.00","$461,136.00"
IAH - YOW,53505148793,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/53505148793,https://www.airlines-manager.com/aircraft/show/114266974,8:00,15:59,320,"$508,793.00","$461,136.00"
IAH - YOW,53521848594,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/53521848594,https://www.airlines-manager.com/aircraft/show/105099862,13:00,20:59,112,"$238,579.00","$210,374.00"
IAH - YOW,53531796313,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/53531796313,https://www.airlines-manager.com/aircraft/show/114266975,17:45,1:44,320,"$508,793.00","$461,136.00"
IAH - YOW,53536307258,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/53536307258,https://www.airlines-manager.com/aircraft/show/113250059,21:15,5:14,320,"$508,793.00","$461,136.00"
IAH - YUL,53492178597,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/53492178597,https://www.airlines-manager.com/aircraft/show/114266980,0:45,8:44,400,"$682,424.00","$624,483.00"
IAH - YUL,53492178598,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/53492178598,https://www.airlines-manager.com/aircraft/show/114266979,2:00,9:59,400,"$682,424.00","$624,483.00"
IAH - YUL,53516803735,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/53516803735,https://www.airlines-manager.com/aircraft/show/114266978,12:00,19:59,400,"$682,424.00","$624,483.00"
IAH - YUL,53536307203,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/53536307203,https://www.airlines-manager.com/aircraft/show/114266977,20:45,4:44,400,"$682,424.00","$624,483.00"
IAH - YVR,53492178640,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/53492178640,https://www.airlines-manager.com/aircraft/show/97076946,1:00,10:29,400,"$774,150.00","$706,088.00"
IAH - YVR,53492178641,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/53492178641,https://www.airlines-manager.com/aircraft/show/97076943,4:00,13:29,400,"$774,150.00","$706,088.00"
IAH - YVR,53521848643,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/53521848643,https://www.airlines-manager.com/aircraft/show/97076944,13:00,22:29,400,"$774,150.00","$706,088.00"
IAH - YVR,53526170931,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/53526170931,https://www.airlines-manager.com/aircraft/show/97026605,16:00,1:44,136,"$285,820.00","$249,912.00"
IAH - YVR,53531796619,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/53531796619,https://www.airlines-manager.com/aircraft/show/97076945,20:00,5:29,400,"$774,150.00","$706,088.00"
IAH - YVR,53540025433,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/53540025433,https://www.airlines-manager.com/aircraft/show/97076942,23:00,8:29,400,"$774,150.00","$706,088.00"
IAH - YYC,53492178667,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/53492178667,https://www.airlines-manager.com/aircraft/show/114266978,1:15,9:59,400,"$742,774.00","$680,022.00"
IAH - YYC,53516803736,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/53516803736,https://www.airlines-manager.com/aircraft/show/114266977,12:00,20:44,400,"$742,774.00","$680,022.00"
IAH - YYC,53526170894,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/53526170894,https://www.airlines-manager.com/aircraft/show/114266980,16:00,0:44,400,"$742,774.00","$680,022.00"
IAH - YYC,53526170895,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/53526170895,https://www.airlines-manager.com/aircraft/show/114266979,17:15,1:59,400,"$742,774.00","$680,022.00"
IAH - YYZ,53492178882,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/53492178882,https://www.airlines-manager.com/aircraft/show/97076944,3:30,10:29,400,"$572,430.00","$513,782.00"
IAH - YYZ,53505148741,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/53505148741,https://www.airlines-manager.com/aircraft/show/97026605,6:45,13:44,136,"$211,434.00","$180,891.00"
IAH - YYZ,53521848638,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/53521848638,https://www.airlines-manager.com/aircraft/show/97076945,13:00,19:59,400,"$572,430.00","$513,782.00"
IAH - YYZ,53526170936,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/53526170936,https://www.airlines-manager.com/aircraft/show/97076942,16:00,22:59,400,"$572,430.00","$513,782.00"
IAH - YYZ,53531796360,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/53531796360,https://www.airlines-manager.com/aircraft/show/97076946,18:00,0:59,400,"$572,430.00","$513,782.00"
IAH - YYZ,53536307238,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/53536307238,https://www.airlines-manager.com/aircraft/show/97076943,21:00,3:59,400,"$572,430.00","$513,782.00"
MIA - ABQ,53492178673,MIA-IAD-TUS 1,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/53492178673,https://www.airlines-manager.com/aircraft/show/97556721,1:15,9:59,310,"$547,286.00","$499,445.00"
MIA - ABQ,53492178674,MIA-IAD-TUS 4,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/53492178674,https://www.airlines-manager.com/aircraft/show/97556718,4:15,12:59,310,"$547,286.00","$499,445.00"
MIA - ABQ,53511675220,MIA-IAD-TUS 3,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/53511675220,https://www.airlines-manager.com/aircraft/show/97556719,10:00,18:44,310,"$547,286.00","$499,445.00"
MIA - ABQ,53531796511,MIA-IAD-TUS 2,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/53531796511,https://www.airlines-manager.com/aircraft/show/97556720,19:30,4:14,310,"$547,286.00","$499,445.00"
MIA - ABQ,53540025381,MIA-IAD-TUS 5,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/53540025381,https://www.airlines-manager.com/aircraft/show/97556716,22:30,7:14,310,"$547,286.00","$499,445.00"
MIA - ACC,53521848776,MIA 84B-6 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/53521848776,https://www.airlines-manager.com/aircraft/show/106676230,14:15,11:59,962,"$3,564,950.00","$3,254,637.00"
MIA - ACC,53540025401,MIA 84B-1 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/53540025401,https://www.airlines-manager.com/aircraft/show/106676225,22:45,20:29,962,"$3,564,950.00","$3,254,637.00"
MIA - ALB,53492178888,MIA-DSM-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/53492178888,https://www.airlines-manager.com/aircraft/show/113101233,3:30,10:14,320,"$427,642.00","$386,268.00"
MIA - ALB,53521848641,MIA-DSM-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/53521848641,https://www.airlines-manager.com/aircraft/show/113101230,13:00,19:44,320,"$427,642.00","$386,268.00"
MIA - ALB,53526170896,MIA-DSM-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/53526170896,https://www.airlines-manager.com/aircraft/show/100049776,16:00,22:59,112,"$202,282.00","$178,019.00"
MIA - ALB,53536307150,MIA-DSM-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/53536307150,https://www.airlines-manager.com/aircraft/show/111064081,20:15,2:59,320,"$427,642.00","$386,268.00"
MIA - ALB,53540025464,MIA-DSM-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/53540025464,https://www.airlines-manager.com/aircraft/show/113101228,23:15,5:59,320,"$427,642.00","$386,268.00"
MIA - ALG,53526170985,MIA 84B-4 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/53526170985,https://www.airlines-manager.com/aircraft/show/106676228,17:00,12:29,962,"$3,237,342.00","$2,951,810.00"
MIA - ALG,53536307196,MIA 84B-2 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/53536307196,https://www.airlines-manager.com/aircraft/show/106676226,20:30,15:59,962,"$3,237,342.00","$2,951,810.00"
MIA - ANU,53505148732,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/53505148732,https://www.airlines-manager.com/aircraft/show/110114297,6:30,13:44,228,"$355,422.00","$324,739.00"
MIA - ANU,53511675078,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/53511675078,https://www.airlines-manager.com/aircraft/show/110114298,8:30,15:44,228,"$355,422.00","$324,739.00"
MIA - ANU,53516803740,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/53516803740,https://www.airlines-manager.com/aircraft/show/110114295,12:00,19:14,228,"$355,422.00","$324,739.00"
MIA - ANU,53521848610,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/53521848610,https://www.airlines-manager.com/aircraft/show/110114296,13:00,20:14,228,"$355,422.00","$324,739.00"
MIA - ANU,53526170965,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/53526170965,https://www.airlines-manager.com/aircraft/show/110114300,16:30,23:44,228,"$355,422.00","$324,739.00"
MIA - ANU,53540025474,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/53540025474,https://www.airlines-manager.com/aircraft/show/110114299,23:30,6:44,228,"$355,422.00","$324,739.00"
MIA - ATL,53516803774,MIA-LAX-DEN 4,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/53516803774,https://www.airlines-manager.com/aircraft/show/91126652,12:00,16:29,400,"$365,129.00","$300,884.00"
MIA - ATL,53521848623,MIA-LAX-DEN 2,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/53521848623,https://www.airlines-manager.com/aircraft/show/91126650,13:00,17:29,400,"$365,129.00","$300,884.00"
MIA - ATL,53531796514,MIA-LAX-DEN 1,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/53531796514,https://www.airlines-manager.com/aircraft/show/91126649,19:30,23:59,400,"$365,129.00","$300,884.00"
MIA - ATL,53536307239,MIA-LAX-DEN 3,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/53536307239,https://www.airlines-manager.com/aircraft/show/91126651,21:00,1:29,400,"$365,129.00","$300,884.00"
MIA - AUA,53492178863,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/53492178863,https://www.airlines-manager.com/aircraft/show/107121795,3:00,9:29,320,"$403,740.00","$363,920.00"
MIA - AUA,53505148556,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/53505148556,https://www.airlines-manager.com/aircraft/show/107121798,4:30,10:59,320,"$403,740.00","$363,920.00"
MIA - AUA,53516803694,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/53516803694,https://www.airlines-manager.com/aircraft/show/107121797,11:00,17:29,320,"$403,740.00","$363,920.00"
MIA - AUA,53531796308,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/53531796308,https://www.airlines-manager.com/aircraft/show/107121796,17:45,0:14,320,"$403,740.00","$363,920.00"
MIA - AUA,53536307300,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/53536307300,https://www.airlines-manager.com/aircraft/show/107121799,21:45,4:14,241,"$313,495.00","$276,694.00"
MIA - AUS,53492178839,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/53492178839,https://www.airlines-manager.com/aircraft/show/99920625,2:45,9:14,320,"$402,281.00","$358,582.00"
MIA - AUS,53511675219,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/53511675219,https://www.airlines-manager.com/aircraft/show/99920626,10:00,16:29,320,"$402,281.00","$358,582.00"
MIA - AUS,53521848772,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/53521848772,https://www.airlines-manager.com/aircraft/show/82323689,14:00,20:29,112,"$189,894.00","$164,835.00"
MIA - AUS,53521848773,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/53521848773,https://www.airlines-manager.com/aircraft/show/99920623,14:45,21:14,320,"$402,281.00","$358,582.00"
MIA - AUS,53536307219,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/53536307219,https://www.airlines-manager.com/aircraft/show/99920624,20:45,3:14,320,"$402,281.00","$358,582.00"
MIA - BDA,53492178851,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/53492178851,https://www.airlines-manager.com/aircraft/show/104034457,3:00,9:14,228,"$294,998.00","$267,472.00"
MIA - BDA,53492178852,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/53492178852,https://www.airlines-manager.com/aircraft/show/104034459,3:45,9:59,228,"$294,998.00","$267,472.00"
MIA - BDA,53511675159,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/53511675159,https://www.airlines-manager.com/aircraft/show/104034460,10:00,16:14,228,"$294,998.00","$267,472.00"
MIA - BDA,53516803619,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/53516803619,https://www.airlines-manager.com/aircraft/show/99326789,11:00,17:14,228,"$294,998.00","$267,472.00"
MIA - BDA,53526170871,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/53526170871,https://www.airlines-manager.com/aircraft/show/104034461,15:45,21:59,228,"$294,998.00","$267,472.00"
MIA - BDA,53536307275,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/53536307275,https://www.airlines-manager.com/aircraft/show/104034458,21:15,3:29,228,"$294,998.00","$267,472.00"
MIA - BDL,53492178848,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/53492178848,https://www.airlines-manager.com/aircraft/show/107763565,3:00,9:44,320,"$426,255.00","$383,974.00"
MIA - BDL,53505148801,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/53505148801,https://www.airlines-manager.com/aircraft/show/107467213,8:00,14:44,112,"$200,632.00","$176,005.00"
MIA - BDL,53521848693,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/53521848693,https://www.airlines-manager.com/aircraft/show/107763561,13:45,20:29,320,"$426,255.00","$383,974.00"
MIA - BDL,53521848694,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/53521848694,https://www.airlines-manager.com/aircraft/show/107763566,14:00,20:44,320,"$426,255.00","$383,974.00"
MIA - BDL,53536307197,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/53536307197,https://www.airlines-manager.com/aircraft/show/107763562,20:30,3:14,320,"$426,255.00","$383,974.00"
MIA - BFF,53492178590,MIA-PSP-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/53492178590,https://www.airlines-manager.com/aircraft/show/116789634,0:45,9:29,320,"$554,176.00","$504,013.00"
MIA - BFF,53492178591,MIA-PSP-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/53492178591,https://www.airlines-manager.com/aircraft/show/116789632,1:00,9:44,320,"$554,176.00","$504,013.00"
MIA - BFF,53511675177,MIA-PSP-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/53511675177,https://www.airlines-manager.com/aircraft/show/116789633,10:00,18:44,320,"$554,176.00","$504,013.00"
MIA - BFF,53521848626,MIA-PSP-BFF 5,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/53521848626,https://www.airlines-manager.com/aircraft/show/116789630,13:00,21:44,320,"$554,176.00","$504,013.00"
MIA - BFF,53536307210,MIA-PSP-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/53536307210,https://www.airlines-manager.com/aircraft/show/116789631,20:45,5:29,320,"$554,176.00","$504,013.00"
MIA - BGI,53492178826,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/53492178826,https://www.airlines-manager.com/aircraft/show/107121796,2:45,10:59,320,"$515,730.00","$466,906.00"
MIA - BGI,53505148746,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/53505148746,https://www.airlines-manager.com/aircraft/show/107121799,6:45,14:59,320,"$515,730.00","$466,906.00"
MIA - BGI,53516803755,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/53516803755,https://www.airlines-manager.com/aircraft/show/107121795,12:00,20:14,320,"$515,730.00","$466,906.00"
MIA - BGI,53521848688,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/53521848688,https://www.airlines-manager.com/aircraft/show/107121798,13:30,21:44,320,"$515,730.00","$466,906.00"
MIA - BGI,53531796618,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/53531796618,https://www.airlines-manager.com/aircraft/show/107121797,20:00,4:14,320,"$515,730.00","$466,906.00"
MIA - BHM,53492178895,MIA-CID-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/53492178895,https://www.airlines-manager.com/aircraft/show/116789651,3:45,8:29,310,"$301,638.00","$272,460.00"
MIA - BHM,53511675156,MIA-CID-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/53511675156,https://www.airlines-manager.com/aircraft/show/116789652,10:00,14:44,310,"$301,638.00","$272,460.00"
MIA - BHM,53526171029,MIA-CID-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/53526171029,https://www.airlines-manager.com/aircraft/show/116789653,17:15,21:59,310,"$301,638.00","$272,460.00"
MIA - BHM,53540025403,MIA-CID-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/53540025403,https://www.airlines-manager.com/aircraft/show/116789650,22:45,3:29,310,"$301,638.00","$272,460.00"
MIA - BIL,53511675151,MIA-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/53511675151,https://www.airlines-manager.com/aircraft/show/116789629,10:00,20:14,320,"$631,281.00","$575,789.00"
MIA - BIL,53516803725,MIA-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/53516803725,https://www.airlines-manager.com/aircraft/show/116789628,12:00,22:14,320,"$631,281.00","$575,789.00"
MIA - BIL,53521848745,MIA-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/53521848745,https://www.airlines-manager.com/aircraft/show/116789627,14:00,0:14,320,"$631,281.00","$575,789.00"
MIA - BIL,53536307286,MIA-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/53536307286,https://www.airlines-manager.com/aircraft/show/116789626,21:30,7:44,320,"$631,281.00","$575,789.00"
MIA - BIL,53540025485,MIA-BIL-BZN 5,ERJ-175,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/53540025485,https://www.airlines-manager.com/aircraft/show/116042637,23:45,9:59,112,"$296,899.00","$263,087.00"
MIA - BNA,53492178607,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/53492178607,https://www.airlines-manager.com/aircraft/show/103534663,0:45,5:59,112,"$157,224.00","$135,746.00"
MIA - BNA,53492178608,MIA-BOI-BNA 4,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/53492178608,https://www.airlines-manager.com/aircraft/show/103775657,1:15,6:29,320,"$330,750.00","$292,499.00"
MIA - BNA,53505148585,MIA-BOI-BNA 3,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/53505148585,https://www.airlines-manager.com/aircraft/show/104020880,4:45,9:59,320,"$330,750.00","$292,499.00"
MIA - BNA,53511675158,MIA-BOI-BNA 2,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/53511675158,https://www.airlines-manager.com/aircraft/show/104022609,10:00,15:14,320,"$330,750.00","$292,499.00"
MIA - BNA,53516803747,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/53516803747,https://www.airlines-manager.com/aircraft/show/103534663,12:00,17:14,112,"$157,224.00","$135,746.00"
MIA - BNA,53536307268,MIA-BOI-BNA 1,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/53536307268,https://www.airlines-manager.com/aircraft/show/104133006,21:15,2:29,320,"$330,750.00","$292,499.00"
MIA - BOI,53492178746,MIA-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/53492178746,https://www.airlines-manager.com/aircraft/show/106339154,1:45,12:59,198,"$523,215.00","$479,346.00"
MIA - BOI,53511675162,MIA-BOI-BNA 1,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/53511675162,https://www.airlines-manager.com/aircraft/show/104133006,10:00,21:14,320,"$695,244.00","$635,092.00"
MIA - BOI,53521848774,MIA-BOI-BNA 4,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/53521848774,https://www.airlines-manager.com/aircraft/show/103775657,14:00,1:14,320,"$695,244.00","$635,092.00"
MIA - BOI,53531796302,MIA-BOI-BNA 3,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/53531796302,https://www.airlines-manager.com/aircraft/show/104020880,17:30,4:44,320,"$695,244.00","$635,092.00"
MIA - BOI,53540025414,MIA-BOI-BNA 2,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/53540025414,https://www.airlines-manager.com/aircraft/show/104022609,22:45,9:59,320,"$695,244.00","$635,092.00"
MIA - BOS,53492178769,MIA-SJU-BOS 5,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/53492178769,https://www.airlines-manager.com/aircraft/show/91352059,2:00,8:59,310,"$443,989.00","$399,580.00"
MIA - BOS,53505148612,MIA-SJU-BOS 1,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/53505148612,https://www.airlines-manager.com/aircraft/show/91352063,5:00,11:59,310,"$443,989.00","$399,580.00"
MIA - BOS,53516803704,MIA-SJU-BOS 4,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/53516803704,https://www.airlines-manager.com/aircraft/show/91352060,11:15,18:14,310,"$443,989.00","$399,580.00"
MIA - BOS,53526170966,MIA-SJU-BOS 2,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/53526170966,https://www.airlines-manager.com/aircraft/show/91352062,16:30,23:29,310,"$443,989.00","$399,580.00"
MIA - BOS,53531796452,MIA-SJU-BOS 3,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/53531796452,https://www.airlines-manager.com/aircraft/show/91352061,19:00,1:59,310,"$443,989.00","$399,580.00"
MIA - BOS,53536307177,MIA-SJU-BOS 6 B,A319-100,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/53536307177,https://www.airlines-manager.com/aircraft/show/110582841,20:15,3:14,198,"$335,807.00","$300,226.00"
MIA - BTV,53492178846,MIA-DSM-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/53492178846,https://www.airlines-manager.com/aircraft/show/111064081,3:00,10:14,320,"$459,413.00","$416,541.00"
MIA - BTV,53511675087,MIA-DSM-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/53511675087,https://www.airlines-manager.com/aircraft/show/113101228,8:45,15:59,320,"$459,413.00","$416,541.00"
MIA - BTV,53521848640,MIA-DSM-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/53521848640,https://www.airlines-manager.com/aircraft/show/113101233,13:00,20:14,320,"$459,413.00","$416,541.00"
MIA - BTV,53531796529,MIA-DSM-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/53531796529,https://www.airlines-manager.com/aircraft/show/113101230,19:45,2:59,320,"$459,413.00","$416,541.00"
MIA - BTV,53540025437,MIA-DSM-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/53540025437,https://www.airlines-manager.com/aircraft/show/100049776,23:00,6:29,109,"$215,686.00","$190,490.00"
MIA - BUF,53492178860,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/53492178860,https://www.airlines-manager.com/aircraft/show/107763561,3:00,9:44,320,"$424,121.00","$382,306.00"
MIA - BUF,53492178861,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/53492178861,https://www.airlines-manager.com/aircraft/show/107763566,3:15,9:59,320,"$424,121.00","$382,306.00"
MIA - BUF,53516803684,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/53516803684,https://www.airlines-manager.com/aircraft/show/107763562,11:00,17:44,320,"$424,121.00","$382,306.00"
MIA - BUF,53531796304,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/53531796304,https://www.airlines-manager.com/aircraft/show/107763565,17:30,0:14,320,"$424,121.00","$382,306.00"
MIA - BUF,53536307264,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/53536307264,https://www.airlines-manager.com/aircraft/show/107467213,21:15,3:59,112,"$199,651.00","$175,283.00"
MIA - BUR,53492178837,MIA-BUR-PVD 4,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/53492178837,https://www.airlines-manager.com/aircraft/show/108834806,2:45,13:59,310,"$701,092.00","$648,187.00"
MIA - BUR,53516803678,MIA-BUR-PVD 1,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/53516803678,https://www.airlines-manager.com/aircraft/show/108834803,11:00,22:14,310,"$701,092.00","$648,187.00"
MIA - BUR,53521848754,MIA-BUR-PVD 3,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/53521848754,https://www.airlines-manager.com/aircraft/show/108834805,14:00,1:14,310,"$701,092.00","$648,187.00"
MIA - BUR,53531796621,MIA-BUR-PVD 5 B,A319-100,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/53531796621,https://www.airlines-manager.com/aircraft/show/108834807,20:00,7:14,198,"$525,980.00","$483,555.00"
MIA - BUR,53536307209,MIA-BUR-PVD 2,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/53536307209,https://www.airlines-manager.com/aircraft/show/108834804,20:45,7:59,310,"$701,092.00","$648,187.00"
MIA - BWI,53492178920,MIA-BWI-YYZ 4,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/53492178920,https://www.airlines-manager.com/aircraft/show/92153442,4:00,9:44,310,"$364,242.00","$325,933.00"
MIA - BWI,53505148691,MIA-BWI-YYZ 5,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/53505148691,https://www.airlines-manager.com/aircraft/show/92153439,6:00,11:44,310,"$364,242.00","$325,933.00"
MIA - BWI,53511675189,MIA-BWI-YYZ 1,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/53511675189,https://www.airlines-manager.com/aircraft/show/92153443,10:00,15:44,310,"$364,242.00","$325,933.00"
MIA - BWI,53521848627,MIA-BWI-YYZ 2,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/53521848627,https://www.airlines-manager.com/aircraft/show/92153440,13:00,18:44,310,"$364,242.00","$325,933.00"
MIA - BWI,53536307255,MIA-BWI-YYZ 3,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/53536307255,https://www.airlines-manager.com/aircraft/show/92153441,21:00,2:44,310,"$364,242.00","$325,933.00"
MIA - BWI,53540025432,MIA-BWI-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/53540025432,https://www.airlines-manager.com/aircraft/show/92137503,23:00,4:44,85,"$121,050.00","$100,291.00"
MIA - BZN,53492178488,MIA-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/53492178488,https://www.airlines-manager.com/aircraft/show/116789627,0:15,10:44,320,"$653,842.00","$597,646.00"
MIA - BZN,53516803682,MIA-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/53516803682,https://www.airlines-manager.com/aircraft/show/116789626,11:00,21:29,320,"$653,842.00","$597,646.00"
MIA - BZN,53521848625,MIA-BIL-BZN 5,ERJ-175,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/53521848625,https://www.airlines-manager.com/aircraft/show/116042637,13:00,23:44,112,"$308,087.00","$273,608.00"
MIA - BZN,53536307152,MIA-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/53536307152,https://www.airlines-manager.com/aircraft/show/116789629,20:15,6:44,320,"$653,842.00","$597,646.00"
MIA - BZN,53536307153,MIA-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/53536307153,https://www.airlines-manager.com/aircraft/show/116789628,22:15,8:44,320,"$653,842.00","$597,646.00"
MIA - CAK,53492178776,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/53492178776,https://www.airlines-manager.com/aircraft/show/115493370,2:00,8:14,310,"$383,530.00","$349,760.00"
MIA - CAK,53511675037,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/53511675037,https://www.airlines-manager.com/aircraft/show/115493371,8:15,14:29,310,"$383,530.00","$349,760.00"
MIA - CAK,53516803697,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/53516803697,https://www.airlines-manager.com/aircraft/show/115493372,11:00,17:14,310,"$383,530.00","$349,760.00"
MIA - CAK,53531796345,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/53531796345,https://www.airlines-manager.com/aircraft/show/114912307,18:00,0:14,112,"$181,169.00","$159,079.00"
MIA - CAK,53536307247,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/53536307247,https://www.airlines-manager.com/aircraft/show/115493373,21:00,3:14,273,"$356,402.00","$323,693.00"
MIA - CHS,53492178870,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/53492178870,https://www.airlines-manager.com/aircraft/show/94886626,3:15,7:14,310,"$225,037.00","$199,045.00"
MIA - CHS,53492178871,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/53492178871,https://www.airlines-manager.com/aircraft/show/107577220,4:15,8:14,0,"$60,700.00","$43,128.00"
MIA - CHS,53511675096,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/53511675096,https://www.airlines-manager.com/aircraft/show/96692674,9:00,12:59,310,"$225,037.00","$199,045.00"
MIA - CHS,53516803663,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/53516803663,https://www.airlines-manager.com/aircraft/show/105601657,11:00,14:59,112,"$104,611.00","$88,159.00"
MIA - CHS,53521848719,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/53521848719,https://www.airlines-manager.com/aircraft/show/94886625,14:00,17:59,310,"$225,037.00","$199,045.00"
MIA - CHS,53536307208,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/53536307208,https://www.airlines-manager.com/aircraft/show/94886629,20:45,0:44,290,"$202,846.00","$178,199.00"
MIA - CID,53492178663,MIA-CID-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/53492178663,https://www.airlines-manager.com/aircraft/show/116789652,1:15,8:29,310,"$453,870.00","$416,411.00"
MIA - CID,53511675154,MIA-CID-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/53511675154,https://www.airlines-manager.com/aircraft/show/116789653,10:00,17:14,310,"$453,870.00","$416,411.00"
MIA - CID,53526170855,MIA-CID-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/53526170855,https://www.airlines-manager.com/aircraft/show/116789650,15:30,22:44,310,"$453,870.00","$416,411.00"
MIA - CID,53536307194,MIA-CID-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/53536307194,https://www.airlines-manager.com/aircraft/show/116789651,20:30,3:44,310,"$453,870.00","$416,411.00"
MIA - CLE,53492178570,MIA-COS-CVG 5,ERJ-175,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/53492178570,https://www.airlines-manager.com/aircraft/show/103534665,0:30,6:44,112,"$188,033.00","$164,249.00"
MIA - CLE,53492178571,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/53492178571,https://www.airlines-manager.com/aircraft/show/103684630,4:15,10:29,320,"$398,480.00","$357,223.00"
MIA - CLE,53505148789,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/53505148789,https://www.airlines-manager.com/aircraft/show/103365574,7:45,13:59,320,"$398,480.00","$357,223.00"
MIA - CLE,53521848573,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/53521848573,https://www.airlines-manager.com/aircraft/show/103684632,13:00,19:14,320,"$398,480.00","$357,223.00"
MIA - CLE,53536307217,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/53536307217,https://www.airlines-manager.com/aircraft/show/103684631,20:45,2:59,320,"$398,480.00","$357,223.00"
MIA - CLT,53492178925,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/53492178925,https://www.airlines-manager.com/aircraft/show/82543123,4:15,8:59,112,"$142,241.00","$118,334.00"
MIA - CLT,53511675192,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/53511675192,https://www.airlines-manager.com/aircraft/show/91600939,10:00,14:44,310,"$298,699.00","$260,750.00"
MIA - CLT,53526170941,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/53526170941,https://www.airlines-manager.com/aircraft/show/91600936,16:00,20:44,310,"$298,699.00","$260,750.00"
MIA - CLT,53531796306,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/53531796306,https://www.airlines-manager.com/aircraft/show/91600937,17:45,22:29,310,"$298,699.00","$260,750.00"
MIA - CLT,53540025384,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/53540025384,https://www.airlines-manager.com/aircraft/show/91600935,22:30,3:14,310,"$298,699.00","$260,750.00"
MIA - CLT,53540025385,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/53540025385,https://www.airlines-manager.com/aircraft/show/91600938,23:30,4:14,310,"$298,699.00","$260,750.00"
MIA - CMH,53492178729,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/53492178729,https://www.airlines-manager.com/aircraft/show/88494374,1:45,7:44,320,"$372,456.00","$332,435.00"
MIA - CMH,53505148766,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/53505148766,https://www.airlines-manager.com/aircraft/show/88494378,7:15,13:14,320,"$372,456.00","$332,435.00"
MIA - CMH,53521848746,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/53521848746,https://www.airlines-manager.com/aircraft/show/91806233,14:00,19:59,320,"$372,456.00","$332,435.00"
MIA - CMH,53531796335,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/53531796335,https://www.airlines-manager.com/aircraft/show/110582842,18:00,23:59,198,"$282,748.00","$254,479.00"
MIA - CMH,53536307230,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/53536307230,https://www.airlines-manager.com/aircraft/show/88239556,21:00,2:59,320,"$372,456.00","$332,435.00"
MIA - CMN,53505148623,MIA 84B-1 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/53505148623,https://www.airlines-manager.com/aircraft/show/106676225,5:00,22:44,962,"$2,958,140.00","$2,699,471.00"
MIA - CMN,53536307192,MIA 84B-5 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/53536307192,https://www.airlines-manager.com/aircraft/show/106676229,20:30,14:14,962,"$2,958,140.00","$2,699,471.00"
MIA - COS,53505148730,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/53505148730,https://www.airlines-manager.com/aircraft/show/103684631,6:30,14:59,320,"$543,615.00","$492,225.00"
MIA - COS,53511675216,MIA-COS-CVG 5,ERJ-175,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/53511675216,https://www.airlines-manager.com/aircraft/show/103534665,10:00,18:44,112,"$256,350.00","$225,769.00"
MIA - COS,53521848727,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/53521848727,https://www.airlines-manager.com/aircraft/show/103684630,14:00,22:29,320,"$543,615.00","$492,225.00"
MIA - COS,53531796303,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/53531796303,https://www.airlines-manager.com/aircraft/show/103365574,17:30,1:59,320,"$543,615.00","$492,225.00"
MIA - COS,53540025407,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/53540025407,https://www.airlines-manager.com/aircraft/show/103684632,22:45,7:14,320,"$543,615.00","$492,225.00"
MIA - CPT,53505148609,MIA 84A-3 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/53505148609,https://www.airlines-manager.com/aircraft/show/93686967,5:00,10:29,1124,"$5,606,472.00","$5,211,864.00"
MIA - CPT,53531796332,MIA 84A-6 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/53531796332,https://www.airlines-manager.com/aircraft/show/93731916,18:00,23:29,1124,"$5,606,472.00","$5,211,864.00"
MIA - CUN,53505148645,MIA-PSP-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/53505148645,https://www.airlines-manager.com/aircraft/show/116789631,5:30,9:44,320,"$250,489.00","$215,136.00"
MIA - CUN,53511675132,MIA-PSP-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/53511675132,https://www.airlines-manager.com/aircraft/show/116789634,9:30,13:44,320,"$250,489.00","$215,136.00"
MIA - CUN,53511675133,MIA-PSP-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/53511675133,https://www.airlines-manager.com/aircraft/show/116789632,10:00,14:14,320,"$250,489.00","$215,136.00"
MIA - CUN,53531796423,MIA-PSP-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/53531796423,https://www.airlines-manager.com/aircraft/show/116789633,18:45,22:59,320,"$250,489.00","$215,136.00"
MIA - CUN,53536307301,MIA-PSP-BFF 5,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/53536307301,https://www.airlines-manager.com/aircraft/show/116789630,21:45,1:59,314,"$246,228.00","$210,982.00"
MIA - CUR,53492178931,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/53492178931,https://www.airlines-manager.com/aircraft/show/107121797,4:15,10:59,320,"$413,130.00","$371,117.00"
MIA - CUR,53516803695,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/53516803695,https://www.airlines-manager.com/aircraft/show/107121796,11:00,17:44,320,"$413,130.00","$371,117.00"
MIA - CUR,53521848825,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/53521848825,https://www.airlines-manager.com/aircraft/show/107121799,15:00,21:44,320,"$413,130.00","$371,117.00"
MIA - CUR,53536307171,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/53536307171,https://www.airlines-manager.com/aircraft/show/107121795,20:15,2:59,320,"$413,130.00","$371,117.00"
MIA - CUR,53536307172,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/53536307172,https://www.airlines-manager.com/aircraft/show/107121798,21:45,4:29,295,"$383,660.00","$342,652.00"
MIA - CVG,53492178779,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/53492178779,https://www.airlines-manager.com/aircraft/show/103365574,2:00,7:44,320,"$367,096.00","$325,215.00"
MIA - CVG,53505148776,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/53505148776,https://www.airlines-manager.com/aircraft/show/103684632,7:15,12:59,320,"$367,096.00","$325,215.00"
MIA - CVG,53511675202,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/53511675202,https://www.airlines-manager.com/aircraft/show/107527976,10:00,15:44,0,"$96,826.00","$70,947.00"
MIA - CVG,53521848815,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/53521848815,https://www.airlines-manager.com/aircraft/show/103684631,15:00,20:44,320,"$367,096.00","$325,215.00"
MIA - CVG,53531796422,MIA-COS-CVG 5,ERJ-175,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/53531796422,https://www.airlines-manager.com/aircraft/show/103534665,18:45,0:29,112,"$173,197.00","$149,488.00"
MIA - CVG,53540025397,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/53540025397,https://www.airlines-manager.com/aircraft/show/103684630,22:30,4:14,320,"$367,096.00","$325,215.00"
MIA - DEN,53492178704,MIA-LAX-DEN 3,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/53492178704,https://www.airlines-manager.com/aircraft/show/91126651,1:30,9:59,400,"$727,404.00","$641,772.00"
MIA - DEN,53492178705,MIA-LAX-DEN 4,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/53492178705,https://www.airlines-manager.com/aircraft/show/91126652,3:30,11:59,400,"$727,404.00","$641,772.00"
MIA - DEN,53516803608,MIA-LAX-DEN 1,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/53516803608,https://www.airlines-manager.com/aircraft/show/91126649,11:00,19:29,400,"$727,404.00","$641,772.00"
MIA - DEN,53531796293,MIA-LAX-DEN 2,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/53531796293,https://www.airlines-manager.com/aircraft/show/91126650,17:30,1:59,400,"$727,404.00","$641,772.00"
MIA - DEN,53536307336,MIA-LAX-DEN 5 E,A319-100,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/53536307336,https://www.airlines-manager.com/aircraft/show/115181776,22:15,6:59,216,"$426,690.00","$370,298.00"
MIA - DFW,53492178885,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/53492178885,https://www.airlines-manager.com/aircraft/show/91600936,3:30,9:59,310,"$408,515.00","$352,594.00"
MIA - DFW,53511675213,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/53511675213,https://www.airlines-manager.com/aircraft/show/91600935,10:00,16:29,310,"$408,515.00","$352,594.00"
MIA - DFW,53516803621,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/53516803621,https://www.airlines-manager.com/aircraft/show/91600938,11:00,17:29,310,"$408,515.00","$352,594.00"
MIA - DFW,53526170873,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/53526170873,https://www.airlines-manager.com/aircraft/show/82543123,15:45,22:14,112,"$192,378.00","$156,871.00"
MIA - DFW,53536307292,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/53536307292,https://www.airlines-manager.com/aircraft/show/91600939,21:30,3:59,310,"$408,515.00","$352,594.00"
MIA - DFW,53540025392,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/53540025392,https://www.airlines-manager.com/aircraft/show/91600937,22:30,4:59,310,"$408,515.00","$352,594.00"
MIA - DSM,53492178847,MIA-DSM-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/53492178847,https://www.airlines-manager.com/aircraft/show/113101230,3:00,10:14,320,"$455,904.00","$412,875.00"
MIA - DSM,53511675086,MIA-DSM-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/53511675086,https://www.airlines-manager.com/aircraft/show/100049776,8:45,15:59,112,"$216,032.00","$190,648.00"
MIA - DSM,53521848642,MIA-DSM-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/53521848642,https://www.airlines-manager.com/aircraft/show/111064081,13:00,20:14,320,"$455,904.00","$412,875.00"
MIA - DSM,53526170897,MIA-DSM-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/53526170897,https://www.airlines-manager.com/aircraft/show/113101228,16:00,23:14,320,"$455,904.00","$412,875.00"
MIA - DSM,53536307149,MIA-DSM-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/53536307149,https://www.airlines-manager.com/aircraft/show/113101233,20:15,3:29,320,"$455,904.00","$412,875.00"
MIA - DSS,53492178461,MIA 84B-4 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/53492178461,https://www.airlines-manager.com/aircraft/show/106676228,0:00,16:59,962,"$2,849,310.00","$2,603,298.00"
MIA - DSS,53516803756,MIA 84B-7 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/53516803756,https://www.airlines-manager.com/aircraft/show/106676231,12:00,4:59,962,"$2,849,310.00","$2,603,298.00"
MIA - DTW,53492178723,MIA-PDX-DTW 3,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/53492178723,https://www.airlines-manager.com/aircraft/show/89943713,1:30,7:59,320,"$411,222.00","$358,900.00"
MIA - DTW,53492178724,MIA-PDX-DTW 4,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/53492178724,https://www.airlines-manager.com/aircraft/show/89943712,2:30,8:59,320,"$411,222.00","$358,900.00"
MIA - DTW,53511675169,MIA-PDX-DTW 2,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/53511675169,https://www.airlines-manager.com/aircraft/show/89943714,10:00,16:29,320,"$411,222.00","$358,900.00"
MIA - DTW,53521848730,MIA-PDX-DTW 5,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/53521848730,https://www.airlines-manager.com/aircraft/show/89943711,14:00,20:29,320,"$411,222.00","$358,900.00"
MIA - DTW,53536307297,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/53536307297,https://www.airlines-manager.com/aircraft/show/107577220,21:45,4:14,0,"$108,921.00","$76,799.00"
MIA - DTW,53540025396,MIA-PDX-DTW 1,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/53540025396,https://www.airlines-manager.com/aircraft/show/89943715,22:30,4:59,320,"$411,222.00","$358,900.00"
MIA - ELP,53511675038,MIA-ELP-MCI 5 B,A319-100,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/53511675038,https://www.airlines-manager.com/aircraft/show/105093924,8:15,16:44,198,"$401,184.00","$365,173.00"
MIA - ELP,53511675039,MIA-ELP-MCI 1,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/53511675039,https://www.airlines-manager.com/aircraft/show/91806234,10:00,18:29,320,"$531,824.00","$481,715.00"
MIA - ELP,53526170951,MIA-ELP-MCI 3,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/53526170951,https://www.airlines-manager.com/aircraft/show/91806232,16:15,0:44,320,"$531,824.00","$481,715.00"
MIA - ELP,53526170952,MIA-ELP-MCI 4,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/53526170952,https://www.airlines-manager.com/aircraft/show/91806231,17:00,1:29,320,"$531,824.00","$481,715.00"
MIA - ELP,53540025458,MIA-ELP-MCI 2,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/53540025458,https://www.airlines-manager.com/aircraft/show/91806235,23:15,7:44,320,"$531,824.00","$481,715.00"
MIA - FAR,53492178617,MIA-FAR-TUL 3,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/53492178617,https://www.airlines-manager.com/aircraft/show/110883161,0:45,9:29,320,"$546,219.00","$497,397.00"
MIA - FAR,53505148771,MIA-FAR-TUL 4,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/53505148771,https://www.airlines-manager.com/aircraft/show/110883162,7:15,15:59,320,"$546,219.00","$497,397.00"
MIA - FAR,53516803662,MIA-FAR-TUL 1,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/53516803662,https://www.airlines-manager.com/aircraft/show/110883159,11:00,19:44,320,"$546,219.00","$497,397.00"
MIA - FAR,53526170902,MIA-FAR-TUL 2,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/53526170902,https://www.airlines-manager.com/aircraft/show/110883160,16:00,0:44,320,"$546,219.00","$497,397.00"
MIA - FAR,53531796382,MIA-FAR-TUL 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/53531796382,https://www.airlines-manager.com/aircraft/show/87169421,18:15,2:59,112,"$257,649.00","$228,235.00"
MIA - FAT,53511675061,MIA-FAT-MSO 4,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/53511675061,https://www.airlines-manager.com/aircraft/show/113101232,8:30,19:59,320,"$722,280.00","$662,066.00"
MIA - FAT,53516803641,MIA-FAT-MSO 1,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/53516803641,https://www.airlines-manager.com/aircraft/show/113101229,11:00,22:29,320,"$722,280.00","$662,066.00"
MIA - FAT,53531796446,MIA-FAT-MSO 2,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/53531796446,https://www.airlines-manager.com/aircraft/show/113101231,19:00,6:29,320,"$722,280.00","$662,066.00"
MIA - FAT,53536307335,MIA-FAT-MSO 3,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/53536307335,https://www.airlines-manager.com/aircraft/show/113101234,22:15,9:44,320,"$722,280.00","$662,066.00"
MIA - FPO,53492178492,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/53492178492,https://www.airlines-manager.com/aircraft/show/107121796,0:15,2:44,320,"$83,963.00","$59,322.00"
MIA - FPO,53492178493,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/53492178493,https://www.airlines-manager.com/aircraft/show/107121799,4:15,6:44,320,"$83,963.00","$59,322.00"
MIA - FPO,53511675136,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/53511675136,https://www.airlines-manager.com/aircraft/show/107121795,9:30,11:59,320,"$83,963.00","$59,322.00"
MIA - FPO,53516803693,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/53516803693,https://www.airlines-manager.com/aircraft/show/107121798,11:00,13:29,320,"$83,963.00","$59,322.00"
MIA - FPO,53531796299,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/53531796299,https://www.airlines-manager.com/aircraft/show/107121797,17:30,19:59,199,"$60,079.00","$35,850.00"
MIA - FSD,53492178625,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/53492178625,https://www.airlines-manager.com/aircraft/show/110883110,1:00,8:59,310,"$501,538.00","$460,205.00"
MIA - FSD,53492178626,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/53492178626,https://www.airlines-manager.com/aircraft/show/110883113,2:45,10:44,310,"$501,538.00","$460,205.00"
MIA - FSD,53521848706,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/53521848706,https://www.airlines-manager.com/aircraft/show/110883112,14:00,21:59,310,"$501,538.00","$460,205.00"
MIA - FSD,53526170946,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/53526170946,https://www.airlines-manager.com/aircraft/show/110883111,16:15,0:14,310,"$501,538.00","$460,205.00"
MIA - FSD,53536307324,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/53536307324,https://www.airlines-manager.com/aircraft/show/104353572,22:00,5:59,93,"$218,497.00","$192,272.00"
MIA - GRR,53492178435,MIA-RAP-GRR 5,ERJ-175,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/53492178435,https://www.airlines-manager.com/aircraft/show/116042630,0:00,6:44,112,"$199,811.00","$175,319.00"
MIA - GRR,53492178436,MIA-RAP-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/53492178436,https://www.airlines-manager.com/aircraft/show/116789623,2:15,8:59,320,"$423,112.00","$381,221.00"
MIA - GRR,53511675153,MIA-RAP-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/53511675153,https://www.airlines-manager.com/aircraft/show/116789624,10:00,16:44,320,"$423,112.00","$381,221.00"
MIA - GRR,53516803727,MIA-RAP-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/53516803727,https://www.airlines-manager.com/aircraft/show/116789622,12:00,18:44,320,"$423,112.00","$381,221.00"
MIA - GRR,53531796459,MIA-RAP-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/53531796459,https://www.airlines-manager.com/aircraft/show/116789625,19:00,1:44,320,"$423,112.00","$381,221.00"
MIA - HAV,53505148620,MIA-PDX-DTW 1,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/53505148620,https://www.airlines-manager.com/aircraft/show/89943715,5:00,7:59,320,"$131,414.00","$101,607.00"
MIA - HAV,53511675105,MIA-PDX-DTW 4,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/53511675105,https://www.airlines-manager.com/aircraft/show/89943712,9:00,11:59,320,"$131,414.00","$101,607.00"
MIA - HAV,53511675106,MIA-PDX-DTW 3,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/53511675106,https://www.airlines-manager.com/aircraft/show/89943713,10:00,12:59,320,"$131,414.00","$101,607.00"
MIA - HAV,53526170958,MIA-PDX-DTW 2,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/53526170958,https://www.airlines-manager.com/aircraft/show/89943714,16:30,19:29,320,"$131,414.00","$101,607.00"
MIA - HAV,53536307187,MIA-PDX-DTW 5,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/53536307187,https://www.airlines-manager.com/aircraft/show/89943711,20:30,23:29,288,"$119,825.00","$90,271.00"
MIA - IAD,53492178923,MIA-IAD-TUS 2,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/53492178923,https://www.airlines-manager.com/aircraft/show/97556720,4:15,9:59,310,"$360,640.00","$321,339.00"
MIA - IAD,53505148772,MIA-IAD-TUS 5,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/53505148772,https://www.airlines-manager.com/aircraft/show/97556716,7:15,12:59,310,"$360,640.00","$321,339.00"
MIA - IAD,53511675185,MIA-IAD-TUS 1,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/53511675185,https://www.airlines-manager.com/aircraft/show/97556721,10:00,15:44,310,"$360,640.00","$321,339.00"
MIA - IAD,53521848645,MIA-IAD-TUS 4,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/53521848645,https://www.airlines-manager.com/aircraft/show/97556718,13:00,18:44,310,"$360,640.00","$321,339.00"
MIA - IAD,53531796430,MIA-IAD-TUS 3,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/53531796430,https://www.airlines-manager.com/aircraft/show/97556719,18:45,0:29,310,"$360,640.00","$321,339.00"
MIA - IAD,53536307281,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/53536307281,https://www.airlines-manager.com/aircraft/show/107527976,21:30,3:14,0,"$96,372.00","$69,073.00"
MIA - ICT,53492178816,MIA-FAR-TUL 1,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/53492178816,https://www.airlines-manager.com/aircraft/show/110883159,2:30,9:29,320,"$446,928.00","$403,611.00"
MIA - ICT,53511675110,MIA-FAR-TUL 2,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/53511675110,https://www.airlines-manager.com/aircraft/show/110883160,9:00,15:59,320,"$446,928.00","$403,611.00"
MIA - ICT,53516803658,MIA-FAR-TUL 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/53516803658,https://www.airlines-manager.com/aircraft/show/87169421,11:00,18:14,112,"$212,522.00","$187,091.00"
MIA - ICT,53531796314,MIA-FAR-TUL 3,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/53531796314,https://www.airlines-manager.com/aircraft/show/110883161,17:45,0:44,320,"$446,928.00","$403,611.00"
MIA - ICT,53540025416,MIA-FAR-TUL 4,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/53540025416,https://www.airlines-manager.com/aircraft/show/110883162,22:45,5:44,320,"$446,928.00","$403,611.00"
MIA - IND,53492178812,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/53492178812,https://www.airlines-manager.com/aircraft/show/82323689,2:30,8:29,112,"$180,919.00","$157,231.00"
MIA - IND,53492178813,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/53492178813,https://www.airlines-manager.com/aircraft/show/99920623,3:15,9:14,320,"$382,687.00","$341,268.00"
MIA - IND,53511675217,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/53511675217,https://www.airlines-manager.com/aircraft/show/99920624,10:00,15:59,320,"$382,687.00","$341,268.00"
MIA - IND,53526170930,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/53526170930,https://www.airlines-manager.com/aircraft/show/99920625,16:00,21:59,320,"$382,687.00","$341,268.00"
MIA - IND,53540025398,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/53540025398,https://www.airlines-manager.com/aircraft/show/99920626,22:30,4:29,320,"$382,687.00","$341,268.00"
MIA - JAN,53505148646,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/53505148646,https://www.airlines-manager.com/aircraft/show/114912307,5:30,10:29,112,"$149,512.00","$130,617.00"
MIA - JAN,53511675065,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/53511675065,https://www.airlines-manager.com/aircraft/show/115493373,8:30,13:29,310,"$314,276.00","$284,944.00"
MIA - JAN,53521848768,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/53521848768,https://www.airlines-manager.com/aircraft/show/115493370,14:00,18:59,310,"$314,276.00","$284,944.00"
MIA - JAN,53536307179,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/53536307179,https://www.airlines-manager.com/aircraft/show/115493371,20:15,1:14,310,"$314,276.00","$284,944.00"
MIA - JAN,53540025389,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/53540025389,https://www.airlines-manager.com/aircraft/show/115493372,22:30,3:29,252,"$279,758.00","$251,606.00"
MIA - JAX,53492178855,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/53492178855,https://www.airlines-manager.com/aircraft/show/103684631,3:00,6:29,320,"$173,694.00","$144,655.00"
MIA - JAX,53511675239,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/53511675239,https://www.airlines-manager.com/aircraft/show/103684630,10:30,13:59,320,"$173,694.00","$144,655.00"
MIA - JAX,53521848734,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/53521848734,https://www.airlines-manager.com/aircraft/show/103365574,14:00,17:29,320,"$173,694.00","$144,655.00"
MIA - JAX,53531796501,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/53531796501,https://www.airlines-manager.com/aircraft/show/103684632,19:15,22:44,320,"$173,694.00","$144,655.00"
MIA - JAX,53536307348,MIA-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/53536307348,https://www.airlines-manager.com/aircraft/show/106339154,22:15,1:44,198,"$131,883.00","$111,987.00"
MIA - JFK,53505148679,MIA-JFK-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/53505148679,https://www.airlines-manager.com/aircraft/show/105308264,5:45,11:59,338,"$428,918.00","$376,442.00"
MIA - JFK,53505148680,MIA-JFK-PHX 6,ERJ-175,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/53505148680,https://www.airlines-manager.com/aircraft/show/82683137,6:45,12:59,112,"$187,062.00","$152,852.00"
MIA - JFK,53511675206,MIA-JFK-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/53511675206,https://www.airlines-manager.com/aircraft/show/105308267,10:00,16:14,338,"$428,918.00","$376,442.00"
MIA - JFK,53516803759,MIA-JFK-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/53516803759,https://www.airlines-manager.com/aircraft/show/105308265,12:00,18:14,338,"$428,918.00","$376,442.00"
MIA - JFK,53531796366,MIA-JFK-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/53531796366,https://www.airlines-manager.com/aircraft/show/105308266,18:00,0:14,338,"$428,918.00","$376,442.00"
MIA - JFK,53536307205,MIA-JFK-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/53536307205,https://www.airlines-manager.com/aircraft/show/105308268,20:45,2:59,338,"$428,918.00","$376,442.00"
MIA - JNB,53492178422,MIA 84A-1 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/53492178422,https://www.airlines-manager.com/aircraft/show/93686969,0:00,6:44,1124,"$6,002,780.00","$5,569,148.00"
MIA - JNB,53521848620,MIA 84A-4 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/53521848620,https://www.airlines-manager.com/aircraft/show/93686966,13:00,19:44,1124,"$6,002,780.00","$5,569,148.00"
MIA - LAS,53492178725,MIA-LAS-SEA 5,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/53492178725,https://www.airlines-manager.com/aircraft/show/105093929,1:30,11:59,338,"$716,711.00","$649,535.00"
MIA - LAS,53511675149,MIA-LAS-SEA 1,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/53511675149,https://www.airlines-manager.com/aircraft/show/105093925,10:00,20:29,338,"$716,711.00","$649,535.00"
MIA - LAS,53516803737,MIA-LAS-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/53516803737,https://www.airlines-manager.com/aircraft/show/113251304,12:00,22:29,198,"$496,976.00","$440,972.00"
MIA - LAS,53521848584,MIA-LAS-SEA 2,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/53521848584,https://www.airlines-manager.com/aircraft/show/105093926,13:00,23:29,338,"$716,711.00","$649,535.00"
MIA - LAS,53521848585,MIA-LAS-SEA 3,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/53521848585,https://www.airlines-manager.com/aircraft/show/105093927,15:00,1:29,338,"$716,711.00","$649,535.00"
MIA - LAS,53540025379,MIA-LAS-SEA 4,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/53540025379,https://www.airlines-manager.com/aircraft/show/105093928,22:30,8:59,338,"$716,711.00","$649,535.00"
MIA - LAX,53492178468,MIA-LAX-DEN 1,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/53492178468,https://www.airlines-manager.com/aircraft/show/91126649,0:00,10:59,400,"$917,458.00","$823,986.00"
MIA - LAX,53492178469,MIA-LAX-DEN 2,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/53492178469,https://www.airlines-manager.com/aircraft/show/91126650,2:00,12:59,400,"$917,458.00","$823,986.00"
MIA - LAX,53511675174,MIA-LAX-DEN 3,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/53511675174,https://www.airlines-manager.com/aircraft/show/91126651,10:00,20:59,400,"$917,458.00","$823,986.00"
MIA - LAX,53516803668,MIA-LAX-DEN 5 E,A319-100,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/53516803668,https://www.airlines-manager.com/aircraft/show/115181776,11:00,22:14,216,"$537,212.00","$475,849.00"
MIA - LAX,53526170954,MIA-LAX-DEN 4,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/53526170954,https://www.airlines-manager.com/aircraft/show/91126652,16:30,3:29,400,"$917,458.00","$823,986.00"
MIA - LEX,53492178853,MIA-CID-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/53492178853,https://www.airlines-manager.com/aircraft/show/116789653,3:00,8:29,310,"$348,601.00","$317,916.00"
MIA - LEX,53511675179,MIA-CID-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/53511675179,https://www.airlines-manager.com/aircraft/show/116789650,10:00,15:29,310,"$348,601.00","$317,916.00"
MIA - LEX,53521848834,MIA-CID-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/53521848834,https://www.airlines-manager.com/aircraft/show/116789651,15:00,20:29,310,"$348,601.00","$317,916.00"
MIA - LEX,53531796535,MIA-CID-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/53531796535,https://www.airlines-manager.com/aircraft/show/116789652,19:45,1:14,299,"$341,355.00","$310,936.00"
MIA - LIT,53492178802,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/53492178802,https://www.airlines-manager.com/aircraft/show/96692674,2:15,7:59,310,"$360,566.00","$328,179.00"
MIA - LIT,53492178803,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/53492178803,https://www.airlines-manager.com/aircraft/show/105601657,4:15,9:59,112,"$171,082.00","$150,007.00"
MIA - LIT,53511675042,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/53511675042,https://www.airlines-manager.com/aircraft/show/94886625,8:15,13:59,310,"$360,566.00","$328,179.00"
MIA - LIT,53521848819,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/53521848819,https://www.airlines-manager.com/aircraft/show/94886629,15:00,20:44,310,"$360,566.00","$328,179.00"
MIA - LIT,53536307285,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/53536307285,https://www.airlines-manager.com/aircraft/show/94886626,21:30,3:14,303,"$355,770.00","$323,564.00"
MIA - LOS,53505148745,MIA 84A-2 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/53505148745,https://www.airlines-manager.com/aircraft/show/93686968,6:45,4:59,1124,"$4,253,118.00","$3,953,671.00"
MIA - LOS,53531796537,MIA 84A-5 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/53531796537,https://www.airlines-manager.com/aircraft/show/93704215,19:45,17:59,1115,"$4,194,315.00","$3,897,224.00"
MIA - MBJ,53492178610,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/53492178610,https://www.airlines-manager.com/aircraft/show/104034460,0:45,4:59,228,"$191,738.00","$170,412.00"
MIA - MBJ,53505148627,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/53505148627,https://www.airlines-manager.com/aircraft/show/104034461,5:00,9:14,228,"$191,738.00","$170,412.00"
MIA - MBJ,53511675101,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/53511675101,https://www.airlines-manager.com/aircraft/show/107577220,9:00,13:14,0,"$65,799.00","$47,711.00"
MIA - MBJ,53511675102,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/53511675102,https://www.airlines-manager.com/aircraft/show/104034459,10:00,14:14,228,"$191,738.00","$170,412.00"
MIA - MBJ,53516803785,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/53516803785,https://www.airlines-manager.com/aircraft/show/104034457,12:45,16:59,228,"$191,738.00","$170,412.00"
MIA - MBJ,53526170993,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/53526170993,https://www.airlines-manager.com/aircraft/show/104034458,17:00,21:14,228,"$191,738.00","$170,412.00"
MIA - MBJ,53540025434,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/53540025434,https://www.airlines-manager.com/aircraft/show/99326789,23:00,3:14,228,"$191,738.00","$170,412.00"
MIA - MCI,53492178595,MIA-ELP-MCI 3,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/53492178595,https://www.airlines-manager.com/aircraft/show/91806232,0:45,7:44,320,"$446,817.00","$401,234.00"
MIA - MCI,53492178596,MIA-ELP-MCI 4,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/53492178596,https://www.airlines-manager.com/aircraft/show/91806231,1:30,8:29,320,"$446,817.00","$401,234.00"
MIA - MCI,53511675147,MIA-ELP-MCI 2,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/53511675147,https://www.airlines-manager.com/aircraft/show/91806235,10:00,16:59,320,"$446,817.00","$401,234.00"
MIA - MCI,53531796394,MIA-ELP-MCI 1,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/53531796394,https://www.airlines-manager.com/aircraft/show/91806234,18:30,1:29,320,"$446,817.00","$401,234.00"
MIA - MCI,53531796395,MIA-ELP-MCI 5 B,A319-100,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/53531796395,https://www.airlines-manager.com/aircraft/show/105093924,19:00,1:59,198,"$337,670.00","$305,278.00"
MIA - MCO,53492178540,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/53492178540,https://www.airlines-manager.com/aircraft/show/107763565,0:15,2:59,320,"$122,006.00","$84,784.00"
MIA - MCO,53492178541,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/53492178541,https://www.airlines-manager.com/aircraft/show/107467213,4:00,6:44,112,"$54,851.00","$35,679.00"
MIA - MCO,53505148719,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/53505148719,https://www.airlines-manager.com/aircraft/show/103534663,6:00,8:44,112,"$54,851.00","$35,679.00"
MIA - MCO,53511675123,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/53511675123,https://www.airlines-manager.com/aircraft/show/103534663,9:15,11:59,112,"$54,851.00","$35,679.00"
MIA - MCO,53511675124,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/53511675124,https://www.airlines-manager.com/aircraft/show/107763566,10:00,12:44,320,"$122,006.00","$84,784.00"
MIA - MCO,53516803687,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/53516803687,https://www.airlines-manager.com/aircraft/show/107763561,11:00,13:44,320,"$122,006.00","$84,784.00"
MIA - MCO,53531796310,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/53531796310,https://www.airlines-manager.com/aircraft/show/107763562,17:45,20:29,320,"$122,006.00","$84,784.00"
MIA - MEM,53492178443,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/53492178443,https://www.airlines-manager.com/aircraft/show/110582842,0:00,5:29,198,"$262,187.00","$234,418.00"
MIA - MEM,53492178444,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/53492178444,https://www.airlines-manager.com/aircraft/show/88239556,3:00,8:29,320,"$345,253.00","$305,664.00"
MIA - MEM,53505148792,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/53505148792,https://www.airlines-manager.com/aircraft/show/88494374,7:45,13:14,320,"$345,253.00","$305,664.00"
MIA - MEM,53521848761,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/53521848761,https://www.airlines-manager.com/aircraft/show/88494378,14:00,19:29,320,"$345,253.00","$305,664.00"
MIA - MEM,53531796603,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/53531796603,https://www.airlines-manager.com/aircraft/show/91806233,20:00,1:29,320,"$345,253.00","$305,664.00"
MIA - MHT,53492178675,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/53492178675,https://www.airlines-manager.com/aircraft/show/115493371,1:15,8:14,310,"$452,295.00","$414,040.00"
MIA - MHT,53492178676,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/53492178676,https://www.airlines-manager.com/aircraft/show/115493372,3:30,10:29,310,"$452,295.00","$414,040.00"
MIA - MHT,53516803696,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/53516803696,https://www.airlines-manager.com/aircraft/show/114912307,11:00,17:59,112,"$213,633.00","$188,436.00"
MIA - MHT,53521848700,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/53521848700,https://www.airlines-manager.com/aircraft/show/115493373,14:00,20:59,310,"$452,295.00","$414,040.00"
MIA - MHT,53531796460,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/53531796460,https://www.airlines-manager.com/aircraft/show/115493370,19:00,1:59,310,"$452,295.00","$414,040.00"
MIA - MKE,53492178486,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/53492178486,https://www.airlines-manager.com/aircraft/show/88494378,0:15,7:14,320,"$446,482.00","$402,355.00"
MIA - MKE,53505148725,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/53505148725,https://www.airlines-manager.com/aircraft/show/91806233,6:15,13:14,320,"$446,482.00","$402,355.00"
MIA - MKE,53516803664,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/53516803664,https://www.airlines-manager.com/aircraft/show/110582842,11:00,17:59,198,"$337,620.00","$306,185.00"
MIA - MKE,53521848767,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/53521848767,https://www.airlines-manager.com/aircraft/show/88239556,14:00,20:59,320,"$446,482.00","$402,355.00"
MIA - MKE,53531796433,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/53531796433,https://www.airlines-manager.com/aircraft/show/88494374,18:45,1:44,320,"$446,482.00","$402,355.00"
MIA - MSN,53492178737,MIA-RAP-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/53492178737,https://www.airlines-manager.com/aircraft/show/116789625,1:45,8:59,320,"$449,929.00","$407,356.00"
MIA - MSN,53505148786,MIA-RAP-GRR 5,ERJ-175,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/53505148786,https://www.airlines-manager.com/aircraft/show/116042630,7:45,14:59,112,"$213,319.00","$188,237.00"
MIA - MSN,53511675195,MIA-RAP-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/53511675195,https://www.airlines-manager.com/aircraft/show/116789623,10:00,17:14,320,"$449,929.00","$407,356.00"
MIA - MSN,53526170973,MIA-RAP-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/53526170973,https://www.airlines-manager.com/aircraft/show/116789624,16:45,23:59,320,"$449,929.00","$407,356.00"
MIA - MSN,53531796432,MIA-RAP-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/53531796432,https://www.airlines-manager.com/aircraft/show/116789622,18:45,1:59,320,"$449,929.00","$407,356.00"
MIA - MSO,53505148787,MIA-FAT-MSO 2,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/53505148787,https://www.airlines-manager.com/aircraft/show/113101231,7:45,18:59,320,"$697,127.00","$638,148.00"
MIA - MSO,53516803635,MIA-FAT-MSO 3,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/53516803635,https://www.airlines-manager.com/aircraft/show/113101234,11:00,22:14,320,"$697,127.00","$638,148.00"
MIA - MSO,53531796602,MIA-FAT-MSO 4,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/53531796602,https://www.airlines-manager.com/aircraft/show/113101232,20:00,7:14,320,"$697,127.00","$638,148.00"
MIA - MSO,53540025388,MIA-FAT-MSO 1,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/53540025388,https://www.airlines-manager.com/aircraft/show/113101229,22:30,9:44,320,"$697,127.00","$638,148.00"
MIA - MSP,53492178771,MIA-JFK-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/53492178771,https://www.airlines-manager.com/aircraft/show/105308267,2:00,9:59,338,"$541,729.00","$493,047.00"
MIA - MSP,53492178772,MIA-JFK-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/53492178772,https://www.airlines-manager.com/aircraft/show/105308268,3:00,10:59,338,"$541,729.00","$493,047.00"
MIA - MSP,53511675207,MIA-JFK-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/53511675207,https://www.airlines-manager.com/aircraft/show/105308266,10:00,17:59,338,"$541,729.00","$493,047.00"
MIA - MSP,53521848655,MIA-JFK-PHX 6,ERJ-175,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/53521848655,https://www.airlines-manager.com/aircraft/show/82683137,13:00,20:59,112,"$236,027.00","$203,069.00"
MIA - MSP,53531796376,MIA-JFK-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/53531796376,https://www.airlines-manager.com/aircraft/show/105308265,18:15,2:14,338,"$541,729.00","$493,047.00"
MIA - MSP,53536307307,MIA-JFK-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/53536307307,https://www.airlines-manager.com/aircraft/show/105308264,21:45,5:44,338,"$541,729.00","$493,047.00"
MIA - MSY,53492178728,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/53492178728,https://www.airlines-manager.com/aircraft/show/91806233,1:30,6:14,320,"$300,043.00","$264,920.00"
MIA - MSY,53505148649,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/53505148649,https://www.airlines-manager.com/aircraft/show/110582842,5:30,10:14,198,"$228,739.00","$204,246.00"
MIA - MSY,53511675057,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/53511675057,https://www.airlines-manager.com/aircraft/show/88239556,8:30,13:14,320,"$300,043.00","$264,920.00"
MIA - MSY,53521848721,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/53521848721,https://www.airlines-manager.com/aircraft/show/88494374,14:00,18:44,320,"$300,043.00","$264,920.00"
MIA - MSY,53531796510,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/53531796510,https://www.airlines-manager.com/aircraft/show/88494378,19:30,0:14,320,"$300,043.00","$264,920.00"
MIA - NAS,53492178795,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/53492178795,https://www.airlines-manager.com/aircraft/show/104034461,2:15,4:59,228,"$78,591.00","$60,620.00"
MIA - NAS,53505148782,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/53505148782,https://www.airlines-manager.com/aircraft/show/99326789,7:30,10:14,228,"$78,591.00","$60,620.00"
MIA - NAS,53511675161,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/53511675161,https://www.airlines-manager.com/aircraft/show/104034457,10:00,12:44,228,"$78,591.00","$60,620.00"
MIA - NAS,53521848676,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/53521848676,https://www.airlines-manager.com/aircraft/show/107577220,13:15,15:59,0,"$34,003.00","$19,794.00"
MIA - NAS,53521848677,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/53521848677,https://www.airlines-manager.com/aircraft/show/104034458,14:15,16:59,228,"$78,591.00","$60,620.00"
MIA - NAS,53531796406,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/53531796406,https://www.airlines-manager.com/aircraft/show/104034459,18:30,21:14,228,"$78,591.00","$60,620.00"
MIA - NAS,53536307315,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/53536307315,https://www.airlines-manager.com/aircraft/show/104034460,22:00,0:44,228,"$78,591.00","$60,620.00"
MIA - OAK,53492178632,MIA-OAK-SMF 5,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/53492178632,https://www.airlines-manager.com/aircraft/show/91198617,1:00,12:59,320,"$737,460.00","$671,568.00"
MIA - OAK,53516803610,MIA-OAK-SMF 1,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/53516803610,https://www.airlines-manager.com/aircraft/show/91198615,11:00,22:59,320,"$737,460.00","$671,568.00"
MIA - OAK,53521848663,MIA-OAK-SMF 2,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/53521848663,https://www.airlines-manager.com/aircraft/show/91198619,13:00,0:59,320,"$737,460.00","$671,568.00"
MIA - OAK,53521848664,MIA-OAK-SMF 3,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/53521848664,https://www.airlines-manager.com/aircraft/show/91198616,15:00,2:59,320,"$737,460.00","$671,568.00"
MIA - OAK,53540025442,MIA-OAK-SMF 4,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/53540025442,https://www.airlines-manager.com/aircraft/show/91198618,23:00,10:59,320,"$737,460.00","$671,568.00"
MIA - OKC,53492178758,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/53492178758,https://www.airlines-manager.com/aircraft/show/110883112,1:45,8:29,310,"$430,426.00","$392,795.00"
MIA - OKC,53492178759,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/53492178759,https://www.airlines-manager.com/aircraft/show/110883111,4:00,10:44,310,"$430,426.00","$392,795.00"
MIA - OKC,53511675173,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/53511675173,https://www.airlines-manager.com/aircraft/show/104353572,10:00,16:44,112,"$202,427.00","$177,716.00"
MIA - OKC,53521848607,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/53521848607,https://www.airlines-manager.com/aircraft/show/110883110,13:00,19:44,310,"$430,426.00","$392,795.00"
MIA - OKC,53521848608,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/53521848608,https://www.airlines-manager.com/aircraft/show/110883113,14:45,21:29,310,"$430,426.00","$392,795.00"
MIA - OMA,53492178817,MIA-BOI-BNA 1,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/53492178817,https://www.airlines-manager.com/aircraft/show/104133006,2:30,9:59,320,"$477,506.00","$432,428.00"
MIA - OMA,53505148736,MIA-BOI-BNA 4,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/53505148736,https://www.airlines-manager.com/aircraft/show/103775657,6:30,13:59,320,"$477,506.00","$432,428.00"
MIA - OMA,53511675157,MIA-BOI-BNA 3,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/53511675157,https://www.airlines-manager.com/aircraft/show/104020880,10:00,17:29,320,"$477,506.00","$432,428.00"
MIA - OMA,53526170836,MIA-BOI-BNA 2,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/53526170836,https://www.airlines-manager.com/aircraft/show/104022609,15:15,22:44,320,"$477,506.00","$432,428.00"
MIA - OMA,53526170837,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/53526170837,https://www.airlines-manager.com/aircraft/show/103534663,17:15,0:44,112,"$225,479.00","$198,880.00"
MIA - ONT,53492178560,MIA-RNO-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/53492178560,https://www.airlines-manager.com/aircraft/show/90489722,0:30,11:29,320,"$691,257.00","$629,649.00"
MIA - ONT,53492178561,MIA-RNO-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/53492178561,https://www.airlines-manager.com/aircraft/show/86238756,2:30,13:29,320,"$691,257.00","$629,649.00"
MIA - ONT,53516803646,MIA-RNO-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/53516803646,https://www.airlines-manager.com/aircraft/show/90489723,11:00,21:59,320,"$691,257.00","$629,649.00"
MIA - ONT,53521848775,MIA-RNO-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/53521848775,https://www.airlines-manager.com/aircraft/show/105223010,14:00,0:59,198,"$519,083.00","$474,343.00"
MIA - ONT,53540025377,MIA-RNO-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/53540025377,https://www.airlines-manager.com/aircraft/show/86238755,22:30,9:29,320,"$691,257.00","$629,649.00"
MIA - ORD,53492178877,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/53492178877,https://www.airlines-manager.com/aircraft/show/91600935,3:15,9:59,310,"$423,914.00","$364,109.00"
MIA - ORD,53492178878,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/53492178878,https://www.airlines-manager.com/aircraft/show/91600938,4:15,10:59,310,"$423,914.00","$364,109.00"
MIA - ORD,53511675107,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/53511675107,https://www.airlines-manager.com/aircraft/show/82543123,9:00,15:44,112,"$199,175.00","$161,198.00"
MIA - ORD,53516803618,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/53516803618,https://www.airlines-manager.com/aircraft/show/91600937,11:00,17:44,310,"$423,914.00","$364,109.00"
MIA - ORD,53521848797,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/53521848797,https://www.airlines-manager.com/aircraft/show/91600939,14:45,21:29,310,"$423,914.00","$364,109.00"
MIA - ORD,53526170845,MIA-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/53526170845,https://www.airlines-manager.com/aircraft/show/106339154,15:30,22:14,198,"$319,739.00","$271,843.00"
MIA - ORD,53536307212,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/53536307212,https://www.airlines-manager.com/aircraft/show/91600936,20:45,3:29,310,"$423,914.00","$364,109.00"
MIA - ORF,53492178489,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/53492178489,https://www.airlines-manager.com/aircraft/show/114912307,0:15,5:29,112,"$157,418.00","$137,445.00"
MIA - ORF,53492178490,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/53492178490,https://www.airlines-manager.com/aircraft/show/115493373,3:15,8:29,310,"$331,248.00","$300,298.00"
MIA - ORF,53511675036,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/53511675036,https://www.airlines-manager.com/aircraft/show/115493370,8:15,13:29,310,"$331,248.00","$300,298.00"
MIA - ORF,53521848833,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/53521848833,https://www.airlines-manager.com/aircraft/show/115493371,15:00,20:14,310,"$331,248.00","$300,298.00"
MIA - ORF,53526171030,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/53526171030,https://www.airlines-manager.com/aircraft/show/115493372,17:15,22:29,310,"$331,248.00","$300,298.00"
MIA - PDX,53511675178,MIA-PDX-DTW 1,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/53511675178,https://www.airlines-manager.com/aircraft/show/89943715,10:00,22:29,320,"$771,170.00","$700,853.00"
MIA - PDX,53521848617,MIA-PDX-DTW 3,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/53521848617,https://www.airlines-manager.com/aircraft/show/89943713,13:00,1:29,320,"$771,170.00","$700,853.00"
MIA - PDX,53521848618,MIA-PDX-DTW 4,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/53521848618,https://www.airlines-manager.com/aircraft/show/89943712,14:00,2:29,320,"$771,170.00","$700,853.00"
MIA - PDX,53531796513,MIA-PDX-DTW 2,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/53531796513,https://www.airlines-manager.com/aircraft/show/89943714,19:30,7:59,320,"$771,170.00","$700,853.00"
MIA - PDX,53540025477,MIA-PDX-DTW 5,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/53540025477,https://www.airlines-manager.com/aircraft/show/89943711,23:30,11:59,320,"$771,170.00","$700,853.00"
MIA - PHL,53492178910,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/53492178910,https://www.airlines-manager.com/aircraft/show/91600939,4:00,9:59,310,"$379,784.00","$338,009.00"
MIA - PHL,53505148632,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/53505148632,https://www.airlines-manager.com/aircraft/show/91600937,5:00,10:59,310,"$379,784.00","$338,009.00"
MIA - PHL,53511675193,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/53511675193,https://www.airlines-manager.com/aircraft/show/91600936,10:00,15:59,310,"$379,784.00","$338,009.00"
MIA - PHL,53526170967,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/53526170967,https://www.airlines-manager.com/aircraft/show/91600935,16:30,22:29,310,"$379,784.00","$338,009.00"
MIA - PHL,53531796297,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/53531796297,https://www.airlines-manager.com/aircraft/show/91600938,17:30,23:29,310,"$379,784.00","$338,009.00"
MIA - PHL,53536307351,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/53536307351,https://www.airlines-manager.com/aircraft/show/82543123,22:15,4:14,112,"$179,528.00","$152,690.00"
MIA - PHX,53492178552,MIA-JFK-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/53492178552,https://www.airlines-manager.com/aircraft/show/105308266,0:15,9:59,338,"$670,464.00","$611,759.00"
MIA - PHX,53492178553,MIA-JFK-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/53492178553,https://www.airlines-manager.com/aircraft/show/105308265,2:15,11:59,338,"$670,464.00","$611,759.00"
MIA - PHX,53516803601,MIA-JFK-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/53516803601,https://www.airlines-manager.com/aircraft/show/105308268,11:00,20:44,338,"$670,464.00","$611,759.00"
MIA - PHX,53516803602,MIA-JFK-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/53516803602,https://www.airlines-manager.com/aircraft/show/105308264,12:00,21:44,338,"$670,464.00","$611,759.00"
MIA - PHX,53526170953,MIA-JFK-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/53526170953,https://www.airlines-manager.com/aircraft/show/105308267,16:15,1:59,338,"$670,464.00","$611,759.00"
MIA - PHX,53536307241,MIA-JFK-PHX 6,ERJ-175,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/53536307241,https://www.airlines-manager.com/aircraft/show/82683137,21:00,6:44,112,"$290,059.00","$249,922.00"
MIA - PIT,53492178873,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/53492178873,https://www.airlines-manager.com/aircraft/show/99920624,3:15,9:14,320,"$381,330.00","$339,654.00"
MIA - PIT,53511675218,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/53511675218,https://www.airlines-manager.com/aircraft/show/99920625,10:00,15:59,320,"$381,330.00","$339,654.00"
MIA - PIT,53526170961,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/53526170961,https://www.airlines-manager.com/aircraft/show/99920626,16:30,22:29,320,"$381,330.00","$339,654.00"
MIA - PIT,53536307184,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/53536307184,https://www.airlines-manager.com/aircraft/show/82323689,20:30,2:29,112,"$180,264.00","$156,468.00"
MIA - PIT,53536307185,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/53536307185,https://www.airlines-manager.com/aircraft/show/99920623,21:15,3:14,320,"$381,330.00","$339,654.00"
MIA - PLS,53492178869,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/53492178869,https://www.airlines-manager.com/aircraft/show/99326789,3:15,7:29,228,"$205,523.00","$184,430.00"
MIA - PLS,53505148628,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/53505148628,https://www.airlines-manager.com/aircraft/show/104034460,5:00,9:14,228,"$205,523.00","$184,430.00"
MIA - PLS,53511675160,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/53511675160,https://www.airlines-manager.com/aircraft/show/104034458,10:00,14:14,228,"$205,523.00","$184,430.00"
MIA - PLS,53521848778,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/53521848778,https://www.airlines-manager.com/aircraft/show/104034459,14:15,18:29,228,"$205,523.00","$184,430.00"
MIA - PLS,53526170994,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/53526170994,https://www.airlines-manager.com/aircraft/show/104034457,17:00,21:14,228,"$205,523.00","$184,430.00"
MIA - PLS,53536307333,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/53536307333,https://www.airlines-manager.com/aircraft/show/104034461,22:00,2:14,228,"$205,523.00","$184,430.00"
MIA - POS,53516803782,MIA 84B-5 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/53516803782,https://www.airlines-manager.com/aircraft/show/106676229,12:30,20:29,962,"$1,335,429.00","$1,218,322.00"
MIA - POS,53526170921,MIA 84B-3 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/53526170921,https://www.airlines-manager.com/aircraft/show/106676227,16:00,23:59,727,"$1,099,136.00","$994,924.00"
MIA - PSP,53492178774,MIA-PSP-BFF 5,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/53492178774,https://www.airlines-manager.com/aircraft/show/116789630,2:00,12:44,320,"$659,420.00","$601,722.00"
MIA - PSP,53511675146,MIA-PSP-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/53511675146,https://www.airlines-manager.com/aircraft/show/116789631,10:00,20:44,320,"$659,420.00","$601,722.00"
MIA - PSP,53521848741,MIA-PSP-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/53521848741,https://www.airlines-manager.com/aircraft/show/116789634,14:00,0:44,320,"$659,420.00","$601,722.00"
MIA - PSP,53521848742,MIA-PSP-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/53521848742,https://www.airlines-manager.com/aircraft/show/116789632,14:15,0:59,320,"$659,420.00","$601,722.00"
MIA - PSP,53540025440,MIA-PSP-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/53540025440,https://www.airlines-manager.com/aircraft/show/116789633,23:00,9:44,239,"$555,842.00","$503,003.00"
MIA - PUJ,53492178884,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/53492178884,https://www.airlines-manager.com/aircraft/show/104034458,3:30,9:14,228,"$275,787.00","$249,167.00"
MIA - PUJ,53511675163,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/53511675163,https://www.airlines-manager.com/aircraft/show/104034461,10:00,15:44,228,"$275,787.00","$249,167.00"
MIA - PUJ,53526170913,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/53526170913,https://www.airlines-manager.com/aircraft/show/107577220,16:00,21:44,0,"$94,907.00","$71,312.00"
MIA - PUJ,53526170914,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/53526170914,https://www.airlines-manager.com/aircraft/show/104034460,16:15,21:59,228,"$275,787.00","$249,167.00"
MIA - PUJ,53526170915,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/53526170915,https://www.airlines-manager.com/aircraft/show/99326789,17:15,22:59,228,"$275,787.00","$249,167.00"
MIA - PUJ,53536307256,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/53536307256,https://www.airlines-manager.com/aircraft/show/104034457,21:15,2:59,228,"$275,787.00","$249,167.00"
MIA - PUJ,53536307257,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/53536307257,https://www.airlines-manager.com/aircraft/show/104034459,22:00,3:44,228,"$275,787.00","$249,167.00"
MIA - PVD,53492178664,MIA-BUR-PVD 3,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/53492178664,https://www.airlines-manager.com/aircraft/show/108834805,1:15,7:59,310,"$425,919.00","$389,690.00"
MIA - PVD,53505148770,MIA-BUR-PVD 5 B,A319-100,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/53505148770,https://www.airlines-manager.com/aircraft/show/108834807,7:15,13:59,198,"$321,428.00","$292,393.00"
MIA - PVD,53516803677,MIA-BUR-PVD 2,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/53516803677,https://www.airlines-manager.com/aircraft/show/108834804,11:00,17:44,310,"$425,919.00","$389,690.00"
MIA - PVD,53526171011,MIA-BUR-PVD 4,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/53526171011,https://www.airlines-manager.com/aircraft/show/108834806,17:00,23:44,310,"$425,919.00","$389,690.00"
MIA - PVD,53536307347,MIA-BUR-PVD 1,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/53536307347,https://www.airlines-manager.com/aircraft/show/108834803,22:15,4:59,310,"$425,919.00","$389,690.00"
MIA - PWM,53505148785,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/53505148785,https://www.airlines-manager.com/aircraft/show/94886629,7:30,14:59,310,"$466,211.00","$428,287.00"
MIA - PWM,53521848720,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/53521848720,https://www.airlines-manager.com/aircraft/show/94886626,14:00,21:29,310,"$466,211.00","$428,287.00"
MIA - PWM,53531796426,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/53531796426,https://www.airlines-manager.com/aircraft/show/96692674,18:45,2:14,310,"$466,211.00","$428,287.00"
MIA - PWM,53536307220,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/53536307220,https://www.airlines-manager.com/aircraft/show/105601657,20:45,4:14,112,"$220,140.00","$195,020.00"
MIA - PWM,53540025490,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/53540025490,https://www.airlines-manager.com/aircraft/show/94886625,23:45,7:14,310,"$466,211.00","$428,287.00"
MIA - RAP,53492178470,MIA-RAP-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/53492178470,https://www.airlines-manager.com/aircraft/show/116789624,0:00,8:59,320,"$561,298.00","$511,354.00"
MIA - RAP,53492178471,MIA-RAP-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/53492178471,https://www.airlines-manager.com/aircraft/show/116789622,2:00,10:59,320,"$561,298.00","$511,354.00"
MIA - RAP,53511675152,MIA-RAP-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/53511675152,https://www.airlines-manager.com/aircraft/show/116789625,10:00,18:59,320,"$561,298.00","$511,354.00"
MIA - RAP,53521848806,MIA-RAP-GRR 5,ERJ-175,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/53521848806,https://www.airlines-manager.com/aircraft/show/116042630,15:00,23:59,112,"$264,806.00","$234,612.00"
MIA - RAP,53526171026,MIA-RAP-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/53526171026,https://www.airlines-manager.com/aircraft/show/116789623,17:15,2:14,320,"$561,298.00","$511,354.00"
MIA - RDU,53505148574,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/53505148574,https://www.airlines-manager.com/aircraft/show/99920626,4:30,9:14,320,"$309,466.00","$273,290.00"
MIA - RDU,53511675068,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/53511675068,https://www.airlines-manager.com/aircraft/show/82323689,8:30,13:14,112,"$147,399.00","$127,266.00"
MIA - RDU,53511675069,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/53511675069,https://www.airlines-manager.com/aircraft/show/99920623,10:00,14:44,320,"$309,466.00","$273,290.00"
MIA - RDU,53526170929,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/53526170929,https://www.airlines-manager.com/aircraft/show/99920624,16:00,20:44,320,"$309,466.00","$273,290.00"
MIA - RDU,53536307329,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/53536307329,https://www.airlines-manager.com/aircraft/show/99920625,22:00,2:44,320,"$309,466.00","$273,290.00"
MIA - RIC,53511675062,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/53511675062,https://www.airlines-manager.com/aircraft/show/110883112,8:30,13:44,310,"$335,679.00","$304,397.00"
MIA - RIC,53516803667,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/53516803667,https://www.airlines-manager.com/aircraft/show/110883111,11:00,16:14,310,"$335,679.00","$304,397.00"
MIA - RIC,53526170982,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/53526170982,https://www.airlines-manager.com/aircraft/show/104353572,16:45,21:59,112,"$159,561.00","$139,347.00"
MIA - RIC,53531796521,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/53531796521,https://www.airlines-manager.com/aircraft/show/110883110,19:45,0:59,310,"$335,679.00","$304,397.00"
MIA - RIC,53536307293,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/53536307293,https://www.airlines-manager.com/aircraft/show/110883113,21:30,2:44,310,"$335,679.00","$304,397.00"
MIA - RNO,53492178660,MIA-RNO-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/53492178660,https://www.airlines-manager.com/aircraft/show/105223010,1:00,12:44,198,"$543,785.00","$497,948.00"
MIA - RNO,53516803647,MIA-RNO-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/53516803647,https://www.airlines-manager.com/aircraft/show/86238755,11:00,22:29,320,"$721,868.00","$659,017.00"
MIA - RNO,53521848571,MIA-RNO-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/53521848571,https://www.airlines-manager.com/aircraft/show/90489722,13:00,0:29,320,"$721,868.00","$659,017.00"
MIA - RNO,53521848572,MIA-RNO-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/53521848572,https://www.airlines-manager.com/aircraft/show/86238756,15:00,2:29,320,"$721,868.00","$659,017.00"
MIA - RNO,53536307330,MIA-RNO-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/53536307330,https://www.airlines-manager.com/aircraft/show/90489723,22:00,9:29,320,"$721,868.00","$659,017.00"
MIA - RSW,53492178905,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/53492178905,https://www.airlines-manager.com/aircraft/show/110114297,4:00,6:29,228,"$65,659.00","$47,406.00"
MIA - RSW,53511675128,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/53511675128,https://www.airlines-manager.com/aircraft/show/110114295,9:15,11:44,228,"$65,659.00","$47,406.00"
MIA - RSW,53511675129,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/53511675129,https://www.airlines-manager.com/aircraft/show/110114296,10:15,12:44,228,"$65,659.00","$47,406.00"
MIA - RSW,53521848707,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/53521848707,https://www.airlines-manager.com/aircraft/show/110114300,14:00,16:29,228,"$65,659.00","$47,406.00"
MIA - RSW,53536307222,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/53536307222,https://www.airlines-manager.com/aircraft/show/110114299,21:00,23:29,228,"$65,659.00","$47,406.00"
MIA - RSW,53540025450,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/53540025450,https://www.airlines-manager.com/aircraft/show/110114298,23:00,1:29,228,"$65,659.00","$47,406.00"
MIA - SAN,53492178734,MIA-BWI-YYZ 2,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/53492178734,https://www.airlines-manager.com/aircraft/show/92153440,1:45,12:44,310,"$686,006.00","$629,207.00"
MIA - SAN,53511675183,MIA-BWI-YYZ 3,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/53511675183,https://www.airlines-manager.com/aircraft/show/92153441,10:00,20:59,310,"$686,006.00","$629,207.00"
MIA - SAN,53516803771,MIA-BWI-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/53516803771,https://www.airlines-manager.com/aircraft/show/92137503,12:00,22:59,136,"$299,558.00","$265,819.00"
MIA - SAN,53526171007,MIA-BWI-YYZ 4,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/53526171007,https://www.airlines-manager.com/aircraft/show/92153442,17:00,3:59,310,"$686,006.00","$629,207.00"
MIA - SAN,53531796438,MIA-BWI-YYZ 5,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/53531796438,https://www.airlines-manager.com/aircraft/show/92153439,19:00,5:59,310,"$686,006.00","$629,207.00"
MIA - SAN,53540025399,MIA-BWI-YYZ 1,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/53540025399,https://www.airlines-manager.com/aircraft/show/92153443,22:45,9:44,310,"$686,006.00","$629,207.00"
MIA - SAT,53492178875,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/53492178875,https://www.airlines-manager.com/aircraft/show/107763562,3:15,9:44,320,"$410,437.00","$369,153.00"
MIA - SAT,53516803685,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/53516803685,https://www.airlines-manager.com/aircraft/show/107763565,11:00,17:29,320,"$410,437.00","$369,153.00"
MIA - SAT,53521848795,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/53521848795,https://www.airlines-manager.com/aircraft/show/107467213,14:45,21:14,112,"$193,677.00","$169,711.00"
MIA - SAT,53536307198,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/53536307198,https://www.airlines-manager.com/aircraft/show/107763561,20:30,2:59,320,"$410,437.00","$369,153.00"
MIA - SAT,53536307199,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/53536307199,https://www.airlines-manager.com/aircraft/show/107763566,20:45,3:14,320,"$410,437.00","$369,153.00"
MIA - SAV,53492178548,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/53492178548,https://www.airlines-manager.com/aircraft/show/110883111,0:15,3:59,310,"$214,539.00","$189,268.00"
MIA - SAV,53505148703,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/53505148703,https://www.airlines-manager.com/aircraft/show/104353572,6:00,9:44,112,"$100,203.00","$84,270.00"
MIA - SAV,53511675098,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/53511675098,https://www.airlines-manager.com/aircraft/show/110883110,9:00,12:44,310,"$214,539.00","$189,268.00"
MIA - SAV,53516803666,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/53516803666,https://www.airlines-manager.com/aircraft/show/110883113,11:00,14:44,310,"$214,539.00","$189,268.00"
MIA - SAV,53536307316,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/53536307316,https://www.airlines-manager.com/aircraft/show/110883112,22:00,1:44,267,"$197,041.00","$172,290.00"
MIA - SDF,53492178603,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/53492178603,https://www.airlines-manager.com/aircraft/show/94886629,0:45,6:29,310,"$354,795.00","$320,429.00"
MIA - SDF,53511675035,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/53511675035,https://www.airlines-manager.com/aircraft/show/94886626,8:15,13:59,310,"$354,795.00","$320,429.00"
MIA - SDF,53521848567,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/53521848567,https://www.airlines-manager.com/aircraft/show/96692674,13:00,18:44,310,"$354,795.00","$320,429.00"
MIA - SDF,53521848568,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/53521848568,https://www.airlines-manager.com/aircraft/show/105601657,15:00,20:44,112,"$167,661.00","$145,448.00"
MIA - SDF,53526170858,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/53526170858,https://www.airlines-manager.com/aircraft/show/107527976,15:45,21:29,0,"$94,306.00","$70,011.00"
MIA - SDF,53531796363,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/53531796363,https://www.airlines-manager.com/aircraft/show/94886625,18:00,23:44,310,"$346,824.00","$313,959.00"
MIA - SEA,53492178726,MIA-LAS-SEA 3,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/53492178726,https://www.airlines-manager.com/aircraft/show/105093927,1:30,13:59,338,"$830,781.00","$762,732.00"
MIA - SEA,53511675148,MIA-LAS-SEA 4,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/53511675148,https://www.airlines-manager.com/aircraft/show/105093928,10:00,22:29,338,"$830,781.00","$762,732.00"
MIA - SEA,53521848582,MIA-LAS-SEA 5,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/53521848582,https://www.airlines-manager.com/aircraft/show/105093929,13:00,1:29,338,"$830,781.00","$762,732.00"
MIA - SEA,53536307181,MIA-LAS-SEA 1,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/53536307181,https://www.airlines-manager.com/aircraft/show/105093925,20:30,8:59,338,"$830,781.00","$762,732.00"
MIA - SEA,53540025394,MIA-LAS-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/53540025394,https://www.airlines-manager.com/aircraft/show/113251304,22:30,11:14,198,"$575,630.00","$518,353.00"
MIA - SEA,53540025395,MIA-LAS-SEA 2,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/53540025395,https://www.airlines-manager.com/aircraft/show/105093926,23:30,11:59,338,"$830,781.00","$762,732.00"
MIA - SJC,53492178756,MIA-SJC-YYC 5,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/53492178756,https://www.airlines-manager.com/aircraft/show/107763563,1:45,13:44,320,"$731,356.00","$665,189.00"
MIA - SJC,53516803746,MIA-SJC-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/53516803746,https://www.airlines-manager.com/aircraft/show/107763569,12:00,23:59,320,"$731,356.00","$665,189.00"
MIA - SJC,53521848713,MIA-SJC-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/53521848713,https://www.airlines-manager.com/aircraft/show/107763568,14:00,1:59,320,"$731,356.00","$665,189.00"
MIA - SJC,53526170912,MIA-SJC-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/53526170912,https://www.airlines-manager.com/aircraft/show/107763567,16:00,3:59,320,"$731,356.00","$665,189.00"
MIA - SJC,53540025492,MIA-SJC-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/53540025492,https://www.airlines-manager.com/aircraft/show/107763564,23:45,11:44,320,"$731,356.00","$665,189.00"
MIA - SJU,53492178874,MIA-SJU-BOS 6 B,A319-100,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/53492178874,https://www.airlines-manager.com/aircraft/show/110582841,3:15,9:29,198,"$286,648.00","$257,583.00"
MIA - SJU,53511675236,MIA-SJU-BOS 2,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/53511675236,https://www.airlines-manager.com/aircraft/show/91352062,10:15,16:29,310,"$379,953.00","$343,678.00"
MIA - SJU,53516803776,MIA-SJU-BOS 3,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/53516803776,https://www.airlines-manager.com/aircraft/show/91352061,12:15,18:29,310,"$379,953.00","$343,678.00"
MIA - SJU,53531796388,MIA-SJU-BOS 4,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/53531796388,https://www.airlines-manager.com/aircraft/show/91352060,18:15,0:29,310,"$379,953.00","$343,678.00"
MIA - SJU,53531796389,MIA-SJU-BOS 5,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/53531796389,https://www.airlines-manager.com/aircraft/show/91352059,19:15,1:29,310,"$379,953.00","$343,678.00"
MIA - SJU,53540025402,MIA-SJU-BOS 1,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/53540025402,https://www.airlines-manager.com/aircraft/show/91352063,22:45,4:59,272,"$338,619.00","$303,704.00"
MIA - SKB,53492178699,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/53492178699,https://www.airlines-manager.com/aircraft/show/110114298,1:30,8:29,228,"$343,701.00","$314,172.00"
MIA - SKB,53492178700,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/53492178700,https://www.airlines-manager.com/aircraft/show/110114295,2:15,9:14,228,"$343,701.00","$314,172.00"
MIA - SKB,53492178701,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/53492178701,https://www.airlines-manager.com/aircraft/show/110114296,3:15,10:14,228,"$343,701.00","$314,172.00"
MIA - SKB,53505148752,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/53505148752,https://www.airlines-manager.com/aircraft/show/110114300,6:45,13:44,228,"$343,701.00","$314,172.00"
MIA - SKB,53521848708,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/53521848708,https://www.airlines-manager.com/aircraft/show/110114299,14:00,20:59,228,"$343,701.00","$314,172.00"
MIA - SKB,53536307244,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/53536307244,https://www.airlines-manager.com/aircraft/show/110114297,21:00,3:59,228,"$343,701.00","$314,172.00"
MIA - SLC,53492178465,MIA-SJU-BOS 2,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/53492178465,https://www.airlines-manager.com/aircraft/show/91352062,0:00,10:14,310,"$641,266.00","$583,680.00"
MIA - SLC,53492178466,MIA-SJU-BOS 4,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/53492178466,https://www.airlines-manager.com/aircraft/show/91352060,1:00,11:14,310,"$641,266.00","$583,680.00"
MIA - SLC,53492178467,MIA-SJU-BOS 3,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/53492178467,https://www.airlines-manager.com/aircraft/show/91352061,2:00,12:14,310,"$641,266.00","$583,680.00"
MIA - SLC,53511675117,MIA-SJU-BOS 5,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/53511675117,https://www.airlines-manager.com/aircraft/show/91352059,9:00,19:14,310,"$641,266.00","$583,680.00"
MIA - SLC,53511675118,MIA-SJU-BOS 6 B,A319-100,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/53511675118,https://www.airlines-manager.com/aircraft/show/110582841,10:00,20:14,198,"$481,931.00","$435,772.00"
MIA - SLC,53516803773,MIA-SJU-BOS 1,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/53516803773,https://www.airlines-manager.com/aircraft/show/91352063,12:00,22:14,310,"$641,266.00","$583,680.00"
MIA - SMF,53492178633,MIA-OAK-SMF 2,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/53492178633,https://www.airlines-manager.com/aircraft/show/91198619,1:00,12:59,320,"$731,563.00","$667,531.00"
MIA - SMF,53492178634,MIA-OAK-SMF 3,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/53492178634,https://www.airlines-manager.com/aircraft/show/91198616,3:00,14:59,320,"$731,563.00","$667,531.00"
MIA - SMF,53516803609,MIA-OAK-SMF 4,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/53516803609,https://www.airlines-manager.com/aircraft/show/91198618,11:00,22:59,320,"$731,563.00","$667,531.00"
MIA - SMF,53521848662,MIA-OAK-SMF 5,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/53521848662,https://www.airlines-manager.com/aircraft/show/91198617,13:00,0:59,320,"$731,563.00","$667,531.00"
MIA - SMF,53540025443,MIA-OAK-SMF 1,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/53540025443,https://www.airlines-manager.com/aircraft/show/91198615,23:00,10:59,320,"$731,563.00","$667,531.00"
MIA - STL,53492178719,MIA-ELP-MCI 1,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/53492178719,https://www.airlines-manager.com/aircraft/show/91806234,1:30,7:44,320,"$391,361.00","$347,788.00"
MIA - STL,53492178720,MIA-ELP-MCI 5 B,A319-100,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/53492178720,https://www.airlines-manager.com/aircraft/show/105093924,2:00,8:14,198,"$296,098.00","$265,339.00"
MIA - STL,53492178721,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/53492178721,https://www.airlines-manager.com/aircraft/show/107527976,3:15,9:29,0,"$102,664.00","$75,323.00"
MIA - STL,53511675055,MIA-ELP-MCI 4,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/53511675055,https://www.airlines-manager.com/aircraft/show/91806231,8:30,14:44,320,"$391,361.00","$347,788.00"
MIA - STL,53511675056,MIA-ELP-MCI 3,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/53511675056,https://www.airlines-manager.com/aircraft/show/91806232,10:00,16:14,320,"$391,361.00","$347,788.00"
MIA - STL,53526170988,MIA-ELP-MCI 2,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/53526170988,https://www.airlines-manager.com/aircraft/show/91806235,17:00,23:14,320,"$391,361.00","$347,788.00"
MIA - SXM,53505148750,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/53505148750,https://www.airlines-manager.com/aircraft/show/110114299,6:45,13:44,228,"$333,459.00","$304,653.00"
MIA - SXM,53521848709,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/53521848709,https://www.airlines-manager.com/aircraft/show/110114297,14:00,20:59,228,"$333,459.00","$304,653.00"
MIA - SXM,53526170909,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/53526170909,https://www.airlines-manager.com/aircraft/show/110114298,16:00,22:59,228,"$333,459.00","$304,653.00"
MIA - SXM,53531796470,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/53531796470,https://www.airlines-manager.com/aircraft/show/110114295,19:15,2:14,228,"$333,459.00","$304,653.00"
MIA - SXM,53536307176,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/53536307176,https://www.airlines-manager.com/aircraft/show/110114296,20:15,3:14,228,"$333,459.00","$304,653.00"
MIA - SXM,53540025487,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/53540025487,https://www.airlines-manager.com/aircraft/show/110114300,23:45,6:44,228,"$333,459.00","$304,653.00"
MIA - TPA,53505148622,MIA-BUR-PVD 1,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/53505148622,https://www.airlines-manager.com/aircraft/show/108834803,5:00,7:59,310,"$127,616.00","$101,600.00"
MIA - TPA,53516803676,MIA-BUR-PVD 3,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/53516803676,https://www.airlines-manager.com/aircraft/show/108834805,11:00,13:59,310,"$127,616.00","$101,600.00"
MIA - TPA,53526171012,MIA-BUR-PVD 5 B,A319-100,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/53526171012,https://www.airlines-manager.com/aircraft/show/108834807,17:00,19:59,198,"$95,236.00","$74,415.00"
MIA - TPA,53531796312,MIA-BUR-PVD 2,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/53531796312,https://www.airlines-manager.com/aircraft/show/108834804,17:45,20:44,310,"$127,616.00","$101,600.00"
MIA - TPA,53540025493,MIA-BUR-PVD 4,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/53540025493,https://www.airlines-manager.com/aircraft/show/108834806,23:45,2:44,310,"$127,616.00","$101,600.00"
MIA - TUL,53492178588,MIA-FAR-TUL 2,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/53492178588,https://www.airlines-manager.com/aircraft/show/110883160,0:45,7:29,320,"$415,861.00","$374,420.00"
MIA - TUL,53492178589,MIA-FAR-TUL 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/53492178589,https://www.airlines-manager.com/aircraft/show/87169421,3:00,9:44,112,"$196,167.00","$172,043.00"
MIA - TUL,53516803661,MIA-FAR-TUL 3,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/53516803661,https://www.airlines-manager.com/aircraft/show/110883161,11:00,17:44,320,"$415,861.00","$374,420.00"
MIA - TUL,53526170881,MIA-FAR-TUL 4,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/53526170881,https://www.airlines-manager.com/aircraft/show/110883162,16:00,22:44,320,"$415,861.00","$374,420.00"
MIA - TUL,53531796541,MIA-FAR-TUL 1,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/53531796541,https://www.airlines-manager.com/aircraft/show/110883159,19:45,2:29,320,"$415,861.00","$374,420.00"
MIA - TUS,53492178567,MIA-IAD-TUS 3,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/53492178567,https://www.airlines-manager.com/aircraft/show/97556719,0:30,9:59,310,"$591,231.00","$542,626.00"
MIA - TUS,53511675221,MIA-IAD-TUS 2,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/53511675221,https://www.airlines-manager.com/aircraft/show/97556720,10:00,19:29,310,"$591,231.00","$542,626.00"
MIA - TUS,53521848649,MIA-IAD-TUS 5,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/53521848649,https://www.airlines-manager.com/aircraft/show/97556716,13:00,22:29,310,"$591,231.00","$542,626.00"
MIA - TUS,53526170872,MIA-IAD-TUS 1,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/53526170872,https://www.airlines-manager.com/aircraft/show/97556721,15:45,1:14,310,"$591,231.00","$542,626.00"
MIA - TUS,53531796435,MIA-IAD-TUS 4,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/53531796435,https://www.airlines-manager.com/aircraft/show/97556718,18:45,4:14,310,"$591,231.00","$542,626.00"
MIA - TYS,53492178894,MIA-CID-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/53492178894,https://www.airlines-manager.com/aircraft/show/116789650,3:30,8:29,310,"$314,403.00","$285,010.00"
MIA - TYS,53511675166,MIA-CID-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/53511675166,https://www.airlines-manager.com/aircraft/show/116789651,10:00,14:59,310,"$314,403.00","$285,010.00"
MIA - TYS,53521848793,MIA-CID-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/53521848793,https://www.airlines-manager.com/aircraft/show/116789652,14:45,19:44,310,"$314,403.00","$285,010.00"
MIA - TYS,53536307309,MIA-CID-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/53536307309,https://www.airlines-manager.com/aircraft/show/116789653,22:00,2:59,310,"$314,403.00","$285,010.00"
MIA - YUL,53505148735,MIA-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/53505148735,https://www.airlines-manager.com/aircraft/show/113101225,6:30,13:59,400,"$628,165.00","$573,858.00"
MIA - YUL,53516803607,MIA-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/53516803607,https://www.airlines-manager.com/aircraft/show/113101226,11:00,18:29,400,"$628,165.00","$573,858.00"
MIA - YUL,53521848828,MIA-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/53521848828,https://www.airlines-manager.com/aircraft/show/113101227,15:00,22:29,400,"$628,165.00","$573,858.00"
MIA - YUL,53540025489,MIA-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/53540025489,https://www.airlines-manager.com/aircraft/show/113101224,23:45,7:14,400,"$628,165.00","$573,858.00"
MIA - YVR,53516803611,MIA-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/53516803611,https://www.airlines-manager.com/aircraft/show/113101224,11:00,23:44,400,"$1,044,001.00","$959,355.00"
MIA - YVR,53521848762,MIA-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/53521848762,https://www.airlines-manager.com/aircraft/show/113101225,14:00,2:44,400,"$1,044,001.00","$959,355.00"
MIA - YVR,53531796408,MIA-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/53531796408,https://www.airlines-manager.com/aircraft/show/113101226,18:30,7:14,400,"$1,044,001.00","$959,355.00"
MIA - YVR,53540025386,MIA-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/53540025386,https://www.airlines-manager.com/aircraft/show/113101227,22:30,11:14,400,"$1,044,001.00","$959,355.00"
MIA - YYC,53492178438,MIA-SJC-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/53492178438,https://www.airlines-manager.com/aircraft/show/107763569,0:00,11:44,320,"$729,765.00","$661,169.00"
MIA - YYC,53492178439,MIA-SJC-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/53492178439,https://www.airlines-manager.com/aircraft/show/107763568,2:00,13:44,320,"$729,765.00","$661,169.00"
MIA - YYC,53492178440,MIA-SJC-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/53492178440,https://www.airlines-manager.com/aircraft/show/107763567,4:00,15:44,320,"$729,765.00","$661,169.00"
MIA - YYC,53516803745,MIA-SJC-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/53516803745,https://www.airlines-manager.com/aircraft/show/107763564,12:00,23:44,320,"$729,765.00","$661,169.00"
MIA - YYC,53521848712,MIA-SJC-YYC 5,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/53521848712,https://www.airlines-manager.com/aircraft/show/107763563,14:00,1:44,320,"$729,765.00","$661,169.00"
MIA - YYZ,53492178823,MIA-BWI-YYZ 3,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/53492178823,https://www.airlines-manager.com/aircraft/show/92153441,2:45,9:44,310,"$441,120.00","$394,380.00"
MIA - YYZ,53505148599,MIA-BWI-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/53505148599,https://www.airlines-manager.com/aircraft/show/92137503,4:45,11:44,136,"$191,110.00","$163,252.00"
MIA - YYZ,53511675184,MIA-BWI-YYZ 4,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/53511675184,https://www.airlines-manager.com/aircraft/show/92153442,10:00,16:59,310,"$441,120.00","$394,380.00"
MIA - YYZ,53516803772,MIA-BWI-YYZ 5,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/53516803772,https://www.airlines-manager.com/aircraft/show/92153439,12:00,18:59,310,"$441,120.00","$394,380.00"
MIA - YYZ,53526170862,MIA-BWI-YYZ 1,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/53526170862,https://www.airlines-manager.com/aircraft/show/92153443,15:45,22:44,310,"$441,120.00","$394,380.00"
MIA - YYZ,53531796434,MIA-BWI-YYZ 2,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/53531796434,https://www.airlines-manager.com/aircraft/show/92153440,18:45,1:44,310,"$441,120.00","$394,380.00"
SFO - ABQ,53511675080,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/53511675080,https://www.airlines-manager.com/aircraft/show/88239553,8:45,14:14,320,"$349,794.00","$309,743.00"
SFO - ABQ,53511675081,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/53511675081,https://www.airlines-manager.com/aircraft/show/105223003,8:45,14:14,198,"$265,648.00","$237,518.00"
SFO - ABQ,53511675082,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/53511675082,https://www.airlines-manager.com/aircraft/show/88239557,10:30,15:59,320,"$349,794.00","$309,743.00"
SFO - ABQ,53521848841,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/53521848841,https://www.airlines-manager.com/aircraft/show/88239555,15:00,20:29,320,"$349,794.00","$309,743.00"
SFO - ABQ,53540025426,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/53540025426,https://www.airlines-manager.com/aircraft/show/88239554,22:45,4:14,320,"$349,794.00","$309,743.00"
SFO - ALB,53492178559,SFO-ALB-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/53492178559,https://www.airlines-manager.com/aircraft/show/112650097,0:30,12:29,310,"$733,764.00","$677,600.00"
SFO - ALB,53505148669,SFO-ALB-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/53505148669,https://www.airlines-manager.com/aircraft/show/112650096,5:30,17:29,310,"$733,764.00","$677,600.00"
SFO - ALB,53505148670,SFO-ALB-CAK 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/53505148670,https://www.airlines-manager.com/aircraft/show/112650090,7:30,19:29,198,"$548,975.00","$503,934.00"
SFO - ALB,53521848765,SFO-ALB-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/53521848765,https://www.airlines-manager.com/aircraft/show/112650099,14:00,1:59,310,"$733,764.00","$677,600.00"
SFO - ALB,53531796347,SFO-ALB-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/53531796347,https://www.airlines-manager.com/aircraft/show/112650098,18:00,5:59,310,"$733,764.00","$677,600.00"
SFO - ANC,53492178809,SFO-BWI-ANC 4,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/53492178809,https://www.airlines-manager.com/aircraft/show/106255848,2:30,12:14,338,"$662,649.00","$614,605.00"
SFO - ANC,53492178810,SFO-BWI-ANC 5,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/53492178810,https://www.airlines-manager.com/aircraft/show/106255849,3:30,13:14,338,"$662,649.00","$614,605.00"
SFO - ANC,53531796449,SFO-BWI-ANC 1,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/53531796449,https://www.airlines-manager.com/aircraft/show/106255845,19:00,4:44,338,"$662,649.00","$614,605.00"
SFO - ANC,53531796450,SFO-BWI-ANC 2,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/53531796450,https://www.airlines-manager.com/aircraft/show/106255846,20:00,5:44,338,"$662,649.00","$614,605.00"
SFO - ANC,53536307234,SFO-BWI-ANC 3,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/53536307234,https://www.airlines-manager.com/aircraft/show/106255847,21:00,6:44,338,"$662,649.00","$614,605.00"
SFO - ATL,53505148751,SFO 84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/53505148751,https://www.airlines-manager.com/aircraft/show/86776210,6:45,16:29,932,"$1,616,492.00","$1,420,224.00"
SFO - ATL,53521848824,SFO-ATL-DFW S,A321-200,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/53521848824,https://www.airlines-manager.com/aircraft/show/106766698,15:00,1:29,232,"$628,938.00","$548,198.00"
SFO - ATL,53531796412,SFO 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/53531796412,https://www.airlines-manager.com/aircraft/show/85806724,18:30,4:14,853,"$1,518,842.00","$1,328,273.00"
SFO - ATL,53531796413,SFO-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/53531796413,https://www.airlines-manager.com/aircraft/show/107467212,20:00,6:29,56,"$233,404.00","$186,139.00"
SFO - AUS,53492178611,SFO-OGG-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/53492178611,https://www.airlines-manager.com/aircraft/show/92773481,0:45,8:44,310,"$500,986.00","$456,733.00"
SFO - AUS,53492178612,SFO-OGG-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/53492178612,https://www.airlines-manager.com/aircraft/show/92773480,2:45,10:44,310,"$500,986.00","$456,733.00"
SFO - AUS,53521848686,SFO-OGG-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/53521848686,https://www.airlines-manager.com/aircraft/show/92773479,13:30,21:29,310,"$500,986.00","$456,733.00"
SFO - AUS,53526170853,SFO-OGG-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/53526170853,https://www.airlines-manager.com/aircraft/show/92773478,15:30,23:29,310,"$500,986.00","$456,733.00"
SFO - AUS,53531796393,SFO-OGG-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/53531796393,https://www.airlines-manager.com/aircraft/show/92773477,18:30,2:29,310,"$500,986.00","$456,733.00"
SFO - BDL,53505148591,SFO-RSW-BDL 1,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/53505148591,https://www.airlines-manager.com/aircraft/show/84915098,4:45,16:59,320,"$741,734.00","$677,616.00"
SFO - BDL,53505148592,SFO-RSW-BDL 2,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/53505148592,https://www.airlines-manager.com/aircraft/show/84915099,6:45,18:59,320,"$741,734.00","$677,616.00"
SFO - BDL,53511675095,SFO-RSW-BDL 5,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/53511675095,https://www.airlines-manager.com/aircraft/show/84915102,8:45,20:59,320,"$741,734.00","$677,616.00"
SFO - BDL,53526171009,SFO-RSW-BDL 3,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/53526171009,https://www.airlines-manager.com/aircraft/show/84915100,17:00,5:14,320,"$741,734.00","$677,616.00"
SFO - BDL,53531796447,SFO-RSW-BDL 4,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/53531796447,https://www.airlines-manager.com/aircraft/show/84915101,19:00,7:14,320,"$741,734.00","$677,616.00"
SFO - BFF,53492178648,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/53492178648,https://www.airlines-manager.com/aircraft/show/114912306,1:00,7:14,112,"$183,580.00","$161,191.00"
SFO - BFF,53492178649,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/53492178649,https://www.airlines-manager.com/aircraft/show/114912268,2:15,8:29,310,"$389,607.00","$355,311.00"
SFO - BFF,53511675029,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/53511675029,https://www.airlines-manager.com/aircraft/show/114912263,8:15,14:29,310,"$389,607.00","$355,311.00"
SFO - BFF,53526170888,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/53526170888,https://www.airlines-manager.com/aircraft/show/114912264,16:00,22:14,310,"$389,607.00","$355,311.00"
SFO - BFF,53540025471,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/53540025471,https://www.airlines-manager.com/aircraft/show/114912267,23:30,5:44,310,"$389,607.00","$355,311.00"
SFO - BHM,53505148643,SFO-BHM-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/53505148643,https://www.airlines-manager.com/aircraft/show/117782568,5:30,15:29,320,"$621,859.00","$567,764.00"
SFO - BHM,53505148644,SFO-BHM-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/53505148644,https://www.airlines-manager.com/aircraft/show/117782569,7:00,16:59,320,"$621,859.00","$567,764.00"
SFO - BHM,53521848835,SFO-BHM-GRR 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/53521848835,https://www.airlines-manager.com/aircraft/show/117782583,15:00,0:59,198,"$468,047.00","$428,770.00"
SFO - BHM,53531796539,SFO-BHM-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/53531796539,https://www.airlines-manager.com/aircraft/show/117782567,19:45,5:44,320,"$621,859.00","$567,764.00"
SFO - BHM,53536307327,SFO-BHM-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/53536307327,https://www.airlines-manager.com/aircraft/show/117782566,22:00,7:59,320,"$621,859.00","$567,764.00"
SFO - BIL,53492178792,SFO-FAR-BIL 4,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/53492178792,https://www.airlines-manager.com/aircraft/show/117782587,2:15,7:59,310,"$355,725.00","$323,542.00"
SFO - BIL,53511675120,SFO-FAR-BIL 3,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/53511675120,https://www.airlines-manager.com/aircraft/show/117782586,9:15,14:59,310,"$355,725.00","$323,542.00"
SFO - BIL,53521848808,SFO-FAR-BIL 2,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/53521848808,https://www.airlines-manager.com/aircraft/show/117782585,15:00,20:44,310,"$355,725.00","$323,542.00"
SFO - BIL,53540025423,SFO-FAR-BIL 1,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/53540025423,https://www.airlines-manager.com/aircraft/show/117782584,22:45,4:29,307,"$353,713.00","$321,604.00"
SFO - BNA,53492178677,SFO-BNA-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/53492178677,https://www.airlines-manager.com/aircraft/show/103365580,1:15,10:59,320,"$605,610.00","$549,333.00"
SFO - BNA,53505148709,SFO-BNA-CMH 6,ERJ-175,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/53505148709,https://www.airlines-manager.com/aircraft/show/82323681,6:00,15:44,112,"$285,056.00","$251,196.00"
SFO - BNA,53521848665,SFO-BNA-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/53521848665,https://www.airlines-manager.com/aircraft/show/103365583,13:00,22:44,320,"$605,610.00","$549,333.00"
SFO - BNA,53521848666,SFO-BNA-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/53521848666,https://www.airlines-manager.com/aircraft/show/103365582,15:00,0:44,320,"$605,610.00","$549,333.00"
SFO - BNA,53526170874,SFO-BNA-CMH 5,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/53526170874,https://www.airlines-manager.com/aircraft/show/103365579,15:45,1:29,320,"$605,610.00","$549,333.00"
SFO - BNA,53540025454,SFO-BNA-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/53540025454,https://www.airlines-manager.com/aircraft/show/103365581,23:15,8:59,320,"$605,610.00","$549,333.00"
SFO - BOI,53492178670,SFO-CLE-MKE 2,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/53492178670,https://www.airlines-manager.com/aircraft/show/92519369,1:15,5:29,320,"$247,187.00","$216,452.00"
SFO - BOI,53511675141,SFO-CLE-MKE 1,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/53511675141,https://www.airlines-manager.com/aircraft/show/92519368,9:45,13:59,320,"$247,187.00","$216,452.00"
SFO - BOI,53521848798,SFO-CLE-MKE 4,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/53521848798,https://www.airlines-manager.com/aircraft/show/92519371,14:45,18:59,320,"$247,187.00","$216,452.00"
SFO - BOI,53526170925,SFO-CLE-MKE 3,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/53526170925,https://www.airlines-manager.com/aircraft/show/92519367,16:00,20:14,320,"$247,187.00","$216,452.00"
SFO - BOS,53492178545,SFO-BOS-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/53492178545,https://www.airlines-manager.com/aircraft/show/104864961,0:15,12:44,338,"$837,724.00","$774,367.00"
SFO - BOS,53516803748,SFO CARGO 2,737-700,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/53516803748,https://www.airlines-manager.com/aircraft/show/107573128,12:00,0:29,0,"$212,591.00","$161,688.00"
SFO - BOS,53521848587,SFO-BOS-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/53521848587,https://www.airlines-manager.com/aircraft/show/104901564,13:00,1:29,338,"$837,724.00","$774,367.00"
SFO - BOS,53521848588,SFO-BOS-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/53521848588,https://www.airlines-manager.com/aircraft/show/104870960,14:00,2:29,338,"$837,724.00","$774,367.00"
SFO - BOS,53526170861,SFO-BOS-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/53526170861,https://www.airlines-manager.com/aircraft/show/104874465,15:45,4:14,338,"$837,724.00","$774,367.00"
SFO - BOS,53536307168,SFO-BOS-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/53536307168,https://www.airlines-manager.com/aircraft/show/104901544,20:15,8:44,338,"$837,724.00","$774,367.00"
SFO - BTV,53492178416,SFO-BTV-LEX 4,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/53492178416,https://www.airlines-manager.com/aircraft/show/112650092,0:00,11:59,310,"$729,848.00","$673,863.00"
SFO - BTV,53505148722,SFO-BTV-LEX 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/53505148722,https://www.airlines-manager.com/aircraft/show/112650089,6:00,17:59,198,"$546,636.00","$501,737.00"
SFO - BTV,53521848705,SFO-BTV-LEX 1,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/53521848705,https://www.airlines-manager.com/aircraft/show/112650095,14:00,1:59,310,"$729,848.00","$673,863.00"
SFO - BTV,53531796328,SFO-BTV-LEX 2,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/53531796328,https://www.airlines-manager.com/aircraft/show/112650094,18:00,5:59,310,"$729,848.00","$673,863.00"
SFO - BTV,53531796329,SFO-BTV-LEX 3,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/53531796329,https://www.airlines-manager.com/aircraft/show/112650093,20:00,7:59,310,"$729,848.00","$673,863.00"
SFO - BUF,53492178706,SFO-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/53492178706,https://www.airlines-manager.com/aircraft/show/112650108,1:30,12:29,310,"$687,067.00","$633,609.00"
SFO - BUF,53505148647,SFO-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/53505148647,https://www.airlines-manager.com/aircraft/show/112650107,5:30,16:29,310,"$687,067.00","$633,609.00"
SFO - BUF,53505148648,SFO-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/53505148648,https://www.airlines-manager.com/aircraft/show/112650106,7:30,18:29,310,"$687,067.00","$633,609.00"
SFO - BUF,53521848599,SFO-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/53521848599,https://www.airlines-manager.com/aircraft/show/112650105,13:00,23:59,310,"$687,067.00","$633,609.00"
SFO - BUF,53531796348,SFO-PVD-BUF 5,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/53531796348,https://www.airlines-manager.com/aircraft/show/112650104,18:00,4:59,310,"$687,067.00","$633,609.00"
SFO - BUR,53492178793,SFO-SAV-JAN 1,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/53492178793,https://www.airlines-manager.com/aircraft/show/114912265,2:15,5:44,310,"$173,461.00","$150,951.00"
SFO - BUR,53492178794,SFO-SAV-JAN 4,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/53492178794,https://www.airlines-manager.com/aircraft/show/114912270,4:15,7:44,310,"$173,461.00","$150,951.00"
SFO - BUR,53516803711,SFO-SAV-JAN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/53516803711,https://www.airlines-manager.com/aircraft/show/114917486,11:30,14:59,198,"$130,719.00","$112,697.00"
SFO - BUR,53526170851,SFO-SAV-JAN 3,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/53526170851,https://www.airlines-manager.com/aircraft/show/114912269,15:30,18:59,310,"$173,461.00","$150,951.00"
SFO - BUR,53526170852,SFO-SAV-JAN 2,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/53526170852,https://www.airlines-manager.com/aircraft/show/114912266,17:00,20:29,310,"$173,461.00","$150,951.00"
SFO - BWI,53492178572,SFO CARGO 2,737-700,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/53492178572,https://www.airlines-manager.com/aircraft/show/107573128,0:30,11:59,0,"$197,440.00","$150,701.00"
SFO - BWI,53505148593,SFO-BWI-ANC 1,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/53505148593,https://www.airlines-manager.com/aircraft/show/106255845,4:45,16:14,338,"$785,039.00","$726,656.00"
SFO - BWI,53505148594,SFO-BWI-ANC 2,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/53505148594,https://www.airlines-manager.com/aircraft/show/106255846,5:45,17:14,338,"$785,039.00","$726,656.00"
SFO - BWI,53505148595,SFO-BWI-ANC 3,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/53505148595,https://www.airlines-manager.com/aircraft/show/106255847,6:45,18:14,338,"$785,039.00","$726,656.00"
SFO - BWI,53521848818,SFO-BWI-ANC 4,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/53521848818,https://www.airlines-manager.com/aircraft/show/106255848,15:00,2:29,338,"$785,039.00","$726,656.00"
SFO - BWI,53526170922,SFO-BWI-ANC 5,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/53526170922,https://www.airlines-manager.com/aircraft/show/106255849,16:00,3:29,338,"$785,039.00","$726,656.00"
SFO - CAK,53492178762,SFO-ALB-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/53492178762,https://www.airlines-manager.com/aircraft/show/112650099,2:00,12:29,310,"$657,886.00","$607,712.00"
SFO - CAK,53505148708,SFO-ALB-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/53505148708,https://www.airlines-manager.com/aircraft/show/112650098,6:00,16:29,310,"$657,886.00","$607,712.00"
SFO - CAK,53521848764,SFO-ALB-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/53521848764,https://www.airlines-manager.com/aircraft/show/112650097,14:00,0:29,310,"$657,886.00","$607,712.00"
SFO - CAK,53531796462,SFO-ALB-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/53531796462,https://www.airlines-manager.com/aircraft/show/112650096,19:00,5:29,310,"$657,886.00","$607,712.00"
SFO - CAK,53536307243,SFO-ALB-CAK 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/53536307243,https://www.airlines-manager.com/aircraft/show/112650090,21:00,7:29,198,"$494,289.00","$454,056.00"
SFO - CHS,53492178698,SFO-MHT-CHS 1,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/53492178698,https://www.airlines-manager.com/aircraft/show/114917465,1:30,12:44,320,"$701,616.00","$642,467.00"
SFO - CHS,53505148668,SFO-MHT-CHS 2,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/53505148668,https://www.airlines-manager.com/aircraft/show/114917464,5:30,16:44,320,"$701,616.00","$642,467.00"
SFO - CHS,53511675045,SFO-MHT-CHS 5 B,A319-100,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/53511675045,https://www.airlines-manager.com/aircraft/show/114912262,8:30,19:59,198,"$529,189.00","$485,932.00"
SFO - CHS,53521848635,SFO-MHT-CHS 3,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/53521848635,https://www.airlines-manager.com/aircraft/show/114917463,13:00,0:14,320,"$701,616.00","$642,467.00"
SFO - CHS,53526170997,SFO-MHT-CHS 4,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/53526170997,https://www.airlines-manager.com/aircraft/show/114266973,17:00,4:14,320,"$701,616.00","$642,467.00"
SFO - CID,53492178694,SFO-YEG-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/53492178694,https://www.airlines-manager.com/aircraft/show/117782561,1:30,9:59,320,"$528,124.00","$481,175.00"
SFO - CID,53505148731,SFO-YEG-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/53505148731,https://www.airlines-manager.com/aircraft/show/116932364,6:30,14:59,320,"$528,124.00","$481,175.00"
SFO - CID,53521848548,SFO-YEG-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/53521848548,https://www.airlines-manager.com/aircraft/show/117782559,13:00,21:29,320,"$528,124.00","$481,175.00"
SFO - CID,53531796444,SFO-YEG-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/53531796444,https://www.airlines-manager.com/aircraft/show/117782560,19:00,3:29,320,"$528,124.00","$481,175.00"
SFO - CID,53536307242,SFO-YEG-YYC 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/53536307242,https://www.airlines-manager.com/aircraft/show/117782581,21:00,5:29,198,"$399,077.00","$365,143.00"
SFO - CLE,53505148660,SFO-CLE-MKE 2,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/53505148660,https://www.airlines-manager.com/aircraft/show/92519369,5:30,15:59,320,"$650,843.00","$593,124.00"
SFO - CLE,53505148661,SFO-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/53505148661,https://www.airlines-manager.com/aircraft/show/107467212,6:30,16:59,112,"$305,917.00","$270,776.00"
SFO - CLE,53505148662,SFO-CLE-MKE 5,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/53505148662,https://www.airlines-manager.com/aircraft/show/92519370,7:30,17:59,320,"$650,843.00","$593,124.00"
SFO - CLE,53521848759,SFO-CLE-MKE 1,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/53521848759,https://www.airlines-manager.com/aircraft/show/92519368,14:00,0:29,320,"$650,843.00","$593,124.00"
SFO - CLE,53531796455,SFO-CLE-MKE 4,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/53531796455,https://www.airlines-manager.com/aircraft/show/92519371,19:00,5:29,320,"$650,843.00","$593,124.00"
SFO - CLE,53536307170,SFO-CLE-MKE 3,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/53536307170,https://www.airlines-manager.com/aircraft/show/92519367,20:15,6:44,320,"$650,843.00","$593,124.00"
SFO - CLT,53492178425,SFO-IAD-CLT 3,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/53492178425,https://www.airlines-manager.com/aircraft/show/96135563,0:00,10:44,400,"$889,119.00","$809,154.00"
SFO - CLT,53505148714,SFO-IAD-CLT 4,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/53505148714,https://www.airlines-manager.com/aircraft/show/96135562,6:00,16:44,400,"$889,119.00","$809,154.00"
SFO - CLT,53521848675,SFO-IAD-CLT 1,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/53521848675,https://www.airlines-manager.com/aircraft/show/96135565,13:15,23:59,400,"$889,119.00","$809,154.00"
SFO - CLT,53526170839,SFO-IAD-CLT 5,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/53526170839,https://www.airlines-manager.com/aircraft/show/96135561,15:15,1:59,400,"$889,119.00","$809,154.00"
SFO - CLT,53526170840,SFO-IAD-CLT 2,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/53526170840,https://www.airlines-manager.com/aircraft/show/96135564,17:15,3:59,400,"$889,119.00","$809,154.00"
SFO - CMH,53492178614,SFO-BNA-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/53492178614,https://www.airlines-manager.com/aircraft/show/103365582,0:45,10:59,320,"$635,712.00","$578,415.00"
SFO - CMH,53505148666,SFO-BNA-CMH 5,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/53505148666,https://www.airlines-manager.com/aircraft/show/103365579,5:30,15:44,320,"$635,712.00","$578,415.00"
SFO - CMH,53521848667,SFO-BNA-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/53521848667,https://www.airlines-manager.com/aircraft/show/103365581,13:00,23:14,320,"$635,712.00","$578,415.00"
SFO - CMH,53521848668,SFO-BNA-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/53521848668,https://www.airlines-manager.com/aircraft/show/103365580,15:00,1:14,320,"$635,712.00","$578,415.00"
SFO - CMH,53526170859,SFO-BNA-CMH 6,ERJ-175,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/53526170859,https://www.airlines-manager.com/aircraft/show/82323681,15:45,1:59,112,"$299,378.00","$264,568.00"
SFO - CMH,53540025427,SFO-BNA-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/53540025427,https://www.airlines-manager.com/aircraft/show/103365583,22:45,8:59,320,"$635,712.00","$578,415.00"
SFO - CVG,53505148630,SFO-IND-CVG 3,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/53505148630,https://www.airlines-manager.com/aircraft/show/99316504,5:00,14:59,310,"$627,255.00","$574,228.00"
SFO - CVG,53505148631,SFO-IND-CVG 5,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/53505148631,https://www.airlines-manager.com/aircraft/show/99316502,7:00,16:59,310,"$627,255.00","$574,228.00"
SFO - CVG,53521848557,SFO-IND-CVG 2,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/53521848557,https://www.airlines-manager.com/aircraft/show/99316505,13:00,22:59,310,"$627,255.00","$574,228.00"
SFO - CVG,53521848558,SFO-IND-CVG 4,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/53521848558,https://www.airlines-manager.com/aircraft/show/99316503,15:00,0:59,310,"$627,255.00","$574,228.00"
SFO - CVG,53526171005,SFO-IND-CVG 6,ERJ-175,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/53526171005,https://www.airlines-manager.com/aircraft/show/99174346,17:00,2:59,112,"$294,167.00","$258,804.00"
SFO - CVG,53540025417,SFO-IND-CVG 1,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/53540025417,https://www.airlines-manager.com/aircraft/show/99316506,22:45,8:44,310,"$627,255.00","$574,228.00"
SFO - DEL,53492178428,SFO 168B-5 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/53492178428,https://www.airlines-manager.com/aircraft/show/87933799,0:00,5:29,1046,"$5,781,072.00","$5,362,503.00"
SFO - DEL,53492178429,SFO 168A-5 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/53492178429,https://www.airlines-manager.com/aircraft/show/86808589,2:00,7:29,1046,"$5,781,072.00","$5,362,503.00"
SFO - DEN,53492178525,SFO-IAH-MEX 5,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/53492178525,https://www.airlines-manager.com/aircraft/show/101045335,0:15,5:59,400,"$473,056.00","$405,092.00"
SFO - DEN,53505148739,SFO-IAH-MEX 1,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/53505148739,https://www.airlines-manager.com/aircraft/show/101045339,6:30,12:14,400,"$473,056.00","$405,092.00"
SFO - DEN,53511675071,SFO-IAH-MEX 4,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/53511675071,https://www.airlines-manager.com/aircraft/show/101045336,8:30,14:14,400,"$473,056.00","$405,092.00"
SFO - DEN,53521848565,SFO-IAH-MEX 3,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/53521848565,https://www.airlines-manager.com/aircraft/show/101045337,13:00,18:44,400,"$473,056.00","$405,092.00"
SFO - DEN,53536307337,SFO-IAH-MEX 2,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/53536307337,https://www.airlines-manager.com/aircraft/show/101045338,22:15,3:59,376,"$456,354.00","$388,991.00"
SFO - DFW,53492178716,SFO-ATL-DFW S,A321-200,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/53492178716,https://www.airlines-manager.com/aircraft/show/106766698,1:30,9:14,232,"$481,033.00","$419,800.00"
SFO - DFW,53526170971,SFO 84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/53526170971,https://www.airlines-manager.com/aircraft/show/86776210,16:30,23:59,932,"$1,227,311.00","$1,082,216.00"
SFO - DFW,53540025456,SFO 84A-2 E1,777-300,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/53540025456,https://www.airlines-manager.com/aircraft/show/86776211,23:15,6:44,738,"$1,046,514.00","$911,001.00"
SFO - DSM,53505148561,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/53505148561,https://www.airlines-manager.com/aircraft/show/108410858,4:30,12:29,320,"$506,531.00","$460,693.00"
SFO - DSM,53521848615,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/53521848615,https://www.airlines-manager.com/aircraft/show/108410857,13:00,20:59,320,"$506,531.00","$460,693.00"
SFO - DSM,53521848616,SFO-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/53521848616,https://www.airlines-manager.com/aircraft/show/108466264,15:00,23:14,112,"$239,963.00","$212,542.00"
SFO - DSM,53540025412,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/53540025412,https://www.airlines-manager.com/aircraft/show/108410856,22:45,6:44,320,"$506,531.00","$460,693.00"
SFO - DSM,53540025413,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/53540025413,https://www.airlines-manager.com/aircraft/show/108410859,23:30,7:29,320,"$506,531.00","$460,693.00"
SFO - DTW,53505148571,SFO-ORD-DTW 4,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/53505148571,https://www.airlines-manager.com/aircraft/show/101045331,4:30,14:29,400,"$819,690.00","$744,567.00"
SFO - DTW,53505148572,SFO-ORD-DTW 3,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/53505148572,https://www.airlines-manager.com/aircraft/show/101045332,5:00,14:59,400,"$819,690.00","$744,567.00"
SFO - DTW,53521848817,SFO-ORD-DTW 2,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/53521848817,https://www.airlines-manager.com/aircraft/show/101045333,15:00,0:59,400,"$819,690.00","$744,567.00"
SFO - DTW,53526171001,SFO-ORD-DTW 5,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/53526171001,https://www.airlines-manager.com/aircraft/show/101045330,17:00,2:59,400,"$819,690.00","$744,567.00"
SFO - DTW,53536307331,SFO-ORD-DTW 1,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/53536307331,https://www.airlines-manager.com/aircraft/show/101045334,22:00,7:59,400,"$819,690.00","$744,567.00"
SFO - DXB,53505148664,SFO 168B-6 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/53505148664,https://www.airlines-manager.com/aircraft/show/87083947,5:30,12:29,1046,"$5,983,901.00","$5,518,713.00"
SFO - DXB,53505148665,SFO 168A-6 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/53505148665,https://www.airlines-manager.com/aircraft/show/88032836,7:30,14:29,1046,"$5,983,901.00","$5,518,713.00"
SFO - ELP,53505148688,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/53505148688,https://www.airlines-manager.com/aircraft/show/114912267,5:45,11:44,310,"$374,706.00","$339,934.00"
SFO - ELP,53505148689,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/53505148689,https://www.airlines-manager.com/aircraft/show/114912306,7:15,13:14,112,"$177,463.00","$154,869.00"
SFO - ELP,53511675076,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/53511675076,https://www.airlines-manager.com/aircraft/show/114912268,8:30,14:29,310,"$374,706.00","$339,934.00"
SFO - ELP,53521848832,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/53521848832,https://www.airlines-manager.com/aircraft/show/114912263,15:00,20:59,310,"$374,706.00","$339,934.00"
SFO - ELP,53536307339,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/53536307339,https://www.airlines-manager.com/aircraft/show/114912264,22:15,4:14,310,"$374,706.00","$339,934.00"
SFO - EUG,53492178750,SFO-BHM-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/53492178750,https://www.airlines-manager.com/aircraft/show/117782568,1:45,5:29,320,"$216,870.00","$188,838.00"
SFO - EUG,53492178751,SFO-BHM-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/53492178751,https://www.airlines-manager.com/aircraft/show/117782569,3:15,6:59,320,"$216,870.00","$188,838.00"
SFO - EUG,53526170883,SFO-BHM-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/53526170883,https://www.airlines-manager.com/aircraft/show/117782567,16:00,19:44,320,"$216,870.00","$188,838.00"
SFO - EUG,53531796317,SFO-BHM-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/53531796317,https://www.airlines-manager.com/aircraft/show/117782566,17:45,21:29,264,"$193,828.00","$166,475.00"
SFO - FAR,53492178622,SFO-FAR-BIL 3,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/53492178622,https://www.airlines-manager.com/aircraft/show/117782586,1:00,8:44,310,"$489,736.00","$450,231.00"
SFO - FAR,53505148775,SFO-FAR-BIL 2,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/53505148775,https://www.airlines-manager.com/aircraft/show/117782585,7:15,14:59,310,"$489,736.00","$450,231.00"
SFO - FAR,53521848813,SFO-FAR-BIL 1,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/53521848813,https://www.airlines-manager.com/aircraft/show/117782584,15:00,22:44,310,"$489,736.00","$450,231.00"
SFO - FAR,53531796409,SFO-FAR-BIL 4,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/53531796409,https://www.airlines-manager.com/aircraft/show/117782587,18:30,2:14,310,"$489,736.00","$450,231.00"
SFO - FAT,53492178764,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/53492178764,https://www.airlines-manager.com/aircraft/show/108410857,2:00,4:44,320,"$95,282.00","$71,086.00"
SFO - FAT,53516803721,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/53516803721,https://www.airlines-manager.com/aircraft/show/108410856,11:45,14:29,320,"$95,282.00","$71,086.00"
SFO - FAT,53521848650,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/53521848650,https://www.airlines-manager.com/aircraft/show/108410859,13:00,15:44,320,"$95,282.00","$71,086.00"
SFO - FAT,53531796337,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/53531796337,https://www.airlines-manager.com/aircraft/show/108410858,18:00,20:44,320,"$95,282.00","$71,086.00"
SFO - FAT,53540025451,SFO-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/53540025451,https://www.airlines-manager.com/aircraft/show/108466264,23:15,1:59,66,"$33,258.00","$21,014.00"
SFO - FLL,53492178538,SFO-FLL-TPA 2,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/53492178538,https://www.airlines-manager.com/aircraft/show/97955543,0:15,12:14,320,"$736,216.00","$668,188.00"
SFO - FLL,53492178539,SFO-FLL-TPA 4,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/53492178539,https://www.airlines-manager.com/aircraft/show/97955541,4:15,16:14,320,"$736,216.00","$668,188.00"
SFO - FLL,53505148778,SFO-FLL-TPA 6 B,A319-100,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/53505148778,https://www.airlines-manager.com/aircraft/show/97900729,7:30,19:44,198,"$553,648.00","$504,169.00"
SFO - FLL,53521848651,SFO-FLL-TPA 1,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/53521848651,https://www.airlines-manager.com/aircraft/show/97955544,13:00,0:59,320,"$736,216.00","$668,188.00"
SFO - FLL,53526171010,SFO-FLL-TPA 3,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/53526171010,https://www.airlines-manager.com/aircraft/show/97955542,17:00,4:59,320,"$736,216.00","$668,188.00"
SFO - FLL,53531796609,SFO-FLL-TPA 5,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/53531796609,https://www.airlines-manager.com/aircraft/show/97955540,20:00,7:59,320,"$736,216.00","$668,188.00"
SFO - FSD,53492178554,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/53492178554,https://www.airlines-manager.com/aircraft/show/107160378,0:30,7:59,320,"$469,831.00","$426,549.00"
SFO - FSD,53492178555,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/53492178555,https://www.airlines-manager.com/aircraft/show/107132310,2:00,9:29,112,"$222,435.00","$196,716.00"
SFO - FSD,53492178556,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/53492178556,https://www.airlines-manager.com/aircraft/show/107160381,3:00,10:29,320,"$469,831.00","$426,549.00"
SFO - FSD,53505148802,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/53505148802,https://www.airlines-manager.com/aircraft/show/107160380,8:00,15:29,320,"$469,831.00","$426,549.00"
SFO - FSD,53526170919,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/53526170919,https://www.airlines-manager.com/aircraft/show/107160379,16:00,23:29,284,"$437,296.00","$395,370.00"
SFO - GRR,53492178654,SFO-BHM-GRR 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/53492178654,https://www.airlines-manager.com/aircraft/show/117782583,1:00,10:44,198,"$456,419.00","$417,968.00"
SFO - GRR,53505148681,SFO-BHM-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/53505148681,https://www.airlines-manager.com/aircraft/show/117782567,5:45,15:29,320,"$605,707.00","$552,735.00"
SFO - GRR,53505148682,SFO-BHM-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/53505148682,https://www.airlines-manager.com/aircraft/show/117782566,8:00,17:44,320,"$605,707.00","$552,735.00"
SFO - GRR,53526170884,SFO-BHM-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/53526170884,https://www.airlines-manager.com/aircraft/show/117782568,16:00,1:44,320,"$605,707.00","$552,735.00"
SFO - GRR,53531796280,SFO-BHM-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/53531796280,https://www.airlines-manager.com/aircraft/show/117782569,17:30,3:14,320,"$605,707.00","$552,735.00"
SFO - HKG,53536307266,SFO 168B-3 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/53536307266,https://www.airlines-manager.com/aircraft/show/87566902,21:15,23:59,1046,"$5,253,940.00","$4,855,351.00"
SFO - HKG,53540025463,SFO 168A-3 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/53540025463,https://www.airlines-manager.com/aircraft/show/86483501,23:15,1:59,1046,"$5,253,940.00","$4,855,351.00"
SFO - IAD,53492178423,SFO-IAD-CLT 1,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/53492178423,https://www.airlines-manager.com/aircraft/show/96135565,0:00,11:14,400,"$907,937.00","$829,919.00"
SFO - IAD,53492178424,SFO-IAD-CLT 5,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/53492178424,https://www.airlines-manager.com/aircraft/show/96135561,4:00,15:14,400,"$907,937.00","$829,919.00"
SFO - IAD,53505148706,SFO-IAD-CLT 2,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/53505148706,https://www.airlines-manager.com/aircraft/show/96135564,6:00,17:14,400,"$907,937.00","$829,919.00"
SFO - IAD,53516803786,SFO-IAD-CLT 3,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/53516803786,https://www.airlines-manager.com/aircraft/show/96135563,12:45,23:59,400,"$907,937.00","$829,919.00"
SFO - IAD,53526170972,SFO-IAD-CLT 4,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/53526170972,https://www.airlines-manager.com/aircraft/show/96135562,16:45,3:59,400,"$907,937.00","$829,919.00"
SFO - IAH,53505148582,SFO-IAH-MEX 2,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/53505148582,https://www.airlines-manager.com/aircraft/show/101045338,4:45,12:59,400,"$691,517.00","$621,709.00"
SFO - IAH,53505148583,SFO-IAH-MEX 5,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/53505148583,https://www.airlines-manager.com/aircraft/show/101045335,6:45,14:59,400,"$691,517.00","$621,709.00"
SFO - IAH,53521848562,SFO-IAH-MEX 1,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/53521848562,https://www.airlines-manager.com/aircraft/show/101045339,13:00,21:14,400,"$691,517.00","$621,709.00"
SFO - IAH,53521848563,SFO-IAH-MEX 4,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/53521848563,https://www.airlines-manager.com/aircraft/show/101045336,15:00,23:14,400,"$691,517.00","$621,709.00"
SFO - IAH,53531796517,SFO-IAH-MEX 3,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/53531796517,https://www.airlines-manager.com/aircraft/show/101045337,19:30,3:44,400,"$691,517.00","$621,709.00"
SFO - ICN,53492178491,SFO 84A-2 E1,777-300,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/53492178491,https://www.airlines-manager.com/aircraft/show/86776211,0:15,22:44,932,"$3,589,018.00","$3,238,995.00"
SFO - ICN,53521848624,SFO-ICN B,787-10,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/53521848624,https://www.airlines-manager.com/aircraft/show/110213648,13:00,10:59,592,"$2,626,537.00","$2,428,664.00"
SFO - ICN,53531796623,SFO 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/53531796623,https://www.airlines-manager.com/aircraft/show/85537213,20:00,18:29,865,"$3,400,628.00","$3,063,392.00"
SFO - ICT,53492178594,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/53492178594,https://www.airlines-manager.com/aircraft/show/114912263,0:45,8:14,310,"$467,206.00","$428,071.00"
SFO - ICT,53505148794,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/53505148794,https://www.airlines-manager.com/aircraft/show/114912264,8:00,15:29,310,"$467,206.00","$428,071.00"
SFO - ICT,53526170889,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/53526170889,https://www.airlines-manager.com/aircraft/show/114912267,16:00,23:29,310,"$467,206.00","$428,071.00"
SFO - ICT,53531796295,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/53531796295,https://www.airlines-manager.com/aircraft/show/114912306,17:30,0:59,112,"$220,592.00","$194,736.00"
SFO - ICT,53531796296,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/53531796296,https://www.airlines-manager.com/aircraft/show/114912268,18:45,2:14,310,"$467,206.00","$428,071.00"
SFO - IND,53505148636,SFO-IND-CVG 4,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/53505148636,https://www.airlines-manager.com/aircraft/show/99316503,5:15,14:59,310,"$602,937.00","$552,887.00"
SFO - IND,53505148637,SFO-IND-CVG 6,ERJ-175,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/53505148637,https://www.airlines-manager.com/aircraft/show/99174346,7:15,16:59,112,"$283,094.00","$249,680.00"
SFO - IND,53521848604,SFO-IND-CVG 1,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/53521848604,https://www.airlines-manager.com/aircraft/show/99316506,13:00,22:44,310,"$602,937.00","$552,887.00"
SFO - IND,53521848605,SFO-IND-CVG 3,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/53521848605,https://www.airlines-manager.com/aircraft/show/99316504,15:00,0:44,310,"$602,937.00","$552,887.00"
SFO - IND,53526171006,SFO-IND-CVG 5,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/53526171006,https://www.airlines-manager.com/aircraft/show/99316502,17:00,2:44,310,"$602,937.00","$552,887.00"
SFO - IND,53540025444,SFO-IND-CVG 2,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/53540025444,https://www.airlines-manager.com/aircraft/show/99316505,23:00,8:44,310,"$602,937.00","$552,887.00"
SFO - JAN,53492178796,SFO-SAV-JAN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/53492178796,https://www.airlines-manager.com/aircraft/show/114917486,2:15,11:29,198,"$437,594.00","$401,149.00"
SFO - JAN,53505148723,SFO-SAV-JAN 3,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/53505148723,https://www.airlines-manager.com/aircraft/show/114912269,6:15,15:29,310,"$581,341.00","$535,884.00"
SFO - JAN,53505148724,SFO-SAV-JAN 2,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/53505148724,https://www.airlines-manager.com/aircraft/show/114912266,7:45,16:59,310,"$581,341.00","$535,884.00"
SFO - JAN,53526170999,SFO-SAV-JAN 1,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/53526170999,https://www.airlines-manager.com/aircraft/show/114912265,17:00,2:14,310,"$581,341.00","$535,884.00"
SFO - JAN,53531796465,SFO-SAV-JAN 4,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/53531796465,https://www.airlines-manager.com/aircraft/show/114912270,19:00,4:14,310,"$581,341.00","$535,884.00"
SFO - JAX,53505148701,SFO-JAX-SAT 5,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/53505148701,https://www.airlines-manager.com/aircraft/show/86377315,6:00,17:14,310,"$701,478.00","$646,409.00"
SFO - JAX,53521848656,SFO-JAX-SAT 1,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/53521848656,https://www.airlines-manager.com/aircraft/show/86375568,13:00,0:14,310,"$701,478.00","$646,409.00"
SFO - JAX,53521848657,SFO-JAX-SAT 2,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/53521848657,https://www.airlines-manager.com/aircraft/show/86371267,15:00,2:14,310,"$701,478.00","$646,409.00"
SFO - JAX,53536307252,SFO-JAX-SAT 3,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/53536307252,https://www.airlines-manager.com/aircraft/show/86385102,21:00,8:14,310,"$701,478.00","$646,409.00"
SFO - JAX,53540025441,SFO-JAX-SAT 4,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/53540025441,https://www.airlines-manager.com/aircraft/show/86378760,23:00,10:14,310,"$701,478.00","$646,409.00"
SFO - JFK,53492178646,SFO-MIA-JFK 4,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/53492178646,https://www.airlines-manager.com/aircraft/show/89233034,1:00,12:59,400,"$960,740.00","$862,242.00"
SFO - JFK,53505148761,SFO-MIA-JFK 5,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/53505148761,https://www.airlines-manager.com/aircraft/show/89233035,7:00,18:59,400,"$960,740.00","$862,242.00"
SFO - JFK,53521848601,SFO-MIA-JFK 1,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/53521848601,https://www.airlines-manager.com/aircraft/show/89233032,13:00,0:59,400,"$960,740.00","$862,242.00"
SFO - JFK,53526170944,SFO-MIA-JFK 2,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/53526170944,https://www.airlines-manager.com/aircraft/show/84622093,16:00,3:59,400,"$960,740.00","$862,242.00"
SFO - JFK,53531796448,SFO-MIA-JFK 3,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/53531796448,https://www.airlines-manager.com/aircraft/show/89233031,19:00,6:59,400,"$960,740.00","$862,242.00"
SFO - KOA,53492178843,SFO-KOA-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/53492178843,https://www.airlines-manager.com/aircraft/show/112650101,2:45,13:59,310,"$702,530.00","$647,658.00"
SFO - KOA,53505148589,SFO-KOA-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/53505148589,https://www.airlines-manager.com/aircraft/show/112650100,4:45,15:59,310,"$702,530.00","$647,658.00"
SFO - KOA,53521848644,SFO-KOA-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/53521848644,https://www.airlines-manager.com/aircraft/show/112650091,13:00,0:14,198,"$527,337.00","$483,338.00"
SFO - KOA,53526170990,SFO-KOA-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/53526170990,https://www.airlines-manager.com/aircraft/show/112650103,17:00,4:14,310,"$702,530.00","$647,658.00"
SFO - KOA,53531796624,SFO-KOA-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/53531796624,https://www.airlines-manager.com/aircraft/show/112650102,20:00,7:14,310,"$702,530.00","$647,658.00"
SFO - LAS,53505148694,SFO-BOS-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/53505148694,https://www.airlines-manager.com/aircraft/show/104901564,6:00,9:44,338,"$216,975.00","$178,282.00"
SFO - LAS,53505148695,SFO-BOS-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/53505148695,https://www.airlines-manager.com/aircraft/show/104870960,7:00,10:44,338,"$216,975.00","$178,282.00"
SFO - LAS,53516803752,SFO CARGO 1,737-700,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/53516803752,https://www.airlines-manager.com/aircraft/show/107343113,12:00,15:44,0,"$55,783.00","$30,593.00"
SFO - LAS,53516803753,SFO-BOS-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/53516803753,https://www.airlines-manager.com/aircraft/show/104874465,12:00,15:44,338,"$216,975.00","$178,282.00"
SFO - LAS,53526170956,SFO-BOS-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/53526170956,https://www.airlines-manager.com/aircraft/show/104901544,16:30,20:14,338,"$216,975.00","$178,282.00"
SFO - LAS,53536307195,SFO-BOS-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/53536307195,https://www.airlines-manager.com/aircraft/show/104864961,20:30,0:14,338,"$216,975.00","$178,282.00"
SFO - LAX,53492178768,SFO-PHL-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/53492178768,https://www.airlines-manager.com/aircraft/show/97900730,2:00,5:29,198,"$133,274.00","$101,260.00"
SFO - LAX,53505148566,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/53505148566,https://www.airlines-manager.com/aircraft/show/92390872,4:30,7:59,320,"$175,700.00","$128,489.00"
SFO - LAX,53505148567,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/53505148567,https://www.airlines-manager.com/aircraft/show/92390869,7:30,10:59,320,"$175,700.00","$128,489.00"
SFO - LAX,53511675043,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/53511675043,https://www.airlines-manager.com/aircraft/show/92390870,8:15,11:44,320,"$175,700.00","$128,489.00"
SFO - LAX,53516803767,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/53516803767,https://www.airlines-manager.com/aircraft/show/92390873,12:00,15:29,320,"$175,700.00","$128,489.00"
SFO - LAX,53526170975,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/53526170975,https://www.airlines-manager.com/aircraft/show/92390871,16:45,20:14,320,"$175,700.00","$128,489.00"
SFO - LEX,53492178765,SFO-BTV-LEX 1,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/53492178765,https://www.airlines-manager.com/aircraft/show/112650095,2:00,11:59,310,"$622,836.00","$575,388.00"
SFO - LEX,53505148704,SFO-BTV-LEX 2,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/53505148704,https://www.airlines-manager.com/aircraft/show/112650094,6:00,15:59,310,"$622,836.00","$575,388.00"
SFO - LEX,53505148705,SFO-BTV-LEX 3,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/53505148705,https://www.airlines-manager.com/aircraft/show/112650093,8:00,17:59,310,"$622,836.00","$575,388.00"
SFO - LEX,53521848763,SFO-BTV-LEX 4,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/53521848763,https://www.airlines-manager.com/aircraft/show/112650092,14:00,23:59,310,"$622,836.00","$575,388.00"
SFO - LEX,53531796625,SFO-BTV-LEX 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/53531796625,https://www.airlines-manager.com/aircraft/show/112650089,20:00,5:59,198,"$468,601.00","$430,555.00"
SFO - LGB,53492178868,SFO-FAR-BIL 2,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/53492178868,https://www.airlines-manager.com/aircraft/show/117782585,3:15,6:44,310,"$180,890.00","$156,791.00"
SFO - LGB,53516803620,SFO-FAR-BIL 1,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/53516803620,https://www.airlines-manager.com/aircraft/show/117782584,11:00,14:29,310,"$180,890.00","$156,791.00"
SFO - LGB,53521848821,SFO-FAR-BIL 4,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/53521848821,https://www.airlines-manager.com/aircraft/show/117782587,15:00,18:29,310,"$180,890.00","$156,791.00"
SFO - LGB,53536307278,SFO-FAR-BIL 3,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/53536307278,https://www.airlines-manager.com/aircraft/show/117782586,21:30,0:59,310,"$180,890.00","$156,791.00"
SFO - LIT,53492178788,SFO-SDF-LIT 3,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/53492178788,https://www.airlines-manager.com/aircraft/show/94886627,2:15,10:59,310,"$540,459.00","$497,431.00"
SFO - LIT,53492178789,SFO-SDF-LIT 5,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/53492178789,https://www.airlines-manager.com/aircraft/show/106453498,3:15,11:59,310,"$540,459.00","$497,431.00"
SFO - LIT,53521848716,SFO-SDF-LIT 2,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/53521848716,https://www.airlines-manager.com/aircraft/show/94886628,14:00,22:44,310,"$540,459.00","$497,431.00"
SFO - LIT,53521848717,SFO-SDF-LIT 4,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/53521848717,https://www.airlines-manager.com/aircraft/show/106453500,15:00,23:44,310,"$540,459.00","$497,431.00"
SFO - LIT,53540025481,SFO-SDF-LIT 1,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/53540025481,https://www.airlines-manager.com/aircraft/show/106453499,23:45,8:29,310,"$540,459.00","$497,431.00"
SFO - MCI,53505148764,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/53505148764,https://www.airlines-manager.com/aircraft/show/88239554,7:00,14:59,320,"$505,017.00","$456,091.00"
SFO - MCI,53526170986,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/53526170986,https://www.airlines-manager.com/aircraft/show/105223003,17:00,0:59,198,"$380,902.00","$345,894.00"
SFO - MCI,53526170987,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/53526170987,https://www.airlines-manager.com/aircraft/show/88239553,17:00,0:59,320,"$505,017.00","$456,091.00"
SFO - MCI,53531796437,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/53531796437,https://www.airlines-manager.com/aircraft/show/88239557,18:45,2:44,320,"$505,017.00","$456,091.00"
SFO - MCI,53540025459,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/53540025459,https://www.airlines-manager.com/aircraft/show/88239555,23:15,7:14,320,"$505,017.00","$456,091.00"
SFO - MCO,53492178881,SFO-MCO-MSP 2,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/53492178881,https://www.airlines-manager.com/aircraft/show/105367367,3:30,14:59,338,"$791,753.00","$726,784.00"
SFO - MCO,53505148578,SFO-MCO-MSP 5,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/53505148578,https://www.airlines-manager.com/aircraft/show/105367364,4:30,15:59,338,"$791,753.00","$726,784.00"
SFO - MCO,53521848840,SFO-MCO-MSP 1,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/53521848840,https://www.airlines-manager.com/aircraft/show/105367368,15:00,2:29,338,"$791,753.00","$726,784.00"
SFO - MCO,53526170989,SFO-MCO-MSP 4,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/53526170989,https://www.airlines-manager.com/aircraft/show/105367365,17:00,4:29,338,"$791,753.00","$726,784.00"
SFO - MCO,53531796495,SFO-MCO-MSP 3,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/53531796495,https://www.airlines-manager.com/aircraft/show/105367366,19:15,6:44,338,"$791,753.00","$726,784.00"
SFO - MCO,53536307188,SFO CARGO 1,737-700,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/53536307188,https://www.airlines-manager.com/aircraft/show/107343113,20:30,7:59,0,"$198,945.00","$148,298.00"
SFO - MEM,53492178840,SFO-MEM-PIT 4,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/53492178840,https://www.airlines-manager.com/aircraft/show/98788934,2:45,11:59,310,"$574,328.00","$525,604.00"
SFO - MEM,53505148678,SFO-MEM-PIT 6,ERJ-175,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/53505148678,https://www.airlines-manager.com/aircraft/show/98675305,5:45,14:59,112,"$269,663.00","$237,281.00"
SFO - MEM,53521848598,SFO-MEM-PIT 1,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/53521848598,https://www.airlines-manager.com/aircraft/show/98788937,13:00,22:14,310,"$574,328.00","$525,604.00"
SFO - MEM,53526170933,SFO-MEM-PIT 3,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/53526170933,https://www.airlines-manager.com/aircraft/show/98788935,16:00,1:14,310,"$574,328.00","$525,604.00"
SFO - MEM,53531796441,SFO-MEM-PIT 5,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/53531796441,https://www.airlines-manager.com/aircraft/show/98788933,19:00,4:14,310,"$574,328.00","$525,604.00"
SFO - MEM,53540025496,SFO-MEM-PIT 2,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/53540025496,https://www.airlines-manager.com/aircraft/show/98788936,23:45,8:59,310,"$574,328.00","$525,604.00"
SFO - MEX,53492178901,SFO-IAH-MEX 3,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/53492178901,https://www.airlines-manager.com/aircraft/show/101045337,3:45,12:59,400,"$769,718.00","$698,851.00"
SFO - MEX,53521848546,SFO-IAH-MEX 2,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/53521848546,https://www.airlines-manager.com/aircraft/show/101045338,13:00,22:14,400,"$769,718.00","$698,851.00"
SFO - MEX,53521848547,SFO-IAH-MEX 5,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/53521848547,https://www.airlines-manager.com/aircraft/show/101045335,15:00,0:14,400,"$769,718.00","$698,851.00"
SFO - MEX,53536307260,SFO-IAH-MEX 1,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/53536307260,https://www.airlines-manager.com/aircraft/show/101045339,21:15,6:29,400,"$769,718.00","$698,851.00"
SFO - MEX,53540025461,SFO-IAH-MEX 4,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/53540025461,https://www.airlines-manager.com/aircraft/show/101045336,23:15,8:29,369,"$719,673.00","$650,698.00"
SFO - MFR,53492178620,SFO-TYS-MSN 2,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/53492178620,https://www.airlines-manager.com/aircraft/show/117782564,1:00,4:29,320,"$172,586.00","$145,954.00"
SFO - MFR,53492178621,SFO-TYS-MSN 1,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/53492178621,https://www.airlines-manager.com/aircraft/show/117782565,4:00,7:29,320,"$172,586.00","$145,954.00"
SFO - MFR,53526170886,SFO-TYS-MSN 3,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/53526170886,https://www.airlines-manager.com/aircraft/show/117782563,16:00,19:29,320,"$172,586.00","$145,954.00"
SFO - MFR,53526170887,SFO-TYS-MSN 4,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/53526170887,https://www.airlines-manager.com/aircraft/show/117782562,17:15,20:44,289,"$162,495.00","$136,138.00"
SFO - MHT,53492178549,SFO-MHT-CHS 3,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/53492178549,https://www.airlines-manager.com/aircraft/show/114917463,0:15,12:44,320,"$758,403.00","$694,418.00"
SFO - MHT,53492178550,SFO-MHT-CHS 4,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/53492178550,https://www.airlines-manager.com/aircraft/show/114266973,4:15,16:44,320,"$758,403.00","$694,418.00"
SFO - MHT,53521848636,SFO-MHT-CHS 1,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/53521848636,https://www.airlines-manager.com/aircraft/show/114917465,13:00,1:29,320,"$758,403.00","$694,418.00"
SFO - MHT,53526170996,SFO-MHT-CHS 2,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/53526170996,https://www.airlines-manager.com/aircraft/show/114917464,17:00,5:29,320,"$758,403.00","$694,418.00"
SFO - MHT,53531796607,SFO-MHT-CHS 5 B,A319-100,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/53531796607,https://www.airlines-manager.com/aircraft/show/114912262,20:00,8:29,198,"$568,571.00","$521,644.00"
SFO - MIA,53492178650,SFO-MIA-JFK 1,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/53492178650,https://www.airlines-manager.com/aircraft/show/89233032,1:00,12:59,400,"$954,153.00","$864,310.00"
SFO - MIA,53492178651,SFO-MIA-JFK 2,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/53492178651,https://www.airlines-manager.com/aircraft/show/84622093,4:00,15:59,400,"$954,153.00","$864,310.00"
SFO - MIA,53505148762,SFO-MIA-JFK 3,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/53505148762,https://www.airlines-manager.com/aircraft/show/89233031,7:00,18:59,400,"$954,153.00","$864,310.00"
SFO - MIA,53521848612,SFO-MIA-JFK 4,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/53521848612,https://www.airlines-manager.com/aircraft/show/89233034,13:00,0:59,400,"$954,153.00","$864,310.00"
SFO - MIA,53531796464,SFO-MIA-JFK 5,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/53531796464,https://www.airlines-manager.com/aircraft/show/89233035,19:00,6:59,400,"$954,153.00","$864,310.00"
SFO - MKE,53492178585,SFO-CLE-MKE 1,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/53492178585,https://www.airlines-manager.com/aircraft/show/92519368,0:30,9:44,320,"$583,505.00","$530,737.00"
SFO - MKE,53505148658,SFO-CLE-MKE 4,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/53505148658,https://www.airlines-manager.com/aircraft/show/92519371,5:30,14:44,320,"$583,505.00","$530,737.00"
SFO - MKE,53505148659,SFO-CLE-MKE 3,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/53505148659,https://www.airlines-manager.com/aircraft/show/92519367,6:45,15:59,320,"$583,505.00","$530,737.00"
SFO - MKE,53526170926,SFO-CLE-MKE 2,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/53526170926,https://www.airlines-manager.com/aircraft/show/92519369,16:00,1:14,320,"$583,505.00","$530,737.00"
SFO - MKE,53531796346,SFO-CLE-MKE 5,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/53531796346,https://www.airlines-manager.com/aircraft/show/92519370,18:00,3:14,320,"$583,505.00","$530,737.00"
SFO - MSN,53492178797,SFO-TYS-MSN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/53492178797,https://www.airlines-manager.com/aircraft/show/117782582,2:15,11:14,198,"$422,498.00","$386,836.00"
SFO - MSN,53505148754,SFO-TYS-MSN 4,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/53505148754,https://www.airlines-manager.com/aircraft/show/117782562,7:00,15:59,320,"$559,952.00","$510,703.00"
SFO - MSN,53505148755,SFO-TYS-MSN 3,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/53505148755,https://www.airlines-manager.com/aircraft/show/117782563,7:00,15:59,320,"$559,952.00","$510,703.00"
SFO - MSN,53526170901,SFO-TYS-MSN 2,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/53526170901,https://www.airlines-manager.com/aircraft/show/117782564,16:00,0:59,320,"$559,952.00","$510,703.00"
SFO - MSN,53531796457,SFO-TYS-MSN 1,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/53531796457,https://www.airlines-manager.com/aircraft/show/117782565,19:00,3:59,320,"$559,952.00","$510,703.00"
SFO - MSO,53505148743,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/53505148743,https://www.airlines-manager.com/aircraft/show/108410856,6:45,11:44,320,"$321,211.00","$287,500.00"
SFO - MSO,53505148744,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/53505148744,https://www.airlines-manager.com/aircraft/show/108410859,7:30,12:29,320,"$321,211.00","$287,500.00"
SFO - MSO,53521848614,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/53521848614,https://www.airlines-manager.com/aircraft/show/108410858,13:00,17:59,320,"$321,211.00","$287,500.00"
SFO - MSO,53536307227,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/53536307227,https://www.airlines-manager.com/aircraft/show/108410857,21:00,1:59,265,"$287,829.00","$255,256.00"
SFO - MSP,53492178808,SFO-MCO-MSP 1,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/53492178808,https://www.airlines-manager.com/aircraft/show/105367368,2:30,10:44,338,"$570,087.00","$520,649.00"
SFO - MSP,53505148576,SFO-MCO-MSP 4,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/53505148576,https://www.airlines-manager.com/aircraft/show/105367365,4:30,12:44,338,"$570,087.00","$520,649.00"
SFO - MSP,53505148577,SFO-MCO-MSP 3,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/53505148577,https://www.airlines-manager.com/aircraft/show/105367366,6:45,14:59,338,"$570,087.00","$520,649.00"
SFO - MSP,53521848838,SFO-MCO-MSP 2,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/53521848838,https://www.airlines-manager.com/aircraft/show/105367367,15:00,23:14,338,"$570,087.00","$520,649.00"
SFO - MSP,53526170924,SFO-MCO-MSP 5,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/53526170924,https://www.airlines-manager.com/aircraft/show/105367364,16:00,0:14,338,"$570,087.00","$520,649.00"
SFO - MSY,53492178849,SFO-MSY-STL 6,ERJ-175,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/53492178849,https://www.airlines-manager.com/aircraft/show/103534666,3:00,12:29,112,"$278,463.00","$245,789.00"
SFO - MSY,53505148698,SFO-MSY-STL 2,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/53505148698,https://www.airlines-manager.com/aircraft/show/98075266,6:00,15:29,320,"$591,162.00","$536,928.00"
SFO - MSY,53505148699,SFO-MSY-STL 4,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/53505148699,https://www.airlines-manager.com/aircraft/show/98075264,8:00,17:29,320,"$591,162.00","$536,928.00"
SFO - MSY,53521848564,SFO-MSY-STL 1,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/53521848564,https://www.airlines-manager.com/aircraft/show/98075267,13:00,22:29,320,"$591,162.00","$536,928.00"
SFO - MSY,53536307263,SFO-MSY-STL 3,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/53536307263,https://www.airlines-manager.com/aircraft/show/98075265,21:15,6:44,320,"$591,162.00","$536,928.00"
SFO - MSY,53540025457,SFO-MSY-STL 5,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/53540025457,https://www.airlines-manager.com/aircraft/show/98075263,23:15,8:44,320,"$591,162.00","$536,928.00"
SFO - NRT,53492178452,SFO 84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/53492178452,https://www.airlines-manager.com/aircraft/show/86776213,0:00,20:29,932,"$3,433,419.00","$3,108,763.00"
SFO - NRT,53492178453,SFO 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/53492178453,https://www.airlines-manager.com/aircraft/show/85806656,4:15,0:44,932,"$3,433,419.00","$3,108,763.00"
SFO - OGG,53492178806,SFO-OGG-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/53492178806,https://www.airlines-manager.com/aircraft/show/92773477,2:30,13:44,310,"$694,716.00","$642,154.00"
SFO - OGG,53521848685,SFO-OGG-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/53521848685,https://www.airlines-manager.com/aircraft/show/92773481,13:30,0:44,310,"$694,716.00","$642,154.00"
SFO - OGG,53526170850,SFO-OGG-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/53526170850,https://www.airlines-manager.com/aircraft/show/92773480,15:30,2:44,310,"$694,716.00","$642,154.00"
SFO - OGG,53536307282,SFO-OGG-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/53536307282,https://www.airlines-manager.com/aircraft/show/92773479,21:30,8:44,310,"$694,716.00","$642,154.00"
SFO - OGG,53540025472,SFO-OGG-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/53540025472,https://www.airlines-manager.com/aircraft/show/92773478,23:30,10:44,310,"$694,716.00","$642,154.00"
SFO - OKC,53492178569,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/53492178569,https://www.airlines-manager.com/aircraft/show/107160380,0:30,7:59,320,"$474,286.00","$430,044.00"
SFO - OKC,53505148797,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/53505148797,https://www.airlines-manager.com/aircraft/show/107160379,8:00,15:29,320,"$474,286.00","$430,044.00"
SFO - OKC,53526171017,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/53526171017,https://www.airlines-manager.com/aircraft/show/107160378,17:00,0:29,320,"$474,286.00","$430,044.00"
SFO - OKC,53531796399,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/53531796399,https://www.airlines-manager.com/aircraft/show/107132310,18:30,1:59,112,"$224,021.00","$197,878.00"
SFO - OKC,53531796400,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/53531796400,https://www.airlines-manager.com/aircraft/show/107160381,19:30,2:59,320,"$474,286.00","$430,044.00"
SFO - OMA,53492178629,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/53492178629,https://www.airlines-manager.com/aircraft/show/105223003,1:00,8:44,198,"$365,184.00","$332,849.00"
SFO - OMA,53492178630,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/53492178630,https://www.airlines-manager.com/aircraft/show/88239553,1:00,8:44,320,"$482,863.00","$437,791.00"
SFO - OMA,53492178631,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/53492178631,https://www.airlines-manager.com/aircraft/show/88239557,2:45,10:29,320,"$482,863.00","$437,791.00"
SFO - OMA,53505148769,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/53505148769,https://www.airlines-manager.com/aircraft/show/88239555,7:15,14:59,320,"$482,863.00","$437,791.00"
SFO - OMA,53521848810,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/53521848810,https://www.airlines-manager.com/aircraft/show/88239554,15:00,22:44,320,"$482,863.00","$437,791.00"
SFO - ONT,53505148555,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/53505148555,https://www.airlines-manager.com/aircraft/show/107160379,4:30,7:59,320,"$179,764.00","$149,631.00"
SFO - ONT,53521848652,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/53521848652,https://www.airlines-manager.com/aircraft/show/107160378,13:00,16:29,320,"$179,764.00","$149,631.00"
SFO - ONT,53521848653,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/53521848653,https://www.airlines-manager.com/aircraft/show/107132310,15:00,18:29,112,"$82,970.00","$66,847.00"
SFO - ONT,53526170916,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/53526170916,https://www.airlines-manager.com/aircraft/show/107160381,16:00,19:29,320,"$179,764.00","$149,631.00"
SFO - ONT,53536307228,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/53536307228,https://www.airlines-manager.com/aircraft/show/107160380,21:00,0:29,320,"$179,764.00","$149,631.00"
SFO - ORD,53505148716,SFO-ORD-DTW 2,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/53505148716,https://www.airlines-manager.com/aircraft/show/101045333,6:00,14:59,400,"$756,958.00","$669,557.00"
SFO - ORD,53505148717,SFO-ORD-DTW 5,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/53505148717,https://www.airlines-manager.com/aircraft/show/101045330,7:30,16:29,400,"$756,958.00","$669,557.00"
SFO - ORD,53521848569,SFO-ORD-DTW 1,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/53521848569,https://www.airlines-manager.com/aircraft/show/101045334,13:00,21:59,400,"$756,958.00","$669,557.00"
SFO - ORD,53521848570,SFO-ORD-DTW 4,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/53521848570,https://www.airlines-manager.com/aircraft/show/101045331,15:00,23:59,400,"$756,958.00","$669,557.00"
SFO - ORD,53531796614,SFO-ORD-DTW 3,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/53531796614,https://www.airlines-manager.com/aircraft/show/101045332,20:00,4:59,400,"$756,958.00","$669,557.00"
SFO - ORF,53505148653,SFO-ORF-RIC 3,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/53505148653,https://www.airlines-manager.com/aircraft/show/108328836,5:30,17:29,310,"$729,217.00","$673,105.00"
SFO - ORF,53505148654,SFO-ORF-RIC 4,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/53505148654,https://www.airlines-manager.com/aircraft/show/108328837,7:30,19:29,310,"$729,217.00","$673,105.00"
SFO - ORF,53531796356,SFO-ORF-RIC 1,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/53531796356,https://www.airlines-manager.com/aircraft/show/108328834,18:00,5:59,310,"$729,217.00","$673,105.00"
SFO - ORF,53531796357,SFO-ORF-RIC 2,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/53531796357,https://www.airlines-manager.com/aircraft/show/108328835,20:00,7:59,310,"$729,217.00","$673,105.00"
SFO - ORF,53536307318,SFO-ORF-RIC 5 B,A319-100,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/53536307318,https://www.airlines-manager.com/aircraft/show/108328833,22:00,9:59,198,"$545,378.00","$500,379.00"
SFO - PBI,53492178929,SFO-PBI-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/53492178929,https://www.airlines-manager.com/aircraft/show/100301186,4:15,16:14,320,"$730,653.00","$666,322.00"
SFO - PBI,53505148726,SFO-PBI-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/53505148726,https://www.airlines-manager.com/aircraft/show/100301185,6:15,18:14,320,"$730,653.00","$666,322.00"
SFO - PBI,53526171004,SFO-PBI-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/53526171004,https://www.airlines-manager.com/aircraft/show/100301188,17:00,4:59,320,"$730,653.00","$666,322.00"
SFO - PBI,53531796439,SFO-PBI-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/53531796439,https://www.airlines-manager.com/aircraft/show/100301187,19:00,6:59,320,"$730,653.00","$666,322.00"
SFO - PBI,53536307231,SFO-PBI-RDU 5,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/53536307231,https://www.airlines-manager.com/aircraft/show/100301184,21:00,8:59,320,"$730,653.00","$666,322.00"
SFO - PDX,53492178551,SFO-MCO-MSP 5,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/53492178551,https://www.airlines-manager.com/aircraft/show/105367364,0:15,4:29,338,"$271,208.00","$241,811.00"
SFO - PDX,53516803593,SFO-MCO-MSP 1,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/53516803593,https://www.airlines-manager.com/aircraft/show/105367368,10:45,14:59,338,"$271,208.00","$241,811.00"
SFO - PDX,53516803594,SFO-MCO-MSP 4,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/53516803594,https://www.airlines-manager.com/aircraft/show/105367365,12:45,16:59,338,"$271,208.00","$241,811.00"
SFO - PDX,53521848839,SFO-MCO-MSP 3,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/53521848839,https://www.airlines-manager.com/aircraft/show/105367366,15:00,19:14,338,"$271,208.00","$241,811.00"
SFO - PDX,53540025466,SFO-MCO-MSP 2,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/53540025466,https://www.airlines-manager.com/aircraft/show/105367367,23:15,3:29,270,"$238,986.00","$210,443.00"
SFO - PEK,53492178606,SFO 84A-1 E1,777-300,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/53492178606,https://www.airlines-manager.com/aircraft/show/86776212,0:45,0:14,932,"$3,795,557.00","$3,394,050.00"
SFO - PEK,53526171022,SFO-PEK E,787-10,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/53526171022,https://www.airlines-manager.com/aircraft/show/106813006,17:00,15:59,648,"$2,825,530.00","$2,590,954.00"
SFO - PEK,53536307183,SFO 84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/53536307183,https://www.airlines-manager.com/aircraft/show/86776213,20:30,19:59,932,"$3,795,557.00","$3,394,050.00"
SFO - PHL,53492178472,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/53492178472,https://www.airlines-manager.com/aircraft/show/92390871,0:00,11:44,320,"$727,252.00","$654,700.00"
SFO - PHL,53516803769,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/53516803769,https://www.airlines-manager.com/aircraft/show/92390872,12:00,23:44,320,"$727,252.00","$654,700.00"
SFO - PHL,53521848732,SFO-PHL-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/53521848732,https://www.airlines-manager.com/aircraft/show/97900730,14:00,1:59,198,"$546,374.00","$493,982.00"
SFO - PHL,53521848733,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/53521848733,https://www.airlines-manager.com/aircraft/show/92390869,15:00,2:44,320,"$727,252.00","$654,700.00"
SFO - PHL,53526170864,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/53526170864,https://www.airlines-manager.com/aircraft/show/92390870,15:45,3:29,320,"$727,252.00","$654,700.00"
SFO - PHL,53531796477,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/53531796477,https://www.airlines-manager.com/aircraft/show/92390873,19:15,6:59,320,"$727,252.00","$654,700.00"
SFO - PHX,53492178712,SFO-BOS-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/53492178712,https://www.airlines-manager.com/aircraft/show/104901564,1:30,5:59,338,"$320,643.00","$282,585.00"
SFO - PHX,53492178713,SFO-BOS-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/53492178713,https://www.airlines-manager.com/aircraft/show/104870960,2:30,6:59,338,"$320,643.00","$282,585.00"
SFO - PHX,53492178714,SFO-BOS-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/53492178714,https://www.airlines-manager.com/aircraft/show/104874465,4:15,8:44,338,"$320,643.00","$282,585.00"
SFO - PHX,53516803762,SFO-BOS-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/53516803762,https://www.airlines-manager.com/aircraft/show/104901544,12:00,16:29,338,"$320,643.00","$282,585.00"
SFO - PHX,53526170876,SFO CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/53526170876,https://www.airlines-manager.com/aircraft/show/107343113,15:45,20:29,0,"$78,319.00","$52,379.00"
SFO - PHX,53526170877,SFO-BOS-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/53526170877,https://www.airlines-manager.com/aircraft/show/104864961,16:00,20:29,338,"$320,643.00","$282,585.00"
SFO - PIT,53492178678,SFO-MEM-PIT 3,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/53492178678,https://www.airlines-manager.com/aircraft/show/98788935,1:15,11:59,310,"$673,591.00","$618,435.00"
SFO - PIT,53492178679,SFO-MEM-PIT 5,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/53492178679,https://www.airlines-manager.com/aircraft/show/98788933,4:15,14:59,310,"$673,591.00","$618,435.00"
SFO - PIT,53521848603,SFO-MEM-PIT 2,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/53521848603,https://www.airlines-manager.com/aircraft/show/98788936,13:00,23:44,310,"$673,591.00","$618,435.00"
SFO - PIT,53526170932,SFO-MEM-PIT 4,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/53526170932,https://www.airlines-manager.com/aircraft/show/98788934,16:00,2:44,310,"$673,591.00","$618,435.00"
SFO - PIT,53531796440,SFO-MEM-PIT 6,ERJ-175,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/53531796440,https://www.airlines-manager.com/aircraft/show/98675305,19:00,5:44,112,"$315,839.00","$278,820.00"
SFO - PIT,53536307352,SFO-MEM-PIT 1,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/53536307352,https://www.airlines-manager.com/aircraft/show/98788937,22:15,8:59,310,"$673,591.00","$618,435.00"
SFO - PSP,53492178927,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/53492178927,https://www.airlines-manager.com/aircraft/show/114912264,4:15,7:59,310,"$199,494.00","$174,696.00"
SFO - PSP,53516803720,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/53516803720,https://www.airlines-manager.com/aircraft/show/114912267,11:45,15:29,310,"$199,494.00","$174,696.00"
SFO - PSP,53521848670,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/53521848670,https://www.airlines-manager.com/aircraft/show/114912306,13:15,16:59,112,"$92,098.00","$76,487.00"
SFO - PSP,53521848671,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/53521848671,https://www.airlines-manager.com/aircraft/show/114912268,15:00,18:44,310,"199,494$","174,696$"
SFO - PSP,53536307248,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/53536307248,https://www.airlines-manager.com/aircraft/show/114912263,21:00,0:44,276,"186,610$","162,203$"
SFO - PVD,53492178473,SFO-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/53492178473,https://www.airlines-manager.com/aircraft/show/112650105,0:00,12:29,310,"759,776$","702,109$"
SFO - PVD,53505148621,SFO-PVD-BUF 5,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/53505148621,https://www.airlines-manager.com/aircraft/show/112650104,5:00,17:29,310,"759,776$","702,109$"
SFO - PVD,53521848600,SFO-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/53521848600,https://www.airlines-manager.com/aircraft/show/112650108,13:00,1:29,310,"759,776$","702,109$"
SFO - PVD,53526171021,SFO-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/53526171021,https://www.airlines-manager.com/aircraft/show/112650107,17:00,5:29,310,"759,776$","702,109$"
SFO - PVD,53531796443,SFO-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/53531796443,https://www.airlines-manager.com/aircraft/show/112650106,19:00,7:29,310,"759,776$","702,109$"
SFO - PWM,53492178534,SFO-KOA-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/53492178534,https://www.airlines-manager.com/aircraft/show/112650091,0:15,12:59,198,"574,433$","528,236$"
SFO - PWM,53492178535,SFO-KOA-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/53492178535,https://www.airlines-manager.com/aircraft/show/112650103,4:15,16:59,310,"767,544$","709,944$"
SFO - PWM,53505148767,SFO-KOA-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/53505148767,https://www.airlines-manager.com/aircraft/show/112650102,7:15,19:59,310,"767,544$","709,944$"
SFO - PWM,53521848766,SFO-KOA-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/53521848766,https://www.airlines-manager.com/aircraft/show/112650101,14:00,2:44,310,"767,544$","709,944$"
SFO - PWM,53526170893,SFO-KOA-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/53526170893,https://www.airlines-manager.com/aircraft/show/112650100,16:00,4:44,310,"767,544$","709,944$"
SFO - RAP,53505148557,SFO-FAR-BIL 1,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/53505148557,https://www.airlines-manager.com/aircraft/show/117782584,4:30,10:59,310,"397,901$","363,608$"
SFO - RAP,53511675070,SFO-FAR-BIL 4,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/53511675070,https://www.airlines-manager.com/aircraft/show/117782587,8:30,14:59,310,"397,901$","363,608$"
SFO - RAP,53521848820,SFO-FAR-BIL 3,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/53521848820,https://www.airlines-manager.com/aircraft/show/117782586,15:00,21:29,310,"397,901$","363,608$"
SFO - RAP,53536307214,SFO-FAR-BIL 2,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/53536307214,https://www.airlines-manager.com/aircraft/show/117782585,20:45,3:14,285,"378,982$","345,442$"
SFO - RDU,53505148615,SFO-PBI-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/53505148615,https://www.airlines-manager.com/aircraft/show/100301188,5:00,16:14,320,"709,519$","646,796$"
SFO - RDU,53505148616,SFO-PBI-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/53505148616,https://www.airlines-manager.com/aircraft/show/100301187,7:00,18:14,320,"709,519$","646,796$"
SFO - RDU,53511675104,SFO-PBI-RDU 5,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/53511675104,https://www.airlines-manager.com/aircraft/show/100301184,9:00,20:14,320,"709,519$","646,796$"
SFO - RDU,53526171003,SFO-PBI-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/53526171003,https://www.airlines-manager.com/aircraft/show/100301186,17:00,4:14,320,"709,519$","646,796$"
SFO - RDU,53531796453,SFO-PBI-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/53531796453,https://www.airlines-manager.com/aircraft/show/100301185,19:00,6:14,320,"709,519$","646,796$"
SFO - RIC,53505148692,SFO-ORF-RIC 1,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/53505148692,https://www.airlines-manager.com/aircraft/show/108328834,6:00,17:29,310,"723,392$","668,358$"
SFO - RIC,53505148693,SFO-ORF-RIC 2,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/53505148693,https://www.airlines-manager.com/aircraft/show/108328835,8:00,19:29,310,"723,392$","668,358$"
SFO - RIC,53511675170,SFO-ORF-RIC 5 B,A319-100,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/53511675170,https://www.airlines-manager.com/aircraft/show/108328833,10:00,21:29,198,"542,563$","498,431$"
SFO - RIC,53531796358,SFO-ORF-RIC 3,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/53531796358,https://www.airlines-manager.com/aircraft/show/108328836,18:00,5:29,310,"723,392$","668,358$"
SFO - RIC,53531796359,SFO-ORF-RIC 4,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/53531796359,https://www.airlines-manager.com/aircraft/show/108328837,20:00,7:29,310,"723,392$","668,358$"
SFO - RNO,53492178933,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/53492178933,https://www.airlines-manager.com/aircraft/show/88239554,4:15,6:59,320,"118,943$","92,623$"
SFO - RNO,53521848779,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/53521848779,https://www.airlines-manager.com/aircraft/show/88239553,14:15,16:59,320,"118,943$","92,623$"
SFO - RNO,53521848780,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/53521848780,https://www.airlines-manager.com/aircraft/show/105223003,14:15,16:59,198,"90,039$","72,187$"
SFO - RNO,53526170923,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/53526170923,https://www.airlines-manager.com/aircraft/show/88239557,16:00,18:44,320,"118,943$","92,623$"
SFO - RNO,53536307182,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/53536307182,https://www.airlines-manager.com/aircraft/show/88239555,20:30,23:14,320,"118,943$","92,623$"
SFO - RSW,53505148639,SFO-RSW-BDL 3,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/53505148639,https://www.airlines-manager.com/aircraft/show/84915100,5:15,16:59,320,"726,988$","662,174$"
SFO - RSW,53505148640,SFO-RSW-BDL 4,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/53505148640,https://www.airlines-manager.com/aircraft/show/84915101,7:15,18:59,320,"726,988$","662,174$"
SFO - RSW,53526171008,SFO-RSW-BDL 1,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/53526171008,https://www.airlines-manager.com/aircraft/show/84915098,17:00,4:44,320,"726,988$","662,174$"
SFO - RSW,53531796454,SFO-RSW-BDL 2,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/53531796454,https://www.airlines-manager.com/aircraft/show/84915099,19:00,6:44,320,"726,988$","662,174$"
SFO - RSW,53536307226,SFO-RSW-BDL 5,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/53536307226,https://www.airlines-manager.com/aircraft/show/84915102,21:00,8:44,320,"726,988$","662,174$"
SFO - SAN,53505148804,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/53505148804,https://www.airlines-manager.com/aircraft/show/92390872,8:00,11:44,320,"216,450$","183,611$"
SFO - SAN,53516803659,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/53516803659,https://www.airlines-manager.com/aircraft/show/92390869,11:00,14:44,320,"216,450$","183,611$"
SFO - SAN,53516803660,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/53516803660,https://www.airlines-manager.com/aircraft/show/92390870,12:00,15:44,320,"216,450$","183,611$"
SFO - SAN,53526170854,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/53526170854,https://www.airlines-manager.com/aircraft/show/92390873,15:30,19:14,320,"216,450$","183,611$"
SFO - SAN,53536307175,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/53536307175,https://www.airlines-manager.com/aircraft/show/92390871,20:15,23:59,314,"213,998$","181,231$"
SFO - SAT,53492178536,SFO-JAX-SAT 1,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/53492178536,https://www.airlines-manager.com/aircraft/show/86375568,0:15,8:14,310,"496,378$","455,108$"
SFO - SAT,53492178537,SFO-JAX-SAT 2,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/53492178537,https://www.airlines-manager.com/aircraft/show/86371267,2:15,10:14,310,"496,378$","455,108$"
SFO - SAT,53521848658,SFO-JAX-SAT 3,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/53521848658,https://www.airlines-manager.com/aircraft/show/86385102,13:00,20:59,310,"496,378$","455,108$"
SFO - SAT,53521848659,SFO-JAX-SAT 4,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/53521848659,https://www.airlines-manager.com/aircraft/show/86378760,15:00,22:59,310,"496,378$","455,108$"
SFO - SAT,53526171031,SFO-JAX-SAT 5,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/53526171031,https://www.airlines-manager.com/aircraft/show/86377315,17:15,1:14,310,"496,378$","455,108$"
SFO - SAV,53505148674,SFO-SAV-JAN 1,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/53505148674,https://www.airlines-manager.com/aircraft/show/114912265,5:45,16:59,310,"693,508$","640,203$"
SFO - SAV,53505148675,SFO-SAV-JAN 4,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/53505148675,https://www.airlines-manager.com/aircraft/show/114912270,7:45,18:59,310,"693,508$","640,203$"
SFO - SAV,53521848831,SFO-SAV-JAN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/53521848831,https://www.airlines-manager.com/aircraft/show/114917486,15:00,2:14,198,"521,067$","478,322$"
SFO - SAV,53531796451,SFO-SAV-JAN 3,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/53531796451,https://www.airlines-manager.com/aircraft/show/114912269,19:00,6:14,310,"693,508$","640,203$"
SFO - SAV,53536307186,SFO-SAV-JAN 2,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/53536307186,https://www.airlines-manager.com/aircraft/show/114912266,20:30,7:44,310,"693,508$","640,203$"
SFO - SDF,53492178682,SFO-SDF-LIT 2,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/53492178682,https://www.airlines-manager.com/aircraft/show/94886628,1:15,10:59,310,"611,784$","561,541$"
SFO - SDF,53492178683,SFO-SDF-LIT 4,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/53492178683,https://www.airlines-manager.com/aircraft/show/106453500,2:15,11:59,310,"611,784$","561,541$"
SFO - SDF,53521848718,SFO-SDF-LIT 1,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/53521848718,https://www.airlines-manager.com/aircraft/show/106453499,14:00,23:44,310,"611,784$","561,541$"
SFO - SDF,53526170969,SFO-SDF-LIT 3,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/53526170969,https://www.airlines-manager.com/aircraft/show/94886627,16:30,2:14,310,"611,784$","561,541$"
SFO - SDF,53531796294,SFO-SDF-LIT 5,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/53531796294,https://www.airlines-manager.com/aircraft/show/106453498,17:30,3:14,310,"611,784$","561,541$"
SFO - SEA,53492178841,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/53492178841,https://www.airlines-manager.com/aircraft/show/92390869,2:45,7:29,320,"300,138$","256,530$"
SFO - SEA,53492178842,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/53492178842,https://www.airlines-manager.com/aircraft/show/92390870,3:30,8:14,320,"300,138$","256,530$"
SFO - SEA,53505148651,SFO-PHL-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/53505148651,https://www.airlines-manager.com/aircraft/show/97900730,5:30,10:14,198,"228,859$","198,701$"
SFO - SEA,53505148652,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/53505148652,https://www.airlines-manager.com/aircraft/show/92390873,7:00,11:44,320,"300,138$","256,530$"
SFO - SEA,53516803768,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/53516803768,https://www.airlines-manager.com/aircraft/show/92390871,12:00,16:44,320,"300,138$","256,530$"
SFO - SEA,53540025483,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/53540025483,https://www.airlines-manager.com/aircraft/show/92390872,23:45,4:29,298,"287,684$","244,479$"
SFO - SHA,53531796612,SFO 168B-1 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/53531796612,https://www.airlines-manager.com/aircraft/show/86832727,20:00,19:59,1046,"4,630,367$","4,294,834$"
SFO - SHA,53536307323,SFO 168A-1 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/53536307323,https://www.airlines-manager.com/aircraft/show/86969602,22:00,21:59,1046,"4,630,367$","4,294,834$"
SFO - SLC,53492178454,SFO-ORD-DTW 4,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/53492178454,https://www.airlines-manager.com/aircraft/show/101045331,0:00,4:29,400,"360,537$","319,636$"
SFO - SLC,53492178455,SFO-ORD-DTW 2,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/53492178455,https://www.airlines-manager.com/aircraft/show/101045333,1:00,5:29,400,"360,537$","319,636$"
SFO - SLC,53505148805,SFO-ORD-DTW 1,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/53505148805,https://www.airlines-manager.com/aircraft/show/101045334,8:00,12:29,400,"360,537$","319,636$"
SFO - SLC,53521848816,SFO-ORD-DTW 3,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/53521848816,https://www.airlines-manager.com/aircraft/show/101045332,15:00,19:29,400,"360,537$","319,636$"
SFO - SMF,53511675060,SFO-SDF-LIT 1,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/53511675060,https://www.airlines-manager.com/aircraft/show/106453499,8:30,10:59,310,"82,768$","62,186$"
SFO - SMF,53521848714,SFO-SDF-LIT 3,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/53521848714,https://www.airlines-manager.com/aircraft/show/94886627,14:00,16:29,310,"82,768$","62,186$"
SFO - SMF,53521848715,SFO-SDF-LIT 5,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/53521848715,https://www.airlines-manager.com/aircraft/show/106453498,15:00,17:29,310,"82,768$","62,186$"
SFO - SMF,53540025405,SFO-SDF-LIT 2,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/53540025405,https://www.airlines-manager.com/aircraft/show/94886628,22:45,1:14,310,"82,768$","62,186$"
SFO - SMF,53540025406,SFO-SDF-LIT 4,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/53540025406,https://www.airlines-manager.com/aircraft/show/106453500,23:45,2:14,310,"82,768$","62,186$"
SFO - STL,53505148747,SFO-MSY-STL 3,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/53505148747,https://www.airlines-manager.com/aircraft/show/98075265,6:45,15:29,320,"554,957$","501,203$"
SFO - STL,53511675088,SFO-MSY-STL 5,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/53511675088,https://www.airlines-manager.com/aircraft/show/98075263,8:45,17:29,320,"554,957$","501,203$"
SFO - STL,53521848602,SFO-MSY-STL 6,ERJ-175,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/53521848602,https://www.airlines-manager.com/aircraft/show/103534666,13:00,21:44,112,"261,292$","229,370$"
SFO - STL,53526170935,SFO-MSY-STL 2,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/53526170935,https://www.airlines-manager.com/aircraft/show/98075266,16:00,0:44,320,"554,957$","501,203$"
SFO - STL,53531796365,SFO-MSY-STL 4,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/53531796365,https://www.airlines-manager.com/aircraft/show/98075264,18:00,2:44,320,"554,957$","501,203$"
SFO - STL,53540025391,SFO-MSY-STL 1,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/53540025391,https://www.airlines-manager.com/aircraft/show/98075267,22:30,7:14,320,"554,957$","501,203$"
SFO - TFU,53516803779,SFO 168B-7 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/53516803779,https://www.airlines-manager.com/aircraft/show/86823556,12:30,14:59,1046,"5,210,012$","4,802,353$"
SFO - TFU,53521848790,SFO 168A-7 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/53521848790,https://www.airlines-manager.com/aircraft/show/88032835,14:30,16:59,1046,"5,210,012$","4,802,353$"
SFO - TPA,53492178639,SFO-FLL-TPA 1,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/53492178639,https://www.airlines-manager.com/aircraft/show/97955544,1:00,12:14,320,"701,298$","635,247$"
SFO - TPA,53505148617,SFO-FLL-TPA 3,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/53505148617,https://www.airlines-manager.com/aircraft/show/97955542,5:00,16:14,320,"701,298$","635,247$"
SFO - TPA,53505148618,SFO-FLL-TPA 5,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/53505148618,https://www.airlines-manager.com/aircraft/show/97955540,8:00,19:14,320,"701,298$","635,247$"
SFO - TPA,53521848654,SFO-FLL-TPA 2,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/53521848654,https://www.airlines-manager.com/aircraft/show/97955543,13:00,0:14,320,"701,298$","635,247$"
SFO - TPA,53526171016,SFO-FLL-TPA 4,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/53526171016,https://www.airlines-manager.com/aircraft/show/97955541,17:00,4:14,320,"701,298$","635,247$"
SFO - TPA,53531796610,SFO-FLL-TPA 6 B,A319-100,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/53531796610,https://www.airlines-manager.com/aircraft/show/97900729,20:00,7:29,198,"529,365$","481,509$"
SFO - TPE,53531796611,SFO 168B-2 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/53531796611,https://www.airlines-manager.com/aircraft/show/87566901,20:00,21:14,1046,"4,755,660$","4,405,634$"
SFO - TPE,53536307325,SFO 168A-2 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/53536307325,https://www.airlines-manager.com/aircraft/show/86596991,22:00,23:14,1026,"4,692,068$","4,346,049$"
SFO - TUL,53505148600,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/53505148600,https://www.airlines-manager.com/aircraft/show/108410857,4:45,12:29,320,"491,543$","446,045$"
SFO - TUL,53505148601,SFO-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/53505148601,https://www.airlines-manager.com/aircraft/show/108466264,7:00,14:44,112,"232,110$","205,102$"
SFO - TUL,53521848826,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/53521848826,https://www.airlines-manager.com/aircraft/show/108410856,15:00,22:44,320,"491,543$","446,045$"
SFO - TUL,53526170860,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/53526170860,https://www.airlines-manager.com/aircraft/show/108410859,15:45,23:29,320,"491,543$","446,045$"
SFO - TUL,53536307213,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/53536307213,https://www.airlines-manager.com/aircraft/show/108410858,20:45,4:29,320,"491,543$","446,045$"
SFO - TUS,53505148796,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/53505148796,https://www.airlines-manager.com/aircraft/show/107160378,8:00,12:59,320,"318,002$","282,841$"
SFO - TUS,53511675139,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/53511675139,https://www.airlines-manager.com/aircraft/show/107132310,9:30,14:29,112,"151,573$","131,806$"
SFO - TUS,53511675140,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/53511675140,https://www.airlines-manager.com/aircraft/show/107160381,10:30,15:29,320,"318,002$","282,841$"
SFO - TUS,53526170917,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/53526170917,https://www.airlines-manager.com/aircraft/show/107160380,16:00,20:59,320,"318,002$","282,841$"
SFO - TUS,53540025473,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/53540025473,https://www.airlines-manager.com/aircraft/show/107160379,23:30,4:29,320,"318,002$","282,841$"
SFO - TYS,53505148683,SFO-TYS-MSN 2,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/53505148683,https://www.airlines-manager.com/aircraft/show/117782564,5:45,15:59,320,"639,914$","585,231$"
SFO - TYS,53505148684,SFO-TYS-MSN 1,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/53505148684,https://www.airlines-manager.com/aircraft/show/117782565,7:30,17:44,320,"639,914$","585,231$"
SFO - TYS,53526170882,SFO-TYS-MSN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/53526170882,https://www.airlines-manager.com/aircraft/show/117782582,16:00,2:14,198,"481,892$","442,053$"
SFO - TYS,53531796508,SFO-TYS-MSN 3,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/53531796508,https://www.airlines-manager.com/aircraft/show/117782563,19:30,5:44,320,"639,914$","585,231$"
SFO - TYS,53536307207,SFO-TYS-MSN 4,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/53536307207,https://www.airlines-manager.com/aircraft/show/117782562,20:45,6:59,320,"639,914$","585,231$"
SFO - YEG,53492178886,SFO-YEG-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/53492178886,https://www.airlines-manager.com/aircraft/show/117782560,3:30,9:59,320,"419,195$","376,577$"
SFO - YEG,53511675028,SFO-YEG-YYC 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/53511675028,https://www.airlines-manager.com/aircraft/show/117782581,8:15,14:59,198,"316,101$","285,829$"
SFO - YEG,53521848595,SFO-YEG-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/53521848595,https://www.airlines-manager.com/aircraft/show/117782561,13:00,19:29,320,"419,195$","376,577$"
SFO - YEG,53521848596,SFO-YEG-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/53521848596,https://www.airlines-manager.com/aircraft/show/116932364,15:00,21:29,320,"419,195$","376,577$"
SFO - YEG,53536307284,SFO-YEG-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/53536307284,https://www.airlines-manager.com/aircraft/show/117782559,21:30,3:59,320,"419,195$","376,577$"
SFO - YUL,53492178613,SFO-YYZ-YUL 1,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/53492178613,https://www.airlines-manager.com/aircraft/show/115413609,0:45,12:29,400,"922,307$","846,283$"
SFO - YUL,53505148715,SFO-YYZ-YUL 4,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/53505148715,https://www.airlines-manager.com/aircraft/show/115413612,6:00,17:44,400,"922,307$","846,283$"
SFO - YUL,53521848696,SFO-YYZ-YUL 2,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/53521848696,https://www.airlines-manager.com/aircraft/show/115413610,14:00,1:44,400,"922,307$","846,283$"
SFO - YUL,53526170978,SFO-YYZ-YUL 3,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/53526170978,https://www.airlines-manager.com/aircraft/show/115413611,16:45,4:29,400,"922,307$","846,283$"
SFO - YUL,53531796431,SFO-YYZ-YUL 5,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/53531796431,https://www.airlines-manager.com/aircraft/show/91126653,18:45,6:29,400,"922,307$","846,283$"
SFO - YVR,53492178615,SFO-MSY-STL 2,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/53492178615,https://www.airlines-manager.com/aircraft/show/98075266,0:45,5:59,320,"330,083$","289,120$"
SFO - YVR,53492178616,SFO-MSY-STL 4,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/53492178616,https://www.airlines-manager.com/aircraft/show/98075264,2:45,7:59,320,"330,083$","289,120$"
SFO - YVR,53505148768,SFO-MSY-STL 1,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/53505148768,https://www.airlines-manager.com/aircraft/show/98075267,7:15,12:29,320,"330,083$","289,120$"
SFO - YVR,53526170934,SFO-MSY-STL 3,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/53526170934,https://www.airlines-manager.com/aircraft/show/98075265,16:00,21:14,320,"330,083$","289,120$"
SFO - YVR,53531796369,SFO-MSY-STL 5,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/53531796369,https://www.airlines-manager.com/aircraft/show/98075263,18:00,23:14,320,"330,083$","289,120$"
SFO - YVR,53536307298,SFO-MSY-STL 6,ERJ-175,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/53536307298,https://www.airlines-manager.com/aircraft/show/103534666,21:45,2:59,112,"156,483$","133,669$"
SFO - YYC,53492178908,SFO-YEG-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/53492178908,https://www.airlines-manager.com/aircraft/show/117782559,4:00,9:59,320,"385,106$","341,317$"
SFO - YYC,53521848590,SFO-YEG-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/53521848590,https://www.airlines-manager.com/aircraft/show/117782560,13:00,18:59,320,"385,106$","341,317$"
SFO - YYC,53521848591,SFO-YEG-YYC 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/53521848591,https://www.airlines-manager.com/aircraft/show/117782581,15:00,20:59,198,"289,706$","258,886$"
SFO - YYC,53531796506,SFO-YEG-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/53531796506,https://www.airlines-manager.com/aircraft/show/117782561,19:30,1:29,320,"385,106$","341,317$"
SFO - YYC,53536307279,SFO-YEG-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/53536307279,https://www.airlines-manager.com/aircraft/show/116932364,21:30,3:29,320,"385,106$","341,317$"
SFO - YYZ,53492178749,SFO-YYZ-YUL 2,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/53492178749,https://www.airlines-manager.com/aircraft/show/115413610,1:45,12:29,400,"881,945$","803,825$"
SFO - YYZ,53505148710,SFO-YYZ-YUL 3,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/53505148710,https://www.airlines-manager.com/aircraft/show/115413611,6:00,16:44,400,"881,945$","803,825$"
SFO - YYZ,53505148711,SFO-YYZ-YUL 5,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/53505148711,https://www.airlines-manager.com/aircraft/show/91126653,8:00,18:44,400,"881,945$","803,825$"
SFO - YYZ,53521848702,SFO-YYZ-YUL 1,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/53521848702,https://www.airlines-manager.com/aircraft/show/115413609,14:00,0:44,400,"881,945$","803,825$"
SFO - YYZ,53531796324,SFO-YYZ-YUL 4,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/53531796324,https://www.airlines-manager.com/aircraft/show/115413612,17:45,4:29,400,"881,945$","803,825$"`;