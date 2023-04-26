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
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
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
		hubs: ['ewr', 'iah', 'mia'],
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
		hubs: ['ewr', 'iah', 'mia'],
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
		name: 'Jackson Hole Airport (JAC)',
		city: 'Jackson Hole, USA - Wyoming 🇺🇸',
		pos: [43.60337470927696, -110.73625468784289],
		hubs: ['iah'],
		tz: 'US/Mountain'
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
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
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
		hubs: ['ewr', 'iah'],
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
		name: 'Santa Barbara Airport (SBA)',
		city: 'Santa Barbara, USA - California 🇺🇸',
		pos: [34.42729081888512, -119.83988350359796],
		hubs: ['iah'],
		tz: 'US/Pacific'
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
		name: 'John Wayne Airport (SNA)',
		city: 'Santa Ana, USA - California 🇺🇸',
		pos: [33.67632399877975, -117.86749736129858],
		hubs: ['iah'],
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
		hubs: ['ewr', 'iah', 'mia'],
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
EWR - ABQ,54146711540,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/54146711540,https://www.airlines-manager.com/aircraft/show/90717078,0:45,9:59,310,"$573,228.00","$527,252.00","$1,700.81","$57,103.10"
EWR - ABQ,54146711541,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/54146711541,https://www.airlines-manager.com/aircraft/show/95950199,2:45,11:59,310,"$573,228.00","$527,252.00","$1,700.81","$57,103.10"
EWR - ABQ,54162072955,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/54162072955,https://www.airlines-manager.com/aircraft/show/90717079,10:00,19:14,310,"$573,228.00","$527,252.00","$1,700.81","$57,103.10"
EWR - ABQ,54173399602,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/54173399602,https://www.airlines-manager.com/aircraft/show/90717077,16:45,1:59,310,"$573,228.00","$527,252.00","$1,700.81","$57,103.10"
EWR - ABQ,54178655337,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/54178655337,https://www.airlines-manager.com/aircraft/show/90717076,17:45,2:59,309,"$569,974.00","$524,072.00","$1,696.03","$56,758.70"
EWR - AMS,54162073084,EWR 56B-4 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/54162073084,https://www.airlines-manager.com/aircraft/show/94521247,11:30,2:44,748,"$2,318,738.00","$2,073,912.00","$2,772.61","$136,143.02"
EWR - AMS,54168162221,EWR 56B-2 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/54168162221,https://www.airlines-manager.com/aircraft/show/90656556,13:15,4:29,748,"$2,318,738.00","$2,073,912.00","$2,772.61","$136,143.02"
EWR - AMS,54173399461,EWR 56B-7 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/54173399461,https://www.airlines-manager.com/aircraft/show/89124072,15:00,6:14,748,"$2,076,963.00","$1,893,772.00","$2,531.78","$124,317.64"
EWR - ANC,54146711928,EWR CARGO 1,A321neo-LR,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/54146711928,https://www.airlines-manager.com/aircraft/show/103406580,4:00,18:59,0,"$313,843.00","$249,989.00",#DIV/0!,"$16,684.47"
EWR - ANC,54162072948,EWR-STL-PIT 3,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/54162072948,https://www.airlines-manager.com/aircraft/show/115400546,10:00,0:59,338,"$995,760.00","$932,676.00","$2,759.40","$62,247.56"
EWR - ANC,54168162226,EWR-STL-PIT 2,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/54168162226,https://www.airlines-manager.com/aircraft/show/115400547,13:15,4:14,338,"$995,760.00","$932,676.00","$2,759.40","$62,247.56"
EWR - ANC,54178655427,EWR-STL-PIT 1,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/54178655427,https://www.airlines-manager.com/aircraft/show/115400548,18:45,9:44,338,"$995,760.00","$932,676.00","$2,759.40","$62,247.56"
EWR - ANC,54187257257,EWR-STL-PIT 4,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/54187257257,https://www.airlines-manager.com/aircraft/show/115400545,21:45,12:44,337,"$904,057.00","$848,738.00","$2,518.51","$56,645.47"
EWR - ARN,54146711911,EWR 56D-1 E,787-10,https://www.airlines-manager.com/network/showline/50072203,https://www.airlines-manager.com/network/showflight/54146711911,https://www.airlines-manager.com/aircraft/show/118644436,3:45,19:44,648,"$1,965,373.00","$1,833,890.00","$2,830.08","$114,737.64"
EWR - ARN,54168162120,EWR 56D-3 E,787-10,https://www.airlines-manager.com/network/showline/50072203,https://www.airlines-manager.com/network/showflight/54168162120,https://www.airlines-manager.com/aircraft/show/118644438,12:45,4:44,648,"$1,965,373.00","$1,833,890.00","$2,830.08","$114,737.64"
EWR - ARN,54178655431,EWR 56D-5 E,787-10,https://www.airlines-manager.com/network/showline/50072203,https://www.airlines-manager.com/network/showflight/54178655431,https://www.airlines-manager.com/aircraft/show/118644440,18:45,10:44,648,"$1,965,373.00","$1,833,890.00","$2,830.08","$114,737.64"
EWR - ATH,54146711391,EWR 84A-7 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/54146711391,https://www.airlines-manager.com/aircraft/show/94521249,0:00,19:59,852,"$3,234,067.00","$2,941,774.00","$3,452.79","$147,211.38"
EWR - ATH,54183441491,EWR 84A-4 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/54183441491,https://www.airlines-manager.com/aircraft/show/90656551,19:45,15:44,851,"$3,230,298.00","$2,938,213.00","$3,452.66","$147,033.18"
EWR - ATL,54162072870,EWR-DFW-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/54162072870,https://www.airlines-manager.com/aircraft/show/90489724,10:00,14:59,320,"$316,346.00","$255,029.00",$796.97,"$51,176.39"
EWR - ATL,54168162308,EWR-DFW-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/54168162308,https://www.airlines-manager.com/aircraft/show/90489726,14:15,19:14,320,"$316,346.00","$255,029.00",$796.97,"$51,176.39"
EWR - ATL,54178655315,EWR-DFW-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/54178655315,https://www.airlines-manager.com/aircraft/show/90489725,17:30,22:29,320,"$316,346.00","$255,029.00",$796.97,"$51,176.39"
EWR - ATL,54178655316,EWR-DFW-ATL 6 B,A319-100,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/54178655316,https://www.airlines-manager.com/aircraft/show/105222360,18:30,23:29,198,"$240,998.00","$198,928.00","$1,004.69","$39,918.66"
EWR - ATL,54183441477,EWR-DFW-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/54183441477,https://www.airlines-manager.com/aircraft/show/86238752,19:45,0:44,320,"$316,346.00","$255,029.00",$796.97,"$51,176.39"
EWR - ATL,54187257310,EWR-DFW-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/54187257310,https://www.airlines-manager.com/aircraft/show/86238753,22:15,3:14,320,"$316,346.00","$255,029.00",$796.97,"$51,176.39"
EWR - AUS,54146711738,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/54146711738,https://www.airlines-manager.com/aircraft/show/90717077,2:00,9:59,310,"$499,170.00","$457,926.00","$1,477.18","$57,360.25"
EWR - AUS,54146711739,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/54146711739,https://www.airlines-manager.com/aircraft/show/90717076,3:00,10:59,310,"$499,170.00","$457,926.00","$1,477.18","$57,360.25"
EWR - AUS,54162072954,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/54162072954,https://www.airlines-manager.com/aircraft/show/90717078,10:00,17:59,310,"$499,170.00","$457,926.00","$1,477.18","$57,360.25"
EWR - AUS,54168162054,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/54168162054,https://www.airlines-manager.com/aircraft/show/95950199,12:00,19:59,310,"$499,170.00","$457,926.00","$1,477.18","$57,360.25"
EWR - AUS,54178655482,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/54178655482,https://www.airlines-manager.com/aircraft/show/90717079,19:15,3:14,310,"$499,170.00","$457,926.00","$1,477.18","$57,360.25"
EWR - BCN,54173399513,EWR 84A-5 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/54173399513,https://www.airlines-manager.com/aircraft/show/94521250,15:45,7:44,852,"$2,615,130.00","$2,372,833.00","$2,785.02","$148,456.70"
EWR - BCN,54183441498,EWR 84A-2 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/54183441498,https://www.airlines-manager.com/aircraft/show/94521252,20:00,11:59,852,"$2,615,130.00","$2,372,833.00","$2,785.02","$148,456.70"
EWR - BDA,54156164664,EWR-YEG-BFF 5 B,A319-100,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/54156164664,https://www.airlines-manager.com/aircraft/show/115493369,8:45,13:59,198,"$243,375.00","$221,602.00","$1,119.20","$42,344.33"
EWR - BDA,54162073004,EWR-YEG-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/54162073004,https://www.airlines-manager.com/aircraft/show/98936170,11:00,16:14,320,"$321,148.00","$290,358.00",$907.37,"$55,482.42"
EWR - BDA,54168162158,EWR-YEG-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/54168162158,https://www.airlines-manager.com/aircraft/show/98936171,13:00,18:14,320,"$321,148.00","$290,358.00",$907.37,"$55,482.42"
EWR - BDA,54183441612,EWR-YEG-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/54183441612,https://www.airlines-manager.com/aircraft/show/98936168,21:00,2:14,320,"$321,148.00","$290,358.00",$907.37,"$55,482.42"
EWR - BDA,54187257323,EWR-YEG-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/54187257323,https://www.airlines-manager.com/aircraft/show/98936169,22:30,3:44,252,"$258,071.00","$229,064.00",$908.98,"$43,770.19"
EWR - BDL,54146711615,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/54146711615,https://www.airlines-manager.com/aircraft/show/108834811,1:00,3:29,310,"$89,395.00","$71,067.00",$229.25,"$28,617.58"
EWR - BDL,54156164691,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/54156164691,https://www.airlines-manager.com/aircraft/show/108466265,9:30,11:59,112,"$38,361.00","$27,163.00",$242.53,"$10,938.12"
EWR - BDL,54168162238,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/54168162238,https://www.airlines-manager.com/aircraft/show/108834810,14:00,16:29,310,"$89,395.00","$71,067.00",$229.25,"$28,617.58"
EWR - BDL,54173399542,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/54173399542,https://www.airlines-manager.com/aircraft/show/108834809,16:00,18:29,310,"$89,395.00","$71,067.00",$229.25,"$28,617.58"
EWR - BDL,54187257388,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/54187257388,https://www.airlines-manager.com/aircraft/show/108834808,23:00,1:29,310,"$89,395.00","$71,067.00",$229.25,"$28,617.58"
EWR - BER,54146712012,EWR 84B-5  B2,777-300,https://www.airlines-manager.com/network/showline/49921899,https://www.airlines-manager.com/network/showflight/54146712012,https://www.airlines-manager.com/aircraft/show/117958699,5:45,22:14,852,"$2,705,265.00","$2,453,617.00","$2,879.83","$148,854.42"
EWR - BER,54178655343,EWR 84B-1  B2,777-300,https://www.airlines-manager.com/network/showline/49921899,https://www.airlines-manager.com/network/showflight/54178655343,https://www.airlines-manager.com/aircraft/show/117958695,17:45,10:14,852,"$2,705,265.00","$2,453,617.00","$2,879.83","$148,854.42"
EWR - BFF,54146711764,EWR-YEG-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/54146711764,https://www.airlines-manager.com/aircraft/show/98936168,2:15,10:14,320,"$505,586.00","$462,875.00","$1,446.48","$57,980.17"
EWR - BFF,54146711765,EWR-YEG-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/54146711765,https://www.airlines-manager.com/aircraft/show/98936169,3:45,11:44,320,"$505,586.00","$462,875.00","$1,446.48","$57,980.17"
EWR - BFF,54168162289,EWR-YEG-BFF 5 B,A319-100,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/54168162289,https://www.airlines-manager.com/aircraft/show/115493369,14:00,21:59,198,"$381,737.00","$350,827.00","$1,771.85","$43,944.93"
EWR - BFF,54173399569,EWR-YEG-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/54173399569,https://www.airlines-manager.com/aircraft/show/98936170,16:15,0:14,320,"$505,586.00","$462,875.00","$1,446.48","$57,980.17"
EWR - BFF,54178655398,EWR-YEG-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/54178655398,https://www.airlines-manager.com/aircraft/show/98936171,18:15,2:14,320,"$505,586.00","$462,875.00","$1,446.48","$57,980.17"
EWR - BHM,54146711761,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/54146711761,https://www.airlines-manager.com/aircraft/show/116042862,2:15,7:44,310,"$345,551.00","$316,758.00","$1,021.80","$57,767.42"
EWR - BHM,54156164643,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/54156164643,https://www.airlines-manager.com/aircraft/show/116042859,8:30,13:59,310,"$345,551.00","$316,758.00","$1,021.80","$57,767.42"
EWR - BHM,54168162298,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/54168162298,https://www.airlines-manager.com/aircraft/show/116042860,14:00,19:29,310,"$345,551.00","$316,758.00","$1,021.80","$57,767.42"
EWR - BHM,54173399487,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/54173399487,https://www.airlines-manager.com/aircraft/show/116042861,15:15,20:44,310,"$345,551.00","$316,758.00","$1,021.80","$57,767.42"
EWR - BIL,54162072861,EWR-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/54162072861,https://www.airlines-manager.com/aircraft/show/116047882,10:00,18:59,320,"$563,348.00","$517,391.00","$1,616.85","$57,594.55"
EWR - BIL,54168162071,EWR-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/54168162071,https://www.airlines-manager.com/aircraft/show/116047885,12:00,20:59,320,"$563,348.00","$517,391.00","$1,616.85","$57,594.55"
EWR - BIL,54183441641,EWR-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/54183441641,https://www.airlines-manager.com/aircraft/show/116047884,21:15,6:14,320,"$563,348.00","$517,391.00","$1,616.85","$57,594.55"
EWR - BIL,54187257372,EWR-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/54187257372,https://www.airlines-manager.com/aircraft/show/116047883,22:45,7:44,320,"$563,348.00","$517,391.00","$1,616.85","$57,594.55"
EWR - BNA,54146711876,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/54146711876,https://www.airlines-manager.com/aircraft/show/104610408,3:15,8:14,310,"$321,737.00","$292,397.00",$943.22,"$58,674.98"
EWR - BNA,54156164636,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/54156164636,https://www.airlines-manager.com/aircraft/show/104610409,8:30,13:29,310,"$321,737.00","$292,397.00",$943.22,"$58,674.98"
EWR - BNA,54168162165,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/54168162165,https://www.airlines-manager.com/aircraft/show/104610410,13:00,17:59,310,"$321,737.00","$292,397.00",$943.22,"$58,674.98"
EWR - BNA,54178655234,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/54178655234,https://www.airlines-manager.com/aircraft/show/96421247,17:00,21:59,112,"$152,744.00","$133,838.00","$1,194.98","$26,857.12"
EWR - BNA,54183441631,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/54183441631,https://www.airlines-manager.com/aircraft/show/104610407,21:15,2:14,310,"$321,737.00","$292,397.00",$943.22,"$58,674.98"
EWR - BOI,54146711668,EWR-BOI-PBI 5 B,A319-100,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/54146711668,https://www.airlines-manager.com/aircraft/show/110582846,1:30,11:59,198,"$490,416.00","$452,174.00","$2,283.71","$43,132.66"
EWR - BOI,54162072906,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/54162072906,https://www.airlines-manager.com/aircraft/show/104418460,10:00,20:29,310,"$652,968.00","$605,281.00","$1,952.52","$57,737.46"
EWR - BOI,54173399404,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/54173399404,https://www.airlines-manager.com/aircraft/show/104418463,15:00,1:29,310,"$652,968.00","$605,281.00","$1,952.52","$57,737.46"
EWR - BOI,54173399405,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/54173399405,https://www.airlines-manager.com/aircraft/show/104418462,16:30,2:59,310,"$652,968.00","$605,281.00","$1,952.52","$57,737.46"
EWR - BOI,54187257430,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/54187257430,https://www.airlines-manager.com/aircraft/show/104418461,23:30,9:59,310,"$652,968.00","$605,281.00","$1,952.52","$57,737.46"
EWR - BOS,54146711860,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/54146711860,https://www.airlines-manager.com/aircraft/show/104034464,3:00,5:59,216,"$93,775.00","$73,989.00",$342.54,"$24,800.78"
EWR - BOS,54162072923,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/54162072923,https://www.airlines-manager.com/aircraft/show/104034463,10:00,12:59,216,"$93,775.00","$73,989.00",$342.54,"$24,800.78"
EWR - BOS,54168162122,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/54168162122,https://www.airlines-manager.com/aircraft/show/104034462,12:45,15:44,216,"$93,775.00","$73,989.00",$342.54,"$24,800.78"
EWR - BOS,54168162123,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/54168162123,https://www.airlines-manager.com/aircraft/show/99316501,13:45,16:44,216,"$93,775.00","$73,989.00",$342.54,"$24,800.78"
EWR - BOS,54178655257,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/54178655257,https://www.airlines-manager.com/aircraft/show/104034464,17:00,19:59,216,"$93,775.00","$73,989.00",$342.54,"$24,800.78"
EWR - BOS,54183441521,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/54183441521,https://www.airlines-manager.com/aircraft/show/104034463,20:00,22:59,216,"$93,775.00","$73,989.00",$342.54,"$24,800.78"
EWR - BOS,54187257365,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/54187257365,https://www.airlines-manager.com/aircraft/show/104034462,22:45,1:44,216,"$93,775.00","$73,989.00",$342.54,"$24,800.78"
EWR - BOS,54187257366,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/54187257366,https://www.airlines-manager.com/aircraft/show/99316501,23:45,2:44,216,"$93,775.00","$73,989.00",$342.54,"$24,800.78"
EWR - BRU,54146711786,EWR 84B-1  B2,777-300,https://www.airlines-manager.com/network/showline/49921920,https://www.airlines-manager.com/network/showflight/54146711786,https://www.airlines-manager.com/aircraft/show/117958695,2:30,17:44,852,"$2,488,490.00","$2,262,476.00","$2,655.49","$148,521.40"
EWR - BRU,54173399315,EWR 84B-4  B2,777-300,https://www.airlines-manager.com/network/showline/49921920,https://www.airlines-manager.com/network/showflight/54173399315,https://www.airlines-manager.com/aircraft/show/117958698,14:30,5:44,852,"$2,488,490.00","$2,262,476.00","$2,655.49","$148,521.40"
EWR - BTV,54156164666,EWR-FCA-CID 1,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/54156164666,https://www.airlines-manager.com/aircraft/show/116042866,8:45,11:59,310,"$139,437.00","$120,222.00",$387.81,"$37,182.06"
EWR - BTV,54168162042,EWR-FCA-CID 4,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/54168162042,https://www.airlines-manager.com/aircraft/show/116042863,12:00,15:14,310,"$139,437.00","$120,222.00",$387.81,"$37,182.06"
EWR - BTV,54168162043,EWR-FCA-CID 3,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/54168162043,https://www.airlines-manager.com/aircraft/show/116042864,13:00,16:14,310,"$139,437.00","$120,222.00",$387.81,"$37,182.06"
EWR - BTV,54178655437,EWR-FCA-CID 2,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/54178655437,https://www.airlines-manager.com/aircraft/show/116042865,18:45,21:59,310,"$139,437.00","$120,222.00",$387.81,"$37,182.06"
EWR - BUF,54146712000,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/54146712000,https://www.airlines-manager.com/aircraft/show/106104450,5:30,8:44,112,"$70,545.00","$57,741.00",$515.54,"$17,858.04"
EWR - BUF,54162073048,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/54162073048,https://www.airlines-manager.com/aircraft/show/105731236,11:00,14:14,320,"$154,046.00","$130,076.00",$406.49,"$40,229.69"
EWR - BUF,54173399335,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/54173399335,https://www.airlines-manager.com/aircraft/show/88494376,14:45,17:59,320,"$154,046.00","$130,076.00",$406.49,"$40,229.69"
EWR - BUF,54178655409,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/54178655409,https://www.airlines-manager.com/aircraft/show/88494377,18:30,21:44,320,"$154,046.00","$130,076.00",$406.49,"$40,229.69"
EWR - BUF,54187257387,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/54187257387,https://www.airlines-manager.com/aircraft/show/88494375,23:00,2:14,319,"$153,752.00","$129,789.00",$406.86,"$40,140.93"
EWR - BWI,54146711457,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/54146711457,https://www.airlines-manager.com/aircraft/show/104034464,0:15,2:59,216,"$74,600.00","$56,030.00",$259.40,"$20,498.78"
EWR - BWI,54146711458,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/54146711458,https://www.airlines-manager.com/aircraft/show/104034463,3:15,5:59,216,"$74,600.00","$56,030.00",$259.40,"$20,498.78"
EWR - BWI,54162072924,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/54162072924,https://www.airlines-manager.com/aircraft/show/104034462,10:00,12:44,216,"$74,600.00","$56,030.00",$259.40,"$20,498.78"
EWR - BWI,54162072925,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/54162072925,https://www.airlines-manager.com/aircraft/show/99316501,11:00,13:44,216,"$74,600.00","$56,030.00",$259.40,"$20,498.78"
EWR - BWI,54168162302,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/54168162302,https://www.airlines-manager.com/aircraft/show/104034464,14:15,16:59,216,"$74,600.00","$56,030.00",$259.40,"$20,498.78"
EWR - BWI,54178655306,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/54178655306,https://www.airlines-manager.com/aircraft/show/104034463,17:15,19:59,216,"$74,600.00","$56,030.00",$259.40,"$20,498.78"
EWR - BWI,54183441519,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/54183441519,https://www.airlines-manager.com/aircraft/show/104034462,20:00,22:44,216,"$74,600.00","$56,030.00",$259.40,"$20,498.78"
EWR - BWI,54183441520,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/54183441520,https://www.airlines-manager.com/aircraft/show/99316501,21:00,23:44,216,"$74,600.00","$56,030.00",$259.40,"$20,498.78"
EWR - BZN,54146711527,EWR-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/54146711527,https://www.airlines-manager.com/aircraft/show/116047885,0:30,9:44,320,"$590,320.00","$543,416.00","$1,698.18","$58,853.72"
EWR - BZN,54168162055,EWR-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/54168162055,https://www.airlines-manager.com/aircraft/show/116047884,12:00,21:14,320,"$590,320.00","$543,416.00","$1,698.18","$58,853.72"
EWR - BZN,54168162056,EWR-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/54168162056,https://www.airlines-manager.com/aircraft/show/116047883,13:30,22:44,320,"$590,320.00","$543,416.00","$1,698.18","$58,853.72"
EWR - BZN,54187257343,EWR-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/54187257343,https://www.airlines-manager.com/aircraft/show/116047882,22:30,7:44,320,"$590,320.00","$543,416.00","$1,698.18","$58,853.72"
EWR - CAK,54156164649,EWR-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/54156164649,https://www.airlines-manager.com/aircraft/show/116047884,8:30,11:59,320,"$190,274.00","$166,172.00",$519.29,"$47,704.88"
EWR - CAK,54162072868,EWR-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/54162072868,https://www.airlines-manager.com/aircraft/show/116047883,10:00,13:29,320,"$190,274.00","$166,172.00",$519.29,"$47,704.88"
EWR - CAK,54178655462,EWR-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/54178655462,https://www.airlines-manager.com/aircraft/show/116047882,19:00,22:29,320,"$190,274.00","$166,172.00",$519.29,"$47,704.88"
EWR - CAK,54183441615,EWR-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/54183441615,https://www.airlines-manager.com/aircraft/show/116047885,21:00,0:29,284,"$177,287.00","$153,553.00",$540.68,"$44,082.20"
EWR - CDG,54146711861,EWR 56A-5 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/54146711861,https://www.airlines-manager.com/aircraft/show/106813011,3:00,18:14,748,"$2,328,133.00","$2,067,702.00","$2,764.31","$135,735.36"
EWR - CDG,54156164656,EWR 56A-6 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/54156164656,https://www.airlines-manager.com/aircraft/show/106813012,8:45,23:59,748,"$2,328,133.00","$2,067,702.00","$2,764.31","$135,735.36"
EWR - CDG,54178655459,EWR 56A-2 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/54178655459,https://www.airlines-manager.com/aircraft/show/106813008,19:00,10:14,558,"$1,740,434.00","$1,563,669.00","$2,802.27","$102,647.86"
EWR - CHS,54156164633,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/54156164633,https://www.airlines-manager.com/aircraft/show/110044463,8:30,12:59,310,"$288,564.00","$263,620.00",$850.39,"$58,800.00"
EWR - CHS,54168162033,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/54168162033,https://www.airlines-manager.com/aircraft/show/110113039,12:00,16:29,112,"$137,777.00","$121,714.00","$1,086.73","$27,148.10"
EWR - CHS,54168162034,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/54168162034,https://www.airlines-manager.com/aircraft/show/110044466,14:15,18:44,310,"$288,564.00","$263,620.00",$850.39,"$58,800.00"
EWR - CHS,54183441636,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/54183441636,https://www.airlines-manager.com/aircraft/show/110044465,21:15,1:44,310,"$288,564.00","$263,620.00",$850.39,"$58,800.00"
EWR - CHS,54187257399,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/54187257399,https://www.airlines-manager.com/aircraft/show/110044464,23:00,3:29,279,"$271,719.00","$247,309.00",$886.41,"$55,161.86"
EWR - CID,54146711617,EWR-FCA-CID 4,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/54146711617,https://www.airlines-manager.com/aircraft/show/116042863,1:15,6:59,310,"$356,225.00","$327,616.00","$1,056.83","$57,142.33"
EWR - CID,54146711618,EWR-FCA-CID 3,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/54146711618,https://www.airlines-manager.com/aircraft/show/116042864,2:15,7:59,310,"$356,225.00","$327,616.00","$1,056.83","$57,142.33"
EWR - CID,54162072886,EWR-FCA-CID 2,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/54162072886,https://www.airlines-manager.com/aircraft/show/116042865,10:00,15:44,310,"$356,225.00","$327,616.00","$1,056.83","$57,142.33"
EWR - CID,54187257281,EWR-FCA-CID 1,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/54187257281,https://www.airlines-manager.com/aircraft/show/116042866,22:00,3:44,292,"$344,123.00","$315,964.00","$1,082.07","$55,110.00"
EWR - CLE,54146711719,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/54146711719,https://www.airlines-manager.com/aircraft/show/106104450,1:45,5:29,112,"$91,793.00","$77,214.00",$689.41,"$20,682.32"
EWR - CLE,54146711720,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/54146711720,https://www.airlines-manager.com/aircraft/show/105731236,5:00,8:44,320,"$197,828.00","$171,014.00",$534.42,"$45,807.32"
EWR - CLE,54162073050,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/54162073050,https://www.airlines-manager.com/aircraft/show/88494376,11:00,14:44,320,"$197,828.00","$171,014.00",$534.42,"$45,807.32"
EWR - CLE,54173399339,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/54173399339,https://www.airlines-manager.com/aircraft/show/88494377,14:45,18:29,320,"$197,828.00","$171,014.00",$534.42,"$45,807.32"
EWR - CLE,54178655475,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/54178655475,https://www.airlines-manager.com/aircraft/show/88494375,19:15,22:59,320,"$197,828.00","$171,014.00",$534.42,"$45,807.32"
EWR - CLT,54146711705,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/54146711705,https://www.airlines-manager.com/aircraft/show/104034462,1:45,5:59,216,"$189,426.00","$162,915.00",$754.24,"$38,483.86"
EWR - CLT,54146711706,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/54146711706,https://www.airlines-manager.com/aircraft/show/99316501,2:45,6:59,216,"$189,426.00","$162,915.00",$754.24,"$38,483.86"
EWR - CLT,54162072915,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/54162072915,https://www.airlines-manager.com/aircraft/show/104034464,10:00,14:14,216,"$189,426.00","$162,915.00",$754.24,"$38,483.86"
EWR - CLT,54168162173,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/54168162173,https://www.airlines-manager.com/aircraft/show/104034463,13:00,17:14,216,"$189,426.00","$162,915.00",$754.24,"$38,483.86"
EWR - CLT,54173399504,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/54173399504,https://www.airlines-manager.com/aircraft/show/104034462,15:45,19:59,216,"$189,426.00","$162,915.00",$754.24,"$38,483.86"
EWR - CLT,54173399505,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/54173399505,https://www.airlines-manager.com/aircraft/show/99316501,16:45,20:59,216,"$189,426.00","$162,915.00",$754.24,"$38,483.86"
EWR - CLT,54183441524,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/54183441524,https://www.airlines-manager.com/aircraft/show/104034464,20:00,0:14,216,"$189,426.00","$162,915.00",$754.24,"$38,483.86"
EWR - CLT,54187257386,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/54187257386,https://www.airlines-manager.com/aircraft/show/104034463,23:00,3:14,216,"$189,426.00","$162,915.00",$754.24,"$38,483.86"
EWR - CMH,54146711963,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/54146711963,https://www.airlines-manager.com/aircraft/show/104610409,4:30,8:29,310,"$222,861.00","$198,707.00",$640.99,"$49,884.60"
EWR - CMH,54156164637,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/54156164637,https://www.airlines-manager.com/aircraft/show/104610410,8:30,12:29,310,"$222,861.00","$198,707.00",$640.99,"$49,884.60"
EWR - CMH,54168162167,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/54168162167,https://www.airlines-manager.com/aircraft/show/96421247,13:00,16:59,112,"$103,792.00","$88,495.00",$790.13,"$22,216.32"
EWR - CMH,54178655307,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/54178655307,https://www.airlines-manager.com/aircraft/show/104610407,17:15,21:14,310,"$222,861.00","$198,707.00",$640.99,"$49,884.60"
EWR - CMH,54187257414,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/54187257414,https://www.airlines-manager.com/aircraft/show/104610408,23:15,3:14,310,"$222,861.00","$198,707.00",$640.99,"$49,884.60"
EWR - COS,54146711688,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/54146711688,https://www.airlines-manager.com/aircraft/show/108834808,1:30,9:59,310,"$533,336.00","$491,684.00","$1,586.08","$57,958.82"
EWR - COS,54146711689,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/54146711689,https://www.airlines-manager.com/aircraft/show/108834811,3:30,11:59,310,"$533,336.00","$491,684.00","$1,586.08","$57,958.82"
EWR - COS,54168162132,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/54168162132,https://www.airlines-manager.com/aircraft/show/108466265,13:00,21:29,112,"$250,557.00","$222,739.00","$1,988.74","$26,256.07"
EWR - COS,54173399585,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/54173399585,https://www.airlines-manager.com/aircraft/show/108834810,16:30,0:59,310,"$533,336.00","$491,684.00","$1,586.08","$57,958.82"
EWR - COS,54178655419,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/54178655419,https://www.airlines-manager.com/aircraft/show/108834809,18:30,2:59,310,"$533,336.00","$491,684.00","$1,586.08","$57,958.82"
EWR - CUN,54146711550,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/54146711550,https://www.airlines-manager.com/aircraft/show/106581306,0:45,8:44,320,"$520,632.00","$472,856.00","$1,477.68","$59,230.40"
EWR - CUN,54146711551,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/54146711551,https://www.airlines-manager.com/aircraft/show/106581305,2:15,10:14,320,"$520,632.00","$472,856.00","$1,477.68","$59,230.40"
EWR - CUN,54168162150,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/54168162150,https://www.airlines-manager.com/aircraft/show/106581304,13:00,20:59,320,"$520,632.00","$472,856.00","$1,477.68","$59,230.40"
EWR - CUN,54173399316,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/54173399316,https://www.airlines-manager.com/aircraft/show/106581307,14:30,22:29,320,"$520,632.00","$472,856.00","$1,477.68","$59,230.40"
EWR - CUN,54187257304,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/54187257304,https://www.airlines-manager.com/aircraft/show/86238754,22:15,6:14,318,"$516,352.00","$468,691.00","$1,473.87","$58,708.68"
EWR - CVG,54146711487,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/54146711487,https://www.airlines-manager.com/aircraft/show/104610409,0:15,4:29,310,"$269,700.00","$241,975.00",$780.56,"$57,159.45"
EWR - CVG,54146711488,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/54146711488,https://www.airlines-manager.com/aircraft/show/104610410,4:15,8:29,310,"$269,700.00","$241,975.00",$780.56,"$57,159.45"
EWR - CVG,54156164623,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/54156164623,https://www.airlines-manager.com/aircraft/show/96421247,8:15,12:29,112,"$127,389.00","$109,763.00",$980.03,"$25,928.27"
EWR - CVG,54156164624,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/54156164624,https://www.airlines-manager.com/aircraft/show/107576645,9:00,13:14,0,"$69,000.00","$50,078.00",$0.00,"$11,829.45"
EWR - CVG,54168162168,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/54168162168,https://www.airlines-manager.com/aircraft/show/104610407,13:00,17:14,310,"$269,700.00","$241,975.00",$780.56,"$57,159.45"
EWR - CVG,54178655465,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/54178655465,https://www.airlines-manager.com/aircraft/show/104610408,19:00,23:14,310,"$269,700.00","$241,975.00",$780.56,"$57,159.45"
EWR - DEN,54146711698,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/54146711698,https://www.airlines-manager.com/aircraft/show/86270785,1:45,9:59,310,"$528,869.00","$464,763.00","$1,499.24","$56,448.95"
EWR - DEN,54146711699,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/54146711699,https://www.airlines-manager.com/aircraft/show/90452835,2:45,10:59,310,"$528,869.00","$464,763.00","$1,499.24","$56,448.95"
EWR - DEN,54162072883,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/54162072883,https://www.airlines-manager.com/aircraft/show/87153196,10:00,18:14,310,"$528,869.00","$464,763.00","$1,499.24","$56,448.95"
EWR - DEN,54162072884,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/54162072884,https://www.airlines-manager.com/aircraft/show/86270783,11:00,19:14,310,"$528,869.00","$464,763.00","$1,499.24","$56,448.95"
EWR - DEN,54173399568,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/54173399568,https://www.airlines-manager.com/aircraft/show/90452833,16:00,0:14,310,"$528,869.00","$464,763.00","$1,499.24","$56,448.95"
EWR - DEN,54178655281,EWR-DEN-SLC 6 B,A319-100,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/54178655281,https://www.airlines-manager.com/aircraft/show/105223076,17:00,1:14,198,"$398,370.00","$347,016.00","$1,752.61","$42,147.69"
EWR - DFW,54146711802,EWR-DFW-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/54146711802,https://www.airlines-manager.com/aircraft/show/90489724,2:30,9:59,320,"$473,208.00","$408,093.00","$1,275.29","$54,533.59"
EWR - DFW,54146711803,EWR-DFW-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/54146711803,https://www.airlines-manager.com/aircraft/show/86238753,3:30,10:59,320,"$473,208.00","$408,093.00","$1,275.29","$54,533.59"
EWR - DFW,54162072879,EWR-DFW-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/54162072879,https://www.airlines-manager.com/aircraft/show/90489725,10:00,17:29,320,"$473,208.00","$408,093.00","$1,275.29","$54,533.59"
EWR - DFW,54162072880,EWR-DFW-ATL 6 B,A319-100,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/54162072880,https://www.airlines-manager.com/aircraft/show/105222360,11:00,18:29,198,"$357,750.00","$312,148.00","$1,576.51","$41,712.43"
EWR - DFW,54168162106,EWR-DFW-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/54168162106,https://www.airlines-manager.com/aircraft/show/86238752,12:15,19:44,320,"$473,208.00","$408,093.00","$1,275.29","$54,533.59"
EWR - DFW,54178655476,EWR-DFW-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/54178655476,https://www.airlines-manager.com/aircraft/show/90489726,19:15,2:44,320,"$473,208.00","$408,093.00","$1,275.29","$54,533.59"
EWR - DSM,54146711741,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/54146711741,https://www.airlines-manager.com/aircraft/show/110113039,2:00,7:59,112,"$177,448.00","$157,408.00","$1,405.43","$26,307.74"
EWR - DSM,54146711742,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/54146711742,https://www.airlines-manager.com/aircraft/show/110044466,4:15,10:14,310,"$375,134.00","$344,684.00","$1,111.88","$57,607.35"
EWR - DSM,54168162030,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/54168162030,https://www.airlines-manager.com/aircraft/show/110044465,12:00,17:59,310,"$375,134.00","$344,684.00","$1,111.88","$57,607.35"
EWR - DSM,54168162031,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/54168162031,https://www.airlines-manager.com/aircraft/show/110044464,13:45,19:44,310,"$375,134.00","$344,684.00","$1,111.88","$57,607.35"
EWR - DSM,54187257327,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/54187257327,https://www.airlines-manager.com/aircraft/show/110044463,22:30,4:29,274,"$349,297.00","$319,847.00","$1,167.32","$53,456.32"
EWR - DTW,54146711885,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/54146711885,https://www.airlines-manager.com/aircraft/show/92003921,3:30,7:29,320,"$226,021.00","$188,774.00",$589.92,"$47,390.96"
EWR - DTW,54162072929,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/54162072929,https://www.airlines-manager.com/aircraft/show/92003925,10:00,13:59,320,"$226,021.00","$188,774.00",$589.92,"$47,390.96"
EWR - DTW,54168162232,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/54168162232,https://www.airlines-manager.com/aircraft/show/92003924,13:30,17:29,320,"$226,021.00","$188,774.00",$589.92,"$47,390.96"
EWR - DTW,54187257260,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/54187257260,https://www.airlines-manager.com/aircraft/show/92003923,21:45,1:44,320,"$226,021.00","$188,774.00",$589.92,"$47,390.96"
EWR - DTW,54187257261,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/54187257261,https://www.airlines-manager.com/aircraft/show/92003922,22:15,2:14,320,"$226,021.00","$188,774.00",$589.92,"$47,390.96"
EWR - DTW,54187257262,EWR CARGO 1,A321neo-LR,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/54187257262,https://www.airlines-manager.com/aircraft/show/103406580,22:45,2:44,0,"$77,953.00","$46,687.00",#DIV/0!,"$11,720.59"
EWR - DUB,54146711892,EWR 56C-2 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/54146711892,https://www.airlines-manager.com/aircraft/show/106721557,3:30,16:59,598,"$1,654,265.00","$1,543,001.00","$2,580.27","$114,437.65"
EWR - DUB,54146711893,EWR 56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/54146711893,https://www.airlines-manager.com/aircraft/show/106721559,5:15,18:44,598,"$1,654,265.00","$1,543,001.00","$2,580.27","$114,437.65"
EWR - DUB,54162072977,EWR 56C-6 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/54162072977,https://www.airlines-manager.com/aircraft/show/106721561,10:30,23:59,598,"$1,654,265.00","$1,543,001.00","$2,580.27","$114,437.65"
EWR - EDI,54146711942,EWR 56C-3 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/54146711942,https://www.airlines-manager.com/aircraft/show/106721558,4:15,17:59,598,"$1,639,756.00","$1,532,465.00","$2,562.65","$111,587.26"
EWR - EDI,54146711943,EWR 56C-5 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/54146711943,https://www.airlines-manager.com/aircraft/show/106721560,6:00,19:44,598,"$1,639,756.00","$1,532,465.00","$2,562.65","$111,587.26"
EWR - EDI,54183441486,EWR 56C-5 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/54183441486,https://www.airlines-manager.com/aircraft/show/106721560,19:45,9:29,597,"$1,637,989.00","$1,530,779.00","$2,564.12","$111,464.49"
EWR - ELP,54146711495,EWR-ELP-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/54146711495,https://www.airlines-manager.com/aircraft/show/103365577,0:30,9:59,320,"$590,378.00","$540,596.00","$1,689.36","$57,004.85"
EWR - ELP,54146711496,EWR-ELP-SAT 5 B,A319-100,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/54146711496,https://www.airlines-manager.com/aircraft/show/110582847,2:30,11:59,198,"$444,845.00","$408,642.00","$2,063.85","$43,090.54"
EWR - ELP,54162072921,EWR-ELP-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/54162072921,https://www.airlines-manager.com/aircraft/show/103365578,10:00,19:29,320,"$590,378.00","$540,596.00","$1,689.36","$57,004.85"
EWR - ELP,54168162057,EWR-ELP-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/54168162057,https://www.airlines-manager.com/aircraft/show/103365575,12:00,21:29,320,"$590,378.00","$540,596.00","$1,689.36","$57,004.85"
EWR - ELP,54173399573,EWR-ELP-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/54173399573,https://www.airlines-manager.com/aircraft/show/103365576,16:15,1:44,320,"$590,378.00","$540,596.00","$1,689.36","$57,004.85"
EWR - FAR,54146711713,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/54146711713,https://www.airlines-manager.com/aircraft/show/86270784,1:45,8:29,310,"$423,560.00","$390,593.00","$1,259.98","$58,008.86"
EWR - FAR,54146711714,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/54146711714,https://www.airlines-manager.com/aircraft/show/86270786,5:00,11:44,310,"$423,560.00","$390,593.00","$1,259.98","$58,008.86"
EWR - FAR,54173399369,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/54173399369,https://www.airlines-manager.com/aircraft/show/86270787,15:00,21:44,310,"$423,560.00","$390,593.00","$1,259.98","$58,008.86"
EWR - FAR,54178655485,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/54178655485,https://www.airlines-manager.com/aircraft/show/90452834,19:15,1:59,310,"$423,560.00","$390,593.00","$1,259.98","$58,008.86"
EWR - FCA,54168162044,EWR-FCA-CID 1,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/54168162044,https://www.airlines-manager.com/aircraft/show/116042866,12:00,21:59,310,"$623,241.00","$578,539.00","$1,866.25","$57,950.48"
EWR - FCA,54173399483,EWR-FCA-CID 4,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/54173399483,https://www.airlines-manager.com/aircraft/show/116042863,15:15,1:14,310,"$623,241.00","$578,539.00","$1,866.25","$57,950.48"
EWR - FCA,54173399484,EWR-FCA-CID 3,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/54173399484,https://www.airlines-manager.com/aircraft/show/116042864,16:15,2:14,310,"$623,241.00","$578,539.00","$1,866.25","$57,950.48"
EWR - FCA,54187257277,EWR-FCA-CID 2,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/54187257277,https://www.airlines-manager.com/aircraft/show/116042865,22:00,7:59,310,"$623,241.00","$578,539.00","$1,866.25","$57,950.48"
EWR - FCO,54146711792,EWR 84A-2 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/54146711792,https://www.airlines-manager.com/aircraft/show/94521252,2:30,19:59,852,"$2,900,124.00","$2,626,210.00","$3,082.41","$150,212.20"
EWR - FCO,54168162076,EWR 84A-3 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/54168162076,https://www.airlines-manager.com/aircraft/show/90656553,12:00,5:29,852,"$2,900,124.00","$2,626,210.00","$3,082.41","$150,212.20"
EWR - FLL,54146711627,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/54146711627,https://www.airlines-manager.com/aircraft/show/107576645,1:15,7:29,0,"$102,887.00","$77,339.00",$0.00,"$12,407.33"
EWR - FLL,54146711628,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/54146711628,https://www.airlines-manager.com/aircraft/show/92003924,3:45,9:59,320,"$388,966.00","$348,953.00","$1,090.48","$55,981.76"
EWR - FLL,54146711629,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/54146711629,https://www.airlines-manager.com/aircraft/show/92003922,5:45,11:59,320,"$388,966.00","$348,953.00","$1,090.48","$55,981.76"
EWR - FLL,54162073066,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/54162073066,https://www.airlines-manager.com/aircraft/show/92003921,11:00,17:14,320,"$388,966.00","$348,953.00","$1,090.48","$55,981.76"
EWR - FLL,54168162037,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/54168162037,https://www.airlines-manager.com/aircraft/show/92003923,12:00,18:14,320,"$388,966.00","$348,953.00","$1,090.48","$55,981.76"
EWR - FLL,54178655328,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/54178655328,https://www.airlines-manager.com/aircraft/show/92003925,17:30,23:44,320,"$388,966.00","$348,953.00","$1,090.48","$55,981.76"
EWR - FRA,54146711809,EWR 56B-5 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/54146711809,https://www.airlines-manager.com/aircraft/show/94521253,2:45,18:44,748,"$2,440,394.00","$2,175,490.00","$2,908.41","$136,109.91"
EWR - FRA,54146711810,EWR 56B-3 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/54146711810,https://www.airlines-manager.com/aircraft/show/90656555,4:30,20:29,748,"$2,440,394.00","$2,175,490.00","$2,908.41","$136,109.91"
EWR - FRA,54146711811,EWR 56B-1 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/54146711811,https://www.airlines-manager.com/aircraft/show/94521251,6:15,22:14,748,"$2,202,225.00","$2,001,233.00","$2,675.45","$125,207.49"
EWR - FSD,54146711956,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/54146711956,https://www.airlines-manager.com/aircraft/show/107161240,4:15,10:59,310,"$411,278.00","$378,797.00","$1,221.93","$56,256.98"
EWR - FSD,54156164678,EWR-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/54156164678,https://www.airlines-manager.com/aircraft/show/86782214,9:00,15:44,112,"$193,854.00","$172,324.00","$1,538.61","$25,592.67"
EWR - FSD,54162073028,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/54162073028,https://www.airlines-manager.com/aircraft/show/107161239,11:00,17:44,310,"$411,278.00","$378,797.00","$1,221.93","$56,256.98"
EWR - FSD,54173399481,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/54173399481,https://www.airlines-manager.com/aircraft/show/107161241,15:15,21:59,310,"$411,278.00","$378,797.00","$1,221.93","$56,256.98"
EWR - FSD,54178655397,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/54178655397,https://www.airlines-manager.com/aircraft/show/107161238,18:15,0:59,279,"$386,833.00","$355,346.00","$1,273.64","$52,774.16"
EWR - GRR,54156164625,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/54156164625,https://www.airlines-manager.com/aircraft/show/116042862,8:30,12:59,310,"$277,025.00","$252,083.00",$813.17,"$56,226.69"
EWR - GRR,54168162301,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/54168162301,https://www.airlines-manager.com/aircraft/show/116042859,14:00,18:29,310,"$277,025.00","$252,083.00",$813.17,"$56,226.69"
EWR - GRR,54183441456,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/54183441456,https://www.airlines-manager.com/aircraft/show/116042860,19:30,23:59,310,"$277,025.00","$252,083.00",$813.17,"$56,226.69"
EWR - GRR,54183441457,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/54183441457,https://www.airlines-manager.com/aircraft/show/116042861,20:45,1:14,310,"$277,025.00","$252,083.00",$813.17,"$56,226.69"
EWR - HEL,54162072986,EWR 56D-6 E,787-10,https://www.airlines-manager.com/network/showline/50072206,https://www.airlines-manager.com/network/showflight/54162072986,https://www.airlines-manager.com/aircraft/show/118644441,10:45,3:29,648,"$2,045,741.00","$1,910,556.00","$2,948.39","$114,176.65"
EWR - HEL,54162072987,EWR 56D-7 E,787-10,https://www.airlines-manager.com/network/showline/50072206,https://www.airlines-manager.com/network/showflight/54162072987,https://www.airlines-manager.com/aircraft/show/118644442,11:00,3:44,648,"$2,045,741.00","$1,910,556.00","$2,948.39","$114,176.65"
EWR - HEL,54183441507,EWR 56D-2 E,787-10,https://www.airlines-manager.com/network/showline/50072206,https://www.airlines-manager.com/network/showflight/54183441507,https://www.airlines-manager.com/aircraft/show/118644437,20:00,12:44,573,"$1,886,886.00","$1,759,413.00","$3,070.53","$105,144.20"
EWR - IAH,54146711902,EWR-IAH-LAS 3,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/54146711902,https://www.airlines-manager.com/aircraft/show/105859512,3:30,10:59,338,"$517,432.00","$469,570.00","$1,389.26","$62,748.78"
EWR - IAH,54146711903,EWR-IAH-LAS 5,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/54146711903,https://www.airlines-manager.com/aircraft/show/105859514,4:30,11:59,338,"$517,432.00","$469,570.00","$1,389.26","$62,748.78"
EWR - IAH,54156164564,EWR-IAH-LAS 1,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/54156164564,https://www.airlines-manager.com/aircraft/show/105859510,7:30,14:59,338,"$517,432.00","$469,570.00","$1,389.26","$62,748.78"
EWR - IAH,54162073046,EWR-IAH-LAS 2,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/54162073046,https://www.airlines-manager.com/aircraft/show/105859511,11:00,18:29,338,"$517,432.00","$469,570.00","$1,389.26","$62,748.78"
EWR - IAH,54168162072,EWR-IAH-LAS 4,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/54168162072,https://www.airlines-manager.com/aircraft/show/105859513,12:00,19:29,338,"$517,432.00","$469,570.00","$1,389.26","$62,748.78"
EWR - IAH,54178655440,EWR-IAH-LAS 6,ERJ-175,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/54178655440,https://www.airlines-manager.com/aircraft/show/105864236,18:45,2:14,112,"$225,538.00","$193,331.00","$1,726.17","$25,834.88"
EWR - ICT,54146711593,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/54146711593,https://www.airlines-manager.com/aircraft/show/108834810,1:00,7:59,310,"$441,027.00","$406,327.00","$1,310.73","$58,185.25"
EWR - ICT,54146711594,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/54146711594,https://www.airlines-manager.com/aircraft/show/108834809,3:00,9:59,310,"$441,027.00","$406,327.00","$1,310.73","$58,185.25"
EWR - ICT,54162073022,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/54162073022,https://www.airlines-manager.com/aircraft/show/108834808,11:00,17:59,310,"$441,027.00","$406,327.00","$1,310.73","$58,185.25"
EWR - ICT,54168162131,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/54168162131,https://www.airlines-manager.com/aircraft/show/108834811,13:00,19:59,310,"$441,027.00","$406,327.00","$1,310.73","$58,185.25"
EWR - ICT,54183441649,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/54183441649,https://www.airlines-manager.com/aircraft/show/108466265,21:30,4:29,112,"$208,777.00","$185,757.00","$1,658.54","$26,600.05"
EWR - IND,54146711489,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/54146711489,https://www.airlines-manager.com/aircraft/show/88494376,0:30,4:59,320,"$294,206.00","$262,638.00",$820.74,"$58,580.97"
EWR - IND,54146711490,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/54146711490,https://www.airlines-manager.com/aircraft/show/88494377,4:15,8:44,320,"$294,206.00","$262,638.00",$820.74,"$58,580.97"
EWR - IND,54162073053,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/54162073053,https://www.airlines-manager.com/aircraft/show/88494375,11:00,15:29,320,"$294,206.00","$262,638.00",$820.74,"$58,580.97"
EWR - IND,54178655317,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/54178655317,https://www.airlines-manager.com/aircraft/show/106104450,17:30,21:59,112,"$140,444.00","$122,789.00","$1,096.33","$27,387.88"
EWR - IND,54183441581,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/54183441581,https://www.airlines-manager.com/aircraft/show/105731236,20:45,1:14,320,"$294,206.00","$262,638.00",$820.74,"$58,580.97"
EWR - JAN,54146711750,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/54146711750,https://www.airlines-manager.com/aircraft/show/90452834,2:00,8:14,310,"$387,663.00","$356,982.00","$1,151.55","$57,269.84"
EWR - JAN,54156164640,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/54156164640,https://www.airlines-manager.com/aircraft/show/86270784,8:30,14:44,310,"$387,663.00","$356,982.00","$1,151.55","$57,269.84"
EWR - JAN,54168162087,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/54168162087,https://www.airlines-manager.com/aircraft/show/86270786,12:00,18:14,310,"$387,663.00","$356,982.00","$1,151.55","$57,269.84"
EWR - JAN,54187257254,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/54187257254,https://www.airlines-manager.com/aircraft/show/86270787,21:45,3:59,310,"$387,663.00","$356,982.00","$1,151.55","$57,269.84"
EWR - JAX,54146711780,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/54146711780,https://www.airlines-manager.com/aircraft/show/104610407,2:15,7:29,310,"$336,410.00","$307,387.00",$991.57,"$58,736.37"
EWR - JAX,54156164622,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/54156164622,https://www.airlines-manager.com/aircraft/show/104610408,8:15,13:29,310,"$336,410.00","$307,387.00",$991.57,"$58,736.37"
EWR - JAX,54168162266,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/54168162266,https://www.airlines-manager.com/aircraft/show/104610409,14:00,19:14,310,"$336,410.00","$307,387.00",$991.57,"$58,736.37"
EWR - JAX,54178655378,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/54178655378,https://www.airlines-manager.com/aircraft/show/104610410,18:00,23:14,310,"$336,410.00","$307,387.00",$991.57,"$58,736.37"
EWR - JAX,54187257272,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/54187257272,https://www.airlines-manager.com/aircraft/show/96421247,22:00,3:14,112,"$159,716.00","$140,870.00","$1,257.77","$26,917.83"
EWR - KEF,54178655236,EWR 56C-2 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/54178655236,https://www.airlines-manager.com/aircraft/show/106721557,17:00,4:14,598,"$1,336,918.00","$1,247,907.00","$2,086.80","$111,089.64"
EWR - KEF,54178655237,EWR 56C-3 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/54178655237,https://www.airlines-manager.com/aircraft/show/106721558,18:00,5:14,598,"$1,336,918.00","$1,247,907.00","$2,086.80","$111,089.64"
EWR - KEF,54178655238,EWR 56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/54178655238,https://www.airlines-manager.com/aircraft/show/106721559,18:45,5:59,598,"$1,336,918.00","$1,247,907.00","$2,086.80","$111,089.64"
EWR - LAS,54146711454,EWR-IAH-LAS 2,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/54146711454,https://www.airlines-manager.com/aircraft/show/105859511,0:15,10:59,338,"$734,476.00","$670,312.00","$1,983.17","$62,451.43"
EWR - LAS,54146711455,EWR-IAH-LAS 4,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/54146711455,https://www.airlines-manager.com/aircraft/show/105859513,1:15,11:59,338,"$734,476.00","$670,312.00","$1,983.17","$62,451.43"
EWR - LAS,54146711456,EWR-IAH-LAS 6,ERJ-175,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/54146711456,https://www.airlines-manager.com/aircraft/show/105864236,2:15,12:59,112,"$317,374.00","$273,329.00","$2,440.44","$25,465.43"
EWR - LAS,54168162073,EWR-IAH-LAS 5,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/54168162073,https://www.airlines-manager.com/aircraft/show/105859514,12:00,22:44,338,"$734,476.00","$670,312.00","$1,983.17","$62,451.43"
EWR - LAS,54173399475,EWR-IAH-LAS 1,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/54173399475,https://www.airlines-manager.com/aircraft/show/105859510,15:00,1:44,338,"$734,476.00","$670,312.00","$1,983.17","$62,451.43"
EWR - LAS,54173399476,EWR-IAH-LAS 3,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/54173399476,https://www.airlines-manager.com/aircraft/show/105859512,16:45,3:29,338,"$734,476.00","$670,312.00","$1,983.17","$62,451.43"
EWR - LAX,54146711422,EWR-SFO-LAX 4,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/54146711422,https://www.airlines-manager.com/aircraft/show/89233030,0:00,11:29,400,"$933,133.00","$841,910.00","$2,104.78","$73,315.82"
EWR - LAX,54146711423,EWR-SFO-LAX 5,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/54146711423,https://www.airlines-manager.com/aircraft/show/89233027,2:00,13:29,400,"$933,133.00","$841,910.00","$2,104.78","$73,315.82"
EWR - LAX,54168162115,EWR-SFO-LAX 1,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/54168162115,https://www.airlines-manager.com/aircraft/show/83716137,12:30,23:59,400,"$933,133.00","$841,910.00","$2,104.78","$73,315.82"
EWR - LAX,54168162116,EWR-SFO-LAX 2,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/54168162116,https://www.airlines-manager.com/aircraft/show/89233028,14:00,1:29,400,"$933,133.00","$841,910.00","$2,104.78","$73,315.82"
EWR - LAX,54173399492,EWR-SFO-LAX 3,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/54173399492,https://www.airlines-manager.com/aircraft/show/89233029,15:30,2:59,400,"$933,133.00","$841,910.00","$2,104.78","$73,315.82"
EWR - LHR,54146711777,EWR 56A-1 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/54146711777,https://www.airlines-manager.com/aircraft/show/106813007,2:15,16:44,748,"$2,220,102.00","$1,968,499.00","$2,631.68","$135,914.78"
EWR - LHR,54168162114,EWR 56A-4 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/54168162114,https://www.airlines-manager.com/aircraft/show/106813010,12:30,2:59,748,"$2,220,102.00","$1,968,499.00","$2,631.68","$135,914.78"
EWR - LHR,54178655399,EWR 56A-5 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/54178655399,https://www.airlines-manager.com/aircraft/show/106813011,18:15,8:44,748,"$2,003,986.00","$1,809,626.00","$2,419.29","$124,945.41"
EWR - LIS,54146711999,EWR 84A-4 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/54146711999,https://www.airlines-manager.com/aircraft/show/90656551,5:30,19:44,852,"$2,328,457.00","$2,120,122.00","$2,488.41","$148,954.71"
EWR - LIS,54168162109,EWR 84A-1 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/54168162109,https://www.airlines-manager.com/aircraft/show/90656554,12:15,2:29,852,"$2,328,457.00","$2,120,122.00","$2,488.41","$148,954.71"
EWR - LIT,54156164638,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/54156164638,https://www.airlines-manager.com/aircraft/show/86270787,8:30,14:44,310,"$393,416.00","$362,459.00","$1,169.22","$58,148.50"
EWR - LIT,54168162145,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/54168162145,https://www.airlines-manager.com/aircraft/show/90452834,13:00,19:14,310,"$393,416.00","$362,459.00","$1,169.22","$58,148.50"
EWR - LIT,54183441450,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/54183441450,https://www.airlines-manager.com/aircraft/show/86270784,19:30,1:44,310,"$393,416.00","$362,459.00","$1,169.22","$58,148.50"
EWR - LIT,54187257368,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/54187257368,https://www.airlines-manager.com/aircraft/show/86270786,22:45,4:59,310,"$393,416.00","$362,459.00","$1,169.22","$58,148.50"
EWR - MAD,54146711436,EWR 56B-7 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/54146711436,https://www.airlines-manager.com/aircraft/show/89124072,0:00,14:59,748,"$2,289,510.00","$2,036,551.00","$2,722.66","$135,921.09"
EWR - MAD,54183441567,EWR 56B-3 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/54183441567,https://www.airlines-manager.com/aircraft/show/90656555,20:30,11:29,748,"$2,289,510.00","$2,036,551.00","$2,722.66","$135,921.09"
EWR - MAD,54187257302,EWR 56B-1 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/54187257302,https://www.airlines-manager.com/aircraft/show/94521251,22:15,13:14,748,"$2,065,725.00","$1,872,334.00","$2,503.12","$124,961.11"
EWR - MBJ,54146711886,EWR 56D-7 E,787-10,https://www.airlines-manager.com/network/showline/50072192,https://www.airlines-manager.com/network/showflight/54146711886,https://www.airlines-manager.com/aircraft/show/118644442,3:30,10:59,648,"$941,073.00","$879,294.00","$1,356.94","$117,500.31"
EWR - MBJ,54162073072,EWR 56D-5 E,787-10,https://www.airlines-manager.com/network/showline/50072192,https://www.airlines-manager.com/network/showflight/54162073072,https://www.airlines-manager.com/aircraft/show/118644440,11:15,18:44,648,"$941,073.00","$879,294.00","$1,356.94","$117,500.31"
EWR - MBJ,54183441478,EWR 56D-1 E,787-10,https://www.airlines-manager.com/network/showline/50072192,https://www.airlines-manager.com/network/showflight/54183441478,https://www.airlines-manager.com/aircraft/show/118644436,19:45,3:14,633,"$913,467.00","$852,472.00","$1,346.72","$113,916.08"
EWR - MCI,54146711912,EWR-ELP-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/54146711912,https://www.airlines-manager.com/aircraft/show/103365578,3:45,9:59,320,"$393,086.00","$354,110.00","$1,106.59","$56,809.09"
EWR - MCI,54146711913,EWR-ELP-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/54146711913,https://www.airlines-manager.com/aircraft/show/103365575,5:45,11:59,320,"$393,086.00","$354,110.00","$1,106.59","$56,809.09"
EWR - MCI,54162072916,EWR-ELP-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/54162072916,https://www.airlines-manager.com/aircraft/show/103365576,10:00,16:14,320,"$393,086.00","$354,110.00","$1,106.59","$56,809.09"
EWR - MCI,54168162219,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/54168162219,https://www.airlines-manager.com/aircraft/show/107576645,13:15,19:29,0,"$103,090.00","$77,943.00",$0.00,"$12,504.22"
EWR - MCI,54178655393,EWR-ELP-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/54178655393,https://www.airlines-manager.com/aircraft/show/103365577,18:15,0:29,320,"$393,086.00","$354,110.00","$1,106.59","$56,809.09"
EWR - MCI,54183441544,EWR-ELP-SAT 5 B,A319-100,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/54183441544,https://www.airlines-manager.com/aircraft/show/110582847,20:15,2:29,198,"$297,566.00","$269,839.00","$1,362.82","$43,289.68"
EWR - MCO,54146711704,EWR-IAH-LAS 1,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/54146711704,https://www.airlines-manager.com/aircraft/show/105859510,1:45,7:29,338,"$389,629.00","$350,334.00","$1,036.49","$61,104.77"
EWR - MCO,54162073047,EWR-IAH-LAS 3,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/54162073047,https://www.airlines-manager.com/aircraft/show/105859512,11:00,16:44,338,"$389,629.00","$350,334.00","$1,036.49","$61,104.77"
EWR - MCO,54168162157,EWR-IAH-LAS 6,ERJ-175,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/54168162157,https://www.airlines-manager.com/aircraft/show/105864236,13:00,18:44,112,"$170,762.00","$144,844.00","$1,293.25","$25,263.49"
EWR - MCO,54178655410,EWR-IAH-LAS 2,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/54178655410,https://www.airlines-manager.com/aircraft/show/105859511,18:30,0:14,338,"$389,629.00","$350,334.00","$1,036.49","$61,104.77"
EWR - MCO,54183441464,EWR-IAH-LAS 4,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/54183441464,https://www.airlines-manager.com/aircraft/show/105859513,19:30,1:14,338,"$389,629.00","$350,334.00","$1,036.49","$61,104.77"
EWR - MCO,54187257354,EWR-IAH-LAS 5,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/54187257354,https://www.airlines-manager.com/aircraft/show/105859514,22:45,4:29,334,"$386,892.00","$347,683.00","$1,040.97","$60,642.38"
EWR - MEM,54146711636,EWR-RNO-MEM 4,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/54146711636,https://www.airlines-manager.com/aircraft/show/99920619,1:15,6:59,320,"$361,672.00","$324,614.00","$1,014.42","$56,618.72"
EWR - MEM,54146711637,EWR-RNO-MEM 3,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/54146711637,https://www.airlines-manager.com/aircraft/show/99920620,3:45,9:29,320,"$361,672.00","$324,614.00","$1,014.42","$56,618.72"
EWR - MEM,54162072971,EWR-RNO-MEM 2,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/54162072971,https://www.airlines-manager.com/aircraft/show/99920621,10:15,15:59,320,"$361,672.00","$324,614.00","$1,014.42","$56,618.72"
EWR - MEM,54183441447,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/54183441447,https://www.airlines-manager.com/aircraft/show/107576645,19:30,1:14,0,"$96,286.00","$72,851.00",$0.00,"$12,706.57"
EWR - MEM,54183441448,EWR-RNO-MEM 5 B,A319-100,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/54183441448,https://www.airlines-manager.com/aircraft/show/100096560,20:15,1:59,198,"$274,266.00","$248,050.00","$1,252.78","$43,264.53"
EWR - MEM,54183441449,EWR-RNO-MEM 1,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/54183441449,https://www.airlines-manager.com/aircraft/show/99920622,21:30,3:14,320,"$361,672.00","$324,614.00","$1,014.42","$56,618.72"
EWR - MEX,54146711731,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/54146711731,https://www.airlines-manager.com/aircraft/show/92003923,1:45,11:59,320,"$638,807.00","$575,207.00","$1,797.52","$56,209.15"
EWR - MEX,54162072907,EWR-DTW-YYZ 6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/54162072907,https://www.airlines-manager.com/aircraft/show/104258433,10:00,20:14,216,"$486,413.00","$439,908.00","$2,036.61","$42,987.75"
EWR - MEX,54168162041,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/54168162041,https://www.airlines-manager.com/aircraft/show/92003922,12:00,22:14,320,"$638,807.00","$575,207.00","$1,797.52","$56,209.15"
EWR - MEX,54178655295,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/54178655295,https://www.airlines-manager.com/aircraft/show/92003921,17:15,3:29,320,"$638,807.00","$575,207.00","$1,797.52","$56,209.15"
EWR - MEX,54178655296,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/54178655296,https://www.airlines-manager.com/aircraft/show/92003924,17:30,3:44,320,"$638,807.00","$575,207.00","$1,797.52","$56,209.15"
EWR - MEX,54183441536,EWR-DTW-YYZ 6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/54183441536,https://www.airlines-manager.com/aircraft/show/104258433,20:15,6:29,216,"$486,413.00","$439,908.00","$2,036.61","$42,987.75"
EWR - MEX,54187257438,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/54187257438,https://www.airlines-manager.com/aircraft/show/92003925,23:45,9:59,296,"$595,559.00","$533,651.00","$1,802.88","$52,148.31"
EWR - MHT,54146711907,EWR-FCA-CID 1,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/54146711907,https://www.airlines-manager.com/aircraft/show/116042866,3:45,6:44,310,"$126,333.00","$107,196.00",$345.79,"$35,931.62"
EWR - MHT,54156164670,EWR-FCA-CID 4,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/54156164670,https://www.airlines-manager.com/aircraft/show/116042863,9:00,11:59,310,"$126,333.00","$107,196.00",$345.79,"$35,931.62"
EWR - MHT,54162072937,EWR-FCA-CID 3,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/54162072937,https://www.airlines-manager.com/aircraft/show/116042864,10:00,12:59,310,"$126,333.00","$107,196.00",$345.79,"$35,931.62"
EWR - MHT,54162072938,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/54162072938,https://www.airlines-manager.com/aircraft/show/98887257,11:00,13:59,112,"$56,299.00","$44,452.00",$396.89,"$14,900.11"
EWR - MHT,54173399514,EWR-FCA-CID 2,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/54173399514,https://www.airlines-manager.com/aircraft/show/116042865,15:45,18:44,310,"$126,333.00","$107,196.00",$345.79,"$35,931.62"
EWR - MIA,54146711804,EWR-MIA-ORD 5,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/54146711804,https://www.airlines-manager.com/aircraft/show/113251309,2:30,8:44,338,"$429,805.00","$386,719.00","$1,144.14","$62,040.48"
EWR - MIA,54146711805,EWR-MIA-ORD 1,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/54146711805,https://www.airlines-manager.com/aircraft/show/113251305,4:00,10:14,338,"$429,805.00","$386,719.00","$1,144.14","$62,040.48"
EWR - MIA,54162072899,EWR-MIA-ORD 2,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/54162072899,https://www.airlines-manager.com/aircraft/show/113251306,10:00,16:14,338,"$429,805.00","$386,719.00","$1,144.14","$62,040.48"
EWR - MIA,54162072900,EWR-MIA-ORD 4,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/54162072900,https://www.airlines-manager.com/aircraft/show/113251308,11:00,17:14,338,"$429,805.00","$386,719.00","$1,144.14","$62,040.48"
EWR - MIA,54173399588,EWR-MIA-ORD 3,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/54173399588,https://www.airlines-manager.com/aircraft/show/113251307,16:30,22:44,338,"$429,805.00","$386,719.00","$1,144.14","$62,040.48"
EWR - MKE,54146711877,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/54146711877,https://www.airlines-manager.com/aircraft/show/96421247,3:15,8:14,112,"$149,880.00","$131,888.00","$1,177.57","$26,465.82"
EWR - MKE,54156164562,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/54156164562,https://www.airlines-manager.com/aircraft/show/104610407,7:30,12:29,310,"$315,504.00","$287,619.00",$927.80,"$57,716.19"
EWR - MKE,54168162265,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/54168162265,https://www.airlines-manager.com/aircraft/show/104610408,14:00,18:59,310,"$315,504.00","$287,619.00",$927.80,"$57,716.19"
EWR - MKE,54178655467,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/54178655467,https://www.airlines-manager.com/aircraft/show/104610409,19:15,0:14,310,"$315,504.00","$287,619.00",$927.80,"$57,716.19"
EWR - MKE,54187257416,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/54187257416,https://www.airlines-manager.com/aircraft/show/104610410,23:15,4:14,310,"$315,504.00","$287,619.00",$927.80,"$57,716.19"
EWR - MSN,54146711806,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/54146711806,https://www.airlines-manager.com/aircraft/show/116042859,2:30,7:44,310,"$330,385.00","$303,141.00",$977.87,"$57,925.03"
EWR - MSN,54156164659,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/54156164659,https://www.airlines-manager.com/aircraft/show/116042860,8:45,13:59,310,"$330,385.00","$303,141.00",$977.87,"$57,925.03"
EWR - MSN,54162072911,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/54162072911,https://www.airlines-manager.com/aircraft/show/116042861,10:00,15:14,310,"$330,385.00","$303,141.00",$977.87,"$57,925.03"
EWR - MSN,54183441623,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/54183441623,https://www.airlines-manager.com/aircraft/show/116042862,21:00,2:14,310,"$330,385.00","$303,141.00",$977.87,"$57,925.03"
EWR - MSO,54146711573,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/54146711573,https://www.airlines-manager.com/aircraft/show/107161238,1:00,10:59,310,"$615,656.00","$570,709.00","$1,841.00","$57,166.18"
EWR - MSO,54162073034,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/54162073034,https://www.airlines-manager.com/aircraft/show/107161240,11:00,20:59,310,"$615,656.00","$570,709.00","$1,841.00","$57,166.18"
EWR - MSO,54173399502,EWR-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/54173399502,https://www.airlines-manager.com/aircraft/show/86782214,15:45,1:44,112,"$289,178.00","$258,695.00","$2,309.78","$25,912.69"
EWR - MSO,54178655352,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/54178655352,https://www.airlines-manager.com/aircraft/show/107161239,17:45,3:44,310,"$615,656.00","$570,709.00","$1,841.00","$57,166.18"
EWR - MSO,54187257276,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/54187257276,https://www.airlines-manager.com/aircraft/show/107161241,22:00,7:59,309,"$613,870.00","$568,992.00","$1,841.40","$56,994.19"
EWR - MSP,54146711985,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/54146711985,https://www.airlines-manager.com/aircraft/show/86270783,5:00,10:59,310,"$374,578.00","$335,343.00","$1,081.75","$56,046.18"
EWR - MSP,54162072889,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/54162072889,https://www.airlines-manager.com/aircraft/show/90452833,10:00,15:59,310,"$374,578.00","$335,343.00","$1,081.75","$56,046.18"
EWR - MSP,54162072890,EWR-DEN-SLC 6 B,A319-100,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/54162072890,https://www.airlines-manager.com/aircraft/show/105223076,11:00,16:59,198,"$283,918.00","$252,487.00","$1,275.19","$42,198.38"
EWR - MSP,54178655389,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/54178655389,https://www.airlines-manager.com/aircraft/show/87153196,18:15,0:14,310,"$374,578.00","$335,343.00","$1,081.75","$56,046.18"
EWR - MSP,54183441488,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/54183441488,https://www.airlines-manager.com/aircraft/show/86270785,19:45,1:44,310,"$374,578.00","$335,343.00","$1,081.75","$56,046.18"
EWR - MSP,54183441489,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/54183441489,https://www.airlines-manager.com/aircraft/show/90452835,20:45,2:44,310,"$374,578.00","$335,343.00","$1,081.75","$56,046.18"
EWR - MSY,54146711870,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/54146711870,https://www.airlines-manager.com/aircraft/show/90717079,3:15,9:59,310,"$414,563.00","$379,812.00","$1,225.20","$56,407.72"
EWR - MSY,54162072952,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/54162072952,https://www.airlines-manager.com/aircraft/show/90717077,10:00,16:44,310,"$414,563.00","$379,812.00","$1,225.20","$56,407.72"
EWR - MSY,54162072953,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/54162072953,https://www.airlines-manager.com/aircraft/show/90717076,11:00,17:44,310,"$414,563.00","$379,812.00","$1,225.20","$56,407.72"
EWR - MSY,54178655385,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/54178655385,https://www.airlines-manager.com/aircraft/show/90717078,18:00,0:44,310,"$414,563.00","$379,812.00","$1,225.20","$56,407.72"
EWR - MSY,54183441503,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/54183441503,https://www.airlines-manager.com/aircraft/show/95950199,20:00,2:44,310,"$414,563.00","$379,812.00","$1,225.20","$56,407.72"
EWR - MUC,54146711406,EWR 56C-7 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/54146711406,https://www.airlines-manager.com/aircraft/show/106721562,0:00,16:29,598,"$2,038,935.00","$1,888,864.00","$3,158.64","$114,592.36"
EWR - MUC,54162073020,EWR 56C-1 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/54162073020,https://www.airlines-manager.com/aircraft/show/106721556,11:00,3:29,598,"$2,038,935.00","$1,888,864.00","$3,158.64","$114,592.36"
EWR - MUC,54178655416,EWR 56C-7 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/54178655416,https://www.airlines-manager.com/aircraft/show/106721562,18:30,10:59,597,"$2,035,802.00","$1,885,857.00","$3,158.89","$114,409.93"
EWR - MXP,54162072896,EWR 84B-7 B2,777-300,https://www.airlines-manager.com/network/showline/49921908,https://www.airlines-manager.com/network/showflight/54162072896,https://www.airlines-manager.com/aircraft/show/117958701,10:00,2:29,852,"$2,682,820.00","$2,437,530.00","$2,860.95","$147,878.46"
EWR - MXP,54187257297,EWR 84B-3  B2,777-300,https://www.airlines-manager.com/network/showline/49921908,https://www.airlines-manager.com/network/showflight/54187257297,https://www.airlines-manager.com/aircraft/show/117958697,22:00,14:29,852,"$2,682,820.00","$2,437,530.00","$2,860.95","$147,878.46"
EWR - NAS,54146711992,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/54146711992,https://www.airlines-manager.com/aircraft/show/98379319,5:15,11:44,310,"$395,405.00","$362,404.00","$1,169.05","$55,897.79"
EWR - NAS,54168162188,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/54168162188,https://www.airlines-manager.com/aircraft/show/98379317,13:00,19:29,310,"$395,405.00","$362,404.00","$1,169.05","$55,897.79"
EWR - NAS,54178655382,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/54178655382,https://www.airlines-manager.com/aircraft/show/98379316,18:00,0:29,310,"$395,405.00","$362,404.00","$1,169.05","$55,897.79"
EWR - NAS,54178655383,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/54178655383,https://www.airlines-manager.com/aircraft/show/98379318,19:00,1:29,310,"$395,405.00","$362,404.00","$1,169.05","$55,897.79"
EWR - NAS,54183441619,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/54183441619,https://www.airlines-manager.com/aircraft/show/98379315,21:00,3:29,289,"$371,894.00","$339,683.00","$1,175.37","$52,393.26"
EWR - NRT,54146711367,EWR 56A-7 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/54146711367,https://www.airlines-manager.com/aircraft/show/106813013,0:00,2:14,748,"$3,980,848.00","$3,582,146.00","$4,788.97","$1,603,945.97"
EWR - NRT,54162072968,EWR 56A-3 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/54162072968,https://www.airlines-manager.com/aircraft/show/106813009,10:15,12:29,748,"$3,955,032.00","$3,565,413.00","$4,766.59","$1,596,453.58"
EWR - NRT,54173399594,EWR 56A-1 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/54173399594,https://www.airlines-manager.com/aircraft/show/106813007,16:45,18:59,747,"$3,554,600.00","$3,269,661.00","$4,377.06","$1,464,027.31"
EWR - OAK,54146711576,EWR-OAK-SJC 5,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/54146711576,https://www.airlines-manager.com/aircraft/show/104717239,1:00,12:59,310,"$735,917.00","$680,343.00","$2,194.65","$56,774.10"
EWR - OAK,54162072904,EWR-OAK-SJC 1,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/54162072904,https://www.airlines-manager.com/aircraft/show/104717243,10:00,21:59,310,"$735,917.00","$680,343.00","$2,194.65","$56,774.10"
EWR - OAK,54168162058,EWR-OAK-SJC 2,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/54168162058,https://www.airlines-manager.com/aircraft/show/104717242,12:00,23:59,310,"$735,917.00","$680,343.00","$2,194.65","$56,774.10"
EWR - OAK,54168162059,EWR-OAK-SJC 3,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/54168162059,https://www.airlines-manager.com/aircraft/show/104717241,14:00,1:59,310,"$735,917.00","$680,343.00","$2,194.65","$56,774.10"
EWR - OAK,54187257344,EWR-OAK-SJC 4,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/54187257344,https://www.airlines-manager.com/aircraft/show/104717240,22:30,10:29,310,"$735,917.00","$680,343.00","$2,194.65","$56,774.10"
EWR - OKC,54146711722,EWR-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/54146711722,https://www.airlines-manager.com/aircraft/show/86782214,1:45,8:59,112,"$217,580.00","$193,834.00","$1,730.66","$26,797.33"
EWR - OKC,54146711723,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/54146711723,https://www.airlines-manager.com/aircraft/show/107161239,3:45,10:59,310,"$460,963.00","$425,234.00","$1,371.72","$58,788.11"
EWR - OKC,54156164594,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/54156164594,https://www.airlines-manager.com/aircraft/show/107161241,8:00,15:14,310,"$460,963.00","$425,234.00","$1,371.72","$58,788.11"
EWR - OKC,54162073029,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/54162073029,https://www.airlines-manager.com/aircraft/show/107161238,11:00,18:14,310,"$460,963.00","$425,234.00","$1,371.72","$58,788.11"
EWR - OKC,54183441602,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/54183441602,https://www.airlines-manager.com/aircraft/show/107161240,21:00,4:14,309,"$459,609.00","$423,925.00","$1,371.93","$58,607.14"
EWR - OMA,54146711807,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/54146711807,https://www.airlines-manager.com/aircraft/show/104418460,2:30,8:59,310,"$401,849.00","$368,874.00","$1,189.92","$56,895.73"
EWR - OMA,54156164577,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/54156164577,https://www.airlines-manager.com/aircraft/show/104418463,7:30,13:59,310,"$401,849.00","$368,874.00","$1,189.92","$56,895.73"
EWR - OMA,54162072905,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/54162072905,https://www.airlines-manager.com/aircraft/show/104418462,10:00,16:29,310,"$401,849.00","$368,874.00","$1,189.92","$56,895.73"
EWR - OMA,54178655285,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/54178655285,https://www.airlines-manager.com/aircraft/show/104418461,17:00,23:29,310,"$401,849.00","$368,874.00","$1,189.92","$56,895.73"
EWR - OMA,54178655286,EWR-BOI-PBI 5 B,A319-100,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/54178655286,https://www.airlines-manager.com/aircraft/show/110582846,19:00,1:29,193,"$300,189.00","$273,938.00","$1,419.37","$42,252.65"
EWR - ONT,54146711381,EWR-SMF-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/54146711381,https://www.airlines-manager.com/aircraft/show/94889153,0:00,11:29,320,"$702,981.00","$644,277.00","$2,013.37","$56,105.40"
EWR - ONT,54146711382,EWR-SMF-ONT 5,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/54146711382,https://www.airlines-manager.com/aircraft/show/94889154,2:00,13:29,320,"$702,981.00","$644,277.00","$2,013.37","$56,105.40"
EWR - ONT,54162073085,EWR-SMF-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/54162073085,https://www.airlines-manager.com/aircraft/show/94889150,11:45,23:14,320,"$702,981.00","$644,277.00","$2,013.37","$56,105.40"
EWR - ONT,54168162222,EWR-SMF-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/54168162222,https://www.airlines-manager.com/aircraft/show/94889151,13:15,0:44,320,"$702,981.00","$644,277.00","$2,013.37","$56,105.40"
EWR - ONT,54173399331,EWR-SMF-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/54173399331,https://www.airlines-manager.com/aircraft/show/94889152,14:45,2:14,297,"$671,731.00","$614,515.00","$2,069.07","$53,513.64"
EWR - ORD,54146711984,EWR-MIA-ORD 2,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/54146711984,https://www.airlines-manager.com/aircraft/show/113251306,5:00,9:59,338,"$340,455.00","$293,420.00",$868.11,"$58,880.27"
EWR - ORD,54162072973,EWR-MIA-ORD 1,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/54162072973,https://www.airlines-manager.com/aircraft/show/113251305,10:15,15:14,338,"$340,455.00","$293,420.00",$868.11,"$58,880.27"
EWR - ORD,54162072974,EWR-MIA-ORD 3,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/54162072974,https://www.airlines-manager.com/aircraft/show/113251307,11:30,16:29,338,"$340,455.00","$293,420.00",$868.11,"$58,880.27"
EWR - ORD,54178655299,EWR-MIA-ORD 4,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/54178655299,https://www.airlines-manager.com/aircraft/show/113251308,17:15,22:14,338,"$340,455.00","$293,420.00",$868.11,"$58,880.27"
EWR - ORD,54183441644,EWR-MIA-ORD 5,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/54183441644,https://www.airlines-manager.com/aircraft/show/113251309,21:30,2:29,338,"$340,455.00","$293,420.00",$868.11,"$58,880.27"
EWR - ORF,54146711778,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/54146711778,https://www.airlines-manager.com/aircraft/show/88494375,2:15,5:29,320,"$153,174.00","$129,624.00",$405.08,"$40,089.90"
EWR - ORF,54162073037,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/54162073037,https://www.airlines-manager.com/aircraft/show/106104450,11:00,14:14,112,"$70,275.00","$57,673.00",$514.94,"$17,837.01"
EWR - ORF,54168162310,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/54168162310,https://www.airlines-manager.com/aircraft/show/105731236,14:15,17:29,320,"$153,174.00","$129,624.00",$405.08,"$40,089.90"
EWR - ORF,54178655362,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/54178655362,https://www.airlines-manager.com/aircraft/show/88494376,18:00,21:14,320,"$153,174.00","$129,624.00",$405.08,"$40,089.90"
EWR - ORF,54187257269,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/54187257269,https://www.airlines-manager.com/aircraft/show/88494377,21:45,0:59,319,"$152,721.00","$129,180.00",$404.95,"$39,952.58"
EWR - OSL,54146711873,EWR 56D-2 E,787-10,https://www.airlines-manager.com/network/showline/50072202,https://www.airlines-manager.com/network/showflight/54146711873,https://www.airlines-manager.com/aircraft/show/118644437,3:15,18:29,648,"$1,884,538.00","$1,756,389.00","$2,710.48","$115,299.06"
EWR - OSL,54146711874,EWR 56D-4 E,787-10,https://www.airlines-manager.com/network/showline/50072202,https://www.airlines-manager.com/network/showflight/54146711874,https://www.airlines-manager.com/aircraft/show/118644439,4:45,19:59,648,"$1,884,538.00","$1,756,389.00","$2,710.48","$115,299.06"
EWR - OSL,54183441501,EWR 56D-4 E,787-10,https://www.airlines-manager.com/network/showline/50072202,https://www.airlines-manager.com/network/showflight/54183441501,https://www.airlines-manager.com/aircraft/show/118644439,20:00,11:14,646,"$1,879,649.00","$1,751,708.00","$2,711.62","$114,991.77"
EWR - PBI,54146711681,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/54146711681,https://www.airlines-manager.com/aircraft/show/104418463,1:30,7:29,310,"$379,359.00","$346,918.00","$1,119.09","$57,980.72"
EWR - PBI,54146711682,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/54146711682,https://www.airlines-manager.com/aircraft/show/104418462,3:00,8:59,310,"$379,359.00","$346,918.00","$1,119.09","$57,980.72"
EWR - PBI,54162073060,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/54162073060,https://www.airlines-manager.com/aircraft/show/104418461,11:00,16:59,310,"$379,359.00","$346,918.00","$1,119.09","$57,980.72"
EWR - PBI,54168162127,EWR-BOI-PBI 5 B,A319-100,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/54168162127,https://www.airlines-manager.com/aircraft/show/110582846,13:00,18:59,198,"$287,177.00","$261,181.00","$1,319.10","$43,651.42"
EWR - PBI,54183441572,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/54183441572,https://www.airlines-manager.com/aircraft/show/104418460,20:30,2:29,310,"$379,359.00","$346,918.00","$1,119.09","$57,980.72"
EWR - PDX,54146711394,EWR-PHX-PDX 3,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/54146711394,https://www.airlines-manager.com/aircraft/show/113595213,0:00,11:29,338,"$757,836.00","$705,129.00","$2,086.18","$61,404.56"
EWR - PDX,54146711395,EWR-PHX-PDX 4,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/54146711395,https://www.airlines-manager.com/aircraft/show/113595214,2:00,13:29,338,"$757,836.00","$705,129.00","$2,086.18","$61,404.56"
EWR - PDX,54146711396,EWR-PHX-PDX 5,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/54146711396,https://www.airlines-manager.com/aircraft/show/113595215,5:00,16:29,338,"$757,836.00","$705,129.00","$2,086.18","$61,404.56"
EWR - PDX,54146711397,EWR-PHX-PDX 6 B,A319-100,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/54146711397,https://www.airlines-manager.com/aircraft/show/99219630,6:30,17:59,198,"$526,507.00","$481,810.00","$2,433.38","$41,957.33"
EWR - PDX,54162072962,EWR-PHX-PDX 1,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/54162072962,https://www.airlines-manager.com/aircraft/show/113595211,10:15,21:44,338,"$757,836.00","$705,129.00","$2,086.18","$61,404.56"
EWR - PDX,54168162108,EWR-PHX-PDX 2,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/54168162108,https://www.airlines-manager.com/aircraft/show/113595212,12:15,23:44,304,"$711,269.00","$660,445.00","$2,172.52","$57,513.35"
EWR - PHX,54146711389,EWR-PHX-PDX 1,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/54146711389,https://www.airlines-manager.com/aircraft/show/113595211,0:00,10:14,338,"$704,047.00","$646,677.00","$1,913.25","$63,193.19"
EWR - PHX,54146711390,EWR-PHX-PDX 2,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/54146711390,https://www.airlines-manager.com/aircraft/show/113595212,2:00,12:14,338,"$704,047.00","$646,677.00","$1,913.25","$63,193.19"
EWR - PHX,54162073081,EWR-PHX-PDX 3,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/54162073081,https://www.airlines-manager.com/aircraft/show/113595213,11:30,21:44,338,"$704,047.00","$646,677.00","$1,913.25","$63,193.19"
EWR - PHX,54168162229,EWR-PHX-PDX 4,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/54168162229,https://www.airlines-manager.com/aircraft/show/113595214,13:30,23:44,338,"$704,047.00","$646,677.00","$1,913.25","$63,193.19"
EWR - PHX,54173399590,EWR-PHX-PDX 5,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/54173399590,https://www.airlines-manager.com/aircraft/show/113595215,16:30,2:44,338,"$704,047.00","$646,677.00","$1,913.25","$63,193.19"
EWR - PHX,54178655380,EWR-PHX-PDX 6 B,A319-100,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/54178655380,https://www.airlines-manager.com/aircraft/show/99219630,18:00,4:29,198,"$489,624.00","$441,509.00","$2,229.84","$42,115.33"
EWR - PIT,54146711949,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/54146711949,https://www.airlines-manager.com/aircraft/show/98887257,4:15,7:29,112,"$77,415.00","$63,055.00",$562.99,"$19,501.55"
EWR - PIT,54146711950,EWR-STL-PIT 3,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/54146711950,https://www.airlines-manager.com/aircraft/show/115400546,6:30,9:44,338,"$182,214.00","$159,602.00",$472.20,"$49,361.44"
EWR - PIT,54162072951,EWR-STL-PIT 2,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/54162072951,https://www.airlines-manager.com/aircraft/show/115400547,10:00,13:14,338,"$182,214.00","$159,602.00",$472.20,"$49,361.44"
EWR - PIT,54168162161,EWR-STL-PIT 4,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/54168162161,https://www.airlines-manager.com/aircraft/show/115400545,13:00,16:14,338,"$182,214.00","$159,602.00",$472.20,"$49,361.44"
EWR - PIT,54173399489,EWR-STL-PIT 1,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/54173399489,https://www.airlines-manager.com/aircraft/show/115400548,15:30,18:44,338,"$182,214.00","$159,602.00",$472.20,"$49,361.44"
EWR - PIT,54183441455,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/54183441455,https://www.airlines-manager.com/aircraft/show/98887257,19:30,22:44,112,"$77,415.00","$63,055.00",$562.99,"$19,501.55"
EWR - PRG,54162072964,EWR 84B-2  B2,777-300,https://www.airlines-manager.com/network/showline/44327652,https://www.airlines-manager.com/network/showflight/54162072964,https://www.airlines-manager.com/aircraft/show/117958696,10:15,2:59,852,"$2,735,955.00","$2,492,473.00","$2,925.44","$148,952.57"
EWR - PRG,54187257301,EWR 84B-5  B2,777-300,https://www.airlines-manager.com/network/showline/44327652,https://www.airlines-manager.com/network/showflight/54187257301,https://www.airlines-manager.com/aircraft/show/117958699,22:15,14:59,852,"$2,735,955.00","$2,492,473.00","$2,925.44","$148,952.57"
EWR - PVD,54146711692,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/54146711692,https://www.airlines-manager.com/aircraft/show/110044466,1:30,4:14,310,"$98,927.00","$81,292.00",$262.23,"$29,740.98"
EWR - PVD,54156164688,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/54156164688,https://www.airlines-manager.com/aircraft/show/110044465,9:15,11:59,310,"$98,927.00","$81,292.00",$262.23,"$29,740.98"
EWR - PVD,54162073018,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/54162073018,https://www.airlines-manager.com/aircraft/show/110044464,11:00,13:44,310,"$98,927.00","$81,292.00",$262.23,"$29,740.98"
EWR - PVD,54183441485,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/54183441485,https://www.airlines-manager.com/aircraft/show/110044463,19:45,22:29,310,"$98,927.00","$81,292.00",$262.23,"$29,740.98"
EWR - PVD,54187257417,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/54187257417,https://www.airlines-manager.com/aircraft/show/110113039,23:15,1:59,112,"$42,468.00","$31,610.00",$282.23,"$11,564.63"
EWR - PWM,54146711966,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/54146711966,https://www.airlines-manager.com/aircraft/show/110044463,4:30,7:44,310,"$154,039.00","$134,989.00",$435.45,"$41,749.18"
EWR - PWM,54156164667,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/54156164667,https://www.airlines-manager.com/aircraft/show/110113039,8:45,11:59,112,"$70,011.00","$58,085.00",$518.62,"$17,964.43"
EWR - PWM,54162073019,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/54162073019,https://www.airlines-manager.com/aircraft/show/110044466,11:00,14:14,310,"$154,039.00","$134,989.00",$435.45,"$41,749.18"
EWR - PWM,54178655358,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/54178655358,https://www.airlines-manager.com/aircraft/show/110044465,18:00,21:14,310,"$154,039.00","$134,989.00",$435.45,"$41,749.18"
EWR - PWM,54183441479,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/54183441479,https://www.airlines-manager.com/aircraft/show/110044464,19:45,22:59,298,"$150,555.00","$131,598.00",$441.60,"$40,700.41"
EWR - RAP,54146711431,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/54146711431,https://www.airlines-manager.com/aircraft/show/116042860,0:00,7:59,310,"$495,290.00","$458,274.00","$1,478.30","$57,403.84"
EWR - RAP,54146711432,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/54146711432,https://www.airlines-manager.com/aircraft/show/116042861,1:15,9:14,310,"$495,290.00","$458,274.00","$1,478.30","$57,403.84"
EWR - RAP,54168162206,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/54168162206,https://www.airlines-manager.com/aircraft/show/116042862,13:00,20:59,310,"$495,290.00","$458,274.00","$1,478.30","$57,403.84"
EWR - RAP,54178655414,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/54178655414,https://www.airlines-manager.com/aircraft/show/116042859,18:30,2:29,309,"$493,831.00","$456,866.00","$1,478.53","$57,227.47"
EWR - RDU,54146711634,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/54146711634,https://www.airlines-manager.com/aircraft/show/105731236,1:15,4:59,320,"$200,581.00","$172,613.00",$539.42,"$46,235.63"
EWR - RDU,54146711635,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/54146711635,https://www.airlines-manager.com/aircraft/show/88494376,5:00,8:44,320,"$200,581.00","$172,613.00",$539.42,"$46,235.63"
EWR - RDU,54162073052,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/54162073052,https://www.airlines-manager.com/aircraft/show/88494377,11:00,14:44,320,"$200,581.00","$172,613.00",$539.42,"$46,235.63"
EWR - RDU,54173399496,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/54173399496,https://www.airlines-manager.com/aircraft/show/88494375,15:30,19:14,320,"$200,581.00","$172,613.00",$539.42,"$46,235.63"
EWR - RDU,54187257284,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/54187257284,https://www.airlines-manager.com/aircraft/show/106104450,22:00,1:44,112,"$93,025.00","$77,828.00",$694.89,"$20,846.79"
EWR - RIC,54146711580,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/54146711580,https://www.airlines-manager.com/aircraft/show/88494377,1:00,4:14,320,"$139,037.00","$115,616.00",$361.30,"$35,757.53"
EWR - RIC,54146711581,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/54146711581,https://www.airlines-manager.com/aircraft/show/88494375,5:30,8:44,320,"$139,037.00","$115,616.00",$361.30,"$35,757.53"
EWR - RIC,54168162309,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/54168162309,https://www.airlines-manager.com/aircraft/show/106104450,14:15,17:29,112,"$62,634.00","$50,117.00",$447.47,"$15,500.10"
EWR - RIC,54178655309,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/54178655309,https://www.airlines-manager.com/aircraft/show/105731236,17:30,20:44,320,"$139,037.00","$115,616.00",$361.30,"$35,757.53"
EWR - RIC,54183441626,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/54183441626,https://www.airlines-manager.com/aircraft/show/88494376,21:15,0:29,320,"$139,037.00","$115,616.00",$361.30,"$35,757.53"
EWR - RNO,54146711736,EWR-RNO-MEM 5 B,A319-100,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/54146711736,https://www.airlines-manager.com/aircraft/show/100096560,2:00,13:29,198,"$529,840.00","$488,053.00","$2,464.91","$42,500.99"
EWR - RNO,54162072972,EWR-RNO-MEM 1,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/54162072972,https://www.airlines-manager.com/aircraft/show/99920622,10:15,21:29,320,"$702,795.00","$645,835.00","$2,018.23","$57,492.73"
EWR - RNO,54168162280,EWR-RNO-MEM 4,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/54168162280,https://www.airlines-manager.com/aircraft/show/99920619,14:00,1:14,320,"$702,795.00","$645,835.00","$2,018.23","$57,492.73"
EWR - RNO,54173399589,EWR-RNO-MEM 3,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/54173399589,https://www.airlines-manager.com/aircraft/show/99920620,16:30,3:44,320,"$702,795.00","$645,835.00","$2,018.23","$57,492.73"
EWR - RNO,54187257316,EWR-RNO-MEM 2,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/54187257316,https://www.airlines-manager.com/aircraft/show/99920621,22:15,9:29,320,"$702,795.00","$645,835.00","$2,018.23","$57,492.73"
EWR - RSW,54146711863,EWR-RNO-MEM 1,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/54146711863,https://www.airlines-manager.com/aircraft/show/99920622,3:15,9:29,320,"$388,911.00","$350,141.00","$1,094.19","$56,172.35"
EWR - RSW,54156164540,EWR-RNO-MEM 4,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/54156164540,https://www.airlines-manager.com/aircraft/show/99920619,7:00,13:14,320,"$388,911.00","$350,141.00","$1,094.19","$56,172.35"
EWR - RSW,54162072970,EWR-RNO-MEM 3,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/54162072970,https://www.airlines-manager.com/aircraft/show/99920620,10:15,16:29,320,"$388,911.00","$350,141.00","$1,094.19","$56,172.35"
EWR - RSW,54168162279,EWR-RNO-MEM 5 B,A319-100,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/54168162279,https://www.airlines-manager.com/aircraft/show/100096560,14:00,20:14,198,"$294,881.00","$267,322.00","$1,350.11","$42,885.88"
EWR - RSW,54173399555,EWR-RNO-MEM 2,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/54173399555,https://www.airlines-manager.com/aircraft/show/99920621,16:00,22:14,320,"$388,911.00","$350,141.00","$1,094.19","$56,172.35"
EWR - SAN,54146711387,EWR-MIA-ORD 3,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/54146711387,https://www.airlines-manager.com/aircraft/show/113251307,0:00,11:29,338,"$775,493.00","$723,197.00","$2,139.64","$62,977.97"
EWR - SAN,54162072885,EWR-MIA-ORD 5,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/54162072885,https://www.airlines-manager.com/aircraft/show/113251309,10:00,21:29,338,"$775,493.00","$723,197.00","$2,139.64","$62,977.97"
EWR - SAN,54173399478,EWR-MIA-ORD 1,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/54173399478,https://www.airlines-manager.com/aircraft/show/113251305,15:15,2:44,338,"$775,493.00","$723,197.00","$2,139.64","$62,977.97"
EWR - SAN,54173399479,EWR-MIA-ORD 2,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/54173399479,https://www.airlines-manager.com/aircraft/show/113251306,16:15,3:44,338,"$775,493.00","$723,197.00","$2,139.64","$62,977.97"
EWR - SAN,54187257306,EWR-MIA-ORD 4,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/54187257306,https://www.airlines-manager.com/aircraft/show/113251308,22:15,9:44,338,"$775,493.00","$723,197.00","$2,139.64","$62,977.97"
EWR - SAT,54146711711,EWR-ELP-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/54146711711,https://www.airlines-manager.com/aircraft/show/103365576,1:45,9:59,320,"$517,703.00","$473,909.00","$1,480.97","$57,559.80"
EWR - SAT,54162072920,EWR-ELP-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/54162072920,https://www.airlines-manager.com/aircraft/show/103365577,10:00,18:14,320,"$517,703.00","$473,909.00","$1,480.97","$57,559.80"
EWR - SAT,54168162032,EWR-ELP-SAT 5 B,A319-100,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/54168162032,https://www.airlines-manager.com/aircraft/show/110582847,12:00,20:14,198,"$390,698.00","$358,994.00","$1,813.10","$43,602.51"
EWR - SAT,54183441459,EWR-ELP-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/54183441459,https://www.airlines-manager.com/aircraft/show/103365578,19:30,3:44,320,"$517,703.00","$473,909.00","$1,480.97","$57,559.80"
EWR - SAT,54183441460,EWR-ELP-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/54183441460,https://www.airlines-manager.com/aircraft/show/103365575,21:30,5:44,319,"$516,696.00","$472,944.00","$1,482.58","$57,442.59"
EWR - SAV,54146711971,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/54146711971,https://www.airlines-manager.com/aircraft/show/108466265,4:30,9:29,112,"$146,318.00","$129,401.00","$1,155.37","$25,966.76"
EWR - SAV,54156164675,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/54156164675,https://www.airlines-manager.com/aircraft/show/108834810,9:00,13:59,310,"$307,563.00","$281,428.00",$907.83,"$56,473.85"
EWR - SAV,54162073021,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/54162073021,https://www.airlines-manager.com/aircraft/show/108834809,11:00,15:59,310,"$307,563.00","$281,428.00",$907.83,"$56,473.85"
EWR - SAV,54178655375,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/54178655375,https://www.airlines-manager.com/aircraft/show/108834808,18:00,22:59,310,"$307,563.00","$281,428.00",$907.83,"$56,473.85"
EWR - SAV,54183441523,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/54183441523,https://www.airlines-manager.com/aircraft/show/108834811,20:00,0:59,257,"$276,838.00","$251,732.00",$979.50,"$50,514.78"
EWR - SDF,54146711921,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/54146711921,https://www.airlines-manager.com/aircraft/show/86270787,4:00,8:29,310,"$295,460.00","$268,367.00",$865.70,"$59,858.81"
EWR - SDF,54156164621,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/54156164621,https://www.airlines-manager.com/aircraft/show/90452834,8:15,12:44,310,"$295,460.00","$268,367.00",$865.70,"$59,858.81"
EWR - SDF,54173399363,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/54173399363,https://www.airlines-manager.com/aircraft/show/86270784,15:00,19:29,310,"$295,460.00","$268,367.00",$865.70,"$59,858.81"
EWR - SDF,54178655404,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/54178655404,https://www.airlines-manager.com/aircraft/show/86270786,18:15,22:44,310,"$295,460.00","$268,367.00",$865.70,"$59,858.81"
EWR - SEA,54146711584,EWR-DFW-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/54146711584,https://www.airlines-manager.com/aircraft/show/86238752,1:00,12:14,320,"$709,859.00","$640,790.00","$2,002.47","$57,043.62"
EWR - SEA,54146711585,EWR-DFW-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/54146711585,https://www.airlines-manager.com/aircraft/show/90489726,3:00,14:14,320,"$709,859.00","$640,790.00","$2,002.47","$57,043.62"
EWR - SEA,54162073069,EWR-DFW-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/54162073069,https://www.airlines-manager.com/aircraft/show/86238753,11:00,22:14,320,"$709,859.00","$640,790.00","$2,002.47","$57,043.62"
EWR - SEA,54173399416,EWR-DFW-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/54173399416,https://www.airlines-manager.com/aircraft/show/90489724,15:00,2:14,320,"$709,859.00","$640,790.00","$2,002.47","$57,043.62"
EWR - SEA,54187257378,EWR-DFW-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/54187257378,https://www.airlines-manager.com/aircraft/show/90489725,22:45,9:59,320,"$709,859.00","$640,790.00","$2,002.47","$57,043.62"
EWR - SEA,54187257379,EWR-DFW-ATL 6 B,A319-100,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/54187257379,https://www.airlines-manager.com/aircraft/show/105222360,23:30,10:59,197,"$530,961.00","$481,196.00","$2,442.62","$41,903.86"
EWR - SFO,54146711415,EWR-SFO-LAX 1,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/54146711415,https://www.airlines-manager.com/aircraft/show/83716137,0:00,11:44,400,"$944,723.00","$860,114.00","$2,150.29","$73,305.17"
EWR - SFO,54146711416,EWR-SFO-LAX 2,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/54146711416,https://www.airlines-manager.com/aircraft/show/89233028,1:30,13:14,400,"$944,723.00","$860,114.00","$2,150.29","$73,305.17"
EWR - SFO,54146711417,EWR-SFO-LAX 3,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/54146711417,https://www.airlines-manager.com/aircraft/show/89233029,3:00,14:44,400,"$944,723.00","$860,114.00","$2,150.29","$73,305.17"
EWR - SFO,54168162104,EWR-SFO-LAX 4,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/54168162104,https://www.airlines-manager.com/aircraft/show/89233030,12:15,23:59,400,"$944,723.00","$860,114.00","$2,150.29","$73,305.17"
EWR - SFO,54168162105,EWR-SFO-LAX 5,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/54168162105,https://www.airlines-manager.com/aircraft/show/89233027,14:15,1:59,400,"$944,723.00","$860,114.00","$2,150.29","$73,305.17"
EWR - SJC,54146711383,EWR-OAK-SJC 2,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/54146711383,https://www.airlines-manager.com/aircraft/show/104717242,0:00,11:59,310,"$732,935.00","$676,985.00","$2,183.82","$56,493.88"
EWR - SJC,54146711384,EWR-OAK-SJC 3,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/54146711384,https://www.airlines-manager.com/aircraft/show/104717241,2:00,13:59,310,"$732,935.00","$676,985.00","$2,183.82","$56,493.88"
EWR - SJC,54162072979,EWR-OAK-SJC 4,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/54162072979,https://www.airlines-manager.com/aircraft/show/104717240,10:30,22:29,310,"$732,935.00","$676,985.00","$2,183.82","$56,493.88"
EWR - SJC,54168162166,EWR-OAK-SJC 5,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/54168162166,https://www.airlines-manager.com/aircraft/show/104717239,13:00,0:59,310,"$732,935.00","$676,985.00","$2,183.82","$56,493.88"
EWR - SJC,54187257286,EWR-OAK-SJC 1,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/54187257286,https://www.airlines-manager.com/aircraft/show/104717243,22:00,9:59,310,"$732,935.00","$676,985.00","$2,183.82","$56,493.88"
EWR - SJU,54146711506,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/54146711506,https://www.airlines-manager.com/aircraft/show/106581304,0:30,8:44,320,"$526,498.00","$480,601.00","$1,501.88","$58,372.59"
EWR - SJU,54146711507,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/54146711507,https://www.airlines-manager.com/aircraft/show/106581307,2:00,10:14,320,"$526,498.00","$480,601.00","$1,501.88","$58,372.59"
EWR - SJU,54156164520,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/54156164520,https://www.airlines-manager.com/aircraft/show/86238754,7:00,15:14,320,"$526,498.00","$480,601.00","$1,501.88","$58,372.59"
EWR - SJU,54168162149,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/54168162149,https://www.airlines-manager.com/aircraft/show/106581306,13:00,21:14,320,"$526,498.00","$480,601.00","$1,501.88","$58,372.59"
EWR - SJU,54173399329,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/54173399329,https://www.airlines-manager.com/aircraft/show/106581305,14:30,22:44,320,"$526,498.00","$480,601.00","$1,501.88","$58,372.59"
EWR - SLC,54146711442,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/54146711442,https://www.airlines-manager.com/aircraft/show/87153196,0:15,9:59,310,"$611,536.00","$559,607.00","$1,805.18","$57,493.87"
EWR - SLC,54146711443,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/54146711443,https://www.airlines-manager.com/aircraft/show/90452833,0:15,9:59,310,"$611,536.00","$559,607.00","$1,805.18","$57,493.87"
EWR - SLC,54146711444,EWR-DEN-SLC 6 B,A319-100,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/54146711444,https://www.airlines-manager.com/aircraft/show/105223076,1:15,10:59,198,"$459,927.00","$418,300.00","$2,112.63","$42,976.03"
EWR - SLC,54162072881,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/54162072881,https://www.airlines-manager.com/aircraft/show/86270785,10:00,19:44,310,"$611,536.00","$559,607.00","$1,805.18","$57,493.87"
EWR - SLC,54162072882,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/54162072882,https://www.airlines-manager.com/aircraft/show/90452835,11:00,20:44,310,"$611,536.00","$559,607.00","$1,805.18","$57,493.87"
EWR - SLC,54178655472,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/54178655472,https://www.airlines-manager.com/aircraft/show/86270783,19:15,4:59,310,"$611,536.00","$559,607.00","$1,805.18","$57,493.87"
EWR - SMF,54146711376,EWR-SMF-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/54146711376,https://www.airlines-manager.com/aircraft/show/94889150,0:00,11:44,320,"$717,342.00","$658,895.00","$2,059.05","$56,155.82"
EWR - SMF,54146711377,EWR-SMF-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/54146711377,https://www.airlines-manager.com/aircraft/show/94889151,1:30,13:14,320,"$717,342.00","$658,895.00","$2,059.05","$56,155.82"
EWR - SMF,54146711378,EWR-SMF-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/54146711378,https://www.airlines-manager.com/aircraft/show/94889152,3:00,14:44,320,"$717,342.00","$658,895.00","$2,059.05","$56,155.82"
EWR - SMF,54162073078,EWR-SMF-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/54162073078,https://www.airlines-manager.com/aircraft/show/94889153,11:30,23:14,320,"$717,342.00","$658,895.00","$2,059.05","$56,155.82"
EWR - SMF,54168162233,EWR-SMF-ONT 5,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/54168162233,https://www.airlines-manager.com/aircraft/show/94889154,13:30,1:14,319,"$715,237.00","$656,874.00","$2,059.17","$55,983.58"
EWR - SNN,54162072991,EWR 56B-6 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/54162072991,https://www.airlines-manager.com/aircraft/show/94521248,10:45,23:59,748,"$2,079,388.00","$1,896,127.00","$2,534.93","$143,284.16"
EWR - SNN,54178655435,EWR 56B-5 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/54178655435,https://www.airlines-manager.com/aircraft/show/94521253,18:45,7:59,748,"$1,993,195.00","$1,836,021.00","$2,454.57","$138,742.14"
EWR - STL,54146711611,EWR-STL-PIT 3,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/54146711611,https://www.airlines-manager.com/aircraft/show/115400546,1:00,6:29,338,"$373,017.00","$342,022.00","$1,011.90","$62,374.83"
EWR - STL,54146711612,EWR-STL-PIT 2,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/54146711612,https://www.airlines-manager.com/aircraft/show/115400547,4:15,9:44,338,"$373,017.00","$342,022.00","$1,011.90","$62,374.83"
EWR - STL,54162072960,EWR-STL-PIT 1,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/54162072960,https://www.airlines-manager.com/aircraft/show/115400548,10:00,15:29,338,"$373,017.00","$342,022.00","$1,011.90","$62,374.83"
EWR - STL,54168162284,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/54168162284,https://www.airlines-manager.com/aircraft/show/98887257,14:00,19:29,112,"$163,314.00","$142,547.00","$1,272.74","$25,996.41"
EWR - STL,54173399570,EWR-STL-PIT 4,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/54173399570,https://www.airlines-manager.com/aircraft/show/115400545,16:15,21:44,338,"$373,017.00","$342,022.00","$1,011.90","$62,374.83"
EWR - STL,54187257370,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/54187257370,https://www.airlines-manager.com/aircraft/show/98887257,22:45,4:14,112,"$163,314.00","$142,547.00","$1,272.74","$25,996.41"
EWR - TLV,54146711859,EWR-TLV 2 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/54146711859,https://www.airlines-manager.com/aircraft/show/89124073,3:00,1:29,884,"$3,653,033.00","$3,333,684.00","$3,771.14","$148,273.57"
EWR - TLV,54183441608,EWR-TLV 1 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/54183441608,https://www.airlines-manager.com/aircraft/show/93429385,21:00,19:29,883,"$3,648,755.00","$3,329,646.00","$3,770.83","$148,093.97"
EWR - TPA,54146712009,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/54146712009,https://www.airlines-manager.com/aircraft/show/98379317,5:45,11:44,310,"$376,361.00","$341,180.00","$1,100.58","$57,021.73"
EWR - TPA,54162072990,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/54162072990,https://www.airlines-manager.com/aircraft/show/98379316,10:45,16:44,310,"$376,361.00","$341,180.00","$1,100.58","$57,021.73"
EWR - TPA,54168162189,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/54168162189,https://www.airlines-manager.com/aircraft/show/98379318,13:00,18:59,310,"$376,361.00","$341,180.00","$1,100.58","$57,021.73"
EWR - TPA,54173399398,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/54173399398,https://www.airlines-manager.com/aircraft/show/98379315,15:00,20:59,310,"$376,361.00","$341,180.00","$1,100.58","$57,021.73"
EWR - TPA,54187257412,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/54187257412,https://www.airlines-manager.com/aircraft/show/98379319,23:15,5:14,310,"$376,361.00","$341,180.00","$1,100.58","$57,021.73"
EWR - TUL,54146711724,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/54146711724,https://www.airlines-manager.com/aircraft/show/110044465,1:45,8:29,310,"$426,549.00","$392,448.00","$1,265.96","$58,284.36"
EWR - TUL,54146711725,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/54146711725,https://www.airlines-manager.com/aircraft/show/110044464,3:30,10:14,310,"$426,549.00","$392,448.00","$1,265.96","$58,284.36"
EWR - TUL,54168162130,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/54168162130,https://www.airlines-manager.com/aircraft/show/110044463,13:00,19:44,310,"$426,549.00","$392,448.00","$1,265.96","$58,284.36"
EWR - TUL,54173399587,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/54173399587,https://www.airlines-manager.com/aircraft/show/110113039,16:30,23:14,112,"$200,788.00","$178,211.00","$1,591.17","$26,466.98"
EWR - TUL,54178655425,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/54178655425,https://www.airlines-manager.com/aircraft/show/110044466,18:45,1:29,310,"$426,549.00","$392,448.00","$1,265.96","$58,284.36"
EWR - TUS,54146711509,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/54146711509,https://www.airlines-manager.com/aircraft/show/98379316,0:30,10:44,310,"$638,846.00","$590,752.00","$1,905.65","$57,728.21"
EWR - TUS,54146711510,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/54146711510,https://www.airlines-manager.com/aircraft/show/98379318,1:30,11:44,310,"$638,846.00","$590,752.00","$1,905.65","$57,728.21"
EWR - TUS,54146711511,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/54146711511,https://www.airlines-manager.com/aircraft/show/98379315,3:30,13:44,310,"$638,846.00","$590,752.00","$1,905.65","$57,728.21"
EWR - TUS,54168162190,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/54168162190,https://www.airlines-manager.com/aircraft/show/98379319,13:00,23:14,310,"$638,846.00","$590,752.00","$1,905.65","$57,728.21"
EWR - TUS,54183441468,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/54183441468,https://www.airlines-manager.com/aircraft/show/98379317,19:30,5:44,310,"$638,846.00","$590,752.00","$1,905.65","$57,728.21"
EWR - VCE,54146711843,EWR 84B-3  B2,777-300,https://www.airlines-manager.com/network/showline/49921914,https://www.airlines-manager.com/network/showflight/54146711843,https://www.airlines-manager.com/aircraft/show/117958697,3:00,20:14,852,"$2,715,388.00","$2,474,998.00","$2,904.93","$143,616.91"
EWR - VCE,54173399408,EWR 84B-6  B2,777-300,https://www.airlines-manager.com/network/showline/49921914,https://www.airlines-manager.com/network/showflight/54173399408,https://www.airlines-manager.com/aircraft/show/117958700,15:00,8:14,816,"$2,625,033.00","$2,393,954.00","$2,933.77","$138,914.16"
EWR - YEG,54146711476,EWR-YEG-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/54146711476,https://www.airlines-manager.com/aircraft/show/98936170,0:15,10:14,320,"$633,835.00","$581,441.00","$1,817.00","$58,241.17"
EWR - YEG,54146711477,EWR-YEG-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/54146711477,https://www.airlines-manager.com/aircraft/show/98936171,2:15,12:14,320,"$633,835.00","$581,441.00","$1,817.00","$58,241.17"
EWR - YEG,54162073005,EWR-YEG-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/54162073005,https://www.airlines-manager.com/aircraft/show/98936168,11:00,20:59,320,"$633,835.00","$581,441.00","$1,817.00","$58,241.17"
EWR - YEG,54168162111,EWR-YEG-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/54168162111,https://www.airlines-manager.com/aircraft/show/98936169,12:30,22:29,320,"$633,835.00","$581,441.00","$1,817.00","$58,241.17"
EWR - YEG,54187257293,EWR-YEG-BFF 5 B,A319-100,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/54187257293,https://www.airlines-manager.com/aircraft/show/115493369,22:00,7:59,198,"$473,556.00","$435,398.00","$2,198.98","$43,612.49"
EWR - YOW,54156164694,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/54156164694,https://www.airlines-manager.com/aircraft/show/106581304,9:30,12:59,320,"$170,585.00","$145,254.00",$453.92,"$41,699.71"
EWR - YOW,54162073036,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/54162073036,https://www.airlines-manager.com/aircraft/show/106581307,11:00,14:29,320,"$170,585.00","$145,254.00",$453.92,"$41,699.71"
EWR - YOW,54178655439,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/54178655439,https://www.airlines-manager.com/aircraft/show/86238754,18:45,22:14,320,"$170,585.00","$145,254.00",$453.92,"$41,699.71"
EWR - YOW,54183441642,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/54183441642,https://www.airlines-manager.com/aircraft/show/106581306,21:15,0:44,320,"$170,585.00","$145,254.00",$453.92,"$41,699.71"
EWR - YOW,54187257381,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/54187257381,https://www.airlines-manager.com/aircraft/show/106581305,22:45,2:14,289,"$160,523.00","$135,466.00",$468.74,"$38,889.76"
EWR - YUL,54156164693,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/54156164693,https://www.airlines-manager.com/aircraft/show/106581306,9:30,12:59,320,"$174,011.00","$145,853.00",$455.79,"$41,871.67"
EWR - YUL,54162073035,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/54162073035,https://www.airlines-manager.com/aircraft/show/106581305,11:00,14:29,320,"$174,011.00","$145,853.00",$455.79,"$41,871.67"
EWR - YUL,54173399485,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/54173399485,https://www.airlines-manager.com/aircraft/show/86238754,15:15,18:44,320,"$174,011.00","$145,853.00",$455.79,"$41,871.67"
EWR - YUL,54183441616,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/54183441616,https://www.airlines-manager.com/aircraft/show/106581304,21:00,0:29,320,"$174,011.00","$145,853.00",$455.79,"$41,871.67"
EWR - YUL,54187257324,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/54187257324,https://www.airlines-manager.com/aircraft/show/106581307,22:30,1:59,320,"$174,011.00","$145,853.00",$455.79,"$41,871.67"
EWR - YVR,54146711403,EWR-YVR-YYC 1,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/54146711403,https://www.airlines-manager.com/aircraft/show/113681636,0:00,11:14,400,"$908,415.00","$836,037.00","$2,090.09","$74,424.66"
EWR - YVR,54146711404,EWR-YVR-YYC 2,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/54146711404,https://www.airlines-manager.com/aircraft/show/113681637,1:30,12:44,400,"$908,415.00","$836,037.00","$2,090.09","$74,424.66"
EWR - YVR,54146711405,EWR-YVR-YYC 3,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/54146711405,https://www.airlines-manager.com/aircraft/show/113681638,3:00,14:14,400,"$908,415.00","$836,037.00","$2,090.09","$74,424.66"
EWR - YVR,54162073071,EWR-YVR-YYC 4,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/54162073071,https://www.airlines-manager.com/aircraft/show/113681639,11:15,22:29,400,"$908,415.00","$836,037.00","$2,090.09","$74,424.66"
EWR - YVR,54168162121,EWR-YVR-YYC 5,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/54168162121,https://www.airlines-manager.com/aircraft/show/113681640,12:45,23:59,399,"$904,671.00","$832,388.00","$2,086.19","$74,099.82"
EWR - YYC,54146711656,EWR-YVR-YYC 4,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/54146711656,https://www.airlines-manager.com/aircraft/show/113681639,1:30,11:14,400,"$787,708.00","$724,155.00","$1,810.39","$74,399.49"
EWR - YYC,54146711657,EWR-YVR-YYC 5,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/54146711657,https://www.airlines-manager.com/aircraft/show/113681640,3:00,12:44,400,"$787,708.00","$724,155.00","$1,810.39","$74,399.49"
EWR - YYC,54162073075,EWR-YVR-YYC 1,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/54162073075,https://www.airlines-manager.com/aircraft/show/113681636,11:15,20:59,400,"$787,708.00","$724,155.00","$1,810.39","$74,399.49"
EWR - YYC,54168162117,EWR-YVR-YYC 2,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/54168162117,https://www.airlines-manager.com/aircraft/show/113681637,12:45,22:29,400,"$787,708.00","$724,155.00","$1,810.39","$74,399.49"
EWR - YYC,54168162118,EWR-YVR-YYC 3,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/54168162118,https://www.airlines-manager.com/aircraft/show/113681638,14:15,23:59,400,"$787,708.00","$724,155.00","$1,810.39","$74,399.49"
EWR - YYZ,54146711782,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/54146711782,https://www.airlines-manager.com/aircraft/show/92003922,2:15,5:44,320,"$178,732.00","$144,394.00",$451.23,"$41,452.82"
EWR - YYZ,54156164568,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/54156164568,https://www.airlines-manager.com/aircraft/show/92003921,7:30,10:59,320,"$178,732.00","$144,394.00",$451.23,"$41,452.82"
EWR - YYZ,54162072930,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/54162072930,https://www.airlines-manager.com/aircraft/show/92003924,10:00,13:29,320,"$178,732.00","$144,394.00",$451.23,"$41,452.82"
EWR - YYZ,54168162260,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/54168162260,https://www.airlines-manager.com/aircraft/show/92003925,14:00,17:29,320,"$178,732.00","$144,394.00",$451.23,"$41,452.82"
EWR - YYZ,54178655402,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/54178655402,https://www.airlines-manager.com/aircraft/show/92003923,18:15,21:44,320,"$178,732.00","$144,394.00",$451.23,"$41,452.82"
EWR - YYZ,54178655403,EWR CARGO 1,A321neo-LR,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/54178655403,https://www.airlines-manager.com/aircraft/show/103406580,19:15,22:44,0,"$63,938.00","$35,161.00",#DIV/0!,"$10,094.07"
EWR - ZRH,54156164584,EWR 84A-6 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/54156164584,https://www.airlines-manager.com/aircraft/show/90656552,7:45,23:59,852,"$2,628,800.00","$2,386,111.00","$2,800.60","$146,988.36"
EWR - ZRH,54183441497,EWR 84A-7 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/54183441497,https://www.airlines-manager.com/aircraft/show/94521249,20:00,12:14,850,"$2,623,595.00","$2,381,206.00","$2,801.42","$146,686.20"
HNL - AKL,54173399554,HNL 84B-2 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/54173399554,https://www.airlines-manager.com/aircraft/show/96807092,16:00,9:59,832,"$2,903,167.00","$2,645,977.00","$3,180.26","$147,134.96"
HNL - AKL,54187257389,HNL 84B-6 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/54187257389,https://www.airlines-manager.com/aircraft/show/96807088,23:00,16:59,832,"$2,885,772.00","$2,634,538.00","$3,166.51","$146,498.87"
HNL - ATL,54146711973,HNL 56B-2 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/54146711973,https://www.airlines-manager.com/aircraft/show/109187499,4:45,22:44,592,"$2,190,898.00","$2,005,043.00","$3,386.90","$111,494.51"
HNL - ATL,54173399539,HNL 56B-4 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/54173399539,https://www.airlines-manager.com/aircraft/show/109187501,16:00,9:59,592,"$2,190,898.00","$2,005,043.00","$3,386.90","$111,494.51"
HNL - ATL,54187257357,HNL 56B-2 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/54187257357,https://www.airlines-manager.com/aircraft/show/109187499,22:45,16:44,592,"$2,190,898.00","$2,005,043.00","$3,386.90","$111,494.51"
HNL - BNE,54146711922,HNL 84B-6 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/54146711922,https://www.airlines-manager.com/aircraft/show/96807088,4:00,22:59,832,"$3,045,822.00","$2,776,973.00","$3,337.71","$146,284.79"
HNL - BNE,54162072922,HNL 84B-3 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/54162072922,https://www.airlines-manager.com/aircraft/show/96807091,10:00,4:59,832,"$3,027,379.00","$2,764,876.00","$3,323.17","$145,647.55"
HNL - BOS,54146711414,HNL 56E-6 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/54146711414,https://www.airlines-manager.com/aircraft/show/117414505,0:00,19:59,592,"$2,395,125.00","$2,235,673.00","$3,776.47","$111,876.88"
HNL - BOS,54156164651,HNL 56E-1 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/54156164651,https://www.airlines-manager.com/aircraft/show/117414500,8:30,4:29,592,"$2,395,125.00","$2,235,673.00","$3,776.47","$111,876.88"
HNL - BOS,54162072878,HNL 56E-4 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/54162072878,https://www.airlines-manager.com/aircraft/show/117414503,10:00,5:59,592,"$2,395,125.00","$2,235,673.00","$3,776.47","$111,876.88"
HNL - BWI,54146711789,HNL 56F-4 B,787-10,https://www.airlines-manager.com/network/showline/50049284,https://www.airlines-manager.com/network/showflight/54146711789,https://www.airlines-manager.com/aircraft/show/118383854,2:30,21:44,592,"$2,281,246.00","$2,130,503.00","$3,598.82","$110,771.39"
HNL - BWI,54162073087,HNL 56F-5 B,787-10,https://www.airlines-manager.com/network/showline/50049284,https://www.airlines-manager.com/network/showflight/54162073087,https://www.airlines-manager.com/aircraft/show/118383855,11:45,6:59,592,"$2,281,246.00","$2,130,503.00","$3,598.82","$110,771.39"
HNL - BWI,54178655289,HNL 56F-1 B,787-10,https://www.airlines-manager.com/network/showline/50049284,https://www.airlines-manager.com/network/showflight/54178655289,https://www.airlines-manager.com/aircraft/show/118383851,17:00,12:14,583,"$2,259,201.00","$2,109,548.00","$3,618.44","$109,681.87"
HNL - CLT,54146711960,HNL 56D-3 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/54146711960,https://www.airlines-manager.com/aircraft/show/112066134,4:30,23:14,592,"$2,250,989.00","$2,095,290.00","$3,539.34","$111,848.22"
HNL - CLT,54146711961,HNL 56D-5 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/54146711961,https://www.airlines-manager.com/aircraft/show/112066136,5:30,0:14,592,"$2,250,989.00","$2,095,290.00","$3,539.34","$111,848.22"
HNL - CLT,54187257410,HNL 56D-3 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/54187257410,https://www.airlines-manager.com/aircraft/show/112066134,23:15,17:59,591,"$2,244,533.00","$2,089,009.00","$3,534.70","$111,512.94"
HNL - CXI,54146711914,HNL CARGO 2,737-700,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/54146711914,https://www.airlines-manager.com/aircraft/show/107563068,3:45,10:59,0,"$121,246.00","$97,580.00",#DIV/0!,"$13,490.32"
HNL - CXI,54146711915,HNL-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/54146711915,https://www.airlines-manager.com/aircraft/show/90717080,5:30,12:44,388,"$489,861.00","$459,353.00","$1,183.90","$63,505.02"
HNL - CXI,54173399418,HNL-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/54173399418,https://www.airlines-manager.com/aircraft/show/90717080,15:00,22:14,388,"$489,861.00","$459,353.00","$1,183.90","$63,505.02"
HNL - CXI,54187257303,HNL-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/54187257303,https://www.airlines-manager.com/aircraft/show/90717080,22:15,5:29,388,"$489,861.00","$459,353.00","$1,183.90","$63,505.02"
HNL - DEN,54156164532,HNL 56F-6 B,787-10,https://www.airlines-manager.com/network/showline/43762939,https://www.airlines-manager.com/network/showflight/54156164532,https://www.airlines-manager.com/aircraft/show/118383856,7:00,20:59,592,"$1,705,342.00","$1,560,550.00","$2,636.06","$111,600.72"
HNL - DEN,54178655279,HNL 56F-2 B,787-10,https://www.airlines-manager.com/network/showline/43762939,https://www.airlines-manager.com/network/showflight/54178655279,https://www.airlines-manager.com/aircraft/show/118383852,17:00,6:59,592,"$1,705,342.00","$1,560,550.00","$2,636.06","$111,600.72"
HNL - DEN,54187257265,HNL 56F-4 B,787-10,https://www.airlines-manager.com/network/showline/43762939,https://www.airlines-manager.com/network/showflight/54187257265,https://www.airlines-manager.com/aircraft/show/118383854,21:45,11:44,592,"$1,705,342.00","$1,560,550.00","$2,636.06","$111,600.72"
HNL - DFW,54146711965,HNL 56E-2 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/54146711965,https://www.airlines-manager.com/aircraft/show/117414501,4:30,19:59,592,"$1,884,682.00","$1,733,298.00","$2,927.87","$111,946.05"
HNL - DFW,54178655248,HNL 56E-7 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/54178655248,https://www.airlines-manager.com/aircraft/show/117414506,17:00,8:29,592,"$1,884,682.00","$1,733,298.00","$2,927.87","$111,946.05"
HNL - DFW,54178655249,HNL 56E-3 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/54178655249,https://www.airlines-manager.com/aircraft/show/117414502,18:30,9:59,592,"$1,884,682.00","$1,733,298.00","$2,927.87","$111,946.05"
HNL - DTW,54146712017,HNL 56E-5 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/54146712017,https://www.airlines-manager.com/aircraft/show/117414504,6:00,23:59,592,"$2,148,777.00","$1,998,982.00","$3,376.66","$111,157.48"
HNL - DTW,54183441492,HNL 56E-2 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/54183441492,https://www.airlines-manager.com/aircraft/show/117414501,20:00,13:59,592,"$2,148,777.00","$1,998,982.00","$3,376.66","$111,157.48"
HNL - DTW,54183441493,HNL 56E-6 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/54183441493,https://www.airlines-manager.com/aircraft/show/117414505,20:00,13:59,592,"$2,148,777.00","$1,998,982.00","$3,376.66","$111,157.48"
HNL - EWR,54146711944,HNL 56A-7 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/54146711944,https://www.airlines-manager.com/aircraft/show/95351586,4:15,23:59,592,"$2,361,246.00","$2,199,331.00","$3,715.09","$111,452.58"
HNL - EWR,54146711945,HNL 56A-6 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/54146711945,https://www.airlines-manager.com/aircraft/show/95351587,6:00,1:44,592,"$2,361,246.00","$2,199,331.00","$3,715.09","$111,452.58"
HNL - EWR,54183441484,HNL 56A-3 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/54183441484,https://www.airlines-manager.com/aircraft/show/95351590,19:45,15:29,592,"$2,361,246.00","$2,199,331.00","$3,715.09","$111,452.58"
HNL - GUM,54146711424,HNL-GUM,A321neo,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/54146711424,https://www.airlines-manager.com/aircraft/show/115400544,0:00,16:44,338,"$1,120,384.00","$1,057,325.00","$3,128.18","$63,186.75"
HNL - GUM,54146711425,HNL 84A-3 F,777-300,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/54146711425,https://www.airlines-manager.com/aircraft/show/95818924,4:45,20:29,832,"$2,549,287.00","$2,348,860.00","$2,823.15","$149,291.95"
HNL - IAD,54146711875,HNL 56C-3 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/54146711875,https://www.airlines-manager.com/aircraft/show/111639415,3:15,22:14,592,"$2,267,245.00","$2,114,518.00","$3,571.82","$111,388.13"
HNL - IAD,54156164686,HNL 56C-5 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/54156164686,https://www.airlines-manager.com/aircraft/show/111639417,9:15,4:14,592,"$2,267,245.00","$2,114,518.00","$3,571.82","$111,388.13"
HNL - IAD,54183441515,HNL 56C-7 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/54183441515,https://www.airlines-manager.com/aircraft/show/111639419,20:00,14:59,591,"$2,264,811.00","$2,112,204.00","$3,573.95","$111,266.23"
HNL - IAH,54146711426,HNL 56A-1 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/54146711426,https://www.airlines-manager.com/aircraft/show/95351592,0:00,15:59,592,"$1,925,971.00","$1,785,660.00","$3,016.32","$111,720.13"
HNL - IAH,54146711427,HNL 56A-3 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/54146711427,https://www.airlines-manager.com/aircraft/show/95351590,3:45,19:44,592,"$1,925,971.00","$1,785,660.00","$3,016.32","$111,720.13"
HNL - IAH,54173399551,HNL 56A-1 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/54173399551,https://www.airlines-manager.com/aircraft/show/95351592,16:00,7:59,592,"$1,925,971.00","$1,785,660.00","$3,016.32","$111,720.13"
HNL - ITO,54146711716,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/54146711716,https://www.airlines-manager.com/aircraft/show/94803593,1:45,4:44,170,"$77,005.00","$66,478.00",$391.05,"$22,283.13"
HNL - ITO,54146711717,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/54146711717,https://www.airlines-manager.com/aircraft/show/94803596,3:15,6:14,170,"$77,005.00","$66,478.00",$391.05,"$22,283.13"
HNL - ITO,54146711718,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/54146711718,https://www.airlines-manager.com/aircraft/show/94803595,6:00,8:59,170,"$77,005.00","$66,478.00",$391.05,"$22,283.13"
HNL - ITO,54156164695,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/54156164695,https://www.airlines-manager.com/aircraft/show/94803594,9:30,12:29,170,"$77,005.00","$66,478.00",$391.05,"$22,283.13"
HNL - ITO,54173399345,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/54173399345,https://www.airlines-manager.com/aircraft/show/94803593,15:00,17:59,170,"$77,005.00","$66,478.00",$391.05,"$22,283.13"
HNL - ITO,54173399346,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/54173399346,https://www.airlines-manager.com/aircraft/show/94803596,16:30,19:29,170,"$77,005.00","$66,478.00",$391.05,"$22,283.13"
HNL - ITO,54178655481,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/54178655481,https://www.airlines-manager.com/aircraft/show/94803595,19:15,22:14,170,"$77,005.00","$66,478.00",$391.05,"$22,283.13"
HNL - ITO,54187257358,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/54187257358,https://www.airlines-manager.com/aircraft/show/94803594,22:45,1:44,123,"$64,578.00","$54,549.00",$443.49,"$18,284.58"
HNL - JFK,54146711847,HNL 56B-6 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/54146711847,https://www.airlines-manager.com/aircraft/show/109187503,3:00,22:44,592,"$2,394,138.00","$2,211,698.00","$3,735.98","$112,079.29"
HNL - JFK,54156164680,HNL 56B-1 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/54156164680,https://www.airlines-manager.com/aircraft/show/109187498,9:00,4:44,592,"$2,394,138.00","$2,211,698.00","$3,735.98","$112,079.29"
HNL - JFK,54178655280,HNL 56B-3 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/54178655280,https://www.airlines-manager.com/aircraft/show/109187500,17:00,12:44,591,"$2,390,507.00","$2,208,222.00","$3,736.42","$111,903.14"
HNL - KOA,54146711556,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/54146711556,https://www.airlines-manager.com/aircraft/show/94803595,0:45,3:29,170,"$58,675.00","$48,297.00",$284.10,"$17,669.63"
HNL - KOA,54146711557,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/54146711557,https://www.airlines-manager.com/aircraft/show/94803594,4:15,6:59,170,"$58,675.00","$48,297.00",$284.10,"$17,669.63"
HNL - KOA,54156164555,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/54156164555,https://www.airlines-manager.com/aircraft/show/94803593,7:15,9:59,170,"$58,675.00","$48,297.00",$284.10,"$17,669.63"
HNL - KOA,54156164556,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/54156164556,https://www.airlines-manager.com/aircraft/show/94803596,8:45,11:29,170,"$58,675.00","$48,297.00",$284.10,"$17,669.63"
HNL - KOA,54168162274,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/54168162274,https://www.airlines-manager.com/aircraft/show/94803595,14:00,16:44,170,"$58,675.00","$48,297.00",$284.10,"$17,669.63"
HNL - KOA,54178655312,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/54178655312,https://www.airlines-manager.com/aircraft/show/94803594,17:30,20:14,170,"$58,675.00","$48,297.00",$284.10,"$17,669.63"
HNL - KOA,54183441573,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/54183441573,https://www.airlines-manager.com/aircraft/show/94803593,20:30,23:14,170,"$58,675.00","$48,297.00",$284.10,"$17,669.63"
HNL - KOA,54187257282,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/54187257282,https://www.airlines-manager.com/aircraft/show/94803596,22:00,0:44,170,"$58,675.00","$48,297.00",$284.10,"$17,669.63"
HNL - LAS,54146712021,HNL 84A-5 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/54146712021,https://www.airlines-manager.com/aircraft/show/95818922,6:30,18:29,832,"$1,888,368.00","$1,701,740.00","$2,045.36","$142,008.90"
HNL - LAS,54173399586,HNL-LAS S,A321-200,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/54173399586,https://www.airlines-manager.com/aircraft/show/116385511,16:30,5:14,232,"$743,934.00","$672,432.00","$2,898.41","$52,808.80"
HNL - LAS,54183441574,HNL 84A-3 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/54183441574,https://www.airlines-manager.com/aircraft/show/95818924,20:30,8:29,799,"$1,838,761.00","$1,655,211.00","$2,071.60","$138,126.09"
HNL - LAX,54156164528,HNL-SFO-LAX 3,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/54156164528,https://www.airlines-manager.com/aircraft/show/110044460,7:00,18:59,338,"$786,488.00","$718,216.00","$2,124.90","$59,934.58"
HNL - LAX,54156164529,HNL-SFO-LAX 4,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/54156164529,https://www.airlines-manager.com/aircraft/show/110044461,9:00,20:59,338,"$786,488.00","$718,216.00","$2,124.90","$59,934.58"
HNL - LAX,54162072887,HNL-SFO-LAX 6 B,A319-100,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/54162072887,https://www.airlines-manager.com/aircraft/show/106106389,10:00,21:59,198,"$544,408.00","$487,128.00","$2,460.24","$40,650.46"
HNL - LAX,54178655392,HNL-SFO-LAX 1,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/54178655392,https://www.airlines-manager.com/aircraft/show/110044458,18:15,6:14,338,"$786,488.00","$718,216.00","$2,124.90","$59,934.58"
HNL - LAX,54183441547,HNL-SFO-LAX 2,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/54183441547,https://www.airlines-manager.com/aircraft/show/110044459,20:15,8:14,338,"$786,488.00","$718,216.00","$2,124.90","$59,934.58"
HNL - LAX,54187257253,HNL-SFO-LAX 5,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/54187257253,https://www.airlines-manager.com/aircraft/show/110044462,21:45,9:44,337,"$784,391.00","$716,192.00","$2,125.20","$59,765.67"
HNL - LIH,54146711554,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/54146711554,https://www.airlines-manager.com/aircraft/show/94803596,0:45,3:14,170,"$50,884.00","$42,464.00",$249.79,"$17,099.60"
HNL - LIH,54146711555,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/54146711555,https://www.airlines-manager.com/aircraft/show/94803595,3:30,5:59,170,"$50,884.00","$42,464.00",$249.79,"$17,099.60"
HNL - LIH,54156164526,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/54156164526,https://www.airlines-manager.com/aircraft/show/94803594,7:00,9:29,170,"$50,884.00","$42,464.00",$249.79,"$17,099.60"
HNL - LIH,54162072908,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/54162072908,https://www.airlines-manager.com/aircraft/show/94803593,10:00,12:29,170,"$50,884.00","$42,464.00",$249.79,"$17,099.60"
HNL - LIH,54168162275,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/54168162275,https://www.airlines-manager.com/aircraft/show/94803596,14:00,16:29,170,"$50,884.00","$42,464.00",$249.79,"$17,099.60"
HNL - LIH,54173399593,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/54173399593,https://www.airlines-manager.com/aircraft/show/94803595,16:45,19:14,170,"$50,884.00","$42,464.00",$249.79,"$17,099.60"
HNL - LIH,54183441555,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/54183441555,https://www.airlines-manager.com/aircraft/show/94803594,20:15,22:44,170,"$50,884.00","$42,464.00",$249.79,"$17,099.60"
HNL - LIH,54187257404,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/54187257404,https://www.airlines-manager.com/aircraft/show/94803593,23:15,1:44,170,"$50,884.00","$42,464.00",$249.79,"$17,099.60"
HNL - LNY,54146711586,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/54146711586,https://www.airlines-manager.com/aircraft/show/106107514,1:00,3:29,116,"$30,301.00","$25,294.00",$218.05,"$10,185.50"
HNL - LNY,54146711587,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/54146711587,https://www.airlines-manager.com/aircraft/show/106107514,3:30,5:59,116,"$30,301.00","$25,294.00",$218.05,"$10,185.50"
HNL - LNY,54146711588,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/54146711588,https://www.airlines-manager.com/aircraft/show/106107514,6:00,8:29,116,"$30,301.00","$25,294.00",$218.05,"$10,185.50"
HNL - LNY,54156164630,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/54156164630,https://www.airlines-manager.com/aircraft/show/106107514,8:30,10:59,116,"$30,301.00","$25,294.00",$218.05,"$10,185.50"
HNL - LNY,54173399471,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/54173399471,https://www.airlines-manager.com/aircraft/show/106107514,15:00,17:29,116,"$30,301.00","$25,294.00",$218.05,"$10,185.50"
HNL - LNY,54178655311,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/54178655311,https://www.airlines-manager.com/aircraft/show/106107514,17:30,19:59,116,"$30,301.00","$25,294.00",$218.05,"$10,185.50"
HNL - LNY,54183441499,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/54183441499,https://www.airlines-manager.com/aircraft/show/106107514,20:00,22:29,116,"$30,301.00","$25,294.00",$218.05,"$10,185.50"
HNL - LNY,54187257349,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/54187257349,https://www.airlines-manager.com/aircraft/show/106107514,22:30,0:59,116,"$30,301.00","$25,294.00",$218.05,"$10,185.50"
HNL - MCO,54146711571,HNL 56C-7 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/54146711571,https://www.airlines-manager.com/aircraft/show/111639419,1:00,19:59,592,"$2,277,153.00","$2,117,054.00","$3,576.10","$111,521.72"
HNL - MCO,54146711572,HNL 56C-6 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/54146711572,https://www.airlines-manager.com/aircraft/show/111639418,4:15,23:14,592,"$2,277,153.00","$2,117,054.00","$3,576.10","$111,521.72"
HNL - MCO,54156164618,HNL 56C-2 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/54156164618,https://www.airlines-manager.com/aircraft/show/111639414,8:15,3:14,592,"$2,277,153.00","$2,117,054.00","$3,576.10","$111,521.72"
HNL - MEL,54156164629,HNL 84A-4 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/54156164629,https://www.airlines-manager.com/aircraft/show/95818923,8:30,6:29,832,"$3,527,480.00","$3,226,098.00","$3,877.52","$146,751.99"
HNL - MEL,54183441522,HNL 84A-7 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/54183441522,https://www.airlines-manager.com/aircraft/show/95818920,20:00,17:59,831,"$3,523,135.00","$3,221,986.00","$3,877.24","$146,564.94"
HNL - MIA,54156164653,HNL 56A-2 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/54156164653,https://www.airlines-manager.com/aircraft/show/95351591,8:30,3:44,592,"$2,322,627.00","$2,156,366.00","$3,642.51","$112,116.08"
HNL - MIA,54162072985,HNL 56A-5 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/54162072985,https://www.airlines-manager.com/aircraft/show/95351588,10:45,5:59,592,"$2,322,627.00","$2,156,366.00","$3,642.51","$112,116.08"
HNL - MIA,54173399498,HNL 56A-4 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/54173399498,https://www.airlines-manager.com/aircraft/show/95351589,15:30,10:44,590,"$2,316,603.00","$2,150,615.00","$3,645.11","$111,817.07"
HNL - MNL,54156164566,HNL 84A-2 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/54156164566,https://www.airlines-manager.com/aircraft/show/95818925,7:30,4:44,832,"$3,450,425.00","$3,161,128.00","$3,799.43","$148,875.73"
HNL - MNL,54178655418,HNL 84A-5 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/54178655418,https://www.airlines-manager.com/aircraft/show/95818922,18:30,15:44,832,"$3,450,425.00","$3,161,128.00","$3,799.43","$148,875.73"
HNL - MSP,54173399535,HNL 56C-1 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/54173399535,https://www.airlines-manager.com/aircraft/show/111639413,16:00,8:14,592,"$1,940,110.00","$1,805,737.00","$3,050.23","$111,236.37"
HNL - MSP,54178655270,HNL 56C-4 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/54178655270,https://www.airlines-manager.com/aircraft/show/111639416,17:00,9:14,592,"$1,940,110.00","$1,805,737.00","$3,050.23","$111,236.37"
HNL - MSP,54187257314,HNL 56C-3 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/54187257314,https://www.airlines-manager.com/aircraft/show/111639415,22:15,14:29,592,"$1,940,110.00","$1,805,737.00","$3,050.23","$111,236.37"
HNL - NAN,54146711917,HNL 84A-7 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/54146711917,https://www.airlines-manager.com/aircraft/show/95818920,3:45,17:14,832,"$2,066,228.00","$1,895,022.00","$2,277.67","$140,545.51"
HNL - NAN,54178655379,HNL 84A-1 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/54178655379,https://www.airlines-manager.com/aircraft/show/95818926,18:00,7:29,832,"$2,037,178.00","$1,875,626.00","$2,254.36","$139,107.00"
HNL - OGG,54146711726,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/54146711726,https://www.airlines-manager.com/aircraft/show/94803594,1:45,4:14,170,"$51,604.00","$42,806.00",$251.80,"$17,237.32"
HNL - OGG,54146711727,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/54146711727,https://www.airlines-manager.com/aircraft/show/94803593,4:45,7:14,170,"$51,604.00","$42,806.00",$251.80,"$17,237.32"
HNL - OGG,54146711728,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/54146711728,https://www.airlines-manager.com/aircraft/show/94803596,6:15,8:44,170,"$51,604.00","$42,806.00",$251.80,"$17,237.32"
HNL - OGG,54156164674,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/54156164674,https://www.airlines-manager.com/aircraft/show/94803595,9:00,11:29,170,"$51,604.00","$42,806.00",$251.80,"$17,237.32"
HNL - OGG,54173399344,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/54173399344,https://www.airlines-manager.com/aircraft/show/94803594,15:00,17:29,170,"$51,604.00","$42,806.00",$251.80,"$17,237.32"
HNL - OGG,54178655364,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/54178655364,https://www.airlines-manager.com/aircraft/show/94803593,18:00,20:29,170,"$51,604.00","$42,806.00",$251.80,"$17,237.32"
HNL - OGG,54183441453,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/54183441453,https://www.airlines-manager.com/aircraft/show/94803596,19:30,21:59,170,"$51,604.00","$42,806.00",$251.80,"$17,237.32"
HNL - OGG,54187257311,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/54187257311,https://www.airlines-manager.com/aircraft/show/94803595,22:15,0:44,170,"$51,604.00","$42,806.00",$251.80,"$17,237.32"
HNL - ORD,54162072928,HNL 56B-5 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/54162072928,https://www.airlines-manager.com/aircraft/show/109187502,10:00,2:59,592,"$2,079,450.00","$1,909,990.00","$3,226.33","$112,462.61"
HNL - ORD,54173399540,HNL 56B-7 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/54173399540,https://www.airlines-manager.com/aircraft/show/109187504,16:00,8:59,592,"$2,079,450.00","$1,909,990.00","$3,226.33","$112,462.61"
HNL - ORD,54187257362,HNL 56B-6 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/54187257362,https://www.airlines-manager.com/aircraft/show/109187503,22:45,15:44,592,"$2,079,450.00","$1,909,990.00","$3,226.33","$112,462.61"
HNL - PHL,54156164536,HNL 56F-3 B,787-10,https://www.airlines-manager.com/network/showline/50049283,https://www.airlines-manager.com/network/showflight/54156164536,https://www.airlines-manager.com/aircraft/show/118383853,7:00,2:29,592,"$2,333,755.00","$2,176,175.00","$3,675.97","$111,694.18"
HNL - PHL,54178655277,HNL 56F-7 B,787-10,https://www.airlines-manager.com/network/showline/50049283,https://www.airlines-manager.com/network/showflight/54178655277,https://www.airlines-manager.com/aircraft/show/118383857,17:00,12:29,592,"$2,333,755.00","$2,176,175.00","$3,675.97","$111,694.18"
HNL - PHL,54183441593,HNL 56F-6 B,787-10,https://www.airlines-manager.com/network/showline/50049283,https://www.airlines-manager.com/network/showflight/54183441593,https://www.airlines-manager.com/aircraft/show/118383856,21:00,16:29,592,"$2,333,755.00","$2,176,175.00","$3,675.97","$111,694.18"
HNL - PHX,54146711883,HNL 56D-7 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/54146711883,https://www.airlines-manager.com/aircraft/show/112066138,3:30,15:59,592,"$1,512,409.00","$1,401,274.00","$2,367.02","$112,251.59"
HNL - PHX,54173399409,HNL 56D-6 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/54173399409,https://www.airlines-manager.com/aircraft/show/112066137,15:00,3:29,592,"$1,512,409.00","$1,401,274.00","$2,367.02","$112,251.59"
HNL - PHX,54173399410,HNL 56D-2 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/54173399410,https://www.airlines-manager.com/aircraft/show/112066133,16:00,4:29,591,"$1,510,798.00","$1,399,735.00","$2,368.42","$112,128.30"
HNL - PPG,54146711771,HNL CARGO 1,737-700,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/54146711771,https://www.airlines-manager.com/aircraft/show/107564830,2:15,14:29,0,"$206,811.00","$166,336.00",#DIV/0!,"$13,596.95"
HNL - PPG,54146711772,HNL-TRW-PPG 1 S,A321-200,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/54146711772,https://www.airlines-manager.com/aircraft/show/88725599,3:30,15:44,380,"$785,616.00","$736,014.00","$1,936.88","$60,164.63"
HNL - PPG,54173399566,HNL-TRW-PPG 2 S,A321-200,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/54173399566,https://www.airlines-manager.com/aircraft/show/88725598,16:00,4:14,380,"$785,616.00","$736,014.00","$1,936.88","$60,164.63"
HNL - PPG,54178655384,HNL-TRW-PPG 3 S,A321-200,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/54178655384,https://www.airlines-manager.com/aircraft/show/88725597,18:00,6:14,380,"$785,616.00","$736,014.00","$1,936.88","$60,164.63"
HNL - PPT,54146711978,HNL-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/54146711978,https://www.airlines-manager.com/aircraft/show/88725600,4:45,17:29,310,"$766,196.00","$713,229.00","$2,300.74","$56,012.75"
HNL - PPT,54173399428,HNL CARGO 2,737-700,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/54173399428,https://www.airlines-manager.com/aircraft/show/107563068,15:00,3:44,0,"$211,034.00","$168,198.00",#DIV/0!,"$13,209.27"
HNL - PPT,54173399429,HNL 84A-6 F,777-300,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/54173399429,https://www.airlines-manager.com/aircraft/show/95818921,15:45,3:44,832,"$1,835,287.00","$1,699,043.00","$2,042.12","$141,783.84"
HNL - PPT,54178655323,HNL-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/54178655323,https://www.airlines-manager.com/aircraft/show/88725600,17:30,6:14,310,"$688,453.00","$643,008.00","$2,074.22","$50,498.01"
HNL - SEA,54146711916,HNL 56D-1 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/54146711916,https://www.airlines-manager.com/aircraft/show/112066132,3:45,15:14,592,"$1,411,026.00","$1,309,353.00","$2,211.74","$114,022.03"
HNL - SEA,54173399534,HNL 56D-1 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/54173399534,https://www.airlines-manager.com/aircraft/show/112066132,16:00,3:29,592,"$1,411,026.00","$1,309,353.00","$2,211.74","$114,022.03"
HNL - SEA,54178655374,HNL 56D-4 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/54178655374,https://www.airlines-manager.com/aircraft/show/112066135,18:00,5:29,592,"$1,411,026.00","$1,309,353.00","$2,211.74","$114,022.03"
HNL - SFO,54156164537,HNL-SFO-LAX 1,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/54156164537,https://www.airlines-manager.com/aircraft/show/110044458,7:00,18:14,338,"$755,506.00","$697,022.00","$2,062.20","$62,049.44"
HNL - SFO,54156164538,HNL-SFO-LAX 2,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/54156164538,https://www.airlines-manager.com/aircraft/show/110044459,9:00,20:14,338,"$755,506.00","$697,022.00","$2,062.20","$62,049.44"
HNL - SFO,54162072976,HNL-SFO-LAX 5,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/54162072976,https://www.airlines-manager.com/aircraft/show/110044462,10:30,21:44,338,"$755,506.00","$697,022.00","$2,062.20","$62,049.44"
HNL - SFO,54178655466,HNL-SFO-LAX 3,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/54178655466,https://www.airlines-manager.com/aircraft/show/110044460,19:00,6:14,338,"$755,506.00","$697,022.00","$2,062.20","$62,049.44"
HNL - SFO,54183441600,HNL-SFO-LAX 4,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/54183441600,https://www.airlines-manager.com/aircraft/show/110044461,21:00,8:14,338,"$755,506.00","$697,022.00","$2,062.20","$62,049.44"
HNL - SFO,54187257287,HNL-SFO-LAX 6 B,A319-100,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/54187257287,https://www.airlines-manager.com/aircraft/show/106106389,22:00,9:29,198,"$526,164.00","$476,877.00","$2,408.47","$41,527.75"
HNL - SIN,54146711994,HNL 84B-4 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/54146711994,https://www.airlines-manager.com/aircraft/show/96807090,5:15,7:29,832,"$4,308,151.00","$3,909,929.00","$4,699.43","$1,750,714.48"
HNL - SIN,54178655271,HNL 84B-7 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/54178655271,https://www.airlines-manager.com/aircraft/show/96807087,17:00,19:14,831,"$4,302,905.00","$3,904,966.00","$4,699.12","$1,748,492.24"
HNL - SYD,54156164558,HNL 84B-5 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/54156164558,https://www.airlines-manager.com/aircraft/show/96807089,7:30,3:59,832,"$3,117,929.00","$2,810,898.00","$3,378.48","$137,228.54"
HNL - SYD,54178655468,HNL 84B-1 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/54178655468,https://www.airlines-manager.com/aircraft/show/96807093,19:15,15:44,832,"$3,117,929.00","$2,810,898.00","$3,378.48","$137,228.54"
HNL - SYD,54183441502,Charter 2,747-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/54183441502,https://www.airlines-manager.com/aircraft/show/112787252,20:00,15:59,574,"$2,682,758.00","$2,524,327.00","$4,397.78","$126,321.62"
HNL - TRW,54146711946,HNL-TRW-PPG 2 S,A321-200,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/54146711946,https://www.airlines-manager.com/aircraft/show/88725598,4:15,15:44,380,"$764,424.00","$719,793.00","$1,894.19","$62,681.54"
HNL - TRW,54146711947,HNL-TRW-PPG 3 S,A321-200,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/54146711947,https://www.airlines-manager.com/aircraft/show/88725597,6:15,17:44,380,"$764,424.00","$719,793.00","$1,894.19","$62,681.54"
HNL - TRW,54173399426,HNL CARGO 1,737-700,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/54173399426,https://www.airlines-manager.com/aircraft/show/107564830,15:00,2:14,0,"$192,452.00","$155,886.00",#DIV/0!,"$13,877.09"
HNL - TRW,54173399427,HNL-TRW-PPG 1 S,A321-200,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/54173399427,https://www.airlines-manager.com/aircraft/show/88725599,16:00,3:29,380,"$764,424.00","$719,793.00","$1,894.19","$62,681.54"
HNL - YVR,54146711463,HNL 56D-6 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/54146711463,https://www.airlines-manager.com/aircraft/show/112066137,0:15,11:59,592,"$1,414,240.00","$1,318,834.00","$2,227.76","$112,400.63"
HNL - YVR,54146711464,HNL 56D-2 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/54146711464,https://www.airlines-manager.com/aircraft/show/112066133,3:30,15:14,592,"$1,414,240.00","$1,318,834.00","$2,227.76","$112,400.63"
HNL - YVR,54173399533,HNL 56D-7 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/54173399533,https://www.airlines-manager.com/aircraft/show/112066138,16:00,3:44,592,"$1,414,240.00","$1,318,834.00","$2,227.76","$112,400.63"
IAH - ABQ,54146711590,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/54146711590,https://www.airlines-manager.com/aircraft/show/103600700,1:00,5:59,310,"$316,874.00","$283,557.00",$914.70,"$56,901.07"
IAH - ABQ,54146711591,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/54146711591,https://www.airlines-manager.com/aircraft/show/110582844,2:30,7:29,198,"$240,844.00","$214,158.00","$1,081.61","$42,974.85"
IAH - ABQ,54146711592,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/54146711592,https://www.airlines-manager.com/aircraft/show/88725601,6:00,10:59,310,"$316,874.00","$283,557.00",$914.70,"$56,901.07"
IAH - ABQ,54168162175,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/54168162175,https://www.airlines-manager.com/aircraft/show/103600702,13:00,17:59,310,"$316,874.00","$283,557.00",$914.70,"$56,901.07"
IAH - ABQ,54178655442,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/54178655442,https://www.airlines-manager.com/aircraft/show/103600701,18:45,23:44,310,"$316,874.00","$283,557.00",$914.70,"$56,901.07"
IAH - ALB,54146711452,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/54146711452,https://www.airlines-manager.com/aircraft/show/114266976,0:15,7:59,320,"$495,326.00","$449,872.00","$1,405.85","$58,173.10"
IAH - ALB,54146711453,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/54146711453,https://www.airlines-manager.com/aircraft/show/92800067,2:00,9:59,112,"$234,453.00","$207,413.00","$1,851.90","$25,980.75"
IAH - ALB,54168162079,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/54168162079,https://www.airlines-manager.com/aircraft/show/114266971,12:00,19:44,320,"$495,326.00","$449,872.00","$1,405.85","$58,173.10"
IAH - ALB,54173399397,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/54173399397,https://www.airlines-manager.com/aircraft/show/114266970,15:00,22:44,320,"$495,326.00","$449,872.00","$1,405.85","$58,173.10"
IAH - ALB,54183441548,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/54183441548,https://www.airlines-manager.com/aircraft/show/114266972,20:15,3:59,320,"$495,326.00","$449,872.00","$1,405.85","$58,173.10"
IAH - ANC,54168162026,IAH-ANC-ONT 1,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/54168162026,https://www.airlines-manager.com/aircraft/show/108258010,12:00,2:44,310,"$896,871.00","$826,647.00","$2,666.60","$56,107.26"
IAH - ANC,54168162027,IAH-ANC-ONT 2,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/54168162027,https://www.airlines-manager.com/aircraft/show/108258011,14:00,4:44,310,"$896,871.00","$826,647.00","$2,666.60","$56,107.26"
IAH - ANC,54178655477,IAH-ANC-ONT 3,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/54178655477,https://www.airlines-manager.com/aircraft/show/108258012,19:15,9:59,310,"$896,871.00","$826,647.00","$2,666.60","$56,107.26"
IAH - ANC,54183441630,IAH-ANC-ONT 4,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/54183441630,https://www.airlines-manager.com/aircraft/show/108089220,21:15,11:59,310,"$896,871.00","$826,647.00","$2,666.60","$56,107.26"
IAH - ANC,54187257403,IAH-ANC-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/54187257403,https://www.airlines-manager.com/aircraft/show/108286957,23:15,13:59,198,"$669,375.00","$613,055.00","$3,096.24","$41,610.07"
IAH - ATL,54146711439,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/54146711439,https://www.airlines-manager.com/aircraft/show/82323704,0:15,4:59,112,"$146,148.00","$112,107.00","$1,000.96","$23,684.58"
IAH - ATL,54162072946,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/54162072946,https://www.airlines-manager.com/aircraft/show/95894466,10:00,14:44,320,"$306,745.00","$242,670.00",$758.34,"$51,268.31"
IAH - ATL,54162072947,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/54162072947,https://www.airlines-manager.com/aircraft/show/96256511,10:45,15:29,320,"$306,745.00","$242,670.00",$758.34,"$51,268.31"
IAH - ATL,54173399565,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/54173399565,https://www.airlines-manager.com/aircraft/show/96183549,16:00,20:44,320,"$306,745.00","$242,670.00",$758.34,"$51,268.31"
IAH - ATL,54178655335,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/54178655335,https://www.airlines-manager.com/aircraft/show/96177955,17:45,22:29,320,"$306,745.00","$242,670.00",$758.34,"$51,268.31"
IAH - ATL,54187257435,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/54187257435,https://www.airlines-manager.com/aircraft/show/96250652,23:45,4:29,320,"$306,745.00","$242,670.00",$758.34,"$51,268.31"
IAH - AUS,54146711941,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/54146711941,https://www.airlines-manager.com/aircraft/show/106007214,4:15,6:59,338,"$100,434.00","$76,833.00",$227.32,"$28,109.63"
IAH - AUS,54162073043,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/54162073043,https://www.airlines-manager.com/aircraft/show/106007213,11:00,13:44,338,"$100,434.00","$76,833.00",$227.32,"$28,109.63"
IAH - AUS,54168162075,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/54168162075,https://www.airlines-manager.com/aircraft/show/106007217,12:00,14:44,338,"$100,434.00","$76,833.00",$227.32,"$28,109.63"
IAH - AUS,54178655394,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/54178655394,https://www.airlines-manager.com/aircraft/show/106007216,18:15,20:59,338,"$100,434.00","$76,833.00",$227.32,"$28,109.63"
IAH - AUS,54183441655,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/54183441655,https://www.airlines-manager.com/aircraft/show/106007215,21:30,0:14,265,"$87,687.00","$64,318.00",$242.71,"$23,530.98"
IAH - BDL,54146712018,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/54146712018,https://www.airlines-manager.com/aircraft/show/103600700,6:00,13:59,310,"$498,192.00","$455,852.00","$1,470.49","$57,100.46"
IAH - BDL,54156164576,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/54156164576,https://www.airlines-manager.com/aircraft/show/110582844,7:30,15:29,198,"$375,515.00","$341,578.00","$1,725.14","$42,786.39"
IAH - BDL,54162073062,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/54162073062,https://www.airlines-manager.com/aircraft/show/88725601,11:00,18:59,310,"$498,192.00","$455,852.00","$1,470.49","$57,100.46"
IAH - BDL,54178655365,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/54178655365,https://www.airlines-manager.com/aircraft/show/103600702,18:00,1:59,310,"$498,192.00","$455,852.00","$1,470.49","$57,100.46"
IAH - BDL,54183441490,IAH-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/54183441490,https://www.airlines-manager.com/aircraft/show/96990010,19:45,3:44,112,"$234,492.00","$206,459.00","$1,843.38","$25,861.25"
IAH - BDL,54187257432,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/54187257432,https://www.airlines-manager.com/aircraft/show/103600701,23:45,7:44,310,"$498,192.00","$455,852.00","$1,470.49","$57,100.46"
IAH - BFF,54146711926,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/54146711926,https://www.airlines-manager.com/aircraft/show/114266972,4:00,9:44,320,"$365,524.00","$327,646.00","$1,023.89","$57,147.56"
IAH - BFF,54162072969,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/54162072969,https://www.airlines-manager.com/aircraft/show/114266976,10:15,15:59,320,"$365,524.00","$327,646.00","$1,023.89","$57,147.56"
IAH - BFF,54168162078,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/54168162078,https://www.airlines-manager.com/aircraft/show/92800067,12:00,17:44,112,"$173,234.00","$151,553.00","$1,353.15","$26,433.66"
IAH - BFF,54183441474,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/54183441474,https://www.airlines-manager.com/aircraft/show/114266971,19:45,1:29,320,"$365,524.00","$327,646.00","$1,023.89","$57,147.56"
IAH - BFF,54187257374,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/54187257374,https://www.airlines-manager.com/aircraft/show/114266970,22:45,4:29,320,"$365,524.00","$327,646.00","$1,023.89","$57,147.56"
IAH - BIL,54146711818,IAH-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/54146711818,https://www.airlines-manager.com/aircraft/show/117273390,2:45,9:59,320,"$455,489.00","$412,098.00","$1,287.81","$56,972.07"
IAH - BIL,54156164668,IAH-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/54156164668,https://www.airlines-manager.com/aircraft/show/117273392,9:00,16:14,320,"$455,489.00","$412,098.00","$1,287.81","$56,972.07"
IAH - BIL,54162073002,IAH-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/54162073002,https://www.airlines-manager.com/aircraft/show/117273389,11:00,18:14,320,"$455,489.00","$412,098.00","$1,287.81","$56,972.07"
IAH - BIL,54178655411,IAH-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/54178655411,https://www.airlines-manager.com/aircraft/show/117273391,18:30,1:44,320,"$455,489.00","$412,098.00","$1,287.81","$56,972.07"
IAH - BNA,54146711931,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/54146711931,https://www.airlines-manager.com/aircraft/show/104258214,4:00,8:44,310,"$301,869.00","$270,660.00",$873.10,"$57,181.69"
IAH - BNA,54156164683,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/54156164683,https://www.airlines-manager.com/aircraft/show/104258213,9:15,13:59,310,"$301,869.00","$270,660.00",$873.10,"$57,181.69"
IAH - BNA,54173399343,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/54173399343,https://www.airlines-manager.com/aircraft/show/104258212,15:00,19:44,310,"$301,869.00","$270,660.00",$873.10,"$57,181.69"
IAH - BNA,54187257290,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/54187257290,https://www.airlines-manager.com/aircraft/show/104258211,22:00,2:44,310,"$301,869.00","$270,660.00",$873.10,"$57,181.69"
IAH - BNA,54187257291,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/54187257291,https://www.airlines-manager.com/aircraft/show/103534664,23:00,3:44,112,"$143,481.00","$123,610.00","$1,103.66","$26,114.79"
IAH - BOG,54146712019,IAH 56A-4 E,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/54146712019,https://www.airlines-manager.com/aircraft/show/106676235,6:00,15:59,648,"$1,300,597.00","$1,208,305.00","$1,864.67","$121,032.22"
IAH - BOG,54168162256,IAH 56A-6 E,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/54168162256,https://www.airlines-manager.com/aircraft/show/106676237,14:00,23:59,648,"$1,300,597.00","$1,208,305.00","$1,864.67","$121,032.22"
IAH - BOG,54183441494,IAH 56A-1 E,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/54183441494,https://www.airlines-manager.com/aircraft/show/106676232,20:00,5:59,647,"$1,297,147.00","$1,204,938.00","$1,862.35","$120,694.96"
IAH - BOI,54146711633,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/54146711633,https://www.airlines-manager.com/aircraft/show/104258213,1:15,9:14,310,"$500,380.00","$458,753.00","$1,479.85","$57,463.84"
IAH - BOI,54156164535,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/54156164535,https://www.airlines-manager.com/aircraft/show/104258212,7:00,14:59,310,"$500,380.00","$458,753.00","$1,479.85","$57,463.84"
IAH - BOI,54168162273,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/54168162273,https://www.airlines-manager.com/aircraft/show/104258211,14:00,21:59,310,"$500,380.00","$458,753.00","$1,479.85","$57,463.84"
IAH - BOI,54173399406,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/54173399406,https://www.airlines-manager.com/aircraft/show/103534664,15:00,22:59,112,"$235,549.00","$207,987.00","$1,857.03","$26,052.65"
IAH - BOI,54183441525,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/54183441525,https://www.airlines-manager.com/aircraft/show/104258214,20:00,3:59,310,"$500,380.00","$458,753.00","$1,479.85","$57,463.84"
IAH - BOS,54146711730,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/54146711730,https://www.airlines-manager.com/aircraft/show/88400800,1:45,9:59,400,"$665,959.00","$604,155.00","$1,510.39","$73,379.15"
IAH - BOS,54162073070,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/54162073070,https://www.airlines-manager.com/aircraft/show/88400799,11:00,19:14,400,"$665,959.00","$604,155.00","$1,510.39","$73,379.15"
IAH - BOS,54168162074,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/54168162074,https://www.airlines-manager.com/aircraft/show/88400801,12:00,20:14,400,"$665,959.00","$604,155.00","$1,510.39","$73,379.15"
IAH - BOS,54178655341,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/54178655341,https://www.airlines-manager.com/aircraft/show/89233038,17:45,1:59,400,"$665,959.00","$604,155.00","$1,510.39","$73,379.15"
IAH - BOS,54178655342,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/54178655342,https://www.airlines-manager.com/aircraft/show/88400798,18:30,2:44,376,"$642,132.00","$581,322.00","$1,546.07","$70,605.91"
IAH - BSB,54162073073,IAH 84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/54162073073,https://www.airlines-manager.com/aircraft/show/89124076,11:15,5:29,932,"$3,053,991.00","$2,786,057.00","$2,989.33","$152,800.20"
IAH - BSB,54183441553,IAH 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/54183441553,https://www.airlines-manager.com/aircraft/show/88905140,20:15,14:29,932,"$3,053,991.00","$2,786,057.00","$2,989.33","$152,800.20"
IAH - BTV,54146711437,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/54146711437,https://www.airlines-manager.com/aircraft/show/86385103,0:00,8:14,310,"$515,451.00","$473,724.00","$1,528.14","$57,537.33"
IAH - BTV,54146711438,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/54146711438,https://www.airlines-manager.com/aircraft/show/82543907,4:15,12:29,112,"$242,906.00","$215,131.00","$1,920.81","$26,129.27"
IAH - BTV,54156164557,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/54156164557,https://www.airlines-manager.com/aircraft/show/114373409,7:15,15:29,310,"$515,451.00","$473,724.00","$1,528.14","$57,537.33"
IAH - BTV,54168162292,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/54168162292,https://www.airlines-manager.com/aircraft/show/114373410,14:00,22:14,310,"$515,451.00","$473,724.00","$1,528.14","$57,537.33"
IAH - BTV,54178655424,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/54178655424,https://www.airlines-manager.com/aircraft/show/113994196,18:45,2:59,310,"$515,451.00","$473,724.00","$1,528.14","$57,537.33"
IAH - BUF,54146711645,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/54146711645,https://www.airlines-manager.com/aircraft/show/107467127,1:15,8:14,310,"$452,151.00","$413,484.00","$1,333.82","$59,210.12"
IAH - BUF,54146711646,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/54146711646,https://www.airlines-manager.com/aircraft/show/107467128,4:00,10:59,310,"$452,151.00","$413,484.00","$1,333.82","$59,210.12"
IAH - BUF,54168162142,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/54168162142,https://www.airlines-manager.com/aircraft/show/107467129,13:00,19:59,310,"$452,151.00","$413,484.00","$1,333.82","$59,210.12"
IAH - BUF,54178655260,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/54178655260,https://www.airlines-manager.com/aircraft/show/110582843,17:00,23:59,198,"$341,310.00","$310,322.00","$1,567.28","$44,437.52"
IAH - BUF,54183441625,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/54183441625,https://www.airlines-manager.com/aircraft/show/107467130,21:15,4:14,309,"$451,272.00","$412,640.00","$1,335.40","$59,089.26"
IAH - BUR,54146711790,IAH-YEG-BUR 4,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/54146711790,https://www.airlines-manager.com/aircraft/show/117273341,2:30,9:59,310,"$467,550.00","$428,881.00","$1,383.49","$57,311.49"
IAH - BUR,54146711791,IAH-YEG-BUR 3,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/54146711791,https://www.airlines-manager.com/aircraft/show/117273342,3:15,10:44,310,"$467,550.00","$428,881.00","$1,383.49","$57,311.49"
IAH - BUR,54162072994,IAH-YEG-BUR 5,A321neo,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/54162072994,https://www.airlines-manager.com/aircraft/show/117273340,11:00,18:29,338,"$506,558.00","$469,607.00","$1,389.37","$62,753.72"
IAH - BUR,54178655372,IAH-YEG-BUR 2,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/54178655372,https://www.airlines-manager.com/aircraft/show/117273343,18:00,1:29,310,"$467,550.00","$428,881.00","$1,383.49","$57,311.49"
IAH - BUR,54183441542,IAH-YEG-BUR 1,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/54183441542,https://www.airlines-manager.com/aircraft/show/117273344,20:15,3:44,290,"$449,692.00","$411,776.00","$1,419.92","$55,025.75"
IAH - BWI,54146711485,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/54146711485,https://www.airlines-manager.com/aircraft/show/106007215,0:15,6:59,338,"$466,270.00","$424,899.00","$1,257.10","$63,103.81"
IAH - BWI,54146711486,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/54146711486,https://www.airlines-manager.com/aircraft/show/107543798,4:45,11:44,0,"$114,931.00","$84,213.00",$0.00,"$12,059.14"
IAH - BWI,54162073042,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/54162073042,https://www.airlines-manager.com/aircraft/show/106007214,11:00,17:44,338,"$466,270.00","$424,899.00","$1,257.10","$63,103.81"
IAH - BWI,54168162234,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/54168162234,https://www.airlines-manager.com/aircraft/show/106007213,13:45,20:29,338,"$466,270.00","$424,899.00","$1,257.10","$63,103.81"
IAH - BWI,54173399342,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/54173399342,https://www.airlines-manager.com/aircraft/show/106007217,14:45,21:29,338,"$466,270.00","$424,899.00","$1,257.10","$63,103.81"
IAH - BWI,54183441607,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/54183441607,https://www.airlines-manager.com/aircraft/show/106007216,21:00,3:44,338,"$466,270.00","$424,899.00","$1,257.10","$63,103.81"
IAH - BZN,54146711525,IAH-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/54146711525,https://www.airlines-manager.com/aircraft/show/117273392,0:30,7:59,320,"$473,001.00","$429,239.00","$1,341.37","$57,359.33"
IAH - BZN,54146711526,IAH-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/54146711526,https://www.airlines-manager.com/aircraft/show/117273389,2:30,9:59,320,"$473,001.00","$429,239.00","$1,341.37","$57,359.33"
IAH - BZN,54162073000,IAH-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/54162073000,https://www.airlines-manager.com/aircraft/show/117273391,11:00,18:29,320,"$473,001.00","$429,239.00","$1,341.37","$57,359.33"
IAH - BZN,54178655474,IAH-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/54178655474,https://www.airlines-manager.com/aircraft/show/117273390,19:15,2:44,320,"$473,001.00","$429,239.00","$1,341.37","$57,359.33"
IAH - CAK,54146711849,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/54146711849,https://www.airlines-manager.com/aircraft/show/113994196,3:00,9:14,310,"$391,760.00","$357,325.00","$1,152.66","$57,324.87"
IAH - CAK,54156164609,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/54156164609,https://www.airlines-manager.com/aircraft/show/86385103,8:15,14:29,310,"$391,760.00","$357,325.00","$1,152.66","$57,324.87"
IAH - CAK,54168162152,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/54168162152,https://www.airlines-manager.com/aircraft/show/82543907,13:00,19:14,112,"$185,160.00","$162,606.00","$1,451.84","$26,086.52"
IAH - CAK,54173399527,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/54173399527,https://www.airlines-manager.com/aircraft/show/114373409,16:00,22:14,310,"$391,760.00","$357,325.00","$1,152.66","$57,324.87"
IAH - CAK,54187257317,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/54187257317,https://www.airlines-manager.com/aircraft/show/114373410,22:15,4:29,290,"$376,349.00","$342,516.00","$1,181.09","$54,949.09"
IAH - CHS,54146711683,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/54146711683,https://www.airlines-manager.com/aircraft/show/107467211,1:30,7:14,112,"$169,673.00","$148,516.00","$1,326.04","$25,903.95"
IAH - CHS,54146711684,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/54146711684,https://www.airlines-manager.com/aircraft/show/107467131,3:30,9:14,310,"$357,728.00","$325,152.00","$1,048.88","$56,712.56"
IAH - CHS,54168162086,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/54168162086,https://www.airlines-manager.com/aircraft/show/107467132,12:00,17:44,310,"$357,728.00","$325,152.00","$1,048.88","$56,712.56"
IAH - CHS,54178655292,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/54178655292,https://www.airlines-manager.com/aircraft/show/107467133,17:15,22:59,310,"$357,728.00","$325,152.00","$1,048.88","$56,712.56"
IAH - CHS,54187257439,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/54187257439,https://www.airlines-manager.com/aircraft/show/107467134,23:45,5:29,310,"$357,728.00","$325,152.00","$1,048.88","$56,712.56"
IAH - CLE,54146711754,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/54146711754,https://www.airlines-manager.com/aircraft/show/103600702,2:00,8:14,310,"$399,426.00","$362,715.00","$1,170.05","$58,189.57"
IAH - CLE,54156164579,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/54156164579,https://www.airlines-manager.com/aircraft/show/103600701,7:45,13:59,310,"$399,426.00","$362,715.00","$1,170.05","$58,189.57"
IAH - CLE,54168162257,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/54168162257,https://www.airlines-manager.com/aircraft/show/103600700,14:00,20:14,310,"$399,426.00","$362,715.00","$1,170.05","$58,189.57"
IAH - CLE,54173399493,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/54173399493,https://www.airlines-manager.com/aircraft/show/110582844,15:30,21:44,198,"$301,699.00","$272,283.00","$1,375.17","$43,681.76"
IAH - CLE,54178655449,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/54178655449,https://www.airlines-manager.com/aircraft/show/88725601,19:00,1:14,310,"$399,426.00","$362,715.00","$1,170.05","$58,189.57"
IAH - CLT,54146711904,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/54146711904,https://www.airlines-manager.com/aircraft/show/93094697,3:45,9:29,310,"$360,318.00","$318,018.00","$1,025.86","$55,468.26"
IAH - CLT,54162072958,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/54162072958,https://www.airlines-manager.com/aircraft/show/93094698,10:00,15:44,310,"$360,318.00","$318,018.00","$1,025.86","$55,468.26"
IAH - CLT,54168162053,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/54168162053,https://www.airlines-manager.com/aircraft/show/93100455,12:00,17:44,112,"$170,541.00","$143,570.00","$1,281.88","$25,041.28"
IAH - CLT,54173399601,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/54173399601,https://www.airlines-manager.com/aircraft/show/93094699,16:45,22:29,310,"$360,318.00","$318,018.00","$1,025.86","$55,468.26"
IAH - CLT,54178655433,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/54178655433,https://www.airlines-manager.com/aircraft/show/93094695,18:45,0:29,310,"$360,318.00","$318,018.00","$1,025.86","$55,468.26"
IAH - CLT,54187257271,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/54187257271,https://www.airlines-manager.com/aircraft/show/93094696,22:00,3:44,310,"$360,318.00","$318,018.00","$1,025.86","$55,468.26"
IAH - CMH,54156164534,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/54156164534,https://www.airlines-manager.com/aircraft/show/103882355,7:00,12:59,310,"$377,783.00","$342,516.00","$1,104.89","$57,245.01"
IAH - CMH,54162073061,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/54162073061,https://www.airlines-manager.com/aircraft/show/103882358,11:00,16:59,310,"$377,783.00","$342,516.00","$1,104.89","$57,245.01"
IAH - CMH,54168162064,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/54168162064,https://www.airlines-manager.com/aircraft/show/105099861,12:00,17:59,112,"$178,529.00","$155,649.00","$1,389.72","$26,013.76"
IAH - CMH,54178655478,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/54178655478,https://www.airlines-manager.com/aircraft/show/103882357,19:15,1:14,310,"$377,783.00","$342,516.00","$1,104.89","$57,245.01"
IAH - CMH,54187257383,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/54187257383,https://www.airlines-manager.com/aircraft/show/103882356,23:00,4:59,310,"$377,783.00","$342,516.00","$1,104.89","$57,245.01"
IAH - COS,54146711702,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/54146711702,https://www.airlines-manager.com/aircraft/show/103882355,1:45,6:59,310,"$330,575.00","$297,660.00",$960.19,"$56,877.71"
IAH - COS,54146711703,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/54146711703,https://www.airlines-manager.com/aircraft/show/103882358,5:45,10:59,310,"$330,575.00","$297,660.00",$960.19,"$56,877.71"
IAH - COS,54168162251,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/54168162251,https://www.airlines-manager.com/aircraft/show/103882357,14:00,19:14,310,"$330,575.00","$297,660.00",$960.19,"$56,877.71"
IAH - COS,54178655351,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/54178655351,https://www.airlines-manager.com/aircraft/show/103882356,17:45,22:59,310,"$330,575.00","$297,660.00",$960.19,"$56,877.71"
IAH - COS,54187257353,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/54187257353,https://www.airlines-manager.com/aircraft/show/105099861,22:45,3:59,110,"$155,612.00","$134,530.00","$1,223.00","$25,706.37"
IAH - CUN,54146711597,IAH 56A-4 E,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/54146711597,https://www.airlines-manager.com/aircraft/show/106676235,1:00,5:59,648,"$623,370.00","$570,261.00",$880.03,"$114,433.65"
IAH - CUN,54168162113,IAH 56A-5 E,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/54168162113,https://www.airlines-manager.com/aircraft/show/106676236,12:30,17:29,648,"$623,370.00","$570,261.00",$880.03,"$114,433.65"
IAH - CUN,54183441566,IAH 56A-7 E,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/54183441566,https://www.airlines-manager.com/aircraft/show/106676238,20:30,1:29,648,"$623,370.00","$570,261.00",$880.03,"$114,433.65"
IAH - CVG,54146711445,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/54146711445,https://www.airlines-manager.com/aircraft/show/99093332,0:15,5:44,320,"$346,590.00","$305,889.00",$955.90,"$55,785.23"
IAH - CVG,54146711446,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/54146711446,https://www.airlines-manager.com/aircraft/show/99093333,4:00,9:29,320,"$346,590.00","$305,889.00",$955.90,"$55,785.23"
IAH - CVG,54156164600,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/54156164600,https://www.airlines-manager.com/aircraft/show/99093334,8:00,13:29,320,"$346,590.00","$305,889.00",$955.90,"$55,785.23"
IAH - CVG,54168162249,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/54168162249,https://www.airlines-manager.com/aircraft/show/99093335,14:00,19:29,320,"$346,590.00","$305,889.00",$955.90,"$55,785.23"
IAH - CVG,54173399508,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/54173399508,https://www.airlines-manager.com/aircraft/show/101412921,15:45,21:14,0,"$108,314.00","$74,133.00",$0.00,"$13,519.70"
IAH - CVG,54173399509,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/54173399509,https://www.airlines-manager.com/aircraft/show/106499070,16:00,21:29,198,"$262,949.00","$234,422.00","$1,183.95","$42,751.73"
IAH - DEN,54168162065,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/54168162065,https://www.airlines-manager.com/aircraft/show/105562975,12:00,17:29,338,"$377,132.00","$323,898.00",$958.28,"$59,069.54"
IAH - DEN,54168162066,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/54168162066,https://www.airlines-manager.com/aircraft/show/105562971,13:00,18:29,338,"$377,132.00","$323,898.00",$958.28,"$59,069.54"
IAH - DEN,54187257331,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/54187257331,https://www.airlines-manager.com/aircraft/show/105562972,22:30,3:59,338,"$377,132.00","$323,898.00",$958.28,"$59,069.54"
IAH - DEN,54187257332,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/54187257332,https://www.airlines-manager.com/aircraft/show/105562973,23:00,4:29,338,"$377,132.00","$323,898.00",$958.28,"$59,069.54"
IAH - DEN,54187257333,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/54187257333,https://www.airlines-manager.com/aircraft/show/107543798,23:15,4:44,0,"$93,476.00","$57,419.00",$0.00,"$10,471.55"
IAH - DEN,54187257334,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/54187257334,https://www.airlines-manager.com/aircraft/show/105562974,23:30,4:59,338,"$377,132.00","$323,898.00",$958.28,"$59,069.54"
IAH - DFW,54146711574,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/54146711574,https://www.airlines-manager.com/aircraft/show/99093333,1:00,3:59,320,"$127,970.00","$80,376.00",$251.18,"$26,941.68"
IAH - DFW,54146711575,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/54146711575,https://www.airlines-manager.com/aircraft/show/99093334,5:00,7:59,320,"$127,970.00","$80,376.00",$251.18,"$26,941.68"
IAH - DFW,54162073063,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/54162073063,https://www.airlines-manager.com/aircraft/show/99093335,11:00,13:59,320,"$127,970.00","$80,376.00",$251.18,"$26,941.68"
IAH - DFW,54168162138,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/54168162138,https://www.airlines-manager.com/aircraft/show/107543798,13:00,15:59,0,"$39,135.00","$14,173.00",#DIV/0!,"$4,750.73"
IAH - DFW,54168162139,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/54168162139,https://www.airlines-manager.com/aircraft/show/106499070,13:00,15:59,198,"$96,695.00","$64,607.00",$326.30,"$21,655.98"
IAH - DFW,54168162140,IAH-YEG-BUR 4,A321-200,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/54168162140,https://www.airlines-manager.com/aircraft/show/117273341,14:15,17:14,310,"$129,445.00","$89,347.00",$288.22,"$29,948.72"
IAH - DFW,54183441639,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/54183441639,https://www.airlines-manager.com/aircraft/show/99093332,21:15,0:14,320,"$127,970.00","$80,376.00",$251.18,"$26,941.68"
IAH - DSM,54146711869,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/54146711869,https://www.airlines-manager.com/aircraft/show/110424761,3:15,8:29,320,"$331,987.00","$297,057.00",$928.30,"$56,762.48"
IAH - DSM,54156164658,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/54156164658,https://www.airlines-manager.com/aircraft/show/110424758,8:45,13:59,320,"$331,987.00","$297,057.00",$928.30,"$56,762.48"
IAH - DSM,54168162243,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/54168162243,https://www.airlines-manager.com/aircraft/show/110424759,14:00,19:14,320,"$331,987.00","$297,057.00",$928.30,"$56,762.48"
IAH - DSM,54178655408,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/54178655408,https://www.airlines-manager.com/aircraft/show/110424760,18:30,23:44,320,"$331,987.00","$297,057.00",$928.30,"$56,762.48"
IAH - DTW,54146711503,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/54146711503,https://www.airlines-manager.com/aircraft/show/90183184,0:30,6:44,310,"$394,242.00","$349,485.00","$1,127.37","$56,067.11"
IAH - DTW,54146711504,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/54146711504,https://www.airlines-manager.com/aircraft/show/90183180,2:30,8:44,310,"$394,242.00","$349,485.00","$1,127.37","$56,067.11"
IAH - DTW,54146711505,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/54146711505,https://www.airlines-manager.com/aircraft/show/90183181,6:00,12:14,310,"$394,242.00","$349,485.00","$1,127.37","$56,067.11"
IAH - DTW,54168162203,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/54168162203,https://www.airlines-manager.com/aircraft/show/90183182,13:00,19:14,310,"$394,242.00","$349,485.00","$1,127.37","$56,067.11"
IAH - DTW,54178655443,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/54178655443,https://www.airlines-manager.com/aircraft/show/90183183,18:45,0:59,310,"$394,242.00","$349,485.00","$1,127.37","$56,067.11"
IAH - DTW,54183441582,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/54183441582,https://www.airlines-manager.com/aircraft/show/90140936,20:45,2:59,135,"$185,197.00","$156,720.00","$1,160.89","$25,142.25"
IAH - ELP,54146711884,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/54146711884,https://www.airlines-manager.com/aircraft/show/104717245,3:30,8:14,310,"$299,599.00","$269,242.00",$868.52,"$56,882.11"
IAH - ELP,54162073058,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/54162073058,https://www.airlines-manager.com/aircraft/show/104717246,11:00,15:44,310,"$299,599.00","$269,242.00",$868.52,"$56,882.11"
IAH - ELP,54173399598,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/54173399598,https://www.airlines-manager.com/aircraft/show/104717247,16:45,21:29,310,"$299,599.00","$269,242.00",$868.52,"$56,882.11"
IAH - ELP,54178655446,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/54178655446,https://www.airlines-manager.com/aircraft/show/104743902,19:00,23:44,112,"$142,796.00","$123,419.00","$1,101.96","$26,074.44"
IAH - ELP,54187257289,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/54187257289,https://www.airlines-manager.com/aircraft/show/104717244,22:00,2:44,310,"$299,599.00","$269,242.00",$868.52,"$56,882.11"
IAH - EZE,54146711919,IAH 84A-2 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/54146711919,https://www.airlines-manager.com/aircraft/show/89439130,4:00,0:29,932,"$3,364,104.00","$3,066,842.00","$3,290.60","$149,723.78"
IAH - EZE,54146711920,IAH 84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/54146711920,https://www.airlines-manager.com/aircraft/show/89124075,5:30,1:59,930,"$3,357,599.00","$3,060,723.00","$3,291.10","$149,425.04"
IAH - FAR,54146711685,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/54146711685,https://www.airlines-manager.com/aircraft/show/110424754,1:30,8:14,320,"$417,352.00","$376,905.00","$1,177.83","$55,975.99"
IAH - FAR,54146711686,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/54146711686,https://www.airlines-manager.com/aircraft/show/110424755,4:15,10:59,320,"$417,352.00","$376,905.00","$1,177.83","$55,975.99"
IAH - FAR,54168162025,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/54168162025,https://www.airlines-manager.com/aircraft/show/110424756,12:00,18:44,320,"$417,352.00","$376,905.00","$1,177.83","$55,975.99"
IAH - FAR,54187257298,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/54187257298,https://www.airlines-manager.com/aircraft/show/110424757,22:00,4:44,320,"$417,352.00","$376,905.00","$1,177.83","$55,975.99"
IAH - FAT,54146711918,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/54146711918,https://www.airlines-manager.com/aircraft/show/110424760,4:00,11:44,320,"$497,045.00","$451,592.00","$1,411.23","$58,395.52"
IAH - FAT,54168162259,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/54168162259,https://www.airlines-manager.com/aircraft/show/110424761,14:00,21:44,320,"$497,045.00","$451,592.00","$1,411.23","$58,395.52"
IAH - FAT,54178655387,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/54178655387,https://www.airlines-manager.com/aircraft/show/110424758,18:15,1:59,320,"$497,045.00","$451,592.00","$1,411.23","$58,395.52"
IAH - FAT,54187257421,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/54187257421,https://www.airlines-manager.com/aircraft/show/110424759,23:30,7:14,319,"$495,572.00","$450,169.00","$1,411.19","$58,211.51"
IAH - FCA,54146711712,IAH-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/54146711712,https://www.airlines-manager.com/aircraft/show/117273391,1:45,9:59,320,"$521,224.00","$474,034.00","$1,481.36","$57,574.98"
IAH - FCA,54162073001,IAH-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/54162073001,https://www.airlines-manager.com/aircraft/show/117273390,11:00,19:14,320,"$521,224.00","$474,034.00","$1,481.36","$57,574.98"
IAH - FCA,54173399576,IAH-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/54173399576,https://www.airlines-manager.com/aircraft/show/117273392,16:15,0:29,320,"$521,224.00","$474,034.00","$1,481.36","$57,574.98"
IAH - FCA,54178655400,IAH-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/54178655400,https://www.airlines-manager.com/aircraft/show/117273389,18:15,2:29,305,"$506,224.00","$459,685.00","$1,507.16","$55,832.19"
IAH - FLL,54146711521,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/54146711521,https://www.airlines-manager.com/aircraft/show/93094695,0:30,6:14,310,"$366,964.00","$329,736.00","$1,063.66","$57,512.09"
IAH - FLL,54146711522,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/54146711522,https://www.airlines-manager.com/aircraft/show/93094696,3:45,9:29,310,"$366,964.00","$329,736.00","$1,063.66","$57,512.09"
IAH - FLL,54162072957,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/54162072957,https://www.airlines-manager.com/aircraft/show/93094697,10:00,15:44,310,"$366,964.00","$329,736.00","$1,063.66","$57,512.09"
IAH - FLL,54173399500,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/54173399500,https://www.airlines-manager.com/aircraft/show/93094698,15:45,21:29,310,"$366,964.00","$329,736.00","$1,063.66","$57,512.09"
IAH - FLL,54178655338,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/54178655338,https://www.airlines-manager.com/aircraft/show/93100455,17:45,23:29,112,"$174,104.00","$150,084.00","$1,340.04","$26,177.44"
IAH - FLL,54187257342,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/54187257342,https://www.airlines-manager.com/aircraft/show/93094699,22:30,4:14,310,"$366,964.00","$329,736.00","$1,063.66","$57,512.09"
IAH - FSD,54146711979,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/54146711979,https://www.airlines-manager.com/aircraft/show/110424757,4:45,10:29,320,"$361,825.00","$324,990.00","$1,015.59","$56,684.30"
IAH - FSD,54156164613,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/54156164613,https://www.airlines-manager.com/aircraft/show/110424754,8:15,13:59,320,"$361,825.00","$324,990.00","$1,015.59","$56,684.30"
IAH - FSD,54162073017,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/54162073017,https://www.airlines-manager.com/aircraft/show/110424755,11:00,16:44,320,"$361,825.00","$324,990.00","$1,015.59","$56,684.30"
IAH - FSD,54178655426,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/54178655426,https://www.airlines-manager.com/aircraft/show/110424756,18:45,0:29,279,"$333,700.00","$297,905.00","$1,067.76","$51,960.17"
IAH - GDL,54146711981,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/54146711981,https://www.airlines-manager.com/aircraft/show/114266977,4:45,9:59,400,"$438,019.00","$395,506.00",$988.77,"$75,574.39"
IAH - GDL,54162072988,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/54162072988,https://www.airlines-manager.com/aircraft/show/114266980,10:45,15:59,400,"$438,019.00","$395,506.00",$988.77,"$75,574.39"
IAH - GDL,54168162097,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/54168162097,https://www.airlines-manager.com/aircraft/show/114266979,12:00,17:14,400,"$438,019.00","$395,506.00",$988.77,"$75,574.39"
IAH - GDL,54183441511,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/54183441511,https://www.airlines-manager.com/aircraft/show/114266978,20:00,1:14,354,"$394,220.00","$352,931.00",$996.98,"$67,439.04"
IAH - GIG,54146711385,IAH 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/54146711385,https://www.airlines-manager.com/aircraft/show/88905140,0:00,20:14,932,"$3,375,058.00","$3,072,413.00","$3,296.58","$151,849.08"
IAH - GIG,54146711386,IAH 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/54146711386,https://www.airlines-manager.com/aircraft/show/89124074,2:00,22:14,932,"$3,375,058.00","$3,072,413.00","$3,296.58","$151,849.08"
IAH - GRR,54146711638,IAH-GRR-MSN 3,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/54146711638,https://www.airlines-manager.com/aircraft/show/117273346,1:15,7:29,310,"$389,416.00","$354,658.00","$1,144.06","$56,897.01"
IAH - GRR,54156164546,IAH-GRR-MSN 2,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/54156164546,https://www.airlines-manager.com/aircraft/show/117273347,7:15,13:29,310,"$389,416.00","$354,658.00","$1,144.06","$56,897.01"
IAH - GRR,54168162271,IAH-GRR-MSN 1,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/54168162271,https://www.airlines-manager.com/aircraft/show/117273348,14:00,20:14,310,"$389,416.00","$354,658.00","$1,144.06","$56,897.01"
IAH - GRR,54173399522,IAH-GRR-MSN 4,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/54173399522,https://www.airlines-manager.com/aircraft/show/117273345,16:00,22:14,310,"$389,416.00","$354,658.00","$1,144.06","$56,897.01"
IAH - GRU,54146711565,IAH 56A-7 E,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/54146711565,https://www.airlines-manager.com/aircraft/show/106676238,1:00,20:29,648,"$2,475,775.00","$2,306,133.00","$3,558.85","$118,364.40"
IAH - GRU,54162073033,IAH 56A-2 E,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/54162073033,https://www.airlines-manager.com/aircraft/show/106676233,11:00,6:29,648,"$2,475,775.00","$2,306,133.00","$3,558.85","$118,364.40"
IAH - GRU,54178655276,IAH 56A-4 E,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/54178655276,https://www.airlines-manager.com/aircraft/show/106676235,17:00,12:29,646,"$2,469,399.00","$2,300,033.00","$3,560.42","$118,051.31"
IAH - IAD,54146711890,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/54146711890,https://www.airlines-manager.com/aircraft/show/105400635,3:30,10:14,112,"$198,874.00","$170,620.00","$1,523.39","$25,339.60"
IAH - IAD,54146711891,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/54146711891,https://www.airlines-manager.com/aircraft/show/98578923,6:45,13:29,320,"$421,810.00","$372,226.00","$1,163.21","$55,281.09"
IAH - IAD,54162072854,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/54162072854,https://www.airlines-manager.com/aircraft/show/98578920,9:45,16:29,320,"$421,810.00","$372,226.00","$1,163.21","$55,281.09"
IAH - IAD,54168162187,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/54168162187,https://www.airlines-manager.com/aircraft/show/98578924,13:00,19:44,320,"$421,810.00","$372,226.00","$1,163.21","$55,281.09"
IAH - IAD,54178655381,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/54178655381,https://www.airlines-manager.com/aircraft/show/98578921,18:00,0:44,320,"$421,810.00","$372,226.00","$1,163.21","$55,281.09"
IAH - IAD,54183441658,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/54183441658,https://www.airlines-manager.com/aircraft/show/98578922,21:30,4:14,320,"$421,810.00","$372,226.00","$1,163.21","$55,281.09"
IAH - ICT,54162072852,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/54162072852,https://www.airlines-manager.com/aircraft/show/110424761,9:45,13:59,320,"$249,947.00","$218,363.00",$682.38,"$51,581.81"
IAH - ICT,54168162250,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/54168162250,https://www.airlines-manager.com/aircraft/show/110424758,14:00,18:14,320,"$249,947.00","$218,363.00",$682.38,"$51,581.81"
IAH - ICT,54178655473,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/54178655473,https://www.airlines-manager.com/aircraft/show/110424759,19:15,23:29,320,"$249,947.00","$218,363.00",$682.38,"$51,581.81"
IAH - ICT,54187257443,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/54187257443,https://www.airlines-manager.com/aircraft/show/110424760,23:45,3:59,314,"$247,126.00","$215,630.00",$686.72,"$50,936.22"
IAH - IND,54146711368,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/54146711368,https://www.airlines-manager.com/aircraft/show/100684074,0:00,5:29,310,"$343,077.00","$309,211.00",$997.45,"$56,391.06"
IAH - IND,54146711369,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/54146711369,https://www.airlines-manager.com/aircraft/show/110582845,4:45,10:14,198,"$260,133.00","$233,004.00","$1,176.79","$42,493.13"
IAH - IND,54146711370,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/54146711370,https://www.airlines-manager.com/aircraft/show/100684071,6:00,11:29,310,"$343,077.00","$309,211.00",$997.45,"$56,391.06"
IAH - IND,54162073083,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/54162073083,https://www.airlines-manager.com/aircraft/show/100684072,11:30,16:59,310,"$343,077.00","$309,211.00",$997.45,"$56,391.06"
IAH - IND,54178655333,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/54178655333,https://www.airlines-manager.com/aircraft/show/100684073,17:45,23:14,309,"$342,070.00","$308,233.00",$997.52,"$56,212.71"
IAH - JAN,54146711516,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/54146711516,https://www.airlines-manager.com/aircraft/show/110424756,0:30,3:59,320,"$176,882.00","$149,431.00",$466.97,"$42,898.85"
IAH - JAN,54162072984,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/54162072984,https://www.airlines-manager.com/aircraft/show/110424757,10:30,13:59,320,"$176,882.00","$149,431.00",$466.97,"$42,898.85"
IAH - JAN,54168162237,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/54168162237,https://www.airlines-manager.com/aircraft/show/110424754,14:00,17:29,320,"$176,882.00","$149,431.00",$466.97,"$42,898.85"
IAH - JAN,54173399599,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/54173399599,https://www.airlines-manager.com/aircraft/show/110424755,16:45,20:14,305,"$171,863.00","$144,553.00",$473.94,"$41,498.47"
IAH - JAX,54146711841,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/54146711841,https://www.airlines-manager.com/aircraft/show/104717247,3:00,8:14,310,"$336,821.00","$304,593.00",$982.56,"$58,202.48"
IAH - JAX,54156164606,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/54156164606,https://www.airlines-manager.com/aircraft/show/104743902,8:00,13:14,112,"$159,757.00","$138,997.00","$1,241.04","$26,559.94"
IAH - JAX,54162073056,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/54162073056,https://www.airlines-manager.com/aircraft/show/104717244,11:00,16:14,310,"$336,821.00","$304,593.00",$982.56,"$58,202.48"
IAH - JAX,54173399592,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/54173399592,https://www.airlines-manager.com/aircraft/show/104717245,16:30,21:44,310,"$336,821.00","$304,593.00",$982.56,"$58,202.48"
IAH - JAX,54183441629,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/54183441629,https://www.airlines-manager.com/aircraft/show/104717246,21:15,2:29,310,"$336,821.00","$304,593.00",$982.56,"$58,202.48"
IAH - JFK,54146711753,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/54146711753,https://www.airlines-manager.com/aircraft/show/89233038,2:00,9:29,400,"$620,114.00","$546,805.00","$1,367.01","$73,069.71"
IAH - JFK,54162072992,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/54162072992,https://www.airlines-manager.com/aircraft/show/88400798,11:00,18:29,400,"$620,114.00","$546,805.00","$1,367.01","$73,069.71"
IAH - JFK,54178655390,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/54178655390,https://www.airlines-manager.com/aircraft/show/88400800,18:15,1:44,400,"$620,114.00","$546,805.00","$1,367.01","$73,069.71"
IAH - JFK,54178655391,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/54178655391,https://www.airlines-manager.com/aircraft/show/88400799,19:15,2:44,400,"$620,114.00","$546,805.00","$1,367.01","$73,069.71"
IAH - JFK,54183441635,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/54183441635,https://www.airlines-manager.com/aircraft/show/88400801,21:15,4:44,400,"$620,114.00","$546,805.00","$1,367.01","$73,069.71"
IAH - LAS,54146711933,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/54146711933,https://www.airlines-manager.com/aircraft/show/96256511,4:00,10:44,320,"$428,374.00","$366,893.00","$1,146.54","$54,489.06"
IAH - LAS,54146711934,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/54146711934,https://www.airlines-manager.com/aircraft/show/96250652,5:00,11:44,320,"$428,374.00","$366,893.00","$1,146.54","$54,489.06"
IAH - LAS,54146711935,IAH-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/54146711935,https://www.airlines-manager.com/aircraft/show/96990010,5:15,11:59,112,"$201,610.00","$167,316.00","$1,493.89","$24,848.91"
IAH - LAS,54162073064,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/54162073064,https://www.airlines-manager.com/aircraft/show/96177955,11:00,17:44,320,"$428,374.00","$366,893.00","$1,146.54","$54,489.06"
IAH - LAS,54173399330,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/54173399330,https://www.airlines-manager.com/aircraft/show/95894466,14:45,21:29,320,"$428,374.00","$366,893.00","$1,146.54","$54,489.06"
IAH - LAS,54178655318,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/54178655318,https://www.airlines-manager.com/aircraft/show/82323704,17:30,0:14,112,"$201,610.00","$167,316.00","$1,493.89","$24,848.91"
IAH - LAS,54183441592,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/54183441592,https://www.airlines-manager.com/aircraft/show/96183549,20:45,3:29,320,"$428,374.00","$366,893.00","$1,146.54","$54,489.06"
IAH - LAX,54146711835,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/54146711835,https://www.airlines-manager.com/aircraft/show/88400799,2:45,9:59,400,"$608,073.00","$535,900.00","$1,339.75","$74,087.56"
IAH - LAX,54146711836,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/54146711836,https://www.airlines-manager.com/aircraft/show/88400798,3:45,10:59,400,"$608,073.00","$535,900.00","$1,339.75","$74,087.56"
IAH - LAX,54146711837,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/54146711837,https://www.airlines-manager.com/aircraft/show/88400801,4:45,11:59,400,"$608,073.00","$535,900.00","$1,339.75","$74,087.56"
IAH - LAX,54162072981,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/54162072981,https://www.airlines-manager.com/aircraft/show/89233038,10:30,17:44,400,"$608,073.00","$535,900.00","$1,339.75","$74,087.56"
IAH - LAX,54162072982,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/54162072982,https://www.airlines-manager.com/aircraft/show/88400800,11:00,18:14,400,"$608,073.00","$535,900.00","$1,339.75","$74,087.56"
IAH - LEX,54146711967,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/54146711967,https://www.airlines-manager.com/aircraft/show/114373410,4:30,9:44,310,"$333,493.00","$303,515.00",$979.08,"$57,996.50"
IAH - LEX,54156164682,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/54156164682,https://www.airlines-manager.com/aircraft/show/113994196,9:15,14:29,310,"$333,493.00","$303,515.00",$979.08,"$57,996.50"
IAH - LEX,54173399396,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/54173399396,https://www.airlines-manager.com/aircraft/show/86385103,15:00,20:14,310,"$333,493.00","$303,515.00",$979.08,"$57,996.50"
IAH - LEX,54178655469,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/54178655469,https://www.airlines-manager.com/aircraft/show/82543907,19:15,0:29,112,"$158,473.00","$139,040.00","$1,241.43","$26,568.15"
IAH - LEX,54187257312,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/54187257312,https://www.airlines-manager.com/aircraft/show/114373409,22:15,3:29,262,"$303,050.00","$274,161.00","$1,046.42","$52,387.45"
IAH - LIM,54173399298,IAH 84A-1 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/54173399298,https://www.airlines-manager.com/aircraft/show/89439131,14:30,3:59,932,"$2,248,966.00","$2,049,121.00","$2,198.63","$151,974.36"
IAH - LIM,54187257433,IAH 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/54187257433,https://www.airlines-manager.com/aircraft/show/89124074,23:45,13:14,932,"$2,248,966.00","$2,049,121.00","$2,198.63","$151,974.36"
IAH - LIT,54146711908,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/54146711908,https://www.airlines-manager.com/aircraft/show/96692491,3:45,7:14,310,"$188,277.00","$164,271.00",$529.91,"$47,159.14"
IAH - LIT,54162073038,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/54162073038,https://www.airlines-manager.com/aircraft/show/96692343,11:00,14:29,310,"$188,277.00","$164,271.00",$529.91,"$47,159.14"
IAH - LIT,54183441469,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/54183441469,https://www.airlines-manager.com/aircraft/show/96691558,19:30,22:59,310,"$188,277.00","$164,271.00",$529.91,"$47,159.14"
IAH - LIT,54183441470,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/54183441470,https://www.airlines-manager.com/aircraft/show/106014350,20:00,23:29,198,"$142,091.00","$122,870.00",$620.56,"$35,273.68"
IAH - LIT,54187257422,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/54187257422,https://www.airlines-manager.com/aircraft/show/96694086,23:30,2:59,271,"$174,314.00","$150,708.00",$556.12,"$43,265.45"
IAH - MCI,54146711595,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/54146711595,https://www.airlines-manager.com/aircraft/show/103882358,1:00,5:44,310,"$298,385.00","$267,227.00",$862.02,"$56,456.41"
IAH - MCI,54156164681,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/54156164681,https://www.airlines-manager.com/aircraft/show/103882357,9:15,13:59,310,"$298,385.00","$267,227.00",$862.02,"$56,456.41"
IAH - MCI,54168162174,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/54168162174,https://www.airlines-manager.com/aircraft/show/103882356,13:00,17:44,310,"$298,385.00","$267,227.00",$862.02,"$56,456.41"
IAH - MCI,54178655363,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/54178655363,https://www.airlines-manager.com/aircraft/show/105099861,18:00,22:44,112,"$141,332.00","$121,512.00","$1,084.93","$25,671.55"
IAH - MCI,54183441604,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/54183441604,https://www.airlines-manager.com/aircraft/show/103882355,21:00,1:44,310,"$298,385.00","$267,227.00",$862.02,"$56,456.41"
IAH - MCI,54183441605,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/54183441605,https://www.airlines-manager.com/aircraft/show/101412921,21:15,1:59,0,"$90,879.00","$60,780.00",#DIV/0!,"$12,840.85"
IAH - MCO,54146711566,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/54146711566,https://www.airlines-manager.com/aircraft/show/90183183,1:00,6:29,310,"$345,341.00","$302,947.00",$977.25,"$55,248.69"
IAH - MCO,54146711567,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/54146711567,https://www.airlines-manager.com/aircraft/show/90140936,3:00,8:29,136,"$164,440.00","$137,662.00","$1,012.22","$25,105.53"
IAH - MCO,54146711568,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/54146711568,https://www.airlines-manager.com/aircraft/show/90183184,6:45,12:14,310,"$345,341.00","$302,947.00",$977.25,"$55,248.69"
IAH - MCO,54156164655,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/54156164655,https://www.airlines-manager.com/aircraft/show/90183180,8:45,14:14,310,"$345,341.00","$302,947.00",$977.25,"$55,248.69"
IAH - MCO,54168162202,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/54168162202,https://www.airlines-manager.com/aircraft/show/90183181,13:00,18:29,310,"$345,341.00","$302,947.00",$977.25,"$55,248.69"
IAH - MCO,54178655484,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/54178655484,https://www.airlines-manager.com/aircraft/show/90183182,19:15,0:44,310,"$345,341.00","$302,947.00",$977.25,"$55,248.69"
IAH - MEM,54146711757,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/54146711757,https://www.airlines-manager.com/aircraft/show/101412921,2:00,5:59,0,"$71,952.00","$44,009.00",$0.00,"$11,048.28"
IAH - MEM,54146711758,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/54146711758,https://www.airlines-manager.com/aircraft/show/99093332,5:45,9:44,320,"$221,718.00","$188,356.00",$588.61,"$47,286.03"
IAH - MEM,54156164696,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/54156164696,https://www.airlines-manager.com/aircraft/show/99093333,9:30,13:29,320,"$221,718.00","$188,356.00",$588.61,"$47,286.03"
IAH - MEM,54168162291,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/54168162291,https://www.airlines-manager.com/aircraft/show/99093334,14:00,17:59,320,"$221,718.00","$188,356.00",$588.61,"$47,286.03"
IAH - MEM,54183441466,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/54183441466,https://www.airlines-manager.com/aircraft/show/99093335,19:30,23:29,320,"$221,718.00","$188,356.00",$588.61,"$47,286.03"
IAH - MEM,54183441467,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/54183441467,https://www.airlines-manager.com/aircraft/show/106499070,21:30,1:29,198,"$168,315.00","$145,325.00",$733.96,"$36,483.26"
IAH - MEX,54146711695,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/54146711695,https://www.airlines-manager.com/aircraft/show/97026605,1:45,6:44,136,"$153,432.00","$128,531.00",$945.08,"$25,792.17"
IAH - MEX,54146711696,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/54146711696,https://www.airlines-manager.com/aircraft/show/97076945,5:30,10:29,400,"$414,085.00","$365,742.00",$914.36,"$73,393.04"
IAH - MEX,54156164642,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/54156164642,https://www.airlines-manager.com/aircraft/show/97076942,8:30,13:29,400,"$414,085.00","$365,742.00",$914.36,"$73,393.04"
IAH - MEX,54168162201,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/54168162201,https://www.airlines-manager.com/aircraft/show/97076946,13:00,17:59,400,"$414,085.00","$365,742.00",$914.36,"$73,393.04"
IAH - MEX,54173399564,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/54173399564,https://www.airlines-manager.com/aircraft/show/97076943,16:00,20:59,390,"$404,901.00","$356,807.00",$914.89,"$71,600.07"
IAH - MEX,54187257347,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/54187257347,https://www.airlines-manager.com/aircraft/show/97076944,22:30,3:29,284,"$307,549.00","$262,087.00",$922.84,"$52,592.71"
IAH - MHT,54146711693,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/54146711693,https://www.airlines-manager.com/aircraft/show/114266971,1:30,9:44,320,"$523,407.00","$475,551.00","$1,486.10","$57,759.23"
IAH - MHT,54146711694,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/54146711694,https://www.airlines-manager.com/aircraft/show/114266970,6:45,14:59,320,"$523,407.00","$475,551.00","$1,486.10","$57,759.23"
IAH - MHT,54168162080,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/54168162080,https://www.airlines-manager.com/aircraft/show/114266972,12:00,20:14,320,"$523,407.00","$475,551.00","$1,486.10","$57,759.23"
IAH - MHT,54173399526,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/54173399526,https://www.airlines-manager.com/aircraft/show/114266976,16:00,0:14,320,"$523,407.00","$475,551.00","$1,486.10","$57,759.23"
IAH - MHT,54178655334,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/54178655334,https://www.airlines-manager.com/aircraft/show/92800067,17:45,1:59,112,"$246,747.00","$218,180.00","$1,948.04","$26,499.60"
IAH - MIA,54146711542,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/54146711542,https://www.airlines-manager.com/aircraft/show/90183182,0:45,6:29,310,"$370,158.00","$324,401.00","$1,046.45","$56,581.57"
IAH - MIA,54146711543,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/54146711543,https://www.airlines-manager.com/aircraft/show/90183183,6:30,12:14,310,"$370,158.00","$324,401.00","$1,046.45","$56,581.57"
IAH - MIA,54156164641,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/54156164641,https://www.airlines-manager.com/aircraft/show/90140936,8:30,14:14,136,"$176,283.00","$147,315.00","$1,083.20","$25,694.48"
IAH - MIA,54168162205,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/54168162205,https://www.airlines-manager.com/aircraft/show/90183184,13:00,18:44,310,"$370,158.00","$324,401.00","$1,046.45","$56,581.57"
IAH - MIA,54173399470,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/54173399470,https://www.airlines-manager.com/aircraft/show/90183180,15:00,20:44,310,"$370,158.00","$324,401.00","$1,046.45","$56,581.57"
IAH - MIA,54178655413,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/54178655413,https://www.airlines-manager.com/aircraft/show/90183181,18:30,0:14,309,"$369,456.00","$323,726.00","$1,047.66","$56,463.84"
IAH - MKE,54146711600,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/54146711600,https://www.airlines-manager.com/aircraft/show/104258212,1:00,6:59,310,"$379,077.00","$343,943.00","$1,109.49","$57,483.51"
IAH - MKE,54156164598,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/54156164598,https://www.airlines-manager.com/aircraft/show/104258211,8:00,13:59,310,"$379,077.00","$343,943.00","$1,109.49","$57,483.51"
IAH - MKE,54156164599,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/54156164599,https://www.airlines-manager.com/aircraft/show/103534664,9:00,14:59,112,"$179,025.00","$156,225.00","$1,394.87","$26,110.03"
IAH - MKE,54168162269,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/54168162269,https://www.airlines-manager.com/aircraft/show/104258214,14:00,19:59,310,"$379,077.00","$343,943.00","$1,109.49","$57,483.51"
IAH - MKE,54178655471,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/54178655471,https://www.airlines-manager.com/aircraft/show/104258213,19:15,1:14,310,"$379,077.00","$343,943.00","$1,109.49","$57,483.51"
IAH - MSN,54156164571,IAH-GRR-MSN 3,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/54156164571,https://www.airlines-manager.com/aircraft/show/117273346,7:30,13:29,310,"$372,062.00","$338,977.00","$1,093.47","$56,653.54"
IAH - MSN,54168162245,IAH-GRR-MSN 2,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/54168162245,https://www.airlines-manager.com/aircraft/show/117273347,14:00,19:59,310,"$372,062.00","$338,977.00","$1,093.47","$56,653.54"
IAH - MSN,54183441537,IAH-GRR-MSN 1,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/54183441537,https://www.airlines-manager.com/aircraft/show/117273348,20:15,2:14,310,"$372,062.00","$338,977.00","$1,093.47","$56,653.54"
IAH - MSN,54187257322,IAH-GRR-MSN 4,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/54187257322,https://www.airlines-manager.com/aircraft/show/117273345,22:15,4:14,310,"$372,062.00","$338,977.00","$1,093.47","$56,653.54"
IAH - MSO,54146711932,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/54146711932,https://www.airlines-manager.com/aircraft/show/110424756,4:00,11:59,320,"$506,889.00","$460,456.00","$1,438.93","$57,677.16"
IAH - MSO,54168162258,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/54168162258,https://www.airlines-manager.com/aircraft/show/110424757,14:00,21:59,320,"$506,889.00","$460,456.00","$1,438.93","$57,677.16"
IAH - MSO,54178655325,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/54178655325,https://www.airlines-manager.com/aircraft/show/110424754,17:30,1:29,320,"$506,889.00","$460,456.00","$1,438.93","$57,677.16"
IAH - MSO,54183441545,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/54183441545,https://www.airlines-manager.com/aircraft/show/110424755,20:15,4:14,320,"$506,889.00","$460,456.00","$1,438.93","$57,677.16"
IAH - MSP,54146711938,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/54146711938,https://www.airlines-manager.com/aircraft/show/95894466,4:00,9:59,320,"$383,173.00","$333,877.00","$1,043.37","$55,801.17"
IAH - MSP,54146711939,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/54146711939,https://www.airlines-manager.com/aircraft/show/82323704,5:00,11:14,112,"$181,989.00","$154,324.00","$1,377.89","$24,757.86"
IAH - MSP,54162072949,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/54162072949,https://www.airlines-manager.com/aircraft/show/96183549,10:00,15:59,320,"$383,173.00","$333,877.00","$1,043.37","$55,801.17"
IAH - MSP,54178655336,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/54178655336,https://www.airlines-manager.com/aircraft/show/96250652,17:45,23:44,320,"$383,173.00","$333,877.00","$1,043.37","$55,801.17"
IAH - MSP,54183441645,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/54183441645,https://www.airlines-manager.com/aircraft/show/96256511,21:30,3:29,320,"$383,173.00","$333,877.00","$1,043.37","$55,801.17"
IAH - MSP,54187257351,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/54187257351,https://www.airlines-manager.com/aircraft/show/96177955,22:30,4:29,320,"$383,173.00","$333,877.00","$1,043.37","$55,801.17"
IAH - MSY,54146711905,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/54146711905,https://www.airlines-manager.com/aircraft/show/106007216,3:45,6:59,338,"$170,355.00","$145,708.00",$431.09,"$45,064.33"
IAH - MSY,54146711906,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/54146711906,https://www.airlines-manager.com/aircraft/show/106007217,4:45,7:59,338,"$170,355.00","$145,708.00",$431.09,"$45,064.33"
IAH - MSY,54162073049,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/54162073049,https://www.airlines-manager.com/aircraft/show/106007215,11:00,14:14,338,"$170,355.00","$145,708.00",$431.09,"$45,064.33"
IAH - MSY,54178655339,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/54178655339,https://www.airlines-manager.com/aircraft/show/106007214,17:45,20:59,338,"$170,355.00","$145,708.00",$431.09,"$45,064.33"
IAH - MSY,54183441568,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/54183441568,https://www.airlines-manager.com/aircraft/show/106007213,20:30,23:44,262,"$147,604.00","$123,484.00",$471.31,"$38,190.93"
IAH - MTY,54146711882,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/54146711882,https://www.airlines-manager.com/aircraft/show/114266974,3:30,7:14,320,"$202,486.00","$171,969.00",$537.40,"$46,063.13"
IAH - MTY,54156164684,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/54156164684,https://www.airlines-manager.com/aircraft/show/105099862,9:15,12:59,112,"$92,541.00","$76,086.00",$679.34,"$20,380.18"
IAH - MTY,54168162254,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/54168162254,https://www.airlines-manager.com/aircraft/show/114266975,14:00,17:44,320,"$202,486.00","$171,969.00",$537.40,"$46,063.13"
IAH - MTY,54178655321,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/54178655321,https://www.airlines-manager.com/aircraft/show/113250059,17:30,21:14,320,"$202,486.00","$171,969.00",$537.40,"$46,063.13"
IAH - MTY,54187257428,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/54187257428,https://www.airlines-manager.com/aircraft/show/113114108,23:30,3:14,320,"$202,486.00","$171,969.00",$537.40,"$46,063.13"
IAH - OAK,54146711621,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/54146711621,https://www.airlines-manager.com/aircraft/show/98578920,1:15,9:44,320,"$528,703.00","$477,880.00","$1,493.38","$56,331.63"
IAH - OAK,54146711622,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/54146711622,https://www.airlines-manager.com/aircraft/show/98578924,3:00,11:29,320,"$528,703.00","$477,880.00","$1,493.38","$56,331.63"
IAH - OAK,54156164596,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/54156164596,https://www.airlines-manager.com/aircraft/show/98578921,8:00,16:29,320,"$528,703.00","$477,880.00","$1,493.38","$56,331.63"
IAH - OAK,54168162196,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/54168162196,https://www.airlines-manager.com/aircraft/show/98578922,13:00,21:29,320,"$528,703.00","$477,880.00","$1,493.38","$56,331.63"
IAH - OAK,54178655463,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/54178655463,https://www.airlines-manager.com/aircraft/show/105400635,19:00,3:29,112,"$249,361.00","$219,214.00","$1,957.27","$25,840.55"
IAH - OAK,54187257307,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/54187257307,https://www.airlines-manager.com/aircraft/show/98578923,22:15,6:44,320,"$528,703.00","$477,880.00","$1,493.38","$56,331.63"
IAH - OKC,54146712005,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/54146712005,https://www.airlines-manager.com/aircraft/show/107467134,5:30,9:14,310,"$196,458.00","$171,197.00",$552.25,"$45,856.34"
IAH - OKC,54162072877,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/54162072877,https://www.airlines-manager.com/aircraft/show/107467211,10:00,13:44,112,"$90,701.00","$74,854.00",$668.34,"$20,050.18"
IAH - OKC,54168162092,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/54168162092,https://www.airlines-manager.com/aircraft/show/107467131,12:00,15:44,310,"$196,458.00","$171,197.00",$552.25,"$45,856.34"
IAH - OKC,54178655332,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/54178655332,https://www.airlines-manager.com/aircraft/show/107467132,17:45,21:29,310,"$196,458.00","$171,197.00",$552.25,"$45,856.34"
IAH - OKC,54187257401,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/54187257401,https://www.airlines-manager.com/aircraft/show/107467133,23:00,2:44,310,"$196,458.00","$171,197.00",$552.25,"$45,856.34"
IAH - OMA,54146711816,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/54146711816,https://www.airlines-manager.com/aircraft/show/104258211,2:45,7:59,310,"$328,759.00","$297,616.00",$960.05,"$56,869.30"
IAH - OMA,54146711817,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/54146711817,https://www.airlines-manager.com/aircraft/show/103534664,3:45,8:59,112,"$156,043.00","$135,992.00","$1,214.21","$25,985.73"
IAH - OMA,54156164654,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/54156164654,https://www.airlines-manager.com/aircraft/show/104258214,8:45,13:59,310,"$328,759.00","$297,616.00",$960.05,"$56,869.30"
IAH - OMA,54168162270,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/54168162270,https://www.airlines-manager.com/aircraft/show/104258213,14:00,19:14,310,"$328,759.00","$297,616.00",$960.05,"$56,869.30"
IAH - OMA,54183441480,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/54183441480,https://www.airlines-manager.com/aircraft/show/104258212,19:45,0:59,310,"$328,759.00","$297,616.00",$960.05,"$56,869.30"
IAH - ONT,54146711829,IAH-ANC-ONT 1,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/54146711829,https://www.airlines-manager.com/aircraft/show/108258010,2:45,9:59,310,"$463,433.00","$422,267.00","$1,362.15","$58,377.93"
IAH - ONT,54146711830,IAH-ANC-ONT 2,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/54146711830,https://www.airlines-manager.com/aircraft/show/108258011,4:45,11:59,310,"$463,433.00","$422,267.00","$1,362.15","$58,377.93"
IAH - ONT,54168162028,IAH-ANC-ONT 3,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/54168162028,https://www.airlines-manager.com/aircraft/show/108258012,12:00,19:14,310,"$463,433.00","$422,267.00","$1,362.15","$58,377.93"
IAH - ONT,54168162029,IAH-ANC-ONT 4,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/54168162029,https://www.airlines-manager.com/aircraft/show/108089220,14:00,21:14,310,"$463,433.00","$422,267.00","$1,362.15","$58,377.93"
IAH - ONT,54173399543,IAH-ANC-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/54173399543,https://www.airlines-manager.com/aircraft/show/108286957,16:00,23:14,198,"$349,825.00","$316,835.00","$1,600.18","$43,802.07"
IAH - ORD,54146711478,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/54146711478,https://www.airlines-manager.com/aircraft/show/90183181,0:15,5:59,310,"$363,079.00","$308,113.00",$993.91,"$53,740.64"
IAH - ORD,54146711479,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/54146711479,https://www.airlines-manager.com/aircraft/show/90183182,6:30,12:14,310,"$363,079.00","$308,113.00",$993.91,"$53,740.64"
IAH - ORD,54162072875,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/54162072875,https://www.airlines-manager.com/aircraft/show/101412921,10:00,15:44,0,"$114,458.00","$61,014.00",#DIV/0!,"$10,641.98"
IAH - ORD,54168162204,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/54168162204,https://www.airlines-manager.com/aircraft/show/90183183,13:00,18:44,310,"$363,079.00","$308,113.00",$993.91,"$53,740.64"
IAH - ORD,54173399474,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/54173399474,https://www.airlines-manager.com/aircraft/show/90140936,15:00,20:44,136,"$172,559.00","$138,123.00","$1,015.61","$24,091.22"
IAH - ORD,54178655430,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/54178655430,https://www.airlines-manager.com/aircraft/show/90183184,18:45,0:29,310,"$363,079.00","$308,113.00",$993.91,"$53,740.64"
IAH - ORD,54183441578,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/54183441578,https://www.airlines-manager.com/aircraft/show/90183180,20:45,2:29,310,"$363,079.00","$308,113.00",$993.91,"$53,740.64"
IAH - ORF,54146711420,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/54146711420,https://www.airlines-manager.com/aircraft/show/110582843,0:00,6:44,198,"$319,502.00","$289,849.00","$1,463.88","$43,046.88"
IAH - ORF,54146711421,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/54146711421,https://www.airlines-manager.com/aircraft/show/107467130,4:15,10:59,310,"$423,249.00","$386,247.00","$1,245.96","$57,363.42"
IAH - ORF,54156164614,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/54156164614,https://www.airlines-manager.com/aircraft/show/107467127,8:15,14:59,310,"$423,249.00","$386,247.00","$1,245.96","$57,363.42"
IAH - ORF,54168162141,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/54168162141,https://www.airlines-manager.com/aircraft/show/107467128,13:00,19:44,310,"$423,249.00","$386,247.00","$1,245.96","$57,363.42"
IAH - ORF,54183441532,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/54183441532,https://www.airlines-manager.com/aircraft/show/107467129,20:00,2:44,310,"$423,249.00","$386,247.00","$1,245.96","$57,363.42"
IAH - PBI,54146711785,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/54146711785,https://www.airlines-manager.com/aircraft/show/104717246,2:30,8:14,310,"$369,248.00","$334,512.00","$1,079.07","$58,345.12"
IAH - PBI,54162073059,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/54162073059,https://www.airlines-manager.com/aircraft/show/104717247,11:00,16:44,310,"$369,248.00","$334,512.00","$1,079.07","$58,345.12"
IAH - PBI,54168162228,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/54168162228,https://www.airlines-manager.com/aircraft/show/104743902,13:15,18:59,112,"$174,724.00","$152,218.00","$1,359.09","$26,549.65"
IAH - PBI,54173399572,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/54173399572,https://www.airlines-manager.com/aircraft/show/104717244,16:15,21:59,310,"$369,248.00","$334,512.00","$1,079.07","$58,345.12"
IAH - PBI,54187257270,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/54187257270,https://www.airlines-manager.com/aircraft/show/104717245,21:45,3:29,310,"$369,248.00","$334,512.00","$1,079.07","$58,345.12"
IAH - PDX,54146711819,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/54146711819,https://www.airlines-manager.com/aircraft/show/105562975,2:45,11:44,338,"$619,638.00","$571,536.00","$1,690.93","$63,621.82"
IAH - PDX,54146711820,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/54146711820,https://www.airlines-manager.com/aircraft/show/105562972,4:00,12:59,338,"$619,638.00","$571,536.00","$1,690.93","$63,621.82"
IAH - PDX,54146711821,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/54146711821,https://www.airlines-manager.com/aircraft/show/105562974,5:00,13:59,338,"$619,638.00","$571,536.00","$1,690.93","$63,621.82"
IAH - PDX,54168162067,IAH-SEA-DEN 6,ERJ-175,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/54168162067,https://www.airlines-manager.com/aircraft/show/105601215,12:00,21:14,112,"$269,877.00","$236,466.00","$2,111.30","$25,610.04"
IAH - PDX,54168162068,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/54168162068,https://www.airlines-manager.com/aircraft/show/105562973,14:00,22:59,338,"$619,638.00","$571,536.00","$1,690.93","$63,621.82"
IAH - PDX,54178655421,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/54178655421,https://www.airlines-manager.com/aircraft/show/105562971,18:30,3:29,338,"$619,638.00","$571,536.00","$1,690.93","$63,621.82"
IAH - PHL,54162073041,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/54162073041,https://www.airlines-manager.com/aircraft/show/106007216,11:00,18:14,338,"$501,281.00","$456,099.00","$1,349.41","$63,055.16"
IAH - PHL,54168162304,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/54168162304,https://www.airlines-manager.com/aircraft/show/106007215,14:15,21:29,338,"$501,281.00","$456,099.00","$1,349.41","$63,055.16"
IAH - PHL,54173399545,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/54173399545,https://www.airlines-manager.com/aircraft/show/107543798,16:00,23:14,0,"$122,690.00","$89,259.00",$0.00,"$12,339.95"
IAH - PHL,54183441598,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/54183441598,https://www.airlines-manager.com/aircraft/show/106007214,21:00,4:14,338,"$501,281.00","$456,099.00","$1,349.41","$63,055.16"
IAH - PHL,54183441599,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/54183441599,https://www.airlines-manager.com/aircraft/show/106007217,21:30,4:44,338,"$501,281.00","$456,099.00","$1,349.41","$63,055.16"
IAH - PHL,54187257436,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/54187257436,https://www.airlines-manager.com/aircraft/show/106007213,23:45,6:59,338,"$501,281.00","$456,099.00","$1,349.41","$63,055.16"
IAH - PHX,54146711936,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/54146711936,https://www.airlines-manager.com/aircraft/show/96183549,4:00,9:59,320,"$379,088.00","$327,054.00","$1,022.04","$54,660.84"
IAH - PHX,54146711937,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/54146711937,https://www.airlines-manager.com/aircraft/show/96177955,5:00,10:59,320,"$379,088.00","$327,054.00","$1,022.04","$54,660.84"
IAH - PHX,54162073079,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/54162073079,https://www.airlines-manager.com/aircraft/show/82323704,11:30,17:29,112,"$179,363.00","$150,412.00","$1,342.96","$25,138.50"
IAH - PHX,54162073080,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/54162073080,https://www.airlines-manager.com/aircraft/show/96250652,11:45,17:44,320,"$379,088.00","$327,054.00","$1,022.04","$54,660.84"
IAH - PHX,54173399488,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/54173399488,https://www.airlines-manager.com/aircraft/show/96256511,15:30,21:29,320,"$379,088.00","$327,054.00","$1,022.04","$54,660.84"
IAH - PHX,54183441643,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/54183441643,https://www.airlines-manager.com/aircraft/show/95894466,21:30,3:29,319,"$377,962.00","$325,962.00","$1,021.82","$54,478.33"
IAH - PIT,54146711983,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/54146711983,https://www.airlines-manager.com/aircraft/show/100684073,5:00,11:29,310,"$405,248.00","$366,884.00","$1,183.50","$56,588.79"
IAH - PIT,54162073076,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/54162073076,https://www.airlines-manager.com/aircraft/show/100684074,11:15,17:44,310,"$405,248.00","$366,884.00","$1,183.50","$56,588.79"
IAH - PIT,54173399538,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/54173399538,https://www.airlines-manager.com/aircraft/show/110582845,16:00,22:29,198,"$306,127.00","$275,388.00","$1,390.85","$42,476.30"
IAH - PIT,54178655303,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/54178655303,https://www.airlines-manager.com/aircraft/show/100684071,17:15,23:44,310,"$405,248.00","$366,884.00","$1,183.50","$56,588.79"
IAH - PIT,54187257380,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/54187257380,https://www.airlines-manager.com/aircraft/show/100684072,22:45,5:14,310,"$405,248.00","$366,884.00","$1,183.50","$56,588.79"
IAH - PSP,54146711651,IAH-YEG-BUR 2,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/54146711651,https://www.airlines-manager.com/aircraft/show/117273343,1:30,8:29,310,"$450,598.00","$412,544.00","$1,330.79","$59,075.51"
IAH - PSP,54146711652,IAH-YEG-BUR 1,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/54146711652,https://www.airlines-manager.com/aircraft/show/117273344,3:45,10:44,310,"$450,598.00","$412,544.00","$1,330.79","$59,075.51"
IAH - PSP,54162072995,IAH-YEG-BUR 3,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/54162072995,https://www.airlines-manager.com/aircraft/show/117273342,11:00,17:59,310,"$450,598.00","$412,544.00","$1,330.79","$59,075.51"
IAH - PSP,54178655417,IAH-YEG-BUR 5,A321neo,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/54178655417,https://www.airlines-manager.com/aircraft/show/117273340,18:30,1:29,338,"$488,325.00","$451,854.00","$1,336.85","$64,704.63"
IAH - PVD,54146711838,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/54146711838,https://www.airlines-manager.com/aircraft/show/107467129,2:45,10:59,310,"$516,263.00","$474,753.00","$1,531.46","$57,662.31"
IAH - PVD,54146711839,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/54146711839,https://www.airlines-manager.com/aircraft/show/110582843,6:45,14:59,198,"$389,086.00","$355,811.00","$1,797.03","$43,215.91"
IAH - PVD,54168162143,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/54168162143,https://www.airlines-manager.com/aircraft/show/107467130,13:00,21:14,310,"$516,263.00","$474,753.00","$1,531.46","$57,662.31"
IAH - PVD,54178655244,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/54178655244,https://www.airlines-manager.com/aircraft/show/107467127,17:00,1:14,310,"$516,263.00","$474,753.00","$1,531.46","$57,662.31"
IAH - PVD,54183441473,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/54183441473,https://www.airlines-manager.com/aircraft/show/107467128,19:45,3:59,310,"$516,263.00","$474,753.00","$1,531.46","$57,662.31"
IAH - PVR,54146711850,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/54146711850,https://www.airlines-manager.com/aircraft/show/105099862,3:00,8:29,112,"$166,498.00","$145,084.00","$1,295.39","$26,459.09"
IAH - PVR,54156164647,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/54156164647,https://www.airlines-manager.com/aircraft/show/114266975,8:30,13:59,320,"$355,635.00","$318,001.00",$993.75,"$57,994.10"
IAH - PVR,54168162084,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/54168162084,https://www.airlines-manager.com/aircraft/show/113250059,12:00,17:29,320,"$355,635.00","$318,001.00",$993.75,"$57,994.10"
IAH - PVR,54178655354,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/54178655354,https://www.airlines-manager.com/aircraft/show/113114108,18:00,23:29,320,"$355,635.00","$318,001.00",$993.75,"$57,994.10"
IAH - PVR,54187257278,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/54187257278,https://www.airlines-manager.com/aircraft/show/114266974,22:00,3:29,320,"$355,635.00","$318,001.00",$993.75,"$57,994.10"
IAH - PWM,54156164587,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/54156164587,https://www.airlines-manager.com/aircraft/show/106014350,7:45,16:14,198,"$406,630.00","$372,446.00","$1,881.04","$43,903.26"
IAH - PWM,54162073039,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/54162073039,https://www.airlines-manager.com/aircraft/show/96691558,11:00,19:29,310,"$540,000.00","$497,359.00","$1,604.38","$58,627.78"
IAH - PWM,54173399472,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/54173399472,https://www.airlines-manager.com/aircraft/show/96694086,15:00,23:29,310,"$540,000.00","$497,359.00","$1,604.38","$58,627.78"
IAH - PWM,54178655470,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/54178655470,https://www.airlines-manager.com/aircraft/show/96692491,19:15,3:44,310,"$540,000.00","$497,359.00","$1,604.38","$58,627.78"
IAH - PWM,54187257367,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/54187257367,https://www.airlines-manager.com/aircraft/show/96692343,22:45,7:14,310,"$540,000.00","$497,359.00","$1,604.38","$58,627.78"
IAH - RAP,54146711762,IAH-GRR-MSN 1,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/54146711762,https://www.airlines-manager.com/aircraft/show/117273348,2:15,8:29,310,"$388,294.00","$354,046.00","$1,142.08","$56,798.82"
IAH - RAP,54146711763,IAH-GRR-MSN 4,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/54146711763,https://www.airlines-manager.com/aircraft/show/117273345,4:15,10:29,310,"$388,294.00","$354,046.00","$1,142.08","$56,798.82"
IAH - RAP,54168162246,IAH-GRR-MSN 3,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/54168162246,https://www.airlines-manager.com/aircraft/show/117273346,14:00,20:14,310,"$388,294.00","$354,046.00","$1,142.08","$56,798.82"
IAH - RAP,54183441500,IAH-GRR-MSN 2,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/54183441500,https://www.airlines-manager.com/aircraft/show/117273347,20:00,2:14,289,"$372,783.00","$339,145.00","$1,173.51","$54,408.29"
IAH - RDU,54146711995,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/54146711995,https://www.airlines-manager.com/aircraft/show/100684072,5:15,11:29,310,"$388,679.00","$351,875.00","$1,135.08","$56,450.53"
IAH - RDU,54162073082,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/54162073082,https://www.airlines-manager.com/aircraft/show/100684073,11:30,17:44,310,"$388,679.00","$351,875.00","$1,135.08","$56,450.53"
IAH - RDU,54178655347,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/54178655347,https://www.airlines-manager.com/aircraft/show/100684074,17:45,23:59,310,"$388,679.00","$351,875.00","$1,135.08","$56,450.53"
IAH - RDU,54187257338,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/54187257338,https://www.airlines-manager.com/aircraft/show/110582845,22:30,4:44,198,"$293,805.00","$264,316.00","$1,334.93","$42,403.64"
IAH - RDU,54187257339,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/54187257339,https://www.airlines-manager.com/aircraft/show/100684071,23:45,5:59,310,"$388,679.00","$351,875.00","$1,135.08","$56,450.53"
IAH - RIC,54146711815,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/54146711815,https://www.airlines-manager.com/aircraft/show/107467133,2:45,9:14,310,"$416,537.00","$380,223.00","$1,226.53","$58,646.22"
IAH - RIC,54168162088,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/54168162088,https://www.airlines-manager.com/aircraft/show/107467134,12:00,18:29,310,"$416,537.00","$380,223.00","$1,226.53","$58,646.22"
IAH - RIC,54168162089,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/54168162089,https://www.airlines-manager.com/aircraft/show/107467211,13:45,20:14,112,"$195,969.00","$172,163.00","$1,537.17","$26,554.70"
IAH - RIC,54173399512,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/54173399512,https://www.airlines-manager.com/aircraft/show/107467131,15:45,22:14,310,"$416,537.00","$380,223.00","$1,226.53","$58,646.22"
IAH - RIC,54183441657,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/54183441657,https://www.airlines-manager.com/aircraft/show/107467132,21:30,3:59,310,"$416,537.00","$380,223.00","$1,226.53","$58,646.22"
IAH - RNO,54146711630,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/54146711630,https://www.airlines-manager.com/aircraft/show/103882357,1:15,9:14,310,"$511,991.00","$468,883.00","$1,512.53","$58,732.73"
IAH - RNO,54146711631,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/54146711631,https://www.airlines-manager.com/aircraft/show/105099861,4:00,11:59,112,"$240,901.00","$212,369.00","$1,896.15","$26,601.54"
IAH - RNO,54146711632,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/54146711632,https://www.airlines-manager.com/aircraft/show/103882356,5:00,12:59,310,"$511,991.00","$468,883.00","$1,512.53","$58,732.73"
IAH - RNO,54168162169,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/54168162169,https://www.airlines-manager.com/aircraft/show/103882355,13:00,20:59,310,"$511,991.00","$468,883.00","$1,512.53","$58,732.73"
IAH - RNO,54178655266,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/54178655266,https://www.airlines-manager.com/aircraft/show/103882358,17:00,0:59,310,"$511,991.00","$468,883.00","$1,512.53","$58,732.73"
IAH - RSW,54146711840,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/54146711840,https://www.airlines-manager.com/aircraft/show/104717244,2:45,8:14,310,"$349,506.00","$314,948.00","$1,015.96","$57,437.33"
IAH - RSW,54162073057,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/54162073057,https://www.airlines-manager.com/aircraft/show/104717245,11:00,16:29,310,"$349,506.00","$314,948.00","$1,015.96","$57,437.33"
IAH - RSW,54173399511,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/54173399511,https://www.airlines-manager.com/aircraft/show/104717246,15:45,21:14,310,"$349,506.00","$314,948.00","$1,015.96","$57,437.33"
IAH - RSW,54183441653,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/54183441653,https://www.airlines-manager.com/aircraft/show/104717247,21:30,2:59,310,"$349,506.00","$314,948.00","$1,015.96","$57,437.33"
IAH - RSW,54187257447,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/54187257447,https://www.airlines-manager.com/aircraft/show/104743902,23:45,5:14,112,"$165,422.00","$143,186.00","$1,278.45","$26,112.95"
IAH - SAN,54146711528,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/54146711528,https://www.airlines-manager.com/aircraft/show/98578921,0:45,7:59,320,"$452,539.00","$405,198.00","$1,266.24","$56,018.16"
IAH - SAN,54146711529,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/54146711529,https://www.airlines-manager.com/aircraft/show/98578922,4:15,11:29,320,"$452,539.00","$405,198.00","$1,266.24","$56,018.16"
IAH - SAN,54162072967,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/54162072967,https://www.airlines-manager.com/aircraft/show/105400635,10:15,17:29,112,"$214,317.00","$186,858.00","$1,668.38","$25,832.90"
IAH - SAN,54173399399,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/54173399399,https://www.airlines-manager.com/aircraft/show/98578923,15:00,22:14,320,"$452,539.00","$405,198.00","$1,266.24","$56,018.16"
IAH - SAN,54178655367,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/54178655367,https://www.airlines-manager.com/aircraft/show/98578920,18:00,1:14,320,"$452,539.00","$405,198.00","$1,266.24","$56,018.16"
IAH - SAN,54183441476,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/54183441476,https://www.airlines-manager.com/aircraft/show/98578924,19:45,2:59,320,"$452,539.00","$405,198.00","$1,266.24","$56,018.16"
IAH - SAT,54146711675,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/54146711675,https://www.airlines-manager.com/aircraft/show/106499070,1:30,4:14,198,"$90,236.00","$72,357.00",$365.44,"$26,472.07"
IAH - SAT,54146711676,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/54146711676,https://www.airlines-manager.com/aircraft/show/101412921,6:00,8:44,0,"$44,058.00","$22,031.00",#DIV/0!,"$8,060.12"
IAH - SAT,54162072855,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/54162072855,https://www.airlines-manager.com/aircraft/show/99093332,9:45,12:29,320,"$119,393.00","$93,029.00",$290.72,"$34,035.00"
IAH - SAT,54168162290,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/54168162290,https://www.airlines-manager.com/aircraft/show/99093333,14:00,16:44,320,"$119,393.00","$93,029.00",$290.72,"$34,035.00"
IAH - SAT,54178655366,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/54178655366,https://www.airlines-manager.com/aircraft/show/99093334,18:00,20:44,320,"$119,393.00","$93,029.00",$290.72,"$34,035.00"
IAH - SAT,54187257427,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/54187257427,https://www.airlines-manager.com/aircraft/show/99093335,23:30,2:14,320,"$119,393.00","$93,029.00",$290.72,"$34,035.00"
IAH - SAV,54146711740,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/54146711740,https://www.airlines-manager.com/aircraft/show/110424758,2:00,7:29,320,"$342,511.00","$306,705.00",$958.45,"$55,934.04"
IAH - SAV,54156164646,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/54156164646,https://www.airlines-manager.com/aircraft/show/110424759,8:30,13:59,320,"$342,511.00","$306,705.00",$958.45,"$55,934.04"
IAH - SAV,54168162129,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/54168162129,https://www.airlines-manager.com/aircraft/show/110424760,13:00,18:29,320,"$342,511.00","$306,705.00",$958.45,"$55,934.04"
IAH - SAV,54187257268,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/54187257268,https://www.airlines-manager.com/aircraft/show/110424761,21:45,3:14,320,"$342,511.00","$306,705.00",$958.45,"$55,934.04"
IAH - SCL,54146711677,IAH 56A-1 E,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/54146711677,https://www.airlines-manager.com/aircraft/show/106676232,1:30,19:59,648,"$2,288,301.00","$2,132,185.00","$3,290.41","$115,357.17"
IAH - SCL,54146711678,IAH 56A-3 E,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/54146711678,https://www.airlines-manager.com/aircraft/show/106676234,6:30,0:59,648,"$2,288,301.00","$2,132,185.00","$3,290.41","$115,357.17"
IAH - SCL,54178655326,IAH 56A-5 E,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/54178655326,https://www.airlines-manager.com/aircraft/show/106676236,17:30,11:59,647,"$2,285,876.00","$2,129,877.00","$3,291.93","$115,232.30"
IAH - SDF,54146711940,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/54146711940,https://www.airlines-manager.com/aircraft/show/107467132,4:00,9:14,310,"$328,899.00","$296,346.00",$955.95,"$56,626.62"
IAH - SDF,54168162083,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/54168162083,https://www.airlines-manager.com/aircraft/show/107467133,12:00,17:14,310,"$328,899.00","$296,346.00",$955.95,"$56,626.62"
IAH - SDF,54178655423,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/54178655423,https://www.airlines-manager.com/aircraft/show/107467134,18:30,23:44,310,"$328,899.00","$296,346.00",$955.95,"$56,626.62"
IAH - SDF,54183441534,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/54183441534,https://www.airlines-manager.com/aircraft/show/107467211,20:15,1:29,112,"$156,193.00","$135,286.00","$1,207.91","$25,850.83"
IAH - SDF,54187257313,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/54187257313,https://www.airlines-manager.com/aircraft/show/107467131,22:15,3:29,310,"$328,899.00","$296,346.00",$955.95,"$56,626.62"
IAH - SEA,54146711894,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/54146711894,https://www.airlines-manager.com/aircraft/show/105562971,3:30,12:44,338,"$643,742.00","$588,384.00","$1,740.78","$63,723.90"
IAH - SEA,54146711895,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/54146711895,https://www.airlines-manager.com/aircraft/show/105562973,4:30,13:44,338,"$643,742.00","$588,384.00","$1,740.78","$63,723.90"
IAH - SEA,54168162159,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/54168162159,https://www.airlines-manager.com/aircraft/show/105562972,13:00,22:14,338,"$643,742.00","$588,384.00","$1,740.78","$63,723.90"
IAH - SEA,54168162160,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/54168162160,https://www.airlines-manager.com/aircraft/show/105562974,14:00,23:14,338,"$643,742.00","$588,384.00","$1,740.78","$63,723.90"
IAH - SEA,54178655314,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/54178655314,https://www.airlines-manager.com/aircraft/show/105562975,17:30,2:44,338,"$643,742.00","$588,384.00","$1,740.78","$63,723.90"
IAH - SEA,54183441627,IAH-SEA-DEN 6,ERJ-175,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/54183441627,https://www.airlines-manager.com/aircraft/show/105601215,21:15,6:44,112,"$279,368.00","$241,480.00","$2,156.07","$25,463.62"
IAH - SJC,54146711842,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/54146711842,https://www.airlines-manager.com/aircraft/show/96694086,3:00,11:14,310,"$531,297.00","$485,668.00","$1,566.67","$58,988.02"
IAH - SJC,54162073040,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/54162073040,https://www.airlines-manager.com/aircraft/show/96692491,11:00,19:14,310,"$531,297.00","$485,668.00","$1,566.67","$58,988.02"
IAH - SJC,54173399301,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/54173399301,https://www.airlines-manager.com/aircraft/show/96692343,14:30,22:44,310,"$531,297.00","$485,668.00","$1,566.67","$58,988.02"
IAH - SJC,54187257391,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/54187257391,https://www.airlines-manager.com/aircraft/show/96691558,23:00,7:14,310,"$531,297.00","$485,668.00","$1,566.67","$58,988.02"
IAH - SJC,54187257392,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/54187257392,https://www.airlines-manager.com/aircraft/show/106014350,23:30,7:44,198,"$399,774.00","$363,202.00","$1,834.35","$44,113.60"
IAH - SJD,54146711707,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/54146711707,https://www.airlines-manager.com/aircraft/show/114266975,1:45,7:44,320,"$380,962.00","$342,124.00","$1,069.14","$57,179.50"
IAH - SJD,54146711708,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/54146711708,https://www.airlines-manager.com/aircraft/show/113250059,5:15,11:14,320,"$380,962.00","$342,124.00","$1,069.14","$57,179.50"
IAH - SJD,54168162085,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/54168162085,https://www.airlines-manager.com/aircraft/show/113114108,12:00,17:59,320,"$380,962.00","$342,124.00","$1,069.14","$57,179.50"
IAH - SJD,54173399528,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/54173399528,https://www.airlines-manager.com/aircraft/show/114266974,16:00,21:59,320,"$380,962.00","$342,124.00","$1,069.14","$57,179.50"
IAH - SJD,54183441611,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/54183441611,https://www.airlines-manager.com/aircraft/show/105099862,21:00,2:59,108,"$173,491.00","$151,362.00","$1,401.50","$25,297.27"
IAH - SLC,54146711827,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/54146711827,https://www.airlines-manager.com/aircraft/show/93094698,2:45,9:29,310,"$424,254.00","$380,767.00","$1,228.28","$56,549.55"
IAH - SLC,54146711828,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/54146711828,https://www.airlines-manager.com/aircraft/show/93100455,4:45,11:29,112,"$199,641.00","$171,464.00","$1,530.93","$25,464.95"
IAH - SLC,54162072959,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/54162072959,https://www.airlines-manager.com/aircraft/show/93094699,10:00,16:44,310,"$424,254.00","$380,767.00","$1,228.28","$56,549.55"
IAH - SLC,54168162052,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/54168162052,https://www.airlines-manager.com/aircraft/show/93094695,12:00,18:44,310,"$424,254.00","$380,767.00","$1,228.28","$56,549.55"
IAH - SLC,54173399480,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/54173399480,https://www.airlines-manager.com/aircraft/show/93094696,15:15,21:59,310,"$424,254.00","$380,767.00","$1,228.28","$56,549.55"
IAH - SLC,54183441597,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/54183441597,https://www.airlines-manager.com/aircraft/show/93094697,21:00,3:44,310,"$424,254.00","$380,767.00","$1,228.28","$56,549.55"
IAH - SMF,54146711783,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/54146711783,https://www.airlines-manager.com/aircraft/show/99093335,2:15,10:29,320,"$529,867.00","$480,638.00","$1,501.99","$58,377.09"
IAH - SMF,54146711784,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/54146711784,https://www.airlines-manager.com/aircraft/show/106499070,4:15,12:29,198,"$399,187.00","$363,798.00","$1,837.36","$44,185.99"
IAH - SMF,54168162182,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/54168162182,https://www.airlines-manager.com/aircraft/show/99093332,13:00,21:14,320,"$529,867.00","$480,638.00","$1,501.99","$58,377.09"
IAH - SMF,54173399595,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/54173399595,https://www.airlines-manager.com/aircraft/show/99093333,16:45,0:59,320,"$529,867.00","$480,638.00","$1,501.99","$58,377.09"
IAH - SMF,54183441580,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/54183441580,https://www.airlines-manager.com/aircraft/show/99093334,20:45,4:59,320,"$529,867.00","$480,638.00","$1,501.99","$58,377.09"
IAH - STL,54146711626,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/54146711626,https://www.airlines-manager.com/aircraft/show/88725601,1:15,5:59,310,"$299,834.00","$267,563.00",$863.11,"$56,527.39"
IAH - STL,54156164617,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/54156164617,https://www.airlines-manager.com/aircraft/show/103600702,8:15,12:59,310,"$299,834.00","$267,563.00",$863.11,"$56,527.39"
IAH - STL,54168162255,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/54168162255,https://www.airlines-manager.com/aircraft/show/103600701,14:00,18:44,310,"$299,834.00","$267,563.00",$863.11,"$56,527.39"
IAH - STL,54173399422,IAH-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/54173399422,https://www.airlines-manager.com/aircraft/show/96990010,15:00,19:44,112,"$142,579.00","$122,049.00","$1,089.72","$25,785.00"
IAH - STL,54183441546,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/54183441546,https://www.airlines-manager.com/aircraft/show/103600700,20:15,0:59,310,"$299,834.00","$267,563.00",$863.11,"$56,527.39"
IAH - STL,54187257256,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/54187257256,https://www.airlines-manager.com/aircraft/show/110582844,21:45,2:29,198,"$227,848.00","$202,002.00","$1,020.21","$42,676.48"
IAH - TPA,54146711954,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/54146711954,https://www.airlines-manager.com/aircraft/show/93094699,4:15,9:29,310,"$326,295.00","$291,073.00",$938.95,"$55,619.04"
IAH - TPA,54146711955,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/54146711955,https://www.airlines-manager.com/aircraft/show/93094695,6:15,11:29,310,"$326,295.00","$291,073.00",$938.95,"$55,619.04"
IAH - TPA,54162072956,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/54162072956,https://www.airlines-manager.com/aircraft/show/93094696,10:00,15:14,310,"$326,295.00","$291,073.00",$938.95,"$55,619.04"
IAH - TPA,54173399501,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/54173399501,https://www.airlines-manager.com/aircraft/show/93094697,15:45,20:59,310,"$326,295.00","$291,073.00",$938.95,"$55,619.04"
IAH - TPA,54183441648,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/54183441648,https://www.airlines-manager.com/aircraft/show/93094698,21:30,2:44,310,"$326,295.00","$291,073.00",$938.95,"$55,619.04"
IAH - TPA,54187257429,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/54187257429,https://www.airlines-manager.com/aircraft/show/93100455,23:30,4:44,107,"$152,102.00","$129,766.00","$1,212.77","$24,796.05"
IAH - TUL,54146711497,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/54146711497,https://www.airlines-manager.com/aircraft/show/82543907,0:30,4:14,112,"$93,654.00","$77,440.00",$691.43,"$20,742.86"
IAH - TUL,54146711498,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/54146711498,https://www.airlines-manager.com/aircraft/show/114373409,3:30,7:14,310,"$202,768.00","$176,997.00",$570.96,"$47,409.91"
IAH - TUL,54162072853,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/54162072853,https://www.airlines-manager.com/aircraft/show/114373410,9:45,13:29,310,"$202,768.00","$176,997.00",$570.96,"$47,409.91"
IAH - TUL,54173399386,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/54173399386,https://www.airlines-manager.com/aircraft/show/113994196,15:00,18:44,310,"$202,768.00","$176,997.00",$570.96,"$47,409.91"
IAH - TUL,54183441549,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/54183441549,https://www.airlines-manager.com/aircraft/show/86385103,20:15,23:59,310,"$202,768.00","$176,997.00",$570.96,"$47,409.91"
IAH - TUS,54146712004,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/54146712004,https://www.airlines-manager.com/aircraft/show/100684074,5:30,11:14,310,"$358,693.00","$324,614.00","$1,047.14","$56,618.72"
IAH - TUS,54162072965,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/54162072965,https://www.airlines-manager.com/aircraft/show/110582845,10:15,15:59,198,"$272,008.00","$244,705.00","$1,235.88","$42,681.10"
IAH - TUS,54162072966,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/54162072966,https://www.airlines-manager.com/aircraft/show/100684071,11:30,17:14,310,"$358,693.00","$324,614.00","$1,047.14","$56,618.72"
IAH - TUS,54178655231,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/54178655231,https://www.airlines-manager.com/aircraft/show/100684072,17:00,22:44,310,"$358,693.00","$324,614.00","$1,047.14","$56,618.72"
IAH - TUS,54187257406,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/54187257406,https://www.airlines-manager.com/aircraft/show/100684073,23:15,4:59,310,"$358,693.00","$324,614.00","$1,047.14","$56,618.72"
IAH - TYS,54146711766,IAH-GRR-MSN 2,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/54146711766,https://www.airlines-manager.com/aircraft/show/117273347,2:15,7:14,310,"$325,239.00","$295,080.00",$951.87,"$59,213.38"
IAH - TYS,54156164627,IAH-GRR-MSN 1,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/54156164627,https://www.airlines-manager.com/aircraft/show/117273348,8:30,13:29,310,"$325,239.00","$295,080.00",$951.87,"$59,213.38"
IAH - TYS,54162072997,IAH-GRR-MSN 4,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/54162072997,https://www.airlines-manager.com/aircraft/show/117273345,11:00,15:59,310,"$325,239.00","$295,080.00",$951.87,"$59,213.38"
IAH - TYS,54183441541,IAH-GRR-MSN 3,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/54183441541,https://www.airlines-manager.com/aircraft/show/117273346,20:15,1:14,310,"$325,239.00","$295,080.00",$951.87,"$59,213.38"
IAH - UIO,54146711502,IAH 84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/54146711502,https://www.airlines-manager.com/aircraft/show/89124076,0:30,11:14,932,"$1,795,179.00","$1,639,785.00","$1,759.43","$152,775.00"
IAH - UIO,54168162227,IAH 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/54168162227,https://www.airlines-manager.com/aircraft/show/88905141,13:15,23:59,932,"$1,795,179.00","$1,639,785.00","$1,759.43","$152,775.00"
IAH - YEG,54146711653,IAH-YEG-BUR 5,A321neo,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/54146711653,https://www.airlines-manager.com/aircraft/show/117273340,1:30,10:44,338,"$640,637.00","$594,021.00","$1,757.46","$64,334.40"
IAH - YEG,54156164650,IAH-YEG-BUR 2,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/54156164650,https://www.airlines-manager.com/aircraft/show/117273343,8:30,17:44,310,"$591,637.00","$542,704.00","$1,750.66","$58,776.61"
IAH - YEG,54162072996,IAH-YEG-BUR 1,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/54162072996,https://www.airlines-manager.com/aircraft/show/117273344,11:00,20:14,310,"$591,637.00","$542,704.00","$1,750.66","$58,776.61"
IAH - YEG,54178655293,IAH-YEG-BUR 4,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/54178655293,https://www.airlines-manager.com/aircraft/show/117273341,17:15,2:29,310,"$591,637.00","$542,704.00","$1,750.66","$58,776.61"
IAH - YEG,54178655294,IAH-YEG-BUR 3,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/54178655294,https://www.airlines-manager.com/aircraft/show/117273342,18:00,3:14,310,"$591,637.00","$542,704.00","$1,750.66","$58,776.61"
IAH - YOW,54146711880,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/54146711880,https://www.airlines-manager.com/aircraft/show/113114108,3:15,11:14,320,"$508,793.00","$461,136.00","$1,441.05","$57,762.34"
IAH - YOW,54156164603,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/54156164603,https://www.airlines-manager.com/aircraft/show/114266974,8:00,15:59,320,"$508,793.00","$461,136.00","$1,441.05","$57,762.34"
IAH - YOW,54168162147,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/54168162147,https://www.airlines-manager.com/aircraft/show/105099862,13:00,20:59,112,"$238,579.00","$210,374.00","$1,878.34","$26,351.65"
IAH - YOW,54178655344,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/54178655344,https://www.airlines-manager.com/aircraft/show/114266975,17:45,1:44,320,"$508,793.00","$461,136.00","$1,441.05","$57,762.34"
IAH - YOW,54183441638,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/54183441638,https://www.airlines-manager.com/aircraft/show/113250059,21:15,5:14,320,"$508,793.00","$461,136.00","$1,441.05","$57,762.34"
IAH - YUL,54146711560,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/54146711560,https://www.airlines-manager.com/aircraft/show/114266980,0:45,8:44,400,"$682,424.00","$624,483.00","$1,561.21","$78,223.34"
IAH - YUL,54146711561,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/54146711561,https://www.airlines-manager.com/aircraft/show/114266979,2:00,9:59,400,"$682,424.00","$624,483.00","$1,561.21","$78,223.34"
IAH - YUL,54168162098,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/54168162098,https://www.airlines-manager.com/aircraft/show/114266978,12:00,19:59,400,"$682,424.00","$624,483.00","$1,561.21","$78,223.34"
IAH - YUL,54183441591,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/54183441591,https://www.airlines-manager.com/aircraft/show/114266977,20:45,4:44,400,"$682,424.00","$624,483.00","$1,561.21","$78,223.34"
IAH - YVR,54146711582,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/54146711582,https://www.airlines-manager.com/aircraft/show/97076946,1:00,10:29,400,"$774,150.00","$706,088.00","$1,765.22","$74,455.68"
IAH - YVR,54146711583,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/54146711583,https://www.airlines-manager.com/aircraft/show/97076943,4:00,13:29,400,"$774,150.00","$706,088.00","$1,765.22","$74,455.68"
IAH - YVR,54168162199,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/54168162199,https://www.airlines-manager.com/aircraft/show/97076944,13:00,22:29,400,"$774,150.00","$706,088.00","$1,765.22","$74,455.68"
IAH - YVR,54173399558,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/54173399558,https://www.airlines-manager.com/aircraft/show/97026605,16:00,1:44,136,"$285,820.00","$249,912.00","$1,837.59","$25,675.89"
IAH - YVR,54183441504,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/54183441504,https://www.airlines-manager.com/aircraft/show/97076945,20:00,5:29,400,"$774,150.00","$706,088.00","$1,765.22","$74,455.68"
IAH - YVR,54187257396,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/54187257396,https://www.airlines-manager.com/aircraft/show/97076942,23:00,8:29,399,"$772,967.00","$704,956.00","$1,766.81","$74,336.31"
IAH - YYC,54146711639,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/54146711639,https://www.airlines-manager.com/aircraft/show/114266978,1:15,9:59,400,"$742,774.00","$680,022.00","$1,700.06","$77,865.11"
IAH - YYC,54168162099,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/54168162099,https://www.airlines-manager.com/aircraft/show/114266977,12:00,20:44,400,"$742,774.00","$680,022.00","$1,700.06","$77,865.11"
IAH - YYC,54173399529,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/54173399529,https://www.airlines-manager.com/aircraft/show/114266980,16:00,0:44,400,"$742,774.00","$680,022.00","$1,700.06","$77,865.11"
IAH - YYC,54178655298,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/54178655298,https://www.airlines-manager.com/aircraft/show/114266979,17:15,1:59,400,"$742,774.00","$680,022.00","$1,700.06","$77,865.11"
IAH - YYZ,54146711887,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/54146711887,https://www.airlines-manager.com/aircraft/show/97076944,3:30,10:29,400,"$572,430.00","$513,782.00","$1,284.46","$73,572.60"
IAH - YYZ,54146711888,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/54146711888,https://www.airlines-manager.com/aircraft/show/97026605,6:45,13:44,136,"$211,434.00","$180,891.00","$1,330.08","$25,903.25"
IAH - YYZ,54168162200,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/54168162200,https://www.airlines-manager.com/aircraft/show/97076945,13:00,19:59,400,"$572,430.00","$513,782.00","$1,284.46","$73,572.60"
IAH - YYZ,54173399563,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/54173399563,https://www.airlines-manager.com/aircraft/show/97076942,16:00,22:59,400,"$572,430.00","$513,782.00","$1,284.46","$73,572.60"
IAH - YYZ,54178655370,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/54178655370,https://www.airlines-manager.com/aircraft/show/97076946,18:00,0:59,400,"$572,430.00","$513,782.00","$1,284.46","$73,572.60"
IAH - YYZ,54183441622,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/54183441622,https://www.airlines-manager.com/aircraft/show/97076943,21:00,3:59,400,"$572,430.00","$513,782.00","$1,284.46","$73,572.60"
MIA - ABQ,54146711619,MIA-IAD-TUS 1,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/54146711619,https://www.airlines-manager.com/aircraft/show/97556721,1:15,9:59,310,"$547,286.00","$499,445.00","$1,611.11","$57,188.36"
MIA - ABQ,54146711620,MIA-IAD-TUS 4,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/54146711620,https://www.airlines-manager.com/aircraft/show/97556718,4:15,12:59,310,"$547,286.00","$499,445.00","$1,611.11","$57,188.36"
MIA - ABQ,54162072940,MIA-IAD-TUS 3,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/54162072940,https://www.airlines-manager.com/aircraft/show/97556719,10:00,18:44,310,"$547,286.00","$499,445.00","$1,611.11","$57,188.36"
MIA - ABQ,54183441465,MIA-IAD-TUS 2,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/54183441465,https://www.airlines-manager.com/aircraft/show/97556720,19:30,4:14,310,"$547,286.00","$499,445.00","$1,611.11","$57,188.36"
MIA - ABQ,54187257337,MIA-IAD-TUS 5,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/54187257337,https://www.airlines-manager.com/aircraft/show/97556716,22:30,7:14,310,"$547,286.00","$499,445.00","$1,611.11","$57,188.36"
MIA - ACC,54168162303,MIA 84B-2 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/54168162303,https://www.airlines-manager.com/aircraft/show/106676226,14:15,11:59,962,"$3,564,950.00","$3,254,637.00","$3,383.20","$149,753.24"
MIA - ACC,54187257376,MIA 84B-4 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/54187257376,https://www.airlines-manager.com/aircraft/show/106676228,22:45,20:29,961,"$3,562,136.00","$3,252,007.00","$3,383.98","$149,632.22"
MIA - ALB,54146711896,MIA-DSM-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/54146711896,https://www.airlines-manager.com/aircraft/show/113101233,3:30,10:14,320,"$427,642.00","$386,268.00","$1,207.09","$57,366.53"
MIA - ALB,54168162137,MIA-DSM-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/54168162137,https://www.airlines-manager.com/aircraft/show/113101230,13:00,19:44,320,"$427,642.00","$386,268.00","$1,207.09","$57,366.53"
MIA - ALB,54173399531,MIA-DSM-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/54173399531,https://www.airlines-manager.com/aircraft/show/100049776,16:00,22:59,112,"$202,282.00","$178,019.00","$1,589.46","$25,491.98"
MIA - ALB,54183441554,MIA-DSM-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/54183441554,https://www.airlines-manager.com/aircraft/show/111064081,20:15,2:59,320,"$427,642.00","$386,268.00","$1,207.09","$57,366.53"
MIA - ALB,54187257413,MIA-DSM-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/54187257413,https://www.airlines-manager.com/aircraft/show/113101228,23:15,5:59,320,"$427,642.00","$386,268.00","$1,207.09","$57,366.53"
MIA - ALG,54178655278,MIA 84B-7 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/54178655278,https://www.airlines-manager.com/aircraft/show/106676231,17:00,12:29,962,"$3,237,342.00","$2,951,810.00","$3,068.41","$151,504.36"
MIA - ALG,54183441564,MIA 84B-5 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/54183441564,https://www.airlines-manager.com/aircraft/show/106676229,20:30,15:59,962,"$3,237,342.00","$2,951,810.00","$3,068.41","$151,504.36"
MIA - ANU,54146712022,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/54146712022,https://www.airlines-manager.com/aircraft/show/110114297,6:30,13:44,228,"$355,422.00","$324,739.00","$1,424.29","$44,894.79"
MIA - ANU,54156164632,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/54156164632,https://www.airlines-manager.com/aircraft/show/110114298,8:30,15:44,228,"$355,422.00","$324,739.00","$1,424.29","$44,894.79"
MIA - ANU,54168162023,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/54168162023,https://www.airlines-manager.com/aircraft/show/110114295,12:00,19:14,228,"$355,422.00","$324,739.00","$1,424.29","$44,894.79"
MIA - ANU,54168162024,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/54168162024,https://www.airlines-manager.com/aircraft/show/110114296,13:00,20:14,228,"$355,422.00","$324,739.00","$1,424.29","$44,894.79"
MIA - ANU,54173399584,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/54173399584,https://www.airlines-manager.com/aircraft/show/110114300,16:30,23:44,228,"$355,422.00","$324,739.00","$1,424.29","$44,894.79"
MIA - ANU,54187257426,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/54187257426,https://www.airlines-manager.com/aircraft/show/110114299,23:30,6:44,227,"$354,063.00","$323,432.00","$1,424.81","$44,714.10"
MIA - ATL,54168162035,MIA-LAX-DEN 4,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/54168162035,https://www.airlines-manager.com/aircraft/show/91126652,12:00,16:29,400,"$365,129.00","$300,884.00",$752.21,"$67,111.67"
MIA - ATL,54168162036,MIA-LAX-DEN 2,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/54168162036,https://www.airlines-manager.com/aircraft/show/91126650,13:00,17:29,400,"$365,129.00","$300,884.00",$752.21,"$67,111.67"
MIA - ATL,54183441461,MIA-LAX-DEN 1,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/54183441461,https://www.airlines-manager.com/aircraft/show/91126649,19:30,23:59,400,"$365,129.00","$300,884.00",$752.21,"$67,111.67"
MIA - ATL,54183441462,MIA-LAX-DEN 3,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/54183441462,https://www.airlines-manager.com/aircraft/show/91126651,21:00,1:29,400,"$365,129.00","$300,884.00",$752.21,"$67,111.67"
MIA - AUA,54146711854,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/54146711854,https://www.airlines-manager.com/aircraft/show/107121795,3:00,9:29,320,"$403,740.00","$363,920.00","$1,137.25","$56,131.62"
MIA - AUA,54146711855,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/54146711855,https://www.airlines-manager.com/aircraft/show/107121798,4:30,10:59,320,"$403,740.00","$363,920.00","$1,137.25","$56,131.62"
MIA - AUA,54162073031,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/54162073031,https://www.airlines-manager.com/aircraft/show/107121797,11:00,17:29,320,"$403,740.00","$363,920.00","$1,137.25","$56,131.62"
MIA - AUA,54178655349,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/54178655349,https://www.airlines-manager.com/aircraft/show/107121796,17:45,0:14,320,"$403,740.00","$363,920.00","$1,137.25","$56,131.62"
MIA - AUA,54187257259,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/54187257259,https://www.airlines-manager.com/aircraft/show/107121799,21:45,4:14,241,"$313,495.00","$276,694.00","$1,148.11","$42,677.74"
MIA - AUS,54146711808,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/54146711808,https://www.airlines-manager.com/aircraft/show/99920625,2:45,9:14,320,"$402,281.00","$358,582.00","$1,120.57","$55,308.28"
MIA - AUS,54162072935,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/54162072935,https://www.airlines-manager.com/aircraft/show/99920626,10:00,16:29,320,"$402,281.00","$358,582.00","$1,120.57","$55,308.28"
MIA - AUS,54168162285,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/54168162285,https://www.airlines-manager.com/aircraft/show/82323689,14:00,20:29,112,"$189,894.00","$164,835.00","$1,471.74","$25,424.42"
MIA - AUS,54173399334,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/54173399334,https://www.airlines-manager.com/aircraft/show/99920623,14:45,21:14,320,"$402,281.00","$358,582.00","$1,120.57","$55,308.28"
MIA - AUS,54183441579,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/54183441579,https://www.airlines-manager.com/aircraft/show/99920624,20:45,3:14,320,"$402,281.00","$358,582.00","$1,120.57","$55,308.28"
MIA - BDA,54146711844,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/54146711844,https://www.airlines-manager.com/aircraft/show/104034457,3:00,9:14,228,"$294,998.00","$267,472.00","$1,173.12","$42,909.95"
MIA - BDA,54146711845,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/54146711845,https://www.airlines-manager.com/aircraft/show/104034459,3:45,9:59,228,"$294,998.00","$267,472.00","$1,173.12","$42,909.95"
MIA - BDA,54162072863,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/54162072863,https://www.airlines-manager.com/aircraft/show/104034460,10:00,16:14,228,"$294,998.00","$267,472.00","$1,173.12","$42,909.95"
MIA - BDA,54162072864,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/54162072864,https://www.airlines-manager.com/aircraft/show/99326789,11:00,17:14,228,"$294,998.00","$267,472.00","$1,173.12","$42,909.95"
MIA - BDA,54173399503,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/54173399503,https://www.airlines-manager.com/aircraft/show/104034461,15:45,21:59,228,"$294,998.00","$267,472.00","$1,173.12","$42,909.95"
MIA - BDA,54183441632,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/54183441632,https://www.airlines-manager.com/aircraft/show/104034458,21:15,3:29,228,"$294,998.00","$267,472.00","$1,173.12","$42,909.95"
MIA - BDL,54146711862,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/54146711862,https://www.airlines-manager.com/aircraft/show/107763565,3:00,9:44,320,"$426,255.00","$383,974.00","$1,199.92","$57,025.84"
MIA - BDL,54156164591,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/54156164591,https://www.airlines-manager.com/aircraft/show/107467213,8:00,14:44,112,"$200,632.00","$176,005.00","$1,571.47","$26,139.36"
MIA - BDL,54168162235,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/54168162235,https://www.airlines-manager.com/aircraft/show/107763561,13:45,20:29,320,"$426,255.00","$383,974.00","$1,199.92","$57,025.84"
MIA - BDL,54168162236,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/54168162236,https://www.airlines-manager.com/aircraft/show/107763566,14:00,20:44,320,"$426,255.00","$383,974.00","$1,199.92","$57,025.84"
MIA - BDL,54183441560,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/54183441560,https://www.airlines-manager.com/aircraft/show/107763562,20:30,3:14,320,"$426,255.00","$383,974.00","$1,199.92","$57,025.84"
MIA - BFF,54146711562,MIA-PSP-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/54146711562,https://www.airlines-manager.com/aircraft/show/116789634,0:45,9:29,320,"$554,176.00","$504,013.00","$1,575.04","$57,711.41"
MIA - BFF,54146711563,MIA-PSP-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/54146711563,https://www.airlines-manager.com/aircraft/show/116789632,1:00,9:44,320,"$554,176.00","$504,013.00","$1,575.04","$57,711.41"
MIA - BFF,54162072903,MIA-PSP-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/54162072903,https://www.airlines-manager.com/aircraft/show/116789633,10:00,18:44,320,"$554,176.00","$504,013.00","$1,575.04","$57,711.41"
MIA - BFF,54168162208,MIA-PSP-BFF 5,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/54168162208,https://www.airlines-manager.com/aircraft/show/116789630,13:00,21:44,320,"$554,176.00","$504,013.00","$1,575.04","$57,711.41"
MIA - BFF,54183441590,MIA-PSP-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/54183441590,https://www.airlines-manager.com/aircraft/show/116789631,20:45,5:29,320,"$554,176.00","$504,013.00","$1,575.04","$57,711.41"
MIA - BGI,54146711825,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/54146711825,https://www.airlines-manager.com/aircraft/show/107121796,2:45,10:59,320,"$515,730.00","$466,906.00","$1,459.08","$56,709.23"
MIA - BGI,54146711826,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/54146711826,https://www.airlines-manager.com/aircraft/show/107121799,6:45,14:59,320,"$515,730.00","$466,906.00","$1,459.08","$56,709.23"
MIA - BGI,54168162081,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/54168162081,https://www.airlines-manager.com/aircraft/show/107121795,12:00,20:14,320,"$515,730.00","$466,906.00","$1,459.08","$56,709.23"
MIA - BGI,54168162082,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/54168162082,https://www.airlines-manager.com/aircraft/show/107121798,13:30,21:44,320,"$515,730.00","$466,906.00","$1,459.08","$56,709.23"
MIA - BGI,54183441533,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/54183441533,https://www.airlines-manager.com/aircraft/show/107121797,20:00,4:14,320,"$515,730.00","$466,906.00","$1,459.08","$56,709.23"
MIA - BHM,54146711910,MIA-CID-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/54146711910,https://www.airlines-manager.com/aircraft/show/116789651,3:45,8:29,310,"$301,638.00","$272,460.00",$878.90,"$57,561.97"
MIA - BHM,54162072869,MIA-CID-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/54162072869,https://www.airlines-manager.com/aircraft/show/116789652,10:00,14:44,310,"$301,638.00","$272,460.00",$878.90,"$57,561.97"
MIA - BHM,54178655308,MIA-CID-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/54178655308,https://www.airlines-manager.com/aircraft/show/116789653,17:15,21:59,310,"$301,638.00","$272,460.00",$878.90,"$57,561.97"
MIA - BHM,54187257369,MIA-CID-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/54187257369,https://www.airlines-manager.com/aircraft/show/116789650,22:45,3:29,310,"$301,638.00","$272,460.00",$878.90,"$57,561.97"
MIA - BIL,54162072897,MIA-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/54162072897,https://www.airlines-manager.com/aircraft/show/116789629,10:00,20:14,320,"$631,281.00","$575,789.00","$1,799.34","$56,266.03"
MIA - BIL,54168162050,MIA-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/54168162050,https://www.airlines-manager.com/aircraft/show/116789628,12:00,22:14,320,"$631,281.00","$575,789.00","$1,799.34","$56,266.03"
MIA - BIL,54168162051,MIA-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/54168162051,https://www.airlines-manager.com/aircraft/show/116789627,14:00,0:14,320,"$631,281.00","$575,789.00","$1,799.34","$56,266.03"
MIA - BIL,54183441646,MIA-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/54183441646,https://www.airlines-manager.com/aircraft/show/116789626,21:30,7:44,320,"$631,281.00","$575,789.00","$1,799.34","$56,266.03"
MIA - BIL,54187257440,MIA-BIL-BZN 5,ERJ-175,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/54187257440,https://www.airlines-manager.com/aircraft/show/116042637,23:45,9:59,112,"$296,899.00","$263,087.00","$2,348.99","$25,708.83"
MIA - BNA,54146711530,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/54146711530,https://www.airlines-manager.com/aircraft/show/103534663,0:45,5:59,112,"$157,224.00","$135,746.00","$1,212.02","$25,938.73"
MIA - BNA,54146711531,MIA-BOI-BNA 4,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/54146711531,https://www.airlines-manager.com/aircraft/show/103775657,1:15,6:29,320,"$330,750.00","$292,499.00",$914.06,"$55,891.53"
MIA - BNA,54146711532,MIA-BOI-BNA 3,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/54146711532,https://www.airlines-manager.com/aircraft/show/104020880,4:45,9:59,320,"$330,750.00","$292,499.00",$914.06,"$55,891.53"
MIA - BNA,54162072917,MIA-BOI-BNA 2,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/54162072917,https://www.airlines-manager.com/aircraft/show/104022609,10:00,15:14,320,"$330,750.00","$292,499.00",$914.06,"$55,891.53"
MIA - BNA,54168162096,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/54168162096,https://www.airlines-manager.com/aircraft/show/103534663,12:00,17:14,112,"$157,224.00","$135,746.00","$1,212.02","$25,938.73"
MIA - BNA,54183441634,MIA-BOI-BNA 1,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/54183441634,https://www.airlines-manager.com/aircraft/show/104133006,21:15,2:29,320,"$330,750.00","$292,499.00",$914.06,"$55,891.53"
MIA - BOI,54146711715,MIA-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/54146711715,https://www.airlines-manager.com/aircraft/show/106339154,1:45,12:59,198,"$523,215.00","$479,346.00","$2,420.94","$42,671.75"
MIA - BOI,54162072918,MIA-BOI-BNA 1,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/54162072918,https://www.airlines-manager.com/aircraft/show/104133006,10:00,21:14,320,"$695,244.00","$635,092.00","$1,984.66","$56,536.38"
MIA - BOI,54168162276,MIA-BOI-BNA 4,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/54168162276,https://www.airlines-manager.com/aircraft/show/103775657,14:00,1:14,320,"$695,244.00","$635,092.00","$1,984.66","$56,536.38"
MIA - BOI,54178655327,MIA-BOI-BNA 3,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/54178655327,https://www.airlines-manager.com/aircraft/show/104020880,17:30,4:44,320,"$695,244.00","$635,092.00","$1,984.66","$56,536.38"
MIA - BOI,54187257361,MIA-BOI-BNA 2,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/54187257361,https://www.airlines-manager.com/aircraft/show/104022609,22:45,9:59,319,"$693,245.00","$633,172.00","$1,984.87","$56,365.46"
MIA - BOS,54146711751,MIA-SJU-BOS 5,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/54146711751,https://www.airlines-manager.com/aircraft/show/91352059,2:00,8:59,310,"$443,989.00","$399,580.00","$1,288.97","$57,219.09"
MIA - BOS,54146711752,MIA-SJU-BOS 1,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/54146711752,https://www.airlines-manager.com/aircraft/show/91352063,5:00,11:59,310,"$443,989.00","$399,580.00","$1,288.97","$57,219.09"
MIA - BOS,54162073074,MIA-SJU-BOS 4,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/54162073074,https://www.airlines-manager.com/aircraft/show/91352060,11:15,18:14,310,"$443,989.00","$399,580.00","$1,288.97","$57,219.09"
MIA - BOS,54173399577,MIA-SJU-BOS 2,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/54173399577,https://www.airlines-manager.com/aircraft/show/91352062,16:30,23:29,310,"$443,989.00","$399,580.00","$1,288.97","$57,219.09"
MIA - BOS,54178655457,MIA-SJU-BOS 3,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/54178655457,https://www.airlines-manager.com/aircraft/show/91352061,19:00,1:59,310,"$443,989.00","$399,580.00","$1,288.97","$57,219.09"
MIA - BOS,54183441552,MIA-SJU-BOS 6 B,A319-100,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/54183441552,https://www.airlines-manager.com/aircraft/show/110582841,20:15,3:14,198,"$335,807.00","$300,226.00","$1,516.29","$42,991.79"
MIA - BTV,54146711846,MIA-DSM-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/54146711846,https://www.airlines-manager.com/aircraft/show/111064081,3:00,10:14,320,"$459,413.00","$416,541.00","$1,301.69","$57,586.31"
MIA - BTV,54156164662,MIA-DSM-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/54156164662,https://www.airlines-manager.com/aircraft/show/113101228,8:45,15:59,320,"$459,413.00","$416,541.00","$1,301.69","$57,586.31"
MIA - BTV,54168162144,MIA-DSM-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/54168162144,https://www.airlines-manager.com/aircraft/show/113101233,13:00,20:14,320,"$459,413.00","$416,541.00","$1,301.69","$57,586.31"
MIA - BTV,54183441481,MIA-DSM-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/54183441481,https://www.airlines-manager.com/aircraft/show/113101230,19:45,2:59,320,"$459,413.00","$416,541.00","$1,301.69","$57,586.31"
MIA - BTV,54187257384,MIA-DSM-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/54187257384,https://www.airlines-manager.com/aircraft/show/100049776,23:00,6:29,109,"$215,686.00","$190,490.00","$1,747.61","$25,455.23"
MIA - BUF,54146711856,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/54146711856,https://www.airlines-manager.com/aircraft/show/107763561,3:00,9:44,320,"$424,121.00","$382,306.00","$1,194.71","$56,778.12"
MIA - BUF,54146711857,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/54146711857,https://www.airlines-manager.com/aircraft/show/107763566,3:15,9:59,320,"$424,121.00","$382,306.00","$1,194.71","$56,778.12"
MIA - BUF,54162073026,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/54162073026,https://www.airlines-manager.com/aircraft/show/107763562,11:00,17:44,320,"$424,121.00","$382,306.00","$1,194.71","$56,778.12"
MIA - BUF,54178655329,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/54178655329,https://www.airlines-manager.com/aircraft/show/107763565,17:30,0:14,320,"$424,121.00","$382,306.00","$1,194.71","$56,778.12"
MIA - BUF,54183441628,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/54183441628,https://www.airlines-manager.com/aircraft/show/107467213,21:15,3:59,112,"$199,651.00","$175,283.00","$1,565.03","$26,032.13"
MIA - BUR,54146711814,MIA-BUR-PVD 4,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/54146711814,https://www.airlines-manager.com/aircraft/show/108834806,2:45,13:59,310,"$701,092.00","$648,187.00","$2,090.93","$57,702.11"
MIA - BUR,54162073025,MIA-BUR-PVD 1,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/54162073025,https://www.airlines-manager.com/aircraft/show/108834803,11:00,22:14,310,"$701,092.00","$648,187.00","$2,090.93","$57,702.11"
MIA - BUR,54168162244,MIA-BUR-PVD 3,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/54168162244,https://www.airlines-manager.com/aircraft/show/108834805,14:00,1:14,310,"$701,092.00","$648,187.00","$2,090.93","$57,702.11"
MIA - BUR,54183441527,MIA-BUR-PVD 5 B,A319-100,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/54183441527,https://www.airlines-manager.com/aircraft/show/108834807,20:00,7:14,198,"$525,980.00","$483,555.00","$2,442.20","$43,046.44"
MIA - BUR,54183441528,MIA-BUR-PVD 2,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/54183441528,https://www.airlines-manager.com/aircraft/show/108834804,20:45,7:59,309,"$699,077.00","$646,252.00","$2,091.43","$57,529.85"
MIA - BWI,54146711924,MIA-BWI-YYZ 4,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/54146711924,https://www.airlines-manager.com/aircraft/show/92153442,4:00,9:44,310,"$364,242.00","$325,933.00","$1,051.40","$56,848.78"
MIA - BWI,54146711925,MIA-BWI-YYZ 5,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/54146711925,https://www.airlines-manager.com/aircraft/show/92153439,6:00,11:44,310,"$364,242.00","$325,933.00","$1,051.40","$56,848.78"
MIA - BWI,54162072931,MIA-BWI-YYZ 1,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/54162072931,https://www.airlines-manager.com/aircraft/show/92153443,10:00,15:44,310,"$364,242.00","$325,933.00","$1,051.40","$56,848.78"
MIA - BWI,54168162210,MIA-BWI-YYZ 2,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/54168162210,https://www.airlines-manager.com/aircraft/show/92153440,13:00,18:44,310,"$364,242.00","$325,933.00","$1,051.40","$56,848.78"
MIA - BWI,54183441610,MIA-BWI-YYZ 3,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/54183441610,https://www.airlines-manager.com/aircraft/show/92153441,21:00,2:44,310,"$364,242.00","$325,933.00","$1,051.40","$56,848.78"
MIA - BWI,54187257393,MIA-BWI-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/54187257393,https://www.airlines-manager.com/aircraft/show/92137503,23:00,4:44,84,"$120,361.00","$99,643.00","$1,186.23","$17,379.59"
MIA - BZN,54146711473,MIA-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/54146711473,https://www.airlines-manager.com/aircraft/show/116789627,0:15,10:44,320,"$653,842.00","$597,646.00","$1,867.64","$57,009.16"
MIA - BZN,54162072998,MIA-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/54162072998,https://www.airlines-manager.com/aircraft/show/116789626,11:00,21:29,320,"$653,842.00","$597,646.00","$1,867.64","$57,009.16"
MIA - BZN,54168162209,MIA-BIL-BZN 5,ERJ-175,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/54168162209,https://www.airlines-manager.com/aircraft/show/116042637,13:00,23:44,112,"$308,087.00","$273,608.00","$2,442.93","$25,491.43"
MIA - BZN,54183441535,MIA-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/54183441535,https://www.airlines-manager.com/aircraft/show/116789629,20:15,6:44,320,"$653,842.00","$597,646.00","$1,867.64","$57,009.16"
MIA - BZN,54187257315,MIA-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/54187257315,https://www.airlines-manager.com/aircraft/show/116789628,22:15,8:44,319,"$651,939.00","$595,817.00","$1,867.76","$56,834.69"
MIA - CAK,54146711735,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/54146711735,https://www.airlines-manager.com/aircraft/show/115493370,2:00,8:14,310,"$383,530.00","$349,760.00","$1,128.26","$56,111.23"
MIA - CAK,54156164611,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/54156164611,https://www.airlines-manager.com/aircraft/show/115493371,8:15,14:29,310,"$383,530.00","$349,760.00","$1,128.26","$56,111.23"
MIA - CAK,54162073003,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/54162073003,https://www.airlines-manager.com/aircraft/show/115493372,11:00,17:14,310,"$383,530.00","$349,760.00","$1,128.26","$56,111.23"
MIA - CAK,54178655371,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/54178655371,https://www.airlines-manager.com/aircraft/show/114912307,18:00,0:14,112,"$181,169.00","$159,079.00","$1,420.35","$25,520.70"
MIA - CAK,54183441617,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/54183441617,https://www.airlines-manager.com/aircraft/show/115493373,21:00,3:14,272,"$355,669.00","$322,989.00","$1,187.46","$51,816.42"
MIA - CHS,54146711871,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/54146711871,https://www.airlines-manager.com/aircraft/show/94886626,3:15,7:14,310,"$225,037.00","$199,045.00",$642.08,"$49,969.46"
MIA - CHS,54146711872,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/54146711872,https://www.airlines-manager.com/aircraft/show/107577220,4:15,8:14,0,"$60,700.00","$43,128.00",#DIV/0!,"$10,827.11"
MIA - CHS,54156164677,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/54156164677,https://www.airlines-manager.com/aircraft/show/96692674,9:00,12:59,310,"$225,037.00","$199,045.00",$642.08,"$49,969.46"
MIA - CHS,54162073013,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/54162073013,https://www.airlines-manager.com/aircraft/show/105601657,11:00,14:59,112,"$104,611.00","$88,159.00",$787.13,"$22,131.97"
MIA - CHS,54168162296,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/54168162296,https://www.airlines-manager.com/aircraft/show/94886625,14:00,17:59,310,"$225,037.00","$199,045.00",$642.08,"$49,969.46"
MIA - CHS,54183441584,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/54183441584,https://www.airlines-manager.com/aircraft/show/94886629,20:45,0:44,289,"$202,418.00","$177,784.00",$615.17,"$44,631.97"
MIA - CID,54146711616,MIA-CID-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/54146711616,https://www.airlines-manager.com/aircraft/show/116789652,1:15,8:29,310,"$453,870.00","$416,411.00","$1,343.26","$57,568.34"
MIA - CID,54162072876,MIA-CID-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/54162072876,https://www.airlines-manager.com/aircraft/show/116789653,10:00,17:14,310,"$453,870.00","$416,411.00","$1,343.26","$57,568.34"
MIA - CID,54173399491,MIA-CID-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/54173399491,https://www.airlines-manager.com/aircraft/show/116789650,15:30,22:44,310,"$453,870.00","$416,411.00","$1,343.26","$57,568.34"
MIA - CID,54183441558,MIA-CID-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/54183441558,https://www.airlines-manager.com/aircraft/show/116789651,20:30,3:44,310,"$453,870.00","$416,411.00","$1,343.26","$57,568.34"
MIA - CLE,54146711523,MIA-COS-CVG 5,ERJ-175,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/54146711523,https://www.airlines-manager.com/aircraft/show/103534665,0:30,6:44,112,"$188,033.00","$164,249.00","$1,466.51","$26,350.11"
MIA - CLE,54146711524,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/54146711524,https://www.airlines-manager.com/aircraft/show/103684630,4:15,10:29,320,"$398,480.00","$357,223.00","$1,116.32","$57,308.50"
MIA - CLE,54156164581,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/54156164581,https://www.airlines-manager.com/aircraft/show/103365574,7:45,13:59,320,"$398,480.00","$357,223.00","$1,116.32","$57,308.50"
MIA - CLE,54168162170,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/54168162170,https://www.airlines-manager.com/aircraft/show/103684632,13:00,19:14,320,"$398,480.00","$357,223.00","$1,116.32","$57,308.50"
MIA - CLE,54183441587,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/54183441587,https://www.airlines-manager.com/aircraft/show/103684631,20:45,2:59,319,"$397,711.00","$356,483.00","$1,117.50","$57,189.79"
MIA - CLT,54146711959,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/54146711959,https://www.airlines-manager.com/aircraft/show/82543123,4:15,8:59,112,"$142,241.00","$118,334.00","$1,056.55","$25,000.14"
MIA - CLT,54162072961,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/54162072961,https://www.airlines-manager.com/aircraft/show/91600939,10:00,14:44,310,"$298,699.00","$260,750.00",$841.13,"$55,088.03"
MIA - CLT,54173399567,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/54173399567,https://www.airlines-manager.com/aircraft/show/91600936,16:00,20:44,310,"$298,699.00","$260,750.00",$841.13,"$55,088.03"
MIA - CLT,54178655348,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/54178655348,https://www.airlines-manager.com/aircraft/show/91600937,17:45,22:29,310,"$298,699.00","$260,750.00",$841.13,"$55,088.03"
MIA - CLT,54187257340,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/54187257340,https://www.airlines-manager.com/aircraft/show/91600935,22:30,3:14,310,"$298,699.00","$260,750.00",$841.13,"$55,088.03"
MIA - CLT,54187257341,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/54187257341,https://www.airlines-manager.com/aircraft/show/91600938,23:30,4:14,310,"$298,699.00","$260,750.00",$841.13,"$55,088.03"
MIA - CMH,54146711734,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/54146711734,https://www.airlines-manager.com/aircraft/show/88494374,1:45,7:44,320,"$372,456.00","$332,435.00","$1,038.86","$55,560.17"
MIA - CMH,54156164547,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/54156164547,https://www.airlines-manager.com/aircraft/show/88494378,7:15,13:14,320,"$372,456.00","$332,435.00","$1,038.86","$55,560.17"
MIA - CMH,54168162282,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/54168162282,https://www.airlines-manager.com/aircraft/show/91806233,14:00,19:59,320,"$372,456.00","$332,435.00","$1,038.86","$55,560.17"
MIA - CMH,54178655357,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/54178655357,https://www.airlines-manager.com/aircraft/show/110582842,18:00,23:59,198,"$282,748.00","$254,479.00","$1,285.25","$42,531.31"
MIA - CMH,54183441609,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/54183441609,https://www.airlines-manager.com/aircraft/show/88239556,21:00,2:59,320,"$372,456.00","$332,435.00","$1,038.86","$55,560.17"
MIA - CMN,54146711986,MIA 84B-4 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/54146711986,https://www.airlines-manager.com/aircraft/show/106676228,5:00,22:44,962,"$2,958,140.00","$2,699,471.00","$2,806.10","$152,225.81"
MIA - CMN,54183441565,MIA 84B-1 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/54183441565,https://www.airlines-manager.com/aircraft/show/106676225,20:30,14:14,961,"$2,951,838.00","$2,693,387.00","$2,802.69","$151,882.73"
MIA - COS,54146712024,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/54146712024,https://www.airlines-manager.com/aircraft/show/103684631,6:30,14:59,320,"$543,615.00","$492,225.00","$1,538.20","$58,022.59"
MIA - COS,54162072927,MIA-COS-CVG 5,ERJ-175,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/54162072927,https://www.airlines-manager.com/aircraft/show/103534665,10:00,18:44,112,"$256,350.00","$225,769.00","$2,015.79","$25,851.41"
MIA - COS,54168162248,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/54168162248,https://www.airlines-manager.com/aircraft/show/103684630,14:00,22:29,320,"$543,615.00","$492,225.00","$1,538.20","$58,022.59"
MIA - COS,54178655320,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/54178655320,https://www.airlines-manager.com/aircraft/show/103365574,17:30,1:59,320,"$543,615.00","$492,225.00","$1,538.20","$58,022.59"
MIA - COS,54187257382,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/54187257382,https://www.airlines-manager.com/aircraft/show/103684632,22:45,7:14,320,"$543,615.00","$492,225.00","$1,538.20","$58,022.59"
MIA - CPT,54146711989,MIA 84A-6 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/54146711989,https://www.airlines-manager.com/aircraft/show/93731916,5:00,10:29,1124,"$5,606,472.00","$5,211,864.00","$4,636.89","$950,491.91"
MIA - CPT,54178655386,MIA 84A-2 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/54178655386,https://www.airlines-manager.com/aircraft/show/93686968,18:00,23:29,1122,"$5,598,998.00","$5,204,866.00","$4,638.92","$949,215.68"
MIA - CUN,54146711996,MIA-PSP-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/54146711996,https://www.airlines-manager.com/aircraft/show/116789631,5:30,9:44,320,"$250,489.00","$215,136.00",$672.30,"$50,819.53"
MIA - CUN,54156164690,MIA-PSP-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/54156164690,https://www.airlines-manager.com/aircraft/show/116789634,9:30,13:44,320,"$250,489.00","$215,136.00",$672.30,"$50,819.53"
MIA - CUN,54162072902,MIA-PSP-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/54162072902,https://www.airlines-manager.com/aircraft/show/116789632,10:00,14:14,320,"$250,489.00","$215,136.00",$672.30,"$50,819.53"
MIA - CUN,54178655432,MIA-PSP-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/54178655432,https://www.airlines-manager.com/aircraft/show/116789633,18:45,22:59,320,"$250,489.00","$215,136.00",$672.30,"$50,819.53"
MIA - CUN,54187257267,MIA-PSP-BFF 5,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/54187257267,https://www.airlines-manager.com/aircraft/show/116789630,21:45,1:59,314,"$246,228.00","$210,982.00",$671.92,"$49,838.27"
MIA - CUR,54146711958,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/54146711958,https://www.airlines-manager.com/aircraft/show/107121797,4:15,10:59,320,"$413,130.00","$371,117.00","$1,159.74","$55,116.39"
MIA - CUR,54162073032,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/54162073032,https://www.airlines-manager.com/aircraft/show/107121796,11:00,17:44,320,"$413,130.00","$371,117.00","$1,159.74","$55,116.39"
MIA - CUR,54173399460,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/54173399460,https://www.airlines-manager.com/aircraft/show/107121799,15:00,21:44,320,"$413,130.00","$371,117.00","$1,159.74","$55,116.39"
MIA - CUR,54183441550,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/54183441550,https://www.airlines-manager.com/aircraft/show/107121795,20:15,2:59,320,"$413,130.00","$371,117.00","$1,159.74","$55,116.39"
MIA - CUR,54187257266,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/54187257266,https://www.airlines-manager.com/aircraft/show/107121798,21:45,4:29,294,"$382,852.00","$341,876.00","$1,162.84","$50,773.66"
MIA - CVG,54146711759,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/54146711759,https://www.airlines-manager.com/aircraft/show/103365574,2:00,7:44,320,"$367,096.00","$325,215.00","$1,016.30","$56,723.55"
MIA - CVG,54156164541,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/54156164541,https://www.airlines-manager.com/aircraft/show/103684632,7:15,12:59,320,"$367,096.00","$325,215.00","$1,016.30","$56,723.55"
MIA - CVG,54162072873,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/54162072873,https://www.airlines-manager.com/aircraft/show/107527976,10:00,15:44,0,"$96,826.00","$70,947.00",#DIV/0!,"$12,374.48"
MIA - CVG,54173399350,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/54173399350,https://www.airlines-manager.com/aircraft/show/103684631,15:00,20:44,320,"$367,096.00","$325,215.00","$1,016.30","$56,723.55"
MIA - CVG,54178655445,MIA-COS-CVG 5,ERJ-175,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/54178655445,https://www.airlines-manager.com/aircraft/show/103534665,18:45,0:29,112,"$173,197.00","$149,488.00","$1,334.71","$26,073.49"
MIA - CVG,54187257326,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/54187257326,https://www.airlines-manager.com/aircraft/show/103684630,22:30,4:14,320,"$367,096.00","$325,215.00","$1,016.30","$56,723.55"
MIA - DEN,54146711649,MIA-LAX-DEN 3,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/54146711649,https://www.airlines-manager.com/aircraft/show/91126651,1:30,9:59,400,"$727,404.00","$641,772.00","$1,604.43","$75,650.92"
MIA - DEN,54146711650,MIA-LAX-DEN 4,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/54146711650,https://www.airlines-manager.com/aircraft/show/91126652,3:30,11:59,400,"$727,404.00","$641,772.00","$1,604.43","$75,650.92"
MIA - DEN,54162073068,MIA-LAX-DEN 1,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/54162073068,https://www.airlines-manager.com/aircraft/show/91126649,11:00,19:29,400,"$727,404.00","$641,772.00","$1,604.43","$75,650.92"
MIA - DEN,54178655319,MIA-LAX-DEN 2,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/54178655319,https://www.airlines-manager.com/aircraft/show/91126650,17:30,1:59,400,"$727,404.00","$641,772.00","$1,604.43","$75,650.92"
MIA - DEN,54187257309,MIA-LAX-DEN 5 E,A319-100,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/54187257309,https://www.airlines-manager.com/aircraft/show/115181776,22:15,6:59,216,"$426,690.00","$370,298.00","$1,714.34","$42,400.53"
MIA - DFW,54146711901,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/54146711901,https://www.airlines-manager.com/aircraft/show/91600936,3:30,9:59,310,"$408,515.00","$352,594.00","$1,137.40","$54,384.68"
MIA - DFW,54162072893,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/54162072893,https://www.airlines-manager.com/aircraft/show/91600935,10:00,16:29,310,"$408,515.00","$352,594.00","$1,137.40","$54,384.68"
MIA - DFW,54162072894,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/54162072894,https://www.airlines-manager.com/aircraft/show/91600938,11:00,17:29,310,"$408,515.00","$352,594.00","$1,137.40","$54,384.68"
MIA - DFW,54173399516,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/54173399516,https://www.airlines-manager.com/aircraft/show/82543123,15:45,22:14,112,"$192,378.00","$156,871.00","$1,400.63","$24,196.04"
MIA - DFW,54183441650,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/54183441650,https://www.airlines-manager.com/aircraft/show/91600939,21:30,3:59,310,"$408,515.00","$352,594.00","$1,137.40","$54,384.68"
MIA - DFW,54187257335,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/54187257335,https://www.airlines-manager.com/aircraft/show/91600937,22:30,4:59,310,"$408,515.00","$352,594.00","$1,137.40","$54,384.68"
MIA - DSM,54146711851,MIA-DSM-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/54146711851,https://www.airlines-manager.com/aircraft/show/113101230,3:00,10:14,320,"$455,904.00","$412,875.00","$1,290.23","$57,079.49"
MIA - DSM,54156164663,MIA-DSM-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/54156164663,https://www.airlines-manager.com/aircraft/show/100049776,8:45,15:59,112,"$216,032.00","$190,648.00","$1,702.21","$26,356.87"
MIA - DSM,54168162136,MIA-DSM-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/54168162136,https://www.airlines-manager.com/aircraft/show/111064081,13:00,20:14,320,"$455,904.00","$412,875.00","$1,290.23","$57,079.49"
MIA - DSM,54173399532,MIA-DSM-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/54173399532,https://www.airlines-manager.com/aircraft/show/113101228,16:00,23:14,320,"$455,904.00","$412,875.00","$1,290.23","$57,079.49"
MIA - DSM,54183441556,MIA-DSM-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/54183441556,https://www.airlines-manager.com/aircraft/show/113101233,20:15,3:29,320,"$455,904.00","$412,875.00","$1,290.23","$57,079.49"
MIA - DSS,54146711433,MIA 84B-7 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/54146711433,https://www.airlines-manager.com/aircraft/show/106676231,0:00,16:59,962,"$2,849,310.00","$2,603,298.00","$2,706.13","$153,285.46"
MIA - DSS,54168162077,MIA 84B-3 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/54168162077,https://www.airlines-manager.com/aircraft/show/106676227,12:00,4:59,961,"$2,847,052.00","$2,601,180.00","$2,706.74","$153,160.75"
MIA - DTW,54146711690,MIA-PDX-DTW 3,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/54146711690,https://www.airlines-manager.com/aircraft/show/89943713,1:30,7:59,320,"$411,222.00","$358,900.00","$1,121.56","$55,357.33"
MIA - DTW,54146711691,MIA-PDX-DTW 4,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/54146711691,https://www.airlines-manager.com/aircraft/show/89943712,2:30,8:59,320,"$411,222.00","$358,900.00","$1,121.56","$55,357.33"
MIA - DTW,54162072943,MIA-PDX-DTW 2,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/54162072943,https://www.airlines-manager.com/aircraft/show/89943714,10:00,16:29,320,"$411,222.00","$358,900.00","$1,121.56","$55,357.33"
MIA - DTW,54168162299,MIA-PDX-DTW 5,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/54168162299,https://www.airlines-manager.com/aircraft/show/89943711,14:00,20:29,320,"$411,222.00","$358,900.00","$1,121.56","$55,357.33"
MIA - DTW,54187257263,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/54187257263,https://www.airlines-manager.com/aircraft/show/107577220,21:45,4:14,0,"$108,921.00","$76,799.00",$0.00,"$11,845.60"
MIA - DTW,54187257264,MIA-PDX-DTW 1,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/54187257264,https://www.airlines-manager.com/aircraft/show/89943715,22:30,4:59,320,"$411,222.00","$358,900.00","$1,121.56","$55,357.33"
MIA - ELP,54156164620,MIA-ELP-MCI 5 B,A319-100,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/54156164620,https://www.airlines-manager.com/aircraft/show/105093924,8:15,16:44,198,"$401,184.00","$365,173.00","$1,844.31","$43,045.93"
MIA - ELP,54162072857,MIA-ELP-MCI 1,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/54162072857,https://www.airlines-manager.com/aircraft/show/91806234,10:00,18:29,320,"$531,824.00","$481,715.00","$1,505.36","$56,783.69"
MIA - ELP,54173399575,MIA-ELP-MCI 3,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/54173399575,https://www.airlines-manager.com/aircraft/show/91806232,16:15,0:44,320,"$531,824.00","$481,715.00","$1,505.36","$56,783.69"
MIA - ELP,54178655232,MIA-ELP-MCI 4,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/54178655232,https://www.airlines-manager.com/aircraft/show/91806231,17:00,1:29,320,"$531,824.00","$481,715.00","$1,505.36","$56,783.69"
MIA - ELP,54187257411,MIA-ELP-MCI 2,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/54187257411,https://www.airlines-manager.com/aircraft/show/91806235,23:15,7:44,319,"$528,801.00","$478,758.00","$1,500.81","$56,435.13"
MIA - FAR,54146711537,MIA-FAR-TUL 3,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/54146711537,https://www.airlines-manager.com/aircraft/show/110883161,0:45,9:29,320,"$546,219.00","$497,397.00","$1,554.37","$56,953.85"
MIA - FAR,54156164550,MIA-FAR-TUL 4,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/54156164550,https://www.airlines-manager.com/aircraft/show/110883162,7:15,15:59,320,"$546,219.00","$497,397.00","$1,554.37","$56,953.85"
MIA - FAR,54162073012,MIA-FAR-TUL 1,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/54162073012,https://www.airlines-manager.com/aircraft/show/110883159,11:00,19:44,320,"$546,219.00","$497,397.00","$1,554.37","$56,953.85"
MIA - FAR,54173399537,MIA-FAR-TUL 2,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/54173399537,https://www.airlines-manager.com/aircraft/show/110883160,16:00,0:44,320,"$546,219.00","$497,397.00","$1,554.37","$56,953.85"
MIA - FAR,54178655401,MIA-FAR-TUL 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/54178655401,https://www.airlines-manager.com/aircraft/show/87169421,18:15,2:59,112,"$257,649.00","$228,235.00","$2,037.81","$26,133.78"
MIA - FAT,54156164635,MIA-FAT-MSO 4,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/54156164635,https://www.airlines-manager.com/aircraft/show/113101232,8:30,19:59,320,"$722,280.00","$662,066.00","$2,068.96","$57,654.51"
MIA - FAT,54162073007,MIA-FAT-MSO 1,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/54162073007,https://www.airlines-manager.com/aircraft/show/113101229,11:00,22:29,320,"$722,280.00","$662,066.00","$2,068.96","$57,654.51"
MIA - FAT,54178655450,MIA-FAT-MSO 2,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/54178655450,https://www.airlines-manager.com/aircraft/show/113101231,19:00,6:29,320,"$722,280.00","$662,066.00","$2,068.96","$57,654.51"
MIA - FAT,54187257305,MIA-FAT-MSO 3,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/54187257305,https://www.airlines-manager.com/aircraft/show/113101234,22:15,9:44,319,"$718,209.00","$658,093.00","$2,062.99","$57,308.53"
MIA - FPO,54146711471,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/54146711471,https://www.airlines-manager.com/aircraft/show/107121796,0:15,2:44,320,"$83,963.00","$59,322.00",$185.38,"$23,888.05"
MIA - FPO,54146711472,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/54146711472,https://www.airlines-manager.com/aircraft/show/107121799,4:15,6:44,320,"$83,963.00","$59,322.00",$185.38,"$23,888.05"
MIA - FPO,54156164692,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/54156164692,https://www.airlines-manager.com/aircraft/show/107121795,9:30,11:59,320,"$83,963.00","$59,322.00",$185.38,"$23,888.05"
MIA - FPO,54162073030,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/54162073030,https://www.airlines-manager.com/aircraft/show/107121798,11:00,13:29,320,"$83,963.00","$59,322.00",$185.38,"$23,888.05"
MIA - FPO,54178655322,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/54178655322,https://www.airlines-manager.com/aircraft/show/107121797,17:30,19:59,198,"$59,917.00","$35,691.00",$180.26,"$14,372.21"
MIA - FSD,54146711569,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/54146711569,https://www.airlines-manager.com/aircraft/show/110883110,1:00,8:59,310,"$501,538.00","$460,205.00","$1,484.53","$57,645.72"
MIA - FSD,54146711570,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/54146711570,https://www.airlines-manager.com/aircraft/show/110883113,2:45,10:44,310,"$501,538.00","$460,205.00","$1,484.53","$57,645.72"
MIA - FSD,54168162253,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/54168162253,https://www.airlines-manager.com/aircraft/show/110883112,14:00,21:59,310,"$501,538.00","$460,205.00","$1,484.53","$57,645.72"
MIA - FSD,54173399574,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/54173399574,https://www.airlines-manager.com/aircraft/show/110883111,16:15,0:14,310,"$501,538.00","$460,205.00","$1,484.53","$57,645.72"
MIA - FSD,54187257294,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/54187257294,https://www.airlines-manager.com/aircraft/show/104353572,22:00,5:59,92,"$217,530.00","$191,371.00","$2,080.12","$23,971.32"
MIA - GRR,54146711434,MIA-RAP-GRR 5,ERJ-175,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/54146711434,https://www.airlines-manager.com/aircraft/show/116042630,0:00,6:44,112,"$199,811.00","$175,319.00","$1,565.35","$26,037.48"
MIA - GRR,54146711435,MIA-RAP-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/54146711435,https://www.airlines-manager.com/aircraft/show/116789623,2:15,8:59,320,"$423,112.00","$381,221.00","$1,191.32","$56,616.98"
MIA - GRR,54162072888,MIA-RAP-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/54162072888,https://www.airlines-manager.com/aircraft/show/116789624,10:00,16:44,320,"$423,112.00","$381,221.00","$1,191.32","$56,616.98"
MIA - GRR,54168162060,MIA-RAP-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/54168162060,https://www.airlines-manager.com/aircraft/show/116789622,12:00,18:44,320,"$423,112.00","$381,221.00","$1,191.32","$56,616.98"
MIA - GRR,54178655464,MIA-RAP-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/54178655464,https://www.airlines-manager.com/aircraft/show/116789625,19:00,1:44,320,"$423,112.00","$381,221.00","$1,191.32","$56,616.98"
MIA - HAV,54146711987,MIA-PDX-DTW 1,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/54146711987,https://www.airlines-manager.com/aircraft/show/89943715,5:00,7:59,320,"$131,414.00","$101,607.00",$317.52,"$34,058.21"
MIA - HAV,54156164669,MIA-PDX-DTW 4,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/54156164669,https://www.airlines-manager.com/aircraft/show/89943712,9:00,11:59,320,"$131,414.00","$101,607.00",$317.52,"$34,058.21"
MIA - HAV,54162072944,MIA-PDX-DTW 3,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/54162072944,https://www.airlines-manager.com/aircraft/show/89943713,10:00,12:59,320,"$131,414.00","$101,607.00",$317.52,"$34,058.21"
MIA - HAV,54173399582,MIA-PDX-DTW 2,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/54173399582,https://www.airlines-manager.com/aircraft/show/89943714,16:30,19:29,320,"$131,414.00","$101,607.00",$317.52,"$34,058.21"
MIA - HAV,54183441577,MIA-PDX-DTW 5,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/54183441577,https://www.airlines-manager.com/aircraft/show/89943711,20:30,23:29,288,"$119,825.00","$90,271.00",$313.44,"$30,258.44"
MIA - IAD,54146711957,MIA-IAD-TUS 2,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/54146711957,https://www.airlines-manager.com/aircraft/show/97556720,4:15,9:59,310,"$360,640.00","$321,339.00","$1,036.58","$56,047.50"
MIA - IAD,54156164542,MIA-IAD-TUS 5,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/54156164542,https://www.airlines-manager.com/aircraft/show/97556716,7:15,12:59,310,"$360,640.00","$321,339.00","$1,036.58","$56,047.50"
MIA - IAD,54162072942,MIA-IAD-TUS 1,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/54162072942,https://www.airlines-manager.com/aircraft/show/97556721,10:00,15:44,310,"$360,640.00","$321,339.00","$1,036.58","$56,047.50"
MIA - IAD,54168162195,MIA-IAD-TUS 4,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/54168162195,https://www.airlines-manager.com/aircraft/show/97556718,13:00,18:44,310,"$360,640.00","$321,339.00","$1,036.58","$56,047.50"
MIA - IAD,54178655429,MIA-IAD-TUS 3,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/54178655429,https://www.airlines-manager.com/aircraft/show/97556719,18:45,0:29,310,"$360,640.00","$321,339.00","$1,036.58","$56,047.50"
MIA - IAD,54183441656,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/54183441656,https://www.airlines-manager.com/aircraft/show/107527976,21:30,3:14,0,"$96,372.00","$69,073.00",$0.00,"$12,047.62"
MIA - ICT,54146711796,MIA-FAR-TUL 1,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/54146711796,https://www.airlines-manager.com/aircraft/show/110883159,2:30,9:29,320,"$446,928.00","$403,611.00","$1,261.28","$57,796.32"
MIA - ICT,54156164671,MIA-FAR-TUL 2,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/54156164671,https://www.airlines-manager.com/aircraft/show/110883160,9:00,15:59,320,"$446,928.00","$403,611.00","$1,261.28","$57,796.32"
MIA - ICT,54162073010,MIA-FAR-TUL 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/54162073010,https://www.airlines-manager.com/aircraft/show/87169421,11:00,18:14,112,"$212,522.00","$187,091.00","$1,670.46","$25,865.12"
MIA - ICT,54178655345,MIA-FAR-TUL 3,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/54178655345,https://www.airlines-manager.com/aircraft/show/110883161,17:45,0:44,320,"$446,928.00","$403,611.00","$1,261.28","$57,796.32"
MIA - ICT,54187257363,MIA-FAR-TUL 4,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/54187257363,https://www.airlines-manager.com/aircraft/show/110883162,22:45,5:44,320,"$446,928.00","$403,611.00","$1,261.28","$57,796.32"
MIA - IND,54146711797,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/54146711797,https://www.airlines-manager.com/aircraft/show/82323689,2:30,8:29,112,"$180,919.00","$157,231.00","$1,403.85","$26,278.16"
MIA - IND,54146711798,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/54146711798,https://www.airlines-manager.com/aircraft/show/99920623,3:15,9:14,320,"$382,687.00","$341,268.00","$1,066.46","$57,036.43"
MIA - IND,54162072933,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/54162072933,https://www.airlines-manager.com/aircraft/show/99920624,10:00,15:59,320,"$382,687.00","$341,268.00","$1,066.46","$57,036.43"
MIA - IND,54173399557,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/54173399557,https://www.airlines-manager.com/aircraft/show/99920625,16:00,21:59,320,"$382,687.00","$341,268.00","$1,066.46","$57,036.43"
MIA - IND,54187257330,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/54187257330,https://www.airlines-manager.com/aircraft/show/99920626,22:30,4:29,320,"$382,687.00","$341,268.00","$1,066.46","$57,036.43"
MIA - JAN,54146711997,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/54146711997,https://www.airlines-manager.com/aircraft/show/114912307,5:30,10:29,112,"$149,512.00","$130,617.00","$1,166.22","$26,210.77"
MIA - JAN,54156164628,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/54156164628,https://www.airlines-manager.com/aircraft/show/115493373,8:30,13:29,310,"$314,276.00","$284,944.00",$919.17,"$57,179.40"
MIA - JAN,54168162264,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/54168162264,https://www.airlines-manager.com/aircraft/show/115493370,14:00,18:59,310,"$314,276.00","$284,944.00",$919.17,"$57,179.40"
MIA - JAN,54183441551,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/54183441551,https://www.airlines-manager.com/aircraft/show/115493371,20:15,1:14,310,"$314,276.00","$284,944.00",$919.17,"$57,179.40"
MIA - JAN,54187257346,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/54187257346,https://www.airlines-manager.com/aircraft/show/115493372,22:30,3:29,252,"$279,758.00","$251,606.00",$998.44,"$50,489.50"
MIA - JAX,54146711858,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/54146711858,https://www.airlines-manager.com/aircraft/show/103684631,3:00,6:29,320,"$173,694.00","$144,655.00",$452.05,"$41,527.75"
MIA - JAX,54162072983,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/54162072983,https://www.airlines-manager.com/aircraft/show/103684630,10:30,13:59,320,"$173,694.00","$144,655.00",$452.05,"$41,527.75"
MIA - JAX,54168162252,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/54168162252,https://www.airlines-manager.com/aircraft/show/103365574,14:00,17:29,320,"$173,694.00","$144,655.00",$452.05,"$41,527.75"
MIA - JAX,54178655479,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/54178655479,https://www.airlines-manager.com/aircraft/show/103684632,19:15,22:44,320,"$173,694.00","$144,655.00",$452.05,"$41,527.75"
MIA - JAX,54187257300,MIA-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/54187257300,https://www.airlines-manager.com/aircraft/show/106339154,22:15,1:44,197,"$131,371.00","$111,488.00",$565.93,"$32,006.12"
MIA - JFK,54146712010,MIA-JFK-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/54146712010,https://www.airlines-manager.com/aircraft/show/105308264,5:45,11:59,338,"$428,918.00","$376,442.00","$1,113.73","$60,391.76"
MIA - JFK,54146712011,MIA-JFK-PHX 6,ERJ-175,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/54146712011,https://www.airlines-manager.com/aircraft/show/82683137,6:45,12:59,112,"$187,062.00","$152,852.00","$1,364.75","$24,521.71"
MIA - JFK,54162072865,MIA-JFK-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/54162072865,https://www.airlines-manager.com/aircraft/show/105308267,10:00,16:14,338,"$428,918.00","$376,442.00","$1,113.73","$60,391.76"
MIA - JFK,54168162070,MIA-JFK-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/54168162070,https://www.airlines-manager.com/aircraft/show/105308265,12:00,18:14,338,"$428,918.00","$376,442.00","$1,113.73","$60,391.76"
MIA - JFK,54178655377,MIA-JFK-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/54178655377,https://www.airlines-manager.com/aircraft/show/105308266,18:00,0:14,338,"$428,918.00","$376,442.00","$1,113.73","$60,391.76"
MIA - JFK,54183441588,MIA-JFK-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/54183441588,https://www.airlines-manager.com/aircraft/show/105308268,20:45,2:59,337,"$428,156.00","$375,705.00","$1,114.85","$60,273.53"
MIA - JNB,54146711411,MIA 84A-4 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/54146711411,https://www.airlines-manager.com/aircraft/show/93686966,0:00,6:44,1124,"$6,002,780.00","$5,569,148.00","$4,954.76","$827,101.19"
MIA - JNB,54168162207,MIA 84A-7 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/54168162207,https://www.airlines-manager.com/aircraft/show/93776641,13:00,19:44,1122,"$5,992,787.00","$5,559,717.00","$4,955.18","$825,700.54"
MIA - LAS,54146711664,MIA-LAS-SEA 5,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/54146711664,https://www.airlines-manager.com/aircraft/show/105093929,1:30,11:59,338,"$716,711.00","$649,535.00","$1,921.70","$61,958.82"
MIA - LAS,54162072859,MIA-LAS-SEA 1,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/54162072859,https://www.airlines-manager.com/aircraft/show/105093925,10:00,20:29,338,"$716,711.00","$649,535.00","$1,921.70","$61,958.82"
MIA - LAS,54168162090,MIA-LAS-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/54168162090,https://www.airlines-manager.com/aircraft/show/113251304,12:00,22:29,198,"$496,976.00","$440,972.00","$2,227.13","$42,064.10"
MIA - LAS,54168162091,MIA-LAS-SEA 2,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/54168162091,https://www.airlines-manager.com/aircraft/show/105093926,13:00,23:29,338,"$716,711.00","$649,535.00","$1,921.70","$61,958.82"
MIA - LAS,54173399477,MIA-LAS-SEA 3,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/54173399477,https://www.airlines-manager.com/aircraft/show/105093927,15:00,1:29,338,"$716,711.00","$649,535.00","$1,921.70","$61,958.82"
MIA - LAS,54187257336,MIA-LAS-SEA 4,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/54187257336,https://www.airlines-manager.com/aircraft/show/105093928,22:30,8:59,338,"$716,711.00","$649,535.00","$1,921.70","$61,958.82"
MIA - LAX,54146711379,MIA-LAX-DEN 1,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/54146711379,https://www.airlines-manager.com/aircraft/show/91126649,0:00,10:59,400,"$917,458.00","$823,986.00","$2,059.97","$75,021.49"
MIA - LAX,54146711380,MIA-LAX-DEN 2,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/54146711380,https://www.airlines-manager.com/aircraft/show/91126650,2:00,12:59,400,"$917,458.00","$823,986.00","$2,059.97","$75,021.49"
MIA - LAX,54162072891,MIA-LAX-DEN 3,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/54162072891,https://www.airlines-manager.com/aircraft/show/91126651,10:00,20:59,400,"$917,458.00","$823,986.00","$2,059.97","$75,021.49"
MIA - LAX,54162072892,MIA-LAX-DEN 5 E,A319-100,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/54162072892,https://www.airlines-manager.com/aircraft/show/115181776,11:00,22:14,216,"$537,212.00","$475,849.00","$2,203.00","$42,360.45"
MIA - LAX,54173399578,MIA-LAX-DEN 4,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/54173399578,https://www.airlines-manager.com/aircraft/show/91126652,16:30,3:29,399,"$913,640.00","$820,259.00","$2,055.79","$74,682.15"
MIA - LEX,54146711848,MIA-CID-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/54146711848,https://www.airlines-manager.com/aircraft/show/116789653,3:00,8:29,310,"$348,601.00","$317,916.00","$1,025.54","$57,978.60"
MIA - LEX,54162072919,MIA-CID-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/54162072919,https://www.airlines-manager.com/aircraft/show/116789650,10:00,15:29,310,"$348,601.00","$317,916.00","$1,025.54","$57,978.60"
MIA - LEX,54173399411,MIA-CID-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/54173399411,https://www.airlines-manager.com/aircraft/show/116789651,15:00,20:29,310,"$348,601.00","$317,916.00","$1,025.54","$57,978.60"
MIA - LEX,54183441487,MIA-CID-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/54183441487,https://www.airlines-manager.com/aircraft/show/116789652,19:45,1:14,299,"$341,355.00","$310,936.00","$1,039.92","$56,705.65"
MIA - LIT,54146711775,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/54146711775,https://www.airlines-manager.com/aircraft/show/96692674,2:15,7:59,310,"$360,566.00","$328,179.00","$1,058.64","$57,240.52"
MIA - LIT,54146711776,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/54146711776,https://www.airlines-manager.com/aircraft/show/105601657,4:15,9:59,112,"$171,082.00","$150,007.00","$1,339.35","$26,164.01"
MIA - LIT,54156164615,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/54156164615,https://www.airlines-manager.com/aircraft/show/94886625,8:15,13:59,310,"$360,566.00","$328,179.00","$1,058.64","$57,240.52"
MIA - LIT,54173399467,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/54173399467,https://www.airlines-manager.com/aircraft/show/94886629,15:00,20:44,310,"$360,566.00","$328,179.00","$1,058.64","$57,240.52"
MIA - LIT,54183441651,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/54183441651,https://www.airlines-manager.com/aircraft/show/94886626,21:30,3:14,303,"$355,770.00","$323,564.00","$1,067.87","$56,435.58"
MIA - LOS,54146712025,MIA 84A-5 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/54146712025,https://www.airlines-manager.com/aircraft/show/93704215,6:45,4:59,1124,"$4,253,118.00","$3,953,671.00","$3,517.50","$177,826.28"
MIA - LOS,54183441475,MIA 84A-1 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/54183441475,https://www.airlines-manager.com/aircraft/show/93686969,19:45,17:59,1114,"$4,191,396.00","$3,894,480.00","$3,495.94","$175,164.02"
MIA - MBJ,54146711552,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/54146711552,https://www.airlines-manager.com/aircraft/show/104034460,0:45,4:59,228,"$191,738.00","$170,412.00",$747.42,"$40,254.80"
MIA - MBJ,54146711553,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/54146711553,https://www.airlines-manager.com/aircraft/show/104034461,5:00,9:14,228,"$191,738.00","$170,412.00",$747.42,"$40,254.80"
MIA - MBJ,54156164679,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/54156164679,https://www.airlines-manager.com/aircraft/show/107577220,9:00,13:14,0,"$65,799.00","$47,711.00",#DIV/0!,"$11,270.31"
MIA - MBJ,54162072912,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/54162072912,https://www.airlines-manager.com/aircraft/show/104034459,10:00,14:14,228,"$191,738.00","$170,412.00",$747.42,"$40,254.80"
MIA - MBJ,54168162124,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/54168162124,https://www.airlines-manager.com/aircraft/show/104034457,12:45,16:59,228,"$191,738.00","$170,412.00",$747.42,"$40,254.80"
MIA - MBJ,54178655269,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/54178655269,https://www.airlines-manager.com/aircraft/show/104034458,17:00,21:14,228,"$191,738.00","$170,412.00",$747.42,"$40,254.80"
MIA - MBJ,54187257390,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/54187257390,https://www.airlines-manager.com/aircraft/show/99326789,23:00,3:14,228,"$191,738.00","$170,412.00",$747.42,"$40,254.80"
MIA - MCI,54146711538,MIA-ELP-MCI 3,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/54146711538,https://www.airlines-manager.com/aircraft/show/91806232,0:45,7:44,320,"$446,817.00","$401,234.00","$1,253.86","$57,455.94"
MIA - MCI,54146711539,MIA-ELP-MCI 4,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/54146711539,https://www.airlines-manager.com/aircraft/show/91806231,1:30,8:29,320,"$446,817.00","$401,234.00","$1,253.86","$57,455.94"
MIA - MCI,54162072856,MIA-ELP-MCI 2,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/54162072856,https://www.airlines-manager.com/aircraft/show/91806235,10:00,16:59,320,"$446,817.00","$401,234.00","$1,253.86","$57,455.94"
MIA - MCI,54178655405,MIA-ELP-MCI 1,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/54178655405,https://www.airlines-manager.com/aircraft/show/91806234,18:30,1:29,320,"$446,817.00","$401,234.00","$1,253.86","$57,455.94"
MIA - MCI,54178655406,MIA-ELP-MCI 5 B,A319-100,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/54178655406,https://www.airlines-manager.com/aircraft/show/105093924,19:00,1:59,197,"$336,362.00","$304,020.00","$1,543.25","$43,535.08"
MIA - MCO,54146711460,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/54146711460,https://www.airlines-manager.com/aircraft/show/107763565,0:15,2:59,320,"$122,006.00","$84,784.00",$264.95,"$31,018.54"
MIA - MCO,54146711461,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/54146711461,https://www.airlines-manager.com/aircraft/show/107467213,4:00,6:44,112,"$54,851.00","$35,679.00",$318.56,"$13,053.29"
MIA - MCO,54146711462,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/54146711462,https://www.airlines-manager.com/aircraft/show/103534663,6:00,8:44,112,"$54,851.00","$35,679.00",$318.56,"$13,053.29"
MIA - MCO,54156164687,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/54156164687,https://www.airlines-manager.com/aircraft/show/103534663,9:15,11:59,112,"$54,851.00","$35,679.00",$318.56,"$13,053.29"
MIA - MCO,54162072871,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/54162072871,https://www.airlines-manager.com/aircraft/show/107763566,10:00,12:44,320,"$122,006.00","$84,784.00",$264.95,"$31,018.54"
MIA - MCO,54162072872,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/54162072872,https://www.airlines-manager.com/aircraft/show/107763561,11:00,13:44,320,"$122,006.00","$84,784.00",$264.95,"$31,018.54"
MIA - MCO,54178655340,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/54178655340,https://www.airlines-manager.com/aircraft/show/107763562,17:45,20:29,320,"$122,006.00","$84,784.00",$264.95,"$31,018.54"
MIA - MEM,54146711418,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/54146711418,https://www.airlines-manager.com/aircraft/show/110582842,0:00,5:29,198,"$262,187.00","$234,418.00","$1,183.93","$42,751.00"
MIA - MEM,54146711419,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/54146711419,https://www.airlines-manager.com/aircraft/show/88239556,3:00,8:29,320,"$345,253.00","$305,664.00",$955.20,"$55,744.19"
MIA - MEM,54156164586,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/54156164586,https://www.airlines-manager.com/aircraft/show/88494374,7:45,13:14,320,"$345,253.00","$305,664.00",$955.20,"$55,744.19"
MIA - MEM,54168162281,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/54168162281,https://www.airlines-manager.com/aircraft/show/88494378,14:00,19:29,320,"$345,253.00","$305,664.00",$955.20,"$55,744.19"
MIA - MEM,54183441530,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/54183441530,https://www.airlines-manager.com/aircraft/show/91806233,20:00,1:29,320,"$345,253.00","$305,664.00",$955.20,"$55,744.19"
MIA - MHT,54146711647,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/54146711647,https://www.airlines-manager.com/aircraft/show/115493371,1:15,8:14,310,"$452,295.00","$414,040.00","$1,335.61","$59,289.74"
MIA - MHT,54146711648,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/54146711648,https://www.airlines-manager.com/aircraft/show/115493372,3:30,10:29,310,"$452,295.00","$414,040.00","$1,335.61","$59,289.74"
MIA - MHT,54162072999,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/54162072999,https://www.airlines-manager.com/aircraft/show/114912307,11:00,17:59,112,"$213,633.00","$188,436.00","$1,682.46","$26,983.68"
MIA - MHT,54168162262,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/54168162262,https://www.airlines-manager.com/aircraft/show/115493373,14:00,20:59,310,"$452,295.00","$414,040.00","$1,335.61","$59,289.74"
MIA - MHT,54178655461,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/54178655461,https://www.airlines-manager.com/aircraft/show/115493370,19:00,1:59,310,"$452,295.00","$414,040.00","$1,335.61","$59,289.74"
MIA - MKE,54146711469,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/54146711469,https://www.airlines-manager.com/aircraft/show/88494378,0:15,7:14,320,"$446,482.00","$402,355.00","$1,257.36","$57,616.47"
MIA - MKE,54146711470,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/54146711470,https://www.airlines-manager.com/aircraft/show/91806233,6:15,13:14,320,"$446,482.00","$402,355.00","$1,257.36","$57,616.47"
MIA - MKE,54162073014,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/54162073014,https://www.airlines-manager.com/aircraft/show/110582842,11:00,17:59,198,"$337,620.00","$306,185.00","$1,546.39","$43,845.11"
MIA - MKE,54168162283,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/54168162283,https://www.airlines-manager.com/aircraft/show/88239556,14:00,20:59,320,"$446,482.00","$402,355.00","$1,257.36","$57,616.47"
MIA - MKE,54178655438,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/54178655438,https://www.airlines-manager.com/aircraft/show/88494374,18:45,1:44,320,"$446,482.00","$402,355.00","$1,257.36","$57,616.47"
MIA - MSN,54146711729,MIA-RAP-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/54146711729,https://www.airlines-manager.com/aircraft/show/116789625,1:45,8:59,320,"$449,929.00","$407,356.00","$1,272.99","$56,316.50"
MIA - MSN,54156164583,MIA-RAP-GRR 5,ERJ-175,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/54156164583,https://www.airlines-manager.com/aircraft/show/116042630,7:45,14:59,112,"$213,319.00","$188,237.00","$1,680.69","$26,023.55"
MIA - MSN,54162072926,MIA-RAP-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/54162072926,https://www.airlines-manager.com/aircraft/show/116789623,10:00,17:14,320,"$449,929.00","$407,356.00","$1,272.99","$56,316.50"
MIA - MSN,54173399596,MIA-RAP-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/54173399596,https://www.airlines-manager.com/aircraft/show/116789624,16:45,23:59,320,"$449,929.00","$407,356.00","$1,272.99","$56,316.50"
MIA - MSN,54178655441,MIA-RAP-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/54178655441,https://www.airlines-manager.com/aircraft/show/116789622,18:45,1:59,320,"$449,929.00","$407,356.00","$1,272.99","$56,316.50"
MIA - MSO,54156164585,MIA-FAT-MSO 2,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/54156164585,https://www.airlines-manager.com/aircraft/show/113101231,7:45,18:59,320,"$697,127.00","$638,148.00","$1,994.21","$56,808.43"
MIA - MSO,54162073006,MIA-FAT-MSO 3,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/54162073006,https://www.airlines-manager.com/aircraft/show/113101234,11:00,22:14,320,"$697,127.00","$638,148.00","$1,994.21","$56,808.43"
MIA - MSO,54183441510,MIA-FAT-MSO 4,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/54183441510,https://www.airlines-manager.com/aircraft/show/113101232,20:00,7:14,320,"$697,127.00","$638,148.00","$1,994.21","$56,808.43"
MIA - MSO,54187257345,MIA-FAT-MSO 1,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/54187257345,https://www.airlines-manager.com/aircraft/show/113101229,22:30,9:44,320,"$697,127.00","$638,148.00","$1,994.21","$56,808.43"
MIA - MSP,54146711746,MIA-JFK-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/54146711746,https://www.airlines-manager.com/aircraft/show/105308267,2:00,9:59,338,"$541,729.00","$493,047.00","$1,458.72","$61,759.54"
MIA - MSP,54146711747,MIA-JFK-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/54146711747,https://www.airlines-manager.com/aircraft/show/105308268,3:00,10:59,338,"$541,729.00","$493,047.00","$1,458.72","$61,759.54"
MIA - MSP,54162072866,MIA-JFK-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/54162072866,https://www.airlines-manager.com/aircraft/show/105308266,10:00,17:59,338,"$541,729.00","$493,047.00","$1,458.72","$61,759.54"
MIA - MSP,54168162155,MIA-JFK-PHX 6,ERJ-175,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/54168162155,https://www.airlines-manager.com/aircraft/show/82683137,13:00,20:59,112,"$236,027.00","$203,069.00","$1,813.12","$25,436.62"
MIA - MSP,54178655388,MIA-JFK-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/54178655388,https://www.airlines-manager.com/aircraft/show/105308265,18:15,2:14,338,"$541,729.00","$493,047.00","$1,458.72","$61,759.54"
MIA - MSP,54187257258,MIA-JFK-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/54187257258,https://www.airlines-manager.com/aircraft/show/105308264,21:45,5:44,338,"$541,729.00","$493,047.00","$1,458.72","$61,759.54"
MIA - MSY,54146711669,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/54146711669,https://www.airlines-manager.com/aircraft/show/91806233,1:30,6:14,320,"$300,043.00","$264,920.00",$827.88,"$55,969.01"
MIA - MSY,54146711670,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/54146711670,https://www.airlines-manager.com/aircraft/show/110582842,5:30,10:14,198,"$228,739.00","$204,246.00","$1,031.55","$43,150.56"
MIA - MSY,54156164645,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/54156164645,https://www.airlines-manager.com/aircraft/show/88239556,8:30,13:14,320,"$300,043.00","$264,920.00",$827.88,"$55,969.01"
MIA - MSY,54168162286,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/54168162286,https://www.airlines-manager.com/aircraft/show/88494374,14:00,18:44,320,"$300,043.00","$264,920.00",$827.88,"$55,969.01"
MIA - MSY,54183441446,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/54183441446,https://www.airlines-manager.com/aircraft/show/88494378,19:30,0:14,320,"$300,043.00","$264,920.00",$827.88,"$55,969.01"
MIA - NAS,54146711781,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/54146711781,https://www.airlines-manager.com/aircraft/show/104034461,2:15,4:59,228,"$78,591.00","$60,620.00",$265.88,"$22,178.05"
MIA - NAS,54156164567,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/54156164567,https://www.airlines-manager.com/aircraft/show/99326789,7:30,10:14,228,"$78,591.00","$60,620.00",$265.88,"$22,178.05"
MIA - NAS,54162072914,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/54162072914,https://www.airlines-manager.com/aircraft/show/104034457,10:00,12:44,228,"$78,591.00","$60,620.00",$265.88,"$22,178.05"
MIA - NAS,54168162223,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/54168162223,https://www.airlines-manager.com/aircraft/show/107577220,13:15,15:59,0,"$34,003.00","$19,794.00",#DIV/0!,"$7,241.71"
MIA - NAS,54168162224,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/54168162224,https://www.airlines-manager.com/aircraft/show/104034458,14:15,16:59,228,"$78,591.00","$60,620.00",$265.88,"$22,178.05"
MIA - NAS,54178655415,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/54178655415,https://www.airlines-manager.com/aircraft/show/104034459,18:30,21:14,228,"$78,591.00","$60,620.00",$265.88,"$22,178.05"
MIA - NAS,54187257285,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/54187257285,https://www.airlines-manager.com/aircraft/show/104034460,22:00,0:44,227,"$78,384.00","$60,419.00",$266.16,"$22,104.51"
MIA - OAK,54146711603,MIA-OAK-SMF 5,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/54146711603,https://www.airlines-manager.com/aircraft/show/91198617,1:00,12:59,320,"$737,460.00","$671,568.00","$2,098.65","$56,041.84"
MIA - OAK,54162073055,MIA-OAK-SMF 1,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/54162073055,https://www.airlines-manager.com/aircraft/show/91198615,11:00,22:59,320,"$737,460.00","$671,568.00","$2,098.65","$56,041.84"
MIA - OAK,54168162164,MIA-OAK-SMF 2,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/54168162164,https://www.airlines-manager.com/aircraft/show/91198619,13:00,0:59,320,"$737,460.00","$671,568.00","$2,098.65","$56,041.84"
MIA - OAK,54173399394,MIA-OAK-SMF 3,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/54173399394,https://www.airlines-manager.com/aircraft/show/91198616,15:00,2:59,320,"$737,460.00","$671,568.00","$2,098.65","$56,041.84"
MIA - OAK,54187257400,MIA-OAK-SMF 4,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/54187257400,https://www.airlines-manager.com/aircraft/show/91198618,23:00,10:59,320,"$737,460.00","$671,568.00","$2,098.65","$56,041.84"
MIA - OKC,54146711732,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/54146711732,https://www.airlines-manager.com/aircraft/show/110883112,1:45,8:29,310,"$430,426.00","$392,795.00","$1,267.08","$58,335.89"
MIA - OKC,54146711733,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/54146711733,https://www.airlines-manager.com/aircraft/show/110883111,4:00,10:44,310,"$430,426.00","$392,795.00","$1,267.08","$58,335.89"
MIA - OKC,54162072860,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/54162072860,https://www.airlines-manager.com/aircraft/show/104353572,10:00,16:44,112,"$202,427.00","$177,716.00","$1,586.75","$26,393.47"
MIA - OKC,54168162128,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/54168162128,https://www.airlines-manager.com/aircraft/show/110883110,13:00,19:44,310,"$430,426.00","$392,795.00","$1,267.08","$58,335.89"
MIA - OKC,54173399332,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/54173399332,https://www.airlines-manager.com/aircraft/show/110883113,14:45,21:29,310,"$430,426.00","$392,795.00","$1,267.08","$58,335.89"
MIA - OMA,54146711794,MIA-BOI-BNA 1,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/54146711794,https://www.airlines-manager.com/aircraft/show/104133006,2:30,9:59,320,"$477,506.00","$432,428.00","$1,351.34","$57,785.48"
MIA - OMA,54146711795,MIA-BOI-BNA 4,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/54146711795,https://www.airlines-manager.com/aircraft/show/103775657,6:30,13:59,320,"$477,506.00","$432,428.00","$1,351.34","$57,785.48"
MIA - OMA,54162072909,MIA-BOI-BNA 3,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/54162072909,https://www.airlines-manager.com/aircraft/show/104020880,10:00,17:29,320,"$477,506.00","$432,428.00","$1,351.34","$57,785.48"
MIA - OMA,54173399482,MIA-BOI-BNA 2,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/54173399482,https://www.airlines-manager.com/aircraft/show/104022609,15:15,22:44,320,"$477,506.00","$432,428.00","$1,351.34","$57,785.48"
MIA - OMA,54178655301,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/54178655301,https://www.airlines-manager.com/aircraft/show/103534663,17:15,0:44,112,"$225,479.00","$198,880.00","$1,775.71","$26,576.39"
MIA - ONT,54146711519,MIA-RNO-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/54146711519,https://www.airlines-manager.com/aircraft/show/90489722,0:30,11:29,320,"$691,257.00","$629,649.00","$1,967.65","$57,327.68"
MIA - ONT,54146711520,MIA-RNO-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/54146711520,https://www.airlines-manager.com/aircraft/show/86238756,2:30,13:29,320,"$691,257.00","$629,649.00","$1,967.65","$57,327.68"
MIA - ONT,54162073044,MIA-RNO-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/54162073044,https://www.airlines-manager.com/aircraft/show/90489723,11:00,21:59,320,"$691,257.00","$629,649.00","$1,967.65","$57,327.68"
MIA - ONT,54168162300,MIA-RNO-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/54168162300,https://www.airlines-manager.com/aircraft/show/105223010,14:00,0:59,198,"$519,083.00","$474,343.00","$2,395.67","$43,187.53"
MIA - ONT,54187257350,MIA-RNO-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/54187257350,https://www.airlines-manager.com/aircraft/show/86238755,22:30,9:29,319,"$689,893.00","$628,347.00","$1,969.74","$57,209.14"
MIA - ORD,54146711867,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/54146711867,https://www.airlines-manager.com/aircraft/show/91600935,3:15,9:59,310,"$423,914.00","$364,109.00","$1,174.55","$54,075.59"
MIA - ORD,54146711868,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/54146711868,https://www.airlines-manager.com/aircraft/show/91600938,4:15,10:59,310,"$423,914.00","$364,109.00","$1,174.55","$54,075.59"
MIA - ORD,54156164672,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/54156164672,https://www.airlines-manager.com/aircraft/show/82543123,9:00,15:44,112,"$199,175.00","$161,198.00","$1,439.27","$23,940.30"
MIA - ORD,54162073067,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/54162073067,https://www.airlines-manager.com/aircraft/show/91600937,11:00,17:44,310,"$423,914.00","$364,109.00","$1,174.55","$54,075.59"
MIA - ORD,54173399336,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/54173399336,https://www.airlines-manager.com/aircraft/show/91600939,14:45,21:29,310,"$423,914.00","$364,109.00","$1,174.55","$54,075.59"
MIA - ORD,54173399337,MIA-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/54173399337,https://www.airlines-manager.com/aircraft/show/106339154,15:30,22:14,198,"$319,739.00","$271,843.00","$1,372.94","$40,372.72"
MIA - ORD,54183441586,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/54183441586,https://www.airlines-manager.com/aircraft/show/91600936,20:45,3:29,310,"$423,914.00","$364,109.00","$1,174.55","$54,075.59"
MIA - ORF,54146711474,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/54146711474,https://www.airlines-manager.com/aircraft/show/114912307,0:15,5:29,112,"$157,418.00","$137,445.00","$1,227.19","$26,263.38"
MIA - ORF,54146711475,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/54146711475,https://www.airlines-manager.com/aircraft/show/115493373,3:15,8:29,310,"$331,248.00","$300,298.00",$968.70,"$57,381.78"
MIA - ORF,54156164610,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/54156164610,https://www.airlines-manager.com/aircraft/show/115493370,8:15,13:29,310,"$331,248.00","$300,298.00",$968.70,"$57,381.78"
MIA - ORF,54173399420,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/54173399420,https://www.airlines-manager.com/aircraft/show/115493371,15:00,20:14,310,"$331,248.00","$300,298.00",$968.70,"$57,381.78"
MIA - ORF,54178655302,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/54178655302,https://www.airlines-manager.com/aircraft/show/115493372,17:15,22:29,310,"$331,248.00","$300,298.00",$968.70,"$57,381.78"
MIA - PDX,54162072945,MIA-PDX-DTW 1,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/54162072945,https://www.airlines-manager.com/aircraft/show/89943715,10:00,22:29,320,"$771,170.00","$700,853.00","$2,190.17","$56,143.10"
MIA - PDX,54168162197,MIA-PDX-DTW 3,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/54168162197,https://www.airlines-manager.com/aircraft/show/89943713,13:00,1:29,320,"$771,170.00","$700,853.00","$2,190.17","$56,143.10"
MIA - PDX,54168162198,MIA-PDX-DTW 4,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/54168162198,https://www.airlines-manager.com/aircraft/show/89943712,14:00,2:29,320,"$771,170.00","$700,853.00","$2,190.17","$56,143.10"
MIA - PDX,54183441463,MIA-PDX-DTW 2,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/54183441463,https://www.airlines-manager.com/aircraft/show/89943714,19:30,7:59,320,"$771,170.00","$700,853.00","$2,190.17","$56,143.10"
MIA - PDX,54187257425,MIA-PDX-DTW 5,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/54187257425,https://www.airlines-manager.com/aircraft/show/89943711,23:30,11:59,320,"$771,170.00","$700,853.00","$2,190.17","$56,143.10"
MIA - PHL,54146711929,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/54146711929,https://www.airlines-manager.com/aircraft/show/91600939,4:00,9:59,310,"$379,784.00","$338,009.00","$1,090.35","$56,491.75"
MIA - PHL,54146711930,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/54146711930,https://www.airlines-manager.com/aircraft/show/91600937,5:00,10:59,310,"$379,784.00","$338,009.00","$1,090.35","$56,491.75"
MIA - PHL,54162072898,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/54162072898,https://www.airlines-manager.com/aircraft/show/91600936,10:00,15:59,310,"$379,784.00","$338,009.00","$1,090.35","$56,491.75"
MIA - PHL,54173399580,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/54173399580,https://www.airlines-manager.com/aircraft/show/91600935,16:30,22:29,310,"$379,784.00","$338,009.00","$1,090.35","$56,491.75"
MIA - PHL,54178655310,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/54178655310,https://www.airlines-manager.com/aircraft/show/91600938,17:30,23:29,310,"$379,784.00","$338,009.00","$1,090.35","$56,491.75"
MIA - PHL,54187257319,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/54187257319,https://www.airlines-manager.com/aircraft/show/82543123,22:15,4:14,112,"$179,528.00","$152,690.00","$1,363.30","$25,519.22"
MIA - PHX,54146711447,MIA-JFK-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/54146711447,https://www.airlines-manager.com/aircraft/show/105308266,0:15,9:59,338,"$670,464.00","$611,759.00","$1,809.94","$62,851.95"
MIA - PHX,54146711448,MIA-JFK-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/54146711448,https://www.airlines-manager.com/aircraft/show/105308265,2:15,11:59,338,"$670,464.00","$611,759.00","$1,809.94","$62,851.95"
MIA - PHX,54162073051,MIA-JFK-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/54162073051,https://www.airlines-manager.com/aircraft/show/105308268,11:00,20:44,338,"$670,464.00","$611,759.00","$1,809.94","$62,851.95"
MIA - PHX,54168162069,MIA-JFK-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/54168162069,https://www.airlines-manager.com/aircraft/show/105308264,12:00,21:44,338,"$670,464.00","$611,759.00","$1,809.94","$62,851.95"
MIA - PHX,54173399571,MIA-JFK-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/54173399571,https://www.airlines-manager.com/aircraft/show/105308267,16:15,1:59,338,"$670,464.00","$611,759.00","$1,809.94","$62,851.95"
MIA - PHX,54183441620,MIA-JFK-PHX 6,ERJ-175,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/54183441620,https://www.airlines-manager.com/aircraft/show/82683137,21:00,6:44,112,"$290,059.00","$249,922.00","$2,231.45","$25,676.92"
MIA - PIT,54146711866,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/54146711866,https://www.airlines-manager.com/aircraft/show/99920624,3:15,9:14,320,"$381,330.00","$339,654.00","$1,061.42","$56,766.69"
MIA - PIT,54162072934,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/54162072934,https://www.airlines-manager.com/aircraft/show/99920625,10:00,15:59,320,"$381,330.00","$339,654.00","$1,061.42","$56,766.69"
MIA - PIT,54173399591,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/54173399591,https://www.airlines-manager.com/aircraft/show/99920626,16:30,22:29,320,"$381,330.00","$339,654.00","$1,061.42","$56,766.69"
MIA - PIT,54183441575,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/54183441575,https://www.airlines-manager.com/aircraft/show/82323689,20:30,2:29,112,"$180,264.00","$156,468.00","$1,397.04","$26,150.64"
MIA - PIT,54183441576,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/54183441576,https://www.airlines-manager.com/aircraft/show/99920623,21:15,3:14,320,"$381,330.00","$339,654.00","$1,061.42","$56,766.69"
MIA - PLS,54146711878,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/54146711878,https://www.airlines-manager.com/aircraft/show/99326789,3:15,7:29,228,"$205,523.00","$184,430.00",$808.90,"$43,566.14"
MIA - PLS,54146711879,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/54146711879,https://www.airlines-manager.com/aircraft/show/104034460,5:00,9:14,228,"$205,523.00","$184,430.00",$808.90,"$43,566.14"
MIA - PLS,54162072913,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/54162072913,https://www.airlines-manager.com/aircraft/show/104034458,10:00,14:14,228,"$205,523.00","$184,430.00",$808.90,"$43,566.14"
MIA - PLS,54168162305,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/54168162305,https://www.airlines-manager.com/aircraft/show/104034459,14:15,18:29,228,"$205,523.00","$184,430.00",$808.90,"$43,566.14"
MIA - PLS,54178655247,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/54178655247,https://www.airlines-manager.com/aircraft/show/104034457,17:00,21:14,228,"$205,523.00","$184,430.00",$808.90,"$43,566.14"
MIA - PLS,54187257274,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/54187257274,https://www.airlines-manager.com/aircraft/show/104034461,22:00,2:14,227,"$204,047.00","$182,981.00",$806.08,"$43,223.86"
MIA - POS,54168162112,MIA 84B-1 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/54168162112,https://www.airlines-manager.com/aircraft/show/106676225,12:30,20:29,962,"$1,335,429.00","$1,218,322.00","$1,266.45","$152,608.18"
MIA - POS,54173399550,MIA 84B-6 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/54173399550,https://www.airlines-manager.com/aircraft/show/106676230,16:00,23:59,726,"$1,098,130.00","$993,973.00","$1,369.11","$124,506.01"
MIA - PSP,54146711737,MIA-PSP-BFF 5,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/54146711737,https://www.airlines-manager.com/aircraft/show/116789630,2:00,12:44,320,"$659,420.00","$601,722.00","$1,880.38","$56,061.06"
MIA - PSP,54162072901,MIA-PSP-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/54162072901,https://www.airlines-manager.com/aircraft/show/116789631,10:00,20:44,320,"$659,420.00","$601,722.00","$1,880.38","$56,061.06"
MIA - PSP,54168162267,MIA-PSP-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/54168162267,https://www.airlines-manager.com/aircraft/show/116789634,14:00,0:44,320,"$659,420.00","$601,722.00","$1,880.38","$56,061.06"
MIA - PSP,54168162268,MIA-PSP-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/54168162268,https://www.airlines-manager.com/aircraft/show/116789632,14:15,0:59,320,"$659,420.00","$601,722.00","$1,880.38","$56,061.06"
MIA - PSP,54187257385,MIA-PSP-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/54187257385,https://www.airlines-manager.com/aircraft/show/116789633,23:00,9:44,238,"$554,564.00","$501,785.00","$2,108.34","$46,750.16"
MIA - PUJ,54146711889,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/54146711889,https://www.airlines-manager.com/aircraft/show/104034458,3:30,9:14,228,"$275,787.00","$249,167.00","$1,092.84","$43,459.36"
MIA - PUJ,54162072910,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/54162072910,https://www.airlines-manager.com/aircraft/show/104034461,10:00,15:44,228,"$275,787.00","$249,167.00","$1,092.84","$43,459.36"
MIA - PUJ,54173399547,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/54173399547,https://www.airlines-manager.com/aircraft/show/107577220,16:00,21:44,0,"$94,907.00","$71,312.00",#DIV/0!,"$12,438.14"
MIA - PUJ,54173399548,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/54173399548,https://www.airlines-manager.com/aircraft/show/104034460,16:15,21:59,228,"$275,787.00","$249,167.00","$1,092.84","$43,459.36"
MIA - PUJ,54178655300,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/54178655300,https://www.airlines-manager.com/aircraft/show/99326789,17:15,22:59,228,"$275,787.00","$249,167.00","$1,092.84","$43,459.36"
MIA - PUJ,54183441633,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/54183441633,https://www.airlines-manager.com/aircraft/show/104034457,21:15,2:59,228,"$275,787.00","$249,167.00","$1,092.84","$43,459.36"
MIA - PUJ,54187257295,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/54187257295,https://www.airlines-manager.com/aircraft/show/104034459,22:00,3:44,228,"$275,787.00","$249,167.00","$1,092.84","$43,459.36"
MIA - PVD,54146711625,MIA-BUR-PVD 3,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/54146711625,https://www.airlines-manager.com/aircraft/show/108834805,1:15,7:59,310,"$425,919.00","$389,690.00","$1,257.06","$57,874.75"
MIA - PVD,54156164551,MIA-BUR-PVD 5 B,A319-100,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/54156164551,https://www.airlines-manager.com/aircraft/show/108834807,7:15,13:59,198,"$321,428.00","$292,393.00","$1,476.73","$43,424.70"
MIA - PVD,54162073024,MIA-BUR-PVD 2,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/54162073024,https://www.airlines-manager.com/aircraft/show/108834804,11:00,17:44,310,"$425,919.00","$389,690.00","$1,257.06","$57,874.75"
MIA - PVD,54178655282,MIA-BUR-PVD 4,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/54178655282,https://www.airlines-manager.com/aircraft/show/108834806,17:00,23:44,310,"$425,919.00","$389,690.00","$1,257.06","$57,874.75"
MIA - PVD,54187257320,MIA-BUR-PVD 1,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/54187257320,https://www.airlines-manager.com/aircraft/show/108834803,22:15,4:59,310,"$425,919.00","$389,690.00","$1,257.06","$57,874.75"
MIA - PWM,54156164570,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/54156164570,https://www.airlines-manager.com/aircraft/show/94886629,7:30,14:59,310,"$466,211.00","$428,287.00","$1,381.57","$57,232.12"
MIA - PWM,54168162297,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/54168162297,https://www.airlines-manager.com/aircraft/show/94886626,14:00,21:29,310,"$466,211.00","$428,287.00","$1,381.57","$57,232.12"
MIA - PWM,54178655434,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/54178655434,https://www.airlines-manager.com/aircraft/show/96692674,18:45,2:14,310,"$466,211.00","$428,287.00","$1,381.57","$57,232.12"
MIA - PWM,54183441589,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/54183441589,https://www.airlines-manager.com/aircraft/show/105601657,20:45,4:14,112,"$220,140.00","$195,020.00","$1,741.25","$26,060.58"
MIA - PWM,54187257434,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/54187257434,https://www.airlines-manager.com/aircraft/show/94886625,23:45,7:14,310,"$466,211.00","$428,287.00","$1,381.57","$57,232.12"
MIA - RAP,54146711371,MIA-RAP-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/54146711371,https://www.airlines-manager.com/aircraft/show/116789624,0:00,8:59,320,"$561,298.00","$511,354.00","$1,597.98","$56,922.52"
MIA - RAP,54146711372,MIA-RAP-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/54146711372,https://www.airlines-manager.com/aircraft/show/116789622,2:00,10:59,320,"$561,298.00","$511,354.00","$1,597.98","$56,922.52"
MIA - RAP,54162072895,MIA-RAP-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/54162072895,https://www.airlines-manager.com/aircraft/show/116789625,10:00,18:59,320,"$561,298.00","$511,354.00","$1,597.98","$56,922.52"
MIA - RAP,54173399423,MIA-RAP-GRR 5,ERJ-175,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/54173399423,https://www.airlines-manager.com/aircraft/show/116042630,15:00,23:59,112,"$264,806.00","$234,612.00","$2,094.75","$26,116.36"
MIA - RAP,54178655291,MIA-RAP-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/54178655291,https://www.airlines-manager.com/aircraft/show/116789623,17:15,2:14,319,"$559,657.00","$509,774.00","$1,598.04","$56,746.64"
MIA - RDU,54146711968,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/54146711968,https://www.airlines-manager.com/aircraft/show/99920626,4:30,9:14,320,"$309,466.00","$273,290.00",$854.03,"$57,737.32"
MIA - RDU,54156164648,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/54156164648,https://www.airlines-manager.com/aircraft/show/82323689,8:30,13:14,112,"$147,399.00","$127,266.00","$1,136.30","$26,887.18"
MIA - RDU,54162072932,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/54162072932,https://www.airlines-manager.com/aircraft/show/99920623,10:00,14:44,320,"$309,466.00","$273,290.00",$854.03,"$57,737.32"
MIA - RDU,54173399556,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/54173399556,https://www.airlines-manager.com/aircraft/show/99920624,16:00,20:44,320,"$309,466.00","$273,290.00",$854.03,"$57,737.32"
MIA - RDU,54187257273,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/54187257273,https://www.airlines-manager.com/aircraft/show/99920625,22:00,2:44,320,"$309,466.00","$273,290.00",$854.03,"$57,737.32"
MIA - RIC,54156164631,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/54156164631,https://www.airlines-manager.com/aircraft/show/110883112,8:30,13:44,310,"$335,679.00","$304,397.00",$981.93,"$58,165.03"
MIA - RIC,54162073016,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/54162073016,https://www.airlines-manager.com/aircraft/show/110883111,11:00,16:14,310,"$335,679.00","$304,397.00",$981.93,"$58,165.03"
MIA - RIC,54173399600,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/54173399600,https://www.airlines-manager.com/aircraft/show/104353572,16:45,21:59,112,"$159,561.00","$139,347.00","$1,244.17","$26,626.82"
MIA - RIC,54183441482,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/54183441482,https://www.airlines-manager.com/aircraft/show/110883110,19:45,0:59,310,"$335,679.00","$304,397.00",$981.93,"$58,165.03"
MIA - RIC,54183441483,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/54183441483,https://www.airlines-manager.com/aircraft/show/110883113,21:30,2:44,309,"$334,682.00","$303,429.00",$981.97,"$57,980.06"
MIA - RNO,54146711589,MIA-RNO-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/54146711589,https://www.airlines-manager.com/aircraft/show/105223010,1:00,12:44,198,"$543,785.00","$497,948.00","$2,514.89","$42,438.75"
MIA - RNO,54162073045,MIA-RNO-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/54162073045,https://www.airlines-manager.com/aircraft/show/86238755,11:00,22:29,320,"$721,868.00","$659,017.00","$2,059.43","$57,389.00"
MIA - RNO,54168162156,MIA-RNO-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/54168162156,https://www.airlines-manager.com/aircraft/show/90489722,13:00,0:29,320,"$721,868.00","$659,017.00","$2,059.43","$57,389.00"
MIA - RNO,54173399473,MIA-RNO-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/54173399473,https://www.airlines-manager.com/aircraft/show/86238756,15:00,2:29,320,"$721,868.00","$659,017.00","$2,059.43","$57,389.00"
MIA - RNO,54187257296,MIA-RNO-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/54187257296,https://www.airlines-manager.com/aircraft/show/90489723,22:00,9:29,319,"$720,448.00","$657,663.00","$2,061.64","$57,271.09"
MIA - RSW,54146711923,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/54146711923,https://www.airlines-manager.com/aircraft/show/110114297,4:00,6:29,228,"$65,659.00","$47,406.00",$207.92,"$19,089.66"
MIA - RSW,54156164689,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/54156164689,https://www.airlines-manager.com/aircraft/show/110114295,9:15,11:44,228,"$65,659.00","$47,406.00",$207.92,"$19,089.66"
MIA - RSW,54162072963,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/54162072963,https://www.airlines-manager.com/aircraft/show/110114296,10:15,12:44,228,"$65,659.00","$47,406.00",$207.92,"$19,089.66"
MIA - RSW,54168162239,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/54168162239,https://www.airlines-manager.com/aircraft/show/110114300,14:00,16:29,228,"$65,659.00","$47,406.00",$207.92,"$19,089.66"
MIA - RSW,54183441594,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/54183441594,https://www.airlines-manager.com/aircraft/show/110114299,21:00,23:29,228,"$65,659.00","$47,406.00",$207.92,"$19,089.66"
MIA - RSW,54187257397,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/54187257397,https://www.airlines-manager.com/aircraft/show/110114298,23:00,1:29,228,"$65,659.00","$47,406.00",$207.92,"$19,089.66"
MIA - SAN,54146711697,MIA-BWI-YYZ 2,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/54146711697,https://www.airlines-manager.com/aircraft/show/92153440,1:45,12:44,310,"$686,006.00","$629,207.00","$2,029.70","$57,287.44"
MIA - SAN,54162072950,MIA-BWI-YYZ 3,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/54162072950,https://www.airlines-manager.com/aircraft/show/92153441,10:00,20:59,310,"$686,006.00","$629,207.00","$2,029.70","$57,287.44"
MIA - SAN,54168162040,MIA-BWI-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/54168162040,https://www.airlines-manager.com/aircraft/show/92137503,12:00,22:59,136,"$299,558.00","$265,819.00","$1,954.55","$24,202.03"
MIA - SAN,54178655250,MIA-BWI-YYZ 4,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/54178655250,https://www.airlines-manager.com/aircraft/show/92153442,17:00,3:59,310,"$686,006.00","$629,207.00","$2,029.70","$57,287.44"
MIA - SAN,54178655251,MIA-BWI-YYZ 5,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/54178655251,https://www.airlines-manager.com/aircraft/show/92153439,19:00,5:59,310,"$686,006.00","$629,207.00","$2,029.70","$57,287.44"
MIA - SAN,54187257352,MIA-BWI-YYZ 1,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/54187257352,https://www.airlines-manager.com/aircraft/show/92153443,22:45,9:44,310,"$686,006.00","$629,207.00","$2,029.70","$57,287.44"
MIA - SAT,54146711865,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/54146711865,https://www.airlines-manager.com/aircraft/show/107763562,3:15,9:44,320,"$410,437.00","$369,153.00","$1,153.60","$56,938.77"
MIA - SAT,54162073027,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/54162073027,https://www.airlines-manager.com/aircraft/show/107763565,11:00,17:29,320,"$410,437.00","$369,153.00","$1,153.60","$56,938.77"
MIA - SAT,54173399338,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/54173399338,https://www.airlines-manager.com/aircraft/show/107467213,14:45,21:14,112,"$193,677.00","$169,711.00","$1,515.28","$26,176.50"
MIA - SAT,54183441561,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/54183441561,https://www.airlines-manager.com/aircraft/show/107763561,20:30,2:59,320,"$410,437.00","$369,153.00","$1,153.60","$56,938.77"
MIA - SAT,54183441562,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/54183441562,https://www.airlines-manager.com/aircraft/show/107763566,20:45,3:14,320,"$410,437.00","$369,153.00","$1,153.60","$56,938.77"
MIA - SAV,54146711467,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/54146711467,https://www.airlines-manager.com/aircraft/show/110883111,0:15,3:59,310,"$214,539.00","$189,268.00",$610.54,"$50,696.79"
MIA - SAV,54146711468,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/54146711468,https://www.airlines-manager.com/aircraft/show/104353572,6:00,9:44,112,"$100,203.00","$84,270.00",$752.41,"$22,572.32"
MIA - SAV,54156164673,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/54156164673,https://www.airlines-manager.com/aircraft/show/110883110,9:00,12:44,310,"$214,539.00","$189,268.00",$610.54,"$50,696.79"
MIA - SAV,54162073015,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/54162073015,https://www.airlines-manager.com/aircraft/show/110883113,11:00,14:44,310,"$214,539.00","$189,268.00",$610.54,"$50,696.79"
MIA - SAV,54187257283,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/54187257283,https://www.airlines-manager.com/aircraft/show/110883112,22:00,1:44,267,"$197,041.00","$172,290.00",$645.28,"$46,149.11"
MIA - SDF,54146711564,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/54146711564,https://www.airlines-manager.com/aircraft/show/94886629,0:45,6:29,310,"$354,795.00","$320,429.00","$1,033.64","$55,888.78"
MIA - SDF,54156164616,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/54156164616,https://www.airlines-manager.com/aircraft/show/94886626,8:15,13:59,310,"$354,795.00","$320,429.00","$1,033.64","$55,888.78"
MIA - SDF,54168162151,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/54168162151,https://www.airlines-manager.com/aircraft/show/96692674,13:00,18:44,310,"$354,795.00","$320,429.00","$1,033.64","$55,888.78"
MIA - SDF,54173399412,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/54173399412,https://www.airlines-manager.com/aircraft/show/105601657,15:00,20:44,112,"$167,661.00","$145,448.00","$1,298.64","$25,368.84"
MIA - SDF,54173399415,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/54173399415,https://www.airlines-manager.com/aircraft/show/107527976,15:45,21:29,0,"$94,306.00","$70,011.00",$0.00,"$12,211.22"
MIA - SDF,54178655376,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/54178655376,https://www.airlines-manager.com/aircraft/show/94886625,18:00,23:44,309,"$345,771.00","$312,937.00","$1,012.74","$54,582.03"
MIA - SEA,54146711663,MIA-LAS-SEA 3,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/54146711663,https://www.airlines-manager.com/aircraft/show/105093927,1:30,13:59,338,"$830,781.00","$762,732.00","$2,256.60","$61,100.03"
MIA - SEA,54162072858,MIA-LAS-SEA 4,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/54162072858,https://www.airlines-manager.com/aircraft/show/105093928,10:00,22:29,338,"$830,781.00","$762,732.00","$2,256.60","$61,100.03"
MIA - SEA,54168162162,MIA-LAS-SEA 5,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/54168162162,https://www.airlines-manager.com/aircraft/show/105093929,13:00,1:29,338,"$830,781.00","$762,732.00","$2,256.60","$61,100.03"
MIA - SEA,54183441569,MIA-LAS-SEA 1,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/54183441569,https://www.airlines-manager.com/aircraft/show/105093925,20:30,8:59,338,"$830,781.00","$762,732.00","$2,256.60","$61,100.03"
MIA - SEA,54187257328,MIA-LAS-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/54187257328,https://www.airlines-manager.com/aircraft/show/113251304,22:30,11:14,198,"$575,630.00","$518,353.00","$2,617.94","$40,708.35"
MIA - SEA,54187257329,MIA-LAS-SEA 2,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/54187257329,https://www.airlines-manager.com/aircraft/show/105093926,23:30,11:59,338,"$830,781.00","$762,732.00","$2,256.60","$61,100.03"
MIA - SJC,54146711721,MIA-SJC-YYC 5,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/54146711721,https://www.airlines-manager.com/aircraft/show/107763563,1:45,13:44,320,"$731,356.00","$665,189.00","$2,078.72","$55,509.51"
MIA - SJC,54168162100,MIA-SJC-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/54168162100,https://www.airlines-manager.com/aircraft/show/107763569,12:00,23:59,320,"$731,356.00","$665,189.00","$2,078.72","$55,509.51"
MIA - SJC,54168162101,MIA-SJC-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/54168162101,https://www.airlines-manager.com/aircraft/show/107763568,14:00,1:59,320,"$731,356.00","$665,189.00","$2,078.72","$55,509.51"
MIA - SJC,54173399544,MIA-SJC-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/54173399544,https://www.airlines-manager.com/aircraft/show/107763567,16:00,3:59,320,"$731,356.00","$665,189.00","$2,078.72","$55,509.51"
MIA - SJC,54187257446,MIA-SJC-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/54187257446,https://www.airlines-manager.com/aircraft/show/107763564,23:45,11:44,320,"$731,356.00","$665,189.00","$2,078.72","$55,509.51"
MIA - SJU,54146711864,MIA-SJU-BOS 6 B,A319-100,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/54146711864,https://www.airlines-manager.com/aircraft/show/110582841,3:15,9:29,198,"$286,648.00","$257,583.00","$1,300.92","$41,323.48"
MIA - SJU,54162072975,MIA-SJU-BOS 2,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/54162072975,https://www.airlines-manager.com/aircraft/show/91352062,10:15,16:29,310,"$379,953.00","$343,678.00","$1,108.64","$55,135.51"
MIA - SJU,54168162107,MIA-SJU-BOS 3,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/54168162107,https://www.airlines-manager.com/aircraft/show/91352061,12:15,18:29,310,"$379,953.00","$343,678.00","$1,108.64","$55,135.51"
MIA - SJU,54178655395,MIA-SJU-BOS 4,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/54178655395,https://www.airlines-manager.com/aircraft/show/91352060,18:15,0:29,310,"$379,953.00","$343,678.00","$1,108.64","$55,135.51"
MIA - SJU,54178655396,MIA-SJU-BOS 5,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/54178655396,https://www.airlines-manager.com/aircraft/show/91352059,19:15,1:29,310,"$379,953.00","$343,678.00","$1,108.64","$55,135.51"
MIA - SJU,54187257373,MIA-SJU-BOS 1,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/54187257373,https://www.airlines-manager.com/aircraft/show/91352063,22:45,4:59,272,"$338,619.00","$303,704.00","$1,116.56","$48,722.57"
MIA - SKB,54146711671,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/54146711671,https://www.airlines-manager.com/aircraft/show/110114298,1:30,8:29,228,"$343,701.00","$314,172.00","$1,377.95","$44,988.83"
MIA - SKB,54146711672,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/54146711672,https://www.airlines-manager.com/aircraft/show/110114295,2:15,9:14,228,"$343,701.00","$314,172.00","$1,377.95","$44,988.83"
MIA - SKB,54146711673,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/54146711673,https://www.airlines-manager.com/aircraft/show/110114296,3:15,10:14,228,"$343,701.00","$314,172.00","$1,377.95","$44,988.83"
MIA - SKB,54146711674,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/54146711674,https://www.airlines-manager.com/aircraft/show/110114300,6:45,13:44,228,"$343,701.00","$314,172.00","$1,377.95","$44,988.83"
MIA - SKB,54168162240,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/54168162240,https://www.airlines-manager.com/aircraft/show/110114299,14:00,20:59,228,"$343,701.00","$314,172.00","$1,377.95","$44,988.83"
MIA - SKB,54183441621,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/54183441621,https://www.airlines-manager.com/aircraft/show/110114297,21:00,3:59,228,"$343,701.00","$314,172.00","$1,377.95","$44,988.83"
MIA - SLC,54146711428,MIA-SJU-BOS 2,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/54146711428,https://www.airlines-manager.com/aircraft/show/91352062,0:00,10:14,310,"$641,266.00","$583,680.00","$1,882.84","$57,037.13"
MIA - SLC,54146711429,MIA-SJU-BOS 4,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/54146711429,https://www.airlines-manager.com/aircraft/show/91352060,1:00,11:14,310,"$641,266.00","$583,680.00","$1,882.84","$57,037.13"
MIA - SLC,54146711430,MIA-SJU-BOS 3,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/54146711430,https://www.airlines-manager.com/aircraft/show/91352061,2:00,12:14,310,"$641,266.00","$583,680.00","$1,882.84","$57,037.13"
MIA - SLC,54156164676,MIA-SJU-BOS 5,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/54156164676,https://www.airlines-manager.com/aircraft/show/91352059,9:00,19:14,310,"$641,266.00","$583,680.00","$1,882.84","$57,037.13"
MIA - SLC,54162072867,MIA-SJU-BOS 6 B,A319-100,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/54162072867,https://www.airlines-manager.com/aircraft/show/110582841,10:00,20:14,198,"$481,931.00","$435,772.00","$2,200.87","$42,583.58"
MIA - SLC,54168162038,MIA-SJU-BOS 1,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/54168162038,https://www.airlines-manager.com/aircraft/show/91352063,12:00,22:14,310,"$641,266.00","$583,680.00","$1,882.84","$57,037.13"
MIA - SMF,54146711601,MIA-OAK-SMF 2,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/54146711601,https://www.airlines-manager.com/aircraft/show/91198619,1:00,12:59,320,"$731,563.00","$667,531.00","$2,086.03","$55,704.95"
MIA - SMF,54146711602,MIA-OAK-SMF 3,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/54146711602,https://www.airlines-manager.com/aircraft/show/91198616,3:00,14:59,320,"$731,563.00","$667,531.00","$2,086.03","$55,704.95"
MIA - SMF,54162073054,MIA-OAK-SMF 4,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/54162073054,https://www.airlines-manager.com/aircraft/show/91198618,11:00,22:59,320,"$731,563.00","$667,531.00","$2,086.03","$55,704.95"
MIA - SMF,54168162163,MIA-OAK-SMF 5,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/54168162163,https://www.airlines-manager.com/aircraft/show/91198617,13:00,0:59,320,"$731,563.00","$667,531.00","$2,086.03","$55,704.95"
MIA - SMF,54187257394,MIA-OAK-SMF 1,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/54187257394,https://www.airlines-manager.com/aircraft/show/91198615,23:00,10:59,319,"$729,418.00","$665,471.00","$2,086.12","$55,533.05"
MIA - STL,54146711665,MIA-ELP-MCI 1,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/54146711665,https://www.airlines-manager.com/aircraft/show/91806234,1:30,7:44,320,"$391,361.00","$347,788.00","$1,086.84","$55,794.87"
MIA - STL,54146711666,MIA-ELP-MCI 5 B,A319-100,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/54146711666,https://www.airlines-manager.com/aircraft/show/105093924,2:00,8:14,198,"$296,098.00","$265,339.00","$1,340.10","$42,567.75"
MIA - STL,54146711667,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/54146711667,https://www.airlines-manager.com/aircraft/show/107527976,3:15,9:29,0,"$102,664.00","$75,323.00",$0.00,"$12,083.90"
MIA - STL,54156164634,MIA-ELP-MCI 4,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/54156164634,https://www.airlines-manager.com/aircraft/show/91806231,8:30,14:44,320,"$391,361.00","$347,788.00","$1,086.84","$55,794.87"
MIA - STL,54162072862,MIA-ELP-MCI 3,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/54162072862,https://www.airlines-manager.com/aircraft/show/91806232,10:00,16:14,320,"$391,361.00","$347,788.00","$1,086.84","$55,794.87"
MIA - STL,54178655233,MIA-ELP-MCI 2,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/54178655233,https://www.airlines-manager.com/aircraft/show/91806235,17:00,23:14,320,"$391,361.00","$347,788.00","$1,086.84","$55,794.87"
MIA - SXM,54146712027,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/54146712027,https://www.airlines-manager.com/aircraft/show/110114299,6:45,13:44,228,"$333,459.00","$304,653.00","$1,336.20","$43,625.73"
MIA - SXM,54168162241,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/54168162241,https://www.airlines-manager.com/aircraft/show/110114297,14:00,20:59,228,"$333,459.00","$304,653.00","$1,336.20","$43,625.73"
MIA - SXM,54173399541,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/54173399541,https://www.airlines-manager.com/aircraft/show/110114298,16:00,22:59,228,"$333,459.00","$304,653.00","$1,336.20","$43,625.73"
MIA - SXM,54178655480,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/54178655480,https://www.airlines-manager.com/aircraft/show/110114295,19:15,2:14,228,"$333,459.00","$304,653.00","$1,336.20","$43,625.73"
MIA - SXM,54183441543,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/54183441543,https://www.airlines-manager.com/aircraft/show/110114296,20:15,3:14,228,"$333,459.00","$304,653.00","$1,336.20","$43,625.73"
MIA - SXM,54187257437,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/54187257437,https://www.airlines-manager.com/aircraft/show/110114300,23:45,6:44,228,"$333,459.00","$304,653.00","$1,336.20","$43,625.73"
MIA - TPA,54146711990,MIA-BUR-PVD 1,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/54146711990,https://www.airlines-manager.com/aircraft/show/108834803,5:00,7:59,310,"$127,616.00","$101,600.00",$327.74,"$34,055.87"
MIA - TPA,54162073023,MIA-BUR-PVD 3,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/54162073023,https://www.airlines-manager.com/aircraft/show/108834805,11:00,13:59,310,"$127,616.00","$101,600.00",$327.74,"$34,055.87"
MIA - TPA,54178655274,MIA-BUR-PVD 5 B,A319-100,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/54178655274,https://www.airlines-manager.com/aircraft/show/108834807,17:00,19:59,198,"$95,236.00","$74,415.00",$375.83,"$24,943.58"
MIA - TPA,54178655275,MIA-BUR-PVD 2,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/54178655275,https://www.airlines-manager.com/aircraft/show/108834804,17:45,20:44,310,"$127,616.00","$101,600.00",$327.74,"$34,055.87"
MIA - TPA,54187257431,MIA-BUR-PVD 4,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/54187257431,https://www.airlines-manager.com/aircraft/show/108834806,23:45,2:44,310,"$127,616.00","$101,600.00",$327.74,"$34,055.87"
MIA - TUL,54146711558,MIA-FAR-TUL 2,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/54146711558,https://www.airlines-manager.com/aircraft/show/110883160,0:45,7:29,320,"$415,861.00","$374,420.00","$1,170.06","$55,606.93"
MIA - TUL,54146711559,MIA-FAR-TUL 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/54146711559,https://www.airlines-manager.com/aircraft/show/87169421,3:00,9:44,112,"$196,167.00","$172,043.00","$1,536.10","$25,550.94"
MIA - TUL,54162073011,MIA-FAR-TUL 3,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/54162073011,https://www.airlines-manager.com/aircraft/show/110883161,11:00,17:44,320,"$415,861.00","$374,420.00","$1,170.06","$55,606.93"
MIA - TUL,54173399536,MIA-FAR-TUL 4,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/54173399536,https://www.airlines-manager.com/aircraft/show/110883162,16:00,22:44,320,"$415,861.00","$374,420.00","$1,170.06","$55,606.93"
MIA - TUL,54183441472,MIA-FAR-TUL 1,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/54183441472,https://www.airlines-manager.com/aircraft/show/110883159,19:45,2:29,320,"$415,861.00","$374,420.00","$1,170.06","$55,606.93"
MIA - TUS,54146711508,MIA-IAD-TUS 3,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/54146711508,https://www.airlines-manager.com/aircraft/show/97556719,0:30,9:59,310,"$591,231.00","$542,626.00","$1,750.41","$57,218.91"
MIA - TUS,54162072941,MIA-IAD-TUS 2,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/54162072941,https://www.airlines-manager.com/aircraft/show/97556720,10:00,19:29,310,"$591,231.00","$542,626.00","$1,750.41","$57,218.91"
MIA - TUS,54168162194,MIA-IAD-TUS 5,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/54168162194,https://www.airlines-manager.com/aircraft/show/97556716,13:00,22:29,310,"$591,231.00","$542,626.00","$1,750.41","$57,218.91"
MIA - TUS,54173399499,MIA-IAD-TUS 1,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/54173399499,https://www.airlines-manager.com/aircraft/show/97556721,15:45,1:14,310,"$591,231.00","$542,626.00","$1,750.41","$57,218.91"
MIA - TUS,54178655428,MIA-IAD-TUS 4,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/54178655428,https://www.airlines-manager.com/aircraft/show/97556718,18:45,4:14,309,"$587,865.00","$539,338.00","$1,745.43","$56,872.20"
MIA - TYS,54146711899,MIA-CID-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/54146711899,https://www.airlines-manager.com/aircraft/show/116789650,3:30,8:29,310,"$314,403.00","$285,010.00",$919.39,"$57,192.64"
MIA - TYS,54162072939,MIA-CID-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/54162072939,https://www.airlines-manager.com/aircraft/show/116789651,10:00,14:59,310,"$314,403.00","$285,010.00",$919.39,"$57,192.64"
MIA - TYS,54173399333,MIA-CID-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/54173399333,https://www.airlines-manager.com/aircraft/show/116789652,14:45,19:44,310,"$314,403.00","$285,010.00",$919.39,"$57,192.64"
MIA - TYS,54187257292,MIA-CID-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/54187257292,https://www.airlines-manager.com/aircraft/show/116789653,22:00,2:59,310,"$314,403.00","$285,010.00",$919.39,"$57,192.64"
MIA - YUL,54146712023,MIA-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/54146712023,https://www.airlines-manager.com/aircraft/show/113101225,6:30,13:59,400,"$628,165.00","$573,858.00","$1,434.65","$76,684.81"
MIA - YUL,54162073008,MIA-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/54162073008,https://www.airlines-manager.com/aircraft/show/113101226,11:00,18:29,400,"$628,165.00","$573,858.00","$1,434.65","$76,684.81"
MIA - YUL,54173399371,MIA-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/54173399371,https://www.airlines-manager.com/aircraft/show/113101227,15:00,22:29,400,"$628,165.00","$573,858.00","$1,434.65","$76,684.81"
MIA - YUL,54187257444,MIA-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/54187257444,https://www.airlines-manager.com/aircraft/show/113101224,23:45,7:14,400,"$628,165.00","$573,858.00","$1,434.65","$76,684.81"
MIA - YVR,54162073009,MIA-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/54162073009,https://www.airlines-manager.com/aircraft/show/113101224,11:00,23:44,400,"$1,044,001.00","$959,355.00","$2,398.39","$75,342.02"
MIA - YVR,54168162242,MIA-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/54168162242,https://www.airlines-manager.com/aircraft/show/113101225,14:00,2:44,400,"$1,044,001.00","$959,355.00","$2,398.39","$75,342.02"
MIA - YVR,54178655407,MIA-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/54178655407,https://www.airlines-manager.com/aircraft/show/113101226,18:30,7:14,400,"$1,044,001.00","$959,355.00","$2,398.39","$75,342.02"
MIA - YVR,54187257325,MIA-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/54187257325,https://www.airlines-manager.com/aircraft/show/113101227,22:30,11:14,400,"$1,044,001.00","$959,355.00","$2,398.39","$75,342.02"
MIA - YYC,54146711373,MIA-SJC-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/54146711373,https://www.airlines-manager.com/aircraft/show/107763569,0:00,11:44,320,"$729,765.00","$661,169.00","$2,066.15","$56,349.63"
MIA - YYC,54146711374,MIA-SJC-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/54146711374,https://www.airlines-manager.com/aircraft/show/107763568,2:00,13:44,320,"$729,765.00","$661,169.00","$2,066.15","$56,349.63"
MIA - YYC,54146711375,MIA-SJC-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/54146711375,https://www.airlines-manager.com/aircraft/show/107763567,4:00,15:44,320,"$729,765.00","$661,169.00","$2,066.15","$56,349.63"
MIA - YYC,54168162102,MIA-SJC-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/54168162102,https://www.airlines-manager.com/aircraft/show/107763564,12:00,23:44,320,"$729,765.00","$661,169.00","$2,066.15","$56,349.63"
MIA - YYC,54168162103,MIA-SJC-YYC 5,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/54168162103,https://www.airlines-manager.com/aircraft/show/107763563,14:00,1:44,320,"$729,765.00","$661,169.00","$2,066.15","$56,349.63"
MIA - YYZ,54146711833,MIA-BWI-YYZ 3,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/54146711833,https://www.airlines-manager.com/aircraft/show/92153441,2:45,9:44,310,"$441,120.00","$394,380.00","$1,272.19","$56,474.46"
MIA - YYZ,54146711834,MIA-BWI-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/54146711834,https://www.airlines-manager.com/aircraft/show/92137503,4:45,11:44,136,"$191,110.00","$163,252.00","$1,200.38","$23,377.37"
MIA - YYZ,54162072936,MIA-BWI-YYZ 4,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/54162072936,https://www.airlines-manager.com/aircraft/show/92153442,10:00,16:59,310,"$441,120.00","$394,380.00","$1,272.19","$56,474.46"
MIA - YYZ,54168162039,MIA-BWI-YYZ 5,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/54168162039,https://www.airlines-manager.com/aircraft/show/92153439,12:00,18:59,310,"$441,120.00","$394,380.00","$1,272.19","$56,474.46"
MIA - YYZ,54173399510,MIA-BWI-YYZ 1,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/54173399510,https://www.airlines-manager.com/aircraft/show/92153443,15:45,22:44,310,"$441,120.00","$394,380.00","$1,272.19","$56,474.46"
MIA - YYZ,54178655444,MIA-BWI-YYZ 2,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/54178655444,https://www.airlines-manager.com/aircraft/show/92153440,18:45,1:44,310,"$441,120.00","$394,380.00","$1,272.19","$56,474.46"
SFO - ABQ,54156164660,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/54156164660,https://www.airlines-manager.com/aircraft/show/105223003,8:45,14:14,198,"$265,648.00","$237,518.00","$1,199.59","$43,316.35"
SFO - ABQ,54156164661,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/54156164661,https://www.airlines-manager.com/aircraft/show/88239553,8:45,14:14,320,"$349,794.00","$309,743.00",$967.95,"$56,488.09"
SFO - ABQ,54162072980,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/54162072980,https://www.airlines-manager.com/aircraft/show/88239557,10:30,15:59,320,"$349,794.00","$309,743.00",$967.95,"$56,488.09"
SFO - ABQ,54173399382,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/54173399382,https://www.airlines-manager.com/aircraft/show/88239555,15:00,20:29,320,"$349,794.00","$309,743.00",$967.95,"$56,488.09"
SFO - ABQ,54187257375,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/54187257375,https://www.airlines-manager.com/aircraft/show/88239554,22:45,4:14,320,"$349,794.00","$309,743.00",$967.95,"$56,488.09"
SFO - ALB,54146711517,SFO-ALB-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/54146711517,https://www.airlines-manager.com/aircraft/show/112650097,0:30,12:29,310,"$733,764.00","$677,600.00","$2,185.81","$56,545.20"
SFO - ALB,54146711518,SFO-ALB-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/54146711518,https://www.airlines-manager.com/aircraft/show/112650096,5:30,17:29,310,"$733,764.00","$677,600.00","$2,185.81","$56,545.20"
SFO - ALB,54156164575,SFO-ALB-CAK 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/54156164575,https://www.airlines-manager.com/aircraft/show/112650090,7:30,19:29,198,"$548,975.00","$503,934.00","$2,545.12","$42,052.91"
SFO - ALB,54168162247,SFO-ALB-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/54168162247,https://www.airlines-manager.com/aircraft/show/112650099,14:00,1:59,310,"$733,764.00","$677,600.00","$2,185.81","$56,545.20"
SFO - ALB,54178655355,SFO-ALB-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/54178655355,https://www.airlines-manager.com/aircraft/show/112650098,18:00,5:59,310,"$733,764.00","$677,600.00","$2,185.81","$56,545.20"
SFO - ANC,54146711787,SFO-BWI-ANC 4,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/54146711787,https://www.airlines-manager.com/aircraft/show/106255848,2:30,12:14,338,"$662,649.00","$614,605.00","$1,818.36","$63,144.35"
SFO - ANC,54146711788,SFO-BWI-ANC 5,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/54146711788,https://www.airlines-manager.com/aircraft/show/106255849,3:30,13:14,338,"$662,649.00","$614,605.00","$1,818.36","$63,144.35"
SFO - ANC,54178655458,SFO-BWI-ANC 1,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/54178655458,https://www.airlines-manager.com/aircraft/show/106255845,19:00,4:44,338,"$662,649.00","$614,605.00","$1,818.36","$63,144.35"
SFO - ANC,54183441495,SFO-BWI-ANC 2,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/54183441495,https://www.airlines-manager.com/aircraft/show/106255846,20:00,5:44,338,"$662,649.00","$614,605.00","$1,818.36","$63,144.35"
SFO - ANC,54183441496,SFO-BWI-ANC 3,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/54183441496,https://www.airlines-manager.com/aircraft/show/106255847,21:00,6:44,337,"$659,259.00","$611,284.00","$1,813.90","$62,803.15"
SFO - ATL,54146712028,SFO 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/54146712028,https://www.airlines-manager.com/aircraft/show/85806724,6:45,16:29,932,"$1,616,492.00","$1,420,224.00","$1,523.85","$145,913.42"
SFO - ATL,54173399462,SFO-ATL-DFW S,A321-200,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/54173399462,https://www.airlines-manager.com/aircraft/show/106766698,15:00,1:29,232,"$628,938.00","$548,198.00","$2,362.92","$52,292.34"
SFO - ATL,54178655412,SFO 84A-2 E1,777-300,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/54178655412,https://www.airlines-manager.com/aircraft/show/86776211,18:30,4:14,853,"$1,518,842.00","$1,328,273.00","$1,557.18","$136,466.40"
SFO - ATL,54183441517,SFO-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/54183441517,https://www.airlines-manager.com/aircraft/show/107467212,20:00,6:29,56,"$233,404.00","$186,139.00","$3,323.91","$17,755.71"
SFO - AUS,54146711544,SFO-OGG-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/54146711544,https://www.airlines-manager.com/aircraft/show/92773481,0:45,8:44,310,"$500,986.00","$456,733.00","$1,473.33","$57,210.81"
SFO - AUS,54146711545,SFO-OGG-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/54146711545,https://www.airlines-manager.com/aircraft/show/92773480,2:45,10:44,310,"$500,986.00","$456,733.00","$1,473.33","$57,210.81"
SFO - AUS,54168162230,SFO-OGG-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/54168162230,https://www.airlines-manager.com/aircraft/show/92773479,13:30,21:29,310,"$500,986.00","$456,733.00","$1,473.33","$57,210.81"
SFO - AUS,54173399495,SFO-OGG-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/54173399495,https://www.airlines-manager.com/aircraft/show/92773478,15:30,23:29,310,"$500,986.00","$456,733.00","$1,473.33","$57,210.81"
SFO - AUS,54178655420,SFO-OGG-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/54178655420,https://www.airlines-manager.com/aircraft/show/92773477,18:30,2:29,309,"$498,120.00","$453,929.00","$1,469.03","$56,859.58"
SFO - BDL,54146711976,SFO-RSW-BDL 1,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/54146711976,https://www.airlines-manager.com/aircraft/show/84915098,4:45,16:59,320,"$741,734.00","$677,616.00","$2,117.55","$55,390.95"
SFO - BDL,54146711977,SFO-RSW-BDL 2,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/54146711977,https://www.airlines-manager.com/aircraft/show/84915099,6:45,18:59,320,"$741,734.00","$677,616.00","$2,117.55","$55,390.95"
SFO - BDL,54156164657,SFO-RSW-BDL 5,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/54156164657,https://www.airlines-manager.com/aircraft/show/84915102,8:45,20:59,320,"$741,734.00","$677,616.00","$2,117.55","$55,390.95"
SFO - BDL,54178655245,SFO-RSW-BDL 3,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/54178655245,https://www.airlines-manager.com/aircraft/show/84915100,17:00,5:14,320,"$741,734.00","$677,616.00","$2,117.55","$55,390.95"
SFO - BDL,54178655246,SFO-RSW-BDL 4,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/54178655246,https://www.airlines-manager.com/aircraft/show/84915101,19:00,7:14,319,"$739,561.00","$675,531.00","$2,117.65","$55,220.52"
SFO - BFF,54146711613,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/54146711613,https://www.airlines-manager.com/aircraft/show/114912306,1:00,7:14,112,"$183,580.00","$161,191.00","$1,439.21","$25,859.52"
SFO - BFF,54146711614,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/54146711614,https://www.airlines-manager.com/aircraft/show/114912268,2:15,8:29,310,"$389,607.00","$355,311.00","$1,146.16","$57,001.76"
SFO - BFF,54156164612,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/54156164612,https://www.airlines-manager.com/aircraft/show/114912263,8:15,14:29,310,"$389,607.00","$355,311.00","$1,146.16","$57,001.76"
SFO - BFF,54173399524,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/54173399524,https://www.airlines-manager.com/aircraft/show/114912264,16:00,22:14,310,"$389,607.00","$355,311.00","$1,146.16","$57,001.76"
SFO - BFF,54187257424,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/54187257424,https://www.airlines-manager.com/aircraft/show/114912267,23:30,5:44,310,"$389,607.00","$355,311.00","$1,146.16","$57,001.76"
SFO - BHM,54146712006,SFO-BHM-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/54146712006,https://www.airlines-manager.com/aircraft/show/117782568,5:30,15:29,320,"$621,859.00","$567,764.00","$1,774.26","$56,871.19"
SFO - BHM,54156164524,SFO-BHM-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/54156164524,https://www.airlines-manager.com/aircraft/show/117782569,7:00,16:59,320,"$621,859.00","$567,764.00","$1,774.26","$56,871.19"
SFO - BHM,54173399407,SFO-BHM-GRR 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/54173399407,https://www.airlines-manager.com/aircraft/show/117782583,15:00,0:59,198,"$468,047.00","$428,770.00","$2,165.51","$42,948.58"
SFO - BHM,54183441471,SFO-BHM-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/54183441471,https://www.airlines-manager.com/aircraft/show/117782567,19:45,5:44,320,"$621,859.00","$567,764.00","$1,774.26","$56,871.19"
SFO - BHM,54187257279,SFO-BHM-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/54187257279,https://www.airlines-manager.com/aircraft/show/117782566,22:00,7:59,320,"$621,859.00","$567,764.00","$1,774.26","$56,871.19"
SFO - BIL,54146711779,SFO-FAR-BIL 4,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/54146711779,https://www.airlines-manager.com/aircraft/show/117782587,2:15,7:59,310,"$355,725.00","$323,542.00","$1,043.68","$56,431.74"
SFO - BIL,54156164685,SFO-FAR-BIL 3,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/54156164685,https://www.airlines-manager.com/aircraft/show/117782586,9:15,14:59,310,"$355,725.00","$323,542.00","$1,043.68","$56,431.74"
SFO - BIL,54173399463,SFO-FAR-BIL 2,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/54173399463,https://www.airlines-manager.com/aircraft/show/117782585,15:00,20:44,310,"$355,725.00","$323,542.00","$1,043.68","$56,431.74"
SFO - BIL,54187257371,SFO-FAR-BIL 1,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/54187257371,https://www.airlines-manager.com/aircraft/show/117782584,22:45,4:29,306,"$353,043.00","$320,959.00","$1,048.89","$55,981.22"
SFO - BNA,54146711623,SFO-BNA-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/54146711623,https://www.airlines-manager.com/aircraft/show/103365580,1:15,10:59,320,"$605,610.00","$549,333.00","$1,716.67","$56,438.32"
SFO - BNA,54146711624,SFO-BNA-CMH 6,ERJ-175,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/54146711624,https://www.airlines-manager.com/aircraft/show/82323681,6:00,15:44,112,"$285,056.00","$251,196.00","$2,242.82","$25,807.81"
SFO - BNA,54168162172,SFO-BNA-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/54168162172,https://www.airlines-manager.com/aircraft/show/103365583,13:00,22:44,320,"$605,610.00","$549,333.00","$1,716.67","$56,438.32"
SFO - BNA,54173399352,SFO-BNA-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/54173399352,https://www.airlines-manager.com/aircraft/show/103365582,15:00,0:44,320,"$605,610.00","$549,333.00","$1,716.67","$56,438.32"
SFO - BNA,54173399362,SFO-BNA-CMH 5,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/54173399362,https://www.airlines-manager.com/aircraft/show/103365579,15:45,1:29,320,"$605,610.00","$549,333.00","$1,716.67","$56,438.32"
SFO - BNA,54187257418,SFO-BNA-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/54187257418,https://www.airlines-manager.com/aircraft/show/103365581,23:15,8:59,320,"$605,610.00","$549,333.00","$1,716.67","$56,438.32"
SFO - BOI,54146711642,SFO-CLE-MKE 2,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/54146711642,https://www.airlines-manager.com/aircraft/show/92519369,1:15,5:29,320,"$247,187.00","$216,452.00",$676.41,"$51,130.39"
SFO - BOI,54162072851,SFO-CLE-MKE 1,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/54162072851,https://www.airlines-manager.com/aircraft/show/92519368,9:45,13:59,320,"$247,187.00","$216,452.00",$676.41,"$51,130.39"
SFO - BOI,54173399340,SFO-CLE-MKE 4,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/54173399340,https://www.airlines-manager.com/aircraft/show/92519371,14:45,18:59,320,"$247,187.00","$216,452.00",$676.41,"$51,130.39"
SFO - BOI,54173399341,SFO-CLE-MKE 3,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/54173399341,https://www.airlines-manager.com/aircraft/show/92519367,16:00,20:14,320,"$247,187.00","$216,452.00",$676.41,"$51,130.39"
SFO - BOS,54146711459,SFO-BOS-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/54146711459,https://www.airlines-manager.com/aircraft/show/104864961,0:15,12:44,338,"$837,724.00","$774,367.00","$2,291.03","$62,032.07"
SFO - BOS,54168162093,SFO CARGO 2,737-700,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/54168162093,https://www.airlines-manager.com/aircraft/show/107573128,12:00,0:29,0,"$212,591.00","$161,688.00",#DIV/0!,"$12,952.31"
SFO - BOS,54168162094,SFO-BOS-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/54168162094,https://www.airlines-manager.com/aircraft/show/104901564,13:00,1:29,338,"$837,724.00","$774,367.00","$2,291.03","$62,032.07"
SFO - BOS,54168162095,SFO-BOS-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/54168162095,https://www.airlines-manager.com/aircraft/show/104870960,14:00,2:29,338,"$837,724.00","$774,367.00","$2,291.03","$62,032.07"
SFO - BOS,54173399515,SFO-BOS-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/54173399515,https://www.airlines-manager.com/aircraft/show/104874465,15:45,4:14,338,"$837,724.00","$774,367.00","$2,291.03","$62,032.07"
SFO - BOS,54183441538,SFO-BOS-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/54183441538,https://www.airlines-manager.com/aircraft/show/104901544,20:15,8:44,338,"$837,724.00","$774,367.00","$2,291.03","$62,032.07"
SFO - BTV,54146711409,SFO-BTV-LEX 4,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/54146711409,https://www.airlines-manager.com/aircraft/show/112650092,0:00,11:59,310,"$729,848.00","$673,863.00","$2,173.75","$56,233.35"
SFO - BTV,54146711410,SFO-BTV-LEX 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/54146711410,https://www.airlines-manager.com/aircraft/show/112650089,6:00,17:59,198,"$546,636.00","$501,737.00","$2,534.03","$41,869.57"
SFO - BTV,54168162263,SFO-BTV-LEX 1,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/54168162263,https://www.airlines-manager.com/aircraft/show/112650095,14:00,1:59,310,"$729,848.00","$673,863.00","$2,173.75","$56,233.35"
SFO - BTV,54178655353,SFO-BTV-LEX 2,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/54178655353,https://www.airlines-manager.com/aircraft/show/112650094,18:00,5:59,310,"$729,848.00","$673,863.00","$2,173.75","$56,233.35"
SFO - BTV,54183441516,SFO-BTV-LEX 3,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/54183441516,https://www.airlines-manager.com/aircraft/show/112650093,20:00,7:59,310,"$729,848.00","$673,863.00","$2,173.75","$56,233.35"
SFO - BUF,54146711658,SFO-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/54146711658,https://www.airlines-manager.com/aircraft/show/112650108,1:30,12:29,310,"$687,067.00","$633,609.00","$2,043.90","$57,688.22"
SFO - BUF,54146711659,SFO-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/54146711659,https://www.airlines-manager.com/aircraft/show/112650107,5:30,16:29,310,"$687,067.00","$633,609.00","$2,043.90","$57,688.22"
SFO - BUF,54156164565,SFO-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/54156164565,https://www.airlines-manager.com/aircraft/show/112650106,7:30,18:29,310,"$687,067.00","$633,609.00","$2,043.90","$57,688.22"
SFO - BUF,54168162217,SFO-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/54168162217,https://www.airlines-manager.com/aircraft/show/112650105,13:00,23:59,310,"$687,067.00","$633,609.00","$2,043.90","$57,688.22"
SFO - BUF,54178655356,SFO-PVD-BUF 5,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/54178655356,https://www.airlines-manager.com/aircraft/show/112650104,18:00,4:59,310,"$687,067.00","$633,609.00","$2,043.90","$57,688.22"
SFO - BUR,54146711767,SFO-SAV-JAN 1,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/54146711767,https://www.airlines-manager.com/aircraft/show/114912265,2:15,5:44,310,"$173,461.00","$150,951.00",$486.94,"$43,335.22"
SFO - BUR,54146711768,SFO-SAV-JAN 4,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/54146711768,https://www.airlines-manager.com/aircraft/show/114912270,4:15,7:44,310,"$173,461.00","$150,951.00",$486.94,"$43,335.22"
SFO - BUR,54162073077,SFO-SAV-JAN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/54162073077,https://www.airlines-manager.com/aircraft/show/114917486,11:30,14:59,198,"$130,719.00","$112,697.00",$569.18,"$32,353.21"
SFO - BUR,54173399490,SFO-SAV-JAN 3,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/54173399490,https://www.airlines-manager.com/aircraft/show/114912269,15:30,18:59,310,"$173,461.00","$150,951.00",$486.94,"$43,335.22"
SFO - BUR,54178655261,SFO-SAV-JAN 2,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/54178655261,https://www.airlines-manager.com/aircraft/show/114912266,17:00,20:29,310,"$173,461.00","$150,951.00",$486.94,"$43,335.22"
SFO - BWI,54146711491,SFO CARGO 2,737-700,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/54146711491,https://www.airlines-manager.com/aircraft/show/107573128,0:30,11:59,0,"$197,440.00","$150,701.00",$0.00,"$13,123.45"
SFO - BWI,54146711492,SFO-BWI-ANC 1,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/54146711492,https://www.airlines-manager.com/aircraft/show/106255845,4:45,16:14,338,"$785,039.00","$726,656.00","$2,149.87","$63,279.19"
SFO - BWI,54146711493,SFO-BWI-ANC 2,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/54146711493,https://www.airlines-manager.com/aircraft/show/106255846,5:45,17:14,338,"$785,039.00","$726,656.00","$2,149.87","$63,279.19"
SFO - BWI,54146711494,SFO-BWI-ANC 3,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/54146711494,https://www.airlines-manager.com/aircraft/show/106255847,6:45,18:14,338,"$785,039.00","$726,656.00","$2,149.87","$63,279.19"
SFO - BWI,54173399468,SFO-BWI-ANC 4,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/54173399468,https://www.airlines-manager.com/aircraft/show/106255848,15:00,2:29,338,"$785,039.00","$726,656.00","$2,149.87","$63,279.19"
SFO - BWI,54173399469,SFO-BWI-ANC 5,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/54173399469,https://www.airlines-manager.com/aircraft/show/106255849,16:00,3:29,338,"$785,039.00","$726,656.00","$2,149.87","$63,279.19"
SFO - CAK,54146711755,SFO-ALB-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/54146711755,https://www.airlines-manager.com/aircraft/show/112650099,2:00,12:29,310,"$657,886.00","$607,712.00","$1,960.36","$57,969.35"
SFO - CAK,54146711756,SFO-ALB-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/54146711756,https://www.airlines-manager.com/aircraft/show/112650098,6:00,16:29,310,"$657,886.00","$607,712.00","$1,960.36","$57,969.35"
SFO - CAK,54168162277,SFO-ALB-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/54168162277,https://www.airlines-manager.com/aircraft/show/112650097,14:00,0:29,310,"$657,886.00","$607,712.00","$1,960.36","$57,969.35"
SFO - CAK,54178655448,SFO-ALB-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/54178655448,https://www.airlines-manager.com/aircraft/show/112650096,19:00,5:29,310,"$657,886.00","$607,712.00","$1,960.36","$57,969.35"
SFO - CAK,54183441618,SFO-ALB-CAK 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/54183441618,https://www.airlines-manager.com/aircraft/show/112650090,21:00,7:29,198,"$494,289.00","$454,056.00","$2,293.21","$43,312.18"
SFO - CHS,54146711654,SFO-MHT-CHS 1,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/54146711654,https://www.airlines-manager.com/aircraft/show/114917465,1:30,12:44,320,"$701,616.00","$642,467.00","$2,007.71","$57,192.91"
SFO - CHS,54146711655,SFO-MHT-CHS 2,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/54146711655,https://www.airlines-manager.com/aircraft/show/114917464,5:30,16:44,320,"$701,616.00","$642,467.00","$2,007.71","$57,192.91"
SFO - CHS,54156164639,SFO-MHT-CHS 5 B,A319-100,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/54156164639,https://www.airlines-manager.com/aircraft/show/114912262,8:30,19:59,198,"$529,189.00","$485,932.00","$2,454.20","$42,316.28"
SFO - CHS,54168162154,SFO-MHT-CHS 3,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/54168162154,https://www.airlines-manager.com/aircraft/show/114917463,13:00,0:14,320,"$701,616.00","$642,467.00","$2,007.71","$57,192.91"
SFO - CHS,54178655264,SFO-MHT-CHS 4,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/54178655264,https://www.airlines-manager.com/aircraft/show/114266973,17:00,4:14,320,"$701,616.00","$642,467.00","$2,007.71","$57,192.91"
SFO - CID,54146711679,SFO-YEG-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/54146711679,https://www.airlines-manager.com/aircraft/show/117782561,1:30,9:59,320,"$528,124.00","$481,175.00","$1,503.67","$56,720.04"
SFO - CID,54146711680,SFO-YEG-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/54146711680,https://www.airlines-manager.com/aircraft/show/116932364,6:30,14:59,320,"$528,124.00","$481,175.00","$1,503.67","$56,720.04"
SFO - CID,54168162148,SFO-YEG-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/54168162148,https://www.airlines-manager.com/aircraft/show/117782559,13:00,21:29,320,"$528,124.00","$481,175.00","$1,503.67","$56,720.04"
SFO - CID,54178655456,SFO-YEG-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/54178655456,https://www.airlines-manager.com/aircraft/show/117782560,19:00,3:29,320,"$528,124.00","$481,175.00","$1,503.67","$56,720.04"
SFO - CID,54183441606,SFO-YEG-YYC 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/54183441606,https://www.airlines-manager.com/aircraft/show/117782581,21:00,5:29,198,"$399,077.00","$365,143.00","$1,844.16","$43,042.40"
SFO - CLE,54146712001,SFO-CLE-MKE 2,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/54146712001,https://www.airlines-manager.com/aircraft/show/92519369,5:30,15:59,320,"$650,843.00","$593,124.00","$1,853.51","$56,577.81"
SFO - CLE,54146712002,SFO-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/54146712002,https://www.airlines-manager.com/aircraft/show/107467212,6:30,16:59,112,"$305,917.00","$270,776.00","$2,417.64","$25,829.19"
SFO - CLE,54156164573,SFO-CLE-MKE 5,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/54156164573,https://www.airlines-manager.com/aircraft/show/92519370,7:30,17:59,320,"$650,843.00","$593,124.00","$1,853.51","$56,577.81"
SFO - CLE,54168162261,SFO-CLE-MKE 1,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/54168162261,https://www.airlines-manager.com/aircraft/show/92519368,14:00,0:29,320,"$650,843.00","$593,124.00","$1,853.51","$56,577.81"
SFO - CLE,54178655447,SFO-CLE-MKE 4,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/54178655447,https://www.airlines-manager.com/aircraft/show/92519371,19:00,5:29,320,"$650,843.00","$593,124.00","$1,853.51","$56,577.81"
SFO - CLE,54183441540,SFO-CLE-MKE 3,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/54183441540,https://www.airlines-manager.com/aircraft/show/92519367,20:15,6:44,319,"$647,146.00","$589,514.00","$1,848.01","$56,233.45"
SFO - CLT,54146711392,SFO-IAD-CLT 3,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/54146711392,https://www.airlines-manager.com/aircraft/show/96135563,0:00,10:44,400,"$889,119.00","$809,154.00","$2,022.89","$75,387.02"
SFO - CLT,54146711393,SFO-IAD-CLT 4,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/54146711393,https://www.airlines-manager.com/aircraft/show/96135562,6:00,16:44,400,"$889,119.00","$809,154.00","$2,022.89","$75,387.02"
SFO - CLT,54168162220,SFO-IAD-CLT 1,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/54168162220,https://www.airlines-manager.com/aircraft/show/96135565,13:15,23:59,400,"$889,119.00","$809,154.00","$2,022.89","$75,387.02"
SFO - CLT,54173399486,SFO-IAD-CLT 5,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/54173399486,https://www.airlines-manager.com/aircraft/show/96135561,15:15,1:59,400,"$889,119.00","$809,154.00","$2,022.89","$75,387.02"
SFO - CLT,54178655297,SFO-IAD-CLT 2,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/54178655297,https://www.airlines-manager.com/aircraft/show/96135564,17:15,3:59,400,"$889,119.00","$809,154.00","$2,022.89","$75,387.02"
SFO - CMH,54146711546,SFO-BNA-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/54146711546,https://www.airlines-manager.com/aircraft/show/103365582,0:45,10:59,320,"$635,712.00","$578,415.00","$1,807.55","$56,522.64"
SFO - CMH,54146711547,SFO-BNA-CMH 5,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/54146711547,https://www.airlines-manager.com/aircraft/show/103365579,5:30,15:44,320,"$635,712.00","$578,415.00","$1,807.55","$56,522.64"
SFO - CMH,54168162171,SFO-BNA-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/54168162171,https://www.airlines-manager.com/aircraft/show/103365581,13:00,23:14,320,"$635,712.00","$578,415.00","$1,807.55","$56,522.64"
SFO - CMH,54173399366,SFO-BNA-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/54173399366,https://www.airlines-manager.com/aircraft/show/103365580,15:00,1:14,320,"$635,712.00","$578,415.00","$1,807.55","$56,522.64"
SFO - CMH,54173399367,SFO-BNA-CMH 6,ERJ-175,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/54173399367,https://www.airlines-manager.com/aircraft/show/82323681,15:45,1:59,112,"$299,378.00","$264,568.00","$2,362.21","$25,853.55"
SFO - CMH,54187257377,SFO-BNA-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/54187257377,https://www.airlines-manager.com/aircraft/show/103365583,22:45,8:59,320,"$635,712.00","$578,415.00","$1,807.55","$56,522.64"
SFO - CVG,54146711988,SFO-IND-CVG 3,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/54146711988,https://www.airlines-manager.com/aircraft/show/99316504,5:00,14:59,310,"$627,255.00","$574,228.00","$1,852.35","$57,518.66"
SFO - CVG,54156164522,SFO-IND-CVG 5,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/54156164522,https://www.airlines-manager.com/aircraft/show/99316502,7:00,16:59,310,"$627,255.00","$574,228.00","$1,852.35","$57,518.66"
SFO - CVG,54168162183,SFO-IND-CVG 2,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/54168162183,https://www.airlines-manager.com/aircraft/show/99316505,13:00,22:59,310,"$627,255.00","$574,228.00","$1,852.35","$57,518.66"
SFO - CVG,54173399402,SFO-IND-CVG 4,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/54173399402,https://www.airlines-manager.com/aircraft/show/99316503,15:00,0:59,310,"$627,255.00","$574,228.00","$1,852.35","$57,518.66"
SFO - CVG,54178655268,SFO-IND-CVG 6,ERJ-175,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/54178655268,https://www.airlines-manager.com/aircraft/show/99174346,17:00,2:59,112,"$294,167.00","$258,804.00","$2,310.75","$25,923.61"
SFO - CVG,54187257364,SFO-IND-CVG 1,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/54187257364,https://www.airlines-manager.com/aircraft/show/99316506,22:45,8:44,310,"$627,255.00","$574,228.00","$1,852.35","$57,518.66"
SFO - DEL,54146711365,SFO 168B-1 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/54146711365,https://www.airlines-manager.com/aircraft/show/86832727,0:00,5:29,1046,"$5,781,072.00","$5,362,503.00","$5,126.68","$977,964.07"
SFO - DEL,54146711366,SFO 168A-1 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/54146711366,https://www.airlines-manager.com/aircraft/show/86969602,2:00,7:29,1044,"$5,771,663.00","$5,353,631.00","$5,128.00","$976,346.08"
SFO - DEN,54146711440,SFO-IAH-MEX 5,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/54146711440,https://www.airlines-manager.com/aircraft/show/101045335,0:15,5:59,400,"$473,056.00","$405,092.00","$1,012.73","$70,655.58"
SFO - DEN,54146711441,SFO-IAH-MEX 1,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/54146711441,https://www.airlines-manager.com/aircraft/show/101045339,6:30,12:14,400,"$473,056.00","$405,092.00","$1,012.73","$70,655.58"
SFO - DEN,54156164626,SFO-IAH-MEX 4,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/54156164626,https://www.airlines-manager.com/aircraft/show/101045336,8:30,14:14,400,"$473,056.00","$405,092.00","$1,012.73","$70,655.58"
SFO - DEN,54168162178,SFO-IAH-MEX 3,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/54168162178,https://www.airlines-manager.com/aircraft/show/101045337,13:00,18:44,400,"$473,056.00","$405,092.00","$1,012.73","$70,655.58"
SFO - DEN,54187257308,SFO-IAH-MEX 2,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/54187257308,https://www.airlines-manager.com/aircraft/show/101045338,22:15,3:59,376,"$456,354.00","$388,991.00","$1,034.55","$67,847.27"
SFO - DFW,54146711687,SFO-ATL-DFW S,A321-200,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/54146711687,https://www.airlines-manager.com/aircraft/show/106766698,1:30,9:14,232,"$481,033.00","$419,800.00","$1,809.48","$54,284.48"
SFO - DFW,54173399579,SFO 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/54173399579,https://www.airlines-manager.com/aircraft/show/85806724,16:30,23:59,932,"$1,227,311.00","$1,082,216.00","$1,161.18","$144,616.84"
SFO - DFW,54187257402,SFO 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/54187257402,https://www.airlines-manager.com/aircraft/show/85537213,23:15,6:44,736,"$1,044,650.00","$909,236.00","$1,235.38","$121,501.47"
SFO - DSM,54146711962,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/54146711962,https://www.airlines-manager.com/aircraft/show/108410858,4:30,12:29,320,"$506,531.00","$460,693.00","$1,439.67","$57,706.85"
SFO - DSM,54168162135,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/54168162135,https://www.airlines-manager.com/aircraft/show/108410857,13:00,20:59,320,"$506,531.00","$460,693.00","$1,439.67","$57,706.85"
SFO - DSM,54173399457,SFO-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/54173399457,https://www.airlines-manager.com/aircraft/show/108466264,15:00,23:14,112,"$239,963.00","$212,542.00","$1,897.70","$25,814.82"
SFO - DSM,54187257359,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/54187257359,https://www.airlines-manager.com/aircraft/show/108410856,22:45,6:44,320,"$506,531.00","$460,693.00","$1,439.67","$57,706.85"
SFO - DSM,54187257360,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/54187257360,https://www.airlines-manager.com/aircraft/show/108410859,23:30,7:29,320,"$506,531.00","$460,693.00","$1,439.67","$57,706.85"
SFO - DTW,54146711969,SFO-ORD-DTW 4,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/54146711969,https://www.airlines-manager.com/aircraft/show/101045331,4:30,14:29,400,"$819,690.00","$744,567.00","$1,861.42","$74,581.00"
SFO - DTW,54146711970,SFO-ORD-DTW 3,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/54146711970,https://www.airlines-manager.com/aircraft/show/101045332,5:00,14:59,400,"$819,690.00","$744,567.00","$1,861.42","$74,581.00"
SFO - DTW,54173399349,SFO-ORD-DTW 2,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/54173399349,https://www.airlines-manager.com/aircraft/show/101045333,15:00,0:59,400,"$819,690.00","$744,567.00","$1,861.42","$74,581.00"
SFO - DTW,54178655288,SFO-ORD-DTW 5,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/54178655288,https://www.airlines-manager.com/aircraft/show/101045330,17:00,2:59,400,"$819,690.00","$744,567.00","$1,861.42","$74,581.00"
SFO - DTW,54187257280,SFO-ORD-DTW 1,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/54187257280,https://www.airlines-manager.com/aircraft/show/101045334,22:00,7:59,400,"$819,690.00","$744,567.00","$1,861.42","$74,581.00"
SFO - DXB,54146712003,SFO 168B-2 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/54146712003,https://www.airlines-manager.com/aircraft/show/87566901,5:30,12:29,1046,"$5,983,901.00","$5,518,713.00","$5,276.02","$790,269.16"
SFO - DXB,54156164574,SFO 168A-2 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/54156164574,https://www.airlines-manager.com/aircraft/show/86596991,7:30,14:29,1045,"$5,977,796.00","$5,512,922.00","$5,275.52","$789,439.90"
SFO - ELP,54146712007,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/54146712007,https://www.airlines-manager.com/aircraft/show/114912267,5:45,11:44,310,"$374,706.00","$339,934.00","$1,096.56","$56,813.48"
SFO - ELP,54156164548,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/54156164548,https://www.airlines-manager.com/aircraft/show/114912306,7:15,13:14,112,"$177,463.00","$154,869.00","$1,382.76","$25,883.40"
SFO - ELP,54156164549,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/54156164549,https://www.airlines-manager.com/aircraft/show/114912268,8:30,14:29,310,"$374,706.00","$339,934.00","$1,096.56","$56,813.48"
SFO - ELP,54173399459,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/54173399459,https://www.airlines-manager.com/aircraft/show/114912263,15:00,20:59,310,"$374,706.00","$339,934.00","$1,096.56","$56,813.48"
SFO - ELP,54187257321,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/54187257321,https://www.airlines-manager.com/aircraft/show/114912264,22:15,4:14,309,"$373,601.00","$338,863.00","$1,096.64","$56,634.48"
SFO - EUG,54146711709,SFO-BHM-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/54146711709,https://www.airlines-manager.com/aircraft/show/117782568,1:45,5:29,320,"$216,870.00","$188,838.00",$590.12,"$50,581.61"
SFO - EUG,54146711710,SFO-BHM-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/54146711710,https://www.airlines-manager.com/aircraft/show/117782569,3:15,6:59,320,"$216,870.00","$188,838.00",$590.12,"$50,581.61"
SFO - EUG,54173399520,SFO-BHM-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/54173399520,https://www.airlines-manager.com/aircraft/show/117782567,16:00,19:44,320,"$216,870.00","$188,838.00",$590.12,"$50,581.61"
SFO - EUG,54178655346,SFO-BHM-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/54178655346,https://www.airlines-manager.com/aircraft/show/117782566,17:45,21:29,264,"$193,828.00","$166,475.00",$630.59,"$44,591.52"
SFO - FAR,54146711577,SFO-FAR-BIL 3,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/54146711577,https://www.airlines-manager.com/aircraft/show/117782586,1:00,8:44,310,"$489,736.00","$450,231.00","$1,452.36","$58,219.53"
SFO - FAR,54156164553,SFO-FAR-BIL 2,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/54156164553,https://www.airlines-manager.com/aircraft/show/117782585,7:15,14:59,310,"$489,736.00","$450,231.00","$1,452.36","$58,219.53"
SFO - FAR,54173399464,SFO-FAR-BIL 1,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/54173399464,https://www.airlines-manager.com/aircraft/show/117782584,15:00,22:44,310,"$489,736.00","$450,231.00","$1,452.36","$58,219.53"
SFO - FAR,54178655422,SFO-FAR-BIL 4,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/54178655422,https://www.airlines-manager.com/aircraft/show/117782587,18:30,2:14,310,"$489,736.00","$450,231.00","$1,452.36","$58,219.53"
SFO - FAT,54146711745,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/54146711745,https://www.airlines-manager.com/aircraft/show/108410857,2:00,4:44,320,"$95,282.00","$71,086.00",$222.14,"$26,007.07"
SFO - FAT,54162073086,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/54162073086,https://www.airlines-manager.com/aircraft/show/108410856,11:45,14:29,320,"$95,282.00","$71,086.00",$222.14,"$26,007.07"
SFO - FAT,54168162133,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/54168162133,https://www.airlines-manager.com/aircraft/show/108410859,13:00,15:44,320,"$95,282.00","$71,086.00",$222.14,"$26,007.07"
SFO - FAT,54178655359,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/54178655359,https://www.airlines-manager.com/aircraft/show/108410858,18:00,20:44,320,"$95,282.00","$71,086.00",$222.14,"$26,007.07"
SFO - FAT,54187257408,SFO-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/54187257408,https://www.airlines-manager.com/aircraft/show/108466264,23:15,1:59,65,"$33,076.00","$20,839.00",$320.60,"$7,624.02"
SFO - FLL,54146711465,SFO-FLL-TPA 2,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/54146711465,https://www.airlines-manager.com/aircraft/show/97955543,0:15,12:14,320,"$736,216.00","$668,188.00","$2,088.09","$55,759.78"
SFO - FLL,54146711466,SFO-FLL-TPA 4,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/54146711466,https://www.airlines-manager.com/aircraft/show/97955541,4:15,16:14,320,"$736,216.00","$668,188.00","$2,088.09","$55,759.78"
SFO - FLL,54156164578,SFO-FLL-TPA 6 B,A319-100,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/54156164578,https://www.airlines-manager.com/aircraft/show/97900729,7:30,19:44,198,"$553,648.00","$504,169.00","$2,546.31","$41,212.72"
SFO - FLL,54168162193,SFO-FLL-TPA 1,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/54168162193,https://www.airlines-manager.com/aircraft/show/97955544,13:00,0:59,320,"$736,216.00","$668,188.00","$2,088.09","$55,759.78"
SFO - FLL,54178655287,SFO-FLL-TPA 3,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/54178655287,https://www.airlines-manager.com/aircraft/show/97955542,17:00,4:59,320,"$736,216.00","$668,188.00","$2,088.09","$55,759.78"
SFO - FLL,54183441505,SFO-FLL-TPA 5,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/54183441505,https://www.airlines-manager.com/aircraft/show/97955540,20:00,7:59,320,"$736,216.00","$668,188.00","$2,088.09","$55,759.78"
SFO - FSD,54146711499,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/54146711499,https://www.airlines-manager.com/aircraft/show/107160378,0:30,7:59,320,"$469,831.00","$426,549.00","$1,332.97","$56,999.87"
SFO - FSD,54146711500,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/54146711500,https://www.airlines-manager.com/aircraft/show/107132310,2:00,9:29,112,"$222,435.00","$196,716.00","$1,756.39","$26,287.22"
SFO - FSD,54146711501,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/54146711501,https://www.airlines-manager.com/aircraft/show/107160381,3:00,10:29,320,"$469,831.00","$426,549.00","$1,332.97","$56,999.87"
SFO - FSD,54156164592,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/54156164592,https://www.airlines-manager.com/aircraft/show/107160380,8:00,15:29,320,"$469,831.00","$426,549.00","$1,332.97","$56,999.87"
SFO - FSD,54173399549,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/54173399549,https://www.airlines-manager.com/aircraft/show/107160379,16:00,23:29,284,"$437,296.00","$395,370.00","$1,392.15","$52,833.41"
SFO - GRR,54146711607,SFO-BHM-GRR 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/54146711607,https://www.airlines-manager.com/aircraft/show/117782583,1:00,10:44,198,"$456,419.00","$417,968.00","$2,110.95","$42,941.92"
SFO - GRR,54146711608,SFO-BHM-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/54146711608,https://www.airlines-manager.com/aircraft/show/117782567,5:45,15:29,320,"$605,707.00","$552,735.00","$1,727.30","$56,787.84"
SFO - GRR,54156164589,SFO-BHM-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/54156164589,https://www.airlines-manager.com/aircraft/show/117782566,8:00,17:44,320,"$605,707.00","$552,735.00","$1,727.30","$56,787.84"
SFO - GRR,54173399521,SFO-BHM-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/54173399521,https://www.airlines-manager.com/aircraft/show/117782568,16:00,1:44,320,"$605,707.00","$552,735.00","$1,727.30","$56,787.84"
SFO - GRR,54178655313,SFO-BHM-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/54178655313,https://www.airlines-manager.com/aircraft/show/117782569,17:30,3:14,320,"$605,707.00","$552,735.00","$1,727.30","$56,787.84"
SFO - HKG,54183441637,SFO 168B-6 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/54183441637,https://www.airlines-manager.com/aircraft/show/87083947,21:15,23:59,1046,"$5,253,940.00","$4,855,351.00","$4,641.83","$1,776,347.93"
SFO - HKG,54187257407,SFO 168A-6 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/54187257407,https://www.airlines-manager.com/aircraft/show/88032836,23:15,1:59,1044,"$5,239,554.00","$4,841,555.00","$4,637.50","$1,771,300.61"
SFO - IAD,54146711400,SFO-IAD-CLT 1,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/54146711400,https://www.airlines-manager.com/aircraft/show/96135565,0:00,11:14,400,"$907,937.00","$829,919.00","$2,074.80","$73,880.03"
SFO - IAD,54146711401,SFO-IAD-CLT 5,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/54146711401,https://www.airlines-manager.com/aircraft/show/96135561,4:00,15:14,400,"$907,937.00","$829,919.00","$2,074.80","$73,880.03"
SFO - IAD,54146711402,SFO-IAD-CLT 2,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/54146711402,https://www.airlines-manager.com/aircraft/show/96135564,6:00,17:14,400,"$907,937.00","$829,919.00","$2,074.80","$73,880.03"
SFO - IAD,54168162119,SFO-IAD-CLT 3,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/54168162119,https://www.airlines-manager.com/aircraft/show/96135563,12:45,23:59,400,"$907,937.00","$829,919.00","$2,074.80","$73,880.03"
SFO - IAD,54173399604,SFO-IAD-CLT 4,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/54173399604,https://www.airlines-manager.com/aircraft/show/96135562,16:45,3:59,399,"$906,569.00","$828,614.00","$2,076.73","$73,763.86"
SFO - IAH,54146711974,SFO-IAH-MEX 2,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/54146711974,https://www.airlines-manager.com/aircraft/show/101045338,4:45,12:59,400,"$691,517.00","$621,709.00","$1,554.27","$75,511.21"
SFO - IAH,54146711975,SFO-IAH-MEX 5,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/54146711975,https://www.airlines-manager.com/aircraft/show/101045335,6:45,14:59,400,"$691,517.00","$621,709.00","$1,554.27","$75,511.21"
SFO - IAH,54168162180,SFO-IAH-MEX 1,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/54168162180,https://www.airlines-manager.com/aircraft/show/101045339,13:00,21:14,400,"$691,517.00","$621,709.00","$1,554.27","$75,511.21"
SFO - IAH,54173399347,SFO-IAH-MEX 4,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/54173399347,https://www.airlines-manager.com/aircraft/show/101045336,15:00,23:14,400,"$691,517.00","$621,709.00","$1,554.27","$75,511.21"
SFO - IAH,54183441458,SFO-IAH-MEX 3,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/54183441458,https://www.airlines-manager.com/aircraft/show/101045337,19:30,3:44,400,"$691,517.00","$621,709.00","$1,554.27","$75,511.21"
SFO - ICN,54146711484,SFO 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/54146711484,https://www.airlines-manager.com/aircraft/show/85537213,0:15,22:44,932,"$3,589,018.00","$3,238,995.00","$3,475.32","$144,062.05"
SFO - ICN,54168162211,SFO-ICN B,787-10,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/54168162211,https://www.airlines-manager.com/aircraft/show/110213648,13:00,10:59,592,"$2,626,537.00","$2,428,664.00","$4,102.47","$110,477.51"
SFO - ICN,54183441529,SFO 84A-1 E1,777-300,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/54183441529,https://www.airlines-manager.com/aircraft/show/86776212,20:00,18:29,864,"$3,397,816.00","$3,060,771.00","$3,542.56","$136,135.11"
SFO - ICT,54146711535,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/54146711535,https://www.airlines-manager.com/aircraft/show/114912263,0:45,8:14,310,"$467,206.00","$428,071.00","$1,380.87","$57,203.25"
SFO - ICT,54156164608,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/54156164608,https://www.airlines-manager.com/aircraft/show/114912264,8:00,15:29,310,"$467,206.00","$428,071.00","$1,380.87","$57,203.25"
SFO - ICT,54173399525,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/54173399525,https://www.airlines-manager.com/aircraft/show/114912267,16:00,23:29,310,"$467,206.00","$428,071.00","$1,380.87","$57,203.25"
SFO - ICT,54178655330,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/54178655330,https://www.airlines-manager.com/aircraft/show/114912306,17:30,0:59,112,"$220,592.00","$194,736.00","$1,738.71","$26,022.63"
SFO - ICT,54178655331,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/54178655331,https://www.airlines-manager.com/aircraft/show/114912268,18:45,2:14,310,"$467,206.00","$428,071.00","$1,380.87","$57,203.25"
SFO - IND,54146711991,SFO-IND-CVG 4,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/54146711991,https://www.airlines-manager.com/aircraft/show/99316503,5:15,14:59,310,"$602,937.00","$552,887.00","$1,783.51","$56,803.46"
SFO - IND,54156164554,SFO-IND-CVG 6,ERJ-175,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/54156164554,https://www.airlines-manager.com/aircraft/show/99174346,7:15,16:59,112,"$283,094.00","$249,680.00","$2,229.29","$25,652.05"
SFO - IND,54168162184,SFO-IND-CVG 1,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/54168162184,https://www.airlines-manager.com/aircraft/show/99316506,13:00,22:44,310,"$602,937.00","$552,887.00","$1,783.51","$56,803.46"
SFO - IND,54173399401,SFO-IND-CVG 3,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/54173399401,https://www.airlines-manager.com/aircraft/show/99316504,15:00,0:44,310,"$602,937.00","$552,887.00","$1,783.51","$56,803.46"
SFO - IND,54178655290,SFO-IND-CVG 5,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/54178655290,https://www.airlines-manager.com/aircraft/show/99316502,17:00,2:44,310,"$602,937.00","$552,887.00","$1,783.51","$56,803.46"
SFO - IND,54187257395,SFO-IND-CVG 2,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/54187257395,https://www.airlines-manager.com/aircraft/show/99316505,23:00,8:44,307,"$596,593.00","$546,742.00","$1,780.92","$56,172.12"
SFO - JAN,54146711769,SFO-SAV-JAN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/54146711769,https://www.airlines-manager.com/aircraft/show/114917486,2:15,11:29,198,"$437,594.00","$401,149.00","$2,026.01","$43,445.74"
SFO - JAN,54146711770,SFO-SAV-JAN 3,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/54146711770,https://www.airlines-manager.com/aircraft/show/114912269,6:15,15:29,310,"$581,341.00","$535,884.00","$1,728.66","$58,037.98"
SFO - JAN,54156164582,SFO-SAV-JAN 2,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/54156164582,https://www.airlines-manager.com/aircraft/show/114912266,7:45,16:59,310,"$581,341.00","$535,884.00","$1,728.66","$58,037.98"
SFO - JAN,54178655262,SFO-SAV-JAN 1,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/54178655262,https://www.airlines-manager.com/aircraft/show/114912265,17:00,2:14,310,"$581,341.00","$535,884.00","$1,728.66","$58,037.98"
SFO - JAN,54178655263,SFO-SAV-JAN 4,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/54178655263,https://www.airlines-manager.com/aircraft/show/114912270,19:00,4:14,310,"$581,341.00","$535,884.00","$1,728.66","$58,037.98"
SFO - JAX,54146712015,SFO-JAX-SAT 5,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/54146712015,https://www.airlines-manager.com/aircraft/show/86377315,6:00,17:14,310,"$701,478.00","$646,409.00","$2,085.19","$57,543.83"
SFO - JAX,54168162177,SFO-JAX-SAT 1,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/54168162177,https://www.airlines-manager.com/aircraft/show/86375568,13:00,0:14,310,"$701,478.00","$646,409.00","$2,085.19","$57,543.83"
SFO - JAX,54173399365,SFO-JAX-SAT 2,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/54173399365,https://www.airlines-manager.com/aircraft/show/86371267,15:00,2:14,310,"$701,478.00","$646,409.00","$2,085.19","$57,543.83"
SFO - JAX,54183441603,SFO-JAX-SAT 3,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/54183441603,https://www.airlines-manager.com/aircraft/show/86385102,21:00,8:14,310,"$701,478.00","$646,409.00","$2,085.19","$57,543.83"
SFO - JAX,54187257398,SFO-JAX-SAT 4,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/54187257398,https://www.airlines-manager.com/aircraft/show/86378760,23:00,10:14,308,"$698,066.00","$643,143.00","$2,088.13","$57,253.09"
SFO - JFK,54146711596,SFO-MIA-JFK 4,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/54146711596,https://www.airlines-manager.com/aircraft/show/89233034,1:00,12:59,400,"$960,740.00","$862,242.00","$2,155.61","$71,953.44"
SFO - JFK,54156164525,SFO-MIA-JFK 5,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/54156164525,https://www.airlines-manager.com/aircraft/show/89233035,7:00,18:59,400,"$960,740.00","$862,242.00","$2,155.61","$71,953.44"
SFO - JFK,54168162214,SFO-MIA-JFK 1,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/54168162214,https://www.airlines-manager.com/aircraft/show/89233032,13:00,0:59,400,"$960,740.00","$862,242.00","$2,155.61","$71,953.44"
SFO - JFK,54173399517,SFO-MIA-JFK 2,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/54173399517,https://www.airlines-manager.com/aircraft/show/84622093,16:00,3:59,400,"$960,740.00","$862,242.00","$2,155.61","$71,953.44"
SFO - JFK,54178655454,SFO-MIA-JFK 3,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/54178655454,https://www.airlines-manager.com/aircraft/show/89233031,19:00,6:59,400,"$960,740.00","$862,242.00","$2,155.61","$71,953.44"
SFO - KOA,54146711812,SFO-KOA-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/54146711812,https://www.airlines-manager.com/aircraft/show/112650101,2:45,13:59,310,"$702,530.00","$647,658.00","$2,089.22","$57,655.01"
SFO - KOA,54146711813,SFO-KOA-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/54146711813,https://www.airlines-manager.com/aircraft/show/112650100,4:45,15:59,310,"$702,530.00","$647,658.00","$2,089.22","$57,655.01"
SFO - KOA,54168162216,SFO-KOA-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/54168162216,https://www.airlines-manager.com/aircraft/show/112650091,13:00,0:14,198,"$527,337.00","$483,338.00","$2,441.10","$43,027.12"
SFO - KOA,54178655267,SFO-KOA-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/54178655267,https://www.airlines-manager.com/aircraft/show/112650103,17:00,4:14,310,"$702,530.00","$647,658.00","$2,089.22","$57,655.01"
SFO - KOA,54183441514,SFO-KOA-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/54183441514,https://www.airlines-manager.com/aircraft/show/112650102,20:00,7:14,310,"$702,530.00","$647,658.00","$2,089.22","$57,655.01"
SFO - LAS,54146712016,SFO-BOS-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/54146712016,https://www.airlines-manager.com/aircraft/show/104901564,6:00,9:44,338,"$216,975.00","$178,282.00",$527.46,"$47,754.11"
SFO - LAS,54156164533,SFO-BOS-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/54156164533,https://www.airlines-manager.com/aircraft/show/104870960,7:00,10:44,338,"$216,975.00","$178,282.00",$527.46,"$47,754.11"
SFO - LAS,54168162062,SFO-BOS-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/54168162062,https://www.airlines-manager.com/aircraft/show/104874465,12:00,15:44,338,"$216,975.00","$178,282.00",$527.46,"$47,754.11"
SFO - LAS,54168162063,SFO CARGO 1,737-700,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/54168162063,https://www.airlines-manager.com/aircraft/show/107343113,12:00,15:44,0,"$55,783.00","$30,593.00",$0.00,"$8,194.55"
SFO - LAS,54173399581,SFO-BOS-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/54173399581,https://www.airlines-manager.com/aircraft/show/104901544,16:30,20:14,338,"$216,975.00","$178,282.00",$527.46,"$47,754.11"
SFO - LAS,54183441571,SFO-BOS-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/54183441571,https://www.airlines-manager.com/aircraft/show/104864961,20:30,0:14,338,"$216,975.00","$178,282.00",$527.46,"$47,754.11"
SFO - LAX,54146711743,SFO-PHL-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/54146711743,https://www.airlines-manager.com/aircraft/show/97900730,2:00,5:29,198,"$133,274.00","$101,260.00",$511.41,"$29,069.86"
SFO - LAX,54146711744,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/54146711744,https://www.airlines-manager.com/aircraft/show/92390872,4:30,7:59,320,"$175,700.00","$128,489.00",$401.53,"$36,886.79"
SFO - LAX,54156164559,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/54156164559,https://www.airlines-manager.com/aircraft/show/92390869,7:30,10:59,320,"$175,700.00","$128,489.00",$401.53,"$36,886.79"
SFO - LAX,54156164560,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/54156164560,https://www.airlines-manager.com/aircraft/show/92390870,8:15,11:44,320,"$175,700.00","$128,489.00",$401.53,"$36,886.79"
SFO - LAX,54168162048,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/54168162048,https://www.airlines-manager.com/aircraft/show/92390873,12:00,15:29,320,"$175,700.00","$128,489.00",$401.53,"$36,886.79"
SFO - LAX,54173399603,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/54173399603,https://www.airlines-manager.com/aircraft/show/92390871,16:45,20:14,320,"$175,700.00","$128,489.00",$401.53,"$36,886.79"
SFO - LEX,54146711748,SFO-BTV-LEX 1,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/54146711748,https://www.airlines-manager.com/aircraft/show/112650095,2:00,11:59,310,"$622,836.00","$575,388.00","$1,856.09","$57,634.86"
SFO - LEX,54146711749,SFO-BTV-LEX 2,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/54146711749,https://www.airlines-manager.com/aircraft/show/112650094,6:00,15:59,310,"$622,836.00","$575,388.00","$1,856.09","$57,634.86"
SFO - LEX,54156164602,SFO-BTV-LEX 3,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/54156164602,https://www.airlines-manager.com/aircraft/show/112650093,8:00,17:59,310,"$622,836.00","$575,388.00","$1,856.09","$57,634.86"
SFO - LEX,54168162278,SFO-BTV-LEX 4,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/54168162278,https://www.airlines-manager.com/aircraft/show/112650092,14:00,23:59,310,"$622,836.00","$575,388.00","$1,856.09","$57,634.86"
SFO - LEX,54183441513,SFO-BTV-LEX 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/54183441513,https://www.airlines-manager.com/aircraft/show/112650089,20:00,5:59,198,"$468,601.00","$430,555.00","$2,174.52","$43,127.38"
SFO - LGB,54146711881,SFO-FAR-BIL 2,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/54146711881,https://www.airlines-manager.com/aircraft/show/117782585,3:15,6:44,310,"$180,890.00","$156,791.00",$505.78,"$45,011.77"
SFO - LGB,54162072993,SFO-FAR-BIL 1,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/54162072993,https://www.airlines-manager.com/aircraft/show/117782584,11:00,14:29,310,"$180,890.00","$156,791.00",$505.78,"$45,011.77"
SFO - LGB,54173399370,SFO-FAR-BIL 4,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/54173399370,https://www.airlines-manager.com/aircraft/show/117782587,15:00,18:29,310,"$180,890.00","$156,791.00",$505.78,"$45,011.77"
SFO - LGB,54183441654,SFO-FAR-BIL 3,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/54183441654,https://www.airlines-manager.com/aircraft/show/117782586,21:30,0:59,310,"$180,890.00","$156,791.00",$505.78,"$45,011.77"
SFO - LIT,54146711773,SFO-SDF-LIT 3,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/54146711773,https://www.airlines-manager.com/aircraft/show/94886627,2:15,10:59,310,"$540,459.00","$497,431.00","$1,604.62","$56,957.75"
SFO - LIT,54146711774,SFO-SDF-LIT 5,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/54146711774,https://www.airlines-manager.com/aircraft/show/106453498,3:15,11:59,310,"$540,459.00","$497,431.00","$1,604.62","$56,957.75"
SFO - LIT,54168162294,SFO-SDF-LIT 2,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/54168162294,https://www.airlines-manager.com/aircraft/show/94886628,14:00,22:44,310,"$540,459.00","$497,431.00","$1,604.62","$56,957.75"
SFO - LIT,54173399466,SFO-SDF-LIT 4,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/54173399466,https://www.airlines-manager.com/aircraft/show/106453500,15:00,23:44,310,"$540,459.00","$497,431.00","$1,604.62","$56,957.75"
SFO - LIT,54187257441,SFO-SDF-LIT 1,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/54187257441,https://www.airlines-manager.com/aircraft/show/106453499,23:45,8:29,310,"$540,459.00","$497,431.00","$1,604.62","$56,957.75"
SFO - MCI,54156164521,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/54156164521,https://www.airlines-manager.com/aircraft/show/88239554,7:00,14:59,320,"$505,017.00","$456,091.00","$1,425.28","$57,130.40"
SFO - MCI,54178655241,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/54178655241,https://www.airlines-manager.com/aircraft/show/105223003,17:00,0:59,198,"$380,902.00","$345,894.00","$1,746.94","$43,327.01"
SFO - MCI,54178655242,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/54178655242,https://www.airlines-manager.com/aircraft/show/88239553,17:00,0:59,320,"$505,017.00","$456,091.00","$1,425.28","$57,130.40"
SFO - MCI,54178655243,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/54178655243,https://www.airlines-manager.com/aircraft/show/88239557,18:45,2:44,320,"$505,017.00","$456,091.00","$1,425.28","$57,130.40"
SFO - MCI,54187257405,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/54187257405,https://www.airlines-manager.com/aircraft/show/88239555,23:15,7:14,320,"$505,017.00","$456,091.00","$1,425.28","$57,130.40"
SFO - MCO,54146711897,SFO-MCO-MSP 2,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/54146711897,https://www.airlines-manager.com/aircraft/show/105367367,3:30,14:59,338,"$791,753.00","$726,784.00","$2,150.25","$63,290.33"
SFO - MCO,54146711898,SFO-MCO-MSP 5,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/54146711898,https://www.airlines-manager.com/aircraft/show/105367364,4:30,15:59,338,"$791,753.00","$726,784.00","$2,150.25","$63,290.33"
SFO - MCO,54173399384,SFO-MCO-MSP 1,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/54173399384,https://www.airlines-manager.com/aircraft/show/105367368,15:00,2:29,338,"$791,753.00","$726,784.00","$2,150.25","$63,290.33"
SFO - MCO,54178655283,SFO-MCO-MSP 4,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/54178655283,https://www.airlines-manager.com/aircraft/show/105367365,17:00,4:29,338,"$791,753.00","$726,784.00","$2,150.25","$63,290.33"
SFO - MCO,54178655284,SFO-MCO-MSP 3,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/54178655284,https://www.airlines-manager.com/aircraft/show/105367366,19:15,6:44,338,"$791,753.00","$726,784.00","$2,150.25","$63,290.33"
SFO - MCO,54183441563,SFO CARGO 1,737-700,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/54183441563,https://www.airlines-manager.com/aircraft/show/107343113,20:30,7:59,0,"$198,945.00","$148,298.00",#DIV/0!,"$12,914.19"
SFO - MEM,54146711831,SFO-MEM-PIT 4,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/54146711831,https://www.airlines-manager.com/aircraft/show/98788934,2:45,11:59,310,"$574,328.00","$525,604.00","$1,695.50","$56,924.62"
SFO - MEM,54146711832,SFO-MEM-PIT 6,ERJ-175,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/54146711832,https://www.airlines-manager.com/aircraft/show/98675305,5:45,14:59,112,"$269,663.00","$237,281.00","$2,118.58","$25,698.30"
SFO - MEM,54168162186,SFO-MEM-PIT 1,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/54168162186,https://www.airlines-manager.com/aircraft/show/98788937,13:00,22:14,310,"$574,328.00","$525,604.00","$1,695.50","$56,924.62"
SFO - MEM,54173399560,SFO-MEM-PIT 3,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/54173399560,https://www.airlines-manager.com/aircraft/show/98788935,16:00,1:14,310,"$574,328.00","$525,604.00","$1,695.50","$56,924.62"
SFO - MEM,54178655453,SFO-MEM-PIT 5,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/54178655453,https://www.airlines-manager.com/aircraft/show/98788933,19:00,4:14,310,"$574,328.00","$525,604.00","$1,695.50","$56,924.62"
SFO - MEM,54187257442,SFO-MEM-PIT 2,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/54187257442,https://www.airlines-manager.com/aircraft/show/98788936,23:45,8:59,310,"$574,328.00","$525,604.00","$1,695.50","$56,924.62"
SFO - MEX,54146711909,SFO-IAH-MEX 3,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/54146711909,https://www.airlines-manager.com/aircraft/show/101045337,3:45,12:59,400,"$769,718.00","$698,851.00","$1,747.13","$75,687.83"
SFO - MEX,54168162179,SFO-IAH-MEX 2,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/54168162179,https://www.airlines-manager.com/aircraft/show/101045338,13:00,22:14,400,"$769,718.00","$698,851.00","$1,747.13","$75,687.83"
SFO - MEX,54173399348,SFO-IAH-MEX 5,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/54173399348,https://www.airlines-manager.com/aircraft/show/101045335,15:00,0:14,400,"$769,718.00","$698,851.00","$1,747.13","$75,687.83"
SFO - MEX,54183441624,SFO-IAH-MEX 1,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/54183441624,https://www.airlines-manager.com/aircraft/show/101045339,21:15,6:29,400,"$769,718.00","$698,851.00","$1,747.13","$75,687.83"
SFO - MEX,54187257409,SFO-IAH-MEX 4,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/54187257409,https://www.airlines-manager.com/aircraft/show/101045336,23:15,8:29,368,"$716,645.00","$647,743.00","$1,760.17","$70,152.67"
SFO - MFR,54146711609,SFO-TYS-MSN 2,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/54146711609,https://www.airlines-manager.com/aircraft/show/117782564,1:00,4:29,320,"$172,586.00","$145,954.00",$456.11,"$41,900.67"
SFO - MFR,54146711610,SFO-TYS-MSN 1,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/54146711610,https://www.airlines-manager.com/aircraft/show/117782565,4:00,7:29,320,"$172,586.00","$145,954.00",$456.11,"$41,900.67"
SFO - MFR,54173399523,SFO-TYS-MSN 3,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/54173399523,https://www.airlines-manager.com/aircraft/show/117782563,16:00,19:29,320,"$172,586.00","$145,954.00",$456.11,"$41,900.67"
SFO - MFR,54178655305,SFO-TYS-MSN 4,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/54178655305,https://www.airlines-manager.com/aircraft/show/117782562,17:15,20:44,288,"$162,169.00","$135,821.00",$471.60,"$38,991.67"
SFO - MHT,54146711482,SFO-MHT-CHS 3,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/54146711482,https://www.airlines-manager.com/aircraft/show/114917463,0:15,12:44,320,"$758,403.00","$694,418.00","$2,170.06","$55,627.61"
SFO - MHT,54146711483,SFO-MHT-CHS 4,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/54146711483,https://www.airlines-manager.com/aircraft/show/114266973,4:15,16:44,320,"$758,403.00","$694,418.00","$2,170.06","$55,627.61"
SFO - MHT,54168162153,SFO-MHT-CHS 1,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/54168162153,https://www.airlines-manager.com/aircraft/show/114917465,13:00,1:29,320,"$758,403.00","$694,418.00","$2,170.06","$55,627.61"
SFO - MHT,54178655265,SFO-MHT-CHS 2,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/54178655265,https://www.airlines-manager.com/aircraft/show/114917464,17:00,5:29,320,"$758,403.00","$694,418.00","$2,170.06","$55,627.61"
SFO - MHT,54183441508,SFO-MHT-CHS 5 B,A319-100,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/54183441508,https://www.airlines-manager.com/aircraft/show/114912262,20:00,8:29,198,"$568,571.00","$521,644.00","$2,634.57","$41,787.24"
SFO - MIA,54146711598,SFO-MIA-JFK 1,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/54146711598,https://www.airlines-manager.com/aircraft/show/89233032,1:00,12:59,400,"$954,153.00","$864,310.00","$2,160.78","$72,126.01"
SFO - MIA,54146711599,SFO-MIA-JFK 2,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/54146711599,https://www.airlines-manager.com/aircraft/show/84622093,4:00,15:59,400,"$954,153.00","$864,310.00","$2,160.78","$72,126.01"
SFO - MIA,54156164523,SFO-MIA-JFK 3,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/54156164523,https://www.airlines-manager.com/aircraft/show/89233031,7:00,18:59,400,"$954,153.00","$864,310.00","$2,160.78","$72,126.01"
SFO - MIA,54168162213,SFO-MIA-JFK 4,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/54168162213,https://www.airlines-manager.com/aircraft/show/89233034,13:00,0:59,400,"$954,153.00","$864,310.00","$2,160.78","$72,126.01"
SFO - MIA,54178655460,SFO-MIA-JFK 5,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/54178655460,https://www.airlines-manager.com/aircraft/show/89233035,19:00,6:59,400,"$954,153.00","$864,310.00","$2,160.78","$72,126.01"
SFO - MKE,54146711512,SFO-CLE-MKE 1,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/54146711512,https://www.airlines-manager.com/aircraft/show/92519368,0:30,9:44,320,"$583,505.00","$530,737.00","$1,658.55","$57,480.54"
SFO - MKE,54146711513,SFO-CLE-MKE 4,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/54146711513,https://www.airlines-manager.com/aircraft/show/92519371,5:30,14:44,320,"$583,505.00","$530,737.00","$1,658.55","$57,480.54"
SFO - MKE,54146711514,SFO-CLE-MKE 3,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/54146711514,https://www.airlines-manager.com/aircraft/show/92519367,6:45,15:59,320,"$583,505.00","$530,737.00","$1,658.55","$57,480.54"
SFO - MKE,54173399553,SFO-CLE-MKE 2,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/54173399553,https://www.airlines-manager.com/aircraft/show/92519369,16:00,1:14,320,"$583,505.00","$530,737.00","$1,658.55","$57,480.54"
SFO - MKE,54178655373,SFO-CLE-MKE 5,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/54178655373,https://www.airlines-manager.com/aircraft/show/92519370,18:00,3:14,320,"$583,505.00","$530,737.00","$1,658.55","$57,480.54"
SFO - MSN,54146711760,SFO-TYS-MSN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/54146711760,https://www.airlines-manager.com/aircraft/show/117782582,2:15,11:14,198,"$422,498.00","$386,836.00","$1,953.72","$43,061.52"
SFO - MSN,54156164518,SFO-TYS-MSN 4,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/54156164518,https://www.airlines-manager.com/aircraft/show/117782562,7:00,15:59,320,"$559,952.00","$510,703.00","$1,595.95","$56,850.06"
SFO - MSN,54156164519,SFO-TYS-MSN 3,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/54156164519,https://www.airlines-manager.com/aircraft/show/117782563,7:00,15:59,320,"$559,952.00","$510,703.00","$1,595.95","$56,850.06"
SFO - MSN,54173399518,SFO-TYS-MSN 2,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/54173399518,https://www.airlines-manager.com/aircraft/show/117782564,16:00,0:59,320,"$559,952.00","$510,703.00","$1,595.95","$56,850.06"
SFO - MSN,54178655455,SFO-TYS-MSN 1,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/54178655455,https://www.airlines-manager.com/aircraft/show/117782565,19:00,3:59,320,"$559,952.00","$510,703.00","$1,595.95","$56,850.06"
SFO - MSO,54146712026,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/54146712026,https://www.airlines-manager.com/aircraft/show/108410856,6:45,11:44,320,"$321,211.00","$287,500.00",$898.44,"$57,692.31"
SFO - MSO,54156164561,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/54156164561,https://www.airlines-manager.com/aircraft/show/108410859,7:30,12:29,320,"$321,211.00","$287,500.00",$898.44,"$57,692.31"
SFO - MSO,54168162134,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/54168162134,https://www.airlines-manager.com/aircraft/show/108410858,13:00,17:59,320,"$321,211.00","$287,500.00",$898.44,"$57,692.31"
SFO - MSO,54183441596,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/54183441596,https://www.airlines-manager.com/aircraft/show/108410857,21:00,1:59,265,"$287,829.00","$255,256.00",$963.23,"$51,221.94"
SFO - MSP,54146711799,SFO-MCO-MSP 1,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/54146711799,https://www.airlines-manager.com/aircraft/show/105367368,2:30,10:44,338,"$570,087.00","$520,649.00","$1,540.38","$63,236.72"
SFO - MSP,54146711800,SFO-MCO-MSP 4,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/54146711800,https://www.airlines-manager.com/aircraft/show/105367365,4:30,12:44,338,"$570,087.00","$520,649.00","$1,540.38","$63,236.72"
SFO - MSP,54146711801,SFO-MCO-MSP 3,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/54146711801,https://www.airlines-manager.com/aircraft/show/105367366,6:45,14:59,338,"$570,087.00","$520,649.00","$1,540.38","$63,236.72"
SFO - MSP,54173399390,SFO-MCO-MSP 2,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/54173399390,https://www.airlines-manager.com/aircraft/show/105367367,15:00,23:14,338,"$570,087.00","$520,649.00","$1,540.38","$63,236.72"
SFO - MSP,54173399392,SFO-MCO-MSP 5,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/54173399392,https://www.airlines-manager.com/aircraft/show/105367364,16:00,0:14,338,"$570,087.00","$520,649.00","$1,540.38","$63,236.72"
SFO - MSY,54146711852,SFO-MSY-STL 6,ERJ-175,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/54146711852,https://www.airlines-manager.com/aircraft/show/103534666,3:00,12:29,112,"$278,463.00","$245,789.00","$2,194.54","$25,918.00"
SFO - MSY,54146711853,SFO-MSY-STL 2,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/54146711853,https://www.airlines-manager.com/aircraft/show/98075266,6:00,15:29,320,"$591,162.00","$536,928.00","$1,677.90","$56,618.07"
SFO - MSY,54156164588,SFO-MSY-STL 4,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/54156164588,https://www.airlines-manager.com/aircraft/show/98075264,8:00,17:29,320,"$591,162.00","$536,928.00","$1,677.90","$56,618.07"
SFO - MSY,54168162191,SFO-MSY-STL 1,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/54168162191,https://www.airlines-manager.com/aircraft/show/98075267,13:00,22:29,320,"$591,162.00","$536,928.00","$1,677.90","$56,618.07"
SFO - MSY,54183441640,SFO-MSY-STL 3,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/54183441640,https://www.airlines-manager.com/aircraft/show/98075265,21:15,6:44,320,"$591,162.00","$536,928.00","$1,677.90","$56,618.07"
SFO - MSY,54187257419,SFO-MSY-STL 5,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/54187257419,https://www.airlines-manager.com/aircraft/show/98075263,23:15,8:44,320,"$591,162.00","$536,928.00","$1,677.90","$56,618.07"
SFO - NRT,54146711398,SFO 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/54146711398,https://www.airlines-manager.com/aircraft/show/85806656,0:00,20:29,932,"$3,433,419.00","$3,108,763.00","$3,335.58","$151,770.37"
SFO - NRT,54146711399,SFO 84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/54146711399,https://www.airlines-manager.com/aircraft/show/86776210,4:15,0:44,932,"$3,433,419.00","$3,108,763.00","$3,335.58","$151,770.37"
SFO - OGG,54146711793,SFO-OGG-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/54146711793,https://www.airlines-manager.com/aircraft/show/92773477,2:30,13:44,310,"$694,716.00","$642,154.00","$2,071.46","$57,165.04"
SFO - OGG,54168162231,SFO-OGG-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/54168162231,https://www.airlines-manager.com/aircraft/show/92773481,13:30,0:44,310,"$694,716.00","$642,154.00","$2,071.46","$57,165.04"
SFO - OGG,54173399497,SFO-OGG-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/54173399497,https://www.airlines-manager.com/aircraft/show/92773480,15:30,2:44,310,"$694,716.00","$642,154.00","$2,071.46","$57,165.04"
SFO - OGG,54183441647,SFO-OGG-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/54183441647,https://www.airlines-manager.com/aircraft/show/92773479,21:30,8:44,310,"$694,716.00","$642,154.00","$2,071.46","$57,165.04"
SFO - OGG,54187257423,SFO-OGG-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/54187257423,https://www.airlines-manager.com/aircraft/show/92773478,23:30,10:44,310,"$694,716.00","$642,154.00","$2,071.46","$57,165.04"
SFO - OKC,54146711515,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/54146711515,https://www.airlines-manager.com/aircraft/show/107160380,0:30,7:59,320,"$474,286.00","$430,044.00","$1,343.89","$57,466.90"
SFO - OKC,54156164593,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/54156164593,https://www.airlines-manager.com/aircraft/show/107160379,8:00,15:29,320,"$474,286.00","$430,044.00","$1,343.89","$57,466.90"
SFO - OKC,54178655239,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/54178655239,https://www.airlines-manager.com/aircraft/show/107160378,17:00,0:29,320,"$474,286.00","$430,044.00","$1,343.89","$57,466.90"
SFO - OKC,54178655240,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/54178655240,https://www.airlines-manager.com/aircraft/show/107132310,18:30,1:59,112,"$224,021.00","$197,878.00","$1,766.77","$26,442.49"
SFO - OKC,54183441454,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/54183441454,https://www.airlines-manager.com/aircraft/show/107160381,19:30,2:59,320,"$474,286.00","$430,044.00","$1,343.89","$57,466.90"
SFO - OMA,54146711604,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/54146711604,https://www.airlines-manager.com/aircraft/show/105223003,1:00,8:44,198,"$365,184.00","$332,849.00","$1,681.06","$43,040.82"
SFO - OMA,54146711605,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/54146711605,https://www.airlines-manager.com/aircraft/show/88239553,1:00,8:44,320,"$482,863.00","$437,791.00","$1,368.10","$56,610.91"
SFO - OMA,54146711606,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/54146711606,https://www.airlines-manager.com/aircraft/show/88239557,2:45,10:29,320,"$482,863.00","$437,791.00","$1,368.10","$56,610.91"
SFO - OMA,54156164543,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/54156164543,https://www.airlines-manager.com/aircraft/show/88239555,7:15,14:59,320,"$482,863.00","$437,791.00","$1,368.10","$56,610.91"
SFO - OMA,54173399400,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/54173399400,https://www.airlines-manager.com/aircraft/show/88239554,15:00,22:44,320,"$482,863.00","$437,791.00","$1,368.10","$56,610.91"
SFO - ONT,54146711972,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/54146711972,https://www.airlines-manager.com/aircraft/show/107160379,4:30,7:59,320,"$179,764.00","$149,631.00",$467.60,"$42,956.27"
SFO - ONT,54168162146,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/54168162146,https://www.airlines-manager.com/aircraft/show/107160378,13:00,16:29,320,"$179,764.00","$149,631.00",$467.60,"$42,956.27"
SFO - ONT,54173399455,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/54173399455,https://www.airlines-manager.com/aircraft/show/107132310,15:00,18:29,112,"$82,970.00","$66,847.00",$596.85,"$19,190.53"
SFO - ONT,54173399456,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/54173399456,https://www.airlines-manager.com/aircraft/show/107160381,16:00,19:29,320,"$179,764.00","$149,631.00",$467.60,"$42,956.27"
SFO - ONT,54183441595,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/54183441595,https://www.airlines-manager.com/aircraft/show/107160380,21:00,0:29,320,"$179,764.00","$149,631.00",$467.60,"$42,956.27"
SFO - ORD,54146712020,SFO-ORD-DTW 2,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/54146712020,https://www.airlines-manager.com/aircraft/show/101045333,6:00,14:59,400,"$756,958.00","$669,557.00","$1,673.89","$74,533.25"
SFO - ORD,54156164572,SFO-ORD-DTW 5,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/54156164572,https://www.airlines-manager.com/aircraft/show/101045330,7:30,16:29,400,"$756,958.00","$669,557.00","$1,673.89","$74,533.25"
SFO - ORD,54168162181,SFO-ORD-DTW 1,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/54168162181,https://www.airlines-manager.com/aircraft/show/101045334,13:00,21:59,400,"$756,958.00","$669,557.00","$1,673.89","$74,533.25"
SFO - ORD,54173399368,SFO-ORD-DTW 4,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/54173399368,https://www.airlines-manager.com/aircraft/show/101045331,15:00,23:59,400,"$756,958.00","$669,557.00","$1,673.89","$74,533.25"
SFO - ORD,54183441518,SFO-ORD-DTW 3,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/54183441518,https://www.airlines-manager.com/aircraft/show/101045332,20:00,4:59,400,"$756,958.00","$669,557.00","$1,673.89","$74,533.25"
SFO - ORF,54146711998,SFO-ORF-RIC 3,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/54146711998,https://www.airlines-manager.com/aircraft/show/108328836,5:30,17:29,310,"$729,217.00","$673,105.00","$2,171.31","$56,170.10"
SFO - ORF,54156164569,SFO-ORF-RIC 4,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/54156164569,https://www.airlines-manager.com/aircraft/show/108328837,7:30,19:29,310,"$729,217.00","$673,105.00","$2,171.31","$56,170.10"
SFO - ORF,54178655360,SFO-ORF-RIC 1,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/54178655360,https://www.airlines-manager.com/aircraft/show/108328834,18:00,5:59,310,"$729,217.00","$673,105.00","$2,171.31","$56,170.10"
SFO - ORF,54183441526,SFO-ORF-RIC 2,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/54183441526,https://www.airlines-manager.com/aircraft/show/108328835,20:00,7:59,310,"$729,217.00","$673,105.00","$2,171.31","$56,170.10"
SFO - ORF,54187257288,SFO-ORF-RIC 5 B,A319-100,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/54187257288,https://www.airlines-manager.com/aircraft/show/108328833,22:00,9:59,197,"$543,932.00","$499,012.00","$2,533.06","$41,642.17"
SFO - PBI,54146711951,SFO-PBI-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/54146711951,https://www.airlines-manager.com/aircraft/show/100301186,4:15,16:14,320,"$730,653.00","$666,322.00","$2,082.26","$55,604.06"
SFO - PBI,54146711952,SFO-PBI-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/54146711952,https://www.airlines-manager.com/aircraft/show/100301185,6:15,18:14,320,"$730,653.00","$666,322.00","$2,082.26","$55,604.06"
SFO - PBI,54178655255,SFO-PBI-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/54178655255,https://www.airlines-manager.com/aircraft/show/100301188,17:00,4:59,320,"$730,653.00","$666,322.00","$2,082.26","$55,604.06"
SFO - PBI,54178655256,SFO-PBI-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/54178655256,https://www.airlines-manager.com/aircraft/show/100301187,19:00,6:59,320,"$730,653.00","$666,322.00","$2,082.26","$55,604.06"
SFO - PBI,54183441614,SFO-PBI-RDU 5,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/54183441614,https://www.airlines-manager.com/aircraft/show/100301184,21:00,8:59,320,"$730,653.00","$666,322.00","$2,082.26","$55,604.06"
SFO - PDX,54146711449,SFO-MCO-MSP 5,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/54146711449,https://www.airlines-manager.com/aircraft/show/105367364,0:15,4:29,338,"$271,208.00","$241,811.00",$715.42,"$57,120.71"
SFO - PDX,54162072989,SFO-MCO-MSP 1,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/54162072989,https://www.airlines-manager.com/aircraft/show/105367368,10:45,14:59,338,"$271,208.00","$241,811.00",$715.42,"$57,120.71"
SFO - PDX,54168162125,SFO-MCO-MSP 4,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/54168162125,https://www.airlines-manager.com/aircraft/show/105367365,12:45,16:59,338,"$271,208.00","$241,811.00",$715.42,"$57,120.71"
SFO - PDX,54173399388,SFO-MCO-MSP 3,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/54173399388,https://www.airlines-manager.com/aircraft/show/105367366,15:00,19:14,338,"$271,208.00","$241,811.00",$715.42,"$57,120.71"
SFO - PDX,54187257415,SFO-MCO-MSP 2,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/54187257415,https://www.airlines-manager.com/aircraft/show/105367367,23:15,3:29,269,"$238,512.00","$209,982.00",$780.60,"$49,602.05"
SFO - PEK,54146711536,SFO 84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/54146711536,https://www.airlines-manager.com/aircraft/show/86776213,0:45,0:14,932,"$3,795,557.00","$3,394,050.00","$3,641.68","$144,530.16"
SFO - PEK,54178655235,SFO-PEK E,787-10,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/54178655235,https://www.airlines-manager.com/aircraft/show/106813006,17:00,15:59,648,"$2,825,530.00","$2,590,954.00","$3,998.39","$112,731.86"
SFO - PEK,54183441557,SFO 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/54183441557,https://www.airlines-manager.com/aircraft/show/85806656,20:30,19:59,932,"$3,795,557.00","$3,394,050.00","$3,641.68","$144,530.16"
SFO - PHL,54146711388,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/54146711388,https://www.airlines-manager.com/aircraft/show/92390871,0:00,11:44,320,"$727,252.00","$654,700.00","$2,045.94","$55,798.30"
SFO - PHL,54168162045,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/54168162045,https://www.airlines-manager.com/aircraft/show/92390872,12:00,23:44,320,"$727,252.00","$654,700.00","$2,045.94","$55,798.30"
SFO - PHL,54168162046,SFO-PHL-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/54168162046,https://www.airlines-manager.com/aircraft/show/97900730,14:00,1:59,198,"$546,374.00","$493,982.00","$2,494.86","$41,222.42"
SFO - PHL,54173399376,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/54173399376,https://www.airlines-manager.com/aircraft/show/92390869,15:00,2:44,320,"$727,252.00","$654,700.00","$2,045.94","$55,798.30"
SFO - PHL,54173399378,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/54173399378,https://www.airlines-manager.com/aircraft/show/92390870,15:45,3:29,320,"$727,252.00","$654,700.00","$2,045.94","$55,798.30"
SFO - PHL,54178655483,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/54178655483,https://www.airlines-manager.com/aircraft/show/92390873,19:15,6:59,320,"$727,252.00","$654,700.00","$2,045.94","$55,798.30"
SFO - PHX,54146711660,SFO-BOS-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/54146711660,https://www.airlines-manager.com/aircraft/show/104901564,1:30,5:59,338,"$320,643.00","$282,585.00",$836.05,"$63,030.11"
SFO - PHX,54146711661,SFO-BOS-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/54146711661,https://www.airlines-manager.com/aircraft/show/104870960,2:30,6:59,338,"$320,643.00","$282,585.00",$836.05,"$63,030.11"
SFO - PHX,54146711662,SFO-BOS-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/54146711662,https://www.airlines-manager.com/aircraft/show/104874465,4:15,8:44,338,"$320,643.00","$282,585.00",$836.05,"$63,030.11"
SFO - PHX,54168162061,SFO-BOS-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/54168162061,https://www.airlines-manager.com/aircraft/show/104901544,12:00,16:29,338,"$320,643.00","$282,585.00",$836.05,"$63,030.11"
SFO - PHX,54173399506,SFO CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/54173399506,https://www.airlines-manager.com/aircraft/show/107343113,15:45,20:29,0,"$78,319.00","$52,379.00",$0.00,"$11,065.99"
SFO - PHX,54173399507,SFO-BOS-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/54173399507,https://www.airlines-manager.com/aircraft/show/104864961,16:00,20:29,338,"$320,643.00","$282,585.00",$836.05,"$63,030.11"
SFO - PIT,54146711643,SFO-MEM-PIT 3,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/54146711643,https://www.airlines-manager.com/aircraft/show/98788935,1:15,11:59,310,"$673,591.00","$618,435.00","$1,994.95","$57,618.17"
SFO - PIT,54146711644,SFO-MEM-PIT 5,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/54146711644,https://www.airlines-manager.com/aircraft/show/98788933,4:15,14:59,310,"$673,591.00","$618,435.00","$1,994.95","$57,618.17"
SFO - PIT,54168162126,SFO-MEM-PIT 2,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/54168162126,https://www.airlines-manager.com/aircraft/show/98788936,13:00,23:44,310,"$673,591.00","$618,435.00","$1,994.95","$57,618.17"
SFO - PIT,54173399559,SFO-MEM-PIT 4,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/54173399559,https://www.airlines-manager.com/aircraft/show/98788934,16:00,2:44,310,"$673,591.00","$618,435.00","$1,994.95","$57,618.17"
SFO - PIT,54178655452,SFO-MEM-PIT 6,ERJ-175,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/54178655452,https://www.airlines-manager.com/aircraft/show/98675305,19:00,5:44,112,"$315,839.00","$278,820.00","$2,489.46","$25,977.02"
SFO - PIT,54187257318,SFO-MEM-PIT 1,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/54187257318,https://www.airlines-manager.com/aircraft/show/98788937,22:15,8:59,310,"$673,591.00","$618,435.00","$1,994.95","$57,618.17"
SFO - PSP,54146711948,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/54146711948,https://www.airlines-manager.com/aircraft/show/114912264,4:15,7:59,310,"$199,494.00","$174,696.00",$563.54,"$46,793.57"
SFO - PSP,54162073088,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/54162073088,https://www.airlines-manager.com/aircraft/show/114912267,11:45,15:29,310,"$199,494.00","$174,696.00",$563.54,"$46,793.57"
SFO - PSP,54168162225,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/54168162225,https://www.airlines-manager.com/aircraft/show/114912306,13:15,16:59,112,"$92,098.00","$76,487.00",$682.92,"$20,487.59"
SFO - PSP,54173399458,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/54173399458,https://www.airlines-manager.com/aircraft/show/114912268,15:00,18:44,310,"$199,494.00","$174,696.00",$563.54,"$46,793.57"
SFO - PSP,54183441613,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/54183441613,https://www.airlines-manager.com/aircraft/show/114912263,21:00,0:44,276,"$186,610.00","$162,203.00",$587.69,"$43,447.23"
SFO - PVD,54146711412,SFO-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/54146711412,https://www.airlines-manager.com/aircraft/show/112650105,0:00,12:29,310,"$759,776.00","$702,109.00","$2,264.87","$56,243.71"
SFO - PVD,54146711413,SFO-PVD-BUF 5,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/54146711413,https://www.airlines-manager.com/aircraft/show/112650104,5:00,17:29,310,"$759,776.00","$702,109.00","$2,264.87","$56,243.71"
SFO - PVD,54168162218,SFO-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/54168162218,https://www.airlines-manager.com/aircraft/show/112650108,13:00,1:29,310,"$759,776.00","$702,109.00","$2,264.87","$56,243.71"
SFO - PVD,54178655272,SFO-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/54178655272,https://www.airlines-manager.com/aircraft/show/112650107,17:00,5:29,310,"$759,776.00","$702,109.00","$2,264.87","$56,243.71"
SFO - PVD,54178655273,SFO-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/54178655273,https://www.airlines-manager.com/aircraft/show/112650106,19:00,7:29,309,"$755,479.00","$697,923.00","$2,258.65","$55,908.38"
SFO - PWM,54146711450,SFO-KOA-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/54146711450,https://www.airlines-manager.com/aircraft/show/112650091,0:15,12:59,198,"$574,433.00","$528,236.00","$2,667.86","$41,484.50"
SFO - PWM,54146711451,SFO-KOA-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/54146711451,https://www.airlines-manager.com/aircraft/show/112650103,4:15,16:59,310,"$767,544.00","$709,944.00","$2,290.14","$55,754.76"
SFO - PWM,54156164544,SFO-KOA-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/54156164544,https://www.airlines-manager.com/aircraft/show/112650102,7:15,19:59,310,"$767,544.00","$709,944.00","$2,290.14","$55,754.76"
SFO - PWM,54168162272,SFO-KOA-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/54168162272,https://www.airlines-manager.com/aircraft/show/112650101,14:00,2:44,310,"$767,544.00","$709,944.00","$2,290.14","$55,754.76"
SFO - PWM,54173399530,SFO-KOA-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/54173399530,https://www.airlines-manager.com/aircraft/show/112650100,16:00,4:44,310,"$767,544.00","$709,944.00","$2,290.14","$55,754.76"
SFO - RAP,54146711964,SFO-FAR-BIL 1,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/54146711964,https://www.airlines-manager.com/aircraft/show/117782584,4:30,10:59,310,"$397,901.00","$363,608.00","$1,172.93","$56,083.50"
SFO - RAP,54156164644,SFO-FAR-BIL 4,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/54156164644,https://www.airlines-manager.com/aircraft/show/117782587,8:30,14:59,310,"$397,901.00","$363,608.00","$1,172.93","$56,083.50"
SFO - RAP,54173399372,SFO-FAR-BIL 3,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/54173399372,https://www.airlines-manager.com/aircraft/show/117782586,15:00,21:29,310,"$397,901.00","$363,608.00","$1,172.93","$56,083.50"
SFO - RAP,54183441583,SFO-FAR-BIL 2,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/54183441583,https://www.airlines-manager.com/aircraft/show/117782585,20:45,3:14,284,"$378,225.00","$344,715.00","$1,213.79","$53,169.41"
SFO - RDU,54146711982,SFO-PBI-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/54146711982,https://www.airlines-manager.com/aircraft/show/100301188,5:00,16:14,320,"$709,519.00","$646,796.00","$2,021.24","$57,578.28"
SFO - RDU,54156164530,SFO-PBI-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/54156164530,https://www.airlines-manager.com/aircraft/show/100301187,7:00,18:14,320,"$709,519.00","$646,796.00","$2,021.24","$57,578.28"
SFO - RDU,54156164531,SFO-PBI-RDU 5,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/54156164531,https://www.airlines-manager.com/aircraft/show/100301184,9:00,20:14,320,"$709,519.00","$646,796.00","$2,021.24","$57,578.28"
SFO - RDU,54178655258,SFO-PBI-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/54178655258,https://www.airlines-manager.com/aircraft/show/100301186,17:00,4:14,320,"$709,519.00","$646,796.00","$2,021.24","$57,578.28"
SFO - RDU,54178655259,SFO-PBI-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/54178655259,https://www.airlines-manager.com/aircraft/show/100301185,19:00,6:14,320,"$709,519.00","$646,796.00","$2,021.24","$57,578.28"
SFO - RIC,54146712014,SFO-ORF-RIC 1,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/54146712014,https://www.airlines-manager.com/aircraft/show/108328834,6:00,17:29,310,"$723,392.00","$668,358.00","$2,155.99","$58,202.44"
SFO - RIC,54156164601,SFO-ORF-RIC 2,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/54156164601,https://www.airlines-manager.com/aircraft/show/108328835,8:00,19:29,310,"$723,392.00","$668,358.00","$2,155.99","$58,202.44"
SFO - RIC,54162072874,SFO-ORF-RIC 5 B,A319-100,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/54162072874,https://www.airlines-manager.com/aircraft/show/108328833,10:00,21:29,198,"$542,563.00","$498,431.00","$2,517.33","$43,404.73"
SFO - RIC,54178655361,SFO-ORF-RIC 3,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/54178655361,https://www.airlines-manager.com/aircraft/show/108328836,18:00,5:29,310,"$723,392.00","$668,358.00","$2,155.99","$58,202.44"
SFO - RIC,54183441531,SFO-ORF-RIC 4,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/54183441531,https://www.airlines-manager.com/aircraft/show/108328837,20:00,7:29,310,"$723,392.00","$668,358.00","$2,155.99","$58,202.44"
SFO - RNO,54146711953,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/54146711953,https://www.airlines-manager.com/aircraft/show/88239554,4:15,6:59,320,"$118,943.00","$92,623.00",$289.45,"$33,886.46"
SFO - RNO,54168162306,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/54168162306,https://www.airlines-manager.com/aircraft/show/105223003,14:15,16:59,198,"$90,039.00","$72,187.00",$364.58,"$26,409.88"
SFO - RNO,54168162307,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/54168162307,https://www.airlines-manager.com/aircraft/show/88239553,14:15,16:59,320,"$118,943.00","$92,623.00",$289.45,"$33,886.46"
SFO - RNO,54173399552,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/54173399552,https://www.airlines-manager.com/aircraft/show/88239557,16:00,18:44,320,"$118,943.00","$92,623.00",$289.45,"$33,886.46"
SFO - RNO,54183441570,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/54183441570,https://www.airlines-manager.com/aircraft/show/88239555,20:30,23:14,320,"$118,943.00","$92,623.00",$289.45,"$33,886.46"
SFO - RSW,54146711993,SFO-RSW-BDL 3,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/54146711993,https://www.airlines-manager.com/aircraft/show/84915100,5:15,16:59,320,"$726,988.00","$662,174.00","$2,069.29","$56,435.28"
SFO - RSW,54156164545,SFO-RSW-BDL 4,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/54156164545,https://www.airlines-manager.com/aircraft/show/84915101,7:15,18:59,320,"$726,988.00","$662,174.00","$2,069.29","$56,435.28"
SFO - RSW,54178655253,SFO-RSW-BDL 1,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/54178655253,https://www.airlines-manager.com/aircraft/show/84915098,17:00,4:44,320,"$726,988.00","$662,174.00","$2,069.29","$56,435.28"
SFO - RSW,54178655254,SFO-RSW-BDL 2,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/54178655254,https://www.airlines-manager.com/aircraft/show/84915099,19:00,6:44,320,"$726,988.00","$662,174.00","$2,069.29","$56,435.28"
SFO - RSW,54183441601,SFO-RSW-BDL 5,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/54183441601,https://www.airlines-manager.com/aircraft/show/84915102,21:00,8:44,320,"$726,988.00","$662,174.00","$2,069.29","$56,435.28"
SFO - SAN,54156164597,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/54156164597,https://www.airlines-manager.com/aircraft/show/92390872,8:00,11:44,320,"$216,450.00","$183,611.00",$573.78,"$49,181.52"
SFO - SAN,54162073065,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/54162073065,https://www.airlines-manager.com/aircraft/show/92390869,11:00,14:44,320,"$216,450.00","$183,611.00",$573.78,"$49,181.52"
SFO - SAN,54168162049,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/54168162049,https://www.airlines-manager.com/aircraft/show/92390870,12:00,15:44,320,"$216,450.00","$183,611.00",$573.78,"$49,181.52"
SFO - SAN,54173399494,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/54173399494,https://www.airlines-manager.com/aircraft/show/92390873,15:30,19:14,320,"$216,450.00","$183,611.00",$573.78,"$49,181.52"
SFO - SAN,54183441539,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/54183441539,https://www.airlines-manager.com/aircraft/show/92390871,20:15,23:59,313,"$213,589.00","$180,834.00",$577.74,"$48,437.68"
SFO - SAT,54146711480,SFO-JAX-SAT 1,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/54146711480,https://www.airlines-manager.com/aircraft/show/86375568,0:15,8:14,310,"$496,378.00","$455,108.00","$1,468.09","$57,007.27"
SFO - SAT,54146711481,SFO-JAX-SAT 2,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/54146711481,https://www.airlines-manager.com/aircraft/show/86371267,2:15,10:14,310,"$496,378.00","$455,108.00","$1,468.09","$57,007.27"
SFO - SAT,54168162176,SFO-JAX-SAT 3,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/54168162176,https://www.airlines-manager.com/aircraft/show/86385102,13:00,20:59,310,"$496,378.00","$455,108.00","$1,468.09","$57,007.27"
SFO - SAT,54173399364,SFO-JAX-SAT 4,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/54173399364,https://www.airlines-manager.com/aircraft/show/86378760,15:00,22:59,310,"$496,378.00","$455,108.00","$1,468.09","$57,007.27"
SFO - SAT,54178655304,SFO-JAX-SAT 5,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/54178655304,https://www.airlines-manager.com/aircraft/show/86377315,17:15,1:14,310,"$496,378.00","$455,108.00","$1,468.09","$57,007.27"
SFO - SAV,54146712013,SFO-SAV-JAN 1,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/54146712013,https://www.airlines-manager.com/aircraft/show/114912265,5:45,16:59,310,"$693,508.00","$640,203.00","$2,065.17","$56,991.36"
SFO - SAV,54156164580,SFO-SAV-JAN 4,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/54156164580,https://www.airlines-manager.com/aircraft/show/114912270,7:45,18:59,310,"$693,508.00","$640,203.00","$2,065.17","$56,991.36"
SFO - SAV,54173399380,SFO-SAV-JAN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/54173399380,https://www.airlines-manager.com/aircraft/show/114917486,15:00,2:14,198,"$521,067.00","$478,322.00","$2,415.77","$42,580.59"
SFO - SAV,54178655451,SFO-SAV-JAN 3,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/54178655451,https://www.airlines-manager.com/aircraft/show/114912269,19:00,6:14,310,"$693,508.00","$640,203.00","$2,065.17","$56,991.36"
SFO - SAV,54183441559,SFO-SAV-JAN 2,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/54183441559,https://www.airlines-manager.com/aircraft/show/114912266,20:30,7:44,310,"$693,508.00","$640,203.00","$2,065.17","$56,991.36"
SFO - SDF,54146711640,SFO-SDF-LIT 2,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/54146711640,https://www.airlines-manager.com/aircraft/show/94886628,1:15,10:59,310,"$611,784.00","$561,541.00","$1,811.42","$57,692.57"
SFO - SDF,54146711641,SFO-SDF-LIT 4,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/54146711641,https://www.airlines-manager.com/aircraft/show/106453500,2:15,11:59,310,"$611,784.00","$561,541.00","$1,811.42","$57,692.57"
SFO - SDF,54168162295,SFO-SDF-LIT 1,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/54168162295,https://www.airlines-manager.com/aircraft/show/106453499,14:00,23:44,310,"$611,784.00","$561,541.00","$1,811.42","$57,692.57"
SFO - SDF,54173399583,SFO-SDF-LIT 3,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/54173399583,https://www.airlines-manager.com/aircraft/show/94886627,16:30,2:14,310,"$611,784.00","$561,541.00","$1,811.42","$57,692.57"
SFO - SDF,54178655324,SFO-SDF-LIT 5,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/54178655324,https://www.airlines-manager.com/aircraft/show/106453498,17:30,3:14,309,"$608,303.00","$558,142.00","$1,806.28","$57,343.36"
SFO - SEA,54146711822,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/54146711822,https://www.airlines-manager.com/aircraft/show/92390869,2:45,7:29,320,"$300,138.00","$256,530.00",$801.66,"$54,196.48"
SFO - SEA,54146711823,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/54146711823,https://www.airlines-manager.com/aircraft/show/92390870,3:30,8:14,320,"$300,138.00","$256,530.00",$801.66,"$54,196.48"
SFO - SEA,54146711824,SFO-PHL-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/54146711824,https://www.airlines-manager.com/aircraft/show/97900730,5:30,10:14,198,"$228,859.00","$198,701.00","$1,003.54","$41,979.08"
SFO - SEA,54156164527,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/54156164527,https://www.airlines-manager.com/aircraft/show/92390873,7:00,11:44,320,"$300,138.00","$256,530.00",$801.66,"$54,196.48"
SFO - SEA,54168162047,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/54168162047,https://www.airlines-manager.com/aircraft/show/92390871,12:00,16:44,320,"$300,138.00","$256,530.00",$801.66,"$54,196.48"
SFO - SEA,54187257445,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/54187257445,https://www.airlines-manager.com/aircraft/show/92390872,23:45,4:29,297,"$287,118.00","$243,931.00",$821.32,"$51,534.72"
SFO - SHA,54183441512,SFO 168B-4 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/54183441512,https://www.airlines-manager.com/aircraft/show/87933798,20:00,19:59,1046,"$4,630,367.00","$4,294,834.00","$4,105.96","$179,075.77"
SFO - SHA,54187257299,SFO 168A-4 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/54187257299,https://www.airlines-manager.com/aircraft/show/86817628,22:00,21:59,1045,"$4,625,797.00","$4,290,503.00","$4,105.74","$178,895.19"
SFO - SLC,54146711407,SFO-ORD-DTW 4,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/54146711407,https://www.airlines-manager.com/aircraft/show/101045331,0:00,4:29,400,"$360,537.00","$319,636.00",$799.09,"$71,294.28"
SFO - SLC,54146711408,SFO-ORD-DTW 2,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/54146711408,https://www.airlines-manager.com/aircraft/show/101045333,1:00,5:29,400,"$360,537.00","$319,636.00",$799.09,"$71,294.28"
SFO - SLC,54156164595,SFO-ORD-DTW 1,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/54156164595,https://www.airlines-manager.com/aircraft/show/101045334,8:00,12:29,400,"$360,537.00","$319,636.00",$799.09,"$71,294.28"
SFO - SLC,54173399351,SFO-ORD-DTW 3,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/54173399351,https://www.airlines-manager.com/aircraft/show/101045332,15:00,19:29,400,"$360,537.00","$319,636.00",$799.09,"$71,294.28"
SFO - SMF,54156164652,SFO-SDF-LIT 1,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/54156164652,https://www.airlines-manager.com/aircraft/show/106453499,8:30,10:59,310,"$82,768.00","$62,186.00",$200.60,"$25,041.34"
SFO - SMF,54168162293,SFO-SDF-LIT 3,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/54168162293,https://www.airlines-manager.com/aircraft/show/94886627,14:00,16:29,310,"$82,768.00","$62,186.00",$200.60,"$25,041.34"
SFO - SMF,54173399465,SFO-SDF-LIT 5,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/54173399465,https://www.airlines-manager.com/aircraft/show/106453498,15:00,17:29,310,"$82,768.00","$62,186.00",$200.60,"$25,041.34"
SFO - SMF,54187257355,SFO-SDF-LIT 2,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/54187257355,https://www.airlines-manager.com/aircraft/show/94886628,22:45,1:14,310,"$82,768.00","$62,186.00",$200.60,"$25,041.34"
SFO - SMF,54187257356,SFO-SDF-LIT 4,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/54187257356,https://www.airlines-manager.com/aircraft/show/106453500,23:45,2:14,309,"$82,617.00","$62,037.00",$200.77,"$24,981.34"
SFO - STL,54146712029,SFO-MSY-STL 3,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/54146712029,https://www.airlines-manager.com/aircraft/show/98075265,6:45,15:29,320,"$554,957.00","$501,203.00","$1,566.26","$57,389.66"
SFO - STL,54156164665,SFO-MSY-STL 5,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/54156164665,https://www.airlines-manager.com/aircraft/show/98075263,8:45,17:29,320,"$554,957.00","$501,203.00","$1,566.26","$57,389.66"
SFO - STL,54168162185,SFO-MSY-STL 6,ERJ-175,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/54168162185,https://www.airlines-manager.com/aircraft/show/103534666,13:00,21:44,112,"$261,292.00","$229,370.00","$2,047.95","$26,263.74"
SFO - STL,54173399562,SFO-MSY-STL 2,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/54173399562,https://www.airlines-manager.com/aircraft/show/98075266,16:00,0:44,320,"$554,957.00","$501,203.00","$1,566.26","$57,389.66"
SFO - STL,54178655369,SFO-MSY-STL 4,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/54178655369,https://www.airlines-manager.com/aircraft/show/98075264,18:00,2:44,320,"$554,957.00","$501,203.00","$1,566.26","$57,389.66"
SFO - STL,54187257348,SFO-MSY-STL 1,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/54187257348,https://www.airlines-manager.com/aircraft/show/98075267,22:30,7:14,320,"$554,957.00","$501,203.00","$1,566.26","$57,389.66"
SFO - TFU,54168162110,SFO 168B-3 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/54168162110,https://www.airlines-manager.com/aircraft/show/87566902,12:30,14:59,1046,"$5,210,012.00","$4,802,353.00","$4,591.16","$1,933,833.42"
SFO - TFU,54173399303,SFO 168A-3 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/54173399303,https://www.airlines-manager.com/aircraft/show/86483501,14:30,16:59,1044,"$5,195,743.00","$4,788,669.00","$4,586.85","$1,928,323.09"
SFO - TPA,54146711578,SFO-FLL-TPA 1,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/54146711578,https://www.airlines-manager.com/aircraft/show/97955544,1:00,12:14,320,"$701,298.00","$635,247.00","$1,985.15","$56,550.18"
SFO - TPA,54146711579,SFO-FLL-TPA 3,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/54146711579,https://www.airlines-manager.com/aircraft/show/97955542,5:00,16:14,320,"$701,298.00","$635,247.00","$1,985.15","$56,550.18"
SFO - TPA,54156164607,SFO-FLL-TPA 5,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/54156164607,https://www.airlines-manager.com/aircraft/show/97955540,8:00,19:14,320,"$701,298.00","$635,247.00","$1,985.15","$56,550.18"
SFO - TPA,54168162192,SFO-FLL-TPA 2,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/54168162192,https://www.airlines-manager.com/aircraft/show/97955543,13:00,0:14,320,"$701,298.00","$635,247.00","$1,985.15","$56,550.18"
SFO - TPA,54178655252,SFO-FLL-TPA 4,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/54178655252,https://www.airlines-manager.com/aircraft/show/97955541,17:00,4:14,320,"$701,298.00","$635,247.00","$1,985.15","$56,550.18"
SFO - TPA,54183441506,SFO-FLL-TPA 6 B,A319-100,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/54183441506,https://www.airlines-manager.com/aircraft/show/97900729,20:00,7:29,198,"$529,365.00","$481,509.00","$2,431.86","$41,931.12"
SFO - TPE,54183441509,SFO 168B-5 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/54183441509,https://www.airlines-manager.com/aircraft/show/87933799,20:00,21:14,1046,"$4,755,660.00","$4,405,634.00","$4,211.89","$3,572,135.68"
SFO - TPE,54187257275,SFO 168A-5 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/54187257275,https://www.airlines-manager.com/aircraft/show/86808589,22:00,23:14,1024,"$4,685,709.00","$4,340,090.00","$4,238.37","$3,518,991.89"
SFO - TUL,54146711980,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/54146711980,https://www.airlines-manager.com/aircraft/show/108410857,4:45,12:29,320,"$491,543.00","$446,045.00","$1,393.89","$57,678.23"
SFO - TUL,54156164539,SFO-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/54156164539,https://www.airlines-manager.com/aircraft/show/108466264,7:00,14:44,112,"$232,110.00","$205,102.00","$1,831.27","$26,521.81"
SFO - TUL,54173399424,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/54173399424,https://www.airlines-manager.com/aircraft/show/108410856,15:00,22:44,320,"$491,543.00","$446,045.00","$1,393.89","$57,678.23"
SFO - TUL,54173399425,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/54173399425,https://www.airlines-manager.com/aircraft/show/108410859,15:45,23:29,320,"$491,543.00","$446,045.00","$1,393.89","$57,678.23"
SFO - TUL,54183441585,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/54183441585,https://www.airlines-manager.com/aircraft/show/108410858,20:45,4:29,320,"$491,543.00","$446,045.00","$1,393.89","$57,678.23"
SFO - TUS,54156164604,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/54156164604,https://www.airlines-manager.com/aircraft/show/107160378,8:00,12:59,320,"$318,002.00","$282,841.00",$883.88,"$56,757.39"
SFO - TUS,54156164605,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/54156164605,https://www.airlines-manager.com/aircraft/show/107132310,9:30,14:29,112,"$151,573.00","$131,806.00","$1,176.84","$26,449.36"
SFO - TUS,54162072978,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/54162072978,https://www.airlines-manager.com/aircraft/show/107160381,10:30,15:29,320,"$318,002.00","$282,841.00",$883.88,"$56,757.39"
SFO - TUS,54173399546,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/54173399546,https://www.airlines-manager.com/aircraft/show/107160380,16:00,20:59,320,"$318,002.00","$282,841.00",$883.88,"$56,757.39"
SFO - TUS,54187257420,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/54187257420,https://www.airlines-manager.com/aircraft/show/107160379,23:30,4:29,320,"$318,002.00","$282,841.00",$883.88,"$56,757.39"
SFO - TYS,54146712008,SFO-TYS-MSN 2,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/54146712008,https://www.airlines-manager.com/aircraft/show/117782564,5:45,15:59,320,"$639,914.00","$585,231.00","$1,828.85","$57,188.70"
SFO - TYS,54156164563,SFO-TYS-MSN 1,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/54156164563,https://www.airlines-manager.com/aircraft/show/117782565,7:30,17:44,320,"$639,914.00","$585,231.00","$1,828.85","$57,188.70"
SFO - TYS,54173399519,SFO-TYS-MSN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/54173399519,https://www.airlines-manager.com/aircraft/show/117782582,16:00,2:14,198,"$481,892.00","$442,053.00","$2,232.59","$43,197.36"
SFO - TYS,54183441451,SFO-TYS-MSN 3,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/54183441451,https://www.airlines-manager.com/aircraft/show/117782563,19:30,5:44,320,"$639,914.00","$585,231.00","$1,828.85","$57,188.70"
SFO - TYS,54183441452,SFO-TYS-MSN 4,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/54183441452,https://www.airlines-manager.com/aircraft/show/117782562,20:45,6:59,320,"$639,914.00","$585,231.00","$1,828.85","$57,188.70"
SFO - YEG,54146711900,SFO-YEG-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/54146711900,https://www.airlines-manager.com/aircraft/show/117782560,3:30,9:59,320,"$419,195.00","$376,577.00","$1,176.80","$58,083.86"
SFO - YEG,54156164619,SFO-YEG-YYC 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/54156164619,https://www.airlines-manager.com/aircraft/show/117782581,8:15,14:59,198,"$316,101.00","$285,829.00","$1,443.58","$42,449.85"
SFO - YEG,54168162212,SFO-YEG-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/54168162212,https://www.airlines-manager.com/aircraft/show/117782561,13:00,19:29,320,"$419,195.00","$376,577.00","$1,176.80","$58,083.86"
SFO - YEG,54173399374,SFO-YEG-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/54173399374,https://www.airlines-manager.com/aircraft/show/116932364,15:00,21:29,320,"$419,195.00","$376,577.00","$1,176.80","$58,083.86"
SFO - YEG,54183441652,SFO-YEG-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/54183441652,https://www.airlines-manager.com/aircraft/show/117782559,21:30,3:59,320,"$419,195.00","$376,577.00","$1,176.80","$58,083.86"
SFO - YUL,54146711533,SFO-YYZ-YUL 1,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/54146711533,https://www.airlines-manager.com/aircraft/show/115413609,0:45,12:29,400,"922,307$","846,283$","$2,115.71","$72,126.39"
SFO - YUL,54146711534,SFO-YYZ-YUL 4,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/54146711534,https://www.airlines-manager.com/aircraft/show/115413612,6:00,17:44,400,"922,307$","846,283$","$2,115.71","$72,126.39"
SFO - YUL,54168162288,SFO-YYZ-YUL 2,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/54168162288,https://www.airlines-manager.com/aircraft/show/115413610,14:00,1:44,400,"922,307$","846,283$","$2,115.71","$72,126.39"
SFO - YUL,54173399597,SFO-YYZ-YUL 3,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/54173399597,https://www.airlines-manager.com/aircraft/show/115413611,16:45,4:29,400,"922,307$","846,283$","$2,115.71","$72,126.39"
SFO - YUL,54178655436,SFO-YYZ-YUL 5,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/54178655436,https://www.airlines-manager.com/aircraft/show/91126653,18:45,6:29,399,"920,331$","844,389$","$2,116.26","$71,964.97"
SFO - YVR,54146711548,SFO-MSY-STL 2,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/54146711548,https://www.airlines-manager.com/aircraft/show/98075266,0:45,5:59,320,"330,083$","289,120$",$903.50,"$55,245.86"
SFO - YVR,54146711549,SFO-MSY-STL 4,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/54146711549,https://www.airlines-manager.com/aircraft/show/98075264,2:45,7:59,320,"330,083$","289,120$",$903.50,"$55,245.86"
SFO - YVR,54156164552,SFO-MSY-STL 1,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/54156164552,https://www.airlines-manager.com/aircraft/show/98075267,7:15,12:29,320,"330,083$","289,120$",$903.50,"$55,245.86"
SFO - YVR,54173399561,SFO-MSY-STL 3,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/54173399561,https://www.airlines-manager.com/aircraft/show/98075265,16:00,21:14,320,"330,083$","289,120$",$903.50,"$55,245.86"
SFO - YVR,54178655368,SFO-MSY-STL 5,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/54178655368,https://www.airlines-manager.com/aircraft/show/98075263,18:00,23:14,320,"330,083$","289,120$",$903.50,"$55,245.86"
SFO - YVR,54187257255,SFO-MSY-STL 6,ERJ-175,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/54187257255,https://www.airlines-manager.com/aircraft/show/103534666,21:45,2:59,112,"156,483$","133,669$","$1,193.47","$25,541.85"
SFO - YYC,54146711927,SFO-YEG-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/54146711927,https://www.airlines-manager.com/aircraft/show/117782559,4:00,9:59,320,"385,106$","341,317$","$1,066.62","$57,044.62"
SFO - YYC,54168162215,SFO-YEG-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/54168162215,https://www.airlines-manager.com/aircraft/show/117782560,13:00,18:59,320,"385,106$","341,317$","$1,066.62","$57,044.62"
SFO - YYC,54173399403,SFO-YEG-YYC 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/54173399403,https://www.airlines-manager.com/aircraft/show/117782581,15:00,20:59,198,"289,706$","258,886$","$1,307.51","$43,267.86"
SFO - YYC,54183441444,SFO-YEG-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/54183441444,https://www.airlines-manager.com/aircraft/show/117782561,19:30,1:29,320,"385,106$","341,317$","$1,066.62","$57,044.62"
SFO - YYC,54183441445,SFO-YEG-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/54183441445,https://www.airlines-manager.com/aircraft/show/116932364,21:30,3:29,320,"385,106$","341,317$","$1,066.62","$57,044.62"
SFO - YYZ,54146711700,SFO-YYZ-YUL 2,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/54146711700,https://www.airlines-manager.com/aircraft/show/115413610,1:45,12:29,400,"881,945$","803,825$","$2,009.56","$74,890.53"
SFO - YYZ,54146711701,SFO-YYZ-YUL 3,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/54146711701,https://www.airlines-manager.com/aircraft/show/115413611,6:00,16:44,400,"881,945$","803,825$","$2,009.56","$74,890.53"
SFO - YYZ,54156164590,SFO-YYZ-YUL 5,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/54156164590,https://www.airlines-manager.com/aircraft/show/91126653,8:00,18:44,400,"881,945$","803,825$","$2,009.56","$74,890.53"
SFO - YYZ,54168162287,SFO-YYZ-YUL 1,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/54168162287,https://www.airlines-manager.com/aircraft/show/115413609,14:00,0:44,400,"881,945$","803,825$","$2,009.56","$74,890.53"
SFO - YYZ,54178655350,SFO-YYZ-YUL 4,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/54178655350,https://www.airlines-manager.com/aircraft/show/115413612,17:45,4:29,399,"878,331$","800,298$","$2,005.76","$74,561.93"`;
