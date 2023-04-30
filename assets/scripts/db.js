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
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
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
		hubs: ['sfo', 'iah'],
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
		name: 'Midland International Air & Space Port (MAF)',
		city: 'Midland, USA - Texas 🇺🇸',
		pos: [31.942135201414416, -102.20496125514411],
		hubs: ['sfo', 'iah'],
		tz: 'US/Central'
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
		name: 'McAllen International Airport (MFE)',
		city: 'McAllen, USA - Texas 🇺🇸',
		pos: [26.176721835265095, -98.2393465159593],
		hubs: ['iah'],
		tz: 'US/Central'
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
		name: 'Redmond Municipal Airport (RDM)',
		city: 'Redmond, USA - Oregon 🇺🇸',
		pos: [44.253250764843884, -121.15877034247316],
		hubs: ['sfo'],
		tz: 'US/Pacific'
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
		hubs: ['ewr', 'sfo', 'iah'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
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
		hubs: ['ewr', 'sfo', 'iah'],
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
EWR - ABQ,54536069581,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/54536069581,https://www.airlines-manager.com/aircraft/show/90717078,0:45,9:59,310,"$573,228.00","$527,252.00","$1,700.81","$57,103.10"
EWR - ABQ,54536069582,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/54536069582,https://www.airlines-manager.com/aircraft/show/95950199,2:45,11:59,310,"$573,228.00","$527,252.00","$1,700.81","$57,103.10"
EWR - ABQ,54551622524,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/54551622524,https://www.airlines-manager.com/aircraft/show/90717079,10:00,19:14,310,"$573,228.00","$527,252.00","$1,700.81","$57,103.10"
EWR - ABQ,54567120383,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/54567120383,https://www.airlines-manager.com/aircraft/show/90717077,16:45,1:59,310,"$573,228.00","$527,252.00","$1,700.81","$57,103.10"
EWR - ABQ,54571726653,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/54571726653,https://www.airlines-manager.com/aircraft/show/90717076,17:45,2:59,310,"$573,228.00","$527,252.00","$1,700.81","$57,103.10"
EWR - ALB,54536069491,EWR-TYS-GSO 2,A321-200,https://www.airlines-manager.com/network/showline/50283479,https://www.airlines-manager.com/network/showflight/54536069491,https://www.airlines-manager.com/aircraft/show/119220543,0:15,2:59,310,"$96,677.00","$78,944.00",$254.66,"$28,881.95"
EWR - ALB,54536069492,EWR-TYS-GSO 1,A321-200,https://www.airlines-manager.com/network/showline/50283479,https://www.airlines-manager.com/network/showflight/54536069492,https://www.airlines-manager.com/aircraft/show/119220542,4:45,7:29,310,"$96,677.00","$78,944.00",$254.66,"$28,881.95"
EWR - ALB,54567120300,EWR-TYS-GSO 4,A321-200,https://www.airlines-manager.com/network/showline/50283479,https://www.airlines-manager.com/network/showflight/54567120300,https://www.airlines-manager.com/aircraft/show/119220545,16:00,18:44,310,"$96,677.00","$78,944.00",$254.66,"$28,881.95"
EWR - ALB,54575909581,EWR-TYS-GSO 3,A321-200,https://www.airlines-manager.com/network/showline/50283479,https://www.airlines-manager.com/network/showflight/54575909581,https://www.airlines-manager.com/aircraft/show/119220544,20:30,23:14,310,"$96,677.00","$78,944.00",$254.66,"$28,881.95"
EWR - AMS,54556941038,EWR 56B-4 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/54556941038,https://www.airlines-manager.com/aircraft/show/94521247,11:30,2:44,748,"$2,318,738.00","$2,073,912.00","$2,772.61","$136,143.02"
EWR - AMS,54562128257,EWR 56B-2 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/54562128257,https://www.airlines-manager.com/aircraft/show/90656556,13:15,4:29,748,"$2,318,738.00","$2,073,912.00","$2,772.61","$136,143.02"
EWR - AMS,54562128258,EWR 56B-7 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/54562128258,https://www.airlines-manager.com/aircraft/show/89124072,15:00,6:14,748,"$2,076,963.00","$1,893,772.00","$2,531.78","$124,317.64"
EWR - ANC,54536069955,EWR CARGO 1,A321neo-LR,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/54536069955,https://www.airlines-manager.com/aircraft/show/103406580,4:00,18:59,0,"$313,843.00","$249,989.00",$0.00,"$16,684.47"
EWR - ANC,54551622544,EWR-STL-PIT 3,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/54551622544,https://www.airlines-manager.com/aircraft/show/115400546,10:00,0:59,338,"$995,760.00","$932,676.00","$2,759.40","$62,247.56"
EWR - ANC,54562128252,EWR-STL-PIT 2,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/54562128252,https://www.airlines-manager.com/aircraft/show/115400547,13:15,4:14,338,"$995,760.00","$932,676.00","$2,759.40","$62,247.56"
EWR - ANC,54571726778,EWR-STL-PIT 1,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/54571726778,https://www.airlines-manager.com/aircraft/show/115400548,18:45,9:44,338,"$995,760.00","$932,676.00","$2,759.40","$62,247.56"
EWR - ANC,54575909693,EWR-STL-PIT 4,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/54575909693,https://www.airlines-manager.com/aircraft/show/115400545,21:45,12:44,338,"$906,775.00","$851,360.00","$2,518.82","$56,820.47"
EWR - ARN,54536069933,EWR 56D-1 E,787-10,https://www.airlines-manager.com/network/showline/50072203,https://www.airlines-manager.com/network/showflight/54536069933,https://www.airlines-manager.com/aircraft/show/118644436,3:45,19:44,648,"$1,965,373.00","$1,833,890.00","$2,830.08","$114,737.64"
EWR - ARN,54556941128,EWR 56D-3 E,787-10,https://www.airlines-manager.com/network/showline/50072203,https://www.airlines-manager.com/network/showflight/54556941128,https://www.airlines-manager.com/aircraft/show/118644438,12:45,4:44,648,"$1,965,373.00","$1,833,890.00","$2,830.08","$114,737.64"
EWR - ARN,54571726764,EWR 56D-5 E,787-10,https://www.airlines-manager.com/network/showline/50072203,https://www.airlines-manager.com/network/showflight/54571726764,https://www.airlines-manager.com/aircraft/show/118644440,18:45,10:44,648,"$1,965,373.00","$1,833,890.00","$2,830.08","$114,737.64"
EWR - ATH,54536069441,EWR 84A-7 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/54536069441,https://www.airlines-manager.com/aircraft/show/94521249,0:00,19:59,852,"$3,234,067.00","$2,941,774.00","$3,452.79","$147,211.38"
EWR - ATH,54571726856,EWR 84A-4 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/54571726856,https://www.airlines-manager.com/aircraft/show/90656551,19:45,15:44,852,"$3,234,067.00","$2,941,774.00","$3,452.79","$147,211.38"
EWR - ATL,54551622561,EWR-DFW-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/54551622561,https://www.airlines-manager.com/aircraft/show/90489724,10:00,14:59,320,"$316,346.00","$255,029.00",$796.97,"$51,176.39"
EWR - ATL,54562128365,EWR-DFW-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/54562128365,https://www.airlines-manager.com/aircraft/show/90489726,14:15,19:14,320,"$316,346.00","$255,029.00",$796.97,"$51,176.39"
EWR - ATL,54567120451,EWR-DFW-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/54567120451,https://www.airlines-manager.com/aircraft/show/90489725,17:30,22:29,320,"$316,346.00","$255,029.00",$796.97,"$51,176.39"
EWR - ATL,54571726744,EWR-DFW-ATL 6 B,A319-100,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/54571726744,https://www.airlines-manager.com/aircraft/show/105222360,18:30,23:29,198,"$240,998.00","$198,928.00","$1,004.69","$39,918.66"
EWR - ATL,54571726745,EWR-DFW-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/54571726745,https://www.airlines-manager.com/aircraft/show/86238752,19:45,0:44,320,"$316,346.00","$255,029.00",$796.97,"$51,176.39"
EWR - ATL,54580945016,EWR-DFW-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/54580945016,https://www.airlines-manager.com/aircraft/show/86238753,22:15,3:14,320,"$316,346.00","$255,029.00",$796.97,"$51,176.39"
EWR - AUS,54536069766,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/54536069766,https://www.airlines-manager.com/aircraft/show/90717077,2:00,9:59,310,"$499,170.00","$457,926.00","$1,477.18","$57,360.25"
EWR - AUS,54536069767,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/54536069767,https://www.airlines-manager.com/aircraft/show/90717076,3:00,10:59,310,"$499,170.00","$457,926.00","$1,477.18","$57,360.25"
EWR - AUS,54551622523,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/54551622523,https://www.airlines-manager.com/aircraft/show/90717078,10:00,17:59,310,"$499,170.00","$457,926.00","$1,477.18","$57,360.25"
EWR - AUS,54556941107,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/54556941107,https://www.airlines-manager.com/aircraft/show/95950199,12:00,19:59,310,"$499,170.00","$457,926.00","$1,477.18","$57,360.25"
EWR - AUS,54571726826,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/54571726826,https://www.airlines-manager.com/aircraft/show/90717079,19:15,3:14,310,"$499,170.00","$457,926.00","$1,477.18","$57,360.25"
EWR - BCN,54567120268,EWR 84A-5 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/54567120268,https://www.airlines-manager.com/aircraft/show/94521250,15:45,7:44,852,"$2,615,130.00","$2,372,833.00","$2,785.02","$148,456.70"
EWR - BCN,54575909519,EWR 84A-2 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/54575909519,https://www.airlines-manager.com/aircraft/show/94521252,20:00,11:59,852,"$2,615,130.00","$2,372,833.00","$2,785.02","$148,456.70"
EWR - BDA,54551622455,EWR-YEG-BFF 5 B,A319-100,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/54551622455,https://www.airlines-manager.com/aircraft/show/115493369,8:45,13:59,198,"$243,375.00","$221,602.00","$1,119.20","$42,344.33"
EWR - BDA,54556940981,EWR-YEG-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/54556940981,https://www.airlines-manager.com/aircraft/show/98936170,11:00,16:14,320,"$321,148.00","$290,358.00",$907.37,"$55,482.42"
EWR - BDA,54556940982,EWR-YEG-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/54556940982,https://www.airlines-manager.com/aircraft/show/98936171,13:00,18:14,320,"$321,148.00","$290,358.00",$907.37,"$55,482.42"
EWR - BDA,54575909636,EWR-YEG-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/54575909636,https://www.airlines-manager.com/aircraft/show/98936168,21:00,2:14,320,"$321,148.00","$290,358.00",$907.37,"$55,482.42"
EWR - BDA,54580945048,EWR-YEG-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/54580945048,https://www.airlines-manager.com/aircraft/show/98936169,22:30,3:44,252,"$258,071.00","$229,064.00",$908.98,"$43,770.19"
EWR - BDL,54536069642,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/54536069642,https://www.airlines-manager.com/aircraft/show/108834811,1:00,3:29,310,"$89,395.00","$71,067.00",$229.25,"$28,617.58"
EWR - BDL,54551622507,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/54551622507,https://www.airlines-manager.com/aircraft/show/108466265,9:30,11:59,112,"$38,361.00","$27,163.00",$242.53,"$10,938.12"
EWR - BDL,54562128343,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/54562128343,https://www.airlines-manager.com/aircraft/show/108834810,14:00,16:29,310,"$89,395.00","$71,067.00",$229.25,"$28,617.58"
EWR - BDL,54567120324,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/54567120324,https://www.airlines-manager.com/aircraft/show/108834809,16:00,18:29,310,"$89,395.00","$71,067.00",$229.25,"$28,617.58"
EWR - BDL,54580945198,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/54580945198,https://www.airlines-manager.com/aircraft/show/108834808,23:00,1:29,310,"$89,395.00","$71,067.00",$229.25,"$28,617.58"
EWR - BER,54545804624,EWR 84B-5  B2,777-300,https://www.airlines-manager.com/network/showline/49921899,https://www.airlines-manager.com/network/showflight/54545804624,https://www.airlines-manager.com/aircraft/show/117958699,5:45,22:14,852,"$2,705,265.00","$2,453,617.00","$2,879.83","$148,854.42"
EWR - BER,54571726655,EWR 84B-1  B2,777-300,https://www.airlines-manager.com/network/showline/49921899,https://www.airlines-manager.com/network/showflight/54571726655,https://www.airlines-manager.com/aircraft/show/117958695,17:45,10:14,852,"$2,705,265.00","$2,453,617.00","$2,879.83","$148,854.42"
EWR - BFF,54536069797,EWR-YEG-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/54536069797,https://www.airlines-manager.com/aircraft/show/98936168,2:15,10:14,320,"$505,586.00","$462,875.00","$1,446.48","$57,980.17"
EWR - BFF,54536069798,EWR-YEG-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/54536069798,https://www.airlines-manager.com/aircraft/show/98936169,3:45,11:44,320,"$505,586.00","$462,875.00","$1,446.48","$57,980.17"
EWR - BFF,54562128319,EWR-YEG-BFF 5 B,A319-100,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/54562128319,https://www.airlines-manager.com/aircraft/show/115493369,14:00,21:59,198,"$381,737.00","$350,827.00","$1,771.85","$43,944.93"
EWR - BFF,54567120344,EWR-YEG-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/54567120344,https://www.airlines-manager.com/aircraft/show/98936170,16:15,0:14,320,"$505,586.00","$462,875.00","$1,446.48","$57,980.17"
EWR - BFF,54571726718,EWR-YEG-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/54571726718,https://www.airlines-manager.com/aircraft/show/98936171,18:15,2:14,320,"$505,586.00","$462,875.00","$1,446.48","$57,980.17"
EWR - BHM,54536069809,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/54536069809,https://www.airlines-manager.com/aircraft/show/116042862,2:15,7:44,310,"$345,551.00","$316,758.00","$1,021.80","$57,767.42"
EWR - BHM,54551622436,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/54551622436,https://www.airlines-manager.com/aircraft/show/116042859,8:30,13:59,310,"$345,551.00","$316,758.00","$1,021.80","$57,767.42"
EWR - BHM,54562128333,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/54562128333,https://www.airlines-manager.com/aircraft/show/116042860,14:00,19:29,310,"$345,551.00","$316,758.00","$1,021.80","$57,767.42"
EWR - BHM,54562128334,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/54562128334,https://www.airlines-manager.com/aircraft/show/116042861,15:15,20:44,310,"$345,551.00","$316,758.00","$1,021.80","$57,767.42"
EWR - BIL,54551622546,EWR-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/54551622546,https://www.airlines-manager.com/aircraft/show/116047882,10:00,18:59,320,"$563,348.00","$517,391.00","$1,616.85","$57,594.55"
EWR - BIL,54556941106,EWR-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/54556941106,https://www.airlines-manager.com/aircraft/show/116047885,12:00,20:59,320,"$563,348.00","$517,391.00","$1,616.85","$57,594.55"
EWR - BIL,54575909646,EWR-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/54575909646,https://www.airlines-manager.com/aircraft/show/116047884,21:15,6:14,320,"$563,348.00","$517,391.00","$1,616.85","$57,594.55"
EWR - BIL,54580945094,EWR-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/54580945094,https://www.airlines-manager.com/aircraft/show/116047883,22:45,7:44,320,"$563,348.00","$517,391.00","$1,616.85","$57,594.55"
EWR - BNA,54536069896,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/54536069896,https://www.airlines-manager.com/aircraft/show/104610408,3:15,8:14,310,"$321,737.00","$292,397.00",$943.22,"$58,674.98"
EWR - BNA,54551622442,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/54551622442,https://www.airlines-manager.com/aircraft/show/104610409,8:30,13:29,310,"$321,737.00","$292,397.00",$943.22,"$58,674.98"
EWR - BNA,54556941168,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/54556941168,https://www.airlines-manager.com/aircraft/show/104610410,13:00,17:59,310,"$321,737.00","$292,397.00",$943.22,"$58,674.98"
EWR - BNA,54567120422,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/54567120422,https://www.airlines-manager.com/aircraft/show/96421247,17:00,21:59,112,"$152,744.00","$133,838.00","$1,194.98","$26,857.12"
EWR - BNA,54575909666,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/54575909666,https://www.airlines-manager.com/aircraft/show/104610407,21:15,2:14,310,"$321,737.00","$292,397.00",$943.22,"$58,674.98"
EWR - BOI,54536069713,EWR-BOI-PBI 5 B,A319-100,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/54536069713,https://www.airlines-manager.com/aircraft/show/110582846,1:30,11:59,198,"$490,416.00","$452,174.00","$2,283.71","$43,132.66"
EWR - BOI,54551622558,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/54551622558,https://www.airlines-manager.com/aircraft/show/104418460,10:00,20:29,310,"$652,968.00","$605,281.00","$1,952.52","$57,737.46"
EWR - BOI,54562128417,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/54562128417,https://www.airlines-manager.com/aircraft/show/104418463,15:00,1:29,310,"$652,968.00","$605,281.00","$1,952.52","$57,737.46"
EWR - BOI,54567120363,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/54567120363,https://www.airlines-manager.com/aircraft/show/104418462,16:30,2:59,310,"$652,968.00","$605,281.00","$1,952.52","$57,737.46"
EWR - BOI,54580945234,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/54580945234,https://www.airlines-manager.com/aircraft/show/104418461,23:30,9:59,310,"$652,968.00","$605,281.00","$1,952.52","$57,737.46"
EWR - BOS,54536069872,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/54536069872,https://www.airlines-manager.com/aircraft/show/104034464,3:00,5:59,216,"$93,775.00","$73,989.00",$342.54,"$24,800.78"
EWR - BOS,54551622679,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/54551622679,https://www.airlines-manager.com/aircraft/show/104034463,10:00,12:59,216,"$93,775.00","$73,989.00",$342.54,"$24,800.78"
EWR - BOS,54556941126,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/54556941126,https://www.airlines-manager.com/aircraft/show/104034462,12:45,15:44,216,"$93,775.00","$73,989.00",$342.54,"$24,800.78"
EWR - BOS,54562128267,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/54562128267,https://www.airlines-manager.com/aircraft/show/99316501,13:45,16:44,216,"$93,775.00","$73,989.00",$342.54,"$24,800.78"
EWR - BOS,54567120389,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/54567120389,https://www.airlines-manager.com/aircraft/show/104034464,17:00,19:59,216,"$93,775.00","$73,989.00",$342.54,"$24,800.78"
EWR - BOS,54575909533,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/54575909533,https://www.airlines-manager.com/aircraft/show/104034463,20:00,22:59,216,"$93,775.00","$73,989.00",$342.54,"$24,800.78"
EWR - BOS,54580945090,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/54580945090,https://www.airlines-manager.com/aircraft/show/104034462,22:45,1:44,216,"$93,775.00","$73,989.00",$342.54,"$24,800.78"
EWR - BOS,54580945091,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/54580945091,https://www.airlines-manager.com/aircraft/show/99316501,23:45,2:44,216,"$93,775.00","$73,989.00",$342.54,"$24,800.78"
EWR - BRU,54536069812,EWR 84B-1  B2,777-300,https://www.airlines-manager.com/network/showline/49921920,https://www.airlines-manager.com/network/showflight/54536069812,https://www.airlines-manager.com/aircraft/show/117958695,2:30,17:44,852,"$2,488,490.00","$2,262,476.00","$2,655.49","$148,521.40"
EWR - BRU,54562128383,EWR 84B-4  B2,777-300,https://www.airlines-manager.com/network/showline/49921920,https://www.airlines-manager.com/network/showflight/54562128383,https://www.airlines-manager.com/aircraft/show/117958698,14:30,5:44,852,"$2,488,490.00","$2,262,476.00","$2,655.49","$148,521.40"
EWR - BTV,54551622448,EWR-FCA-CID 1,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/54551622448,https://www.airlines-manager.com/aircraft/show/116042866,8:45,11:59,310,"$139,437.00","$120,222.00",$387.81,"$37,182.06"
EWR - BTV,54556941089,EWR-FCA-CID 4,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/54556941089,https://www.airlines-manager.com/aircraft/show/116042863,12:00,15:14,310,"$139,437.00","$120,222.00",$387.81,"$37,182.06"
EWR - BTV,54556941090,EWR-FCA-CID 3,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/54556941090,https://www.airlines-manager.com/aircraft/show/116042864,13:00,16:14,310,"$139,437.00","$120,222.00",$387.81,"$37,182.06"
EWR - BTV,54571726776,EWR-FCA-CID 2,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/54571726776,https://www.airlines-manager.com/aircraft/show/116042865,18:45,21:59,310,"$139,437.00","$120,222.00",$387.81,"$37,182.06"
EWR - BUF,54545804590,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/54545804590,https://www.airlines-manager.com/aircraft/show/106104450,5:30,8:44,112,"$70,545.00","$57,741.00",$515.54,"$17,858.04"
EWR - BUF,54556940999,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/54556940999,https://www.airlines-manager.com/aircraft/show/105731236,11:00,14:14,320,"$154,046.00","$130,076.00",$406.49,"$40,229.69"
EWR - BUF,54562128388,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/54562128388,https://www.airlines-manager.com/aircraft/show/88494376,14:45,17:59,320,"$154,046.00","$130,076.00",$406.49,"$40,229.69"
EWR - BUF,54571726746,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/54571726746,https://www.airlines-manager.com/aircraft/show/88494377,18:30,21:44,320,"$154,046.00","$130,076.00",$406.49,"$40,229.69"
EWR - BUF,54580945184,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/54580945184,https://www.airlines-manager.com/aircraft/show/88494375,23:00,2:14,320,"$154,046.00","$130,076.00",$406.49,"$40,229.69"
EWR - BWI,54536069513,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/54536069513,https://www.airlines-manager.com/aircraft/show/104034464,0:15,2:59,216,"$74,600.00","$56,030.00",$259.40,"$20,498.78"
EWR - BWI,54536069514,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/54536069514,https://www.airlines-manager.com/aircraft/show/104034463,3:15,5:59,216,"$74,600.00","$56,030.00",$259.40,"$20,498.78"
EWR - BWI,54551622680,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/54551622680,https://www.airlines-manager.com/aircraft/show/104034462,10:00,12:44,216,"$74,600.00","$56,030.00",$259.40,"$20,498.78"
EWR - BWI,54556940933,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/54556940933,https://www.airlines-manager.com/aircraft/show/99316501,11:00,13:44,216,"$74,600.00","$56,030.00",$259.40,"$20,498.78"
EWR - BWI,54562128377,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/54562128377,https://www.airlines-manager.com/aircraft/show/104034464,14:15,16:59,216,"$74,600.00","$56,030.00",$259.40,"$20,498.78"
EWR - BWI,54567120432,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/54567120432,https://www.airlines-manager.com/aircraft/show/104034463,17:15,19:59,216,"$74,600.00","$56,030.00",$259.40,"$20,498.78"
EWR - BWI,54575909527,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/54575909527,https://www.airlines-manager.com/aircraft/show/104034462,20:00,22:44,216,"$74,600.00","$56,030.00",$259.40,"$20,498.78"
EWR - BWI,54575909528,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/54575909528,https://www.airlines-manager.com/aircraft/show/99316501,21:00,23:44,216,"$74,600.00","$56,030.00",$259.40,"$20,498.78"
EWR - BZN,54536069528,EWR-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/54536069528,https://www.airlines-manager.com/aircraft/show/116047885,0:30,9:44,320,"$590,320.00","$543,416.00","$1,698.18","$58,853.72"
EWR - BZN,54556941071,EWR-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/54556941071,https://www.airlines-manager.com/aircraft/show/116047884,12:00,21:14,320,"$590,320.00","$543,416.00","$1,698.18","$58,853.72"
EWR - BZN,54562128262,EWR-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/54562128262,https://www.airlines-manager.com/aircraft/show/116047883,13:30,22:44,320,"$590,320.00","$543,416.00","$1,698.18","$58,853.72"
EWR - BZN,54580945059,EWR-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/54580945059,https://www.airlines-manager.com/aircraft/show/116047882,22:30,7:44,320,"$590,320.00","$543,416.00","$1,698.18","$58,853.72"
EWR - CAK,54551622413,EWR-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/54551622413,https://www.airlines-manager.com/aircraft/show/116047884,8:30,11:59,320,"$190,274.00","$166,172.00",$519.29,"$47,704.88"
EWR - CAK,54551622414,EWR-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/54551622414,https://www.airlines-manager.com/aircraft/show/116047883,10:00,13:29,320,"$190,274.00","$166,172.00",$519.29,"$47,704.88"
EWR - CAK,54571726793,EWR-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/54571726793,https://www.airlines-manager.com/aircraft/show/116047882,19:00,22:29,320,"$190,274.00","$166,172.00",$519.29,"$47,704.88"
EWR - CAK,54575909637,EWR-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/54575909637,https://www.airlines-manager.com/aircraft/show/116047885,21:00,0:29,284,"$177,287.00","$153,553.00",$540.68,"$44,082.20"
EWR - CDG,54536069871,EWR 56A-5 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/54536069871,https://www.airlines-manager.com/aircraft/show/106813011,3:00,18:14,748,"$2,328,133.00","$2,067,702.00","$2,764.31","$135,735.36"
EWR - CDG,54551622456,EWR 56A-6 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/54551622456,https://www.airlines-manager.com/aircraft/show/106813012,8:45,23:59,748,"$2,328,133.00","$2,067,702.00","$2,764.31","$135,735.36"
EWR - CDG,54571726781,EWR 56A-2 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/54571726781,https://www.airlines-manager.com/aircraft/show/106813008,19:00,10:14,559,"$1,742,337.00","$1,565,449.00","$2,800.45","$102,764.70"
EWR - CHS,54551622433,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/54551622433,https://www.airlines-manager.com/aircraft/show/110044463,8:30,12:59,310,"$288,564.00","$263,620.00",$850.39,"$58,800.00"
EWR - CHS,54556941073,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/54556941073,https://www.airlines-manager.com/aircraft/show/110113039,12:00,16:29,112,"$137,777.00","$121,714.00","$1,086.73","$27,148.10"
EWR - CHS,54562128373,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/54562128373,https://www.airlines-manager.com/aircraft/show/110044466,14:15,18:44,310,"$288,564.00","$263,620.00",$850.39,"$58,800.00"
EWR - CHS,54575909662,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/54575909662,https://www.airlines-manager.com/aircraft/show/110044465,21:15,1:44,310,"$288,564.00","$263,620.00",$850.39,"$58,800.00"
EWR - CHS,54580945200,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/54580945200,https://www.airlines-manager.com/aircraft/show/110044464,23:00,3:29,279,"$271,719.00","$247,309.00",$886.41,"$55,161.86"
EWR - CID,54536069666,EWR-FCA-CID 4,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/54536069666,https://www.airlines-manager.com/aircraft/show/116042863,1:15,6:59,310,"$356,225.00","$327,616.00","$1,056.83","$57,142.33"
EWR - CID,54536069667,EWR-FCA-CID 3,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/54536069667,https://www.airlines-manager.com/aircraft/show/116042864,2:15,7:59,310,"$356,225.00","$327,616.00","$1,056.83","$57,142.33"
EWR - CID,54551622564,EWR-FCA-CID 2,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/54551622564,https://www.airlines-manager.com/aircraft/show/116042865,10:00,15:44,310,"$356,225.00","$327,616.00","$1,056.83","$57,142.33"
EWR - CID,54575909752,EWR-FCA-CID 1,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/54575909752,https://www.airlines-manager.com/aircraft/show/116042866,22:00,3:44,293,"$344,795.00","$316,611.00","$1,080.58","$55,222.85"
EWR - CLE,54536069739,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/54536069739,https://www.airlines-manager.com/aircraft/show/106104450,1:45,5:29,112,"$91,793.00","$77,214.00",$689.41,"$20,682.32"
EWR - CLE,54536069740,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/54536069740,https://www.airlines-manager.com/aircraft/show/105731236,5:00,8:44,320,"$197,828.00","$171,014.00",$534.42,"$45,807.32"
EWR - CLE,54556940997,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/54556940997,https://www.airlines-manager.com/aircraft/show/88494376,11:00,14:44,320,"$197,828.00","$171,014.00",$534.42,"$45,807.32"
EWR - CLE,54562128391,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/54562128391,https://www.airlines-manager.com/aircraft/show/88494377,14:45,18:29,320,"$197,828.00","$171,014.00",$534.42,"$45,807.32"
EWR - CLE,54571726815,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/54571726815,https://www.airlines-manager.com/aircraft/show/88494375,19:15,22:59,320,"$197,828.00","$171,014.00",$534.42,"$45,807.32"
EWR - CLT,54536069749,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/54536069749,https://www.airlines-manager.com/aircraft/show/104034462,1:45,5:59,216,"$189,426.00","$162,915.00",$754.24,"$38,483.86"
EWR - CLT,54536069750,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/54536069750,https://www.airlines-manager.com/aircraft/show/99316501,2:45,6:59,216,"$189,426.00","$162,915.00",$754.24,"$38,483.86"
EWR - CLT,54551622671,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/54551622671,https://www.airlines-manager.com/aircraft/show/104034464,10:00,14:14,216,"$189,426.00","$162,915.00",$754.24,"$38,483.86"
EWR - CLT,54556941177,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/54556941177,https://www.airlines-manager.com/aircraft/show/104034463,13:00,17:14,216,"$189,426.00","$162,915.00",$754.24,"$38,483.86"
EWR - CLT,54567120270,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/54567120270,https://www.airlines-manager.com/aircraft/show/104034462,15:45,19:59,216,"$189,426.00","$162,915.00",$754.24,"$38,483.86"
EWR - CLT,54567120271,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/54567120271,https://www.airlines-manager.com/aircraft/show/99316501,16:45,20:59,216,"$189,426.00","$162,915.00",$754.24,"$38,483.86"
EWR - CLT,54575909503,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/54575909503,https://www.airlines-manager.com/aircraft/show/104034464,20:00,0:14,216,"$189,426.00","$162,915.00",$754.24,"$38,483.86"
EWR - CLT,54580945193,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/54580945193,https://www.airlines-manager.com/aircraft/show/104034463,23:00,3:14,216,"$189,426.00","$162,915.00",$754.24,"$38,483.86"
EWR - CMH,54536069976,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/54536069976,https://www.airlines-manager.com/aircraft/show/104610409,4:30,8:29,310,"$222,861.00","$198,707.00",$640.99,"$49,884.60"
EWR - CMH,54551622441,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/54551622441,https://www.airlines-manager.com/aircraft/show/104610410,8:30,12:29,310,"$222,861.00","$198,707.00",$640.99,"$49,884.60"
EWR - CMH,54556941170,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/54556941170,https://www.airlines-manager.com/aircraft/show/96421247,13:00,16:59,112,"$103,792.00","$88,495.00",$790.13,"$22,216.32"
EWR - CMH,54567120429,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/54567120429,https://www.airlines-manager.com/aircraft/show/104610407,17:15,21:14,310,"$222,861.00","$198,707.00",$640.99,"$49,884.60"
EWR - CMH,54580945206,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/54580945206,https://www.airlines-manager.com/aircraft/show/104610408,23:15,3:14,310,"$222,861.00","$198,707.00",$640.99,"$49,884.60"
EWR - COS,54536069683,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/54536069683,https://www.airlines-manager.com/aircraft/show/108834808,1:30,9:59,310,"$533,336.00","$491,684.00","$1,586.08","$57,958.82"
EWR - COS,54536069684,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/54536069684,https://www.airlines-manager.com/aircraft/show/108834811,3:30,11:59,310,"$533,336.00","$491,684.00","$1,586.08","$57,958.82"
EWR - COS,54556941142,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/54556941142,https://www.airlines-manager.com/aircraft/show/108466265,13:00,21:29,112,"$250,557.00","$222,739.00","$1,988.74","$26,256.07"
EWR - COS,54567120356,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/54567120356,https://www.airlines-manager.com/aircraft/show/108834810,16:30,0:59,310,"$533,336.00","$491,684.00","$1,586.08","$57,958.82"
EWR - COS,54571726736,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/54571726736,https://www.airlines-manager.com/aircraft/show/108834809,18:30,2:59,310,"$533,336.00","$491,684.00","$1,586.08","$57,958.82"
EWR - CUN,54536069577,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/54536069577,https://www.airlines-manager.com/aircraft/show/106581306,0:45,8:44,320,"$520,632.00","$472,856.00","$1,477.68","$59,230.40"
EWR - CUN,54536069578,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/54536069578,https://www.airlines-manager.com/aircraft/show/106581305,2:15,10:14,320,"$520,632.00","$472,856.00","$1,477.68","$59,230.40"
EWR - CUN,54556941151,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/54556941151,https://www.airlines-manager.com/aircraft/show/106581304,13:00,20:59,320,"$520,632.00","$472,856.00","$1,477.68","$59,230.40"
EWR - CUN,54562128384,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/54562128384,https://www.airlines-manager.com/aircraft/show/106581307,14:30,22:29,320,"$520,632.00","$472,856.00","$1,477.68","$59,230.40"
EWR - CUN,54580945019,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/54580945019,https://www.airlines-manager.com/aircraft/show/86238754,22:15,6:14,320,"$520,632.00","$472,856.00","$1,477.68","$59,230.40"
EWR - CVG,54536069504,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/54536069504,https://www.airlines-manager.com/aircraft/show/104610409,0:15,4:29,310,"$269,700.00","$241,975.00",$780.56,"$57,159.45"
EWR - CVG,54536069505,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/54536069505,https://www.airlines-manager.com/aircraft/show/104610410,4:15,8:29,310,"$269,700.00","$241,975.00",$780.56,"$57,159.45"
EWR - CVG,54545804770,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/54545804770,https://www.airlines-manager.com/aircraft/show/96421247,8:15,12:29,112,"$127,389.00","$109,763.00",$980.03,"$25,928.27"
EWR - CVG,54551622466,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/54551622466,https://www.airlines-manager.com/aircraft/show/107576645,9:00,13:14,0,"$69,000.00","$50,078.00",$0.00,"$11,829.45"
EWR - CVG,54556941171,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/54556941171,https://www.airlines-manager.com/aircraft/show/104610407,13:00,17:14,310,"$269,700.00","$241,975.00",$780.56,"$57,159.45"
EWR - CVG,54571726808,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/54571726808,https://www.airlines-manager.com/aircraft/show/104610408,19:00,23:14,310,"$269,700.00","$241,975.00",$780.56,"$57,159.45"
EWR - DEN,54536069736,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/54536069736,https://www.airlines-manager.com/aircraft/show/86270785,1:45,9:59,310,"$528,869.00","$464,763.00","$1,499.24","$56,448.95"
EWR - DEN,54536069737,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/54536069737,https://www.airlines-manager.com/aircraft/show/90452835,2:45,10:59,310,"$528,869.00","$464,763.00","$1,499.24","$56,448.95"
EWR - DEN,54551622542,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/54551622542,https://www.airlines-manager.com/aircraft/show/87153196,10:00,18:14,310,"$528,869.00","$464,763.00","$1,499.24","$56,448.95"
EWR - DEN,54556940901,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/54556940901,https://www.airlines-manager.com/aircraft/show/86270783,11:00,19:14,310,"$528,869.00","$464,763.00","$1,499.24","$56,448.95"
EWR - DEN,54567120294,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/54567120294,https://www.airlines-manager.com/aircraft/show/90452833,16:00,0:14,310,"$528,869.00","$464,763.00","$1,499.24","$56,448.95"
EWR - DEN,54567120295,EWR-DEN-SLC 6 B,A319-100,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/54567120295,https://www.airlines-manager.com/aircraft/show/105223076,17:00,1:14,198,"$398,370.00","$347,016.00","$1,752.61","$42,147.69"
EWR - DFW,54536069823,EWR-DFW-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/54536069823,https://www.airlines-manager.com/aircraft/show/90489724,2:30,9:59,320,"$473,208.00","$408,093.00","$1,275.29","$54,533.59"
EWR - DFW,54536069824,EWR-DFW-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/54536069824,https://www.airlines-manager.com/aircraft/show/86238753,3:30,10:59,320,"$473,208.00","$408,093.00","$1,275.29","$54,533.59"
EWR - DFW,54551622517,EWR-DFW-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/54551622517,https://www.airlines-manager.com/aircraft/show/90489725,10:00,17:29,320,"$473,208.00","$408,093.00","$1,275.29","$54,533.59"
EWR - DFW,54556940992,EWR-DFW-ATL 6 B,A319-100,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/54556940992,https://www.airlines-manager.com/aircraft/show/105222360,11:00,18:29,198,"$357,750.00","$312,148.00","$1,576.51","$41,712.43"
EWR - DFW,54556940993,EWR-DFW-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/54556940993,https://www.airlines-manager.com/aircraft/show/86238752,12:15,19:44,320,"$473,208.00","$408,093.00","$1,275.29","$54,533.59"
EWR - DFW,54571726814,EWR-DFW-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/54571726814,https://www.airlines-manager.com/aircraft/show/90489726,19:15,2:44,320,"$473,208.00","$408,093.00","$1,275.29","$54,533.59"
EWR - DSM,54536069773,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/54536069773,https://www.airlines-manager.com/aircraft/show/110113039,2:00,7:59,112,"$177,448.00","$157,408.00","$1,405.43","$26,307.74"
EWR - DSM,54536069774,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/54536069774,https://www.airlines-manager.com/aircraft/show/110044466,4:15,10:14,310,"$375,134.00","$344,684.00","$1,111.88","$57,607.35"
EWR - DSM,54556941103,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/54556941103,https://www.airlines-manager.com/aircraft/show/110044465,12:00,17:59,310,"$375,134.00","$344,684.00","$1,111.88","$57,607.35"
EWR - DSM,54562128266,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/54562128266,https://www.airlines-manager.com/aircraft/show/110044464,13:45,19:44,310,"$375,134.00","$344,684.00","$1,111.88","$57,607.35"
EWR - DSM,54580945045,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/54580945045,https://www.airlines-manager.com/aircraft/show/110044463,22:30,4:29,274,"$349,297.00","$319,847.00","$1,167.32","$53,456.32"
EWR - DTW,54536069906,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/54536069906,https://www.airlines-manager.com/aircraft/show/92003921,3:30,7:29,320,"$226,021.00","$188,774.00",$589.92,"$47,390.96"
EWR - DTW,54551622533,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/54551622533,https://www.airlines-manager.com/aircraft/show/92003925,10:00,13:59,320,"$226,021.00","$188,774.00",$589.92,"$47,390.96"
EWR - DTW,54562128265,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/54562128265,https://www.airlines-manager.com/aircraft/show/92003924,13:30,17:29,320,"$226,021.00","$188,774.00",$589.92,"$47,390.96"
EWR - DTW,54575909696,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/54575909696,https://www.airlines-manager.com/aircraft/show/92003923,21:45,1:44,320,"$226,021.00","$188,774.00",$589.92,"$47,390.96"
EWR - DTW,54580945030,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/54580945030,https://www.airlines-manager.com/aircraft/show/92003922,22:15,2:14,320,"$226,021.00","$188,774.00",$589.92,"$47,390.96"
EWR - DTW,54580945031,EWR CARGO 1,A321neo-LR,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/54580945031,https://www.airlines-manager.com/aircraft/show/103406580,22:45,2:44,0,"$77,953.00","$46,687.00",$0.00,"$11,720.59"
EWR - DUB,54536069902,EWR 56C-2 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/54536069902,https://www.airlines-manager.com/aircraft/show/106721557,3:30,16:59,598,"$1,654,265.00","$1,543,001.00","$2,580.27","$114,437.65"
EWR - DUB,54536069903,EWR 56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/54536069903,https://www.airlines-manager.com/aircraft/show/106721559,5:15,18:44,598,"$1,654,265.00","$1,543,001.00","$2,580.27","$114,437.65"
EWR - DUB,54551622710,EWR 56C-6 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/54551622710,https://www.airlines-manager.com/aircraft/show/106721561,10:30,23:59,598,"$1,654,265.00","$1,543,001.00","$2,580.27","$114,437.65"
EWR - EDI,54536069968,EWR 56C-3 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/54536069968,https://www.airlines-manager.com/aircraft/show/106721558,4:15,17:59,598,"$1,639,756.00","$1,532,465.00","$2,562.65","$111,587.26"
EWR - EDI,54545804661,EWR 56C-5 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/54545804661,https://www.airlines-manager.com/aircraft/show/106721560,6:00,19:44,598,"$1,639,756.00","$1,532,465.00","$2,562.65","$111,587.26"
EWR - EDI,54571726857,EWR 56C-5 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/54571726857,https://www.airlines-manager.com/aircraft/show/106721560,19:45,9:29,598,"$1,639,756.00","$1,532,465.00","$2,562.65","$111,587.26"
EWR - ELP,54536069542,EWR-ELP-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/54536069542,https://www.airlines-manager.com/aircraft/show/103365577,0:30,9:59,320,"$590,378.00","$540,596.00","$1,689.36","$57,004.85"
EWR - ELP,54536069543,EWR-ELP-SAT 5 B,A319-100,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/54536069543,https://www.airlines-manager.com/aircraft/show/110582847,2:30,11:59,198,"$444,845.00","$408,642.00","$2,063.85","$43,090.54"
EWR - ELP,54551622676,EWR-ELP-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/54551622676,https://www.airlines-manager.com/aircraft/show/103365578,10:00,19:29,320,"$590,378.00","$540,596.00","$1,689.36","$57,004.85"
EWR - ELP,54556941066,EWR-ELP-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/54556941066,https://www.airlines-manager.com/aircraft/show/103365575,12:00,21:29,320,"$590,378.00","$540,596.00","$1,689.36","$57,004.85"
EWR - ELP,54567120349,EWR-ELP-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/54567120349,https://www.airlines-manager.com/aircraft/show/103365576,16:15,1:44,320,"$590,378.00","$540,596.00","$1,689.36","$57,004.85"
EWR - EUG,54536069722,EWR-EUG-MFR 4,737-900ER,https://www.airlines-manager.com/network/showline/50283407,https://www.airlines-manager.com/network/showflight/54536069722,https://www.airlines-manager.com/aircraft/show/119220438,1:45,13:29,320,"$726,548.00","$671,283.00","$2,097.76","$57,211.62"
EWR - EUG,54556941062,EWR-EUG-MFR 1,737-900ER,https://www.airlines-manager.com/network/showline/50283407,https://www.airlines-manager.com/network/showflight/54556941062,https://www.airlines-manager.com/aircraft/show/119220435,12:00,23:44,320,"$726,548.00","$671,283.00","$2,097.76","$57,211.62"
EWR - EUG,54562128281,EWR-EUG-MFR 2,737-900ER,https://www.airlines-manager.com/network/showline/50283407,https://www.airlines-manager.com/network/showflight/54562128281,https://www.airlines-manager.com/aircraft/show/119220436,14:00,1:44,320,"$726,548.00","$671,283.00","$2,097.76","$57,211.62"
EWR - EUG,54580945235,EWR-EUG-MFR 3,737-900ER,https://www.airlines-manager.com/network/showline/50283407,https://www.airlines-manager.com/network/showflight/54580945235,https://www.airlines-manager.com/aircraft/show/119220437,23:45,11:29,320,"$726,548.00","$671,283.00","$2,097.76","$57,211.62"
EWR - FAR,54536069728,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/54536069728,https://www.airlines-manager.com/aircraft/show/86270784,1:45,8:29,310,"$423,560.00","$390,593.00","$1,259.98","$58,008.86"
EWR - FAR,54536069729,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/54536069729,https://www.airlines-manager.com/aircraft/show/86270786,5:00,11:44,310,"$423,560.00","$390,593.00","$1,259.98","$58,008.86"
EWR - FAR,54562128454,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/54562128454,https://www.airlines-manager.com/aircraft/show/86270787,15:00,21:44,310,"$423,560.00","$390,593.00","$1,259.98","$58,008.86"
EWR - FAR,54571726813,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/54571726813,https://www.airlines-manager.com/aircraft/show/90452834,19:15,1:59,310,"$423,560.00","$390,593.00","$1,259.98","$58,008.86"
EWR - FAT,54536069509,EWR-PSP-FAT 2,A321neo,https://www.airlines-manager.com/network/showline/50283404,https://www.airlines-manager.com/network/showflight/54536069509,https://www.airlines-manager.com/aircraft/show/119220451,0:15,11:44,338,"$775,933.00","$727,808.00","$2,153.28","$63,379.51"
EWR - FAT,54556940905,EWR-PSP-FAT 3,A321neo,https://www.airlines-manager.com/network/showline/50283404,https://www.airlines-manager.com/network/showflight/54556940905,https://www.airlines-manager.com/aircraft/show/119220452,11:00,22:29,338,"$775,933.00","$727,808.00","$2,153.28","$63,379.51"
EWR - FAT,54556940906,EWR-PSP-FAT 4,A321neo,https://www.airlines-manager.com/network/showline/50283404,https://www.airlines-manager.com/network/showflight/54556940906,https://www.airlines-manager.com/aircraft/show/116672810,13:00,0:29,338,"$775,933.00","$727,808.00","$2,153.28","$63,379.51"
EWR - FAT,54580945027,EWR-PSP-FAT 1,A321neo,https://www.airlines-manager.com/network/showline/50283404,https://www.airlines-manager.com/network/showflight/54580945027,https://www.airlines-manager.com/aircraft/show/119220450,22:15,9:44,338,"$775,933.00","$727,808.00","$2,153.28","$63,379.51"
EWR - FCA,54556941080,EWR-FCA-CID 1,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/54556941080,https://www.airlines-manager.com/aircraft/show/116042866,12:00,21:59,310,"$623,241.00","$578,539.00","$1,866.25","$57,950.48"
EWR - FCA,54562128458,EWR-FCA-CID 4,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/54562128458,https://www.airlines-manager.com/aircraft/show/116042863,15:15,1:14,310,"$623,241.00","$578,539.00","$1,866.25","$57,950.48"
EWR - FCA,54567120343,EWR-FCA-CID 3,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/54567120343,https://www.airlines-manager.com/aircraft/show/116042864,16:15,2:14,310,"$623,241.00","$578,539.00","$1,866.25","$57,950.48"
EWR - FCA,54575909754,EWR-FCA-CID 2,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/54575909754,https://www.airlines-manager.com/aircraft/show/116042865,22:00,7:59,310,"$623,241.00","$578,539.00","$1,866.25","$57,950.48"
EWR - FCO,54536069820,EWR 84A-2 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/54536069820,https://www.airlines-manager.com/aircraft/show/94521252,2:30,19:59,852,"$2,900,124.00","$2,626,210.00","$3,082.41","$150,212.20"
EWR - FCO,54556941105,EWR 84A-3 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/54556941105,https://www.airlines-manager.com/aircraft/show/90656553,12:00,5:29,852,"$2,900,124.00","$2,626,210.00","$3,082.41","$150,212.20"
EWR - FLL,54536069675,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/54536069675,https://www.airlines-manager.com/aircraft/show/107576645,1:15,7:29,0,"$102,887.00","$77,339.00",$0.00,"$12,407.33"
EWR - FLL,54536069676,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/54536069676,https://www.airlines-manager.com/aircraft/show/92003924,3:45,9:59,320,"$388,966.00","$348,953.00","$1,090.48","$55,981.76"
EWR - FLL,54545804625,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/54545804625,https://www.airlines-manager.com/aircraft/show/92003922,5:45,11:59,320,"$388,966.00","$348,953.00","$1,090.48","$55,981.76"
EWR - FLL,54556940917,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/54556940917,https://www.airlines-manager.com/aircraft/show/92003921,11:00,17:14,320,"$388,966.00","$348,953.00","$1,090.48","$55,981.76"
EWR - FLL,54556940918,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/54556940918,https://www.airlines-manager.com/aircraft/show/92003923,12:00,18:14,320,"$388,966.00","$348,953.00","$1,090.48","$55,981.76"
EWR - FLL,54567120456,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/54567120456,https://www.airlines-manager.com/aircraft/show/92003925,17:30,23:44,320,"$388,966.00","$348,953.00","$1,090.48","$55,981.76"
EWR - FRA,54536069851,EWR 56B-5 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/54536069851,https://www.airlines-manager.com/aircraft/show/94521253,2:45,18:44,748,"$2,440,394.00","$2,175,490.00","$2,908.41","$136,109.91"
EWR - FRA,54536069852,EWR 56B-3 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/54536069852,https://www.airlines-manager.com/aircraft/show/90656555,4:30,20:29,748,"$2,440,394.00","$2,175,490.00","$2,908.41","$136,109.91"
EWR - FRA,54545804665,EWR 56B-1 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/54545804665,https://www.airlines-manager.com/aircraft/show/94521251,6:15,22:14,748,"$2,202,225.00","$2,001,233.00","$2,675.45","$125,207.49"
EWR - FSD,54536069957,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/54536069957,https://www.airlines-manager.com/aircraft/show/107161240,4:15,10:59,310,"$411,278.00","$378,797.00","$1,221.93","$56,256.98"
EWR - FSD,54551622480,EWR-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/54551622480,https://www.airlines-manager.com/aircraft/show/86782214,9:00,15:44,112,"$193,854.00","$172,324.00","$1,538.61","$25,592.67"
EWR - FSD,54556940952,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/54556940952,https://www.airlines-manager.com/aircraft/show/107161239,11:00,17:44,310,"$411,278.00","$378,797.00","$1,221.93","$56,256.98"
EWR - FSD,54562128462,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/54562128462,https://www.airlines-manager.com/aircraft/show/107161241,15:15,21:59,310,"$411,278.00","$378,797.00","$1,221.93","$56,256.98"
EWR - FSD,54571726724,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/54571726724,https://www.airlines-manager.com/aircraft/show/107161238,18:15,0:59,279,"$386,833.00","$355,346.00","$1,273.64","$52,774.16"
EWR - GRR,54551622438,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/54551622438,https://www.airlines-manager.com/aircraft/show/116042862,8:30,12:59,310,"$277,025.00","$252,083.00",$813.17,"$56,226.69"
EWR - GRR,54562128332,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/54562128332,https://www.airlines-manager.com/aircraft/show/116042859,14:00,18:29,310,"$277,025.00","$252,083.00",$813.17,"$56,226.69"
EWR - GRR,54571726842,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/54571726842,https://www.airlines-manager.com/aircraft/show/116042860,19:30,23:59,310,"$277,025.00","$252,083.00",$813.17,"$56,226.69"
EWR - GRR,54575909607,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/54575909607,https://www.airlines-manager.com/aircraft/show/116042861,20:45,1:14,310,"$277,025.00","$252,083.00",$813.17,"$56,226.69"
EWR - GSO,54536069925,EWR-TYS-GSO 3,A321-200,https://www.airlines-manager.com/network/showline/50283471,https://www.airlines-manager.com/network/showflight/54536069925,https://www.airlines-manager.com/aircraft/show/119220544,3:45,7:29,310,"$216,841.00","$194,222.00",$626.52,"$52,023.75"
EWR - GSO,54551622513,EWR-TYS-GSO 2,A321-200,https://www.airlines-manager.com/network/showline/50283471,https://www.airlines-manager.com/network/showflight/54551622513,https://www.airlines-manager.com/aircraft/show/119220543,10:00,13:44,310,"$216,841.00","$194,222.00",$626.52,"$52,023.75"
EWR - GSO,54562128381,EWR-TYS-GSO 1,A321-200,https://www.airlines-manager.com/network/showline/50283471,https://www.airlines-manager.com/network/showflight/54562128381,https://www.airlines-manager.com/aircraft/show/119220542,14:30,18:14,310,"$216,841.00","$194,222.00",$626.52,"$52,023.75"
EWR - GSO,54580945219,EWR-TYS-GSO 4,A321-200,https://www.airlines-manager.com/network/showline/50283471,https://www.airlines-manager.com/network/showflight/54580945219,https://www.airlines-manager.com/aircraft/show/119220545,23:15,2:59,310,"$216,841.00","$194,222.00",$626.52,"$52,023.75"
EWR - HEL,54556940889,EWR 56D-6 E,787-10,https://www.airlines-manager.com/network/showline/50072206,https://www.airlines-manager.com/network/showflight/54556940889,https://www.airlines-manager.com/aircraft/show/118644441,10:45,3:29,648,"$2,045,741.00","$1,910,556.00","$2,948.39","$114,176.65"
EWR - HEL,54556940890,EWR 56D-7 E,787-10,https://www.airlines-manager.com/network/showline/50072206,https://www.airlines-manager.com/network/showflight/54556940890,https://www.airlines-manager.com/aircraft/show/118644442,11:00,3:44,648,"$2,045,741.00","$1,910,556.00","$2,948.39","$114,176.65"
EWR - HEL,54575909495,EWR 56D-2 E,787-10,https://www.airlines-manager.com/network/showline/50072206,https://www.airlines-manager.com/network/showflight/54575909495,https://www.airlines-manager.com/aircraft/show/118644437,20:00,12:44,574,"$1,889,005.00","$1,761,429.00","$3,068.69","$105,264.68"
EWR - IAH,54536069911,EWR-IAH-LAS 3,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/54536069911,https://www.airlines-manager.com/aircraft/show/105859512,3:30,10:59,338,"$517,432.00","$469,570.00","$1,389.26","$62,748.78"
EWR - IAH,54536069912,EWR-IAH-LAS 5,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/54536069912,https://www.airlines-manager.com/aircraft/show/105859514,4:30,11:59,338,"$517,432.00","$469,570.00","$1,389.26","$62,748.78"
EWR - IAH,54545804737,EWR-IAH-LAS 1,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/54545804737,https://www.airlines-manager.com/aircraft/show/105859510,7:30,14:59,338,"$517,432.00","$469,570.00","$1,389.26","$62,748.78"
EWR - IAH,54556941002,EWR-IAH-LAS 2,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/54556941002,https://www.airlines-manager.com/aircraft/show/105859511,11:00,18:29,338,"$517,432.00","$469,570.00","$1,389.26","$62,748.78"
EWR - IAH,54556941003,EWR-IAH-LAS 4,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/54556941003,https://www.airlines-manager.com/aircraft/show/105859513,12:00,19:29,338,"$517,432.00","$469,570.00","$1,389.26","$62,748.78"
EWR - IAH,54571726761,EWR-IAH-LAS 6,ERJ-175,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/54571726761,https://www.airlines-manager.com/aircraft/show/105864236,18:45,2:14,112,"$225,538.00","$193,331.00","$1,726.17","$25,834.88"
EWR - ICT,54536069636,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/54536069636,https://www.airlines-manager.com/aircraft/show/108834810,1:00,7:59,310,"$441,027.00","$406,327.00","$1,310.73","$58,185.25"
EWR - ICT,54536069637,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/54536069637,https://www.airlines-manager.com/aircraft/show/108834809,3:00,9:59,310,"$441,027.00","$406,327.00","$1,310.73","$58,185.25"
EWR - ICT,54556940955,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/54556940955,https://www.airlines-manager.com/aircraft/show/108834808,11:00,17:59,310,"$441,027.00","$406,327.00","$1,310.73","$58,185.25"
EWR - ICT,54556940956,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/54556940956,https://www.airlines-manager.com/aircraft/show/108834811,13:00,19:59,310,"$441,027.00","$406,327.00","$1,310.73","$58,185.25"
EWR - ICT,54575909676,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/54575909676,https://www.airlines-manager.com/aircraft/show/108466265,21:30,4:29,112,"$208,777.00","$185,757.00","$1,658.54","$26,600.05"
EWR - IND,54536069533,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/54536069533,https://www.airlines-manager.com/aircraft/show/88494376,0:30,4:59,320,"$294,206.00","$262,638.00",$820.74,"$58,580.97"
EWR - IND,54536069534,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/54536069534,https://www.airlines-manager.com/aircraft/show/88494377,4:15,8:44,320,"$294,206.00","$262,638.00",$820.74,"$58,580.97"
EWR - IND,54556940990,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/54556940990,https://www.airlines-manager.com/aircraft/show/88494375,11:00,15:29,320,"$294,206.00","$262,638.00",$820.74,"$58,580.97"
EWR - IND,54567120446,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/54567120446,https://www.airlines-manager.com/aircraft/show/106104450,17:30,21:59,112,"$140,444.00","$122,789.00","$1,096.33","$27,387.88"
EWR - IND,54575909599,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/54575909599,https://www.airlines-manager.com/aircraft/show/105731236,20:45,1:14,320,"$294,206.00","$262,638.00",$820.74,"$58,580.97"
EWR - JAN,54536069771,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/54536069771,https://www.airlines-manager.com/aircraft/show/90452834,2:00,8:14,310,"$387,663.00","$356,982.00","$1,151.55","$57,269.84"
EWR - JAN,54551622426,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/54551622426,https://www.airlines-manager.com/aircraft/show/86270784,8:30,14:44,310,"$387,663.00","$356,982.00","$1,151.55","$57,269.84"
EWR - JAN,54556941078,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/54556941078,https://www.airlines-manager.com/aircraft/show/86270786,12:00,18:14,310,"$387,663.00","$356,982.00","$1,151.55","$57,269.84"
EWR - JAN,54575909692,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/54575909692,https://www.airlines-manager.com/aircraft/show/86270787,21:45,3:59,310,"$387,663.00","$356,982.00","$1,151.55","$57,269.84"
EWR - JAX,54536069806,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/54536069806,https://www.airlines-manager.com/aircraft/show/104610407,2:15,7:29,310,"$336,410.00","$307,387.00",$991.57,"$58,736.37"
EWR - JAX,54545804771,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/54545804771,https://www.airlines-manager.com/aircraft/show/104610408,8:15,13:29,310,"$336,410.00","$307,387.00",$991.57,"$58,736.37"
EWR - JAX,54562128356,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/54562128356,https://www.airlines-manager.com/aircraft/show/104610409,14:00,19:14,310,"$336,410.00","$307,387.00",$991.57,"$58,736.37"
EWR - JAX,54571726675,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/54571726675,https://www.airlines-manager.com/aircraft/show/104610410,18:00,23:14,310,"$336,410.00","$307,387.00",$991.57,"$58,736.37"
EWR - JAX,54575909715,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/54575909715,https://www.airlines-manager.com/aircraft/show/96421247,22:00,3:14,112,"$159,716.00","$140,870.00","$1,257.77","$26,917.83"
EWR - KEF,54567120423,EWR 56C-2 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/54567120423,https://www.airlines-manager.com/aircraft/show/106721557,17:00,4:14,598,"$1,336,918.00","$1,247,907.00","$2,086.80","$111,089.64"
EWR - KEF,54571726681,EWR 56C-3 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/54571726681,https://www.airlines-manager.com/aircraft/show/106721558,18:00,5:14,598,"$1,336,918.00","$1,247,907.00","$2,086.80","$111,089.64"
EWR - KEF,54571726682,EWR 56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/54571726682,https://www.airlines-manager.com/aircraft/show/106721559,18:45,5:59,598,"$1,336,918.00","$1,247,907.00","$2,086.80","$111,089.64"
EWR - LAS,54536069486,EWR-IAH-LAS 2,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/54536069486,https://www.airlines-manager.com/aircraft/show/105859511,0:15,10:59,338,"$734,476.00","$670,312.00","$1,983.17","$62,451.43"
EWR - LAS,54536069487,EWR-IAH-LAS 4,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/54536069487,https://www.airlines-manager.com/aircraft/show/105859513,1:15,11:59,338,"$734,476.00","$670,312.00","$1,983.17","$62,451.43"
EWR - LAS,54536069488,EWR-IAH-LAS 6,ERJ-175,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/54536069488,https://www.airlines-manager.com/aircraft/show/105864236,2:15,12:59,112,"$317,374.00","$273,329.00","$2,440.44","$25,465.43"
EWR - LAS,54556941075,EWR-IAH-LAS 5,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/54556941075,https://www.airlines-manager.com/aircraft/show/105859514,12:00,22:44,338,"$734,476.00","$670,312.00","$1,983.17","$62,451.43"
EWR - LAS,54562128447,EWR-IAH-LAS 1,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/54562128447,https://www.airlines-manager.com/aircraft/show/105859510,15:00,1:44,338,"$734,476.00","$670,312.00","$1,983.17","$62,451.43"
EWR - LAS,54567120379,EWR-IAH-LAS 3,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/54567120379,https://www.airlines-manager.com/aircraft/show/105859512,16:45,3:29,338,"$734,476.00","$670,312.00","$1,983.17","$62,451.43"
EWR - LAX,54536069434,EWR-SFO-LAX 4,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/54536069434,https://www.airlines-manager.com/aircraft/show/89233030,0:00,11:29,400,"$933,133.00","$841,910.00","$2,104.78","$73,315.82"
EWR - LAX,54536069435,EWR-SFO-LAX 5,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/54536069435,https://www.airlines-manager.com/aircraft/show/89233027,2:00,13:29,400,"$933,133.00","$841,910.00","$2,104.78","$73,315.82"
EWR - LAX,54556941122,EWR-SFO-LAX 1,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/54556941122,https://www.airlines-manager.com/aircraft/show/83716137,12:30,23:59,400,"$933,133.00","$841,910.00","$2,104.78","$73,315.82"
EWR - LAX,54562128315,EWR-SFO-LAX 2,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/54562128315,https://www.airlines-manager.com/aircraft/show/89233028,14:00,1:29,400,"$933,133.00","$841,910.00","$2,104.78","$73,315.82"
EWR - LAX,54567120238,EWR-SFO-LAX 3,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/54567120238,https://www.airlines-manager.com/aircraft/show/89233029,15:30,2:59,400,"$933,133.00","$841,910.00","$2,104.78","$73,315.82"
EWR - LEX,54536069865,EWR-TYS-GSO 4,A321-200,https://www.airlines-manager.com/network/showline/50283473,https://www.airlines-manager.com/network/showflight/54536069865,https://www.airlines-manager.com/aircraft/show/119220545,3:00,7:29,310,"$272,372.00","$249,164.00",$803.75,"$55,575.61"
EWR - LEX,54551622537,EWR-TYS-GSO 3,A321-200,https://www.airlines-manager.com/network/showline/50283473,https://www.airlines-manager.com/network/showflight/54551622537,https://www.airlines-manager.com/aircraft/show/119220544,10:00,14:29,310,"$272,372.00","$249,164.00",$803.75,"$55,575.61"
EWR - LEX,54562128268,EWR-TYS-GSO 2,A321-200,https://www.airlines-manager.com/network/showline/50283473,https://www.airlines-manager.com/network/showflight/54562128268,https://www.airlines-manager.com/aircraft/show/119220543,13:45,18:14,310,"$272,372.00","$249,164.00",$803.75,"$55,575.61"
EWR - LEX,54571726715,EWR-TYS-GSO 1,A321-200,https://www.airlines-manager.com/network/showline/50283473,https://www.airlines-manager.com/network/showflight/54571726715,https://www.airlines-manager.com/aircraft/show/119220542,18:15,22:44,278,"$256,054.00","$233,360.00",$839.42,"$52,050.56"
EWR - LHR,54536069808,EWR 56A-1 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/54536069808,https://www.airlines-manager.com/aircraft/show/106813007,2:15,16:44,748,"$2,220,102.00","$1,968,499.00","$2,631.68","$135,914.78"
EWR - LHR,54556941124,EWR 56A-4 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/54556941124,https://www.airlines-manager.com/aircraft/show/106813010,12:30,2:59,748,"$2,220,102.00","$1,968,499.00","$2,631.68","$135,914.78"
EWR - LHR,54571726722,EWR 56A-5 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/54571726722,https://www.airlines-manager.com/aircraft/show/106813011,18:15,8:44,748,"$2,003,986.00","$1,809,626.00","$2,419.29","$124,945.41"
EWR - LIS,54545804587,EWR 84A-4 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/54545804587,https://www.airlines-manager.com/aircraft/show/90656551,5:30,19:44,852,"$2,328,457.00","$2,120,122.00","$2,488.41","$148,954.71"
EWR - LIS,54556941118,EWR 84A-1 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/54556941118,https://www.airlines-manager.com/aircraft/show/90656554,12:15,2:29,852,"$2,328,457.00","$2,120,122.00","$2,488.41","$148,954.71"
EWR - LIT,54551622420,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/54551622420,https://www.airlines-manager.com/aircraft/show/86270787,8:30,14:44,310,"$393,416.00","$362,459.00","$1,169.22","$58,148.50"
EWR - LIT,54556941161,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/54556941161,https://www.airlines-manager.com/aircraft/show/90452834,13:00,19:14,310,"$393,416.00","$362,459.00","$1,169.22","$58,148.50"
EWR - LIT,54571726838,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/54571726838,https://www.airlines-manager.com/aircraft/show/86270784,19:30,1:44,310,"$393,416.00","$362,459.00","$1,169.22","$58,148.50"
EWR - LIT,54580945075,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/54580945075,https://www.airlines-manager.com/aircraft/show/86270786,22:45,4:59,310,"$393,416.00","$362,459.00","$1,169.22","$58,148.50"
EWR - MAD,54536069427,EWR 56B-7 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/54536069427,https://www.airlines-manager.com/aircraft/show/89124072,0:00,14:59,748,"$2,289,510.00","$2,036,551.00","$2,722.66","$135,921.09"
EWR - MAD,54575909572,EWR 56B-3 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/54575909572,https://www.airlines-manager.com/aircraft/show/90656555,20:30,11:29,748,"$2,289,510.00","$2,036,551.00","$2,722.66","$135,921.09"
EWR - MAD,54580945026,EWR 56B-1 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/54580945026,https://www.airlines-manager.com/aircraft/show/94521251,22:15,13:14,748,"$2,065,725.00","$1,872,334.00","$2,503.12","$124,961.11"
EWR - MBJ,54536069907,EWR 56D-7 E,787-10,https://www.airlines-manager.com/network/showline/50072192,https://www.airlines-manager.com/network/showflight/54536069907,https://www.airlines-manager.com/aircraft/show/118644442,3:30,10:59,648,"$941,073.00","$879,294.00","$1,356.94","$117,500.31"
EWR - MBJ,54556941037,EWR 56D-5 E,787-10,https://www.airlines-manager.com/network/showline/50072192,https://www.airlines-manager.com/network/showflight/54556941037,https://www.airlines-manager.com/aircraft/show/118644440,11:15,18:44,648,"$941,073.00","$879,294.00","$1,356.94","$117,500.31"
EWR - MBJ,54571726853,EWR 56D-1 E,787-10,https://www.airlines-manager.com/network/showline/50072192,https://www.airlines-manager.com/network/showflight/54571726853,https://www.airlines-manager.com/aircraft/show/118644436,19:45,3:14,633,"$913,467.00","$852,472.00","$1,346.72","$113,916.08"
EWR - MCI,54536069922,EWR-ELP-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/54536069922,https://www.airlines-manager.com/aircraft/show/103365578,3:45,9:59,320,"$393,086.00","$354,110.00","$1,106.59","$56,809.09"
EWR - MCI,54545804612,EWR-ELP-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/54545804612,https://www.airlines-manager.com/aircraft/show/103365575,5:45,11:59,320,"$393,086.00","$354,110.00","$1,106.59","$56,809.09"
EWR - MCI,54551622672,EWR-ELP-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/54551622672,https://www.airlines-manager.com/aircraft/show/103365576,10:00,16:14,320,"$393,086.00","$354,110.00","$1,106.59","$56,809.09"
EWR - MCI,54562128249,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/54562128249,https://www.airlines-manager.com/aircraft/show/107576645,13:15,19:29,0,"$103,090.00","$77,943.00",#DIV/0!,"$12,504.22"
EWR - MCI,54571726717,EWR-ELP-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/54571726717,https://www.airlines-manager.com/aircraft/show/103365577,18:15,0:29,320,"$393,086.00","$354,110.00","$1,106.59","$56,809.09"
EWR - MCI,54575909556,EWR-ELP-SAT 5 B,A319-100,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/54575909556,https://www.airlines-manager.com/aircraft/show/110582847,20:15,2:29,198,"$297,566.00","$269,839.00","$1,362.82","$43,289.68"
EWR - MCO,54536069733,EWR-IAH-LAS 1,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/54536069733,https://www.airlines-manager.com/aircraft/show/105859510,1:45,7:29,338,"$389,629.00","$350,334.00","$1,036.49","$61,104.77"
EWR - MCO,54556941000,EWR-IAH-LAS 3,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/54556941000,https://www.airlines-manager.com/aircraft/show/105859512,11:00,16:44,338,"$389,629.00","$350,334.00","$1,036.49","$61,104.77"
EWR - MCO,54556941001,EWR-IAH-LAS 6,ERJ-175,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/54556941001,https://www.airlines-manager.com/aircraft/show/105864236,13:00,18:44,112,"$170,762.00","$144,844.00","$1,293.25","$25,263.49"
EWR - MCO,54571726741,EWR-IAH-LAS 2,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/54571726741,https://www.airlines-manager.com/aircraft/show/105859511,18:30,0:14,338,"$389,629.00","$350,334.00","$1,036.49","$61,104.77"
EWR - MCO,54571726742,EWR-IAH-LAS 4,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/54571726742,https://www.airlines-manager.com/aircraft/show/105859513,19:30,1:14,338,"$389,629.00","$350,334.00","$1,036.49","$61,104.77"
EWR - MCO,54580945081,EWR-IAH-LAS 5,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/54580945081,https://www.airlines-manager.com/aircraft/show/105859514,22:45,4:29,335,"$387,576.00","$348,345.00","$1,039.84","$60,757.85"
EWR - MEM,54536069671,EWR-RNO-MEM 4,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/54536069671,https://www.airlines-manager.com/aircraft/show/99920619,1:15,6:59,320,"$361,672.00","$324,614.00","$1,014.42","$56,618.72"
EWR - MEM,54536069672,EWR-RNO-MEM 3,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/54536069672,https://www.airlines-manager.com/aircraft/show/99920620,3:45,9:29,320,"$361,672.00","$324,614.00","$1,014.42","$56,618.72"
EWR - MEM,54551622700,EWR-RNO-MEM 2,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/54551622700,https://www.airlines-manager.com/aircraft/show/99920621,10:15,15:59,320,"$361,672.00","$324,614.00","$1,014.42","$56,618.72"
EWR - MEM,54571726836,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/54571726836,https://www.airlines-manager.com/aircraft/show/107576645,19:30,1:14,0,"$96,286.00","$72,851.00",$0.00,"$12,706.57"
EWR - MEM,54575909562,EWR-RNO-MEM 5 B,A319-100,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/54575909562,https://www.airlines-manager.com/aircraft/show/100096560,20:15,1:59,198,"$274,266.00","$248,050.00","$1,252.78","$43,264.53"
EWR - MEM,54575909563,EWR-RNO-MEM 1,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/54575909563,https://www.airlines-manager.com/aircraft/show/99920622,21:30,3:14,320,"$361,672.00","$324,614.00","$1,014.42","$56,618.72"
EWR - MEX,54536069743,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/54536069743,https://www.airlines-manager.com/aircraft/show/92003923,1:45,11:59,320,"$638,807.00","$575,207.00","$1,797.52","$56,209.15"
EWR - MEX,54551622559,EWR-DTW-YYZ 6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/54551622559,https://www.airlines-manager.com/aircraft/show/104258433,10:00,20:14,216,"$486,413.00","$439,908.00","$2,036.61","$42,987.75"
EWR - MEX,54556941114,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/54556941114,https://www.airlines-manager.com/aircraft/show/92003922,12:00,22:14,320,"$638,807.00","$575,207.00","$1,797.52","$56,209.15"
EWR - MEX,54567120436,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/54567120436,https://www.airlines-manager.com/aircraft/show/92003921,17:15,3:29,320,"$638,807.00","$575,207.00","$1,797.52","$56,209.15"
EWR - MEX,54567120437,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/54567120437,https://www.airlines-manager.com/aircraft/show/92003924,17:30,3:44,320,"$638,807.00","$575,207.00","$1,797.52","$56,209.15"
EWR - MEX,54575909555,EWR-DTW-YYZ 6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/54575909555,https://www.airlines-manager.com/aircraft/show/104258433,20:15,6:29,216,"$486,413.00","$439,908.00","$2,036.61","$42,987.75"
EWR - MEX,54580945236,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/54580945236,https://www.airlines-manager.com/aircraft/show/92003925,23:45,9:59,298,"$600,687.00","$538,625.00","$1,807.47","$52,634.36"
EWR - MFR,54536069723,EWR-EUG-MFR 2,737-900ER,https://www.airlines-manager.com/network/showline/50283408,https://www.airlines-manager.com/network/showflight/54536069723,https://www.airlines-manager.com/aircraft/show/119220436,1:45,13:29,320,"$714,030.00","$657,967.00","$2,056.15","$56,076.73"
EWR - MFR,54556941063,EWR-EUG-MFR 3,737-900ER,https://www.airlines-manager.com/network/showline/50283408,https://www.airlines-manager.com/network/showflight/54556941063,https://www.airlines-manager.com/aircraft/show/119220437,12:00,23:44,320,"$714,030.00","$657,967.00","$2,056.15","$56,076.73"
EWR - MFR,54562128280,EWR-EUG-MFR 4,737-900ER,https://www.airlines-manager.com/network/showline/50283408,https://www.airlines-manager.com/network/showflight/54562128280,https://www.airlines-manager.com/aircraft/show/119220438,14:00,1:44,320,"$714,030.00","$657,967.00","$2,056.15","$56,076.73"
EWR - MFR,54580945250,EWR-EUG-MFR 1,737-900ER,https://www.airlines-manager.com/network/showline/50283408,https://www.airlines-manager.com/network/showflight/54580945250,https://www.airlines-manager.com/aircraft/show/119220435,23:45,11:29,320,"$714,030.00","$657,967.00","$2,056.15","$56,076.73"
EWR - MHT,54536069934,EWR-FCA-CID 1,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/54536069934,https://www.airlines-manager.com/aircraft/show/116042866,3:45,6:44,310,"$126,333.00","$107,196.00",$345.79,"$35,931.62"
EWR - MHT,54551622482,EWR-FCA-CID 4,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/54551622482,https://www.airlines-manager.com/aircraft/show/116042863,9:00,11:59,310,"$126,333.00","$107,196.00",$345.79,"$35,931.62"
EWR - MHT,54551622483,EWR-FCA-CID 3,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/54551622483,https://www.airlines-manager.com/aircraft/show/116042864,10:00,12:59,310,"$126,333.00","$107,196.00",$345.79,"$35,931.62"
EWR - MHT,54556940929,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/54556940929,https://www.airlines-manager.com/aircraft/show/98887257,11:00,13:59,112,"$56,299.00","$44,452.00",$396.89,"$14,900.11"
EWR - MHT,54567120258,EWR-FCA-CID 2,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/54567120258,https://www.airlines-manager.com/aircraft/show/116042865,15:45,18:44,310,"$126,333.00","$107,196.00",$345.79,"$35,931.62"
EWR - MIA,54536069817,EWR-MIA-ORD 5,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/54536069817,https://www.airlines-manager.com/aircraft/show/113251309,2:30,8:44,338,"$429,805.00","$386,719.00","$1,144.14","$62,040.48"
EWR - MIA,54536069818,EWR-MIA-ORD 1,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/54536069818,https://www.airlines-manager.com/aircraft/show/113251305,4:00,10:14,338,"$429,805.00","$386,719.00","$1,144.14","$62,040.48"
EWR - MIA,54551622514,EWR-MIA-ORD 2,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/54551622514,https://www.airlines-manager.com/aircraft/show/113251306,10:00,16:14,338,"$429,805.00","$386,719.00","$1,144.14","$62,040.48"
EWR - MIA,54556941019,EWR-MIA-ORD 4,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/54556941019,https://www.airlines-manager.com/aircraft/show/113251308,11:00,17:14,338,"$429,805.00","$386,719.00","$1,144.14","$62,040.48"
EWR - MIA,54567120364,EWR-MIA-ORD 3,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/54567120364,https://www.airlines-manager.com/aircraft/show/113251307,16:30,22:44,338,"$429,805.00","$386,719.00","$1,144.14","$62,040.48"
EWR - MKE,54536069897,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/54536069897,https://www.airlines-manager.com/aircraft/show/96421247,3:15,8:14,112,"$149,880.00","$131,888.00","$1,177.57","$26,465.82"
EWR - MKE,54545804740,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/54545804740,https://www.airlines-manager.com/aircraft/show/104610407,7:30,12:29,310,"$315,504.00","$287,619.00",$927.80,"$57,716.19"
EWR - MKE,54562128355,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/54562128355,https://www.airlines-manager.com/aircraft/show/104610408,14:00,18:59,310,"$315,504.00","$287,619.00",$927.80,"$57,716.19"
EWR - MKE,54571726818,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/54571726818,https://www.airlines-manager.com/aircraft/show/104610409,19:15,0:14,310,"$315,504.00","$287,619.00",$927.80,"$57,716.19"
EWR - MKE,54580945205,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/54580945205,https://www.airlines-manager.com/aircraft/show/104610410,23:15,4:14,310,"$315,504.00","$287,619.00",$927.80,"$57,716.19"
EWR - MSN,54536069816,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/54536069816,https://www.airlines-manager.com/aircraft/show/116042859,2:30,7:44,310,"$330,385.00","$303,141.00",$977.87,"$57,925.03"
EWR - MSN,54551622449,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/54551622449,https://www.airlines-manager.com/aircraft/show/116042860,8:45,13:59,310,"$330,385.00","$303,141.00",$977.87,"$57,925.03"
EWR - MSN,54551622450,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/54551622450,https://www.airlines-manager.com/aircraft/show/116042861,10:00,15:14,310,"$330,385.00","$303,141.00",$977.87,"$57,925.03"
EWR - MSN,54575909615,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/54575909615,https://www.airlines-manager.com/aircraft/show/116042862,21:00,2:14,310,"$330,385.00","$303,141.00",$977.87,"$57,925.03"
EWR - MSO,54536069640,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/54536069640,https://www.airlines-manager.com/aircraft/show/107161238,1:00,10:59,310,"$615,656.00","$570,709.00","$1,841.00","$57,166.18"
EWR - MSO,54556941028,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/54556941028,https://www.airlines-manager.com/aircraft/show/107161240,11:00,20:59,310,"$615,656.00","$570,709.00","$1,841.00","$57,166.18"
EWR - MSO,54567120261,EWR-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/54567120261,https://www.airlines-manager.com/aircraft/show/86782214,15:45,1:44,112,"$289,178.00","$258,695.00","$2,309.78","$25,912.69"
EWR - MSO,54571726652,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/54571726652,https://www.airlines-manager.com/aircraft/show/107161239,17:45,3:44,310,"$615,656.00","$570,709.00","$1,841.00","$57,166.18"
EWR - MSO,54575909756,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/54575909756,https://www.airlines-manager.com/aircraft/show/107161241,22:00,7:59,310,"$615,656.00","$570,709.00","$1,841.00","$57,166.18"
EWR - MSP,54536069993,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/54536069993,https://www.airlines-manager.com/aircraft/show/86270783,5:00,10:59,310,"$374,578.00","$335,343.00","$1,081.75","$56,046.18"
EWR - MSP,54551622540,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/54551622540,https://www.airlines-manager.com/aircraft/show/90452833,10:00,15:59,310,"$374,578.00","$335,343.00","$1,081.75","$56,046.18"
EWR - MSP,54556940994,EWR-DEN-SLC 6 B,A319-100,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/54556940994,https://www.airlines-manager.com/aircraft/show/105223076,11:00,16:59,198,"$283,918.00","$252,487.00","$1,275.19","$42,198.38"
EWR - MSP,54571726713,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/54571726713,https://www.airlines-manager.com/aircraft/show/87153196,18:15,0:14,310,"$374,578.00","$335,343.00","$1,081.75","$56,046.18"
EWR - MSP,54571726714,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/54571726714,https://www.airlines-manager.com/aircraft/show/86270785,19:45,1:44,310,"$374,578.00","$335,343.00","$1,081.75","$56,046.18"
EWR - MSP,54575909594,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/54575909594,https://www.airlines-manager.com/aircraft/show/90452835,20:45,2:44,310,"$374,578.00","$335,343.00","$1,081.75","$56,046.18"
EWR - MSY,54536069899,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/54536069899,https://www.airlines-manager.com/aircraft/show/90717079,3:15,9:59,310,"$414,563.00","$379,812.00","$1,225.20","$56,407.72"
EWR - MSY,54551622697,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/54551622697,https://www.airlines-manager.com/aircraft/show/90717077,10:00,16:44,310,"$414,563.00","$379,812.00","$1,225.20","$56,407.72"
EWR - MSY,54556940922,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/54556940922,https://www.airlines-manager.com/aircraft/show/90717076,11:00,17:44,310,"$414,563.00","$379,812.00","$1,225.20","$56,407.72"
EWR - MSY,54571726687,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/54571726687,https://www.airlines-manager.com/aircraft/show/90717078,18:00,0:44,310,"$414,563.00","$379,812.00","$1,225.20","$56,407.72"
EWR - MSY,54575909494,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/54575909494,https://www.airlines-manager.com/aircraft/show/95950199,20:00,2:44,310,"$414,563.00","$379,812.00","$1,225.20","$56,407.72"
EWR - MUC,54536069426,EWR 56C-7 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/54536069426,https://www.airlines-manager.com/aircraft/show/106721562,0:00,16:29,598,"$2,038,935.00","$1,888,864.00","$3,158.64","$114,592.36"
EWR - MUC,54556940951,EWR 56C-1 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/54556940951,https://www.airlines-manager.com/aircraft/show/106721556,11:00,3:29,598,"$2,038,935.00","$1,888,864.00","$3,158.64","$114,592.36"
EWR - MUC,54571726740,EWR 56C-7 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/54571726740,https://www.airlines-manager.com/aircraft/show/106721562,18:30,10:59,598,"$2,038,935.00","$1,888,864.00","$3,158.64","$114,592.36"
EWR - MXP,54551622693,EWR 84B-7 B2,777-300,https://www.airlines-manager.com/network/showline/49921908,https://www.airlines-manager.com/network/showflight/54551622693,https://www.airlines-manager.com/aircraft/show/117958701,10:00,2:29,852,"$2,682,820.00","$2,437,530.00","$2,860.95","$147,878.46"
EWR - MXP,54575909726,EWR 84B-3  B2,777-300,https://www.airlines-manager.com/network/showline/49921908,https://www.airlines-manager.com/network/showflight/54575909726,https://www.airlines-manager.com/aircraft/show/117958697,22:00,14:29,852,"$2,682,820.00","$2,437,530.00","$2,860.95","$147,878.46"
EWR - NAS,54536069998,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/54536069998,https://www.airlines-manager.com/aircraft/show/98379319,5:15,11:44,310,"$395,405.00","$362,404.00","$1,169.05","$55,897.79"
EWR - NAS,54556941197,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/54556941197,https://www.airlines-manager.com/aircraft/show/98379317,13:00,19:29,310,"$395,405.00","$362,404.00","$1,169.05","$55,897.79"
EWR - NAS,54571726696,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/54571726696,https://www.airlines-manager.com/aircraft/show/98379316,18:00,0:29,310,"$395,405.00","$362,404.00","$1,169.05","$55,897.79"
EWR - NAS,54571726697,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/54571726697,https://www.airlines-manager.com/aircraft/show/98379318,19:00,1:29,310,"$395,405.00","$362,404.00","$1,169.05","$55,897.79"
EWR - NAS,54575909635,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/54575909635,https://www.airlines-manager.com/aircraft/show/98379315,21:00,3:29,289,"$371,894.00","$339,683.00","$1,175.37","$52,393.26"
EWR - NRT,54536069408,EWR 56A-7 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/54536069408,https://www.airlines-manager.com/aircraft/show/106813013,0:00,2:14,748,"$3,980,848.00","$3,582,146.00","$4,788.97","$1,603,945.97"
EWR - NRT,54551622698,EWR 56A-3 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/54551622698,https://www.airlines-manager.com/aircraft/show/106813009,10:15,12:29,748,"$3,955,032.00","$3,565,413.00","$4,766.59","$1,596,453.58"
EWR - NRT,54567120378,EWR 56A-1 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/54567120378,https://www.airlines-manager.com/aircraft/show/106813007,16:45,18:59,748,"$3,558,007.00","$3,272,841.00","$4,375.46","$1,465,451.19"
EWR - OAK,54536069621,EWR-OAK-SJC 5,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/54536069621,https://www.airlines-manager.com/aircraft/show/104717239,1:00,12:59,310,"$735,917.00","$680,343.00","$2,194.65","$56,774.10"
EWR - OAK,54551622554,EWR-OAK-SJC 1,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/54551622554,https://www.airlines-manager.com/aircraft/show/104717243,10:00,21:59,310,"$735,917.00","$680,343.00","$2,194.65","$56,774.10"
EWR - OAK,54556941108,EWR-OAK-SJC 2,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/54556941108,https://www.airlines-manager.com/aircraft/show/104717242,12:00,23:59,310,"$735,917.00","$680,343.00","$2,194.65","$56,774.10"
EWR - OAK,54562128354,EWR-OAK-SJC 3,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/54562128354,https://www.airlines-manager.com/aircraft/show/104717241,14:00,1:59,310,"$735,917.00","$680,343.00","$2,194.65","$56,774.10"
EWR - OAK,54580945068,EWR-OAK-SJC 4,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/54580945068,https://www.airlines-manager.com/aircraft/show/104717240,22:30,10:29,310,"$735,917.00","$680,343.00","$2,194.65","$56,774.10"
EWR - OKC,54536069730,EWR-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/54536069730,https://www.airlines-manager.com/aircraft/show/86782214,1:45,8:59,112,"$217,580.00","$193,834.00","$1,730.66","$26,797.33"
EWR - OKC,54536069731,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/54536069731,https://www.airlines-manager.com/aircraft/show/107161239,3:45,10:59,310,"$460,963.00","$425,234.00","$1,371.72","$58,788.11"
EWR - OKC,54545804752,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/54545804752,https://www.airlines-manager.com/aircraft/show/107161241,8:00,15:14,310,"$460,963.00","$425,234.00","$1,371.72","$58,788.11"
EWR - OKC,54556940947,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/54556940947,https://www.airlines-manager.com/aircraft/show/107161238,11:00,18:14,310,"$460,963.00","$425,234.00","$1,371.72","$58,788.11"
EWR - OKC,54575909621,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/54575909621,https://www.airlines-manager.com/aircraft/show/107161240,21:00,4:14,310,"$460,963.00","$425,234.00","$1,371.72","$58,788.11"
EWR - OMA,54536069825,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/54536069825,https://www.airlines-manager.com/aircraft/show/104418460,2:30,8:59,310,"$401,849.00","$368,874.00","$1,189.92","$56,895.73"
EWR - OMA,54545804730,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/54545804730,https://www.airlines-manager.com/aircraft/show/104418463,7:30,13:59,310,"$401,849.00","$368,874.00","$1,189.92","$56,895.73"
EWR - OMA,54551622557,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/54551622557,https://www.airlines-manager.com/aircraft/show/104418462,10:00,16:29,310,"$401,849.00","$368,874.00","$1,189.92","$56,895.73"
EWR - OMA,54567120424,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/54567120424,https://www.airlines-manager.com/aircraft/show/104418461,17:00,23:29,310,"$401,849.00","$368,874.00","$1,189.92","$56,895.73"
EWR - OMA,54571726802,EWR-BOI-PBI 5 B,A319-100,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/54571726802,https://www.airlines-manager.com/aircraft/show/110582846,19:00,1:29,194,"$300,961.00","$274,675.00","$1,415.85","$42,366.32"
EWR - ONT,54536069459,EWR-SMF-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/54536069459,https://www.airlines-manager.com/aircraft/show/94889153,0:00,11:29,320,"$702,981.00","$644,277.00","$2,013.37","$56,105.40"
EWR - ONT,54536069460,EWR-SMF-ONT 5,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/54536069460,https://www.airlines-manager.com/aircraft/show/94889154,2:00,13:29,320,"$702,981.00","$644,277.00","$2,013.37","$56,105.40"
EWR - ONT,54556941050,EWR-SMF-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/54556941050,https://www.airlines-manager.com/aircraft/show/94889150,11:45,23:14,320,"$702,981.00","$644,277.00","$2,013.37","$56,105.40"
EWR - ONT,54562128253,EWR-SMF-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/54562128253,https://www.airlines-manager.com/aircraft/show/94889151,13:15,0:44,320,"$702,981.00","$644,277.00","$2,013.37","$56,105.40"
EWR - ONT,54562128254,EWR-SMF-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/54562128254,https://www.airlines-manager.com/aircraft/show/94889152,14:45,2:14,298,"$673,090.00","$615,809.00","$2,066.47","$53,626.33"
EWR - ORD,54536069994,EWR-MIA-ORD 2,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/54536069994,https://www.airlines-manager.com/aircraft/show/113251306,5:00,9:59,338,"$340,455.00","$293,420.00",$868.11,"$58,880.27"
EWR - ORD,54551622707,EWR-MIA-ORD 1,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/54551622707,https://www.airlines-manager.com/aircraft/show/113251305,10:15,15:14,338,"$340,455.00","$293,420.00",$868.11,"$58,880.27"
EWR - ORD,54556941041,EWR-MIA-ORD 3,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/54556941041,https://www.airlines-manager.com/aircraft/show/113251307,11:30,16:29,338,"$340,455.00","$293,420.00",$868.11,"$58,880.27"
EWR - ORD,54567120434,EWR-MIA-ORD 4,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/54567120434,https://www.airlines-manager.com/aircraft/show/113251308,17:15,22:14,338,"$340,455.00","$293,420.00",$868.11,"$58,880.27"
EWR - ORD,54575909669,EWR-MIA-ORD 5,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/54575909669,https://www.airlines-manager.com/aircraft/show/113251309,21:30,2:29,338,"$340,455.00","$293,420.00",$868.11,"$58,880.27"
EWR - ORF,54536069801,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/54536069801,https://www.airlines-manager.com/aircraft/show/88494375,2:15,5:29,320,"$153,174.00","$129,624.00",$405.08,"$40,089.90"
EWR - ORF,54556941020,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/54556941020,https://www.airlines-manager.com/aircraft/show/106104450,11:00,14:14,112,"$70,275.00","$57,673.00",$514.94,"$17,837.01"
EWR - ORF,54562128370,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/54562128370,https://www.airlines-manager.com/aircraft/show/105731236,14:15,17:29,320,"$153,174.00","$129,624.00",$405.08,"$40,089.90"
EWR - ORF,54571726678,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/54571726678,https://www.airlines-manager.com/aircraft/show/88494376,18:00,21:14,320,"$153,174.00","$129,624.00",$405.08,"$40,089.90"
EWR - ORF,54575909701,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/54575909701,https://www.airlines-manager.com/aircraft/show/88494377,21:45,0:59,320,"$153,174.00","$129,624.00",$405.08,"$40,089.90"
EWR - OSL,54536069893,EWR 56D-2 E,787-10,https://www.airlines-manager.com/network/showline/50072202,https://www.airlines-manager.com/network/showflight/54536069893,https://www.airlines-manager.com/aircraft/show/118644437,3:15,18:29,648,"$1,884,538.00","$1,756,389.00","$2,710.48","$115,299.06"
EWR - OSL,54536069894,EWR 56D-4 E,787-10,https://www.airlines-manager.com/network/showline/50072202,https://www.airlines-manager.com/network/showflight/54536069894,https://www.airlines-manager.com/aircraft/show/118644439,4:45,19:59,648,"$1,884,538.00","$1,756,389.00","$2,710.48","$115,299.06"
EWR - OSL,54575909496,EWR 56D-4 E,787-10,https://www.airlines-manager.com/network/showline/50072202,https://www.airlines-manager.com/network/showflight/54575909496,https://www.airlines-manager.com/aircraft/show/118644439,20:00,11:14,648,"$1,884,538.00","$1,756,389.00","$2,710.48","$115,299.06"
EWR - PBI,54536069709,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/54536069709,https://www.airlines-manager.com/aircraft/show/104418463,1:30,7:29,310,"$379,359.00","$346,918.00","$1,119.09","$57,980.72"
EWR - PBI,54536069710,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/54536069710,https://www.airlines-manager.com/aircraft/show/104418462,3:00,8:59,310,"$379,359.00","$346,918.00","$1,119.09","$57,980.72"
EWR - PBI,54556940973,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/54556940973,https://www.airlines-manager.com/aircraft/show/104418461,11:00,16:59,310,"$379,359.00","$346,918.00","$1,119.09","$57,980.72"
EWR - PBI,54556940974,EWR-BOI-PBI 5 B,A319-100,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/54556940974,https://www.airlines-manager.com/aircraft/show/110582846,13:00,18:59,198,"$287,177.00","$261,181.00","$1,319.10","$43,651.42"
EWR - PBI,54575909587,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/54575909587,https://www.airlines-manager.com/aircraft/show/104418460,20:30,2:29,310,"$379,359.00","$346,918.00","$1,119.09","$57,980.72"
EWR - PDX,54536069463,EWR-PHX-PDX 3,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/54536069463,https://www.airlines-manager.com/aircraft/show/113595213,0:00,11:29,338,"$757,836.00","$705,129.00","$2,086.18","$61,404.56"
EWR - PDX,54536069464,EWR-PHX-PDX 4,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/54536069464,https://www.airlines-manager.com/aircraft/show/113595214,2:00,13:29,338,"$757,836.00","$705,129.00","$2,086.18","$61,404.56"
EWR - PDX,54536069465,EWR-PHX-PDX 5,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/54536069465,https://www.airlines-manager.com/aircraft/show/113595215,5:00,16:29,338,"$757,836.00","$705,129.00","$2,086.18","$61,404.56"
EWR - PDX,54545804676,EWR-PHX-PDX 6 B,A319-100,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/54545804676,https://www.airlines-manager.com/aircraft/show/99219630,6:30,17:59,198,"$526,507.00","$481,810.00","$2,433.38","$41,957.33"
EWR - PDX,54551622699,EWR-PHX-PDX 1,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/54551622699,https://www.airlines-manager.com/aircraft/show/113595211,10:15,21:44,338,"$757,836.00","$705,129.00","$2,086.18","$61,404.56"
EWR - PDX,54556941117,EWR-PHX-PDX 2,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/54556941117,https://www.airlines-manager.com/aircraft/show/113595212,12:15,23:44,304,"$711,269.00","$660,445.00","$2,172.52","$57,513.35"
EWR - PHX,54536069453,EWR-PHX-PDX 1,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/54536069453,https://www.airlines-manager.com/aircraft/show/113595211,0:00,10:14,338,"$704,047.00","$646,677.00","$1,913.25","$63,193.19"
EWR - PHX,54536069454,EWR-PHX-PDX 2,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/54536069454,https://www.airlines-manager.com/aircraft/show/113595212,2:00,12:14,338,"$704,047.00","$646,677.00","$1,913.25","$63,193.19"
EWR - PHX,54556941040,EWR-PHX-PDX 3,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/54556941040,https://www.airlines-manager.com/aircraft/show/113595213,11:30,21:44,338,"$704,047.00","$646,677.00","$1,913.25","$63,193.19"
EWR - PHX,54562128264,EWR-PHX-PDX 4,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/54562128264,https://www.airlines-manager.com/aircraft/show/113595214,13:30,23:44,338,"$704,047.00","$646,677.00","$1,913.25","$63,193.19"
EWR - PHX,54567120366,EWR-PHX-PDX 5,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/54567120366,https://www.airlines-manager.com/aircraft/show/113595215,16:30,2:44,338,"$704,047.00","$646,677.00","$1,913.25","$63,193.19"
EWR - PHX,54571726664,EWR-PHX-PDX 6 B,A319-100,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/54571726664,https://www.airlines-manager.com/aircraft/show/99219630,18:00,4:29,198,"$489,624.00","$441,509.00","$2,229.84","$42,115.33"
EWR - PIT,54536069963,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/54536069963,https://www.airlines-manager.com/aircraft/show/98887257,4:15,7:29,112,"$77,415.00","$63,055.00",$562.99,"$19,501.55"
EWR - PIT,54545804670,EWR-STL-PIT 3,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/54545804670,https://www.airlines-manager.com/aircraft/show/115400546,6:30,9:44,338,"$182,214.00","$159,602.00",$472.20,"$49,361.44"
EWR - PIT,54551622543,EWR-STL-PIT 2,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/54551622543,https://www.airlines-manager.com/aircraft/show/115400547,10:00,13:14,338,"$182,214.00","$159,602.00",$472.20,"$49,361.44"
EWR - PIT,54556941172,EWR-STL-PIT 4,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/54556941172,https://www.airlines-manager.com/aircraft/show/115400545,13:00,16:14,338,"$182,214.00","$159,602.00",$472.20,"$49,361.44"
EWR - PIT,54567120248,EWR-STL-PIT 1,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/54567120248,https://www.airlines-manager.com/aircraft/show/115400548,15:30,18:44,338,"$182,214.00","$159,602.00",$472.20,"$49,361.44"
EWR - PIT,54571726832,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/54571726832,https://www.airlines-manager.com/aircraft/show/98887257,19:30,22:44,112,"$77,415.00","$63,055.00",$562.99,"$19,501.55"
EWR - PRG,54551622705,EWR 84B-2  B2,777-300,https://www.airlines-manager.com/network/showline/44327652,https://www.airlines-manager.com/network/showflight/54551622705,https://www.airlines-manager.com/aircraft/show/117958696,10:15,2:59,852,"$2,735,955.00","$2,492,473.00","$2,925.44","$148,952.57"
EWR - PRG,54580945036,EWR 84B-5  B2,777-300,https://www.airlines-manager.com/network/showline/44327652,https://www.airlines-manager.com/network/showflight/54580945036,https://www.airlines-manager.com/aircraft/show/117958699,22:15,14:59,852,"$2,735,955.00","$2,492,473.00","$2,925.44","$148,952.57"
EWR - PSP,54536069560,EWR-PSP-FAT 4,A321neo,https://www.airlines-manager.com/network/showline/50283402,https://www.airlines-manager.com/network/showflight/54536069560,https://www.airlines-manager.com/aircraft/show/116672810,0:30,11:44,338,"$756,851.00","$709,387.00","$2,098.78","$63,150.18"
EWR - PSP,54556940915,EWR-PSP-FAT 1,A321neo,https://www.airlines-manager.com/network/showline/50283402,https://www.airlines-manager.com/network/showflight/54556940915,https://www.airlines-manager.com/aircraft/show/119220450,11:00,22:14,338,"$756,851.00","$709,387.00","$2,098.78","$63,150.18"
EWR - PSP,54556940916,EWR-PSP-FAT 2,A321neo,https://www.airlines-manager.com/network/showline/50283402,https://www.airlines-manager.com/network/showflight/54556940916,https://www.airlines-manager.com/aircraft/show/119220451,13:00,0:14,338,"$756,851.00","$709,387.00","$2,098.78","$63,150.18"
EWR - PSP,54580945067,EWR-PSP-FAT 3,A321neo,https://www.airlines-manager.com/network/showline/50283402,https://www.airlines-manager.com/network/showflight/54580945067,https://www.airlines-manager.com/aircraft/show/119220452,22:30,9:44,338,"$756,851.00","$709,387.00","$2,098.78","$63,150.18"
EWR - PVD,54536069718,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/54536069718,https://www.airlines-manager.com/aircraft/show/110044466,1:30,4:14,310,"$98,927.00","$81,292.00",$262.23,"$29,740.98"
EWR - PVD,54551622493,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/54551622493,https://www.airlines-manager.com/aircraft/show/110044465,9:15,11:59,310,"$98,927.00","$81,292.00",$262.23,"$29,740.98"
EWR - PVD,54556940949,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/54556940949,https://www.airlines-manager.com/aircraft/show/110044464,11:00,13:44,310,"$98,927.00","$81,292.00",$262.23,"$29,740.98"
EWR - PVD,54571726849,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/54571726849,https://www.airlines-manager.com/aircraft/show/110044463,19:45,22:29,310,"$98,927.00","$81,292.00",$262.23,"$29,740.98"
EWR - PVD,54580945207,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/54580945207,https://www.airlines-manager.com/aircraft/show/110113039,23:15,1:59,112,"$42,468.00","$31,610.00",$282.23,"$11,564.63"
EWR - PWM,54536069973,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/54536069973,https://www.airlines-manager.com/aircraft/show/110044463,4:30,7:44,310,"$154,039.00","$134,989.00",$435.45,"$41,749.18"
EWR - PWM,54551622458,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/54551622458,https://www.airlines-manager.com/aircraft/show/110113039,8:45,11:59,112,"$70,011.00","$58,085.00",$518.62,"$17,964.43"
EWR - PWM,54556940950,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/54556940950,https://www.airlines-manager.com/aircraft/show/110044466,11:00,14:14,310,"$154,039.00","$134,989.00",$435.45,"$41,749.18"
EWR - PWM,54571726665,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/54571726665,https://www.airlines-manager.com/aircraft/show/110044465,18:00,21:14,310,"$154,039.00","$134,989.00",$435.45,"$41,749.18"
EWR - PWM,54571726666,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/54571726666,https://www.airlines-manager.com/aircraft/show/110044464,19:45,22:59,299,"$150,846.00","$131,881.00",$441.07,"$40,787.94"
EWR - RAP,54536069421,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/54536069421,https://www.airlines-manager.com/aircraft/show/116042860,0:00,7:59,310,"$495,290.00","$458,274.00","$1,478.30","$57,403.84"
EWR - RAP,54536069422,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/54536069422,https://www.airlines-manager.com/aircraft/show/116042861,1:15,9:14,310,"$495,290.00","$458,274.00","$1,478.30","$57,403.84"
EWR - RAP,54556941187,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/54556941187,https://www.airlines-manager.com/aircraft/show/116042862,13:00,20:59,310,"$495,290.00","$458,274.00","$1,478.30","$57,403.84"
EWR - RAP,54571726732,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/54571726732,https://www.airlines-manager.com/aircraft/show/116042859,18:30,2:29,310,"$495,290.00","$458,274.00","$1,478.30","$57,403.84"
EWR - RDU,54536069654,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/54536069654,https://www.airlines-manager.com/aircraft/show/105731236,1:15,4:59,320,"$200,581.00","$172,613.00",$539.42,"$46,235.63"
EWR - RDU,54536069655,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/54536069655,https://www.airlines-manager.com/aircraft/show/88494376,5:00,8:44,320,"$200,581.00","$172,613.00",$539.42,"$46,235.63"
EWR - RDU,54556940991,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/54556940991,https://www.airlines-manager.com/aircraft/show/88494377,11:00,14:44,320,"$200,581.00","$172,613.00",$539.42,"$46,235.63"
EWR - RDU,54567120239,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/54567120239,https://www.airlines-manager.com/aircraft/show/88494375,15:30,19:14,320,"$200,581.00","$172,613.00",$539.42,"$46,235.63"
EWR - RDU,54575909712,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/54575909712,https://www.airlines-manager.com/aircraft/show/106104450,22:00,1:44,112,"$93,025.00","$77,828.00",$694.89,"$20,846.79"
EWR - RIC,54536069597,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/54536069597,https://www.airlines-manager.com/aircraft/show/88494377,1:00,4:14,320,"$139,037.00","$115,616.00",$361.30,"$35,757.53"
EWR - RIC,54545804608,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/54545804608,https://www.airlines-manager.com/aircraft/show/88494375,5:30,8:44,320,"$139,037.00","$115,616.00",$361.30,"$35,757.53"
EWR - RIC,54562128368,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/54562128368,https://www.airlines-manager.com/aircraft/show/106104450,14:15,17:29,112,"$62,634.00","$50,117.00",$447.47,"$15,500.10"
EWR - RIC,54567120452,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/54567120452,https://www.airlines-manager.com/aircraft/show/105731236,17:30,20:44,320,"$139,037.00","$115,616.00",$361.30,"$35,757.53"
EWR - RIC,54575909649,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/54575909649,https://www.airlines-manager.com/aircraft/show/88494376,21:15,0:29,320,"$139,037.00","$115,616.00",$361.30,"$35,757.53"
EWR - RNO,54536069779,EWR-RNO-MEM 5 B,A319-100,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/54536069779,https://www.airlines-manager.com/aircraft/show/100096560,2:00,13:29,198,"$529,840.00","$488,053.00","$2,464.91","$42,500.99"
EWR - RNO,54551622702,EWR-RNO-MEM 1,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/54551622702,https://www.airlines-manager.com/aircraft/show/99920622,10:15,21:29,320,"$702,795.00","$645,835.00","$2,018.23","$57,492.73"
EWR - RNO,54562128301,EWR-RNO-MEM 4,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/54562128301,https://www.airlines-manager.com/aircraft/show/99920619,14:00,1:14,320,"$702,795.00","$645,835.00","$2,018.23","$57,492.73"
EWR - RNO,54567120355,EWR-RNO-MEM 3,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/54567120355,https://www.airlines-manager.com/aircraft/show/99920620,16:30,3:44,320,"$702,795.00","$645,835.00","$2,018.23","$57,492.73"
EWR - RNO,54580945022,EWR-RNO-MEM 2,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/54580945022,https://www.airlines-manager.com/aircraft/show/99920621,22:15,9:29,320,"$702,795.00","$645,835.00","$2,018.23","$57,492.73"
EWR - ROC,54551622538,EWR-TYS-GSO 4,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/54551622538,https://www.airlines-manager.com/aircraft/show/119220545,10:00,12:59,310,"$134,976.00","$115,966.00",$374.08,"$38,871.28"
EWR - ROC,54562128380,EWR-TYS-GSO 3,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/54562128380,https://www.airlines-manager.com/aircraft/show/119220544,14:30,17:29,310,"$134,976.00","$115,966.00",$374.08,"$38,871.28"
EWR - ROC,54571726711,EWR-TYS-GSO 2,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/54571726711,https://www.airlines-manager.com/aircraft/show/119220543,18:15,21:14,310,"$134,976.00","$115,966.00",$374.08,"$38,871.28"
EWR - ROC,54580945145,EWR-TYS-GSO 1,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/54580945145,https://www.airlines-manager.com/aircraft/show/119220542,22:45,1:44,310,"$134,976.00","$115,966.00",$374.08,"$38,871.28"
EWR - RSW,54536069901,EWR-RNO-MEM 1,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/54536069901,https://www.airlines-manager.com/aircraft/show/99920622,3:15,9:29,320,"$388,911.00","$350,141.00","$1,094.19","$56,172.35"
EWR - RSW,54545804701,EWR-RNO-MEM 4,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/54545804701,https://www.airlines-manager.com/aircraft/show/99920619,7:00,13:14,320,"$388,911.00","$350,141.00","$1,094.19","$56,172.35"
EWR - RSW,54551622708,EWR-RNO-MEM 3,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/54551622708,https://www.airlines-manager.com/aircraft/show/99920620,10:15,16:29,320,"$388,911.00","$350,141.00","$1,094.19","$56,172.35"
EWR - RSW,54562128324,EWR-RNO-MEM 5 B,A319-100,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/54562128324,https://www.airlines-manager.com/aircraft/show/100096560,14:00,20:14,198,"$294,881.00","$267,322.00","$1,350.11","$42,885.88"
EWR - RSW,54567120329,EWR-RNO-MEM 2,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/54567120329,https://www.airlines-manager.com/aircraft/show/99920621,16:00,22:14,320,"$388,911.00","$350,141.00","$1,094.19","$56,172.35"
EWR - SAN,54536069458,EWR-MIA-ORD 3,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/54536069458,https://www.airlines-manager.com/aircraft/show/113251307,0:00,11:29,338,"$775,493.00","$723,197.00","$2,139.64","$62,977.97"
EWR - SAN,54551622516,EWR-MIA-ORD 5,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/54551622516,https://www.airlines-manager.com/aircraft/show/113251309,10:00,21:29,338,"$775,493.00","$723,197.00","$2,139.64","$62,977.97"
EWR - SAN,54562128457,EWR-MIA-ORD 1,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/54562128457,https://www.airlines-manager.com/aircraft/show/113251305,15:15,2:44,338,"$775,493.00","$723,197.00","$2,139.64","$62,977.97"
EWR - SAN,54567120350,EWR-MIA-ORD 2,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/54567120350,https://www.airlines-manager.com/aircraft/show/113251306,16:15,3:44,338,"$775,493.00","$723,197.00","$2,139.64","$62,977.97"
EWR - SAN,54580945028,EWR-MIA-ORD 4,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/54580945028,https://www.airlines-manager.com/aircraft/show/113251308,22:15,9:44,338,"$775,493.00","$723,197.00","$2,139.64","$62,977.97"
EWR - SAT,54536069751,EWR-ELP-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/54536069751,https://www.airlines-manager.com/aircraft/show/103365576,1:45,9:59,320,"$517,703.00","$473,909.00","$1,480.97","$57,559.80"
EWR - SAT,54551622675,EWR-ELP-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/54551622675,https://www.airlines-manager.com/aircraft/show/103365577,10:00,18:14,320,"$517,703.00","$473,909.00","$1,480.97","$57,559.80"
EWR - SAT,54556941115,EWR-ELP-SAT 5 B,A319-100,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/54556941115,https://www.airlines-manager.com/aircraft/show/110582847,12:00,20:14,198,"$390,698.00","$358,994.00","$1,813.10","$43,602.51"
EWR - SAT,54571726845,EWR-ELP-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/54571726845,https://www.airlines-manager.com/aircraft/show/103365578,19:30,3:44,320,"$517,703.00","$473,909.00","$1,480.97","$57,559.80"
EWR - SAT,54575909674,EWR-ELP-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/54575909674,https://www.airlines-manager.com/aircraft/show/103365575,21:30,5:44,320,"$517,703.00","$473,909.00","$1,480.97","$57,559.80"
EWR - SAV,54536069974,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/54536069974,https://www.airlines-manager.com/aircraft/show/108466265,4:30,9:29,112,"$146,318.00","$129,401.00","$1,155.37","$25,966.76"
EWR - SAV,54551622477,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/54551622477,https://www.airlines-manager.com/aircraft/show/108834810,9:00,13:59,310,"$307,563.00","$281,428.00",$907.83,"$56,473.85"
EWR - SAV,54556940954,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/54556940954,https://www.airlines-manager.com/aircraft/show/108834809,11:00,15:59,310,"$307,563.00","$281,428.00",$907.83,"$56,473.85"
EWR - SAV,54571726692,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/54571726692,https://www.airlines-manager.com/aircraft/show/108834808,18:00,22:59,310,"$307,563.00","$281,428.00",$907.83,"$56,473.85"
EWR - SAV,54575909534,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/54575909534,https://www.airlines-manager.com/aircraft/show/108834811,20:00,0:59,258,"$277,418.00","$252,292.00",$977.88,"$50,627.16"
EWR - SDF,54536069941,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/54536069941,https://www.airlines-manager.com/aircraft/show/86270787,4:00,8:29,310,"$295,460.00","$268,367.00",$865.70,"$59,858.81"
EWR - SDF,54545804777,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/54545804777,https://www.airlines-manager.com/aircraft/show/90452834,8:15,12:44,310,"$295,460.00","$268,367.00",$865.70,"$59,858.81"
EWR - SDF,54562128449,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/54562128449,https://www.airlines-manager.com/aircraft/show/86270784,15:00,19:29,310,"$295,460.00","$268,367.00",$865.70,"$59,858.81"
EWR - SDF,54571726720,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/54571726720,https://www.airlines-manager.com/aircraft/show/86270786,18:15,22:44,310,"$295,460.00","$268,367.00",$865.70,"$59,858.81"
EWR - SEA,54536069603,EWR-DFW-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/54536069603,https://www.airlines-manager.com/aircraft/show/86238752,1:00,12:14,320,"$709,859.00","$640,790.00","$2,002.47","$57,043.62"
EWR - SEA,54536069604,EWR-DFW-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/54536069604,https://www.airlines-manager.com/aircraft/show/90489726,3:00,14:14,320,"$709,859.00","$640,790.00","$2,002.47","$57,043.62"
EWR - SEA,54556940941,EWR-DFW-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/54556940941,https://www.airlines-manager.com/aircraft/show/86238753,11:00,22:14,320,"$709,859.00","$640,790.00","$2,002.47","$57,043.62"
EWR - SEA,54562128406,EWR-DFW-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/54562128406,https://www.airlines-manager.com/aircraft/show/90489724,15:00,2:14,320,"$709,859.00","$640,790.00","$2,002.47","$57,043.62"
EWR - SEA,54580945174,EWR-DFW-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/54580945174,https://www.airlines-manager.com/aircraft/show/90489725,22:45,9:59,320,"$709,859.00","$640,790.00","$2,002.47","$57,043.62"
EWR - SEA,54580945176,EWR-DFW-ATL 6 B,A319-100,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/54580945176,https://www.airlines-manager.com/aircraft/show/105222360,23:30,10:59,198,"$534,958.00","$485,080.00","$2,449.90","$42,242.09"
EWR - SFO,54536069423,EWR-SFO-LAX 1,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/54536069423,https://www.airlines-manager.com/aircraft/show/83716137,0:00,11:44,400,"$944,723.00","$860,114.00","$2,150.29","$73,305.17"
EWR - SFO,54536069424,EWR-SFO-LAX 2,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/54536069424,https://www.airlines-manager.com/aircraft/show/89233028,1:30,13:14,400,"$944,723.00","$860,114.00","$2,150.29","$73,305.17"
EWR - SFO,54536069425,EWR-SFO-LAX 3,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/54536069425,https://www.airlines-manager.com/aircraft/show/89233029,3:00,14:44,400,"$944,723.00","$860,114.00","$2,150.29","$73,305.17"
EWR - SFO,54556941120,EWR-SFO-LAX 4,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/54556941120,https://www.airlines-manager.com/aircraft/show/89233030,12:15,23:59,400,"$944,723.00","$860,114.00","$2,150.29","$73,305.17"
EWR - SFO,54562128374,EWR-SFO-LAX 5,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/54562128374,https://www.airlines-manager.com/aircraft/show/89233027,14:15,1:59,400,"$944,723.00","$860,114.00","$2,150.29","$73,305.17"
EWR - SJC,54536069432,EWR-OAK-SJC 2,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/54536069432,https://www.airlines-manager.com/aircraft/show/104717242,0:00,11:59,310,"$732,935.00","$676,985.00","$2,183.82","$56,493.88"
EWR - SJC,54536069433,EWR-OAK-SJC 3,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/54536069433,https://www.airlines-manager.com/aircraft/show/104717241,2:00,13:59,310,"$732,935.00","$676,985.00","$2,183.82","$56,493.88"
EWR - SJC,54551622711,EWR-OAK-SJC 4,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/54551622711,https://www.airlines-manager.com/aircraft/show/104717240,10:30,22:29,310,"$732,935.00","$676,985.00","$2,183.82","$56,493.88"
EWR - SJC,54556941169,EWR-OAK-SJC 5,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/54556941169,https://www.airlines-manager.com/aircraft/show/104717239,13:00,0:59,310,"$732,935.00","$676,985.00","$2,183.82","$56,493.88"
EWR - SJC,54575909716,EWR-OAK-SJC 1,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/54575909716,https://www.airlines-manager.com/aircraft/show/104717243,22:00,9:59,310,"$732,935.00","$676,985.00","$2,183.82","$56,493.88"
EWR - SJU,54536069548,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/54536069548,https://www.airlines-manager.com/aircraft/show/106581304,0:30,8:44,320,"$526,498.00","$480,601.00","$1,501.88","$58,372.59"
EWR - SJU,54536069549,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/54536069549,https://www.airlines-manager.com/aircraft/show/106581307,2:00,10:14,320,"$526,498.00","$480,601.00","$1,501.88","$58,372.59"
EWR - SJU,54545804702,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/54545804702,https://www.airlines-manager.com/aircraft/show/86238754,7:00,15:14,320,"$526,498.00","$480,601.00","$1,501.88","$58,372.59"
EWR - SJU,54556941150,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/54556941150,https://www.airlines-manager.com/aircraft/show/106581306,13:00,21:14,320,"$526,498.00","$480,601.00","$1,501.88","$58,372.59"
EWR - SJU,54562128385,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/54562128385,https://www.airlines-manager.com/aircraft/show/106581305,14:30,22:44,320,"$526,498.00","$480,601.00","$1,501.88","$58,372.59"
EWR - SLC,54536069483,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/54536069483,https://www.airlines-manager.com/aircraft/show/90452833,0:15,9:59,310,"$611,536.00","$559,607.00","$1,805.18","$57,493.87"
EWR - SLC,54536069484,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/54536069484,https://www.airlines-manager.com/aircraft/show/87153196,0:15,9:59,310,"$611,536.00","$559,607.00","$1,805.18","$57,493.87"
EWR - SLC,54536069485,EWR-DEN-SLC 6 B,A319-100,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/54536069485,https://www.airlines-manager.com/aircraft/show/105223076,1:15,10:59,198,"$459,927.00","$418,300.00","$2,112.63","$42,976.03"
EWR - SLC,54551622515,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/54551622515,https://www.airlines-manager.com/aircraft/show/86270785,10:00,19:44,310,"$611,536.00","$559,607.00","$1,805.18","$57,493.87"
EWR - SLC,54556940902,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/54556940902,https://www.airlines-manager.com/aircraft/show/90452835,11:00,20:44,310,"$611,536.00","$559,607.00","$1,805.18","$57,493.87"
EWR - SLC,54571726810,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/54571726810,https://www.airlines-manager.com/aircraft/show/86270783,19:15,4:59,310,"$611,536.00","$559,607.00","$1,805.18","$57,493.87"
EWR - SMF,54536069455,EWR-SMF-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/54536069455,https://www.airlines-manager.com/aircraft/show/94889150,0:00,11:44,320,"$717,342.00","$658,895.00","$2,059.05","$56,155.82"
EWR - SMF,54536069456,EWR-SMF-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/54536069456,https://www.airlines-manager.com/aircraft/show/94889151,1:30,13:14,320,"$717,342.00","$658,895.00","$2,059.05","$56,155.82"
EWR - SMF,54536069457,EWR-SMF-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/54536069457,https://www.airlines-manager.com/aircraft/show/94889152,3:00,14:44,320,"$717,342.00","$658,895.00","$2,059.05","$56,155.82"
EWR - SMF,54556941042,EWR-SMF-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/54556941042,https://www.airlines-manager.com/aircraft/show/94889153,11:30,23:14,320,"$717,342.00","$658,895.00","$2,059.05","$56,155.82"
EWR - SMF,54562128259,EWR-SMF-ONT 5,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/54562128259,https://www.airlines-manager.com/aircraft/show/94889154,13:30,1:14,320,"$717,342.00","$658,895.00","$2,059.05","$56,155.82"
EWR - SNN,54556940894,EWR 56B-6 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/54556940894,https://www.airlines-manager.com/aircraft/show/94521248,10:45,23:59,748,"$2,079,388.00","$1,896,127.00","$2,534.93","$143,284.16"
EWR - SNN,54571726771,EWR 56B-5 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/54571726771,https://www.airlines-manager.com/aircraft/show/94521253,18:45,7:59,748,"$1,993,195.00","$1,836,021.00","$2,454.57","$138,742.14"
EWR - STL,54536069633,EWR-STL-PIT 3,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/54536069633,https://www.airlines-manager.com/aircraft/show/115400546,1:00,6:29,338,"$373,017.00","$342,022.00","$1,011.90","$62,374.83"
EWR - STL,54536069634,EWR-STL-PIT 2,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/54536069634,https://www.airlines-manager.com/aircraft/show/115400547,4:15,9:44,338,"$373,017.00","$342,022.00","$1,011.90","$62,374.83"
EWR - STL,54551622522,EWR-STL-PIT 1,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/54551622522,https://www.airlines-manager.com/aircraft/show/115400548,10:00,15:29,338,"$373,017.00","$342,022.00","$1,011.90","$62,374.83"
EWR - STL,54562128316,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/54562128316,https://www.airlines-manager.com/aircraft/show/98887257,14:00,19:29,112,"$163,314.00","$142,547.00","$1,272.74","$25,996.41"
EWR - STL,54567120345,EWR-STL-PIT 4,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/54567120345,https://www.airlines-manager.com/aircraft/show/115400545,16:15,21:44,338,"$373,017.00","$342,022.00","$1,011.90","$62,374.83"
EWR - STL,54580945070,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/54580945070,https://www.airlines-manager.com/aircraft/show/98887257,22:45,4:14,112,"$163,314.00","$142,547.00","$1,272.74","$25,996.41"
EWR - SYR,54536069721,EWR-TYS-GSO 1,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/54536069721,https://www.airlines-manager.com/aircraft/show/119220542,1:45,4:44,310,"$124,806.00","$106,202.00",$342.59,"$35,598.44"
EWR - SYR,54556941137,EWR-TYS-GSO 4,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/54556941137,https://www.airlines-manager.com/aircraft/show/119220545,13:00,15:59,310,"$124,806.00","$106,202.00",$342.59,"$35,598.44"
EWR - SYR,54567120442,EWR-TYS-GSO 3,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/54567120442,https://www.airlines-manager.com/aircraft/show/119220544,17:30,20:29,310,"$124,806.00","$106,202.00",$342.59,"$35,598.44"
EWR - SYR,54575909661,EWR-TYS-GSO 2,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/54575909661,https://www.airlines-manager.com/aircraft/show/119220543,21:15,0:14,310,"$124,806.00","$106,202.00",$342.59,"$35,598.44"
EWR - TLV,54536069877,EWR-TLV 2 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/54536069877,https://www.airlines-manager.com/aircraft/show/89124073,3:00,1:29,884,"$3,653,033.00","$3,333,684.00","$3,771.14","$148,273.57"
EWR - TLV,54575909620,EWR-TLV 1 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/54575909620,https://www.airlines-manager.com/aircraft/show/93429385,21:00,19:29,884,"$3,653,033.00","$3,333,684.00","$3,771.14","$148,273.57"
EWR - TPA,54545804619,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/54545804619,https://www.airlines-manager.com/aircraft/show/98379317,5:45,11:44,310,"$376,361.00","$341,180.00","$1,100.58","$57,021.73"
EWR - TPA,54556940891,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/54556940891,https://www.airlines-manager.com/aircraft/show/98379316,10:45,16:44,310,"$376,361.00","$341,180.00","$1,100.58","$57,021.73"
EWR - TPA,54556940892,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/54556940892,https://www.airlines-manager.com/aircraft/show/98379318,13:00,18:59,310,"$376,361.00","$341,180.00","$1,100.58","$57,021.73"
EWR - TPA,54562128424,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/54562128424,https://www.airlines-manager.com/aircraft/show/98379315,15:00,20:59,310,"$376,361.00","$341,180.00","$1,100.58","$57,021.73"
EWR - TPA,54580945221,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/54580945221,https://www.airlines-manager.com/aircraft/show/98379319,23:15,5:14,310,"$376,361.00","$341,180.00","$1,100.58","$57,021.73"
EWR - TUL,54536069747,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/54536069747,https://www.airlines-manager.com/aircraft/show/110044465,1:45,8:29,310,"$426,549.00","$392,448.00","$1,265.96","$58,284.36"
EWR - TUL,54536069748,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/54536069748,https://www.airlines-manager.com/aircraft/show/110044464,3:30,10:14,310,"$426,549.00","$392,448.00","$1,265.96","$58,284.36"
EWR - TUL,54556941147,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/54556941147,https://www.airlines-manager.com/aircraft/show/110044463,13:00,19:44,310,"$426,549.00","$392,448.00","$1,265.96","$58,284.36"
EWR - TUL,54567120358,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/54567120358,https://www.airlines-manager.com/aircraft/show/110113039,16:30,23:14,112,"$200,788.00","$178,211.00","$1,591.17","$26,466.98"
EWR - TUL,54571726755,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/54571726755,https://www.airlines-manager.com/aircraft/show/110044466,18:45,1:29,310,"$426,549.00","$392,448.00","$1,265.96","$58,284.36"
EWR - TUS,54536069557,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/54536069557,https://www.airlines-manager.com/aircraft/show/98379316,0:30,10:44,310,"$638,846.00","$590,752.00","$1,905.65","$57,728.21"
EWR - TUS,54536069558,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/54536069558,https://www.airlines-manager.com/aircraft/show/98379318,1:30,11:44,310,"$638,846.00","$590,752.00","$1,905.65","$57,728.21"
EWR - TUS,54536069559,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/54536069559,https://www.airlines-manager.com/aircraft/show/98379315,3:30,13:44,310,"$638,846.00","$590,752.00","$1,905.65","$57,728.21"
EWR - TUS,54556941198,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/54556941198,https://www.airlines-manager.com/aircraft/show/98379319,13:00,23:14,310,"$638,846.00","$590,752.00","$1,905.65","$57,728.21"
EWR - TUS,54571726841,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/54571726841,https://www.airlines-manager.com/aircraft/show/98379317,19:30,5:44,310,"$638,846.00","$590,752.00","$1,905.65","$57,728.21"
EWR - TYS,54536069882,EWR-TYS-GSO 2,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/54536069882,https://www.airlines-manager.com/aircraft/show/119220543,3:00,7:29,310,"$290,787.00","$265,936.00",$857.86,"$59,316.58"
EWR - TYS,54551622694,EWR-TYS-GSO 1,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/54551622694,https://www.airlines-manager.com/aircraft/show/119220542,10:00,14:29,310,"$290,787.00","$265,936.00",$857.86,"$59,316.58"
EWR - TYS,54571726767,EWR-TYS-GSO 4,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/54571726767,https://www.airlines-manager.com/aircraft/show/119220545,18:45,23:14,310,"$290,787.00","$265,936.00",$857.86,"$59,316.58"
EWR - TYS,54580945213,EWR-TYS-GSO 3,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/54580945213,https://www.airlines-manager.com/aircraft/show/119220544,23:15,3:44,310,"$290,787.00","$265,936.00",$857.86,"$59,316.58"
EWR - VCE,54536069866,EWR 84B-3  B2,777-300,https://www.airlines-manager.com/network/showline/49921914,https://www.airlines-manager.com/network/showflight/54536069866,https://www.airlines-manager.com/aircraft/show/117958697,3:00,20:14,852,"$2,715,388.00","$2,474,998.00","$2,904.93","$143,616.91"
EWR - VCE,54562128401,EWR 84B-6  B2,777-300,https://www.airlines-manager.com/network/showline/49921914,https://www.airlines-manager.com/network/showflight/54562128401,https://www.airlines-manager.com/aircraft/show/117958700,15:00,8:14,818,"$2,630,356.00","$2,398,961.00","$2,932.72","$139,204.70"
EWR - YEG,54536069495,EWR-YEG-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/54536069495,https://www.airlines-manager.com/aircraft/show/98936170,0:15,10:14,320,"$633,835.00","$581,441.00","$1,817.00","$58,241.17"
EWR - YEG,54536069496,EWR-YEG-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/54536069496,https://www.airlines-manager.com/aircraft/show/98936171,2:15,12:14,320,"$633,835.00","$581,441.00","$1,817.00","$58,241.17"
EWR - YEG,54556940983,EWR-YEG-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/54556940983,https://www.airlines-manager.com/aircraft/show/98936168,11:00,20:59,320,"$633,835.00","$581,441.00","$1,817.00","$58,241.17"
EWR - YEG,54556940984,EWR-YEG-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/54556940984,https://www.airlines-manager.com/aircraft/show/98936169,12:30,22:29,320,"$633,835.00","$581,441.00","$1,817.00","$58,241.17"
EWR - YEG,54575909746,EWR-YEG-BFF 5 B,A319-100,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/54575909746,https://www.airlines-manager.com/aircraft/show/115493369,22:00,7:59,198,"$473,556.00","$435,398.00","$2,198.98","$43,612.49"
EWR - YOW,54551622501,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/54551622501,https://www.airlines-manager.com/aircraft/show/106581304,9:30,12:59,320,"$170,585.00","$145,254.00",$453.92,"$41,699.71"
EWR - YOW,54556941021,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/54556941021,https://www.airlines-manager.com/aircraft/show/106581307,11:00,14:29,320,"$170,585.00","$145,254.00",$453.92,"$41,699.71"
EWR - YOW,54571726769,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/54571726769,https://www.airlines-manager.com/aircraft/show/86238754,18:45,22:14,320,"$170,585.00","$145,254.00",$453.92,"$41,699.71"
EWR - YOW,54575909648,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/54575909648,https://www.airlines-manager.com/aircraft/show/106581306,21:15,0:44,320,"$170,585.00","$145,254.00",$453.92,"$41,699.71"
EWR - YOW,54580945071,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/54580945071,https://www.airlines-manager.com/aircraft/show/106581305,22:45,2:14,289,"$160,523.00","$135,466.00",$468.74,"$38,889.76"
EWR - YUL,54551622500,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/54551622500,https://www.airlines-manager.com/aircraft/show/106581306,9:30,12:59,320,"$174,011.00","$145,853.00",$455.79,"$41,871.67"
EWR - YUL,54556941027,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/54556941027,https://www.airlines-manager.com/aircraft/show/106581305,11:00,14:29,320,"$174,011.00","$145,853.00",$455.79,"$41,871.67"
EWR - YUL,54562128460,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/54562128460,https://www.airlines-manager.com/aircraft/show/86238754,15:15,18:44,320,"$174,011.00","$145,853.00",$455.79,"$41,871.67"
EWR - YUL,54575909624,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/54575909624,https://www.airlines-manager.com/aircraft/show/106581304,21:00,0:29,320,"$174,011.00","$145,853.00",$455.79,"$41,871.67"
EWR - YUL,54580945061,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/54580945061,https://www.airlines-manager.com/aircraft/show/106581307,22:30,1:59,320,"$174,011.00","$145,853.00",$455.79,"$41,871.67"
EWR - YVR,54536069466,EWR-YVR-YYC 1,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/54536069466,https://www.airlines-manager.com/aircraft/show/113681636,0:00,11:14,400,"$908,415.00","$836,037.00","$2,090.09","$74,424.66"
EWR - YVR,54536069467,EWR-YVR-YYC 2,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/54536069467,https://www.airlines-manager.com/aircraft/show/113681637,1:30,12:44,400,"$908,415.00","$836,037.00","$2,090.09","$74,424.66"
EWR - YVR,54536069468,EWR-YVR-YYC 3,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/54536069468,https://www.airlines-manager.com/aircraft/show/113681638,3:00,14:14,400,"$908,415.00","$836,037.00","$2,090.09","$74,424.66"
EWR - YVR,54556941035,EWR-YVR-YYC 4,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/54556941035,https://www.airlines-manager.com/aircraft/show/113681639,11:15,22:29,400,"$908,415.00","$836,037.00","$2,090.09","$74,424.66"
EWR - YVR,54556941036,EWR-YVR-YYC 5,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/54556941036,https://www.airlines-manager.com/aircraft/show/113681640,12:45,23:59,400,"$908,415.00","$836,037.00","$2,090.09","$74,424.66"
EWR - YYC,54536069701,EWR-YVR-YYC 4,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/54536069701,https://www.airlines-manager.com/aircraft/show/113681639,1:30,11:14,400,"$787,708.00","$724,155.00","$1,810.39","$74,399.49"
EWR - YYC,54536069702,EWR-YVR-YYC 5,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/54536069702,https://www.airlines-manager.com/aircraft/show/113681640,3:00,12:44,400,"$787,708.00","$724,155.00","$1,810.39","$74,399.49"
EWR - YYC,54556941032,EWR-YVR-YYC 1,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/54556941032,https://www.airlines-manager.com/aircraft/show/113681636,11:15,20:59,400,"$787,708.00","$724,155.00","$1,810.39","$74,399.49"
EWR - YYC,54556941033,EWR-YVR-YYC 2,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/54556941033,https://www.airlines-manager.com/aircraft/show/113681637,12:45,22:29,400,"$787,708.00","$724,155.00","$1,810.39","$74,399.49"
EWR - YYC,54562128371,EWR-YVR-YYC 3,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/54562128371,https://www.airlines-manager.com/aircraft/show/113681638,14:15,23:59,400,"$787,708.00","$724,155.00","$1,810.39","$74,399.49"
EWR - YYZ,54536069807,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/54536069807,https://www.airlines-manager.com/aircraft/show/92003922,2:15,5:44,320,"$178,732.00","$144,394.00",$451.23,"$41,452.82"
EWR - YYZ,54545804731,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/54545804731,https://www.airlines-manager.com/aircraft/show/92003921,7:30,10:59,320,"$178,732.00","$144,394.00",$451.23,"$41,452.82"
EWR - YYZ,54551622532,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/54551622532,https://www.airlines-manager.com/aircraft/show/92003924,10:00,13:29,320,"$178,732.00","$144,394.00",$451.23,"$41,452.82"
EWR - YYZ,54562128307,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/54562128307,https://www.airlines-manager.com/aircraft/show/92003925,14:00,17:29,320,"$178,732.00","$144,394.00",$451.23,"$41,452.82"
EWR - YYZ,54571726706,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/54571726706,https://www.airlines-manager.com/aircraft/show/92003923,18:15,21:44,320,"$178,732.00","$144,394.00",$451.23,"$41,452.82"
EWR - YYZ,54571726707,EWR CARGO 1,A321neo-LR,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/54571726707,https://www.airlines-manager.com/aircraft/show/103406580,19:15,22:44,0,"$63,938.00","$35,161.00",$0.00,"$10,094.07"
EWR - ZRH,54545804743,EWR 84A-6 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/54545804743,https://www.airlines-manager.com/aircraft/show/90656552,7:45,23:59,852,"$2,628,800.00","$2,386,111.00","$2,800.60","$146,988.36"
EWR - ZRH,54575909522,EWR 84A-7 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/54575909522,https://www.airlines-manager.com/aircraft/show/94521249,20:00,12:14,852,"$2,628,800.00","$2,386,111.00","$2,800.60","$146,988.36"
HNL - AKL,54567120337,HNL 84B-2 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/54567120337,https://www.airlines-manager.com/aircraft/show/96807092,16:00,9:59,832,"$2,903,167.00","$2,645,977.00","$3,180.26","$147,134.96"
HNL - AKL,54580945186,HNL 84B-6 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/54580945186,https://www.airlines-manager.com/aircraft/show/96807088,23:00,16:59,832,"$2,885,772.00","$2,634,538.00","$3,166.51","$146,498.87"
HNL - ATL,54536069984,HNL 56B-2 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/54536069984,https://www.airlines-manager.com/aircraft/show/109187499,4:45,22:44,592,"$2,190,898.00","$2,005,043.00","$3,386.90","$111,494.51"
HNL - ATL,54567120282,HNL 56B-4 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/54567120282,https://www.airlines-manager.com/aircraft/show/109187501,16:00,9:59,592,"$2,190,898.00","$2,005,043.00","$3,386.90","$111,494.51"
HNL - ATL,54580945082,HNL 56B-2 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/54580945082,https://www.airlines-manager.com/aircraft/show/109187499,22:45,16:44,592,"$2,190,898.00","$2,005,043.00","$3,386.90","$111,494.51"
HNL - BNE,54536069950,HNL 84B-6 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/54536069950,https://www.airlines-manager.com/aircraft/show/96807088,4:00,22:59,832,"$3,045,822.00","$2,776,973.00","$3,337.71","$146,284.79"
HNL - BNE,54551622678,HNL 84B-3 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/54551622678,https://www.airlines-manager.com/aircraft/show/96807091,10:00,4:59,832,"$3,027,379.00","$2,764,876.00","$3,323.17","$145,647.55"
HNL - BOS,54536069444,HNL 56E-6 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/54536069444,https://www.airlines-manager.com/aircraft/show/117414505,0:00,19:59,592,"$2,395,125.00","$2,235,673.00","$3,776.47","$111,876.88"
HNL - BOS,54551622422,HNL 56E-1 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/54551622422,https://www.airlines-manager.com/aircraft/show/117414500,8:30,4:29,592,"$2,395,125.00","$2,235,673.00","$3,776.47","$111,876.88"
HNL - BOS,54551622423,HNL 56E-4 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/54551622423,https://www.airlines-manager.com/aircraft/show/117414503,10:00,5:59,592,"$2,395,125.00","$2,235,673.00","$3,776.47","$111,876.88"
HNL - BWI,54536069813,HNL 56F-4 B,787-10,https://www.airlines-manager.com/network/showline/50049284,https://www.airlines-manager.com/network/showflight/54536069813,https://www.airlines-manager.com/aircraft/show/118383854,2:30,21:44,592,"$2,281,246.00","$2,130,503.00","$3,598.82","$110,771.39"
HNL - BWI,54556941048,HNL 56F-5 B,787-10,https://www.airlines-manager.com/network/showline/50049284,https://www.airlines-manager.com/network/showflight/54556941048,https://www.airlines-manager.com/aircraft/show/118383855,11:45,6:59,592,"$2,281,246.00","$2,130,503.00","$3,598.82","$110,771.39"
HNL - BWI,54567120417,HNL 56F-1 B,787-10,https://www.airlines-manager.com/network/showline/50049284,https://www.airlines-manager.com/network/showflight/54567120417,https://www.airlines-manager.com/aircraft/show/118383851,17:00,12:14,584,"$2,261,650.00","$2,111,876.00","$3,616.23","$109,802.91"
HNL - CLT,54536069979,HNL 56D-3 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/54536069979,https://www.airlines-manager.com/aircraft/show/112066134,4:30,23:14,592,"$2,250,989.00","$2,095,290.00","$3,539.34","$111,848.22"
HNL - CLT,54545804579,HNL 56D-5 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/54545804579,https://www.airlines-manager.com/aircraft/show/112066136,5:30,0:14,592,"$2,250,989.00","$2,095,290.00","$3,539.34","$111,848.22"
HNL - CLT,54580945218,HNL 56D-3 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/54580945218,https://www.airlines-manager.com/aircraft/show/112066134,23:15,17:59,592,"$2,250,989.00","$2,095,290.00","$3,539.34","$111,848.22"
HNL - CXI,54536069923,HNL CARGO 2,737-700,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/54536069923,https://www.airlines-manager.com/aircraft/show/107563068,3:45,10:59,0,"$121,246.00","$97,580.00",$0.00,"$13,490.32"
HNL - CXI,54545804588,HNL-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/54545804588,https://www.airlines-manager.com/aircraft/show/90717080,5:30,12:44,388,"$489,861.00","$459,353.00","$1,183.90","$63,505.02"
HNL - CXI,54562128435,HNL-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/54562128435,https://www.airlines-manager.com/aircraft/show/90717080,15:00,22:14,388,"$489,861.00","$459,353.00","$1,183.90","$63,505.02"
HNL - CXI,54580945013,HNL-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/54580945013,https://www.airlines-manager.com/aircraft/show/90717080,22:15,5:29,388,"$489,861.00","$459,353.00","$1,183.90","$63,505.02"
HNL - DEN,54545804699,HNL 56F-6 B,787-10,https://www.airlines-manager.com/network/showline/43762939,https://www.airlines-manager.com/network/showflight/54545804699,https://www.airlines-manager.com/aircraft/show/118383856,7:00,20:59,592,"$1,705,342.00","$1,560,550.00","$2,636.06","$111,600.72"
HNL - DEN,54567120418,HNL 56F-2 B,787-10,https://www.airlines-manager.com/network/showline/43762939,https://www.airlines-manager.com/network/showflight/54567120418,https://www.airlines-manager.com/aircraft/show/118383852,17:00,6:59,592,"$1,705,342.00","$1,560,550.00","$2,636.06","$111,600.72"
HNL - DEN,54575909689,HNL 56F-4 B,787-10,https://www.airlines-manager.com/network/showline/43762939,https://www.airlines-manager.com/network/showflight/54575909689,https://www.airlines-manager.com/aircraft/show/118383854,21:45,11:44,592,"$1,705,342.00","$1,560,550.00","$2,636.06","$111,600.72"
HNL - DFW,54536069975,HNL 56E-2 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/54536069975,https://www.airlines-manager.com/aircraft/show/117414501,4:30,19:59,592,"$1,884,682.00","$1,733,298.00","$2,927.87","$111,946.05"
HNL - DFW,54567120427,HNL 56E-7 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/54567120427,https://www.airlines-manager.com/aircraft/show/117414506,17:00,8:29,592,"$1,884,682.00","$1,733,298.00","$2,927.87","$111,946.05"
HNL - DFW,54571726730,HNL 56E-3 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/54571726730,https://www.airlines-manager.com/aircraft/show/117414502,18:30,9:59,592,"$1,884,682.00","$1,733,298.00","$2,927.87","$111,946.05"
HNL - DTW,54545804631,HNL 56E-5 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/54545804631,https://www.airlines-manager.com/aircraft/show/117414504,6:00,23:59,592,"$2,148,777.00","$1,998,982.00","$3,376.66","$111,157.48"
HNL - DTW,54575909497,HNL 56E-6 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/54575909497,https://www.airlines-manager.com/aircraft/show/117414505,20:00,13:59,592,"$2,148,777.00","$1,998,982.00","$3,376.66","$111,157.48"
HNL - DTW,54575909498,HNL 56E-2 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/54575909498,https://www.airlines-manager.com/aircraft/show/117414501,20:00,13:59,592,"$2,148,777.00","$1,998,982.00","$3,376.66","$111,157.48"
HNL - EWR,54536069967,HNL 56A-7 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/54536069967,https://www.airlines-manager.com/aircraft/show/95351586,4:15,23:59,592,"$2,361,246.00","$2,199,331.00","$3,715.09","$111,452.58"
HNL - EWR,54545804660,HNL 56A-6 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/54545804660,https://www.airlines-manager.com/aircraft/show/95351587,6:00,1:44,592,"$2,361,246.00","$2,199,331.00","$3,715.09","$111,452.58"
HNL - EWR,54571726859,HNL 56A-3 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/54571726859,https://www.airlines-manager.com/aircraft/show/95351590,19:45,15:29,592,"$2,361,246.00","$2,199,331.00","$3,715.09","$111,452.58"
HNL - GUM,54536069450,HNL-GUM,A321neo,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/54536069450,https://www.airlines-manager.com/aircraft/show/115400544,0:00,16:44,338,"$1,120,384.00","$1,057,325.00","$3,128.18","$63,186.75"
HNL - GUM,54536069451,HNL 84A-3 F,777-300,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/54536069451,https://www.airlines-manager.com/aircraft/show/95818924,4:45,20:29,832,"$2,549,287.00","$2,348,860.00","$2,823.15","$149,291.95"
HNL - IAD,54536069885,HNL 56C-3 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/54536069885,https://www.airlines-manager.com/aircraft/show/111639415,3:15,22:14,592,"$2,267,245.00","$2,114,518.00","$3,571.82","$111,388.13"
HNL - IAD,54551622490,HNL 56C-5 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/54551622490,https://www.airlines-manager.com/aircraft/show/111639417,9:15,4:14,592,"$2,267,245.00","$2,114,518.00","$3,571.82","$111,388.13"
HNL - IAD,54575909500,HNL 56C-7 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/54575909500,https://www.airlines-manager.com/aircraft/show/111639419,20:00,14:59,592,"$2,267,245.00","$2,114,518.00","$3,571.82","$111,388.13"
HNL - IAH,54536069436,HNL 56A-1 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/54536069436,https://www.airlines-manager.com/aircraft/show/95351592,0:00,15:59,592,"$1,925,971.00","$1,785,660.00","$3,016.32","$111,720.13"
HNL - IAH,54536069437,HNL 56A-3 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/54536069437,https://www.airlines-manager.com/aircraft/show/95351590,3:45,19:44,592,"$1,925,971.00","$1,785,660.00","$3,016.32","$111,720.13"
HNL - IAH,54567120338,HNL 56A-1 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/54567120338,https://www.airlines-manager.com/aircraft/show/95351592,16:00,7:59,592,"$1,925,971.00","$1,785,660.00","$3,016.32","$111,720.13"
HNL - ITO,54536069752,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/54536069752,https://www.airlines-manager.com/aircraft/show/94803593,1:45,4:44,170,"$77,005.00","$66,478.00",$391.05,"$22,283.13"
HNL - ITO,54536069753,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/54536069753,https://www.airlines-manager.com/aircraft/show/94803596,3:15,6:14,170,"$77,005.00","$66,478.00",$391.05,"$22,283.13"
HNL - ITO,54545804645,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/54545804645,https://www.airlines-manager.com/aircraft/show/94803595,6:00,8:59,170,"$77,005.00","$66,478.00",$391.05,"$22,283.13"
HNL - ITO,54551622506,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/54551622506,https://www.airlines-manager.com/aircraft/show/94803594,9:30,12:29,170,"$77,005.00","$66,478.00",$391.05,"$22,283.13"
HNL - ITO,54562128430,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/54562128430,https://www.airlines-manager.com/aircraft/show/94803593,15:00,17:59,170,"$77,005.00","$66,478.00",$391.05,"$22,283.13"
HNL - ITO,54567120352,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/54567120352,https://www.airlines-manager.com/aircraft/show/94803596,16:30,19:29,170,"$77,005.00","$66,478.00",$391.05,"$22,283.13"
HNL - ITO,54571726820,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/54571726820,https://www.airlines-manager.com/aircraft/show/94803595,19:15,22:14,170,"$77,005.00","$66,478.00",$391.05,"$22,283.13"
HNL - ITO,54580945083,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/54580945083,https://www.airlines-manager.com/aircraft/show/94803594,22:45,1:44,123,"$64,578.00","$54,549.00",$443.49,"$18,284.58"
HNL - JFK,54536069881,HNL 56B-6 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/54536069881,https://www.airlines-manager.com/aircraft/show/109187503,3:00,22:44,592,"$2,394,138.00","$2,211,698.00","$3,735.98","$112,079.29"
HNL - JFK,54551622479,HNL 56B-1 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/54551622479,https://www.airlines-manager.com/aircraft/show/109187498,9:00,4:44,592,"$2,394,138.00","$2,211,698.00","$3,735.98","$112,079.29"
HNL - JFK,54567120405,HNL 56B-3 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/54567120405,https://www.airlines-manager.com/aircraft/show/109187500,17:00,12:44,592,"$2,394,138.00","$2,211,698.00","$3,735.98","$112,079.29"
HNL - KOA,54536069595,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/54536069595,https://www.airlines-manager.com/aircraft/show/94803595,0:45,3:29,170,"$58,675.00","$48,297.00",$284.10,"$17,669.63"
HNL - KOA,54536069596,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/54536069596,https://www.airlines-manager.com/aircraft/show/94803594,4:15,6:59,170,"$58,675.00","$48,297.00",$284.10,"$17,669.63"
HNL - KOA,54545804715,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/54545804715,https://www.airlines-manager.com/aircraft/show/94803593,7:15,9:59,170,"$58,675.00","$48,297.00",$284.10,"$17,669.63"
HNL - KOA,54551622447,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/54551622447,https://www.airlines-manager.com/aircraft/show/94803596,8:45,11:29,170,"$58,675.00","$48,297.00",$284.10,"$17,669.63"
HNL - KOA,54562128327,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/54562128327,https://www.airlines-manager.com/aircraft/show/94803595,14:00,16:44,170,"$58,675.00","$48,297.00",$284.10,"$17,669.63"
HNL - KOA,54567120450,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/54567120450,https://www.airlines-manager.com/aircraft/show/94803594,17:30,20:14,170,"$58,675.00","$48,297.00",$284.10,"$17,669.63"
HNL - KOA,54575909575,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/54575909575,https://www.airlines-manager.com/aircraft/show/94803593,20:30,23:14,170,"$58,675.00","$48,297.00",$284.10,"$17,669.63"
HNL - KOA,54575909576,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/54575909576,https://www.airlines-manager.com/aircraft/show/94803596,22:00,0:44,170,"$58,675.00","$48,297.00",$284.10,"$17,669.63"
HNL - LAS,54545804681,HNL 84A-5 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/54545804681,https://www.airlines-manager.com/aircraft/show/95818922,6:30,18:29,832,"$1,888,368.00","$1,701,740.00","$2,045.36","$142,008.90"
HNL - LAS,54567120372,HNL-LAS S,A321-200,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/54567120372,https://www.airlines-manager.com/aircraft/show/116385511,16:30,5:14,232,"$743,934.00","$672,432.00","$2,898.41","$52,808.80"
HNL - LAS,54575909573,HNL 84A-3 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/54575909573,https://www.airlines-manager.com/aircraft/show/95818924,20:30,8:29,800,"$1,840,264.00","$1,656,621.00","$2,070.78","$138,243.76"
HNL - LAX,54545804706,HNL-SFO-LAX 3,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/54545804706,https://www.airlines-manager.com/aircraft/show/110044460,7:00,18:59,338,"$786,488.00","$718,216.00","$2,124.90","$59,934.58"
HNL - LAX,54551622469,HNL-SFO-LAX 4,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/54551622469,https://www.airlines-manager.com/aircraft/show/110044461,9:00,20:59,338,"$786,488.00","$718,216.00","$2,124.90","$59,934.58"
HNL - LAX,54551622470,HNL-SFO-LAX 6 B,A319-100,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/54551622470,https://www.airlines-manager.com/aircraft/show/106106389,10:00,21:59,198,"$544,408.00","$487,128.00","$2,460.24","$40,650.46"
HNL - LAX,54571726705,HNL-SFO-LAX 1,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/54571726705,https://www.airlines-manager.com/aircraft/show/110044458,18:15,6:14,338,"$786,488.00","$718,216.00","$2,124.90","$59,934.58"
HNL - LAX,54575909544,HNL-SFO-LAX 2,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/54575909544,https://www.airlines-manager.com/aircraft/show/110044459,20:15,8:14,338,"$786,488.00","$718,216.00","$2,124.90","$59,934.58"
HNL - LAX,54575909545,HNL-SFO-LAX 5,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/54575909545,https://www.airlines-manager.com/aircraft/show/110044462,21:45,9:44,338,"$786,488.00","$718,216.00","$2,124.90","$59,934.58"
HNL - LIH,54536069590,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/54536069590,https://www.airlines-manager.com/aircraft/show/94803596,0:45,3:14,170,"$50,884.00","$42,464.00",$249.79,"$17,099.60"
HNL - LIH,54536069591,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/54536069591,https://www.airlines-manager.com/aircraft/show/94803595,3:30,5:59,170,"$50,884.00","$42,464.00",$249.79,"$17,099.60"
HNL - LIH,54545804711,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/54545804711,https://www.airlines-manager.com/aircraft/show/94803594,7:00,9:29,170,"$50,884.00","$42,464.00",$249.79,"$17,099.60"
HNL - LIH,54551622562,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/54551622562,https://www.airlines-manager.com/aircraft/show/94803593,10:00,12:29,170,"$50,884.00","$42,464.00",$249.79,"$17,099.60"
HNL - LIH,54562128328,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/54562128328,https://www.airlines-manager.com/aircraft/show/94803596,14:00,16:29,170,"$50,884.00","$42,464.00",$249.79,"$17,099.60"
HNL - LIH,54567120381,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/54567120381,https://www.airlines-manager.com/aircraft/show/94803595,16:45,19:14,170,"$50,884.00","$42,464.00",$249.79,"$17,099.60"
HNL - LIH,54575909550,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/54575909550,https://www.airlines-manager.com/aircraft/show/94803594,20:15,22:44,170,"$50,884.00","$42,464.00",$249.79,"$17,099.60"
HNL - LIH,54580945214,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/54580945214,https://www.airlines-manager.com/aircraft/show/94803593,23:15,1:44,170,"$50,884.00","$42,464.00",$249.79,"$17,099.60"
HNL - LNY,54536069598,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/54536069598,https://www.airlines-manager.com/aircraft/show/106107514,1:00,3:29,116,"$30,301.00","$25,294.00",$218.05,"$10,185.50"
HNL - LNY,54536069599,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/54536069599,https://www.airlines-manager.com/aircraft/show/106107514,3:30,5:59,116,"$30,301.00","$25,294.00",$218.05,"$10,185.50"
HNL - LNY,54545804641,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/54545804641,https://www.airlines-manager.com/aircraft/show/106107514,6:00,8:29,116,"$30,301.00","$25,294.00",$218.05,"$10,185.50"
HNL - LNY,54551622416,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/54551622416,https://www.airlines-manager.com/aircraft/show/106107514,8:30,10:59,116,"$30,301.00","$25,294.00",$218.05,"$10,185.50"
HNL - LNY,54562128419,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/54562128419,https://www.airlines-manager.com/aircraft/show/106107514,15:00,17:29,116,"$30,301.00","$25,294.00",$218.05,"$10,185.50"
HNL - LNY,54567120447,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/54567120447,https://www.airlines-manager.com/aircraft/show/106107514,17:30,19:59,116,"$30,301.00","$25,294.00",$218.05,"$10,185.50"
HNL - LNY,54575909504,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/54575909504,https://www.airlines-manager.com/aircraft/show/106107514,20:00,22:29,116,"$30,301.00","$25,294.00",$218.05,"$10,185.50"
HNL - LNY,54580945046,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/54580945046,https://www.airlines-manager.com/aircraft/show/106107514,22:30,0:59,116,"$30,301.00","$25,294.00",$218.05,"$10,185.50"
HNL - MCO,54536069626,HNL 56C-7 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/54536069626,https://www.airlines-manager.com/aircraft/show/111639419,1:00,19:59,592,"$2,277,153.00","$2,117,054.00","$3,576.10","$111,521.72"
HNL - MCO,54536069627,HNL 56C-6 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/54536069627,https://www.airlines-manager.com/aircraft/show/111639418,4:15,23:14,592,"$2,277,153.00","$2,117,054.00","$3,576.10","$111,521.72"
HNL - MCO,54545804774,HNL 56C-2 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/54545804774,https://www.airlines-manager.com/aircraft/show/111639414,8:15,3:14,592,"$2,277,153.00","$2,117,054.00","$3,576.10","$111,521.72"
HNL - MEL,54551622431,HNL 84A-4 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/54551622431,https://www.airlines-manager.com/aircraft/show/95818923,8:30,6:29,832,"$3,527,480.00","$3,226,098.00","$3,877.52","$146,751.99"
HNL - MEL,54575909526,HNL 84A-7 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/54575909526,https://www.airlines-manager.com/aircraft/show/95818920,20:00,17:59,832,"$3,527,480.00","$3,226,098.00","$3,877.52","$146,751.99"
HNL - MIA,54551622417,HNL 56A-2 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/54551622417,https://www.airlines-manager.com/aircraft/show/95351591,8:30,3:44,592,"$2,322,627.00","$2,156,366.00","$3,642.51","$112,116.08"
HNL - MIA,54556940893,HNL 56A-5 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/54556940893,https://www.airlines-manager.com/aircraft/show/95351588,10:45,5:59,592,"$2,322,627.00","$2,156,366.00","$3,642.51","$112,116.08"
HNL - MIA,54567120237,HNL 56A-4 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/54567120237,https://www.airlines-manager.com/aircraft/show/95351589,15:30,10:44,592,"$2,322,627.00","$2,156,366.00","$3,642.51","$112,116.08"
HNL - MNL,54545804738,HNL 84A-2 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/54545804738,https://www.airlines-manager.com/aircraft/show/95818925,7:30,4:44,832,"$3,450,425.00","$3,161,128.00","$3,799.43","$148,875.73"
HNL - MNL,54571726750,HNL 84A-5 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/54571726750,https://www.airlines-manager.com/aircraft/show/95818922,18:30,15:44,832,"$3,450,425.00","$3,161,128.00","$3,799.43","$148,875.73"
HNL - MSP,54567120322,HNL 56C-1 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/54567120322,https://www.airlines-manager.com/aircraft/show/111639413,16:00,8:14,592,"$1,940,110.00","$1,805,737.00","$3,050.23","$111,236.37"
HNL - MSP,54567120323,HNL 56C-4 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/54567120323,https://www.airlines-manager.com/aircraft/show/111639416,17:00,9:14,592,"$1,940,110.00","$1,805,737.00","$3,050.23","$111,236.37"
HNL - MSP,54580945024,HNL 56C-3 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/54580945024,https://www.airlines-manager.com/aircraft/show/111639415,22:15,14:29,592,"$1,940,110.00","$1,805,737.00","$3,050.23","$111,236.37"
HNL - NAN,54536069930,HNL 84A-7 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/54536069930,https://www.airlines-manager.com/aircraft/show/95818920,3:45,17:14,832,"$2,066,228.00","$1,895,022.00","$2,277.67","$140,545.51"
HNL - NAN,54571726670,HNL 84A-1 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/54571726670,https://www.airlines-manager.com/aircraft/show/95818926,18:00,7:29,832,"$2,037,178.00","$1,875,626.00","$2,254.36","$139,107.00"
HNL - OGG,54536069756,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/54536069756,https://www.airlines-manager.com/aircraft/show/94803594,1:45,4:14,170,"$51,604.00","$42,806.00",$251.80,"$17,237.32"
HNL - OGG,54536069757,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/54536069757,https://www.airlines-manager.com/aircraft/show/94803593,4:45,7:14,170,"$51,604.00","$42,806.00",$251.80,"$17,237.32"
HNL - OGG,54545804663,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/54545804663,https://www.airlines-manager.com/aircraft/show/94803596,6:15,8:44,170,"$51,604.00","$42,806.00",$251.80,"$17,237.32"
HNL - OGG,54551622481,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/54551622481,https://www.airlines-manager.com/aircraft/show/94803595,9:00,11:29,170,"$51,604.00","$42,806.00",$251.80,"$17,237.32"
HNL - OGG,54562128429,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/54562128429,https://www.airlines-manager.com/aircraft/show/94803594,15:00,17:29,170,"$51,604.00","$42,806.00",$251.80,"$17,237.32"
HNL - OGG,54571726672,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/54571726672,https://www.airlines-manager.com/aircraft/show/94803593,18:00,20:29,170,"$51,604.00","$42,806.00",$251.80,"$17,237.32"
HNL - OGG,54571726673,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/54571726673,https://www.airlines-manager.com/aircraft/show/94803596,19:30,21:59,170,"$51,604.00","$42,806.00",$251.80,"$17,237.32"
HNL - OGG,54580945025,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/54580945025,https://www.airlines-manager.com/aircraft/show/94803595,22:15,0:44,170,"$51,604.00","$42,806.00",$251.80,"$17,237.32"
HNL - ORD,54551622691,HNL 56B-5 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/54551622691,https://www.airlines-manager.com/aircraft/show/109187502,10:00,2:59,592,"$2,079,450.00","$1,909,990.00","$3,226.33","$112,462.61"
HNL - ORD,54567120283,HNL 56B-7 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/54567120283,https://www.airlines-manager.com/aircraft/show/109187504,16:00,8:59,592,"$2,079,450.00","$1,909,990.00","$3,226.33","$112,462.61"
HNL - ORD,54580945087,HNL 56B-6 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/54580945087,https://www.airlines-manager.com/aircraft/show/109187503,22:45,15:44,592,"$2,079,450.00","$1,909,990.00","$3,226.33","$112,462.61"
HNL - PHL,54545804705,HNL 56F-3 B,787-10,https://www.airlines-manager.com/network/showline/50049283,https://www.airlines-manager.com/network/showflight/54545804705,https://www.airlines-manager.com/aircraft/show/118383853,7:00,2:29,592,"$2,333,755.00","$2,176,175.00","$3,675.97","$111,694.18"
HNL - PHL,54567120419,HNL 56F-7 B,787-10,https://www.airlines-manager.com/network/showline/50049283,https://www.airlines-manager.com/network/showflight/54567120419,https://www.airlines-manager.com/aircraft/show/118383857,17:00,12:29,592,"$2,333,755.00","$2,176,175.00","$3,675.97","$111,694.18"
HNL - PHL,54575909640,HNL 56F-6 B,787-10,https://www.airlines-manager.com/network/showline/50049283,https://www.airlines-manager.com/network/showflight/54575909640,https://www.airlines-manager.com/aircraft/show/118383856,21:00,16:29,592,"$2,333,755.00","$2,176,175.00","$3,675.97","$111,694.18"
HNL - PHX,54536069910,HNL 56D-7 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/54536069910,https://www.airlines-manager.com/aircraft/show/112066138,3:30,15:59,592,"$1,512,409.00","$1,401,274.00","$2,367.02","$112,251.59"
HNL - PHX,54562128455,HNL 56D-6 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/54562128455,https://www.airlines-manager.com/aircraft/show/112066137,15:00,3:29,592,"$1,512,409.00","$1,401,274.00","$2,367.02","$112,251.59"
HNL - PHX,54567120318,HNL 56D-2 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/54567120318,https://www.airlines-manager.com/aircraft/show/112066133,16:00,4:29,592,"$1,512,409.00","$1,401,274.00","$2,367.02","$112,251.59"
HNL - PPG,54536069787,HNL CARGO 1,737-700,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/54536069787,https://www.airlines-manager.com/aircraft/show/107564830,2:15,14:29,0,"$206,811.00","$166,336.00",$0.00,"$13,596.95"
HNL - PPG,54536069788,HNL-TRW-PPG 1 S,A321-200,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/54536069788,https://www.airlines-manager.com/aircraft/show/88725599,3:30,15:44,380,"$785,616.00","$736,014.00","$1,936.88","$60,164.63"
HNL - PPG,54567120306,HNL-TRW-PPG 2 S,A321-200,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/54567120306,https://www.airlines-manager.com/aircraft/show/88725598,16:00,4:14,380,"$785,616.00","$736,014.00","$1,936.88","$60,164.63"
HNL - PPG,54571726694,HNL-TRW-PPG 3 S,A321-200,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/54571726694,https://www.airlines-manager.com/aircraft/show/88725597,18:00,6:14,380,"$785,616.00","$736,014.00","$1,936.88","$60,164.63"
HNL - PPT,54536069986,HNL-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/54536069986,https://www.airlines-manager.com/aircraft/show/88725600,4:45,17:29,310,"$766,196.00","$713,229.00","$2,300.74","$56,012.75"
HNL - PPT,54562128410,HNL CARGO 2,737-700,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/54562128410,https://www.airlines-manager.com/aircraft/show/107563068,15:00,3:44,0,"$211,034.00","$168,198.00",#DIV/0!,"$13,209.27"
HNL - PPT,54567120266,HNL 84A-6 F,777-300,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/54567120266,https://www.airlines-manager.com/aircraft/show/95818921,15:45,3:44,832,"$1,835,287.00","$1,699,043.00","$2,042.12","$141,783.84"
HNL - PPT,54567120267,HNL-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/54567120267,https://www.airlines-manager.com/aircraft/show/88725600,17:30,6:14,310,"$688,453.00","$643,008.00","$2,074.22","$50,498.01"
HNL - SEA,54536069932,HNL 56D-1 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/54536069932,https://www.airlines-manager.com/aircraft/show/112066132,3:45,15:14,592,"$1,411,026.00","$1,309,353.00","$2,211.74","$114,022.03"
HNL - SEA,54567120320,HNL 56D-1 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/54567120320,https://www.airlines-manager.com/aircraft/show/112066132,16:00,3:29,592,"$1,411,026.00","$1,309,353.00","$2,211.74","$114,022.03"
HNL - SEA,54571726689,HNL 56D-4 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/54571726689,https://www.airlines-manager.com/aircraft/show/112066135,18:00,5:29,592,"$1,411,026.00","$1,309,353.00","$2,211.74","$114,022.03"
HNL - SFO,54545804698,HNL-SFO-LAX 1,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/54545804698,https://www.airlines-manager.com/aircraft/show/110044458,7:00,18:14,338,"$755,506.00","$697,022.00","$2,062.20","$62,049.44"
HNL - SFO,54551622471,HNL-SFO-LAX 2,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/54551622471,https://www.airlines-manager.com/aircraft/show/110044459,9:00,20:14,338,"$755,506.00","$697,022.00","$2,062.20","$62,049.44"
HNL - SFO,54551622472,HNL-SFO-LAX 5,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/54551622472,https://www.airlines-manager.com/aircraft/show/110044462,10:30,21:44,338,"$755,506.00","$697,022.00","$2,062.20","$62,049.44"
HNL - SFO,54571726791,HNL-SFO-LAX 3,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/54571726791,https://www.airlines-manager.com/aircraft/show/110044460,19:00,6:14,338,"$755,506.00","$697,022.00","$2,062.20","$62,049.44"
HNL - SFO,54575909617,HNL-SFO-LAX 4,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/54575909617,https://www.airlines-manager.com/aircraft/show/110044461,21:00,8:14,338,"$755,506.00","$697,022.00","$2,062.20","$62,049.44"
HNL - SFO,54575909618,HNL-SFO-LAX 6 B,A319-100,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/54575909618,https://www.airlines-manager.com/aircraft/show/106106389,22:00,9:29,198,"$526,164.00","$476,877.00","$2,408.47","$41,527.75"
HNL - SIN,54536069999,HNL 84B-4 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/54536069999,https://www.airlines-manager.com/aircraft/show/96807090,5:15,7:29,832,"$4,308,151.00","$3,909,929.00","$4,699.43","$1,750,714.48"
HNL - SIN,54567120393,HNL 84B-7 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/54567120393,https://www.airlines-manager.com/aircraft/show/96807087,17:00,19:14,832,"$4,308,151.00","$3,909,929.00","$4,699.43","$1,750,714.48"
HNL - SYD,54545804739,HNL 84B-5 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/54545804739,https://www.airlines-manager.com/aircraft/show/96807089,7:30,3:59,832,"$3,117,929.00","$2,810,898.00","$3,378.48","$137,228.54"
HNL - SYD,54571726823,HNL 84B-1 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/54571726823,https://www.airlines-manager.com/aircraft/show/96807093,19:15,15:44,832,"$3,117,929.00","$2,810,898.00","$3,378.48","$137,228.54"
HNL - SYD,54575909514,Charter 2,747-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/54575909514,https://www.airlines-manager.com/aircraft/show/112787252,20:00,15:59,576,"$2,692,261.00","$2,533,420.00","$4,398.30","$126,776.65"
HNL - TRW,54536069959,HNL-TRW-PPG 2 S,A321-200,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/54536069959,https://www.airlines-manager.com/aircraft/show/88725598,4:15,15:44,380,"$764,424.00","$719,793.00","$1,894.19","$62,681.54"
HNL - TRW,54545804664,HNL-TRW-PPG 3 S,A321-200,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/54545804664,https://www.airlines-manager.com/aircraft/show/88725597,6:15,17:44,380,"$764,424.00","$719,793.00","$1,894.19","$62,681.54"
HNL - TRW,54562128446,HNL CARGO 1,737-700,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/54562128446,https://www.airlines-manager.com/aircraft/show/107564830,15:00,2:14,0,"$192,452.00","$155,886.00",#DIV/0!,"$13,877.09"
HNL - TRW,54567120305,HNL-TRW-PPG 1 S,A321-200,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/54567120305,https://www.airlines-manager.com/aircraft/show/88725599,16:00,3:29,380,"$764,424.00","$719,793.00","$1,894.19","$62,681.54"
HNL - YVR,54536069479,HNL 56D-6 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/54536069479,https://www.airlines-manager.com/aircraft/show/112066137,0:15,11:59,592,"$1,414,240.00","$1,318,834.00","$2,227.76","$112,400.63"
HNL - YVR,54536069480,HNL 56D-2 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/54536069480,https://www.airlines-manager.com/aircraft/show/112066133,3:30,15:14,592,"$1,414,240.00","$1,318,834.00","$2,227.76","$112,400.63"
HNL - YVR,54567120319,HNL 56D-7 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/54567120319,https://www.airlines-manager.com/aircraft/show/112066138,16:00,3:44,592,"$1,414,240.00","$1,318,834.00","$2,227.76","$112,400.63"
IAH - ABQ,54536069616,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/54536069616,https://www.airlines-manager.com/aircraft/show/103600700,1:00,5:59,310,"$316,874.00","$283,557.00",$914.70,"$56,901.07"
IAH - ABQ,54536069617,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/54536069617,https://www.airlines-manager.com/aircraft/show/110582844,2:30,7:29,198,"$240,844.00","$214,158.00","$1,081.61","$42,974.85"
IAH - ABQ,54545804632,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/54545804632,https://www.airlines-manager.com/aircraft/show/88725601,6:00,10:59,310,"$316,874.00","$283,557.00",$914.70,"$56,901.07"
IAH - ABQ,54556941179,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/54556941179,https://www.airlines-manager.com/aircraft/show/103600702,13:00,17:59,310,"$316,874.00","$283,557.00",$914.70,"$56,901.07"
IAH - ABQ,54571726754,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/54571726754,https://www.airlines-manager.com/aircraft/show/103600701,18:45,23:44,310,"$316,874.00","$283,557.00",$914.70,"$56,901.07"
IAH - ALB,54536069502,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/54536069502,https://www.airlines-manager.com/aircraft/show/114266976,0:15,7:59,320,"$495,326.00","$449,872.00","$1,405.85","$58,173.10"
IAH - ALB,54536069503,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/54536069503,https://www.airlines-manager.com/aircraft/show/92800067,2:00,9:59,112,"$234,453.00","$207,413.00","$1,851.90","$25,980.75"
IAH - ALB,54556941087,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/54556941087,https://www.airlines-manager.com/aircraft/show/114266971,12:00,19:44,320,"$495,326.00","$449,872.00","$1,405.85","$58,173.10"
IAH - ALB,54562128415,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/54562128415,https://www.airlines-manager.com/aircraft/show/114266970,15:00,22:44,320,"$495,326.00","$449,872.00","$1,405.85","$58,173.10"
IAH - ALB,54575909557,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/54575909557,https://www.airlines-manager.com/aircraft/show/114266972,20:15,3:59,320,"$495,326.00","$449,872.00","$1,405.85","$58,173.10"
IAH - ANC,54556941093,IAH-ANC-ONT 1,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/54556941093,https://www.airlines-manager.com/aircraft/show/108258010,12:00,2:44,310,"$896,871.00","$826,647.00","$2,666.60","$56,107.26"
IAH - ANC,54562128346,IAH-ANC-ONT 2,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/54562128346,https://www.airlines-manager.com/aircraft/show/108258011,14:00,4:44,310,"$896,871.00","$826,647.00","$2,666.60","$56,107.26"
IAH - ANC,54571726829,IAH-ANC-ONT 3,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/54571726829,https://www.airlines-manager.com/aircraft/show/108258012,19:15,9:59,310,"$896,871.00","$826,647.00","$2,666.60","$56,107.26"
IAH - ANC,54575909663,IAH-ANC-ONT 4,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/54575909663,https://www.airlines-manager.com/aircraft/show/108089220,21:15,11:59,310,"$896,871.00","$826,647.00","$2,666.60","$56,107.26"
IAH - ANC,54580945203,IAH-ANC-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/54580945203,https://www.airlines-manager.com/aircraft/show/108286957,23:15,13:59,198,"$669,375.00","$613,055.00","$3,096.24","$41,610.07"
IAH - ATL,54536069515,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/54536069515,https://www.airlines-manager.com/aircraft/show/82323704,0:15,4:59,112,"$146,148.00","$112,107.00","$1,000.96","$23,684.58"
IAH - ATL,54551622695,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/54551622695,https://www.airlines-manager.com/aircraft/show/95894466,10:00,14:44,320,"$306,745.00","$242,670.00",$758.34,"$51,268.31"
IAH - ATL,54556940895,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/54556940895,https://www.airlines-manager.com/aircraft/show/96256511,10:45,15:29,320,"$306,745.00","$242,670.00",$758.34,"$51,268.31"
IAH - ATL,54567120308,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/54567120308,https://www.airlines-manager.com/aircraft/show/96183549,16:00,20:44,320,"$306,745.00","$242,670.00",$758.34,"$51,268.31"
IAH - ATL,54571726657,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/54571726657,https://www.airlines-manager.com/aircraft/show/96177955,17:45,22:29,320,"$306,745.00","$242,670.00",$758.34,"$51,268.31"
IAH - ATL,54580945244,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/54580945244,https://www.airlines-manager.com/aircraft/show/96250652,23:45,4:29,320,"$306,745.00","$242,670.00",$758.34,"$51,268.31"
IAH - AUS,54536069956,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/54536069956,https://www.airlines-manager.com/aircraft/show/106007214,4:15,6:59,338,"$100,434.00","$76,833.00",$227.32,"$28,109.63"
IAH - AUS,54556941007,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/54556941007,https://www.airlines-manager.com/aircraft/show/106007213,11:00,13:44,338,"$100,434.00","$76,833.00",$227.32,"$28,109.63"
IAH - AUS,54556941008,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/54556941008,https://www.airlines-manager.com/aircraft/show/106007217,12:00,14:44,338,"$100,434.00","$76,833.00",$227.32,"$28,109.63"
IAH - AUS,54571726721,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/54571726721,https://www.airlines-manager.com/aircraft/show/106007216,18:15,20:59,338,"$100,434.00","$76,833.00",$227.32,"$28,109.63"
IAH - AUS,54575909686,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/54575909686,https://www.airlines-manager.com/aircraft/show/106007215,21:30,0:14,266,"$87,862.00","$64,490.00",$242.44,"$23,593.90"
IAH - BDL,54545804629,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/54545804629,https://www.airlines-manager.com/aircraft/show/103600700,6:00,13:59,310,"$498,192.00","$455,852.00","$1,470.49","$57,100.46"
IAH - BDL,54545804630,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/54545804630,https://www.airlines-manager.com/aircraft/show/110582844,7:30,15:29,198,"$375,515.00","$341,578.00","$1,725.14","$42,786.39"
IAH - BDL,54556940960,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/54556940960,https://www.airlines-manager.com/aircraft/show/88725601,11:00,18:59,310,"$498,192.00","$455,852.00","$1,470.49","$57,100.46"
IAH - BDL,54571726668,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/54571726668,https://www.airlines-manager.com/aircraft/show/103600702,18:00,1:59,310,"$498,192.00","$455,852.00","$1,470.49","$57,100.46"
IAH - BDL,54571726669,IAH-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/54571726669,https://www.airlines-manager.com/aircraft/show/96990010,19:45,3:44,112,"$234,492.00","$206,459.00","$1,843.38","$25,861.25"
IAH - BDL,54580945247,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/54580945247,https://www.airlines-manager.com/aircraft/show/103600701,23:45,7:44,310,"$498,192.00","$455,852.00","$1,470.49","$57,100.46"
IAH - BFF,54536069938,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/54536069938,https://www.airlines-manager.com/aircraft/show/114266972,4:00,9:44,320,"$365,524.00","$327,646.00","$1,023.89","$57,147.56"
IAH - BFF,54551622703,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/54551622703,https://www.airlines-manager.com/aircraft/show/114266976,10:15,15:59,320,"$365,524.00","$327,646.00","$1,023.89","$57,147.56"
IAH - BFF,54556941095,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/54556941095,https://www.airlines-manager.com/aircraft/show/92800067,12:00,17:44,112,"$173,234.00","$151,553.00","$1,353.15","$26,433.66"
IAH - BFF,54571726851,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/54571726851,https://www.airlines-manager.com/aircraft/show/114266971,19:45,1:29,320,"$365,524.00","$327,646.00","$1,023.89","$57,147.56"
IAH - BFF,54580945095,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/54580945095,https://www.airlines-manager.com/aircraft/show/114266970,22:45,4:29,320,"$365,524.00","$327,646.00","$1,023.89","$57,147.56"
IAH - BIL,54536069837,IAH-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/54536069837,https://www.airlines-manager.com/aircraft/show/117273390,2:45,9:59,320,"$455,489.00","$412,098.00","$1,287.81","$56,972.07"
IAH - BIL,54551622467,IAH-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/54551622467,https://www.airlines-manager.com/aircraft/show/117273392,9:00,16:14,320,"$455,489.00","$412,098.00","$1,287.81","$56,972.07"
IAH - BIL,54556940964,IAH-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/54556940964,https://www.airlines-manager.com/aircraft/show/117273389,11:00,18:14,320,"$455,489.00","$412,098.00","$1,287.81","$56,972.07"
IAH - BIL,54571726733,IAH-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/54571726733,https://www.airlines-manager.com/aircraft/show/117273391,18:30,1:44,320,"$455,489.00","$412,098.00","$1,287.81","$56,972.07"
IAH - BNA,54536069949,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/54536069949,https://www.airlines-manager.com/aircraft/show/104258214,4:00,8:44,310,"$301,869.00","$270,660.00",$873.10,"$57,181.69"
IAH - BNA,54551622496,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/54551622496,https://www.airlines-manager.com/aircraft/show/104258213,9:15,13:59,310,"$301,869.00","$270,660.00",$873.10,"$57,181.69"
IAH - BNA,54562128425,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/54562128425,https://www.airlines-manager.com/aircraft/show/104258212,15:00,19:44,310,"$301,869.00","$270,660.00",$873.10,"$57,181.69"
IAH - BNA,54575909740,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/54575909740,https://www.airlines-manager.com/aircraft/show/104258211,22:00,2:44,310,"$301,869.00","$270,660.00",$873.10,"$57,181.69"
IAH - BNA,54580945197,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/54580945197,https://www.airlines-manager.com/aircraft/show/103534664,23:00,3:44,112,"$143,481.00","$123,610.00","$1,103.66","$26,114.79"
IAH - BOG,54545804659,IAH 56A-4 E,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/54545804659,https://www.airlines-manager.com/aircraft/show/106676235,6:00,15:59,648,"$1,300,597.00","$1,208,305.00","$1,864.67","$121,032.22"
IAH - BOG,54562128311,IAH 56A-6 E,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/54562128311,https://www.airlines-manager.com/aircraft/show/106676237,14:00,23:59,648,"$1,300,597.00","$1,208,305.00","$1,864.67","$121,032.22"
IAH - BOG,54575909501,IAH 56A-1 E,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/54575909501,https://www.airlines-manager.com/aircraft/show/106676232,20:00,5:59,648,"$1,300,597.00","$1,208,305.00","$1,864.67","$121,032.22"
IAH - BOI,54536069651,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/54536069651,https://www.airlines-manager.com/aircraft/show/104258213,1:15,9:14,310,"$500,380.00","$458,753.00","$1,479.85","$57,463.84"
IAH - BOI,54545804700,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/54545804700,https://www.airlines-manager.com/aircraft/show/104258212,7:00,14:59,310,"$500,380.00","$458,753.00","$1,479.85","$57,463.84"
IAH - BOI,54562128359,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/54562128359,https://www.airlines-manager.com/aircraft/show/104258211,14:00,21:59,310,"$500,380.00","$458,753.00","$1,479.85","$57,463.84"
IAH - BOI,54562128360,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/54562128360,https://www.airlines-manager.com/aircraft/show/103534664,15:00,22:59,112,"$235,549.00","$207,987.00","$1,857.03","$26,052.65"
IAH - BOI,54575909517,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/54575909517,https://www.airlines-manager.com/aircraft/show/104258214,20:00,3:59,310,"$500,380.00","$458,753.00","$1,479.85","$57,463.84"
IAH - BOS,54536069738,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/54536069738,https://www.airlines-manager.com/aircraft/show/88400800,1:45,9:59,400,"$665,959.00","$604,155.00","$1,510.39","$73,379.15"
IAH - BOS,54556940977,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/54556940977,https://www.airlines-manager.com/aircraft/show/88400799,11:00,19:14,400,"$665,959.00","$604,155.00","$1,510.39","$73,379.15"
IAH - BOS,54556940978,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/54556940978,https://www.airlines-manager.com/aircraft/show/88400801,12:00,20:14,400,"$665,959.00","$604,155.00","$1,510.39","$73,379.15"
IAH - BOS,54571726638,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/54571726638,https://www.airlines-manager.com/aircraft/show/89233038,17:45,1:59,400,"$665,959.00","$604,155.00","$1,510.39","$73,379.15"
IAH - BOS,54571726639,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/54571726639,https://www.airlines-manager.com/aircraft/show/88400798,18:30,2:44,377,"$643,125.00","$582,274.00","$1,544.49","$70,721.54"
IAH - BSB,54556941034,IAH 84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/54556941034,https://www.airlines-manager.com/aircraft/show/89124076,11:15,5:29,932,"$3,053,991.00","$2,786,057.00","$2,989.33","$152,800.20"
IAH - BSB,54575909568,IAH 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/54575909568,https://www.airlines-manager.com/aircraft/show/88905140,20:15,14:29,932,"$3,053,991.00","$2,786,057.00","$2,989.33","$152,800.20"
IAH - BTV,54536069419,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/54536069419,https://www.airlines-manager.com/aircraft/show/86385103,0:00,8:14,310,"$515,451.00","$473,724.00","$1,528.14","$57,537.33"
IAH - BTV,54536069420,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/54536069420,https://www.airlines-manager.com/aircraft/show/82543907,4:15,12:29,112,"$242,906.00","$215,131.00","$1,920.81","$26,129.27"
IAH - BTV,54545804724,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/54545804724,https://www.airlines-manager.com/aircraft/show/114373409,7:15,15:29,310,"$515,451.00","$473,724.00","$1,528.14","$57,537.33"
IAH - BTV,54562128336,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/54562128336,https://www.airlines-manager.com/aircraft/show/114373410,14:00,22:14,310,"$515,451.00","$473,724.00","$1,528.14","$57,537.33"
IAH - BTV,54571726766,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/54571726766,https://www.airlines-manager.com/aircraft/show/113994196,18:45,2:59,310,"$515,451.00","$473,724.00","$1,528.14","$57,537.33"
IAH - BUF,54536069656,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/54536069656,https://www.airlines-manager.com/aircraft/show/107467127,1:15,8:14,310,"$452,151.00","$413,484.00","$1,333.82","$59,210.12"
IAH - BUF,54536069657,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/54536069657,https://www.airlines-manager.com/aircraft/show/107467128,4:00,10:59,310,"$452,151.00","$413,484.00","$1,333.82","$59,210.12"
IAH - BUF,54556941144,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/54556941144,https://www.airlines-manager.com/aircraft/show/107467129,13:00,19:59,310,"$452,151.00","$413,484.00","$1,333.82","$59,210.12"
IAH - BUF,54567120406,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/54567120406,https://www.airlines-manager.com/aircraft/show/110582843,17:00,23:59,198,"$341,310.00","$310,322.00","$1,567.28","$44,437.52"
IAH - BUF,54575909664,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/54575909664,https://www.airlines-manager.com/aircraft/show/107467130,21:15,4:14,310,"$452,151.00","$413,484.00","$1,333.82","$59,210.12"
IAH - BUR,54536069814,IAH-YEG-BUR 4,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/54536069814,https://www.airlines-manager.com/aircraft/show/117273341,2:30,9:59,310,"$467,550.00","$428,881.00","$1,383.49","$57,311.49"
IAH - BUR,54536069815,IAH-YEG-BUR 3,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/54536069815,https://www.airlines-manager.com/aircraft/show/117273342,3:15,10:44,310,"$467,550.00","$428,881.00","$1,383.49","$57,311.49"
IAH - BUR,54556940925,IAH-YEG-BUR 5,A321neo,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/54556940925,https://www.airlines-manager.com/aircraft/show/117273340,11:00,18:29,338,"$506,558.00","$469,607.00","$1,389.37","$62,753.72"
IAH - BUR,54571726691,IAH-YEG-BUR 2,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/54571726691,https://www.airlines-manager.com/aircraft/show/117273343,18:00,1:29,310,"$467,550.00","$428,881.00","$1,383.49","$57,311.49"
IAH - BUR,54575909541,IAH-YEG-BUR 1,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/54575909541,https://www.airlines-manager.com/aircraft/show/117273344,20:15,3:44,290,"$449,692.00","$411,776.00","$1,419.92","$55,025.75"
IAH - BWI,54536069510,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/54536069510,https://www.airlines-manager.com/aircraft/show/106007215,0:15,6:59,338,"$466,270.00","$424,899.00","$1,257.10","$63,103.81"
IAH - BWI,54536069511,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/54536069511,https://www.airlines-manager.com/aircraft/show/107543798,4:45,11:44,0,"$114,931.00","$84,213.00",$0.00,"$12,059.14"
IAH - BWI,54556941011,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/54556941011,https://www.airlines-manager.com/aircraft/show/106007214,11:00,17:44,338,"$466,270.00","$424,899.00","$1,257.10","$63,103.81"
IAH - BWI,54562128272,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/54562128272,https://www.airlines-manager.com/aircraft/show/106007213,13:45,20:29,338,"$466,270.00","$424,899.00","$1,257.10","$63,103.81"
IAH - BWI,54562128273,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/54562128273,https://www.airlines-manager.com/aircraft/show/106007217,14:45,21:29,338,"$466,270.00","$424,899.00","$1,257.10","$63,103.81"
IAH - BWI,54575909616,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/54575909616,https://www.airlines-manager.com/aircraft/show/106007216,21:00,3:44,338,"$466,270.00","$424,899.00","$1,257.10","$63,103.81"
IAH - BZN,54536069561,IAH-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/54536069561,https://www.airlines-manager.com/aircraft/show/117273392,0:30,7:59,320,"$473,001.00","$429,239.00","$1,341.37","$57,359.33"
IAH - BZN,54536069562,IAH-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/54536069562,https://www.airlines-manager.com/aircraft/show/117273389,2:30,9:59,320,"$473,001.00","$429,239.00","$1,341.37","$57,359.33"
IAH - BZN,54556940962,IAH-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/54556940962,https://www.airlines-manager.com/aircraft/show/117273391,11:00,18:29,320,"$473,001.00","$429,239.00","$1,341.37","$57,359.33"
IAH - BZN,54571726824,IAH-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/54571726824,https://www.airlines-manager.com/aircraft/show/117273390,19:15,2:44,320,"$473,001.00","$429,239.00","$1,341.37","$57,359.33"
IAH - CAK,54536069869,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/54536069869,https://www.airlines-manager.com/aircraft/show/113994196,3:00,9:14,310,"$391,760.00","$357,325.00","$1,152.66","$57,324.87"
IAH - CAK,54545804764,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/54545804764,https://www.airlines-manager.com/aircraft/show/86385103,8:15,14:29,310,"$391,760.00","$357,325.00","$1,152.66","$57,324.87"
IAH - CAK,54556941165,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/54556941165,https://www.airlines-manager.com/aircraft/show/82543907,13:00,19:14,112,"$185,160.00","$162,606.00","$1,451.84","$26,086.52"
IAH - CAK,54567120309,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/54567120309,https://www.airlines-manager.com/aircraft/show/114373409,16:00,22:14,310,"$391,760.00","$357,325.00","$1,152.66","$57,324.87"
IAH - CAK,54580945021,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/54580945021,https://www.airlines-manager.com/aircraft/show/114373410,22:15,4:29,291,"$377,501.00","$343,631.00","$1,180.86","$55,127.97"
IAH - CHS,54536069694,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/54536069694,https://www.airlines-manager.com/aircraft/show/107467211,1:30,7:14,112,"$169,673.00","$148,516.00","$1,326.04","$25,903.95"
IAH - CHS,54536069695,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/54536069695,https://www.airlines-manager.com/aircraft/show/107467131,3:30,9:14,310,"$357,728.00","$325,152.00","$1,048.88","$56,712.56"
IAH - CHS,54556941054,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/54556941054,https://www.airlines-manager.com/aircraft/show/107467132,12:00,17:44,310,"$357,728.00","$325,152.00","$1,048.88","$56,712.56"
IAH - CHS,54567120433,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/54567120433,https://www.airlines-manager.com/aircraft/show/107467133,17:15,22:59,310,"$357,728.00","$325,152.00","$1,048.88","$56,712.56"
IAH - CHS,54580945238,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/54580945238,https://www.airlines-manager.com/aircraft/show/107467134,23:45,5:29,310,"$357,728.00","$325,152.00","$1,048.88","$56,712.56"
IAH - CID,54556940939,IAH-EUG-MFR 3,737-900ER,https://www.airlines-manager.com/network/showline/50385690,https://www.airlines-manager.com/network/showflight/54556940939,https://www.airlines-manager.com/aircraft/show/119525218,11:00,16:29,320,"$340,936.00","$305,753.00",$955.48,"$55,760.43"
IAH - CID,54556940940,IAH-EUG-MFR 4,737-900ER,https://www.airlines-manager.com/network/showline/50385690,https://www.airlines-manager.com/network/showflight/54556940940,https://www.airlines-manager.com/aircraft/show/119525217,13:00,18:29,320,"$340,936.00","$305,753.00",$955.48,"$55,760.43"
IAH - CID,54571726855,IAH-EUG-MFR 2,737-900ER,https://www.airlines-manager.com/network/showline/50385690,https://www.airlines-manager.com/network/showflight/54571726855,https://www.airlines-manager.com/aircraft/show/119525219,19:45,1:14,320,"$340,936.00","$305,753.00",$955.48,"$55,760.43"
IAH - CID,54575909699,IAH-EUG-MFR 1,737-900ER,https://www.airlines-manager.com/network/showline/50385690,https://www.airlines-manager.com/network/showflight/54575909699,https://www.airlines-manager.com/aircraft/show/119525220,21:45,3:14,300,"$328,089.00","$293,362.00",$977.87,"$53,500.67"
IAH - CLE,54536069763,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/54536069763,https://www.airlines-manager.com/aircraft/show/103600702,2:00,8:14,310,"$399,426.00","$362,715.00","$1,170.05","$58,189.57"
IAH - CLE,54545804746,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/54545804746,https://www.airlines-manager.com/aircraft/show/103600701,7:45,13:59,310,"$399,426.00","$362,715.00","$1,170.05","$58,189.57"
IAH - CLE,54562128364,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/54562128364,https://www.airlines-manager.com/aircraft/show/103600700,14:00,20:14,310,"$399,426.00","$362,715.00","$1,170.05","$58,189.57"
IAH - CLE,54567120247,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/54567120247,https://www.airlines-manager.com/aircraft/show/110582844,15:30,21:44,198,"$301,699.00","$272,283.00","$1,375.17","$43,681.76"
IAH - CLE,54571726803,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/54571726803,https://www.airlines-manager.com/aircraft/show/88725601,19:00,1:14,310,"$399,426.00","$362,715.00","$1,170.05","$58,189.57"
IAH - CLT,54536069924,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/54536069924,https://www.airlines-manager.com/aircraft/show/93094697,3:45,9:29,310,"$360,318.00","$318,018.00","$1,025.86","$55,468.26"
IAH - CLT,54551622527,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/54551622527,https://www.airlines-manager.com/aircraft/show/93094698,10:00,15:44,310,"$360,318.00","$318,018.00","$1,025.86","$55,468.26"
IAH - CLT,54556941109,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/54556941109,https://www.airlines-manager.com/aircraft/show/93100455,12:00,17:44,112,"$170,541.00","$143,570.00","$1,281.88","$25,041.28"
IAH - CLT,54567120384,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/54567120384,https://www.airlines-manager.com/aircraft/show/93094699,16:45,22:29,310,"$360,318.00","$318,018.00","$1,025.86","$55,468.26"
IAH - CLT,54571726763,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/54571726763,https://www.airlines-manager.com/aircraft/show/93094695,18:45,0:29,310,"$360,318.00","$318,018.00","$1,025.86","$55,468.26"
IAH - CLT,54575909749,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/54575909749,https://www.airlines-manager.com/aircraft/show/93094696,22:00,3:44,310,"$360,318.00","$318,018.00","$1,025.86","$55,468.26"
IAH - CMH,54545804704,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/54545804704,https://www.airlines-manager.com/aircraft/show/103882355,7:00,12:59,310,"$377,783.00","$342,516.00","$1,104.89","$57,245.01"
IAH - CMH,54556940969,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/54556940969,https://www.airlines-manager.com/aircraft/show/103882358,11:00,16:59,310,"$377,783.00","$342,516.00","$1,104.89","$57,245.01"
IAH - CMH,54556940970,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/54556940970,https://www.airlines-manager.com/aircraft/show/105099861,12:00,17:59,112,"$178,529.00","$155,649.00","$1,389.72","$26,013.76"
IAH - CMH,54571726822,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/54571726822,https://www.airlines-manager.com/aircraft/show/103882357,19:15,1:14,310,"$377,783.00","$342,516.00","$1,104.89","$57,245.01"
IAH - CMH,54580945188,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/54580945188,https://www.airlines-manager.com/aircraft/show/103882356,23:00,4:59,310,"$377,783.00","$342,516.00","$1,104.89","$57,245.01"
IAH - COS,54536069746,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/54536069746,https://www.airlines-manager.com/aircraft/show/103882355,1:45,6:59,310,"$330,575.00","$297,660.00",$960.19,"$56,877.71"
IAH - COS,54545804622,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/54545804622,https://www.airlines-manager.com/aircraft/show/103882358,5:45,10:59,310,"$330,575.00","$297,660.00",$960.19,"$56,877.71"
IAH - COS,54562128361,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/54562128361,https://www.airlines-manager.com/aircraft/show/103882357,14:00,19:14,310,"$330,575.00","$297,660.00",$960.19,"$56,877.71"
IAH - COS,54571726646,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/54571726646,https://www.airlines-manager.com/aircraft/show/103882356,17:45,22:59,310,"$330,575.00","$297,660.00",$960.19,"$56,877.71"
IAH - COS,54580945080,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/54580945080,https://www.airlines-manager.com/aircraft/show/105099861,22:45,3:59,111,"$156,592.00","$135,466.00","$1,220.41","$25,885.22"
IAH - CUN,54536069622,IAH 56A-4 E,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/54536069622,https://www.airlines-manager.com/aircraft/show/106676235,1:00,5:59,648,"$623,370.00","$570,261.00",$880.03,"$114,433.65"
IAH - CUN,54556941121,IAH 56A-5 E,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/54556941121,https://www.airlines-manager.com/aircraft/show/106676236,12:30,17:29,648,"$623,370.00","$570,261.00",$880.03,"$114,433.65"
IAH - CUN,54575909586,IAH 56A-7 E,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/54575909586,https://www.airlines-manager.com/aircraft/show/106676238,20:30,1:29,648,"$623,370.00","$570,261.00",$880.03,"$114,433.65"
IAH - CVG,54536069489,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/54536069489,https://www.airlines-manager.com/aircraft/show/99093332,0:15,5:44,320,"$346,590.00","$305,889.00",$955.90,"$55,785.23"
IAH - CVG,54536069490,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/54536069490,https://www.airlines-manager.com/aircraft/show/99093333,4:00,9:29,320,"$346,590.00","$305,889.00",$955.90,"$55,785.23"
IAH - CVG,54545804753,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/54545804753,https://www.airlines-manager.com/aircraft/show/99093334,8:00,13:29,320,"$346,590.00","$305,889.00",$955.90,"$55,785.23"
IAH - CVG,54562128304,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/54562128304,https://www.airlines-manager.com/aircraft/show/99093335,14:00,19:29,320,"$346,590.00","$305,889.00",$955.90,"$55,785.23"
IAH - CVG,54567120252,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/54567120252,https://www.airlines-manager.com/aircraft/show/101412921,15:45,21:14,0,"$108,314.00","$74,133.00",#DIV/0!,"$13,519.70"
IAH - CVG,54567120253,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/54567120253,https://www.airlines-manager.com/aircraft/show/106499070,16:00,21:29,198,"$262,949.00","$234,422.00","$1,183.95","$42,751.73"
IAH - DEN,54556941091,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/54556941091,https://www.airlines-manager.com/aircraft/show/105562975,12:00,17:29,338,"$377,132.00","$323,898.00",$958.28,"$59,069.54"
IAH - DEN,54556941092,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/54556941092,https://www.airlines-manager.com/aircraft/show/105562971,13:00,18:29,338,"$377,132.00","$323,898.00",$958.28,"$59,069.54"
IAH - DEN,54580945040,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/54580945040,https://www.airlines-manager.com/aircraft/show/105562972,22:30,3:59,338,"$377,132.00","$323,898.00",$958.28,"$59,069.54"
IAH - DEN,54580945041,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/54580945041,https://www.airlines-manager.com/aircraft/show/105562973,23:00,4:29,338,"$377,132.00","$323,898.00",$958.28,"$59,069.54"
IAH - DEN,54580945042,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/54580945042,https://www.airlines-manager.com/aircraft/show/107543798,23:15,4:44,0,"$93,476.00","$57,419.00",#DIV/0!,"$10,471.55"
IAH - DEN,54580945043,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/54580945043,https://www.airlines-manager.com/aircraft/show/105562974,23:30,4:59,338,"$377,132.00","$323,898.00",$958.28,"$59,069.54"
IAH - DFW,54536069614,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/54536069614,https://www.airlines-manager.com/aircraft/show/99093333,1:00,3:59,320,"$127,970.00","$80,376.00",$251.18,"$26,941.68"
IAH - DFW,54536069615,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/54536069615,https://www.airlines-manager.com/aircraft/show/99093334,5:00,7:59,320,"$127,970.00","$80,376.00",$251.18,"$26,941.68"
IAH - DFW,54556940930,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/54556940930,https://www.airlines-manager.com/aircraft/show/99093335,11:00,13:59,320,"$127,970.00","$80,376.00",$251.18,"$26,941.68"
IAH - DFW,54556940931,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/54556940931,https://www.airlines-manager.com/aircraft/show/107543798,13:00,15:59,0,"$39,135.00","$14,173.00",#DIV/0!,"$4,750.73"
IAH - DFW,54556940932,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/54556940932,https://www.airlines-manager.com/aircraft/show/106499070,13:00,15:59,198,"$96,695.00","$64,607.00",$326.30,"$21,655.98"
IAH - DFW,54562128372,IAH-YEG-BUR 4,A321-200,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/54562128372,https://www.airlines-manager.com/aircraft/show/117273341,14:15,17:14,310,"$129,445.00","$89,347.00",$288.22,"$29,948.72"
IAH - DFW,54575909651,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/54575909651,https://www.airlines-manager.com/aircraft/show/99093332,21:15,0:14,320,"$127,970.00","$80,376.00",$251.18,"$26,941.68"
IAH - DSM,54536069888,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/54536069888,https://www.airlines-manager.com/aircraft/show/110424761,3:15,8:29,320,"$331,987.00","$297,057.00",$928.30,"$56,762.48"
IAH - DSM,54551622445,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/54551622445,https://www.airlines-manager.com/aircraft/show/110424758,8:45,13:59,320,"$331,987.00","$297,057.00",$928.30,"$56,762.48"
IAH - DSM,54562128288,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/54562128288,https://www.airlines-manager.com/aircraft/show/110424759,14:00,19:14,320,"$331,987.00","$297,057.00",$928.30,"$56,762.48"
IAH - DSM,54571726735,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/54571726735,https://www.airlines-manager.com/aircraft/show/110424760,18:30,23:44,320,"$331,987.00","$297,057.00",$928.30,"$56,762.48"
IAH - DTW,54536069526,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/54536069526,https://www.airlines-manager.com/aircraft/show/90183184,0:30,6:44,310,"$394,242.00","$349,485.00","$1,127.37","$56,067.11"
IAH - DTW,54536069527,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/54536069527,https://www.airlines-manager.com/aircraft/show/90183180,2:30,8:44,310,"$394,242.00","$349,485.00","$1,127.37","$56,067.11"
IAH - DTW,54545804638,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/54545804638,https://www.airlines-manager.com/aircraft/show/90183181,6:00,12:14,310,"$394,242.00","$349,485.00","$1,127.37","$56,067.11"
IAH - DTW,54556941211,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/54556941211,https://www.airlines-manager.com/aircraft/show/90183182,13:00,19:14,310,"$394,242.00","$349,485.00","$1,127.37","$56,067.11"
IAH - DTW,54571726772,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/54571726772,https://www.airlines-manager.com/aircraft/show/90183183,18:45,0:59,310,"$394,242.00","$349,485.00","$1,127.37","$56,067.11"
IAH - DTW,54575909610,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/54575909610,https://www.airlines-manager.com/aircraft/show/90140936,20:45,2:59,136,"$187,480.00","$158,934.00","$1,168.63","$25,497.43"
IAH - ELP,54536069917,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/54536069917,https://www.airlines-manager.com/aircraft/show/104717245,3:30,8:14,310,"$299,599.00","$269,242.00",$868.52,"$56,882.11"
IAH - ELP,54556940979,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/54556940979,https://www.airlines-manager.com/aircraft/show/104717246,11:00,15:44,310,"$299,599.00","$269,242.00",$868.52,"$56,882.11"
IAH - ELP,54567120380,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/54567120380,https://www.airlines-manager.com/aircraft/show/104717247,16:45,21:29,310,"$299,599.00","$269,242.00",$868.52,"$56,882.11"
IAH - ELP,54571726805,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/54571726805,https://www.airlines-manager.com/aircraft/show/104743902,19:00,23:44,112,"$142,796.00","$123,419.00","$1,101.96","$26,074.44"
IAH - ELP,54575909714,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/54575909714,https://www.airlines-manager.com/aircraft/show/104717244,22:00,2:44,310,"$299,599.00","$269,242.00",$868.52,"$56,882.11"
IAH - EUG,54536069668,IAH-EUG-MFR 2,737-900ER,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/54536069668,https://www.airlines-manager.com/aircraft/show/119525219,1:15,10:14,320,"$568,617.00","$518,885.00","$1,621.52","$57,760.85"
IAH - EUG,54536069669,IAH-EUG-MFR 1,737-900ER,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/54536069669,https://www.airlines-manager.com/aircraft/show/119525220,3:15,12:14,320,"$568,617.00","$518,885.00","$1,621.52","$57,760.85"
IAH - EUG,54556941015,IAH-EUG-MFR 5,ERJ-175,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/54556941015,https://www.airlines-manager.com/aircraft/show/119525248,11:00,20:14,112,"$268,394.00","$238,263.00","$2,127.35","$25,804.66"
IAH - EUG,54567120359,IAH-EUG-MFR 3,737-900ER,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/54567120359,https://www.airlines-manager.com/aircraft/show/119525218,16:30,1:29,320,"$568,617.00","$518,885.00","$1,621.52","$57,760.85"
IAH - EUG,54571726726,IAH-EUG-MFR 4,737-900ER,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/54571726726,https://www.airlines-manager.com/aircraft/show/119525217,18:30,3:29,320,"$568,617.00","$518,885.00","$1,621.52","$57,760.85"
IAH - EZE,54536069951,IAH 84A-2 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/54536069951,https://www.airlines-manager.com/aircraft/show/89439130,4:00,0:29,932,"$3,364,104.00","$3,066,842.00","$3,290.60","$149,723.78"
IAH - EZE,54545804582,IAH 84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/54545804582,https://www.airlines-manager.com/aircraft/show/89124075,5:30,1:59,932,"$3,364,104.00","$3,066,842.00","$3,290.60","$149,723.78"
IAH - FAR,54536069706,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/54536069706,https://www.airlines-manager.com/aircraft/show/110424754,1:30,8:14,320,"$417,352.00","$376,905.00","$1,177.83","$55,975.99"
IAH - FAR,54536069707,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/54536069707,https://www.airlines-manager.com/aircraft/show/110424755,4:15,10:59,320,"$417,352.00","$376,905.00","$1,177.83","$55,975.99"
IAH - FAR,54556941085,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/54556941085,https://www.airlines-manager.com/aircraft/show/110424756,12:00,18:44,320,"$417,352.00","$376,905.00","$1,177.83","$55,975.99"
IAH - FAR,54575909747,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/54575909747,https://www.airlines-manager.com/aircraft/show/110424757,22:00,4:44,320,"$417,352.00","$376,905.00","$1,177.83","$55,975.99"
IAH - FAT,54536069935,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/54536069935,https://www.airlines-manager.com/aircraft/show/110424760,4:00,11:44,320,"$497,045.00","$451,592.00","$1,411.23","$58,395.52"
IAH - FAT,54562128289,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/54562128289,https://www.airlines-manager.com/aircraft/show/110424761,14:00,21:44,320,"$497,045.00","$451,592.00","$1,411.23","$58,395.52"
IAH - FAT,54571726702,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/54571726702,https://www.airlines-manager.com/aircraft/show/110424758,18:15,1:59,320,"$497,045.00","$451,592.00","$1,411.23","$58,395.52"
IAH - FAT,54580945224,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/54580945224,https://www.airlines-manager.com/aircraft/show/110424759,23:30,7:14,320,"$497,045.00","$451,592.00","$1,411.23","$58,395.52"
IAH - FCA,54536069726,IAH-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/54536069726,https://www.airlines-manager.com/aircraft/show/117273391,1:45,9:59,320,"$521,224.00","$474,034.00","$1,481.36","$57,574.98"
IAH - FCA,54556940963,IAH-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/54556940963,https://www.airlines-manager.com/aircraft/show/117273390,11:00,19:14,320,"$521,224.00","$474,034.00","$1,481.36","$57,574.98"
IAH - FCA,54567120341,IAH-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/54567120341,https://www.airlines-manager.com/aircraft/show/117273392,16:15,0:29,320,"$521,224.00","$474,034.00","$1,481.36","$57,574.98"
IAH - FCA,54571726716,IAH-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/54571726716,https://www.airlines-manager.com/aircraft/show/117273389,18:15,2:29,306,"$507,224.00","$460,641.00","$1,505.36","$55,948.30"
IAH - FLL,54536069544,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/54536069544,https://www.airlines-manager.com/aircraft/show/93094695,0:30,6:14,310,"$366,964.00","$329,736.00","$1,063.66","$57,512.09"
IAH - FLL,54536069545,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/54536069545,https://www.airlines-manager.com/aircraft/show/93094696,3:45,9:29,310,"$366,964.00","$329,736.00","$1,063.66","$57,512.09"
IAH - FLL,54551622526,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/54551622526,https://www.airlines-manager.com/aircraft/show/93094697,10:00,15:44,310,"$366,964.00","$329,736.00","$1,063.66","$57,512.09"
IAH - FLL,54567120272,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/54567120272,https://www.airlines-manager.com/aircraft/show/93094698,15:45,21:29,310,"$366,964.00","$329,736.00","$1,063.66","$57,512.09"
IAH - FLL,54571726640,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/54571726640,https://www.airlines-manager.com/aircraft/show/93100455,17:45,23:29,112,"$174,104.00","$150,084.00","$1,340.04","$26,177.44"
IAH - FLL,54580945047,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/54580945047,https://www.airlines-manager.com/aircraft/show/93094699,22:30,4:14,310,"$366,964.00","$329,736.00","$1,063.66","$57,512.09"
IAH - FSD,54536069983,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/54536069983,https://www.airlines-manager.com/aircraft/show/110424757,4:45,10:29,320,"$361,825.00","$324,990.00","$1,015.59","$56,684.30"
IAH - FSD,54545804775,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/54545804775,https://www.airlines-manager.com/aircraft/show/110424754,8:15,13:59,320,"$361,825.00","$324,990.00","$1,015.59","$56,684.30"
IAH - FSD,54556940948,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/54556940948,https://www.airlines-manager.com/aircraft/show/110424755,11:00,16:44,320,"$361,825.00","$324,990.00","$1,015.59","$56,684.30"
IAH - FSD,54571726760,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/54571726760,https://www.airlines-manager.com/aircraft/show/110424756,18:45,0:29,280,"$334,386.00","$298,566.00","$1,066.31","$52,075.47"
IAH - GDL,54536069981,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/54536069981,https://www.airlines-manager.com/aircraft/show/114266977,4:45,9:59,400,"$438,019.00","$395,506.00",$988.77,"$75,574.39"
IAH - GDL,54556940885,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/54556940885,https://www.airlines-manager.com/aircraft/show/114266980,10:45,15:59,400,"$438,019.00","$395,506.00",$988.77,"$75,574.39"
IAH - GDL,54556940886,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/54556940886,https://www.airlines-manager.com/aircraft/show/114266979,12:00,17:14,400,"$438,019.00","$395,506.00",$988.77,"$75,574.39"
IAH - GDL,54575909502,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/54575909502,https://www.airlines-manager.com/aircraft/show/114266978,20:00,1:14,354,"$394,220.00","$352,931.00",$996.98,"$67,439.04"
IAH - GIG,54536069461,IAH 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/54536069461,https://www.airlines-manager.com/aircraft/show/88905140,0:00,20:14,932,"$3,375,058.00","$3,072,413.00","$3,296.58","$151,849.08"
IAH - GIG,54536069462,IAH 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/54536069462,https://www.airlines-manager.com/aircraft/show/89124074,2:00,22:14,932,"$3,375,058.00","$3,072,413.00","$3,296.58","$151,849.08"
IAH - GRR,54536069670,IAH-GRR-MSN 3,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/54536069670,https://www.airlines-manager.com/aircraft/show/117273346,1:15,7:29,310,"$389,416.00","$354,658.00","$1,144.06","$56,897.01"
IAH - GRR,54545804723,IAH-GRR-MSN 2,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/54545804723,https://www.airlines-manager.com/aircraft/show/117273347,7:15,13:29,310,"$389,416.00","$354,658.00","$1,144.06","$56,897.01"
IAH - GRR,54562128331,IAH-GRR-MSN 1,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/54562128331,https://www.airlines-manager.com/aircraft/show/117273348,14:00,20:14,310,"$389,416.00","$354,658.00","$1,144.06","$56,897.01"
IAH - GRR,54567120297,IAH-GRR-MSN 4,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/54567120297,https://www.airlines-manager.com/aircraft/show/117273345,16:00,22:14,310,"$389,416.00","$354,658.00","$1,144.06","$56,897.01"
IAH - GRU,54536069635,IAH 56A-7 E,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/54536069635,https://www.airlines-manager.com/aircraft/show/106676238,1:00,20:29,648,"$2,475,775.00","$2,306,133.00","$3,558.85","$118,364.40"
IAH - GRU,54556940943,IAH 56A-2 E,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/54556940943,https://www.airlines-manager.com/aircraft/show/106676233,11:00,6:29,648,"$2,475,775.00","$2,306,133.00","$3,558.85","$118,364.40"
IAH - GRU,54567120390,IAH 56A-4 E,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/54567120390,https://www.airlines-manager.com/aircraft/show/106676235,17:00,12:29,648,"$2,475,775.00","$2,306,133.00","$3,558.85","$118,364.40"
IAH - GSO,54536069754,IAH-SYR-ROC 1,737-900ER,https://www.airlines-manager.com/network/showline/50385734,https://www.airlines-manager.com/network/showflight/54536069754,https://www.airlines-manager.com/aircraft/show/119525224,1:45,7:44,320,"$374,176.00","$335,824.00","$1,049.45","$56,126.57"
IAH - GSO,54536069755,IAH-SYR-ROC 4,737-900ER,https://www.airlines-manager.com/network/showline/50385734,https://www.airlines-manager.com/network/showflight/54536069755,https://www.airlines-manager.com/aircraft/show/119525221,2:45,8:44,320,"$374,176.00","$335,824.00","$1,049.45","$56,126.57"
IAH - GSO,54556940910,IAH-SYR-ROC 3,737-900ER,https://www.airlines-manager.com/network/showline/50385734,https://www.airlines-manager.com/network/showflight/54556940910,https://www.airlines-manager.com/aircraft/show/119525222,11:00,16:59,320,"$374,176.00","$335,824.00","$1,049.45","$56,126.57"
IAH - GSO,54571726708,IAH-SYR-ROC 2,737-900ER,https://www.airlines-manager.com/network/showline/50385734,https://www.airlines-manager.com/network/showflight/54571726708,https://www.airlines-manager.com/aircraft/show/119525223,18:15,0:14,320,"$374,176.00","$335,824.00","$1,049.45","$56,126.57"
IAH - IAD,54536069915,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/54536069915,https://www.airlines-manager.com/aircraft/show/105400635,3:30,10:14,112,"$198,874.00","$170,620.00","$1,523.39","$25,339.60"
IAH - IAD,54545804694,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/54545804694,https://www.airlines-manager.com/aircraft/show/98578923,6:45,13:29,320,"$421,810.00","$372,226.00","$1,163.21","$55,281.09"
IAH - IAD,54551622510,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/54551622510,https://www.airlines-manager.com/aircraft/show/98578920,9:45,16:29,320,"$421,810.00","$372,226.00","$1,163.21","$55,281.09"
IAH - IAD,54556941196,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/54556941196,https://www.airlines-manager.com/aircraft/show/98578924,13:00,19:44,320,"$421,810.00","$372,226.00","$1,163.21","$55,281.09"
IAH - IAD,54571726698,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/54571726698,https://www.airlines-manager.com/aircraft/show/98578921,18:00,0:44,320,"$421,810.00","$372,226.00","$1,163.21","$55,281.09"
IAH - IAD,54575909681,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/54575909681,https://www.airlines-manager.com/aircraft/show/98578922,21:30,4:14,320,"$421,810.00","$372,226.00","$1,163.21","$55,281.09"
IAH - ICT,54551622512,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/54551622512,https://www.airlines-manager.com/aircraft/show/110424761,9:45,13:59,320,"$249,947.00","$218,363.00",$682.38,"$51,581.81"
IAH - ICT,54562128287,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/54562128287,https://www.airlines-manager.com/aircraft/show/110424758,14:00,18:14,320,"$249,947.00","$218,363.00",$682.38,"$51,581.81"
IAH - ICT,54571726811,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/54571726811,https://www.airlines-manager.com/aircraft/show/110424759,19:15,23:29,320,"$249,947.00","$218,363.00",$682.38,"$51,581.81"
IAH - ICT,54580945249,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/54580945249,https://www.airlines-manager.com/aircraft/show/110424760,23:45,3:59,314,"$247,126.00","$215,630.00",$686.72,"$50,936.22"
IAH - IND,54536069409,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/54536069409,https://www.airlines-manager.com/aircraft/show/100684074,0:00,5:29,310,"$343,077.00","$309,211.00",$997.45,"$56,391.06"
IAH - IND,54536069410,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/54536069410,https://www.airlines-manager.com/aircraft/show/110582845,4:45,10:14,198,"$260,133.00","$233,004.00","$1,176.79","$42,493.13"
IAH - IND,54545804644,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/54545804644,https://www.airlines-manager.com/aircraft/show/100684071,6:00,11:29,310,"$343,077.00","$309,211.00",$997.45,"$56,391.06"
IAH - IND,54556941043,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/54556941043,https://www.airlines-manager.com/aircraft/show/100684072,11:30,16:59,310,"$343,077.00","$309,211.00",$997.45,"$56,391.06"
IAH - IND,54571726642,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/54571726642,https://www.airlines-manager.com/aircraft/show/100684073,17:45,23:14,310,"$343,077.00","$309,211.00",$997.45,"$56,391.06"
IAH - JAC,54536069765,IAH-SNA-SBA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/54536069765,https://www.airlines-manager.com/aircraft/show/119525225,2:00,8:59,270,"$394,847.00","$367,425.00","$1,360.83","$52,614.56"
IAH - JAC,54556940896,IAH-SNA-SBA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/54556940896,https://www.airlines-manager.com/aircraft/show/119525227,11:00,17:59,270,"$394,847.00","$367,425.00","$1,360.83","$52,614.56"
IAH - JAC,54556940897,IAH-SNA-SBA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/54556940897,https://www.airlines-manager.com/aircraft/show/119525228,13:00,19:59,270,"$394,847.00","$367,425.00","$1,360.83","$52,614.56"
IAH - JAC,54571726774,IAH-SNA-SBA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/54571726774,https://www.airlines-manager.com/aircraft/show/119525226,18:45,1:44,270,"$394,847.00","$367,425.00","$1,360.83","$52,614.56"
IAH - JAC,54575909612,IAH-SNA-SBA-5,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/54575909612,https://www.airlines-manager.com/aircraft/show/119525229,20:45,3:44,270,"$394,847.00","$367,425.00","$1,360.83","$52,614.56"
IAH - JAN,54536069552,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/54536069552,https://www.airlines-manager.com/aircraft/show/110424756,0:30,3:59,320,"$176,882.00","$149,431.00",$466.97,"$42,898.85"
IAH - JAN,54551622713,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/54551622713,https://www.airlines-manager.com/aircraft/show/110424757,10:30,13:59,320,"$176,882.00","$149,431.00",$466.97,"$42,898.85"
IAH - JAN,54562128290,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/54562128290,https://www.airlines-manager.com/aircraft/show/110424754,14:00,17:29,320,"$176,882.00","$149,431.00",$466.97,"$42,898.85"
IAH - JAN,54567120377,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/54567120377,https://www.airlines-manager.com/aircraft/show/110424755,16:45,20:14,305,"$171,863.00","$144,553.00",$473.94,"$41,498.47"
IAH - JAX,54536069876,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/54536069876,https://www.airlines-manager.com/aircraft/show/104717247,3:00,8:14,310,"$336,821.00","$304,593.00",$982.56,"$58,202.48"
IAH - JAX,54545804751,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/54545804751,https://www.airlines-manager.com/aircraft/show/104743902,8:00,13:14,112,"$159,757.00","$138,997.00","$1,241.04","$26,559.94"
IAH - JAX,54556940985,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/54556940985,https://www.airlines-manager.com/aircraft/show/104717244,11:00,16:14,310,"$336,821.00","$304,593.00",$982.56,"$58,202.48"
IAH - JAX,54567120370,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/54567120370,https://www.airlines-manager.com/aircraft/show/104717245,16:30,21:44,310,"$336,821.00","$304,593.00",$982.56,"$58,202.48"
IAH - JAX,54575909665,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/54575909665,https://www.airlines-manager.com/aircraft/show/104717246,21:15,2:29,310,"$336,821.00","$304,593.00",$982.56,"$58,202.48"
IAH - JFK,54536069776,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/54536069776,https://www.airlines-manager.com/aircraft/show/89233038,2:00,9:29,400,"$620,114.00","$546,805.00","$1,367.01","$73,069.71"
IAH - JFK,54556940924,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/54556940924,https://www.airlines-manager.com/aircraft/show/88400798,11:00,18:29,400,"$620,114.00","$546,805.00","$1,367.01","$73,069.71"
IAH - JFK,54571726709,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/54571726709,https://www.airlines-manager.com/aircraft/show/88400800,18:15,1:44,400,"$620,114.00","$546,805.00","$1,367.01","$73,069.71"
IAH - JFK,54571726710,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/54571726710,https://www.airlines-manager.com/aircraft/show/88400799,19:15,2:44,400,"$620,114.00","$546,805.00","$1,367.01","$73,069.71"
IAH - JFK,54575909654,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/54575909654,https://www.airlines-manager.com/aircraft/show/88400801,21:15,4:44,400,"$620,114.00","$546,805.00","$1,367.01","$73,069.71"
IAH - LAS,54536069952,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/54536069952,https://www.airlines-manager.com/aircraft/show/96256511,4:00,10:44,320,"$428,374.00","$366,893.00","$1,146.54","$54,489.06"
IAH - LAS,54536069953,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/54536069953,https://www.airlines-manager.com/aircraft/show/96250652,5:00,11:44,320,"$428,374.00","$366,893.00","$1,146.54","$54,489.06"
IAH - LAS,54536069954,IAH-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/54536069954,https://www.airlines-manager.com/aircraft/show/96990010,5:15,11:59,112,"$201,610.00","$167,316.00","$1,493.89","$24,848.91"
IAH - LAS,54556940923,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/54556940923,https://www.airlines-manager.com/aircraft/show/96177955,11:00,17:44,320,"$428,374.00","$366,893.00","$1,146.54","$54,489.06"
IAH - LAS,54562128386,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/54562128386,https://www.airlines-manager.com/aircraft/show/95894466,14:45,21:29,320,"$428,374.00","$366,893.00","$1,146.54","$54,489.06"
IAH - LAS,54567120454,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/54567120454,https://www.airlines-manager.com/aircraft/show/82323704,17:30,0:14,112,"$201,610.00","$167,316.00","$1,493.89","$24,848.91"
IAH - LAS,54575909604,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/54575909604,https://www.airlines-manager.com/aircraft/show/96183549,20:45,3:29,320,"$428,374.00","$366,893.00","$1,146.54","$54,489.06"
IAH - LAX,54536069840,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/54536069840,https://www.airlines-manager.com/aircraft/show/88400799,2:45,9:59,400,"$608,073.00","$535,900.00","$1,339.75","$74,087.56"
IAH - LAX,54536069841,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/54536069841,https://www.airlines-manager.com/aircraft/show/88400798,3:45,10:59,400,"$608,073.00","$535,900.00","$1,339.75","$74,087.56"
IAH - LAX,54536069842,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/54536069842,https://www.airlines-manager.com/aircraft/show/88400801,4:45,11:59,400,"$608,073.00","$535,900.00","$1,339.75","$74,087.56"
IAH - LAX,54551622709,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/54551622709,https://www.airlines-manager.com/aircraft/show/89233038,10:30,17:44,400,"$608,073.00","$535,900.00","$1,339.75","$74,087.56"
IAH - LAX,54556940937,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/54556940937,https://www.airlines-manager.com/aircraft/show/88400800,11:00,18:14,400,"$608,073.00","$535,900.00","$1,339.75","$74,087.56"
IAH - LEX,54536069972,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/54536069972,https://www.airlines-manager.com/aircraft/show/114373410,4:30,9:44,310,"$333,493.00","$303,515.00",$979.08,"$57,996.50"
IAH - LEX,54551622488,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/54551622488,https://www.airlines-manager.com/aircraft/show/113994196,9:15,14:29,310,"$333,493.00","$303,515.00",$979.08,"$57,996.50"
IAH - LEX,54562128405,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/54562128405,https://www.airlines-manager.com/aircraft/show/86385103,15:00,20:14,310,"$333,493.00","$303,515.00",$979.08,"$57,996.50"
IAH - LEX,54571726816,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/54571726816,https://www.airlines-manager.com/aircraft/show/82543907,19:15,0:29,112,"$158,473.00","$139,040.00","$1,241.43","$26,568.15"
IAH - LEX,54580945038,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/54580945038,https://www.airlines-manager.com/aircraft/show/114373409,22:15,3:29,263,"$303,685.00","$274,773.00","$1,044.76","$52,504.39"
IAH - LIM,54562128382,IAH 84A-1 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/54562128382,https://www.airlines-manager.com/aircraft/show/89439131,14:30,3:59,932,"$2,248,966.00","$2,049,121.00","$2,198.63","$151,974.36"
IAH - LIM,54580945251,IAH 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/54580945251,https://www.airlines-manager.com/aircraft/show/89124074,23:45,13:14,932,"$2,248,966.00","$2,049,121.00","$2,198.63","$151,974.36"
IAH - LIT,54536069931,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/54536069931,https://www.airlines-manager.com/aircraft/show/96692491,3:45,7:14,310,"$188,277.00","$164,271.00",$529.91,"$47,159.14"
IAH - LIT,54556941018,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/54556941018,https://www.airlines-manager.com/aircraft/show/96692343,11:00,14:29,310,"$188,277.00","$164,271.00",$529.91,"$47,159.14"
IAH - LIT,54571726839,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/54571726839,https://www.airlines-manager.com/aircraft/show/96691558,19:30,22:59,310,"$188,277.00","$164,271.00",$529.91,"$47,159.14"
IAH - LIT,54575909521,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/54575909521,https://www.airlines-manager.com/aircraft/show/106014350,20:00,23:29,198,"$142,091.00","$122,870.00",$620.56,"$35,273.68"
IAH - LIT,54580945227,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/54580945227,https://www.airlines-manager.com/aircraft/show/96694086,23:30,2:59,271,"$174,314.00","$150,708.00",$556.12,"$43,265.45"
IAH - MCI,54536069620,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/54536069620,https://www.airlines-manager.com/aircraft/show/103882358,1:00,5:44,310,"$298,385.00","$267,227.00",$862.02,"$56,456.41"
IAH - MCI,54551622497,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/54551622497,https://www.airlines-manager.com/aircraft/show/103882357,9:15,13:59,310,"$298,385.00","$267,227.00",$862.02,"$56,456.41"
IAH - MCI,54556941178,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/54556941178,https://www.airlines-manager.com/aircraft/show/103882356,13:00,17:44,310,"$298,385.00","$267,227.00",$862.02,"$56,456.41"
IAH - MCI,54571726676,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/54571726676,https://www.airlines-manager.com/aircraft/show/105099861,18:00,22:44,112,"$141,332.00","$121,512.00","$1,084.93","$25,671.55"
IAH - MCI,54575909625,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/54575909625,https://www.airlines-manager.com/aircraft/show/103882355,21:00,1:44,310,"$298,385.00","$267,227.00",$862.02,"$56,456.41"
IAH - MCI,54575909626,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/54575909626,https://www.airlines-manager.com/aircraft/show/101412921,21:15,1:59,0,"$90,879.00","$60,780.00",$0.00,"$12,840.85"
IAH - MCO,54536069608,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/54536069608,https://www.airlines-manager.com/aircraft/show/90183183,1:00,6:29,310,"$345,341.00","$302,947.00",$977.25,"$55,248.69"
IAH - MCO,54536069609,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/54536069609,https://www.airlines-manager.com/aircraft/show/90140936,3:00,8:29,136,"$164,440.00","$137,662.00","$1,012.22","$25,105.53"
IAH - MCO,54545804697,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/54545804697,https://www.airlines-manager.com/aircraft/show/90183184,6:45,12:14,310,"$345,341.00","$302,947.00",$977.25,"$55,248.69"
IAH - MCO,54551622461,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/54551622461,https://www.airlines-manager.com/aircraft/show/90183180,8:45,14:14,310,"$345,341.00","$302,947.00",$977.25,"$55,248.69"
IAH - MCO,54556941210,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/54556941210,https://www.airlines-manager.com/aircraft/show/90183181,13:00,18:29,310,"$345,341.00","$302,947.00",$977.25,"$55,248.69"
IAH - MCO,54571726825,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/54571726825,https://www.airlines-manager.com/aircraft/show/90183182,19:15,0:44,310,"$345,341.00","$302,947.00",$977.25,"$55,248.69"
IAH - MEM,54536069778,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/54536069778,https://www.airlines-manager.com/aircraft/show/101412921,2:00,5:59,0,"$71,952.00","$44,009.00",$0.00,"$11,048.28"
IAH - MEM,54545804611,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/54545804611,https://www.airlines-manager.com/aircraft/show/99093332,5:45,9:44,320,"$221,718.00","$188,356.00",$588.61,"$47,286.03"
IAH - MEM,54551622499,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/54551622499,https://www.airlines-manager.com/aircraft/show/99093333,9:30,13:29,320,"$221,718.00","$188,356.00",$588.61,"$47,286.03"
IAH - MEM,54562128303,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/54562128303,https://www.airlines-manager.com/aircraft/show/99093334,14:00,17:59,320,"$221,718.00","$188,356.00",$588.61,"$47,286.03"
IAH - MEM,54571726843,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/54571726843,https://www.airlines-manager.com/aircraft/show/99093335,19:30,23:29,320,"$221,718.00","$188,356.00",$588.61,"$47,286.03"
IAH - MEM,54575909677,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/54575909677,https://www.airlines-manager.com/aircraft/show/106499070,21:30,1:29,198,"$168,315.00","$145,325.00",$733.96,"$36,483.26"
IAH - MEX,54536069734,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/54536069734,https://www.airlines-manager.com/aircraft/show/97026605,1:45,6:44,136,"$153,432.00","$128,531.00",$945.08,"$25,792.17"
IAH - MEX,54545804591,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/54545804591,https://www.airlines-manager.com/aircraft/show/97076945,5:30,10:29,400,"$414,085.00","$365,742.00",$914.36,"$73,393.04"
IAH - MEX,54551622440,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/54551622440,https://www.airlines-manager.com/aircraft/show/97076942,8:30,13:29,400,"$414,085.00","$365,742.00",$914.36,"$73,393.04"
IAH - MEX,54556941209,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/54556941209,https://www.airlines-manager.com/aircraft/show/97076946,13:00,17:59,400,"$414,085.00","$365,742.00",$914.36,"$73,393.04"
IAH - MEX,54567120313,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/54567120313,https://www.airlines-manager.com/aircraft/show/97076943,16:00,20:59,391,"$405,820.00","$357,701.00",$914.84,"$71,779.46"
IAH - MEX,54580945050,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/54580945050,https://www.airlines-manager.com/aircraft/show/97076944,22:30,3:29,284,"$307,549.00","$262,087.00",$922.84,"$52,592.71"
IAH - MFR,54536069691,IAH-EUG-MFR 3,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/54536069691,https://www.airlines-manager.com/aircraft/show/119525218,1:30,10:14,320,"$553,376.00","$504,007.00","$1,575.02","$57,710.73"
IAH - MFR,54536069692,IAH-EUG-MFR 4,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/54536069692,https://www.airlines-manager.com/aircraft/show/119525217,3:30,12:14,320,"$553,376.00","$504,007.00","$1,575.02","$57,710.73"
IAH - MFR,54556940907,IAH-EUG-MFR 2,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/54556940907,https://www.airlines-manager.com/aircraft/show/119525219,11:00,19:44,320,"$553,376.00","$504,007.00","$1,575.02","$57,710.73"
IAH - MFR,54556940908,IAH-EUG-MFR 1,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/54556940908,https://www.airlines-manager.com/aircraft/show/119525220,13:00,21:44,320,"$553,376.00","$504,007.00","$1,575.02","$57,710.73"
IAH - MFR,54575909552,IAH-EUG-MFR 5,ERJ-175,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/54575909552,https://www.airlines-manager.com/aircraft/show/119525248,20:15,5:14,112,"$261,423.00","$231,650.00","$2,068.30","$25,786.64"
IAH - MHT,54536069693,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/54536069693,https://www.airlines-manager.com/aircraft/show/114266971,1:30,9:44,320,"$523,407.00","$475,551.00","$1,486.10","$57,759.23"
IAH - MHT,54545804691,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/54545804691,https://www.airlines-manager.com/aircraft/show/114266970,6:45,14:59,320,"$523,407.00","$475,551.00","$1,486.10","$57,759.23"
IAH - MHT,54556941086,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/54556941086,https://www.airlines-manager.com/aircraft/show/114266972,12:00,20:14,320,"$523,407.00","$475,551.00","$1,486.10","$57,759.23"
IAH - MHT,54567120307,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/54567120307,https://www.airlines-manager.com/aircraft/show/114266976,16:00,0:14,320,"$523,407.00","$475,551.00","$1,486.10","$57,759.23"
IAH - MHT,54571726656,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/54571726656,https://www.airlines-manager.com/aircraft/show/92800067,17:45,1:59,112,"$246,747.00","$218,180.00","$1,948.04","$26,499.60"
IAH - MIA,54536069587,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/54536069587,https://www.airlines-manager.com/aircraft/show/90183182,0:45,6:29,310,"$370,158.00","$324,401.00","$1,046.45","$56,581.57"
IAH - MIA,54545804675,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/54545804675,https://www.airlines-manager.com/aircraft/show/90183183,6:30,12:14,310,"$370,158.00","$324,401.00","$1,046.45","$56,581.57"
IAH - MIA,54551622432,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/54551622432,https://www.airlines-manager.com/aircraft/show/90140936,8:30,14:14,136,"$176,283.00","$147,315.00","$1,083.20","$25,694.48"
IAH - MIA,54556941131,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/54556941131,https://www.airlines-manager.com/aircraft/show/90183184,13:00,18:44,310,"$370,158.00","$324,401.00","$1,046.45","$56,581.57"
IAH - MIA,54562128426,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/54562128426,https://www.airlines-manager.com/aircraft/show/90183180,15:00,20:44,310,"$370,158.00","$324,401.00","$1,046.45","$56,581.57"
IAH - MIA,54571726752,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/54571726752,https://www.airlines-manager.com/aircraft/show/90183181,18:30,0:14,310,"$370,158.00","$324,401.00","$1,046.45","$56,581.57"
IAH - MKE,54536069641,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/54536069641,https://www.airlines-manager.com/aircraft/show/104258212,1:00,6:59,310,"$379,077.00","$343,943.00","$1,109.49","$57,483.51"
IAH - MKE,54545804750,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/54545804750,https://www.airlines-manager.com/aircraft/show/104258211,8:00,13:59,310,"$379,077.00","$343,943.00","$1,109.49","$57,483.51"
IAH - MKE,54551622464,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/54551622464,https://www.airlines-manager.com/aircraft/show/103534664,9:00,14:59,112,"$179,025.00","$156,225.00","$1,394.87","$26,110.03"
IAH - MKE,54562128357,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/54562128357,https://www.airlines-manager.com/aircraft/show/104258214,14:00,19:59,310,"$379,077.00","$343,943.00","$1,109.49","$57,483.51"
IAH - MKE,54571726819,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/54571726819,https://www.airlines-manager.com/aircraft/show/104258213,19:15,1:14,310,"$379,077.00","$343,943.00","$1,109.49","$57,483.51"
IAH - MSN,54545804732,IAH-GRR-MSN 3,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/54545804732,https://www.airlines-manager.com/aircraft/show/117273346,7:30,13:29,310,"$372,062.00","$338,977.00","$1,093.47","$56,653.54"
IAH - MSN,54562128330,IAH-GRR-MSN 2,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/54562128330,https://www.airlines-manager.com/aircraft/show/117273347,14:00,19:59,310,"$372,062.00","$338,977.00","$1,093.47","$56,653.54"
IAH - MSN,54575909543,IAH-GRR-MSN 1,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/54575909543,https://www.airlines-manager.com/aircraft/show/117273348,20:15,2:14,310,"$372,062.00","$338,977.00","$1,093.47","$56,653.54"
IAH - MSN,54580945033,IAH-GRR-MSN 4,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/54580945033,https://www.airlines-manager.com/aircraft/show/117273345,22:15,4:14,310,"$372,062.00","$338,977.00","$1,093.47","$56,653.54"
IAH - MSO,54536069939,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/54536069939,https://www.airlines-manager.com/aircraft/show/110424756,4:00,11:59,320,"$506,889.00","$460,456.00","$1,438.93","$57,677.16"
IAH - MSO,54562128286,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/54562128286,https://www.airlines-manager.com/aircraft/show/110424757,14:00,21:59,320,"$506,889.00","$460,456.00","$1,438.93","$57,677.16"
IAH - MSO,54567120455,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/54567120455,https://www.airlines-manager.com/aircraft/show/110424754,17:30,1:29,320,"$506,889.00","$460,456.00","$1,438.93","$57,677.16"
IAH - MSO,54575909561,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/54575909561,https://www.airlines-manager.com/aircraft/show/110424755,20:15,4:14,320,"$506,889.00","$460,456.00","$1,438.93","$57,677.16"
IAH - MSP,54536069944,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/54536069944,https://www.airlines-manager.com/aircraft/show/95894466,4:00,9:59,320,"$383,173.00","$333,877.00","$1,043.37","$55,801.17"
IAH - MSP,54536069945,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/54536069945,https://www.airlines-manager.com/aircraft/show/82323704,5:00,11:14,112,"$181,989.00","$154,324.00","$1,377.89","$24,757.86"
IAH - MSP,54551622696,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/54551622696,https://www.airlines-manager.com/aircraft/show/96183549,10:00,15:59,320,"$383,173.00","$333,877.00","$1,043.37","$55,801.17"
IAH - MSP,54571726654,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/54571726654,https://www.airlines-manager.com/aircraft/show/96250652,17:45,23:44,320,"$383,173.00","$333,877.00","$1,043.37","$55,801.17"
IAH - MSP,54575909675,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/54575909675,https://www.airlines-manager.com/aircraft/show/96256511,21:30,3:29,320,"$383,173.00","$333,877.00","$1,043.37","$55,801.17"
IAH - MSP,54580945065,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/54580945065,https://www.airlines-manager.com/aircraft/show/96177955,22:30,4:29,320,"$383,173.00","$333,877.00","$1,043.37","$55,801.17"
IAH - MSY,54536069926,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/54536069926,https://www.airlines-manager.com/aircraft/show/106007216,3:45,6:59,338,"$170,355.00","$145,708.00",$431.09,"$45,064.33"
IAH - MSY,54536069927,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/54536069927,https://www.airlines-manager.com/aircraft/show/106007217,4:45,7:59,338,"$170,355.00","$145,708.00",$431.09,"$45,064.33"
IAH - MSY,54556940998,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/54556940998,https://www.airlines-manager.com/aircraft/show/106007215,11:00,14:14,338,"$170,355.00","$145,708.00",$431.09,"$45,064.33"
IAH - MSY,54571726659,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/54571726659,https://www.airlines-manager.com/aircraft/show/106007214,17:45,20:59,338,"$170,355.00","$145,708.00",$431.09,"$45,064.33"
IAH - MSY,54575909592,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/54575909592,https://www.airlines-manager.com/aircraft/show/106007213,20:30,23:44,263,"$147,903.00","$123,776.00",$470.63,"$38,281.24"
IAH - MTY,54536069916,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/54536069916,https://www.airlines-manager.com/aircraft/show/114266974,3:30,7:14,320,"$202,486.00","$171,969.00",$537.40,"$46,063.13"
IAH - MTY,54551622489,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/54551622489,https://www.airlines-manager.com/aircraft/show/105099862,9:15,12:59,112,"$92,541.00","$76,086.00",$679.34,"$20,380.18"
IAH - MTY,54562128285,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/54562128285,https://www.airlines-manager.com/aircraft/show/114266975,14:00,17:44,320,"$202,486.00","$171,969.00",$537.40,"$46,063.13"
IAH - MTY,54567120444,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/54567120444,https://www.airlines-manager.com/aircraft/show/113250059,17:30,21:14,320,"$202,486.00","$171,969.00",$537.40,"$46,063.13"
IAH - MTY,54580945229,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/54580945229,https://www.airlines-manager.com/aircraft/show/113114108,23:30,3:14,320,"$202,486.00","$171,969.00",$537.40,"$46,063.13"
IAH - OAK,54536069648,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/54536069648,https://www.airlines-manager.com/aircraft/show/98578920,1:15,9:44,320,"$528,703.00","$477,880.00","$1,493.38","$56,331.63"
IAH - OAK,54536069649,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/54536069649,https://www.airlines-manager.com/aircraft/show/98578924,3:00,11:29,320,"$528,703.00","$477,880.00","$1,493.38","$56,331.63"
IAH - OAK,54545804756,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/54545804756,https://www.airlines-manager.com/aircraft/show/98578921,8:00,16:29,320,"$528,703.00","$477,880.00","$1,493.38","$56,331.63"
IAH - OAK,54556941204,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/54556941204,https://www.airlines-manager.com/aircraft/show/98578922,13:00,21:29,320,"$528,703.00","$477,880.00","$1,493.38","$56,331.63"
IAH - OAK,54571726809,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/54571726809,https://www.airlines-manager.com/aircraft/show/105400635,19:00,3:29,112,"$249,361.00","$219,214.00","$1,957.27","$25,840.55"
IAH - OAK,54580945032,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/54580945032,https://www.airlines-manager.com/aircraft/show/98578923,22:15,6:44,320,"$528,703.00","$477,880.00","$1,493.38","$56,331.63"
IAH - OKC,54545804589,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/54545804589,https://www.airlines-manager.com/aircraft/show/107467134,5:30,9:14,310,"$196,458.00","$171,197.00",$552.25,"$45,856.34"
IAH - OKC,54551622521,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/54551622521,https://www.airlines-manager.com/aircraft/show/107467211,10:00,13:44,112,"$90,701.00","$74,854.00",$668.34,"$20,050.18"
IAH - OKC,54556941094,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/54556941094,https://www.airlines-manager.com/aircraft/show/107467131,12:00,15:44,310,"$196,458.00","$171,197.00",$552.25,"$45,856.34"
IAH - OKC,54571726643,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/54571726643,https://www.airlines-manager.com/aircraft/show/107467132,17:45,21:29,310,"$196,458.00","$171,197.00",$552.25,"$45,856.34"
IAH - OKC,54580945191,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/54580945191,https://www.airlines-manager.com/aircraft/show/107467133,23:00,2:44,310,"$196,458.00","$171,197.00",$552.25,"$45,856.34"
IAH - OMA,54536069838,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/54536069838,https://www.airlines-manager.com/aircraft/show/104258211,2:45,7:59,310,"$328,759.00","$297,616.00",$960.05,"$56,869.30"
IAH - OMA,54536069839,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/54536069839,https://www.airlines-manager.com/aircraft/show/103534664,3:45,8:59,112,"$156,043.00","$135,992.00","$1,214.21","$25,985.73"
IAH - OMA,54551622451,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/54551622451,https://www.airlines-manager.com/aircraft/show/104258214,8:45,13:59,310,"$328,759.00","$297,616.00",$960.05,"$56,869.30"
IAH - OMA,54562128358,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/54562128358,https://www.airlines-manager.com/aircraft/show/104258213,14:00,19:14,310,"$328,759.00","$297,616.00",$960.05,"$56,869.30"
IAH - OMA,54571726850,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/54571726850,https://www.airlines-manager.com/aircraft/show/104258212,19:45,0:59,310,"$328,759.00","$297,616.00",$960.05,"$56,869.30"
IAH - ONT,54536069843,IAH-ANC-ONT 1,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/54536069843,https://www.airlines-manager.com/aircraft/show/108258010,2:45,9:59,310,"$463,433.00","$422,267.00","$1,362.15","$58,377.93"
IAH - ONT,54536069844,IAH-ANC-ONT 2,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/54536069844,https://www.airlines-manager.com/aircraft/show/108258011,4:45,11:59,310,"$463,433.00","$422,267.00","$1,362.15","$58,377.93"
IAH - ONT,54556941081,IAH-ANC-ONT 3,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/54556941081,https://www.airlines-manager.com/aircraft/show/108258012,12:00,19:14,310,"$463,433.00","$422,267.00","$1,362.15","$58,377.93"
IAH - ONT,54562128345,IAH-ANC-ONT 4,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/54562128345,https://www.airlines-manager.com/aircraft/show/108089220,14:00,21:14,310,"$463,433.00","$422,267.00","$1,362.15","$58,377.93"
IAH - ONT,54567120326,IAH-ANC-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/54567120326,https://www.airlines-manager.com/aircraft/show/108286957,16:00,23:14,198,"$349,825.00","$316,835.00","$1,600.18","$43,802.07"
IAH - ORD,54536069501,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/54536069501,https://www.airlines-manager.com/aircraft/show/90183181,0:15,5:59,310,"$363,079.00","$308,113.00",$993.91,"$53,740.64"
IAH - ORD,54545804671,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/54545804671,https://www.airlines-manager.com/aircraft/show/90183182,6:30,12:14,310,"$363,079.00","$308,113.00",$993.91,"$53,740.64"
IAH - ORD,54551622520,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/54551622520,https://www.airlines-manager.com/aircraft/show/101412921,10:00,15:44,0,"$114,458.00","$61,014.00",#DIV/0!,"$10,641.98"
IAH - ORD,54556941130,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/54556941130,https://www.airlines-manager.com/aircraft/show/90183183,13:00,18:44,310,"$363,079.00","$308,113.00",$993.91,"$53,740.64"
IAH - ORD,54562128418,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/54562128418,https://www.airlines-manager.com/aircraft/show/90140936,15:00,20:44,136,"$172,559.00","$138,123.00","$1,015.61","$24,091.22"
IAH - ORD,54571726765,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/54571726765,https://www.airlines-manager.com/aircraft/show/90183184,18:45,0:29,310,"$363,079.00","$308,113.00",$993.91,"$53,740.64"
IAH - ORD,54575909597,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/54575909597,https://www.airlines-manager.com/aircraft/show/90183180,20:45,2:29,310,"$363,079.00","$308,113.00",$993.91,"$53,740.64"
IAH - ORF,54536069417,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/54536069417,https://www.airlines-manager.com/aircraft/show/110582843,0:00,6:44,198,"$319,502.00","$289,849.00","$1,463.88","$43,046.88"
IAH - ORF,54536069418,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/54536069418,https://www.airlines-manager.com/aircraft/show/107467130,4:15,10:59,310,"$423,249.00","$386,247.00","$1,245.96","$57,363.42"
IAH - ORF,54545804765,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/54545804765,https://www.airlines-manager.com/aircraft/show/107467127,8:15,14:59,310,"$423,249.00","$386,247.00","$1,245.96","$57,363.42"
IAH - ORF,54556941143,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/54556941143,https://www.airlines-manager.com/aircraft/show/107467128,13:00,19:44,310,"$423,249.00","$386,247.00","$1,245.96","$57,363.42"
IAH - ORF,54575909525,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/54575909525,https://www.airlines-manager.com/aircraft/show/107467129,20:00,2:44,310,"$423,249.00","$386,247.00","$1,245.96","$57,363.42"
IAH - PBI,54536069810,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/54536069810,https://www.airlines-manager.com/aircraft/show/104717246,2:30,8:14,310,"$369,248.00","$334,512.00","$1,079.07","$58,345.12"
IAH - PBI,54556940975,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/54556940975,https://www.airlines-manager.com/aircraft/show/104717247,11:00,16:44,310,"$369,248.00","$334,512.00","$1,079.07","$58,345.12"
IAH - PBI,54562128245,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/54562128245,https://www.airlines-manager.com/aircraft/show/104743902,13:15,18:59,112,"$174,724.00","$152,218.00","$1,359.09","$26,549.65"
IAH - PBI,54567120342,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/54567120342,https://www.airlines-manager.com/aircraft/show/104717244,16:15,21:59,310,"$369,248.00","$334,512.00","$1,079.07","$58,345.12"
IAH - PBI,54575909697,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/54575909697,https://www.airlines-manager.com/aircraft/show/104717245,21:45,3:29,310,"$369,248.00","$334,512.00","$1,079.07","$58,345.12"
IAH - PDX,54536069854,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/54536069854,https://www.airlines-manager.com/aircraft/show/105562975,2:45,11:44,338,"$619,638.00","$571,536.00","$1,690.93","$63,621.82"
IAH - PDX,54536069855,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/54536069855,https://www.airlines-manager.com/aircraft/show/105562972,4:00,12:59,338,"$619,638.00","$571,536.00","$1,690.93","$63,621.82"
IAH - PDX,54536069856,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/54536069856,https://www.airlines-manager.com/aircraft/show/105562974,5:00,13:59,338,"$619,638.00","$571,536.00","$1,690.93","$63,621.82"
IAH - PDX,54556941088,IAH-SEA-DEN 6,ERJ-175,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/54556941088,https://www.airlines-manager.com/aircraft/show/105601215,12:00,21:14,112,"$269,877.00","$236,466.00","$2,111.30","$25,610.04"
IAH - PDX,54562128308,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/54562128308,https://www.airlines-manager.com/aircraft/show/105562973,14:00,22:59,338,"$619,638.00","$571,536.00","$1,690.93","$63,621.82"
IAH - PDX,54571726743,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/54571726743,https://www.airlines-manager.com/aircraft/show/105562971,18:30,3:29,338,"$619,638.00","$571,536.00","$1,690.93","$63,621.82"
IAH - PHL,54556941012,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/54556941012,https://www.airlines-manager.com/aircraft/show/106007216,11:00,18:14,338,"$501,281.00","$456,099.00","$1,349.41","$63,055.16"
IAH - PHL,54562128376,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/54562128376,https://www.airlines-manager.com/aircraft/show/106007215,14:15,21:29,338,"$501,281.00","$456,099.00","$1,349.41","$63,055.16"
IAH - PHL,54567120330,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/54567120330,https://www.airlines-manager.com/aircraft/show/107543798,16:00,23:14,0,"$122,690.00","$89,259.00",#DIV/0!,"$12,339.95"
IAH - PHL,54575909613,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/54575909613,https://www.airlines-manager.com/aircraft/show/106007214,21:00,4:14,338,"$501,281.00","$456,099.00","$1,349.41","$63,055.16"
IAH - PHL,54575909614,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/54575909614,https://www.airlines-manager.com/aircraft/show/106007217,21:30,4:44,338,"$501,281.00","$456,099.00","$1,349.41","$63,055.16"
IAH - PHL,54580945252,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/54580945252,https://www.airlines-manager.com/aircraft/show/106007213,23:45,6:59,338,"$501,281.00","$456,099.00","$1,349.41","$63,055.16"
IAH - PHX,54536069942,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/54536069942,https://www.airlines-manager.com/aircraft/show/96183549,4:00,9:59,320,"$379,088.00","$327,054.00","$1,022.04","$54,660.84"
IAH - PHX,54536069943,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/54536069943,https://www.airlines-manager.com/aircraft/show/96177955,5:00,10:59,320,"$379,088.00","$327,054.00","$1,022.04","$54,660.84"
IAH - PHX,54556941045,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/54556941045,https://www.airlines-manager.com/aircraft/show/82323704,11:30,17:29,112,"$179,363.00","$150,412.00","$1,342.96","$25,138.50"
IAH - PHX,54556941046,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/54556941046,https://www.airlines-manager.com/aircraft/show/96250652,11:45,17:44,320,"$379,088.00","$327,054.00","$1,022.04","$54,660.84"
IAH - PHX,54567120240,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/54567120240,https://www.airlines-manager.com/aircraft/show/96256511,15:30,21:29,320,"$379,088.00","$327,054.00","$1,022.04","$54,660.84"
IAH - PHX,54575909672,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/54575909672,https://www.airlines-manager.com/aircraft/show/95894466,21:30,3:29,320,"$379,088.00","$327,054.00","$1,022.04","$54,660.84"
IAH - PIT,54536069988,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/54536069988,https://www.airlines-manager.com/aircraft/show/100684073,5:00,11:29,310,"$405,248.00","$366,884.00","$1,183.50","$56,588.79"
IAH - PIT,54556941030,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/54556941030,https://www.airlines-manager.com/aircraft/show/100684074,11:15,17:44,310,"$405,248.00","$366,884.00","$1,183.50","$56,588.79"
IAH - PIT,54567120277,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/54567120277,https://www.airlines-manager.com/aircraft/show/110582845,16:00,22:29,198,"$306,127.00","$275,388.00","$1,390.85","$42,476.30"
IAH - PIT,54567120278,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/54567120278,https://www.airlines-manager.com/aircraft/show/100684071,17:15,23:44,310,"$405,248.00","$366,884.00","$1,183.50","$56,588.79"
IAH - PIT,54580945172,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/54580945172,https://www.airlines-manager.com/aircraft/show/100684072,22:45,5:14,310,"$405,248.00","$366,884.00","$1,183.50","$56,588.79"
IAH - PSP,54536069680,IAH-YEG-BUR 2,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/54536069680,https://www.airlines-manager.com/aircraft/show/117273343,1:30,8:29,310,"$450,598.00","$412,544.00","$1,330.79","$59,075.51"
IAH - PSP,54536069681,IAH-YEG-BUR 1,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/54536069681,https://www.airlines-manager.com/aircraft/show/117273344,3:45,10:44,310,"$450,598.00","$412,544.00","$1,330.79","$59,075.51"
IAH - PSP,54556940926,IAH-YEG-BUR 3,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/54556940926,https://www.airlines-manager.com/aircraft/show/117273342,11:00,17:59,310,"$450,598.00","$412,544.00","$1,330.79","$59,075.51"
IAH - PSP,54571726731,IAH-YEG-BUR 5,A321neo,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/54571726731,https://www.airlines-manager.com/aircraft/show/117273340,18:30,1:29,338,"$488,325.00","$451,854.00","$1,336.85","$64,704.63"
IAH - PVD,54536069833,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/54536069833,https://www.airlines-manager.com/aircraft/show/107467129,2:45,10:59,310,"$516,263.00","$474,753.00","$1,531.46","$57,662.31"
IAH - PVD,54545804683,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/54545804683,https://www.airlines-manager.com/aircraft/show/110582843,6:45,14:59,198,"$389,086.00","$355,811.00","$1,797.03","$43,215.91"
IAH - PVD,54556941145,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/54556941145,https://www.airlines-manager.com/aircraft/show/107467130,13:00,21:14,310,"$516,263.00","$474,753.00","$1,531.46","$57,662.31"
IAH - PVD,54567120395,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/54567120395,https://www.airlines-manager.com/aircraft/show/107467127,17:00,1:14,310,"$516,263.00","$474,753.00","$1,531.46","$57,662.31"
IAH - PVD,54571726852,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/54571726852,https://www.airlines-manager.com/aircraft/show/107467128,19:45,3:59,310,"$516,263.00","$474,753.00","$1,531.46","$57,662.31"
IAH - PVR,54536069867,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/54536069867,https://www.airlines-manager.com/aircraft/show/105099862,3:00,8:29,112,"$166,498.00","$145,084.00","$1,295.39","$26,459.09"
IAH - PVR,54551622427,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/54551622427,https://www.airlines-manager.com/aircraft/show/114266975,8:30,13:59,320,"$355,635.00","$318,001.00",$993.75,"$57,994.10"
IAH - PVR,54556941084,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/54556941084,https://www.airlines-manager.com/aircraft/show/113250059,12:00,17:29,320,"$355,635.00","$318,001.00",$993.75,"$57,994.10"
IAH - PVR,54571726679,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/54571726679,https://www.airlines-manager.com/aircraft/show/113114108,18:00,23:29,320,"$355,635.00","$318,001.00",$993.75,"$57,994.10"
IAH - PVR,54575909748,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/54575909748,https://www.airlines-manager.com/aircraft/show/114266974,22:00,3:29,320,"$355,635.00","$318,001.00",$993.75,"$57,994.10"
IAH - PWM,54545804747,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/54545804747,https://www.airlines-manager.com/aircraft/show/106014350,7:45,16:14,198,"$406,630.00","$372,446.00","$1,881.04","$43,903.26"
IAH - PWM,54556941014,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/54556941014,https://www.airlines-manager.com/aircraft/show/96691558,11:00,19:29,310,"$540,000.00","$497,359.00","$1,604.38","$58,627.78"
IAH - PWM,54562128456,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/54562128456,https://www.airlines-manager.com/aircraft/show/96694086,15:00,23:29,310,"$540,000.00","$497,359.00","$1,604.38","$58,627.78"
IAH - PWM,54571726812,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/54571726812,https://www.airlines-manager.com/aircraft/show/96692491,19:15,3:44,310,"$540,000.00","$497,359.00","$1,604.38","$58,627.78"
IAH - PWM,54580945092,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/54580945092,https://www.airlines-manager.com/aircraft/show/96692343,22:45,7:14,310,"$540,000.00","$497,359.00","$1,604.38","$58,627.78"
IAH - RAP,54536069790,IAH-GRR-MSN 1,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/54536069790,https://www.airlines-manager.com/aircraft/show/117273348,2:15,8:29,310,"$388,294.00","$354,046.00","$1,142.08","$56,798.82"
IAH - RAP,54536069791,IAH-GRR-MSN 4,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/54536069791,https://www.airlines-manager.com/aircraft/show/117273345,4:15,10:29,310,"$388,294.00","$354,046.00","$1,142.08","$56,798.82"
IAH - RAP,54562128329,IAH-GRR-MSN 3,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/54562128329,https://www.airlines-manager.com/aircraft/show/117273346,14:00,20:14,310,"$388,294.00","$354,046.00","$1,142.08","$56,798.82"
IAH - RAP,54575909523,IAH-GRR-MSN 2,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/54575909523,https://www.airlines-manager.com/aircraft/show/117273347,20:00,2:14,290,"$373,521.00","$339,854.00","$1,171.91","$54,522.03"
IAH - RDU,54536070001,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/54536070001,https://www.airlines-manager.com/aircraft/show/100684072,5:15,11:29,310,"$388,679.00","$351,875.00","$1,135.08","$56,450.53"
IAH - RDU,54556941047,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/54556941047,https://www.airlines-manager.com/aircraft/show/100684073,11:30,17:44,310,"$388,679.00","$351,875.00","$1,135.08","$56,450.53"
IAH - RDU,54571726644,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/54571726644,https://www.airlines-manager.com/aircraft/show/100684074,17:45,23:59,310,"$388,679.00","$351,875.00","$1,135.08","$56,450.53"
IAH - RDU,54580945055,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/54580945055,https://www.airlines-manager.com/aircraft/show/110582845,22:30,4:44,198,"$293,805.00","$264,316.00","$1,334.93","$42,403.64"
IAH - RDU,54580945056,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/54580945056,https://www.airlines-manager.com/aircraft/show/100684071,23:45,5:59,310,"$388,679.00","$351,875.00","$1,135.08","$56,450.53"
IAH - RIC,54536069857,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/54536069857,https://www.airlines-manager.com/aircraft/show/107467133,2:45,9:14,310,"$416,537.00","$380,223.00","$1,226.53","$58,646.22"
IAH - RIC,54556941096,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/54556941096,https://www.airlines-manager.com/aircraft/show/107467134,12:00,18:29,310,"$416,537.00","$380,223.00","$1,226.53","$58,646.22"
IAH - RIC,54562128269,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/54562128269,https://www.airlines-manager.com/aircraft/show/107467211,13:45,20:14,112,"$195,969.00","$172,163.00","$1,537.17","$26,554.70"
IAH - RIC,54567120250,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/54567120250,https://www.airlines-manager.com/aircraft/show/107467131,15:45,22:14,310,"$416,537.00","$380,223.00","$1,226.53","$58,646.22"
IAH - RIC,54575909679,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/54575909679,https://www.airlines-manager.com/aircraft/show/107467132,21:30,3:59,310,"$416,537.00","$380,223.00","$1,226.53","$58,646.22"
IAH - RNO,54536069659,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/54536069659,https://www.airlines-manager.com/aircraft/show/103882357,1:15,9:14,310,"$511,991.00","$468,883.00","$1,512.53","$58,732.73"
IAH - RNO,54536069660,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/54536069660,https://www.airlines-manager.com/aircraft/show/105099861,4:00,11:59,112,"$240,901.00","$212,369.00","$1,896.15","$26,601.54"
IAH - RNO,54536069661,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/54536069661,https://www.airlines-manager.com/aircraft/show/103882356,5:00,12:59,310,"$511,991.00","$468,883.00","$1,512.53","$58,732.73"
IAH - RNO,54556941173,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/54556941173,https://www.airlines-manager.com/aircraft/show/103882355,13:00,20:59,310,"$511,991.00","$468,883.00","$1,512.53","$58,732.73"
IAH - RNO,54567120392,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/54567120392,https://www.airlines-manager.com/aircraft/show/103882358,17:00,0:59,310,"$511,991.00","$468,883.00","$1,512.53","$58,732.73"
IAH - ROC,54536069529,IAH-SYR-ROC 3,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/54536069529,https://www.airlines-manager.com/aircraft/show/119525222,0:30,7:44,320,"$461,250.00","$418,447.00","$1,307.65","$57,849.82"
IAH - ROC,54556940911,IAH-SYR-ROC 2,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/54556940911,https://www.airlines-manager.com/aircraft/show/119525223,11:00,18:14,320,"$461,250.00","$418,447.00","$1,307.65","$57,849.82"
IAH - ROC,54556940912,IAH-SYR-ROC 5,ERJ-175,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/54556940912,https://www.airlines-manager.com/aircraft/show/119525249,12:00,19:14,112,"$218,107.00","$192,828.00","$1,721.68","$26,658.25"
IAH - ROC,54571726727,IAH-SYR-ROC 1,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/54571726727,https://www.airlines-manager.com/aircraft/show/119525224,18:30,1:44,320,"$461,250.00","$418,447.00","$1,307.65","$57,849.82"
IAH - ROC,54571726728,IAH-SYR-ROC 4,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/54571726728,https://www.airlines-manager.com/aircraft/show/119525221,19:30,2:44,320,"$461,250.00","$418,447.00","$1,307.65","$57,849.82"
IAH - RSW,54536069832,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/54536069832,https://www.airlines-manager.com/aircraft/show/104717244,2:45,8:14,310,"$349,506.00","$314,948.00","$1,015.96","$57,437.33"
IAH - RSW,54556940980,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/54556940980,https://www.airlines-manager.com/aircraft/show/104717245,11:00,16:29,310,"$349,506.00","$314,948.00","$1,015.96","$57,437.33"
IAH - RSW,54567120260,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/54567120260,https://www.airlines-manager.com/aircraft/show/104717246,15:45,21:14,310,"$349,506.00","$314,948.00","$1,015.96","$57,437.33"
IAH - RSW,54575909667,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/54575909667,https://www.airlines-manager.com/aircraft/show/104717247,21:30,2:59,310,"$349,506.00","$314,948.00","$1,015.96","$57,437.33"
IAH - RSW,54580945240,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/54580945240,https://www.airlines-manager.com/aircraft/show/104743902,23:45,5:14,112,"$165,422.00","$143,186.00","$1,278.45","$26,112.95"
IAH - SAN,54536069563,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/54536069563,https://www.airlines-manager.com/aircraft/show/98578921,0:45,7:59,320,"$452,539.00","$405,198.00","$1,266.24","$56,018.16"
IAH - SAN,54536069564,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/54536069564,https://www.airlines-manager.com/aircraft/show/98578922,4:15,11:29,320,"$452,539.00","$405,198.00","$1,266.24","$56,018.16"
IAH - SAN,54551622701,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/54551622701,https://www.airlines-manager.com/aircraft/show/105400635,10:15,17:29,112,"$214,317.00","$186,858.00","$1,668.38","$25,832.90"
IAH - SAN,54562128402,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/54562128402,https://www.airlines-manager.com/aircraft/show/98578923,15:00,22:14,320,"$452,539.00","$405,198.00","$1,266.24","$56,018.16"
IAH - SAN,54571726660,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/54571726660,https://www.airlines-manager.com/aircraft/show/98578920,18:00,1:14,320,"$452,539.00","$405,198.00","$1,266.24","$56,018.16"
IAH - SAN,54571726661,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/54571726661,https://www.airlines-manager.com/aircraft/show/98578924,19:45,2:59,320,"$452,539.00","$405,198.00","$1,266.24","$56,018.16"
IAH - SAT,54536069708,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/54536069708,https://www.airlines-manager.com/aircraft/show/106499070,1:30,4:14,198,"$90,236.00","$72,357.00",$365.44,"$26,472.07"
IAH - SAT,54545804640,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/54545804640,https://www.airlines-manager.com/aircraft/show/101412921,6:00,8:44,0,"$44,058.00","$22,031.00",#DIV/0!,"$8,060.12"
IAH - SAT,54551622508,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/54551622508,https://www.airlines-manager.com/aircraft/show/99093332,9:45,12:29,320,"$119,393.00","$93,029.00",$290.72,"$34,035.00"
IAH - SAT,54562128302,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/54562128302,https://www.airlines-manager.com/aircraft/show/99093333,14:00,16:44,320,"$119,393.00","$93,029.00",$290.72,"$34,035.00"
IAH - SAT,54571726662,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/54571726662,https://www.airlines-manager.com/aircraft/show/99093334,18:00,20:44,320,"$119,393.00","$93,029.00",$290.72,"$34,035.00"
IAH - SAT,54580945223,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/54580945223,https://www.airlines-manager.com/aircraft/show/99093335,23:30,2:14,320,"$119,393.00","$93,029.00",$290.72,"$34,035.00"
IAH - SAV,54536069783,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/54536069783,https://www.airlines-manager.com/aircraft/show/110424758,2:00,7:29,320,"$342,511.00","$306,705.00",$958.45,"$55,934.04"
IAH - SAV,54551622421,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/54551622421,https://www.airlines-manager.com/aircraft/show/110424759,8:30,13:59,320,"$342,511.00","$306,705.00",$958.45,"$55,934.04"
IAH - SAV,54556941148,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/54556941148,https://www.airlines-manager.com/aircraft/show/110424760,13:00,18:29,320,"$342,511.00","$306,705.00",$958.45,"$55,934.04"
IAH - SAV,54575909705,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/54575909705,https://www.airlines-manager.com/aircraft/show/110424761,21:45,3:14,320,"$342,511.00","$306,705.00",$958.45,"$55,934.04"
IAH - SBA,54536069662,IAH-SNA-SBA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/54536069662,https://www.airlines-manager.com/aircraft/show/119525227,1:15,8:59,270,"$435,979.00","$406,533.00","$1,505.68","$52,568.92"
IAH - SBA,54536069663,IAH-SNA-SBA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/54536069663,https://www.airlines-manager.com/aircraft/show/119525228,3:15,10:59,270,"$435,979.00","$406,533.00","$1,505.68","$52,568.92"
IAH - SBA,54556940898,IAH-SNA-SBA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/54556940898,https://www.airlines-manager.com/aircraft/show/119525226,11:00,18:44,270,"$435,979.00","$406,533.00","$1,505.68","$52,568.92"
IAH - SBA,54556940899,IAH-SNA-SBA-5,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/54556940899,https://www.airlines-manager.com/aircraft/show/119525229,13:00,20:44,270,"$435,979.00","$406,533.00","$1,505.68","$52,568.92"
IAH - SBA,54571726712,IAH-SNA-SBA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/54571726712,https://www.airlines-manager.com/aircraft/show/119525225,18:15,1:59,270,"$435,979.00","$406,533.00","$1,505.68","$52,568.92"
IAH - SCL,54536069712,IAH 56A-1 E,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/54536069712,https://www.airlines-manager.com/aircraft/show/106676232,1:30,19:59,648,"$2,288,301.00","$2,132,185.00","$3,290.41","$115,357.17"
IAH - SCL,54545804677,IAH 56A-3 E,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/54545804677,https://www.airlines-manager.com/aircraft/show/106676234,6:30,0:59,648,"$2,288,301.00","$2,132,185.00","$3,290.41","$115,357.17"
IAH - SCL,54567120457,IAH 56A-5 E,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/54567120457,https://www.airlines-manager.com/aircraft/show/106676236,17:30,11:59,648,"$2,288,301.00","$2,132,185.00","$3,290.41","$115,357.17"
IAH - SDF,54536069936,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/54536069936,https://www.airlines-manager.com/aircraft/show/107467132,4:00,9:14,310,"$328,899.00","$296,346.00",$955.95,"$56,626.62"
IAH - SDF,54556941070,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/54556941070,https://www.airlines-manager.com/aircraft/show/107467133,12:00,17:14,310,"$328,899.00","$296,346.00",$955.95,"$56,626.62"
IAH - SDF,54571726737,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/54571726737,https://www.airlines-manager.com/aircraft/show/107467134,18:30,23:44,310,"$328,899.00","$296,346.00",$955.95,"$56,626.62"
IAH - SDF,54575909542,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/54575909542,https://www.airlines-manager.com/aircraft/show/107467211,20:15,1:29,112,"$156,193.00","$135,286.00","$1,207.91","$25,850.83"
IAH - SDF,54580945034,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/54580945034,https://www.airlines-manager.com/aircraft/show/107467131,22:15,3:29,310,"$328,899.00","$296,346.00",$955.95,"$56,626.62"
IAH - SEA,54536069913,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/54536069913,https://www.airlines-manager.com/aircraft/show/105562971,3:30,12:44,338,"$643,742.00","$588,384.00","$1,740.78","$63,723.90"
IAH - SEA,54536069914,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/54536069914,https://www.airlines-manager.com/aircraft/show/105562973,4:30,13:44,338,"$643,742.00","$588,384.00","$1,740.78","$63,723.90"
IAH - SEA,54556941162,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/54556941162,https://www.airlines-manager.com/aircraft/show/105562972,13:00,22:14,338,"$643,742.00","$588,384.00","$1,740.78","$63,723.90"
IAH - SEA,54562128309,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/54562128309,https://www.airlines-manager.com/aircraft/show/105562974,14:00,23:14,338,"$643,742.00","$588,384.00","$1,740.78","$63,723.90"
IAH - SEA,54567120448,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/54567120448,https://www.airlines-manager.com/aircraft/show/105562975,17:30,2:44,338,"$643,742.00","$588,384.00","$1,740.78","$63,723.90"
IAH - SEA,54575909656,IAH-SEA-DEN 6,ERJ-175,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/54575909656,https://www.airlines-manager.com/aircraft/show/105601215,21:15,6:44,112,"$279,368.00","$241,480.00","$2,156.07","$25,463.62"
IAH - SJC,54536069870,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/54536069870,https://www.airlines-manager.com/aircraft/show/96694086,3:00,11:14,310,"$531,297.00","$485,668.00","$1,566.67","$58,988.02"
IAH - SJC,54556941013,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/54556941013,https://www.airlines-manager.com/aircraft/show/96692491,11:00,19:14,310,"$531,297.00","$485,668.00","$1,566.67","$58,988.02"
IAH - SJC,54562128379,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/54562128379,https://www.airlines-manager.com/aircraft/show/96692343,14:30,22:44,310,"$531,297.00","$485,668.00","$1,566.67","$58,988.02"
IAH - SJC,54580945189,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/54580945189,https://www.airlines-manager.com/aircraft/show/96691558,23:00,7:14,310,"$531,297.00","$485,668.00","$1,566.67","$58,988.02"
IAH - SJC,54580945190,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/54580945190,https://www.airlines-manager.com/aircraft/show/106014350,23:30,7:44,198,"$399,774.00","$363,202.00","$1,834.35","$44,113.60"
IAH - SJD,54536069761,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/54536069761,https://www.airlines-manager.com/aircraft/show/114266975,1:45,7:44,320,"$380,962.00","$342,124.00","$1,069.14","$57,179.50"
IAH - SJD,54536069762,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/54536069762,https://www.airlines-manager.com/aircraft/show/113250059,5:15,11:14,320,"$380,962.00","$342,124.00","$1,069.14","$57,179.50"
IAH - SJD,54556941082,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/54556941082,https://www.airlines-manager.com/aircraft/show/113114108,12:00,17:59,320,"$380,962.00","$342,124.00","$1,069.14","$57,179.50"
IAH - SJD,54567120310,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/54567120310,https://www.airlines-manager.com/aircraft/show/114266974,16:00,21:59,320,"$380,962.00","$342,124.00","$1,069.14","$57,179.50"
IAH - SJD,54575909619,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/54575909619,https://www.airlines-manager.com/aircraft/show/105099862,21:00,2:59,108,"$173,491.00","$151,362.00","$1,401.50","$25,297.27"
IAH - SLC,54536069848,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/54536069848,https://www.airlines-manager.com/aircraft/show/93094698,2:45,9:29,310,"$424,254.00","$380,767.00","$1,228.28","$56,549.55"
IAH - SLC,54536069849,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/54536069849,https://www.airlines-manager.com/aircraft/show/93100455,4:45,11:29,112,"$199,641.00","$171,464.00","$1,530.93","$25,464.95"
IAH - SLC,54551622528,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/54551622528,https://www.airlines-manager.com/aircraft/show/93094699,10:00,16:44,310,"$424,254.00","$380,767.00","$1,228.28","$56,549.55"
IAH - SLC,54556941110,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/54556941110,https://www.airlines-manager.com/aircraft/show/93094695,12:00,18:44,310,"$424,254.00","$380,767.00","$1,228.28","$56,549.55"
IAH - SLC,54562128459,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/54562128459,https://www.airlines-manager.com/aircraft/show/93094696,15:15,21:59,310,"$424,254.00","$380,767.00","$1,228.28","$56,549.55"
IAH - SLC,54575909638,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/54575909638,https://www.airlines-manager.com/aircraft/show/93094697,21:00,3:44,310,"$424,254.00","$380,767.00","$1,228.28","$56,549.55"
IAH - SMF,54536069802,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/54536069802,https://www.airlines-manager.com/aircraft/show/99093335,2:15,10:29,320,"$529,867.00","$480,638.00","$1,501.99","$58,377.09"
IAH - SMF,54536069803,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/54536069803,https://www.airlines-manager.com/aircraft/show/106499070,4:15,12:29,198,"$399,187.00","$363,798.00","$1,837.36","$44,185.99"
IAH - SMF,54556941191,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/54556941191,https://www.airlines-manager.com/aircraft/show/99093332,13:00,21:14,320,"$529,867.00","$480,638.00","$1,501.99","$58,377.09"
IAH - SMF,54567120382,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/54567120382,https://www.airlines-manager.com/aircraft/show/99093333,16:45,0:59,320,"$529,867.00","$480,638.00","$1,501.99","$58,377.09"
IAH - SMF,54575909603,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/54575909603,https://www.airlines-manager.com/aircraft/show/99093334,20:45,4:59,320,"$529,867.00","$480,638.00","$1,501.99","$58,377.09"
IAH - SNA,54536069758,IAH-SNA-SBA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/54536069758,https://www.airlines-manager.com/aircraft/show/119525226,1:45,8:59,270,"$420,397.00","$391,303.00","$1,449.27","$54,097.19"
IAH - SNA,54536069759,IAH-SYR-ROC 5,ERJ-175,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/54536069759,https://www.airlines-manager.com/aircraft/show/119525249,2:45,9:59,112,"$220,091.00","$194,796.00","$1,739.25","$26,930.32"
IAH - SNA,54536069760,IAH-SNA-SBA-5,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/54536069760,https://www.airlines-manager.com/aircraft/show/119525229,3:45,10:59,270,"$420,397.00","$391,303.00","$1,449.27","$54,097.19"
IAH - SNA,54556940900,IAH-SNA-SBA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/54556940900,https://www.airlines-manager.com/aircraft/show/119525225,11:00,18:14,270,"$420,397.00","$391,303.00","$1,449.27","$54,097.19"
IAH - SNA,54571726690,IAH-SNA-SBA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/54571726690,https://www.airlines-manager.com/aircraft/show/119525227,18:00,1:14,270,"$420,397.00","$391,303.00","$1,449.27","$54,097.19"
IAH - SNA,54575909513,IAH-SNA-SBA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/54575909513,https://www.airlines-manager.com/aircraft/show/119525228,20:00,3:14,270,"$420,397.00","$391,303.00","$1,449.27","$54,097.19"
IAH - STL,54536069658,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/54536069658,https://www.airlines-manager.com/aircraft/show/88725601,1:15,5:59,310,"$299,834.00","$267,563.00",$863.11,"$56,527.39"
IAH - STL,54545804776,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/54545804776,https://www.airlines-manager.com/aircraft/show/103600702,8:15,12:59,310,"$299,834.00","$267,563.00",$863.11,"$56,527.39"
IAH - STL,54562128362,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/54562128362,https://www.airlines-manager.com/aircraft/show/103600701,14:00,18:44,310,"$299,834.00","$267,563.00",$863.11,"$56,527.39"
IAH - STL,54562128363,IAH-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/54562128363,https://www.airlines-manager.com/aircraft/show/96990010,15:00,19:44,112,"$142,579.00","$122,049.00","$1,089.72","$25,785.00"
IAH - STL,54575909564,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/54575909564,https://www.airlines-manager.com/aircraft/show/103600700,20:15,0:59,310,"$299,834.00","$267,563.00",$863.11,"$56,527.39"
IAH - STL,54575909565,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/54575909565,https://www.airlines-manager.com/aircraft/show/110582844,21:45,2:29,198,"$227,848.00","$202,002.00","$1,020.21","$42,676.48"
IAH - SYR,54536069506,IAH-SYR-ROC 2,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/54536069506,https://www.airlines-manager.com/aircraft/show/119525223,0:15,7:44,320,"$474,124.00","$429,839.00","$1,343.25","$57,439.51"
IAH - SYR,54556940913,IAH-SYR-ROC 1,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/54556940913,https://www.airlines-manager.com/aircraft/show/119525224,11:00,18:29,320,"$474,124.00","$429,839.00","$1,343.25","$57,439.51"
IAH - SYR,54556940914,IAH-SYR-ROC 4,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/54556940914,https://www.airlines-manager.com/aircraft/show/119525221,12:00,19:29,320,"$474,124.00","$429,839.00","$1,343.25","$57,439.51"
IAH - SYR,54567120415,IAH-SYR-ROC 3,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/54567120415,https://www.airlines-manager.com/aircraft/show/119525222,17:00,0:29,320,"$474,124.00","$429,839.00","$1,343.25","$57,439.51"
IAH - SYR,54571726828,IAH-SYR-ROC 5,ERJ-175,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/54571726828,https://www.airlines-manager.com/aircraft/show/119525249,19:15,2:44,112,"$224,239.00","$198,033.00","$1,768.15","$26,463.21"
IAH - TPA,54536069964,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/54536069964,https://www.airlines-manager.com/aircraft/show/93094699,4:15,9:29,310,"$326,295.00","$291,073.00",$938.95,"$55,619.04"
IAH - TPA,54545804662,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/54545804662,https://www.airlines-manager.com/aircraft/show/93094695,6:15,11:29,310,"$326,295.00","$291,073.00",$938.95,"$55,619.04"
IAH - TPA,54551622525,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/54551622525,https://www.airlines-manager.com/aircraft/show/93094696,10:00,15:14,310,"$326,295.00","$291,073.00",$938.95,"$55,619.04"
IAH - TPA,54567120273,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/54567120273,https://www.airlines-manager.com/aircraft/show/93094697,15:45,20:59,310,"$326,295.00","$291,073.00",$938.95,"$55,619.04"
IAH - TPA,54575909678,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/54575909678,https://www.airlines-manager.com/aircraft/show/93094698,21:30,2:44,310,"$326,295.00","$291,073.00",$938.95,"$55,619.04"
IAH - TPA,54580945232,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/54580945232,https://www.airlines-manager.com/aircraft/show/93100455,23:30,4:44,107,"$152,102.00","$129,766.00","$1,212.77","$24,796.05"
IAH - TUL,54536069550,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/54536069550,https://www.airlines-manager.com/aircraft/show/82543907,0:30,4:14,112,"$93,654.00","$77,440.00",$691.43,"$20,742.86"
IAH - TUL,54536069551,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/54536069551,https://www.airlines-manager.com/aircraft/show/114373409,3:30,7:14,310,"$202,768.00","$176,997.00",$570.96,"$47,409.91"
IAH - TUL,54551622509,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/54551622509,https://www.airlines-manager.com/aircraft/show/114373410,9:45,13:29,310,"$202,768.00","$176,997.00",$570.96,"$47,409.91"
IAH - TUL,54562128404,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/54562128404,https://www.airlines-manager.com/aircraft/show/113994196,15:00,18:44,310,"$202,768.00","$176,997.00",$570.96,"$47,409.91"
IAH - TUL,54575909546,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/54575909546,https://www.airlines-manager.com/aircraft/show/86385103,20:15,23:59,310,"$202,768.00","$176,997.00",$570.96,"$47,409.91"
IAH - TUS,54545804586,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/54545804586,https://www.airlines-manager.com/aircraft/show/100684074,5:30,11:14,310,"$358,693.00","$324,614.00","$1,047.14","$56,618.72"
IAH - TUS,54551622704,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/54551622704,https://www.airlines-manager.com/aircraft/show/110582845,10:15,15:59,198,"$272,008.00","$244,705.00","$1,235.88","$42,681.10"
IAH - TUS,54556941044,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/54556941044,https://www.airlines-manager.com/aircraft/show/100684071,11:30,17:14,310,"$358,693.00","$324,614.00","$1,047.14","$56,618.72"
IAH - TUS,54567120396,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/54567120396,https://www.airlines-manager.com/aircraft/show/100684072,17:00,22:44,310,"$358,693.00","$324,614.00","$1,047.14","$56,618.72"
IAH - TUS,54580945216,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/54580945216,https://www.airlines-manager.com/aircraft/show/100684073,23:15,4:59,310,"$358,693.00","$324,614.00","$1,047.14","$56,618.72"
IAH - TYS,54536069804,IAH-GRR-MSN 2,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/54536069804,https://www.airlines-manager.com/aircraft/show/117273347,2:15,7:14,310,"$325,239.00","$295,080.00",$951.87,"$59,213.38"
IAH - TYS,54551622425,IAH-GRR-MSN 1,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/54551622425,https://www.airlines-manager.com/aircraft/show/117273348,8:30,13:29,310,"$325,239.00","$295,080.00",$951.87,"$59,213.38"
IAH - TYS,54556940928,IAH-GRR-MSN 4,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/54556940928,https://www.airlines-manager.com/aircraft/show/117273345,11:00,15:59,310,"$325,239.00","$295,080.00",$951.87,"$59,213.38"
IAH - TYS,54575909548,IAH-GRR-MSN 3,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/54575909548,https://www.airlines-manager.com/aircraft/show/117273346,20:15,1:14,310,"$325,239.00","$295,080.00",$951.87,"$59,213.38"
IAH - UIO,54536069556,IAH 84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/54536069556,https://www.airlines-manager.com/aircraft/show/89124076,0:30,11:14,932,"$1,795,179.00","$1,639,785.00","$1,759.43","$152,775.00"
IAH - UIO,54562128246,IAH 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/54562128246,https://www.airlines-manager.com/aircraft/show/88905141,13:15,23:59,932,"$1,795,179.00","$1,639,785.00","$1,759.43","$152,775.00"
IAH - YEG,54536069700,IAH-YEG-BUR 5,A321neo,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/54536069700,https://www.airlines-manager.com/aircraft/show/117273340,1:30,10:44,338,"$640,637.00","$594,021.00","$1,757.46","$64,334.40"
IAH - YEG,54551622424,IAH-YEG-BUR 2,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/54551622424,https://www.airlines-manager.com/aircraft/show/117273343,8:30,17:44,310,"$591,637.00","$542,704.00","$1,750.66","$58,776.61"
IAH - YEG,54556940927,IAH-YEG-BUR 1,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/54556940927,https://www.airlines-manager.com/aircraft/show/117273344,11:00,20:14,310,"$591,637.00","$542,704.00","$1,750.66","$58,776.61"
IAH - YEG,54567120428,IAH-YEG-BUR 4,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/54567120428,https://www.airlines-manager.com/aircraft/show/117273341,17:15,2:29,310,"$591,637.00","$542,704.00","$1,750.66","$58,776.61"
IAH - YEG,54571726693,IAH-YEG-BUR 3,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/54571726693,https://www.airlines-manager.com/aircraft/show/117273342,18:00,3:14,310,"$591,637.00","$542,704.00","$1,750.66","$58,776.61"
IAH - YOW,54536069889,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/54536069889,https://www.airlines-manager.com/aircraft/show/113114108,3:15,11:14,320,"$508,793.00","$461,136.00","$1,441.05","$57,762.34"
IAH - YOW,54545804760,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/54545804760,https://www.airlines-manager.com/aircraft/show/114266974,8:00,15:59,320,"$508,793.00","$461,136.00","$1,441.05","$57,762.34"
IAH - YOW,54556941163,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/54556941163,https://www.airlines-manager.com/aircraft/show/105099862,13:00,20:59,112,"$238,579.00","$210,374.00","$1,878.34","$26,351.65"
IAH - YOW,54571726658,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/54571726658,https://www.airlines-manager.com/aircraft/show/114266975,17:45,1:44,320,"$508,793.00","$461,136.00","$1,441.05","$57,762.34"
IAH - YOW,54575909647,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/54575909647,https://www.airlines-manager.com/aircraft/show/113250059,21:15,5:14,320,"$508,793.00","$461,136.00","$1,441.05","$57,762.34"
IAH - YUL,54536069575,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/54536069575,https://www.airlines-manager.com/aircraft/show/114266980,0:45,8:44,400,"$682,424.00","$624,483.00","$1,561.21","$78,223.34"
IAH - YUL,54536069576,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/54536069576,https://www.airlines-manager.com/aircraft/show/114266979,2:00,9:59,400,"$682,424.00","$624,483.00","$1,561.21","$78,223.34"
IAH - YUL,54556941065,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/54556941065,https://www.airlines-manager.com/aircraft/show/114266978,12:00,19:59,400,"$682,424.00","$624,483.00","$1,561.21","$78,223.34"
IAH - YUL,54575909606,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/54575909606,https://www.airlines-manager.com/aircraft/show/114266977,20:45,4:44,400,"$682,424.00","$624,483.00","$1,561.21","$78,223.34"
IAH - YVR,54536069610,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/54536069610,https://www.airlines-manager.com/aircraft/show/97076946,1:00,10:29,400,"$774,150.00","$706,088.00","$1,765.22","$74,455.68"
IAH - YVR,54536069611,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/54536069611,https://www.airlines-manager.com/aircraft/show/97076943,4:00,13:29,400,"$774,150.00","$706,088.00","$1,765.22","$74,455.68"
IAH - YVR,54556941207,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/54556941207,https://www.airlines-manager.com/aircraft/show/97076944,13:00,22:29,400,"$774,150.00","$706,088.00","$1,765.22","$74,455.68"
IAH - YVR,54567120281,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/54567120281,https://www.airlines-manager.com/aircraft/show/97026605,16:00,1:44,136,"$285,820.00","$249,912.00","$1,837.59","$25,675.89"
IAH - YVR,54575909540,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/54575909540,https://www.airlines-manager.com/aircraft/show/97076945,20:00,5:29,400,"$774,150.00","$706,088.00","$1,765.22","$74,455.68"
IAH - YVR,54580945195,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/54580945195,https://www.airlines-manager.com/aircraft/show/97076942,23:00,8:29,400,"$774,150.00","$706,088.00","$1,765.22","$74,455.68"
IAH - YYC,54536069653,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/54536069653,https://www.airlines-manager.com/aircraft/show/114266978,1:15,9:59,400,"$742,774.00","$680,022.00","$1,700.06","$77,865.11"
IAH - YYC,54556941064,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/54556941064,https://www.airlines-manager.com/aircraft/show/114266977,12:00,20:44,400,"$742,774.00","$680,022.00","$1,700.06","$77,865.11"
IAH - YYC,54567120311,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/54567120311,https://www.airlines-manager.com/aircraft/show/114266980,16:00,0:44,400,"$742,774.00","$680,022.00","$1,700.06","$77,865.11"
IAH - YYC,54567120312,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/54567120312,https://www.airlines-manager.com/aircraft/show/114266979,17:15,1:59,400,"$742,774.00","$680,022.00","$1,700.06","$77,865.11"
IAH - YYZ,54536069904,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/54536069904,https://www.airlines-manager.com/aircraft/show/97076944,3:30,10:29,400,"$572,430.00","$513,782.00","$1,284.46","$73,572.60"
IAH - YYZ,54545804688,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/54545804688,https://www.airlines-manager.com/aircraft/show/97026605,6:45,13:44,136,"$211,434.00","$180,891.00","$1,330.08","$25,903.25"
IAH - YYZ,54556941208,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/54556941208,https://www.airlines-manager.com/aircraft/show/97076945,13:00,19:59,400,"$572,430.00","$513,782.00","$1,284.46","$73,572.60"
IAH - YYZ,54567120315,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/54567120315,https://www.airlines-manager.com/aircraft/show/97076942,16:00,22:59,400,"$572,430.00","$513,782.00","$1,284.46","$73,572.60"
IAH - YYZ,54571726695,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/54571726695,https://www.airlines-manager.com/aircraft/show/97076946,18:00,0:59,400,"$572,430.00","$513,782.00","$1,284.46","$73,572.60"
IAH - YYZ,54575909643,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/54575909643,https://www.airlines-manager.com/aircraft/show/97076943,21:00,3:59,400,"$572,430.00","$513,782.00","$1,284.46","$73,572.60"
MIA - ABQ,54536069645,MIA-IAD-TUS 1,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/54536069645,https://www.airlines-manager.com/aircraft/show/97556721,1:15,9:59,310,"$547,286.00","$499,445.00","$1,611.11","$57,188.36"
MIA - ABQ,54536069646,MIA-IAD-TUS 4,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/54536069646,https://www.airlines-manager.com/aircraft/show/97556718,4:15,12:59,310,"$547,286.00","$499,445.00","$1,611.11","$57,188.36"
MIA - ABQ,54551622687,MIA-IAD-TUS 3,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/54551622687,https://www.airlines-manager.com/aircraft/show/97556719,10:00,18:44,310,"$547,286.00","$499,445.00","$1,611.11","$57,188.36"
MIA - ABQ,54571726831,MIA-IAD-TUS 2,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/54571726831,https://www.airlines-manager.com/aircraft/show/97556720,19:30,4:14,310,"$547,286.00","$499,445.00","$1,611.11","$57,188.36"
MIA - ABQ,54580945054,MIA-IAD-TUS 5,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/54580945054,https://www.airlines-manager.com/aircraft/show/97556716,22:30,7:14,310,"$547,286.00","$499,445.00","$1,611.11","$57,188.36"
MIA - ACC,54562128369,MIA 84B-2 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/54562128369,https://www.airlines-manager.com/aircraft/show/106676226,14:15,11:59,962,"$3,564,950.00","$3,254,637.00","$3,383.20","$149,753.24"
MIA - ACC,54580945072,MIA 84B-4 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/54580945072,https://www.airlines-manager.com/aircraft/show/106676228,22:45,20:29,962,"$3,564,950.00","$3,254,637.00","$3,383.20","$149,753.24"
MIA - ALB,54536069905,MIA-DSM-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/54536069905,https://www.airlines-manager.com/aircraft/show/113101233,3:30,10:14,320,"$427,642.00","$386,268.00","$1,207.09","$57,366.53"
MIA - ALB,54556941159,MIA-DSM-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/54556941159,https://www.airlines-manager.com/aircraft/show/113101230,13:00,19:44,320,"$427,642.00","$386,268.00","$1,207.09","$57,366.53"
MIA - ALB,54567120316,MIA-DSM-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/54567120316,https://www.airlines-manager.com/aircraft/show/100049776,16:00,22:59,112,"$202,282.00","$178,019.00","$1,589.46","$25,491.98"
MIA - ALB,54575909559,MIA-DSM-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/54575909559,https://www.airlines-manager.com/aircraft/show/111064081,20:15,2:59,320,"$427,642.00","$386,268.00","$1,207.09","$57,366.53"
MIA - ALB,54580945204,MIA-DSM-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/54580945204,https://www.airlines-manager.com/aircraft/show/113101228,23:15,5:59,320,"$427,642.00","$386,268.00","$1,207.09","$57,366.53"
MIA - ALG,54567120391,MIA 84B-7 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/54567120391,https://www.airlines-manager.com/aircraft/show/106676231,17:00,12:29,962,"$3,237,342.00","$2,951,810.00","$3,068.41","$151,504.36"
MIA - ALG,54575909580,MIA 84B-5 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/54575909580,https://www.airlines-manager.com/aircraft/show/106676229,20:30,15:59,962,"$3,237,342.00","$2,951,810.00","$3,068.41","$151,504.36"
MIA - ANU,54545804678,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/54545804678,https://www.airlines-manager.com/aircraft/show/110114297,6:30,13:44,228,"$355,422.00","$324,739.00","$1,424.29","$44,894.79"
MIA - ANU,54551622435,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/54551622435,https://www.airlines-manager.com/aircraft/show/110114298,8:30,15:44,228,"$355,422.00","$324,739.00","$1,424.29","$44,894.79"
MIA - ANU,54556941060,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/54556941060,https://www.airlines-manager.com/aircraft/show/110114295,12:00,19:14,228,"$355,422.00","$324,739.00","$1,424.29","$44,894.79"
MIA - ANU,54556941061,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/54556941061,https://www.airlines-manager.com/aircraft/show/110114296,13:00,20:14,228,"$355,422.00","$324,739.00","$1,424.29","$44,894.79"
MIA - ANU,54567120369,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/54567120369,https://www.airlines-manager.com/aircraft/show/110114300,16:30,23:44,228,"$355,422.00","$324,739.00","$1,424.29","$44,894.79"
MIA - ANU,54580945225,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/54580945225,https://www.airlines-manager.com/aircraft/show/110114299,23:30,6:44,228,"$355,422.00","$324,739.00","$1,424.29","$44,894.79"
MIA - ATL,54556941057,MIA-LAX-DEN 4,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/54556941057,https://www.airlines-manager.com/aircraft/show/91126652,12:00,16:29,400,"$365,129.00","$300,884.00",$752.21,"$67,111.67"
MIA - ATL,54556941058,MIA-LAX-DEN 2,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/54556941058,https://www.airlines-manager.com/aircraft/show/91126650,13:00,17:29,400,"$365,129.00","$300,884.00",$752.21,"$67,111.67"
MIA - ATL,54571726840,MIA-LAX-DEN 1,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/54571726840,https://www.airlines-manager.com/aircraft/show/91126649,19:30,23:59,400,"$365,129.00","$300,884.00",$752.21,"$67,111.67"
MIA - ATL,54575909645,MIA-LAX-DEN 3,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/54575909645,https://www.airlines-manager.com/aircraft/show/91126651,21:00,1:29,400,"$365,129.00","$300,884.00",$752.21,"$67,111.67"
MIA - AUA,54536069874,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/54536069874,https://www.airlines-manager.com/aircraft/show/107121795,3:00,9:29,320,"$403,740.00","$363,920.00","$1,137.25","$56,131.62"
MIA - AUA,54536069875,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/54536069875,https://www.airlines-manager.com/aircraft/show/107121798,4:30,10:59,320,"$403,740.00","$363,920.00","$1,137.25","$56,131.62"
MIA - AUA,54556940945,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/54556940945,https://www.airlines-manager.com/aircraft/show/107121797,11:00,17:29,320,"$403,740.00","$363,920.00","$1,137.25","$56,131.62"
MIA - AUA,54571726649,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/54571726649,https://www.airlines-manager.com/aircraft/show/107121796,17:45,0:14,320,"$403,740.00","$363,920.00","$1,137.25","$56,131.62"
MIA - AUA,54575909703,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/54575909703,https://www.airlines-manager.com/aircraft/show/107121799,21:45,4:14,241,"$313,495.00","$276,694.00","$1,148.11","$42,677.74"
MIA - AUS,54536069850,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/54536069850,https://www.airlines-manager.com/aircraft/show/99920625,2:45,9:14,320,"$402,281.00","$358,582.00","$1,120.57","$55,308.28"
MIA - AUS,54551622686,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/54551622686,https://www.airlines-manager.com/aircraft/show/99920626,10:00,16:29,320,"$402,281.00","$358,582.00","$1,120.57","$55,308.28"
MIA - AUS,54562128317,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/54562128317,https://www.airlines-manager.com/aircraft/show/82323689,14:00,20:29,112,"$189,894.00","$164,835.00","$1,471.74","$25,424.42"
MIA - AUS,54562128318,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/54562128318,https://www.airlines-manager.com/aircraft/show/99920623,14:45,21:14,320,"$402,281.00","$358,582.00","$1,120.57","$55,308.28"
MIA - AUS,54575909602,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/54575909602,https://www.airlines-manager.com/aircraft/show/99920624,20:45,3:14,320,"$402,281.00","$358,582.00","$1,120.57","$55,308.28"
MIA - BDA,54536069879,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/54536069879,https://www.airlines-manager.com/aircraft/show/104034457,3:00,9:14,228,"$294,998.00","$267,472.00","$1,173.12","$42,909.95"
MIA - BDA,54536069880,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/54536069880,https://www.airlines-manager.com/aircraft/show/104034459,3:45,9:59,228,"$294,998.00","$267,472.00","$1,173.12","$42,909.95"
MIA - BDA,54551622568,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/54551622568,https://www.airlines-manager.com/aircraft/show/104034460,10:00,16:14,228,"$294,998.00","$267,472.00","$1,173.12","$42,909.95"
MIA - BDA,54556940971,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/54556940971,https://www.airlines-manager.com/aircraft/show/99326789,11:00,17:14,228,"$294,998.00","$267,472.00","$1,173.12","$42,909.95"
MIA - BDA,54567120259,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/54567120259,https://www.airlines-manager.com/aircraft/show/104034461,15:45,21:59,228,"$294,998.00","$267,472.00","$1,173.12","$42,909.95"
MIA - BDA,54575909658,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/54575909658,https://www.airlines-manager.com/aircraft/show/104034458,21:15,3:29,228,"$294,998.00","$267,472.00","$1,173.12","$42,909.95"
MIA - BDL,54536069868,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/54536069868,https://www.airlines-manager.com/aircraft/show/107763565,3:00,9:44,320,"$426,255.00","$383,974.00","$1,199.92","$57,025.84"
MIA - BDL,54545804749,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/54545804749,https://www.airlines-manager.com/aircraft/show/107467213,8:00,14:44,112,"$200,632.00","$176,005.00","$1,571.47","$26,139.36"
MIA - BDL,54562128270,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/54562128270,https://www.airlines-manager.com/aircraft/show/107763561,13:45,20:29,320,"$426,255.00","$383,974.00","$1,199.92","$57,025.84"
MIA - BDL,54562128271,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/54562128271,https://www.airlines-manager.com/aircraft/show/107763566,14:00,20:44,320,"$426,255.00","$383,974.00","$1,199.92","$57,025.84"
MIA - BDL,54575909571,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/54575909571,https://www.airlines-manager.com/aircraft/show/107763562,20:30,3:14,320,"$426,255.00","$383,974.00","$1,199.92","$57,025.84"
MIA - BFF,54536069583,MIA-PSP-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/54536069583,https://www.airlines-manager.com/aircraft/show/116789634,0:45,9:29,320,"$554,176.00","$504,013.00","$1,575.04","$57,711.41"
MIA - BFF,54536069584,MIA-PSP-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/54536069584,https://www.airlines-manager.com/aircraft/show/116789632,1:00,9:44,320,"$554,176.00","$504,013.00","$1,575.04","$57,711.41"
MIA - BFF,54551622547,MIA-PSP-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/54551622547,https://www.airlines-manager.com/aircraft/show/116789633,10:00,18:44,320,"$554,176.00","$504,013.00","$1,575.04","$57,711.41"
MIA - BFF,54556941140,MIA-PSP-BFF 5,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/54556941140,https://www.airlines-manager.com/aircraft/show/116789630,13:00,21:44,320,"$554,176.00","$504,013.00","$1,575.04","$57,711.41"
MIA - BFF,54575909596,MIA-PSP-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/54575909596,https://www.airlines-manager.com/aircraft/show/116789631,20:45,5:29,320,"$554,176.00","$504,013.00","$1,575.04","$57,711.41"
MIA - BGI,54536069836,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/54536069836,https://www.airlines-manager.com/aircraft/show/107121796,2:45,10:59,320,"$515,730.00","$466,906.00","$1,459.08","$56,709.23"
MIA - BGI,54545804690,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/54545804690,https://www.airlines-manager.com/aircraft/show/107121799,6:45,14:59,320,"$515,730.00","$466,906.00","$1,459.08","$56,709.23"
MIA - BGI,54556941072,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/54556941072,https://www.airlines-manager.com/aircraft/show/107121795,12:00,20:14,320,"$515,730.00","$466,906.00","$1,459.08","$56,709.23"
MIA - BGI,54562128263,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/54562128263,https://www.airlines-manager.com/aircraft/show/107121798,13:30,21:44,320,"$515,730.00","$466,906.00","$1,459.08","$56,709.23"
MIA - BGI,54575909516,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/54575909516,https://www.airlines-manager.com/aircraft/show/107121797,20:00,4:14,320,"$515,730.00","$466,906.00","$1,459.08","$56,709.23"
MIA - BHM,54536069928,MIA-CID-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/54536069928,https://www.airlines-manager.com/aircraft/show/116789651,3:45,8:29,310,"$301,638.00","$272,460.00",$878.90,"$57,561.97"
MIA - BHM,54551622677,MIA-CID-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/54551622677,https://www.airlines-manager.com/aircraft/show/116789652,10:00,14:44,310,"$301,638.00","$272,460.00",$878.90,"$57,561.97"
MIA - BHM,54567120435,MIA-CID-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/54567120435,https://www.airlines-manager.com/aircraft/show/116789653,17:15,21:59,310,"$301,638.00","$272,460.00",$878.90,"$57,561.97"
MIA - BHM,54580945074,MIA-CID-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/54580945074,https://www.airlines-manager.com/aircraft/show/116789650,22:45,3:29,310,"$301,638.00","$272,460.00",$878.90,"$57,561.97"
MIA - BIL,54551622556,MIA-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/54551622556,https://www.airlines-manager.com/aircraft/show/116789629,10:00,20:14,320,"$631,281.00","$575,789.00","$1,799.34","$56,266.03"
MIA - BIL,54556941079,MIA-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/54556941079,https://www.airlines-manager.com/aircraft/show/116789628,12:00,22:14,320,"$631,281.00","$575,789.00","$1,799.34","$56,266.03"
MIA - BIL,54562128284,MIA-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/54562128284,https://www.airlines-manager.com/aircraft/show/116789627,14:00,0:14,320,"$631,281.00","$575,789.00","$1,799.34","$56,266.03"
MIA - BIL,54575909684,MIA-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/54575909684,https://www.airlines-manager.com/aircraft/show/116789626,21:30,7:44,320,"$631,281.00","$575,789.00","$1,799.34","$56,266.03"
MIA - BIL,54580945243,MIA-BIL-BZN 5,ERJ-175,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/54580945243,https://www.airlines-manager.com/aircraft/show/116042637,23:45,9:59,112,"$296,899.00","$263,087.00","$2,348.99","$25,708.83"
MIA - BNA,54536069592,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/54536069592,https://www.airlines-manager.com/aircraft/show/103534663,0:45,5:59,112,"$157,224.00","$135,746.00","$1,212.02","$25,938.73"
MIA - BNA,54536069593,MIA-BOI-BNA 4,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/54536069593,https://www.airlines-manager.com/aircraft/show/103775657,1:15,6:29,320,"$330,750.00","$292,499.00",$914.06,"$55,891.53"
MIA - BNA,54536069594,MIA-BOI-BNA 3,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/54536069594,https://www.airlines-manager.com/aircraft/show/104020880,4:45,9:59,320,"$330,750.00","$292,499.00",$914.06,"$55,891.53"
MIA - BNA,54551622673,MIA-BOI-BNA 2,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/54551622673,https://www.airlines-manager.com/aircraft/show/104022609,10:00,15:14,320,"$330,750.00","$292,499.00",$914.06,"$55,891.53"
MIA - BNA,54556941074,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/54556941074,https://www.airlines-manager.com/aircraft/show/103534663,12:00,17:14,112,"$157,224.00","$135,746.00","$1,212.02","$25,938.73"
MIA - BNA,54575909650,MIA-BOI-BNA 1,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/54575909650,https://www.airlines-manager.com/aircraft/show/104133006,21:15,2:29,320,"$330,750.00","$292,499.00",$914.06,"$55,891.53"
MIA - BOI,54536069732,MIA-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/54536069732,https://www.airlines-manager.com/aircraft/show/106339154,1:45,12:59,198,"$523,215.00","$479,346.00","$2,420.94","$42,671.75"
MIA - BOI,54551622674,MIA-BOI-BNA 1,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/54551622674,https://www.airlines-manager.com/aircraft/show/104133006,10:00,21:14,320,"$695,244.00","$635,092.00","$1,984.66","$56,536.38"
MIA - BOI,54562128298,MIA-BOI-BNA 4,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/54562128298,https://www.airlines-manager.com/aircraft/show/103775657,14:00,1:14,320,"$695,244.00","$635,092.00","$1,984.66","$56,536.38"
MIA - BOI,54567120453,MIA-BOI-BNA 3,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/54567120453,https://www.airlines-manager.com/aircraft/show/104020880,17:30,4:44,320,"$695,244.00","$635,092.00","$1,984.66","$56,536.38"
MIA - BOI,54580945086,MIA-BOI-BNA 2,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/54580945086,https://www.airlines-manager.com/aircraft/show/104022609,22:45,9:59,320,"$695,244.00","$635,092.00","$1,984.66","$56,536.38"
MIA - BOS,54536069784,MIA-SJU-BOS 5,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/54536069784,https://www.airlines-manager.com/aircraft/show/91352059,2:00,8:59,310,"$443,989.00","$399,580.00","$1,288.97","$57,219.09"
MIA - BOS,54536069785,MIA-SJU-BOS 1,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/54536069785,https://www.airlines-manager.com/aircraft/show/91352063,5:00,11:59,310,"$443,989.00","$399,580.00","$1,288.97","$57,219.09"
MIA - BOS,54556941031,MIA-SJU-BOS 4,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/54556941031,https://www.airlines-manager.com/aircraft/show/91352060,11:15,18:14,310,"$443,989.00","$399,580.00","$1,288.97","$57,219.09"
MIA - BOS,54567120360,MIA-SJU-BOS 2,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/54567120360,https://www.airlines-manager.com/aircraft/show/91352062,16:30,23:29,310,"$443,989.00","$399,580.00","$1,288.97","$57,219.09"
MIA - BOS,54571726799,MIA-SJU-BOS 3,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/54571726799,https://www.airlines-manager.com/aircraft/show/91352061,19:00,1:59,310,"$443,989.00","$399,580.00","$1,288.97","$57,219.09"
MIA - BOS,54575909554,MIA-SJU-BOS 6 B,A319-100,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/54575909554,https://www.airlines-manager.com/aircraft/show/110582841,20:15,3:14,198,"$335,807.00","$300,226.00","$1,516.29","$42,991.79"
MIA - BTV,54536069860,MIA-DSM-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/54536069860,https://www.airlines-manager.com/aircraft/show/111064081,3:00,10:14,320,"$459,413.00","$416,541.00","$1,301.69","$57,586.31"
MIA - BTV,54551622460,MIA-DSM-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/54551622460,https://www.airlines-manager.com/aircraft/show/113101228,8:45,15:59,320,"$459,413.00","$416,541.00","$1,301.69","$57,586.31"
MIA - BTV,54556941160,MIA-DSM-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/54556941160,https://www.airlines-manager.com/aircraft/show/113101233,13:00,20:14,320,"$459,413.00","$416,541.00","$1,301.69","$57,586.31"
MIA - BTV,54571726846,MIA-DSM-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/54571726846,https://www.airlines-manager.com/aircraft/show/113101230,19:45,2:59,320,"$459,413.00","$416,541.00","$1,301.69","$57,586.31"
MIA - BTV,54580945192,MIA-DSM-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/54580945192,https://www.airlines-manager.com/aircraft/show/100049776,23:00,6:29,109,"$215,686.00","$190,490.00","$1,747.61","$25,455.23"
MIA - BUF,54536069863,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/54536069863,https://www.airlines-manager.com/aircraft/show/107763561,3:00,9:44,320,"$424,121.00","$382,306.00","$1,194.71","$56,778.12"
MIA - BUF,54536069864,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/54536069864,https://www.airlines-manager.com/aircraft/show/107763566,3:15,9:59,320,"$424,121.00","$382,306.00","$1,194.71","$56,778.12"
MIA - BUF,54556940938,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/54556940938,https://www.airlines-manager.com/aircraft/show/107763562,11:00,17:44,320,"$424,121.00","$382,306.00","$1,194.71","$56,778.12"
MIA - BUF,54567120441,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/54567120441,https://www.airlines-manager.com/aircraft/show/107763565,17:30,0:14,320,"$424,121.00","$382,306.00","$1,194.71","$56,778.12"
MIA - BUF,54575909655,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/54575909655,https://www.airlines-manager.com/aircraft/show/107467213,21:15,3:59,112,"$199,651.00","$175,283.00","$1,565.03","$26,032.13"
MIA - BUR,54536069845,MIA-BUR-PVD 4,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/54536069845,https://www.airlines-manager.com/aircraft/show/108834806,2:45,13:59,310,"$701,092.00","$648,187.00","$2,090.93","$57,702.11"
MIA - BUR,54556940936,MIA-BUR-PVD 1,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/54556940936,https://www.airlines-manager.com/aircraft/show/108834803,11:00,22:14,310,"$701,092.00","$648,187.00","$2,090.93","$57,702.11"
MIA - BUR,54562128344,MIA-BUR-PVD 3,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/54562128344,https://www.airlines-manager.com/aircraft/show/108834805,14:00,1:14,310,"$701,092.00","$648,187.00","$2,090.93","$57,702.11"
MIA - BUR,54575909511,MIA-BUR-PVD 5 B,A319-100,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/54575909511,https://www.airlines-manager.com/aircraft/show/108834807,20:00,7:14,198,"$525,980.00","$483,555.00","$2,442.20","$43,046.44"
MIA - BUR,54575909512,MIA-BUR-PVD 2,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/54575909512,https://www.airlines-manager.com/aircraft/show/108834804,20:45,7:59,310,"$701,092.00","$648,187.00","$2,090.93","$57,702.11"
MIA - BWI,54536069940,MIA-BWI-YYZ 4,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/54536069940,https://www.airlines-manager.com/aircraft/show/92153442,4:00,9:44,310,"$364,242.00","$325,933.00","$1,051.40","$56,848.78"
MIA - BWI,54545804646,MIA-BWI-YYZ 5,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/54545804646,https://www.airlines-manager.com/aircraft/show/92153439,6:00,11:44,310,"$364,242.00","$325,933.00","$1,051.40","$56,848.78"
MIA - BWI,54551622531,MIA-BWI-YYZ 1,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/54551622531,https://www.airlines-manager.com/aircraft/show/92153443,10:00,15:44,310,"$364,242.00","$325,933.00","$1,051.40","$56,848.78"
MIA - BWI,54556941136,MIA-BWI-YYZ 2,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/54556941136,https://www.airlines-manager.com/aircraft/show/92153440,13:00,18:44,310,"$364,242.00","$325,933.00","$1,051.40","$56,848.78"
MIA - BWI,54575909642,MIA-BWI-YYZ 3,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/54575909642,https://www.airlines-manager.com/aircraft/show/92153441,21:00,2:44,310,"$364,242.00","$325,933.00","$1,051.40","$56,848.78"
MIA - BWI,54580945201,MIA-BWI-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/54580945201,https://www.airlines-manager.com/aircraft/show/92137503,23:00,4:44,85,"$121,050.00","$100,291.00","$1,179.89","$17,492.62"
MIA - BZN,54536069521,MIA-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/54536069521,https://www.airlines-manager.com/aircraft/show/116789627,0:15,10:44,320,"$653,842.00","$597,646.00","$1,867.64","$57,009.16"
MIA - BZN,54556940958,MIA-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/54556940958,https://www.airlines-manager.com/aircraft/show/116789626,11:00,21:29,320,"$653,842.00","$597,646.00","$1,867.64","$57,009.16"
MIA - BZN,54556940959,MIA-BIL-BZN 5,ERJ-175,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/54556940959,https://www.airlines-manager.com/aircraft/show/116042637,13:00,23:44,112,"$308,087.00","$273,608.00","$2,442.93","$25,491.43"
MIA - BZN,54575909553,MIA-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/54575909553,https://www.airlines-manager.com/aircraft/show/116789629,20:15,6:44,320,"$653,842.00","$597,646.00","$1,867.64","$57,009.16"
MIA - BZN,54580945017,MIA-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/54580945017,https://www.airlines-manager.com/aircraft/show/116789628,22:15,8:44,320,"$653,842.00","$597,646.00","$1,867.64","$57,009.16"
MIA - CAK,54536069777,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/54536069777,https://www.airlines-manager.com/aircraft/show/115493370,2:00,8:14,310,"$383,530.00","$349,760.00","$1,128.26","$56,111.23"
MIA - CAK,54545804766,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/54545804766,https://www.airlines-manager.com/aircraft/show/115493371,8:15,14:29,310,"$383,530.00","$349,760.00","$1,128.26","$56,111.23"
MIA - CAK,54556940972,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/54556940972,https://www.airlines-manager.com/aircraft/show/115493372,11:00,17:14,310,"$383,530.00","$349,760.00","$1,128.26","$56,111.23"
MIA - CAK,54571726663,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/54571726663,https://www.airlines-manager.com/aircraft/show/114912307,18:00,0:14,112,"$181,169.00","$159,079.00","$1,420.35","$25,520.70"
MIA - CAK,54575909641,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/54575909641,https://www.airlines-manager.com/aircraft/show/115493373,21:00,3:14,273,"$356,402.00","$323,693.00","$1,185.69","$51,929.36"
MIA - CHS,54536069883,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/54536069883,https://www.airlines-manager.com/aircraft/show/94886626,3:15,7:14,310,"$225,037.00","$199,045.00",$642.08,"$49,969.46"
MIA - CHS,54536069884,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/54536069884,https://www.airlines-manager.com/aircraft/show/107577220,4:15,8:14,0,"$60,700.00","$43,128.00",#DIV/0!,"$10,827.11"
MIA - CHS,54551622478,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/54551622478,https://www.airlines-manager.com/aircraft/show/96692674,9:00,12:59,310,"$225,037.00","$199,045.00",$642.08,"$49,969.46"
MIA - CHS,54556941025,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/54556941025,https://www.airlines-manager.com/aircraft/show/105601657,11:00,14:59,112,"$104,611.00","$88,159.00",$787.13,"$22,131.97"
MIA - CHS,54562128352,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/54562128352,https://www.airlines-manager.com/aircraft/show/94886625,14:00,17:59,310,"$225,037.00","$199,045.00",$642.08,"$49,969.46"
MIA - CHS,54575909601,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/54575909601,https://www.airlines-manager.com/aircraft/show/94886629,20:45,0:44,290,"$202,846.00","$178,199.00",$614.48,"$44,736.15"
MIA - CID,54536069647,MIA-CID-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/54536069647,https://www.airlines-manager.com/aircraft/show/116789652,1:15,8:29,310,"$453,870.00","$416,411.00","$1,343.26","$57,568.34"
MIA - CID,54551622565,MIA-CID-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/54551622565,https://www.airlines-manager.com/aircraft/show/116789653,10:00,17:14,310,"$453,870.00","$416,411.00","$1,343.26","$57,568.34"
MIA - CID,54567120244,MIA-CID-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/54567120244,https://www.airlines-manager.com/aircraft/show/116789650,15:30,22:44,310,"$453,870.00","$416,411.00","$1,343.26","$57,568.34"
MIA - CID,54575909579,MIA-CID-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/54575909579,https://www.airlines-manager.com/aircraft/show/116789651,20:30,3:44,310,"$453,870.00","$416,411.00","$1,343.26","$57,568.34"
MIA - CLE,54536069530,MIA-COS-CVG 5,ERJ-175,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/54536069530,https://www.airlines-manager.com/aircraft/show/103534665,0:30,6:44,112,"$188,033.00","$164,249.00","$1,466.51","$26,350.11"
MIA - CLE,54536069531,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/54536069531,https://www.airlines-manager.com/aircraft/show/103684630,4:15,10:29,320,"$398,480.00","$357,223.00","$1,116.32","$57,308.50"
MIA - CLE,54545804748,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/54545804748,https://www.airlines-manager.com/aircraft/show/103365574,7:45,13:59,320,"$398,480.00","$357,223.00","$1,116.32","$57,308.50"
MIA - CLE,54556941174,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/54556941174,https://www.airlines-manager.com/aircraft/show/103684632,13:00,19:14,320,"$398,480.00","$357,223.00","$1,116.32","$57,308.50"
MIA - CLE,54575909600,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/54575909600,https://www.airlines-manager.com/aircraft/show/103684631,20:45,2:59,320,"$398,480.00","$357,223.00","$1,116.32","$57,308.50"
MIA - CLT,54536069965,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/54536069965,https://www.airlines-manager.com/aircraft/show/82543123,4:15,8:59,112,"$142,241.00","$118,334.00","$1,056.55","$25,000.14"
MIA - CLT,54551622534,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/54551622534,https://www.airlines-manager.com/aircraft/show/91600939,10:00,14:44,310,"$298,699.00","$260,750.00",$841.13,"$55,088.03"
MIA - CLT,54567120296,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/54567120296,https://www.airlines-manager.com/aircraft/show/91600936,16:00,20:44,310,"$298,699.00","$260,750.00",$841.13,"$55,088.03"
MIA - CLT,54571726648,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/54571726648,https://www.airlines-manager.com/aircraft/show/91600937,17:45,22:29,310,"$298,699.00","$260,750.00",$841.13,"$55,088.03"
MIA - CLT,54580945057,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/54580945057,https://www.airlines-manager.com/aircraft/show/91600935,22:30,3:14,310,"$298,699.00","$260,750.00",$841.13,"$55,088.03"
MIA - CLT,54580945058,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/54580945058,https://www.airlines-manager.com/aircraft/show/91600938,23:30,4:14,310,"$298,699.00","$260,750.00",$841.13,"$55,088.03"
MIA - CMH,54536069742,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/54536069742,https://www.airlines-manager.com/aircraft/show/88494374,1:45,7:44,320,"$372,456.00","$332,435.00","$1,038.86","$55,560.17"
MIA - CMH,54545804720,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/54545804720,https://www.airlines-manager.com/aircraft/show/88494378,7:15,13:14,320,"$372,456.00","$332,435.00","$1,038.86","$55,560.17"
MIA - CMH,54562128294,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/54562128294,https://www.airlines-manager.com/aircraft/show/91806233,14:00,19:59,320,"$372,456.00","$332,435.00","$1,038.86","$55,560.17"
MIA - CMH,54571726688,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/54571726688,https://www.airlines-manager.com/aircraft/show/110582842,18:00,23:59,198,"$282,748.00","$254,479.00","$1,285.25","$42,531.31"
MIA - CMH,54575909623,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/54575909623,https://www.airlines-manager.com/aircraft/show/88239556,21:00,2:59,320,"$372,456.00","$332,435.00","$1,038.86","$55,560.17"
MIA - CMN,54536069989,MIA 84B-4 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/54536069989,https://www.airlines-manager.com/aircraft/show/106676228,5:00,22:44,962,"$2,958,140.00","$2,699,471.00","$2,806.10","$152,225.81"
MIA - CMN,54575909588,MIA 84B-1 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/54575909588,https://www.airlines-manager.com/aircraft/show/106676225,20:30,14:14,962,"$2,958,140.00","$2,699,471.00","$2,806.10","$152,225.81"
MIA - COS,54545804674,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/54545804674,https://www.airlines-manager.com/aircraft/show/103684631,6:30,14:59,320,"$543,615.00","$492,225.00","$1,538.20","$58,022.59"
MIA - COS,54551622681,MIA-COS-CVG 5,ERJ-175,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/54551622681,https://www.airlines-manager.com/aircraft/show/103534665,10:00,18:44,112,"$256,350.00","$225,769.00","$2,015.79","$25,851.41"
MIA - COS,54562128299,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/54562128299,https://www.airlines-manager.com/aircraft/show/103684630,14:00,22:29,320,"$543,615.00","$492,225.00","$1,538.20","$58,022.59"
MIA - COS,54567120445,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/54567120445,https://www.airlines-manager.com/aircraft/show/103365574,17:30,1:59,320,"$543,615.00","$492,225.00","$1,538.20","$58,022.59"
MIA - COS,54580945079,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/54580945079,https://www.airlines-manager.com/aircraft/show/103684632,22:45,7:14,320,"$543,615.00","$492,225.00","$1,538.20","$58,022.59"
MIA - CPT,54536069995,MIA 84A-6 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/54536069995,https://www.airlines-manager.com/aircraft/show/93731916,5:00,10:29,1124,"$5,606,472.00","$5,211,864.00","$4,636.89","$950,491.91"
MIA - CPT,54571726685,MIA 84A-2 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/54571726685,https://www.airlines-manager.com/aircraft/show/93686968,18:00,23:29,1124,"$5,606,472.00","$5,211,864.00","$4,636.89","$950,491.91"
MIA - CUN,54545804595,MIA-PSP-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/54545804595,https://www.airlines-manager.com/aircraft/show/116789631,5:30,9:44,320,"$250,489.00","$215,136.00",$672.30,"$50,819.53"
MIA - CUN,54551622504,MIA-PSP-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/54551622504,https://www.airlines-manager.com/aircraft/show/116789634,9:30,13:44,320,"$250,489.00","$215,136.00",$672.30,"$50,819.53"
MIA - CUN,54551622505,MIA-PSP-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/54551622505,https://www.airlines-manager.com/aircraft/show/116789632,10:00,14:14,320,"$250,489.00","$215,136.00",$672.30,"$50,819.53"
MIA - CUN,54571726759,MIA-PSP-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/54571726759,https://www.airlines-manager.com/aircraft/show/116789633,18:45,22:59,320,"$250,489.00","$215,136.00",$672.30,"$50,819.53"
MIA - CUN,54575909707,MIA-PSP-BFF 5,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/54575909707,https://www.airlines-manager.com/aircraft/show/116789630,21:45,1:59,314,"$246,228.00","$210,982.00",$671.92,"$49,838.27"
MIA - CUR,54536069958,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/54536069958,https://www.airlines-manager.com/aircraft/show/107121797,4:15,10:59,320,"$413,130.00","$371,117.00","$1,159.74","$55,116.39"
MIA - CUR,54556940944,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/54556940944,https://www.airlines-manager.com/aircraft/show/107121796,11:00,17:44,320,"$413,130.00","$371,117.00","$1,159.74","$55,116.39"
MIA - CUR,54562128409,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/54562128409,https://www.airlines-manager.com/aircraft/show/107121799,15:00,21:44,320,"$413,130.00","$371,117.00","$1,159.74","$55,116.39"
MIA - CUR,54575909566,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/54575909566,https://www.airlines-manager.com/aircraft/show/107121795,20:15,2:59,320,"$413,130.00","$371,117.00","$1,159.74","$55,116.39"
MIA - CUR,54575909567,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/54575909567,https://www.airlines-manager.com/aircraft/show/107121798,21:45,4:29,295,"$383,660.00","$342,652.00","$1,161.53","$50,888.91"
MIA - CVG,54536069772,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/54536069772,https://www.airlines-manager.com/aircraft/show/103365574,2:00,7:44,320,"$367,096.00","$325,215.00","$1,016.30","$56,723.55"
MIA - CVG,54545804728,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/54545804728,https://www.airlines-manager.com/aircraft/show/103684632,7:15,12:59,320,"$367,096.00","$325,215.00","$1,016.30","$56,723.55"
MIA - CVG,54551622518,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/54551622518,https://www.airlines-manager.com/aircraft/show/107527976,10:00,15:44,0,"$96,826.00","$70,947.00",#DIV/0!,"$12,374.48"
MIA - CVG,54562128395,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/54562128395,https://www.airlines-manager.com/aircraft/show/103684631,15:00,20:44,320,"$367,096.00","$325,215.00","$1,016.30","$56,723.55"
MIA - CVG,54571726780,MIA-COS-CVG 5,ERJ-175,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/54571726780,https://www.airlines-manager.com/aircraft/show/103534665,18:45,0:29,112,"$173,197.00","$149,488.00","$1,334.71","$26,073.49"
MIA - CVG,54580945062,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/54580945062,https://www.airlines-manager.com/aircraft/show/103684630,22:30,4:14,320,"$367,096.00","$325,215.00","$1,016.30","$56,723.55"
MIA - DEN,54536069685,MIA-LAX-DEN 3,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/54536069685,https://www.airlines-manager.com/aircraft/show/91126651,1:30,9:59,400,"$727,404.00","$641,772.00","$1,604.43","$75,650.92"
MIA - DEN,54536069686,MIA-LAX-DEN 4,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/54536069686,https://www.airlines-manager.com/aircraft/show/91126652,3:30,11:59,400,"$727,404.00","$641,772.00","$1,604.43","$75,650.92"
MIA - DEN,54556940903,MIA-LAX-DEN 1,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/54556940903,https://www.airlines-manager.com/aircraft/show/91126649,11:00,19:29,400,"$727,404.00","$641,772.00","$1,604.43","$75,650.92"
MIA - DEN,54567120443,MIA-LAX-DEN 2,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/54567120443,https://www.airlines-manager.com/aircraft/show/91126650,17:30,1:59,400,"$727,404.00","$641,772.00","$1,604.43","$75,650.92"
MIA - DEN,54580945037,MIA-LAX-DEN 5 E,A319-100,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/54580945037,https://www.airlines-manager.com/aircraft/show/115181776,22:15,6:59,216,"$426,690.00","$370,298.00","$1,714.34","$42,400.53"
MIA - DFW,54536069920,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/54536069920,https://www.airlines-manager.com/aircraft/show/91600936,3:30,9:59,310,"$408,515.00","$352,594.00","$1,137.40","$54,384.68"
MIA - DFW,54551622536,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/54551622536,https://www.airlines-manager.com/aircraft/show/91600935,10:00,16:29,310,"$408,515.00","$352,594.00","$1,137.40","$54,384.68"
MIA - DFW,54556940909,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/54556940909,https://www.airlines-manager.com/aircraft/show/91600938,11:00,17:29,310,"$408,515.00","$352,594.00","$1,137.40","$54,384.68"
MIA - DFW,54567120249,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/54567120249,https://www.airlines-manager.com/aircraft/show/82543123,15:45,22:14,112,"$192,378.00","$156,871.00","$1,400.63","$24,196.04"
MIA - DFW,54575909673,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/54575909673,https://www.airlines-manager.com/aircraft/show/91600939,21:30,3:59,310,"$408,515.00","$352,594.00","$1,137.40","$54,384.68"
MIA - DFW,54580945066,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/54580945066,https://www.airlines-manager.com/aircraft/show/91600937,22:30,4:59,310,"$408,515.00","$352,594.00","$1,137.40","$54,384.68"
MIA - DSM,54536069862,MIA-DSM-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/54536069862,https://www.airlines-manager.com/aircraft/show/113101230,3:00,10:14,320,"$455,904.00","$412,875.00","$1,290.23","$57,079.49"
MIA - DSM,54551622459,MIA-DSM-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/54551622459,https://www.airlines-manager.com/aircraft/show/100049776,8:45,15:59,112,"$216,032.00","$190,648.00","$1,702.21","$26,356.87"
MIA - DSM,54556941157,MIA-DSM-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/54556941157,https://www.airlines-manager.com/aircraft/show/111064081,13:00,20:14,320,"$455,904.00","$412,875.00","$1,290.23","$57,079.49"
MIA - DSM,54567120317,MIA-DSM-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/54567120317,https://www.airlines-manager.com/aircraft/show/113101228,16:00,23:14,320,"$455,904.00","$412,875.00","$1,290.23","$57,079.49"
MIA - DSM,54575909558,MIA-DSM-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/54575909558,https://www.airlines-manager.com/aircraft/show/113101233,20:15,3:29,320,"$455,904.00","$412,875.00","$1,290.23","$57,079.49"
MIA - DSS,54536069407,MIA 84B-7 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/54536069407,https://www.airlines-manager.com/aircraft/show/106676231,0:00,16:59,962,"$2,849,310.00","$2,603,298.00","$2,706.13","$153,285.46"
MIA - DSS,54556941102,MIA 84B-3 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/54556941102,https://www.airlines-manager.com/aircraft/show/106676227,12:00,4:59,962,"$2,849,310.00","$2,603,298.00","$2,706.13","$153,285.46"
MIA - DTW,54536069714,MIA-PDX-DTW 3,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/54536069714,https://www.airlines-manager.com/aircraft/show/89943713,1:30,7:59,320,"$411,222.00","$358,900.00","$1,121.56","$55,357.33"
MIA - DTW,54536069715,MIA-PDX-DTW 4,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/54536069715,https://www.airlines-manager.com/aircraft/show/89943712,2:30,8:59,320,"$411,222.00","$358,900.00","$1,121.56","$55,357.33"
MIA - DTW,54551622690,MIA-PDX-DTW 2,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/54551622690,https://www.airlines-manager.com/aircraft/show/89943714,10:00,16:29,320,"$411,222.00","$358,900.00","$1,121.56","$55,357.33"
MIA - DTW,54562128305,MIA-PDX-DTW 5,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/54562128305,https://www.airlines-manager.com/aircraft/show/89943711,14:00,20:29,320,"$411,222.00","$358,900.00","$1,121.56","$55,357.33"
MIA - DTW,54575909688,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/54575909688,https://www.airlines-manager.com/aircraft/show/107577220,21:45,4:14,0,"$108,921.00","$76,799.00",$0.00,"$11,845.60"
MIA - DTW,54580945069,MIA-PDX-DTW 1,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/54580945069,https://www.airlines-manager.com/aircraft/show/89943715,22:30,4:59,320,"$411,222.00","$358,900.00","$1,121.56","$55,357.33"
MIA - ELP,54545804763,MIA-ELP-MCI 5 B,A319-100,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/54545804763,https://www.airlines-manager.com/aircraft/show/105093924,8:15,16:44,198,"$401,184.00","$365,173.00","$1,844.31","$43,045.93"
MIA - ELP,54551622551,MIA-ELP-MCI 1,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/54551622551,https://www.airlines-manager.com/aircraft/show/91806234,10:00,18:29,320,"$531,824.00","$481,715.00","$1,505.36","$56,783.69"
MIA - ELP,54567120346,MIA-ELP-MCI 3,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/54567120346,https://www.airlines-manager.com/aircraft/show/91806232,16:15,0:44,320,"$531,824.00","$481,715.00","$1,505.36","$56,783.69"
MIA - ELP,54567120347,MIA-ELP-MCI 4,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/54567120347,https://www.airlines-manager.com/aircraft/show/91806231,17:00,1:29,320,"$531,824.00","$481,715.00","$1,505.36","$56,783.69"
MIA - ELP,54580945211,MIA-ELP-MCI 2,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/54580945211,https://www.airlines-manager.com/aircraft/show/91806235,23:15,7:44,320,"$531,824.00","$481,715.00","$1,505.36","$56,783.69"
MIA - EUG,54536069717,MIA-EUG-SYR 4,737-900ER,https://www.airlines-manager.com/network/showline/50424905,https://www.airlines-manager.com/network/showflight/54536069717,https://www.airlines-manager.com/aircraft/show/119652480,1:30,13:59,320,"$766,698.00","$703,221.00","$2,197.57","$56,332.79"
MIA - EUG,54562128276,MIA-EUG-SYR 1,737-900ER,https://www.airlines-manager.com/network/showline/50424905,https://www.airlines-manager.com/network/showflight/54562128276,https://www.airlines-manager.com/aircraft/show/119652483,14:00,2:29,320,"$766,698.00","$703,221.00","$2,197.57","$56,332.79"
MIA - EUG,54571726773,MIA-EUG-SYR 3,737-900ER,https://www.airlines-manager.com/network/showline/50424905,https://www.airlines-manager.com/network/showflight/54571726773,https://www.airlines-manager.com/aircraft/show/119652481,18:45,7:14,320,"$766,698.00","$703,221.00","$2,197.57","$56,332.79"
MIA - EUG,54580945222,MIA-EUG-SYR 2,737-900ER,https://www.airlines-manager.com/network/showline/50424905,https://www.airlines-manager.com/network/showflight/54580945222,https://www.airlines-manager.com/aircraft/show/119652482,23:30,11:59,320,"$766,698.00","$703,221.00","$2,197.57","$56,332.79"
MIA - FAR,54536069579,MIA-FAR-TUL 3,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/54536069579,https://www.airlines-manager.com/aircraft/show/110883161,0:45,9:29,320,"$546,219.00","$497,397.00","$1,554.37","$56,953.85"
MIA - FAR,54545804725,MIA-FAR-TUL 4,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/54545804725,https://www.airlines-manager.com/aircraft/show/110883162,7:15,15:59,320,"$546,219.00","$497,397.00","$1,554.37","$56,953.85"
MIA - FAR,54556941024,MIA-FAR-TUL 1,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/54556941024,https://www.airlines-manager.com/aircraft/show/110883159,11:00,19:44,320,"$546,219.00","$497,397.00","$1,554.37","$56,953.85"
MIA - FAR,54567120275,MIA-FAR-TUL 2,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/54567120275,https://www.airlines-manager.com/aircraft/show/110883160,16:00,0:44,320,"$546,219.00","$497,397.00","$1,554.37","$56,953.85"
MIA - FAR,54571726723,MIA-FAR-TUL 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/54571726723,https://www.airlines-manager.com/aircraft/show/87169421,18:15,2:59,112,"$257,649.00","$228,235.00","$2,037.81","$26,133.78"
MIA - FAT,54551622411,MIA-FAT-MSO 4,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/54551622411,https://www.airlines-manager.com/aircraft/show/113101232,8:30,19:59,320,"$722,280.00","$662,066.00","$2,068.96","$57,654.51"
MIA - FAT,54556941010,MIA-FAT-MSO 1,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/54556941010,https://www.airlines-manager.com/aircraft/show/113101229,11:00,22:29,320,"$722,280.00","$662,066.00","$2,068.96","$57,654.51"
MIA - FAT,54571726786,MIA-FAT-MSO 2,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/54571726786,https://www.airlines-manager.com/aircraft/show/113101231,19:00,6:29,320,"$722,280.00","$662,066.00","$2,068.96","$57,654.51"
MIA - FAT,54580945020,MIA-FAT-MSO 3,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/54580945020,https://www.airlines-manager.com/aircraft/show/113101234,22:15,9:44,320,"$722,280.00","$662,066.00","$2,068.96","$57,654.51"
MIA - FCA,54536069535,MIA-FCA-MFR 3,737-900ER,https://www.airlines-manager.com/network/showline/50424916,https://www.airlines-manager.com/network/showflight/54536069535,https://www.airlines-manager.com/aircraft/show/119652477,0:30,11:59,320,"$704,492.00","$645,125.00","$2,016.02","$56,179.25"
MIA - FCA,54536069536,MIA-FCA-MFR 4,737-900ER,https://www.airlines-manager.com/network/showline/50424916,https://www.airlines-manager.com/network/showflight/54536069536,https://www.airlines-manager.com/aircraft/show/119652476,2:30,13:59,320,"$704,492.00","$645,125.00","$2,016.02","$56,179.25"
MIA - FCA,54556941068,MIA-FCA-MFR 1,737-900ER,https://www.airlines-manager.com/network/showline/50424916,https://www.airlines-manager.com/network/showflight/54556941068,https://www.airlines-manager.com/aircraft/show/119652479,12:00,23:29,320,"$704,492.00","$645,125.00","$2,016.02","$56,179.25"
MIA - FCA,54562128277,MIA-FCA-MFR 2,737-900ER,https://www.airlines-manager.com/network/showline/50424916,https://www.airlines-manager.com/network/showflight/54562128277,https://www.airlines-manager.com/aircraft/show/119652478,14:00,1:29,320,"$704,492.00","$645,125.00","$2,016.02","$56,179.25"
MIA - FPO,54536069477,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/54536069477,https://www.airlines-manager.com/aircraft/show/107121796,0:15,2:44,320,"$83,963.00","$59,322.00",$185.38,"$23,888.05"
MIA - FPO,54536069478,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/54536069478,https://www.airlines-manager.com/aircraft/show/107121799,4:15,6:44,320,"$83,963.00","$59,322.00",$185.38,"$23,888.05"
MIA - FPO,54551622498,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/54551622498,https://www.airlines-manager.com/aircraft/show/107121795,9:30,11:59,320,"$83,963.00","$59,322.00",$185.38,"$23,888.05"
MIA - FPO,54556940946,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/54556940946,https://www.airlines-manager.com/aircraft/show/107121798,11:00,13:29,320,"$83,963.00","$59,322.00",$185.38,"$23,888.05"
MIA - FPO,54567120449,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/54567120449,https://www.airlines-manager.com/aircraft/show/107121797,17:30,19:59,199,"$60,079.00","$35,850.00",$180.15,"$14,436.24"
MIA - FSD,54536069618,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/54536069618,https://www.airlines-manager.com/aircraft/show/110883110,1:00,8:59,310,"$501,538.00","$460,205.00","$1,484.53","$57,645.72"
MIA - FSD,54536069619,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/54536069619,https://www.airlines-manager.com/aircraft/show/110883113,2:45,10:44,310,"$501,538.00","$460,205.00","$1,484.53","$57,645.72"
MIA - FSD,54562128342,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/54562128342,https://www.airlines-manager.com/aircraft/show/110883112,14:00,21:59,310,"$501,538.00","$460,205.00","$1,484.53","$57,645.72"
MIA - FSD,54567120348,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/54567120348,https://www.airlines-manager.com/aircraft/show/110883111,16:15,0:14,310,"$501,538.00","$460,205.00","$1,484.53","$57,645.72"
MIA - FSD,54575909709,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/54575909709,https://www.airlines-manager.com/aircraft/show/104353572,22:00,5:59,93,"$218,497.00","$192,272.00","$2,067.44","$24,084.18"
MIA - GRR,54536069448,MIA-RAP-GRR 5,ERJ-175,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/54536069448,https://www.airlines-manager.com/aircraft/show/116042630,0:00,6:44,112,"$199,811.00","$175,319.00","$1,565.35","$26,037.48"
MIA - GRR,54536069449,MIA-RAP-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/54536069449,https://www.airlines-manager.com/aircraft/show/116789623,2:15,8:59,320,"$423,112.00","$381,221.00","$1,191.32","$56,616.98"
MIA - GRR,54551622563,MIA-RAP-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/54551622563,https://www.airlines-manager.com/aircraft/show/116789624,10:00,16:44,320,"$423,112.00","$381,221.00","$1,191.32","$56,616.98"
MIA - GRR,54556941069,MIA-RAP-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/54556941069,https://www.airlines-manager.com/aircraft/show/116789622,12:00,18:44,320,"$423,112.00","$381,221.00","$1,191.32","$56,616.98"
MIA - GRR,54571726797,MIA-RAP-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/54571726797,https://www.airlines-manager.com/aircraft/show/116789625,19:00,1:44,320,"$423,112.00","$381,221.00","$1,191.32","$56,616.98"
MIA - GSO,54551622486,MIA-EUG-SYR 1,737-900ER,https://www.airlines-manager.com/network/showline/50424907,https://www.airlines-manager.com/network/showflight/54551622486,https://www.airlines-manager.com/aircraft/show/119652483,9:15,13:59,320,"$309,086.00","$275,151.00",$859.85,"$58,130.49"
MIA - GSO,54562128275,MIA-EUG-SYR 3,737-900ER,https://www.airlines-manager.com/network/showline/50424907,https://www.airlines-manager.com/network/showflight/54562128275,https://www.airlines-manager.com/aircraft/show/119652481,14:00,18:44,320,"$309,086.00","$275,151.00",$859.85,"$58,130.49"
MIA - GSO,54571726777,MIA-EUG-SYR 2,737-900ER,https://www.airlines-manager.com/network/showline/50424907,https://www.airlines-manager.com/network/showflight/54571726777,https://www.airlines-manager.com/aircraft/show/119652482,18:45,23:29,320,"$309,086.00","$275,151.00",$859.85,"$58,130.49"
MIA - GSO,54575909611,MIA-EUG-SYR 4,737-900ER,https://www.airlines-manager.com/network/showline/50424907,https://www.airlines-manager.com/network/showflight/54575909611,https://www.airlines-manager.com/aircraft/show/119652480,20:45,1:29,307,"$301,526.00","$267,840.00",$872.44,"$56,585.92"
MIA - HAV,54536069992,MIA-PDX-DTW 1,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/54536069992,https://www.airlines-manager.com/aircraft/show/89943715,5:00,7:59,320,"$131,414.00","$101,607.00",$317.52,"$34,058.21"
MIA - HAV,54551622473,MIA-PDX-DTW 4,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/54551622473,https://www.airlines-manager.com/aircraft/show/89943712,9:00,11:59,320,"$131,414.00","$101,607.00",$317.52,"$34,058.21"
MIA - HAV,54551622474,MIA-PDX-DTW 3,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/54551622474,https://www.airlines-manager.com/aircraft/show/89943713,10:00,12:59,320,"$131,414.00","$101,607.00",$317.52,"$34,058.21"
MIA - HAV,54567120365,MIA-PDX-DTW 2,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/54567120365,https://www.airlines-manager.com/aircraft/show/89943714,16:30,19:29,320,"$131,414.00","$101,607.00",$317.52,"$34,058.21"
MIA - HAV,54575909583,MIA-PDX-DTW 5,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/54575909583,https://www.airlines-manager.com/aircraft/show/89943711,20:30,23:29,288,"$119,825.00","$90,271.00",$313.44,"$30,258.44"
MIA - IAD,54536069961,MIA-IAD-TUS 2,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/54536069961,https://www.airlines-manager.com/aircraft/show/97556720,4:15,9:59,310,"$360,640.00","$321,339.00","$1,036.58","$56,047.50"
MIA - IAD,54545804717,MIA-IAD-TUS 5,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/54545804717,https://www.airlines-manager.com/aircraft/show/97556716,7:15,12:59,310,"$360,640.00","$321,339.00","$1,036.58","$56,047.50"
MIA - IAD,54551622689,MIA-IAD-TUS 1,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/54551622689,https://www.airlines-manager.com/aircraft/show/97556721,10:00,15:44,310,"$360,640.00","$321,339.00","$1,036.58","$56,047.50"
MIA - IAD,54556941203,MIA-IAD-TUS 4,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/54556941203,https://www.airlines-manager.com/aircraft/show/97556718,13:00,18:44,310,"$360,640.00","$321,339.00","$1,036.58","$56,047.50"
MIA - IAD,54571726757,MIA-IAD-TUS 3,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/54571726757,https://www.airlines-manager.com/aircraft/show/97556719,18:45,0:29,310,"$360,640.00","$321,339.00","$1,036.58","$56,047.50"
MIA - IAD,54575909682,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/54575909682,https://www.airlines-manager.com/aircraft/show/107527976,21:30,3:14,0,"$96,372.00","$69,073.00",$0.00,"$12,047.62"
MIA - ICT,54536069819,MIA-FAR-TUL 1,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/54536069819,https://www.airlines-manager.com/aircraft/show/110883159,2:30,9:29,320,"$446,928.00","$403,611.00","$1,261.28","$57,796.32"
MIA - ICT,54551622476,MIA-FAR-TUL 2,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/54551622476,https://www.airlines-manager.com/aircraft/show/110883160,9:00,15:59,320,"$446,928.00","$403,611.00","$1,261.28","$57,796.32"
MIA - ICT,54556941022,MIA-FAR-TUL 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/54556941022,https://www.airlines-manager.com/aircraft/show/87169421,11:00,18:14,112,"$212,522.00","$187,091.00","$1,670.46","$25,865.12"
MIA - ICT,54571726641,MIA-FAR-TUL 3,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/54571726641,https://www.airlines-manager.com/aircraft/show/110883161,17:45,0:44,320,"$446,928.00","$403,611.00","$1,261.28","$57,796.32"
MIA - ICT,54580945088,MIA-FAR-TUL 4,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/54580945088,https://www.airlines-manager.com/aircraft/show/110883162,22:45,5:44,320,"$446,928.00","$403,611.00","$1,261.28","$57,796.32"
MIA - IND,54536069821,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/54536069821,https://www.airlines-manager.com/aircraft/show/82323689,2:30,8:29,112,"$180,919.00","$157,231.00","$1,403.85","$26,278.16"
MIA - IND,54536069822,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/54536069822,https://www.airlines-manager.com/aircraft/show/99920623,3:15,9:14,320,"$382,687.00","$341,268.00","$1,066.46","$57,036.43"
MIA - IND,54551622684,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/54551622684,https://www.airlines-manager.com/aircraft/show/99920624,10:00,15:59,320,"$382,687.00","$341,268.00","$1,066.46","$57,036.43"
MIA - IND,54567120325,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/54567120325,https://www.airlines-manager.com/aircraft/show/99920625,16:00,21:59,320,"$382,687.00","$341,268.00","$1,066.46","$57,036.43"
MIA - IND,54580945044,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/54580945044,https://www.airlines-manager.com/aircraft/show/99920626,22:30,4:29,320,"$382,687.00","$341,268.00","$1,066.46","$57,036.43"
MIA - JAN,54545804596,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/54545804596,https://www.airlines-manager.com/aircraft/show/114912307,5:30,10:29,112,"$149,512.00","$130,617.00","$1,166.22","$26,210.77"
MIA - JAN,54551622419,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/54551622419,https://www.airlines-manager.com/aircraft/show/115493373,8:30,13:29,310,"$314,276.00","$284,944.00",$919.17,"$57,179.40"
MIA - JAN,54562128335,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/54562128335,https://www.airlines-manager.com/aircraft/show/115493370,14:00,18:59,310,"$314,276.00","$284,944.00",$919.17,"$57,179.40"
MIA - JAN,54575909547,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/54575909547,https://www.airlines-manager.com/aircraft/show/115493371,20:15,1:14,310,"$314,276.00","$284,944.00",$919.17,"$57,179.40"
MIA - JAN,54580945039,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/54580945039,https://www.airlines-manager.com/aircraft/show/115493372,22:30,3:29,252,"$279,758.00","$251,606.00",$998.44,"$50,489.50"
MIA - JAX,54536069873,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/54536069873,https://www.airlines-manager.com/aircraft/show/103684631,3:00,6:29,320,"$173,694.00","$144,655.00",$452.05,"$41,527.75"
MIA - JAX,54551622712,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/54551622712,https://www.airlines-manager.com/aircraft/show/103684630,10:30,13:59,320,"$173,694.00","$144,655.00",$452.05,"$41,527.75"
MIA - JAX,54562128300,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/54562128300,https://www.airlines-manager.com/aircraft/show/103365574,14:00,17:29,320,"$173,694.00","$144,655.00",$452.05,"$41,527.75"
MIA - JAX,54571726821,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/54571726821,https://www.airlines-manager.com/aircraft/show/103684632,19:15,22:44,320,"$173,694.00","$144,655.00",$452.05,"$41,527.75"
MIA - JAX,54580945023,MIA-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/54580945023,https://www.airlines-manager.com/aircraft/show/106339154,22:15,1:44,198,"$131,883.00","$111,987.00",$565.59,"$32,149.38"
MIA - JFK,54545804615,MIA-JFK-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/54545804615,https://www.airlines-manager.com/aircraft/show/105308264,5:45,11:59,338,"$428,918.00","$376,442.00","$1,113.73","$60,391.76"
MIA - JFK,54545804616,MIA-JFK-PHX 6,ERJ-175,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/54545804616,https://www.airlines-manager.com/aircraft/show/82683137,6:45,12:59,112,"$187,062.00","$152,852.00","$1,364.75","$24,521.71"
MIA - JFK,54551622548,MIA-JFK-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/54551622548,https://www.airlines-manager.com/aircraft/show/105308267,10:00,16:14,338,"$428,918.00","$376,442.00","$1,113.73","$60,391.76"
MIA - JFK,54556941083,MIA-JFK-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/54556941083,https://www.airlines-manager.com/aircraft/show/105308265,12:00,18:14,338,"$428,918.00","$376,442.00","$1,113.73","$60,391.76"
MIA - JFK,54571726677,MIA-JFK-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/54571726677,https://www.airlines-manager.com/aircraft/show/105308266,18:00,0:14,338,"$428,918.00","$376,442.00","$1,113.73","$60,391.76"
MIA - JFK,54575909605,MIA-JFK-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/54575909605,https://www.airlines-manager.com/aircraft/show/105308268,20:45,2:59,338,"$428,918.00","$376,442.00","$1,113.73","$60,391.76"
MIA - JNB,54536069452,MIA 84A-4 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/54536069452,https://www.airlines-manager.com/aircraft/show/93686966,0:00,6:44,1124,"$6,002,780.00","$5,569,148.00","$4,954.76","$827,101.19"
MIA - JNB,54556941135,MIA 84A-7 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/54556941135,https://www.airlines-manager.com/aircraft/show/93776641,13:00,19:44,1124,"$6,002,780.00","$5,569,148.00","$4,954.76","$827,101.19"
MIA - LAS,54536069678,MIA-LAS-SEA 5,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/54536069678,https://www.airlines-manager.com/aircraft/show/105093929,1:30,11:59,338,"$716,711.00","$649,535.00","$1,921.70","$61,958.82"
MIA - LAS,54551622553,MIA-LAS-SEA 1,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/54551622553,https://www.airlines-manager.com/aircraft/show/105093925,10:00,20:29,338,"$716,711.00","$649,535.00","$1,921.70","$61,958.82"
MIA - LAS,54556941076,MIA-LAS-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/54556941076,https://www.airlines-manager.com/aircraft/show/113251304,12:00,22:29,198,"$496,976.00","$440,972.00","$2,227.13","$42,064.10"
MIA - LAS,54556941077,MIA-LAS-SEA 2,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/54556941077,https://www.airlines-manager.com/aircraft/show/105093926,13:00,23:29,338,"$716,711.00","$649,535.00","$1,921.70","$61,958.82"
MIA - LAS,54562128450,MIA-LAS-SEA 3,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/54562128450,https://www.airlines-manager.com/aircraft/show/105093927,15:00,1:29,338,"$716,711.00","$649,535.00","$1,921.70","$61,958.82"
MIA - LAS,54580945051,MIA-LAS-SEA 4,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/54580945051,https://www.airlines-manager.com/aircraft/show/105093928,22:30,8:59,338,"$716,711.00","$649,535.00","$1,921.70","$61,958.82"
MIA - LAX,54536069413,MIA-LAX-DEN 1,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/54536069413,https://www.airlines-manager.com/aircraft/show/91126649,0:00,10:59,400,"$917,458.00","$823,986.00","$2,059.97","$75,021.49"
MIA - LAX,54536069414,MIA-LAX-DEN 2,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/54536069414,https://www.airlines-manager.com/aircraft/show/91126650,2:00,12:59,400,"$917,458.00","$823,986.00","$2,059.97","$75,021.49"
MIA - LAX,54551622539,MIA-LAX-DEN 3,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/54551622539,https://www.airlines-manager.com/aircraft/show/91126651,10:00,20:59,400,"$917,458.00","$823,986.00","$2,059.97","$75,021.49"
MIA - LAX,54556940976,MIA-LAX-DEN 5 E,A319-100,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/54556940976,https://www.airlines-manager.com/aircraft/show/115181776,11:00,22:14,216,"$537,212.00","$475,849.00","$2,203.00","$42,360.45"
MIA - LAX,54567120362,MIA-LAX-DEN 4,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/54567120362,https://www.airlines-manager.com/aircraft/show/91126652,16:30,3:29,400,"$917,458.00","$823,986.00","$2,059.97","$75,021.49"
MIA - LEX,54536069878,MIA-CID-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/54536069878,https://www.airlines-manager.com/aircraft/show/116789653,3:00,8:29,310,"$348,601.00","$317,916.00","$1,025.54","$57,978.60"
MIA - LEX,54551622683,MIA-CID-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/54551622683,https://www.airlines-manager.com/aircraft/show/116789650,10:00,15:29,310,"$348,601.00","$317,916.00","$1,025.54","$57,978.60"
MIA - LEX,54562128436,MIA-CID-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/54562128436,https://www.airlines-manager.com/aircraft/show/116789651,15:00,20:29,310,"$348,601.00","$317,916.00","$1,025.54","$57,978.60"
MIA - LEX,54571726847,MIA-CID-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/54571726847,https://www.airlines-manager.com/aircraft/show/116789652,19:45,1:14,299,"$341,355.00","$310,936.00","$1,039.92","$56,705.65"
MIA - LIT,54536069799,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/54536069799,https://www.airlines-manager.com/aircraft/show/96692674,2:15,7:59,310,"$360,566.00","$328,179.00","$1,058.64","$57,240.52"
MIA - LIT,54536069800,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/54536069800,https://www.airlines-manager.com/aircraft/show/105601657,4:15,9:59,112,"$171,082.00","$150,007.00","$1,339.35","$26,164.01"
MIA - LIT,54545804768,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/54545804768,https://www.airlines-manager.com/aircraft/show/94886625,8:15,13:59,310,"$360,566.00","$328,179.00","$1,058.64","$57,240.52"
MIA - LIT,54562128399,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/54562128399,https://www.airlines-manager.com/aircraft/show/94886629,15:00,20:44,310,"$360,566.00","$328,179.00","$1,058.64","$57,240.52"
MIA - LIT,54575909668,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/54575909668,https://www.airlines-manager.com/aircraft/show/94886626,21:30,3:14,303,"$355,770.00","$323,564.00","$1,067.87","$56,435.58"
MIA - LOS,54545804689,MIA 84A-5 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/54545804689,https://www.airlines-manager.com/aircraft/show/93704215,6:45,4:59,1124,"$4,253,118.00","$3,953,671.00","$3,517.50","$177,826.28"
MIA - LOS,54571726858,MIA 84A-1 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/54571726858,https://www.airlines-manager.com/aircraft/show/93686969,19:45,17:59,1115,"$4,194,315.00","$3,897,224.00","$3,495.27","$175,287.44"
MIA - MBJ,54536069571,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/54536069571,https://www.airlines-manager.com/aircraft/show/104034460,0:45,4:59,228,"$191,738.00","$170,412.00",$747.42,"$40,254.80"
MIA - MBJ,54536069572,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/54536069572,https://www.airlines-manager.com/aircraft/show/104034461,5:00,9:14,228,"$191,738.00","$170,412.00",$747.42,"$40,254.80"
MIA - MBJ,54551622462,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/54551622462,https://www.airlines-manager.com/aircraft/show/107577220,9:00,13:14,0,"$65,799.00","$47,711.00",$0.00,"$11,270.31"
MIA - MBJ,54551622463,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/54551622463,https://www.airlines-manager.com/aircraft/show/104034459,10:00,14:14,228,"$191,738.00","$170,412.00",$747.42,"$40,254.80"
MIA - MBJ,54556941127,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/54556941127,https://www.airlines-manager.com/aircraft/show/104034457,12:45,16:59,228,"$191,738.00","$170,412.00",$747.42,"$40,254.80"
MIA - MBJ,54567120426,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/54567120426,https://www.airlines-manager.com/aircraft/show/104034458,17:00,21:14,228,"$191,738.00","$170,412.00",$747.42,"$40,254.80"
MIA - MBJ,54580945178,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/54580945178,https://www.airlines-manager.com/aircraft/show/99326789,23:00,3:14,228,"$191,738.00","$170,412.00",$747.42,"$40,254.80"
MIA - MCI,54536069585,MIA-ELP-MCI 3,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/54536069585,https://www.airlines-manager.com/aircraft/show/91806232,0:45,7:44,320,"$446,817.00","$401,234.00","$1,253.86","$57,455.94"
MIA - MCI,54536069586,MIA-ELP-MCI 4,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/54536069586,https://www.airlines-manager.com/aircraft/show/91806231,1:30,8:29,320,"$446,817.00","$401,234.00","$1,253.86","$57,455.94"
MIA - MCI,54551622550,MIA-ELP-MCI 2,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/54551622550,https://www.airlines-manager.com/aircraft/show/91806235,10:00,16:59,320,"$446,817.00","$401,234.00","$1,253.86","$57,455.94"
MIA - MCI,54571726747,MIA-ELP-MCI 1,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/54571726747,https://www.airlines-manager.com/aircraft/show/91806234,18:30,1:29,320,"$446,817.00","$401,234.00","$1,253.86","$57,455.94"
MIA - MCI,54571726748,MIA-ELP-MCI 5 B,A319-100,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/54571726748,https://www.airlines-manager.com/aircraft/show/105093924,19:00,1:59,198,"$337,670.00","$305,278.00","$1,541.81","$43,715.23"
MIA - MCO,54536069507,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/54536069507,https://www.airlines-manager.com/aircraft/show/107763565,0:15,2:59,320,"$122,006.00","$84,784.00",$264.95,"$31,018.54"
MIA - MCO,54536069508,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/54536069508,https://www.airlines-manager.com/aircraft/show/107467213,4:00,6:44,112,"$54,851.00","$35,679.00",$318.56,"$13,053.29"
MIA - MCO,54545804639,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/54545804639,https://www.airlines-manager.com/aircraft/show/103534663,6:00,8:44,112,"$54,851.00","$35,679.00",$318.56,"$13,053.29"
MIA - MCO,54551622494,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/54551622494,https://www.airlines-manager.com/aircraft/show/103534663,9:15,11:59,112,"$54,851.00","$35,679.00",$318.56,"$13,053.29"
MIA - MCO,54551622495,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/54551622495,https://www.airlines-manager.com/aircraft/show/107763566,10:00,12:44,320,"$122,006.00","$84,784.00",$264.95,"$31,018.54"
MIA - MCO,54556940953,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/54556940953,https://www.airlines-manager.com/aircraft/show/107763561,11:00,13:44,320,"$122,006.00","$84,784.00",$264.95,"$31,018.54"
MIA - MCO,54571726650,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/54571726650,https://www.airlines-manager.com/aircraft/show/107763562,17:45,20:29,320,"$122,006.00","$84,784.00",$264.95,"$31,018.54"
MIA - MEM,54536069415,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/54536069415,https://www.airlines-manager.com/aircraft/show/110582842,0:00,5:29,198,"$262,187.00","$234,418.00","$1,183.93","$42,751.00"
MIA - MEM,54536069416,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/54536069416,https://www.airlines-manager.com/aircraft/show/88239556,3:00,8:29,320,"$345,253.00","$305,664.00",$955.20,"$55,744.19"
MIA - MEM,54545804742,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/54545804742,https://www.airlines-manager.com/aircraft/show/88494374,7:45,13:14,320,"$345,253.00","$305,664.00",$955.20,"$55,744.19"
MIA - MEM,54562128293,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/54562128293,https://www.airlines-manager.com/aircraft/show/88494378,14:00,19:29,320,"$345,253.00","$305,664.00",$955.20,"$55,744.19"
MIA - MEM,54575909520,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/54575909520,https://www.airlines-manager.com/aircraft/show/91806233,20:00,1:29,320,"$345,253.00","$305,664.00",$955.20,"$55,744.19"
MIA - MFR,54536069690,MIA-FCA-MFR 2,737-900ER,https://www.airlines-manager.com/network/showline/50424903,https://www.airlines-manager.com/network/showflight/54536069690,https://www.airlines-manager.com/aircraft/show/119652478,1:30,13:59,320,"$755,935.00","$692,473.00","$2,163.98","$55,471.80"
MIA - MFR,54556941067,MIA-FCA-MFR 3,737-900ER,https://www.airlines-manager.com/network/showline/50424903,https://www.airlines-manager.com/network/showflight/54556941067,https://www.airlines-manager.com/aircraft/show/119652477,12:00,0:29,320,"$755,935.00","$692,473.00","$2,163.98","$55,471.80"
MIA - MFR,54562128278,MIA-FCA-MFR 4,737-900ER,https://www.airlines-manager.com/network/showline/50424903,https://www.airlines-manager.com/network/showflight/54562128278,https://www.airlines-manager.com/aircraft/show/119652476,14:00,2:29,320,"$755,935.00","$692,473.00","$2,163.98","$55,471.80"
MIA - MFR,54580945230,MIA-FCA-MFR 1,737-900ER,https://www.airlines-manager.com/network/showline/50424903,https://www.airlines-manager.com/network/showflight/54580945230,https://www.airlines-manager.com/aircraft/show/119652479,23:30,11:59,320,"$755,935.00","$692,473.00","$2,163.98","$55,471.80"
MIA - MHT,54536069673,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/54536069673,https://www.airlines-manager.com/aircraft/show/115493371,1:15,8:14,310,"$452,295.00","$414,040.00","$1,335.61","$59,289.74"
MIA - MHT,54536069674,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/54536069674,https://www.airlines-manager.com/aircraft/show/115493372,3:30,10:29,310,"$452,295.00","$414,040.00","$1,335.61","$59,289.74"
MIA - MHT,54556940961,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/54556940961,https://www.airlines-manager.com/aircraft/show/114912307,11:00,17:59,112,"$213,633.00","$188,436.00","$1,682.46","$26,983.68"
MIA - MHT,54562128274,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/54562128274,https://www.airlines-manager.com/aircraft/show/115493373,14:00,20:59,310,"$452,295.00","$414,040.00","$1,335.61","$59,289.74"
MIA - MHT,54571726792,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/54571726792,https://www.airlines-manager.com/aircraft/show/115493370,19:00,1:59,310,"$452,295.00","$414,040.00","$1,335.61","$59,289.74"
MIA - MKE,54536069512,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/54536069512,https://www.airlines-manager.com/aircraft/show/88494378,0:15,7:14,320,"$446,482.00","$402,355.00","$1,257.36","$57,616.47"
MIA - MKE,54545804667,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/54545804667,https://www.airlines-manager.com/aircraft/show/91806233,6:15,13:14,320,"$446,482.00","$402,355.00","$1,257.36","$57,616.47"
MIA - MKE,54556941026,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/54556941026,https://www.airlines-manager.com/aircraft/show/110582842,11:00,17:59,198,"$337,620.00","$306,185.00","$1,546.39","$43,845.11"
MIA - MKE,54562128295,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/54562128295,https://www.airlines-manager.com/aircraft/show/88239556,14:00,20:59,320,"$446,482.00","$402,355.00","$1,257.36","$57,616.47"
MIA - MKE,54571726768,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/54571726768,https://www.airlines-manager.com/aircraft/show/88494374,18:45,1:44,320,"$446,482.00","$402,355.00","$1,257.36","$57,616.47"
MIA - MSN,54536069741,MIA-RAP-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/54536069741,https://www.airlines-manager.com/aircraft/show/116789625,1:45,8:59,320,"$449,929.00","$407,356.00","$1,272.99","$56,316.50"
MIA - MSN,54545804744,MIA-RAP-GRR 5,ERJ-175,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/54545804744,https://www.airlines-manager.com/aircraft/show/116042630,7:45,14:59,112,"$213,319.00","$188,237.00","$1,680.69","$26,023.55"
MIA - MSN,54551622545,MIA-RAP-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/54551622545,https://www.airlines-manager.com/aircraft/show/116789623,10:00,17:14,320,"$449,929.00","$407,356.00","$1,272.99","$56,316.50"
MIA - MSN,54567120374,MIA-RAP-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/54567120374,https://www.airlines-manager.com/aircraft/show/116789624,16:45,23:59,320,"$449,929.00","$407,356.00","$1,272.99","$56,316.50"
MIA - MSN,54571726753,MIA-RAP-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/54571726753,https://www.airlines-manager.com/aircraft/show/116789622,18:45,1:59,320,"$449,929.00","$407,356.00","$1,272.99","$56,316.50"
MIA - MSO,54545804745,MIA-FAT-MSO 2,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/54545804745,https://www.airlines-manager.com/aircraft/show/113101231,7:45,18:59,320,"$697,127.00","$638,148.00","$1,994.21","$56,808.43"
MIA - MSO,54556941009,MIA-FAT-MSO 3,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/54556941009,https://www.airlines-manager.com/aircraft/show/113101234,11:00,22:14,320,"$697,127.00","$638,148.00","$1,994.21","$56,808.43"
MIA - MSO,54575909510,MIA-FAT-MSO 4,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/54575909510,https://www.airlines-manager.com/aircraft/show/113101232,20:00,7:14,320,"$697,127.00","$638,148.00","$1,994.21","$56,808.43"
MIA - MSO,54580945060,MIA-FAT-MSO 1,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/54580945060,https://www.airlines-manager.com/aircraft/show/113101229,22:30,9:44,320,"$697,127.00","$638,148.00","$1,994.21","$56,808.43"
MIA - MSP,54536069781,MIA-JFK-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/54536069781,https://www.airlines-manager.com/aircraft/show/105308267,2:00,9:59,338,"$541,729.00","$493,047.00","$1,458.72","$61,759.54"
MIA - MSP,54536069782,MIA-JFK-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/54536069782,https://www.airlines-manager.com/aircraft/show/105308268,3:00,10:59,338,"$541,729.00","$493,047.00","$1,458.72","$61,759.54"
MIA - MSP,54551622549,MIA-JFK-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/54551622549,https://www.airlines-manager.com/aircraft/show/105308266,10:00,17:59,338,"$541,729.00","$493,047.00","$1,458.72","$61,759.54"
MIA - MSP,54556941158,MIA-JFK-PHX 6,ERJ-175,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/54556941158,https://www.airlines-manager.com/aircraft/show/82683137,13:00,20:59,112,"$236,027.00","$203,069.00","$1,813.12","$25,436.62"
MIA - MSP,54571726719,MIA-JFK-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/54571726719,https://www.airlines-manager.com/aircraft/show/105308265,18:15,2:14,338,"$541,729.00","$493,047.00","$1,458.72","$61,759.54"
MIA - MSP,54575909690,MIA-JFK-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/54575909690,https://www.airlines-manager.com/aircraft/show/105308264,21:45,5:44,338,"$541,729.00","$493,047.00","$1,458.72","$61,759.54"
MIA - MSY,54536069699,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/54536069699,https://www.airlines-manager.com/aircraft/show/91806233,1:30,6:14,320,"$300,043.00","$264,920.00",$827.88,"$55,969.01"
MIA - MSY,54545804601,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/54545804601,https://www.airlines-manager.com/aircraft/show/110582842,5:30,10:14,198,"$228,739.00","$204,246.00","$1,031.55","$43,150.56"
MIA - MSY,54551622412,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/54551622412,https://www.airlines-manager.com/aircraft/show/88239556,8:30,13:14,320,"$300,043.00","$264,920.00",$827.88,"$55,969.01"
MIA - MSY,54562128296,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/54562128296,https://www.airlines-manager.com/aircraft/show/88494374,14:00,18:44,320,"$300,043.00","$264,920.00",$827.88,"$55,969.01"
MIA - MSY,54571726835,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/54571726835,https://www.airlines-manager.com/aircraft/show/88494378,19:30,0:14,320,"$300,043.00","$264,920.00",$827.88,"$55,969.01"
MIA - NAS,54536069789,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/54536069789,https://www.airlines-manager.com/aircraft/show/104034461,2:15,4:59,228,"$78,591.00","$60,620.00",$265.88,"$22,178.05"
MIA - NAS,54545804736,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/54545804736,https://www.airlines-manager.com/aircraft/show/99326789,7:30,10:14,228,"$78,591.00","$60,620.00",$265.88,"$22,178.05"
MIA - NAS,54551622570,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/54551622570,https://www.airlines-manager.com/aircraft/show/104034457,10:00,12:44,228,"$78,591.00","$60,620.00",$265.88,"$22,178.05"
MIA - NAS,54562128255,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/54562128255,https://www.airlines-manager.com/aircraft/show/107577220,13:15,15:59,0,"$34,003.00","$19,794.00",#DIV/0!,"$7,241.71"
MIA - NAS,54562128256,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/54562128256,https://www.airlines-manager.com/aircraft/show/104034458,14:15,16:59,228,"$78,591.00","$60,620.00",$265.88,"$22,178.05"
MIA - NAS,54571726749,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/54571726749,https://www.airlines-manager.com/aircraft/show/104034459,18:30,21:14,228,"$78,591.00","$60,620.00",$265.88,"$22,178.05"
MIA - NAS,54575909717,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/54575909717,https://www.airlines-manager.com/aircraft/show/104034460,22:00,0:44,228,"$78,591.00","$60,620.00",$265.88,"$22,178.05"
MIA - OAK,54536069628,MIA-OAK-SMF 5,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/54536069628,https://www.airlines-manager.com/aircraft/show/91198617,1:00,12:59,320,"$737,460.00","$671,568.00","$2,098.65","$56,041.84"
MIA - OAK,54556940986,MIA-OAK-SMF 1,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/54556940986,https://www.airlines-manager.com/aircraft/show/91198615,11:00,22:59,320,"$737,460.00","$671,568.00","$2,098.65","$56,041.84"
MIA - OAK,54556940987,MIA-OAK-SMF 2,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/54556940987,https://www.airlines-manager.com/aircraft/show/91198619,13:00,0:59,320,"$737,460.00","$671,568.00","$2,098.65","$56,041.84"
MIA - OAK,54562128438,MIA-OAK-SMF 3,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/54562128438,https://www.airlines-manager.com/aircraft/show/91198616,15:00,2:59,320,"$737,460.00","$671,568.00","$2,098.65","$56,041.84"
MIA - OAK,54580945196,MIA-OAK-SMF 4,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/54580945196,https://www.airlines-manager.com/aircraft/show/91198618,23:00,10:59,320,"$737,460.00","$671,568.00","$2,098.65","$56,041.84"
MIA - OKC,54536069744,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/54536069744,https://www.airlines-manager.com/aircraft/show/110883112,1:45,8:29,310,"$430,426.00","$392,795.00","$1,267.08","$58,335.89"
MIA - OKC,54536069745,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/54536069745,https://www.airlines-manager.com/aircraft/show/110883111,4:00,10:44,310,"$430,426.00","$392,795.00","$1,267.08","$58,335.89"
MIA - OKC,54551622541,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/54551622541,https://www.airlines-manager.com/aircraft/show/104353572,10:00,16:44,112,"$202,427.00","$177,716.00","$1,586.75","$26,393.47"
MIA - OKC,54556941149,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/54556941149,https://www.airlines-manager.com/aircraft/show/110883110,13:00,19:44,310,"$430,426.00","$392,795.00","$1,267.08","$58,335.89"
MIA - OKC,54562128392,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/54562128392,https://www.airlines-manager.com/aircraft/show/110883113,14:45,21:29,310,"$430,426.00","$392,795.00","$1,267.08","$58,335.89"
MIA - OMA,54536069829,MIA-BOI-BNA 1,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/54536069829,https://www.airlines-manager.com/aircraft/show/104133006,2:30,9:59,320,"$477,506.00","$432,428.00","$1,351.34","$57,785.48"
MIA - OMA,54545804672,MIA-BOI-BNA 4,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/54545804672,https://www.airlines-manager.com/aircraft/show/103775657,6:30,13:59,320,"$477,506.00","$432,428.00","$1,351.34","$57,785.48"
MIA - OMA,54551622566,MIA-BOI-BNA 3,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/54551622566,https://www.airlines-manager.com/aircraft/show/104020880,10:00,17:29,320,"$477,506.00","$432,428.00","$1,351.34","$57,785.48"
MIA - OMA,54562128461,MIA-BOI-BNA 2,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/54562128461,https://www.airlines-manager.com/aircraft/show/104022609,15:15,22:44,320,"$477,506.00","$432,428.00","$1,351.34","$57,785.48"
MIA - OMA,54567120440,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/54567120440,https://www.airlines-manager.com/aircraft/show/103534663,17:15,0:44,112,"$225,479.00","$198,880.00","$1,775.71","$26,576.39"
MIA - ONT,54536069546,MIA-RNO-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/54536069546,https://www.airlines-manager.com/aircraft/show/90489722,0:30,11:29,320,"$691,257.00","$629,649.00","$1,967.65","$57,327.68"
MIA - ONT,54536069547,MIA-RNO-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/54536069547,https://www.airlines-manager.com/aircraft/show/86238756,2:30,13:29,320,"$691,257.00","$629,649.00","$1,967.65","$57,327.68"
MIA - ONT,54556941006,MIA-RNO-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/54556941006,https://www.airlines-manager.com/aircraft/show/90489723,11:00,21:59,320,"$691,257.00","$629,649.00","$1,967.65","$57,327.68"
MIA - ONT,54562128323,MIA-RNO-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/54562128323,https://www.airlines-manager.com/aircraft/show/105223010,14:00,0:59,198,"$519,083.00","$474,343.00","$2,395.67","$43,187.53"
MIA - ONT,54580945064,MIA-RNO-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/54580945064,https://www.airlines-manager.com/aircraft/show/86238755,22:30,9:29,320,"$691,257.00","$629,649.00","$1,967.65","$57,327.68"
MIA - ORD,54536069890,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/54536069890,https://www.airlines-manager.com/aircraft/show/91600935,3:15,9:59,310,"$423,914.00","$364,109.00","$1,174.55","$54,075.59"
MIA - ORD,54536069891,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/54536069891,https://www.airlines-manager.com/aircraft/show/91600938,4:15,10:59,310,"$423,914.00","$364,109.00","$1,174.55","$54,075.59"
MIA - ORD,54551622468,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/54551622468,https://www.airlines-manager.com/aircraft/show/82543123,9:00,15:44,112,"$199,175.00","$161,198.00","$1,439.27","$23,940.30"
MIA - ORD,54556940904,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/54556940904,https://www.airlines-manager.com/aircraft/show/91600937,11:00,17:44,310,"$423,914.00","$364,109.00","$1,174.55","$54,075.59"
MIA - ORD,54562128393,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/54562128393,https://www.airlines-manager.com/aircraft/show/91600939,14:45,21:29,310,"$423,914.00","$364,109.00","$1,174.55","$54,075.59"
MIA - ORD,54567120243,MIA-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/54567120243,https://www.airlines-manager.com/aircraft/show/106339154,15:30,22:14,198,"$319,739.00","$271,843.00","$1,372.94","$40,372.72"
MIA - ORD,54575909595,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/54575909595,https://www.airlines-manager.com/aircraft/show/91600936,20:45,3:29,310,"$423,914.00","$364,109.00","$1,174.55","$54,075.59"
MIA - ORF,54536069524,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/54536069524,https://www.airlines-manager.com/aircraft/show/114912307,0:15,5:29,112,"$157,418.00","$137,445.00","$1,227.19","$26,263.38"
MIA - ORF,54536069525,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/54536069525,https://www.airlines-manager.com/aircraft/show/115493373,3:15,8:29,310,"$331,248.00","$300,298.00",$968.70,"$57,381.78"
MIA - ORF,54545804767,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/54545804767,https://www.airlines-manager.com/aircraft/show/115493370,8:15,13:29,310,"$331,248.00","$300,298.00",$968.70,"$57,381.78"
MIA - ORF,54562128400,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/54562128400,https://www.airlines-manager.com/aircraft/show/115493371,15:00,20:14,310,"$331,248.00","$300,298.00",$968.70,"$57,381.78"
MIA - ORF,54567120430,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/54567120430,https://www.airlines-manager.com/aircraft/show/115493372,17:15,22:29,310,"$331,248.00","$300,298.00",$968.70,"$57,381.78"
MIA - PDX,54551622692,MIA-PDX-DTW 1,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/54551622692,https://www.airlines-manager.com/aircraft/show/89943715,10:00,22:29,320,"$771,170.00","$700,853.00","$2,190.17","$56,143.10"
MIA - PDX,54556941206,MIA-PDX-DTW 3,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/54556941206,https://www.airlines-manager.com/aircraft/show/89943713,13:00,1:29,320,"$771,170.00","$700,853.00","$2,190.17","$56,143.10"
MIA - PDX,54562128306,MIA-PDX-DTW 4,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/54562128306,https://www.airlines-manager.com/aircraft/show/89943712,14:00,2:29,320,"$771,170.00","$700,853.00","$2,190.17","$56,143.10"
MIA - PDX,54571726833,MIA-PDX-DTW 2,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/54571726833,https://www.airlines-manager.com/aircraft/show/89943714,19:30,7:59,320,"$771,170.00","$700,853.00","$2,190.17","$56,143.10"
MIA - PDX,54580945231,MIA-PDX-DTW 5,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/54580945231,https://www.airlines-manager.com/aircraft/show/89943711,23:30,11:59,320,"$771,170.00","$700,853.00","$2,190.17","$56,143.10"
MIA - PHL,54536069946,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/54536069946,https://www.airlines-manager.com/aircraft/show/91600939,4:00,9:59,310,"$379,784.00","$338,009.00","$1,090.35","$56,491.75"
MIA - PHL,54536069947,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/54536069947,https://www.airlines-manager.com/aircraft/show/91600937,5:00,10:59,310,"$379,784.00","$338,009.00","$1,090.35","$56,491.75"
MIA - PHL,54551622535,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/54551622535,https://www.airlines-manager.com/aircraft/show/91600936,10:00,15:59,310,"$379,784.00","$338,009.00","$1,090.35","$56,491.75"
MIA - PHL,54567120367,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/54567120367,https://www.airlines-manager.com/aircraft/show/91600935,16:30,22:29,310,"$379,784.00","$338,009.00","$1,090.35","$56,491.75"
MIA - PHL,54567120368,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/54567120368,https://www.airlines-manager.com/aircraft/show/91600938,17:30,23:29,310,"$379,784.00","$338,009.00","$1,090.35","$56,491.75"
MIA - PHL,54580945015,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/54580945015,https://www.airlines-manager.com/aircraft/show/82543123,22:15,4:14,112,"$179,528.00","$152,690.00","$1,363.30","$25,519.22"
MIA - PHX,54536069481,MIA-JFK-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/54536069481,https://www.airlines-manager.com/aircraft/show/105308266,0:15,9:59,338,"$670,464.00","$611,759.00","$1,809.94","$62,851.95"
MIA - PHX,54536069482,MIA-JFK-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/54536069482,https://www.airlines-manager.com/aircraft/show/105308265,2:15,11:59,338,"$670,464.00","$611,759.00","$1,809.94","$62,851.95"
MIA - PHX,54556940995,MIA-JFK-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/54556940995,https://www.airlines-manager.com/aircraft/show/105308268,11:00,20:44,338,"$670,464.00","$611,759.00","$1,809.94","$62,851.95"
MIA - PHX,54556940996,MIA-JFK-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/54556940996,https://www.airlines-manager.com/aircraft/show/105308264,12:00,21:44,338,"$670,464.00","$611,759.00","$1,809.94","$62,851.95"
MIA - PHX,54567120351,MIA-JFK-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/54567120351,https://www.airlines-manager.com/aircraft/show/105308267,16:15,1:59,338,"$670,464.00","$611,759.00","$1,809.94","$62,851.95"
MIA - PHX,54575909628,MIA-JFK-PHX 6,ERJ-175,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/54575909628,https://www.airlines-manager.com/aircraft/show/82683137,21:00,6:44,112,"$290,059.00","$249,922.00","$2,231.45","$25,676.92"
MIA - PIT,54536069892,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/54536069892,https://www.airlines-manager.com/aircraft/show/99920624,3:15,9:14,320,"$381,330.00","$339,654.00","$1,061.42","$56,766.69"
MIA - PIT,54551622685,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/54551622685,https://www.airlines-manager.com/aircraft/show/99920625,10:00,15:59,320,"$381,330.00","$339,654.00","$1,061.42","$56,766.69"
MIA - PIT,54567120371,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/54567120371,https://www.airlines-manager.com/aircraft/show/99920626,16:30,22:29,320,"$381,330.00","$339,654.00","$1,061.42","$56,766.69"
MIA - PIT,54575909584,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/54575909584,https://www.airlines-manager.com/aircraft/show/82323689,20:30,2:29,112,"$180,264.00","$156,468.00","$1,397.04","$26,150.64"
MIA - PIT,54575909585,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/54575909585,https://www.airlines-manager.com/aircraft/show/99920623,21:15,3:14,320,"$381,330.00","$339,654.00","$1,061.42","$56,766.69"
MIA - PLS,54536069886,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/54536069886,https://www.airlines-manager.com/aircraft/show/99326789,3:15,7:29,228,"$205,523.00","$184,430.00",$808.90,"$43,566.14"
MIA - PLS,54536069887,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/54536069887,https://www.airlines-manager.com/aircraft/show/104034460,5:00,9:14,228,"$205,523.00","$184,430.00",$808.90,"$43,566.14"
MIA - PLS,54551622569,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/54551622569,https://www.airlines-manager.com/aircraft/show/104034458,10:00,14:14,228,"$205,523.00","$184,430.00",$808.90,"$43,566.14"
MIA - PLS,54562128375,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/54562128375,https://www.airlines-manager.com/aircraft/show/104034459,14:15,18:29,228,"$205,523.00","$184,430.00",$808.90,"$43,566.14"
MIA - PLS,54567120388,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/54567120388,https://www.airlines-manager.com/aircraft/show/104034457,17:00,21:14,228,"$205,523.00","$184,430.00",$808.90,"$43,566.14"
MIA - PLS,54575909745,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/54575909745,https://www.airlines-manager.com/aircraft/show/104034461,22:00,2:14,228,"$205,523.00","$184,430.00",$808.90,"$43,566.14"
MIA - POS,54556941125,MIA 84B-1 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/54556941125,https://www.airlines-manager.com/aircraft/show/106676225,12:30,20:29,962,"$1,335,429.00","$1,218,322.00","$1,266.45","$152,608.18"
MIA - POS,54567120336,MIA 84B-6 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/54567120336,https://www.airlines-manager.com/aircraft/show/106676230,16:00,23:59,727,"$1,099,136.00","$994,924.00","$1,368.53","$124,625.14"
MIA - PSP,54536069775,MIA-PSP-BFF 5,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/54536069775,https://www.airlines-manager.com/aircraft/show/116789630,2:00,12:44,320,"$659,420.00","$601,722.00","$1,880.38","$56,061.06"
MIA - PSP,54551622555,MIA-PSP-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/54551622555,https://www.airlines-manager.com/aircraft/show/116789631,10:00,20:44,320,"$659,420.00","$601,722.00","$1,880.38","$56,061.06"
MIA - PSP,54562128282,MIA-PSP-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/54562128282,https://www.airlines-manager.com/aircraft/show/116789634,14:00,0:44,320,"$659,420.00","$601,722.00","$1,880.38","$56,061.06"
MIA - PSP,54562128283,MIA-PSP-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/54562128283,https://www.airlines-manager.com/aircraft/show/116789632,14:15,0:59,320,"$659,420.00","$601,722.00","$1,880.38","$56,061.06"
MIA - PSP,54580945183,MIA-PSP-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/54580945183,https://www.airlines-manager.com/aircraft/show/116789633,23:00,9:44,239,"$555,842.00","$503,003.00","$2,104.62","$46,863.63"
MIA - PUJ,54536069918,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/54536069918,https://www.airlines-manager.com/aircraft/show/104034458,3:30,9:14,228,"$275,787.00","$249,167.00","$1,092.84","$43,459.36"
MIA - PUJ,54551622567,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/54551622567,https://www.airlines-manager.com/aircraft/show/104034461,10:00,15:44,228,"$275,787.00","$249,167.00","$1,092.84","$43,459.36"
MIA - PUJ,54567120332,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/54567120332,https://www.airlines-manager.com/aircraft/show/107577220,16:00,21:44,0,"$94,907.00","$71,312.00",$0.00,"$12,438.14"
MIA - PUJ,54567120333,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/54567120333,https://www.airlines-manager.com/aircraft/show/104034460,16:15,21:59,228,"$275,787.00","$249,167.00","$1,092.84","$43,459.36"
MIA - PUJ,54567120334,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/54567120334,https://www.airlines-manager.com/aircraft/show/99326789,17:15,22:59,228,"$275,787.00","$249,167.00","$1,092.84","$43,459.36"
MIA - PUJ,54575909659,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/54575909659,https://www.airlines-manager.com/aircraft/show/104034457,21:15,2:59,228,"$275,787.00","$249,167.00","$1,092.84","$43,459.36"
MIA - PUJ,54575909660,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/54575909660,https://www.airlines-manager.com/aircraft/show/104034459,22:00,3:44,228,"$275,787.00","$249,167.00","$1,092.84","$43,459.36"
MIA - PVD,54536069677,MIA-BUR-PVD 3,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/54536069677,https://www.airlines-manager.com/aircraft/show/108834805,1:15,7:59,310,"$425,919.00","$389,690.00","$1,257.06","$57,874.75"
MIA - PVD,54545804726,MIA-BUR-PVD 5 B,A319-100,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/54545804726,https://www.airlines-manager.com/aircraft/show/108834807,7:15,13:59,198,"$321,428.00","$292,393.00","$1,476.73","$43,424.70"
MIA - PVD,54556940935,MIA-BUR-PVD 2,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/54556940935,https://www.airlines-manager.com/aircraft/show/108834804,11:00,17:44,310,"$425,919.00","$389,690.00","$1,257.06","$57,874.75"
MIA - PVD,54567120400,MIA-BUR-PVD 4,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/54567120400,https://www.airlines-manager.com/aircraft/show/108834806,17:00,23:44,310,"$425,919.00","$389,690.00","$1,257.06","$57,874.75"
MIA - PVD,54580945014,MIA-BUR-PVD 1,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/54580945014,https://www.airlines-manager.com/aircraft/show/108834803,22:15,4:59,310,"$425,919.00","$389,690.00","$1,257.06","$57,874.75"
MIA - PWM,54545804735,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/54545804735,https://www.airlines-manager.com/aircraft/show/94886629,7:30,14:59,310,"$466,211.00","$428,287.00","$1,381.57","$57,232.12"
MIA - PWM,54562128353,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/54562128353,https://www.airlines-manager.com/aircraft/show/94886626,14:00,21:29,310,"$466,211.00","$428,287.00","$1,381.57","$57,232.12"
MIA - PWM,54571726756,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/54571726756,https://www.airlines-manager.com/aircraft/show/96692674,18:45,2:14,310,"$466,211.00","$428,287.00","$1,381.57","$57,232.12"
MIA - PWM,54575909608,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/54575909608,https://www.airlines-manager.com/aircraft/show/105601657,20:45,4:14,112,"$220,140.00","$195,020.00","$1,741.25","$26,060.58"
MIA - PWM,54580945241,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/54580945241,https://www.airlines-manager.com/aircraft/show/94886625,23:45,7:14,310,"$466,211.00","$428,287.00","$1,381.57","$57,232.12"
MIA - RAP,54536069411,MIA-RAP-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/54536069411,https://www.airlines-manager.com/aircraft/show/116789624,0:00,8:59,320,"$561,298.00","$511,354.00","$1,597.98","$56,922.52"
MIA - RAP,54536069412,MIA-RAP-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/54536069412,https://www.airlines-manager.com/aircraft/show/116789622,2:00,10:59,320,"$561,298.00","$511,354.00","$1,597.98","$56,922.52"
MIA - RAP,54551622560,MIA-RAP-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/54551622560,https://www.airlines-manager.com/aircraft/show/116789625,10:00,18:59,320,"$561,298.00","$511,354.00","$1,597.98","$56,922.52"
MIA - RAP,54562128412,MIA-RAP-GRR 5,ERJ-175,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/54562128412,https://www.airlines-manager.com/aircraft/show/116042630,15:00,23:59,112,"$264,806.00","$234,612.00","$2,094.75","$26,116.36"
MIA - RAP,54567120431,MIA-RAP-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/54567120431,https://www.airlines-manager.com/aircraft/show/116789623,17:15,2:14,320,"$561,298.00","$511,354.00","$1,597.98","$56,922.52"
MIA - RDU,54536069971,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/54536069971,https://www.airlines-manager.com/aircraft/show/99920626,4:30,9:14,320,"$309,466.00","$273,290.00",$854.03,"$57,737.32"
MIA - RDU,54551622428,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/54551622428,https://www.airlines-manager.com/aircraft/show/82323689,8:30,13:14,112,"$147,399.00","$127,266.00","$1,136.30","$26,887.18"
MIA - RDU,54551622429,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/54551622429,https://www.airlines-manager.com/aircraft/show/99920623,10:00,14:44,320,"$309,466.00","$273,290.00",$854.03,"$57,737.32"
MIA - RDU,54567120328,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/54567120328,https://www.airlines-manager.com/aircraft/show/99920624,16:00,20:44,320,"$309,466.00","$273,290.00",$854.03,"$57,737.32"
MIA - RDU,54575909753,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/54575909753,https://www.airlines-manager.com/aircraft/show/99920625,22:00,2:44,320,"$309,466.00","$273,290.00",$854.03,"$57,737.32"
MIA - RIC,54551622437,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/54551622437,https://www.airlines-manager.com/aircraft/show/110883112,8:30,13:44,310,"$335,679.00","$304,397.00",$981.93,"$58,165.03"
MIA - RIC,54556940942,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/54556940942,https://www.airlines-manager.com/aircraft/show/110883111,11:00,16:14,310,"$335,679.00","$304,397.00",$981.93,"$58,165.03"
MIA - RIC,54567120376,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/54567120376,https://www.airlines-manager.com/aircraft/show/104353572,16:45,21:59,112,"$159,561.00","$139,347.00","$1,244.17","$26,626.82"
MIA - RIC,54571726848,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/54571726848,https://www.airlines-manager.com/aircraft/show/110883110,19:45,0:59,310,"$335,679.00","$304,397.00",$981.93,"$58,165.03"
MIA - RIC,54575909671,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/54575909671,https://www.airlines-manager.com/aircraft/show/110883113,21:30,2:44,310,"$335,679.00","$304,397.00",$981.93,"$58,165.03"
MIA - RNO,54536069629,MIA-RNO-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/54536069629,https://www.airlines-manager.com/aircraft/show/105223010,1:00,12:44,198,"$543,785.00","$497,948.00","$2,514.89","$42,438.75"
MIA - RNO,54556941004,MIA-RNO-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/54556941004,https://www.airlines-manager.com/aircraft/show/86238755,11:00,22:29,320,"$721,868.00","$659,017.00","$2,059.43","$57,389.00"
MIA - RNO,54556941005,MIA-RNO-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/54556941005,https://www.airlines-manager.com/aircraft/show/90489722,13:00,0:29,320,"$721,868.00","$659,017.00","$2,059.43","$57,389.00"
MIA - RNO,54562128407,MIA-RNO-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/54562128407,https://www.airlines-manager.com/aircraft/show/86238756,15:00,2:29,320,"$721,868.00","$659,017.00","$2,059.43","$57,389.00"
MIA - RNO,54575909723,MIA-RNO-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/54575909723,https://www.airlines-manager.com/aircraft/show/90489723,22:00,9:29,320,"$721,868.00","$659,017.00","$2,059.43","$57,389.00"
MIA - RSW,54536069937,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/54536069937,https://www.airlines-manager.com/aircraft/show/110114297,4:00,6:29,228,"$65,659.00","$47,406.00",$207.92,"$19,089.66"
MIA - RSW,54551622491,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/54551622491,https://www.airlines-manager.com/aircraft/show/110114295,9:15,11:44,228,"$65,659.00","$47,406.00",$207.92,"$19,089.66"
MIA - RSW,54551622492,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/54551622492,https://www.airlines-manager.com/aircraft/show/110114296,10:15,12:44,228,"$65,659.00","$47,406.00",$207.92,"$19,089.66"
MIA - RSW,54562128320,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/54562128320,https://www.airlines-manager.com/aircraft/show/110114300,14:00,16:29,228,"$65,659.00","$47,406.00",$207.92,"$19,089.66"
MIA - RSW,54575909633,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/54575909633,https://www.airlines-manager.com/aircraft/show/110114299,21:00,23:29,228,"$65,659.00","$47,406.00",$207.92,"$19,089.66"
MIA - RSW,54580945187,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/54580945187,https://www.airlines-manager.com/aircraft/show/110114298,23:00,1:29,228,"$65,659.00","$47,406.00",$207.92,"$19,089.66"
MIA - SAN,54536069735,MIA-BWI-YYZ 2,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/54536069735,https://www.airlines-manager.com/aircraft/show/92153440,1:45,12:44,310,"$686,006.00","$629,207.00","$2,029.70","$57,287.44"
MIA - SAN,54551622529,MIA-BWI-YYZ 3,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/54551622529,https://www.airlines-manager.com/aircraft/show/92153441,10:00,20:59,310,"$686,006.00","$629,207.00","$2,029.70","$57,287.44"
MIA - SAN,54556941116,MIA-BWI-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/54556941116,https://www.airlines-manager.com/aircraft/show/92137503,12:00,22:59,136,"$299,558.00","$265,819.00","$1,954.55","$24,202.03"
MIA - SAN,54567120416,MIA-BWI-YYZ 4,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/54567120416,https://www.airlines-manager.com/aircraft/show/92153442,17:00,3:59,310,"$686,006.00","$629,207.00","$2,029.70","$57,287.44"
MIA - SAN,54571726801,MIA-BWI-YYZ 5,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/54571726801,https://www.airlines-manager.com/aircraft/show/92153439,19:00,5:59,310,"$686,006.00","$629,207.00","$2,029.70","$57,287.44"
MIA - SAN,54580945078,MIA-BWI-YYZ 1,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/54580945078,https://www.airlines-manager.com/aircraft/show/92153443,22:45,9:44,310,"$686,006.00","$629,207.00","$2,029.70","$57,287.44"
MIA - SAT,54536069898,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/54536069898,https://www.airlines-manager.com/aircraft/show/107763562,3:15,9:44,320,"$410,437.00","$369,153.00","$1,153.60","$56,938.77"
MIA - SAT,54556940934,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/54556940934,https://www.airlines-manager.com/aircraft/show/107763565,11:00,17:29,320,"$410,437.00","$369,153.00","$1,153.60","$56,938.77"
MIA - SAT,54562128389,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/54562128389,https://www.airlines-manager.com/aircraft/show/107467213,14:45,21:14,112,"$193,677.00","$169,711.00","$1,515.28","$26,176.50"
MIA - SAT,54575909590,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/54575909590,https://www.airlines-manager.com/aircraft/show/107763561,20:30,2:59,320,"$410,437.00","$369,153.00","$1,153.60","$56,938.77"
MIA - SAT,54575909591,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/54575909591,https://www.airlines-manager.com/aircraft/show/107763566,20:45,3:14,320,"$410,437.00","$369,153.00","$1,153.60","$56,938.77"
MIA - SAV,54536069516,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/54536069516,https://www.airlines-manager.com/aircraft/show/110883111,0:15,3:59,310,"$214,539.00","$189,268.00",$610.54,"$50,696.79"
MIA - SAV,54545804655,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/54545804655,https://www.airlines-manager.com/aircraft/show/104353572,6:00,9:44,112,"$100,203.00","$84,270.00",$752.41,"$22,572.32"
MIA - SAV,54551622475,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/54551622475,https://www.airlines-manager.com/aircraft/show/110883110,9:00,12:44,310,"$214,539.00","$189,268.00",$610.54,"$50,696.79"
MIA - SAV,54556941029,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/54556941029,https://www.airlines-manager.com/aircraft/show/110883113,11:00,14:44,310,"$214,539.00","$189,268.00",$610.54,"$50,696.79"
MIA - SAV,54575909750,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/54575909750,https://www.airlines-manager.com/aircraft/show/110883112,22:00,1:44,267,"$197,041.00","$172,290.00",$645.28,"$46,149.11"
MIA - SDF,54536069565,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/54536069565,https://www.airlines-manager.com/aircraft/show/94886629,0:45,6:29,310,"$354,795.00","$320,429.00","$1,033.64","$55,888.78"
MIA - SDF,54545804769,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/54545804769,https://www.airlines-manager.com/aircraft/show/94886626,8:15,13:59,310,"$354,795.00","$320,429.00","$1,033.64","$55,888.78"
MIA - SDF,54556941153,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/54556941153,https://www.airlines-manager.com/aircraft/show/96692674,13:00,18:44,310,"$354,795.00","$320,429.00","$1,033.64","$55,888.78"
MIA - SDF,54562128414,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/54562128414,https://www.airlines-manager.com/aircraft/show/105601657,15:00,20:44,112,"$167,661.00","$145,448.00","$1,298.64","$25,368.84"
MIA - SDF,54567120254,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/54567120254,https://www.airlines-manager.com/aircraft/show/107527976,15:45,21:29,0,"$94,306.00","$70,011.00",#DIV/0!,"$12,211.22"
MIA - SDF,54571726680,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/54571726680,https://www.airlines-manager.com/aircraft/show/94886625,18:00,23:44,310,"$346,824.00","$313,959.00","$1,012.77","$54,760.29"
MIA - SEA,54536069679,MIA-LAS-SEA 3,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/54536069679,https://www.airlines-manager.com/aircraft/show/105093927,1:30,13:59,338,"$830,781.00","$762,732.00","$2,256.60","$61,100.03"
MIA - SEA,54551622552,MIA-LAS-SEA 4,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/54551622552,https://www.airlines-manager.com/aircraft/show/105093928,10:00,22:29,338,"$830,781.00","$762,732.00","$2,256.60","$61,100.03"
MIA - SEA,54556941164,MIA-LAS-SEA 5,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/54556941164,https://www.airlines-manager.com/aircraft/show/105093929,13:00,1:29,338,"$830,781.00","$762,732.00","$2,256.60","$61,100.03"
MIA - SEA,54575909574,MIA-LAS-SEA 1,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/54575909574,https://www.airlines-manager.com/aircraft/show/105093925,20:30,8:59,338,"$830,781.00","$762,732.00","$2,256.60","$61,100.03"
MIA - SEA,54580945052,MIA-LAS-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/54580945052,https://www.airlines-manager.com/aircraft/show/113251304,22:30,11:14,198,"$575,630.00","$518,353.00","$2,617.94","$40,708.35"
MIA - SEA,54580945053,MIA-LAS-SEA 2,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/54580945053,https://www.airlines-manager.com/aircraft/show/105093926,23:30,11:59,338,"$830,781.00","$762,732.00","$2,256.60","$61,100.03"
MIA - SJC,54536069720,MIA-SJC-YYC 5,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/54536069720,https://www.airlines-manager.com/aircraft/show/107763563,1:45,13:44,320,"$731,356.00","$665,189.00","$2,078.72","$55,509.51"
MIA - SJC,54556941053,MIA-SJC-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/54556941053,https://www.airlines-manager.com/aircraft/show/107763569,12:00,23:59,320,"$731,356.00","$665,189.00","$2,078.72","$55,509.51"
MIA - SJC,54562128292,MIA-SJC-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/54562128292,https://www.airlines-manager.com/aircraft/show/107763568,14:00,1:59,320,"$731,356.00","$665,189.00","$2,078.72","$55,509.51"
MIA - SJC,54567120327,MIA-SJC-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/54567120327,https://www.airlines-manager.com/aircraft/show/107763567,16:00,3:59,320,"$731,356.00","$665,189.00","$2,078.72","$55,509.51"
MIA - SJC,54580945248,MIA-SJC-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/54580945248,https://www.airlines-manager.com/aircraft/show/107763564,23:45,11:44,320,"$731,356.00","$665,189.00","$2,078.72","$55,509.51"
MIA - SJU,54536069900,MIA-SJU-BOS 6 B,A319-100,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/54536069900,https://www.airlines-manager.com/aircraft/show/110582841,3:15,9:29,198,"$286,648.00","$257,583.00","$1,300.92","$41,323.48"
MIA - SJU,54551622706,MIA-SJU-BOS 2,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/54551622706,https://www.airlines-manager.com/aircraft/show/91352062,10:15,16:29,310,"$379,953.00","$343,678.00","$1,108.64","$55,135.51"
MIA - SJU,54556941119,MIA-SJU-BOS 3,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/54556941119,https://www.airlines-manager.com/aircraft/show/91352061,12:15,18:29,310,"$379,953.00","$343,678.00","$1,108.64","$55,135.51"
MIA - SJU,54571726703,MIA-SJU-BOS 4,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/54571726703,https://www.airlines-manager.com/aircraft/show/91352060,18:15,0:29,310,"$379,953.00","$343,678.00","$1,108.64","$55,135.51"
MIA - SJU,54571726704,MIA-SJU-BOS 5,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/54571726704,https://www.airlines-manager.com/aircraft/show/91352059,19:15,1:29,310,"$379,953.00","$343,678.00","$1,108.64","$55,135.51"
MIA - SJU,54580945073,MIA-SJU-BOS 1,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/54580945073,https://www.airlines-manager.com/aircraft/show/91352063,22:45,4:59,272,"$338,619.00","$303,704.00","$1,116.56","$48,722.57"
MIA - SKB,54536069687,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/54536069687,https://www.airlines-manager.com/aircraft/show/110114298,1:30,8:29,228,"$343,701.00","$314,172.00","$1,377.95","$44,988.83"
MIA - SKB,54536069688,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/54536069688,https://www.airlines-manager.com/aircraft/show/110114295,2:15,9:14,228,"$343,701.00","$314,172.00","$1,377.95","$44,988.83"
MIA - SKB,54536069689,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/54536069689,https://www.airlines-manager.com/aircraft/show/110114296,3:15,10:14,228,"$343,701.00","$314,172.00","$1,377.95","$44,988.83"
MIA - SKB,54545804684,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/54545804684,https://www.airlines-manager.com/aircraft/show/110114300,6:45,13:44,228,"$343,701.00","$314,172.00","$1,377.95","$44,988.83"
MIA - SKB,54562128321,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/54562128321,https://www.airlines-manager.com/aircraft/show/110114299,14:00,20:59,228,"$343,701.00","$314,172.00","$1,377.95","$44,988.83"
MIA - SKB,54575909630,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/54575909630,https://www.airlines-manager.com/aircraft/show/110114297,21:00,3:59,228,"$343,701.00","$314,172.00","$1,377.95","$44,988.83"
MIA - SLC,54536069471,MIA-SJU-BOS 2,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/54536069471,https://www.airlines-manager.com/aircraft/show/91352062,0:00,10:14,310,"$641,266.00","$583,680.00","$1,882.84","$57,037.13"
MIA - SLC,54536069472,MIA-SJU-BOS 4,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/54536069472,https://www.airlines-manager.com/aircraft/show/91352060,1:00,11:14,310,"$641,266.00","$583,680.00","$1,882.84","$57,037.13"
MIA - SLC,54536069473,MIA-SJU-BOS 3,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/54536069473,https://www.airlines-manager.com/aircraft/show/91352061,2:00,12:14,310,"$641,266.00","$583,680.00","$1,882.84","$57,037.13"
MIA - SLC,54551622484,MIA-SJU-BOS 5,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/54551622484,https://www.airlines-manager.com/aircraft/show/91352059,9:00,19:14,310,"$641,266.00","$583,680.00","$1,882.84","$57,037.13"
MIA - SLC,54551622485,MIA-SJU-BOS 6 B,A319-100,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/54551622485,https://www.airlines-manager.com/aircraft/show/110582841,10:00,20:14,198,"$481,931.00","$435,772.00","$2,200.87","$42,583.58"
MIA - SLC,54556941056,MIA-SJU-BOS 1,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/54556941056,https://www.airlines-manager.com/aircraft/show/91352063,12:00,22:14,310,"$641,266.00","$583,680.00","$1,882.84","$57,037.13"
MIA - SMF,54536069631,MIA-OAK-SMF 2,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/54536069631,https://www.airlines-manager.com/aircraft/show/91198619,1:00,12:59,320,"$731,563.00","$667,531.00","$2,086.03","$55,704.95"
MIA - SMF,54536069632,MIA-OAK-SMF 3,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/54536069632,https://www.airlines-manager.com/aircraft/show/91198616,3:00,14:59,320,"$731,563.00","$667,531.00","$2,086.03","$55,704.95"
MIA - SMF,54556940988,MIA-OAK-SMF 4,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/54556940988,https://www.airlines-manager.com/aircraft/show/91198618,11:00,22:59,320,"$731,563.00","$667,531.00","$2,086.03","$55,704.95"
MIA - SMF,54556940989,MIA-OAK-SMF 5,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/54556940989,https://www.airlines-manager.com/aircraft/show/91198617,13:00,0:59,320,"$731,563.00","$667,531.00","$2,086.03","$55,704.95"
MIA - SMF,54580945194,MIA-OAK-SMF 1,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/54580945194,https://www.airlines-manager.com/aircraft/show/91198615,23:00,10:59,320,"$731,563.00","$667,531.00","$2,086.03","$55,704.95"
MIA - STL,54536069696,MIA-ELP-MCI 1,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/54536069696,https://www.airlines-manager.com/aircraft/show/91806234,1:30,7:44,320,"$391,361.00","$347,788.00","$1,086.84","$55,794.87"
MIA - STL,54536069697,MIA-ELP-MCI 5 B,A319-100,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/54536069697,https://www.airlines-manager.com/aircraft/show/105093924,2:00,8:14,198,"$296,098.00","$265,339.00","$1,340.10","$42,567.75"
MIA - STL,54536069698,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/54536069698,https://www.airlines-manager.com/aircraft/show/107527976,3:15,9:29,0,"$102,664.00","$75,323.00",$0.00,"$12,083.90"
MIA - STL,54551622443,MIA-ELP-MCI 4,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/54551622443,https://www.airlines-manager.com/aircraft/show/91806231,8:30,14:44,320,"$391,361.00","$347,788.00","$1,086.84","$55,794.87"
MIA - STL,54551622444,MIA-ELP-MCI 3,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/54551622444,https://www.airlines-manager.com/aircraft/show/91806232,10:00,16:14,320,"$391,361.00","$347,788.00","$1,086.84","$55,794.87"
MIA - STL,54567120421,MIA-ELP-MCI 2,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/54567120421,https://www.airlines-manager.com/aircraft/show/91806235,17:00,23:14,320,"$391,361.00","$347,788.00","$1,086.84","$55,794.87"
MIA - SXM,54545804685,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/54545804685,https://www.airlines-manager.com/aircraft/show/110114299,6:45,13:44,228,"$333,459.00","$304,653.00","$1,336.20","$43,625.73"
MIA - SXM,54562128322,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/54562128322,https://www.airlines-manager.com/aircraft/show/110114297,14:00,20:59,228,"$333,459.00","$304,653.00","$1,336.20","$43,625.73"
MIA - SXM,54567120284,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/54567120284,https://www.airlines-manager.com/aircraft/show/110114298,16:00,22:59,228,"$333,459.00","$304,653.00","$1,336.20","$43,625.73"
MIA - SXM,54571726830,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/54571726830,https://www.airlines-manager.com/aircraft/show/110114295,19:15,2:14,228,"$333,459.00","$304,653.00","$1,336.20","$43,625.73"
MIA - SXM,54575909551,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/54575909551,https://www.airlines-manager.com/aircraft/show/110114296,20:15,3:14,228,"$333,459.00","$304,653.00","$1,336.20","$43,625.73"
MIA - SXM,54580945253,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/54580945253,https://www.airlines-manager.com/aircraft/show/110114300,23:45,6:44,228,"$333,459.00","$304,653.00","$1,336.20","$43,625.73"
MIA - SYR,54536069811,MIA-EUG-SYR 1,737-900ER,https://www.airlines-manager.com/network/showline/50424911,https://www.airlines-manager.com/network/showflight/54536069811,https://www.airlines-manager.com/aircraft/show/119652483,2:30,9:14,320,"$431,236.00","$389,819.00","$1,218.18","$57,893.91"
MIA - SYR,54545804721,MIA-EUG-SYR 3,737-900ER,https://www.airlines-manager.com/network/showline/50424911,https://www.airlines-manager.com/network/showflight/54545804721,https://www.airlines-manager.com/aircraft/show/119652481,7:15,13:59,320,"$431,236.00","$389,819.00","$1,218.18","$57,893.91"
MIA - SYR,54556941104,MIA-EUG-SYR 2,737-900ER,https://www.airlines-manager.com/network/showline/50424911,https://www.airlines-manager.com/network/showflight/54556941104,https://www.airlines-manager.com/aircraft/show/119652482,12:00,18:44,320,"$431,236.00","$389,819.00","$1,218.18","$57,893.91"
MIA - SYR,54562128279,MIA-EUG-SYR 4,737-900ER,https://www.airlines-manager.com/network/showline/50424911,https://www.airlines-manager.com/network/showflight/54562128279,https://www.airlines-manager.com/aircraft/show/119652480,14:00,20:44,320,"$431,236.00","$389,819.00","$1,218.18","$57,893.91"
MIA - TPA,54536069990,MIA-BUR-PVD 1,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/54536069990,https://www.airlines-manager.com/aircraft/show/108834803,5:00,7:59,310,"$127,616.00","$101,600.00",$327.74,"$34,055.87"
MIA - TPA,54556940957,MIA-BUR-PVD 3,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/54556940957,https://www.airlines-manager.com/aircraft/show/108834805,11:00,13:59,310,"$127,616.00","$101,600.00",$327.74,"$34,055.87"
MIA - TPA,54567120399,MIA-BUR-PVD 5 B,A319-100,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/54567120399,https://www.airlines-manager.com/aircraft/show/108834807,17:00,19:59,198,"$95,236.00","$74,415.00",$375.83,"$24,943.58"
MIA - TPA,54571726645,MIA-BUR-PVD 2,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/54571726645,https://www.airlines-manager.com/aircraft/show/108834804,17:45,20:44,310,"$127,616.00","$101,600.00",$327.74,"$34,055.87"
MIA - TPA,54580945242,MIA-BUR-PVD 4,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/54580945242,https://www.airlines-manager.com/aircraft/show/108834806,23:45,2:44,310,"$127,616.00","$101,600.00",$327.74,"$34,055.87"
MIA - TUL,54536069573,MIA-FAR-TUL 2,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/54536069573,https://www.airlines-manager.com/aircraft/show/110883160,0:45,7:29,320,"$415,861.00","$374,420.00","$1,170.06","$55,606.93"
MIA - TUL,54536069574,MIA-FAR-TUL 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/54536069574,https://www.airlines-manager.com/aircraft/show/87169421,3:00,9:44,112,"$196,167.00","$172,043.00","$1,536.10","$25,550.94"
MIA - TUL,54556941023,MIA-FAR-TUL 3,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/54556941023,https://www.airlines-manager.com/aircraft/show/110883161,11:00,17:44,320,"$415,861.00","$374,420.00","$1,170.06","$55,606.93"
MIA - TUL,54567120274,MIA-FAR-TUL 4,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/54567120274,https://www.airlines-manager.com/aircraft/show/110883162,16:00,22:44,320,"$415,861.00","$374,420.00","$1,170.06","$55,606.93"
MIA - TUL,54571726860,MIA-FAR-TUL 1,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/54571726860,https://www.airlines-manager.com/aircraft/show/110883159,19:45,2:29,320,"$415,861.00","$374,420.00","$1,170.06","$55,606.93"
MIA - TUS,54536069538,MIA-IAD-TUS 3,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/54536069538,https://www.airlines-manager.com/aircraft/show/97556719,0:30,9:59,310,"$591,231.00","$542,626.00","$1,750.41","$57,218.91"
MIA - TUS,54551622688,MIA-IAD-TUS 2,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/54551622688,https://www.airlines-manager.com/aircraft/show/97556720,10:00,19:29,310,"$591,231.00","$542,626.00","$1,750.41","$57,218.91"
MIA - TUS,54556941202,MIA-IAD-TUS 5,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/54556941202,https://www.airlines-manager.com/aircraft/show/97556716,13:00,22:29,310,"$591,231.00","$542,626.00","$1,750.41","$57,218.91"
MIA - TUS,54567120265,MIA-IAD-TUS 1,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/54567120265,https://www.airlines-manager.com/aircraft/show/97556721,15:45,1:14,310,"$591,231.00","$542,626.00","$1,750.41","$57,218.91"
MIA - TUS,54571726758,MIA-IAD-TUS 4,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/54571726758,https://www.airlines-manager.com/aircraft/show/97556718,18:45,4:14,310,"$591,231.00","$542,626.00","$1,750.41","$57,218.91"
MIA - TYS,54536069919,MIA-CID-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/54536069919,https://www.airlines-manager.com/aircraft/show/116789650,3:30,8:29,310,"$314,403.00","$285,010.00",$919.39,"$57,192.64"
MIA - TYS,54551622682,MIA-CID-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/54551622682,https://www.airlines-manager.com/aircraft/show/116789651,10:00,14:59,310,"$314,403.00","$285,010.00",$919.39,"$57,192.64"
MIA - TYS,54562128390,MIA-CID-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/54562128390,https://www.airlines-manager.com/aircraft/show/116789652,14:45,19:44,310,"$314,403.00","$285,010.00",$919.39,"$57,192.64"
MIA - TYS,54575909755,MIA-CID-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/54575909755,https://www.airlines-manager.com/aircraft/show/116789653,22:00,2:59,310,"$314,403.00","$285,010.00",$919.39,"$57,192.64"
MIA - YUL,54545804680,MIA-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/54545804680,https://www.airlines-manager.com/aircraft/show/113101225,6:30,13:59,400,"$628,165.00","$573,858.00","$1,434.65","$76,684.81"
MIA - YUL,54556941016,MIA-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/54556941016,https://www.airlines-manager.com/aircraft/show/113101226,11:00,18:29,400,"$628,165.00","$573,858.00","$1,434.65","$76,684.81"
MIA - YUL,54562128439,MIA-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/54562128439,https://www.airlines-manager.com/aircraft/show/113101227,15:00,22:29,400,"$628,165.00","$573,858.00","$1,434.65","$76,684.81"
MIA - YUL,54580945239,MIA-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/54580945239,https://www.airlines-manager.com/aircraft/show/113101224,23:45,7:14,400,"$628,165.00","$573,858.00","$1,434.65","$76,684.81"
MIA - YVR,54556941017,MIA-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/54556941017,https://www.airlines-manager.com/aircraft/show/113101224,11:00,23:44,400,"$1,044,001.00","$959,355.00","$2,398.39","$75,342.02"
MIA - YVR,54562128314,MIA-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/54562128314,https://www.airlines-manager.com/aircraft/show/113101225,14:00,2:44,400,"$1,044,001.00","$959,355.00","$2,398.39","$75,342.02"
MIA - YVR,54571726734,MIA-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/54571726734,https://www.airlines-manager.com/aircraft/show/113101226,18:30,7:14,400,"$1,044,001.00","$959,355.00","$2,398.39","$75,342.02"
MIA - YVR,54580945049,MIA-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/54580945049,https://www.airlines-manager.com/aircraft/show/113101227,22:30,11:14,400,"$1,044,001.00","$959,355.00","$2,398.39","$75,342.02"
MIA - YYC,54536069474,MIA-SJC-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/54536069474,https://www.airlines-manager.com/aircraft/show/107763569,0:00,11:44,320,"$729,765.00","$661,169.00","$2,066.15","$56,349.63"
MIA - YYC,54536069475,MIA-SJC-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/54536069475,https://www.airlines-manager.com/aircraft/show/107763568,2:00,13:44,320,"$729,765.00","$661,169.00","$2,066.15","$56,349.63"
MIA - YYC,54536069476,MIA-SJC-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/54536069476,https://www.airlines-manager.com/aircraft/show/107763567,4:00,15:44,320,"$729,765.00","$661,169.00","$2,066.15","$56,349.63"
MIA - YYC,54556941059,MIA-SJC-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/54556941059,https://www.airlines-manager.com/aircraft/show/107763564,12:00,23:44,320,"$729,765.00","$661,169.00","$2,066.15","$56,349.63"
MIA - YYC,54562128291,MIA-SJC-YYC 5,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/54562128291,https://www.airlines-manager.com/aircraft/show/107763563,14:00,1:44,320,"$729,765.00","$661,169.00","$2,066.15","$56,349.63"
MIA - YYZ,54536069834,MIA-BWI-YYZ 3,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/54536069834,https://www.airlines-manager.com/aircraft/show/92153441,2:45,9:44,310,"$441,120.00","$394,380.00","$1,272.19","$56,474.46"
MIA - YYZ,54536069835,MIA-BWI-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/54536069835,https://www.airlines-manager.com/aircraft/show/92137503,4:45,11:44,136,"$191,110.00","$163,252.00","$1,200.38","$23,377.37"
MIA - YYZ,54551622530,MIA-BWI-YYZ 4,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/54551622530,https://www.airlines-manager.com/aircraft/show/92153442,10:00,16:59,310,"$441,120.00","$394,380.00","$1,272.19","$56,474.46"
MIA - YYZ,54556941055,MIA-BWI-YYZ 5,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/54556941055,https://www.airlines-manager.com/aircraft/show/92153439,12:00,18:59,310,"$441,120.00","$394,380.00","$1,272.19","$56,474.46"
MIA - YYZ,54567120255,MIA-BWI-YYZ 1,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/54567120255,https://www.airlines-manager.com/aircraft/show/92153443,15:45,22:44,310,"$441,120.00","$394,380.00","$1,272.19","$56,474.46"
MIA - YYZ,54571726762,MIA-BWI-YYZ 2,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/54571726762,https://www.airlines-manager.com/aircraft/show/92153440,18:45,1:44,310,"$441,120.00","$394,380.00","$1,272.19","$56,474.46"
SFO - ABQ,54551622452,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/54551622452,https://www.airlines-manager.com/aircraft/show/88239553,8:45,14:14,320,"$349,794.00","$309,743.00",$967.95,"$56,488.09"
SFO - ABQ,54551622453,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/54551622453,https://www.airlines-manager.com/aircraft/show/105223003,8:45,14:14,198,"$265,648.00","$237,518.00","$1,199.59","$43,316.35"
SFO - ABQ,54551622454,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/54551622454,https://www.airlines-manager.com/aircraft/show/88239557,10:30,15:59,320,"$349,794.00","$309,743.00",$967.95,"$56,488.09"
SFO - ABQ,54562128437,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/54562128437,https://www.airlines-manager.com/aircraft/show/88239555,15:00,20:29,320,"$349,794.00","$309,743.00",$967.95,"$56,488.09"
SFO - ABQ,54580945119,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/54580945119,https://www.airlines-manager.com/aircraft/show/88239554,22:45,4:14,320,"$349,794.00","$309,743.00",$967.95,"$56,488.09"
SFO - ALB,54536069537,SFO-ALB-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/54536069537,https://www.airlines-manager.com/aircraft/show/112650097,0:30,12:29,310,"$733,764.00","$677,600.00","$2,185.81","$56,545.20"
SFO - ALB,54545804604,SFO-ALB-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/54545804604,https://www.airlines-manager.com/aircraft/show/112650096,5:30,17:29,310,"$733,764.00","$677,600.00","$2,185.81","$56,545.20"
SFO - ALB,54545804605,SFO-ALB-CAK 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/54545804605,https://www.airlines-manager.com/aircraft/show/112650090,7:30,19:29,198,"$548,975.00","$503,934.00","$2,545.12","$42,052.91"
SFO - ALB,54562128339,SFO-ALB-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/54562128339,https://www.airlines-manager.com/aircraft/show/112650099,14:00,1:59,310,"$733,764.00","$677,600.00","$2,185.81","$56,545.20"
SFO - ALB,54571726683,SFO-ALB-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/54571726683,https://www.airlines-manager.com/aircraft/show/112650098,18:00,5:59,310,"$733,764.00","$677,600.00","$2,185.81","$56,545.20"
SFO - ANC,54536069830,SFO-BWI-ANC 4,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/54536069830,https://www.airlines-manager.com/aircraft/show/106255848,2:30,12:14,338,"$662,649.00","$614,605.00","$1,818.36","$63,144.35"
SFO - ANC,54536069831,SFO-BWI-ANC 5,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/54536069831,https://www.airlines-manager.com/aircraft/show/106255849,3:30,13:14,338,"$662,649.00","$614,605.00","$1,818.36","$63,144.35"
SFO - ANC,54571726798,SFO-BWI-ANC 1,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/54571726798,https://www.airlines-manager.com/aircraft/show/106255845,19:00,4:44,338,"$662,649.00","$614,605.00","$1,818.36","$63,144.35"
SFO - ANC,54575909537,SFO-BWI-ANC 2,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/54575909537,https://www.airlines-manager.com/aircraft/show/106255846,20:00,5:44,338,"$662,649.00","$614,605.00","$1,818.36","$63,144.35"
SFO - ANC,54575909538,SFO-BWI-ANC 3,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/54575909538,https://www.airlines-manager.com/aircraft/show/106255847,21:00,6:44,338,"$662,649.00","$614,605.00","$1,818.36","$63,144.35"
SFO - ATL,54545804692,SFO 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/54545804692,https://www.airlines-manager.com/aircraft/show/85806724,6:45,16:29,932,"$1,616,492.00","$1,420,224.00","$1,523.85","$145,913.42"
SFO - ATL,54562128428,SFO-ATL-DFW S,A321-200,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/54562128428,https://www.airlines-manager.com/aircraft/show/106766698,15:00,1:29,232,"$628,938.00","$548,198.00","$2,362.92","$52,292.34"
SFO - ATL,54571726725,SFO 84A-2 E1,777-300,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/54571726725,https://www.airlines-manager.com/aircraft/show/86776211,18:30,4:14,853,"$1,518,842.00","$1,328,273.00","$1,557.18","$136,466.40"
SFO - ATL,54575909524,SFO-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/54575909524,https://www.airlines-manager.com/aircraft/show/107467212,20:00,6:29,56,"$233,404.00","$186,139.00","$3,323.91","$17,755.71"
SFO - AUS,54536069568,SFO-OGG-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/54536069568,https://www.airlines-manager.com/aircraft/show/92773481,0:45,8:44,310,"$500,986.00","$456,733.00","$1,473.33","$57,210.81"
SFO - AUS,54536069569,SFO-OGG-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/54536069569,https://www.airlines-manager.com/aircraft/show/92773480,2:45,10:44,310,"$500,986.00","$456,733.00","$1,473.33","$57,210.81"
SFO - AUS,54562128261,SFO-OGG-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/54562128261,https://www.airlines-manager.com/aircraft/show/92773479,13:30,21:29,310,"$500,986.00","$456,733.00","$1,473.33","$57,210.81"
SFO - AUS,54567120245,SFO-OGG-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/54567120245,https://www.airlines-manager.com/aircraft/show/92773478,15:30,23:29,310,"$500,986.00","$456,733.00","$1,473.33","$57,210.81"
SFO - AUS,54571726751,SFO-OGG-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/54571726751,https://www.airlines-manager.com/aircraft/show/92773477,18:30,2:29,310,"$500,986.00","$456,733.00","$1,473.33","$57,210.81"
SFO - BDL,54536069987,SFO-RSW-BDL 1,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/54536069987,https://www.airlines-manager.com/aircraft/show/84915098,4:45,16:59,320,"$741,734.00","$677,616.00","$2,117.55","$55,390.95"
SFO - BDL,54545804686,SFO-RSW-BDL 2,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/54545804686,https://www.airlines-manager.com/aircraft/show/84915099,6:45,18:59,320,"$741,734.00","$677,616.00","$2,117.55","$55,390.95"
SFO - BDL,54551622457,SFO-RSW-BDL 5,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/54551622457,https://www.airlines-manager.com/aircraft/show/84915102,8:45,20:59,320,"$741,734.00","$677,616.00","$2,117.55","$55,390.95"
SFO - BDL,54567120401,SFO-RSW-BDL 3,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/54567120401,https://www.airlines-manager.com/aircraft/show/84915100,17:00,5:14,320,"$741,734.00","$677,616.00","$2,117.55","$55,390.95"
SFO - BDL,54571726787,SFO-RSW-BDL 4,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/54571726787,https://www.airlines-manager.com/aircraft/show/84915101,19:00,7:14,320,"$741,734.00","$677,616.00","$2,117.55","$55,390.95"
SFO - BFF,54536069606,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/54536069606,https://www.airlines-manager.com/aircraft/show/114912306,1:00,7:14,112,"$183,580.00","$161,191.00","$1,439.21","$25,859.52"
SFO - BFF,54536069607,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/54536069607,https://www.airlines-manager.com/aircraft/show/114912268,2:15,8:29,310,"$389,607.00","$355,311.00","$1,146.16","$57,001.76"
SFO - BFF,54545804772,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/54545804772,https://www.airlines-manager.com/aircraft/show/114912263,8:15,14:29,310,"$389,607.00","$355,311.00","$1,146.16","$57,001.76"
SFO - BFF,54567120302,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/54567120302,https://www.airlines-manager.com/aircraft/show/114912264,16:00,22:14,310,"$389,607.00","$355,311.00","$1,146.16","$57,001.76"
SFO - BFF,54580945228,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/54580945228,https://www.airlines-manager.com/aircraft/show/114912267,23:30,5:44,310,"$389,607.00","$355,311.00","$1,146.16","$57,001.76"
SFO - BHM,54545804606,SFO-BHM-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/54545804606,https://www.airlines-manager.com/aircraft/show/117782568,5:30,15:29,320,"$621,859.00","$567,764.00","$1,774.26","$56,871.19"
SFO - BHM,54545804607,SFO-BHM-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/54545804607,https://www.airlines-manager.com/aircraft/show/117782569,7:00,16:59,320,"$621,859.00","$567,764.00","$1,774.26","$56,871.19"
SFO - BHM,54562128421,SFO-BHM-GRR 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/54562128421,https://www.airlines-manager.com/aircraft/show/117782583,15:00,0:59,198,"$468,047.00","$428,770.00","$2,165.51","$42,948.58"
SFO - BHM,54571726854,SFO-BHM-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/54571726854,https://www.airlines-manager.com/aircraft/show/117782567,19:45,5:44,320,"$621,859.00","$567,764.00","$1,774.26","$56,871.19"
SFO - BHM,54575909713,SFO-BHM-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/54575909713,https://www.airlines-manager.com/aircraft/show/117782566,22:00,7:59,320,"$621,859.00","$567,764.00","$1,774.26","$56,871.19"
SFO - BIL,54536069805,SFO-FAR-BIL 4,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/54536069805,https://www.airlines-manager.com/aircraft/show/117782587,2:15,7:59,310,"$355,725.00","$323,542.00","$1,043.68","$56,431.74"
SFO - BIL,54551622487,SFO-FAR-BIL 3,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/54551622487,https://www.airlines-manager.com/aircraft/show/117782586,9:15,14:59,310,"$355,725.00","$323,542.00","$1,043.68","$56,431.74"
SFO - BIL,54562128431,SFO-FAR-BIL 2,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/54562128431,https://www.airlines-manager.com/aircraft/show/117782585,15:00,20:44,310,"$355,725.00","$323,542.00","$1,043.68","$56,431.74"
SFO - BIL,54580945093,SFO-FAR-BIL 1,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/54580945093,https://www.airlines-manager.com/aircraft/show/117782584,22:45,4:29,307,"$353,713.00","$321,604.00","$1,047.57","$56,093.72"
SFO - BNA,54536069650,SFO-BNA-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/54536069650,https://www.airlines-manager.com/aircraft/show/103365580,1:15,10:59,320,"$605,610.00","$549,333.00","$1,716.67","$56,438.32"
SFO - BNA,54545804656,SFO-BNA-CMH 6,ERJ-175,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/54545804656,https://www.airlines-manager.com/aircraft/show/82323681,6:00,15:44,112,"$285,056.00","$251,196.00","$2,242.82","$25,807.81"
SFO - BNA,54556941176,SFO-BNA-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/54556941176,https://www.airlines-manager.com/aircraft/show/103365583,13:00,22:44,320,"$605,610.00","$549,333.00","$1,716.67","$56,438.32"
SFO - BNA,54562128397,SFO-BNA-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/54562128397,https://www.airlines-manager.com/aircraft/show/103365582,15:00,0:44,320,"$605,610.00","$549,333.00","$1,716.67","$56,438.32"
SFO - BNA,54567120256,SFO-BNA-CMH 5,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/54567120256,https://www.airlines-manager.com/aircraft/show/103365579,15:45,1:29,320,"$605,610.00","$549,333.00","$1,716.67","$56,438.32"
SFO - BNA,54580945220,SFO-BNA-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/54580945220,https://www.airlines-manager.com/aircraft/show/103365581,23:15,8:59,320,"$605,610.00","$549,333.00","$1,716.67","$56,438.32"
SFO - BOI,54536069652,SFO-CLE-MKE 2,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/54536069652,https://www.airlines-manager.com/aircraft/show/92519369,1:15,5:29,320,"$247,187.00","$216,452.00",$676.41,"$51,130.39"
SFO - BOI,54551622511,SFO-CLE-MKE 1,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/54551622511,https://www.airlines-manager.com/aircraft/show/92519368,9:45,13:59,320,"$247,187.00","$216,452.00",$676.41,"$51,130.39"
SFO - BOI,54562128387,SFO-CLE-MKE 4,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/54562128387,https://www.airlines-manager.com/aircraft/show/92519371,14:45,18:59,320,"$247,187.00","$216,452.00",$676.41,"$51,130.39"
SFO - BOI,54567120289,SFO-CLE-MKE 3,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/54567120289,https://www.airlines-manager.com/aircraft/show/92519367,16:00,20:14,320,"$247,187.00","$216,452.00",$676.41,"$51,130.39"
SFO - BOS,54536069499,SFO-BOS-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/54536069499,https://www.airlines-manager.com/aircraft/show/104864961,0:15,12:44,338,"$837,724.00","$774,367.00","$2,291.03","$62,032.07"
SFO - BOS,54556941099,SFO CARGO 2,737-700,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/54556941099,https://www.airlines-manager.com/aircraft/show/107573128,12:00,0:29,0,"$212,591.00","$161,688.00",#DIV/0!,"$12,952.31"
SFO - BOS,54556941100,SFO-BOS-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/54556941100,https://www.airlines-manager.com/aircraft/show/104901564,13:00,1:29,338,"$837,724.00","$774,367.00","$2,291.03","$62,032.07"
SFO - BOS,54562128310,SFO-BOS-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/54562128310,https://www.airlines-manager.com/aircraft/show/104870960,14:00,2:29,338,"$837,724.00","$774,367.00","$2,291.03","$62,032.07"
SFO - BOS,54567120269,SFO-BOS-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/54567120269,https://www.airlines-manager.com/aircraft/show/104874465,15:45,4:14,338,"$837,724.00","$774,367.00","$2,291.03","$62,032.07"
SFO - BOS,54575909569,SFO-BOS-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/54575909569,https://www.airlines-manager.com/aircraft/show/104901544,20:15,8:44,338,"$837,724.00","$774,367.00","$2,291.03","$62,032.07"
SFO - BTV,54536069442,SFO-BTV-LEX 4,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/54536069442,https://www.airlines-manager.com/aircraft/show/112650092,0:00,11:59,310,"$729,848.00","$673,863.00","$2,173.75","$56,233.35"
SFO - BTV,54545804649,SFO-BTV-LEX 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/54545804649,https://www.airlines-manager.com/aircraft/show/112650089,6:00,17:59,198,"$546,636.00","$501,737.00","$2,534.03","$41,869.57"
SFO - BTV,54562128341,SFO-BTV-LEX 1,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/54562128341,https://www.airlines-manager.com/aircraft/show/112650095,14:00,1:59,310,"$729,848.00","$673,863.00","$2,173.75","$56,233.35"
SFO - BTV,54571726686,SFO-BTV-LEX 2,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/54571726686,https://www.airlines-manager.com/aircraft/show/112650094,18:00,5:59,310,"$729,848.00","$673,863.00","$2,173.75","$56,233.35"
SFO - BTV,54575909535,SFO-BTV-LEX 3,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/54575909535,https://www.airlines-manager.com/aircraft/show/112650093,20:00,7:59,310,"$729,848.00","$673,863.00","$2,173.75","$56,233.35"
SFO - BUF,54536069719,SFO-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/54536069719,https://www.airlines-manager.com/aircraft/show/112650108,1:30,12:29,310,"$687,067.00","$633,609.00","$2,043.90","$57,688.22"
SFO - BUF,54545804592,SFO-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/54545804592,https://www.airlines-manager.com/aircraft/show/112650107,5:30,16:29,310,"$687,067.00","$633,609.00","$2,043.90","$57,688.22"
SFO - BUF,54545804593,SFO-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/54545804593,https://www.airlines-manager.com/aircraft/show/112650106,7:30,18:29,310,"$687,067.00","$633,609.00","$2,043.90","$57,688.22"
SFO - BUF,54556941155,SFO-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/54556941155,https://www.airlines-manager.com/aircraft/show/112650105,13:00,23:59,310,"$687,067.00","$633,609.00","$2,043.90","$57,688.22"
SFO - BUF,54571726684,SFO-PVD-BUF 5,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/54571726684,https://www.airlines-manager.com/aircraft/show/112650104,18:00,4:59,310,"$687,067.00","$633,609.00","$2,043.90","$57,688.22"
SFO - BUR,54536069795,SFO-SAV-JAN 1,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/54536069795,https://www.airlines-manager.com/aircraft/show/114912265,2:15,5:44,310,"$173,461.00","$150,951.00",$486.94,"$43,335.22"
SFO - BUR,54536069796,SFO-SAV-JAN 4,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/54536069796,https://www.airlines-manager.com/aircraft/show/114912270,4:15,7:44,310,"$173,461.00","$150,951.00",$486.94,"$43,335.22"
SFO - BUR,54556941039,SFO-SAV-JAN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/54556941039,https://www.airlines-manager.com/aircraft/show/114917486,11:30,14:59,198,"$130,719.00","$112,697.00",$569.18,"$32,353.21"
SFO - BUR,54567120241,SFO-SAV-JAN 3,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/54567120241,https://www.airlines-manager.com/aircraft/show/114912269,15:30,18:59,310,"$173,461.00","$150,951.00",$486.94,"$43,335.22"
SFO - BUR,54567120242,SFO-SAV-JAN 2,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/54567120242,https://www.airlines-manager.com/aircraft/show/114912266,17:00,20:29,310,"$173,461.00","$150,951.00",$486.94,"$43,335.22"
SFO - BWI,54536069540,SFO CARGO 2,737-700,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/54536069540,https://www.airlines-manager.com/aircraft/show/107573128,0:30,11:59,0,"$197,440.00","$150,701.00",$0.00,"$13,123.45"
SFO - BWI,54536069541,SFO-BWI-ANC 1,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/54536069541,https://www.airlines-manager.com/aircraft/show/106255845,4:45,16:14,338,"$785,039.00","$726,656.00","$2,149.87","$63,279.19"
SFO - BWI,54545804626,SFO-BWI-ANC 2,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/54545804626,https://www.airlines-manager.com/aircraft/show/106255846,5:45,17:14,338,"$785,039.00","$726,656.00","$2,149.87","$63,279.19"
SFO - BWI,54545804627,SFO-BWI-ANC 3,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/54545804627,https://www.airlines-manager.com/aircraft/show/106255847,6:45,18:14,338,"$785,039.00","$726,656.00","$2,149.87","$63,279.19"
SFO - BWI,54562128408,SFO-BWI-ANC 4,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/54562128408,https://www.airlines-manager.com/aircraft/show/106255848,15:00,2:29,338,"$785,039.00","$726,656.00","$2,149.87","$63,279.19"
SFO - BWI,54567120339,SFO-BWI-ANC 5,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/54567120339,https://www.airlines-manager.com/aircraft/show/106255849,16:00,3:29,338,"$785,039.00","$726,656.00","$2,149.87","$63,279.19"
SFO - CAK,54536069770,SFO-ALB-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/54536069770,https://www.airlines-manager.com/aircraft/show/112650099,2:00,12:29,310,"$657,886.00","$607,712.00","$1,960.36","$57,969.35"
SFO - CAK,54545804650,SFO-ALB-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/54545804650,https://www.airlines-manager.com/aircraft/show/112650098,6:00,16:29,310,"$657,886.00","$607,712.00","$1,960.36","$57,969.35"
SFO - CAK,54562128338,SFO-ALB-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/54562128338,https://www.airlines-manager.com/aircraft/show/112650097,14:00,0:29,310,"$657,886.00","$607,712.00","$1,960.36","$57,969.35"
SFO - CAK,54571726800,SFO-ALB-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/54571726800,https://www.airlines-manager.com/aircraft/show/112650096,19:00,5:29,310,"$657,886.00","$607,712.00","$1,960.36","$57,969.35"
SFO - CAK,54575909632,SFO-ALB-CAK 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/54575909632,https://www.airlines-manager.com/aircraft/show/112650090,21:00,7:29,198,"$494,289.00","$454,056.00","$2,293.21","$43,312.18"
SFO - CHS,54536069711,SFO-MHT-CHS 1,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/54536069711,https://www.airlines-manager.com/aircraft/show/114917465,1:30,12:44,320,"$701,616.00","$642,467.00","$2,007.71","$57,192.91"
SFO - CHS,54545804578,SFO-MHT-CHS 2,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/54545804578,https://www.airlines-manager.com/aircraft/show/114917464,5:30,16:44,320,"$701,616.00","$642,467.00","$2,007.71","$57,192.91"
SFO - CHS,54551622434,SFO-MHT-CHS 5 B,A319-100,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/54551622434,https://www.airlines-manager.com/aircraft/show/114912262,8:30,19:59,198,"$529,189.00","$485,932.00","$2,454.20","$42,316.28"
SFO - CHS,54556941167,SFO-MHT-CHS 3,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/54556941167,https://www.airlines-manager.com/aircraft/show/114917463,13:00,0:14,320,"$701,616.00","$642,467.00","$2,007.71","$57,192.91"
SFO - CHS,54567120413,SFO-MHT-CHS 4,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/54567120413,https://www.airlines-manager.com/aircraft/show/114266973,17:00,4:14,320,"$701,616.00","$642,467.00","$2,007.71","$57,192.91"
SFO - CID,54536069716,SFO-YEG-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/54536069716,https://www.airlines-manager.com/aircraft/show/117782561,1:30,9:59,320,"$528,124.00","$481,175.00","$1,503.67","$56,720.04"
SFO - CID,54545804673,SFO-YEG-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/54545804673,https://www.airlines-manager.com/aircraft/show/116932364,6:30,14:59,320,"$528,124.00","$481,175.00","$1,503.67","$56,720.04"
SFO - CID,54556941134,SFO-YEG-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/54556941134,https://www.airlines-manager.com/aircraft/show/117782559,13:00,21:29,320,"$528,124.00","$481,175.00","$1,503.67","$56,720.04"
SFO - CID,54571726806,SFO-YEG-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/54571726806,https://www.airlines-manager.com/aircraft/show/117782560,19:00,3:29,320,"$528,124.00","$481,175.00","$1,503.67","$56,720.04"
SFO - CID,54575909639,SFO-YEG-YYC 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/54575909639,https://www.airlines-manager.com/aircraft/show/117782581,21:00,5:29,198,"$399,077.00","$365,143.00","$1,844.16","$43,042.40"
SFO - CLE,54545804583,SFO-CLE-MKE 2,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/54545804583,https://www.airlines-manager.com/aircraft/show/92519369,5:30,15:59,320,"$650,843.00","$593,124.00","$1,853.51","$56,577.81"
SFO - CLE,54545804584,SFO-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/54545804584,https://www.airlines-manager.com/aircraft/show/107467212,6:30,16:59,112,"$305,917.00","$270,776.00","$2,417.64","$25,829.19"
SFO - CLE,54545804585,SFO-CLE-MKE 5,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/54545804585,https://www.airlines-manager.com/aircraft/show/92519370,7:30,17:59,320,"$650,843.00","$593,124.00","$1,853.51","$56,577.81"
SFO - CLE,54562128297,SFO-CLE-MKE 1,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/54562128297,https://www.airlines-manager.com/aircraft/show/92519368,14:00,0:29,320,"$650,843.00","$593,124.00","$1,853.51","$56,577.81"
SFO - CLE,54571726804,SFO-CLE-MKE 4,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/54571726804,https://www.airlines-manager.com/aircraft/show/92519371,19:00,5:29,320,"$650,843.00","$593,124.00","$1,853.51","$56,577.81"
SFO - CLE,54575909549,SFO-CLE-MKE 3,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/54575909549,https://www.airlines-manager.com/aircraft/show/92519367,20:15,6:44,320,"$650,843.00","$593,124.00","$1,853.51","$56,577.81"
SFO - CLT,54536069440,SFO-IAD-CLT 3,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/54536069440,https://www.airlines-manager.com/aircraft/show/96135563,0:00,10:44,400,"$889,119.00","$809,154.00","$2,022.89","$75,387.02"
SFO - CLT,54545804636,SFO-IAD-CLT 4,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/54545804636,https://www.airlines-manager.com/aircraft/show/96135562,6:00,16:44,400,"$889,119.00","$809,154.00","$2,022.89","$75,387.02"
SFO - CLT,54562128247,SFO-IAD-CLT 1,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/54562128247,https://www.airlines-manager.com/aircraft/show/96135565,13:15,23:59,400,"$889,119.00","$809,154.00","$2,022.89","$75,387.02"
SFO - CLT,54562128248,SFO-IAD-CLT 5,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/54562128248,https://www.airlines-manager.com/aircraft/show/96135561,15:15,1:59,400,"$889,119.00","$809,154.00","$2,022.89","$75,387.02"
SFO - CLT,54567120439,SFO-IAD-CLT 2,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/54567120439,https://www.airlines-manager.com/aircraft/show/96135564,17:15,3:59,400,"$889,119.00","$809,154.00","$2,022.89","$75,387.02"
SFO - CMH,54536069570,SFO-BNA-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/54536069570,https://www.airlines-manager.com/aircraft/show/103365582,0:45,10:59,320,"$635,712.00","$578,415.00","$1,807.55","$56,522.64"
SFO - CMH,54545804594,SFO-BNA-CMH 5,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/54545804594,https://www.airlines-manager.com/aircraft/show/103365579,5:30,15:44,320,"$635,712.00","$578,415.00","$1,807.55","$56,522.64"
SFO - CMH,54556941175,SFO-BNA-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/54556941175,https://www.airlines-manager.com/aircraft/show/103365581,13:00,23:14,320,"$635,712.00","$578,415.00","$1,807.55","$56,522.64"
SFO - CMH,54562128398,SFO-BNA-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/54562128398,https://www.airlines-manager.com/aircraft/show/103365580,15:00,1:14,320,"$635,712.00","$578,415.00","$1,807.55","$56,522.64"
SFO - CMH,54567120251,SFO-BNA-CMH 6,ERJ-175,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/54567120251,https://www.airlines-manager.com/aircraft/show/82323681,15:45,1:59,112,"$299,378.00","$264,568.00","$2,362.21","$25,853.55"
SFO - CMH,54580945169,SFO-BNA-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/54580945169,https://www.airlines-manager.com/aircraft/show/103365583,22:45,8:59,320,"$635,712.00","$578,415.00","$1,807.55","$56,522.64"
SFO - CVG,54536069996,SFO-IND-CVG 3,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/54536069996,https://www.airlines-manager.com/aircraft/show/99316504,5:00,14:59,310,"$627,255.00","$574,228.00","$1,852.35","$57,518.66"
SFO - CVG,54545804712,SFO-IND-CVG 5,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/54545804712,https://www.airlines-manager.com/aircraft/show/99316502,7:00,16:59,310,"$627,255.00","$574,228.00","$1,852.35","$57,518.66"
SFO - CVG,54556941192,SFO-IND-CVG 2,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/54556941192,https://www.airlines-manager.com/aircraft/show/99316505,13:00,22:59,310,"$627,255.00","$574,228.00","$1,852.35","$57,518.66"
SFO - CVG,54562128445,SFO-IND-CVG 4,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/54562128445,https://www.airlines-manager.com/aircraft/show/99316503,15:00,0:59,310,"$627,255.00","$574,228.00","$1,852.35","$57,518.66"
SFO - CVG,54567120403,SFO-IND-CVG 6,ERJ-175,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/54567120403,https://www.airlines-manager.com/aircraft/show/99174346,17:00,2:59,112,"$294,167.00","$258,804.00","$2,310.75","$25,923.61"
SFO - CVG,54580945089,SFO-IND-CVG 1,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/54580945089,https://www.airlines-manager.com/aircraft/show/99316506,22:45,8:44,310,"$627,255.00","$574,228.00","$1,852.35","$57,518.66"
SFO - DEL,54536069469,SFO 168B-1 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/54536069469,https://www.airlines-manager.com/aircraft/show/86832727,0:00,5:29,1046,"$5,781,072.00","$5,362,503.00","$5,126.68","$977,964.07"
SFO - DEL,54536069470,SFO 168A-1 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/54536069470,https://www.airlines-manager.com/aircraft/show/86969602,2:00,7:29,1046,"$5,781,072.00","$5,362,503.00","$5,126.68","$977,964.07"
SFO - DEN,54536069518,SFO-IAH-MEX 5,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/54536069518,https://www.airlines-manager.com/aircraft/show/101045335,0:15,5:59,400,"$473,056.00","$405,092.00","$1,012.73","$70,655.58"
SFO - DEN,54545804679,SFO-IAH-MEX 1,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/54545804679,https://www.airlines-manager.com/aircraft/show/101045339,6:30,12:14,400,"$473,056.00","$405,092.00","$1,012.73","$70,655.58"
SFO - DEN,54551622430,SFO-IAH-MEX 4,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/54551622430,https://www.airlines-manager.com/aircraft/show/101045336,8:30,14:14,400,"$473,056.00","$405,092.00","$1,012.73","$70,655.58"
SFO - DEN,54556941182,SFO-IAH-MEX 3,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/54556941182,https://www.airlines-manager.com/aircraft/show/101045337,13:00,18:44,400,"$473,056.00","$405,092.00","$1,012.73","$70,655.58"
SFO - DEN,54580945035,SFO-IAH-MEX 2,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/54580945035,https://www.airlines-manager.com/aircraft/show/101045338,22:15,3:59,376,"$456,354.00","$388,991.00","$1,034.55","$67,847.27"
SFO - DFW,54536069682,SFO-ATL-DFW S,A321-200,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/54536069682,https://www.airlines-manager.com/aircraft/show/106766698,1:30,9:14,232,"$481,033.00","$419,800.00","$1,809.48","$54,284.48"
SFO - DFW,54567120357,SFO 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/54567120357,https://www.airlines-manager.com/aircraft/show/85806724,16:30,23:59,932,"$1,227,311.00","$1,082,216.00","$1,161.18","$144,616.84"
SFO - DFW,54580945209,SFO 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/54580945209,https://www.airlines-manager.com/aircraft/show/85537213,23:15,6:44,738,"$1,046,514.00","$911,001.00","$1,234.42","$121,737.33"
SFO - DSM,54536069980,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/54536069980,https://www.airlines-manager.com/aircraft/show/108410858,4:30,12:29,320,"$506,531.00","$460,693.00","$1,439.67","$57,706.85"
SFO - DSM,54556941141,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/54556941141,https://www.airlines-manager.com/aircraft/show/108410857,13:00,20:59,320,"$506,531.00","$460,693.00","$1,439.67","$57,706.85"
SFO - DSM,54562128413,SFO-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/54562128413,https://www.airlines-manager.com/aircraft/show/108466264,15:00,23:14,112,"$239,963.00","$212,542.00","$1,897.70","$25,814.82"
SFO - DSM,54580945084,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/54580945084,https://www.airlines-manager.com/aircraft/show/108410856,22:45,6:44,320,"$506,531.00","$460,693.00","$1,439.67","$57,706.85"
SFO - DSM,54580945085,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/54580945085,https://www.airlines-manager.com/aircraft/show/108410859,23:30,7:29,320,"$506,531.00","$460,693.00","$1,439.67","$57,706.85"
SFO - DTW,54536069977,SFO-ORD-DTW 4,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/54536069977,https://www.airlines-manager.com/aircraft/show/101045331,4:30,14:29,400,"$819,690.00","$744,567.00","$1,861.42","$74,581.00"
SFO - DTW,54536069978,SFO-ORD-DTW 3,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/54536069978,https://www.airlines-manager.com/aircraft/show/101045332,5:00,14:59,400,"$819,690.00","$744,567.00","$1,861.42","$74,581.00"
SFO - DTW,54562128442,SFO-ORD-DTW 2,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/54562128442,https://www.airlines-manager.com/aircraft/show/101045333,15:00,0:59,400,"$819,690.00","$744,567.00","$1,861.42","$74,581.00"
SFO - DTW,54567120411,SFO-ORD-DTW 5,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/54567120411,https://www.airlines-manager.com/aircraft/show/101045330,17:00,2:59,400,"$819,690.00","$744,567.00","$1,861.42","$74,581.00"
SFO - DTW,54575909751,SFO-ORD-DTW 1,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/54575909751,https://www.airlines-manager.com/aircraft/show/101045334,22:00,7:59,400,"$819,690.00","$744,567.00","$1,861.42","$74,581.00"
SFO - DXB,54545804599,SFO 168B-2 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/54545804599,https://www.airlines-manager.com/aircraft/show/87566901,5:30,12:29,1046,"$5,983,901.00","$5,518,713.00","$5,276.02","$790,269.16"
SFO - DXB,54545804600,SFO 168A-2 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/54545804600,https://www.airlines-manager.com/aircraft/show/86596991,7:30,14:29,1046,"$5,983,901.00","$5,518,713.00","$5,276.02","$790,269.16"
SFO - ELP,54545804609,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/54545804609,https://www.airlines-manager.com/aircraft/show/114912267,5:45,11:44,310,"$374,706.00","$339,934.00","$1,096.56","$56,813.48"
SFO - ELP,54545804610,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/54545804610,https://www.airlines-manager.com/aircraft/show/114912306,7:15,13:14,112,"$177,463.00","$154,869.00","$1,382.76","$25,883.40"
SFO - ELP,54551622439,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/54551622439,https://www.airlines-manager.com/aircraft/show/114912268,8:30,14:29,310,"$374,706.00","$339,934.00","$1,096.56","$56,813.48"
SFO - ELP,54562128403,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/54562128403,https://www.airlines-manager.com/aircraft/show/114912263,15:00,20:59,310,"$374,706.00","$339,934.00","$1,096.56","$56,813.48"
SFO - ELP,54580945029,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/54580945029,https://www.airlines-manager.com/aircraft/show/114912264,22:15,4:14,310,"$374,706.00","$339,934.00","$1,096.56","$56,813.48"
SFO - EUG,54536069724,SFO-BHM-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/54536069724,https://www.airlines-manager.com/aircraft/show/117782568,1:45,5:29,320,"$216,870.00","$188,838.00",$590.12,"$50,581.61"
SFO - EUG,54536069725,SFO-BHM-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/54536069725,https://www.airlines-manager.com/aircraft/show/117782569,3:15,6:59,320,"$216,870.00","$188,838.00",$590.12,"$50,581.61"
SFO - EUG,54567120291,SFO-BHM-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/54567120291,https://www.airlines-manager.com/aircraft/show/117782567,16:00,19:44,320,"$216,870.00","$188,838.00",$590.12,"$50,581.61"
SFO - EUG,54571726651,SFO-BHM-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/54571726651,https://www.airlines-manager.com/aircraft/show/117782566,17:45,21:29,264,"$193,828.00","$166,475.00",$630.59,"$44,591.52"
SFO - FAR,54536069605,SFO-FAR-BIL 3,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/54536069605,https://www.airlines-manager.com/aircraft/show/117782586,1:00,8:44,310,"$489,736.00","$450,231.00","$1,452.36","$58,219.53"
SFO - FAR,54545804722,SFO-FAR-BIL 2,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/54545804722,https://www.airlines-manager.com/aircraft/show/117782585,7:15,14:59,310,"$489,736.00","$450,231.00","$1,452.36","$58,219.53"
SFO - FAR,54562128432,SFO-FAR-BIL 1,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/54562128432,https://www.airlines-manager.com/aircraft/show/117782584,15:00,22:44,310,"$489,736.00","$450,231.00","$1,452.36","$58,219.53"
SFO - FAR,54571726729,SFO-FAR-BIL 4,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/54571726729,https://www.airlines-manager.com/aircraft/show/117782587,18:30,2:14,310,"$489,736.00","$450,231.00","$1,452.36","$58,219.53"
SFO - FAT,54536069780,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/54536069780,https://www.airlines-manager.com/aircraft/show/108410857,2:00,4:44,320,"$95,282.00","$71,086.00",$222.14,"$26,007.07"
SFO - FAT,54556941051,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/54556941051,https://www.airlines-manager.com/aircraft/show/108410856,11:45,14:29,320,"$95,282.00","$71,086.00",$222.14,"$26,007.07"
SFO - FAT,54556941052,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/54556941052,https://www.airlines-manager.com/aircraft/show/108410859,13:00,15:44,320,"$95,282.00","$71,086.00",$222.14,"$26,007.07"
SFO - FAT,54571726674,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/54571726674,https://www.airlines-manager.com/aircraft/show/108410858,18:00,20:44,320,"$95,282.00","$71,086.00",$222.14,"$26,007.07"
SFO - FAT,54580945215,SFO-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/54580945215,https://www.airlines-manager.com/aircraft/show/108466264,23:15,1:59,66,"$33,258.00","$21,014.00",$318.39,"$7,688.05"
SFO - FLL,54536069522,SFO-FLL-TPA 2,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/54536069522,https://www.airlines-manager.com/aircraft/show/97955543,0:15,12:14,320,"$736,216.00","$668,188.00","$2,088.09","$55,759.78"
SFO - FLL,54536069523,SFO-FLL-TPA 4,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/54536069523,https://www.airlines-manager.com/aircraft/show/97955541,4:15,16:14,320,"$736,216.00","$668,188.00","$2,088.09","$55,759.78"
SFO - FLL,54545804741,SFO-FLL-TPA 6 B,A319-100,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/54545804741,https://www.airlines-manager.com/aircraft/show/97900729,7:30,19:44,198,"$553,648.00","$504,169.00","$2,546.31","$41,212.72"
SFO - FLL,54556941201,SFO-FLL-TPA 1,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/54556941201,https://www.airlines-manager.com/aircraft/show/97955544,13:00,0:59,320,"$736,216.00","$668,188.00","$2,088.09","$55,759.78"
SFO - FLL,54567120407,SFO-FLL-TPA 3,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/54567120407,https://www.airlines-manager.com/aircraft/show/97955542,17:00,4:59,320,"$736,216.00","$668,188.00","$2,088.09","$55,759.78"
SFO - FLL,54575909529,SFO-FLL-TPA 5,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/54575909529,https://www.airlines-manager.com/aircraft/show/97955540,20:00,7:59,320,"$736,216.00","$668,188.00","$2,088.09","$55,759.78"
SFO - FSD,54536069553,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/54536069553,https://www.airlines-manager.com/aircraft/show/107160378,0:30,7:59,320,"$469,831.00","$426,549.00","$1,332.97","$56,999.87"
SFO - FSD,54536069554,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/54536069554,https://www.airlines-manager.com/aircraft/show/107132310,2:00,9:29,112,"$222,435.00","$196,716.00","$1,756.39","$26,287.22"
SFO - FSD,54536069555,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/54536069555,https://www.airlines-manager.com/aircraft/show/107160381,3:00,10:29,320,"$469,831.00","$426,549.00","$1,332.97","$56,999.87"
SFO - FSD,54545804755,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/54545804755,https://www.airlines-manager.com/aircraft/show/107160380,8:00,15:29,320,"$469,831.00","$426,549.00","$1,332.97","$56,999.87"
SFO - FSD,54567120335,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/54567120335,https://www.airlines-manager.com/aircraft/show/107160379,16:00,23:29,284,"$437,296.00","$395,370.00","$1,392.15","$52,833.41"
SFO - GRR,54536069630,SFO-BHM-GRR 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/54536069630,https://www.airlines-manager.com/aircraft/show/117782583,1:00,10:44,198,"$456,419.00","$417,968.00","$2,110.95","$42,941.92"
SFO - GRR,54545804613,SFO-BHM-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/54545804613,https://www.airlines-manager.com/aircraft/show/117782567,5:45,15:29,320,"$605,707.00","$552,735.00","$1,727.30","$56,787.84"
SFO - GRR,54545804614,SFO-BHM-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/54545804614,https://www.airlines-manager.com/aircraft/show/117782566,8:00,17:44,320,"$605,707.00","$552,735.00","$1,727.30","$56,787.84"
SFO - GRR,54567120292,SFO-BHM-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/54567120292,https://www.airlines-manager.com/aircraft/show/117782568,16:00,1:44,320,"$605,707.00","$552,735.00","$1,727.30","$56,787.84"
SFO - GRR,54567120293,SFO-BHM-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/54567120293,https://www.airlines-manager.com/aircraft/show/117782569,17:30,3:14,320,"$605,707.00","$552,735.00","$1,727.30","$56,787.84"
SFO - HKG,54575909657,SFO 168B-6 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/54575909657,https://www.airlines-manager.com/aircraft/show/87083947,21:15,23:59,1046,"$5,253,940.00","$4,855,351.00","$4,641.83","$1,776,347.93"
SFO - HKG,54580945202,SFO 168A-6 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/54580945202,https://www.airlines-manager.com/aircraft/show/88032836,23:15,1:59,1046,"$5,253,940.00","$4,855,351.00","$4,641.83","$1,776,347.93"
SFO - IAD,54536069430,SFO-IAD-CLT 1,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/54536069430,https://www.airlines-manager.com/aircraft/show/96135565,0:00,11:14,400,"$907,937.00","$829,919.00","$2,074.80","$73,880.03"
SFO - IAD,54536069431,SFO-IAD-CLT 5,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/54536069431,https://www.airlines-manager.com/aircraft/show/96135561,4:00,15:14,400,"$907,937.00","$829,919.00","$2,074.80","$73,880.03"
SFO - IAD,54545804637,SFO-IAD-CLT 2,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/54545804637,https://www.airlines-manager.com/aircraft/show/96135564,6:00,17:14,400,"$907,937.00","$829,919.00","$2,074.80","$73,880.03"
SFO - IAD,54556941129,SFO-IAD-CLT 3,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/54556941129,https://www.airlines-manager.com/aircraft/show/96135563,12:45,23:59,400,"$907,937.00","$829,919.00","$2,074.80","$73,880.03"
SFO - IAD,54567120373,SFO-IAD-CLT 4,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/54567120373,https://www.airlines-manager.com/aircraft/show/96135562,16:45,3:59,400,"$907,937.00","$829,919.00","$2,074.80","$73,880.03"
SFO - IAH,54536069982,SFO-IAH-MEX 2,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/54536069982,https://www.airlines-manager.com/aircraft/show/101045338,4:45,12:59,400,"$691,517.00","$621,709.00","$1,554.27","$75,511.21"
SFO - IAH,54545804687,SFO-IAH-MEX 5,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/54545804687,https://www.airlines-manager.com/aircraft/show/101045335,6:45,14:59,400,"$691,517.00","$621,709.00","$1,554.27","$75,511.21"
SFO - IAH,54556941184,SFO-IAH-MEX 1,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/54556941184,https://www.airlines-manager.com/aircraft/show/101045339,13:00,21:14,400,"$691,517.00","$621,709.00","$1,554.27","$75,511.21"
SFO - IAH,54562128444,SFO-IAH-MEX 4,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/54562128444,https://www.airlines-manager.com/aircraft/show/101045336,15:00,23:14,400,"$691,517.00","$621,709.00","$1,554.27","$75,511.21"
SFO - IAH,54571726844,SFO-IAH-MEX 3,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/54571726844,https://www.airlines-manager.com/aircraft/show/101045337,19:30,3:44,400,"$691,517.00","$621,709.00","$1,554.27","$75,511.21"
SFO - ICN,54536069517,SFO 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/54536069517,https://www.airlines-manager.com/aircraft/show/85537213,0:15,22:44,932,"$3,589,018.00","$3,238,995.00","$3,475.32","$144,062.05"
SFO - ICN,54556941205,SFO-ICN B,787-10,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/54556941205,https://www.airlines-manager.com/aircraft/show/110213648,13:00,10:59,592,"$2,626,537.00","$2,428,664.00","$4,102.47","$110,477.51"
SFO - ICN,54575909539,SFO 84A-1 E1,777-300,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/54575909539,https://www.airlines-manager.com/aircraft/show/86776212,20:00,18:29,865,"$3,400,628.00","$3,063,392.00","$3,541.49","$136,251.68"
SFO - ICT,54536069580,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/54536069580,https://www.airlines-manager.com/aircraft/show/114912263,0:45,8:14,310,"$467,206.00","$428,071.00","$1,380.87","$57,203.25"
SFO - ICT,54545804761,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/54545804761,https://www.airlines-manager.com/aircraft/show/114912264,8:00,15:29,310,"$467,206.00","$428,071.00","$1,380.87","$57,203.25"
SFO - ICT,54567120303,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/54567120303,https://www.airlines-manager.com/aircraft/show/114912267,16:00,23:29,310,"$467,206.00","$428,071.00","$1,380.87","$57,203.25"
SFO - ICT,54567120304,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/54567120304,https://www.airlines-manager.com/aircraft/show/114912306,17:30,0:59,112,"$220,592.00","$194,736.00","$1,738.71","$26,022.63"
SFO - ICT,54571726775,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/54571726775,https://www.airlines-manager.com/aircraft/show/114912268,18:45,2:14,310,"$467,206.00","$428,071.00","$1,380.87","$57,203.25"
SFO - IND,54536070000,SFO-IND-CVG 4,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/54536070000,https://www.airlines-manager.com/aircraft/show/99316503,5:15,14:59,310,"$602,937.00","$552,887.00","$1,783.51","$56,803.46"
SFO - IND,54545804716,SFO-IND-CVG 6,ERJ-175,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/54545804716,https://www.airlines-manager.com/aircraft/show/99174346,7:15,16:59,112,"$283,094.00","$249,680.00","$2,229.29","$25,652.05"
SFO - IND,54556941193,SFO-IND-CVG 1,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/54556941193,https://www.airlines-manager.com/aircraft/show/99316506,13:00,22:44,310,"$602,937.00","$552,887.00","$1,783.51","$56,803.46"
SFO - IND,54562128423,SFO-IND-CVG 3,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/54562128423,https://www.airlines-manager.com/aircraft/show/99316504,15:00,0:44,310,"$602,937.00","$552,887.00","$1,783.51","$56,803.46"
SFO - IND,54567120404,SFO-IND-CVG 5,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/54567120404,https://www.airlines-manager.com/aircraft/show/99316502,17:00,2:44,310,"$602,937.00","$552,887.00","$1,783.51","$56,803.46"
SFO - IND,54580945199,SFO-IND-CVG 2,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/54580945199,https://www.airlines-manager.com/aircraft/show/99316505,23:00,8:44,310,"$602,937.00","$552,887.00","$1,783.51","$56,803.46"
SFO - JAN,54536069792,SFO-SAV-JAN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/54536069792,https://www.airlines-manager.com/aircraft/show/114917486,2:15,11:29,198,"$437,594.00","$401,149.00","$2,026.01","$43,445.74"
SFO - JAN,54545804668,SFO-SAV-JAN 3,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/54545804668,https://www.airlines-manager.com/aircraft/show/114912269,6:15,15:29,310,"$581,341.00","$535,884.00","$1,728.66","$58,037.98"
SFO - JAN,54545804669,SFO-SAV-JAN 2,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/54545804669,https://www.airlines-manager.com/aircraft/show/114912266,7:45,16:59,310,"$581,341.00","$535,884.00","$1,728.66","$58,037.98"
SFO - JAN,54567120414,SFO-SAV-JAN 1,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/54567120414,https://www.airlines-manager.com/aircraft/show/114912265,17:00,2:14,310,"$581,341.00","$535,884.00","$1,728.66","$58,037.98"
SFO - JAN,54571726788,SFO-SAV-JAN 4,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/54571726788,https://www.airlines-manager.com/aircraft/show/114912270,19:00,4:14,310,"$581,341.00","$535,884.00","$1,728.66","$58,037.98"
SFO - JAX,54545804628,SFO-JAX-SAT 5,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/54545804628,https://www.airlines-manager.com/aircraft/show/86377315,6:00,17:14,310,"$701,478.00","$646,409.00","$2,085.19","$57,543.83"
SFO - JAX,54556941181,SFO-JAX-SAT 1,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/54556941181,https://www.airlines-manager.com/aircraft/show/86375568,13:00,0:14,310,"$701,478.00","$646,409.00","$2,085.19","$57,543.83"
SFO - JAX,54562128448,SFO-JAX-SAT 2,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/54562128448,https://www.airlines-manager.com/aircraft/show/86371267,15:00,2:14,310,"$701,478.00","$646,409.00","$2,085.19","$57,543.83"
SFO - JAX,54575909634,SFO-JAX-SAT 3,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/54575909634,https://www.airlines-manager.com/aircraft/show/86385102,21:00,8:14,310,"$701,478.00","$646,409.00","$2,085.19","$57,543.83"
SFO - JAX,54580945185,SFO-JAX-SAT 4,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/54580945185,https://www.airlines-manager.com/aircraft/show/86378760,23:00,10:14,310,"$701,478.00","$646,409.00","$2,085.19","$57,543.83"
SFO - JFK,54536069602,SFO-MIA-JFK 4,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/54536069602,https://www.airlines-manager.com/aircraft/show/89233034,1:00,12:59,400,"$960,740.00","$862,242.00","$2,155.61","$71,953.44"
SFO - JFK,54545804713,SFO-MIA-JFK 5,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/54545804713,https://www.airlines-manager.com/aircraft/show/89233035,7:00,18:59,400,"$960,740.00","$862,242.00","$2,155.61","$71,953.44"
SFO - JFK,54556941139,SFO-MIA-JFK 1,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/54556941139,https://www.airlines-manager.com/aircraft/show/89233032,13:00,0:59,400,"$960,740.00","$862,242.00","$2,155.61","$71,953.44"
SFO - JFK,54567120301,SFO-MIA-JFK 2,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/54567120301,https://www.airlines-manager.com/aircraft/show/84622093,16:00,3:59,400,"$960,740.00","$862,242.00","$2,155.61","$71,953.44"
SFO - JFK,54571726796,SFO-MIA-JFK 3,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/54571726796,https://www.airlines-manager.com/aircraft/show/89233031,19:00,6:59,400,"$960,740.00","$862,242.00","$2,155.61","$71,953.44"
SFO - KOA,54536069858,SFO-KOA-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/54536069858,https://www.airlines-manager.com/aircraft/show/112650101,2:45,13:59,310,"$702,530.00","$647,658.00","$2,089.22","$57,655.01"
SFO - KOA,54536069859,SFO-KOA-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/54536069859,https://www.airlines-manager.com/aircraft/show/112650100,4:45,15:59,310,"$702,530.00","$647,658.00","$2,089.22","$57,655.01"
SFO - KOA,54556941156,SFO-KOA-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/54556941156,https://www.airlines-manager.com/aircraft/show/112650091,13:00,0:14,198,"$527,337.00","$483,338.00","$2,441.10","$43,027.12"
SFO - KOA,54567120409,SFO-KOA-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/54567120409,https://www.airlines-manager.com/aircraft/show/112650103,17:00,4:14,310,"$702,530.00","$647,658.00","$2,089.22","$57,655.01"
SFO - KOA,54575909536,SFO-KOA-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/54575909536,https://www.airlines-manager.com/aircraft/show/112650102,20:00,7:14,310,"$702,530.00","$647,658.00","$2,089.22","$57,655.01"
SFO - LAS,54545804642,SFO-BOS-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/54545804642,https://www.airlines-manager.com/aircraft/show/104901564,6:00,9:44,338,"$216,975.00","$178,282.00",$527.46,"$47,754.11"
SFO - LAS,54545804643,SFO-BOS-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/54545804643,https://www.airlines-manager.com/aircraft/show/104870960,7:00,10:44,338,"$216,975.00","$178,282.00",$527.46,"$47,754.11"
SFO - LAS,54556941097,SFO CARGO 1,737-700,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/54556941097,https://www.airlines-manager.com/aircraft/show/107343113,12:00,15:44,0,"$55,783.00","$30,593.00",#DIV/0!,"$8,194.55"
SFO - LAS,54556941098,SFO-BOS-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/54556941098,https://www.airlines-manager.com/aircraft/show/104874465,12:00,15:44,338,"$216,975.00","$178,282.00",$527.46,"$47,754.11"
SFO - LAS,54567120361,SFO-BOS-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/54567120361,https://www.airlines-manager.com/aircraft/show/104901544,16:30,20:14,338,"$216,975.00","$178,282.00",$527.46,"$47,754.11"
SFO - LAS,54575909577,SFO-BOS-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/54575909577,https://www.airlines-manager.com/aircraft/show/104864961,20:30,0:14,338,"$216,975.00","$178,282.00",$527.46,"$47,754.11"
SFO - LAX,54536069768,SFO-PHL-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/54536069768,https://www.airlines-manager.com/aircraft/show/97900730,2:00,5:29,198,"$133,274.00","$101,260.00",$511.41,"$29,069.86"
SFO - LAX,54536069769,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/54536069769,https://www.airlines-manager.com/aircraft/show/92390872,4:30,7:59,320,"$175,700.00","$128,489.00",$401.53,"$36,886.79"
SFO - LAX,54545804733,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/54545804733,https://www.airlines-manager.com/aircraft/show/92390869,7:30,10:59,320,"$175,700.00","$128,489.00",$401.53,"$36,886.79"
SFO - LAX,54545804734,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/54545804734,https://www.airlines-manager.com/aircraft/show/92390870,8:15,11:44,320,"$175,700.00","$128,489.00",$401.53,"$36,886.79"
SFO - LAX,54556941111,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/54556941111,https://www.airlines-manager.com/aircraft/show/92390873,12:00,15:29,320,"$175,700.00","$128,489.00",$401.53,"$36,886.79"
SFO - LAX,54567120385,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/54567120385,https://www.airlines-manager.com/aircraft/show/92390871,16:45,20:14,320,"$175,700.00","$128,489.00",$401.53,"$36,886.79"
SFO - LEX,54536069764,SFO-BTV-LEX 1,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/54536069764,https://www.airlines-manager.com/aircraft/show/112650095,2:00,11:59,310,"$622,836.00","$575,388.00","$1,856.09","$57,634.86"
SFO - LEX,54545804653,SFO-BTV-LEX 2,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/54545804653,https://www.airlines-manager.com/aircraft/show/112650094,6:00,15:59,310,"$622,836.00","$575,388.00","$1,856.09","$57,634.86"
SFO - LEX,54545804654,SFO-BTV-LEX 3,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/54545804654,https://www.airlines-manager.com/aircraft/show/112650093,8:00,17:59,310,"$622,836.00","$575,388.00","$1,856.09","$57,634.86"
SFO - LEX,54562128337,SFO-BTV-LEX 4,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/54562128337,https://www.airlines-manager.com/aircraft/show/112650092,14:00,23:59,310,"$622,836.00","$575,388.00","$1,856.09","$57,634.86"
SFO - LEX,54575909505,SFO-BTV-LEX 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/54575909505,https://www.airlines-manager.com/aircraft/show/112650089,20:00,5:59,198,"$468,601.00","$430,555.00","$2,174.52","$43,127.38"
SFO - LGB,54536069895,SFO-FAR-BIL 2,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/54536069895,https://www.airlines-manager.com/aircraft/show/117782585,3:15,6:44,310,"$180,890.00","$156,791.00",$505.78,"$45,011.77"
SFO - LGB,54556940921,SFO-FAR-BIL 1,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/54556940921,https://www.airlines-manager.com/aircraft/show/117782584,11:00,14:29,310,"$180,890.00","$156,791.00",$505.78,"$45,011.77"
SFO - LGB,54562128433,SFO-FAR-BIL 4,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/54562128433,https://www.airlines-manager.com/aircraft/show/117782587,15:00,18:29,310,"$180,890.00","$156,791.00",$505.78,"$45,011.77"
SFO - LGB,54575909670,SFO-FAR-BIL 3,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/54575909670,https://www.airlines-manager.com/aircraft/show/117782586,21:30,0:59,310,"$180,890.00","$156,791.00",$505.78,"$45,011.77"
SFO - LIT,54536069793,SFO-SDF-LIT 3,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/54536069793,https://www.airlines-manager.com/aircraft/show/94886627,2:15,10:59,310,"$540,459.00","$497,431.00","$1,604.62","$56,957.75"
SFO - LIT,54536069794,SFO-SDF-LIT 5,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/54536069794,https://www.airlines-manager.com/aircraft/show/106453498,3:15,11:59,310,"$540,459.00","$497,431.00","$1,604.62","$56,957.75"
SFO - LIT,54562128349,SFO-SDF-LIT 2,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/54562128349,https://www.airlines-manager.com/aircraft/show/94886628,14:00,22:44,310,"$540,459.00","$497,431.00","$1,604.62","$56,957.75"
SFO - LIT,54562128350,SFO-SDF-LIT 4,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/54562128350,https://www.airlines-manager.com/aircraft/show/106453500,15:00,23:44,310,"$540,459.00","$497,431.00","$1,604.62","$56,957.75"
SFO - LIT,54580945237,SFO-SDF-LIT 1,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/54580945237,https://www.airlines-manager.com/aircraft/show/106453499,23:45,8:29,310,"$540,459.00","$497,431.00","$1,604.62","$56,957.75"
SFO - MCI,54545804710,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/54545804710,https://www.airlines-manager.com/aircraft/show/88239554,7:00,14:59,320,"$505,017.00","$456,091.00","$1,425.28","$57,130.40"
SFO - MCI,54567120386,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/54567120386,https://www.airlines-manager.com/aircraft/show/105223003,17:00,0:59,198,"$380,902.00","$345,894.00","$1,746.94","$43,327.01"
SFO - MCI,54567120387,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/54567120387,https://www.airlines-manager.com/aircraft/show/88239553,17:00,0:59,320,"$505,017.00","$456,091.00","$1,425.28","$57,130.40"
SFO - MCI,54571726770,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/54571726770,https://www.airlines-manager.com/aircraft/show/88239557,18:45,2:44,320,"$505,017.00","$456,091.00","$1,425.28","$57,130.40"
SFO - MCI,54580945212,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/54580945212,https://www.airlines-manager.com/aircraft/show/88239555,23:15,7:14,320,"$505,017.00","$456,091.00","$1,425.28","$57,130.40"
SFO - MCO,54536069908,SFO-MCO-MSP 2,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/54536069908,https://www.airlines-manager.com/aircraft/show/105367367,3:30,14:59,338,"$791,753.00","$726,784.00","$2,150.25","$63,290.33"
SFO - MCO,54536069909,SFO-MCO-MSP 5,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/54536069909,https://www.airlines-manager.com/aircraft/show/105367364,4:30,15:59,338,"$791,753.00","$726,784.00","$2,150.25","$63,290.33"
SFO - MCO,54562128451,SFO-MCO-MSP 1,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/54562128451,https://www.airlines-manager.com/aircraft/show/105367368,15:00,2:29,338,"$791,753.00","$726,784.00","$2,150.25","$63,290.33"
SFO - MCO,54567120420,SFO-MCO-MSP 4,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/54567120420,https://www.airlines-manager.com/aircraft/show/105367365,17:00,4:29,338,"$791,753.00","$726,784.00","$2,150.25","$63,290.33"
SFO - MCO,54571726817,SFO-MCO-MSP 3,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/54571726817,https://www.airlines-manager.com/aircraft/show/105367366,19:15,6:44,338,"$791,753.00","$726,784.00","$2,150.25","$63,290.33"
SFO - MCO,54575909570,SFO CARGO 1,737-700,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/54575909570,https://www.airlines-manager.com/aircraft/show/107343113,20:30,7:59,0,"$198,945.00","$148,298.00",$0.00,"$12,914.19"
SFO - MEM,54536069853,SFO-MEM-PIT 4,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/54536069853,https://www.airlines-manager.com/aircraft/show/98788934,2:45,11:59,310,"$574,328.00","$525,604.00","$1,695.50","$56,924.62"
SFO - MEM,54545804623,SFO-MEM-PIT 6,ERJ-175,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/54545804623,https://www.airlines-manager.com/aircraft/show/98675305,5:45,14:59,112,"$269,663.00","$237,281.00","$2,118.58","$25,698.30"
SFO - MEM,54556941195,SFO-MEM-PIT 1,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/54556941195,https://www.airlines-manager.com/aircraft/show/98788937,13:00,22:14,310,"$574,328.00","$525,604.00","$1,695.50","$56,924.62"
SFO - MEM,54567120279,SFO-MEM-PIT 3,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/54567120279,https://www.airlines-manager.com/aircraft/show/98788935,16:00,1:14,310,"$574,328.00","$525,604.00","$1,695.50","$56,924.62"
SFO - MEM,54571726795,SFO-MEM-PIT 5,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/54571726795,https://www.airlines-manager.com/aircraft/show/98788933,19:00,4:14,310,"$574,328.00","$525,604.00","$1,695.50","$56,924.62"
SFO - MEM,54580945245,SFO-MEM-PIT 2,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/54580945245,https://www.airlines-manager.com/aircraft/show/98788936,23:45,8:59,310,"$574,328.00","$525,604.00","$1,695.50","$56,924.62"
SFO - MEX,54536069929,SFO-IAH-MEX 3,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/54536069929,https://www.airlines-manager.com/aircraft/show/101045337,3:45,12:59,400,"$769,718.00","$698,851.00","$1,747.13","$75,687.83"
SFO - MEX,54556941183,SFO-IAH-MEX 2,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/54556941183,https://www.airlines-manager.com/aircraft/show/101045338,13:00,22:14,400,"$769,718.00","$698,851.00","$1,747.13","$75,687.83"
SFO - MEX,54562128443,SFO-IAH-MEX 5,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/54562128443,https://www.airlines-manager.com/aircraft/show/101045335,15:00,0:14,400,"$769,718.00","$698,851.00","$1,747.13","$75,687.83"
SFO - MEX,54575909653,SFO-IAH-MEX 1,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/54575909653,https://www.airlines-manager.com/aircraft/show/101045339,21:15,6:29,400,"$769,718.00","$698,851.00","$1,747.13","$75,687.83"
SFO - MEX,54580945210,SFO-IAH-MEX 4,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/54580945210,https://www.airlines-manager.com/aircraft/show/101045336,23:15,8:29,369,"$719,673.00","$650,698.00","$1,763.41","$70,472.71"
SFO - MFR,54536069638,SFO-TYS-MSN 2,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/54536069638,https://www.airlines-manager.com/aircraft/show/117782564,1:00,4:29,320,"$172,586.00","$145,954.00",$456.11,"$41,900.67"
SFO - MFR,54536069639,SFO-TYS-MSN 1,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/54536069639,https://www.airlines-manager.com/aircraft/show/117782565,4:00,7:29,320,"$172,586.00","$145,954.00",$456.11,"$41,900.67"
SFO - MFR,54567120298,SFO-TYS-MSN 3,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/54567120298,https://www.airlines-manager.com/aircraft/show/117782563,16:00,19:29,320,"$172,586.00","$145,954.00",$456.11,"$41,900.67"
SFO - MFR,54567120299,SFO-TYS-MSN 4,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/54567120299,https://www.airlines-manager.com/aircraft/show/117782562,17:15,20:44,289,"$162,495.00","$136,138.00",$471.07,"$39,082.68"
SFO - MHT,54536069497,SFO-MHT-CHS 3,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/54536069497,https://www.airlines-manager.com/aircraft/show/114917463,0:15,12:44,320,"$758,403.00","$694,418.00","$2,170.06","$55,627.61"
SFO - MHT,54536069498,SFO-MHT-CHS 4,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/54536069498,https://www.airlines-manager.com/aircraft/show/114266973,4:15,16:44,320,"$758,403.00","$694,418.00","$2,170.06","$55,627.61"
SFO - MHT,54556941166,SFO-MHT-CHS 1,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/54556941166,https://www.airlines-manager.com/aircraft/show/114917465,13:00,1:29,320,"$758,403.00","$694,418.00","$2,170.06","$55,627.61"
SFO - MHT,54567120412,SFO-MHT-CHS 2,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/54567120412,https://www.airlines-manager.com/aircraft/show/114917464,17:00,5:29,320,"$758,403.00","$694,418.00","$2,170.06","$55,627.61"
SFO - MHT,54575909518,SFO-MHT-CHS 5 B,A319-100,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/54575909518,https://www.airlines-manager.com/aircraft/show/114912262,20:00,8:29,198,"$568,571.00","$521,644.00","$2,634.57","$41,787.24"
SFO - MIA,54536069600,SFO-MIA-JFK 1,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/54536069600,https://www.airlines-manager.com/aircraft/show/89233032,1:00,12:59,400,"$954,153.00","$864,310.00","$2,160.78","$72,126.01"
SFO - MIA,54536069601,SFO-MIA-JFK 2,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/54536069601,https://www.airlines-manager.com/aircraft/show/84622093,4:00,15:59,400,"$954,153.00","$864,310.00","$2,160.78","$72,126.01"
SFO - MIA,54545804714,SFO-MIA-JFK 3,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/54545804714,https://www.airlines-manager.com/aircraft/show/89233031,7:00,18:59,400,"$954,153.00","$864,310.00","$2,160.78","$72,126.01"
SFO - MIA,54556941138,SFO-MIA-JFK 4,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/54556941138,https://www.airlines-manager.com/aircraft/show/89233034,13:00,0:59,400,"$954,153.00","$864,310.00","$2,160.78","$72,126.01"
SFO - MIA,54571726784,SFO-MIA-JFK 5,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/54571726784,https://www.airlines-manager.com/aircraft/show/89233035,19:00,6:59,400,"$954,153.00","$864,310.00","$2,160.78","$72,126.01"
SFO - MKE,54536069539,SFO-CLE-MKE 1,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/54536069539,https://www.airlines-manager.com/aircraft/show/92519368,0:30,9:44,320,"$583,505.00","$530,737.00","$1,658.55","$57,480.54"
SFO - MKE,54545804580,SFO-CLE-MKE 4,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/54545804580,https://www.airlines-manager.com/aircraft/show/92519371,5:30,14:44,320,"$583,505.00","$530,737.00","$1,658.55","$57,480.54"
SFO - MKE,54545804581,SFO-CLE-MKE 3,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/54545804581,https://www.airlines-manager.com/aircraft/show/92519367,6:45,15:59,320,"$583,505.00","$530,737.00","$1,658.55","$57,480.54"
SFO - MKE,54567120286,SFO-CLE-MKE 2,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/54567120286,https://www.airlines-manager.com/aircraft/show/92519369,16:00,1:14,320,"$583,505.00","$530,737.00","$1,658.55","$57,480.54"
SFO - MKE,54571726671,SFO-CLE-MKE 5,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/54571726671,https://www.airlines-manager.com/aircraft/show/92519370,18:00,3:14,320,"$583,505.00","$530,737.00","$1,658.55","$57,480.54"
SFO - MSN,54536069786,SFO-TYS-MSN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/54536069786,https://www.airlines-manager.com/aircraft/show/117782582,2:15,11:14,198,"$422,498.00","$386,836.00","$1,953.72","$43,061.52"
SFO - MSN,54545804708,SFO-TYS-MSN 3,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/54545804708,https://www.airlines-manager.com/aircraft/show/117782563,7:00,15:59,320,"$559,952.00","$510,703.00","$1,595.95","$56,850.06"
SFO - MSN,54545804709,SFO-TYS-MSN 4,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/54545804709,https://www.airlines-manager.com/aircraft/show/117782562,7:00,15:59,320,"$559,952.00","$510,703.00","$1,595.95","$56,850.06"
SFO - MSN,54567120340,SFO-TYS-MSN 2,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/54567120340,https://www.airlines-manager.com/aircraft/show/117782564,16:00,0:59,320,"$559,952.00","$510,703.00","$1,595.95","$56,850.06"
SFO - MSN,54571726807,SFO-TYS-MSN 1,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/54571726807,https://www.airlines-manager.com/aircraft/show/117782565,19:00,3:59,320,"$559,952.00","$510,703.00","$1,595.95","$56,850.06"
SFO - MSO,54545804695,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/54545804695,https://www.airlines-manager.com/aircraft/show/108410856,6:45,11:44,320,"$321,211.00","$287,500.00",$898.44,"$57,692.31"
SFO - MSO,54545804696,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/54545804696,https://www.airlines-manager.com/aircraft/show/108410859,7:30,12:29,320,"$321,211.00","$287,500.00",$898.44,"$57,692.31"
SFO - MSO,54556941189,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/54556941189,https://www.airlines-manager.com/aircraft/show/108410858,13:00,17:59,320,"$321,211.00","$287,500.00",$898.44,"$57,692.31"
SFO - MSO,54575909629,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/54575909629,https://www.airlines-manager.com/aircraft/show/108410857,21:00,1:59,265,"$287,829.00","$255,256.00",$963.23,"$51,221.94"
SFO - MSP,54536069827,SFO-MCO-MSP 1,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/54536069827,https://www.airlines-manager.com/aircraft/show/105367368,2:30,10:44,338,"$570,087.00","$520,649.00","$1,540.38","$63,236.72"
SFO - MSP,54536069828,SFO-MCO-MSP 4,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/54536069828,https://www.airlines-manager.com/aircraft/show/105367365,4:30,12:44,338,"$570,087.00","$520,649.00","$1,540.38","$63,236.72"
SFO - MSP,54545804693,SFO-MCO-MSP 3,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/54545804693,https://www.airlines-manager.com/aircraft/show/105367366,6:45,14:59,338,"$570,087.00","$520,649.00","$1,540.38","$63,236.72"
SFO - MSP,54562128453,SFO-MCO-MSP 2,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/54562128453,https://www.airlines-manager.com/aircraft/show/105367367,15:00,23:14,338,"$570,087.00","$520,649.00","$1,540.38","$63,236.72"
SFO - MSP,54567120288,SFO-MCO-MSP 5,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/54567120288,https://www.airlines-manager.com/aircraft/show/105367364,16:00,0:14,338,"$570,087.00","$520,649.00","$1,540.38","$63,236.72"
SFO - MSY,54536069861,SFO-MSY-STL 6,ERJ-175,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/54536069861,https://www.airlines-manager.com/aircraft/show/103534666,3:00,12:29,112,"$278,463.00","$245,789.00","$2,194.54","$25,918.00"
SFO - MSY,54545804647,SFO-MSY-STL 2,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/54545804647,https://www.airlines-manager.com/aircraft/show/98075266,6:00,15:29,320,"$591,162.00","$536,928.00","$1,677.90","$56,618.07"
SFO - MSY,54545804648,SFO-MSY-STL 4,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/54545804648,https://www.airlines-manager.com/aircraft/show/98075264,8:00,17:29,320,"$591,162.00","$536,928.00","$1,677.90","$56,618.07"
SFO - MSY,54556941199,SFO-MSY-STL 1,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/54556941199,https://www.airlines-manager.com/aircraft/show/98075267,13:00,22:29,320,"$591,162.00","$536,928.00","$1,677.90","$56,618.07"
SFO - MSY,54575909652,SFO-MSY-STL 3,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/54575909652,https://www.airlines-manager.com/aircraft/show/98075265,21:15,6:44,320,"$591,162.00","$536,928.00","$1,677.90","$56,618.07"
SFO - MSY,54580945217,SFO-MSY-STL 5,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/54580945217,https://www.airlines-manager.com/aircraft/show/98075263,23:15,8:44,320,"$591,162.00","$536,928.00","$1,677.90","$56,618.07"
SFO - NRT,54536069428,SFO 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/54536069428,https://www.airlines-manager.com/aircraft/show/85806656,0:00,20:29,932,"$3,433,419.00","$3,108,763.00","$3,335.58","$151,770.37"
SFO - NRT,54536069429,SFO 84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/54536069429,https://www.airlines-manager.com/aircraft/show/86776210,4:15,0:44,932,"$3,433,419.00","$3,108,763.00","$3,335.58","$151,770.37"
SFO - OGG,54536069826,SFO-OGG-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/54536069826,https://www.airlines-manager.com/aircraft/show/92773477,2:30,13:44,310,"$694,716.00","$642,154.00","$2,071.46","$57,165.04"
SFO - OGG,54562128260,SFO-OGG-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/54562128260,https://www.airlines-manager.com/aircraft/show/92773481,13:30,0:44,310,"$694,716.00","$642,154.00","$2,071.46","$57,165.04"
SFO - OGG,54567120246,SFO-OGG-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/54567120246,https://www.airlines-manager.com/aircraft/show/92773480,15:30,2:44,310,"$694,716.00","$642,154.00","$2,071.46","$57,165.04"
SFO - OGG,54575909685,SFO-OGG-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/54575909685,https://www.airlines-manager.com/aircraft/show/92773479,21:30,8:44,310,"$694,716.00","$642,154.00","$2,071.46","$57,165.04"
SFO - OGG,54580945233,SFO-OGG-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/54580945233,https://www.airlines-manager.com/aircraft/show/92773478,23:30,10:44,310,"$694,716.00","$642,154.00","$2,071.46","$57,165.04"
SFO - OKC,54536069532,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/54536069532,https://www.airlines-manager.com/aircraft/show/107160380,0:30,7:59,320,"$474,286.00","$430,044.00","$1,343.89","$57,466.90"
SFO - OKC,54545804754,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/54545804754,https://www.airlines-manager.com/aircraft/show/107160379,8:00,15:29,320,"$474,286.00","$430,044.00","$1,343.89","$57,466.90"
SFO - OKC,54567120394,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/54567120394,https://www.airlines-manager.com/aircraft/show/107160378,17:00,0:29,320,"$474,286.00","$430,044.00","$1,343.89","$57,466.90"
SFO - OKC,54571726738,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/54571726738,https://www.airlines-manager.com/aircraft/show/107132310,18:30,1:59,112,"$224,021.00","$197,878.00","$1,766.77","$26,442.49"
SFO - OKC,54571726739,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/54571726739,https://www.airlines-manager.com/aircraft/show/107160381,19:30,2:59,320,"$474,286.00","$430,044.00","$1,343.89","$57,466.90"
SFO - OMA,54536069623,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/54536069623,https://www.airlines-manager.com/aircraft/show/105223003,1:00,8:44,198,"$365,184.00","$332,849.00","$1,681.06","$43,040.82"
SFO - OMA,54536069624,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/54536069624,https://www.airlines-manager.com/aircraft/show/88239553,1:00,8:44,320,"$482,863.00","$437,791.00","$1,368.10","$56,610.91"
SFO - OMA,54536069625,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/54536069625,https://www.airlines-manager.com/aircraft/show/88239557,2:45,10:29,320,"$482,863.00","$437,791.00","$1,368.10","$56,610.91"
SFO - OMA,54545804727,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/54545804727,https://www.airlines-manager.com/aircraft/show/88239555,7:15,14:59,320,"$482,863.00","$437,791.00","$1,368.10","$56,610.91"
SFO - OMA,54562128394,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/54562128394,https://www.airlines-manager.com/aircraft/show/88239554,15:00,22:44,320,"$482,863.00","$437,791.00","$1,368.10","$56,610.91"
SFO - ONT,54536069969,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/54536069969,https://www.airlines-manager.com/aircraft/show/107160379,4:30,7:59,320,"$179,764.00","$149,631.00",$467.60,"$42,956.27"
SFO - ONT,54556941146,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/54556941146,https://www.airlines-manager.com/aircraft/show/107160378,13:00,16:29,320,"$179,764.00","$149,631.00",$467.60,"$42,956.27"
SFO - ONT,54562128416,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/54562128416,https://www.airlines-manager.com/aircraft/show/107132310,15:00,18:29,112,"$82,970.00","$66,847.00",$596.85,"$19,190.53"
SFO - ONT,54567120285,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/54567120285,https://www.airlines-manager.com/aircraft/show/107160381,16:00,19:29,320,"$179,764.00","$149,631.00",$467.60,"$42,956.27"
SFO - ONT,54575909627,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/54575909627,https://www.airlines-manager.com/aircraft/show/107160380,21:00,0:29,320,"$179,764.00","$149,631.00",$467.60,"$42,956.27"
SFO - ORD,54545804651,SFO-ORD-DTW 2,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/54545804651,https://www.airlines-manager.com/aircraft/show/101045333,6:00,14:59,400,"$756,958.00","$669,557.00","$1,673.89","$74,533.25"
SFO - ORD,54545804652,SFO-ORD-DTW 5,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/54545804652,https://www.airlines-manager.com/aircraft/show/101045330,7:30,16:29,400,"$756,958.00","$669,557.00","$1,673.89","$74,533.25"
SFO - ORD,54556941190,SFO-ORD-DTW 1,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/54556941190,https://www.airlines-manager.com/aircraft/show/101045334,13:00,21:59,400,"$756,958.00","$669,557.00","$1,673.89","$74,533.25"
SFO - ORD,54562128440,SFO-ORD-DTW 4,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/54562128440,https://www.airlines-manager.com/aircraft/show/101045331,15:00,23:59,400,"$756,958.00","$669,557.00","$1,673.89","$74,533.25"
SFO - ORD,54575909499,SFO-ORD-DTW 3,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/54575909499,https://www.airlines-manager.com/aircraft/show/101045332,20:00,4:59,400,"$756,958.00","$669,557.00","$1,673.89","$74,533.25"
SFO - ORF,54545804597,SFO-ORF-RIC 3,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/54545804597,https://www.airlines-manager.com/aircraft/show/108328836,5:30,17:29,310,"$729,217.00","$673,105.00","$2,171.31","$56,170.10"
SFO - ORF,54545804598,SFO-ORF-RIC 4,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/54545804598,https://www.airlines-manager.com/aircraft/show/108328837,7:30,19:29,310,"$729,217.00","$673,105.00","$2,171.31","$56,170.10"
SFO - ORF,54571726667,SFO-ORF-RIC 1,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/54571726667,https://www.airlines-manager.com/aircraft/show/108328834,18:00,5:59,310,"$729,217.00","$673,105.00","$2,171.31","$56,170.10"
SFO - ORF,54575909531,SFO-ORF-RIC 2,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/54575909531,https://www.airlines-manager.com/aircraft/show/108328835,20:00,7:59,310,"$729,217.00","$673,105.00","$2,171.31","$56,170.10"
SFO - ORF,54575909532,SFO-ORF-RIC 5 B,A319-100,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/54575909532,https://www.airlines-manager.com/aircraft/show/108328833,22:00,9:59,198,"$545,378.00","$500,379.00","$2,527.17","$41,756.24"
SFO - PBI,54536069960,SFO-PBI-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/54536069960,https://www.airlines-manager.com/aircraft/show/100301186,4:15,16:14,320,"$730,653.00","$666,322.00","$2,082.26","$55,604.06"
SFO - PBI,54545804666,SFO-PBI-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/54545804666,https://www.airlines-manager.com/aircraft/show/100301185,6:15,18:14,320,"$730,653.00","$666,322.00","$2,082.26","$55,604.06"
SFO - PBI,54567120398,SFO-PBI-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/54567120398,https://www.airlines-manager.com/aircraft/show/100301188,17:00,4:59,320,"$730,653.00","$666,322.00","$2,082.26","$55,604.06"
SFO - PBI,54571726790,SFO-PBI-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/54571726790,https://www.airlines-manager.com/aircraft/show/100301187,19:00,6:59,320,"$730,653.00","$666,322.00","$2,082.26","$55,604.06"
SFO - PBI,54575909622,SFO-PBI-RDU 5,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/54575909622,https://www.airlines-manager.com/aircraft/show/100301184,21:00,8:59,320,"$730,653.00","$666,322.00","$2,082.26","$55,604.06"
SFO - PDX,54536069500,SFO-MCO-MSP 5,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/54536069500,https://www.airlines-manager.com/aircraft/show/105367364,0:15,4:29,338,"$271,208.00","$241,811.00",$715.42,"$57,120.71"
SFO - PDX,54556940887,SFO-MCO-MSP 1,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/54556940887,https://www.airlines-manager.com/aircraft/show/105367368,10:45,14:59,338,"$271,208.00","$241,811.00",$715.42,"$57,120.71"
SFO - PDX,54556940888,SFO-MCO-MSP 4,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/54556940888,https://www.airlines-manager.com/aircraft/show/105367365,12:45,16:59,338,"$271,208.00","$241,811.00",$715.42,"$57,120.71"
SFO - PDX,54562128452,SFO-MCO-MSP 3,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/54562128452,https://www.airlines-manager.com/aircraft/show/105367366,15:00,19:14,338,"$271,208.00","$241,811.00",$715.42,"$57,120.71"
SFO - PDX,54580945208,SFO-MCO-MSP 2,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/54580945208,https://www.airlines-manager.com/aircraft/show/105367367,23:15,3:29,270,"$238,986.00","$210,443.00",$779.42,"$49,710.94"
SFO - PEK,54536069566,SFO 84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/54536069566,https://www.airlines-manager.com/aircraft/show/86776213,0:45,0:14,932,"$3,795,557.00","$3,394,050.00","$3,641.68","$144,530.16"
SFO - PEK,54567120425,SFO-PEK E,787-10,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/54567120425,https://www.airlines-manager.com/aircraft/show/106813006,17:00,15:59,648,"$2,825,530.00","$2,590,954.00","$3,998.39","$112,731.86"
SFO - PEK,54575909578,SFO 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/54575909578,https://www.airlines-manager.com/aircraft/show/85806656,20:30,19:59,932,"$3,795,557.00","$3,394,050.00","$3,641.68","$144,530.16"
SFO - PHL,54536069443,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/54536069443,https://www.airlines-manager.com/aircraft/show/92390871,0:00,11:44,320,"$727,252.00","$654,700.00","$2,045.94","$55,798.30"
SFO - PHL,54556941113,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/54556941113,https://www.airlines-manager.com/aircraft/show/92390872,12:00,23:44,320,"$727,252.00","$654,700.00","$2,045.94","$55,798.30"
SFO - PHL,54562128325,SFO-PHL-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/54562128325,https://www.airlines-manager.com/aircraft/show/97900730,14:00,1:59,198,"$546,374.00","$493,982.00","$2,494.86","$41,222.42"
SFO - PHL,54562128326,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/54562128326,https://www.airlines-manager.com/aircraft/show/92390869,15:00,2:44,320,"$727,252.00","$654,700.00","$2,045.94","$55,798.30"
SFO - PHL,54567120264,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/54567120264,https://www.airlines-manager.com/aircraft/show/92390870,15:45,3:29,320,"$727,252.00","$654,700.00","$2,045.94","$55,798.30"
SFO - PHL,54571726827,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/54571726827,https://www.airlines-manager.com/aircraft/show/92390873,19:15,6:59,320,"$727,252.00","$654,700.00","$2,045.94","$55,798.30"
SFO - PHX,54536069703,SFO-BOS-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/54536069703,https://www.airlines-manager.com/aircraft/show/104901564,1:30,5:59,338,"$320,643.00","$282,585.00",$836.05,"$63,030.11"
SFO - PHX,54536069704,SFO-BOS-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/54536069704,https://www.airlines-manager.com/aircraft/show/104870960,2:30,6:59,338,"$320,643.00","$282,585.00",$836.05,"$63,030.11"
SFO - PHX,54536069705,SFO-BOS-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/54536069705,https://www.airlines-manager.com/aircraft/show/104874465,4:15,8:44,338,"$320,643.00","$282,585.00",$836.05,"$63,030.11"
SFO - PHX,54556941101,SFO-BOS-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/54556941101,https://www.airlines-manager.com/aircraft/show/104901544,12:00,16:29,338,"$320,643.00","$282,585.00",$836.05,"$63,030.11"
SFO - PHX,54567120262,SFO CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/54567120262,https://www.airlines-manager.com/aircraft/show/107343113,15:45,20:29,0,"$78,319.00","$52,379.00",$0.00,"$11,065.99"
SFO - PHX,54567120263,SFO-BOS-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/54567120263,https://www.airlines-manager.com/aircraft/show/104864961,16:00,20:29,338,"$320,643.00","$282,585.00",$836.05,"$63,030.11"
SFO - PIT,54536069664,SFO-MEM-PIT 3,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/54536069664,https://www.airlines-manager.com/aircraft/show/98788935,1:15,11:59,310,"$673,591.00","$618,435.00","$1,994.95","$57,618.17"
SFO - PIT,54536069665,SFO-MEM-PIT 5,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/54536069665,https://www.airlines-manager.com/aircraft/show/98788933,4:15,14:59,310,"$673,591.00","$618,435.00","$1,994.95","$57,618.17"
SFO - PIT,54556941194,SFO-MEM-PIT 2,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/54556941194,https://www.airlines-manager.com/aircraft/show/98788936,13:00,23:44,310,"$673,591.00","$618,435.00","$1,994.95","$57,618.17"
SFO - PIT,54567120280,SFO-MEM-PIT 4,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/54567120280,https://www.airlines-manager.com/aircraft/show/98788934,16:00,2:44,310,"$673,591.00","$618,435.00","$1,994.95","$57,618.17"
SFO - PIT,54571726794,SFO-MEM-PIT 6,ERJ-175,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/54571726794,https://www.airlines-manager.com/aircraft/show/98675305,19:00,5:44,112,"$315,839.00","$278,820.00","$2,489.46","$25,977.02"
SFO - PIT,54580945018,SFO-MEM-PIT 1,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/54580945018,https://www.airlines-manager.com/aircraft/show/98788937,22:15,8:59,310,"$673,591.00","$618,435.00","$1,994.95","$57,618.17"
SFO - PSP,54536069962,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/54536069962,https://www.airlines-manager.com/aircraft/show/114912264,4:15,7:59,310,"$199,494.00","$174,696.00",$563.54,"$46,793.57"
SFO - PSP,54556941049,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/54556941049,https://www.airlines-manager.com/aircraft/show/114912267,11:45,15:29,310,"$199,494.00","$174,696.00",$563.54,"$46,793.57"
SFO - PSP,54562128250,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/54562128250,https://www.airlines-manager.com/aircraft/show/114912306,13:15,16:59,112,"$92,098.00","$76,487.00",$682.92,"$20,487.59"
SFO - PSP,54562128251,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/54562128251,https://www.airlines-manager.com/aircraft/show/114912268,15:00,18:44,310,"$199,494.00","$174,696.00",$563.54,"$46,793.57"
SFO - PSP,54575909644,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/54575909644,https://www.airlines-manager.com/aircraft/show/114912263,21:00,0:44,276,"$186,610.00","$162,203.00",$587.69,"$43,447.23"
SFO - PVD,54536069438,SFO-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/54536069438,https://www.airlines-manager.com/aircraft/show/112650105,0:00,12:29,310,"$759,776.00","$702,109.00","$2,264.87","$56,243.71"
SFO - PVD,54536069439,SFO-PVD-BUF 5,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/54536069439,https://www.airlines-manager.com/aircraft/show/112650104,5:00,17:29,310,"$759,776.00","$702,109.00","$2,264.87","$56,243.71"
SFO - PVD,54556941154,SFO-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/54556941154,https://www.airlines-manager.com/aircraft/show/112650108,13:00,1:29,310,"$759,776.00","$702,109.00","$2,264.87","$56,243.71"
SFO - PVD,54567120408,SFO-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/54567120408,https://www.airlines-manager.com/aircraft/show/112650107,17:00,5:29,310,"759,776$","702,109$","$2,264.87","$56,243.71"
SFO - PVD,54571726785,SFO-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/54571726785,https://www.airlines-manager.com/aircraft/show/112650106,19:00,7:29,310,"759,776$","702,109$","$2,264.87","$56,243.71"
SFO - PWM,54536069519,SFO-KOA-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/54536069519,https://www.airlines-manager.com/aircraft/show/112650091,0:15,12:59,198,"574,433$","528,236$","$2,667.86","$41,484.50"
SFO - PWM,54536069520,SFO-KOA-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/54536069520,https://www.airlines-manager.com/aircraft/show/112650103,4:15,16:59,310,"767,544$","709,944$","$2,290.14","$55,754.76"
SFO - PWM,54545804719,SFO-KOA-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/54545804719,https://www.airlines-manager.com/aircraft/show/112650102,7:15,19:59,310,"767,544$","709,944$","$2,290.14","$55,754.76"
SFO - PWM,54562128340,SFO-KOA-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/54562128340,https://www.airlines-manager.com/aircraft/show/112650101,14:00,2:44,310,"767,544$","709,944$","$2,290.14","$55,754.76"
SFO - PWM,54567120314,SFO-KOA-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/54567120314,https://www.airlines-manager.com/aircraft/show/112650100,16:00,4:44,310,"767,544$","709,944$","$2,290.14","$55,754.76"
SFO - RAP,54536069970,SFO-FAR-BIL 1,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/54536069970,https://www.airlines-manager.com/aircraft/show/117782584,4:30,10:59,310,"397,901$","363,608$","$1,172.93","$56,083.50"
SFO - RAP,54551622415,SFO-FAR-BIL 4,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/54551622415,https://www.airlines-manager.com/aircraft/show/117782587,8:30,14:59,310,"397,901$","363,608$","$1,172.93","$56,083.50"
SFO - RAP,54562128434,SFO-FAR-BIL 3,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/54562128434,https://www.airlines-manager.com/aircraft/show/117782586,15:00,21:29,310,"397,901$","363,608$","$1,172.93","$56,083.50"
SFO - RAP,54575909609,SFO-FAR-BIL 2,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/54575909609,https://www.airlines-manager.com/aircraft/show/117782585,20:45,3:14,285,"378,982$","345,442$","$1,212.08","$53,281.54"
SFO - RDU,54536069991,SFO-PBI-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/54536069991,https://www.airlines-manager.com/aircraft/show/100301188,5:00,16:14,320,"709,519$","646,796$","$2,021.24","$57,578.28"
SFO - RDU,54545804703,SFO-PBI-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/54545804703,https://www.airlines-manager.com/aircraft/show/100301187,7:00,18:14,320,"709,519$","646,796$","$2,021.24","$57,578.28"
SFO - RDU,54551622465,SFO-PBI-RDU 5,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/54551622465,https://www.airlines-manager.com/aircraft/show/100301184,9:00,20:14,320,"709,519$","646,796$","$2,021.24","$57,578.28"
SFO - RDU,54567120397,SFO-PBI-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/54567120397,https://www.airlines-manager.com/aircraft/show/100301186,17:00,4:14,320,"709,519$","646,796$","$2,021.24","$57,578.28"
SFO - RDU,54571726789,SFO-PBI-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/54571726789,https://www.airlines-manager.com/aircraft/show/100301185,19:00,6:14,320,"709,519$","646,796$","$2,021.24","$57,578.28"
SFO - RIC,54545804657,SFO-ORF-RIC 1,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/54545804657,https://www.airlines-manager.com/aircraft/show/108328834,6:00,17:29,310,"723,392$","668,358$","$2,155.99","$58,202.44"
SFO - RIC,54545804658,SFO-ORF-RIC 2,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/54545804658,https://www.airlines-manager.com/aircraft/show/108328835,8:00,19:29,310,"723,392$","668,358$","$2,155.99","$58,202.44"
SFO - RIC,54551622519,SFO-ORF-RIC 5 B,A319-100,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/54551622519,https://www.airlines-manager.com/aircraft/show/108328833,10:00,21:29,198,"542,563$","498,431$","$2,517.33","$43,404.73"
SFO - RIC,54571726699,SFO-ORF-RIC 3,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/54571726699,https://www.airlines-manager.com/aircraft/show/108328836,18:00,5:29,310,"723,392$","668,358$","$2,155.99","$58,202.44"
SFO - RIC,54575909530,SFO-ORF-RIC 4,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/54575909530,https://www.airlines-manager.com/aircraft/show/108328837,20:00,7:29,310,"723,392$","668,358$","$2,155.99","$58,202.44"
SFO - RNO,54536069966,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/54536069966,https://www.airlines-manager.com/aircraft/show/88239554,4:15,6:59,320,"118,943$","92,623$",$289.45,"$33,886.46"
SFO - RNO,54562128366,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/54562128366,https://www.airlines-manager.com/aircraft/show/105223003,14:15,16:59,198,"90,039$","72,187$",$364.58,"$26,409.88"
SFO - RNO,54562128367,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/54562128367,https://www.airlines-manager.com/aircraft/show/88239553,14:15,16:59,320,"118,943$","92,623$",$289.45,"$33,886.46"
SFO - RNO,54567120287,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/54567120287,https://www.airlines-manager.com/aircraft/show/88239557,16:00,18:44,320,"118,943$","92,623$",$289.45,"$33,886.46"
SFO - RNO,54575909589,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/54575909589,https://www.airlines-manager.com/aircraft/show/88239555,20:30,23:14,320,"118,943$","92,623$",$289.45,"$33,886.46"
SFO - RSW,54536069997,SFO-RSW-BDL 3,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/54536069997,https://www.airlines-manager.com/aircraft/show/84915100,5:15,16:59,320,"726,988$","662,174$","$2,069.29","$56,435.28"
SFO - RSW,54545804718,SFO-RSW-BDL 4,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/54545804718,https://www.airlines-manager.com/aircraft/show/84915101,7:15,18:59,320,"726,988$","662,174$","$2,069.29","$56,435.28"
SFO - RSW,54567120402,SFO-RSW-BDL 1,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/54567120402,https://www.airlines-manager.com/aircraft/show/84915098,17:00,4:44,320,"726,988$","662,174$","$2,069.29","$56,435.28"
SFO - RSW,54571726783,SFO-RSW-BDL 2,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/54571726783,https://www.airlines-manager.com/aircraft/show/84915099,19:00,6:44,320,"726,988$","662,174$","$2,069.29","$56,435.28"
SFO - RSW,54575909631,SFO-RSW-BDL 5,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/54575909631,https://www.airlines-manager.com/aircraft/show/84915102,21:00,8:44,320,"726,988$","662,174$","$2,069.29","$56,435.28"
SFO - SAN,54545804757,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/54545804757,https://www.airlines-manager.com/aircraft/show/92390872,8:00,11:44,320,"216,450$","183,611$",$573.78,"$49,181.52"
SFO - SAN,54556940919,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/54556940919,https://www.airlines-manager.com/aircraft/show/92390869,11:00,14:44,320,"216,450$","183,611$",$573.78,"$49,181.52"
SFO - SAN,54556940920,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/54556940920,https://www.airlines-manager.com/aircraft/show/92390870,12:00,15:44,320,"216,450$","183,611$",$573.78,"$49,181.52"
SFO - SAN,54567120236,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/54567120236,https://www.airlines-manager.com/aircraft/show/92390873,15:30,19:14,320,"216,450$","183,611$",$573.78,"$49,181.52"
SFO - SAN,54575909560,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/54575909560,https://www.airlines-manager.com/aircraft/show/92390871,20:15,23:59,314,"213,998$","181,231$",$577.17,"$48,544.02"
SFO - SAT,54536069493,SFO-JAX-SAT 1,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/54536069493,https://www.airlines-manager.com/aircraft/show/86375568,0:15,8:14,310,"496,378$","455,108$","$1,468.09","$57,007.27"
SFO - SAT,54536069494,SFO-JAX-SAT 2,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/54536069494,https://www.airlines-manager.com/aircraft/show/86371267,2:15,10:14,310,"496,378$","455,108$","$1,468.09","$57,007.27"
SFO - SAT,54556941180,SFO-JAX-SAT 3,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/54556941180,https://www.airlines-manager.com/aircraft/show/86385102,13:00,20:59,310,"496,378$","455,108$","$1,468.09","$57,007.27"
SFO - SAT,54562128396,SFO-JAX-SAT 4,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/54562128396,https://www.airlines-manager.com/aircraft/show/86378760,15:00,22:59,310,"496,378$","455,108$","$1,468.09","$57,007.27"
SFO - SAT,54567120438,SFO-JAX-SAT 5,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/54567120438,https://www.airlines-manager.com/aircraft/show/86377315,17:15,1:14,310,"496,378$","455,108$","$1,468.09","$57,007.27"
SFO - SAV,54545804620,SFO-SAV-JAN 1,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/54545804620,https://www.airlines-manager.com/aircraft/show/114912265,5:45,16:59,310,"693,508$","640,203$","$2,065.17","$56,991.36"
SFO - SAV,54545804621,SFO-SAV-JAN 4,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/54545804621,https://www.airlines-manager.com/aircraft/show/114912270,7:45,18:59,310,"693,508$","640,203$","$2,065.17","$56,991.36"
SFO - SAV,54562128422,SFO-SAV-JAN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/54562128422,https://www.airlines-manager.com/aircraft/show/114917486,15:00,2:14,198,"521,067$","478,322$","$2,415.77","$42,580.59"
SFO - SAV,54571726782,SFO-SAV-JAN 3,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/54571726782,https://www.airlines-manager.com/aircraft/show/114912269,19:00,6:14,310,"693,508$","640,203$","$2,065.17","$56,991.36"
SFO - SAV,54575909582,SFO-SAV-JAN 2,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/54575909582,https://www.airlines-manager.com/aircraft/show/114912266,20:30,7:44,310,"693,508$","640,203$","$2,065.17","$56,991.36"
SFO - SDF,54536069643,SFO-SDF-LIT 2,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/54536069643,https://www.airlines-manager.com/aircraft/show/94886628,1:15,10:59,310,"611,784$","561,541$","$1,811.42","$57,692.57"
SFO - SDF,54536069644,SFO-SDF-LIT 4,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/54536069644,https://www.airlines-manager.com/aircraft/show/106453500,2:15,11:59,310,"611,784$","561,541$","$1,811.42","$57,692.57"
SFO - SDF,54562128351,SFO-SDF-LIT 1,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/54562128351,https://www.airlines-manager.com/aircraft/show/106453499,14:00,23:44,310,"611,784$","561,541$","$1,811.42","$57,692.57"
SFO - SDF,54567120353,SFO-SDF-LIT 3,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/54567120353,https://www.airlines-manager.com/aircraft/show/94886627,16:30,2:14,310,"611,784$","561,541$","$1,811.42","$57,692.57"
SFO - SDF,54567120354,SFO-SDF-LIT 5,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/54567120354,https://www.airlines-manager.com/aircraft/show/106453498,17:30,3:14,310,"611,784$","561,541$","$1,811.42","$57,692.57"
SFO - SEA,54536069846,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/54536069846,https://www.airlines-manager.com/aircraft/show/92390869,2:45,7:29,320,"300,138$","256,530$",$801.66,"$54,196.48"
SFO - SEA,54536069847,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/54536069847,https://www.airlines-manager.com/aircraft/show/92390870,3:30,8:14,320,"300,138$","256,530$",$801.66,"$54,196.48"
SFO - SEA,54545804602,SFO-PHL-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/54545804602,https://www.airlines-manager.com/aircraft/show/97900730,5:30,10:14,198,"228,859$","198,701$","$1,003.54","$41,979.08"
SFO - SEA,54545804603,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/54545804603,https://www.airlines-manager.com/aircraft/show/92390873,7:00,11:44,320,"300,138$","256,530$",$801.66,"$54,196.48"
SFO - SEA,54556941112,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/54556941112,https://www.airlines-manager.com/aircraft/show/92390871,12:00,16:44,320,"300,138$","256,530$",$801.66,"$54,196.48"
SFO - SEA,54580945246,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/54580945246,https://www.airlines-manager.com/aircraft/show/92390872,23:45,4:29,298,"287,684$","244,479$",$820.40,"$51,650.49"
SFO - SHA,54575909508,SFO 168B-4 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/54575909508,https://www.airlines-manager.com/aircraft/show/87933798,20:00,19:59,1046,"4,630,367$","4,294,834$","$4,105.96","$179,075.77"
SFO - SHA,54575909509,SFO 168A-4 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/54575909509,https://www.airlines-manager.com/aircraft/show/86817628,22:00,21:59,1046,"4,630,367$","4,294,834$","$4,105.96","$179,075.77"
SFO - SLC,54536069445,SFO-ORD-DTW 4,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/54536069445,https://www.airlines-manager.com/aircraft/show/101045331,0:00,4:29,400,"352,481$","311,580$",$778.95,"$69,497.40"
SFO - SLC,54536069446,SFO-ORD-DTW 2,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/54536069446,https://www.airlines-manager.com/aircraft/show/101045333,1:00,5:29,400,"352,481$","311,580$",$778.95,"$69,497.40"
SFO - SLC,54536069447,SFO-ORD-DTW 5,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/54536069447,https://www.airlines-manager.com/aircraft/show/101045330,3:00,7:29,400,"352,481$","311,580$",$778.95,"$69,497.40"
SFO - SLC,54545804759,SFO-ORD-DTW 1,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/54545804759,https://www.airlines-manager.com/aircraft/show/101045334,8:00,12:29,400,"352,481$","311,580$",$778.95,"$69,497.40"
SFO - SLC,54562128441,SFO-ORD-DTW 3,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/54562128441,https://www.airlines-manager.com/aircraft/show/101045332,15:00,19:29,216,"252,705$","214,728$",$994.11,"$47,894.72"
SFO - SMF,54551622418,SFO-SDF-LIT 1,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/54551622418,https://www.airlines-manager.com/aircraft/show/106453499,8:30,10:59,310,"82,768$","62,186$",$200.60,"$25,041.34"
SFO - SMF,54562128347,SFO-SDF-LIT 3,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/54562128347,https://www.airlines-manager.com/aircraft/show/94886627,14:00,16:29,310,"82,768$","62,186$",$200.60,"$25,041.34"
SFO - SMF,54562128348,SFO-SDF-LIT 5,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/54562128348,https://www.airlines-manager.com/aircraft/show/106453498,15:00,17:29,310,"82,768$","62,186$",$200.60,"$25,041.34"
SFO - SMF,54580945076,SFO-SDF-LIT 2,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/54580945076,https://www.airlines-manager.com/aircraft/show/94886628,22:45,1:14,310,"82,768$","62,186$",$200.60,"$25,041.34"
SFO - SMF,54580945077,SFO-SDF-LIT 4,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/54580945077,https://www.airlines-manager.com/aircraft/show/106453500,23:45,2:14,310,"82,768$","62,186$",$200.60,"$25,041.34"
SFO - STL,54545804682,SFO-MSY-STL 3,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/54545804682,https://www.airlines-manager.com/aircraft/show/98075265,6:45,15:29,320,"554,957$","501,203$","$1,566.26","$57,389.66"
SFO - STL,54551622446,SFO-MSY-STL 5,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/54551622446,https://www.airlines-manager.com/aircraft/show/98075263,8:45,17:29,320,"554,957$","501,203$","$1,566.26","$57,389.66"
SFO - STL,54556941152,SFO-MSY-STL 6,ERJ-175,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/54556941152,https://www.airlines-manager.com/aircraft/show/103534666,13:00,21:44,112,"261,292$","229,370$","$2,047.95","$26,263.74"
SFO - STL,54567120321,SFO-MSY-STL 2,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/54567120321,https://www.airlines-manager.com/aircraft/show/98075266,16:00,0:44,320,"554,957$","501,203$","$1,566.26","$57,389.66"
SFO - STL,54571726700,SFO-MSY-STL 4,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/54571726700,https://www.airlines-manager.com/aircraft/show/98075264,18:00,2:44,320,"554,957$","501,203$","$1,566.26","$57,389.66"
SFO - STL,54580945063,SFO-MSY-STL 1,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/54580945063,https://www.airlines-manager.com/aircraft/show/98075267,22:30,7:14,320,"554,957$","501,203$","$1,566.26","$57,389.66"
SFO - TFU,54556941123,SFO 168B-3 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/54556941123,https://www.airlines-manager.com/aircraft/show/87566902,12:30,14:59,1046,"5,210,012$","4,802,353$","$4,591.16","$1,933,833.42"
SFO - TFU,54562128378,SFO 168A-3 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/54562128378,https://www.airlines-manager.com/aircraft/show/86483501,14:30,16:59,1046,"5,210,012$","4,802,353$","$4,591.16","$1,933,833.42"
SFO - TPA,54536069612,SFO-FLL-TPA 1,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/54536069612,https://www.airlines-manager.com/aircraft/show/97955544,1:00,12:14,320,"701,298$","635,247$","$1,985.15","$56,550.18"
SFO - TPA,54536069613,SFO-FLL-TPA 3,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/54536069613,https://www.airlines-manager.com/aircraft/show/97955542,5:00,16:14,320,"701,298$","635,247$","$1,985.15","$56,550.18"
SFO - TPA,54545804762,SFO-FLL-TPA 5,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/54545804762,https://www.airlines-manager.com/aircraft/show/97955540,8:00,19:14,320,"701,298$","635,247$","$1,985.15","$56,550.18"
SFO - TPA,54556941200,SFO-FLL-TPA 2,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/54556941200,https://www.airlines-manager.com/aircraft/show/97955543,13:00,0:14,320,"701,298$","635,247$","$1,985.15","$56,550.18"
SFO - TPA,54567120410,SFO-FLL-TPA 4,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/54567120410,https://www.airlines-manager.com/aircraft/show/97955541,17:00,4:14,320,"701,298$","635,247$","$1,985.15","$56,550.18"
SFO - TPA,54575909515,SFO-FLL-TPA 6 B,A319-100,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/54575909515,https://www.airlines-manager.com/aircraft/show/97900729,20:00,7:29,198,"529,365$","481,509$","$2,431.86","$41,931.12"
SFO - TPE,54575909506,SFO 168B-5 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/54575909506,https://www.airlines-manager.com/aircraft/show/87933799,20:00,21:14,1046,"4,755,660$","4,405,634$","$4,211.89","$3,572,135.68"
SFO - TPE,54575909507,SFO 168A-5 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/54575909507,https://www.airlines-manager.com/aircraft/show/86808589,22:00,23:14,1026,"4,692,068$","4,346,049$","$4,235.92","$3,523,823.51"
SFO - TUL,54536069985,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/54536069985,https://www.airlines-manager.com/aircraft/show/108410857,4:45,12:29,320,"491,543$","446,045$","$1,393.89","$57,678.23"
SFO - TUL,54545804707,SFO-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/54545804707,https://www.airlines-manager.com/aircraft/show/108466264,7:00,14:44,112,"232,110$","205,102$","$1,831.27","$26,521.81"
SFO - TUL,54562128411,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/54562128411,https://www.airlines-manager.com/aircraft/show/108410856,15:00,22:44,320,"491,543$","446,045$","$1,393.89","$57,678.23"
SFO - TUL,54567120257,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/54567120257,https://www.airlines-manager.com/aircraft/show/108410859,15:45,23:29,320,"491,543$","446,045$","$1,393.89","$57,678.23"
SFO - TUL,54575909598,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/54575909598,https://www.airlines-manager.com/aircraft/show/108410858,20:45,4:29,320,"491,543$","446,045$","$1,393.89","$57,678.23"
SFO - TUS,54545804758,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/54545804758,https://www.airlines-manager.com/aircraft/show/107160378,8:00,12:59,320,"318,002$","282,841$",$883.88,"$56,757.39"
SFO - TUS,54551622502,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/54551622502,https://www.airlines-manager.com/aircraft/show/107132310,9:30,14:29,112,"151,573$","131,806$","$1,176.84","$26,449.36"
SFO - TUS,54551622503,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/54551622503,https://www.airlines-manager.com/aircraft/show/107160381,10:30,15:29,320,"318,002$","282,841$",$883.88,"$56,757.39"
SFO - TUS,54567120331,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/54567120331,https://www.airlines-manager.com/aircraft/show/107160380,16:00,20:59,320,"318,002$","282,841$",$883.88,"$56,757.39"
SFO - TUS,54580945226,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/54580945226,https://www.airlines-manager.com/aircraft/show/107160379,23:30,4:29,320,"318,002$","282,841$",$883.88,"$56,757.39"
SFO - TYS,54545804617,SFO-TYS-MSN 2,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/54545804617,https://www.airlines-manager.com/aircraft/show/117782564,5:45,15:59,320,"639,914$","585,231$","$1,828.85","$57,188.70"
SFO - TYS,54545804618,SFO-TYS-MSN 1,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/54545804618,https://www.airlines-manager.com/aircraft/show/117782565,7:30,17:44,320,"639,914$","585,231$","$1,828.85","$57,188.70"
SFO - TYS,54567120290,SFO-TYS-MSN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/54567120290,https://www.airlines-manager.com/aircraft/show/117782582,16:00,2:14,198,"481,892$","442,053$","$2,232.59","$43,197.36"
SFO - TYS,54571726834,SFO-TYS-MSN 3,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/54571726834,https://www.airlines-manager.com/aircraft/show/117782563,19:30,5:44,320,"639,914$","585,231$","$1,828.85","$57,188.70"
SFO - TYS,54575909593,SFO-TYS-MSN 4,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/54575909593,https://www.airlines-manager.com/aircraft/show/117782562,20:45,6:59,320,"639,914$","585,231$","$1,828.85","$57,188.70"
SFO - YEG,54536069921,SFO-YEG-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/54536069921,https://www.airlines-manager.com/aircraft/show/117782560,3:30,9:59,320,"419,195$","376,577$","$1,176.80","$58,083.86"
SFO - YEG,54545804773,SFO-YEG-YYC 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/54545804773,https://www.airlines-manager.com/aircraft/show/117782581,8:15,14:59,198,"316,101$","285,829$","$1,443.58","$42,449.85"
SFO - YEG,54556941132,SFO-YEG-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/54556941132,https://www.airlines-manager.com/aircraft/show/117782561,13:00,19:29,320,"419,195$","376,577$","$1,176.80","$58,083.86"
SFO - YEG,54562128427,SFO-YEG-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/54562128427,https://www.airlines-manager.com/aircraft/show/116932364,15:00,21:29,320,"419,195$","376,577$","$1,176.80","$58,083.86"
SFO - YEG,54575909683,SFO-YEG-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/54575909683,https://www.airlines-manager.com/aircraft/show/117782559,21:30,3:59,320,"419,195$","376,577$","$1,176.80","$58,083.86"
SFO - YUL,54536069567,SFO-YYZ-YUL 1,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/54536069567,https://www.airlines-manager.com/aircraft/show/115413609,0:45,12:29,400,"922,307$","846,283$","$2,115.71","$72,126.39"
SFO - YUL,54545804633,SFO-YYZ-YUL 4,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/54545804633,https://www.airlines-manager.com/aircraft/show/115413612,6:00,17:44,400,"922,307$","846,283$","$2,115.71","$72,126.39"
SFO - YUL,54562128312,SFO-YYZ-YUL 2,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/54562128312,https://www.airlines-manager.com/aircraft/show/115413610,14:00,1:44,400,"922,307$","846,283$","$2,115.71","$72,126.39"
SFO - YUL,54567120375,SFO-YYZ-YUL 3,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/54567120375,https://www.airlines-manager.com/aircraft/show/115413611,16:45,4:29,400,"922,307$","846,283$","$2,115.71","$72,126.39"
SFO - YUL,54571726779,SFO-YYZ-YUL 5,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/54571726779,https://www.airlines-manager.com/aircraft/show/91126653,18:45,6:29,400,"922,307$","846,283$","$2,115.71","$72,126.39"
SFO - YVR,54536069588,SFO-MSY-STL 2,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/54536069588,https://www.airlines-manager.com/aircraft/show/98075266,0:45,5:59,320,"330,083$","289,120$",$903.50,"$55,245.86"
SFO - YVR,54536069589,SFO-MSY-STL 4,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/54536069589,https://www.airlines-manager.com/aircraft/show/98075264,2:45,7:59,320,"330,083$","289,120$",$903.50,"$55,245.86"
SFO - YVR,54545804729,SFO-MSY-STL 1,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/54545804729,https://www.airlines-manager.com/aircraft/show/98075267,7:15,12:29,320,"330,083$","289,120$",$903.50,"$55,245.86"
SFO - YVR,54567120276,SFO-MSY-STL 3,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/54567120276,https://www.airlines-manager.com/aircraft/show/98075265,16:00,21:14,320,"330,083$","289,120$",$903.50,"$55,245.86"
SFO - YVR,54571726701,SFO-MSY-STL 5,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/54571726701,https://www.airlines-manager.com/aircraft/show/98075263,18:00,23:14,320,"330,083$","289,120$",$903.50,"$55,245.86"
SFO - YVR,54575909687,SFO-MSY-STL 6,ERJ-175,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/54575909687,https://www.airlines-manager.com/aircraft/show/103534666,21:45,2:59,112,"156,483$","133,669$","$1,193.47","$25,541.85"
SFO - YYC,54536069948,SFO-YEG-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/54536069948,https://www.airlines-manager.com/aircraft/show/117782559,4:00,9:59,320,"385,106$","341,317$","$1,066.62","$57,044.62"
SFO - YYC,54556941133,SFO-YEG-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/54556941133,https://www.airlines-manager.com/aircraft/show/117782560,13:00,18:59,320,"385,106$","341,317$","$1,066.62","$57,044.62"
SFO - YYC,54562128420,SFO-YEG-YYC 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/54562128420,https://www.airlines-manager.com/aircraft/show/117782581,15:00,20:59,198,"289,706$","258,886$","$1,307.51","$43,267.86"
SFO - YYC,54571726837,SFO-YEG-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/54571726837,https://www.airlines-manager.com/aircraft/show/117782561,19:30,1:29,320,"385,106$","341,317$","$1,066.62","$57,044.62"
SFO - YYC,54575909680,SFO-YEG-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/54575909680,https://www.airlines-manager.com/aircraft/show/116932364,21:30,3:29,320,"385,106$","341,317$","$1,066.62","$57,044.62"
SFO - YYZ,54536069727,SFO-YYZ-YUL 2,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/54536069727,https://www.airlines-manager.com/aircraft/show/115413610,1:45,12:29,400,"881,945$","803,825$","$2,009.56","$74,890.53"
SFO - YYZ,54545804634,SFO-YYZ-YUL 3,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/54545804634,https://www.airlines-manager.com/aircraft/show/115413611,6:00,16:44,400,"881,945$","803,825$","$2,009.56","$74,890.53"
SFO - YYZ,54545804635,SFO-YYZ-YUL 5,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/54545804635,https://www.airlines-manager.com/aircraft/show/91126653,8:00,18:44,400,"881,945$","803,825$","$2,009.56","$74,890.53"
SFO - YYZ,54562128313,SFO-YYZ-YUL 1,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/54562128313,https://www.airlines-manager.com/aircraft/show/115413609,14:00,0:44,400,"881,945$","803,825$","$2,009.56","$74,890.53"
SFO - YYZ,54571726647,SFO-YYZ-YUL 4,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/54571726647,https://www.airlines-manager.com/aircraft/show/115413612,17:45,4:29,400,"881,945$","803,825$","$2,009.56","$74,890.53"`;
