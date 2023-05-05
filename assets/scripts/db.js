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
		name: 'Daytona Beach International Airport (DAB)',
		city: 'Daytona Beach, USA - Florida 🇺🇸',
		pos: [29.18042531670668, -81.05629836579335],
		hubs: ['iah'],
		tz: 'US/Eastern'
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
		name: 'Northwest Florida Beaches International Airport (ECP)',
		city: 'Panama City, USA - Florida 🇺🇸',
		pos: [30.355281862622725, -85.7980485671208],
		hubs: ['iah'],
		tz: 'US/Eastern'
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
		name: 'Wilmington International Airport (ILM)',
		city: 'Wilmington, USA - North Carolina 🇺🇸',
		pos: [34.26623590568664, -77.90979573247422],
		hubs: ['iah'],
		tz: 'US/Eastern'
	},
	{
		name: 'Indianapolis International Airport (IND)',
		city: 'Indianapolis, USA - Indiana 🇺🇸',
		pos: [39.716991323244, -86.29558447337403],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Hilo International Airport (ITO)',
		city: 'Hilo, USA - Hawaii 🇺🇸',
		pos: [19.71828308321948, -155.04165378827003],
		hubs: ['hnl'],
		tz: 'US/Hawaii'
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
		name: 'Montrose Regional Airport (MTJ)',
		city: 'Montrose, USA - Colorado 🇺🇸',
		pos: [38.50095072330021, -107.89509828021419],
		hubs: ['iah'],
		tz: 'US/Mountain'
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
		name: 'Myrtle Beach International Airport (MYR)',
		city: 'Myrtle Beach, USA - South Carolina 🇺🇸',
		pos: [33.68213937915149, -78.92800159200796],
		hubs: ['iah'],
		tz: 'US/Eastern'
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
		name: 'Pensacola International Airport (PNS)',
		city: 'Pensacola, USA - Florida 🇺🇸',
		pos: [30.473625313477296, -87.18674410562464],
		hubs: ['iah'],
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
		name: 'Sarasota Bradenton International Airport (SRQ)',
		city: 'Sarasota, USA - Florida 🇺🇸',
		pos: [27.395100025167416, -82.5539055345659],
		hubs: ['iah'],
		tz: 'US/Eastern'
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
EWR - ABQ,54930654936,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/54930654936,https://www.airlines-manager.com/aircraft/show/90717078,0:45,9:59,310,"$573,228.00","$527,252.00","$1,700.81","$57,103.10"
EWR - ABQ,54930654937,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/54930654937,https://www.airlines-manager.com/aircraft/show/95950199,2:45,11:59,310,"$573,228.00","$527,252.00","$1,700.81","$57,103.10"
EWR - ABQ,54942363103,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/54942363103,https://www.airlines-manager.com/aircraft/show/90717079,10:00,19:14,310,"$573,228.00","$527,252.00","$1,700.81","$57,103.10"
EWR - ABQ,54956618160,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/54956618160,https://www.airlines-manager.com/aircraft/show/90717077,16:45,1:59,310,"$573,228.00","$527,252.00","$1,700.81","$57,103.10"
EWR - ABQ,54961494212,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/54961494212,https://www.airlines-manager.com/aircraft/show/90717076,17:45,2:59,310,"$573,228.00","$527,252.00","$1,700.81","$57,103.10"
EWR - ALB,54930654859,EWR-TYS-GSO 2,A321-200,https://www.airlines-manager.com/network/showline/50283479,https://www.airlines-manager.com/network/showflight/54930654859,https://www.airlines-manager.com/aircraft/show/119220543,0:15,2:59,310,"$96,677.00","$78,944.00",$254.66,"$28,881.95"
EWR - ALB,54930654860,EWR-TYS-GSO 1,A321-200,https://www.airlines-manager.com/network/showline/50283479,https://www.airlines-manager.com/network/showflight/54930654860,https://www.airlines-manager.com/aircraft/show/119220542,4:45,7:29,310,"$96,677.00","$78,944.00",$254.66,"$28,881.95"
EWR - ALB,54956618108,EWR-TYS-GSO 4,A321-200,https://www.airlines-manager.com/network/showline/50283479,https://www.airlines-manager.com/network/showflight/54956618108,https://www.airlines-manager.com/aircraft/show/119220545,16:00,18:44,310,"$96,677.00","$78,944.00",$254.66,"$28,881.95"
EWR - ALB,54965848615,EWR-TYS-GSO 3,A321-200,https://www.airlines-manager.com/network/showline/50283479,https://www.airlines-manager.com/network/showflight/54965848615,https://www.airlines-manager.com/aircraft/show/119220544,20:30,23:14,310,"$96,677.00","$78,944.00",$254.66,"$28,881.95"
EWR - AMS,54947196947,EWR 56B-4 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/54947196947,https://www.airlines-manager.com/aircraft/show/94521247,11:30,2:44,748,"$2,318,738.00","$2,073,912.00","$2,772.61","$136,143.02"
EWR - AMS,54952417632,EWR 56B-2 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/54952417632,https://www.airlines-manager.com/aircraft/show/90656556,13:15,4:29,748,"$2,318,738.00","$2,073,912.00","$2,772.61","$136,143.02"
EWR - AMS,54956618006,EWR 56B-7 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/54956618006,https://www.airlines-manager.com/aircraft/show/89124072,15:00,6:14,748,"$2,076,963.00","$1,893,772.00","$2,531.78","$124,317.64"
EWR - ANC,54942363104,EWR-STL-PIT 3,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/54942363104,https://www.airlines-manager.com/aircraft/show/115400546,10:00,0:59,338,"$1,002,354.00","$939,270.00","$2,778.91","$62,687.65"
EWR - ANC,54952417630,EWR-STL-PIT 2,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/54952417630,https://www.airlines-manager.com/aircraft/show/115400547,13:15,4:14,338,"$1,002,354.00","$939,270.00","$2,778.91","$62,687.65"
EWR - ANC,54961494335,EWR-STL-PIT 1,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/54961494335,https://www.airlines-manager.com/aircraft/show/115400548,18:45,9:44,338,"$1,002,354.00","$939,270.00","$2,778.91","$62,687.65"
EWR - ANC,54969516357,EWR-STL-PIT 4,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/54969516357,https://www.airlines-manager.com/aircraft/show/115400545,21:45,12:44,338,"$1,002,354.00","$939,270.00","$2,778.91","$62,687.65"
EWR - ARN,54930655367,EWR 56D-1 E,787-10,https://www.airlines-manager.com/network/showline/50072203,https://www.airlines-manager.com/network/showflight/54930655367,https://www.airlines-manager.com/aircraft/show/118644436,3:45,19:44,648,"$1,965,373.00","$1,833,890.00","$2,830.08","$114,737.64"
EWR - ARN,54952417421,EWR 56D-3 E,787-10,https://www.airlines-manager.com/network/showline/50072203,https://www.airlines-manager.com/network/showflight/54952417421,https://www.airlines-manager.com/aircraft/show/118644438,12:45,4:44,648,"$1,965,373.00","$1,833,890.00","$2,830.08","$114,737.64"
EWR - ARN,54961494318,EWR 56D-5 E,787-10,https://www.airlines-manager.com/network/showline/50072203,https://www.airlines-manager.com/network/showflight/54961494318,https://www.airlines-manager.com/aircraft/show/118644440,18:45,10:44,648,"$1,965,373.00","$1,833,890.00","$2,830.08","$114,737.64"
EWR - ATH,54930654724,EWR 84A-7 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/54930654724,https://www.airlines-manager.com/aircraft/show/94521249,0:00,19:59,852,"$3,234,067.00","$2,941,774.00","$3,452.79","$147,211.38"
EWR - ATH,54965848545,EWR 84A-4 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/54965848545,https://www.airlines-manager.com/aircraft/show/90656551,19:45,15:44,852,"$3,234,067.00","$2,941,774.00","$3,452.79","$147,211.38"
EWR - ATL,54942363088,EWR-DFW-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/54942363088,https://www.airlines-manager.com/aircraft/show/90489724,10:00,14:59,320,"$316,346.00","$255,029.00",$796.97,"$51,176.39"
EWR - ATL,54952417799,EWR-DFW-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/54952417799,https://www.airlines-manager.com/aircraft/show/90489726,14:15,19:14,320,"$316,346.00","$255,029.00",$796.97,"$51,176.39"
EWR - ATL,54961494196,EWR-DFW-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/54961494196,https://www.airlines-manager.com/aircraft/show/90489725,17:30,22:29,320,"$316,346.00","$255,029.00",$796.97,"$51,176.39"
EWR - ATL,54961494197,EWR-DFW-ATL 6 B,A319-100,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/54961494197,https://www.airlines-manager.com/aircraft/show/105222360,18:30,23:29,198,"$240,998.00","$198,928.00","$1,004.69","$39,918.66"
EWR - ATL,54965848527,EWR-DFW-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/54965848527,https://www.airlines-manager.com/aircraft/show/86238752,19:45,0:44,320,"$316,346.00","$255,029.00",$796.97,"$51,176.39"
EWR - ATL,54969516405,EWR-DFW-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/54969516405,https://www.airlines-manager.com/aircraft/show/86238753,22:15,3:14,320,"$316,346.00","$255,029.00",$796.97,"$51,176.39"
EWR - AUS,54930655165,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/54930655165,https://www.airlines-manager.com/aircraft/show/90717077,2:00,9:59,310,"$499,170.00","$457,926.00","$1,477.18","$57,360.25"
EWR - AUS,54930655167,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/54930655167,https://www.airlines-manager.com/aircraft/show/90717076,3:00,10:59,310,"$499,170.00","$457,926.00","$1,477.18","$57,360.25"
EWR - AUS,54942363098,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/54942363098,https://www.airlines-manager.com/aircraft/show/90717078,10:00,17:59,310,"$499,170.00","$457,926.00","$1,477.18","$57,360.25"
EWR - AUS,54947197000,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/54947197000,https://www.airlines-manager.com/aircraft/show/95950199,12:00,19:59,310,"$499,170.00","$457,926.00","$1,477.18","$57,360.25"
EWR - AUS,54965848477,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/54965848477,https://www.airlines-manager.com/aircraft/show/90717079,19:15,3:14,310,"$499,170.00","$457,926.00","$1,477.18","$57,360.25"
EWR - BCN,54956618061,EWR 84A-5 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/54956618061,https://www.airlines-manager.com/aircraft/show/94521250,15:45,7:44,852,"$2,615,130.00","$2,372,833.00","$2,785.02","$148,456.70"
EWR - BCN,54965848572,EWR 84A-2 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/54965848572,https://www.airlines-manager.com/aircraft/show/94521252,20:00,11:59,852,"$2,615,130.00","$2,372,833.00","$2,785.02","$148,456.70"
EWR - BDA,54942363026,EWR-YEG-BFF 5 B,A319-100,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/54942363026,https://www.airlines-manager.com/aircraft/show/115493369,8:45,13:59,198,"$243,375.00","$221,602.00","$1,119.20","$42,344.33"
EWR - BDA,54947196838,EWR-YEG-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/54947196838,https://www.airlines-manager.com/aircraft/show/98936170,11:00,16:14,320,"$321,148.00","$290,358.00",$907.37,"$55,482.42"
EWR - BDA,54952417457,EWR-YEG-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/54952417457,https://www.airlines-manager.com/aircraft/show/98936171,13:00,18:14,320,"$321,148.00","$290,358.00",$907.37,"$55,482.42"
EWR - BDA,54965848671,EWR-YEG-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/54965848671,https://www.airlines-manager.com/aircraft/show/98936168,21:00,2:14,320,"$321,148.00","$290,358.00",$907.37,"$55,482.42"
EWR - BDA,54969516430,EWR-YEG-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/54969516430,https://www.airlines-manager.com/aircraft/show/98936169,22:30,3:44,252,"$258,071.00","$229,064.00",$908.98,"$43,770.19"
EWR - BDL,54930654993,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/54930654993,https://www.airlines-manager.com/aircraft/show/108834811,1:00,3:29,310,"$89,395.00","$71,067.00",$229.25,"$28,617.58"
EWR - BDL,54942363067,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/54942363067,https://www.airlines-manager.com/aircraft/show/108466265,9:30,11:59,112,"$38,361.00","$27,163.00",$242.53,"$10,938.12"
EWR - BDL,54952417735,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/54952417735,https://www.airlines-manager.com/aircraft/show/108834810,14:00,16:29,310,"$89,395.00","$71,067.00",$229.25,"$28,617.58"
EWR - BDL,54956618073,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/54956618073,https://www.airlines-manager.com/aircraft/show/108834809,16:00,18:29,310,"$89,395.00","$71,067.00",$229.25,"$28,617.58"
EWR - BDL,54969516470,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/54969516470,https://www.airlines-manager.com/aircraft/show/108834808,23:00,1:29,310,"$89,395.00","$71,067.00",$229.25,"$28,617.58"
EWR - BER,54930655534,EWR 84B-5  B2,777-300,https://www.airlines-manager.com/network/showline/49921899,https://www.airlines-manager.com/network/showflight/54930655534,https://www.airlines-manager.com/aircraft/show/117958699,5:45,22:14,852,"$2,705,265.00","$2,453,617.00","$2,879.83","$148,854.42"
EWR - BER,54961494209,EWR 84B-1  B2,777-300,https://www.airlines-manager.com/network/showline/49921899,https://www.airlines-manager.com/network/showflight/54961494209,https://www.airlines-manager.com/aircraft/show/117958695,17:45,10:14,852,"$2,705,265.00","$2,453,617.00","$2,879.83","$148,854.42"
EWR - BFF,54930655233,EWR-YEG-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/54930655233,https://www.airlines-manager.com/aircraft/show/98936168,2:15,10:14,320,"$505,586.00","$462,875.00","$1,446.48","$57,980.17"
EWR - BFF,54930655234,EWR-YEG-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/54930655234,https://www.airlines-manager.com/aircraft/show/98936169,3:45,11:44,320,"$505,586.00","$462,875.00","$1,446.48","$57,980.17"
EWR - BFF,54952417756,EWR-YEG-BFF 5 B,A319-100,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/54952417756,https://www.airlines-manager.com/aircraft/show/115493369,14:00,21:59,198,"$381,737.00","$350,827.00","$1,771.85","$43,944.93"
EWR - BFF,54956618126,EWR-YEG-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/54956618126,https://www.airlines-manager.com/aircraft/show/98936170,16:15,0:14,320,"$505,586.00","$462,875.00","$1,446.48","$57,980.17"
EWR - BFF,54961494275,EWR-YEG-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/54961494275,https://www.airlines-manager.com/aircraft/show/98936171,18:15,2:14,320,"$505,586.00","$462,875.00","$1,446.48","$57,980.17"
EWR - BHM,54930655201,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/54930655201,https://www.airlines-manager.com/aircraft/show/116042862,2:15,7:44,310,"$345,551.00","$316,758.00","$1,021.80","$57,767.42"
EWR - BHM,54942362983,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/54942362983,https://www.airlines-manager.com/aircraft/show/116042859,8:30,13:59,310,"$345,551.00","$316,758.00","$1,021.80","$57,767.42"
EWR - BHM,54952417702,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/54952417702,https://www.airlines-manager.com/aircraft/show/116042860,14:00,19:29,310,"$345,551.00","$316,758.00","$1,021.80","$57,767.42"
EWR - BHM,54956618037,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/54956618037,https://www.airlines-manager.com/aircraft/show/116042861,15:15,20:44,310,"$345,551.00","$316,758.00","$1,021.80","$57,767.42"
EWR - BIL,54942363099,EWR-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/54942363099,https://www.airlines-manager.com/aircraft/show/116047882,10:00,18:59,320,"$563,348.00","$517,391.00","$1,616.85","$57,594.55"
EWR - BIL,54947196997,EWR-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/54947196997,https://www.airlines-manager.com/aircraft/show/116047885,12:00,20:59,320,"$563,348.00","$517,391.00","$1,616.85","$57,594.55"
EWR - BIL,54965848687,EWR-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/54965848687,https://www.airlines-manager.com/aircraft/show/116047884,21:15,6:14,320,"$563,348.00","$517,391.00","$1,616.85","$57,594.55"
EWR - BIL,54969516457,EWR-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/54969516457,https://www.airlines-manager.com/aircraft/show/116047883,22:45,7:44,320,"$563,348.00","$517,391.00","$1,616.85","$57,594.55"
EWR - BNA,54930655325,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/54930655325,https://www.airlines-manager.com/aircraft/show/104610408,3:15,8:14,310,"$321,737.00","$292,397.00",$943.22,"$58,674.98"
EWR - BNA,54942363003,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/54942363003,https://www.airlines-manager.com/aircraft/show/104610409,8:30,13:29,310,"$321,737.00","$292,397.00",$943.22,"$58,674.98"
EWR - BNA,54952417583,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/54952417583,https://www.airlines-manager.com/aircraft/show/104610410,13:00,17:59,310,"$321,737.00","$292,397.00",$943.22,"$58,674.98"
EWR - BNA,54961494038,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/54961494038,https://www.airlines-manager.com/aircraft/show/96421247,17:00,21:59,112,"$152,744.00","$133,838.00","$1,194.98","$26,857.12"
EWR - BNA,54965848684,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/54965848684,https://www.airlines-manager.com/aircraft/show/104610407,21:15,2:14,310,"$321,737.00","$292,397.00",$943.22,"$58,674.98"
EWR - BOI,54930655044,EWR-BOI-PBI 5 B,A319-100,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/54930655044,https://www.airlines-manager.com/aircraft/show/110582846,1:30,11:59,198,"$490,416.00","$452,174.00","$2,283.71","$43,132.66"
EWR - BOI,54942363139,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/54942363139,https://www.airlines-manager.com/aircraft/show/104418460,10:00,20:29,310,"$652,968.00","$605,281.00","$1,952.52","$57,737.46"
EWR - BOI,54956617986,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/54956617986,https://www.airlines-manager.com/aircraft/show/104418463,15:00,1:29,310,"$652,968.00","$605,281.00","$1,952.52","$57,737.46"
EWR - BOI,54956617987,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/54956617987,https://www.airlines-manager.com/aircraft/show/104418462,16:30,2:59,310,"$652,968.00","$605,281.00","$1,952.52","$57,737.46"
EWR - BOI,54971692249,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/54971692249,https://www.airlines-manager.com/aircraft/show/104418461,23:30,9:59,310,"$652,968.00","$605,281.00","$1,952.52","$57,737.46"
EWR - BOS,54930655299,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/54930655299,https://www.airlines-manager.com/aircraft/show/104034464,3:00,5:59,216,"$93,775.00","$73,989.00",$342.54,"$24,800.78"
EWR - BOS,54942363074,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/54942363074,https://www.airlines-manager.com/aircraft/show/104034463,10:00,12:59,216,"$93,775.00","$73,989.00",$342.54,"$24,800.78"
EWR - BOS,54952417427,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/54952417427,https://www.airlines-manager.com/aircraft/show/104034462,12:45,15:44,216,"$93,775.00","$73,989.00",$342.54,"$24,800.78"
EWR - BOS,54952417428,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/54952417428,https://www.airlines-manager.com/aircraft/show/99316501,13:45,16:44,216,"$93,775.00","$73,989.00",$342.54,"$24,800.78"
EWR - BOS,54961494027,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/54961494027,https://www.airlines-manager.com/aircraft/show/104034464,17:00,19:59,216,"$93,775.00","$73,989.00",$342.54,"$24,800.78"
EWR - BOS,54965848567,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/54965848567,https://www.airlines-manager.com/aircraft/show/104034463,20:00,22:59,216,"$93,775.00","$73,989.00",$342.54,"$24,800.78"
EWR - BOS,54969516460,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/54969516460,https://www.airlines-manager.com/aircraft/show/104034462,22:45,1:44,216,"$93,775.00","$73,989.00",$342.54,"$24,800.78"
EWR - BOS,54971692280,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/54971692280,https://www.airlines-manager.com/aircraft/show/99316501,23:45,2:44,216,"$93,775.00","$73,989.00",$342.54,"$24,800.78"
EWR - BRU,54930655259,EWR 84B-1  B2,777-300,https://www.airlines-manager.com/network/showline/49921920,https://www.airlines-manager.com/network/showflight/54930655259,https://www.airlines-manager.com/aircraft/show/117958695,2:30,17:44,852,"$2,488,490.00","$2,262,476.00","$2,655.49","$148,521.40"
EWR - BRU,54952417815,EWR 84B-4  B2,777-300,https://www.airlines-manager.com/network/showline/49921920,https://www.airlines-manager.com/network/showflight/54952417815,https://www.airlines-manager.com/aircraft/show/117958698,14:30,5:44,852,"$2,488,490.00","$2,262,476.00","$2,655.49","$148,521.40"
EWR - BTV,54942363023,EWR-FCA-CID 1,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/54942363023,https://www.airlines-manager.com/aircraft/show/116042866,8:45,11:59,310,"$139,437.00","$120,222.00",$387.81,"$37,182.06"
EWR - BTV,54947196968,EWR-FCA-CID 4,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/54947196968,https://www.airlines-manager.com/aircraft/show/116042863,12:00,15:14,310,"$139,437.00","$120,222.00",$387.81,"$37,182.06"
EWR - BTV,54952417455,EWR-FCA-CID 3,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/54952417455,https://www.airlines-manager.com/aircraft/show/116042864,13:00,16:14,310,"$139,437.00","$120,222.00",$387.81,"$37,182.06"
EWR - BTV,54961494317,EWR-FCA-CID 2,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/54961494317,https://www.airlines-manager.com/aircraft/show/116042865,18:45,21:59,310,"$139,437.00","$120,222.00",$387.81,"$37,182.06"
EWR - BUF,54930655532,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/54930655532,https://www.airlines-manager.com/aircraft/show/106104450,5:30,8:44,112,"$70,545.00","$57,741.00",$515.54,"$17,858.04"
EWR - BUF,54947196920,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/54947196920,https://www.airlines-manager.com/aircraft/show/105731236,11:00,14:14,320,"$154,046.00","$130,076.00",$406.49,"$40,229.69"
EWR - BUF,54956617951,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/54956617951,https://www.airlines-manager.com/aircraft/show/88494376,14:45,17:59,320,"$154,046.00","$130,076.00",$406.49,"$40,229.69"
EWR - BUF,54961494292,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/54961494292,https://www.airlines-manager.com/aircraft/show/88494377,18:30,21:44,320,"$154,046.00","$130,076.00",$406.49,"$40,229.69"
EWR - BUF,54969516476,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/54969516476,https://www.airlines-manager.com/aircraft/show/88494375,23:00,2:14,320,"$154,046.00","$130,076.00",$406.49,"$40,229.69"
EWR - BWI,54930654868,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/54930654868,https://www.airlines-manager.com/aircraft/show/104034464,0:15,2:59,216,"$74,600.00","$56,030.00",$259.40,"$20,498.78"
EWR - BWI,54930654869,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/54930654869,https://www.airlines-manager.com/aircraft/show/104034463,3:15,5:59,216,"$74,600.00","$56,030.00",$259.40,"$20,498.78"
EWR - BWI,54942363075,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/54942363075,https://www.airlines-manager.com/aircraft/show/104034462,10:00,12:44,216,"$74,600.00","$56,030.00",$259.40,"$20,498.78"
EWR - BWI,54947196892,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/54947196892,https://www.airlines-manager.com/aircraft/show/99316501,11:00,13:44,216,"$74,600.00","$56,030.00",$259.40,"$20,498.78"
EWR - BWI,54952417803,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/54952417803,https://www.airlines-manager.com/aircraft/show/104034464,14:15,16:59,216,"$74,600.00","$56,030.00",$259.40,"$20,498.78"
EWR - BWI,54961494061,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/54961494061,https://www.airlines-manager.com/aircraft/show/104034463,17:15,19:59,216,"$74,600.00","$56,030.00",$259.40,"$20,498.78"
EWR - BWI,54965848562,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/54965848562,https://www.airlines-manager.com/aircraft/show/104034462,20:00,22:44,216,"$74,600.00","$56,030.00",$259.40,"$20,498.78"
EWR - BWI,54965848563,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/54965848563,https://www.airlines-manager.com/aircraft/show/99316501,21:00,23:44,216,"$74,600.00","$56,030.00",$259.40,"$20,498.78"
EWR - BZN,54930654896,EWR-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/54930654896,https://www.airlines-manager.com/aircraft/show/116047885,0:30,9:44,320,"$590,320.00","$543,416.00","$1,698.18","$58,853.72"
EWR - BZN,54947196998,EWR-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/54947196998,https://www.airlines-manager.com/aircraft/show/116047884,12:00,21:14,320,"$590,320.00","$543,416.00","$1,698.18","$58,853.72"
EWR - BZN,54952417642,EWR-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/54952417642,https://www.airlines-manager.com/aircraft/show/116047883,13:30,22:44,320,"$590,320.00","$543,416.00","$1,698.18","$58,853.72"
EWR - BZN,54969516428,EWR-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/54969516428,https://www.airlines-manager.com/aircraft/show/116047882,22:30,7:44,320,"$590,320.00","$543,416.00","$1,698.18","$58,853.72"
EWR - CAK,54942362985,EWR-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/54942362985,https://www.airlines-manager.com/aircraft/show/116047884,8:30,11:59,320,"$190,274.00","$166,172.00",$519.29,"$47,704.88"
EWR - CAK,54942362986,EWR-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/54942362986,https://www.airlines-manager.com/aircraft/show/116047883,10:00,13:29,320,"$190,274.00","$166,172.00",$519.29,"$47,704.88"
EWR - CAK,54961494350,EWR-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/54961494350,https://www.airlines-manager.com/aircraft/show/116047882,19:00,22:29,320,"$190,274.00","$166,172.00",$519.29,"$47,704.88"
EWR - CAK,54965848673,EWR-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/54965848673,https://www.airlines-manager.com/aircraft/show/116047885,21:00,0:29,285,"$177,647.00","$153,903.00",$540.01,"$44,182.68"
EWR - CDG,54930655298,EWR 56A-5 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/54930655298,https://www.airlines-manager.com/aircraft/show/106813011,3:00,18:14,748,"$2,328,133.00","$2,067,702.00","$2,764.31","$135,735.36"
EWR - CDG,54942363024,EWR 56A-6 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/54942363024,https://www.airlines-manager.com/aircraft/show/106813012,8:45,23:59,748,"$2,328,133.00","$2,067,702.00","$2,764.31","$135,735.36"
EWR - CDG,54961494341,EWR 56A-2 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/54961494341,https://www.airlines-manager.com/aircraft/show/106813008,19:00,10:14,560,"$1,744,240.00","$1,567,229.00","$2,798.62","$102,881.55"
EWR - CHS,54942362995,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/54942362995,https://www.airlines-manager.com/aircraft/show/110044463,8:30,12:59,310,"$288,564.00","$263,620.00",$850.39,"$58,800.00"
EWR - CHS,54947196957,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/54947196957,https://www.airlines-manager.com/aircraft/show/110113039,12:00,16:29,112,"$137,777.00","$121,714.00","$1,086.73","$27,148.10"
EWR - CHS,54952417800,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/54952417800,https://www.airlines-manager.com/aircraft/show/110044466,14:15,18:44,310,"$288,564.00","$263,620.00",$850.39,"$58,800.00"
EWR - CHS,54965848686,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/54965848686,https://www.airlines-manager.com/aircraft/show/110044465,21:15,1:44,310,"$288,564.00","$263,620.00",$850.39,"$58,800.00"
EWR - CHS,54969516481,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/54969516481,https://www.airlines-manager.com/aircraft/show/110044464,23:00,3:29,280,"$272,262.00","$247,835.00",$885.13,"$55,279.18"
EWR - CID,54930655000,EWR-FCA-CID 4,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/54930655000,https://www.airlines-manager.com/aircraft/show/116042863,1:15,6:59,310,"$356,225.00","$327,616.00","$1,056.83","$57,142.33"
EWR - CID,54930655001,EWR-FCA-CID 3,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/54930655001,https://www.airlines-manager.com/aircraft/show/116042864,2:15,7:59,310,"$356,225.00","$327,616.00","$1,056.83","$57,142.33"
EWR - CID,54942363090,EWR-FCA-CID 2,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/54942363090,https://www.airlines-manager.com/aircraft/show/116042865,10:00,15:44,310,"$356,225.00","$327,616.00","$1,056.83","$57,142.33"
EWR - CID,54969516376,EWR-FCA-CID 1,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/54969516376,https://www.airlines-manager.com/aircraft/show/116042866,22:00,3:44,293,"$344,795.00","$316,611.00","$1,080.58","$55,222.85"
EWR - CLE,54930655107,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/54930655107,https://www.airlines-manager.com/aircraft/show/106104450,1:45,5:29,112,"$91,793.00","$77,214.00",$689.41,"$20,682.32"
EWR - CLE,54930655108,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/54930655108,https://www.airlines-manager.com/aircraft/show/105731236,5:00,8:44,320,"$197,828.00","$171,014.00",$534.42,"$45,807.32"
EWR - CLE,54947196918,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/54947196918,https://www.airlines-manager.com/aircraft/show/88494376,11:00,14:44,320,"$197,828.00","$171,014.00",$534.42,"$45,807.32"
EWR - CLE,54956617941,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/54956617941,https://www.airlines-manager.com/aircraft/show/88494377,14:45,18:29,320,"$197,828.00","$171,014.00",$534.42,"$45,807.32"
EWR - CLE,54965848496,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/54965848496,https://www.airlines-manager.com/aircraft/show/88494375,19:15,22:59,320,"$197,828.00","$171,014.00",$534.42,"$45,807.32"
EWR - CLT,54930655136,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/54930655136,https://www.airlines-manager.com/aircraft/show/104034462,1:45,5:59,216,"$189,426.00","$162,915.00",$754.24,"$38,483.86"
EWR - CLT,54930655138,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/54930655138,https://www.airlines-manager.com/aircraft/show/99316501,2:45,6:59,216,"$189,426.00","$162,915.00",$754.24,"$38,483.86"
EWR - CLT,54942363149,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/54942363149,https://www.airlines-manager.com/aircraft/show/104034464,10:00,14:14,216,"$189,426.00","$162,915.00",$754.24,"$38,483.86"
EWR - CLT,54952417591,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/54952417591,https://www.airlines-manager.com/aircraft/show/104034463,13:00,17:14,216,"$189,426.00","$162,915.00",$754.24,"$38,483.86"
EWR - CLT,54956618065,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/54956618065,https://www.airlines-manager.com/aircraft/show/104034462,15:45,19:59,216,"$189,426.00","$162,915.00",$754.24,"$38,483.86"
EWR - CLT,54956618066,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/54956618066,https://www.airlines-manager.com/aircraft/show/99316501,16:45,20:59,216,"$189,426.00","$162,915.00",$754.24,"$38,483.86"
EWR - CLT,54965848549,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/54965848549,https://www.airlines-manager.com/aircraft/show/104034464,20:00,0:14,216,"$189,426.00","$162,915.00",$754.24,"$38,483.86"
EWR - CLT,54969516469,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/54969516469,https://www.airlines-manager.com/aircraft/show/104034463,23:00,3:14,216,"$189,426.00","$162,915.00",$754.24,"$38,483.86"
EWR - CMH,54930655476,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/54930655476,https://www.airlines-manager.com/aircraft/show/104610409,4:30,8:29,310,"$222,861.00","$198,707.00",$640.99,"$49,884.60"
EWR - CMH,54942363004,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/54942363004,https://www.airlines-manager.com/aircraft/show/104610410,8:30,12:29,310,"$222,861.00","$198,707.00",$640.99,"$49,884.60"
EWR - CMH,54952417585,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/54952417585,https://www.airlines-manager.com/aircraft/show/96421247,13:00,16:59,112,"$103,792.00","$88,495.00",$790.13,"$22,216.32"
EWR - CMH,54961494077,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/54961494077,https://www.airlines-manager.com/aircraft/show/104610407,17:15,21:14,310,"$222,861.00","$198,707.00",$640.99,"$49,884.60"
EWR - CMH,54971692214,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/54971692214,https://www.airlines-manager.com/aircraft/show/104610408,23:15,3:14,310,"$222,861.00","$198,707.00",$640.99,"$49,884.60"
EWR - COS,54930655045,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/54930655045,https://www.airlines-manager.com/aircraft/show/108834808,1:30,9:59,310,"$533,336.00","$491,684.00","$1,586.08","$57,958.82"
EWR - COS,54930655046,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/54930655046,https://www.airlines-manager.com/aircraft/show/108834811,3:30,11:59,310,"$533,336.00","$491,684.00","$1,586.08","$57,958.82"
EWR - COS,54952417476,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/54952417476,https://www.airlines-manager.com/aircraft/show/108466265,13:00,21:29,112,"$250,557.00","$222,739.00","$1,988.74","$26,256.07"
EWR - COS,54956618139,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/54956618139,https://www.airlines-manager.com/aircraft/show/108834810,16:30,0:59,310,"$533,336.00","$491,684.00","$1,586.08","$57,958.82"
EWR - COS,54961494309,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/54961494309,https://www.airlines-manager.com/aircraft/show/108834809,18:30,2:59,310,"$533,336.00","$491,684.00","$1,586.08","$57,958.82"
EWR - CUN,54930654917,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/54930654917,https://www.airlines-manager.com/aircraft/show/106581306,0:45,8:44,320,"$520,632.00","$472,856.00","$1,477.68","$59,230.40"
EWR - CUN,54930654918,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/54930654918,https://www.airlines-manager.com/aircraft/show/106581305,2:15,10:14,320,"$520,632.00","$472,856.00","$1,477.68","$59,230.40"
EWR - CUN,54952417486,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/54952417486,https://www.airlines-manager.com/aircraft/show/106581304,13:00,20:59,320,"$520,632.00","$472,856.00","$1,477.68","$59,230.40"
EWR - CUN,54952417487,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/54952417487,https://www.airlines-manager.com/aircraft/show/106581307,14:30,22:29,320,"$520,632.00","$472,856.00","$1,477.68","$59,230.40"
EWR - CUN,54969516398,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/54969516398,https://www.airlines-manager.com/aircraft/show/86238754,22:15,6:14,320,"$520,632.00","$472,856.00","$1,477.68","$59,230.40"
EWR - CVG,54930654832,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/54930654832,https://www.airlines-manager.com/aircraft/show/104610409,0:15,4:29,310,"$270,980.00","$243,255.00",$784.69,"$57,461.81"
EWR - CVG,54930654833,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/54930654833,https://www.airlines-manager.com/aircraft/show/104610410,4:15,8:29,310,"$270,980.00","$243,255.00",$784.69,"$57,461.81"
EWR - CVG,54942362974,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/54942362974,https://www.airlines-manager.com/aircraft/show/96421247,8:15,12:29,112,"$128,413.00","$110,787.00",$989.17,"$26,170.16"
EWR - CVG,54952417586,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/54952417586,https://www.airlines-manager.com/aircraft/show/104610407,13:00,17:14,310,"$270,980.00","$243,255.00",$784.69,"$57,461.81"
EWR - CVG,54961494338,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/54961494338,https://www.airlines-manager.com/aircraft/show/104610408,19:00,23:14,310,"$270,980.00","$243,255.00",$784.69,"$57,461.81"
EWR - DEN,54930655122,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/54930655122,https://www.airlines-manager.com/aircraft/show/86270785,1:45,9:59,310,"$528,869.00","$464,763.00","$1,499.24","$56,448.95"
EWR - DEN,54930655123,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/54930655123,https://www.airlines-manager.com/aircraft/show/90452835,2:45,10:59,310,"$528,869.00","$464,763.00","$1,499.24","$56,448.95"
EWR - DEN,54942363077,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/54942363077,https://www.airlines-manager.com/aircraft/show/87153196,10:00,18:14,310,"$528,869.00","$464,763.00","$1,499.24","$56,448.95"
EWR - DEN,54947196924,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/54947196924,https://www.airlines-manager.com/aircraft/show/86270783,11:00,19:14,310,"$528,869.00","$464,763.00","$1,499.24","$56,448.95"
EWR - DEN,54956618106,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/54956618106,https://www.airlines-manager.com/aircraft/show/90452833,16:00,0:14,310,"$528,869.00","$464,763.00","$1,499.24","$56,448.95"
EWR - DEN,54961494030,EWR-DEN-SLC 6 B,A319-100,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/54961494030,https://www.airlines-manager.com/aircraft/show/105223076,17:00,1:14,198,"$398,370.00","$347,016.00","$1,752.61","$42,147.69"
EWR - DFW,54930655248,EWR-DFW-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/54930655248,https://www.airlines-manager.com/aircraft/show/90489724,2:30,9:59,320,"$473,208.00","$408,093.00","$1,275.29","$54,533.59"
EWR - DFW,54930655249,EWR-DFW-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/54930655249,https://www.airlines-manager.com/aircraft/show/86238753,3:30,10:59,320,"$473,208.00","$408,093.00","$1,275.29","$54,533.59"
EWR - DFW,54942363087,EWR-DFW-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/54942363087,https://www.airlines-manager.com/aircraft/show/90489725,10:00,17:29,320,"$473,208.00","$408,093.00","$1,275.29","$54,533.59"
EWR - DFW,54947196867,EWR-DFW-ATL 6 B,A319-100,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/54947196867,https://www.airlines-manager.com/aircraft/show/105222360,11:00,18:29,198,"$357,750.00","$312,148.00","$1,576.51","$41,712.43"
EWR - DFW,54947196868,EWR-DFW-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/54947196868,https://www.airlines-manager.com/aircraft/show/86238752,12:15,19:44,320,"$473,208.00","$408,093.00","$1,275.29","$54,533.59"
EWR - DFW,54965848485,EWR-DFW-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/54965848485,https://www.airlines-manager.com/aircraft/show/90489726,19:15,2:44,320,"$473,208.00","$408,093.00","$1,275.29","$54,533.59"
EWR - DSM,54930655176,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/54930655176,https://www.airlines-manager.com/aircraft/show/110113039,2:00,7:59,112,"$177,448.00","$157,408.00","$1,405.43","$26,307.74"
EWR - DSM,54930655178,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/54930655178,https://www.airlines-manager.com/aircraft/show/110044466,4:15,10:14,310,"$375,134.00","$344,684.00","$1,111.88","$57,607.35"
EWR - DSM,54947196959,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/54947196959,https://www.airlines-manager.com/aircraft/show/110044465,12:00,17:59,310,"$375,134.00","$344,684.00","$1,111.88","$57,607.35"
EWR - DSM,54952417646,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/54952417646,https://www.airlines-manager.com/aircraft/show/110044464,13:45,19:44,310,"$375,134.00","$344,684.00","$1,111.88","$57,607.35"
EWR - DSM,54969516419,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/54969516419,https://www.airlines-manager.com/aircraft/show/110044463,22:30,4:29,275,"$350,015.00","$320,537.00","$1,165.59","$53,571.64"
EWR - DTW,54930655349,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/54930655349,https://www.airlines-manager.com/aircraft/show/92003921,3:30,7:29,320,"$227,361.00","$190,114.00",$594.11,"$47,727.36"
EWR - DTW,54942363123,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/54942363123,https://www.airlines-manager.com/aircraft/show/92003925,10:00,13:59,320,"$227,361.00","$190,114.00",$594.11,"$47,727.36"
EWR - DTW,54952417638,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/54952417638,https://www.airlines-manager.com/aircraft/show/92003924,13:30,17:29,320,"$227,361.00","$190,114.00",$594.11,"$47,727.36"
EWR - DTW,54969516359,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/54969516359,https://www.airlines-manager.com/aircraft/show/92003923,21:45,1:44,320,"$227,361.00","$190,114.00",$594.11,"$47,727.36"
EWR - DTW,54969516360,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/54969516360,https://www.airlines-manager.com/aircraft/show/92003922,22:15,2:14,320,"$227,361.00","$190,114.00",$594.11,"$47,727.36"
EWR - DUB,54930655337,EWR 56C-2 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/54930655337,https://www.airlines-manager.com/aircraft/show/106721557,3:30,16:59,598,"$1,654,265.00","$1,543,001.00","$2,580.27","$114,437.65"
EWR - DUB,54930655338,EWR 56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/54930655338,https://www.airlines-manager.com/aircraft/show/106721559,5:15,18:44,598,"$1,654,265.00","$1,543,001.00","$2,580.27","$114,437.65"
EWR - DUB,54947196812,EWR 56C-6 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/54947196812,https://www.airlines-manager.com/aircraft/show/106721561,10:30,23:59,598,"$1,654,265.00","$1,543,001.00","$2,580.27","$114,437.65"
EWR - EDI,54930655460,EWR 56C-3 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/54930655460,https://www.airlines-manager.com/aircraft/show/106721558,4:15,17:59,598,"$1,639,756.00","$1,532,465.00","$2,562.65","$111,587.26"
EWR - EDI,54937423963,EWR 56C-5 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/54937423963,https://www.airlines-manager.com/aircraft/show/106721560,6:00,19:44,598,"$1,639,756.00","$1,532,465.00","$2,562.65","$111,587.26"
EWR - EDI,54965848544,EWR 56C-5 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/54965848544,https://www.airlines-manager.com/aircraft/show/106721560,19:45,9:29,598,"$1,639,756.00","$1,532,465.00","$2,562.65","$111,587.26"
EWR - ELP,54930654908,EWR-ELP-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/54930654908,https://www.airlines-manager.com/aircraft/show/103365577,0:30,9:59,320,"$590,378.00","$540,596.00","$1,689.36","$57,004.85"
EWR - ELP,54930654909,EWR-ELP-SAT 5 B,A319-100,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/54930654909,https://www.airlines-manager.com/aircraft/show/110582847,2:30,11:59,198,"444,845$","408,642$","$2,063.85","$43,090.54"
EWR - ELP,54942363154,EWR-ELP-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/54942363154,https://www.airlines-manager.com/aircraft/show/103365578,10:00,19:29,320,"590,378$","540,596$","$1,689.36","$57,004.85"
EWR - ELP,54947196967,EWR-ELP-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/54947196967,https://www.airlines-manager.com/aircraft/show/103365575,12:00,21:29,320,"590,378$","540,596$","$1,689.36","$57,004.85"
EWR - ELP,54956618125,EWR-ELP-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/54956618125,https://www.airlines-manager.com/aircraft/show/103365576,16:15,1:44,320,"590,378$","540,596$","$1,689.36","$57,004.85"
EWR - EUG,54930655160,EWR-EUG-MFR 4,737-900ER,https://www.airlines-manager.com/network/showline/50283407,https://www.airlines-manager.com/network/showflight/54930655160,https://www.airlines-manager.com/aircraft/show/119220438,1:45,13:29,320,"$726,548.00","$671,283.00","$2,097.76","$57,211.62"
EWR - EUG,54947196977,EWR-EUG-MFR 1,737-900ER,https://www.airlines-manager.com/network/showline/50283407,https://www.airlines-manager.com/network/showflight/54947196977,https://www.airlines-manager.com/aircraft/show/119220435,12:00,23:44,320,"$726,548.00","$671,283.00","$2,097.76","$57,211.62"
EWR - EUG,54952417764,EWR-EUG-MFR 2,737-900ER,https://www.airlines-manager.com/network/showline/50283407,https://www.airlines-manager.com/network/showflight/54952417764,https://www.airlines-manager.com/aircraft/show/119220436,14:00,1:44,320,"$726,548.00","$671,283.00","$2,097.76","$57,211.62"
EWR - EUG,54971692267,EWR-EUG-MFR 3,737-900ER,https://www.airlines-manager.com/network/showline/50283407,https://www.airlines-manager.com/network/showflight/54971692267,https://www.airlines-manager.com/aircraft/show/119220437,23:45,11:29,320,"$726,548.00","$671,283.00","$2,097.76","$57,211.62"
EWR - FAR,54930655141,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/54930655141,https://www.airlines-manager.com/aircraft/show/86270784,1:45,8:29,310,"$423,560.00","$390,593.00","$1,259.98","$58,008.86"
EWR - FAR,54930655143,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/54930655143,https://www.airlines-manager.com/aircraft/show/86270786,5:00,11:44,310,"$423,560.00","$390,593.00","$1,259.98","$58,008.86"
EWR - FAR,54956618016,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/54956618016,https://www.airlines-manager.com/aircraft/show/86270787,15:00,21:44,310,"$423,560.00","$390,593.00","$1,259.98","$58,008.86"
EWR - FAR,54965848499,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/54965848499,https://www.airlines-manager.com/aircraft/show/90452834,19:15,1:59,310,"$423,560.00","$390,593.00","$1,259.98","$58,008.86"
EWR - FAT,54930654839,EWR-PSP-FAT 2,A321neo,https://www.airlines-manager.com/network/showline/50283404,https://www.airlines-manager.com/network/showflight/54930654839,https://www.airlines-manager.com/aircraft/show/119220451,0:15,11:44,338,"$775,933.00","$727,808.00","$2,153.28","$63,379.51"
EWR - FAT,54947196824,EWR-PSP-FAT 3,A321neo,https://www.airlines-manager.com/network/showline/50283404,https://www.airlines-manager.com/network/showflight/54947196824,https://www.airlines-manager.com/aircraft/show/119220452,11:00,22:29,338,"$775,933.00","$727,808.00","$2,153.28","$63,379.51"
EWR - FAT,54952417431,EWR-PSP-FAT 4,A321neo,https://www.airlines-manager.com/network/showline/50283404,https://www.airlines-manager.com/network/showflight/54952417431,https://www.airlines-manager.com/aircraft/show/116672810,13:00,0:29,338,"$775,933.00","$727,808.00","$2,153.28","$63,379.51"
EWR - FAT,54969516396,EWR-PSP-FAT 1,A321neo,https://www.airlines-manager.com/network/showline/50283404,https://www.airlines-manager.com/network/showflight/54969516396,https://www.airlines-manager.com/aircraft/show/119220450,22:15,9:44,338,"$775,933.00","$727,808.00","$2,153.28","$63,379.51"
EWR - FCA,54947196965,EWR-FCA-CID 1,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/54947196965,https://www.airlines-manager.com/aircraft/show/116042866,12:00,21:59,310,"$623,241.00","$578,539.00","$1,866.25","$57,950.48"
EWR - FCA,54956618039,EWR-FCA-CID 4,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/54956618039,https://www.airlines-manager.com/aircraft/show/116042863,15:15,1:14,310,"$623,241.00","$578,539.00","$1,866.25","$57,950.48"
EWR - FCA,54956618040,EWR-FCA-CID 3,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/54956618040,https://www.airlines-manager.com/aircraft/show/116042864,16:15,2:14,310,"$623,241.00","$578,539.00","$1,866.25","$57,950.48"
EWR - FCA,54969516378,EWR-FCA-CID 2,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/54969516378,https://www.airlines-manager.com/aircraft/show/116042865,22:00,7:59,310,"$623,241.00","$578,539.00","$1,866.25","$57,950.48"
EWR - FCO,54930655262,EWR 84A-2 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/54930655262,https://www.airlines-manager.com/aircraft/show/94521252,2:30,19:59,852,"$2,900,124.00","$2,626,210.00","$3,082.41","$150,212.20"
EWR - FCO,54947197008,EWR 84A-3 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/54947197008,https://www.airlines-manager.com/aircraft/show/90656553,12:00,5:29,852,"$2,900,124.00","$2,626,210.00","$3,082.41","$150,212.20"
EWR - FLL,54930655360,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/54930655360,https://www.airlines-manager.com/aircraft/show/92003924,3:45,9:59,320,"$391,166.00","$351,153.00","$1,097.35","$56,334.71"
EWR - FLL,54930655361,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/54930655361,https://www.airlines-manager.com/aircraft/show/92003922,5:45,11:59,320,"$391,166.00","$351,153.00","$1,097.35","$56,334.71"
EWR - FLL,54947196883,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/54947196883,https://www.airlines-manager.com/aircraft/show/92003921,11:00,17:14,320,"$391,166.00","$351,153.00","$1,097.35","$56,334.71"
EWR - FLL,54947196884,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/54947196884,https://www.airlines-manager.com/aircraft/show/92003923,12:00,18:14,320,"$391,166.00","$351,153.00","$1,097.35","$56,334.71"
EWR - FLL,54961494200,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/54961494200,https://www.airlines-manager.com/aircraft/show/92003925,17:30,23:44,320,"$391,166.00","$351,153.00","$1,097.35","$56,334.71"
EWR - FRA,54930655285,EWR 56B-5 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/54930655285,https://www.airlines-manager.com/aircraft/show/94521253,2:45,18:44,748,"$2,440,394.00","$2,175,490.00","$2,908.41","$136,109.91"
EWR - FRA,54930655286,EWR 56B-3 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/54930655286,https://www.airlines-manager.com/aircraft/show/90656555,4:30,20:29,748,"$2,440,394.00","$2,175,490.00","$2,908.41","$136,109.91"
EWR - FRA,54937423989,EWR 56B-1 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/54937423989,https://www.airlines-manager.com/aircraft/show/94521251,6:15,22:14,748,"$2,202,225.00","$2,001,233.00","$2,675.45","$125,207.49"
EWR - FSD,54930655447,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/54930655447,https://www.airlines-manager.com/aircraft/show/107161240,4:15,10:59,310,"$411,278.00","$378,797.00","$1,221.93","$56,256.98"
EWR - FSD,54942363027,EWR-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/54942363027,https://www.airlines-manager.com/aircraft/show/86782214,9:00,15:44,112,"$193,854.00","$172,324.00","$1,538.61","$25,592.67"
EWR - FSD,54947196850,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/54947196850,https://www.airlines-manager.com/aircraft/show/107161239,11:00,17:44,310,"$411,278.00","$378,797.00","$1,221.93","$56,256.98"
EWR - FSD,54956618038,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/54956618038,https://www.airlines-manager.com/aircraft/show/107161241,15:15,21:59,310,"$411,278.00","$378,797.00","$1,221.93","$56,256.98"
EWR - FSD,54961494279,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/54961494279,https://www.airlines-manager.com/aircraft/show/107161238,18:15,0:59,280,"$387,621.00","$356,102.00","$1,271.79","$52,886.44"
EWR - GRR,54942362984,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/54942362984,https://www.airlines-manager.com/aircraft/show/116042862,8:30,12:59,310,"$277,025.00","$252,083.00",$813.17,"$56,226.69"
EWR - GRR,54952417700,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/54952417700,https://www.airlines-manager.com/aircraft/show/116042859,14:00,18:29,310,"$277,025.00","$252,083.00",$813.17,"$56,226.69"
EWR - GRR,54965848507,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/54965848507,https://www.airlines-manager.com/aircraft/show/116042860,19:30,23:59,310,"$277,025.00","$252,083.00",$813.17,"$56,226.69"
EWR - GRR,54965848508,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/54965848508,https://www.airlines-manager.com/aircraft/show/116042861,20:45,1:14,310,"$277,025.00","$252,083.00",$813.17,"$56,226.69"
EWR - GSO,54930655364,EWR-TYS-GSO 3,A321-200,https://www.airlines-manager.com/network/showline/50283471,https://www.airlines-manager.com/network/showflight/54930655364,https://www.airlines-manager.com/aircraft/show/119220544,3:45,7:29,310,"$216,841.00","$194,222.00",$626.52,"$52,023.75"
EWR - GSO,54942363125,EWR-TYS-GSO 2,A321-200,https://www.airlines-manager.com/network/showline/50283471,https://www.airlines-manager.com/network/showflight/54942363125,https://www.airlines-manager.com/aircraft/show/119220543,10:00,13:44,310,"$216,841.00","$194,222.00",$626.52,"$52,023.75"
EWR - GSO,54952417811,EWR-TYS-GSO 1,A321-200,https://www.airlines-manager.com/network/showline/50283471,https://www.airlines-manager.com/network/showflight/54952417811,https://www.airlines-manager.com/aircraft/show/119220542,14:30,18:14,310,"$216,841.00","$194,222.00",$626.52,"$52,023.75"
EWR - GSO,54971692221,EWR-TYS-GSO 4,A321-200,https://www.airlines-manager.com/network/showline/50283471,https://www.airlines-manager.com/network/showflight/54971692221,https://www.airlines-manager.com/aircraft/show/119220545,23:15,2:59,310,"$216,841.00","$194,222.00",$626.52,"$52,023.75"
EWR - HEL,54947196814,EWR 56D-6 E,787-10,https://www.airlines-manager.com/network/showline/50072206,https://www.airlines-manager.com/network/showflight/54947196814,https://www.airlines-manager.com/aircraft/show/118644441,10:45,3:29,648,"$2,045,741.00","$1,910,556.00","$2,948.39","$114,176.65"
EWR - HEL,54947196815,EWR 56D-7 E,787-10,https://www.airlines-manager.com/network/showline/50072206,https://www.airlines-manager.com/network/showflight/54947196815,https://www.airlines-manager.com/aircraft/show/118644442,11:00,3:44,648,"$2,045,741.00","$1,910,556.00","$2,948.39","$114,176.65"
EWR - HEL,54965848566,EWR 56D-2 E,787-10,https://www.airlines-manager.com/network/showline/50072206,https://www.airlines-manager.com/network/showflight/54965848566,https://www.airlines-manager.com/aircraft/show/118644437,20:00,12:44,575,"$1,891,123.00","$1,763,444.00","$3,066.86","$105,385.10"
EWR - IAH,54930655353,EWR-IAH-LAS 3,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/54930655353,https://www.airlines-manager.com/aircraft/show/105859512,3:30,10:59,338,"$517,432.00","$469,570.00","$1,389.26","$62,748.78"
EWR - IAH,54930655354,EWR-IAH-LAS 5,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/54930655354,https://www.airlines-manager.com/aircraft/show/105859514,4:30,11:59,338,"$517,432.00","$469,570.00","$1,389.26","$62,748.78"
EWR - IAH,54937424063,EWR-IAH-LAS 1,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/54937424063,https://www.airlines-manager.com/aircraft/show/105859510,7:30,14:59,338,"$517,432.00","$469,570.00","$1,389.26","$62,748.78"
EWR - IAH,54947196930,EWR-IAH-LAS 2,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/54947196930,https://www.airlines-manager.com/aircraft/show/105859511,11:00,18:29,338,"$517,432.00","$469,570.00","$1,389.26","$62,748.78"
EWR - IAH,54947196931,EWR-IAH-LAS 4,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/54947196931,https://www.airlines-manager.com/aircraft/show/105859513,12:00,19:29,338,"$517,432.00","$469,570.00","$1,389.26","$62,748.78"
EWR - IAH,54961494320,EWR-IAH-LAS 6,ERJ-175,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/54961494320,https://www.airlines-manager.com/aircraft/show/105864236,18:45,2:14,112,"$225,538.00","$193,331.00","$1,726.17","$25,834.88"
EWR - ICT,54930654991,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/54930654991,https://www.airlines-manager.com/aircraft/show/108834810,1:00,7:59,310,"$441,027.00","$406,327.00","$1,310.73","$58,185.25"
EWR - ICT,54930654992,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/54930654992,https://www.airlines-manager.com/aircraft/show/108834809,3:00,9:59,310,"$441,027.00","$406,327.00","$1,310.73","$58,185.25"
EWR - ICT,54947196844,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/54947196844,https://www.airlines-manager.com/aircraft/show/108834808,11:00,17:59,310,"$441,027.00","$406,327.00","$1,310.73","$58,185.25"
EWR - ICT,54952417475,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/54952417475,https://www.airlines-manager.com/aircraft/show/108834811,13:00,19:59,310,"$441,027.00","$406,327.00","$1,310.73","$58,185.25"
EWR - ICT,54969516323,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/54969516323,https://www.airlines-manager.com/aircraft/show/108466265,21:30,4:29,112,"$208,777.00","$185,757.00","$1,658.54","$26,600.05"
EWR - IND,54930654885,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/54930654885,https://www.airlines-manager.com/aircraft/show/88494376,0:30,4:59,320,"$294,206.00","$262,638.00",$820.74,"$58,580.97"
EWR - IND,54930654886,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/54930654886,https://www.airlines-manager.com/aircraft/show/88494377,4:15,8:44,320,"$294,206.00","$262,638.00",$820.74,"$58,580.97"
EWR - IND,54947196915,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/54947196915,https://www.airlines-manager.com/aircraft/show/88494375,11:00,15:29,320,"$294,206.00","$262,638.00",$820.74,"$58,580.97"
EWR - IND,54961494183,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/54961494183,https://www.airlines-manager.com/aircraft/show/106104450,17:30,21:59,112,"$140,444.00","$122,789.00","$1,096.33","$27,387.88"
EWR - IND,54965848648,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/54965848648,https://www.airlines-manager.com/aircraft/show/105731236,20:45,1:14,320,"$294,206.00","$262,638.00",$820.74,"$58,580.97"
EWR - JAN,54930655183,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/54930655183,https://www.airlines-manager.com/aircraft/show/90452834,2:00,8:14,310,"$387,663.00","$356,982.00","$1,151.55","$57,269.84"
EWR - JAN,54942362990,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/54942362990,https://www.airlines-manager.com/aircraft/show/86270784,8:30,14:44,310,"$387,663.00","$356,982.00","$1,151.55","$57,269.84"
EWR - JAN,54947196955,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/54947196955,https://www.airlines-manager.com/aircraft/show/86270786,12:00,18:14,310,"$387,663.00","$356,982.00","$1,151.55","$57,269.84"
EWR - JAN,54969516349,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/54969516349,https://www.airlines-manager.com/aircraft/show/86270787,21:45,3:59,310,"$387,663.00","$356,982.00","$1,151.55","$57,269.84"
EWR - JAX,54930655228,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/54930655228,https://www.airlines-manager.com/aircraft/show/104610407,2:15,7:29,310,"$336,410.00","$307,387.00",$991.57,"$58,736.37"
EWR - JAX,54942362975,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/54942362975,https://www.airlines-manager.com/aircraft/show/104610408,8:15,13:29,310,"$336,410.00","$307,387.00",$991.57,"$58,736.37"
EWR - JAX,54952417759,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/54952417759,https://www.airlines-manager.com/aircraft/show/104610409,14:00,19:14,310,"$336,410.00","$307,387.00",$991.57,"$58,736.37"
EWR - JAX,54961494233,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/54961494233,https://www.airlines-manager.com/aircraft/show/104610410,18:00,23:14,310,"$336,410.00","$307,387.00",$991.57,"$58,736.37"
EWR - JAX,54969516373,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/54969516373,https://www.airlines-manager.com/aircraft/show/96421247,22:00,3:14,112,"$159,716.00","$140,870.00","$1,257.77","$26,917.83"
EWR - KEF,54961494023,EWR 56C-2 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/54961494023,https://www.airlines-manager.com/aircraft/show/106721557,17:00,4:14,598,"$1,336,918.00","$1,247,907.00","$2,086.80","$111,089.64"
EWR - KEF,54961494024,EWR 56C-3 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/54961494024,https://www.airlines-manager.com/aircraft/show/106721558,18:00,5:14,598,"$1,336,918.00","$1,247,907.00","$2,086.80","$111,089.64"
EWR - KEF,54961494025,EWR 56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/54961494025,https://www.airlines-manager.com/aircraft/show/106721559,18:45,5:59,598,"$1,336,918.00","$1,247,907.00","$2,086.80","$111,089.64"
EWR - LAS,54930654743,EWR-IAH-LAS 2,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/54930654743,https://www.airlines-manager.com/aircraft/show/105859511,0:15,10:59,338,"$734,476.00","$670,312.00","$1,983.17","$62,451.43"
EWR - LAS,54930654744,EWR-IAH-LAS 4,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/54930654744,https://www.airlines-manager.com/aircraft/show/105859513,1:15,11:59,338,"$734,476.00","$670,312.00","$1,983.17","$62,451.43"
EWR - LAS,54930654825,EWR-IAH-LAS 6,ERJ-175,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/54930654825,https://www.airlines-manager.com/aircraft/show/105864236,2:15,12:59,112,"$317,374.00","$273,329.00","$2,440.44","$25,465.43"
EWR - LAS,54947197007,EWR-IAH-LAS 5,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/54947197007,https://www.airlines-manager.com/aircraft/show/105859514,12:00,22:44,338,"$734,476.00","$670,312.00","$1,983.17","$62,451.43"
EWR - LAS,54956618001,EWR-IAH-LAS 1,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/54956618001,https://www.airlines-manager.com/aircraft/show/105859510,15:00,1:44,338,"$734,476.00","$670,312.00","$1,983.17","$62,451.43"
EWR - LAS,54956618002,EWR-IAH-LAS 3,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/54956618002,https://www.airlines-manager.com/aircraft/show/105859512,16:45,3:29,338,"$734,476.00","$670,312.00","$1,983.17","$62,451.43"
EWR - LAX,54930654673,EWR-SFO-LAX 4,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/54930654673,https://www.airlines-manager.com/aircraft/show/89233030,0:00,11:29,400,"$933,133.00","$841,910.00","$2,104.78","$73,315.82"
EWR - LAX,54930654674,EWR-SFO-LAX 5,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/54930654674,https://www.airlines-manager.com/aircraft/show/89233027,2:00,13:29,400,"$933,133.00","$841,910.00","$2,104.78","$73,315.82"
EWR - LAX,54952417419,EWR-SFO-LAX 1,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/54952417419,https://www.airlines-manager.com/aircraft/show/83716137,12:30,23:59,400,"$933,133.00","$841,910.00","$2,104.78","$73,315.82"
EWR - LAX,54952417420,EWR-SFO-LAX 2,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/54952417420,https://www.airlines-manager.com/aircraft/show/89233028,14:00,1:29,400,"$933,133.00","$841,910.00","$2,104.78","$73,315.82"
EWR - LAX,54956618053,EWR-SFO-LAX 3,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/54956618053,https://www.airlines-manager.com/aircraft/show/89233029,15:30,2:59,400,"$933,133.00","$841,910.00","$2,104.78","$73,315.82"
EWR - LEX,54930655308,EWR-TYS-GSO 4,A321-200,https://www.airlines-manager.com/network/showline/50283473,https://www.airlines-manager.com/network/showflight/54930655308,https://www.airlines-manager.com/aircraft/show/119220545,3:00,7:29,310,"$272,372.00","$249,164.00",$803.75,"$55,575.61"
EWR - LEX,54942363136,EWR-TYS-GSO 3,A321-200,https://www.airlines-manager.com/network/showline/50283473,https://www.airlines-manager.com/network/showflight/54942363136,https://www.airlines-manager.com/aircraft/show/119220544,10:00,14:29,310,"$272,372.00","$249,164.00",$803.75,"$55,575.61"
EWR - LEX,54952417648,EWR-TYS-GSO 2,A321-200,https://www.airlines-manager.com/network/showline/50283473,https://www.airlines-manager.com/network/showflight/54952417648,https://www.airlines-manager.com/aircraft/show/119220543,13:45,18:14,310,"$272,372.00","$249,164.00",$803.75,"$55,575.61"
EWR - LEX,54961494271,EWR-TYS-GSO 1,A321-200,https://www.airlines-manager.com/network/showline/50283473,https://www.airlines-manager.com/network/showflight/54961494271,https://www.airlines-manager.com/aircraft/show/119220542,18:15,22:44,278,"$256,054.00","$233,360.00",$839.42,"$52,050.56"
EWR - LHR,54930655227,EWR 56A-1 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/54930655227,https://www.airlines-manager.com/aircraft/show/106813007,2:15,16:44,748,"$2,220,102.00","$1,968,499.00","$2,631.68","$135,914.78"
EWR - LHR,54952417414,EWR 56A-4 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/54952417414,https://www.airlines-manager.com/aircraft/show/106813010,12:30,2:59,748,"$2,220,102.00","$1,968,499.00","$2,631.68","$135,914.78"
EWR - LHR,54961494280,EWR 56A-5 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/54961494280,https://www.airlines-manager.com/aircraft/show/106813011,18:15,8:44,748,"$2,003,986.00","$1,809,626.00","$2,419.29","$124,945.41"
EWR - LIS,54930655530,EWR 84A-4 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/54930655530,https://www.airlines-manager.com/aircraft/show/90656551,5:30,19:44,852,"$2,328,457.00","$2,120,122.00","$2,488.41","$148,954.71"
EWR - LIS,54947197011,EWR 84A-1 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/54947197011,https://www.airlines-manager.com/aircraft/show/90656554,12:15,2:29,852,"$2,328,457.00","$2,120,122.00","$2,488.41","$148,954.71"
EWR - LIT,54942362991,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/54942362991,https://www.airlines-manager.com/aircraft/show/86270787,8:30,14:44,310,"$393,416.00","$362,459.00","$1,169.22","$58,148.50"
EWR - LIT,54952417462,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/54952417462,https://www.airlines-manager.com/aircraft/show/90452834,13:00,19:14,310,"$393,416.00","$362,459.00","$1,169.22","$58,148.50"
EWR - LIT,54965848506,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/54965848506,https://www.airlines-manager.com/aircraft/show/86270784,19:30,1:44,310,"$393,416.00","$362,459.00","$1,169.22","$58,148.50"
EWR - LIT,54969516445,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/54969516445,https://www.airlines-manager.com/aircraft/show/86270786,22:45,4:59,310,"$393,416.00","$362,459.00","$1,169.22","$58,148.50"
EWR - MAD,54930654672,EWR 56B-7 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/54930654672,https://www.airlines-manager.com/aircraft/show/89124072,0:00,14:59,748,"$2,289,510.00","$2,036,551.00","$2,722.66","$135,921.09"
EWR - MAD,54965848624,EWR 56B-3 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/54965848624,https://www.airlines-manager.com/aircraft/show/90656555,20:30,11:29,748,"$2,289,510.00","$2,036,551.00","$2,722.66","$135,921.09"
EWR - MAD,54969516394,EWR 56B-1 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/54969516394,https://www.airlines-manager.com/aircraft/show/94521251,22:15,13:14,748,"$2,065,725.00","$1,872,334.00","$2,503.12","$124,961.11"
EWR - MBJ,54930655342,EWR 56D-7 E,787-10,https://www.airlines-manager.com/network/showline/50072192,https://www.airlines-manager.com/network/showflight/54930655342,https://www.airlines-manager.com/aircraft/show/118644442,3:30,10:59,648,"$941,073.00","$879,294.00","$1,356.94","$117,500.31"
EWR - MBJ,54947196937,EWR 56D-5 E,787-10,https://www.airlines-manager.com/network/showline/50072192,https://www.airlines-manager.com/network/showflight/54947196937,https://www.airlines-manager.com/aircraft/show/118644440,11:15,18:44,648,"$941,073.00","$879,294.00","$1,356.94","$117,500.31"
EWR - MBJ,54965848526,EWR 56D-1 E,787-10,https://www.airlines-manager.com/network/showline/50072192,https://www.airlines-manager.com/network/showflight/54965848526,https://www.airlines-manager.com/aircraft/show/118644436,19:45,3:14,633,"$913,467.00","$852,472.00","$1,346.72","$113,916.08"
EWR - MCI,54930655358,EWR-ELP-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/54930655358,https://www.airlines-manager.com/aircraft/show/103365578,3:45,9:59,320,"$395,156.00","$356,180.00","$1,113.06","$57,141.18"
EWR - MCI,54930655359,EWR-ELP-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/54930655359,https://www.airlines-manager.com/aircraft/show/103365575,5:45,11:59,320,"$395,156.00","$356,180.00","$1,113.06","$57,141.18"
EWR - MCI,54942363150,EWR-ELP-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/54942363150,https://www.airlines-manager.com/aircraft/show/103365576,10:00,16:14,320,"$395,156.00","$356,180.00","$1,113.06","$57,141.18"
EWR - MCI,54961494283,EWR-ELP-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/54961494283,https://www.airlines-manager.com/aircraft/show/103365577,18:15,0:29,320,"$395,156.00","$356,180.00","$1,113.06","$57,141.18"
EWR - MCI,54965848593,EWR-ELP-SAT 5 B,A319-100,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/54965848593,https://www.airlines-manager.com/aircraft/show/110582847,20:15,2:29,198,"$299,222.00","$271,495.00","$1,371.19","$43,555.35"
EWR - MCO,54930655082,EWR-IAH-LAS 1,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/54930655082,https://www.airlines-manager.com/aircraft/show/105859510,1:45,7:29,338,"$389,629.00","$350,334.00","$1,036.49","$61,104.77"
EWR - MCO,54947196921,EWR-IAH-LAS 3,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/54947196921,https://www.airlines-manager.com/aircraft/show/105859512,11:00,16:44,338,"$389,629.00","$350,334.00","$1,036.49","$61,104.77"
EWR - MCO,54952417573,EWR-IAH-LAS 6,ERJ-175,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/54952417573,https://www.airlines-manager.com/aircraft/show/105864236,13:00,18:44,112,"$170,762.00","$144,844.00","$1,293.25","$25,263.49"
EWR - MCO,54961494290,EWR-IAH-LAS 2,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/54961494290,https://www.airlines-manager.com/aircraft/show/105859511,18:30,0:14,338,"$389,629.00","$350,334.00","$1,036.49","$61,104.77"
EWR - MCO,54965848504,EWR-IAH-LAS 4,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/54965848504,https://www.airlines-manager.com/aircraft/show/105859513,19:30,1:14,338,"$389,629.00","$350,334.00","$1,036.49","$61,104.77"
EWR - MCO,54969516443,EWR-IAH-LAS 5,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/54969516443,https://www.airlines-manager.com/aircraft/show/105859514,22:45,4:29,336,"$388,261.00","$349,009.00","$1,038.72","$60,873.66"
EWR - MEM,54930655004,EWR-RNO-MEM 4,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/54930655004,https://www.airlines-manager.com/aircraft/show/99920619,1:15,6:59,320,"$363,622.00","$326,564.00","$1,020.51","$56,958.84"
EWR - MEM,54930655005,EWR-RNO-MEM 3,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/54930655005,https://www.airlines-manager.com/aircraft/show/99920620,3:45,9:29,320,"$363,622.00","$326,564.00","$1,020.51","$56,958.84"
EWR - MEM,54947196804,EWR-RNO-MEM 2,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/54947196804,https://www.airlines-manager.com/aircraft/show/99920621,10:15,15:59,320,"$363,622.00","$326,564.00","$1,020.51","$56,958.84"
EWR - MEM,54965848602,EWR-RNO-MEM 5 B,A319-100,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/54965848602,https://www.airlines-manager.com/aircraft/show/100096560,20:15,1:59,198,"$275,826.00","$249,610.00","$1,260.66","$43,536.63"
EWR - MEM,54969516329,EWR-RNO-MEM 1,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/54969516329,https://www.airlines-manager.com/aircraft/show/99920622,21:30,3:14,320,"$363,622.00","$326,564.00","$1,020.51","$56,958.84"
EWR - MEX,54930655088,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/54930655088,https://www.airlines-manager.com/aircraft/show/92003923,1:45,11:59,320,"$638,807.00","$575,207.00","$1,797.52","$56,209.15"
EWR - MEX,54942363140,EWR-DTW-YYZ 6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/54942363140,https://www.airlines-manager.com/aircraft/show/104258433,10:00,20:14,216,"$486,413.00","$439,908.00","$2,036.61","$42,987.75"
EWR - MEX,54947197003,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/54947197003,https://www.airlines-manager.com/aircraft/show/92003922,12:00,22:14,320,"$638,807.00","$575,207.00","$1,797.52","$56,209.15"
EWR - MEX,54961494063,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/54961494063,https://www.airlines-manager.com/aircraft/show/92003921,17:15,3:29,320,"$638,807.00","$575,207.00","$1,797.52","$56,209.15"
EWR - MEX,54961494064,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/54961494064,https://www.airlines-manager.com/aircraft/show/92003924,17:30,3:44,320,"$638,807.00","$575,207.00","$1,797.52","$56,209.15"
EWR - MEX,54965848613,EWR-DTW-YYZ 6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/54965848613,https://www.airlines-manager.com/aircraft/show/104258433,20:15,6:29,216,"$486,413.00","$439,908.00","$2,036.61","$42,987.75"
EWR - MEX,54971692279,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/54971692279,https://www.airlines-manager.com/aircraft/show/92003925,23:45,9:59,298,"$600,687.00","$538,625.00","$1,807.47","$52,634.36"
EWR - MFR,54930655159,EWR-EUG-MFR 2,737-900ER,https://www.airlines-manager.com/network/showline/50283408,https://www.airlines-manager.com/network/showflight/54930655159,https://www.airlines-manager.com/aircraft/show/119220436,1:45,13:29,320,"$714,248.00","$658,185.00","$2,056.83","$56,095.31"
EWR - MFR,54947196961,EWR-EUG-MFR 3,737-900ER,https://www.airlines-manager.com/network/showline/50283408,https://www.airlines-manager.com/network/showflight/54947196961,https://www.airlines-manager.com/aircraft/show/119220437,12:00,23:44,320,"$714,248.00","$658,185.00","$2,056.83","$56,095.31"
EWR - MFR,54952417769,EWR-EUG-MFR 4,737-900ER,https://www.airlines-manager.com/network/showline/50283408,https://www.airlines-manager.com/network/showflight/54952417769,https://www.airlines-manager.com/aircraft/show/119220438,14:00,1:44,320,"$714,248.00","$658,185.00","$2,056.83","$56,095.31"
EWR - MFR,54971692268,EWR-EUG-MFR 1,737-900ER,https://www.airlines-manager.com/network/showline/50283408,https://www.airlines-manager.com/network/showflight/54971692268,https://www.airlines-manager.com/aircraft/show/119220435,23:45,11:29,320,"$714,248.00","$658,185.00","$2,056.83","$56,095.31"
EWR - MHT,54930655363,EWR-FCA-CID 1,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/54930655363,https://www.airlines-manager.com/aircraft/show/116042866,3:45,6:44,310,"$126,333.00","$107,196.00",$345.79,"$35,931.62"
EWR - MHT,54942363039,EWR-FCA-CID 4,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/54942363039,https://www.airlines-manager.com/aircraft/show/116042863,9:00,11:59,310,"$126,333.00","$107,196.00",$345.79,"$35,931.62"
EWR - MHT,54942363040,EWR-FCA-CID 3,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/54942363040,https://www.airlines-manager.com/aircraft/show/116042864,10:00,12:59,310,"$126,333.00","$107,196.00",$345.79,"$35,931.62"
EWR - MHT,54947196833,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/54947196833,https://www.airlines-manager.com/aircraft/show/98887257,11:00,13:59,112,"$56,299.00","$44,452.00",$396.89,"$14,900.11"
EWR - MHT,54956618058,EWR-FCA-CID 2,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/54956618058,https://www.airlines-manager.com/aircraft/show/116042865,15:45,18:44,310,"$126,333.00","$107,196.00",$345.79,"$35,931.62"
EWR - MIA,54930655263,EWR-MIA-ORD 5,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/54930655263,https://www.airlines-manager.com/aircraft/show/113251309,2:30,8:44,338,"429,805$","386,719$","$1,144.14","$62,040.48"
EWR - MIA,54930655264,EWR-MIA-ORD 1,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/54930655264,https://www.airlines-manager.com/aircraft/show/113251305,4:00,10:14,338,"429,805$","386,719$","$1,144.14","$62,040.48"
EWR - MIA,54942363114,EWR-MIA-ORD 2,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/54942363114,https://www.airlines-manager.com/aircraft/show/113251306,10:00,16:14,338,"429,805$","386,719$","$1,144.14","$62,040.48"
EWR - MIA,54947196840,EWR-MIA-ORD 4,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/54947196840,https://www.airlines-manager.com/aircraft/show/113251308,11:00,17:14,338,"429,805$","386,719$","$1,144.14","$62,040.48"
EWR - MIA,54956618149,EWR-MIA-ORD 3,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/54956618149,https://www.airlines-manager.com/aircraft/show/113251307,16:30,22:44,338,"429,805$","386,719$","$1,144.14","$62,040.48"
EWR - MKE,54930655328,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/54930655328,https://www.airlines-manager.com/aircraft/show/96421247,3:15,8:14,112,"149,880$","131,888$","$1,177.57","$26,465.82"
EWR - MKE,54937424076,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/54937424076,https://www.airlines-manager.com/aircraft/show/104610407,7:30,12:29,310,"315,504$","287,619$",$927.80,"$57,716.19"
EWR - MKE,54952417754,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/54952417754,https://www.airlines-manager.com/aircraft/show/104610408,14:00,18:59,310,"315,504$","287,619$",$927.80,"$57,716.19"
EWR - MKE,54965848480,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/54965848480,https://www.airlines-manager.com/aircraft/show/104610409,19:15,0:14,310,"315,504$","287,619$",$927.80,"$57,716.19"
EWR - MKE,54971692219,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/54971692219,https://www.airlines-manager.com/aircraft/show/104610410,23:15,4:14,310,"$315,504.00","$287,619.00",$927.80,"$57,716.19"
EWR - MSN,54930655256,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/54930655256,https://www.airlines-manager.com/aircraft/show/116042859,2:30,7:44,310,"$330,385.00","$303,141.00",$977.87,"$57,925.03"
EWR - MSN,54942363021,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/54942363021,https://www.airlines-manager.com/aircraft/show/116042860,8:45,13:59,310,"$330,385.00","$303,141.00",$977.87,"$57,925.03"
EWR - MSN,54942363022,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/54942363022,https://www.airlines-manager.com/aircraft/show/116042861,10:00,15:14,310,"$330,385.00","$303,141.00",$977.87,"$57,925.03"
EWR - MSN,54965848678,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/54965848678,https://www.airlines-manager.com/aircraft/show/116042862,21:00,2:14,310,"$330,385.00","$303,141.00",$977.87,"$57,925.03"
EWR - MSO,54930654972,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/54930654972,https://www.airlines-manager.com/aircraft/show/107161238,1:00,10:59,310,"$615,656.00","$570,709.00","$1,841.00","$57,166.18"
EWR - MSO,54947196855,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/54947196855,https://www.airlines-manager.com/aircraft/show/107161240,11:00,20:59,310,"$615,656.00","$570,709.00","$1,841.00","$57,166.18"
EWR - MSO,54956618060,EWR-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/54956618060,https://www.airlines-manager.com/aircraft/show/86782214,15:45,1:44,112,"$289,178.00","$258,695.00","$2,309.78","$25,912.69"
EWR - MSO,54961494223,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/54961494223,https://www.airlines-manager.com/aircraft/show/107161239,17:45,3:44,310,"$615,656.00","$570,709.00","$1,841.00","$57,166.18"
EWR - MSO,54969516379,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/54969516379,https://www.airlines-manager.com/aircraft/show/107161241,22:00,7:59,310,"$615,656.00","$570,709.00","$1,841.00","$57,166.18"
EWR - MSP,54930655510,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/54930655510,https://www.airlines-manager.com/aircraft/show/86270783,5:00,10:59,310,"$374,578.00","$335,343.00","$1,081.75","$56,046.18"
EWR - MSP,54942363155,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/54942363155,https://www.airlines-manager.com/aircraft/show/90452833,10:00,15:59,310,"$374,578.00","$335,343.00","$1,081.75","$56,046.18"
EWR - MSP,54947196866,EWR-DEN-SLC 6 B,A319-100,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/54947196866,https://www.airlines-manager.com/aircraft/show/105223076,11:00,16:59,198,"$283,918.00","$252,487.00","$1,275.19","$42,198.38"
EWR - MSP,54961494286,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/54961494286,https://www.airlines-manager.com/aircraft/show/87153196,18:15,0:14,310,"$374,578.00","$335,343.00","$1,081.75","$56,046.18"
EWR - MSP,54965848528,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/54965848528,https://www.airlines-manager.com/aircraft/show/86270785,19:45,1:44,310,"$374,578.00","$335,343.00","$1,081.75","$56,046.18"
EWR - MSP,54965848529,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/54965848529,https://www.airlines-manager.com/aircraft/show/90452835,20:45,2:44,310,"$374,578.00","$335,343.00","$1,081.75","$56,046.18"
EWR - MSY,54930655334,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/54930655334,https://www.airlines-manager.com/aircraft/show/90717079,3:15,9:59,310,"$414,563.00","$379,812.00","$1,225.20","$56,407.72"
EWR - MSY,54942363092,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/54942363092,https://www.airlines-manager.com/aircraft/show/90717077,10:00,16:44,310,"$414,563.00","$379,812.00","$1,225.20","$56,407.72"
EWR - MSY,54947196890,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/54947196890,https://www.airlines-manager.com/aircraft/show/90717076,11:00,17:44,310,"$414,563.00","$379,812.00","$1,225.20","$56,407.72"
EWR - MSY,54961494256,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/54961494256,https://www.airlines-manager.com/aircraft/show/90717078,18:00,0:44,310,"$414,563.00","$379,812.00","$1,225.20","$56,407.72"
EWR - MSY,54965848548,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/54965848548,https://www.airlines-manager.com/aircraft/show/95950199,20:00,2:44,310,"$414,563.00","$379,812.00","$1,225.20","$56,407.72"
EWR - MUC,54930654677,EWR 56C-7 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/54930654677,https://www.airlines-manager.com/aircraft/show/106721562,0:00,16:29,598,"$2,038,935.00","$1,888,864.00","$3,158.64","$114,592.36"
EWR - MUC,54947196912,EWR 56C-1 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/54947196912,https://www.airlines-manager.com/aircraft/show/106721556,11:00,3:29,598,"$2,038,935.00","$1,888,864.00","$3,158.64","$114,592.36"
EWR - MUC,54961494298,EWR 56C-7 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/54961494298,https://www.airlines-manager.com/aircraft/show/106721562,18:30,10:59,598,"$2,038,935.00","$1,888,864.00","$3,158.64","$114,592.36"
EWR - MXP,54942363126,EWR 84B-7 B2,777-300,https://www.airlines-manager.com/network/showline/49921908,https://www.airlines-manager.com/network/showflight/54942363126,https://www.airlines-manager.com/aircraft/show/117958701,10:00,2:29,852,"$2,682,820.00","$2,437,530.00","$2,860.95","$147,878.46"
EWR - MXP,54969516366,EWR 84B-3  B2,777-300,https://www.airlines-manager.com/network/showline/49921908,https://www.airlines-manager.com/network/showflight/54969516366,https://www.airlines-manager.com/aircraft/show/117958697,22:00,14:29,852,"$2,682,820.00","$2,437,530.00","$2,860.95","$147,878.46"
EWR - NAS,54930655520,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/54930655520,https://www.airlines-manager.com/aircraft/show/98379319,5:15,11:44,310,"$395,405.00","$362,404.00","$1,169.05","$55,897.79"
EWR - NAS,54952417606,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/54952417606,https://www.airlines-manager.com/aircraft/show/98379317,13:00,19:29,310,"$395,405.00","$362,404.00","$1,169.05","$55,897.79"
EWR - NAS,54961494248,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/54961494248,https://www.airlines-manager.com/aircraft/show/98379316,18:00,0:29,310,"$395,405.00","$362,404.00","$1,169.05","$55,897.79"
EWR - NAS,54961494249,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/54961494249,https://www.airlines-manager.com/aircraft/show/98379318,19:00,1:29,310,"395,405$","362,404$","$1,169.05","$55,897.79"
EWR - NAS,54965848668,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/54965848668,https://www.airlines-manager.com/aircraft/show/98379315,21:00,3:29,290,"$373,013.00","$340,764.00","$1,175.05","$52,560.00"
EWR - NRT,54930654719,EWR 56A-7 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/54930654719,https://www.airlines-manager.com/aircraft/show/106813013,0:00,2:14,748,"$3,980,848.00","$3,582,146.00","$4,788.97","$1,603,945.97"
EWR - NRT,54947196795,EWR 56A-3 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/54947196795,https://www.airlines-manager.com/aircraft/show/106813009,10:15,12:29,748,"$3,955,032.00","$3,565,413.00","$4,766.59","$1,596,453.58"
EWR - NRT,54956618161,EWR 56A-1 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/54956618161,https://www.airlines-manager.com/aircraft/show/106813007,16:45,18:59,748,"$3,558,007.00","$3,272,841.00","$4,375.46","$1,465,451.19"
EWR - OAK,54930654983,EWR-OAK-SJC 5,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/54930654983,https://www.airlines-manager.com/aircraft/show/104717239,1:00,12:59,310,"$735,917.00","$680,343.00","$2,194.65","$56,774.10"
EWR - OAK,54942363135,EWR-OAK-SJC 1,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/54942363135,https://www.airlines-manager.com/aircraft/show/104717243,10:00,21:59,310,"$735,917.00","$680,343.00","$2,194.65","$56,774.10"
EWR - OAK,54947196991,EWR-OAK-SJC 2,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/54947196991,https://www.airlines-manager.com/aircraft/show/104717242,12:00,23:59,310,"$735,917.00","$680,343.00","$2,194.65","$56,774.10"
EWR - OAK,54952417752,EWR-OAK-SJC 3,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/54952417752,https://www.airlines-manager.com/aircraft/show/104717241,14:00,1:59,310,"$735,917.00","$680,343.00","$2,194.65","$56,774.10"
EWR - OAK,54969516435,EWR-OAK-SJC 4,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/54969516435,https://www.airlines-manager.com/aircraft/show/104717240,22:30,10:29,310,"$735,917.00","$680,343.00","$2,194.65","$56,774.10"
EWR - OKC,54930655085,EWR-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/54930655085,https://www.airlines-manager.com/aircraft/show/86782214,1:45,8:59,112,"$217,580.00","$193,834.00","$1,730.66","$26,797.33"
EWR - OKC,54930655087,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/54930655087,https://www.airlines-manager.com/aircraft/show/107161239,3:45,10:59,310,"$460,963.00","$425,234.00","$1,371.72","$58,788.11"
EWR - OKC,54937424100,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/54937424100,https://www.airlines-manager.com/aircraft/show/107161241,8:00,15:14,310,"$460,963.00","$425,234.00","$1,371.72","$58,788.11"
EWR - OKC,54947196851,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/54947196851,https://www.airlines-manager.com/aircraft/show/107161238,11:00,18:14,310,"$460,963.00","$425,234.00","$1,371.72","$58,788.11"
EWR - OKC,54965848658,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/54965848658,https://www.airlines-manager.com/aircraft/show/107161240,21:00,4:14,310,"$460,963.00","$425,234.00","$1,371.72","$58,788.11"
EWR - OMA,54930655245,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/54930655245,https://www.airlines-manager.com/aircraft/show/104418460,2:30,8:59,310,"$401,849.00","$368,874.00","$1,189.92","$56,895.73"
EWR - OMA,54937424065,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/54937424065,https://www.airlines-manager.com/aircraft/show/104418463,7:30,13:59,310,"$401,849.00","$368,874.00","$1,189.92","$56,895.73"
EWR - OMA,54942363138,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/54942363138,https://www.airlines-manager.com/aircraft/show/104418462,10:00,16:29,310,"$401,849.00","$368,874.00","$1,189.92","$56,895.73"
EWR - OMA,54961494008,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/54961494008,https://www.airlines-manager.com/aircraft/show/104418461,17:00,23:29,310,"$401,849.00","$368,874.00","$1,189.92","$56,895.73"
EWR - OMA,54961494009,EWR-BOI-PBI 5 B,A319-100,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/54961494009,https://www.airlines-manager.com/aircraft/show/110582846,19:00,1:29,195,"$301,732.00","$275,410.00","$1,412.36","$42,479.69"
EWR - ONT,54930654675,EWR-SMF-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/54930654675,https://www.airlines-manager.com/aircraft/show/94889153,0:00,11:29,320,"$702,981.00","$644,277.00","$2,013.37","$56,105.40"
EWR - ONT,54930654676,EWR-SMF-ONT 5,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/54930654676,https://www.airlines-manager.com/aircraft/show/94889154,2:00,13:29,320,"$702,981.00","$644,277.00","$2,013.37","$56,105.40"
EWR - ONT,54947196952,EWR-SMF-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/54947196952,https://www.airlines-manager.com/aircraft/show/94889150,11:45,23:14,320,"$702,981.00","$644,277.00","$2,013.37","$56,105.40"
EWR - ONT,54952417634,EWR-SMF-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/54952417634,https://www.airlines-manager.com/aircraft/show/94889151,13:15,0:44,320,"$702,981.00","$644,277.00","$2,013.37","$56,105.40"
EWR - ONT,54956617954,EWR-SMF-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/54956617954,https://www.airlines-manager.com/aircraft/show/94889152,14:45,2:14,298,"$673,090.00","$615,809.00","$2,066.47","$53,626.33"
EWR - ORD,54930655511,EWR-MIA-ORD 2,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/54930655511,https://www.airlines-manager.com/aircraft/show/113251306,5:00,9:59,338,"$340,455.00","$293,420.00",$868.11,"$58,880.27"
EWR - ORD,54947196801,EWR-MIA-ORD 1,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/54947196801,https://www.airlines-manager.com/aircraft/show/113251305,10:15,15:14,338,"$340,455.00","$293,420.00",$868.11,"$58,880.27"
EWR - ORD,54947196802,EWR-MIA-ORD 3,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/54947196802,https://www.airlines-manager.com/aircraft/show/113251307,11:30,16:29,338,"$340,455.00","$293,420.00",$868.11,"$58,880.27"
EWR - ORD,54961494074,EWR-MIA-ORD 4,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/54961494074,https://www.airlines-manager.com/aircraft/show/113251308,17:15,22:14,338,"$340,455.00","$293,420.00",$868.11,"$58,880.27"
EWR - ORD,54969516340,EWR-MIA-ORD 5,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/54969516340,https://www.airlines-manager.com/aircraft/show/113251309,21:30,2:29,338,"$340,455.00","$293,420.00",$868.11,"$58,880.27"
EWR - ORF,54930655242,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/54930655242,https://www.airlines-manager.com/aircraft/show/88494375,2:15,5:29,320,"$153,174.00","$129,624.00",$405.08,"$40,089.90"
EWR - ORF,54947196933,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/54947196933,https://www.airlines-manager.com/aircraft/show/106104450,11:00,14:14,112,"$70,275.00","$57,673.00",$514.94,"$17,837.01"
EWR - ORF,54952417807,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/54952417807,https://www.airlines-manager.com/aircraft/show/105731236,14:15,17:29,320,"$153,174.00","$129,624.00",$405.08,"$40,089.90"
EWR - ORF,54961494240,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/54961494240,https://www.airlines-manager.com/aircraft/show/88494376,18:00,21:14,320,"$153,174.00","$129,624.00",$405.08,"$40,089.90"
EWR - ORF,54969516351,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/54969516351,https://www.airlines-manager.com/aircraft/show/88494377,21:45,0:59,320,"$153,174.00","$129,624.00",$405.08,"$40,089.90"
EWR - OSL,54930655318,EWR 56D-2 E,787-10,https://www.airlines-manager.com/network/showline/50072202,https://www.airlines-manager.com/network/showflight/54930655318,https://www.airlines-manager.com/aircraft/show/118644437,3:15,18:29,648,"$1,884,538.00","$1,756,389.00","$2,710.48","$115,299.06"
EWR - OSL,54930655319,EWR 56D-4 E,787-10,https://www.airlines-manager.com/network/showline/50072202,https://www.airlines-manager.com/network/showflight/54930655319,https://www.airlines-manager.com/aircraft/show/118644439,4:45,19:59,648,"$1,884,538.00","$1,756,389.00","$2,710.48","$115,299.06"
EWR - OSL,54965848571,EWR 56D-4 E,787-10,https://www.airlines-manager.com/network/showline/50072202,https://www.airlines-manager.com/network/showflight/54965848571,https://www.airlines-manager.com/aircraft/show/118644439,20:00,11:14,648,"$1,884,538.00","$1,756,389.00","$2,710.48","$115,299.06"
EWR - PBI,54930655059,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/54930655059,https://www.airlines-manager.com/aircraft/show/104418463,1:30,7:29,310,"$379,359.00","$346,918.00","$1,119.09","$57,980.72"
EWR - PBI,54930655060,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/54930655060,https://www.airlines-manager.com/aircraft/show/104418462,3:00,8:59,310,"$379,359.00","$346,918.00","$1,119.09","$57,980.72"
EWR - PBI,54947196897,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/54947196897,https://www.airlines-manager.com/aircraft/show/104418461,11:00,16:59,310,"$379,359.00","$346,918.00","$1,119.09","$57,980.72"
EWR - PBI,54952417470,EWR-BOI-PBI 5 B,A319-100,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/54952417470,https://www.airlines-manager.com/aircraft/show/110582846,13:00,18:59,198,"$287,177.00","$261,181.00","$1,319.10","$43,651.42"
EWR - PBI,54965848629,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/54965848629,https://www.airlines-manager.com/aircraft/show/104418460,20:30,2:29,310,"$379,359.00","$346,918.00","$1,119.09","$57,980.72"
EWR - PDX,54930654702,EWR-PHX-PDX 3,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/54930654702,https://www.airlines-manager.com/aircraft/show/113595213,0:00,11:29,338,"$757,836.00","$705,129.00","$2,086.18","$61,404.56"
EWR - PDX,54930654703,EWR-PHX-PDX 4,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/54930654703,https://www.airlines-manager.com/aircraft/show/113595214,2:00,13:29,338,"$757,836.00","$705,129.00","$2,086.18","$61,404.56"
EWR - PDX,54930654704,EWR-PHX-PDX 5,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/54930654704,https://www.airlines-manager.com/aircraft/show/113595215,5:00,16:29,338,"$757,836.00","$705,129.00","$2,086.18","$61,404.56"
EWR - PDX,54937423997,EWR-PHX-PDX 6 B,A319-100,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/54937423997,https://www.airlines-manager.com/aircraft/show/99219630,6:30,17:59,198,"$526,507.00","$481,810.00","$2,433.38","$41,957.33"
EWR - PDX,54947196797,EWR-PHX-PDX 1,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/54947196797,https://www.airlines-manager.com/aircraft/show/113595211,10:15,21:44,338,"$757,836.00","$705,129.00","$2,086.18","$61,404.56"
EWR - PDX,54947196798,EWR-PHX-PDX 2,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/54947196798,https://www.airlines-manager.com/aircraft/show/113595212,12:15,23:44,305,"$712,639.00","$661,759.00","$2,169.70","$57,627.78"
EWR - PHX,54930654700,EWR-PHX-PDX 1,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/54930654700,https://www.airlines-manager.com/aircraft/show/113595211,0:00,10:14,338,"$704,047.00","$646,677.00","$1,913.25","$63,193.19"
EWR - PHX,54930654701,EWR-PHX-PDX 2,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/54930654701,https://www.airlines-manager.com/aircraft/show/113595212,2:00,12:14,338,"$704,047.00","$646,677.00","$1,913.25","$63,193.19"
EWR - PHX,54947196943,EWR-PHX-PDX 3,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/54947196943,https://www.airlines-manager.com/aircraft/show/113595213,11:30,21:44,338,"$704,047.00","$646,677.00","$1,913.25","$63,193.19"
EWR - PHX,54952417641,EWR-PHX-PDX 4,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/54952417641,https://www.airlines-manager.com/aircraft/show/113595214,13:30,23:44,338,"$704,047.00","$646,677.00","$1,913.25","$63,193.19"
EWR - PHX,54956618134,EWR-PHX-PDX 5,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/54956618134,https://www.airlines-manager.com/aircraft/show/113595215,16:30,2:44,338,"$704,047.00","$646,677.00","$1,913.25","$63,193.19"
EWR - PHX,54961494238,EWR-PHX-PDX 6 B,A319-100,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/54961494238,https://www.airlines-manager.com/aircraft/show/99219630,18:00,4:29,198,"$489,624.00","$441,509.00","$2,229.84","$42,115.33"
EWR - PIT,54930655452,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/54930655452,https://www.airlines-manager.com/aircraft/show/98887257,4:15,7:29,112,"$77,415.00","$63,055.00",$562.99,"$19,501.55"
EWR - PIT,54937423995,EWR-STL-PIT 3,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/54937423995,https://www.airlines-manager.com/aircraft/show/115400546,6:30,9:44,338,"$182,214.00","$159,602.00",$472.20,"$49,361.44"
EWR - PIT,54942363105,EWR-STL-PIT 2,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/54942363105,https://www.airlines-manager.com/aircraft/show/115400547,10:00,13:14,338,"$182,214.00","$159,602.00",$472.20,"$49,361.44"
EWR - PIT,54952417456,EWR-STL-PIT 4,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/54952417456,https://www.airlines-manager.com/aircraft/show/115400545,13:00,16:14,338,"$182,214.00","$159,602.00",$472.20,"$49,361.44"
EWR - PIT,54956618048,EWR-STL-PIT 1,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/54956618048,https://www.airlines-manager.com/aircraft/show/115400548,15:30,18:44,338,"$182,214.00","$159,602.00",$472.20,"$49,361.44"
EWR - PIT,54965848521,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/54965848521,https://www.airlines-manager.com/aircraft/show/98887257,19:30,22:44,112,"$77,415.00","$63,055.00",$562.99,"$19,501.55"
EWR - PRG,54947196792,EWR 84B-2  B2,777-300,https://www.airlines-manager.com/network/showline/44327652,https://www.airlines-manager.com/network/showflight/54947196792,https://www.airlines-manager.com/aircraft/show/117958696,10:15,2:59,852,"$2,735,955.00","$2,492,473.00","$2,925.44","$148,952.57"
EWR - PRG,54969516393,EWR 84B-5  B2,777-300,https://www.airlines-manager.com/network/showline/44327652,https://www.airlines-manager.com/network/showflight/54969516393,https://www.airlines-manager.com/aircraft/show/117958699,22:15,14:59,852,"$2,735,955.00","$2,492,473.00","$2,925.44","$148,952.57"
EWR - PSP,54930654887,EWR-PSP-FAT 4,A321neo,https://www.airlines-manager.com/network/showline/50283402,https://www.airlines-manager.com/network/showflight/54930654887,https://www.airlines-manager.com/aircraft/show/116672810,0:30,11:44,338,"$756,851.00","$709,387.00","$2,098.78","$63,150.18"
EWR - PSP,54947196831,EWR-PSP-FAT 1,A321neo,https://www.airlines-manager.com/network/showline/50283402,https://www.airlines-manager.com/network/showflight/54947196831,https://www.airlines-manager.com/aircraft/show/119220450,11:00,22:14,338,"$756,851.00","$709,387.00","$2,098.78","$63,150.18"
EWR - PSP,54952417432,EWR-PSP-FAT 2,A321neo,https://www.airlines-manager.com/network/showline/50283402,https://www.airlines-manager.com/network/showflight/54952417432,https://www.airlines-manager.com/aircraft/show/119220451,13:00,0:14,338,"$756,851.00","$709,387.00","$2,098.78","$63,150.18"
EWR - PSP,54969516439,EWR-PSP-FAT 3,A321neo,https://www.airlines-manager.com/network/showline/50283402,https://www.airlines-manager.com/network/showflight/54969516439,https://www.airlines-manager.com/aircraft/show/119220452,22:30,9:44,338,"$756,851.00","$709,387.00","$2,098.78","$63,150.18"
EWR - PVD,54930655070,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/54930655070,https://www.airlines-manager.com/aircraft/show/110044466,1:30,4:14,310,"$98,927.00","$81,292.00",$262.23,"$29,740.98"
EWR - PVD,54942363058,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/54942363058,https://www.airlines-manager.com/aircraft/show/110044465,9:15,11:59,310,"$98,927.00","$81,292.00",$262.23,"$29,740.98"
EWR - PVD,54947196910,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/54947196910,https://www.airlines-manager.com/aircraft/show/110044464,11:00,13:44,310,"$98,927.00","$81,292.00",$262.23,"$29,740.98"
EWR - PVD,54965848537,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/54965848537,https://www.airlines-manager.com/aircraft/show/110044463,19:45,22:29,310,"$98,927.00","$81,292.00",$262.23,"$29,740.98"
EWR - PVD,54971692228,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/54971692228,https://www.airlines-manager.com/aircraft/show/110113039,23:15,1:59,112,"$42,468.00","$31,610.00",$282.23,"$11,564.63"
EWR - PWM,54930655465,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/54930655465,https://www.airlines-manager.com/aircraft/show/110044463,4:30,7:44,310,"$154,039.00","$134,989.00",$435.45,"$41,749.18"
EWR - PWM,54942363015,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/54942363015,https://www.airlines-manager.com/aircraft/show/110113039,8:45,11:59,112,"$70,011.00","$58,085.00",$518.62,"$17,964.43"
EWR - PWM,54947196911,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/54947196911,https://www.airlines-manager.com/aircraft/show/110044466,11:00,14:14,310,"$154,039.00","$134,989.00",$435.45,"$41,749.18"
EWR - PWM,54961494260,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/54961494260,https://www.airlines-manager.com/aircraft/show/110044465,18:00,21:14,310,"$154,039.00","$134,989.00",$435.45,"$41,749.18"
EWR - PWM,54965848538,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/54965848538,https://www.airlines-manager.com/aircraft/show/110044464,19:45,22:59,299,"$150,846.00","$131,881.00",$441.07,"$40,787.94"
EWR - RAP,54930654732,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/54930654732,https://www.airlines-manager.com/aircraft/show/116042860,0:00,7:59,310,"$495,290.00","$458,274.00","$1,478.30","$57,403.84"
EWR - RAP,54930654733,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/54930654733,https://www.airlines-manager.com/aircraft/show/116042861,1:15,9:14,310,"$495,290.00","$458,274.00","$1,478.30","$57,403.84"
EWR - RAP,54952417454,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/54952417454,https://www.airlines-manager.com/aircraft/show/116042862,13:00,20:59,310,"$495,290.00","$458,274.00","$1,478.30","$57,403.84"
EWR - RAP,54961494307,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/54961494307,https://www.airlines-manager.com/aircraft/show/116042859,18:30,2:29,310,"$495,290.00","$458,274.00","$1,478.30","$57,403.84"
EWR - RDU,54930654995,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/54930654995,https://www.airlines-manager.com/aircraft/show/105731236,1:15,4:59,320,"$200,581.00","$172,613.00",$539.42,"$46,235.63"
EWR - RDU,54930654996,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/54930654996,https://www.airlines-manager.com/aircraft/show/88494376,5:00,8:44,320,"$200,581.00","$172,613.00",$539.42,"$46,235.63"
EWR - RDU,54947196917,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/54947196917,https://www.airlines-manager.com/aircraft/show/88494377,11:00,14:44,320,"$200,581.00","$172,613.00",$539.42,"$46,235.63"
EWR - RDU,54956618051,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/54956618051,https://www.airlines-manager.com/aircraft/show/88494375,15:30,19:14,320,"$200,581.00","$172,613.00",$539.42,"$46,235.63"
EWR - RDU,54969516381,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/54969516381,https://www.airlines-manager.com/aircraft/show/106104450,22:00,1:44,112,"$93,025.00","$77,828.00",$694.89,"$20,846.79"
EWR - RIC,54930654955,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/54930654955,https://www.airlines-manager.com/aircraft/show/88494377,1:00,4:14,320,"$139,037.00","$115,616.00",$361.30,"$35,757.53"
EWR - RIC,54930654956,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/54930654956,https://www.airlines-manager.com/aircraft/show/88494375,5:30,8:44,320,"$139,037.00","$115,616.00",$361.30,"$35,757.53"
EWR - RIC,54952417805,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/54952417805,https://www.airlines-manager.com/aircraft/show/106104450,14:15,17:29,112,"$62,634.00","$50,117.00",$447.47,"$15,500.10"
EWR - RIC,54961494189,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/54961494189,https://www.airlines-manager.com/aircraft/show/105731236,17:30,20:44,320,"$139,037.00","$115,616.00",$361.30,"$35,757.53"
EWR - RIC,54965848698,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/54965848698,https://www.airlines-manager.com/aircraft/show/88494376,21:15,0:29,320,"$139,037.00","$115,616.00",$361.30,"$35,757.53"
EWR - RNO,54930655187,EWR-RNO-MEM 5 B,A319-100,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/54930655187,https://www.airlines-manager.com/aircraft/show/100096560,2:00,13:29,198,"$529,840.00","$488,053.00","$2,464.91","$42,500.99"
EWR - RNO,54947196803,EWR-RNO-MEM 1,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/54947196803,https://www.airlines-manager.com/aircraft/show/99920622,10:15,21:29,320,"$702,795.00","$645,835.00","$2,018.23","$57,492.73"
EWR - RNO,54952417729,EWR-RNO-MEM 4,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/54952417729,https://www.airlines-manager.com/aircraft/show/99920619,14:00,1:14,320,"$702,795.00","$645,835.00","$2,018.23","$57,492.73"
EWR - RNO,54956618150,EWR-RNO-MEM 3,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/54956618150,https://www.airlines-manager.com/aircraft/show/99920620,16:30,3:44,320,"$702,795.00","$645,835.00","$2,018.23","$57,492.73"
EWR - RNO,54969516412,EWR-RNO-MEM 2,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/54969516412,https://www.airlines-manager.com/aircraft/show/99920621,22:15,9:29,320,"$702,795.00","$645,835.00","$2,018.23","$57,492.73"
EWR - ROC,54942363141,EWR-TYS-GSO 4,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/54942363141,https://www.airlines-manager.com/aircraft/show/119220545,10:00,12:59,310,"$134,976.00","$115,966.00",$374.08,"$38,871.28"
EWR - ROC,54952417817,EWR-TYS-GSO 3,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/54952417817,https://www.airlines-manager.com/aircraft/show/119220544,14:30,17:29,310,"134,976$","115,966$",$374.08,"$38,871.28"
EWR - ROC,54961494273,EWR-TYS-GSO 2,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/54961494273,https://www.airlines-manager.com/aircraft/show/119220543,18:15,21:14,310,"$134,976.00","$115,966.00",$374.08,"$38,871.28"
EWR - ROC,54969516441,EWR-TYS-GSO 1,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/54969516441,https://www.airlines-manager.com/aircraft/show/119220542,22:45,1:44,310,"$134,976.00","$115,966.00",$374.08,"$38,871.28"
EWR - RSW,54930655336,EWR-RNO-MEM 1,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/54930655336,https://www.airlines-manager.com/aircraft/show/99920622,3:15,9:29,320,"$388,911.00","$350,141.00","$1,094.19","$56,172.35"
EWR - RSW,54937424033,EWR-RNO-MEM 4,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/54937424033,https://www.airlines-manager.com/aircraft/show/99920619,7:00,13:14,320,"$388,911.00","$350,141.00","$1,094.19","$56,172.35"
EWR - RSW,54947196793,EWR-RNO-MEM 3,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/54947196793,https://www.airlines-manager.com/aircraft/show/99920620,10:15,16:29,320,"$388,911.00","$350,141.00","$1,094.19","$56,172.35"
EWR - RSW,54952417728,EWR-RNO-MEM 5 B,A319-100,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/54952417728,https://www.airlines-manager.com/aircraft/show/100096560,14:00,20:14,198,"$294,881.00","$267,322.00","$1,350.11","$42,885.88"
EWR - RSW,54956618087,EWR-RNO-MEM 2,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/54956618087,https://www.airlines-manager.com/aircraft/show/99920621,16:00,22:14,320,"$388,911.00","$350,141.00","$1,094.19","$56,172.35"
EWR - SAN,54930654688,EWR-MIA-ORD 3,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/54930654688,https://www.airlines-manager.com/aircraft/show/113251307,0:00,11:29,338,"$775,493.00","$723,197.00","$2,139.64","$62,977.97"
EWR - SAN,54942363113,EWR-MIA-ORD 5,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/54942363113,https://www.airlines-manager.com/aircraft/show/113251309,10:00,21:29,338,"$775,493.00","$723,197.00","$2,139.64","$62,977.97"
EWR - SAN,54956618043,EWR-MIA-ORD 1,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/54956618043,https://www.airlines-manager.com/aircraft/show/113251305,15:15,2:44,338,"$775,493.00","$723,197.00","$2,139.64","$62,977.97"
EWR - SAN,54956618044,EWR-MIA-ORD 2,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/54956618044,https://www.airlines-manager.com/aircraft/show/113251306,16:15,3:44,338,"$775,493.00","$723,197.00","$2,139.64","$62,977.97"
EWR - SAN,54969516410,EWR-MIA-ORD 4,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/54969516410,https://www.airlines-manager.com/aircraft/show/113251308,22:15,9:44,338,"$775,493.00","$723,197.00","$2,139.64","$62,977.97"
EWR - SAT,54930655131,EWR-ELP-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/54930655131,https://www.airlines-manager.com/aircraft/show/103365576,1:45,9:59,320,"517,703$","473,909$","$1,480.97","$57,559.80"
EWR - SAT,54942363153,EWR-ELP-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/54942363153,https://www.airlines-manager.com/aircraft/show/103365577,10:00,18:14,320,"$517,703.00","$473,909.00","$1,480.97","$57,559.80"
EWR - SAT,54947196989,EWR-ELP-SAT 5 B,A319-100,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/54947196989,https://www.airlines-manager.com/aircraft/show/110582847,12:00,20:14,198,"$390,698.00","$358,994.00","$1,813.10","$43,602.51"
EWR - SAT,54965848522,EWR-ELP-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/54965848522,https://www.airlines-manager.com/aircraft/show/103365578,19:30,3:44,320,"$517,703.00","$473,909.00","$1,480.97","$57,559.80"
EWR - SAT,54969516324,EWR-ELP-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/54969516324,https://www.airlines-manager.com/aircraft/show/103365575,21:30,5:44,320,"$517,703.00","$473,909.00","$1,480.97","$57,559.80"
EWR - SAV,54930655469,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/54930655469,https://www.airlines-manager.com/aircraft/show/108466265,4:30,9:29,112,"$146,318.00","$129,401.00","$1,155.37","$25,966.76"
EWR - SAV,54942363035,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/54942363035,https://www.airlines-manager.com/aircraft/show/108834810,9:00,13:59,310,"$307,563.00","$281,428.00",$907.83,"$56,473.85"
EWR - SAV,54947196843,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/54947196843,https://www.airlines-manager.com/aircraft/show/108834809,11:00,15:59,310,"$307,563.00","$281,428.00",$907.83,"$56,473.85"
EWR - SAV,54961494259,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/54961494259,https://www.airlines-manager.com/aircraft/show/108834808,18:00,22:59,310,"$307,563.00","$281,428.00",$907.83,"$56,473.85"
EWR - SAV,54965848585,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/54965848585,https://www.airlines-manager.com/aircraft/show/108834811,20:00,0:59,258,"$277,418.00","$252,292.00",$977.88,"$50,627.16"
EWR - SDF,54930655384,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/54930655384,https://www.airlines-manager.com/aircraft/show/86270787,4:00,8:29,310,"$295,460.00","$268,367.00",$865.70,"$59,858.81"
EWR - SDF,54942362960,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/54942362960,https://www.airlines-manager.com/aircraft/show/90452834,8:15,12:44,310,"$295,460.00","$268,367.00",$865.70,"$59,858.81"
EWR - SDF,54956618015,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/54956618015,https://www.airlines-manager.com/aircraft/show/86270784,15:00,19:29,310,"$295,460.00","$268,367.00",$865.70,"$59,858.81"
EWR - SDF,54961494276,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/54961494276,https://www.airlines-manager.com/aircraft/show/86270786,18:15,22:44,310,"$295,460.00","$268,367.00",$865.70,"$59,858.81"
EWR - SEA,54930654973,EWR-DFW-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/54930654973,https://www.airlines-manager.com/aircraft/show/86238752,1:00,12:14,320,"$709,859.00","$640,790.00","$2,002.47","$57,043.62"
EWR - SEA,54930654974,EWR-DFW-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/54930654974,https://www.airlines-manager.com/aircraft/show/90489726,3:00,14:14,320,"$709,859.00","$640,790.00","$2,002.47","$57,043.62"
EWR - SEA,54947196878,EWR-DFW-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/54947196878,https://www.airlines-manager.com/aircraft/show/86238753,11:00,22:14,320,"$709,859.00","$640,790.00","$2,002.47","$57,043.62"
EWR - SEA,54956618004,EWR-DFW-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/54956618004,https://www.airlines-manager.com/aircraft/show/90489724,15:00,2:14,320,"$709,859.00","$640,790.00","$2,002.47","$57,043.62"
EWR - SEA,54969516456,EWR-DFW-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/54969516456,https://www.airlines-manager.com/aircraft/show/90489725,22:45,9:59,320,"$709,859.00","$640,790.00","$2,002.47","$57,043.62"
EWR - SEA,54971692258,EWR-DFW-ATL 6 B,A319-100,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/54971692258,https://www.airlines-manager.com/aircraft/show/105222360,23:30,10:59,198,"$534,958.00","$485,080.00","$2,449.90","$42,242.09"
EWR - SFO,54930654678,EWR-SFO-LAX 1,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/54930654678,https://www.airlines-manager.com/aircraft/show/83716137,0:00,11:44,400,"$944,723.00","$860,114.00","$2,150.29","$73,305.17"
EWR - SFO,54930654679,EWR-SFO-LAX 2,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/54930654679,https://www.airlines-manager.com/aircraft/show/89233028,1:30,13:14,400,"$944,723.00","$860,114.00","$2,150.29","$73,305.17"
EWR - SFO,54930654680,EWR-SFO-LAX 3,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/54930654680,https://www.airlines-manager.com/aircraft/show/89233029,3:00,14:44,400,"$944,723.00","$860,114.00","$2,150.29","$73,305.17"
EWR - SFO,54947197012,EWR-SFO-LAX 4,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/54947197012,https://www.airlines-manager.com/aircraft/show/89233030,12:15,23:59,400,"$944,723.00","$860,114.00","$2,150.29","$73,305.17"
EWR - SFO,54952417802,EWR-SFO-LAX 5,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/54952417802,https://www.airlines-manager.com/aircraft/show/89233027,14:15,1:59,400,"$944,723.00","$860,114.00","$2,150.29","$73,305.17"
EWR - SJC,54930654714,EWR-OAK-SJC 2,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/54930654714,https://www.airlines-manager.com/aircraft/show/104717242,0:00,11:59,310,"$732,935.00","$676,985.00","$2,183.82","$56,493.88"
EWR - SJC,54930654715,EWR-OAK-SJC 3,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/54930654715,https://www.airlines-manager.com/aircraft/show/104717241,2:00,13:59,310,"$732,935.00","$676,985.00","$2,183.82","$56,493.88"
EWR - SJC,54947196806,EWR-OAK-SJC 4,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/54947196806,https://www.airlines-manager.com/aircraft/show/104717240,10:30,22:29,310,"$732,935.00","$676,985.00","$2,183.82","$56,493.88"
EWR - SJC,54952417584,EWR-OAK-SJC 5,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/54952417584,https://www.airlines-manager.com/aircraft/show/104717239,13:00,0:59,310,"$732,935.00","$676,985.00","$2,183.82","$56,493.88"
EWR - SJC,54969516372,EWR-OAK-SJC 1,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/54969516372,https://www.airlines-manager.com/aircraft/show/104717243,22:00,9:59,310,"$732,935.00","$676,985.00","$2,183.82","$56,493.88"
EWR - SJU,54930654894,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/54930654894,https://www.airlines-manager.com/aircraft/show/106581304,0:30,8:44,320,"$526,498.00","$480,601.00","$1,501.88","$58,372.59"
EWR - SJU,54930654895,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/54930654895,https://www.airlines-manager.com/aircraft/show/106581307,2:00,10:14,320,"$526,498.00","$480,601.00","$1,501.88","$58,372.59"
EWR - SJU,54937424040,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/54937424040,https://www.airlines-manager.com/aircraft/show/86238754,7:00,15:14,320,"$526,498.00","$480,601.00","$1,501.88","$58,372.59"
EWR - SJU,54952417484,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/54952417484,https://www.airlines-manager.com/aircraft/show/106581306,13:00,21:14,320,"$526,498.00","$480,601.00","$1,501.88","$58,372.59"
EWR - SJU,54952417485,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/54952417485,https://www.airlines-manager.com/aircraft/show/106581305,14:30,22:44,320,"$526,498.00","$480,601.00","$1,501.88","$58,372.59"
EWR - SLC,54930654861,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/54930654861,https://www.airlines-manager.com/aircraft/show/87153196,0:15,9:59,310,"$611,536.00","$559,607.00","$1,805.18","$57,493.87"
EWR - SLC,54930654862,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/54930654862,https://www.airlines-manager.com/aircraft/show/90452833,0:15,9:59,310,"$611,536.00","$559,607.00","$1,805.18","$57,493.87"
EWR - SLC,54930654863,EWR-DEN-SLC 6 B,A319-100,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/54930654863,https://www.airlines-manager.com/aircraft/show/105223076,1:15,10:59,198,"$459,927.00","$418,300.00","$2,112.63","$42,976.03"
EWR - SLC,54942363078,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/54942363078,https://www.airlines-manager.com/aircraft/show/86270785,10:00,19:44,310,"$611,536.00","$559,607.00","$1,805.18","$57,493.87"
EWR - SLC,54947196925,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/54947196925,https://www.airlines-manager.com/aircraft/show/90452835,11:00,20:44,310,"$611,536.00","$559,607.00","$1,805.18","$57,493.87"
EWR - SLC,54965848491,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/54965848491,https://www.airlines-manager.com/aircraft/show/86270783,19:15,4:59,310,"$611,536.00","$559,607.00","$1,805.18","$57,493.87"
EWR - SMF,54930654705,EWR-SMF-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/54930654705,https://www.airlines-manager.com/aircraft/show/94889150,0:00,11:44,320,"$717,342.00","$658,895.00","$2,059.05","$56,155.82"
EWR - SMF,54930654706,EWR-SMF-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/54930654706,https://www.airlines-manager.com/aircraft/show/94889151,1:30,13:14,320,"$717,342.00","$658,895.00","$2,059.05","$56,155.82"
EWR - SMF,54930654707,EWR-SMF-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/54930654707,https://www.airlines-manager.com/aircraft/show/94889152,3:00,14:44,320,"$717,342.00","$658,895.00","$2,059.05","$56,155.82"
EWR - SMF,54947196941,EWR-SMF-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/54947196941,https://www.airlines-manager.com/aircraft/show/94889153,11:30,23:14,320,"$717,342.00","$658,895.00","$2,059.05","$56,155.82"
EWR - SMF,54952417640,EWR-SMF-ONT 5,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/54952417640,https://www.airlines-manager.com/aircraft/show/94889154,13:30,1:14,320,"$717,342.00","$658,895.00","$2,059.05","$56,155.82"
EWR - SNN,54947196816,EWR 56B-6 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/54947196816,https://www.airlines-manager.com/aircraft/show/94521248,10:45,23:59,748,"$2,079,388.00","$1,896,127.00","$2,534.93","$143,284.16"
EWR - SNN,54961494332,EWR 56B-5 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/54961494332,https://www.airlines-manager.com/aircraft/show/94521253,18:45,7:59,748,"$1,993,195.00","$1,836,021.00","$2,454.57","$138,742.14"
EWR - STL,54930654979,EWR-STL-PIT 3,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/54930654979,https://www.airlines-manager.com/aircraft/show/115400546,1:00,6:29,338,"$373,017.00","$342,022.00","$1,011.90","$62,374.83"
EWR - STL,54930654980,EWR-STL-PIT 2,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/54930654980,https://www.airlines-manager.com/aircraft/show/115400547,4:15,9:44,338,"$373,017.00","$342,022.00","$1,011.90","$62,374.83"
EWR - STL,54942363107,EWR-STL-PIT 1,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/54942363107,https://www.airlines-manager.com/aircraft/show/115400548,10:00,15:29,338,"$373,017.00","$342,022.00","$1,011.90","$62,374.83"
EWR - STL,54952417698,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/54952417698,https://www.airlines-manager.com/aircraft/show/98887257,14:00,19:29,112,"$163,314.00","$142,547.00","$1,272.74","$25,996.41"
EWR - STL,54956618128,EWR-STL-PIT 4,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/54956618128,https://www.airlines-manager.com/aircraft/show/115400545,16:15,21:44,338,"$373,017.00","$342,022.00","$1,011.90","$62,374.83"
EWR - STL,54969516449,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/54969516449,https://www.airlines-manager.com/aircraft/show/98887257,22:45,4:14,112,"$163,314.00","$142,547.00","$1,272.74","$25,996.41"
EWR - SYR,54930655125,EWR-TYS-GSO 1,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/54930655125,https://www.airlines-manager.com/aircraft/show/119220542,1:45,4:44,310,"$124,806.00","$106,202.00",$342.59,"$35,598.44"
EWR - SYR,54952417430,EWR-TYS-GSO 4,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/54952417430,https://www.airlines-manager.com/aircraft/show/119220545,13:00,15:59,310,"$124,806.00","$106,202.00",$342.59,"$35,598.44"
EWR - SYR,54961494187,EWR-TYS-GSO 3,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/54961494187,https://www.airlines-manager.com/aircraft/show/119220544,17:30,20:29,310,"$124,806.00","$106,202.00",$342.59,"$35,598.44"
EWR - SYR,54965848691,EWR-TYS-GSO 2,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/54965848691,https://www.airlines-manager.com/aircraft/show/119220543,21:15,0:14,310,"$124,806.00","$106,202.00",$342.59,"$35,598.44"
EWR - TLV,54930655303,EWR-TLV 2 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/54930655303,https://www.airlines-manager.com/aircraft/show/89124073,3:00,1:29,884,"$3,653,033.00","$3,333,684.00","$3,771.14","$148,273.57"
EWR - TLV,54965848674,EWR-TLV 1 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/54965848674,https://www.airlines-manager.com/aircraft/show/93429385,21:00,19:29,884,"$3,653,033.00","$3,333,684.00","$3,771.14","$148,273.57"
EWR - TPA,54930655539,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/54930655539,https://www.airlines-manager.com/aircraft/show/98379317,5:45,11:44,310,"$376,361.00","$341,180.00","$1,100.58","$57,021.73"
EWR - TPA,54947196817,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/54947196817,https://www.airlines-manager.com/aircraft/show/98379316,10:45,16:44,310,"$376,361.00","$341,180.00","$1,100.58","$57,021.73"
EWR - TPA,54952417607,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/54952417607,https://www.airlines-manager.com/aircraft/show/98379318,13:00,18:59,310,"$376,361.00","$341,180.00","$1,100.58","$57,021.73"
EWR - TPA,54956617964,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/54956617964,https://www.airlines-manager.com/aircraft/show/98379315,15:00,20:59,310,"$376,361.00","$341,180.00","$1,100.58","$57,021.73"
EWR - TPA,54971692234,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/54971692234,https://www.airlines-manager.com/aircraft/show/98379319,23:15,5:14,310,"$376,361.00","$341,180.00","$1,100.58","$57,021.73"
EWR - TUL,54930655156,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/54930655156,https://www.airlines-manager.com/aircraft/show/110044465,1:45,8:29,310,"$426,549.00","$392,448.00","$1,265.96","$58,284.36"
EWR - TUL,54930655157,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/54930655157,https://www.airlines-manager.com/aircraft/show/110044464,3:30,10:14,310,"$426,549.00","$392,448.00","$1,265.96","$58,284.36"
EWR - TUL,54952417474,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/54952417474,https://www.airlines-manager.com/aircraft/show/110044463,13:00,19:44,310,"$426,549.00","$392,448.00","$1,265.96","$58,284.36"
EWR - TUL,54956618147,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/54956618147,https://www.airlines-manager.com/aircraft/show/110113039,16:30,23:14,112,"$200,788.00","$178,211.00","$1,591.17","$26,466.98"
EWR - TUL,54961494328,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/54961494328,https://www.airlines-manager.com/aircraft/show/110044466,18:45,1:29,310,"$426,549.00","$392,448.00","$1,265.96","$58,284.36"
EWR - TUS,54930654888,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/54930654888,https://www.airlines-manager.com/aircraft/show/98379316,0:30,10:44,310,"$638,846.00","$590,752.00","$1,905.65","$57,728.21"
EWR - TUS,54930654889,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/54930654889,https://www.airlines-manager.com/aircraft/show/98379318,1:30,11:44,310,"$638,846.00","$590,752.00","$1,905.65","$57,728.21"
EWR - TUS,54930654890,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/54930654890,https://www.airlines-manager.com/aircraft/show/98379315,3:30,13:44,310,"$638,846.00","$590,752.00","$1,905.65","$57,728.21"
EWR - TUS,54952417608,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/54952417608,https://www.airlines-manager.com/aircraft/show/98379319,13:00,23:14,310,"$638,846.00","$590,752.00","$1,905.65","$57,728.21"
EWR - TUS,54965848518,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/54965848518,https://www.airlines-manager.com/aircraft/show/98379317,19:30,5:44,310,"$638,846.00","$590,752.00","$1,905.65","$57,728.21"
EWR - TYS,54930655295,EWR-TYS-GSO 2,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/54930655295,https://www.airlines-manager.com/aircraft/show/119220543,3:00,7:29,310,"$290,787.00","$265,936.00",$857.86,"$59,316.58"
EWR - TYS,54942363131,EWR-TYS-GSO 1,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/54942363131,https://www.airlines-manager.com/aircraft/show/119220542,10:00,14:29,310,"$290,787.00","$265,936.00",$857.86,"$59,316.58"
EWR - TYS,54961494322,EWR-TYS-GSO 4,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/54961494322,https://www.airlines-manager.com/aircraft/show/119220545,18:45,23:14,310,"$290,787.00","$265,936.00",$857.86,"$59,316.58"
EWR - TYS,54971692217,EWR-TYS-GSO 3,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/54971692217,https://www.airlines-manager.com/aircraft/show/119220544,23:15,3:44,310,"$290,787.00","$265,936.00",$857.86,"$59,316.58"
EWR - VCE,54930655305,EWR 84B-3  B2,777-300,https://www.airlines-manager.com/network/showline/49921914,https://www.airlines-manager.com/network/showflight/54930655305,https://www.airlines-manager.com/aircraft/show/117958697,3:00,20:14,852,"$2,715,388.00","$2,474,998.00","$2,904.93","$143,616.91"
EWR - VCE,54956617976,EWR 84B-6  B2,777-300,https://www.airlines-manager.com/network/showline/49921914,https://www.airlines-manager.com/network/showflight/54956617976,https://www.airlines-manager.com/aircraft/show/117958700,15:00,8:14,819,"$2,632,493.00","$2,400,957.00","$2,931.57","$139,320.52"
EWR - YEG,54930654870,EWR-YEG-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/54930654870,https://www.airlines-manager.com/aircraft/show/98936170,0:15,10:14,320,"$633,835.00","$581,441.00","$1,817.00","$58,241.17"
EWR - YEG,54930654871,EWR-YEG-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/54930654871,https://www.airlines-manager.com/aircraft/show/98936171,2:15,12:14,320,"$633,835.00","$581,441.00","$1,817.00","$58,241.17"
EWR - YEG,54947196839,EWR-YEG-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/54947196839,https://www.airlines-manager.com/aircraft/show/98936168,11:00,20:59,320,"$633,835.00","$581,441.00","$1,817.00","$58,241.17"
EWR - YEG,54952417413,EWR-YEG-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/54952417413,https://www.airlines-manager.com/aircraft/show/98936169,12:30,22:29,320,"$633,835.00","$581,441.00","$1,817.00","$58,241.17"
EWR - YEG,54969516364,EWR-YEG-BFF 5 B,A319-100,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/54969516364,https://www.airlines-manager.com/aircraft/show/115493369,22:00,7:59,198,"$473,556.00","$435,398.00","$2,198.98","$43,612.49"
EWR - YOW,54942363066,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/54942363066,https://www.airlines-manager.com/aircraft/show/106581304,9:30,12:59,320,"$170,585.00","$145,254.00",$453.92,"$41,699.71"
EWR - YOW,54947196922,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/54947196922,https://www.airlines-manager.com/aircraft/show/106581307,11:00,14:29,320,"$170,585.00","$145,254.00",$453.92,"$41,699.71"
EWR - YOW,54961494334,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/54961494334,https://www.airlines-manager.com/aircraft/show/86238754,18:45,22:14,320,"$170,585.00","$145,254.00",$453.92,"$41,699.71"
EWR - YOW,54965848693,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/54965848693,https://www.airlines-manager.com/aircraft/show/106581306,21:15,0:44,320,"$170,585.00","$145,254.00",$453.92,"$41,699.71"
EWR - YOW,54969516458,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/54969516458,https://www.airlines-manager.com/aircraft/show/106581305,22:45,2:14,290,"$160,847.00","$135,781.00",$468.21,"$38,980.19"
EWR - YUL,54942363060,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/54942363060,https://www.airlines-manager.com/aircraft/show/106581306,9:30,12:59,320,"$174,011.00","$145,853.00",$455.79,"$41,871.67"
EWR - YUL,54947196856,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/54947196856,https://www.airlines-manager.com/aircraft/show/106581305,11:00,14:29,320,"$174,011.00","$145,853.00",$455.79,"$41,871.67"
EWR - YUL,54956618042,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/54956618042,https://www.airlines-manager.com/aircraft/show/86238754,15:15,18:44,320,"$174,011.00","$145,853.00",$455.79,"$41,871.67"
EWR - YUL,54965848657,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/54965848657,https://www.airlines-manager.com/aircraft/show/106581304,21:00,0:29,320,"$174,011.00","$145,853.00",$455.79,"$41,871.67"
EWR - YUL,54969516432,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/54969516432,https://www.airlines-manager.com/aircraft/show/106581307,22:30,1:59,320,"$174,011.00","$145,853.00",$455.79,"$41,871.67"
EWR - YVR,54930654708,EWR-YVR-YYC 1,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/54930654708,https://www.airlines-manager.com/aircraft/show/113681636,0:00,11:14,400,"$908,415.00","$836,037.00","$2,090.09","$74,424.66"
EWR - YVR,54930654709,EWR-YVR-YYC 2,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/54930654709,https://www.airlines-manager.com/aircraft/show/113681637,1:30,12:44,400,"$908,415.00","$836,037.00","$2,090.09","$74,424.66"
EWR - YVR,54930654710,EWR-YVR-YYC 3,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/54930654710,https://www.airlines-manager.com/aircraft/show/113681638,3:00,14:14,400,"$908,415.00","$836,037.00","$2,090.09","$74,424.66"
EWR - YVR,54947196938,EWR-YVR-YYC 4,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/54947196938,https://www.airlines-manager.com/aircraft/show/113681639,11:15,22:29,400,"$908,415.00","$836,037.00","$2,090.09","$74,424.66"
EWR - YVR,54952417422,EWR-YVR-YYC 5,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/54952417422,https://www.airlines-manager.com/aircraft/show/113681640,12:45,23:59,400,"$908,415.00","$836,037.00","$2,090.09","$74,424.66"
EWR - YYC,54930655040,EWR-YVR-YYC 4,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/54930655040,https://www.airlines-manager.com/aircraft/show/113681639,1:30,11:14,400,"$787,708.00","$724,155.00","$1,810.39","$74,399.49"
EWR - YYC,54930655041,EWR-YVR-YYC 5,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/54930655041,https://www.airlines-manager.com/aircraft/show/113681640,3:00,12:44,400,"$787,708.00","$724,155.00","$1,810.39","$74,399.49"
EWR - YYC,54947196940,EWR-YVR-YYC 1,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/54947196940,https://www.airlines-manager.com/aircraft/show/113681636,11:15,20:59,400,"$787,708.00","$724,155.00","$1,810.39","$74,399.49"
EWR - YYC,54952417425,EWR-YVR-YYC 2,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/54952417425,https://www.airlines-manager.com/aircraft/show/113681637,12:45,22:29,400,"$787,708.00","$724,155.00","$1,810.39","$74,399.49"
EWR - YYC,54952417426,EWR-YVR-YYC 3,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/54952417426,https://www.airlines-manager.com/aircraft/show/113681638,14:15,23:59,400,"$787,708.00","$724,155.00","$1,810.39","$74,399.49"
EWR - YYZ,54930655238,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/54930655238,https://www.airlines-manager.com/aircraft/show/92003922,2:15,5:44,320,"$179,782.00","$145,444.00",$454.51,"$41,754.26"
EWR - YYZ,54937424067,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/54937424067,https://www.airlines-manager.com/aircraft/show/92003921,7:30,10:59,320,"$179,782.00","$145,444.00",$454.51,"$41,754.26"
EWR - YYZ,54942363120,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/54942363120,https://www.airlines-manager.com/aircraft/show/92003924,10:00,13:29,320,"$179,782.00","$145,444.00",$454.51,"$41,754.26"
EWR - YYZ,54952417748,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/54952417748,https://www.airlines-manager.com/aircraft/show/92003925,14:00,17:29,320,"$179,782.00","$145,444.00",$454.51,"$41,754.26"
EWR - YYZ,54961494284,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/54961494284,https://www.airlines-manager.com/aircraft/show/92003923,18:15,21:44,320,"$179,782.00","$145,444.00",$454.51,"$41,754.26"
EWR - ZRH,54937424082,EWR 84A-6 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/54937424082,https://www.airlines-manager.com/aircraft/show/90656552,7:45,23:59,852,"$2,628,800.00","$2,386,111.00","$2,800.60","$146,988.36"
EWR - ZRH,54965848576,EWR 84A-7 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/54965848576,https://www.airlines-manager.com/aircraft/show/94521249,20:00,12:14,852,"$2,628,800.00","$2,386,111.00","$2,800.60","$146,988.36"
EWR - MKE,54562128355,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/54562128355,https://www.airlines-manager.com/aircraft/show/104610408,14:00,18:59,310,"$315,504.00","$287,619.00",$927.80,"$57,716.19"
EWR - MKE,54571726818,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/54571726818,https://www.airlines-manager.com/aircraft/show/104610409,19:15,0:14,310,"$315,504.00","$287,619.00",$927.80,"$57,716.19"
EWR - MKE,54580945205,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/54580945205,https://www.airlines-manager.com/aircraft/show/104610410,23:15,4:14,310,"$315,504.00","$287,619.00",$927.80,"$57,716.19"
EWR - MSN,54536069816,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/54536069816,https://www.airlines-manager.com/aircraft/show/116042859,2:30,7:44,310,"$330,385.00","$303,141.00",$977.87,"$57,925.03"
EWR - MSN,54551622449,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/54551622449,https://www.airlines-manager.com/aircraft/show/116042860,8:45,13:59,310,"$330,385.00","$303,141.00",$977.87,"$57,925.03"
EWR - MSN,54551622450,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/54551622450,https://www.airlines-manager.com/aircraft/show/116042861,10:00,15:14,310,"$330,385.00","$303,141.00",$977.87,"$57,925.03"
EWR - MSN,54575909615,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/54575909615,https://www.airlines-manager.com/aircraft/show/116042862,21:00,2:14,310,"$330,385.00","$303,141.00",$977.87,"$57,925.03"
EWR - MSO,54536069640,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/54536069640,https://www.airlines-manager.com/aircraft/show/107161238,1:00,10:59,310,"$615,656.00","$570,709.00","$1,841.00","$57,166.18"
EWR - MSO,54556941028,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/54556941028,https://www.airlines-manager.com/aircraft/show/107161240,11:00,20:59,310,"$615,656.00","$570,709.00","$1,841.00","$57,166.18"
EWR - MSO,54571726652,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/54571726652,https://www.airlines-manager.com/aircraft/show/107161239,17:45,3:44,310,"$615,656.00","$570,709.00","$1,841.00","$57,166.18"
EWR - MSO,54575909756,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/54575909756,https://www.airlines-manager.com/aircraft/show/107161241,22:00,7:59,310,"$615,656.00","$570,709.00","$1,841.00","$57,166.18"
EWR - MSP,54536069993,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/54536069993,https://www.airlines-manager.com/aircraft/show/86270783,5:00,10:59,310,"$374,578.00","$335,343.00","$1,081.75","$56,046.18"
EWR - MSP,54551622540,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/54551622540,https://www.airlines-manager.com/aircraft/show/90452833,10:00,15:59,310,"$374,578.00","$335,343.00","$1,081.75","$56,046.18"
EWR - MSP,54571726713,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/54571726713,https://www.airlines-manager.com/aircraft/show/87153196,18:15,0:14,310,"$374,578.00","$335,343.00","$1,081.75","$56,046.18"
EWR - MSP,54571726714,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/54571726714,https://www.airlines-manager.com/aircraft/show/86270785,19:45,1:44,310,"$374,578.00","$335,343.00","$1,081.75","$56,046.18"
EWR - MSP,54575909594,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/54575909594,https://www.airlines-manager.com/aircraft/show/90452835,20:45,2:44,310,"$374,578.00","$335,343.00","$1,081.75","$56,046.18"
EWR - MSY,54536069899,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/54536069899,https://www.airlines-manager.com/aircraft/show/90717079,3:15,9:59,310,"$414,563.00","$379,812.00","$1,225.20","$56,407.72"
EWR - MSY,54551622697,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/54551622697,https://www.airlines-manager.com/aircraft/show/90717077,10:00,16:44,310,"$414,563.00","$379,812.00","$1,225.20","$56,407.72"
EWR - MSY,54556940922,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/54556940922,https://www.airlines-manager.com/aircraft/show/90717076,11:00,17:44,310,"$414,563.00","$379,812.00","$1,225.20","$56,407.72"
EWR - MSY,54571726687,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/54571726687,https://www.airlines-manager.com/aircraft/show/90717078,18:00,0:44,310,"$414,563.00","$379,812.00","$1,225.20","$56,407.72"
EWR - MSY,54575909494,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/54575909494,https://www.airlines-manager.com/aircraft/show/95950199,20:00,2:44,310,"$414,563.00","$379,812.00","$1,225.20","$56,407.72"
EWR - NAS,54536069998,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/54536069998,https://www.airlines-manager.com/aircraft/show/98379319,5:15,11:44,310,"$395,405.00","$362,404.00","$1,169.05","$55,897.79"
EWR - NAS,54556941197,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/54556941197,https://www.airlines-manager.com/aircraft/show/98379317,13:00,19:29,310,"$395,405.00","$362,404.00","$1,169.05","$55,897.79"
EWR - NAS,54571726696,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/54571726696,https://www.airlines-manager.com/aircraft/show/98379316,18:00,0:29,310,"$395,405.00","$362,404.00","$1,169.05","$55,897.79"
EWR - NAS,54571726697,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/54571726697,https://www.airlines-manager.com/aircraft/show/98379318,19:00,1:29,310,"$395,405.00","$362,404.00","$1,169.05","$55,897.79"
EWR - OAK,54536069621,EWR-OAK-SJC 5,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/54536069621,https://www.airlines-manager.com/aircraft/show/104717239,1:00,12:59,310,"$735,917.00","$680,343.00","$2,194.65","$56,774.10"
EWR - OAK,54551622554,EWR-OAK-SJC 1,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/54551622554,https://www.airlines-manager.com/aircraft/show/104717243,10:00,21:59,310,"$735,917.00","$680,343.00","$2,194.65","$56,774.10"
EWR - OAK,54556941108,EWR-OAK-SJC 2,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/54556941108,https://www.airlines-manager.com/aircraft/show/104717242,12:00,23:59,310,"$735,917.00","$680,343.00","$2,194.65","$56,774.10"
EWR - OAK,54562128354,EWR-OAK-SJC 3,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/54562128354,https://www.airlines-manager.com/aircraft/show/104717241,14:00,1:59,310,"$735,917.00","$680,343.00","$2,194.65","$56,774.10"
EWR - OAK,54580945068,EWR-OAK-SJC 4,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/54580945068,https://www.airlines-manager.com/aircraft/show/104717240,22:30,10:29,310,"$735,917.00","$680,343.00","$2,194.65","$56,774.10"
EWR - OKC,54536069731,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/54536069731,https://www.airlines-manager.com/aircraft/show/107161239,3:45,10:59,310,"$460,963.00","$425,234.00","$1,371.72","$58,788.11"
EWR - OKC,54545804752,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/54545804752,https://www.airlines-manager.com/aircraft/show/107161241,8:00,15:14,310,"$460,963.00","$425,234.00","$1,371.72","$58,788.11"
EWR - OKC,54556940947,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/54556940947,https://www.airlines-manager.com/aircraft/show/107161238,11:00,18:14,310,"$460,963.00","$425,234.00","$1,371.72","$58,788.11"
EWR - OKC,54575909621,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/54575909621,https://www.airlines-manager.com/aircraft/show/107161240,21:00,4:14,310,"$460,963.00","$425,234.00","$1,371.72","$58,788.11"
EWR - OMA,54536069825,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/54536069825,https://www.airlines-manager.com/aircraft/show/104418460,2:30,8:59,310,"$401,849.00","$368,874.00","$1,189.92","$56,895.73"
EWR - OMA,54545804730,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/54545804730,https://www.airlines-manager.com/aircraft/show/104418463,7:30,13:59,310,"$401,849.00","$368,874.00","$1,189.92","$56,895.73"
EWR - OMA,54551622557,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/54551622557,https://www.airlines-manager.com/aircraft/show/104418462,10:00,16:29,310,"$401,849.00","$368,874.00","$1,189.92","$56,895.73"
EWR - OMA,54567120424,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/54567120424,https://www.airlines-manager.com/aircraft/show/104418461,17:00,23:29,310,"$401,849.00","$368,874.00","$1,189.92","$56,895.73"
EWR - PBI,54536069709,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/54536069709,https://www.airlines-manager.com/aircraft/show/104418463,1:30,7:29,310,"$379,359.00","$346,918.00","$1,119.09","$57,980.72"
EWR - PBI,54536069710,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/54536069710,https://www.airlines-manager.com/aircraft/show/104418462,3:00,8:59,310,"$379,359.00","$346,918.00","$1,119.09","$57,980.72"
EWR - PBI,54556940973,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/54556940973,https://www.airlines-manager.com/aircraft/show/104418461,11:00,16:59,310,"$379,359.00","$346,918.00","$1,119.09","$57,980.72"
EWR - PBI,54575909587,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/54575909587,https://www.airlines-manager.com/aircraft/show/104418460,20:30,2:29,310,"$379,359.00","$346,918.00","$1,119.09","$57,980.72"
EWR - PVD,54536069718,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/54536069718,https://www.airlines-manager.com/aircraft/show/110044466,1:30,4:14,310,"$98,927.00","$81,292.00",$262.23,"$29,740.98"
EWR - PVD,54551622493,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/54551622493,https://www.airlines-manager.com/aircraft/show/110044465,9:15,11:59,310,"$98,927.00","$81,292.00",$262.23,"$29,740.98"
EWR - PVD,54556940949,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/54556940949,https://www.airlines-manager.com/aircraft/show/110044464,11:00,13:44,310,"$98,927.00","$81,292.00",$262.23,"$29,740.98"
EWR - PVD,54571726849,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/54571726849,https://www.airlines-manager.com/aircraft/show/110044463,19:45,22:29,310,"$98,927.00","$81,292.00",$262.23,"$29,740.98"
EWR - PWM,54536069973,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/54536069973,https://www.airlines-manager.com/aircraft/show/110044463,4:30,7:44,310,"$154,039.00","$134,989.00",$435.45,"$41,749.18"
EWR - PWM,54556940950,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/54556940950,https://www.airlines-manager.com/aircraft/show/110044466,11:00,14:14,310,"$154,039.00","$134,989.00",$435.45,"$41,749.18"
EWR - PWM,54571726665,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/54571726665,https://www.airlines-manager.com/aircraft/show/110044465,18:00,21:14,310,"$154,039.00","$134,989.00",$435.45,"$41,749.18"
EWR - RAP,54536069421,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/54536069421,https://www.airlines-manager.com/aircraft/show/116042860,0:00,7:59,310,"$495,290.00","$458,274.00","$1,478.30","$57,403.84"
EWR - RAP,54536069422,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/54536069422,https://www.airlines-manager.com/aircraft/show/116042861,1:15,9:14,310,"$495,290.00","$458,274.00","$1,478.30","$57,403.84"
EWR - RAP,54556941187,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/54556941187,https://www.airlines-manager.com/aircraft/show/116042862,13:00,20:59,310,"$495,290.00","$458,274.00","$1,478.30","$57,403.84"
EWR - RAP,54571726732,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/54571726732,https://www.airlines-manager.com/aircraft/show/116042859,18:30,2:29,310,"$495,290.00","$458,274.00","$1,478.30","$57,403.84"
EWR - ROC,54551622538,EWR-TYS-GSO 4,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/54551622538,https://www.airlines-manager.com/aircraft/show/119220545,10:00,12:59,310,"$134,976.00","$115,966.00",$374.08,"$38,871.28"
EWR - ROC,54562128380,EWR-TYS-GSO 3,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/54562128380,https://www.airlines-manager.com/aircraft/show/119220544,14:30,17:29,310,"$134,976.00","$115,966.00",$374.08,"$38,871.28"
EWR - ROC,54571726711,EWR-TYS-GSO 2,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/54571726711,https://www.airlines-manager.com/aircraft/show/119220543,18:15,21:14,310,"$134,976.00","$115,966.00",$374.08,"$38,871.28"
EWR - ROC,54580945145,EWR-TYS-GSO 1,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/54580945145,https://www.airlines-manager.com/aircraft/show/119220542,22:45,1:44,310,"$134,976.00","$115,966.00",$374.08,"$38,871.28"
EWR - SAV,54551622477,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/54551622477,https://www.airlines-manager.com/aircraft/show/108834810,9:00,13:59,310,"$307,563.00","$281,428.00",$907.83,"$56,473.85"
EWR - SAV,54556940954,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/54556940954,https://www.airlines-manager.com/aircraft/show/108834809,11:00,15:59,310,"$307,563.00","$281,428.00",$907.83,"$56,473.85"
EWR - SAV,54571726692,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/54571726692,https://www.airlines-manager.com/aircraft/show/108834808,18:00,22:59,310,"$307,563.00","$281,428.00",$907.83,"$56,473.85"
EWR - SDF,54536069941,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/54536069941,https://www.airlines-manager.com/aircraft/show/86270787,4:00,8:29,310,"$295,460.00","$268,367.00",$865.70,"$59,858.81"
EWR - SDF,54545804777,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/54545804777,https://www.airlines-manager.com/aircraft/show/90452834,8:15,12:44,310,"$295,460.00","$268,367.00",$865.70,"$59,858.81"
EWR - SDF,54562128449,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/54562128449,https://www.airlines-manager.com/aircraft/show/86270784,15:00,19:29,310,"$295,460.00","$268,367.00",$865.70,"$59,858.81"
EWR - SDF,54571726720,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/54571726720,https://www.airlines-manager.com/aircraft/show/86270786,18:15,22:44,310,"$295,460.00","$268,367.00",$865.70,"$59,858.81"
EWR - SJC,54536069432,EWR-OAK-SJC 2,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/54536069432,https://www.airlines-manager.com/aircraft/show/104717242,0:00,11:59,310,"$732,935.00","$676,985.00","$2,183.82","$56,493.88"
EWR - SJC,54536069433,EWR-OAK-SJC 3,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/54536069433,https://www.airlines-manager.com/aircraft/show/104717241,2:00,13:59,310,"$732,935.00","$676,985.00","$2,183.82","$56,493.88"
EWR - SJC,54551622711,EWR-OAK-SJC 4,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/54551622711,https://www.airlines-manager.com/aircraft/show/104717240,10:30,22:29,310,"$732,935.00","$676,985.00","$2,183.82","$56,493.88"
EWR - SJC,54556941169,EWR-OAK-SJC 5,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/54556941169,https://www.airlines-manager.com/aircraft/show/104717239,13:00,0:59,310,"$732,935.00","$676,985.00","$2,183.82","$56,493.88"
EWR - SJC,54575909716,EWR-OAK-SJC 1,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/54575909716,https://www.airlines-manager.com/aircraft/show/104717243,22:00,9:59,310,"$732,935.00","$676,985.00","$2,183.82","$56,493.88"
EWR - SLC,54536069483,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/54536069483,https://www.airlines-manager.com/aircraft/show/90452833,0:15,9:59,310,"$611,536.00","$559,607.00","$1,805.18","$57,493.87"
EWR - SLC,54536069484,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/54536069484,https://www.airlines-manager.com/aircraft/show/87153196,0:15,9:59,310,"$611,536.00","$559,607.00","$1,805.18","$57,493.87"
EWR - SLC,54551622515,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/54551622515,https://www.airlines-manager.com/aircraft/show/86270785,10:00,19:44,310,"$611,536.00","$559,607.00","$1,805.18","$57,493.87"
EWR - SLC,54556940902,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/54556940902,https://www.airlines-manager.com/aircraft/show/90452835,11:00,20:44,310,"$611,536.00","$559,607.00","$1,805.18","$57,493.87"
EWR - SLC,54571726810,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/54571726810,https://www.airlines-manager.com/aircraft/show/86270783,19:15,4:59,310,"$611,536.00","$559,607.00","$1,805.18","$57,493.87"
EWR - SYR,54536069721,EWR-TYS-GSO 1,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/54536069721,https://www.airlines-manager.com/aircraft/show/119220542,1:45,4:44,310,"$124,806.00","$106,202.00",$342.59,"$35,598.44"
EWR - SYR,54556941137,EWR-TYS-GSO 4,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/54556941137,https://www.airlines-manager.com/aircraft/show/119220545,13:00,15:59,310,"$124,806.00","$106,202.00",$342.59,"$35,598.44"
EWR - SYR,54567120442,EWR-TYS-GSO 3,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/54567120442,https://www.airlines-manager.com/aircraft/show/119220544,17:30,20:29,310,"$124,806.00","$106,202.00",$342.59,"$35,598.44"
EWR - SYR,54575909661,EWR-TYS-GSO 2,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/54575909661,https://www.airlines-manager.com/aircraft/show/119220543,21:15,0:14,310,"$124,806.00","$106,202.00",$342.59,"$35,598.44"
EWR - TPA,54545804619,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/54545804619,https://www.airlines-manager.com/aircraft/show/98379317,5:45,11:44,310,"$376,361.00","$341,180.00","$1,100.58","$57,021.73"
EWR - TPA,54556940891,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/54556940891,https://www.airlines-manager.com/aircraft/show/98379316,10:45,16:44,310,"$376,361.00","$341,180.00","$1,100.58","$57,021.73"
EWR - TPA,54556940892,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/54556940892,https://www.airlines-manager.com/aircraft/show/98379318,13:00,18:59,310,"$376,361.00","$341,180.00","$1,100.58","$57,021.73"
EWR - TPA,54562128424,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/54562128424,https://www.airlines-manager.com/aircraft/show/98379315,15:00,20:59,310,"$376,361.00","$341,180.00","$1,100.58","$57,021.73"
EWR - TPA,54580945221,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/54580945221,https://www.airlines-manager.com/aircraft/show/98379319,23:15,5:14,310,"$376,361.00","$341,180.00","$1,100.58","$57,021.73"
EWR - TUL,54536069747,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/54536069747,https://www.airlines-manager.com/aircraft/show/110044465,1:45,8:29,310,"$426,549.00","$392,448.00","$1,265.96","$58,284.36"
EWR - TUL,54536069748,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/54536069748,https://www.airlines-manager.com/aircraft/show/110044464,3:30,10:14,310,"$426,549.00","$392,448.00","$1,265.96","$58,284.36"
EWR - TUL,54556941147,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/54556941147,https://www.airlines-manager.com/aircraft/show/110044463,13:00,19:44,310,"$426,549.00","$392,448.00","$1,265.96","$58,284.36"
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
HNL - AKL,54956618077,HNL 84B-2 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/54956618077,https://www.airlines-manager.com/aircraft/show/96807092,16:00,9:59,832,"$2,903,167.00","$2,645,977.00","$3,180.26","$147,134.96"
HNL - AKL,54969516480,HNL 84B-6 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/54969516480,https://www.airlines-manager.com/aircraft/show/96807088,23:00,16:59,832,"$2,885,772.00","$2,634,538.00","$3,166.51","$146,498.87"
HNL - ATL,54930655483,HNL 56B-2 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/54930655483,https://www.airlines-manager.com/aircraft/show/109187499,4:45,22:44,592,"$2,190,898.00","$2,005,043.00","$3,386.90","$111,494.51"
HNL - ATL,54956618118,HNL 56B-4 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/54956618118,https://www.airlines-manager.com/aircraft/show/109187501,16:00,9:59,592,"$2,190,898.00","$2,005,043.00","$3,386.90","$111,494.51"
HNL - ATL,54969516466,HNL 56B-2 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/54969516466,https://www.airlines-manager.com/aircraft/show/109187499,22:45,16:44,592,"$2,190,898.00","$2,005,043.00","$3,386.90","$111,494.51"
HNL - BNE,54930655441,HNL 84B-6 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/54930655441,https://www.airlines-manager.com/aircraft/show/96807088,4:00,22:59,832,"$3,045,822.00","$2,776,973.00","$3,337.71","$146,284.79"
HNL - BNE,54942363156,HNL 84B-3 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/54942363156,https://www.airlines-manager.com/aircraft/show/96807091,10:00,4:59,832,"$3,027,379.00","$2,764,876.00","$3,323.17","$145,647.55"
HNL - BOS,54930654696,HNL 56E-6 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/54930654696,https://www.airlines-manager.com/aircraft/show/117414505,0:00,19:59,592,"$2,395,125.00","$2,235,673.00","$3,776.47","$111,876.88"
HNL - BOS,54942362979,HNL 56E-1 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/54942362979,https://www.airlines-manager.com/aircraft/show/117414500,8:30,4:29,592,"$2,395,125.00","$2,235,673.00","$3,776.47","$111,876.88"
HNL - BOS,54942362980,HNL 56E-4 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/54942362980,https://www.airlines-manager.com/aircraft/show/117414503,10:00,5:59,592,"$2,395,125.00","$2,235,673.00","$3,776.47","$111,876.88"
HNL - BWI,54930655247,HNL 56F-4 B,787-10,https://www.airlines-manager.com/network/showline/50049284,https://www.airlines-manager.com/network/showflight/54930655247,https://www.airlines-manager.com/aircraft/show/118383854,2:30,21:44,592,"$2,281,246.00","$2,130,503.00","$3,598.82","$110,771.39"
HNL - BWI,54947196950,HNL 56F-5 B,787-10,https://www.airlines-manager.com/network/showline/50049284,https://www.airlines-manager.com/network/showflight/54947196950,https://www.airlines-manager.com/aircraft/show/118383855,11:45,6:59,592,"$2,281,246.00","$2,130,503.00","$3,598.82","$110,771.39"
HNL - BWI,54961494017,HNL 56F-1 B,787-10,https://www.airlines-manager.com/network/showline/50049284,https://www.airlines-manager.com/network/showflight/54961494017,https://www.airlines-manager.com/aircraft/show/118383851,17:00,12:14,585,"$2,264,100.00","$2,114,205.00","$3,614.03","$109,924.00"
HNL - CLT,54930655472,HNL 56D-3 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/54930655472,https://www.airlines-manager.com/aircraft/show/112066134,4:30,23:14,592,"$2,250,989.00","$2,095,290.00","$3,539.34","$111,848.22"
HNL - CLT,54930655474,HNL 56D-5 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/54930655474,https://www.airlines-manager.com/aircraft/show/112066136,5:30,0:14,592,"$2,250,989.00","$2,095,290.00","$3,539.34","$111,848.22"
HNL - CLT,54971692223,HNL 56D-3 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/54971692223,https://www.airlines-manager.com/aircraft/show/112066134,23:15,17:59,592,"$2,250,989.00","$2,095,290.00","$3,539.34","$111,848.22"
HNL - CXI,54930655527,HNL-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/54930655527,https://www.airlines-manager.com/aircraft/show/90717080,5:30,12:44,388,"$491,949.00","$461,441.00","$1,189.28","$63,793.69"
HNL - CXI,54956617955,HNL-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/54956617955,https://www.airlines-manager.com/aircraft/show/90717080,15:00,22:14,388,"$491,949.00","$461,441.00","$1,189.28","$63,793.69"
HNL - CXI,54969516403,HNL-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/54969516403,https://www.airlines-manager.com/aircraft/show/90717080,22:15,5:29,388,"$491,949.00","$461,441.00","$1,189.28","$63,793.69"
HNL - DEN,54937424031,HNL 56F-6 B,787-10,https://www.airlines-manager.com/network/showline/43762939,https://www.airlines-manager.com/network/showflight/54937424031,https://www.airlines-manager.com/aircraft/show/118383856,7:00,20:59,592,"$1,705,342.00","$1,560,550.00","$2,636.06","$111,600.72"
HNL - DEN,54961494016,HNL 56F-2 B,787-10,https://www.airlines-manager.com/network/showline/43762939,https://www.airlines-manager.com/network/showflight/54961494016,https://www.airlines-manager.com/aircraft/show/118383852,17:00,6:59,592,"$1,705,342.00","$1,560,550.00","$2,636.06","$111,600.72"
HNL - DEN,54969516354,HNL 56F-4 B,787-10,https://www.airlines-manager.com/network/showline/43762939,https://www.airlines-manager.com/network/showflight/54969516354,https://www.airlines-manager.com/aircraft/show/118383854,21:45,11:44,592,"$1,705,342.00","$1,560,550.00","$2,636.06","$111,600.72"
HNL - DFW,54930655464,HNL 56E-2 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/54930655464,https://www.airlines-manager.com/aircraft/show/117414501,4:30,19:59,592,"$1,884,682.00","$1,733,298.00","$2,927.87","$111,946.05"
HNL - DFW,54961494013,HNL 56E-7 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/54961494013,https://www.airlines-manager.com/aircraft/show/117414506,17:00,8:29,592,"$1,884,682.00","$1,733,298.00","$2,927.87","$111,946.05"
HNL - DFW,54961494014,HNL 56E-3 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/54961494014,https://www.airlines-manager.com/aircraft/show/117414502,18:30,9:59,592,"$1,884,682.00","$1,733,298.00","$2,927.87","$111,946.05"
HNL - DTW,54937423962,HNL 56E-5 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/54937423962,https://www.airlines-manager.com/aircraft/show/117414504,6:00,23:59,592,"$2,148,777.00","$1,998,982.00","$3,376.66","$111,157.48"
HNL - DTW,54965848560,HNL 56E-2 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/54965848560,https://www.airlines-manager.com/aircraft/show/117414501,20:00,13:59,592,"$2,148,777.00","$1,998,982.00","$3,376.66","$111,157.48"
HNL - DTW,54965848561,HNL 56E-6 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/54965848561,https://www.airlines-manager.com/aircraft/show/117414505,20:00,13:59,592,"$2,148,777.00","$1,998,982.00","$3,376.66","$111,157.48"
HNL - EWR,54930655456,HNL 56A-7 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/54930655456,https://www.airlines-manager.com/aircraft/show/95351586,4:15,23:59,592,"$2,361,246.00","$2,199,331.00","$3,715.09","$111,452.58"
HNL - EWR,54937423958,HNL 56A-6 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/54937423958,https://www.airlines-manager.com/aircraft/show/95351587,6:00,1:44,592,"$2,361,246.00","$2,199,331.00","$3,715.09","$111,452.58"
HNL - EWR,54965848524,HNL 56A-3 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/54965848524,https://www.airlines-manager.com/aircraft/show/95351590,19:45,15:29,592,"$2,361,246.00","$2,199,331.00","$3,715.09","$111,452.58"
HNL - GUM,54930654716,HNL-GUM,A321neo,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/54930654716,https://www.airlines-manager.com/aircraft/show/115400544,0:00,16:44,338,"$1,120,384.00","$1,057,325.00","$3,128.18","$63,186.75"
HNL - GUM,54930654717,HNL 84A-3 F,777-300,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/54930654717,https://www.airlines-manager.com/aircraft/show/95818924,4:45,20:29,832,"$2,549,287.00","$2,348,860.00","$2,823.15","$149,291.95"
HNL - IAD,54930655330,HNL 56C-3 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/54930655330,https://www.airlines-manager.com/aircraft/show/111639415,3:15,22:14,592,"$2,267,245.00","$2,114,518.00","$3,571.82","$111,388.13"
HNL - IAD,54942363054,HNL 56C-5 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/54942363054,https://www.airlines-manager.com/aircraft/show/111639417,9:15,4:14,592,"$2,267,245.00","$2,114,518.00","$3,571.82","$111,388.13"
HNL - IAD,54965848584,HNL 56C-7 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/54965848584,https://www.airlines-manager.com/aircraft/show/111639419,20:00,14:59,592,"$2,267,245.00","$2,114,518.00","$3,571.82","$111,388.13"
HNL - IAH,54930654694,HNL 56A-1 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/54930654694,https://www.airlines-manager.com/aircraft/show/95351592,0:00,15:59,592,"$1,925,971.00","$1,785,660.00","$3,016.32","$111,720.13"
HNL - IAH,54930654695,HNL 56A-3 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/54930654695,https://www.airlines-manager.com/aircraft/show/95351590,3:45,19:44,592,"$1,925,971.00","$1,785,660.00","$3,016.32","$111,720.13"
HNL - IAH,54956618110,HNL 56A-1 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/54956618110,https://www.airlines-manager.com/aircraft/show/95351592,16:00,7:59,592,"$1,925,971.00","$1,785,660.00","$3,016.32","$111,720.13"
HNL - ITO,54930655075,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/54930655075,https://www.airlines-manager.com/aircraft/show/94803593,1:45,4:44,170,"$77,005.00","$66,478.00",$391.05,"$22,283.13"
HNL - ITO,54930655076,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/54930655076,https://www.airlines-manager.com/aircraft/show/94803596,3:15,6:14,170,"$77,005.00","$66,478.00",$391.05,"$22,283.13"
HNL - ITO,54937423984,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/54937423984,https://www.airlines-manager.com/aircraft/show/94803595,6:00,8:59,170,"$77,005.00","$66,478.00",$391.05,"$22,283.13"
HNL - ITO,54942363063,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/54942363063,https://www.airlines-manager.com/aircraft/show/94803594,9:30,12:29,170,"$77,005.00","$66,478.00",$391.05,"$22,283.13"
HNL - ITO,54956618031,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/54956618031,https://www.airlines-manager.com/aircraft/show/94803593,15:00,17:59,170,"$77,005.00","$66,478.00",$391.05,"$22,283.13"
HNL - ITO,54956618032,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/54956618032,https://www.airlines-manager.com/aircraft/show/94803596,16:30,19:29,170,"$77,005.00","$66,478.00",$391.05,"$22,283.13"
HNL - ITO,54965848501,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/54965848501,https://www.airlines-manager.com/aircraft/show/94803595,19:15,22:14,170,"$77,005.00","$66,478.00",$391.05,"$22,283.13"
HNL - ITO,54969516448,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/54969516448,https://www.airlines-manager.com/aircraft/show/94803594,22:45,1:44,125,"$65,166.00","$55,118.00",$440.94,"$18,475.31"
HNL - JFK,54930655310,HNL 56B-6 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/54930655310,https://www.airlines-manager.com/aircraft/show/109187503,3:00,22:44,592,"$2,394,138.00","$2,211,698.00","$3,735.98","$112,079.29"
HNL - JFK,54942363034,HNL 56B-1 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/54942363034,https://www.airlines-manager.com/aircraft/show/109187498,9:00,4:44,592,"$2,394,138.00","$2,211,698.00","$3,735.98","$112,079.29"
HNL - JFK,54961494056,HNL 56B-3 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/54961494056,https://www.airlines-manager.com/aircraft/show/109187500,17:00,12:44,592,"$2,394,138.00","$2,211,698.00","$3,735.98","$112,079.29"
HNL - KOA,54930654922,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/54930654922,https://www.airlines-manager.com/aircraft/show/94803595,0:45,3:29,170,"$58,675.00","$48,297.00",$284.10,"$17,669.63"
HNL - KOA,54930654923,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/54930654923,https://www.airlines-manager.com/aircraft/show/94803594,4:15,6:59,170,"$58,675.00","$48,297.00",$284.10,"$17,669.63"
HNL - KOA,54937424051,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/54937424051,https://www.airlines-manager.com/aircraft/show/94803593,7:15,9:59,170,"$58,675.00","$48,297.00",$284.10,"$17,669.63"
HNL - KOA,54942363018,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/54942363018,https://www.airlines-manager.com/aircraft/show/94803596,8:45,11:29,170,"$58,675.00","$48,297.00",$284.10,"$17,669.63"
HNL - KOA,54952417768,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/54952417768,https://www.airlines-manager.com/aircraft/show/94803595,14:00,16:44,170,"$58,675.00","$48,297.00",$284.10,"$17,669.63"
HNL - KOA,54961494204,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/54961494204,https://www.airlines-manager.com/aircraft/show/94803594,17:30,20:14,170,"$58,675.00","$48,297.00",$284.10,"$17,669.63"
HNL - KOA,54965848630,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/54965848630,https://www.airlines-manager.com/aircraft/show/94803593,20:30,23:14,170,"$58,675.00","$48,297.00",$284.10,"$17,669.63"
HNL - KOA,54969516375,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/54969516375,https://www.airlines-manager.com/aircraft/show/94803596,22:00,0:44,170,"$58,675.00","$48,297.00",$284.10,"$17,669.63"
HNL - LAS,54937424006,HNL 84A-5 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/54937424006,https://www.airlines-manager.com/aircraft/show/95818922,6:30,18:29,832,"$1,888,368.00","$1,701,740.00","$2,045.36","$142,008.90"
HNL - LAS,54956618141,HNL-LAS S,A321-200,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/54956618141,https://www.airlines-manager.com/aircraft/show/116385511,16:30,5:14,232,"$743,934.00","$672,432.00","$2,898.41","$52,808.80"
HNL - LAS,54965848631,HNL 84A-3 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/54965848631,https://www.airlines-manager.com/aircraft/show/95818924,20:30,8:29,801,"$1,841,768.00","$1,658,031.00","$2,069.95","$138,361.42"
HNL - LAX,54937424038,HNL-SFO-LAX 3,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/54937424038,https://www.airlines-manager.com/aircraft/show/110044460,7:00,18:59,338,"$786,488.00","$718,216.00","$2,124.90","$59,934.58"
HNL - LAX,54942363041,HNL-SFO-LAX 4,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/54942363041,https://www.airlines-manager.com/aircraft/show/110044461,9:00,20:59,338,"$786,488.00","$718,216.00","$2,124.90","$59,934.58"
HNL - LAX,54942363042,HNL-SFO-LAX 6 B,A319-100,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/54942363042,https://www.airlines-manager.com/aircraft/show/106106389,10:00,21:59,198,"$544,408.00","$487,128.00","$2,460.24","$40,650.46"
HNL - LAX,54961494268,HNL-SFO-LAX 1,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/54961494268,https://www.airlines-manager.com/aircraft/show/110044458,18:15,6:14,338,"$786,488.00","$718,216.00","$2,124.90","$59,934.58"
HNL - LAX,54965848596,HNL-SFO-LAX 2,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/54965848596,https://www.airlines-manager.com/aircraft/show/110044459,20:15,8:14,338,"$786,488.00","$718,216.00","$2,124.90","$59,934.58"
HNL - LAX,54969516350,HNL-SFO-LAX 5,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/54969516350,https://www.airlines-manager.com/aircraft/show/110044462,21:45,9:44,338,"$786,488.00","$718,216.00","$2,124.90","$59,934.58"
HNL - LIH,54930654920,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/54930654920,https://www.airlines-manager.com/aircraft/show/94803596,0:45,3:14,170,"$50,884.00","$42,464.00",$249.79,"$17,099.60"
HNL - LIH,54930654921,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/54930654921,https://www.airlines-manager.com/aircraft/show/94803595,3:30,5:59,170,"$50,884.00","$42,464.00",$249.79,"$17,099.60"
HNL - LIH,54937424042,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/54937424042,https://www.airlines-manager.com/aircraft/show/94803594,7:00,9:29,170,"$50,884.00","$42,464.00",$249.79,"$17,099.60"
HNL - LIH,54942363142,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/54942363142,https://www.airlines-manager.com/aircraft/show/94803593,10:00,12:29,170,"$50,884.00","$42,464.00",$249.79,"$17,099.60"
HNL - LIH,54952417775,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/54952417775,https://www.airlines-manager.com/aircraft/show/94803596,14:00,16:29,170,"$50,884.00","$42,464.00",$249.79,"$17,099.60"
HNL - LIH,54956618156,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/54956618156,https://www.airlines-manager.com/aircraft/show/94803595,16:45,19:14,170,"$50,884.00","$42,464.00",$249.79,"$17,099.60"
HNL - LIH,54965848609,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/54965848609,https://www.airlines-manager.com/aircraft/show/94803594,20:15,22:44,170,"$50,884.00","$42,464.00",$249.79,"$17,099.60"
HNL - LIH,54971692218,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/54971692218,https://www.airlines-manager.com/aircraft/show/94803593,23:15,1:44,170,"$50,884.00","$42,464.00",$249.79,"$17,099.60"
HNL - LNY,54930654989,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/54930654989,https://www.airlines-manager.com/aircraft/show/106107514,1:00,3:29,116,"$30,301.00","$25,294.00",$218.05,"$10,185.50"
HNL - LNY,54930654990,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/54930654990,https://www.airlines-manager.com/aircraft/show/106107514,3:30,5:59,116,"$30,301.00","$25,294.00",$218.05,"$10,185.50"
HNL - LNY,54937423976,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/54937423976,https://www.airlines-manager.com/aircraft/show/106107514,6:00,8:29,116,"$30,301.00","$25,294.00",$218.05,"$10,185.50"
HNL - LNY,54942362999,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/54942362999,https://www.airlines-manager.com/aircraft/show/106107514,8:30,10:59,116,"$30,301.00","$25,294.00",$218.05,"$10,185.50"
HNL - LNY,54956617972,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/54956617972,https://www.airlines-manager.com/aircraft/show/106107514,15:00,17:29,116,"$30,301.00","$25,294.00",$218.05,"$10,185.50"
HNL - LNY,54961494178,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/54961494178,https://www.airlines-manager.com/aircraft/show/106107514,17:30,19:59,116,"$30,301.00","$25,294.00",$218.05,"$10,185.50"
HNL - LNY,54965848583,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/54965848583,https://www.airlines-manager.com/aircraft/show/106107514,20:00,22:29,116,"$30,301.00","$25,294.00",$218.05,"$10,185.50"
HNL - LNY,54969516418,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/54969516418,https://www.airlines-manager.com/aircraft/show/106107514,22:30,0:59,116,"$30,301.00","$25,294.00",$218.05,"$10,185.50"
HNL - MCO,54930654966,HNL 56C-7 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/54930654966,https://www.airlines-manager.com/aircraft/show/111639419,1:00,19:59,592,"$2,277,153.00","$2,117,054.00","$3,576.10","$111,521.72"
HNL - MCO,54930654967,HNL 56C-6 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/54930654967,https://www.airlines-manager.com/aircraft/show/111639418,4:15,23:14,592,"$2,277,153.00","$2,117,054.00","$3,576.10","$111,521.72"
HNL - MCO,54942362976,HNL 56C-2 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/54942362976,https://www.airlines-manager.com/aircraft/show/111639414,8:15,3:14,592,"$2,277,153.00","$2,117,054.00","$3,576.10","$111,521.72"
HNL - MEL,54942363005,HNL 84A-4 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/54942363005,https://www.airlines-manager.com/aircraft/show/95818923,8:30,6:29,832,"$3,527,480.00","$3,226,098.00","$3,877.52","$146,751.99"
HNL - MEL,54965848569,HNL 84A-7 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/54965848569,https://www.airlines-manager.com/aircraft/show/95818920,20:00,17:59,832,"$3,527,480.00","$3,226,098.00","$3,877.52","$146,751.99"
HNL - MIA,54942362997,HNL 56A-2 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/54942362997,https://www.airlines-manager.com/aircraft/show/95351591,8:30,3:44,592,"$2,322,627.00","$2,156,366.00","$3,642.51","$112,116.08"
HNL - MIA,54947196822,HNL 56A-5 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/54947196822,https://www.airlines-manager.com/aircraft/show/95351588,10:45,5:59,592,"$2,322,627.00","$2,156,366.00","$3,642.51","$112,116.08"
HNL - MIA,54956618056,HNL 56A-4 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/54956618056,https://www.airlines-manager.com/aircraft/show/95351589,15:30,10:44,592,"$2,322,627.00","$2,156,366.00","$3,642.51","$112,116.08"
HNL - MNL,54937424073,HNL 84A-2 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/54937424073,https://www.airlines-manager.com/aircraft/show/95818925,7:30,4:44,832,"$3,450,425.00","$3,161,128.00","$3,799.43","$148,875.73"
HNL - MNL,54961494297,HNL 84A-5 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/54961494297,https://www.airlines-manager.com/aircraft/show/95818922,18:30,15:44,832,"$3,450,425.00","$3,161,128.00","$3,799.43","$148,875.73"
HNL - MSP,54956618124,HNL 56C-1 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/54956618124,https://www.airlines-manager.com/aircraft/show/111639413,16:00,8:14,592,"$1,940,110.00","$1,805,737.00","$3,050.23","$111,236.37"
HNL - MSP,54961494050,HNL 56C-4 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/54961494050,https://www.airlines-manager.com/aircraft/show/111639416,17:00,9:14,592,"$1,940,110.00","$1,805,737.00","$3,050.23","$111,236.37"
HNL - MSP,54969516399,HNL 56C-3 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/54969516399,https://www.airlines-manager.com/aircraft/show/111639415,22:15,14:29,592,"$1,940,110.00","$1,805,737.00","$3,050.23","$111,236.37"
HNL - NAN,54930655356,HNL 84A-7 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/54930655356,https://www.airlines-manager.com/aircraft/show/95818920,3:45,17:14,832,"$2,066,228.00","$1,895,022.00","$2,277.67","$140,545.51"
HNL - NAN,54961494246,HNL 84A-1 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/54961494246,https://www.airlines-manager.com/aircraft/show/95818926,18:00,7:29,832,"$2,037,178.00","$1,875,626.00","$2,254.36","$139,107.00"
HNL - OGG,54930655119,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/54930655119,https://www.airlines-manager.com/aircraft/show/94803594,1:45,4:14,170,"$51,604.00","$42,806.00",$251.80,"$17,237.32"
HNL - OGG,54930655120,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/54930655120,https://www.airlines-manager.com/aircraft/show/94803593,4:45,7:14,170,"$51,604.00","$42,806.00",$251.80,"$17,237.32"
HNL - OGG,54937423986,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/54937423986,https://www.airlines-manager.com/aircraft/show/94803596,6:15,8:44,170,"$51,604.00","$42,806.00",$251.80,"$17,237.32"
HNL - OGG,54942363044,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/54942363044,https://www.airlines-manager.com/aircraft/show/94803595,9:00,11:29,170,"$51,604.00","$42,806.00",$251.80,"$17,237.32"
HNL - OGG,54956618033,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/54956618033,https://www.airlines-manager.com/aircraft/show/94803594,15:00,17:29,170,"$51,604.00","$42,806.00",$251.80,"$17,237.32"
HNL - OGG,54961494236,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/54961494236,https://www.airlines-manager.com/aircraft/show/94803593,18:00,20:29,170,"$51,604.00","$42,806.00",$251.80,"$17,237.32"
HNL - OGG,54965848519,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/54965848519,https://www.airlines-manager.com/aircraft/show/94803596,19:30,21:59,170,"$51,604.00","$42,806.00",$251.80,"$17,237.32"
HNL - OGG,54969516401,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/54969516401,https://www.airlines-manager.com/aircraft/show/94803595,22:15,0:44,170,"$51,604.00","$42,806.00",$251.80,"$17,237.32"
HNL - ORD,54942363119,HNL 56B-5 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/54942363119,https://www.airlines-manager.com/aircraft/show/109187502,10:00,2:59,592,"$2,079,450.00","$1,909,990.00","$3,226.33","$112,462.61"
HNL - ORD,54956618117,HNL 56B-7 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/54956618117,https://www.airlines-manager.com/aircraft/show/109187504,16:00,8:59,592,"$2,079,450.00","$1,909,990.00","$3,226.33","$112,462.61"
HNL - ORD,54969516461,HNL 56B-6 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/54969516461,https://www.airlines-manager.com/aircraft/show/109187503,22:45,15:44,592,"$2,079,450.00","$1,909,990.00","$3,226.33","$112,462.61"
HNL - PHL,54937424030,HNL 56F-3 B,787-10,https://www.airlines-manager.com/network/showline/50049283,https://www.airlines-manager.com/network/showflight/54937424030,https://www.airlines-manager.com/aircraft/show/118383853,7:00,2:29,592,"$2,333,755.00","$2,176,175.00","$3,675.97","$111,694.18"
HNL - PHL,54961494015,HNL 56F-7 B,787-10,https://www.airlines-manager.com/network/showline/50049283,https://www.airlines-manager.com/network/showflight/54961494015,https://www.airlines-manager.com/aircraft/show/118383857,17:00,12:29,592,"$2,333,755.00","$2,176,175.00","$3,675.97","$111,694.18"
HNL - PHL,54965848679,HNL 56F-6 B,787-10,https://www.airlines-manager.com/network/showline/50049283,https://www.airlines-manager.com/network/showflight/54965848679,https://www.airlines-manager.com/aircraft/show/118383856,21:00,16:29,592,"$2,333,755.00","$2,176,175.00","$3,675.97","$111,694.18"
HNL - PHX,54930655344,HNL 56D-7 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/54930655344,https://www.airlines-manager.com/aircraft/show/112066138,3:30,15:59,592,"$1,512,409.00","$1,401,274.00","$2,367.02","$112,251.59"
HNL - PHX,54956618028,HNL 56D-6 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/54956618028,https://www.airlines-manager.com/aircraft/show/112066137,15:00,3:29,592,"$1,512,409.00","$1,401,274.00","$2,367.02","$112,251.59"
HNL - PHX,54956618029,HNL 56D-2 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/54956618029,https://www.airlines-manager.com/aircraft/show/112066133,16:00,4:29,592,"$1,512,409.00","$1,401,274.00","$2,367.02","$112,251.59"
HNL - PPG,54930655347,HNL-TRW-PPG 1 S,A321-200,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/54930655347,https://www.airlines-manager.com/aircraft/show/88725599,3:30,15:44,380,"$788,960.00","$739,358.00","$1,945.68","$60,437.98"
HNL - PPG,54956618103,HNL-TRW-PPG 2 S,A321-200,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/54956618103,https://www.airlines-manager.com/aircraft/show/88725598,16:00,4:14,380,"$788,960.00","$739,358.00","$1,945.68","$60,437.98"
HNL - PPG,54961494253,HNL-TRW-PPG 3 S,A321-200,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/54961494253,https://www.airlines-manager.com/aircraft/show/88725597,18:00,6:14,380,"$788,960.00","$739,358.00","$1,945.68","$60,437.98"
HNL - PPT,54930655494,HNL-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/54930655494,https://www.airlines-manager.com/aircraft/show/88725600,4:45,17:29,310,"$767,726.00","$714,759.00","$2,305.67","$56,132.91"
HNL - PPT,54956618064,HNL 84A-6 F,777-300,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/54956618064,https://www.airlines-manager.com/aircraft/show/95818921,15:45,3:44,832,"$1,893,432.00","$1,741,416.00","$2,093.05","$145,319.83"
HNL - PPT,54961494188,HNL-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/54961494188,https://www.airlines-manager.com/aircraft/show/88725600,17:30,6:14,310,"$767,726.00","$714,759.00","$2,305.67","$56,132.91"
HNL - SEA,54930655366,HNL 56D-1 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/54930655366,https://www.airlines-manager.com/aircraft/show/112066132,3:45,15:14,592,"$1,411,026.00","$1,309,353.00","$2,211.74","$114,022.03"
HNL - SEA,54956618075,HNL 56D-1 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/54956618075,https://www.airlines-manager.com/aircraft/show/112066132,16:00,3:29,592,"$1,411,026.00","$1,309,353.00","$2,211.74","$114,022.03"
HNL - SEA,54961494267,HNL 56D-4 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/54961494267,https://www.airlines-manager.com/aircraft/show/112066135,18:00,5:29,592,"$1,411,026.00","$1,309,353.00","$2,211.74","$114,022.03"
HNL - SFO,54937424039,HNL-SFO-LAX 1,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/54937424039,https://www.airlines-manager.com/aircraft/show/110044458,7:00,18:14,338,"$755,506.00","$697,022.00","$2,062.20","$62,049.44"
HNL - SFO,54942363032,HNL-SFO-LAX 2,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/54942363032,https://www.airlines-manager.com/aircraft/show/110044459,9:00,20:14,338,"$755,506.00","$697,022.00","$2,062.20","$62,049.44"
HNL - SFO,54947196813,HNL-SFO-LAX 5,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/54947196813,https://www.airlines-manager.com/aircraft/show/110044462,10:30,21:44,338,"$755,506.00","$697,022.00","$2,062.20","$62,049.44"
HNL - SFO,54961494343,HNL-SFO-LAX 3,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/54961494343,https://www.airlines-manager.com/aircraft/show/110044460,19:00,6:14,338,"$755,506.00","$697,022.00","$2,062.20","$62,049.44"
HNL - SFO,54965848662,HNL-SFO-LAX 4,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/54965848662,https://www.airlines-manager.com/aircraft/show/110044461,21:00,8:14,338,"$755,506.00","$697,022.00","$2,062.20","$62,049.44"
HNL - SFO,54969516371,HNL-SFO-LAX 6 B,A319-100,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/54969516371,https://www.airlines-manager.com/aircraft/show/106106389,22:00,9:29,198,"$526,164.00","$476,877.00","$2,408.47","$41,527.75"
HNL - SIN,54930655518,HNL 84B-4 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/54930655518,https://www.airlines-manager.com/aircraft/show/96807090,5:15,7:29,832,"$4,308,151.00","$3,909,929.00","$4,699.43","$1,750,714.48"
HNL - SIN,54961494059,HNL 84B-7 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/54961494059,https://www.airlines-manager.com/aircraft/show/96807087,17:00,19:14,832,"$4,308,151.00","$3,909,929.00","$4,699.43","$1,750,714.48"
HNL - SYD,54937424074,HNL 84B-5 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/54937424074,https://www.airlines-manager.com/aircraft/show/96807089,7:30,3:59,832,"$3,330,329.00","$3,023,298.00","$3,633.77","$147,597.95"
HNL - SYD,54965848488,HNL 84B-1 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/54965848488,https://www.airlines-manager.com/aircraft/show/96807093,19:15,15:44,832,"$3,330,329.00","$3,023,298.00","$3,633.77","$147,597.95"
HNL - TRW,54930655455,HNL-TRW-PPG 2 S,A321-200,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/54930655455,https://www.airlines-manager.com/aircraft/show/88725598,4:15,15:44,380,"$767,260.00","$722,629.00","$1,901.66","$62,928.51"
HNL - TRW,54937423987,HNL-TRW-PPG 3 S,A321-200,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/54937423987,https://www.airlines-manager.com/aircraft/show/88725597,6:15,17:44,380,"$767,260.00","$722,629.00","$1,901.66","$62,928.51"
HNL - TRW,54956618104,HNL-TRW-PPG 1 S,A321-200,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/54956618104,https://www.airlines-manager.com/aircraft/show/88725599,16:00,3:29,380,"$767,260.00","$722,629.00","$1,901.66","$62,928.51"
HNL - YVR,54930654850,HNL 56D-6 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/54930654850,https://www.airlines-manager.com/aircraft/show/112066137,0:15,11:59,592,"$1,414,240.00","$1,318,834.00","$2,227.76","$112,400.63"
HNL - YVR,54930654851,HNL 56D-2 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/54930654851,https://www.airlines-manager.com/aircraft/show/112066133,3:30,15:14,592,"$1,414,240.00","$1,318,834.00","$2,227.76","$112,400.63"
HNL - YVR,54956618076,HNL 56D-7 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/54956618076,https://www.airlines-manager.com/aircraft/show/112066138,16:00,3:44,592,"$1,414,240.00","$1,318,834.00","$2,227.76","$112,400.63"
IAH - ABQ,54930654945,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/54930654945,https://www.airlines-manager.com/aircraft/show/103600700,1:00,5:59,310,"$316,874.00","$283,557.00",$914.70,"$56,901.07"
IAH - ABQ,54930654946,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/54930654946,https://www.airlines-manager.com/aircraft/show/110582844,2:30,7:29,198,"$240,844.00","$214,158.00","$1,081.61","$42,974.85"
IAH - ABQ,54937423951,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/54937423951,https://www.airlines-manager.com/aircraft/show/88725601,6:00,10:59,310,"$316,874.00","$283,557.00",$914.70,"$56,901.07"
IAH - ABQ,54952417593,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/54952417593,https://www.airlines-manager.com/aircraft/show/103600702,13:00,17:59,310,"$316,874.00","$283,557.00",$914.70,"$56,901.07"
IAH - ABQ,54961494321,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/54961494321,https://www.airlines-manager.com/aircraft/show/103600701,18:45,23:44,310,"$316,874.00","$283,557.00",$914.70,"$56,901.07"
IAH - ALB,54930654835,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/54930654835,https://www.airlines-manager.com/aircraft/show/114266976,0:15,7:59,320,"$495,326.00","$449,872.00","$1,405.85","$58,173.10"
IAH - ALB,54930654836,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/54930654836,https://www.airlines-manager.com/aircraft/show/92800067,2:00,9:59,112,"$234,453.00","$207,413.00","$1,851.90","$25,980.75"
IAH - ALB,54947196993,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/54947196993,https://www.airlines-manager.com/aircraft/show/114266971,12:00,19:44,320,"$495,326.00","$449,872.00","$1,405.85","$58,173.10"
IAH - ALB,54956618013,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/54956618013,https://www.airlines-manager.com/aircraft/show/114266970,15:00,22:44,320,"$495,326.00","$449,872.00","$1,405.85","$58,173.10"
IAH - ALB,54965848604,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/54965848604,https://www.airlines-manager.com/aircraft/show/114266972,20:15,3:59,320,"$495,326.00","$449,872.00","$1,405.85","$58,173.10"
IAH - ANC,54947196987,IAH-ANC-ONT 1,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/54947196987,https://www.airlines-manager.com/aircraft/show/108258010,12:00,2:44,310,"$896,871.00","$826,647.00","$2,666.60","$56,107.26"
IAH - ANC,54952417744,IAH-ANC-ONT 2,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/54952417744,https://www.airlines-manager.com/aircraft/show/108258011,14:00,4:44,310,"$896,871.00","$826,647.00","$2,666.60","$56,107.26"
IAH - ANC,54965848489,IAH-ANC-ONT 3,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/54965848489,https://www.airlines-manager.com/aircraft/show/108258012,19:15,9:59,310,"$896,871.00","$826,647.00","$2,666.60","$56,107.26"
IAH - ANC,54965848490,IAH-ANC-ONT 4,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/54965848490,https://www.airlines-manager.com/aircraft/show/108089220,21:15,11:59,310,"$896,871.00","$826,647.00","$2,666.60","$56,107.26"
IAH - ANC,54971692215,IAH-ANC-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/54971692215,https://www.airlines-manager.com/aircraft/show/108286957,23:15,13:59,198,"$669,375.00","$613,055.00","$3,096.24","$41,610.07"
IAH - ATL,54930654857,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/54930654857,https://www.airlines-manager.com/aircraft/show/82323704,0:15,4:59,112,"$146,148.00","$112,107.00","$1,000.96","$23,684.58"
IAH - ATL,54942363089,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/54942363089,https://www.airlines-manager.com/aircraft/show/95894466,10:00,14:44,320,"$306,745.00","$242,670.00",$758.34,"$51,268.31"
IAH - ATL,54947196818,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/54947196818,https://www.airlines-manager.com/aircraft/show/96256511,10:45,15:29,320,"$306,745.00","$242,670.00",$758.34,"$51,268.31"
IAH - ATL,54956618100,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/54956618100,https://www.airlines-manager.com/aircraft/show/96183549,16:00,20:44,320,"$306,745.00","$242,670.00",$758.34,"$51,268.31"
IAH - ATL,54961494214,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/54961494214,https://www.airlines-manager.com/aircraft/show/96177955,17:45,22:29,320,"$306,745.00","$242,670.00",$758.34,"$51,268.31"
IAH - ATL,54971692260,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/54971692260,https://www.airlines-manager.com/aircraft/show/96250652,23:45,4:29,320,"$306,745.00","$242,670.00",$758.34,"$51,268.31"
IAH - AUS,54930655459,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/54930655459,https://www.airlines-manager.com/aircraft/show/106007214,4:15,6:59,338,"$100,434.00","$76,833.00",$227.32,"$28,109.63"
IAH - AUS,54947196861,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/54947196861,https://www.airlines-manager.com/aircraft/show/106007213,11:00,13:44,338,"$100,434.00","$76,833.00",$227.32,"$28,109.63"
IAH - AUS,54947196862,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/54947196862,https://www.airlines-manager.com/aircraft/show/106007217,12:00,14:44,338,"$100,434.00","$76,833.00",$227.32,"$28,109.63"
IAH - AUS,54961494281,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/54961494281,https://www.airlines-manager.com/aircraft/show/106007216,18:15,20:59,338,"$100,434.00","$76,833.00",$227.32,"$28,109.63"
IAH - AUS,54969516345,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/54969516345,https://www.airlines-manager.com/aircraft/show/106007215,21:30,0:14,267,"$88,036.00","$64,661.00",$242.18,"$23,656.46"
IAH - BDL,54937423967,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/54937423967,https://www.airlines-manager.com/aircraft/show/103600700,6:00,13:59,310,"$498,192.00","$455,852.00","$1,470.49","$57,100.46"
IAH - BDL,54937423968,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/54937423968,https://www.airlines-manager.com/aircraft/show/110582844,7:30,15:29,198,"$375,515.00","$341,578.00","$1,725.14","$42,786.39"
IAH - BDL,54947196894,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/54947196894,https://www.airlines-manager.com/aircraft/show/88725601,11:00,18:59,310,"$498,192.00","$455,852.00","$1,470.49","$57,100.46"
IAH - BDL,54961494258,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/54961494258,https://www.airlines-manager.com/aircraft/show/103600702,18:00,1:59,310,"$498,192.00","$455,852.00","$1,470.49","$57,100.46"
IAH - BDL,54965848531,IAH-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/54965848531,https://www.airlines-manager.com/aircraft/show/96990010,19:45,3:44,112,"$234,492.00","$206,459.00","$1,843.38","$25,861.25"
IAH - BDL,54971692263,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/54971692263,https://www.airlines-manager.com/aircraft/show/103600701,23:45,7:44,310,"$498,192.00","$455,852.00","$1,470.49","$57,100.46"
IAH - BFF,54930655443,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/54930655443,https://www.airlines-manager.com/aircraft/show/114266972,4:00,9:44,320,"$365,524.00","$327,646.00","$1,023.89","$57,147.56"
IAH - BFF,54947196788,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/54947196788,https://www.airlines-manager.com/aircraft/show/114266976,10:15,15:59,320,"$365,524.00","$327,646.00","$1,023.89","$57,147.56"
IAH - BFF,54947196789,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/54947196789,https://www.airlines-manager.com/aircraft/show/92800067,12:00,17:44,112,"$173,234.00","$151,553.00","$1,353.15","$26,433.66"
IAH - BFF,54965848533,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/54965848533,https://www.airlines-manager.com/aircraft/show/114266971,19:45,1:29,320,"$365,524.00","$327,646.00","$1,023.89","$57,147.56"
IAH - BFF,54969516465,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/54969516465,https://www.airlines-manager.com/aircraft/show/114266970,22:45,4:29,320,"$365,524.00","$327,646.00","$1,023.89","$57,147.56"
IAH - BIL,54930655268,IAH-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/54930655268,https://www.airlines-manager.com/aircraft/show/117273390,2:45,9:59,320,"$455,509.00","$412,118.00","$1,287.87","$56,974.84"
IAH - BIL,54942363043,IAH-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/54942363043,https://www.airlines-manager.com/aircraft/show/117273392,9:00,16:14,320,"$455,509.00","$412,118.00","$1,287.87","$56,974.84"
IAH - BIL,54947196836,IAH-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/54947196836,https://www.airlines-manager.com/aircraft/show/117273389,11:00,18:14,320,"$455,509.00","$412,118.00","$1,287.87","$56,974.84"
IAH - BIL,54961494305,IAH-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/54961494305,https://www.airlines-manager.com/aircraft/show/117273391,18:30,1:44,320,"$455,509.00","$412,118.00","$1,287.87","$56,974.84"
IAH - BNA,54930655371,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/54930655371,https://www.airlines-manager.com/aircraft/show/104258214,4:00,8:44,310,"$301,869.00","$270,660.00",$873.10,"$57,181.69"
IAH - BNA,54942363052,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/54942363052,https://www.airlines-manager.com/aircraft/show/104258213,9:15,13:59,310,"$301,869.00","$270,660.00",$873.10,"$57,181.69"
IAH - BNA,54956618034,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/54956618034,https://www.airlines-manager.com/aircraft/show/104258212,15:00,19:44,310,"$301,869.00","$270,660.00",$873.10,"$57,181.69"
IAH - BNA,54969516387,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/54969516387,https://www.airlines-manager.com/aircraft/show/104258211,22:00,2:44,310,"$301,869.00","$270,660.00",$873.10,"$57,181.69"
IAH - BNA,54969516388,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/54969516388,https://www.airlines-manager.com/aircraft/show/103534664,23:00,3:44,112,"$143,481.00","$123,610.00","$1,103.66","$26,114.79"
IAH - BOG,54937423953,IAH 56A-4 E,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/54937423953,https://www.airlines-manager.com/aircraft/show/106676235,6:00,15:59,648,"$1,300,597.00","$1,208,305.00","$1,864.67","$121,032.22"
IAH - BOG,54952417750,IAH 56A-6 E,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/54952417750,https://www.airlines-manager.com/aircraft/show/106676237,14:00,23:59,648,"$1,300,597.00","$1,208,305.00","$1,864.67","$121,032.22"
IAH - BOG,54965848568,IAH 56A-1 E,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/54965848568,https://www.airlines-manager.com/aircraft/show/106676232,20:00,5:59,648,"$1,300,597.00","$1,208,305.00","$1,864.67","$121,032.22"
IAH - BOI,54930655020,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/54930655020,https://www.airlines-manager.com/aircraft/show/104258213,1:15,9:14,310,"$500,380.00","$458,753.00","$1,479.85","$57,463.84"
IAH - BOI,54937424028,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/54937424028,https://www.airlines-manager.com/aircraft/show/104258212,7:00,14:59,310,"$500,380.00","$458,753.00","$1,479.85","$57,463.84"
IAH - BOI,54952417767,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/54952417767,https://www.airlines-manager.com/aircraft/show/104258211,14:00,21:59,310,"$500,380.00","$458,753.00","$1,479.85","$57,463.84"
IAH - BOI,54956617985,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/54956617985,https://www.airlines-manager.com/aircraft/show/103534664,15:00,22:59,112,"$235,549.00","$207,987.00","$1,857.03","$26,052.65"
IAH - BOI,54965848570,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/54965848570,https://www.airlines-manager.com/aircraft/show/104258214,20:00,3:59,310,"$500,380.00","$458,753.00","$1,479.85","$57,463.84"
IAH - BOS,54930655080,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/54930655080,https://www.airlines-manager.com/aircraft/show/88400800,1:45,9:59,400,"$665,959.00","$604,155.00","$1,510.39","$73,379.15"
IAH - BOS,54947196879,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/54947196879,https://www.airlines-manager.com/aircraft/show/88400799,11:00,19:14,400,"$665,959.00","$604,155.00","$1,510.39","$73,379.15"
IAH - BOS,54947196880,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/54947196880,https://www.airlines-manager.com/aircraft/show/88400801,12:00,20:14,400,"$665,959.00","$604,155.00","$1,510.39","$73,379.15"
IAH - BOS,54961494207,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/54961494207,https://www.airlines-manager.com/aircraft/show/89233038,17:45,1:59,400,"$665,959.00","$604,155.00","$1,510.39","$73,379.15"
IAH - BOS,54961494208,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/54961494208,https://www.airlines-manager.com/aircraft/show/88400798,18:30,2:44,378,"$644,118.00","$583,225.00","$1,542.92","$70,837.04"
IAH - BSB,54947196936,IAH 84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/54947196936,https://www.airlines-manager.com/aircraft/show/89124076,11:15,5:29,932,"$3,053,991.00","$2,786,057.00","$2,989.33","$152,800.20"
IAH - BSB,54965848606,IAH 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/54965848606,https://www.airlines-manager.com/aircraft/show/88905140,20:15,14:29,932,"$3,053,991.00","$2,786,057.00","$2,989.33","$152,800.20"
IAH - BTV,54930654722,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/54930654722,https://www.airlines-manager.com/aircraft/show/86385103,0:00,8:14,310,"$515,451.00","$473,724.00","$1,528.14","$57,537.33"
IAH - BTV,54930654723,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/54930654723,https://www.airlines-manager.com/aircraft/show/82543907,4:15,12:29,112,"$242,906.00","$215,131.00","$1,920.81","$26,129.27"
IAH - BTV,54937424052,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/54937424052,https://www.airlines-manager.com/aircraft/show/114373409,7:15,15:29,310,"$515,451.00","$473,724.00","$1,528.14","$57,537.33"
IAH - BTV,54952417762,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/54952417762,https://www.airlines-manager.com/aircraft/show/114373410,14:00,22:14,310,"$515,451.00","$473,724.00","$1,528.14","$57,537.33"
IAH - BTV,54961494333,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/54961494333,https://www.airlines-manager.com/aircraft/show/113994196,18:45,2:59,310,"$515,451.00","$473,724.00","$1,528.14","$57,537.33"
IAH - BUF,54930655008,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/54930655008,https://www.airlines-manager.com/aircraft/show/107467127,1:15,8:14,310,"$452,151.00","$413,484.00","$1,333.82","$59,210.12"
IAH - BUF,54930655009,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/54930655009,https://www.airlines-manager.com/aircraft/show/107467128,4:00,10:59,310,"$452,151.00","$413,484.00","$1,333.82","$59,210.12"
IAH - BUF,54952417481,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/54952417481,https://www.airlines-manager.com/aircraft/show/107467129,13:00,19:59,310,"$452,151.00","$413,484.00","$1,333.82","$59,210.12"
IAH - BUF,54961494052,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/54961494052,https://www.airlines-manager.com/aircraft/show/110582843,17:00,23:59,198,"$341,310.00","$310,322.00","$1,567.28","$44,437.52"
IAH - BUF,54965848697,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/54965848697,https://www.airlines-manager.com/aircraft/show/107467130,21:15,4:14,310,"$452,151.00","$413,484.00","$1,333.82","$59,210.12"
IAH - BUR,54930655243,IAH-YEG-BUR 4,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/54930655243,https://www.airlines-manager.com/aircraft/show/117273341,2:30,9:59,310,"$467,590.00","$428,921.00","$1,383.62","$57,316.84"
IAH - BUR,54930655244,IAH-YEG-BUR 3,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/54930655244,https://www.airlines-manager.com/aircraft/show/117273342,3:15,10:44,310,"$467,590.00","$428,921.00","$1,383.62","$57,316.84"
IAH - BUR,54947196885,IAH-YEG-BUR 5,A321neo,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/54947196885,https://www.airlines-manager.com/aircraft/show/117273340,11:00,18:29,338,"$506,598.00","$469,647.00","$1,389.49","$62,759.06"
IAH - BUR,54961494255,IAH-YEG-BUR 2,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/54961494255,https://www.airlines-manager.com/aircraft/show/117273343,18:00,1:29,310,"$467,590.00","$428,921.00","$1,383.62","$57,316.84"
IAH - BUR,54965848595,IAH-YEG-BUR 1,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/54965848595,https://www.airlines-manager.com/aircraft/show/117273344,20:15,3:44,291,"$450,624.00","$412,670.00","$1,418.11","$55,145.21"
IAH - BWI,54930654852,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/54930654852,https://www.airlines-manager.com/aircraft/show/106007215,0:15,6:59,338,"$468,474.00","$427,103.00","$1,263.62","$63,431.14"
IAH - BWI,54947196860,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/54947196860,https://www.airlines-manager.com/aircraft/show/106007214,11:00,17:44,338,"$468,474.00","$427,103.00","$1,263.62","$63,431.14"
IAH - BWI,54952417647,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/54952417647,https://www.airlines-manager.com/aircraft/show/106007213,13:45,20:29,338,"$468,474.00","$427,103.00","$1,263.62","$63,431.14"
IAH - BWI,54956617953,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/54956617953,https://www.airlines-manager.com/aircraft/show/106007217,14:45,21:29,338,"$468,474.00","$427,103.00","$1,263.62","$63,431.14"
IAH - BWI,54965848655,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/54965848655,https://www.airlines-manager.com/aircraft/show/106007216,21:00,3:44,338,"$468,474.00","$427,103.00","$1,263.62","$63,431.14"
IAH - BZN,54930654904,IAH-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/54930654904,https://www.airlines-manager.com/aircraft/show/117273392,0:30,7:59,320,"$473,031.00","$429,269.00","$1,341.47","$57,363.34"
IAH - BZN,54930654905,IAH-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/54930654905,https://www.airlines-manager.com/aircraft/show/117273389,2:30,9:59,320,"$473,031.00","$429,269.00","$1,341.47","$57,363.34"
IAH - BZN,54947196834,IAH-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/54947196834,https://www.airlines-manager.com/aircraft/show/117273391,11:00,18:29,320,"$473,031.00","$429,269.00","$1,341.47","$57,363.34"
IAH - BZN,54965848495,IAH-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/54965848495,https://www.airlines-manager.com/aircraft/show/117273390,19:15,2:44,320,"$473,031.00","$429,269.00","$1,341.47","$57,363.34"
IAH - CAK,54930655315,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/54930655315,https://www.airlines-manager.com/aircraft/show/113994196,3:00,9:14,310,"$391,760.00","$357,325.00","$1,152.66","$57,324.87"
IAH - CAK,54942362961,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/54942362961,https://www.airlines-manager.com/aircraft/show/86385103,8:15,14:29,310,"$391,760.00","$357,325.00","$1,152.66","$57,324.87"
IAH - CAK,54952417460,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/54952417460,https://www.airlines-manager.com/aircraft/show/82543907,13:00,19:14,112,"$185,160.00","$162,606.00","$1,451.84","$26,086.52"
IAH - CAK,54956618085,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/54956618085,https://www.airlines-manager.com/aircraft/show/114373409,16:00,22:14,310,"$391,760.00","$357,325.00","$1,152.66","$57,324.87"
IAH - CAK,54969516411,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/54969516411,https://www.airlines-manager.com/aircraft/show/114373410,22:15,4:29,292,"$378,252.00","$344,352.00","$1,179.29","$55,243.64"
IAH - CHS,54930655047,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/54930655047,https://www.airlines-manager.com/aircraft/show/107467211,1:30,7:14,112,"$169,673.00","$148,516.00","$1,326.04","$25,903.95"
IAH - CHS,54930655048,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/54930655048,https://www.airlines-manager.com/aircraft/show/107467131,3:30,9:14,310,"$357,728.00","$325,152.00","$1,048.88","$56,712.56"
IAH - CHS,54947196979,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/54947196979,https://www.airlines-manager.com/aircraft/show/107467132,12:00,17:44,310,"$357,728.00","$325,152.00","$1,048.88","$56,712.56"
IAH - CHS,54961494068,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/54961494068,https://www.airlines-manager.com/aircraft/show/107467133,17:15,22:59,310,"$357,728.00","$325,152.00","$1,048.88","$56,712.56"
IAH - CHS,54971692271,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/54971692271,https://www.airlines-manager.com/aircraft/show/107467134,23:45,5:29,310,"$357,728.00","$325,152.00","$1,048.88","$56,712.56"
IAH - CID,54947196927,IAH-EUG-MFR 3,737-900ER,https://www.airlines-manager.com/network/showline/50385690,https://www.airlines-manager.com/network/showflight/54947196927,https://www.airlines-manager.com/aircraft/show/119525218,11:00,16:29,320,"$340,936.00","$305,753.00",$955.48,"$55,760.43"
IAH - CID,54952417441,IAH-EUG-MFR 4,737-900ER,https://www.airlines-manager.com/network/showline/50385690,https://www.airlines-manager.com/network/showflight/54952417441,https://www.airlines-manager.com/aircraft/show/119525217,13:00,18:29,320,"$340,936.00","$305,753.00",$955.48,"$55,760.43"
IAH - CID,54965848542,IAH-EUG-MFR 2,737-900ER,https://www.airlines-manager.com/network/showline/50385690,https://www.airlines-manager.com/network/showflight/54965848542,https://www.airlines-manager.com/aircraft/show/119525219,19:45,1:14,320,"$340,936.00","$305,753.00",$955.48,"$55,760.43"
IAH - CID,54969516346,IAH-EUG-MFR 1,737-900ER,https://www.airlines-manager.com/network/showline/50385690,https://www.airlines-manager.com/network/showflight/54969516346,https://www.airlines-manager.com/aircraft/show/119525220,21:45,3:14,300,"$328,089.00","$293,362.00",$977.87,"$53,500.67"
IAH - CLE,54930655181,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/54930655181,https://www.airlines-manager.com/aircraft/show/103600702,2:00,8:14,310,"$399,426.00","$362,715.00","$1,170.05","$58,189.57"
IAH - CLE,54937424085,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/54937424085,https://www.airlines-manager.com/aircraft/show/103600701,7:45,13:59,310,"$399,426.00","$362,715.00","$1,170.05","$58,189.57"
IAH - CLE,54952417708,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/54952417708,https://www.airlines-manager.com/aircraft/show/103600700,14:00,20:14,310,"$399,426.00","$362,715.00","$1,170.05","$58,189.57"
IAH - CLE,54956618055,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/54956618055,https://www.airlines-manager.com/aircraft/show/110582844,15:30,21:44,198,"$301,699.00","$272,283.00","$1,375.17","$43,681.76"
IAH - CLE,54961494342,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/54961494342,https://www.airlines-manager.com/aircraft/show/88725601,19:00,1:14,310,"$399,426.00","$362,715.00","$1,170.05","$58,189.57"
IAH - CLT,54930655362,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/54930655362,https://www.airlines-manager.com/aircraft/show/93094697,3:45,9:29,310,"$360,318.00","$318,018.00","$1,025.86","$55,468.26"
IAH - CLT,54942363111,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/54942363111,https://www.airlines-manager.com/aircraft/show/93094698,10:00,15:44,310,"$360,318.00","$318,018.00","$1,025.86","$55,468.26"
IAH - CLT,54947197001,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/54947197001,https://www.airlines-manager.com/aircraft/show/93100455,12:00,17:44,112,"$170,541.00","$143,570.00","$1,281.88","$25,041.28"
IAH - CLT,54956618157,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/54956618157,https://www.airlines-manager.com/aircraft/show/93094699,16:45,22:29,310,"$360,318.00","$318,018.00","$1,025.86","$55,468.26"
IAH - CLT,54961494319,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/54961494319,https://www.airlines-manager.com/aircraft/show/93094695,18:45,0:29,310,"$360,318.00","$318,018.00","$1,025.86","$55,468.26"
IAH - CLT,54969516382,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/54969516382,https://www.airlines-manager.com/aircraft/show/93094696,22:00,3:44,310,"$360,318.00","$318,018.00","$1,025.86","$55,468.26"
IAH - CMH,54937424029,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/54937424029,https://www.airlines-manager.com/aircraft/show/103882355,7:00,12:59,310,"$377,783.00","$342,516.00","$1,104.89","$57,245.01"
IAH - CMH,54947196895,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/54947196895,https://www.airlines-manager.com/aircraft/show/103882358,11:00,16:59,310,"$377,783.00","$342,516.00","$1,104.89","$57,245.01"
IAH - CMH,54947196896,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/54947196896,https://www.airlines-manager.com/aircraft/show/105099861,12:00,17:59,112,"$178,529.00","$155,649.00","$1,389.72","$26,013.76"
IAH - CMH,54965848487,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/54965848487,https://www.airlines-manager.com/aircraft/show/103882357,19:15,1:14,310,"$377,783.00","$342,516.00","$1,104.89","$57,245.01"
IAH - CMH,54969516477,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/54969516477,https://www.airlines-manager.com/aircraft/show/103882356,23:00,4:59,310,"$377,783.00","$342,516.00","$1,104.89","$57,245.01"
IAH - COS,54930655133,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/54930655133,https://www.airlines-manager.com/aircraft/show/103882355,1:45,6:59,310,"$330,575.00","$297,660.00",$960.19,"$56,877.71"
IAH - COS,54930655134,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/54930655134,https://www.airlines-manager.com/aircraft/show/103882358,5:45,10:59,310,"$330,575.00","$297,660.00",$960.19,"$56,877.71"
IAH - COS,54952417742,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/54952417742,https://www.airlines-manager.com/aircraft/show/103882357,14:00,19:14,310,"$330,575.00","$297,660.00",$960.19,"$56,877.71"
IAH - COS,54961494222,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/54961494222,https://www.airlines-manager.com/aircraft/show/103882356,17:45,22:59,310,"$330,575.00","$297,660.00",$960.19,"$56,877.71"
IAH - COS,54969516462,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/54969516462,https://www.airlines-manager.com/aircraft/show/105099861,22:45,3:59,112,"$157,217.00","$136,056.00","$1,214.79","$25,997.96"
IAH - CUN,54930654962,IAH 56A-4 E,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/54930654962,https://www.airlines-manager.com/aircraft/show/106676235,1:00,5:59,648,"$623,370.00","$570,261.00",$880.03,"$114,433.65"
IAH - CUN,54952417417,IAH 56A-5 E,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/54952417417,https://www.airlines-manager.com/aircraft/show/106676236,12:30,17:29,648,"$623,370.00","$570,261.00",$880.03,"$114,433.65"
IAH - CUN,54965848623,IAH 56A-7 E,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/54965848623,https://www.airlines-manager.com/aircraft/show/106676238,20:30,1:29,648,"$623,370.00","$570,261.00",$880.03,"$114,433.65"
IAH - CVG,54930654845,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/54930654845,https://www.airlines-manager.com/aircraft/show/99093332,0:15,5:44,320,"$348,754.00","$308,053.00",$962.67,"$56,179.88"
IAH - CVG,54930654846,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/54930654846,https://www.airlines-manager.com/aircraft/show/99093333,4:00,9:29,320,"$348,754.00","$308,053.00",$962.67,"$56,179.88"
IAH - CVG,54937424097,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/54937424097,https://www.airlines-manager.com/aircraft/show/99093334,8:00,13:29,320,"$348,754.00","$308,053.00",$962.67,"$56,179.88"
IAH - CVG,54952417722,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/54952417722,https://www.airlines-manager.com/aircraft/show/99093335,14:00,19:29,320,"$348,754.00","$308,053.00",$962.67,"$56,179.88"
IAH - CVG,54956618111,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/54956618111,https://www.airlines-manager.com/aircraft/show/106499070,16:00,21:29,198,"$264,619.00","$236,092.00","$1,192.38","$43,056.29"
IAH - DEN,54947196984,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/54947196984,https://www.airlines-manager.com/aircraft/show/105562975,12:00,17:29,338,"$378,592.00","$325,358.00",$962.60,"$59,335.81"
IAH - DEN,54952417576,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/54952417576,https://www.airlines-manager.com/aircraft/show/105562971,13:00,18:29,338,"$378,592.00","$325,358.00",$962.60,"$59,335.81"
IAH - DEN,54969516436,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/54969516436,https://www.airlines-manager.com/aircraft/show/105562972,22:30,3:59,338,"$378,592.00","$325,358.00",$962.60,"$59,335.81"
IAH - DEN,54969516437,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/54969516437,https://www.airlines-manager.com/aircraft/show/105562973,23:00,4:29,338,"$378,592.00","$325,358.00",$962.60,"$59,335.81"
IAH - DEN,54971692245,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/54971692245,https://www.airlines-manager.com/aircraft/show/105562974,23:30,4:59,338,"$378,592.00","$325,358.00",$962.60,"$59,335.81"
IAH - DFW,54930654948,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/54930654948,https://www.airlines-manager.com/aircraft/show/99093333,1:00,3:59,320,"$128,758.00","$81,164.00",$253.64,"$27,205.81"
IAH - DFW,54930654949,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/54930654949,https://www.airlines-manager.com/aircraft/show/99093334,5:00,7:59,320,"$128,758.00","$81,164.00",$253.64,"$27,205.81"
IAH - DFW,54947196871,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/54947196871,https://www.airlines-manager.com/aircraft/show/99093335,11:00,13:59,320,"$128,758.00","$81,164.00",$253.64,"$27,205.81"
IAH - DFW,54952417488,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/54952417488,https://www.airlines-manager.com/aircraft/show/106499070,13:00,15:59,198,"$97,245.00","$65,157.00",$329.08,"$21,840.34"
IAH - DFW,54952417489,IAH-YEG-BUR 4,A321-200,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/54952417489,https://www.airlines-manager.com/aircraft/show/117273341,14:15,17:14,310,"$130,225.00","$90,127.00",$290.73,"$30,210.17"
IAH - DFW,54965848685,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/54965848685,https://www.airlines-manager.com/aircraft/show/99093332,21:15,0:14,320,"$128,758.00","$81,164.00",$253.64,"$27,205.81"
IAH - DSM,54930655335,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/54930655335,https://www.airlines-manager.com/aircraft/show/110424761,3:15,8:29,320,"$331,987.00","$297,057.00",$928.30,"$56,762.48"
IAH - DSM,54942363019,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/54942363019,https://www.airlines-manager.com/aircraft/show/110424758,8:45,13:59,320,"$331,987.00","$297,057.00",$928.30,"$56,762.48"
IAH - DSM,54952417781,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/54952417781,https://www.airlines-manager.com/aircraft/show/110424759,14:00,19:14,320,"$331,987.00","$297,057.00",$928.30,"$56,762.48"
IAH - DSM,54961494302,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/54961494302,https://www.airlines-manager.com/aircraft/show/110424760,18:30,23:44,320,"$331,987.00","$297,057.00",$928.30,"$56,762.48"
IAH - DTW,54930654872,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/54930654872,https://www.airlines-manager.com/aircraft/show/90183184,0:30,6:44,310,"$394,242.00","$349,485.00","$1,127.37","$56,067.11"
IAH - DTW,54930654873,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/54930654873,https://www.airlines-manager.com/aircraft/show/90183180,2:30,8:44,310,"$394,242.00","$349,485.00","$1,127.37","$56,067.11"
IAH - DTW,54937423959,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/54937423959,https://www.airlines-manager.com/aircraft/show/90183181,6:00,12:14,310,"$394,242.00","$349,485.00","$1,127.37","$56,067.11"
IAH - DTW,54952417621,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/54952417621,https://www.airlines-manager.com/aircraft/show/90183182,13:00,19:14,310,"$394,242.00","$349,485.00","$1,127.37","$56,067.11"
IAH - DTW,54961494315,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/54961494315,https://www.airlines-manager.com/aircraft/show/90183183,18:45,0:59,310,"$394,242.00","$349,485.00","$1,127.37","$56,067.11"
IAH - DTW,54965848635,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/54965848635,https://www.airlines-manager.com/aircraft/show/90140936,20:45,2:59,136,"$187,480.00","$158,934.00","$1,168.63","$25,497.43"
IAH - ELP,54930655340,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/54930655340,https://www.airlines-manager.com/aircraft/show/104717245,3:30,8:14,310,"$299,599.00","$269,242.00",$868.52,"$56,882.11"
IAH - ELP,54947196908,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/54947196908,https://www.airlines-manager.com/aircraft/show/104717246,11:00,15:44,310,"$299,599.00","$269,242.00",$868.52,"$56,882.11"
IAH - ELP,54956618153,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/54956618153,https://www.airlines-manager.com/aircraft/show/104717247,16:45,21:29,310,"$299,599.00","$269,242.00",$868.52,"$56,882.11"
IAH - ELP,54961494357,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/54961494357,https://www.airlines-manager.com/aircraft/show/104743902,19:00,23:44,112,"$142,796.00","$123,419.00","$1,101.96","$26,074.44"
IAH - ELP,54969516390,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/54969516390,https://www.airlines-manager.com/aircraft/show/104717244,22:00,2:44,310,"$299,599.00","$269,242.00",$868.52,"$56,882.11"
IAH - EUG,54930655006,IAH-EUG-MFR 2,737-900ER,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/54930655006,https://www.airlines-manager.com/aircraft/show/119525219,1:15,10:14,320,"$568,617.00","$518,885.00","$1,621.52","$57,760.85"
IAH - EUG,54930655007,IAH-EUG-MFR 1,737-900ER,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/54930655007,https://www.airlines-manager.com/aircraft/show/119525220,3:15,12:14,320,"$568,617.00","$518,885.00","$1,621.52","$57,760.85"
IAH - EUG,54947196926,IAH-EUG-MFR 5,ERJ-175,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/54947196926,https://www.airlines-manager.com/aircraft/show/119525248,11:00,20:14,112,"$268,394.00","$238,263.00","$2,127.35","$25,804.66"
IAH - EUG,54956618148,IAH-EUG-MFR 3,737-900ER,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/54956618148,https://www.airlines-manager.com/aircraft/show/119525218,16:30,1:29,320,"$568,617.00","$518,885.00","$1,621.52","$57,760.85"
IAH - EUG,54961494296,IAH-EUG-MFR 4,737-900ER,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/54961494296,https://www.airlines-manager.com/aircraft/show/119525217,18:30,3:29,320,"$568,617.00","$518,885.00","$1,621.52","$57,760.85"
IAH - EZE,54930655431,IAH 84A-2 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/54930655431,https://www.airlines-manager.com/aircraft/show/89439130,4:00,0:29,932,"$3,364,104.00","$3,066,842.00","$3,290.60","$149,723.78"
IAH - EZE,54930655433,IAH 84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/54930655433,https://www.airlines-manager.com/aircraft/show/89124075,5:30,1:59,932,"$3,364,104.00","$3,066,842.00","$3,290.60","$149,723.78"
IAH - FAR,54930655066,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/54930655066,https://www.airlines-manager.com/aircraft/show/110424754,1:30,8:14,320,"$417,352.00","$376,905.00","$1,177.83","$55,975.99"
IAH - FAR,54930655067,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/54930655067,https://www.airlines-manager.com/aircraft/show/110424755,4:15,10:59,320,"$417,352.00","$376,905.00","$1,177.83","$55,975.99"
IAH - FAR,54947196954,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/54947196954,https://www.airlines-manager.com/aircraft/show/110424756,12:00,18:44,320,"$417,352.00","$376,905.00","$1,177.83","$55,975.99"
IAH - FAR,54969516383,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/54969516383,https://www.airlines-manager.com/aircraft/show/110424757,22:00,4:44,320,"$417,352.00","$376,905.00","$1,177.83","$55,975.99"
IAH - FAT,54930655376,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/54930655376,https://www.airlines-manager.com/aircraft/show/110424760,4:00,11:44,320,"$497,045.00","$451,592.00","$1,411.23","$58,395.52"
IAH - FAT,54952417782,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/54952417782,https://www.airlines-manager.com/aircraft/show/110424761,14:00,21:44,320,"$497,045.00","$451,592.00","$1,411.23","$58,395.52"
IAH - FAT,54961494278,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/54961494278,https://www.airlines-manager.com/aircraft/show/110424758,18:15,1:59,320,"$497,045.00","$451,592.00","$1,411.23","$58,395.52"
IAH - FAT,54971692243,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/54971692243,https://www.airlines-manager.com/aircraft/show/110424759,23:30,7:14,320,"$497,045.00","$451,592.00","$1,411.23","$58,395.52"
IAH - FCA,54930655084,IAH-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/54930655084,https://www.airlines-manager.com/aircraft/show/117273391,1:45,9:59,320,"$521,296.00","$474,106.00","$1,481.58","$57,583.72"
IAH - FCA,54947196835,IAH-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/54947196835,https://www.airlines-manager.com/aircraft/show/117273390,11:00,19:14,320,"$521,296.00","$474,106.00","$1,481.58","$57,583.72"
IAH - FCA,54956618132,IAH-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/54956618132,https://www.airlines-manager.com/aircraft/show/117273392,16:15,0:29,320,"$521,296.00","$474,106.00","$1,481.58","$57,583.72"
IAH - FCA,54961494274,IAH-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/54961494274,https://www.airlines-manager.com/aircraft/show/117273389,18:15,2:29,306,"$507,296.00","$460,713.00","$1,505.60","$55,957.04"
IAH - FLL,54930654900,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/54930654900,https://www.airlines-manager.com/aircraft/show/93094695,0:30,6:14,310,"$366,964.00","$329,736.00","$1,063.66","$57,512.09"
IAH - FLL,54930654901,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/54930654901,https://www.airlines-manager.com/aircraft/show/93094696,3:45,9:29,310,"$366,964.00","$329,736.00","$1,063.66","$57,512.09"
IAH - FLL,54942363110,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/54942363110,https://www.airlines-manager.com/aircraft/show/93094697,10:00,15:44,310,"$366,964.00","$329,736.00","$1,063.66","$57,512.09"
IAH - FLL,54956618069,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/54956618069,https://www.airlines-manager.com/aircraft/show/93094698,15:45,21:29,310,"$366,964.00","$329,736.00","$1,063.66","$57,512.09"
IAH - FLL,54961494211,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/54961494211,https://www.airlines-manager.com/aircraft/show/93100455,17:45,23:29,112,"$174,104.00","$150,084.00","$1,340.04","$26,177.44"
IAH - FLL,54969516417,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/54969516417,https://www.airlines-manager.com/aircraft/show/93094699,22:30,4:14,310,"$366,964.00","$329,736.00","$1,063.66","$57,512.09"
IAH - FSD,54930655501,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/54930655501,https://www.airlines-manager.com/aircraft/show/110424757,4:45,10:29,320,"$361,825.00","$324,990.00","$1,015.59","$56,684.30"
IAH - FSD,54942362972,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/54942362972,https://www.airlines-manager.com/aircraft/show/110424754,8:15,13:59,320,"$361,825.00","$324,990.00","$1,015.59","$56,684.30"
IAH - FSD,54947196909,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/54947196909,https://www.airlines-manager.com/aircraft/show/110424755,11:00,16:44,320,"$361,825.00","$324,990.00","$1,015.59","$56,684.30"
IAH - FSD,54961494330,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/54961494330,https://www.airlines-manager.com/aircraft/show/110424756,18:45,0:29,280,"$334,386.00","$298,566.00","$1,066.31","$52,075.47"
IAH - GDL,54930655504,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/54930655504,https://www.airlines-manager.com/aircraft/show/114266977,4:45,9:59,400,"$438,019.00","$395,506.00",$988.77,"$75,574.39"
IAH - GDL,54947196819,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/54947196819,https://www.airlines-manager.com/aircraft/show/114266980,10:45,15:59,400,"$438,019.00","$395,506.00",$988.77,"$75,574.39"
IAH - GDL,54947196820,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/54947196820,https://www.airlines-manager.com/aircraft/show/114266979,12:00,17:14,400,"$438,019.00","$395,506.00",$988.77,"$75,574.39"
IAH - GDL,54965848578,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/54965848578,https://www.airlines-manager.com/aircraft/show/114266978,20:00,1:14,354,"$394,220.00","$352,931.00",$996.98,"$67,439.04"
IAH - GIG,54930654725,IAH 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/54930654725,https://www.airlines-manager.com/aircraft/show/88905140,0:00,20:14,932,"$3,375,058.00","$3,072,413.00","$3,296.58","$151,849.08"
IAH - GIG,54930654726,IAH 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/54930654726,https://www.airlines-manager.com/aircraft/show/89124074,2:00,22:14,932,"$3,375,058.00","$3,072,413.00","$3,296.58","$151,849.08"
IAH - GRR,54930655024,IAH-GRR-MSN 3,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/54930655024,https://www.airlines-manager.com/aircraft/show/117273346,1:15,7:29,310,"$389,526.00","$354,768.00","$1,144.41","$56,914.65"
IAH - GRR,54937424057,IAH-GRR-MSN 2,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/54937424057,https://www.airlines-manager.com/aircraft/show/117273347,7:15,13:29,310,"$389,526.00","$354,768.00","$1,144.41","$56,914.65"
IAH - GRR,54952417650,IAH-GRR-MSN 1,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/54952417650,https://www.airlines-manager.com/aircraft/show/117273348,14:00,20:14,310,"$389,526.00","$354,768.00","$1,144.41","$56,914.65"
IAH - GRR,54956618102,IAH-GRR-MSN 4,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/54956618102,https://www.airlines-manager.com/aircraft/show/117273345,16:00,22:14,310,"$389,526.00","$354,768.00","$1,144.41","$56,914.65"
IAH - GRU,54930654994,IAH 56A-7 E,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/54930654994,https://www.airlines-manager.com/aircraft/show/106676238,1:00,20:29,648,"$2,475,775.00","$2,306,133.00","$3,558.85","$118,364.40"
IAH - GRU,54947196934,IAH 56A-2 E,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/54947196934,https://www.airlines-manager.com/aircraft/show/106676233,11:00,6:29,648,"$2,475,775.00","$2,306,133.00","$3,558.85","$118,364.40"
IAH - GRU,54961494031,IAH 56A-4 E,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/54961494031,https://www.airlines-manager.com/aircraft/show/106676235,17:00,12:29,648,"$2,475,775.00","$2,306,133.00","$3,558.85","$118,364.40"
IAH - GSO,54930655110,IAH-SYR-ROC 1,737-900ER,https://www.airlines-manager.com/network/showline/50385734,https://www.airlines-manager.com/network/showflight/54930655110,https://www.airlines-manager.com/aircraft/show/119525224,1:45,7:44,320,"$374,176.00","$335,824.00","$1,049.45","$56,126.57"
IAH - GSO,54930655111,IAH-SYR-ROC 4,737-900ER,https://www.airlines-manager.com/network/showline/50385734,https://www.airlines-manager.com/network/showflight/54930655111,https://www.airlines-manager.com/aircraft/show/119525221,2:45,8:44,320,"$374,176.00","$335,824.00","$1,049.45","$56,126.57"
IAH - GSO,54947196826,IAH-SYR-ROC 3,737-900ER,https://www.airlines-manager.com/network/showline/50385734,https://www.airlines-manager.com/network/showflight/54947196826,https://www.airlines-manager.com/aircraft/show/119525222,11:00,16:59,320,"$374,176.00","$335,824.00","$1,049.45","$56,126.57"
IAH - GSO,54961494272,IAH-SYR-ROC 2,737-900ER,https://www.airlines-manager.com/network/showline/50385734,https://www.airlines-manager.com/network/showflight/54961494272,https://www.airlines-manager.com/aircraft/show/119525223,18:15,0:14,320,"$374,176.00","$335,824.00","$1,049.45","$56,126.57"
IAH - IAD,54930655352,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/54930655352,https://www.airlines-manager.com/aircraft/show/105400635,3:30,10:14,112,"$198,874.00","$170,620.00","$1,523.39","$25,339.60"
IAH - IAD,54937424024,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/54937424024,https://www.airlines-manager.com/aircraft/show/98578923,6:45,13:29,320,"$421,810.00","$372,226.00","$1,163.21","$55,281.09"
IAH - IAD,54942363072,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/54942363072,https://www.airlines-manager.com/aircraft/show/98578920,9:45,16:29,320,"$421,810.00","$372,226.00","$1,163.21","$55,281.09"
IAH - IAD,54952417605,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/54952417605,https://www.airlines-manager.com/aircraft/show/98578924,13:00,19:44,320,"$421,810.00","$372,226.00","$1,163.21","$55,281.09"
IAH - IAD,54961494247,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/54961494247,https://www.airlines-manager.com/aircraft/show/98578921,18:00,0:44,320,"$421,810.00","$372,226.00","$1,163.21","$55,281.09"
IAH - IAD,54969516334,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/54969516334,https://www.airlines-manager.com/aircraft/show/98578922,21:30,4:14,320,"$421,810.00","$372,226.00","$1,163.21","$55,281.09"
IAH - ICT,54942363071,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/54942363071,https://www.airlines-manager.com/aircraft/show/110424761,9:45,13:59,320,"$249,947.00","$218,363.00",$682.38,"$51,581.81"
IAH - ICT,54952417780,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/54952417780,https://www.airlines-manager.com/aircraft/show/110424758,14:00,18:14,320,"$249,947.00","$218,363.00",$682.38,"$51,581.81"
IAH - ICT,54965848497,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/54965848497,https://www.airlines-manager.com/aircraft/show/110424759,19:15,23:29,320,"$249,947.00","$218,363.00",$682.38,"$51,581.81"
IAH - ICT,54971692281,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/54971692281,https://www.airlines-manager.com/aircraft/show/110424760,23:45,3:59,315,"$247,596.00","$216,085.00",$685.98,"$51,043.70"
IAH - IND,54930654730,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/54930654730,https://www.airlines-manager.com/aircraft/show/100684074,0:00,5:29,310,"$343,077.00","$309,211.00",$997.45,"$56,391.06"
IAH - IND,54930654731,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/54930654731,https://www.airlines-manager.com/aircraft/show/110582845,4:45,10:14,198,"$260,133.00","$233,004.00","$1,176.79","$42,493.13"
IAH - IND,54937423980,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/54937423980,https://www.airlines-manager.com/aircraft/show/100684071,6:00,11:29,310,"$343,077.00","$309,211.00",$997.45,"$56,391.06"
IAH - IND,54947196948,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/54947196948,https://www.airlines-manager.com/aircraft/show/100684072,11:30,16:59,310,"$343,077.00","$309,211.00",$997.45,"$56,391.06"
IAH - IND,54961494206,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/54961494206,https://www.airlines-manager.com/aircraft/show/100684073,17:45,23:14,310,"$343,077.00","$309,211.00",$997.45,"$56,391.06"
IAH - JAC,54930655196,IAH-SNA-SBA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/54930655196,https://www.airlines-manager.com/aircraft/show/119525225,2:00,8:59,272,"$396,285.00","$368,809.00","$1,355.92","$52,812.74"
IAH - JAC,54947196928,IAH-SNA-SBA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/54947196928,https://www.airlines-manager.com/aircraft/show/119525227,11:00,17:59,272,"$396,285.00","$368,809.00","$1,355.92","$52,812.74"
IAH - JAC,54952417443,IAH-SNA-SBA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/54952417443,https://www.airlines-manager.com/aircraft/show/119525228,13:00,19:59,272,"$396,285.00","$368,809.00","$1,355.92","$52,812.74"
IAH - JAC,54961494325,IAH-SNA-SBA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/54961494325,https://www.airlines-manager.com/aircraft/show/119525226,18:45,1:44,272,"$396,285.00","$368,809.00","$1,355.92","$52,812.74"
IAH - JAC,54965848637,IAH-SNA-SBA-5,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/54965848637,https://www.airlines-manager.com/aircraft/show/119525229,20:45,3:44,272,"$396,285.00","$368,809.00","$1,355.92","$52,812.74"
IAH - JAN,54930654897,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/54930654897,https://www.airlines-manager.com/aircraft/show/110424756,0:30,3:59,320,"$176,882.00","$149,431.00",$466.97,"$42,898.85"
IAH - JAN,54947196808,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/54947196808,https://www.airlines-manager.com/aircraft/show/110424757,10:30,13:59,320,"$176,882.00","$149,431.00",$466.97,"$42,898.85"
IAH - JAN,54952417734,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/54952417734,https://www.airlines-manager.com/aircraft/show/110424754,14:00,17:29,320,"$176,882.00","$149,431.00",$466.97,"$42,898.85"
IAH - JAN,54956618152,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/54956618152,https://www.airlines-manager.com/aircraft/show/110424755,16:45,20:14,306,"$172,198.00","$144,879.00",$473.46,"$41,592.06"
IAH - JAX,54930655316,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/54930655316,https://www.airlines-manager.com/aircraft/show/104717247,3:00,8:14,310,"$336,821.00","$304,593.00",$982.56,"$58,202.48"
IAH - JAX,54937424094,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/54937424094,https://www.airlines-manager.com/aircraft/show/104743902,8:00,13:14,112,"$159,757.00","$138,997.00","$1,241.04","$26,559.94"
IAH - JAX,54947196914,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/54947196914,https://www.airlines-manager.com/aircraft/show/104717244,11:00,16:14,310,"$336,821.00","$304,593.00",$982.56,"$58,202.48"
IAH - JAX,54956618136,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/54956618136,https://www.airlines-manager.com/aircraft/show/104717245,16:30,21:44,310,"$336,821.00","$304,593.00",$982.56,"$58,202.48"
IAH - JAX,54965848689,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/54965848689,https://www.airlines-manager.com/aircraft/show/104717246,21:15,2:29,310,"$336,821.00","$304,593.00",$982.56,"$58,202.48"
IAH - JFK,54930655168,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/54930655168,https://www.airlines-manager.com/aircraft/show/89233038,2:00,9:29,400,"$620,114.00","$546,805.00","$1,367.01","$73,069.71"
IAH - JFK,54947196881,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/54947196881,https://www.airlines-manager.com/aircraft/show/88400798,11:00,18:29,400,"$620,114.00","$546,805.00","$1,367.01","$73,069.71"
IAH - JFK,54961494287,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/54961494287,https://www.airlines-manager.com/aircraft/show/88400800,18:15,1:44,400,"$620,114.00","$546,805.00","$1,367.01","$73,069.71"
IAH - JFK,54965848482,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/54965848482,https://www.airlines-manager.com/aircraft/show/88400799,19:15,2:44,400,"$620,114.00","$546,805.00","$1,367.01","$73,069.71"
IAH - JFK,54965848483,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/54965848483,https://www.airlines-manager.com/aircraft/show/88400801,21:15,4:44,400,"$620,114.00","$546,805.00","$1,367.01","$73,069.71"
IAH - LAS,54930655377,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/54930655377,https://www.airlines-manager.com/aircraft/show/96256511,4:00,10:44,320,"$428,374.00","$366,893.00","$1,146.54","$54,489.06"
IAH - LAS,54930655378,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/54930655378,https://www.airlines-manager.com/aircraft/show/96250652,5:00,11:44,320,"$428,374.00","$366,893.00","$1,146.54","$54,489.06"
IAH - LAS,54930655379,IAH-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/54930655379,https://www.airlines-manager.com/aircraft/show/96990010,5:15,11:59,112,"$201,610.00","$167,316.00","$1,493.89","$24,848.91"
IAH - LAS,54947196872,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/54947196872,https://www.airlines-manager.com/aircraft/show/96177955,11:00,17:44,320,"$428,374.00","$366,893.00","$1,146.54","$54,489.06"
IAH - LAS,54956617950,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/54956617950,https://www.airlines-manager.com/aircraft/show/95894466,14:45,21:29,320,"$428,374.00","$366,893.00","$1,146.54","$54,489.06"
IAH - LAS,54961494199,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/54961494199,https://www.airlines-manager.com/aircraft/show/82323704,17:30,0:14,112,"$201,610.00","$167,316.00","$1,493.89","$24,848.91"
IAH - LAS,54965848650,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/54965848650,https://www.airlines-manager.com/aircraft/show/96183549,20:45,3:29,320,"$428,374.00","$366,893.00","$1,146.54","$54,489.06"
IAH - LAX,54930655271,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/54930655271,https://www.airlines-manager.com/aircraft/show/88400799,2:45,9:59,400,"$608,073.00","$535,900.00","$1,339.75","$74,087.56"
IAH - LAX,54930655272,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/54930655272,https://www.airlines-manager.com/aircraft/show/88400798,3:45,10:59,400,"$608,073.00","$535,900.00","$1,339.75","$74,087.56"
IAH - LAX,54930655273,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/54930655273,https://www.airlines-manager.com/aircraft/show/88400801,4:45,11:59,400,"$608,073.00","$535,900.00","$1,339.75","$74,087.56"
IAH - LAX,54947196809,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/54947196809,https://www.airlines-manager.com/aircraft/show/89233038,10:30,17:44,400,"$608,073.00","$535,900.00","$1,339.75","$74,087.56"
IAH - LAX,54947196810,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/54947196810,https://www.airlines-manager.com/aircraft/show/88400800,11:00,18:14,400,"$608,073.00","$535,900.00","$1,339.75","$74,087.56"
IAH - LEX,54930655480,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/54930655480,https://www.airlines-manager.com/aircraft/show/114373410,4:30,9:44,310,"$333,493.00","$303,515.00",$979.08,"$57,996.50"
IAH - LEX,54942363053,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/54942363053,https://www.airlines-manager.com/aircraft/show/113994196,9:15,14:29,310,"$333,493.00","$303,515.00",$979.08,"$57,996.50"
IAH - LEX,54956618012,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/54956618012,https://www.airlines-manager.com/aircraft/show/86385103,15:00,20:14,310,"$333,493.00","$303,515.00",$979.08,"$57,996.50"
IAH - LEX,54965848500,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/54965848500,https://www.airlines-manager.com/aircraft/show/82543907,19:15,0:29,112,"$158,473.00","$139,040.00","$1,241.43","$26,568.15"
IAH - LEX,54969516415,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/54969516415,https://www.airlines-manager.com/aircraft/show/114373409,22:15,3:29,263,"$303,685.00","$274,773.00","$1,044.76","$52,504.39"
IAH - LIM,54952417813,IAH 84A-1 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/54952417813,https://www.airlines-manager.com/aircraft/show/89439131,14:30,3:59,932,"$2,248,966.00","$2,049,121.00","$2,198.63","$151,974.36"
IAH - LIM,54971692259,IAH 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/54971692259,https://www.airlines-manager.com/aircraft/show/89124074,23:45,13:14,932,"$2,248,966.00","$2,049,121.00","$2,198.63","$151,974.36"
IAH - LIT,54930655368,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/54930655368,https://www.airlines-manager.com/aircraft/show/96692491,3:45,7:14,310,"$188,277.00","$164,271.00",$529.91,"$47,159.14"
IAH - LIT,54947196923,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/54947196923,https://www.airlines-manager.com/aircraft/show/96692343,11:00,14:29,310,"$188,277.00","$164,271.00",$529.91,"$47,159.14"
IAH - LIT,54965848513,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/54965848513,https://www.airlines-manager.com/aircraft/show/96691558,19:30,22:59,310,"$188,277.00","$164,271.00",$529.91,"$47,159.14"
IAH - LIT,54965848514,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/54965848514,https://www.airlines-manager.com/aircraft/show/106014350,20:00,23:29,198,"$142,091.00","$122,870.00",$620.56,"$35,273.68"
IAH - LIT,54971692241,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/54971692241,https://www.airlines-manager.com/aircraft/show/96694086,23:30,2:59,272,"$174,672.00","$151,056.00",$555.35,"$43,365.36"
IAH - MCI,54930654970,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/54930654970,https://www.airlines-manager.com/aircraft/show/103882358,1:00,5:44,310,"$300,045.00","$268,887.00",$867.38,"$56,807.11"
IAH - MCI,54942363055,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/54942363055,https://www.airlines-manager.com/aircraft/show/103882357,9:15,13:59,310,"$300,045.00","$268,887.00",$867.38,"$56,807.11"
IAH - MCI,54952417433,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/54952417433,https://www.airlines-manager.com/aircraft/show/103882356,13:00,17:44,310,"$300,045.00","$268,887.00",$867.38,"$56,807.11"
IAH - MCI,54961494228,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/54961494228,https://www.airlines-manager.com/aircraft/show/105099861,18:00,22:44,112,"$142,548.00","$122,728.00","$1,095.79","$25,928.45"
IAH - MCI,54965848656,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/54965848656,https://www.airlines-manager.com/aircraft/show/103882355,21:00,1:44,310,"$300,045.00","$268,887.00",$867.38,"$56,807.11"
IAH - MCO,54930654960,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/54930654960,https://www.airlines-manager.com/aircraft/show/90183183,1:00,6:29,310,"$345,341.00","$302,947.00",$977.25,"$55,248.69"
IAH - MCO,54930654961,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/54930654961,https://www.airlines-manager.com/aircraft/show/90140936,3:00,8:29,136,"$164,440.00","$137,662.00","$1,012.22","$25,105.53"
IAH - MCO,54937424025,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/54937424025,https://www.airlines-manager.com/aircraft/show/90183184,6:45,12:14,310,"$345,341.00","$302,947.00",$977.25,"$55,248.69"
IAH - MCO,54942363013,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/54942363013,https://www.airlines-manager.com/aircraft/show/90183180,8:45,14:14,310,"$345,341.00","$302,947.00",$977.25,"$55,248.69"
IAH - MCO,54952417620,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/54952417620,https://www.airlines-manager.com/aircraft/show/90183181,13:00,18:29,310,"$345,341.00","$302,947.00",$977.25,"$55,248.69"
IAH - MCO,54965848478,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/54965848478,https://www.airlines-manager.com/aircraft/show/90183182,19:15,0:44,310,"$345,341.00","$302,947.00",$977.25,"$55,248.69"
IAH - MEM,54930655538,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/54930655538,https://www.airlines-manager.com/aircraft/show/99093332,5:45,9:44,320,"$222,848.00","$189,486.00",$592.14,"$47,569.71"
IAH - MEM,54942363062,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/54942363062,https://www.airlines-manager.com/aircraft/show/99093333,9:30,13:29,320,"$222,848.00","$189,486.00",$592.14,"$47,569.71"
IAH - MEM,54952417766,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/54952417766,https://www.airlines-manager.com/aircraft/show/99093334,14:00,17:59,320,"$222,848.00","$189,486.00",$592.14,"$47,569.71"
IAH - MEM,54965848509,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/54965848509,https://www.airlines-manager.com/aircraft/show/99093335,19:30,23:29,320,"$222,848.00","$189,486.00",$592.14,"$47,569.71"
IAH - MEM,54969516328,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/54969516328,https://www.airlines-manager.com/aircraft/show/106499070,21:30,1:29,198,"$169,219.00","$146,229.00",$738.53,"$36,710.21"
IAH - MEX,54930655126,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/54930655126,https://www.airlines-manager.com/aircraft/show/97026605,1:45,6:44,136,"$153,432.00","$128,531.00",$945.08,"$25,792.17"
IAH - MEX,54930655128,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/54930655128,https://www.airlines-manager.com/aircraft/show/97076945,5:30,10:29,400,"$414,085.00","$365,742.00",$914.36,"$73,393.04"
IAH - MEX,54942363009,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/54942363009,https://www.airlines-manager.com/aircraft/show/97076942,8:30,13:29,400,"$414,085.00","$365,742.00",$914.36,"$73,393.04"
IAH - MEX,54952417619,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/54952417619,https://www.airlines-manager.com/aircraft/show/97076946,13:00,17:59,400,"$414,085.00","$365,742.00",$914.36,"$73,393.04"
IAH - MEX,54956618099,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/54956618099,https://www.airlines-manager.com/aircraft/show/97076943,16:00,20:59,391,"$405,820.00","$357,701.00",$914.84,"$71,779.46"
IAH - MEX,54969516425,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/54969516425,https://www.airlines-manager.com/aircraft/show/97076944,22:30,3:29,284,"$307,549.00","$262,087.00",$922.84,"$52,592.71"
IAH - MFR,54930655071,IAH-EUG-MFR 3,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/54930655071,https://www.airlines-manager.com/aircraft/show/119525218,1:30,10:14,320,"$553,376.00","$504,007.00","$1,575.02","$57,710.73"
IAH - MFR,54930655072,IAH-EUG-MFR 4,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/54930655072,https://www.airlines-manager.com/aircraft/show/119525217,3:30,12:14,320,"$553,376.00","$504,007.00","$1,575.02","$57,710.73"
IAH - MFR,54947196825,IAH-EUG-MFR 2,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/54947196825,https://www.airlines-manager.com/aircraft/show/119525219,11:00,19:44,320,"$553,376.00","$504,007.00","$1,575.02","$57,710.73"
IAH - MFR,54952417442,IAH-EUG-MFR 1,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/54952417442,https://www.airlines-manager.com/aircraft/show/119525220,13:00,21:44,320,"$553,376.00","$504,007.00","$1,575.02","$57,710.73"
IAH - MFR,54965848608,IAH-EUG-MFR 5,ERJ-175,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/54965848608,https://www.airlines-manager.com/aircraft/show/119525248,20:15,5:14,112,"$261,423.00","$231,650.00","$2,068.30","$25,786.64"
IAH - MHT,54930655065,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/54930655065,https://www.airlines-manager.com/aircraft/show/114266971,1:30,9:44,320,"$523,407.00","$475,551.00","$1,486.10","$57,759.23"
IAH - MHT,54937424009,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/54937424009,https://www.airlines-manager.com/aircraft/show/114266970,6:45,14:59,320,"$523,407.00","$475,551.00","$1,486.10","$57,759.23"
IAH - MHT,54947196992,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/54947196992,https://www.airlines-manager.com/aircraft/show/114266972,12:00,20:14,320,"$523,407.00","$475,551.00","$1,486.10","$57,759.23"
IAH - MHT,54956618086,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/54956618086,https://www.airlines-manager.com/aircraft/show/114266976,16:00,0:14,320,"$523,407.00","$475,551.00","$1,486.10","$57,759.23"
IAH - MHT,54961494216,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/54961494216,https://www.airlines-manager.com/aircraft/show/92800067,17:45,1:59,112,"$246,747.00","$218,180.00","$1,948.04","$26,499.60"
IAH - MIA,54930654938,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/54930654938,https://www.airlines-manager.com/aircraft/show/90183182,0:45,6:29,310,"$370,158.00","$324,401.00","$1,046.45","$56,581.57"
IAH - MIA,54937424003,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/54937424003,https://www.airlines-manager.com/aircraft/show/90183183,6:30,12:14,310,"$370,158.00","$324,401.00","$1,046.45","$56,581.57"
IAH - MIA,54942363010,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/54942363010,https://www.airlines-manager.com/aircraft/show/90140936,8:30,14:14,136,"$176,283.00","$147,315.00","$1,083.20","$25,694.48"
IAH - MIA,54952417623,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/54952417623,https://www.airlines-manager.com/aircraft/show/90183184,13:00,18:44,310,"$370,158.00","$324,401.00","$1,046.45","$56,581.57"
IAH - MIA,54956617959,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/54956617959,https://www.airlines-manager.com/aircraft/show/90183180,15:00,20:44,310,"$370,158.00","$324,401.00","$1,046.45","$56,581.57"
IAH - MIA,54961494308,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/54961494308,https://www.airlines-manager.com/aircraft/show/90183181,18:30,0:14,310,"$370,158.00","$324,401.00","$1,046.45","$56,581.57"
IAH - MKE,54930654947,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/54930654947,https://www.airlines-manager.com/aircraft/show/104258212,1:00,6:59,310,"$379,077.00","$343,943.00","$1,109.49","$57,483.51"
IAH - MKE,54937424092,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/54937424092,https://www.airlines-manager.com/aircraft/show/104258211,8:00,13:59,310,"$379,077.00","$343,943.00","$1,109.49","$57,483.51"
IAH - MKE,54942363045,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/54942363045,https://www.airlines-manager.com/aircraft/show/103534664,9:00,14:59,112,"$179,025.00","$156,225.00","$1,394.87","$26,110.03"
IAH - MKE,54952417760,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/54952417760,https://www.airlines-manager.com/aircraft/show/104258214,14:00,19:59,310,"$379,077.00","$343,943.00","$1,109.49","$57,483.51"
IAH - MKE,54965848486,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/54965848486,https://www.airlines-manager.com/aircraft/show/104258213,19:15,1:14,310,"$379,077.00","$343,943.00","$1,109.49","$57,483.51"
IAH - MSN,54937424062,IAH-GRR-MSN 3,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/54937424062,https://www.airlines-manager.com/aircraft/show/117273346,7:30,13:29,310,"$372,122.00","$339,037.00","$1,093.67","$56,663.57"
IAH - MSN,54952417649,IAH-GRR-MSN 2,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/54952417649,https://www.airlines-manager.com/aircraft/show/117273347,14:00,19:59,310,"$372,122.00","$339,037.00","$1,093.67","$56,663.57"
IAH - MSN,54965848605,IAH-GRR-MSN 1,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/54965848605,https://www.airlines-manager.com/aircraft/show/117273348,20:15,2:14,310,"$372,122.00","$339,037.00","$1,093.67","$56,663.57"
IAH - MSN,54969516413,IAH-GRR-MSN 4,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/54969516413,https://www.airlines-manager.com/aircraft/show/117273345,22:15,4:14,310,"$372,122.00","$339,037.00","$1,093.67","$56,663.57"
IAH - MSO,54930655435,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/54930655435,https://www.airlines-manager.com/aircraft/show/110424756,4:00,11:59,320,"$506,889.00","$460,456.00","$1,438.93","$57,677.16"
IAH - MSO,54952417779,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/54952417779,https://www.airlines-manager.com/aircraft/show/110424757,14:00,21:59,320,"$506,889.00","$460,456.00","$1,438.93","$57,677.16"
IAH - MSO,54961494190,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/54961494190,https://www.airlines-manager.com/aircraft/show/110424754,17:30,1:29,320,"$506,889.00","$460,456.00","$1,438.93","$57,677.16"
IAH - MSO,54965848594,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/54965848594,https://www.airlines-manager.com/aircraft/show/110424755,20:15,4:14,320,"$506,889.00","$460,456.00","$1,438.93","$57,677.16"
IAH - MSP,54930655382,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/54930655382,https://www.airlines-manager.com/aircraft/show/95894466,4:00,9:59,320,"383,173$","333,877$","$1,043.37","$55,801.17"
IAH - MSP,54930655383,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/54930655383,https://www.airlines-manager.com/aircraft/show/82323704,5:00,11:14,112,"181,989$","154,324$","$1,377.89","$24,757.86"
IAH - MSP,54942363091,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/54942363091,https://www.airlines-manager.com/aircraft/show/96183549,10:00,15:59,320,"383,173$","333,877$","$1,043.37","$55,801.17"
IAH - MSP,54961494213,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/54961494213,https://www.airlines-manager.com/aircraft/show/96250652,17:45,23:44,320,"383,173$","333,877$","$1,043.37","$55,801.17"
IAH - MSP,54969516335,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/54969516335,https://www.airlines-manager.com/aircraft/show/96256511,21:30,3:29,320,"383,173$","333,877$","$1,043.37","$55,801.17"
IAH - MSP,54969516336,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/54969516336,https://www.airlines-manager.com/aircraft/show/96177955,22:30,4:29,320,"383,173$","333,877$","$1,043.37","$55,801.17"
IAH - MSY,54930655369,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/54930655369,https://www.airlines-manager.com/aircraft/show/106007216,3:45,6:59,338,"170,355$","145,708$",$431.09,"$45,064.33"
IAH - MSY,54930655370,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/54930655370,https://www.airlines-manager.com/aircraft/show/106007217,4:45,7:59,338,"170,355$","145,708$",$431.09,"$45,064.33"
IAH - MSY,54947196919,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/54947196919,https://www.airlines-manager.com/aircraft/show/106007215,11:00,14:14,338,"170,355$","145,708$",$431.09,"$45,064.33"
IAH - MSY,54961494226,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/54961494226,https://www.airlines-manager.com/aircraft/show/106007214,17:45,20:59,338,"170,355$","145,708$",$431.09,"$45,064.33"
IAH - MSY,54965848625,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/54965848625,https://www.airlines-manager.com/aircraft/show/106007213,20:30,23:44,264,"148,203$","124,069$",$469.96,"$38,371.86"
IAH - MTY,54930655339,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/54930655339,https://www.airlines-manager.com/aircraft/show/114266974,3:30,7:14,320,"202,486$","171,969$",$537.40,"$46,063.13"
IAH - MTY,54942363056,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/54942363056,https://www.airlines-manager.com/aircraft/show/105099862,9:15,12:59,112,"92,541$","76,086$",$679.34,"$20,380.18"
IAH - MTY,54952417763,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/54952417763,https://www.airlines-manager.com/aircraft/show/114266975,14:00,17:44,320,"202,486$","171,969$",$537.40,"$46,063.13"
IAH - MTY,54961494202,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/54961494202,https://www.airlines-manager.com/aircraft/show/113250059,17:30,21:14,320,"202,486$","171,969$",$537.40,"$46,063.13"
IAH - MTY,54971692237,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/54971692237,https://www.airlines-manager.com/aircraft/show/113114108,23:30,3:14,320,"202,486$","171,969$",$537.40,"$46,063.13"
IAH - OAK,54930655025,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/54930655025,https://www.airlines-manager.com/aircraft/show/98578920,1:15,9:44,320,"528,703$","477,880$","$1,493.38","$56,331.63"
IAH - OAK,54930655026,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/54930655026,https://www.airlines-manager.com/aircraft/show/98578924,3:00,11:29,320,"528,703$","477,880$","$1,493.38","$56,331.63"
IAH - OAK,54937424086,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/54937424086,https://www.airlines-manager.com/aircraft/show/98578921,8:00,16:29,320,"528,703$","477,880$","$1,493.38","$56,331.63"
IAH - OAK,54952417614,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/54952417614,https://www.airlines-manager.com/aircraft/show/98578922,13:00,21:29,320,"528,703$","477,880$","$1,493.38","$56,331.63"
IAH - OAK,54961494339,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/54961494339,https://www.airlines-manager.com/aircraft/show/105400635,19:00,3:29,112,"249,361$","219,214$","$1,957.27","$25,840.55"
IAH - OAK,54969516402,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/54969516402,https://www.airlines-manager.com/aircraft/show/98578923,22:15,6:44,320,"528,703$","477,880$","$1,493.38","$56,331.63"
IAH - OKC,54930655525,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/54930655525,https://www.airlines-manager.com/aircraft/show/107467134,5:30,9:14,310,"196,458$","171,197$",$552.25,"$45,856.34"
IAH - OKC,54942363122,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/54942363122,https://www.airlines-manager.com/aircraft/show/107467211,10:00,13:44,112,"90,701$","74,854$",$668.34,"$20,050.18"
IAH - OKC,54947196981,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/54947196981,https://www.airlines-manager.com/aircraft/show/107467131,12:00,15:44,310,"196,458$","171,197$",$552.25,"$45,856.34"
IAH - OKC,54961494225,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/54961494225,https://www.airlines-manager.com/aircraft/show/107467132,17:45,21:29,310,"196,458$","171,197$",$552.25,"$45,856.34"
IAH - OKC,54969516478,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/54969516478,https://www.airlines-manager.com/aircraft/show/107467133,23:00,2:44,310,"196,458$","171,197$",$552.25,"$45,856.34"
IAH - OMA,54930655281,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/54930655281,https://www.airlines-manager.com/aircraft/show/104258211,2:45,7:59,310,"328,759$","297,616$",$960.05,"$56,869.30"
IAH - OMA,54930655282,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/54930655282,https://www.airlines-manager.com/aircraft/show/103534664,3:45,8:59,112,"156,043$","135,992$","$1,214.21","$25,985.73"
IAH - OMA,54942363020,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/54942363020,https://www.airlines-manager.com/aircraft/show/104258214,8:45,13:59,310,"328,759$","297,616$",$960.05,"$56,869.30"
IAH - OMA,54952417761,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/54952417761,https://www.airlines-manager.com/aircraft/show/104258213,14:00,19:14,310,"328,759$","297,616$",$960.05,"$56,869.30"
IAH - OMA,54965848543,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/54965848543,https://www.airlines-manager.com/aircraft/show/104258212,19:45,0:59,310,"328,759$","297,616$",$960.05,"$56,869.30"
IAH - ONT,54930655287,IAH-ANC-ONT 1,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/54930655287,https://www.airlines-manager.com/aircraft/show/108258010,2:45,9:59,310,"$463,433.00","$422,267.00","$1,362.15","$58,377.93"
IAH - ONT,54930655288,IAH-ANC-ONT 2,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/54930655288,https://www.airlines-manager.com/aircraft/show/108258011,4:45,11:59,310,"$463,433.00","$422,267.00","$1,362.15","$58,377.93"
IAH - ONT,54947196988,IAH-ANC-ONT 3,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/54947196988,https://www.airlines-manager.com/aircraft/show/108258012,12:00,19:14,310,"463,433$","422,267$","$1,362.15","$58,377.93"
IAH - ONT,54952417743,IAH-ANC-ONT 4,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/54952417743,https://www.airlines-manager.com/aircraft/show/108089220,14:00,21:14,310,"$463,433.00","$422,267.00","$1,362.15","$58,377.93"
IAH - ONT,54956618115,IAH-ANC-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/54956618115,https://www.airlines-manager.com/aircraft/show/108286957,16:00,23:14,198,"$349,825.00","$316,835.00","$1,600.18","$43,802.07"
IAH - ORD,54930654849,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/54930654849,https://www.airlines-manager.com/aircraft/show/90183181,0:15,5:59,310,"$364,729.00","$309,763.00",$999.24,"$54,028.43"
IAH - ORD,54937423999,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/54937423999,https://www.airlines-manager.com/aircraft/show/90183182,6:30,12:14,310,"$364,729.00","$309,763.00",$999.24,"$54,028.43"
IAH - ORD,54952417622,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/54952417622,https://www.airlines-manager.com/aircraft/show/90183183,13:00,18:44,310,"$364,729.00","$309,763.00",$999.24,"$54,028.43"
IAH - ORD,54956617963,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/54956617963,https://www.airlines-manager.com/aircraft/show/90140936,15:00,20:44,136,"$173,549.00","$139,113.00","$1,022.89","$24,263.90"
IAH - ORD,54961494314,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/54961494314,https://www.airlines-manager.com/aircraft/show/90183184,18:45,0:29,310,"$364,729.00","$309,763.00",$999.24,"$54,028.43"
IAH - ORD,54965848651,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/54965848651,https://www.airlines-manager.com/aircraft/show/90183180,20:45,2:29,310,"$364,729.00","$309,763.00",$999.24,"$54,028.43"
IAH - ORF,54930654736,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/54930654736,https://www.airlines-manager.com/aircraft/show/110582843,0:00,6:44,198,"$319,502.00","$289,849.00","$1,463.88","$43,046.88"
IAH - ORF,54930654737,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/54930654737,https://www.airlines-manager.com/aircraft/show/107467130,4:15,10:59,310,"$423,249.00","$386,247.00","$1,245.96","$57,363.42"
IAH - ORF,54942362971,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/54942362971,https://www.airlines-manager.com/aircraft/show/107467127,8:15,14:59,310,"$423,249.00","$386,247.00","$1,245.96","$57,363.42"
IAH - ORF,54952417480,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/54952417480,https://www.airlines-manager.com/aircraft/show/107467128,13:00,19:44,310,"$423,249.00","$386,247.00","$1,245.96","$57,363.42"
IAH - ORF,54965848559,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/54965848559,https://www.airlines-manager.com/aircraft/show/107467129,20:00,2:44,310,"$423,249.00","$386,247.00","$1,245.96","$57,363.42"
IAH - PBI,54930655254,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/54930655254,https://www.airlines-manager.com/aircraft/show/104717246,2:30,8:14,310,"$369,248.00","$334,512.00","$1,079.07","$58,345.12"
IAH - PBI,54947196898,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/54947196898,https://www.airlines-manager.com/aircraft/show/104717247,11:00,16:44,310,"$369,248.00","$334,512.00","$1,079.07","$58,345.12"
IAH - PBI,54952417633,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/54952417633,https://www.airlines-manager.com/aircraft/show/104743902,13:15,18:59,112,"$174,724.00","$152,218.00","$1,359.09","$26,549.65"
IAH - PBI,54956618127,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/54956618127,https://www.airlines-manager.com/aircraft/show/104717244,16:15,21:59,310,"$369,248.00","$334,512.00","$1,079.07","$58,345.12"
IAH - PBI,54969516353,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/54969516353,https://www.airlines-manager.com/aircraft/show/104717245,21:45,3:29,310,"$369,248.00","$334,512.00","$1,079.07","$58,345.12"
IAH - PDX,54930655289,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/54930655289,https://www.airlines-manager.com/aircraft/show/105562975,2:45,11:44,338,"$619,638.00","$571,536.00","$1,690.93","$63,621.82"
IAH - PDX,54930655290,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/54930655290,https://www.airlines-manager.com/aircraft/show/105562972,4:00,12:59,338,"$619,638.00","$571,536.00","$1,690.93","$63,621.82"
IAH - PDX,54930655291,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/54930655291,https://www.airlines-manager.com/aircraft/show/105562974,5:00,13:59,338,"$619,638.00","$571,536.00","$1,690.93","$63,621.82"
IAH - PDX,54947196983,IAH-SEA-DEN 6,ERJ-175,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/54947196983,https://www.airlines-manager.com/aircraft/show/105601215,12:00,21:14,112,"$269,877.00","$236,466.00","$2,111.30","$25,610.04"
IAH - PDX,54952417726,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/54952417726,https://www.airlines-manager.com/aircraft/show/105562973,14:00,22:59,338,"$619,638.00","$571,536.00","$1,690.93","$63,621.82"
IAH - PDX,54961494306,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/54961494306,https://www.airlines-manager.com/aircraft/show/105562971,18:30,3:29,338,"$619,638.00","$571,536.00","$1,690.93","$63,621.82"
IAH - PHL,54947196859,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/54947196859,https://www.airlines-manager.com/aircraft/show/106007216,11:00,18:14,338,"$503,505.00","$458,323.00","$1,355.99","$63,362.63"
IAH - PHL,54952417784,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/54952417784,https://www.airlines-manager.com/aircraft/show/106007215,14:15,21:29,338,"$503,505.00","$458,323.00","$1,355.99","$63,362.63"
IAH - PHL,54965848654,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/54965848654,https://www.airlines-manager.com/aircraft/show/106007214,21:00,4:14,338,"$503,505.00","$458,323.00","$1,355.99","$63,362.63"
IAH - PHL,54969516330,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/54969516330,https://www.airlines-manager.com/aircraft/show/106007217,21:30,4:44,338,"$503,505.00","$458,323.00","$1,355.99","$63,362.63"
IAH - PHL,54971692269,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/54971692269,https://www.airlines-manager.com/aircraft/show/106007213,23:45,6:59,338,"$503,505.00","$458,323.00","$1,355.99","$63,362.63"
IAH - PHX,54930655380,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/54930655380,https://www.airlines-manager.com/aircraft/show/96183549,4:00,9:59,320,"$379,088.00","$327,054.00","$1,022.04","$54,660.84"
IAH - PHX,54930655381,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/54930655381,https://www.airlines-manager.com/aircraft/show/96177955,5:00,10:59,320,"$379,088.00","$327,054.00","$1,022.04","$54,660.84"
IAH - PHX,54947196944,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/54947196944,https://www.airlines-manager.com/aircraft/show/82323704,11:30,17:29,112,"$179,363.00","$150,412.00","$1,342.96","$25,138.50"
IAH - PHX,54947196945,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/54947196945,https://www.airlines-manager.com/aircraft/show/96250652,11:45,17:44,320,"$379,088.00","$327,054.00","$1,022.04","$54,660.84"
IAH - PHX,54956618052,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/54956618052,https://www.airlines-manager.com/aircraft/show/96256511,15:30,21:29,320,"$379,088.00","$327,054.00","$1,022.04","$54,660.84"
IAH - PHX,54969516338,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/54969516338,https://www.airlines-manager.com/aircraft/show/95894466,21:30,3:29,320,"$379,088.00","$327,054.00","$1,022.04","$54,660.84"
IAH - PIT,54930655514,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/54930655514,https://www.airlines-manager.com/aircraft/show/100684073,5:00,11:29,310,"$405,248.00","$366,884.00","$1,183.50","$56,588.79"
IAH - PIT,54947196935,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/54947196935,https://www.airlines-manager.com/aircraft/show/100684074,11:15,17:44,310,"$405,248.00","$366,884.00","$1,183.50","$56,588.79"
IAH - PIT,54956618121,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/54956618121,https://www.airlines-manager.com/aircraft/show/110582845,16:00,22:29,198,"$306,127.00","$275,388.00","$1,390.85","$42,476.30"
IAH - PIT,54961494069,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/54961494069,https://www.airlines-manager.com/aircraft/show/100684071,17:15,23:44,310,"$405,248.00","$366,884.00","$1,183.50","$56,588.79"
IAH - PIT,54969516463,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/54969516463,https://www.airlines-manager.com/aircraft/show/100684072,22:45,5:14,310,"$405,248.00","$366,884.00","$1,183.50","$56,588.79"
IAH - PSP,54930655035,IAH-YEG-BUR 2,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/54930655035,https://www.airlines-manager.com/aircraft/show/117273343,1:30,8:29,310,"$450,668.00","$412,614.00","$1,331.01","$59,085.54"
IAH - PSP,54930655036,IAH-YEG-BUR 1,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/54930655036,https://www.airlines-manager.com/aircraft/show/117273344,3:45,10:44,310,"$450,668.00","$412,614.00","$1,331.01","$59,085.54"
IAH - PSP,54947196886,IAH-YEG-BUR 3,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/54947196886,https://www.airlines-manager.com/aircraft/show/117273342,11:00,17:59,310,"$450,668.00","$412,614.00","$1,331.01","$59,085.54"
IAH - PSP,54961494293,IAH-YEG-BUR 5,A321neo,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/54961494293,https://www.airlines-manager.com/aircraft/show/117273340,18:30,1:29,338,"$488,395.00","$451,924.00","$1,337.05","$64,714.65"
IAH - PVD,54930655270,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/54930655270,https://www.airlines-manager.com/aircraft/show/107467129,2:45,10:59,310,"$516,263.00","$474,753.00","$1,531.46","$57,662.31"
IAH - PVD,54937424016,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/54937424016,https://www.airlines-manager.com/aircraft/show/110582843,6:45,14:59,198,"$389,086.00","$355,811.00","$1,797.03","$43,215.91"
IAH - PVD,54952417482,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/54952417482,https://www.airlines-manager.com/aircraft/show/107467130,13:00,21:14,310,"$516,263.00","$474,753.00","$1,531.46","$57,662.31"
IAH - PVD,54961494045,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/54961494045,https://www.airlines-manager.com/aircraft/show/107467127,17:00,1:14,310,"$516,263.00","$474,753.00","$1,531.46","$57,662.31"
IAH - PVD,54965848540,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/54965848540,https://www.airlines-manager.com/aircraft/show/107467128,19:45,3:59,310,"$516,263.00","$474,753.00","$1,531.46","$57,662.31"
IAH - PVR,54930655307,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/54930655307,https://www.airlines-manager.com/aircraft/show/105099862,3:00,8:29,112,"$166,498.00","$145,084.00","$1,295.39","$26,459.09"
IAH - PVR,54942362989,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/54942362989,https://www.airlines-manager.com/aircraft/show/114266975,8:30,13:59,320,"$355,635.00","$318,001.00",$993.75,"$57,994.10"
IAH - PVR,54947196960,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/54947196960,https://www.airlines-manager.com/aircraft/show/113250059,12:00,17:29,320,"$355,635.00","$318,001.00",$993.75,"$57,994.10"
IAH - PVR,54961494237,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/54961494237,https://www.airlines-manager.com/aircraft/show/113114108,18:00,23:29,320,"$355,635.00","$318,001.00",$993.75,"$57,994.10"
IAH - PVR,54969516369,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/54969516369,https://www.airlines-manager.com/aircraft/show/114266974,22:00,3:29,320,"$355,635.00","$318,001.00",$993.75,"$57,994.10"
IAH - PWM,54937424080,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/54937424080,https://www.airlines-manager.com/aircraft/show/106014350,7:45,16:14,198,"$406,630.00","$372,446.00","$1,881.04","$43,903.26"
IAH - PWM,54947196857,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/54947196857,https://www.airlines-manager.com/aircraft/show/96691558,11:00,19:29,310,"$540,000.00","$497,359.00","$1,604.38","$58,627.78"
IAH - PWM,54956618008,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/54956618008,https://www.airlines-manager.com/aircraft/show/96694086,15:00,23:29,310,"$540,000.00","$497,359.00","$1,604.38","$58,627.78"
IAH - PWM,54965848476,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/54965848476,https://www.airlines-manager.com/aircraft/show/96692491,19:15,3:44,310,"$540,000.00","$497,359.00","$1,604.38","$58,627.78"
IAH - PWM,54969516455,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/54969516455,https://www.airlines-manager.com/aircraft/show/96692343,22:45,7:14,310,"$540,000.00","$497,359.00","$1,604.38","$58,627.78"
IAH - RAP,54930655198,IAH-GRR-MSN 1,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/54930655198,https://www.airlines-manager.com/aircraft/show/117273348,2:15,8:29,310,"$388,314.00","$354,066.00","$1,142.15","$56,802.03"
IAH - RAP,54930655200,IAH-GRR-MSN 4,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/54930655200,https://www.airlines-manager.com/aircraft/show/117273345,4:15,10:29,310,"$388,314.00","$354,066.00","$1,142.15","$56,802.03"
IAH - RAP,54952417731,IAH-GRR-MSN 3,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/54952417731,https://www.airlines-manager.com/aircraft/show/117273346,14:00,20:14,310,"$388,314.00","$354,066.00","$1,142.15","$56,802.03"
IAH - RAP,54965848554,IAH-GRR-MSN 2,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/54965848554,https://www.airlines-manager.com/aircraft/show/117273347,20:00,2:14,290,"$373,541.00","$339,874.00","$1,171.98","$54,525.24"
IAH - RDU,54930655517,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/54930655517,https://www.airlines-manager.com/aircraft/show/100684072,5:15,11:29,310,"$388,679.00","$351,875.00","$1,135.08","$56,450.53"
IAH - RDU,54947196949,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/54947196949,https://www.airlines-manager.com/aircraft/show/100684073,11:30,17:44,310,"$388,679.00","$351,875.00","$1,135.08","$56,450.53"
IAH - RDU,54961494220,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/54961494220,https://www.airlines-manager.com/aircraft/show/100684074,17:45,23:59,310,"$388,679.00","$351,875.00","$1,135.08","$56,450.53"
IAH - RDU,54969516431,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/54969516431,https://www.airlines-manager.com/aircraft/show/110582845,22:30,4:44,198,"$293,805.00","$264,316.00","$1,334.93","$42,403.64"
IAH - RDU,54971692282,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/54971692282,https://www.airlines-manager.com/aircraft/show/100684071,23:45,5:59,310,"$388,679.00","$351,875.00","$1,135.08","$56,450.53"
IAH - RIC,54930655277,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/54930655277,https://www.airlines-manager.com/aircraft/show/107467133,2:45,9:14,310,"$416,537.00","$380,223.00","$1,226.53","$58,646.22"
IAH - RIC,54947196980,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/54947196980,https://www.airlines-manager.com/aircraft/show/107467134,12:00,18:29,310,"$416,537.00","$380,223.00","$1,226.53","$58,646.22"
IAH - RIC,54952417645,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/54952417645,https://www.airlines-manager.com/aircraft/show/107467211,13:45,20:14,112,"$195,969.00","$172,163.00","$1,537.17","$26,554.70"
IAH - RIC,54956618059,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/54956618059,https://www.airlines-manager.com/aircraft/show/107467131,15:45,22:14,310,"$416,537.00","$380,223.00","$1,226.53","$58,646.22"
IAH - RIC,54969516333,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/54969516333,https://www.airlines-manager.com/aircraft/show/107467132,21:30,3:59,310,"$416,537.00","$380,223.00","$1,226.53","$58,646.22"
IAH - RNO,54930655012,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/54930655012,https://www.airlines-manager.com/aircraft/show/103882357,1:15,9:14,310,"$511,991.00","$468,883.00","$1,512.53","$58,732.73"
IAH - RNO,54930655013,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/54930655013,https://www.airlines-manager.com/aircraft/show/105099861,4:00,11:59,112,"$240,901.00","$212,369.00","$1,896.15","$26,601.54"
IAH - RNO,54930655014,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/54930655014,https://www.airlines-manager.com/aircraft/show/103882356,5:00,12:59,310,"$511,991.00","$468,883.00","$1,512.53","$58,732.73"
IAH - RNO,54952417587,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/54952417587,https://www.airlines-manager.com/aircraft/show/103882355,13:00,20:59,310,"$511,991.00","$468,883.00","$1,512.53","$58,732.73"
IAH - RNO,54961494043,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/54961494043,https://www.airlines-manager.com/aircraft/show/103882358,17:00,0:59,310,"$511,991.00","$468,883.00","$1,512.53","$58,732.73"
IAH - ROC,54930654899,IAH-SYR-ROC 3,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/54930654899,https://www.airlines-manager.com/aircraft/show/119525222,0:30,7:44,320,"$461,250.00","$418,447.00","$1,307.65","$57,849.82"
IAH - ROC,54947196827,IAH-SYR-ROC 2,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/54947196827,https://www.airlines-manager.com/aircraft/show/119525223,11:00,18:14,320,"$461,250.00","$418,447.00","$1,307.65","$57,849.82"
IAH - ROC,54947196828,IAH-SYR-ROC 5,ERJ-175,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/54947196828,https://www.airlines-manager.com/aircraft/show/119525249,12:00,19:14,112,"$218,107.00","$192,828.00","$1,721.68","$26,658.25"
IAH - ROC,54961494300,IAH-SYR-ROC 1,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/54961494300,https://www.airlines-manager.com/aircraft/show/119525224,18:30,1:44,320,"$461,250.00","$418,447.00","$1,307.65","$57,849.82"
IAH - ROC,54965848510,IAH-SYR-ROC 4,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/54965848510,https://www.airlines-manager.com/aircraft/show/119525221,19:30,2:44,320,"$461,250.00","$418,447.00","$1,307.65","$57,849.82"
IAH - RSW,54930655294,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/54930655294,https://www.airlines-manager.com/aircraft/show/104717244,2:45,8:14,310,"$349,506.00","$314,948.00","$1,015.96","$57,437.33"
IAH - RSW,54947196913,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/54947196913,https://www.airlines-manager.com/aircraft/show/104717245,11:00,16:29,310,"$349,506.00","$314,948.00","$1,015.96","$57,437.33"
IAH - RSW,54956618057,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/54956618057,https://www.airlines-manager.com/aircraft/show/104717246,15:45,21:14,310,"$349,506.00","$314,948.00","$1,015.96","$57,437.33"
IAH - RSW,54969516343,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/54969516343,https://www.airlines-manager.com/aircraft/show/104717247,21:30,2:59,310,"$349,506.00","$314,948.00","$1,015.96","$57,437.33"
IAH - RSW,54971692261,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/54971692261,https://www.airlines-manager.com/aircraft/show/104743902,23:45,5:14,112,"$165,422.00","$143,186.00","$1,278.45","$26,112.95"
IAH - SAN,54930654939,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/54930654939,https://www.airlines-manager.com/aircraft/show/98578921,0:45,7:59,320,"$452,539.00","$405,198.00","$1,266.24","$56,018.16"
IAH - SAN,54930654940,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/54930654940,https://www.airlines-manager.com/aircraft/show/98578922,4:15,11:29,320,"$452,539.00","$405,198.00","$1,266.24","$56,018.16"
IAH - SAN,54947196794,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/54947196794,https://www.airlines-manager.com/aircraft/show/105400635,10:15,17:29,112,"$214,317.00","$186,858.00","$1,668.38","$25,832.90"
IAH - SAN,54956617965,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/54956617965,https://www.airlines-manager.com/aircraft/show/98578923,15:00,22:14,320,"$452,539.00","$405,198.00","$1,266.24","$56,018.16"
IAH - SAN,54961494242,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/54961494242,https://www.airlines-manager.com/aircraft/show/98578920,18:00,1:14,320,"$452,539.00","$405,198.00","$1,266.24","$56,018.16"
IAH - SAN,54965848539,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/54965848539,https://www.airlines-manager.com/aircraft/show/98578924,19:45,2:59,320,"$452,539.00","$405,198.00","$1,266.24","$56,018.16"
IAH - SAT,54930655068,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/54930655068,https://www.airlines-manager.com/aircraft/show/106499070,1:30,4:14,198,"$90,748.00","$72,869.00",$368.03,"$26,659.39"
IAH - SAT,54942363069,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/54942363069,https://www.airlines-manager.com/aircraft/show/99093332,9:45,12:29,320,"$120,033.00","$93,669.00",$292.72,"$34,269.15"
IAH - SAT,54952417765,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/54952417765,https://www.airlines-manager.com/aircraft/show/99093333,14:00,16:44,320,"$120,033.00","$93,669.00",$292.72,"$34,269.15"
IAH - SAT,54961494241,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/54961494241,https://www.airlines-manager.com/aircraft/show/99093334,18:00,20:44,320,"$120,033.00","$93,669.00",$292.72,"$34,269.15"
IAH - SAT,54971692256,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/54971692256,https://www.airlines-manager.com/aircraft/show/99093335,23:30,2:14,320,"$120,033.00","$93,669.00",$292.72,"$34,269.15"
IAH - SAV,54930655170,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/54930655170,https://www.airlines-manager.com/aircraft/show/110424758,2:00,7:29,320,"$342,511.00","$306,705.00",$958.45,"$55,934.04"
IAH - SAV,54942362993,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/54942362993,https://www.airlines-manager.com/aircraft/show/110424759,8:30,13:59,320,"$342,511.00","$306,705.00",$958.45,"$55,934.04"
IAH - SAV,54952417472,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/54952417472,https://www.airlines-manager.com/aircraft/show/110424760,13:00,18:29,320,"$342,511.00","$306,705.00",$958.45,"$55,934.04"
IAH - SAV,54969516348,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/54969516348,https://www.airlines-manager.com/aircraft/show/110424761,21:45,3:14,320,"$342,511.00","$306,705.00",$958.45,"$55,934.04"
IAH - SBA,54930655002,IAH-SNA-SBA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/54930655002,https://www.airlines-manager.com/aircraft/show/119525227,1:15,8:59,272,"$437,333.00","$407,825.00","$1,499.36","$52,735.99"
IAH - SBA,54930655003,IAH-SNA-SBA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/54930655003,https://www.airlines-manager.com/aircraft/show/119525228,3:15,10:59,272,"$437,333.00","$407,825.00","$1,499.36","$52,735.99"
IAH - SBA,54947196929,IAH-SNA-SBA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/54947196929,https://www.airlines-manager.com/aircraft/show/119525226,11:00,18:44,272,"$437,333.00","$407,825.00","$1,499.36","$52,735.99"
IAH - SBA,54952417444,IAH-SNA-SBA-5,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/54952417444,https://www.airlines-manager.com/aircraft/show/119525229,13:00,20:44,272,"$437,333.00","$407,825.00","$1,499.36","$52,735.99"
IAH - SBA,54961494270,IAH-SNA-SBA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/54961494270,https://www.airlines-manager.com/aircraft/show/119525225,18:15,1:59,272,"$437,333.00","$407,825.00","$1,499.36","$52,735.99"
IAH - SCL,54930655069,IAH 56A-1 E,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/54930655069,https://www.airlines-manager.com/aircraft/show/106676232,1:30,19:59,648,"$2,288,301.00","$2,132,185.00","$3,290.41","$115,357.17"
IAH - SCL,54937424002,IAH 56A-3 E,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/54937424002,https://www.airlines-manager.com/aircraft/show/106676234,6:30,0:59,648,"$2,288,301.00","$2,132,185.00","$3,290.41","$115,357.17"
IAH - SCL,54961494203,IAH 56A-5 E,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/54961494203,https://www.airlines-manager.com/aircraft/show/106676236,17:30,11:59,648,"$2,288,301.00","$2,132,185.00","$3,290.41","$115,357.17"
IAH - SDF,54930655374,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/54930655374,https://www.airlines-manager.com/aircraft/show/107467132,4:00,9:14,310,"$328,899.00","$296,346.00",$955.95,"$56,626.62"
IAH - SDF,54947196978,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/54947196978,https://www.airlines-manager.com/aircraft/show/107467133,12:00,17:14,310,"$328,899.00","$296,346.00",$955.95,"$56,626.62"
IAH - SDF,54961494299,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/54961494299,https://www.airlines-manager.com/aircraft/show/107467134,18:30,23:44,310,"$328,899.00","$296,346.00",$955.95,"$56,626.62"
IAH - SDF,54965848600,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/54965848600,https://www.airlines-manager.com/aircraft/show/107467211,20:15,1:29,112,"$156,193.00","$135,286.00","$1,207.91","$25,850.83"
IAH - SDF,54969516392,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/54969516392,https://www.airlines-manager.com/aircraft/show/107467131,22:15,3:29,310,"$328,899.00","$296,346.00",$955.95,"$56,626.62"
IAH - SEA,54930655350,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/54930655350,https://www.airlines-manager.com/aircraft/show/105562971,3:30,12:44,338,"$643,742.00","$588,384.00","$1,740.78","$63,723.90"
IAH - SEA,54930655351,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/54930655351,https://www.airlines-manager.com/aircraft/show/105562973,4:30,13:44,338,"$643,742.00","$588,384.00","$1,740.78","$63,723.90"
IAH - SEA,54952417574,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/54952417574,https://www.airlines-manager.com/aircraft/show/105562972,13:00,22:14,338,"$643,742.00","$588,384.00","$1,740.78","$63,723.90"
IAH - SEA,54952417575,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/54952417575,https://www.airlines-manager.com/aircraft/show/105562974,14:00,23:14,338,"$643,742.00","$588,384.00","$1,740.78","$63,723.90"
IAH - SEA,54961494201,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/54961494201,https://www.airlines-manager.com/aircraft/show/105562975,17:30,2:44,338,"$643,742.00","$588,384.00","$1,740.78","$63,723.90"
IAH - SEA,54965848690,IAH-SEA-DEN 6,ERJ-175,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/54965848690,https://www.airlines-manager.com/aircraft/show/105601215,21:15,6:44,112,"$279,368.00","$241,480.00","$2,156.07","$25,463.62"
IAH - SJC,54930655312,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/54930655312,https://www.airlines-manager.com/aircraft/show/96694086,3:00,11:14,310,"$531,297.00","$485,668.00","$1,566.67","$58,988.02"
IAH - SJC,54947196858,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/54947196858,https://www.airlines-manager.com/aircraft/show/96692491,11:00,19:14,310,"$531,297.00","$485,668.00","$1,566.67","$58,988.02"
IAH - SJC,54952417809,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/54952417809,https://www.airlines-manager.com/aircraft/show/96692343,14:30,22:44,310,"$531,297.00","$485,668.00","$1,566.67","$58,988.02"
IAH - SJC,54969516483,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/54969516483,https://www.airlines-manager.com/aircraft/show/96691558,23:00,7:14,310,"$531,297.00","$485,668.00","$1,566.67","$58,988.02"
IAH - SJC,54971692244,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/54971692244,https://www.airlines-manager.com/aircraft/show/106014350,23:30,7:44,198,"$399,774.00","$363,202.00","$1,834.35","$44,113.60"
IAH - SJD,54930655077,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/54930655077,https://www.airlines-manager.com/aircraft/show/114266975,1:45,7:44,320,"$380,962.00","$342,124.00","$1,069.14","$57,179.50"
IAH - SJD,54930655079,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/54930655079,https://www.airlines-manager.com/aircraft/show/113250059,5:15,11:14,320,"$380,962.00","$342,124.00","$1,069.14","$57,179.50"
IAH - SJD,54947196972,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/54947196972,https://www.airlines-manager.com/aircraft/show/113114108,12:00,17:59,320,"$380,962.00","$342,124.00","$1,069.14","$57,179.50"
IAH - SJD,54956618084,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/54956618084,https://www.airlines-manager.com/aircraft/show/114266974,16:00,21:59,320,"$380,962.00","$342,124.00","$1,069.14","$57,179.50"
IAH - SJD,54965848670,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/54965848670,https://www.airlines-manager.com/aircraft/show/105099862,21:00,2:59,108,"$173,491.00","$151,362.00","$1,401.50","$25,297.27"
IAH - SLC,54930655278,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/54930655278,https://www.airlines-manager.com/aircraft/show/93094698,2:45,9:29,310,"$424,254.00","$380,767.00","$1,228.28","$56,549.55"
IAH - SLC,54930655279,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/54930655279,https://www.airlines-manager.com/aircraft/show/93100455,4:45,11:29,112,"$199,641.00","$171,464.00","$1,530.93","$25,464.95"
IAH - SLC,54942363112,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/54942363112,https://www.airlines-manager.com/aircraft/show/93094699,10:00,16:44,310,"$424,254.00","$380,767.00","$1,228.28","$56,549.55"
IAH - SLC,54947197002,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/54947197002,https://www.airlines-manager.com/aircraft/show/93094695,12:00,18:44,310,"$424,254.00","$380,767.00","$1,228.28","$56,549.55"
IAH - SLC,54956618045,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/54956618045,https://www.airlines-manager.com/aircraft/show/93094696,15:15,21:59,310,"$424,254.00","$380,767.00","$1,228.28","$56,549.55"
IAH - SLC,54965848675,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/54965848675,https://www.airlines-manager.com/aircraft/show/93094697,21:00,3:44,310,"$424,254.00","$380,767.00","$1,228.28","$56,549.55"
IAH - SMF,54930655240,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/54930655240,https://www.airlines-manager.com/aircraft/show/99093335,2:15,10:29,320,"$529,867.00","$480,638.00","$1,501.99","$58,377.09"
IAH - SMF,54930655241,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/54930655241,https://www.airlines-manager.com/aircraft/show/106499070,4:15,12:29,198,"$399,187.00","$363,798.00","$1,837.36","$44,185.99"
IAH - SMF,54952417600,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/54952417600,https://www.airlines-manager.com/aircraft/show/99093332,13:00,21:14,320,"$529,867.00","$480,638.00","$1,501.99","$58,377.09"
IAH - SMF,54956618158,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/54956618158,https://www.airlines-manager.com/aircraft/show/99093333,16:45,0:59,320,"$529,867.00","$480,638.00","$1,501.99","$58,377.09"
IAH - SMF,54965848646,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/54965848646,https://www.airlines-manager.com/aircraft/show/99093334,20:45,4:59,320,"$529,867.00","$480,638.00","$1,501.99","$58,377.09"
IAH - SNA,54930655114,IAH-SNA-SBA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/54930655114,https://www.airlines-manager.com/aircraft/show/119525226,1:45,8:59,272,"$421,885.00","$392,734.00","$1,443.88","$54,295.02"
IAH - SNA,54930655116,IAH-SYR-ROC 5,ERJ-175,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/54930655116,https://www.airlines-manager.com/aircraft/show/119525249,2:45,9:59,112,"$219,979.00","$194,684.00","$1,738.25","$26,914.84"
IAH - SNA,54930655117,IAH-SNA-SBA-5,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/54930655117,https://www.airlines-manager.com/aircraft/show/119525229,3:45,10:59,272,"$421,885.00","$392,734.00","$1,443.88","$54,295.02"
IAH - SNA,54947196882,IAH-SNA-SBA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/54947196882,https://www.airlines-manager.com/aircraft/show/119525225,11:00,18:14,272,"$421,885.00","$392,734.00","$1,443.88","$54,295.02"
IAH - SNA,54961494262,IAH-SNA-SBA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/54961494262,https://www.airlines-manager.com/aircraft/show/119525227,18:00,1:14,272,"$421,885.00","$392,734.00","$1,443.88","$54,295.02"
IAH - SNA,54965848557,IAH-SNA-SBA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/54965848557,https://www.airlines-manager.com/aircraft/show/119525228,20:00,3:14,272,"$421,885.00","$392,734.00","$1,443.88","$54,295.02"
IAH - STL,54930655010,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/54930655010,https://www.airlines-manager.com/aircraft/show/88725601,1:15,5:59,310,"$299,834.00","$267,563.00",$863.11,"$56,527.39"
IAH - STL,54942362973,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/54942362973,https://www.airlines-manager.com/aircraft/show/103600702,8:15,12:59,310,"$299,834.00","$267,563.00",$863.11,"$56,527.39"
IAH - STL,54952417749,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/54952417749,https://www.airlines-manager.com/aircraft/show/103600701,14:00,18:44,310,"$299,834.00","$267,563.00",$863.11,"$56,527.39"
IAH - STL,54956617961,IAH-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/54956617961,https://www.airlines-manager.com/aircraft/show/96990010,15:00,19:44,112,"$142,579.00","$122,049.00","$1,089.72","$25,785.00"
IAH - STL,54965848612,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/54965848612,https://www.airlines-manager.com/aircraft/show/103600700,20:15,0:59,310,"$299,834.00","$267,563.00",$863.11,"$56,527.39"
IAH - STL,54969516356,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/54969516356,https://www.airlines-manager.com/aircraft/show/110582844,21:45,2:29,198,"$227,848.00","$202,002.00","$1,020.21","$42,676.48"
IAH - SYR,54930654834,IAH-SYR-ROC 2,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/54930654834,https://www.airlines-manager.com/aircraft/show/119525223,0:15,7:44,320,"$474,124.00","$429,839.00","$1,343.25","$57,439.51"
IAH - SYR,54947196829,IAH-SYR-ROC 1,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/54947196829,https://www.airlines-manager.com/aircraft/show/119525224,11:00,18:29,320,"$474,124.00","$429,839.00","$1,343.25","$57,439.51"
IAH - SYR,54947196830,IAH-SYR-ROC 4,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/54947196830,https://www.airlines-manager.com/aircraft/show/119525221,12:00,19:29,320,"$474,124.00","$429,839.00","$1,343.25","$57,439.51"
IAH - SYR,54961494007,IAH-SYR-ROC 3,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/54961494007,https://www.airlines-manager.com/aircraft/show/119525222,17:00,0:29,320,"$474,124.00","$429,839.00","$1,343.25","$57,439.51"
IAH - SYR,54965848484,IAH-SYR-ROC 5,ERJ-175,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/54965848484,https://www.airlines-manager.com/aircraft/show/119525249,19:15,2:44,112,"$224,239.00","$198,033.00","$1,768.15","$26,463.21"
IAH - TPA,54930655461,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/54930655461,https://www.airlines-manager.com/aircraft/show/93094699,4:15,9:29,310,"$326,295.00","$291,073.00",$938.95,"$55,619.04"
IAH - TPA,54937423988,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/54937423988,https://www.airlines-manager.com/aircraft/show/93094695,6:15,11:29,310,"$326,295.00","$291,073.00",$938.95,"$55,619.04"
IAH - TPA,54942363106,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/54942363106,https://www.airlines-manager.com/aircraft/show/93094696,10:00,15:14,310,"$326,295.00","$291,073.00",$938.95,"$55,619.04"
IAH - TPA,54956618068,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/54956618068,https://www.airlines-manager.com/aircraft/show/93094697,15:45,20:59,310,"$326,295.00","$291,073.00",$938.95,"$55,619.04"
IAH - TPA,54969516342,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/54969516342,https://www.airlines-manager.com/aircraft/show/93094698,21:30,2:44,310,"$326,295.00","$291,073.00",$938.95,"$55,619.04"
IAH - TPA,54971692246,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/54971692246,https://www.airlines-manager.com/aircraft/show/93100455,23:30,4:44,108,"$152,717.00","$130,347.00","$1,206.92","$24,907.07"
IAH - TUL,54930654874,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/54930654874,https://www.airlines-manager.com/aircraft/show/82543907,0:30,4:14,112,"$93,654.00","$77,440.00",$691.43,"$20,742.86"
IAH - TUL,54930654875,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/54930654875,https://www.airlines-manager.com/aircraft/show/114373409,3:30,7:14,310,"$202,768.00","$176,997.00",$570.96,"$47,409.91"
IAH - TUL,54942363073,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/54942363073,https://www.airlines-manager.com/aircraft/show/114373410,9:45,13:29,310,"$202,768.00","$176,997.00",$570.96,"$47,409.91"
IAH - TUL,54956618011,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/54956618011,https://www.airlines-manager.com/aircraft/show/113994196,15:00,18:44,310,"$202,768.00","$176,997.00",$570.96,"$47,409.91"
IAH - TUL,54965848611,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/54965848611,https://www.airlines-manager.com/aircraft/show/86385103,20:15,23:59,310,"$202,768.00","$176,997.00",$570.96,"$47,409.91"
IAH - TUS,54930655529,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/54930655529,https://www.airlines-manager.com/aircraft/show/100684074,5:30,11:14,310,"$358,693.00","$324,614.00","$1,047.14","$56,618.72"
IAH - TUS,54947196799,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/54947196799,https://www.airlines-manager.com/aircraft/show/110582845,10:15,15:59,198,"$272,008.00","$244,705.00","$1,235.88","$42,681.10"
IAH - TUS,54947196800,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/54947196800,https://www.airlines-manager.com/aircraft/show/100684071,11:30,17:14,310,"$358,693.00","$324,614.00","$1,047.14","$56,618.72"
IAH - TUS,54961494003,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/54961494003,https://www.airlines-manager.com/aircraft/show/100684072,17:00,22:44,310,"$358,693.00","$324,614.00","$1,047.14","$56,618.72"
IAH - TUS,54971692225,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/54971692225,https://www.airlines-manager.com/aircraft/show/100684073,23:15,4:59,310,"$358,693.00","$324,614.00","$1,047.14","$56,618.72"
IAH - TYS,54930655230,IAH-GRR-MSN 2,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/54930655230,https://www.airlines-manager.com/aircraft/show/117273347,2:15,7:14,310,"$325,249.00","$295,090.00",$951.90,"$59,215.38"
IAH - TYS,54942362982,IAH-GRR-MSN 1,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/54942362982,https://www.airlines-manager.com/aircraft/show/117273348,8:30,13:29,310,"$325,249.00","$295,090.00",$951.90,"$59,215.38"
IAH - TYS,54947196888,IAH-GRR-MSN 4,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/54947196888,https://www.airlines-manager.com/aircraft/show/117273345,11:00,15:59,310,"$325,249.00","$295,090.00",$951.90,"$59,215.38"
IAH - TYS,54965848610,IAH-GRR-MSN 3,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/54965848610,https://www.airlines-manager.com/aircraft/show/117273346,20:15,1:14,310,"$325,249.00","$295,090.00",$951.90,"$59,215.38"
IAH - UIO,54930654898,IAH 84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/54930654898,https://www.airlines-manager.com/aircraft/show/89124076,0:30,11:14,932,"$1,795,179.00","$1,639,785.00","$1,759.43","$152,775.00"
IAH - UIO,54952417635,IAH 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/54952417635,https://www.airlines-manager.com/aircraft/show/88905141,13:15,23:59,932,"$1,795,179.00","$1,639,785.00","$1,759.43","$152,775.00"
IAH - YEG,54930655037,IAH-YEG-BUR 5,A321neo,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/54930655037,https://www.airlines-manager.com/aircraft/show/117273340,1:30,10:44,338,"$640,827.00","$594,211.00","$1,758.02","$64,354.98"
IAH - YEG,54942362981,IAH-YEG-BUR 2,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/54942362981,https://www.airlines-manager.com/aircraft/show/117273343,8:30,17:44,310,"$591,821.00","$542,888.00","$1,751.25","$58,796.53"
IAH - YEG,54947196887,IAH-YEG-BUR 1,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/54947196887,https://www.airlines-manager.com/aircraft/show/117273344,11:00,20:14,310,"$591,821.00","$542,888.00","$1,751.25","$58,796.53"
IAH - YEG,54961494066,IAH-YEG-BUR 4,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/54961494066,https://www.airlines-manager.com/aircraft/show/117273341,17:15,2:29,310,"$591,821.00","$542,888.00","$1,751.25","$58,796.53"
IAH - YEG,54961494067,IAH-YEG-BUR 3,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/54961494067,https://www.airlines-manager.com/aircraft/show/117273342,18:00,3:14,310,"$591,821.00","$542,888.00","$1,751.25","$58,796.53"
IAH - YOW,54930655331,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/54930655331,https://www.airlines-manager.com/aircraft/show/113114108,3:15,11:14,320,"$508,793.00","$461,136.00","$1,441.05","$57,762.34"
IAH - YOW,54937424091,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/54937424091,https://www.airlines-manager.com/aircraft/show/114266974,8:00,15:59,320,"$508,793.00","$461,136.00","$1,441.05","$57,762.34"
IAH - YOW,54952417461,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/54952417461,https://www.airlines-manager.com/aircraft/show/105099862,13:00,20:59,112,"$238,579.00","$210,374.00","$1,878.34","$26,351.65"
IAH - YOW,54961494217,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/54961494217,https://www.airlines-manager.com/aircraft/show/114266975,17:45,1:44,320,"$508,793.00","$461,136.00","$1,441.05","$57,762.34"
IAH - YOW,54965848694,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/54965848694,https://www.airlines-manager.com/aircraft/show/113250059,21:15,5:14,320,"$508,793.00","$461,136.00","$1,441.05","$57,762.34"
IAH - YUL,54930654932,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/54930654932,https://www.airlines-manager.com/aircraft/show/114266980,0:45,8:44,400,"$682,424.00","$624,483.00","$1,561.21","$78,223.34"
IAH - YUL,54930654933,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/54930654933,https://www.airlines-manager.com/aircraft/show/114266979,2:00,9:59,400,"$682,424.00","$624,483.00","$1,561.21","$78,223.34"
IAH - YUL,54947196975,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/54947196975,https://www.airlines-manager.com/aircraft/show/114266978,12:00,19:59,400,"$682,424.00","$624,483.00","$1,561.21","$78,223.34"
IAH - YUL,54965848639,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/54965848639,https://www.airlines-manager.com/aircraft/show/114266977,20:45,4:44,400,"$682,424.00","$624,483.00","$1,561.21","$78,223.34"
IAH - YVR,54930654957,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/54930654957,https://www.airlines-manager.com/aircraft/show/97076946,1:00,10:29,400,"$774,150.00","$706,088.00","$1,765.22","$74,455.68"
IAH - YVR,54930654958,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/54930654958,https://www.airlines-manager.com/aircraft/show/97076943,4:00,13:29,400,"$774,150.00","$706,088.00","$1,765.22","$74,455.68"
IAH - YVR,54952417617,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/54952417617,https://www.airlines-manager.com/aircraft/show/97076944,13:00,22:29,400,"$774,150.00","$706,088.00","$1,765.22","$74,455.68"
IAH - YVR,54956618092,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/54956618092,https://www.airlines-manager.com/aircraft/show/97026605,16:00,1:44,136,"$285,820.00","$249,912.00","$1,837.59","$25,675.89"
IAH - YVR,54965848574,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/54965848574,https://www.airlines-manager.com/aircraft/show/97076945,20:00,5:29,400,"$774,150.00","$706,088.00","$1,765.22","$74,455.68"
IAH - YVR,54969516471,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/54969516471,https://www.airlines-manager.com/aircraft/show/97076942,23:00,8:29,400,"$774,150.00","$706,088.00","$1,765.22","$74,455.68"
IAH - YYC,54930655015,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/54930655015,https://www.airlines-manager.com/aircraft/show/114266978,1:15,9:59,400,"$742,774.00","$680,022.00","$1,700.06","$77,865.11"
IAH - YYC,54947196974,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/54947196974,https://www.airlines-manager.com/aircraft/show/114266977,12:00,20:44,400,"$742,774.00","$680,022.00","$1,700.06","$77,865.11"
IAH - YYC,54956618083,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/54956618083,https://www.airlines-manager.com/aircraft/show/114266980,16:00,0:44,400,"$742,774.00","$680,022.00","$1,700.06","$77,865.11"
IAH - YYC,54961494070,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/54961494070,https://www.airlines-manager.com/aircraft/show/114266979,17:15,1:59,400,"$742,774.00","$680,022.00","$1,700.06","$77,865.11"
IAH - YYZ,54930655341,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/54930655341,https://www.airlines-manager.com/aircraft/show/97076944,3:30,10:29,400,"$572,430.00","$513,782.00","$1,284.46","$73,572.60"
IAH - YYZ,54937424023,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/54937424023,https://www.airlines-manager.com/aircraft/show/97026605,6:45,13:44,136,"$211,434.00","$180,891.00","$1,330.08","$25,903.25"
IAH - YYZ,54952417618,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/54952417618,https://www.airlines-manager.com/aircraft/show/97076945,13:00,19:59,400,"$572,430.00","$513,782.00","$1,284.46","$73,572.60"
IAH - YYZ,54956618098,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/54956618098,https://www.airlines-manager.com/aircraft/show/97076942,16:00,22:59,400,"$572,430.00","$513,782.00","$1,284.46","$73,572.60"
IAH - YYZ,54961494252,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/54961494252,https://www.airlines-manager.com/aircraft/show/97076946,18:00,0:59,400,"$572,430.00","$513,782.00","$1,284.46","$73,572.60"
IAH - YYZ,54965848669,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/54965848669,https://www.airlines-manager.com/aircraft/show/97076943,21:00,3:59,400,"$572,430.00","$513,782.00","$1,284.46","$73,572.60"
IAH - LAS,54562128386,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/54562128386,https://www.airlines-manager.com/aircraft/show/95894466,14:45,21:29,320,"$428,374.00","$366,893.00","$1,146.54","$54,489.06"
IAH - LAS,54575909604,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/54575909604,https://www.airlines-manager.com/aircraft/show/96183549,20:45,3:29,320,"$428,374.00","$366,893.00","$1,146.54","$54,489.06"
IAH - MEM,54545804611,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/54545804611,https://www.airlines-manager.com/aircraft/show/99093332,5:45,9:44,320,"$221,718.00","$188,356.00",$588.61,"$47,286.03"
IAH - MEM,54551622499,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/54551622499,https://www.airlines-manager.com/aircraft/show/99093333,9:30,13:29,320,"$221,718.00","$188,356.00",$588.61,"$47,286.03"
IAH - MEM,54562128303,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/54562128303,https://www.airlines-manager.com/aircraft/show/99093334,14:00,17:59,320,"$221,718.00","$188,356.00",$588.61,"$47,286.03"
IAH - MEM,54571726843,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/54571726843,https://www.airlines-manager.com/aircraft/show/99093335,19:30,23:29,320,"$221,718.00","$188,356.00",$588.61,"$47,286.03"
IAH - MFR,54536069691,IAH-EUG-MFR 3,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/54536069691,https://www.airlines-manager.com/aircraft/show/119525218,1:30,10:14,320,"$553,376.00","$504,007.00","$1,575.02","$57,710.73"
IAH - MFR,54536069692,IAH-EUG-MFR 4,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/54536069692,https://www.airlines-manager.com/aircraft/show/119525217,3:30,12:14,320,"$553,376.00","$504,007.00","$1,575.02","$57,710.73"
IAH - MFR,54556940907,IAH-EUG-MFR 2,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/54556940907,https://www.airlines-manager.com/aircraft/show/119525219,11:00,19:44,320,"$553,376.00","$504,007.00","$1,575.02","$57,710.73"
IAH - MFR,54556940908,IAH-EUG-MFR 1,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/54556940908,https://www.airlines-manager.com/aircraft/show/119525220,13:00,21:44,320,"$553,376.00","$504,007.00","$1,575.02","$57,710.73"
IAH - MHT,54536069693,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/54536069693,https://www.airlines-manager.com/aircraft/show/114266971,1:30,9:44,320,"$523,407.00","$475,551.00","$1,486.10","$57,759.23"
IAH - MHT,54545804691,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/54545804691,https://www.airlines-manager.com/aircraft/show/114266970,6:45,14:59,320,"$523,407.00","$475,551.00","$1,486.10","$57,759.23"
IAH - MHT,54556941086,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/54556941086,https://www.airlines-manager.com/aircraft/show/114266972,12:00,20:14,320,"$523,407.00","$475,551.00","$1,486.10","$57,759.23"
IAH - MHT,54567120307,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/54567120307,https://www.airlines-manager.com/aircraft/show/114266976,16:00,0:14,320,"$523,407.00","$475,551.00","$1,486.10","$57,759.23"
IAH - MSO,54536069939,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/54536069939,https://www.airlines-manager.com/aircraft/show/110424756,4:00,11:59,320,"$506,889.00","$460,456.00","$1,438.93","$57,677.16"
IAH - MSO,54562128286,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/54562128286,https://www.airlines-manager.com/aircraft/show/110424757,14:00,21:59,320,"$506,889.00","$460,456.00","$1,438.93","$57,677.16"
IAH - MSO,54567120455,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/54567120455,https://www.airlines-manager.com/aircraft/show/110424754,17:30,1:29,320,"$506,889.00","$460,456.00","$1,438.93","$57,677.16"
IAH - MSO,54575909561,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/54575909561,https://www.airlines-manager.com/aircraft/show/110424755,20:15,4:14,320,"$506,889.00","$460,456.00","$1,438.93","$57,677.16"
IAH - MSP,54536069944,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/54536069944,https://www.airlines-manager.com/aircraft/show/95894466,4:00,9:59,320,"$383,173.00","$333,877.00","$1,043.37","$55,801.17"
IAH - MSP,54551622696,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/54551622696,https://www.airlines-manager.com/aircraft/show/96183549,10:00,15:59,320,"$383,173.00","$333,877.00","$1,043.37","$55,801.17"
IAH - MSP,54571726654,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/54571726654,https://www.airlines-manager.com/aircraft/show/96250652,17:45,23:44,320,"$383,173.00","$333,877.00","$1,043.37","$55,801.17"
IAH - MSP,54575909675,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/54575909675,https://www.airlines-manager.com/aircraft/show/96256511,21:30,3:29,320,"$383,173.00","$333,877.00","$1,043.37","$55,801.17"
IAH - MSP,54580945065,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/54580945065,https://www.airlines-manager.com/aircraft/show/96177955,22:30,4:29,320,"$383,173.00","$333,877.00","$1,043.37","$55,801.17"
IAH - MTY,54536069916,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/54536069916,https://www.airlines-manager.com/aircraft/show/114266974,3:30,7:14,320,"$202,486.00","$171,969.00",$537.40,"$46,063.13"
IAH - MTY,54562128285,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/54562128285,https://www.airlines-manager.com/aircraft/show/114266975,14:00,17:44,320,"$202,486.00","$171,969.00",$537.40,"$46,063.13"
IAH - MTY,54567120444,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/54567120444,https://www.airlines-manager.com/aircraft/show/113250059,17:30,21:14,320,"$202,486.00","$171,969.00",$537.40,"$46,063.13"
IAH - MTY,54580945229,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/54580945229,https://www.airlines-manager.com/aircraft/show/113114108,23:30,3:14,320,"$202,486.00","$171,969.00",$537.40,"$46,063.13"
IAH - OAK,54536069648,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/54536069648,https://www.airlines-manager.com/aircraft/show/98578920,1:15,9:44,320,"$528,703.00","$477,880.00","$1,493.38","$56,331.63"
IAH - OAK,54536069649,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/54536069649,https://www.airlines-manager.com/aircraft/show/98578924,3:00,11:29,320,"$528,703.00","$477,880.00","$1,493.38","$56,331.63"
IAH - OAK,54545804756,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/54545804756,https://www.airlines-manager.com/aircraft/show/98578921,8:00,16:29,320,"$528,703.00","$477,880.00","$1,493.38","$56,331.63"
IAH - OAK,54556941204,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/54556941204,https://www.airlines-manager.com/aircraft/show/98578922,13:00,21:29,320,"$528,703.00","$477,880.00","$1,493.38","$56,331.63"
IAH - OAK,54580945032,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/54580945032,https://www.airlines-manager.com/aircraft/show/98578923,22:15,6:44,320,"$528,703.00","$477,880.00","$1,493.38","$56,331.63"
IAH - PHX,54536069942,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/54536069942,https://www.airlines-manager.com/aircraft/show/96183549,4:00,9:59,320,"$379,088.00","$327,054.00","$1,022.04","$54,660.84"
IAH - PHX,54536069943,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/54536069943,https://www.airlines-manager.com/aircraft/show/96177955,5:00,10:59,320,"$379,088.00","$327,054.00","$1,022.04","$54,660.84"
IAH - PHX,54556941046,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/54556941046,https://www.airlines-manager.com/aircraft/show/96250652,11:45,17:44,320,"$379,088.00","$327,054.00","$1,022.04","$54,660.84"
IAH - PHX,54567120240,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/54567120240,https://www.airlines-manager.com/aircraft/show/96256511,15:30,21:29,320,"$379,088.00","$327,054.00","$1,022.04","$54,660.84"
IAH - PHX,54575909672,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/54575909672,https://www.airlines-manager.com/aircraft/show/95894466,21:30,3:29,320,"$379,088.00","$327,054.00","$1,022.04","$54,660.84"
IAH - PVR,54551622427,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/54551622427,https://www.airlines-manager.com/aircraft/show/114266975,8:30,13:59,320,"$355,635.00","$318,001.00",$993.75,"$57,994.10"
IAH - PVR,54556941084,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/54556941084,https://www.airlines-manager.com/aircraft/show/113250059,12:00,17:29,320,"$355,635.00","$318,001.00",$993.75,"$57,994.10"
IAH - PVR,54571726679,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/54571726679,https://www.airlines-manager.com/aircraft/show/113114108,18:00,23:29,320,"$355,635.00","$318,001.00",$993.75,"$57,994.10"
IAH - PVR,54575909748,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/54575909748,https://www.airlines-manager.com/aircraft/show/114266974,22:00,3:29,320,"$355,635.00","$318,001.00",$993.75,"$57,994.10"
IAH - ROC,54536069529,IAH-SYR-ROC 3,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/54536069529,https://www.airlines-manager.com/aircraft/show/119525222,0:30,7:44,320,"$461,250.00","$418,447.00","$1,307.65","$57,849.82"
IAH - ROC,54556940911,IAH-SYR-ROC 2,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/54556940911,https://www.airlines-manager.com/aircraft/show/119525223,11:00,18:14,320,"$461,250.00","$418,447.00","$1,307.65","$57,849.82"
IAH - ROC,54571726727,IAH-SYR-ROC 1,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/54571726727,https://www.airlines-manager.com/aircraft/show/119525224,18:30,1:44,320,"$461,250.00","$418,447.00","$1,307.65","$57,849.82"
IAH - ROC,54571726728,IAH-SYR-ROC 4,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/54571726728,https://www.airlines-manager.com/aircraft/show/119525221,19:30,2:44,320,"$461,250.00","$418,447.00","$1,307.65","$57,849.82"
IAH - SAN,54536069563,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/54536069563,https://www.airlines-manager.com/aircraft/show/98578921,0:45,7:59,320,"$452,539.00","$405,198.00","$1,266.24","$56,018.16"
IAH - SAN,54536069564,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/54536069564,https://www.airlines-manager.com/aircraft/show/98578922,4:15,11:29,320,"$452,539.00","$405,198.00","$1,266.24","$56,018.16"
IAH - SAN,54562128402,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/54562128402,https://www.airlines-manager.com/aircraft/show/98578923,15:00,22:14,320,"$452,539.00","$405,198.00","$1,266.24","$56,018.16"
IAH - SAN,54571726660,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/54571726660,https://www.airlines-manager.com/aircraft/show/98578920,18:00,1:14,320,"$452,539.00","$405,198.00","$1,266.24","$56,018.16"
IAH - SAN,54571726661,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/54571726661,https://www.airlines-manager.com/aircraft/show/98578924,19:45,2:59,320,"$452,539.00","$405,198.00","$1,266.24","$56,018.16"
IAH - SAT,54551622508,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/54551622508,https://www.airlines-manager.com/aircraft/show/99093332,9:45,12:29,320,"$119,393.00","$93,029.00",$290.72,"$34,035.00"
IAH - SAT,54562128302,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/54562128302,https://www.airlines-manager.com/aircraft/show/99093333,14:00,16:44,320,"$119,393.00","$93,029.00",$290.72,"$34,035.00"
IAH - SAT,54571726662,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/54571726662,https://www.airlines-manager.com/aircraft/show/99093334,18:00,20:44,320,"$119,393.00","$93,029.00",$290.72,"$34,035.00"
IAH - SAT,54580945223,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/54580945223,https://www.airlines-manager.com/aircraft/show/99093335,23:30,2:14,320,"$119,393.00","$93,029.00",$290.72,"$34,035.00"
IAH - SAV,54536069783,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/54536069783,https://www.airlines-manager.com/aircraft/show/110424758,2:00,7:29,320,"$342,511.00","$306,705.00",$958.45,"$55,934.04"
IAH - SAV,54551622421,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/54551622421,https://www.airlines-manager.com/aircraft/show/110424759,8:30,13:59,320,"$342,511.00","$306,705.00",$958.45,"$55,934.04"
IAH - SAV,54556941148,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/54556941148,https://www.airlines-manager.com/aircraft/show/110424760,13:00,18:29,320,"$342,511.00","$306,705.00",$958.45,"$55,934.04"
IAH - SAV,54575909705,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/54575909705,https://www.airlines-manager.com/aircraft/show/110424761,21:45,3:14,320,"$342,511.00","$306,705.00",$958.45,"$55,934.04"
IAH - SJD,54536069761,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/54536069761,https://www.airlines-manager.com/aircraft/show/114266975,1:45,7:44,320,"$380,962.00","$342,124.00","$1,069.14","$57,179.50"
IAH - SJD,54536069762,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/54536069762,https://www.airlines-manager.com/aircraft/show/113250059,5:15,11:14,320,"$380,962.00","$342,124.00","$1,069.14","$57,179.50"
IAH - SJD,54556941082,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/54556941082,https://www.airlines-manager.com/aircraft/show/113114108,12:00,17:59,320,"$380,962.00","$342,124.00","$1,069.14","$57,179.50"
IAH - SJD,54567120310,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/54567120310,https://www.airlines-manager.com/aircraft/show/114266974,16:00,21:59,320,"$380,962.00","$342,124.00","$1,069.14","$57,179.50"
IAH - SMF,54536069802,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/54536069802,https://www.airlines-manager.com/aircraft/show/99093335,2:15,10:29,320,"$529,867.00","$480,638.00","$1,501.99","$58,377.09"
IAH - SMF,54556941191,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/54556941191,https://www.airlines-manager.com/aircraft/show/99093332,13:00,21:14,320,"$529,867.00","$480,638.00","$1,501.99","$58,377.09"
IAH - SMF,54567120382,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/54567120382,https://www.airlines-manager.com/aircraft/show/99093333,16:45,0:59,320,"$529,867.00","$480,638.00","$1,501.99","$58,377.09"
IAH - SMF,54575909603,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/54575909603,https://www.airlines-manager.com/aircraft/show/99093334,20:45,4:59,320,"$529,867.00","$480,638.00","$1,501.99","$58,377.09"
IAH - SYR,54536069506,IAH-SYR-ROC 2,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/54536069506,https://www.airlines-manager.com/aircraft/show/119525223,0:15,7:44,320,"$474,124.00","$429,839.00","$1,343.25","$57,439.51"
IAH - SYR,54556940913,IAH-SYR-ROC 1,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/54556940913,https://www.airlines-manager.com/aircraft/show/119525224,11:00,18:29,320,"$474,124.00","$429,839.00","$1,343.25","$57,439.51"
IAH - SYR,54556940914,IAH-SYR-ROC 4,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/54556940914,https://www.airlines-manager.com/aircraft/show/119525221,12:00,19:29,320,"$474,124.00","$429,839.00","$1,343.25","$57,439.51"
IAH - SYR,54567120415,IAH-SYR-ROC 3,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/54567120415,https://www.airlines-manager.com/aircraft/show/119525222,17:00,0:29,320,"$474,124.00","$429,839.00","$1,343.25","$57,439.51"
IAH - YOW,54536069889,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/54536069889,https://www.airlines-manager.com/aircraft/show/113114108,3:15,11:14,320,"$508,793.00","$461,136.00","$1,441.05","$57,762.34"
IAH - YOW,54545804760,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/54545804760,https://www.airlines-manager.com/aircraft/show/114266974,8:00,15:59,320,"$508,793.00","$461,136.00","$1,441.05","$57,762.34"
IAH - YOW,54571726658,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/54571726658,https://www.airlines-manager.com/aircraft/show/114266975,17:45,1:44,320,"$508,793.00","$461,136.00","$1,441.05","$57,762.34"
IAH - YOW,54575909647,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/54575909647,https://www.airlines-manager.com/aircraft/show/113250059,21:15,5:14,320,"$508,793.00","$461,136.00","$1,441.05","$57,762.34"
MIA - ABQ,54930655018,MIA-IAD-TUS 1,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/54930655018,https://www.airlines-manager.com/aircraft/show/97556721,1:15,9:59,310,"$547,286.00","$499,445.00","$1,611.11","$57,188.36"
MIA - ABQ,54930655019,MIA-IAD-TUS 4,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/54930655019,https://www.airlines-manager.com/aircraft/show/97556718,4:15,12:59,310,"$547,286.00","$499,445.00","$1,611.11","$57,188.36"
MIA - ABQ,54942363082,MIA-IAD-TUS 3,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/54942363082,https://www.airlines-manager.com/aircraft/show/97556719,10:00,18:44,310,"$547,286.00","$499,445.00","$1,611.11","$57,188.36"
MIA - ABQ,54965848502,MIA-IAD-TUS 2,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/54965848502,https://www.airlines-manager.com/aircraft/show/97556720,19:30,4:14,310,"$547,286.00","$499,445.00","$1,611.11","$57,188.36"
MIA - ABQ,54969516433,MIA-IAD-TUS 5,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/54969516433,https://www.airlines-manager.com/aircraft/show/97556716,22:30,7:14,310,"$547,286.00","$499,445.00","$1,611.11","$57,188.36"
MIA - ACC,54952417801,MIA 84B-2 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/54952417801,https://www.airlines-manager.com/aircraft/show/106676226,14:15,11:59,962,"$3,564,950.00","$3,254,637.00","$3,383.20","$149,753.24"
MIA - ACC,54969516440,MIA 84B-4 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/54969516440,https://www.airlines-manager.com/aircraft/show/106676228,22:45,20:29,962,"$3,564,950.00","$3,254,637.00","$3,383.20","$149,753.24"
MIA - ALB,54930655355,MIA-DSM-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/54930655355,https://www.airlines-manager.com/aircraft/show/113101233,3:30,10:14,320,"$427,642.00","$386,268.00","$1,207.09","$57,366.53"
MIA - ALB,54952417464,MIA-DSM-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/54952417464,https://www.airlines-manager.com/aircraft/show/113101230,13:00,19:44,320,"$427,642.00","$386,268.00","$1,207.09","$57,366.53"
MIA - ALB,54956618080,MIA-DSM-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/54956618080,https://www.airlines-manager.com/aircraft/show/100049776,16:00,22:59,112,"$202,282.00","$178,019.00","$1,589.46","$25,491.98"
MIA - ALB,54965848592,MIA-DSM-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/54965848592,https://www.airlines-manager.com/aircraft/show/111064081,20:15,2:59,320,"$427,642.00","$386,268.00","$1,207.09","$57,366.53"
MIA - ALB,54971692216,MIA-DSM-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/54971692216,https://www.airlines-manager.com/aircraft/show/113101228,23:15,5:59,320,"$427,642.00","$386,268.00","$1,207.09","$57,366.53"
MIA - ALG,54961494032,MIA 84B-7 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/54961494032,https://www.airlines-manager.com/aircraft/show/106676231,17:00,12:29,962,"$3,237,342.00","$2,951,810.00","$3,068.41","$151,504.36"
MIA - ALG,54965848621,MIA 84B-5 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/54965848621,https://www.airlines-manager.com/aircraft/show/106676229,20:30,15:59,962,"$3,237,342.00","$2,951,810.00","$3,068.41","$151,504.36"
MIA - ANU,54937423994,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/54937423994,https://www.airlines-manager.com/aircraft/show/110114297,6:30,13:44,228,"$355,422.00","$324,739.00","$1,424.29","$44,894.79"
MIA - ANU,54942362996,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/54942362996,https://www.airlines-manager.com/aircraft/show/110114298,8:30,15:44,228,"$355,422.00","$324,739.00","$1,424.29","$44,894.79"
MIA - ANU,54947196958,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/54947196958,https://www.airlines-manager.com/aircraft/show/110114295,12:00,19:14,228,"$355,422.00","$324,739.00","$1,424.29","$44,894.79"
MIA - ANU,54952417473,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/54952417473,https://www.airlines-manager.com/aircraft/show/110114296,13:00,20:14,228,"$355,422.00","$324,739.00","$1,424.29","$44,894.79"
MIA - ANU,54956618135,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/54956618135,https://www.airlines-manager.com/aircraft/show/110114300,16:30,23:44,228,"$355,422.00","$324,739.00","$1,424.29","$44,894.79"
MIA - ANU,54971692247,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/54971692247,https://www.airlines-manager.com/aircraft/show/110114299,23:30,6:44,228,"$355,422.00","$324,739.00","$1,424.29","$44,894.79"
MIA - ATL,54947196956,MIA-LAX-DEN 4,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/54947196956,https://www.airlines-manager.com/aircraft/show/91126652,12:00,16:29,400,"$365,129.00","$300,884.00",$752.21,"$67,111.67"
MIA - ATL,54952417626,MIA-LAX-DEN 2,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/54952417626,https://www.airlines-manager.com/aircraft/show/91126650,13:00,17:29,400,"$365,129.00","$300,884.00",$752.21,"$67,111.67"
MIA - ATL,54965848515,MIA-LAX-DEN 1,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/54965848515,https://www.airlines-manager.com/aircraft/show/91126649,19:30,23:59,400,"$365,129.00","$300,884.00",$752.21,"$67,111.67"
MIA - ATL,54965848516,MIA-LAX-DEN 3,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/54965848516,https://www.airlines-manager.com/aircraft/show/91126651,21:00,1:29,400,"$365,129.00","$300,884.00",$752.21,"$67,111.67"
MIA - AUA,54930655296,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/54930655296,https://www.airlines-manager.com/aircraft/show/107121795,3:00,9:29,320,"$403,740.00","$363,920.00","$1,137.25","$56,131.62"
MIA - AUA,54930655297,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/54930655297,https://www.airlines-manager.com/aircraft/show/107121798,4:30,10:59,320,"$403,740.00","$363,920.00","$1,137.25","$56,131.62"
MIA - AUA,54947196853,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/54947196853,https://www.airlines-manager.com/aircraft/show/107121797,11:00,17:29,320,"$403,740.00","$363,920.00","$1,137.25","$56,131.62"
MIA - AUA,54961494224,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/54961494224,https://www.airlines-manager.com/aircraft/show/107121796,17:45,0:14,320,"$403,740.00","$363,920.00","$1,137.25","$56,131.62"
MIA - AUA,54969516355,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/54969516355,https://www.airlines-manager.com/aircraft/show/107121799,21:45,4:14,241,"$313,495.00","$276,694.00","$1,148.11","$42,677.74"
MIA - AUS,54930655280,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/54930655280,https://www.airlines-manager.com/aircraft/show/99920625,2:45,9:14,320,"$402,281.00","$358,582.00","$1,120.57","$55,308.28"
MIA - AUS,54942363081,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/54942363081,https://www.airlines-manager.com/aircraft/show/99920626,10:00,16:29,320,"$402,281.00","$358,582.00","$1,120.57","$55,308.28"
MIA - AUS,54952417704,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/54952417704,https://www.airlines-manager.com/aircraft/show/82323689,14:00,20:29,112,"$189,894.00","$164,835.00","$1,471.74","$25,424.42"
MIA - AUS,54956617949,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/54956617949,https://www.airlines-manager.com/aircraft/show/99920623,14:45,21:14,320,"$402,281.00","$358,582.00","$1,120.57","$55,308.28"
MIA - AUS,54965848645,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/54965848645,https://www.airlines-manager.com/aircraft/show/99920624,20:45,3:14,320,"$402,281.00","$358,582.00","$1,120.57","$55,308.28"
MIA - BDA,54930655313,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/54930655313,https://www.airlines-manager.com/aircraft/show/104034457,3:00,9:14,228,"$294,998.00","$267,472.00","$1,173.12","$42,909.95"
MIA - BDA,54930655314,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/54930655314,https://www.airlines-manager.com/aircraft/show/104034459,3:45,9:59,228,"$294,998.00","$267,472.00","$1,173.12","$42,909.95"
MIA - BDA,54942363145,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/54942363145,https://www.airlines-manager.com/aircraft/show/104034460,10:00,16:14,228,"$294,998.00","$267,472.00","$1,173.12","$42,909.95"
MIA - BDA,54947196823,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/54947196823,https://www.airlines-manager.com/aircraft/show/99326789,11:00,17:14,228,"$294,998.00","$267,472.00","$1,173.12","$42,909.95"
MIA - BDA,54956618063,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/54956618063,https://www.airlines-manager.com/aircraft/show/104034461,15:45,21:59,228,"$294,998.00","$267,472.00","$1,173.12","$42,909.95"
MIA - BDA,54965848683,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/54965848683,https://www.airlines-manager.com/aircraft/show/104034458,21:15,3:29,228,"$294,998.00","$267,472.00","$1,173.12","$42,909.95"
MIA - BDL,54930655317,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/54930655317,https://www.airlines-manager.com/aircraft/show/107763565,3:00,9:44,320,"$426,255.00","$383,974.00","$1,199.92","$57,025.84"
MIA - BDL,54937424101,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/54937424101,https://www.airlines-manager.com/aircraft/show/107467213,8:00,14:44,112,"$200,632.00","$176,005.00","$1,571.47","$26,139.36"
MIA - BDL,54952417643,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/54952417643,https://www.airlines-manager.com/aircraft/show/107763561,13:45,20:29,320,"$426,255.00","$383,974.00","$1,199.92","$57,025.84"
MIA - BDL,54952417644,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/54952417644,https://www.airlines-manager.com/aircraft/show/107763566,14:00,20:44,320,"$426,255.00","$383,974.00","$1,199.92","$57,025.84"
MIA - BDL,54965848618,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/54965848618,https://www.airlines-manager.com/aircraft/show/107763562,20:30,3:14,320,"$426,255.00","$383,974.00","$1,199.92","$57,025.84"
MIA - BFF,54930654943,MIA-PSP-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/54930654943,https://www.airlines-manager.com/aircraft/show/116789634,0:45,9:29,320,"$554,176.00","$504,013.00","$1,575.04","$57,711.41"
MIA - BFF,54930654944,MIA-PSP-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/54930654944,https://www.airlines-manager.com/aircraft/show/116789632,1:00,9:44,320,"$554,176.00","$504,013.00","$1,575.04","$57,711.41"
MIA - BFF,54942363097,MIA-PSP-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/54942363097,https://www.airlines-manager.com/aircraft/show/116789633,10:00,18:44,320,"$554,176.00","$504,013.00","$1,575.04","$57,711.41"
MIA - BFF,54952417453,MIA-PSP-BFF 5,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/54952417453,https://www.airlines-manager.com/aircraft/show/116789630,13:00,21:44,320,"$554,176.00","$504,013.00","$1,575.04","$57,711.41"
MIA - BFF,54965848649,MIA-PSP-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/54965848649,https://www.airlines-manager.com/aircraft/show/116789631,20:45,5:29,320,"$554,176.00","$504,013.00","$1,575.04","$57,711.41"
MIA - BGI,54930655269,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/54930655269,https://www.airlines-manager.com/aircraft/show/107121796,2:45,10:59,320,"$515,730.00","$466,906.00","$1,459.08","$56,709.23"
MIA - BGI,54937424013,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/54937424013,https://www.airlines-manager.com/aircraft/show/107121799,6:45,14:59,320,"$515,730.00","$466,906.00","$1,459.08","$56,709.23"
MIA - BGI,54947197006,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/54947197006,https://www.airlines-manager.com/aircraft/show/107121795,12:00,20:14,320,"$515,730.00","$466,906.00","$1,459.08","$56,709.23"
MIA - BGI,54952417639,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/54952417639,https://www.airlines-manager.com/aircraft/show/107121798,13:30,21:44,320,"$515,730.00","$466,906.00","$1,459.08","$56,709.23"
MIA - BGI,54965848564,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/54965848564,https://www.airlines-manager.com/aircraft/show/107121797,20:00,4:14,320,"$515,730.00","$466,906.00","$1,459.08","$56,709.23"
MIA - BHM,54930655357,MIA-CID-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/54930655357,https://www.airlines-manager.com/aircraft/show/116789651,3:45,8:29,310,"$301,638.00","$272,460.00",$878.90,"$57,561.97"
MIA - BHM,54942363101,MIA-CID-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/54942363101,https://www.airlines-manager.com/aircraft/show/116789652,10:00,14:44,310,"$301,638.00","$272,460.00",$878.90,"$57,561.97"
MIA - BHM,54961494072,MIA-CID-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/54961494072,https://www.airlines-manager.com/aircraft/show/116789653,17:15,21:59,310,"$301,638.00","$272,460.00",$878.90,"$57,561.97"
MIA - BHM,54969516447,MIA-CID-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/54969516447,https://www.airlines-manager.com/aircraft/show/116789650,22:45,3:29,310,"$301,638.00","$272,460.00",$878.90,"$57,561.97"
MIA - BIL,54942363095,MIA-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/54942363095,https://www.airlines-manager.com/aircraft/show/116789629,10:00,20:14,320,"$631,281.00","$575,789.00","$1,799.34","$56,266.03"
MIA - BIL,54947196999,MIA-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/54947196999,https://www.airlines-manager.com/aircraft/show/116789628,12:00,22:14,320,"$631,281.00","$575,789.00","$1,799.34","$56,266.03"
MIA - BIL,54952417706,MIA-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/54952417706,https://www.airlines-manager.com/aircraft/show/116789627,14:00,0:14,320,"$631,281.00","$575,789.00","$1,799.34","$56,266.03"
MIA - BIL,54969516331,MIA-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/54969516331,https://www.airlines-manager.com/aircraft/show/116789626,21:30,7:44,320,"$631,281.00","$575,789.00","$1,799.34","$56,266.03"
MIA - BIL,54971692277,MIA-BIL-BZN 5,ERJ-175,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/54971692277,https://www.airlines-manager.com/aircraft/show/116042637,23:45,9:59,112,"$296,899.00","$263,087.00","$2,348.99","$25,708.83"
MIA - BNA,54930654924,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/54930654924,https://www.airlines-manager.com/aircraft/show/103534663,0:45,5:59,112,"$157,224.00","$135,746.00","$1,212.02","$25,938.73"
MIA - BNA,54930654925,MIA-BOI-BNA 4,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/54930654925,https://www.airlines-manager.com/aircraft/show/103775657,1:15,6:29,320,"$330,750.00","$292,499.00",$914.06,"$55,891.53"
MIA - BNA,54930654926,MIA-BOI-BNA 3,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/54930654926,https://www.airlines-manager.com/aircraft/show/104020880,4:45,9:59,320,"$330,750.00","$292,499.00",$914.06,"$55,891.53"
MIA - BNA,54942363151,MIA-BOI-BNA 2,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/54942363151,https://www.airlines-manager.com/aircraft/show/104022609,10:00,15:14,320,"$330,750.00","$292,499.00",$914.06,"$55,891.53"
MIA - BNA,54947196964,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/54947196964,https://www.airlines-manager.com/aircraft/show/103534663,12:00,17:14,112,"$157,224.00","$135,746.00","$1,212.02","$25,938.73"
MIA - BNA,54965848681,MIA-BOI-BNA 1,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/54965848681,https://www.airlines-manager.com/aircraft/show/104133006,21:15,2:29,320,"$330,750.00","$292,499.00",$914.06,"$55,891.53"
MIA - BOI,54930655113,MIA-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/54930655113,https://www.airlines-manager.com/aircraft/show/106339154,1:45,12:59,198,"$523,215.00","$479,346.00","$2,420.94","$42,671.75"
MIA - BOI,54942363152,MIA-BOI-BNA 1,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/54942363152,https://www.airlines-manager.com/aircraft/show/104133006,10:00,21:14,320,"$695,244.00","$635,092.00","$1,984.66","$56,536.38"
MIA - BOI,54952417776,MIA-BOI-BNA 4,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/54952417776,https://www.airlines-manager.com/aircraft/show/103775657,14:00,1:14,320,"$695,244.00","$635,092.00","$1,984.66","$56,536.38"
MIA - BOI,54961494182,MIA-BOI-BNA 3,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/54961494182,https://www.airlines-manager.com/aircraft/show/104020880,17:30,4:44,320,"$695,244.00","$635,092.00","$1,984.66","$56,536.38"
MIA - BOI,54969516464,MIA-BOI-BNA 2,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/54969516464,https://www.airlines-manager.com/aircraft/show/104022609,22:45,9:59,320,"$695,244.00","$635,092.00","$1,984.66","$56,536.38"
MIA - BOS,54930655193,MIA-SJU-BOS 5,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/54930655193,https://www.airlines-manager.com/aircraft/show/91352059,2:00,8:59,310,"$443,989.00","$399,580.00","$1,288.97","$57,219.09"
MIA - BOS,54930655195,MIA-SJU-BOS 1,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/54930655195,https://www.airlines-manager.com/aircraft/show/91352063,5:00,11:59,310,"$443,989.00","$399,580.00","$1,288.97","$57,219.09"
MIA - BOS,54947196939,MIA-SJU-BOS 4,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/54947196939,https://www.airlines-manager.com/aircraft/show/91352060,11:15,18:14,310,"$443,989.00","$399,580.00","$1,288.97","$57,219.09"
MIA - BOS,54956618137,MIA-SJU-BOS 2,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/54956618137,https://www.airlines-manager.com/aircraft/show/91352062,16:30,23:29,310,"$443,989.00","$399,580.00","$1,288.97","$57,219.09"
MIA - BOS,54961494354,MIA-SJU-BOS 3,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/54961494354,https://www.airlines-manager.com/aircraft/show/91352061,19:00,1:59,310,"$443,989.00","$399,580.00","$1,288.97","$57,219.09"
MIA - BOS,54965848588,MIA-SJU-BOS 6 B,A319-100,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/54965848588,https://www.airlines-manager.com/aircraft/show/110582841,20:15,3:14,198,"$335,807.00","$300,226.00","$1,516.29","$42,991.79"
MIA - BTV,54930655306,MIA-DSM-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/54930655306,https://www.airlines-manager.com/aircraft/show/111064081,3:00,10:14,320,"$459,413.00","$416,541.00","$1,301.69","$57,586.31"
MIA - BTV,54942363014,MIA-DSM-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/54942363014,https://www.airlines-manager.com/aircraft/show/113101228,8:45,15:59,320,"$459,413.00","$416,541.00","$1,301.69","$57,586.31"
MIA - BTV,54952417463,MIA-DSM-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/54952417463,https://www.airlines-manager.com/aircraft/show/113101233,13:00,20:14,320,"$459,413.00","$416,541.00","$1,301.69","$57,586.31"
MIA - BTV,54965848534,MIA-DSM-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/54965848534,https://www.airlines-manager.com/aircraft/show/113101230,19:45,2:59,320,"$459,413.00","$416,541.00","$1,301.69","$57,586.31"
MIA - BTV,54969516482,MIA-DSM-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/54969516482,https://www.airlines-manager.com/aircraft/show/100049776,23:00,6:29,110,"$216,567.00","$191,312.00","$1,739.20","$25,565.08"
MIA - BUF,54930655301,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/54930655301,https://www.airlines-manager.com/aircraft/show/107763561,3:00,9:44,320,"$424,121.00","$382,306.00","$1,194.71","$56,778.12"
MIA - BUF,54930655302,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/54930655302,https://www.airlines-manager.com/aircraft/show/107763566,3:15,9:59,320,"$424,121.00","$382,306.00","$1,194.71","$56,778.12"
MIA - BUF,54947196848,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/54947196848,https://www.airlines-manager.com/aircraft/show/107763562,11:00,17:44,320,"$424,121.00","$382,306.00","$1,194.71","$56,778.12"
MIA - BUF,54961494194,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/54961494194,https://www.airlines-manager.com/aircraft/show/107763565,17:30,0:14,320,"$424,121.00","$382,306.00","$1,194.71","$56,778.12"
MIA - BUF,54965848696,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/54965848696,https://www.airlines-manager.com/aircraft/show/107467213,21:15,3:59,112,"$199,651.00","$175,283.00","$1,565.03","$26,032.13"
MIA - BUR,54930655267,MIA-BUR-PVD 4,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/54930655267,https://www.airlines-manager.com/aircraft/show/108834806,2:45,13:59,310,"$701,092.00","$648,187.00","$2,090.93","$57,702.11"
MIA - BUR,54947196847,MIA-BUR-PVD 1,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/54947196847,https://www.airlines-manager.com/aircraft/show/108834803,11:00,22:14,310,"$701,092.00","$648,187.00","$2,090.93","$57,702.11"
MIA - BUR,54952417740,MIA-BUR-PVD 3,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/54952417740,https://www.airlines-manager.com/aircraft/show/108834805,14:00,1:14,310,"$701,092.00","$648,187.00","$2,090.93","$57,702.11"
MIA - BUR,54965848555,MIA-BUR-PVD 5 B,A319-100,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/54965848555,https://www.airlines-manager.com/aircraft/show/108834807,20:00,7:14,198,"$525,980.00","$483,555.00","$2,442.20","$43,046.44"
MIA - BUR,54965848556,MIA-BUR-PVD 2,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/54965848556,https://www.airlines-manager.com/aircraft/show/108834804,20:45,7:59,310,"$701,092.00","$648,187.00","$2,090.93","$57,702.11"
MIA - BWI,54930655373,MIA-BWI-YYZ 4,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/54930655373,https://www.airlines-manager.com/aircraft/show/92153442,4:00,9:44,310,"$364,242.00","$325,933.00","$1,051.40","$56,848.78"
MIA - BWI,54937423983,MIA-BWI-YYZ 5,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/54937423983,https://www.airlines-manager.com/aircraft/show/92153439,6:00,11:44,310,"$364,242.00","$325,933.00","$1,051.40","$56,848.78"
MIA - BWI,54942363118,MIA-BWI-YYZ 1,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/54942363118,https://www.airlines-manager.com/aircraft/show/92153443,10:00,15:44,310,"$364,242.00","$325,933.00","$1,051.40","$56,848.78"
MIA - BWI,54952417625,MIA-BWI-YYZ 2,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/54952417625,https://www.airlines-manager.com/aircraft/show/92153440,13:00,18:44,310,"$364,242.00","$325,933.00","$1,051.40","$56,848.78"
MIA - BWI,54965848677,MIA-BWI-YYZ 3,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/54965848677,https://www.airlines-manager.com/aircraft/show/92153441,21:00,2:44,310,"$364,242.00","$325,933.00","$1,051.40","$56,848.78"
MIA - BWI,54969516486,MIA-BWI-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/54969516486,https://www.airlines-manager.com/aircraft/show/92137503,23:00,4:44,86,"$121,739.00","$100,940.00","$1,173.72","$17,605.81"
MIA - BZN,54930654843,MIA-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/54930654843,https://www.airlines-manager.com/aircraft/show/116789627,0:15,10:44,320,"$653,842.00","$597,646.00","$1,867.64","$57,009.16"
MIA - BZN,54947196889,MIA-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/54947196889,https://www.airlines-manager.com/aircraft/show/116789626,11:00,21:29,320,"$653,842.00","$597,646.00","$1,867.64","$57,009.16"
MIA - BZN,54952417452,MIA-BIL-BZN 5,ERJ-175,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/54952417452,https://www.airlines-manager.com/aircraft/show/116042637,13:00,23:44,112,"$308,087.00","$273,608.00","$2,442.93","$25,491.43"
MIA - BZN,54965848598,MIA-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/54965848598,https://www.airlines-manager.com/aircraft/show/116789629,20:15,6:44,320,"$653,842.00","$597,646.00","$1,867.64","$57,009.16"
MIA - BZN,54969516395,MIA-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/54969516395,https://www.airlines-manager.com/aircraft/show/116789628,22:15,8:44,320,"$653,842.00","$597,646.00","$1,867.64","$57,009.16"
MIA - CAK,54930655180,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/54930655180,https://www.airlines-manager.com/aircraft/show/115493370,2:00,8:14,310,"$383,530.00","$349,760.00","$1,128.26","$56,111.23"
MIA - CAK,54942362963,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/54942362963,https://www.airlines-manager.com/aircraft/show/115493371,8:15,14:29,310,"$383,530.00","$349,760.00","$1,128.26","$56,111.23"
MIA - CAK,54947196837,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/54947196837,https://www.airlines-manager.com/aircraft/show/115493372,11:00,17:14,310,"$383,530.00","$349,760.00","$1,128.26","$56,111.23"
MIA - CAK,54961494250,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/54961494250,https://www.airlines-manager.com/aircraft/show/114912307,18:00,0:14,112,"$181,169.00","$159,079.00","$1,420.35","$25,520.70"
MIA - CAK,54965848676,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/54965848676,https://www.airlines-manager.com/aircraft/show/115493373,21:00,3:14,273,"$356,402.00","$323,693.00","$1,185.69","$51,929.36"
MIA - CHS,54930655320,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/54930655320,https://www.airlines-manager.com/aircraft/show/94886626,3:15,7:14,310,"$226,111.00","$200,119.00",$645.55,"$50,239.08"
MIA - CHS,54942363028,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/54942363028,https://www.airlines-manager.com/aircraft/show/96692674,9:00,12:59,310,"$226,111.00","$200,119.00",$645.55,"$50,239.08"
MIA - CHS,54947196906,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/54947196906,https://www.airlines-manager.com/aircraft/show/105601657,11:00,14:59,112,"$105,451.00","$88,999.00",$794.63,"$22,342.85"
MIA - CHS,54952417718,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/54952417718,https://www.airlines-manager.com/aircraft/show/94886625,14:00,17:59,310,"$226,111.00","$200,119.00",$645.55,"$50,239.08"
MIA - CHS,54965848641,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/54965848641,https://www.airlines-manager.com/aircraft/show/94886629,20:45,0:44,291,"$217,967.00","$192,231.00",$660.59,"$48,258.83"
MIA - CID,54930654997,MIA-CID-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/54930654997,https://www.airlines-manager.com/aircraft/show/116789652,1:15,8:29,310,"$453,870.00","$416,411.00","$1,343.26","$57,568.34"
MIA - CID,54942363100,MIA-CID-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/54942363100,https://www.airlines-manager.com/aircraft/show/116789653,10:00,17:14,310,"$453,870.00","$416,411.00","$1,343.26","$57,568.34"
MIA - CID,54956618049,MIA-CID-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/54956618049,https://www.airlines-manager.com/aircraft/show/116789650,15:30,22:44,310,"$453,870.00","$416,411.00","$1,343.26","$57,568.34"
MIA - CID,54965848616,MIA-CID-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/54965848616,https://www.airlines-manager.com/aircraft/show/116789651,20:30,3:44,310,"$453,870.00","$416,411.00","$1,343.26","$57,568.34"
MIA - CLE,54930654881,MIA-COS-CVG 5,ERJ-175,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/54930654881,https://www.airlines-manager.com/aircraft/show/103534665,0:30,6:44,112,"$188,033.00","$164,249.00","$1,466.51","$26,350.11"
MIA - CLE,54930654882,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/54930654882,https://www.airlines-manager.com/aircraft/show/103684630,4:15,10:29,320,"$398,480.00","$357,223.00","$1,116.32","$57,308.50"
MIA - CLE,54937424084,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/54937424084,https://www.airlines-manager.com/aircraft/show/103365574,7:45,13:59,320,"$398,480.00","$357,223.00","$1,116.32","$57,308.50"
MIA - CLE,54952417588,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/54952417588,https://www.airlines-manager.com/aircraft/show/103684632,13:00,19:14,320,"$398,480.00","$357,223.00","$1,116.32","$57,308.50"
MIA - CLE,54965848642,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/54965848642,https://www.airlines-manager.com/aircraft/show/103684631,20:45,2:59,320,"$398,480.00","$357,223.00","$1,116.32","$57,308.50"
MIA - CLT,54930655457,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/54930655457,https://www.airlines-manager.com/aircraft/show/82543123,4:15,8:59,112,"$142,241.00","$118,334.00","$1,056.55","$25,000.14"
MIA - CLT,54942363124,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/54942363124,https://www.airlines-manager.com/aircraft/show/91600939,10:00,14:44,310,"$298,699.00","$260,750.00",$841.13,"$55,088.03"
MIA - CLT,54956618081,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/54956618081,https://www.airlines-manager.com/aircraft/show/91600936,16:00,20:44,310,"$298,699.00","$260,750.00",$841.13,"$55,088.03"
MIA - CLT,54961494218,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/54961494218,https://www.airlines-manager.com/aircraft/show/91600937,17:45,22:29,310,"$298,699.00","$260,750.00",$841.13,"$55,088.03"
MIA - CLT,54969516429,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/54969516429,https://www.airlines-manager.com/aircraft/show/91600935,22:30,3:14,310,"$298,699.00","$260,750.00",$841.13,"$55,088.03"
MIA - CLT,54971692251,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/54971692251,https://www.airlines-manager.com/aircraft/show/91600938,23:30,4:14,310,"$298,699.00","$260,750.00",$841.13,"$55,088.03"
MIA - CMH,54930655139,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/54930655139,https://www.airlines-manager.com/aircraft/show/88494374,1:45,7:44,320,"$372,456.00","$332,435.00","$1,038.86","$55,560.17"
MIA - CMH,54937424054,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/54937424054,https://www.airlines-manager.com/aircraft/show/88494378,7:15,13:14,320,"$372,456.00","$332,435.00","$1,038.86","$55,560.17"
MIA - CMH,54952417724,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/54952417724,https://www.airlines-manager.com/aircraft/show/91806233,14:00,19:59,320,"$372,456.00","$332,435.00","$1,038.86","$55,560.17"
MIA - CMH,54961494227,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/54961494227,https://www.airlines-manager.com/aircraft/show/110582842,18:00,23:59,198,"$282,748.00","$254,479.00","$1,285.25","$42,531.31"
MIA - CMH,54965848652,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/54965848652,https://www.airlines-manager.com/aircraft/show/88239556,21:00,2:59,320,"$372,456.00","$332,435.00","$1,038.86","$55,560.17"
MIA - CMN,54930655513,MIA 84B-4 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/54930655513,https://www.airlines-manager.com/aircraft/show/106676228,5:00,22:44,962,"$2,958,140.00","$2,699,471.00","$2,806.10","$152,225.81"
MIA - CMN,54965848622,MIA 84B-1 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/54965848622,https://www.airlines-manager.com/aircraft/show/106676225,20:30,14:14,962,"$2,958,140.00","$2,699,471.00","$2,806.10","$152,225.81"
MIA - COS,54937423993,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/54937423993,https://www.airlines-manager.com/aircraft/show/103684631,6:30,14:59,320,"$543,615.00","$492,225.00","$1,538.20","$58,022.59"
MIA - COS,54942363076,MIA-COS-CVG 5,ERJ-175,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/54942363076,https://www.airlines-manager.com/aircraft/show/103534665,10:00,18:44,112,"$256,350.00","$225,769.00","$2,015.79","$25,851.41"
MIA - COS,54952417733,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/54952417733,https://www.airlines-manager.com/aircraft/show/103684630,14:00,22:29,320,"$543,615.00","$492,225.00","$1,538.20","$58,022.59"
MIA - COS,54961494195,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/54961494195,https://www.airlines-manager.com/aircraft/show/103365574,17:30,1:59,320,"$543,615.00","$492,225.00","$1,538.20","$58,022.59"
MIA - COS,54969516450,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/54969516450,https://www.airlines-manager.com/aircraft/show/103684632,22:45,7:14,320,"$543,615.00","$492,225.00","$1,538.20","$58,022.59"
MIA - CPT,54930655516,MIA 84A-6 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/54930655516,https://www.airlines-manager.com/aircraft/show/93731916,5:00,10:29,1124,"$5,606,472.00","$5,211,864.00","$4,636.89","$950,491.91"
MIA - CPT,54961494257,MIA 84A-2 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/54961494257,https://www.airlines-manager.com/aircraft/show/93686968,18:00,23:29,1124,"$5,606,472.00","$5,211,864.00","$4,636.89","$950,491.91"
MIA - CUN,54930655526,MIA-PSP-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/54930655526,https://www.airlines-manager.com/aircraft/show/116789631,5:30,9:44,320,"$250,489.00","$215,136.00",$672.30,"$50,819.53"
MIA - CUN,54942363064,MIA-PSP-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/54942363064,https://www.airlines-manager.com/aircraft/show/116789634,9:30,13:44,320,"$250,489.00","$215,136.00",$672.30,"$50,819.53"
MIA - CUN,54942363065,MIA-PSP-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/54942363065,https://www.airlines-manager.com/aircraft/show/116789632,10:00,14:14,320,"$250,489.00","$215,136.00",$672.30,"$50,819.53"
MIA - CUN,54961494316,MIA-PSP-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/54961494316,https://www.airlines-manager.com/aircraft/show/116789633,18:45,22:59,320,"$250,489.00","$215,136.00",$672.30,"$50,819.53"
MIA - CUN,54969516347,MIA-PSP-BFF 5,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/54969516347,https://www.airlines-manager.com/aircraft/show/116789630,21:45,1:59,314,"$246,228.00","$210,982.00",$671.92,"$49,838.27"
MIA - CUR,54930655445,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/54930655445,https://www.airlines-manager.com/aircraft/show/107121797,4:15,10:59,320,"$413,130.00","$371,117.00","$1,159.74","$55,116.39"
MIA - CUR,54947196854,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/54947196854,https://www.airlines-manager.com/aircraft/show/107121796,11:00,17:44,320,"$413,130.00","$371,117.00","$1,159.74","$55,116.39"
MIA - CUR,54956618005,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/54956618005,https://www.airlines-manager.com/aircraft/show/107121799,15:00,21:44,320,"$413,130.00","$371,117.00","$1,159.74","$55,116.39"
MIA - CUR,54965848607,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/54965848607,https://www.airlines-manager.com/aircraft/show/107121795,20:15,2:59,320,"$413,130.00","$371,117.00","$1,159.74","$55,116.39"
MIA - CUR,54969516358,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/54969516358,https://www.airlines-manager.com/aircraft/show/107121798,21:45,4:29,295,"$383,660.00","$342,652.00","$1,161.53","$50,888.91"
MIA - CVG,54930655162,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/54930655162,https://www.airlines-manager.com/aircraft/show/103365574,2:00,7:44,320,"$369,122.00","$327,241.00","$1,022.63","$57,076.92"
MIA - CVG,54937424056,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/54937424056,https://www.airlines-manager.com/aircraft/show/103684632,7:15,12:59,320,"$369,122.00","$327,241.00","$1,022.63","$57,076.92"
MIA - CVG,54956618030,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/54956618030,https://www.airlines-manager.com/aircraft/show/103684631,15:00,20:44,320,"$369,122.00","$327,241.00","$1,022.63","$57,076.92"
MIA - CVG,54961494313,MIA-COS-CVG 5,ERJ-175,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/54961494313,https://www.airlines-manager.com/aircraft/show/103534665,18:45,0:29,112,"$174,797.00","$151,088.00","$1,349.00","$26,352.56"
MIA - CVG,54969516422,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/54969516422,https://www.airlines-manager.com/aircraft/show/103684630,22:30,4:14,320,"$369,122.00","$327,241.00","$1,022.63","$57,076.92"
MIA - DEN,54930655063,MIA-LAX-DEN 3,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/54930655063,https://www.airlines-manager.com/aircraft/show/91126651,1:30,9:59,400,"$727,404.00","$641,772.00","$1,604.43","$75,650.92"
MIA - DEN,54930655064,MIA-LAX-DEN 4,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/54930655064,https://www.airlines-manager.com/aircraft/show/91126652,3:30,11:59,400,"$727,404.00","$641,772.00","$1,604.43","$75,650.92"
MIA - DEN,54947196877,MIA-LAX-DEN 1,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/54947196877,https://www.airlines-manager.com/aircraft/show/91126649,11:00,19:29,400,"$727,404.00","$641,772.00","$1,604.43","$75,650.92"
MIA - DEN,54961494078,MIA-LAX-DEN 2,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/54961494078,https://www.airlines-manager.com/aircraft/show/91126650,17:30,1:59,400,"$727,404.00","$641,772.00","$1,604.43","$75,650.92"
MIA - DEN,54969516414,MIA-LAX-DEN 5 E,A319-100,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/54969516414,https://www.airlines-manager.com/aircraft/show/115181776,22:15,6:59,216,"$426,690.00","$370,298.00","$1,714.34","$42,400.53"
MIA - DFW,54930655345,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/54930655345,https://www.airlines-manager.com/aircraft/show/91600936,3:30,9:59,310,"$408,515.00","$352,594.00","$1,137.40","$54,384.68"
MIA - DFW,54942363128,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/54942363128,https://www.airlines-manager.com/aircraft/show/91600935,10:00,16:29,310,"$408,515.00","$352,594.00","$1,137.40","$54,384.68"
MIA - DFW,54947196875,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/54947196875,https://www.airlines-manager.com/aircraft/show/91600938,11:00,17:29,310,"$408,515.00","$352,594.00","$1,137.40","$54,384.68"
MIA - DFW,54956618071,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/54956618071,https://www.airlines-manager.com/aircraft/show/82543123,15:45,22:14,112,"$192,378.00","$156,871.00","$1,400.63","$24,196.04"
MIA - DFW,54969516325,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/54969516325,https://www.airlines-manager.com/aircraft/show/91600939,21:30,3:59,310,"$408,515.00","$352,594.00","$1,137.40","$54,384.68"
MIA - DFW,54969516326,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/54969516326,https://www.airlines-manager.com/aircraft/show/91600937,22:30,4:59,310,"$408,515.00","$352,594.00","$1,137.40","$54,384.68"
MIA - DSM,54930655311,MIA-DSM-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/54930655311,https://www.airlines-manager.com/aircraft/show/113101230,3:00,10:14,320,"$455,904.00","$412,875.00","$1,290.23","$57,079.49"
MIA - DSM,54942363017,MIA-DSM-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/54942363017,https://www.airlines-manager.com/aircraft/show/100049776,8:45,15:59,112,"$216,032.00","$190,648.00","$1,702.21","$26,356.87"
MIA - DSM,54952417465,MIA-DSM-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/54952417465,https://www.airlines-manager.com/aircraft/show/111064081,13:00,20:14,320,"$455,904.00","$412,875.00","$1,290.23","$57,079.49"
MIA - DSM,54956618079,MIA-DSM-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/54956618079,https://www.airlines-manager.com/aircraft/show/113101228,16:00,23:14,320,"$455,904.00","$412,875.00","$1,290.23","$57,079.49"
MIA - DSM,54965848603,MIA-DSM-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/54965848603,https://www.airlines-manager.com/aircraft/show/113101233,20:15,3:29,320,"$455,904.00","$412,875.00","$1,290.23","$57,079.49"
MIA - DSS,54930654681,MIA 84B-7 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/54930654681,https://www.airlines-manager.com/aircraft/show/106676231,0:00,16:59,962,"$2,849,310.00","$2,603,298.00","$2,706.13","$153,285.46"
MIA - DSS,54947196976,MIA 84B-3 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/54947196976,https://www.airlines-manager.com/aircraft/show/106676227,12:00,4:59,962,"$2,849,310.00","$2,603,298.00","$2,706.13","$153,285.46"
MIA - DTW,54930655061,MIA-PDX-DTW 3,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/54930655061,https://www.airlines-manager.com/aircraft/show/89943713,1:30,7:59,320,"$411,222.00","$358,900.00","$1,121.56","$55,357.33"
MIA - DTW,54930655062,MIA-PDX-DTW 4,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/54930655062,https://www.airlines-manager.com/aircraft/show/89943712,2:30,8:59,320,"$411,222.00","$358,900.00","$1,121.56","$55,357.33"
MIA - DTW,54942363085,MIA-PDX-DTW 2,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/54942363085,https://www.airlines-manager.com/aircraft/show/89943714,10:00,16:29,320,"$411,222.00","$358,900.00","$1,121.56","$55,357.33"
MIA - DTW,54952417739,MIA-PDX-DTW 5,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/54952417739,https://www.airlines-manager.com/aircraft/show/89943711,14:00,20:29,320,"$411,222.00","$358,900.00","$1,121.56","$55,357.33"
MIA - DTW,54969516423,MIA-PDX-DTW 1,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/54969516423,https://www.airlines-manager.com/aircraft/show/89943715,22:30,4:59,320,"$411,222.00","$358,900.00","$1,121.56","$55,357.33"
MIA - ELP,54942362965,MIA-ELP-MCI 5 B,A319-100,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/54942362965,https://www.airlines-manager.com/aircraft/show/105093924,8:15,16:44,198,"$401,184.00","$365,173.00","$1,844.31","$43,045.93"
MIA - ELP,54942362966,MIA-ELP-MCI 1,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/54942362966,https://www.airlines-manager.com/aircraft/show/91806234,10:00,18:29,320,"$531,824.00","$481,715.00","$1,505.36","$56,783.69"
MIA - ELP,54956618129,MIA-ELP-MCI 3,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/54956618129,https://www.airlines-manager.com/aircraft/show/91806232,16:15,0:44,320,"$531,824.00","$481,715.00","$1,505.36","$56,783.69"
MIA - ELP,54961494001,MIA-ELP-MCI 4,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/54961494001,https://www.airlines-manager.com/aircraft/show/91806231,17:00,1:29,320,"$531,824.00","$481,715.00","$1,505.36","$56,783.69"
MIA - ELP,54971692220,MIA-ELP-MCI 2,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/54971692220,https://www.airlines-manager.com/aircraft/show/91806235,23:15,7:44,320,"$531,824.00","$481,715.00","$1,505.36","$56,783.69"
MIA - EUG,54930655033,MIA-EUG-SYR 4,737-900ER,https://www.airlines-manager.com/network/showline/50424905,https://www.airlines-manager.com/network/showflight/54930655033,https://www.airlines-manager.com/aircraft/show/119652480,1:30,13:59,320,"$766,698.00","$703,221.00","$2,197.57","$56,332.79"
MIA - EUG,54952417751,MIA-EUG-SYR 1,737-900ER,https://www.airlines-manager.com/network/showline/50424905,https://www.airlines-manager.com/network/showflight/54952417751,https://www.airlines-manager.com/aircraft/show/119652483,14:00,2:29,320,"$766,698.00","$703,221.00","$2,197.57","$56,332.79"
MIA - EUG,54961494327,MIA-EUG-SYR 3,737-900ER,https://www.airlines-manager.com/network/showline/50424905,https://www.airlines-manager.com/network/showflight/54961494327,https://www.airlines-manager.com/aircraft/show/119652481,18:45,7:14,320,"$766,698.00","$703,221.00","$2,197.57","$56,332.79"
MIA - EUG,54971692253,MIA-EUG-SYR 2,737-900ER,https://www.airlines-manager.com/network/showline/50424905,https://www.airlines-manager.com/network/showflight/54971692253,https://www.airlines-manager.com/aircraft/show/119652482,23:30,11:59,320,"$766,698.00","$703,221.00","$2,197.57","$56,332.79"
MIA - FAR,54930654919,MIA-FAR-TUL 3,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/54930654919,https://www.airlines-manager.com/aircraft/show/110883161,0:45,9:29,320,"$546,219.00","$497,397.00","$1,554.37","$56,953.85"
MIA - FAR,54937424048,MIA-FAR-TUL 4,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/54937424048,https://www.airlines-manager.com/aircraft/show/110883162,7:15,15:59,320,"$546,219.00","$497,397.00","$1,554.37","$56,953.85"
MIA - FAR,54947196905,MIA-FAR-TUL 1,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/54947196905,https://www.airlines-manager.com/aircraft/show/110883159,11:00,19:44,320,"$546,219.00","$497,397.00","$1,554.37","$56,953.85"
MIA - FAR,54956618122,MIA-FAR-TUL 2,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/54956618122,https://www.airlines-manager.com/aircraft/show/110883160,16:00,0:44,320,"$546,219.00","$497,397.00","$1,554.37","$56,953.85"
MIA - FAR,54961494277,MIA-FAR-TUL 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/54961494277,https://www.airlines-manager.com/aircraft/show/87169421,18:15,2:59,112,"$257,649.00","$228,235.00","$2,037.81","$26,133.78"
MIA - FAT,54942362992,MIA-FAT-MSO 4,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/54942362992,https://www.airlines-manager.com/aircraft/show/113101232,8:30,19:59,320,"$722,280.00","$662,066.00","$2,068.96","$57,654.51"
MIA - FAT,54947196900,MIA-FAT-MSO 1,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/54947196900,https://www.airlines-manager.com/aircraft/show/113101229,11:00,22:29,320,"$722,280.00","$662,066.00","$2,068.96","$57,654.51"
MIA - FAT,54961494345,MIA-FAT-MSO 2,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/54961494345,https://www.airlines-manager.com/aircraft/show/113101231,19:00,6:29,320,"$722,280.00","$662,066.00","$2,068.96","$57,654.51"
MIA - FAT,54969516408,MIA-FAT-MSO 3,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/54969516408,https://www.airlines-manager.com/aircraft/show/113101234,22:15,9:44,320,"$722,280.00","$662,066.00","$2,068.96","$57,654.51"
MIA - FCA,54930654883,MIA-FCA-MFR 3,737-900ER,https://www.airlines-manager.com/network/showline/50424916,https://www.airlines-manager.com/network/showflight/54930654883,https://www.airlines-manager.com/aircraft/show/119652477,0:30,11:59,320,"$704,492.00","$645,125.00","$2,016.02","$56,179.25"
MIA - FCA,54930654884,MIA-FCA-MFR 4,737-900ER,https://www.airlines-manager.com/network/showline/50424916,https://www.airlines-manager.com/network/showflight/54930654884,https://www.airlines-manager.com/aircraft/show/119652476,2:30,13:59,320,"$704,492.00","$645,125.00","$2,016.02","$56,179.25"
MIA - FCA,54947196994,MIA-FCA-MFR 1,737-900ER,https://www.airlines-manager.com/network/showline/50424916,https://www.airlines-manager.com/network/showflight/54947196994,https://www.airlines-manager.com/aircraft/show/119652479,12:00,23:29,320,"$704,492.00","$645,125.00","$2,016.02","$56,179.25"
MIA - FCA,54952417741,MIA-FCA-MFR 2,737-900ER,https://www.airlines-manager.com/network/showline/50424916,https://www.airlines-manager.com/network/showflight/54952417741,https://www.airlines-manager.com/aircraft/show/119652478,14:00,1:29,320,"$704,492.00","$645,125.00","$2,016.02","$56,179.25"
MIA - FPO,54930654837,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/54930654837,https://www.airlines-manager.com/aircraft/show/107121796,0:15,2:44,320,"$83,963.00","$59,322.00",$185.38,"$23,888.05"
MIA - FPO,54930654838,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/54930654838,https://www.airlines-manager.com/aircraft/show/107121799,4:15,6:44,320,"$83,963.00","$59,322.00",$185.38,"$23,888.05"
MIA - FPO,54942363061,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/54942363061,https://www.airlines-manager.com/aircraft/show/107121795,9:30,11:59,320,"$83,963.00","$59,322.00",$185.38,"$23,888.05"
MIA - FPO,54947196852,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/54947196852,https://www.airlines-manager.com/aircraft/show/107121798,11:00,13:29,320,"$83,963.00","$59,322.00",$185.38,"$23,888.05"
MIA - FPO,54961494193,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/54961494193,https://www.airlines-manager.com/aircraft/show/107121797,17:30,19:59,200,"$60,309.00","$36,076.00",$180.38,"$14,527.25"
MIA - FSD,54930654968,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/54930654968,https://www.airlines-manager.com/aircraft/show/110883110,1:00,8:59,310,"$501,538.00","$460,205.00","$1,484.53","$57,645.72"
MIA - FSD,54930654969,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/54930654969,https://www.airlines-manager.com/aircraft/show/110883113,2:45,10:44,310,"$501,538.00","$460,205.00","$1,484.53","$57,645.72"
MIA - FSD,54952417783,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/54952417783,https://www.airlines-manager.com/aircraft/show/110883112,14:00,21:59,310,"$501,538.00","$460,205.00","$1,484.53","$57,645.72"
MIA - FSD,54956618130,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/54956618130,https://www.airlines-manager.com/aircraft/show/110883111,16:15,0:14,310,"$501,538.00","$460,205.00","$1,484.53","$57,645.72"
MIA - FSD,54969516385,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/54969516385,https://www.airlines-manager.com/aircraft/show/104353572,22:00,5:59,93,"$218,497.00","$192,272.00","$2,067.44","$24,084.18"
MIA - GRR,54930654734,MIA-RAP-GRR 5,ERJ-175,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/54930654734,https://www.airlines-manager.com/aircraft/show/116042630,0:00,6:44,112,"$199,811.00","$175,319.00","$1,565.35","$26,037.48"
MIA - GRR,54930654735,MIA-RAP-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/54930654735,https://www.airlines-manager.com/aircraft/show/116789623,2:15,8:59,320,"$423,112.00","$381,221.00","$1,191.32","$56,616.98"
MIA - GRR,54942363093,MIA-RAP-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/54942363093,https://www.airlines-manager.com/aircraft/show/116789624,10:00,16:44,320,"$423,112.00","$381,221.00","$1,191.32","$56,616.98"
MIA - GRR,54947196962,MIA-RAP-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/54947196962,https://www.airlines-manager.com/aircraft/show/116789622,12:00,18:44,320,"$423,112.00","$381,221.00","$1,191.32","$56,616.98"
MIA - GRR,54961494351,MIA-RAP-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/54961494351,https://www.airlines-manager.com/aircraft/show/116789625,19:00,1:44,320,"$423,112.00","$381,221.00","$1,191.32","$56,616.98"
MIA - GSO,54942363051,MIA-EUG-SYR 1,737-900ER,https://www.airlines-manager.com/network/showline/50424907,https://www.airlines-manager.com/network/showflight/54942363051,https://www.airlines-manager.com/aircraft/show/119652483,9:15,13:59,320,"$309,086.00","$275,151.00",$859.85,"$58,130.49"
MIA - GSO,54952417732,MIA-EUG-SYR 3,737-900ER,https://www.airlines-manager.com/network/showline/50424907,https://www.airlines-manager.com/network/showflight/54952417732,https://www.airlines-manager.com/aircraft/show/119652481,14:00,18:44,320,"$309,086.00","$275,151.00",$859.85,"$58,130.49"
MIA - GSO,54961494326,MIA-EUG-SYR 2,737-900ER,https://www.airlines-manager.com/network/showline/50424907,https://www.airlines-manager.com/network/showflight/54961494326,https://www.airlines-manager.com/aircraft/show/119652482,18:45,23:29,320,"$309,086.00","$275,151.00",$859.85,"$58,130.49"
MIA - GSO,54965848643,MIA-EUG-SYR 4,737-900ER,https://www.airlines-manager.com/network/showline/50424907,https://www.airlines-manager.com/network/showflight/54965848643,https://www.airlines-manager.com/aircraft/show/119652480,20:45,1:29,307,"$301,526.00","$267,840.00",$872.44,"$56,585.92"
MIA - HAV,54930655512,MIA-PDX-DTW 1,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/54930655512,https://www.airlines-manager.com/aircraft/show/89943715,5:00,7:59,320,"$131,414.00","$101,607.00",$317.52,"$34,058.21"
MIA - HAV,54942363036,MIA-PDX-DTW 4,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/54942363036,https://www.airlines-manager.com/aircraft/show/89943712,9:00,11:59,320,"$131,414.00","$101,607.00",$317.52,"$34,058.21"
MIA - HAV,54942363037,MIA-PDX-DTW 3,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/54942363037,https://www.airlines-manager.com/aircraft/show/89943713,10:00,12:59,320,"$131,414.00","$101,607.00",$317.52,"$34,058.21"
MIA - HAV,54956618138,MIA-PDX-DTW 2,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/54956618138,https://www.airlines-manager.com/aircraft/show/89943714,16:30,19:29,320,"$131,414.00","$101,607.00",$317.52,"$34,058.21"
MIA - HAV,54965848634,MIA-PDX-DTW 5,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/54965848634,https://www.airlines-manager.com/aircraft/show/89943711,20:30,23:29,288,"$119,825.00","$90,271.00",$313.44,"$30,258.44"
MIA - IAD,54930655458,MIA-IAD-TUS 2,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/54930655458,https://www.airlines-manager.com/aircraft/show/97556720,4:15,9:59,310,"$362,370.00","$323,069.00","$1,042.16","$56,349.24"
MIA - IAD,54937424049,MIA-IAD-TUS 5,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/54937424049,https://www.airlines-manager.com/aircraft/show/97556716,7:15,12:59,310,"$362,370.00","$323,069.00","$1,042.16","$56,349.24"
MIA - IAD,54942363084,MIA-IAD-TUS 1,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/54942363084,https://www.airlines-manager.com/aircraft/show/97556721,10:00,15:44,310,"$362,370.00","$323,069.00","$1,042.16","$56,349.24"
MIA - IAD,54952417613,MIA-IAD-TUS 4,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/54952417613,https://www.airlines-manager.com/aircraft/show/97556718,13:00,18:44,310,"$362,370.00","$323,069.00","$1,042.16","$56,349.24"
MIA - IAD,54961494311,MIA-IAD-TUS 3,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/54961494311,https://www.airlines-manager.com/aircraft/show/97556719,18:45,0:29,310,"$362,370.00","$323,069.00","$1,042.16","$56,349.24"
MIA - ICT,54930655258,MIA-FAR-TUL 1,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/54930655258,https://www.airlines-manager.com/aircraft/show/110883159,2:30,9:29,320,"$446,928.00","$403,611.00","$1,261.28","$57,796.32"
MIA - ICT,54942363046,MIA-FAR-TUL 2,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/54942363046,https://www.airlines-manager.com/aircraft/show/110883160,9:00,15:59,320,"$446,928.00","$403,611.00","$1,261.28","$57,796.32"
MIA - ICT,54947196903,MIA-FAR-TUL 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/54947196903,https://www.airlines-manager.com/aircraft/show/87169421,11:00,18:14,112,"$212,522.00","$187,091.00","$1,670.46","$25,865.12"
MIA - ICT,54961494219,MIA-FAR-TUL 3,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/54961494219,https://www.airlines-manager.com/aircraft/show/110883161,17:45,0:44,320,"$446,928.00","$403,611.00","$1,261.28","$57,796.32"
MIA - ICT,54969516451,MIA-FAR-TUL 4,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/54969516451,https://www.airlines-manager.com/aircraft/show/110883162,22:45,5:44,320,"$446,928.00","$403,611.00","$1,261.28","$57,796.32"
MIA - IND,54930655250,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/54930655250,https://www.airlines-manager.com/aircraft/show/82323689,2:30,8:29,112,"$180,919.00","$157,231.00","$1,403.85","$26,278.16"
MIA - IND,54930655251,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/54930655251,https://www.airlines-manager.com/aircraft/show/99920623,3:15,9:14,320,"$382,687.00","$341,268.00","$1,066.46","$57,036.43"
MIA - IND,54942363079,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/54942363079,https://www.airlines-manager.com/aircraft/show/99920624,10:00,15:59,320,"$382,687.00","$341,268.00","$1,066.46","$57,036.43"
MIA - IND,54956618089,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/54956618089,https://www.airlines-manager.com/aircraft/show/99920625,16:00,21:59,320,"$382,687.00","$341,268.00","$1,066.46","$57,036.43"
MIA - IND,54969516421,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/54969516421,https://www.airlines-manager.com/aircraft/show/99920626,22:30,4:29,320,"$382,687.00","$341,268.00","$1,066.46","$57,036.43"
MIA - JAN,54930655524,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/54930655524,https://www.airlines-manager.com/aircraft/show/114912307,5:30,10:29,112,"$149,512.00","$130,617.00","$1,166.22","$26,210.77"
MIA - JAN,54942362987,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/54942362987,https://www.airlines-manager.com/aircraft/show/115493373,8:30,13:29,310,"$314,276.00","$284,944.00",$919.17,"$57,179.40"
MIA - JAN,54952417753,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/54952417753,https://www.airlines-manager.com/aircraft/show/115493370,14:00,18:59,310,"$314,276.00","$284,944.00",$919.17,"$57,179.40"
MIA - JAN,54965848591,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/54965848591,https://www.airlines-manager.com/aircraft/show/115493371,20:15,1:14,310,"$314,276.00","$284,944.00",$919.17,"$57,179.40"
MIA - JAN,54969516426,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/54969516426,https://www.airlines-manager.com/aircraft/show/115493372,22:30,3:29,253,"$280,353.00","$252,181.00",$996.76,"$50,604.88"
MIA - JAX,54930655300,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/54930655300,https://www.airlines-manager.com/aircraft/show/103684631,3:00,6:29,320,"$173,694.00","$144,655.00",$452.05,"$41,527.75"
MIA - JAX,54947196805,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/54947196805,https://www.airlines-manager.com/aircraft/show/103684630,10:30,13:59,320,"$173,694.00","$144,655.00",$452.05,"$41,527.75"
MIA - JAX,54952417747,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/54952417747,https://www.airlines-manager.com/aircraft/show/103365574,14:00,17:29,320,"$173,694.00","$144,655.00",$452.05,"$41,527.75"
MIA - JAX,54965848481,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/54965848481,https://www.airlines-manager.com/aircraft/show/103684632,19:15,22:44,320,"$173,694.00","$144,655.00",$452.05,"$41,527.75"
MIA - JAX,54969516404,MIA-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/54969516404,https://www.airlines-manager.com/aircraft/show/106339154,22:15,1:44,198,"$131,883.00","$111,987.00",$565.59,"$32,149.38"
MIA - JFK,54930655535,MIA-JFK-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/54930655535,https://www.airlines-manager.com/aircraft/show/105308264,5:45,11:59,338,"$428,918.00","$376,442.00","$1,113.73","$60,391.76"
MIA - JFK,54937424020,MIA-JFK-PHX 6,ERJ-175,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/54937424020,https://www.airlines-manager.com/aircraft/show/82683137,6:45,12:59,112,"$187,062.00","$152,852.00","$1,364.75","$24,521.71"
MIA - JFK,54942363129,MIA-JFK-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/54942363129,https://www.airlines-manager.com/aircraft/show/105308267,10:00,16:14,338,"$428,918.00","$376,442.00","$1,113.73","$60,391.76"
MIA - JFK,54947196973,MIA-JFK-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/54947196973,https://www.airlines-manager.com/aircraft/show/105308265,12:00,18:14,338,"$428,918.00","$376,442.00","$1,113.73","$60,391.76"
MIA - JFK,54961494239,MIA-JFK-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/54961494239,https://www.airlines-manager.com/aircraft/show/105308266,18:00,0:14,338,"$428,918.00","$376,442.00","$1,113.73","$60,391.76"
MIA - JFK,54965848638,MIA-JFK-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/54965848638,https://www.airlines-manager.com/aircraft/show/105308268,20:45,2:59,338,"$428,918.00","$376,442.00","$1,113.73","$60,391.76"
MIA - JNB,54930654727,MIA 84A-4 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/54930654727,https://www.airlines-manager.com/aircraft/show/93686966,0:00,6:44,1124,"$6,002,780.00","$5,569,148.00","$4,954.76","$827,101.19"
MIA - JNB,54952417624,MIA 84A-7 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/54952417624,https://www.airlines-manager.com/aircraft/show/93776641,13:00,19:44,1124,"$6,002,780.00","$5,569,148.00","$4,954.76","$827,101.19"
MIA - LAS,54930655054,MIA-LAS-SEA 5,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/54930655054,https://www.airlines-manager.com/aircraft/show/105093929,1:30,11:59,338,"$716,711.00","$649,535.00","$1,921.70","$61,958.82"
MIA - LAS,54942363134,MIA-LAS-SEA 1,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/54942363134,https://www.airlines-manager.com/aircraft/show/105093925,10:00,20:29,338,"$716,711.00","$649,535.00","$1,921.70","$61,958.82"
MIA - LAS,54947196990,MIA-LAS-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/54947196990,https://www.airlines-manager.com/aircraft/show/113251304,12:00,22:29,198,"$496,976.00","$440,972.00","$2,227.13","$42,064.10"
MIA - LAS,54952417578,MIA-LAS-SEA 2,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/54952417578,https://www.airlines-manager.com/aircraft/show/105093926,13:00,23:29,338,"$716,711.00","$649,535.00","$1,921.70","$61,958.82"
MIA - LAS,54956617995,MIA-LAS-SEA 3,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/54956617995,https://www.airlines-manager.com/aircraft/show/105093927,15:00,1:29,338,"$716,711.00","$649,535.00","$1,921.70","$61,958.82"
MIA - LAS,54969516416,MIA-LAS-SEA 4,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/54969516416,https://www.airlines-manager.com/aircraft/show/105093928,22:30,8:59,338,"$716,711.00","$649,535.00","$1,921.70","$61,958.82"
MIA - LAX,54930654682,MIA-LAX-DEN 1,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/54930654682,https://www.airlines-manager.com/aircraft/show/91126649,0:00,10:59,400,"$917,458.00","$823,986.00","$2,059.97","$75,021.49"
MIA - LAX,54930654683,MIA-LAX-DEN 2,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/54930654683,https://www.airlines-manager.com/aircraft/show/91126650,2:00,12:59,400,"$917,458.00","$823,986.00","$2,059.97","$75,021.49"
MIA - LAX,54942363137,MIA-LAX-DEN 3,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/54942363137,https://www.airlines-manager.com/aircraft/show/91126651,10:00,20:59,400,"$917,458.00","$823,986.00","$2,059.97","$75,021.49"
MIA - LAX,54947196893,MIA-LAX-DEN 5 E,A319-100,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/54947196893,https://www.airlines-manager.com/aircraft/show/115181776,11:00,22:14,216,"$537,212.00","$475,849.00","$2,203.00","$42,360.45"
MIA - LAX,54956618142,MIA-LAX-DEN 4,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/54956618142,https://www.airlines-manager.com/aircraft/show/91126652,16:30,3:29,400,"$917,458.00","$823,986.00","$2,059.97","$75,021.49"
MIA - LEX,54930655304,MIA-CID-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/54930655304,https://www.airlines-manager.com/aircraft/show/116789653,3:00,8:29,310,"$348,601.00","$317,916.00","$1,025.54","$57,978.60"
MIA - LEX,54942363109,MIA-CID-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/54942363109,https://www.airlines-manager.com/aircraft/show/116789650,10:00,15:29,310,"$348,601.00","$317,916.00","$1,025.54","$57,978.60"
MIA - LEX,54956617957,MIA-CID-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/54956617957,https://www.airlines-manager.com/aircraft/show/116789651,15:00,20:29,310,"$348,601.00","$317,916.00","$1,025.54","$57,978.60"
MIA - LEX,54965848530,MIA-CID-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/54965848530,https://www.airlines-manager.com/aircraft/show/116789652,19:45,1:14,300,"$342,013.00","$311,570.00","$1,038.57","$56,821.28"
MIA - LIT,54930655225,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/54930655225,https://www.airlines-manager.com/aircraft/show/96692674,2:15,7:59,310,"$360,566.00","$328,179.00","$1,058.64","$57,240.52"
MIA - LIT,54930655226,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/54930655226,https://www.airlines-manager.com/aircraft/show/105601657,4:15,9:59,112,"$171,082.00","$150,007.00","$1,339.35","$26,164.01"
MIA - LIT,54942362969,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/54942362969,https://www.airlines-manager.com/aircraft/show/94886625,8:15,13:59,310,"$360,566.00","$328,179.00","$1,058.64","$57,240.52"
MIA - LIT,54956617975,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/54956617975,https://www.airlines-manager.com/aircraft/show/94886629,15:00,20:44,310,"$360,566.00","$328,179.00","$1,058.64","$57,240.52"
MIA - LIT,54969516337,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/54969516337,https://www.airlines-manager.com/aircraft/show/94886626,21:30,3:14,304,"$356,455.00","$324,223.00","$1,066.52","$56,550.52"
MIA - LOS,54937424026,MIA 84A-5 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/54937424026,https://www.airlines-manager.com/aircraft/show/93704215,6:45,4:59,1124,"$4,253,118.00","$3,953,671.00","$3,517.50","$177,826.28"
MIA - LOS,54965848532,MIA 84A-1 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/54965848532,https://www.airlines-manager.com/aircraft/show/93686969,19:45,17:59,1115,"$4,194,315.00","$3,897,224.00","$3,495.27","$175,287.44"
MIA - MBJ,54930654914,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/54930654914,https://www.airlines-manager.com/aircraft/show/104034460,0:45,4:59,228,"$192,542.00","$171,216.00",$750.95,"$40,444.72"
MIA - MBJ,54930654915,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/54930654915,https://www.airlines-manager.com/aircraft/show/104034461,5:00,9:14,228,"$192,542.00","$171,216.00",$750.95,"$40,444.72"
MIA - MBJ,54942363146,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/54942363146,https://www.airlines-manager.com/aircraft/show/104034459,10:00,14:14,228,"$192,542.00","$171,216.00",$750.95,"$40,444.72"
MIA - MBJ,54952417429,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/54952417429,https://www.airlines-manager.com/aircraft/show/104034457,12:45,16:59,228,"$192,542.00","$171,216.00",$750.95,"$40,444.72"
MIA - MBJ,54961494018,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/54961494018,https://www.airlines-manager.com/aircraft/show/104034458,17:00,21:14,228,"$192,542.00","$171,216.00",$750.95,"$40,444.72"
MIA - MBJ,54969516468,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/54969516468,https://www.airlines-manager.com/aircraft/show/99326789,23:00,3:14,228,"$192,542.00","$171,216.00",$750.95,"$40,444.72"
MIA - MCI,54930654930,MIA-ELP-MCI 3,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/54930654930,https://www.airlines-manager.com/aircraft/show/91806232,0:45,7:44,320,"$446,817.00","$401,234.00","$1,253.86","$57,455.94"
MIA - MCI,54930654931,MIA-ELP-MCI 4,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/54930654931,https://www.airlines-manager.com/aircraft/show/91806231,1:30,8:29,320,"$446,817.00","$401,234.00","$1,253.86","$57,455.94"
MIA - MCI,54942363132,MIA-ELP-MCI 2,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/54942363132,https://www.airlines-manager.com/aircraft/show/91806235,10:00,16:59,320,"$446,817.00","$401,234.00","$1,253.86","$57,455.94"
MIA - MCI,54961494303,MIA-ELP-MCI 1,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/54961494303,https://www.airlines-manager.com/aircraft/show/91806234,18:30,1:29,320,"$446,817.00","$401,234.00","$1,253.86","$57,455.94"
MIA - MCI,54961494304,MIA-ELP-MCI 5 B,A319-100,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/54961494304,https://www.airlines-manager.com/aircraft/show/105093924,19:00,1:59,198,"$337,670.00","$305,278.00","$1,541.81","$43,715.23"
MIA - MCO,54930654741,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/54930654741,https://www.airlines-manager.com/aircraft/show/107763565,0:15,2:59,320,"$122,006.00","$84,784.00",$264.95,"$31,018.54"
MIA - MCO,54930654742,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/54930654742,https://www.airlines-manager.com/aircraft/show/107467213,4:00,6:44,112,"$54,851.00","$35,679.00",$318.56,"$13,053.29"
MIA - MCO,54937423973,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/54937423973,https://www.airlines-manager.com/aircraft/show/103534663,6:00,8:44,112,"$54,851.00","$35,679.00",$318.56,"$13,053.29"
MIA - MCO,54942363049,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/54942363049,https://www.airlines-manager.com/aircraft/show/103534663,9:15,11:59,112,"$54,851.00","$35,679.00",$318.56,"$13,053.29"
MIA - MCO,54942363050,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/54942363050,https://www.airlines-manager.com/aircraft/show/107763566,10:00,12:44,320,"$122,006.00","$84,784.00",$264.95,"$31,018.54"
MIA - MCO,54947196916,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/54947196916,https://www.airlines-manager.com/aircraft/show/107763561,11:00,13:44,320,"$122,006.00","$84,784.00",$264.95,"$31,018.54"
MIA - MCO,54961494221,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/54961494221,https://www.airlines-manager.com/aircraft/show/107763562,17:45,20:29,320,"$122,006.00","$84,784.00",$264.95,"$31,018.54"
MIA - MEM,54930654720,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/54930654720,https://www.airlines-manager.com/aircraft/show/110582842,0:00,5:29,198,"$262,187.00","$234,418.00","$1,183.93","$42,751.00"
MIA - MEM,54930654721,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/54930654721,https://www.airlines-manager.com/aircraft/show/88239556,3:00,8:29,320,"$345,253.00","$305,664.00",$955.20,"$55,744.19"
MIA - MEM,54937424078,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/54937424078,https://www.airlines-manager.com/aircraft/show/88494374,7:45,13:14,320,"$345,253.00","$305,664.00",$955.20,"$55,744.19"
MIA - MEM,54952417723,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/54952417723,https://www.airlines-manager.com/aircraft/show/88494378,14:00,19:29,320,"$345,253.00","$305,664.00",$955.20,"$55,744.19"
MIA - MEM,54965848573,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/54965848573,https://www.airlines-manager.com/aircraft/show/91806233,20:00,1:29,320,"$345,253.00","$305,664.00",$955.20,"$55,744.19"
MIA - MFR,54930655032,MIA-FCA-MFR 2,737-900ER,https://www.airlines-manager.com/network/showline/50424903,https://www.airlines-manager.com/network/showflight/54930655032,https://www.airlines-manager.com/aircraft/show/119652478,1:30,13:59,320,"$755,935.00","$692,473.00","$2,163.98","$55,471.80"
MIA - MFR,54947197009,MIA-FCA-MFR 3,737-900ER,https://www.airlines-manager.com/network/showline/50424903,https://www.airlines-manager.com/network/showflight/54947197009,https://www.airlines-manager.com/aircraft/show/119652477,12:00,0:29,320,"$755,935.00","$692,473.00","$2,163.98","$55,471.80"
MIA - MFR,54952417778,MIA-FCA-MFR 4,737-900ER,https://www.airlines-manager.com/network/showline/50424903,https://www.airlines-manager.com/network/showflight/54952417778,https://www.airlines-manager.com/aircraft/show/119652476,14:00,2:29,320,"$755,935.00","$692,473.00","$2,163.98","$55,471.80"
MIA - MFR,54971692254,MIA-FCA-MFR 1,737-900ER,https://www.airlines-manager.com/network/showline/50424903,https://www.airlines-manager.com/network/showflight/54971692254,https://www.airlines-manager.com/aircraft/show/119652479,23:30,11:59,320,"$755,935.00","$692,473.00","$2,163.98","$55,471.80"
MIA - MHT,54930655016,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/54930655016,https://www.airlines-manager.com/aircraft/show/115493371,1:15,8:14,310,"$452,295.00","$414,040.00","$1,335.61","$59,289.74"
MIA - MHT,54930655017,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/54930655017,https://www.airlines-manager.com/aircraft/show/115493372,3:30,10:29,310,"$452,295.00","$414,040.00","$1,335.61","$59,289.74"
MIA - MHT,54947196891,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/54947196891,https://www.airlines-manager.com/aircraft/show/114912307,11:00,17:59,112,"$213,633.00","$188,436.00","$1,682.46","$26,983.68"
MIA - MHT,54952417755,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/54952417755,https://www.airlines-manager.com/aircraft/show/115493373,14:00,20:59,310,"$452,295.00","$414,040.00","$1,335.61","$59,289.74"
MIA - MHT,54961494349,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/54961494349,https://www.airlines-manager.com/aircraft/show/115493370,19:00,1:59,310,"$452,295.00","$414,040.00","$1,335.61","$59,289.74"
MIA - MKE,54930654840,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/54930654840,https://www.airlines-manager.com/aircraft/show/88494378,0:15,7:14,320,"$446,482.00","$402,355.00","$1,257.36","$57,616.47"
MIA - MKE,54937423992,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/54937423992,https://www.airlines-manager.com/aircraft/show/91806233,6:15,13:14,320,"$446,482.00","$402,355.00","$1,257.36","$57,616.47"
MIA - MKE,54947196907,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/54947196907,https://www.airlines-manager.com/aircraft/show/110582842,11:00,17:59,198,"$337,620.00","$306,185.00","$1,546.39","$43,845.11"
MIA - MKE,54952417725,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/54952417725,https://www.airlines-manager.com/aircraft/show/88239556,14:00,20:59,320,"$446,482.00","$402,355.00","$1,257.36","$57,616.47"
MIA - MKE,54961494329,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/54961494329,https://www.airlines-manager.com/aircraft/show/88494374,18:45,1:44,320,"$446,482.00","$402,355.00","$1,257.36","$57,616.47"
MIA - MSN,54930655129,MIA-RAP-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/54930655129,https://www.airlines-manager.com/aircraft/show/116789625,1:45,8:59,320,"$449,929.00","$407,356.00","$1,272.99","$56,316.50"
MIA - MSN,54937424083,MIA-RAP-GRR 5,ERJ-175,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/54937424083,https://www.airlines-manager.com/aircraft/show/116042630,7:45,14:59,112,"$213,319.00","$188,237.00","$1,680.69","$26,023.55"
MIA - MSN,54942363102,MIA-RAP-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/54942363102,https://www.airlines-manager.com/aircraft/show/116789623,10:00,17:14,320,"$449,929.00","$407,356.00","$1,272.99","$56,316.50"
MIA - MSN,54956618154,MIA-RAP-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/54956618154,https://www.airlines-manager.com/aircraft/show/116789624,16:45,23:59,320,"$449,929.00","$407,356.00","$1,272.99","$56,316.50"
MIA - MSN,54961494312,MIA-RAP-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/54961494312,https://www.airlines-manager.com/aircraft/show/116789622,18:45,1:59,320,"$449,929.00","$407,356.00","$1,272.99","$56,316.50"
MIA - MSO,54937424079,MIA-FAT-MSO 2,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/54937424079,https://www.airlines-manager.com/aircraft/show/113101231,7:45,18:59,320,"$697,127.00","$638,148.00","$1,994.21","$56,808.43"
MIA - MSO,54947196899,MIA-FAT-MSO 3,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/54947196899,https://www.airlines-manager.com/aircraft/show/113101234,11:00,22:14,320,"$697,127.00","$638,148.00","$1,994.21","$56,808.43"
MIA - MSO,54965848577,MIA-FAT-MSO 4,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/54965848577,https://www.airlines-manager.com/aircraft/show/113101232,20:00,7:14,320,"$697,127.00","$638,148.00","$1,994.21","$56,808.43"
MIA - MSO,54969516427,MIA-FAT-MSO 1,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/54969516427,https://www.airlines-manager.com/aircraft/show/113101229,22:30,9:44,320,"$697,127.00","$638,148.00","$1,994.21","$56,808.43"
MIA - MSP,54930655190,MIA-JFK-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/54930655190,https://www.airlines-manager.com/aircraft/show/105308267,2:00,9:59,338,"$541,729.00","$493,047.00","$1,458.72","$61,759.54"
MIA - MSP,54930655191,MIA-JFK-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/54930655191,https://www.airlines-manager.com/aircraft/show/105308268,3:00,10:59,338,"$541,729.00","$493,047.00","$1,458.72","$61,759.54"
MIA - MSP,54942363130,MIA-JFK-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/54942363130,https://www.airlines-manager.com/aircraft/show/105308266,10:00,17:59,338,"$541,729.00","$493,047.00","$1,458.72","$61,759.54"
MIA - MSP,54952417491,MIA-JFK-PHX 6,ERJ-175,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/54952417491,https://www.airlines-manager.com/aircraft/show/82683137,13:00,20:59,112,"$236,027.00","$203,069.00","$1,813.12","$25,436.62"
MIA - MSP,54961494282,MIA-JFK-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/54961494282,https://www.airlines-manager.com/aircraft/show/105308265,18:15,2:14,338,"$541,729.00","$493,047.00","$1,458.72","$61,759.54"
MIA - MSP,54969516352,MIA-JFK-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/54969516352,https://www.airlines-manager.com/aircraft/show/105308264,21:45,5:44,338,"$541,729.00","$493,047.00","$1,458.72","$61,759.54"
MIA - MSY,54930655050,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/54930655050,https://www.airlines-manager.com/aircraft/show/91806233,1:30,6:14,320,"$300,043.00","$264,920.00",$827.88,"$55,969.01"
MIA - MSY,54930655051,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/54930655051,https://www.airlines-manager.com/aircraft/show/110582842,5:30,10:14,198,"$228,739.00","$204,246.00","$1,031.55","$43,150.56"
MIA - MSY,54942363000,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/54942363000,https://www.airlines-manager.com/aircraft/show/88239556,8:30,13:14,320,"$300,043.00","$264,920.00",$827.88,"$55,969.01"
MIA - MSY,54952417727,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/54952417727,https://www.airlines-manager.com/aircraft/show/88494374,14:00,18:44,320,"$300,043.00","$264,920.00",$827.88,"$55,969.01"
MIA - MSY,54965848523,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/54965848523,https://www.airlines-manager.com/aircraft/show/88494378,19:30,0:14,320,"$300,043.00","$264,920.00",$827.88,"$55,969.01"
MIA - NAS,54930655229,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/54930655229,https://www.airlines-manager.com/aircraft/show/104034461,2:15,4:59,228,"$78,987.00","$61,016.00",$267.61,"$22,322.93"
MIA - NAS,54937424072,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/54937424072,https://www.airlines-manager.com/aircraft/show/99326789,7:30,10:14,228,"$78,987.00","$61,016.00",$267.61,"$22,322.93"
MIA - NAS,54942363148,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/54942363148,https://www.airlines-manager.com/aircraft/show/104034457,10:00,12:44,228,"$78,987.00","$61,016.00",$267.61,"$22,322.93"
MIA - NAS,54952417804,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/54952417804,https://www.airlines-manager.com/aircraft/show/104034458,14:15,16:59,228,"$78,987.00","$61,016.00",$267.61,"$22,322.93"
MIA - NAS,54961494289,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/54961494289,https://www.airlines-manager.com/aircraft/show/104034459,18:30,21:14,228,"$78,987.00","$61,016.00",$267.61,"$22,322.93"
MIA - NAS,54969516363,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/54969516363,https://www.airlines-manager.com/aircraft/show/104034460,22:00,0:44,228,"$78,987.00","$61,016.00",$267.61,"$22,322.93"
MIA - OAK,54930654971,MIA-OAK-SMF 5,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/54930654971,https://www.airlines-manager.com/aircraft/show/91198617,1:00,12:59,320,"$737,460.00","$671,568.00","$2,098.65","$56,041.84"
MIA - OAK,54947196870,MIA-OAK-SMF 1,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/54947196870,https://www.airlines-manager.com/aircraft/show/91198615,11:00,22:59,320,"737,460$","671,568$","$2,098.65","$56,041.84"
MIA - OAK,54952417580,MIA-OAK-SMF 2,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/54952417580,https://www.airlines-manager.com/aircraft/show/91198619,13:00,0:59,320,"737,460$","671,568$","$2,098.65","$56,041.84"
MIA - OAK,54956617989,MIA-OAK-SMF 3,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/54956617989,https://www.airlines-manager.com/aircraft/show/91198616,15:00,2:59,320,"737,460$","671,568$","$2,098.65","$56,041.84"
MIA - OAK,54969516484,MIA-OAK-SMF 4,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/54969516484,https://www.airlines-manager.com/aircraft/show/91198618,23:00,10:59,320,"737,460$","671,568$","$2,098.65","$56,041.84"
MIA - OKC,54930655145,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/54930655145,https://www.airlines-manager.com/aircraft/show/110883112,1:45,8:29,310,"430,426$","392,795$","$1,267.08","$58,335.89"
MIA - OKC,54930655146,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/54930655146,https://www.airlines-manager.com/aircraft/show/110883111,4:00,10:44,310,"430,426$","392,795$","$1,267.08","$58,335.89"
MIA - OKC,54942363116,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/54942363116,https://www.airlines-manager.com/aircraft/show/104353572,10:00,16:44,112,"202,427$","177,716$","$1,586.75","$26,393.47"
MIA - OKC,54952417471,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/54952417471,https://www.airlines-manager.com/aircraft/show/110883110,13:00,19:44,310,"430,426$","392,795$","$1,267.08","$58,335.89"
MIA - OKC,54956617952,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/54956617952,https://www.airlines-manager.com/aircraft/show/110883113,14:45,21:29,310,"430,426$","392,795$","$1,267.08","$58,335.89"
MIA - OMA,54930655257,MIA-BOI-BNA 1,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/54930655257,https://www.airlines-manager.com/aircraft/show/104133006,2:30,9:59,320,"477,506$","432,428$","$1,351.34","$57,785.48"
MIA - OMA,54937424005,MIA-BOI-BNA 4,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/54937424005,https://www.airlines-manager.com/aircraft/show/103775657,6:30,13:59,320,"477,506$","432,428$","$1,351.34","$57,785.48"
MIA - OMA,54942363143,MIA-BOI-BNA 3,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/54942363143,https://www.airlines-manager.com/aircraft/show/104020880,10:00,17:29,320,"477,506$","432,428$","$1,351.34","$57,785.48"
MIA - OMA,54956618041,MIA-BOI-BNA 2,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/54956618041,https://www.airlines-manager.com/aircraft/show/104022609,15:15,22:44,320,"477,506$","432,428$","$1,351.34","$57,785.48"
MIA - OMA,54961494060,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/54961494060,https://www.airlines-manager.com/aircraft/show/103534663,17:15,0:44,112,"225,479$","198,880$","$1,775.71","$26,576.39"
MIA - ONT,54930654902,MIA-RNO-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/54930654902,https://www.airlines-manager.com/aircraft/show/90489722,0:30,11:29,320,"691,257$","629,649$","$1,967.65","$57,327.68"
MIA - ONT,54930654903,MIA-RNO-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/54930654903,https://www.airlines-manager.com/aircraft/show/86238756,2:30,13:29,320,"691,257$","629,649$","$1,967.65","$57,327.68"
MIA - ONT,54947196863,MIA-RNO-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/54947196863,https://www.airlines-manager.com/aircraft/show/90489723,11:00,21:59,320,"691,257$","629,649$","$1,967.65","$57,327.68"
MIA - ONT,54952417721,MIA-RNO-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/54952417721,https://www.airlines-manager.com/aircraft/show/105223010,14:00,0:59,198,"519,083$","474,343$","$2,395.67","$43,187.53"
MIA - ONT,54969516420,MIA-RNO-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/54969516420,https://www.airlines-manager.com/aircraft/show/86238755,22:30,9:29,320,"691,257$","629,649$","$1,967.65","$57,327.68"
MIA - ORD,54930655322,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/54930655322,https://www.airlines-manager.com/aircraft/show/91600935,3:15,9:59,310,"423,914$","364,109$","$1,174.55","$54,075.59"
MIA - ORD,54930655323,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/54930655323,https://www.airlines-manager.com/aircraft/show/91600938,4:15,10:59,310,"423,914$","364,109$","$1,174.55","$54,075.59"
MIA - ORD,54942363038,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/54942363038,https://www.airlines-manager.com/aircraft/show/82543123,9:00,15:44,112,"199,175$","161,198$","$1,439.27","$23,940.30"
MIA - ORD,54947196876,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/54947196876,https://www.airlines-manager.com/aircraft/show/91600937,11:00,17:44,310,"423,914$","364,109$","$1,174.55","$54,075.59"
MIA - ORD,54956617946,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/54956617946,https://www.airlines-manager.com/aircraft/show/91600939,14:45,21:29,310,"423,914$","364,109$","$1,174.55","$54,075.59"
MIA - ORD,54956617947,MIA-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/54956617947,https://www.airlines-manager.com/aircraft/show/106339154,15:30,22:14,198,"319,739$","271,843$","$1,372.94","$40,372.72"
MIA - ORD,54965848647,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/54965848647,https://www.airlines-manager.com/aircraft/show/91600936,20:45,3:29,310,"423,914$","364,109$","$1,174.55","$54,075.59"
MIA - ORF,54930654864,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/54930654864,https://www.airlines-manager.com/aircraft/show/114912307,0:15,5:29,112,"157,418$","137,445$","$1,227.19","$26,263.38"
MIA - ORF,54930654865,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/54930654865,https://www.airlines-manager.com/aircraft/show/115493373,3:15,8:29,310,"331,248$","300,298$",$968.70,"$57,381.78"
MIA - ORF,54942362964,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/54942362964,https://www.airlines-manager.com/aircraft/show/115493370,8:15,13:29,310,"331,248$","300,298$",$968.70,"$57,381.78"
MIA - ORF,54956617960,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/54956617960,https://www.airlines-manager.com/aircraft/show/115493371,15:00,20:14,310,"331,248$","300,298$",$968.70,"$57,381.78"
MIA - ORF,54961494062,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/54961494062,https://www.airlines-manager.com/aircraft/show/115493372,17:15,22:29,310,"331,248$","300,298$",$968.70,"$57,381.78"
MIA - PDX,54942363086,MIA-PDX-DTW 1,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/54942363086,https://www.airlines-manager.com/aircraft/show/89943715,10:00,22:29,320,"771,170$","700,853$","$2,190.17","$56,143.10"
MIA - PDX,54952417615,MIA-PDX-DTW 3,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/54952417615,https://www.airlines-manager.com/aircraft/show/89943713,13:00,1:29,320,"771,170$","700,853$","$2,190.17","$56,143.10"
MIA - PDX,54952417616,MIA-PDX-DTW 4,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/54952417616,https://www.airlines-manager.com/aircraft/show/89943712,14:00,2:29,320,"771,170$","700,853$","$2,190.17","$56,143.10"
MIA - PDX,54965848503,MIA-PDX-DTW 2,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/54965848503,https://www.airlines-manager.com/aircraft/show/89943714,19:30,7:59,320,"771,170$","700,853$","$2,190.17","$56,143.10"
MIA - PDX,54971692255,MIA-PDX-DTW 5,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/54971692255,https://www.airlines-manager.com/aircraft/show/89943711,23:30,11:59,320,"771,170$","700,853$","$2,190.17","$56,143.10"
MIA - PHL,54930655437,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/54930655437,https://www.airlines-manager.com/aircraft/show/91600939,4:00,9:59,310,"379,784$","338,009$","$1,090.35","$56,491.75"
MIA - PHL,54930655439,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/54930655439,https://www.airlines-manager.com/aircraft/show/91600937,5:00,10:59,310,"379,784$","338,009$","$1,090.35","$56,491.75"
MIA - PHL,54942363127,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/54942363127,https://www.airlines-manager.com/aircraft/show/91600936,10:00,15:59,310,"379,784$","338,009$","$1,090.35","$56,491.75"
MIA - PHL,54956618151,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/54956618151,https://www.airlines-manager.com/aircraft/show/91600935,16:30,22:29,310,"379,784$","338,009$","$1,090.35","$56,491.75"
MIA - PHL,54961494205,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/54961494205,https://www.airlines-manager.com/aircraft/show/91600938,17:30,23:29,310,"379,784$","338,009$","$1,090.35","$56,491.75"
MIA - PHL,54969516407,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/54969516407,https://www.airlines-manager.com/aircraft/show/82543123,22:15,4:14,112,"179,528$","152,690$","$1,363.30","$25,519.22"
MIA - PHX,54930654826,MIA-JFK-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/54930654826,https://www.airlines-manager.com/aircraft/show/105308266,0:15,9:59,338,"670,464$","611,759$","$1,809.94","$62,851.95"
MIA - PHX,54930654827,MIA-JFK-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/54930654827,https://www.airlines-manager.com/aircraft/show/105308265,2:15,11:59,338,"670,464$","611,759$","$1,809.94","$62,851.95"
MIA - PHX,54947196864,MIA-JFK-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/54947196864,https://www.airlines-manager.com/aircraft/show/105308268,11:00,20:44,338,"670,464$","611,759$","$1,809.94","$62,851.95"
MIA - PHX,54947196865,MIA-JFK-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/54947196865,https://www.airlines-manager.com/aircraft/show/105308264,12:00,21:44,338,"670,464$","611,759$","$1,809.94","$62,851.95"
MIA - PHX,54956618131,MIA-JFK-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/54956618131,https://www.airlines-manager.com/aircraft/show/105308267,16:15,1:59,338,"670,464$","611,759$","$1,809.94","$62,851.95"
MIA - PHX,54965848653,MIA-JFK-PHX 6,ERJ-175,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/54965848653,https://www.airlines-manager.com/aircraft/show/82683137,21:00,6:44,112,"290,059$","249,922$","$2,231.45","$25,676.92"
MIA - PIT,54930655332,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/54930655332,https://www.airlines-manager.com/aircraft/show/99920624,3:15,9:14,320,"381,330$","339,654$","$1,061.42","$56,766.69"
MIA - PIT,54942363080,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/54942363080,https://www.airlines-manager.com/aircraft/show/99920625,10:00,15:59,320,"381,330$","339,654$","$1,061.42","$56,766.69"
MIA - PIT,54956618146,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/54956618146,https://www.airlines-manager.com/aircraft/show/99920626,16:30,22:29,320,"381,330$","339,654$","$1,061.42","$56,766.69"
MIA - PIT,54965848632,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/54965848632,https://www.airlines-manager.com/aircraft/show/82323689,20:30,2:29,112,"180,264$","156,468$","$1,397.04","$26,150.64"
MIA - PIT,54965848633,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/54965848633,https://www.airlines-manager.com/aircraft/show/99920623,21:15,3:14,320,"381,330$","339,654$","$1,061.42","$56,766.69"
MIA - PLS,54930655326,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/54930655326,https://www.airlines-manager.com/aircraft/show/99326789,3:15,7:29,228,"205,523$","184,430$",$808.90,"$43,566.14"
MIA - PLS,54930655327,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/54930655327,https://www.airlines-manager.com/aircraft/show/104034460,5:00,9:14,228,"205,523$","184,430$",$808.90,"$43,566.14"
MIA - PLS,54942363147,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/54942363147,https://www.airlines-manager.com/aircraft/show/104034458,10:00,14:14,228,"205,523$","184,430$",$808.90,"$43,566.14"
MIA - PLS,54952417785,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/54952417785,https://www.airlines-manager.com/aircraft/show/104034459,14:15,18:29,228,"205,523$","184,430$",$808.90,"$43,566.14"
MIA - PLS,54961494022,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/54961494022,https://www.airlines-manager.com/aircraft/show/104034457,17:00,21:14,228,"$205,523.00","$184,430.00",$808.90,"$43,566.14"
MIA - PLS,54969516367,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/54969516367,https://www.airlines-manager.com/aircraft/show/104034461,22:00,2:14,228,"$205,523.00","$184,430.00",$808.90,"$43,566.14"
MIA - POS,54952417418,MIA 84B-1 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/54952417418,https://www.airlines-manager.com/aircraft/show/106676225,12:30,20:29,962,"$1,335,429.00","$1,218,322.00","$1,266.45","$152,608.18"
MIA - POS,54956618112,MIA 84B-6 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/54956618112,https://www.airlines-manager.com/aircraft/show/106676230,16:00,23:59,728,"$1,100,141.00","$995,874.00","$1,367.96","$124,744.13"
MIA - PSP,54930655175,MIA-PSP-BFF 5,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/54930655175,https://www.airlines-manager.com/aircraft/show/116789630,2:00,12:44,320,"$659,420.00","$601,722.00","$1,880.38","$56,061.06"
MIA - PSP,54942363096,MIA-PSP-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/54942363096,https://www.airlines-manager.com/aircraft/show/116789631,10:00,20:44,320,"$659,420.00","$601,722.00","$1,880.38","$56,061.06"
MIA - PSP,54952417651,MIA-PSP-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/54952417651,https://www.airlines-manager.com/aircraft/show/116789634,14:00,0:44,320,"$659,420.00","$601,722.00","$1,880.38","$56,061.06"
MIA - PSP,54952417652,MIA-PSP-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/54952417652,https://www.airlines-manager.com/aircraft/show/116789632,14:15,0:59,320,"$659,420.00","$601,722.00","$1,880.38","$56,061.06"
MIA - PSP,54969516474,MIA-PSP-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/54969516474,https://www.airlines-manager.com/aircraft/show/116789633,23:00,9:44,240,"$557,121.00","$504,222.00","$2,100.93","$46,977.20"
MIA - PUJ,54930655348,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/54930655348,https://www.airlines-manager.com/aircraft/show/104034458,3:30,9:14,228,"$277,307.00","$250,687.00","$1,099.50","$43,724.48"
MIA - PUJ,54942363144,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/54942363144,https://www.airlines-manager.com/aircraft/show/104034461,10:00,15:44,228,"$277,307.00","$250,687.00","$1,099.50","$43,724.48"
MIA - PUJ,54956618133,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/54956618133,https://www.airlines-manager.com/aircraft/show/104034460,16:15,21:59,228,"$277,307.00","$250,687.00","$1,099.50","$43,724.48"
MIA - PUJ,54961494076,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/54961494076,https://www.airlines-manager.com/aircraft/show/99326789,17:15,22:59,228,"$277,307.00","$250,687.00","$1,099.50","$43,724.48"
MIA - PUJ,54965848682,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/54965848682,https://www.airlines-manager.com/aircraft/show/104034457,21:15,2:59,228,"$277,307.00","$250,687.00","$1,099.50","$43,724.48"
MIA - PUJ,54969516365,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/54969516365,https://www.airlines-manager.com/aircraft/show/104034459,22:00,3:44,228,"$277,307.00","$250,687.00","$1,099.50","$43,724.48"
MIA - PVD,54930655028,MIA-BUR-PVD 3,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/54930655028,https://www.airlines-manager.com/aircraft/show/108834805,1:15,7:59,310,"$425,919.00","$389,690.00","$1,257.06","$57,874.75"
MIA - PVD,54937424046,MIA-BUR-PVD 5 B,A319-100,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/54937424046,https://www.airlines-manager.com/aircraft/show/108834807,7:15,13:59,198,"$321,428.00","$292,393.00","$1,476.73","$43,424.70"
MIA - PVD,54947196846,MIA-BUR-PVD 2,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/54947196846,https://www.airlines-manager.com/aircraft/show/108834804,11:00,17:44,310,"$425,919.00","$389,690.00","$1,257.06","$57,874.75"
MIA - PVD,54961494002,MIA-BUR-PVD 4,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/54961494002,https://www.airlines-manager.com/aircraft/show/108834806,17:00,23:44,310,"$425,919.00","$389,690.00","$1,257.06","$57,874.75"
MIA - PVD,54969516406,MIA-BUR-PVD 1,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/54969516406,https://www.airlines-manager.com/aircraft/show/108834803,22:15,4:59,310,"$425,919.00","$389,690.00","$1,257.06","$57,874.75"
MIA - PWM,54937424071,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/54937424071,https://www.airlines-manager.com/aircraft/show/94886629,7:30,14:59,310,"$466,211.00","$428,287.00","$1,381.57","$57,232.12"
MIA - PWM,54952417720,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/54952417720,https://www.airlines-manager.com/aircraft/show/94886626,14:00,21:29,310,"$466,211.00","$428,287.00","$1,381.57","$57,232.12"
MIA - PWM,54961494331,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/54961494331,https://www.airlines-manager.com/aircraft/show/96692674,18:45,2:14,310,"$466,211.00","$428,287.00","$1,381.57","$57,232.12"
MIA - PWM,54965848644,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/54965848644,https://www.airlines-manager.com/aircraft/show/105601657,20:45,4:14,112,"$220,140.00","$195,020.00","$1,741.25","$26,060.58"
MIA - PWM,54971692274,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/54971692274,https://www.airlines-manager.com/aircraft/show/94886625,23:45,7:14,310,"$466,211.00","$428,287.00","$1,381.57","$57,232.12"
MIA - RAP,54930654712,MIA-RAP-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/54930654712,https://www.airlines-manager.com/aircraft/show/116789624,0:00,8:59,320,"$561,298.00","$511,354.00","$1,597.98","$56,922.52"
MIA - RAP,54930654713,MIA-RAP-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/54930654713,https://www.airlines-manager.com/aircraft/show/116789622,2:00,10:59,320,"$561,298.00","$511,354.00","$1,597.98","$56,922.52"
MIA - RAP,54942363094,MIA-RAP-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/54942363094,https://www.airlines-manager.com/aircraft/show/116789625,10:00,18:59,320,"$561,298.00","$511,354.00","$1,597.98","$56,922.52"
MIA - RAP,54956617962,MIA-RAP-GRR 5,ERJ-175,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/54956617962,https://www.airlines-manager.com/aircraft/show/116042630,15:00,23:59,112,"$264,806.00","$234,612.00","$2,094.75","$26,116.36"
MIA - RAP,54961494075,MIA-RAP-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/54961494075,https://www.airlines-manager.com/aircraft/show/116789623,17:15,2:14,320,"$561,298.00","$511,354.00","$1,597.98","$56,922.52"
MIA - RDU,54930655463,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/54930655463,https://www.airlines-manager.com/aircraft/show/99920626,4:30,9:14,320,"$309,466.00","$273,290.00",$854.03,"$57,737.32"
MIA - RDU,54942363007,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/54942363007,https://www.airlines-manager.com/aircraft/show/82323689,8:30,13:14,112,"$147,399.00","$127,266.00","$1,136.30","$26,887.18"
MIA - RDU,54942363008,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/54942363008,https://www.airlines-manager.com/aircraft/show/99920623,10:00,14:44,320,"$309,466.00","$273,290.00",$854.03,"$57,737.32"
MIA - RDU,54956618088,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/54956618088,https://www.airlines-manager.com/aircraft/show/99920624,16:00,20:44,320,"$309,466.00","$273,290.00",$854.03,"$57,737.32"
MIA - RDU,54969516380,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/54969516380,https://www.airlines-manager.com/aircraft/show/99920625,22:00,2:44,320,"$309,466.00","$273,290.00",$854.03,"$57,737.32"
MIA - RIC,54942362994,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/54942362994,https://www.airlines-manager.com/aircraft/show/110883112,8:30,13:44,310,"$335,679.00","$304,397.00",$981.93,"$58,165.03"
MIA - RIC,54947196842,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/54947196842,https://www.airlines-manager.com/aircraft/show/110883111,11:00,16:14,310,"$335,679.00","$304,397.00",$981.93,"$58,165.03"
MIA - RIC,54956618155,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/54956618155,https://www.airlines-manager.com/aircraft/show/104353572,16:45,21:59,112,"$159,561.00","$139,347.00","$1,244.17","$26,626.82"
MIA - RIC,54965848536,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/54965848536,https://www.airlines-manager.com/aircraft/show/110883110,19:45,0:59,310,"$335,679.00","$304,397.00",$981.93,"$58,165.03"
MIA - RIC,54969516344,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/54969516344,https://www.airlines-manager.com/aircraft/show/110883113,21:30,2:44,310,"$335,679.00","$304,397.00",$981.93,"$58,165.03"
MIA - RNO,54930654959,MIA-RNO-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/54930654959,https://www.airlines-manager.com/aircraft/show/105223010,1:00,12:44,198,"$543,785.00","$497,948.00","$2,514.89","$42,438.75"
MIA - RNO,54947196932,MIA-RNO-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/54947196932,https://www.airlines-manager.com/aircraft/show/86238755,11:00,22:29,320,"$721,868.00","$659,017.00","$2,059.43","$57,389.00"
MIA - RNO,54952417492,MIA-RNO-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/54952417492,https://www.airlines-manager.com/aircraft/show/90489722,13:00,0:29,320,"$721,868.00","$659,017.00","$2,059.43","$57,389.00"
MIA - RNO,54956618003,MIA-RNO-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/54956618003,https://www.airlines-manager.com/aircraft/show/86238756,15:00,2:29,320,"$721,868.00","$659,017.00","$2,059.43","$57,389.00"
MIA - RNO,54969516384,MIA-RNO-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/54969516384,https://www.airlines-manager.com/aircraft/show/90489723,22:00,9:29,320,"$721,868.00","$659,017.00","$2,059.43","$57,389.00"
MIA - RSW,54930655372,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/54930655372,https://www.airlines-manager.com/aircraft/show/110114297,4:00,6:29,228,"$65,659.00","$47,406.00",$207.92,"$19,089.66"
MIA - RSW,54942363048,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/54942363048,https://www.airlines-manager.com/aircraft/show/110114295,9:15,11:44,228,"$65,659.00","$47,406.00",$207.92,"$19,089.66"
MIA - RSW,54947196796,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/54947196796,https://www.airlines-manager.com/aircraft/show/110114296,10:15,12:44,228,"$65,659.00","$47,406.00",$207.92,"$19,089.66"
MIA - RSW,54952417736,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/54952417736,https://www.airlines-manager.com/aircraft/show/110114300,14:00,16:29,228,"$65,659.00","$47,406.00",$207.92,"$19,089.66"
MIA - RSW,54965848666,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/54965848666,https://www.airlines-manager.com/aircraft/show/110114299,21:00,23:29,228,"$65,659.00","$47,406.00",$207.92,"$19,089.66"
MIA - RSW,54969516473,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/54969516473,https://www.airlines-manager.com/aircraft/show/110114298,23:00,1:29,228,"$65,659.00","$47,406.00",$207.92,"$19,089.66"
MIA - SAN,54930655152,MIA-BWI-YYZ 2,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/54930655152,https://www.airlines-manager.com/aircraft/show/92153440,1:45,12:44,310,"$686,006.00","$629,207.00","$2,029.70","$57,287.44"
MIA - SAN,54942363115,MIA-BWI-YYZ 3,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/54942363115,https://www.airlines-manager.com/aircraft/show/92153441,10:00,20:59,310,"$686,006.00","$629,207.00","$2,029.70","$57,287.44"
MIA - SAN,54947197004,MIA-BWI-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/54947197004,https://www.airlines-manager.com/aircraft/show/92137503,12:00,22:59,136,"$299,558.00","$265,819.00","$1,954.55","$24,202.03"
MIA - SAN,54961494011,MIA-BWI-YYZ 4,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/54961494011,https://www.airlines-manager.com/aircraft/show/92153442,17:00,3:59,310,"$686,006.00","$629,207.00","$2,029.70","$57,287.44"
MIA - SAN,54961494012,MIA-BWI-YYZ 5,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/54961494012,https://www.airlines-manager.com/aircraft/show/92153439,19:00,5:59,310,"$686,006.00","$629,207.00","$2,029.70","$57,287.44"
MIA - SAN,54969516459,MIA-BWI-YYZ 1,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/54969516459,https://www.airlines-manager.com/aircraft/show/92153443,22:45,9:44,310,"$686,006.00","$629,207.00","$2,029.70","$57,287.44"
MIA - SAT,54930655324,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/54930655324,https://www.airlines-manager.com/aircraft/show/107763562,3:15,9:44,320,"$410,437.00","$369,153.00","$1,153.60","$56,938.77"
MIA - SAT,54947196849,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/54947196849,https://www.airlines-manager.com/aircraft/show/107763565,11:00,17:29,320,"$410,437.00","$369,153.00","$1,153.60","$56,938.77"
MIA - SAT,54956617942,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/54956617942,https://www.airlines-manager.com/aircraft/show/107467213,14:45,21:14,112,"$193,677.00","$169,711.00","$1,515.28","$26,176.50"
MIA - SAT,54965848619,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/54965848619,https://www.airlines-manager.com/aircraft/show/107763561,20:30,2:59,320,"$410,437.00","$369,153.00","$1,153.60","$56,938.77"
MIA - SAT,54965848620,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/54965848620,https://www.airlines-manager.com/aircraft/show/107763566,20:45,3:14,320,"$410,437.00","$369,153.00","$1,153.60","$56,938.77"
MIA - SAV,54930654848,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/54930654848,https://www.airlines-manager.com/aircraft/show/110883111,0:15,3:59,310,"$214,539.00","$189,268.00",$610.54,"$50,696.79"
MIA - SAV,54937423957,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/54937423957,https://www.airlines-manager.com/aircraft/show/104353572,6:00,9:44,112,"$100,203.00","$84,270.00",$752.41,"$22,572.32"
MIA - SAV,54942363029,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/54942363029,https://www.airlines-manager.com/aircraft/show/110883110,9:00,12:44,310,"$214,539.00","$189,268.00",$610.54,"$50,696.79"
MIA - SAV,54947196841,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/54947196841,https://www.airlines-manager.com/aircraft/show/110883113,11:00,14:44,310,"$214,539.00","$189,268.00",$610.54,"$50,696.79"
MIA - SAV,54969516374,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/54969516374,https://www.airlines-manager.com/aircraft/show/110883112,22:00,1:44,268,"$197,448.00","$172,685.00",$644.35,"$46,254.91"
MIA - SDF,54930654927,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/54930654927,https://www.airlines-manager.com/aircraft/show/94886629,0:45,6:29,310,"$356,515.00","$322,149.00","$1,039.19","$56,188.78"
MIA - SDF,54942362967,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/54942362967,https://www.airlines-manager.com/aircraft/show/94886626,8:15,13:59,310,"$356,515.00","$322,149.00","$1,039.19","$56,188.78"
MIA - SDF,54952417490,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/54952417490,https://www.airlines-manager.com/aircraft/show/96692674,13:00,18:44,310,"$356,515.00","$322,149.00","$1,039.19","$56,188.78"
MIA - SDF,54956618035,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/54956618035,https://www.airlines-manager.com/aircraft/show/105601657,15:00,20:44,112,"$169,037.00","$146,824.00","$1,310.93","$25,608.84"
MIA - SDF,54961494254,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/54961494254,https://www.airlines-manager.com/aircraft/show/94886625,18:00,23:44,310,"$356,515.00","$322,149.00","$1,039.19","$56,188.78"
MIA - SEA,54930655055,MIA-LAS-SEA 3,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/54930655055,https://www.airlines-manager.com/aircraft/show/105093927,1:30,13:59,338,"$830,781.00","$762,732.00","$2,256.60","$61,100.03"
MIA - SEA,54942363133,MIA-LAS-SEA 4,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/54942363133,https://www.airlines-manager.com/aircraft/show/105093928,10:00,22:29,338,"$830,781.00","$762,732.00","$2,256.60","$61,100.03"
MIA - SEA,54952417577,MIA-LAS-SEA 5,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/54952417577,https://www.airlines-manager.com/aircraft/show/105093929,13:00,1:29,338,"$830,781.00","$762,732.00","$2,256.60","$61,100.03"
MIA - SEA,54965848626,MIA-LAS-SEA 1,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/54965848626,https://www.airlines-manager.com/aircraft/show/105093925,20:30,8:59,338,"$830,781.00","$762,732.00","$2,256.60","$61,100.03"
MIA - SEA,54969516438,MIA-LAS-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/54969516438,https://www.airlines-manager.com/aircraft/show/113251304,22:30,11:14,198,"$575,630.00","$518,353.00","$2,617.94","$40,708.35"
MIA - SEA,54971692257,MIA-LAS-SEA 2,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/54971692257,https://www.airlines-manager.com/aircraft/show/105093926,23:30,11:59,338,"$830,781.00","$762,732.00","$2,256.60","$61,100.03"
MIA - SJC,54930655154,MIA-SJC-YYC 5,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/54930655154,https://www.airlines-manager.com/aircraft/show/107763563,1:45,13:44,320,"$731,356.00","$665,189.00","$2,078.72","$55,509.51"
MIA - SJC,54947196963,MIA-SJC-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/54947196963,https://www.airlines-manager.com/aircraft/show/107763569,12:00,23:59,320,"$731,356.00","$665,189.00","$2,078.72","$55,509.51"
MIA - SJC,54952417746,MIA-SJC-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/54952417746,https://www.airlines-manager.com/aircraft/show/107763568,14:00,1:59,320,"$731,356.00","$665,189.00","$2,078.72","$55,509.51"
MIA - SJC,54956618072,MIA-SJC-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/54956618072,https://www.airlines-manager.com/aircraft/show/107763567,16:00,3:59,320,"$731,356.00","$665,189.00","$2,078.72","$55,509.51"
MIA - SJC,54971692270,MIA-SJC-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/54971692270,https://www.airlines-manager.com/aircraft/show/107763564,23:45,11:44,320,"$731,356.00","$665,189.00","$2,078.72","$55,509.51"
MIA - SJU,54930655321,MIA-SJU-BOS 6 B,A319-100,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/54930655321,https://www.airlines-manager.com/aircraft/show/110582841,3:15,9:29,198,"$286,648.00","$257,583.00","$1,300.92","$41,323.48"
MIA - SJU,54947196790,MIA-SJU-BOS 2,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/54947196790,https://www.airlines-manager.com/aircraft/show/91352062,10:15,16:29,310,"$379,953.00","$343,678.00","$1,108.64","$55,135.51"
MIA - SJU,54947196791,MIA-SJU-BOS 3,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/54947196791,https://www.airlines-manager.com/aircraft/show/91352061,12:15,18:29,310,"$379,953.00","$343,678.00","$1,108.64","$55,135.51"
MIA - SJU,54961494285,MIA-SJU-BOS 4,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/54961494285,https://www.airlines-manager.com/aircraft/show/91352060,18:15,0:29,310,"$379,953.00","$343,678.00","$1,108.64","$55,135.51"
MIA - SJU,54965848492,MIA-SJU-BOS 5,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/54965848492,https://www.airlines-manager.com/aircraft/show/91352059,19:15,1:29,310,"$379,953.00","$343,678.00","$1,108.64","$55,135.51"
MIA - SJU,54969516454,MIA-SJU-BOS 1,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/54969516454,https://www.airlines-manager.com/aircraft/show/91352063,22:45,4:59,273,"$339,707.00","$304,757.00","$1,116.33","$48,891.50"
MIA - SKB,54930655029,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/54930655029,https://www.airlines-manager.com/aircraft/show/110114298,1:30,8:29,228,"$343,701.00","$314,172.00","$1,377.95","$44,988.83"
MIA - SKB,54930655030,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/54930655030,https://www.airlines-manager.com/aircraft/show/110114295,2:15,9:14,228,"$343,701.00","$314,172.00","$1,377.95","$44,988.83"
MIA - SKB,54930655031,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/54930655031,https://www.airlines-manager.com/aircraft/show/110114296,3:15,10:14,228,"$343,701.00","$314,172.00","$1,377.95","$44,988.83"
MIA - SKB,54937424017,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/54937424017,https://www.airlines-manager.com/aircraft/show/110114300,6:45,13:44,228,"$343,701.00","$314,172.00","$1,377.95","$44,988.83"
MIA - SKB,54952417737,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/54952417737,https://www.airlines-manager.com/aircraft/show/110114299,14:00,20:59,228,"$343,701.00","$314,172.00","$1,377.95","$44,988.83"
MIA - SKB,54965848665,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/54965848665,https://www.airlines-manager.com/aircraft/show/110114297,21:00,3:59,228,"$343,701.00","$314,172.00","$1,377.95","$44,988.83"
MIA - SLC,54930654684,MIA-SJU-BOS 2,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/54930654684,https://www.airlines-manager.com/aircraft/show/91352062,0:00,10:14,310,"$641,266.00","$583,680.00","$1,882.84","$57,037.13"
MIA - SLC,54930654685,MIA-SJU-BOS 4,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/54930654685,https://www.airlines-manager.com/aircraft/show/91352060,1:00,11:14,310,"$641,266.00","$583,680.00","$1,882.84","$57,037.13"
MIA - SLC,54930654686,MIA-SJU-BOS 3,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/54930654686,https://www.airlines-manager.com/aircraft/show/91352061,2:00,12:14,310,"$641,266.00","$583,680.00","$1,882.84","$57,037.13"
MIA - SLC,54942363030,MIA-SJU-BOS 5,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/54942363030,https://www.airlines-manager.com/aircraft/show/91352059,9:00,19:14,310,"$641,266.00","$583,680.00","$1,882.84","$57,037.13"
MIA - SLC,54942363031,MIA-SJU-BOS 6 B,A319-100,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/54942363031,https://www.airlines-manager.com/aircraft/show/110582841,10:00,20:14,198,"$481,931.00","$435,772.00","$2,200.87","$42,583.58"
MIA - SLC,54947197010,MIA-SJU-BOS 1,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/54947197010,https://www.airlines-manager.com/aircraft/show/91352063,12:00,22:14,310,"$641,266.00","$583,680.00","$1,882.84","$57,037.13"
MIA - SMF,54930654984,MIA-OAK-SMF 2,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/54930654984,https://www.airlines-manager.com/aircraft/show/91198619,1:00,12:59,320,"$731,563.00","$667,531.00","$2,086.03","$55,704.95"
MIA - SMF,54930654985,MIA-OAK-SMF 3,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/54930654985,https://www.airlines-manager.com/aircraft/show/91198616,3:00,14:59,320,"$731,563.00","$667,531.00","$2,086.03","$55,704.95"
MIA - SMF,54947196869,MIA-OAK-SMF 4,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/54947196869,https://www.airlines-manager.com/aircraft/show/91198618,11:00,22:59,320,"$731,563.00","$667,531.00","$2,086.03","$55,704.95"
MIA - SMF,54952417579,MIA-OAK-SMF 5,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/54952417579,https://www.airlines-manager.com/aircraft/show/91198617,13:00,0:59,320,"$731,563.00","$667,531.00","$2,086.03","$55,704.95"
MIA - SMF,54969516485,MIA-OAK-SMF 1,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/54969516485,https://www.airlines-manager.com/aircraft/show/91198615,23:00,10:59,320,"$731,563.00","$667,531.00","$2,086.03","$55,704.95"
MIA - STL,54930655052,MIA-ELP-MCI 1,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/54930655052,https://www.airlines-manager.com/aircraft/show/91806234,1:30,7:44,320,"$393,417.00","$349,844.00","$1,093.26","$56,124.71"
MIA - STL,54930655053,MIA-ELP-MCI 5 B,A319-100,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/54930655053,https://www.airlines-manager.com/aircraft/show/105093924,2:00,8:14,198,"$297,762.00","$267,003.00","$1,348.50","$42,834.71"
MIA - STL,54942363001,MIA-ELP-MCI 4,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/54942363001,https://www.airlines-manager.com/aircraft/show/91806231,8:30,14:44,320,"$393,417.00","$349,844.00","$1,093.26","$56,124.71"
MIA - STL,54942363002,MIA-ELP-MCI 3,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/54942363002,https://www.airlines-manager.com/aircraft/show/91806232,10:00,16:14,320,"$393,417.00","$349,844.00","$1,093.26","$56,124.71"
MIA - STL,54961494006,MIA-ELP-MCI 2,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/54961494006,https://www.airlines-manager.com/aircraft/show/91806235,17:00,23:14,320,"$393,417.00","$349,844.00","$1,093.26","$56,124.71"
MIA - SXM,54937424018,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/54937424018,https://www.airlines-manager.com/aircraft/show/110114299,6:45,13:44,228,"$333,459.00","$304,653.00","$1,336.20","$43,625.73"
MIA - SXM,54952417738,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/54952417738,https://www.airlines-manager.com/aircraft/show/110114297,14:00,20:59,228,"$333,459.00","$304,653.00","$1,336.20","$43,625.73"
MIA - SXM,54956618116,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/54956618116,https://www.airlines-manager.com/aircraft/show/110114298,16:00,22:59,228,"$333,459.00","$304,653.00","$1,336.20","$43,625.73"
MIA - SXM,54965848493,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/54965848493,https://www.airlines-manager.com/aircraft/show/110114295,19:15,2:14,228,"$333,459.00","$304,653.00","$1,336.20","$43,625.73"
MIA - SXM,54965848494,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/54965848494,https://www.airlines-manager.com/aircraft/show/110114296,20:15,3:14,228,"$333,459.00","$304,653.00","$1,336.20","$43,625.73"
MIA - SXM,54971692264,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/54971692264,https://www.airlines-manager.com/aircraft/show/110114300,23:45,6:44,228,"$333,459.00","$304,653.00","$1,336.20","$43,625.73"
MIA - SYR,54930655246,MIA-EUG-SYR 1,737-900ER,https://www.airlines-manager.com/network/showline/50424911,https://www.airlines-manager.com/network/showflight/54930655246,https://www.airlines-manager.com/aircraft/show/119652483,2:30,9:14,320,"$431,236.00","$389,819.00","$1,218.18","$57,893.91"
MIA - SYR,54937424061,MIA-EUG-SYR 3,737-900ER,https://www.airlines-manager.com/network/showline/50424911,https://www.airlines-manager.com/network/showflight/54937424061,https://www.airlines-manager.com/aircraft/show/119652481,7:15,13:59,320,"$431,236.00","$389,819.00","$1,218.18","$57,893.91"
MIA - SYR,54947196995,MIA-EUG-SYR 2,737-900ER,https://www.airlines-manager.com/network/showline/50424911,https://www.airlines-manager.com/network/showflight/54947196995,https://www.airlines-manager.com/aircraft/show/119652482,12:00,18:44,320,"$431,236.00","$389,819.00","$1,218.18","$57,893.91"
MIA - SYR,54952417710,MIA-EUG-SYR 4,737-900ER,https://www.airlines-manager.com/network/showline/50424911,https://www.airlines-manager.com/network/showflight/54952417710,https://www.airlines-manager.com/aircraft/show/119652480,14:00,20:44,320,"$431,236.00","$389,819.00","$1,218.18","$57,893.91"
MIA - TPA,54930655509,MIA-BUR-PVD 1,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/54930655509,https://www.airlines-manager.com/aircraft/show/108834803,5:00,7:59,310,"$127,616.00","$101,600.00",$327.74,"$34,055.87"
MIA - TPA,54947196845,MIA-BUR-PVD 3,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/54947196845,https://www.airlines-manager.com/aircraft/show/108834805,11:00,13:59,310,"$127,616.00","$101,600.00",$327.74,"$34,055.87"
MIA - TPA,54961493999,MIA-BUR-PVD 5 B,A319-100,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/54961493999,https://www.airlines-manager.com/aircraft/show/108834807,17:00,19:59,198,"$95,236.00","$74,415.00",$375.83,"$24,943.58"
MIA - TPA,54961494000,MIA-BUR-PVD 2,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/54961494000,https://www.airlines-manager.com/aircraft/show/108834804,17:45,20:44,310,"$127,616.00","$101,600.00",$327.74,"$34,055.87"
MIA - TPA,54971692262,MIA-BUR-PVD 4,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/54971692262,https://www.airlines-manager.com/aircraft/show/108834806,23:45,2:44,310,"$127,616.00","$101,600.00",$327.74,"$34,055.87"
MIA - TUL,54930654934,MIA-FAR-TUL 2,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/54930654934,https://www.airlines-manager.com/aircraft/show/110883160,0:45,7:29,320,"$415,861.00","$374,420.00","$1,170.06","$55,606.93"
MIA - TUL,54930654935,MIA-FAR-TUL 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/54930654935,https://www.airlines-manager.com/aircraft/show/87169421,3:00,9:44,112,"$196,167.00","$172,043.00","$1,536.10","$25,550.94"
MIA - TUL,54947196904,MIA-FAR-TUL 3,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/54947196904,https://www.airlines-manager.com/aircraft/show/110883161,11:00,17:44,320,"$415,861.00","$374,420.00","$1,170.06","$55,606.93"
MIA - TUL,54956618123,MIA-FAR-TUL 4,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/54956618123,https://www.airlines-manager.com/aircraft/show/110883162,16:00,22:44,320,"$415,861.00","$374,420.00","$1,170.06","$55,606.93"
MIA - TUL,54965848535,MIA-FAR-TUL 1,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/54965848535,https://www.airlines-manager.com/aircraft/show/110883159,19:45,2:29,320,"$415,861.00","$374,420.00","$1,170.06","$55,606.93"
MIA - TUS,54930654880,MIA-IAD-TUS 3,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/54930654880,https://www.airlines-manager.com/aircraft/show/97556719,0:30,9:59,310,"$591,231.00","$542,626.00","$1,750.41","$57,218.91"
MIA - TUS,54942363083,MIA-IAD-TUS 2,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/54942363083,https://www.airlines-manager.com/aircraft/show/97556720,10:00,19:29,310,"$591,231.00","$542,626.00","$1,750.41","$57,218.91"
MIA - TUS,54952417612,MIA-IAD-TUS 5,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/54952417612,https://www.airlines-manager.com/aircraft/show/97556716,13:00,22:29,310,"$591,231.00","$542,626.00","$1,750.41","$57,218.91"
MIA - TUS,54956618067,MIA-IAD-TUS 1,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/54956618067,https://www.airlines-manager.com/aircraft/show/97556721,15:45,1:14,310,"$591,231.00","$542,626.00","$1,750.41","$57,218.91"
MIA - TUS,54961494310,MIA-IAD-TUS 4,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/54961494310,https://www.airlines-manager.com/aircraft/show/97556718,18:45,4:14,310,"$591,231.00","$542,626.00","$1,750.41","$57,218.91"
MIA - TYS,54930655346,MIA-CID-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/54930655346,https://www.airlines-manager.com/aircraft/show/116789650,3:30,8:29,310,"$314,403.00","$285,010.00",$919.39,"$57,192.64"
MIA - TYS,54942363108,MIA-CID-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/54942363108,https://www.airlines-manager.com/aircraft/show/116789651,10:00,14:59,310,"$314,403.00","$285,010.00",$919.39,"$57,192.64"
MIA - TYS,54956617948,MIA-CID-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/54956617948,https://www.airlines-manager.com/aircraft/show/116789652,14:45,19:44,310,"$314,403.00","$285,010.00",$919.39,"$57,192.64"
MIA - TYS,54969516386,MIA-CID-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/54969516386,https://www.airlines-manager.com/aircraft/show/116789653,22:00,2:59,310,"$314,403.00","$285,010.00",$919.39,"$57,192.64"
MIA - YUL,54937424004,MIA-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/54937424004,https://www.airlines-manager.com/aircraft/show/113101225,6:30,13:59,400,"$628,165.00","$573,858.00","$1,434.65","$76,684.81"
MIA - YUL,54947196901,MIA-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/54947196901,https://www.airlines-manager.com/aircraft/show/113101226,11:00,18:29,400,"$628,165.00","$573,858.00","$1,434.65","$76,684.81"
MIA - YUL,54956618018,MIA-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/54956618018,https://www.airlines-manager.com/aircraft/show/113101227,15:00,22:29,400,"$628,165.00","$573,858.00","$1,434.65","$76,684.81"
MIA - YUL,54971692266,MIA-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/54971692266,https://www.airlines-manager.com/aircraft/show/113101224,23:45,7:14,400,"$628,165.00","$573,858.00","$1,434.65","$76,684.81"
MIA - YVR,54947196902,MIA-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/54947196902,https://www.airlines-manager.com/aircraft/show/113101224,11:00,23:44,400,"$1,044,001.00","$959,355.00","$2,398.39","$75,342.02"
MIA - YVR,54952417770,MIA-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/54952417770,https://www.airlines-manager.com/aircraft/show/113101225,14:00,2:44,400,"$1,044,001.00","$959,355.00","$2,398.39","$75,342.02"
MIA - YVR,54961494294,MIA-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/54961494294,https://www.airlines-manager.com/aircraft/show/113101226,18:30,7:14,400,"$1,044,001.00","$959,355.00","$2,398.39","$75,342.02"
MIA - YVR,54969516434,MIA-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/54969516434,https://www.airlines-manager.com/aircraft/show/113101227,22:30,11:14,400,"$1,044,001.00","$959,355.00","$2,398.39","$75,342.02"
MIA - YYC,54930654669,MIA-SJC-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/54930654669,https://www.airlines-manager.com/aircraft/show/107763569,0:00,11:44,320,"$729,765.00","$661,169.00","$2,066.15","$56,349.63"
MIA - YYC,54930654670,MIA-SJC-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/54930654670,https://www.airlines-manager.com/aircraft/show/107763568,2:00,13:44,320,"$729,765.00","$661,169.00","$2,066.15","$56,349.63"
MIA - YYC,54930654671,MIA-SJC-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/54930654671,https://www.airlines-manager.com/aircraft/show/107763567,4:00,15:44,320,"$729,765.00","$661,169.00","$2,066.15","$56,349.63"
MIA - YYC,54947196982,MIA-SJC-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/54947196982,https://www.airlines-manager.com/aircraft/show/107763564,12:00,23:44,320,"$729,765.00","$661,169.00","$2,066.15","$56,349.63"
MIA - YYC,54952417745,MIA-SJC-YYC 5,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/54952417745,https://www.airlines-manager.com/aircraft/show/107763563,14:00,1:44,320,"$729,765.00","$661,169.00","$2,066.15","$56,349.63"
MIA - YYZ,54930655283,MIA-BWI-YYZ 3,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/54930655283,https://www.airlines-manager.com/aircraft/show/92153441,2:45,9:44,310,"$441,120.00","$394,380.00","$1,272.19","$56,474.46"
MIA - YYZ,54930655284,MIA-BWI-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/54930655284,https://www.airlines-manager.com/aircraft/show/92137503,4:45,11:44,136,"$191,110.00","$163,252.00","$1,200.38","$23,377.37"
MIA - YYZ,54942363117,MIA-BWI-YYZ 4,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/54942363117,https://www.airlines-manager.com/aircraft/show/92153442,10:00,16:59,310,"$441,120.00","$394,380.00","$1,272.19","$56,474.46"
MIA - YYZ,54947197005,MIA-BWI-YYZ 5,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/54947197005,https://www.airlines-manager.com/aircraft/show/92153439,12:00,18:59,310,"$441,120.00","$394,380.00","$1,272.19","$56,474.46"
MIA - YYZ,54956618070,MIA-BWI-YYZ 1,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/54956618070,https://www.airlines-manager.com/aircraft/show/92153443,15:45,22:44,310,"$441,120.00","$394,380.00","$1,272.19","$56,474.46"
MIA - YYZ,54961494323,MIA-BWI-YYZ 2,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/54961494323,https://www.airlines-manager.com/aircraft/show/92153440,18:45,1:44,310,"$441,120.00","$394,380.00","$1,272.19","$56,474.46"
SFO - ABQ,54942363011,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/54942363011,https://www.airlines-manager.com/aircraft/show/105223003,8:45,14:14,198,"$265,648.00","$237,518.00","$1,199.59","$43,316.35"
SFO - ABQ,54942363012,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/54942363012,https://www.airlines-manager.com/aircraft/show/88239553,8:45,14:14,320,"$349,794.00","$309,743.00",$967.95,"$56,488.09"
SFO - ABQ,54947196807,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/54947196807,https://www.airlines-manager.com/aircraft/show/88239557,10:30,15:59,320,"$349,794.00","$309,743.00",$967.95,"$56,488.09"
SFO - ABQ,54956617994,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/54956617994,https://www.airlines-manager.com/aircraft/show/88239555,15:00,20:29,320,"$349,794.00","$309,743.00",$967.95,"$56,488.09"
SFO - ABQ,54969516467,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/54969516467,https://www.airlines-manager.com/aircraft/show/88239554,22:45,4:14,320,"$349,794.00","$309,743.00",$967.95,"$56,488.09"
SFO - ALB,54930654906,SFO-ALB-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/54930654906,https://www.airlines-manager.com/aircraft/show/112650097,0:30,12:29,310,"$733,764.00","$677,600.00","$2,185.81","$56,545.20"
SFO - ALB,54930654907,SFO-ALB-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/54930654907,https://www.airlines-manager.com/aircraft/show/112650096,5:30,17:29,310,"$733,764.00","$677,600.00","$2,185.81","$56,545.20"
SFO - ALB,54937424064,SFO-ALB-CAK 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/54937424064,https://www.airlines-manager.com/aircraft/show/112650090,7:30,19:29,198,"$548,975.00","$503,934.00","$2,545.12","$42,052.91"
SFO - ALB,54952417773,SFO-ALB-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/54952417773,https://www.airlines-manager.com/aircraft/show/112650099,14:00,1:59,310,"$733,764.00","$677,600.00","$2,185.81","$56,545.20"
SFO - ALB,54961494234,SFO-ALB-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/54961494234,https://www.airlines-manager.com/aircraft/show/112650098,18:00,5:59,310,"$733,764.00","$677,600.00","$2,185.81","$56,545.20"
SFO - ANC,54930655252,SFO-BWI-ANC 4,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/54930655252,https://www.airlines-manager.com/aircraft/show/106255848,2:30,12:14,338,"$662,649.00","$614,605.00","$1,818.36","$63,144.35"
SFO - ANC,54930655253,SFO-BWI-ANC 5,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/54930655253,https://www.airlines-manager.com/aircraft/show/106255849,3:30,13:14,338,"$662,649.00","$614,605.00","$1,818.36","$63,144.35"
SFO - ANC,54961494340,SFO-BWI-ANC 1,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/54961494340,https://www.airlines-manager.com/aircraft/show/106255845,19:00,4:44,338,"$662,649.00","$614,605.00","$1,818.36","$63,144.35"
SFO - ANC,54965848581,SFO-BWI-ANC 2,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/54965848581,https://www.airlines-manager.com/aircraft/show/106255846,20:00,5:44,338,"$662,649.00","$614,605.00","$1,818.36","$63,144.35"
SFO - ANC,54965848582,SFO-BWI-ANC 3,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/54965848582,https://www.airlines-manager.com/aircraft/show/106255847,21:00,6:44,338,"$662,649.00","$614,605.00","$1,818.36","$63,144.35"
SFO - ATL,54937424014,SFO 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/54937424014,https://www.airlines-manager.com/aircraft/show/85806724,6:45,16:29,932,"$1,616,492.00","$1,420,224.00","$1,523.85","$145,913.42"
SFO - ATL,54956618007,SFO-ATL-DFW S,A321-200,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/54956618007,https://www.airlines-manager.com/aircraft/show/106766698,15:00,1:29,232,"$628,938.00","$548,198.00","$2,362.92","$52,292.34"
SFO - ATL,54961494291,SFO 84A-2 E1,777-300,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/54961494291,https://www.airlines-manager.com/aircraft/show/86776211,18:30,4:14,854,"$1,520,078.00","$1,329,437.00","$1,556.72","$136,585.99"
SFO - ATL,54965848550,SFO-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/54965848550,https://www.airlines-manager.com/aircraft/show/107467212,20:00,6:29,56,"$233,404.00","$186,139.00","$3,323.91","$17,755.71"
SFO - AUS,54930654912,SFO-OGG-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/54930654912,https://www.airlines-manager.com/aircraft/show/92773481,0:45,8:44,310,"$500,986.00","$456,733.00","$1,473.33","$57,210.81"
SFO - AUS,54930654913,SFO-OGG-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/54930654913,https://www.airlines-manager.com/aircraft/show/92773480,2:45,10:44,310,"$500,986.00","$456,733.00","$1,473.33","$57,210.81"
SFO - AUS,54952417636,SFO-OGG-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/54952417636,https://www.airlines-manager.com/aircraft/show/92773479,13:30,21:29,310,"$500,986.00","$456,733.00","$1,473.33","$57,210.81"
SFO - AUS,54956618047,SFO-OGG-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/54956618047,https://www.airlines-manager.com/aircraft/show/92773478,15:30,23:29,310,"$500,986.00","$456,733.00","$1,473.33","$57,210.81"
SFO - AUS,54961494288,SFO-OGG-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/54961494288,https://www.airlines-manager.com/aircraft/show/92773477,18:30,2:29,310,"$500,986.00","$456,733.00","$1,473.33","$57,210.81"
SFO - BDL,54930655506,SFO-RSW-BDL 1,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/54930655506,https://www.airlines-manager.com/aircraft/show/84915098,4:45,16:59,320,"$741,734.00","$677,616.00","$2,117.55","$55,390.95"
SFO - BDL,54937424019,SFO-RSW-BDL 2,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/54937424019,https://www.airlines-manager.com/aircraft/show/84915099,6:45,18:59,320,"$741,734.00","$677,616.00","$2,117.55","$55,390.95"
SFO - BDL,54942363025,SFO-RSW-BDL 5,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/54942363025,https://www.airlines-manager.com/aircraft/show/84915102,8:45,20:59,320,"$741,734.00","$677,616.00","$2,117.55","$55,390.95"
SFO - BDL,54961494004,SFO-RSW-BDL 3,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/54961494004,https://www.airlines-manager.com/aircraft/show/84915100,17:00,5:14,320,"$741,734.00","$677,616.00","$2,117.55","$55,390.95"
SFO - BDL,54961494005,SFO-RSW-BDL 4,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/54961494005,https://www.airlines-manager.com/aircraft/show/84915101,19:00,7:14,320,"$741,734.00","$677,616.00","$2,117.55","$55,390.95"
SFO - BFF,54930654981,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/54930654981,https://www.airlines-manager.com/aircraft/show/114912306,1:00,7:14,112,"$183,580.00","$161,191.00","$1,439.21","$25,859.52"
SFO - BFF,54930654982,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/54930654982,https://www.airlines-manager.com/aircraft/show/114912268,2:15,8:29,310,"$389,607.00","$355,311.00","$1,146.16","$57,001.76"
SFO - BFF,54942362962,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/54942362962,https://www.airlines-manager.com/aircraft/show/114912263,8:15,14:29,310,"$389,607.00","$355,311.00","$1,146.16","$57,001.76"
SFO - BFF,54956618091,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/54956618091,https://www.airlines-manager.com/aircraft/show/114912264,16:00,22:14,310,"$389,607.00","$355,311.00","$1,146.16","$57,001.76"
SFO - BFF,54971692252,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/54971692252,https://www.airlines-manager.com/aircraft/show/114912267,23:30,5:44,310,"$389,607.00","$355,311.00","$1,146.16","$57,001.76"
SFO - BHM,54930655523,SFO-BHM-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/54930655523,https://www.airlines-manager.com/aircraft/show/117782568,5:30,15:29,320,"$621,859.00","$567,764.00","$1,774.26","$56,871.19"
SFO - BHM,54937424036,SFO-BHM-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/54937424036,https://www.airlines-manager.com/aircraft/show/117782569,7:00,16:59,320,"$621,859.00","$567,764.00","$1,774.26","$56,871.19"
SFO - BHM,54956617956,SFO-BHM-GRR 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/54956617956,https://www.airlines-manager.com/aircraft/show/117782583,15:00,0:59,198,"$468,047.00","$428,770.00","$2,165.51","$42,948.58"
SFO - BHM,54965848525,SFO-BHM-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/54965848525,https://www.airlines-manager.com/aircraft/show/117782567,19:45,5:44,320,"$621,859.00","$567,764.00","$1,774.26","$56,871.19"
SFO - BHM,54969516370,SFO-BHM-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/54969516370,https://www.airlines-manager.com/aircraft/show/117782566,22:00,7:59,320,"$621,859.00","$567,764.00","$1,774.26","$56,871.19"
SFO - BIL,54930655237,SFO-FAR-BIL 4,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/54930655237,https://www.airlines-manager.com/aircraft/show/117782587,2:15,7:59,310,"$355,725.00","$323,542.00","$1,043.68","$56,431.74"
SFO - BIL,54942363057,SFO-FAR-BIL 3,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/54942363057,https://www.airlines-manager.com/aircraft/show/117782586,9:15,14:59,310,"$355,725.00","$323,542.00","$1,043.68","$56,431.74"
SFO - BIL,54956617977,SFO-FAR-BIL 2,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/54956617977,https://www.airlines-manager.com/aircraft/show/117782585,15:00,20:44,310,"$355,725.00","$323,542.00","$1,043.68","$56,431.74"
SFO - BIL,54969516453,SFO-FAR-BIL 1,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/54969516453,https://www.airlines-manager.com/aircraft/show/117782584,22:45,4:29,307,"$353,713.00","$321,604.00","$1,047.57","$56,093.72"
SFO - BNA,54930655011,SFO-BNA-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/54930655011,https://www.airlines-manager.com/aircraft/show/103365580,1:15,10:59,320,"$605,610.00","$549,333.00","$1,716.67","$56,438.32"
SFO - BNA,54937423966,SFO-BNA-CMH 6,ERJ-175,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/54937423966,https://www.airlines-manager.com/aircraft/show/82323681,6:00,15:44,112,"$285,056.00","$251,196.00","$2,242.82","$25,807.81"
SFO - BNA,54952417590,SFO-BNA-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/54952417590,https://www.airlines-manager.com/aircraft/show/103365583,13:00,22:44,320,"$605,610.00","$549,333.00","$1,716.67","$56,438.32"
SFO - BNA,54956618026,SFO-BNA-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/54956618026,https://www.airlines-manager.com/aircraft/show/103365582,15:00,0:44,320,"$605,610.00","$549,333.00","$1,716.67","$56,438.32"
SFO - BNA,54956618027,SFO-BNA-CMH 5,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/54956618027,https://www.airlines-manager.com/aircraft/show/103365579,15:45,1:29,320,"$605,610.00","$549,333.00","$1,716.67","$56,438.32"
SFO - BNA,54971692227,SFO-BNA-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/54971692227,https://www.airlines-manager.com/aircraft/show/103365581,23:15,8:59,320,"$605,610.00","$549,333.00","$1,716.67","$56,438.32"
SFO - BOI,54930655027,SFO-CLE-MKE 2,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/54930655027,https://www.airlines-manager.com/aircraft/show/92519369,1:15,5:29,320,"$247,187.00","$216,452.00",$676.41,"$51,130.39"
SFO - BOI,54942363068,SFO-CLE-MKE 1,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/54942363068,https://www.airlines-manager.com/aircraft/show/92519368,9:45,13:59,320,"$247,187.00","$216,452.00",$676.41,"$51,130.39"
SFO - BOI,54956617943,SFO-CLE-MKE 4,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/54956617943,https://www.airlines-manager.com/aircraft/show/92519371,14:45,18:59,320,"$247,187.00","$216,452.00",$676.41,"$51,130.39"
SFO - BOI,54956617944,SFO-CLE-MKE 3,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/54956617944,https://www.airlines-manager.com/aircraft/show/92519367,16:00,20:14,320,"$247,187.00","$216,452.00",$676.41,"$51,130.39"
SFO - BOS,54930654858,SFO-BOS-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/54930654858,https://www.airlines-manager.com/aircraft/show/104864961,0:15,12:44,338,"$837,458.00","$774,101.00","$2,290.24","$62,010.76"
SFO - BOS,54947196946,SFO CARGO,B737-700C,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/54947196946,https://www.airlines-manager.com/aircraft/show/120141531,11:30,23:59,0,"$222,034.00","$134,572.00",#DIV/0!,"$10,780.13"
SFO - BOS,54952417581,SFO-BOS-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/54952417581,https://www.airlines-manager.com/aircraft/show/104901564,13:00,1:29,338,"$837,458.00","$774,101.00","$2,290.24","$62,010.76"
SFO - BOS,54952417582,SFO-BOS-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/54952417582,https://www.airlines-manager.com/aircraft/show/104870960,14:00,2:29,338,"$837,458.00","$774,101.00","$2,290.24","$62,010.76"
SFO - BOS,54956618062,SFO-BOS-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/54956618062,https://www.airlines-manager.com/aircraft/show/104874465,15:45,4:14,338,"$837,458.00","$774,101.00","$2,290.24","$62,010.76"
SFO - BOS,54965848601,SFO-BOS-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/54965848601,https://www.airlines-manager.com/aircraft/show/104901544,20:15,8:44,338,"$837,458.00","$774,101.00","$2,290.24","$62,010.76"
SFO - BTV,54930654718,SFO-BTV-LEX 4,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/54930654718,https://www.airlines-manager.com/aircraft/show/112650092,0:00,11:59,310,"$729,848.00","$673,863.00","$2,173.75","$56,233.35"
SFO - BTV,54937423952,SFO-BTV-LEX 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/54937423952,https://www.airlines-manager.com/aircraft/show/112650089,6:00,17:59,198,"$546,636.00","$501,737.00","$2,534.03","$41,869.57"
SFO - BTV,54952417777,SFO-BTV-LEX 1,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/54952417777,https://www.airlines-manager.com/aircraft/show/112650095,14:00,1:59,310,"$729,848.00","$673,863.00","$2,173.75","$56,233.35"
SFO - BTV,54961494229,SFO-BTV-LEX 2,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/54961494229,https://www.airlines-manager.com/aircraft/show/112650094,18:00,5:59,310,"$729,848.00","$673,863.00","$2,173.75","$56,233.35"
SFO - BTV,54965848547,SFO-BTV-LEX 3,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/54965848547,https://www.airlines-manager.com/aircraft/show/112650093,20:00,7:59,310,"$729,848.00","$673,863.00","$2,173.75","$56,233.35"
SFO - BUF,54930655042,SFO-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/54930655042,https://www.airlines-manager.com/aircraft/show/112650108,1:30,12:29,310,"$687,067.00","$633,609.00","$2,043.90","$57,688.22"
SFO - BUF,54930655043,SFO-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/54930655043,https://www.airlines-manager.com/aircraft/show/112650107,5:30,16:29,310,"$687,067.00","$633,609.00","$2,043.90","$57,688.22"
SFO - BUF,54937424069,SFO-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/54937424069,https://www.airlines-manager.com/aircraft/show/112650106,7:30,18:29,310,"$687,067.00","$633,609.00","$2,043.90","$57,688.22"
SFO - BUF,54952417467,SFO-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/54952417467,https://www.airlines-manager.com/aircraft/show/112650105,13:00,23:59,310,"$687,067.00","$633,609.00","$2,043.90","$57,688.22"
SFO - BUF,54961494232,SFO-PVD-BUF 5,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/54961494232,https://www.airlines-manager.com/aircraft/show/112650104,18:00,4:59,310,"$687,067.00","$633,609.00","$2,043.90","$57,688.22"
SFO - BUR,54930655231,SFO-SAV-JAN 1,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/54930655231,https://www.airlines-manager.com/aircraft/show/114912265,2:15,5:44,310,"$173,461.00","$150,951.00",$486.94,"$43,335.22"
SFO - BUR,54930655232,SFO-SAV-JAN 4,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/54930655232,https://www.airlines-manager.com/aircraft/show/114912270,4:15,7:44,310,"$173,461.00","$150,951.00",$486.94,"$43,335.22"
SFO - BUR,54947196942,SFO-SAV-JAN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/54947196942,https://www.airlines-manager.com/aircraft/show/114917486,11:30,14:59,198,"$130,719.00","$112,697.00",$569.18,"$32,353.21"
SFO - BUR,54956618050,SFO-SAV-JAN 3,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/54956618050,https://www.airlines-manager.com/aircraft/show/114912269,15:30,18:59,310,"$173,461.00","$150,951.00",$486.94,"$43,335.22"
SFO - BUR,54961494033,SFO-SAV-JAN 2,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/54961494033,https://www.airlines-manager.com/aircraft/show/114912266,17:00,20:29,310,"$173,461.00","$150,951.00",$486.94,"$43,335.22"
SFO - BWI,54930655486,SFO-BWI-ANC 1,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/54930655486,https://www.airlines-manager.com/aircraft/show/106255845,4:45,16:14,338,"$788,997.00","$730,614.00","$2,161.58","$63,623.86"
SFO - BWI,54930655490,SFO-BWI-ANC 2,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/54930655490,https://www.airlines-manager.com/aircraft/show/106255846,5:45,17:14,338,"$788,997.00","$730,614.00","$2,161.58","$63,623.86"
SFO - BWI,54937424007,SFO-BWI-ANC 3,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/54937424007,https://www.airlines-manager.com/aircraft/show/106255847,6:45,18:14,338,"$788,997.00","$730,614.00","$2,161.58","$63,623.86"
SFO - BWI,54956617973,SFO-BWI-ANC 4,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/54956617973,https://www.airlines-manager.com/aircraft/show/106255848,15:00,2:29,338,"$788,997.00","$730,614.00","$2,161.58","$63,623.86"
SFO - BWI,54956617974,SFO-BWI-ANC 5,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/54956617974,https://www.airlines-manager.com/aircraft/show/106255849,16:00,3:29,338,"$788,997.00","$730,614.00","$2,161.58","$63,623.86"
SFO - BZN,54942363070,SFO-ROC-COS 1,A321neo,https://www.airlines-manager.com/network/showline/50555367,https://www.airlines-manager.com/network/showflight/54942363070,https://www.airlines-manager.com/aircraft/show/120112476,9:45,14:59,338,"$356,571.00","$327,617.00",$969.28,"$62,601.97"
SFO - BZN,54956617958,SFO-ROC-COS 3,A321neo,https://www.airlines-manager.com/network/showline/50555367,https://www.airlines-manager.com/network/showflight/54956617958,https://www.airlines-manager.com/aircraft/show/120112474,15:00,20:14,338,"$356,571.00","$327,617.00",$969.28,"$62,601.97"
SFO - BZN,54961494324,SFO-ROC-COS 2,A321neo,https://www.airlines-manager.com/network/showline/50555367,https://www.airlines-manager.com/network/showflight/54961494324,https://www.airlines-manager.com/aircraft/show/120112475,18:45,23:59,338,"$356,571.00","$327,617.00",$969.28,"$62,601.97"
SFO - BZN,54971692275,SFO-ROC-COS 4,A321neo,https://www.airlines-manager.com/network/showline/50555367,https://www.airlines-manager.com/network/showflight/54971692275,https://www.airlines-manager.com/aircraft/show/120051490,23:45,4:59,271,"$314,749.00","$287,028.00","$1,059.14","$54,846.11"
SFO - CAK,54930655188,SFO-ALB-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/54930655188,https://www.airlines-manager.com/aircraft/show/112650099,2:00,12:29,310,"$657,886.00","$607,712.00","$1,960.36","$57,969.35"
SFO - CAK,54937423972,SFO-ALB-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/54937423972,https://www.airlines-manager.com/aircraft/show/112650098,6:00,16:29,310,"$657,886.00","$607,712.00","$1,960.36","$57,969.35"
SFO - CAK,54952417772,SFO-ALB-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/54952417772,https://www.airlines-manager.com/aircraft/show/112650097,14:00,0:29,310,"$657,886.00","$607,712.00","$1,960.36","$57,969.35"
SFO - CAK,54961494344,SFO-ALB-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/54961494344,https://www.airlines-manager.com/aircraft/show/112650096,19:00,5:29,310,"$657,886.00","$607,712.00","$1,960.36","$57,969.35"
SFO - CAK,54965848667,SFO-ALB-CAK 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/54965848667,https://www.airlines-manager.com/aircraft/show/112650090,21:00,7:29,198,"$494,289.00","$454,056.00","$2,293.21","$43,312.18"
SFO - CHS,54930655038,SFO-MHT-CHS 1,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/54930655038,https://www.airlines-manager.com/aircraft/show/114917465,1:30,12:44,320,"$701,616.00","$642,467.00","$2,007.71","$57,192.91"
SFO - CHS,54930655039,SFO-MHT-CHS 2,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/54930655039,https://www.airlines-manager.com/aircraft/show/114917464,5:30,16:44,320,"$701,616.00","$642,467.00","$2,007.71","$57,192.91"
SFO - CHS,54942362977,SFO-MHT-CHS 5 B,A319-100,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/54942362977,https://www.airlines-manager.com/aircraft/show/114912262,8:30,19:59,198,"$529,189.00","$485,932.00","$2,454.20","$42,316.28"
SFO - CHS,54952417458,SFO-MHT-CHS 3,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/54952417458,https://www.airlines-manager.com/aircraft/show/114917463,13:00,0:14,320,"$701,616.00","$642,467.00","$2,007.71","$57,192.91"
SFO - CHS,54961494036,SFO-MHT-CHS 4,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/54961494036,https://www.airlines-manager.com/aircraft/show/114266973,17:00,4:14,320,"$701,616.00","$642,467.00","$2,007.71","$57,192.91"
SFO - CID,54930655034,SFO-YEG-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/54930655034,https://www.airlines-manager.com/aircraft/show/117782561,1:30,9:59,320,"$528,124.00","$481,175.00","$1,503.67","$56,720.04"
SFO - CID,54937423998,SFO-YEG-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/54937423998,https://www.airlines-manager.com/aircraft/show/116932364,6:30,14:59,320,"$528,124.00","$481,175.00","$1,503.67","$56,720.04"
SFO - CID,54952417448,SFO-YEG-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/54952417448,https://www.airlines-manager.com/aircraft/show/117782559,13:00,21:29,320,"$528,124.00","$481,175.00","$1,503.67","$56,720.04"
SFO - CID,54961494353,SFO-YEG-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/54961494353,https://www.airlines-manager.com/aircraft/show/117782560,19:00,3:29,320,"$528,124.00","$481,175.00","$1,503.67","$56,720.04"
SFO - CID,54965848680,SFO-YEG-YYC 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/54965848680,https://www.airlines-manager.com/aircraft/show/117782581,21:00,5:29,198,"$399,077.00","$365,143.00","$1,844.16","$43,042.40"
SFO - CLE,54930655522,SFO-CLE-MKE 2,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/54930655522,https://www.airlines-manager.com/aircraft/show/92519369,5:30,15:59,320,"$650,843.00","$593,124.00","$1,853.51","$56,577.81"
SFO - CLE,54937424000,SFO-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/54937424000,https://www.airlines-manager.com/aircraft/show/107467212,6:30,16:59,112,"$305,917.00","$270,776.00","$2,417.64","$25,829.19"
SFO - CLE,54937424001,SFO-CLE-MKE 5,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/54937424001,https://www.airlines-manager.com/aircraft/show/92519370,7:30,17:59,320,"$650,843.00","$593,124.00","$1,853.51","$56,577.81"
SFO - CLE,54952417695,SFO-CLE-MKE 1,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/54952417695,https://www.airlines-manager.com/aircraft/show/92519368,14:00,0:29,320,"$650,843.00","$593,124.00","$1,853.51","$56,577.81"
SFO - CLE,54961494337,SFO-CLE-MKE 4,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/54961494337,https://www.airlines-manager.com/aircraft/show/92519371,19:00,5:29,320,"$650,843.00","$593,124.00","$1,853.51","$56,577.81"
SFO - CLE,54965848590,SFO-CLE-MKE 3,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/54965848590,https://www.airlines-manager.com/aircraft/show/92519367,20:15,6:44,320,"$650,843.00","$593,124.00","$1,853.51","$56,577.81"
SFO - CLT,54930654693,SFO-IAD-CLT 3,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/54930654693,https://www.airlines-manager.com/aircraft/show/96135563,0:00,10:44,400,"$889,119.00","$809,154.00","$2,022.89","$75,387.02"
SFO - CLT,54937423982,SFO-IAD-CLT 4,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/54937423982,https://www.airlines-manager.com/aircraft/show/96135562,6:00,16:44,400,"$889,119.00","$809,154.00","$2,022.89","$75,387.02"
SFO - CLT,54952417631,SFO-IAD-CLT 1,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/54952417631,https://www.airlines-manager.com/aircraft/show/96135565,13:15,23:59,400,"$889,119.00","$809,154.00","$2,022.89","$75,387.02"
SFO - CLT,54956618036,SFO-IAD-CLT 5,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/54956618036,https://www.airlines-manager.com/aircraft/show/96135561,15:15,1:59,400,"$889,119.00","$809,154.00","$2,022.89","$75,387.02"
SFO - CLT,54961494073,SFO-IAD-CLT 2,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/54961494073,https://www.airlines-manager.com/aircraft/show/96135564,17:15,3:59,400,"$889,119.00","$809,154.00","$2,022.89","$75,387.02"
SFO - CMH,54930654910,SFO-BNA-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/54930654910,https://www.airlines-manager.com/aircraft/show/103365582,0:45,10:59,320,"$635,712.00","$578,415.00","$1,807.55","$56,522.64"
SFO - CMH,54930654911,SFO-BNA-CMH 5,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/54930654911,https://www.airlines-manager.com/aircraft/show/103365579,5:30,15:44,320,"$635,712.00","$578,415.00","$1,807.55","$56,522.64"
SFO - CMH,54952417589,SFO-BNA-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/54952417589,https://www.airlines-manager.com/aircraft/show/103365581,13:00,23:14,320,"$635,712.00","$578,415.00","$1,807.55","$56,522.64"
SFO - CMH,54956618022,SFO-BNA-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/54956618022,https://www.airlines-manager.com/aircraft/show/103365580,15:00,1:14,320,"$635,712.00","$578,415.00","$1,807.55","$56,522.64"
SFO - CMH,54956618023,SFO-BNA-CMH 6,ERJ-175,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/54956618023,https://www.airlines-manager.com/aircraft/show/82323681,15:45,1:59,112,"$299,378.00","$264,568.00","$2,362.21","$25,853.55"
SFO - CMH,54969516446,SFO-BNA-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/54969516446,https://www.airlines-manager.com/aircraft/show/103365583,22:45,8:59,320,"$635,712.00","$578,415.00","$1,807.55","$56,522.64"
SFO - COS,54930655236,SFO-ROC-COS 1,A321neo,https://www.airlines-manager.com/network/showline/50555364,https://www.airlines-manager.com/network/showflight/54930655236,https://www.airlines-manager.com/aircraft/show/120112476,2:15,7:59,338,"$395,830.00","$362,335.00","$1,072.00","$63,197.97"
SFO - COS,54942363047,SFO-ROC-COS 3,A321neo,https://www.airlines-manager.com/network/showline/50555364,https://www.airlines-manager.com/network/showflight/54942363047,https://www.airlines-manager.com/aircraft/show/120112474,9:15,14:59,338,"$395,830.00","$362,335.00","$1,072.00","$63,197.97"
SFO - COS,54952417436,SFO-ROC-COS 2,A321neo,https://www.airlines-manager.com/network/showline/50555364,https://www.airlines-manager.com/network/showflight/54952417436,https://www.airlines-manager.com/aircraft/show/120112475,13:00,18:44,338,"$395,830.00","$362,335.00","$1,072.00","$63,197.97"
SFO - COS,54961494251,SFO-ROC-COS 4,A321neo,https://www.airlines-manager.com/network/showline/50555364,https://www.airlines-manager.com/network/showflight/54961494251,https://www.airlines-manager.com/aircraft/show/120051490,18:00,23:44,334,"$393,054.00","$359,647.00","$1,076.79","$62,729.13"
SFO - CUN,54930654853,SFO-YOW-CUN 1,757-300,https://www.airlines-manager.com/network/showline/50555302,https://www.airlines-manager.com/network/showflight/54930654853,https://www.airlines-manager.com/aircraft/show/120056768,0:15,11:29,400,"$943,953.00","$869,996.00","$2,174.99","$77,447.72"
SFO - CUN,54930654854,SFO-YOW-CUN 2,757-300,https://www.airlines-manager.com/network/showline/50555302,https://www.airlines-manager.com/network/showflight/54930654854,https://www.airlines-manager.com/aircraft/show/120056767,1:15,12:29,400,"$943,953.00","$869,996.00","$2,174.99","$77,447.72"
SFO - CUN,54952417446,SFO-YOW-CUN 3,757-300,https://www.airlines-manager.com/network/showline/50555302,https://www.airlines-manager.com/network/showflight/54952417446,https://www.airlines-manager.com/aircraft/show/120056766,13:00,0:14,400,"$943,953.00","$869,996.00","$2,174.99","$77,447.72"
SFO - CUN,54952417447,SFO-YOW-CUN 4,757-300,https://www.airlines-manager.com/network/showline/50555302,https://www.airlines-manager.com/network/showflight/54952417447,https://www.airlines-manager.com/aircraft/show/120056765,14:00,1:14,400,"$943,953.00","$869,996.00","$2,174.99","$77,447.72"
SFO - CVG,54930655508,SFO-IND-CVG 3,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/54930655508,https://www.airlines-manager.com/aircraft/show/99316504,5:00,14:59,310,"$627,255.00","$574,228.00","$1,852.35","$57,518.66"
SFO - CVG,54937424027,SFO-IND-CVG 5,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/54937424027,https://www.airlines-manager.com/aircraft/show/99316502,7:00,16:59,310,"$627,255.00","$574,228.00","$1,852.35","$57,518.66"
SFO - CVG,54952417601,SFO-IND-CVG 2,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/54952417601,https://www.airlines-manager.com/aircraft/show/99316505,13:00,22:59,310,"$627,255.00","$574,228.00","$1,852.35","$57,518.66"
SFO - CVG,54956617970,SFO-IND-CVG 4,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/54956617970,https://www.airlines-manager.com/aircraft/show/99316503,15:00,0:59,310,"$627,255.00","$574,228.00","$1,852.35","$57,518.66"
SFO - CVG,54961494042,SFO-IND-CVG 6,ERJ-175,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/54961494042,https://www.airlines-manager.com/aircraft/show/99174346,17:00,2:59,112,"$294,167.00","$258,804.00","$2,310.75","$25,923.61"
SFO - CVG,54969516442,SFO-IND-CVG 1,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/54969516442,https://www.airlines-manager.com/aircraft/show/99316506,22:45,8:44,310,"$627,255.00","$574,228.00","$1,852.35","$57,518.66"
SFO - DEL,54930654738,SFO 168B-1 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/54930654738,https://www.airlines-manager.com/aircraft/show/86832727,0:00,5:29,1046,"$5,781,072.00","$5,362,503.00","$5,126.68","$977,964.07"
SFO - DEL,54930654739,SFO 168A-1 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/54930654739,https://www.airlines-manager.com/aircraft/show/86969602,2:00,7:29,1046,"$5,781,072.00","$5,362,503.00","$5,126.68","$977,964.07"
SFO - DEN,54930654847,SFO-IAH-MEX 5,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/54930654847,https://www.airlines-manager.com/aircraft/show/101045335,0:15,5:59,400,"$473,056.00","$405,092.00","$1,012.73","$70,655.58"
SFO - DEN,54937423996,SFO-IAH-MEX 1,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/54937423996,https://www.airlines-manager.com/aircraft/show/101045339,6:30,12:14,400,"$473,056.00","$405,092.00","$1,012.73","$70,655.58"
SFO - DEN,54942363006,SFO-IAH-MEX 4,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/54942363006,https://www.airlines-manager.com/aircraft/show/101045336,8:30,14:14,400,"$473,056.00","$405,092.00","$1,012.73","$70,655.58"
SFO - DEN,54952417596,SFO-IAH-MEX 3,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/54952417596,https://www.airlines-manager.com/aircraft/show/101045337,13:00,18:44,400,"$473,056.00","$405,092.00","$1,012.73","$70,655.58"
SFO - DEN,54969516397,SFO-IAH-MEX 2,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/54969516397,https://www.airlines-manager.com/aircraft/show/101045338,22:15,3:59,377,"$457,050.00","$389,662.00","$1,033.59","$67,964.30"
SFO - DFW,54930655049,SFO-ATL-DFW S,A321-200,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/54930655049,https://www.airlines-manager.com/aircraft/show/106766698,1:30,9:14,232,"$481,033.00","$419,800.00","$1,809.48","$54,284.48"
SFO - DFW,54956618144,SFO 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/54956618144,https://www.airlines-manager.com/aircraft/show/85806724,16:30,23:59,932,"$1,227,311.00","$1,082,216.00","$1,161.18","$144,616.84"
SFO - DFW,54971692230,SFO 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/54971692230,https://www.airlines-manager.com/aircraft/show/85537213,23:15,6:44,738,"$1,046,514.00","$911,001.00","$1,234.42","$121,737.33"
SFO - DSM,54930655468,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/54930655468,https://www.airlines-manager.com/aircraft/show/108410858,4:30,12:29,320,"$506,531.00","$460,693.00","$1,439.67","$57,706.85"
SFO - DSM,54952417479,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/54952417479,https://www.airlines-manager.com/aircraft/show/108410857,13:00,20:59,320,"$506,531.00","$460,693.00","$1,439.67","$57,706.85"
SFO - DSM,54956617966,SFO-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/54956617966,https://www.airlines-manager.com/aircraft/show/108466264,15:00,23:14,112,"$239,963.00","$212,542.00","$1,897.70","$25,814.82"
SFO - DSM,54969516444,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/54969516444,https://www.airlines-manager.com/aircraft/show/108410856,22:45,6:44,320,"$506,531.00","$460,693.00","$1,439.67","$57,706.85"
SFO - DSM,54971692248,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/54971692248,https://www.airlines-manager.com/aircraft/show/108410859,23:30,7:29,320,"$506,531.00","$460,693.00","$1,439.67","$57,706.85"
SFO - DTW,54930655466,SFO-ORD-DTW 4,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/54930655466,https://www.airlines-manager.com/aircraft/show/101045331,4:30,14:29,400,"$819,690.00","$744,567.00","$1,861.42","$74,581.00"
SFO - DTW,54930655467,SFO-ORD-DTW 3,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/54930655467,https://www.airlines-manager.com/aircraft/show/101045332,5:00,14:59,400,"$819,690.00","$744,567.00","$1,861.42","$74,581.00"
SFO - DTW,54956618019,SFO-ORD-DTW 2,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/54956618019,https://www.airlines-manager.com/aircraft/show/101045333,15:00,0:59,400,"819,690$","744,567$","$1,861.42","$74,581.00"
SFO - DTW,54961494010,SFO-ORD-DTW 5,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/54961494010,https://www.airlines-manager.com/aircraft/show/101045330,17:00,2:59,400,"819,690$","744,567$","$1,861.42","$74,581.00"
SFO - DTW,54969516377,SFO-ORD-DTW 1,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/54969516377,https://www.airlines-manager.com/aircraft/show/101045334,22:00,7:59,400,"819,690$","744,567$","$1,861.42","$74,581.00"
SFO - DXB,54930655531,SFO 168B-2 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/54930655531,https://www.airlines-manager.com/aircraft/show/87566901,5:30,12:29,1046,"5,983,901$","5,518,713$","$5,276.02","$790,269.16"
SFO - DXB,54937424068,SFO 168A-2 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/54937424068,https://www.airlines-manager.com/aircraft/show/86596991,7:30,14:29,1046,"5,983,901$","5,518,713$","$5,276.02","$790,269.16"
SFO - ELP,54930655533,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/54930655533,https://www.airlines-manager.com/aircraft/show/114912267,5:45,11:44,310,"374,706$","339,934$","$1,096.56","$56,813.48"
SFO - ELP,54937424047,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/54937424047,https://www.airlines-manager.com/aircraft/show/114912306,7:15,13:14,112,"177,463$","154,869$","$1,382.76","$25,883.40"
SFO - ELP,54942362988,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/54942362988,https://www.airlines-manager.com/aircraft/show/114912268,8:30,14:29,310,"374,706$","339,934$","$1,096.56","$56,813.48"
SFO - ELP,54956617968,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/54956617968,https://www.airlines-manager.com/aircraft/show/114912263,15:00,20:59,310,"374,706$","339,934$","$1,096.56","$56,813.48"
SFO - ELP,54969516400,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/54969516400,https://www.airlines-manager.com/aircraft/show/114912264,22:15,4:14,310,"374,706$","339,934$","$1,096.56","$56,813.48"
SFO - EUG,54930655148,SFO-BHM-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/54930655148,https://www.airlines-manager.com/aircraft/show/117782568,1:45,5:29,320,"216,870$","188,838$",$590.12,"$50,581.61"
SFO - EUG,54930655150,SFO-BHM-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/54930655150,https://www.airlines-manager.com/aircraft/show/117782569,3:15,6:59,320,"216,870$","188,838$",$590.12,"$50,581.61"
SFO - EUG,54956618107,SFO-BHM-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/54956618107,https://www.airlines-manager.com/aircraft/show/117782567,16:00,19:44,320,"216,870$","188,838$",$590.12,"$50,581.61"
SFO - EUG,54961494210,SFO-BHM-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/54961494210,https://www.airlines-manager.com/aircraft/show/117782566,17:45,21:29,265,"194,239$","166,874$",$629.71,"$44,698.39"
SFO - FAR,54930654954,SFO-FAR-BIL 3,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/54930654954,https://www.airlines-manager.com/aircraft/show/117782586,1:00,8:44,310,"$489,736.00","$450,231.00","$1,452.36","$58,219.53"
SFO - FAR,54937424059,SFO-FAR-BIL 2,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/54937424059,https://www.airlines-manager.com/aircraft/show/117782585,7:15,14:59,310,"$489,736.00","$450,231.00","$1,452.36","$58,219.53"
SFO - FAR,54956617978,SFO-FAR-BIL 1,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/54956617978,https://www.airlines-manager.com/aircraft/show/117782584,15:00,22:44,310,"$489,736.00","$450,231.00","$1,452.36","$58,219.53"
SFO - FAR,54961494301,SFO-FAR-BIL 4,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/54961494301,https://www.airlines-manager.com/aircraft/show/117782587,18:30,2:14,310,"$489,736.00","$450,231.00","$1,452.36","$58,219.53"
SFO - FAT,54930655163,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/54930655163,https://www.airlines-manager.com/aircraft/show/108410857,2:00,4:44,320,"$95,282.00","$71,086.00",$222.14,"$26,007.07"
SFO - FAT,54947196953,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/54947196953,https://www.airlines-manager.com/aircraft/show/108410856,11:45,14:29,320,"$95,282.00","$71,086.00",$222.14,"$26,007.07"
SFO - FAT,54952417477,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/54952417477,https://www.airlines-manager.com/aircraft/show/108410859,13:00,15:44,320,"$95,282.00","$71,086.00",$222.14,"$26,007.07"
SFO - FAT,54961494261,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/54961494261,https://www.airlines-manager.com/aircraft/show/108410858,18:00,20:44,320,"$95,282.00","$71,086.00",$222.14,"$26,007.07"
SFO - FAT,54971692226,SFO-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/54971692226,https://www.airlines-manager.com/aircraft/show/108466264,23:15,1:59,67,"$33,441.00","$21,190.00",$316.27,"$7,752.44"
SFO - FCA,54930655492,SFO-MAF-FCA 3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/54930655492,https://www.airlines-manager.com/aircraft/show/120056759,4:45,9:59,272,"$303,943.00","$280,508.00","$1,031.28","$53,600.25"
SFO - FCA,54952417434,SFO-MAF-FCA 2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/54952417434,https://www.airlines-manager.com/aircraft/show/120056760,13:00,18:14,272,"$303,943.00","$280,508.00","$1,031.28","$53,600.25"
SFO - FCA,54956617945,SFO-MAF-FCA 5,ERJ-175,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/54956617945,https://www.airlines-manager.com/aircraft/show/119652600,14:45,20:14,112,"$160,197.00","$140,466.00","$1,254.16","$25,616.90"
SFO - FCA,54965848541,SFO-MAF-FCA 1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/54965848541,https://www.airlines-manager.com/aircraft/show/120056761,19:45,0:59,272,"$303,943.00","$280,508.00","$1,031.28","$53,600.25"
SFO - FCA,54971692276,SFO-MAF-FCA 4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/54971692276,https://www.airlines-manager.com/aircraft/show/120056758,23:45,4:59,272,"$303,943.00","$280,508.00","$1,031.28","$53,600.25"
SFO - FLL,54930654841,SFO-FLL-TPA 2,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/54930654841,https://www.airlines-manager.com/aircraft/show/97955543,0:15,12:14,320,"$736,216.00","$668,188.00","$2,088.09","$55,759.78"
SFO - FLL,54930654842,SFO-FLL-TPA 4,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/54930654842,https://www.airlines-manager.com/aircraft/show/97955541,4:15,16:14,320,"$736,216.00","$668,188.00","$2,088.09","$55,759.78"
SFO - FLL,54937424070,SFO-FLL-TPA 6 B,A319-100,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/54937424070,https://www.airlines-manager.com/aircraft/show/97900729,7:30,19:44,198,"$553,648.00","$504,169.00","$2,546.31","$41,212.72"
SFO - FLL,54952417611,SFO-FLL-TPA 1,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/54952417611,https://www.airlines-manager.com/aircraft/show/97955544,13:00,0:59,320,"$736,216.00","$668,188.00","$2,088.09","$55,759.78"
SFO - FLL,54961494029,SFO-FLL-TPA 3,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/54961494029,https://www.airlines-manager.com/aircraft/show/97955542,17:00,4:59,320,"$736,216.00","$668,188.00","$2,088.09","$55,759.78"
SFO - FLL,54965848551,SFO-FLL-TPA 5,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/54965848551,https://www.airlines-manager.com/aircraft/show/97955540,20:00,7:59,320,"$736,216.00","$668,188.00","$2,088.09","$55,759.78"
SFO - FSD,54930654891,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/54930654891,https://www.airlines-manager.com/aircraft/show/107160378,0:30,7:59,320,"$469,831.00","$426,549.00","$1,332.97","$56,999.87"
SFO - FSD,54930654892,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/54930654892,https://www.airlines-manager.com/aircraft/show/107132310,2:00,9:29,112,"$222,435.00","$196,716.00","$1,756.39","$26,287.22"
SFO - FSD,54930654893,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/54930654893,https://www.airlines-manager.com/aircraft/show/107160381,3:00,10:29,320,"$469,831.00","$426,549.00","$1,332.97","$56,999.87"
SFO - FSD,54937424089,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/54937424089,https://www.airlines-manager.com/aircraft/show/107160380,8:00,15:29,320,"$469,831.00","$426,549.00","$1,332.97","$56,999.87"
SFO - FSD,54956618113,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/54956618113,https://www.airlines-manager.com/aircraft/show/107160379,16:00,23:29,284,"$437,296.00","$395,370.00","$1,392.15","$52,833.41"
SFO - GRR,54930654977,SFO-BHM-GRR 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/54930654977,https://www.airlines-manager.com/aircraft/show/117782583,1:00,10:44,198,"$456,419.00","$417,968.00","$2,110.95","$42,941.92"
SFO - GRR,54930654978,SFO-BHM-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/54930654978,https://www.airlines-manager.com/aircraft/show/117782567,5:45,15:29,320,"$605,707.00","$552,735.00","$1,727.30","$56,787.84"
SFO - GRR,54937424095,SFO-BHM-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/54937424095,https://www.airlines-manager.com/aircraft/show/117782566,8:00,17:44,320,"$605,707.00","$552,735.00","$1,727.30","$56,787.84"
SFO - GRR,54956618105,SFO-BHM-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/54956618105,https://www.airlines-manager.com/aircraft/show/117782568,16:00,1:44,320,"$605,707.00","$552,735.00","$1,727.30","$56,787.84"
SFO - GRR,54961494185,SFO-BHM-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/54961494185,https://www.airlines-manager.com/aircraft/show/117782569,17:30,3:14,320,"$605,707.00","$552,735.00","$1,727.30","$56,787.84"
SFO - GSO,54930654878,SFO-GSO-SYR 4,737-900ER,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/54930654878,https://www.airlines-manager.com/aircraft/show/119550235,0:30,11:29,320,"$684,688.00","$625,973.00","$1,956.17","$56,992.99"
SFO - GSO,54937423950,SFO-GSO-SYR 5,A319-100,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/54937423950,https://www.airlines-manager.com/aircraft/show/120112473,6:00,17:14,198,"$516,847.00","$473,978.00","$2,393.83","$42,193.89"
SFO - GSO,54947196996,SFO-GSO-SYR 1,737-900ER,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/54947196996,https://www.airlines-manager.com/aircraft/show/120056764,12:00,22:59,320,"$684,688.00","$625,973.00","$1,956.17","$56,992.99"
SFO - GSO,54952417437,SFO-GSO-SYR 2,737-900ER,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/54952417437,https://www.airlines-manager.com/aircraft/show/120056763,13:00,23:59,320,"$684,688.00","$625,973.00","$1,956.17","$56,992.99"
SFO - GSO,54971692250,SFO-GSO-SYR 3,737-900ER,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/54971692250,https://www.airlines-manager.com/aircraft/show/120056762,23:30,10:29,320,"$684,688.00","$625,973.00","$1,956.17","$56,992.99"
SFO - HKG,54965848695,SFO 168B-6 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/54965848695,https://www.airlines-manager.com/aircraft/show/87083947,21:15,23:59,1046,"$5,253,940.00","$4,855,351.00","$4,641.83","$1,776,347.93"
SFO - HKG,54971692231,SFO 168A-6 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/54971692231,https://www.airlines-manager.com/aircraft/show/88032836,23:15,1:59,1046,"$5,253,940.00","$4,855,351.00","$4,641.83","$1,776,347.93"
SFO - IAD,54930654691,SFO-IAD-CLT 1,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/54930654691,https://www.airlines-manager.com/aircraft/show/96135565,0:00,11:14,400,"$907,937.00","$829,919.00","$2,074.80","$73,880.03"
SFO - IAD,54930654692,SFO-IAD-CLT 5,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/54930654692,https://www.airlines-manager.com/aircraft/show/96135561,4:00,15:14,400,"$907,937.00","$829,919.00","$2,074.80","$73,880.03"
SFO - IAD,54937423977,SFO-IAD-CLT 2,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/54937423977,https://www.airlines-manager.com/aircraft/show/96135564,6:00,17:14,400,"$907,937.00","$829,919.00","$2,074.80","$73,880.03"
SFO - IAD,54952417424,SFO-IAD-CLT 3,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/54952417424,https://www.airlines-manager.com/aircraft/show/96135563,12:45,23:59,400,"$907,937.00","$829,919.00","$2,074.80","$73,880.03"
SFO - IAD,54956618159,SFO-IAD-CLT 4,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/54956618159,https://www.airlines-manager.com/aircraft/show/96135562,16:45,3:59,400,"$907,937.00","$829,919.00","$2,074.80","$73,880.03"
SFO - IAH,54930655497,SFO-IAH-MEX 2,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/54930655497,https://www.airlines-manager.com/aircraft/show/101045338,4:45,12:59,400,"$691,517.00","$621,709.00","$1,554.27","$75,511.21"
SFO - IAH,54937424022,SFO-IAH-MEX 5,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/54937424022,https://www.airlines-manager.com/aircraft/show/101045335,6:45,14:59,400,"$691,517.00","$621,709.00","$1,554.27","$75,511.21"
SFO - IAH,54952417598,SFO-IAH-MEX 1,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/54952417598,https://www.airlines-manager.com/aircraft/show/101045339,13:00,21:14,400,"$691,517.00","$621,709.00","$1,554.27","$75,511.21"
SFO - IAH,54956618014,SFO-IAH-MEX 4,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/54956618014,https://www.airlines-manager.com/aircraft/show/101045336,15:00,23:14,400,"$691,517.00","$621,709.00","$1,554.27","$75,511.21"
SFO - IAH,54965848517,SFO-IAH-MEX 3,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/54965848517,https://www.airlines-manager.com/aircraft/show/101045337,19:30,3:44,400,"$691,517.00","$621,709.00","$1,554.27","$75,511.21"
SFO - ICN,54930654844,SFO 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/54930654844,https://www.airlines-manager.com/aircraft/show/85537213,0:15,22:44,932,"$3,589,018.00","$3,238,995.00","$3,475.32","$144,062.05"
SFO - ICN,54952417451,SFO-ICN B,787-10,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/54952417451,https://www.airlines-manager.com/aircraft/show/110213648,13:00,10:59,592,"$2,626,537.00","$2,428,664.00","$4,102.47","$110,477.51"
SFO - ICN,54965848565,SFO 84A-1 E1,777-300,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/54965848565,https://www.airlines-manager.com/aircraft/show/86776212,20:00,18:29,866,"$3,403,439.00","$3,066,012.00","$3,540.43","$136,368.21"
SFO - ICT,54930654928,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/54930654928,https://www.airlines-manager.com/aircraft/show/114912263,0:45,8:14,310,"$467,206.00","$428,071.00","$1,380.87","$57,203.25"
SFO - ICT,54937424098,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/54937424098,https://www.airlines-manager.com/aircraft/show/114912264,8:00,15:29,310,"$467,206.00","$428,071.00","$1,380.87","$57,203.25"
SFO - ICT,54956618090,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/54956618090,https://www.airlines-manager.com/aircraft/show/114912267,16:00,23:29,310,"$467,206.00","$428,071.00","$1,380.87","$57,203.25"
SFO - ICT,54961494191,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/54961494191,https://www.airlines-manager.com/aircraft/show/114912306,17:30,0:59,112,"$220,592.00","$194,736.00","$1,738.71","$26,022.63"
SFO - ICT,54961494192,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/54961494192,https://www.airlines-manager.com/aircraft/show/114912268,18:45,2:14,310,"$467,206.00","$428,071.00","$1,380.87","$57,203.25"
SFO - IND,54930655521,SFO-IND-CVG 4,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/54930655521,https://www.airlines-manager.com/aircraft/show/99316503,5:15,14:59,310,"$602,937.00","$552,887.00","$1,783.51","$56,803.46"
SFO - IND,54937424058,SFO-IND-CVG 6,ERJ-175,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/54937424058,https://www.airlines-manager.com/aircraft/show/99174346,7:15,16:59,112,"$283,094.00","$249,680.00","$2,229.29","$25,652.05"
SFO - IND,54952417602,SFO-IND-CVG 1,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/54952417602,https://www.airlines-manager.com/aircraft/show/99316506,13:00,22:44,310,"$602,937.00","$552,887.00","$1,783.51","$56,803.46"
SFO - IND,54956617969,SFO-IND-CVG 3,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/54956617969,https://www.airlines-manager.com/aircraft/show/99316504,15:00,0:44,310,"$602,937.00","$552,887.00","$1,783.51","$56,803.46"
SFO - IND,54961494041,SFO-IND-CVG 5,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/54961494041,https://www.airlines-manager.com/aircraft/show/99316502,17:00,2:44,310,"$602,937.00","$552,887.00","$1,783.51","$56,803.46"
SFO - IND,54969516479,SFO-IND-CVG 2,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/54969516479,https://www.airlines-manager.com/aircraft/show/99316505,23:00,8:44,310,"$602,937.00","$552,887.00","$1,783.51","$56,803.46"
SFO - JAC,54930654950,SFO-MAF-FCA 1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/54930654950,https://www.airlines-manager.com/aircraft/show/120056761,1:00,5:59,272,"$284,241.00","$262,878.00",$966.46,"$52,751.44"
SFO - JAC,54930654951,SFO-MAF-FCA 4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/54930654951,https://www.airlines-manager.com/aircraft/show/120056758,5:00,9:59,272,"$284,241.00","$262,878.00",$966.46,"$52,751.44"
SFO - JAC,54952417440,SFO-MAF-FCA 3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/54952417440,https://www.airlines-manager.com/aircraft/show/120056759,13:00,17:59,272,"$284,241.00","$262,878.00",$966.46,"$52,751.44"
SFO - JAC,54961494269,SFO-MAF-FCA 2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/54961494269,https://www.airlines-manager.com/aircraft/show/120056760,18:15,23:14,272,"$284,241.00","$262,878.00",$966.46,"$52,751.44"
SFO - JAC,54965848597,SFO-MAF-FCA 5,ERJ-175,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/54965848597,https://www.airlines-manager.com/aircraft/show/119652600,20:15,1:14,112,"$149,379.00","$131,477.00","$1,173.90","$26,383.34"
SFO - JAN,54930655239,SFO-SAV-JAN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/54930655239,https://www.airlines-manager.com/aircraft/show/114917486,2:15,11:29,198,"$437,594.00","$401,149.00","$2,026.01","$43,445.74"
SFO - JAN,54937423990,SFO-SAV-JAN 3,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/54937423990,https://www.airlines-manager.com/aircraft/show/114912269,6:15,15:29,310,"$581,341.00","$535,884.00","$1,728.66","$58,037.98"
SFO - JAN,54937423991,SFO-SAV-JAN 2,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/54937423991,https://www.airlines-manager.com/aircraft/show/114912266,7:45,16:59,310,"$581,341.00","$535,884.00","$1,728.66","$58,037.98"
SFO - JAN,54961494034,SFO-SAV-JAN 1,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/54961494034,https://www.airlines-manager.com/aircraft/show/114912265,17:00,2:14,310,"$581,341.00","$535,884.00","$1,728.66","$58,037.98"
SFO - JAN,54961494035,SFO-SAV-JAN 4,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/54961494035,https://www.airlines-manager.com/aircraft/show/114912270,19:00,4:14,310,"$581,341.00","$535,884.00","$1,728.66","$58,037.98"
SFO - JAX,54937423981,SFO-JAX-SAT 5,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/54937423981,https://www.airlines-manager.com/aircraft/show/86377315,6:00,17:14,310,"$701,478.00","$646,409.00","$2,085.19","$57,543.83"
SFO - JAX,54952417595,SFO-JAX-SAT 1,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/54952417595,https://www.airlines-manager.com/aircraft/show/86375568,13:00,0:14,310,"$701,478.00","$646,409.00","$2,085.19","$57,543.83"
SFO - JAX,54956618024,SFO-JAX-SAT 2,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/54956618024,https://www.airlines-manager.com/aircraft/show/86371267,15:00,2:14,310,"$701,478.00","$646,409.00","$2,085.19","$57,543.83"
SFO - JAX,54965848660,SFO-JAX-SAT 3,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/54965848660,https://www.airlines-manager.com/aircraft/show/86385102,21:00,8:14,310,"$701,478.00","$646,409.00","$2,085.19","$57,543.83"
SFO - JAX,54969516472,SFO-JAX-SAT 4,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/54969516472,https://www.airlines-manager.com/aircraft/show/86378760,23:00,10:14,310,"$701,478.00","$646,409.00","$2,085.19","$57,543.83"
SFO - JFK,54930654963,SFO-MIA-JFK 4,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/54930654963,https://www.airlines-manager.com/aircraft/show/89233034,1:00,12:59,400,"$960,740.00","$862,242.00","$2,155.61","$71,953.44"
SFO - JFK,54937424032,SFO-MIA-JFK 5,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/54937424032,https://www.airlines-manager.com/aircraft/show/89233035,7:00,18:59,400,"$960,740.00","$862,242.00","$2,155.61","$71,953.44"
SFO - JFK,54952417628,SFO-MIA-JFK 1,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/54952417628,https://www.airlines-manager.com/aircraft/show/89233032,13:00,0:59,400,"$960,740.00","$862,242.00","$2,155.61","$71,953.44"
SFO - JFK,54956618097,SFO-MIA-JFK 2,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/54956618097,https://www.airlines-manager.com/aircraft/show/84622093,16:00,3:59,400,"$960,740.00","$862,242.00","$2,155.61","$71,953.44"
SFO - JFK,54961494356,SFO-MIA-JFK 3,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/54961494356,https://www.airlines-manager.com/aircraft/show/89233031,19:00,6:59,400,"$960,740.00","$862,242.00","$2,155.61","$71,953.44"
SFO - KOA,54930655265,SFO-KOA-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/54930655265,https://www.airlines-manager.com/aircraft/show/112650101,2:45,13:59,310,"$702,530.00","$647,658.00","$2,089.22","$57,655.01"
SFO - KOA,54930655266,SFO-KOA-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/54930655266,https://www.airlines-manager.com/aircraft/show/112650100,4:45,15:59,310,"$702,530.00","$647,658.00","$2,089.22","$57,655.01"
SFO - KOA,54952417466,SFO-KOA-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/54952417466,https://www.airlines-manager.com/aircraft/show/112650091,13:00,0:14,198,"$527,337.00","$483,338.00","$2,441.10","$43,027.12"
SFO - KOA,54961494044,SFO-KOA-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/54961494044,https://www.airlines-manager.com/aircraft/show/112650103,17:00,4:14,310,"$702,530.00","$647,658.00","$2,089.22","$57,655.01"
SFO - KOA,54965848580,SFO-KOA-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/54965848580,https://www.airlines-manager.com/aircraft/show/112650102,20:00,7:14,310,"$702,530.00","$647,658.00","$2,089.22","$57,655.01"
SFO - LAS,54937423974,SFO-BOS-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/54937423974,https://www.airlines-manager.com/aircraft/show/104901564,6:00,9:44,338,"$217,815.00","$179,122.00",$529.95,"$47,979.11"
SFO - LAS,54937423975,SFO-BOS-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/54937423975,https://www.airlines-manager.com/aircraft/show/104870960,7:00,10:44,338,"$217,815.00","$179,122.00",$529.95,"$47,979.11"
SFO - LAS,54947196985,SFO-BOS-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/54947196985,https://www.airlines-manager.com/aircraft/show/104874465,12:00,15:44,338,"$217,815.00","$179,122.00",$529.95,"$47,979.11"
SFO - LAS,54956618145,SFO-BOS-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/54956618145,https://www.airlines-manager.com/aircraft/show/104901544,16:30,20:14,338,"$217,815.00","$179,122.00",$529.95,"$47,979.11"
SFO - LAS,54965848628,SFO-BOS-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/54965848628,https://www.airlines-manager.com/aircraft/show/104864961,20:30,0:14,338,"$217,815.00","$179,122.00",$529.95,"$47,979.11"
SFO - LAX,54930655172,SFO-PHL-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/54930655172,https://www.airlines-manager.com/aircraft/show/97900730,2:00,5:29,198,"$133,274.00","$101,260.00",$511.41,"$29,069.86"
SFO - LAX,54930655173,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/54930655173,https://www.airlines-manager.com/aircraft/show/92390872,4:30,7:59,320,"$175,700.00","$128,489.00",$401.53,"$36,886.79"
SFO - LAX,54937424077,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/54937424077,https://www.airlines-manager.com/aircraft/show/92390869,7:30,10:59,320,"$175,700.00","$128,489.00",$401.53,"$36,886.79"
SFO - LAX,54942362970,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/54942362970,https://www.airlines-manager.com/aircraft/show/92390870,8:15,11:44,320,"$175,700.00","$128,489.00",$401.53,"$36,886.79"
SFO - LAX,54947196969,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/54947196969,https://www.airlines-manager.com/aircraft/show/92390873,12:00,15:29,320,"$175,700.00","$128,489.00",$401.53,"$36,886.79"
SFO - LAX,54956618162,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/54956618162,https://www.airlines-manager.com/aircraft/show/92390871,16:45,20:14,320,"$175,700.00","$128,489.00",$401.53,"$36,886.79"
SFO - LEX,54930655185,SFO-BTV-LEX 1,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/54930655185,https://www.airlines-manager.com/aircraft/show/112650095,2:00,11:59,310,"$622,836.00","$575,388.00","$1,856.09","$57,634.86"
SFO - LEX,54937423960,SFO-BTV-LEX 2,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/54937423960,https://www.airlines-manager.com/aircraft/show/112650094,6:00,15:59,310,"$622,836.00","$575,388.00","$1,856.09","$57,634.86"
SFO - LEX,54937423961,SFO-BTV-LEX 3,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/54937423961,https://www.airlines-manager.com/aircraft/show/112650093,8:00,17:59,310,"$622,836.00","$575,388.00","$1,856.09","$57,634.86"
SFO - LEX,54952417771,SFO-BTV-LEX 4,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/54952417771,https://www.airlines-manager.com/aircraft/show/112650092,14:00,23:59,310,"$622,836.00","$575,388.00","$1,856.09","$57,634.86"
SFO - LEX,54965848579,SFO-BTV-LEX 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/54965848579,https://www.airlines-manager.com/aircraft/show/112650089,20:00,5:59,198,"$468,601.00","$430,555.00","$2,174.52","$43,127.38"
SFO - LGB,54930655333,SFO-FAR-BIL 2,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/54930655333,https://www.airlines-manager.com/aircraft/show/117782585,3:15,6:44,310,"$180,890.00","$156,791.00",$505.78,"$45,011.77"
SFO - LGB,54947196832,SFO-FAR-BIL 1,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/54947196832,https://www.airlines-manager.com/aircraft/show/117782584,11:00,14:29,310,"$180,890.00","$156,791.00",$505.78,"$45,011.77"
SFO - LGB,54956617983,SFO-FAR-BIL 4,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/54956617983,https://www.airlines-manager.com/aircraft/show/117782587,15:00,18:29,310,"$180,890.00","$156,791.00",$505.78,"$45,011.77"
SFO - LGB,54969516339,SFO-FAR-BIL 3,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/54969516339,https://www.airlines-manager.com/aircraft/show/117782586,21:30,0:59,310,"$180,890.00","$156,791.00",$505.78,"$45,011.77"
SFO - LIT,54930655203,SFO-SDF-LIT 3,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/54930655203,https://www.airlines-manager.com/aircraft/show/94886627,2:15,10:59,310,"$540,459.00","$497,431.00","$1,604.62","$56,957.75"
SFO - LIT,54930655205,SFO-SDF-LIT 5,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/54930655205,https://www.airlines-manager.com/aircraft/show/106453498,3:15,11:59,310,"$540,459.00","$497,431.00","$1,604.62","$56,957.75"
SFO - LIT,54952417714,SFO-SDF-LIT 2,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/54952417714,https://www.airlines-manager.com/aircraft/show/94886628,14:00,22:44,310,"$540,459.00","$497,431.00","$1,604.62","$56,957.75"
SFO - LIT,54956617971,SFO-SDF-LIT 4,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/54956617971,https://www.airlines-manager.com/aircraft/show/106453500,15:00,23:44,310,"$540,459.00","$497,431.00","$1,604.62","$56,957.75"
SFO - LIT,54971692278,SFO-SDF-LIT 1,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/54971692278,https://www.airlines-manager.com/aircraft/show/106453499,23:45,8:29,310,"$540,459.00","$497,431.00","$1,604.62","$56,957.75"
SFO - MAF,54930655329,SFO-MAF-FCA 2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/54930655329,https://www.airlines-manager.com/aircraft/show/120056760,3:15,9:59,272,"$386,473.00","$358,813.00","$1,319.17","$53,289.06"
SFO - MAF,54937424088,SFO-MAF-FCA 5,ERJ-175,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/54937424088,https://www.airlines-manager.com/aircraft/show/119652600,8:00,14:44,112,"$200,853.00","$177,026.00","$1,580.59","$26,290.99"
SFO - MAF,54952417435,SFO-MAF-FCA 1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/54952417435,https://www.airlines-manager.com/aircraft/show/120056761,13:00,19:44,272,"$386,473.00","$358,813.00","$1,319.17","$53,289.06"
SFO - MAF,54961494055,SFO-MAF-FCA 4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/54961494055,https://www.airlines-manager.com/aircraft/show/120056758,17:00,23:44,272,"$386,473.00","$358,813.00","$1,319.17","$53,289.06"
SFO - MAF,54969516389,SFO-MAF-FCA 3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/54969516389,https://www.airlines-manager.com/aircraft/show/120056759,22:00,4:44,272,"$386,473.00","$358,813.00","$1,319.17","$53,289.06"
SFO - MCI,54937424041,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/54937424041,https://www.airlines-manager.com/aircraft/show/88239554,7:00,14:59,320,"$505,017.00","$456,091.00","$1,425.28","$57,130.40"
SFO - MCI,54961494019,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/54961494019,https://www.airlines-manager.com/aircraft/show/88239553,17:00,0:59,320,"$505,017.00","$456,091.00","$1,425.28","$57,130.40"
SFO - MCI,54961494020,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/54961494020,https://www.airlines-manager.com/aircraft/show/105223003,17:00,0:59,198,"$380,902.00","$345,894.00","$1,746.94","$43,327.01"
SFO - MCI,54961494021,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/54961494021,https://www.airlines-manager.com/aircraft/show/88239557,18:45,2:44,320,"$505,017.00","$456,091.00","$1,425.28","$57,130.40"
SFO - MCI,54971692224,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/54971692224,https://www.airlines-manager.com/aircraft/show/88239555,23:15,7:14,320,"$505,017.00","$456,091.00","$1,425.28","$57,130.40"
SFO - MCO,54930654697,SFO CARGO,B737-700C,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/54930654697,https://www.airlines-manager.com/aircraft/show/120141531,0:00,11:29,0,"$207,765.00","$117,928.00",$0.00,"$10,269.49"
SFO - MCO,54930654698,SFO-MCO-MSP 2,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/54930654698,https://www.airlines-manager.com/aircraft/show/105367367,3:30,14:59,338,"$791,323.00","$726,354.00","$2,148.98","$63,252.89"
SFO - MCO,54930654699,SFO-MCO-MSP 5,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/54930654699,https://www.airlines-manager.com/aircraft/show/105367364,4:30,15:59,338,"$791,323.00","$726,354.00","$2,148.98","$63,252.89"
SFO - MCO,54956617993,SFO-MCO-MSP 1,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/54956617993,https://www.airlines-manager.com/aircraft/show/105367368,15:00,2:29,338,"$791,323.00","$726,354.00","$2,148.98","$63,252.89"
SFO - MCO,54961494051,SFO-MCO-MSP 4,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/54961494051,https://www.airlines-manager.com/aircraft/show/105367365,17:00,4:29,338,"$791,323.00","$726,354.00","$2,148.98","$63,252.89"
SFO - MCO,54965848479,SFO-MCO-MSP 3,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/54965848479,https://www.airlines-manager.com/aircraft/show/105367366,19:15,6:44,338,"$791,323.00","$726,354.00","$2,148.98","$63,252.89"
SFO - MEM,54930655292,SFO-MEM-PIT 4,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/54930655292,https://www.airlines-manager.com/aircraft/show/98788934,2:45,11:59,310,"$574,328.00","$525,604.00","$1,695.50","$56,924.62"
SFO - MEM,54930655293,SFO-MEM-PIT 6,ERJ-175,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/54930655293,https://www.airlines-manager.com/aircraft/show/98675305,5:45,14:59,112,"$269,663.00","$237,281.00","$2,118.58","$25,698.30"
SFO - MEM,54952417604,SFO-MEM-PIT 1,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/54952417604,https://www.airlines-manager.com/aircraft/show/98788937,13:00,22:14,310,"$574,328.00","$525,604.00","$1,695.50","$56,924.62"
SFO - MEM,54956618094,SFO-MEM-PIT 3,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/54956618094,https://www.airlines-manager.com/aircraft/show/98788935,16:00,1:14,310,"$574,328.00","$525,604.00","$1,695.50","$56,924.62"
SFO - MEM,54961494348,SFO-MEM-PIT 5,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/54961494348,https://www.airlines-manager.com/aircraft/show/98788933,19:00,4:14,310,"$574,328.00","$525,604.00","$1,695.50","$56,924.62"
SFO - MEM,54971692273,SFO-MEM-PIT 2,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/54971692273,https://www.airlines-manager.com/aircraft/show/98788936,23:45,8:59,310,"$574,328.00","$525,604.00","$1,695.50","$56,924.62"
SFO - MEX,54930655365,SFO-IAH-MEX 3,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/54930655365,https://www.airlines-manager.com/aircraft/show/101045337,3:45,12:59,400,"$769,718.00","$698,851.00","$1,747.13","$75,687.83"
SFO - MEX,54952417597,SFO-IAH-MEX 2,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/54952417597,https://www.airlines-manager.com/aircraft/show/101045338,13:00,22:14,400,"$769,718.00","$698,851.00","$1,747.13","$75,687.83"
SFO - MEX,54956618017,SFO-IAH-MEX 5,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/54956618017,https://www.airlines-manager.com/aircraft/show/101045335,15:00,0:14,400,"$769,718.00","$698,851.00","$1,747.13","$75,687.83"
SFO - MEX,54965848692,SFO-IAH-MEX 1,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/54965848692,https://www.airlines-manager.com/aircraft/show/101045339,21:15,6:29,400,"$769,718.00","$698,851.00","$1,747.13","$75,687.83"
SFO - MEX,54971692229,SFO-IAH-MEX 4,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/54971692229,https://www.airlines-manager.com/aircraft/show/101045336,23:15,8:29,370,"$721,287.00","$652,251.00","$1,762.84","$70,640.90"
SFO - MFR,54930654975,SFO-TYS-MSN 2,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/54930654975,https://www.airlines-manager.com/aircraft/show/117782564,1:00,4:29,320,"$172,586.00","$145,954.00",$456.11,"$41,900.67"
SFO - MFR,54930654976,SFO-TYS-MSN 1,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/54930654976,https://www.airlines-manager.com/aircraft/show/117782565,4:00,7:29,320,"$172,586.00","$145,954.00",$456.11,"$41,900.67"
SFO - MFR,54956618101,SFO-TYS-MSN 3,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/54956618101,https://www.airlines-manager.com/aircraft/show/117782563,16:00,19:29,320,"$172,586.00","$145,954.00",$456.11,"$41,900.67"
SFO - MFR,54961494065,SFO-TYS-MSN 4,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/54961494065,https://www.airlines-manager.com/aircraft/show/117782562,17:15,20:44,289,"$162,495.00","$136,138.00",$471.07,"$39,082.68"
SFO - MHT,54930654866,SFO-MHT-CHS 3,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/54930654866,https://www.airlines-manager.com/aircraft/show/114917463,0:15,12:44,320,"$758,403.00","$694,418.00","$2,170.06","$55,627.61"
SFO - MHT,54930654867,SFO-MHT-CHS 4,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/54930654867,https://www.airlines-manager.com/aircraft/show/114266973,4:15,16:44,320,"$758,403.00","$694,418.00","$2,170.06","$55,627.61"
SFO - MHT,54952417459,SFO-MHT-CHS 1,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/54952417459,https://www.airlines-manager.com/aircraft/show/114917465,13:00,1:29,320,"$758,403.00","$694,418.00","$2,170.06","$55,627.61"
SFO - MHT,54961494037,SFO-MHT-CHS 2,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/54961494037,https://www.airlines-manager.com/aircraft/show/114917464,17:00,5:29,320,"$758,403.00","$694,418.00","$2,170.06","$55,627.61"
SFO - MHT,54965848575,SFO-MHT-CHS 5 B,A319-100,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/54965848575,https://www.airlines-manager.com/aircraft/show/114912262,20:00,8:29,198,"$568,571.00","$521,644.00","$2,634.57","$41,787.24"
SFO - MIA,54930654964,SFO-MIA-JFK 1,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/54930654964,https://www.airlines-manager.com/aircraft/show/89233032,1:00,12:59,400,"$954,153.00","$864,310.00","$2,160.78","$72,126.01"
SFO - MIA,54930654965,SFO-MIA-JFK 2,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/54930654965,https://www.airlines-manager.com/aircraft/show/84622093,4:00,15:59,400,"$954,153.00","$864,310.00","$2,160.78","$72,126.01"
SFO - MIA,54937424045,SFO-MIA-JFK 3,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/54937424045,https://www.airlines-manager.com/aircraft/show/89233031,7:00,18:59,400,"$954,153.00","$864,310.00","$2,160.78","$72,126.01"
SFO - MIA,54952417627,SFO-MIA-JFK 4,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/54952417627,https://www.airlines-manager.com/aircraft/show/89233034,13:00,0:59,400,"$954,153.00","$864,310.00","$2,160.78","$72,126.01"
SFO - MIA,54961494355,SFO-MIA-JFK 5,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/54961494355,https://www.airlines-manager.com/aircraft/show/89233035,19:00,6:59,400,"$954,153.00","$864,310.00","$2,160.78","$72,126.01"
SFO - MKE,54930654876,SFO-CLE-MKE 1,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/54930654876,https://www.airlines-manager.com/aircraft/show/92519368,0:30,9:44,320,"$583,505.00","$530,737.00","$1,658.55","$57,480.54"
SFO - MKE,54930654877,SFO-CLE-MKE 4,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/54930654877,https://www.airlines-manager.com/aircraft/show/92519371,5:30,14:44,320,"$583,505.00","$530,737.00","$1,658.55","$57,480.54"
SFO - MKE,54937424010,SFO-CLE-MKE 3,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/54937424010,https://www.airlines-manager.com/aircraft/show/92519367,6:45,15:59,320,"$583,505.00","$530,737.00","$1,658.55","$57,480.54"
SFO - MKE,54956618119,SFO-CLE-MKE 2,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/54956618119,https://www.airlines-manager.com/aircraft/show/92519369,16:00,1:14,320,"$583,505.00","$530,737.00","$1,658.55","$57,480.54"
SFO - MKE,54961494244,SFO-CLE-MKE 5,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/54961494244,https://www.airlines-manager.com/aircraft/show/92519370,18:00,3:14,320,"$583,505.00","$530,737.00","$1,658.55","$57,480.54"
SFO - MSN,54930655235,SFO-TYS-MSN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/54930655235,https://www.airlines-manager.com/aircraft/show/117782582,2:15,11:14,198,"$422,498.00","$386,836.00","$1,953.72","$43,061.52"
SFO - MSN,54937424034,SFO-TYS-MSN 3,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/54937424034,https://www.airlines-manager.com/aircraft/show/117782563,7:00,15:59,320,"$559,952.00","$510,703.00","$1,595.95","$56,850.06"
SFO - MSN,54937424035,SFO-TYS-MSN 4,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/54937424035,https://www.airlines-manager.com/aircraft/show/117782562,7:00,15:59,320,"$559,952.00","$510,703.00","$1,595.95","$56,850.06"
SFO - MSN,54956618078,SFO-TYS-MSN 2,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/54956618078,https://www.airlines-manager.com/aircraft/show/117782564,16:00,0:59,320,"$559,952.00","$510,703.00","$1,595.95","$56,850.06"
SFO - MSN,54961494352,SFO-TYS-MSN 1,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/54961494352,https://www.airlines-manager.com/aircraft/show/117782565,19:00,3:59,320,"$559,952.00","$510,703.00","$1,595.95","$56,850.06"
SFO - MSO,54937424011,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/54937424011,https://www.airlines-manager.com/aircraft/show/108410856,6:45,11:44,320,"$321,211.00","$287,500.00",$898.44,"$57,692.31"
SFO - MSO,54937424012,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/54937424012,https://www.airlines-manager.com/aircraft/show/108410859,7:30,12:29,320,"$321,211.00","$287,500.00",$898.44,"$57,692.31"
SFO - MSO,54952417478,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/54952417478,https://www.airlines-manager.com/aircraft/show/108410858,13:00,17:59,320,"$321,211.00","$287,500.00",$898.44,"$57,692.31"
SFO - MSO,54965848661,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/54965848661,https://www.airlines-manager.com/aircraft/show/108410857,21:00,1:59,266,"$288,436.00","$255,842.00",$961.81,"$51,339.53"
SFO - MSP,54930655260,SFO-MCO-MSP 1,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/54930655260,https://www.airlines-manager.com/aircraft/show/105367368,2:30,10:44,338,"$570,087.00","$520,649.00","$1,540.38","$63,236.72"
SFO - MSP,54930655261,SFO-MCO-MSP 4,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/54930655261,https://www.airlines-manager.com/aircraft/show/105367365,4:30,12:44,338,"$570,087.00","$520,649.00","$1,540.38","$63,236.72"
SFO - MSP,54937424021,SFO-MCO-MSP 3,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/54937424021,https://www.airlines-manager.com/aircraft/show/105367366,6:45,14:59,338,"$570,087.00","$520,649.00","$1,540.38","$63,236.72"
SFO - MSP,54956617990,SFO-MCO-MSP 2,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/54956617990,https://www.airlines-manager.com/aircraft/show/105367367,15:00,23:14,338,"$570,087.00","$520,649.00","$1,540.38","$63,236.72"
SFO - MSP,54956617991,SFO-MCO-MSP 5,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/54956617991,https://www.airlines-manager.com/aircraft/show/105367364,16:00,0:14,338,"$570,087.00","$520,649.00","$1,540.38","$63,236.72"
SFO - MSY,54930655309,SFO-MSY-STL 6,ERJ-175,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/54930655309,https://www.airlines-manager.com/aircraft/show/103534666,3:00,12:29,112,"$278,463.00","$245,789.00","$2,194.54","$25,918.00"
SFO - MSY,54937423978,SFO-MSY-STL 2,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/54937423978,https://www.airlines-manager.com/aircraft/show/98075266,6:00,15:29,320,"$591,162.00","$536,928.00","$1,677.90","$56,618.07"
SFO - MSY,54937423979,SFO-MSY-STL 4,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/54937423979,https://www.airlines-manager.com/aircraft/show/98075264,8:00,17:29,320,"$591,162.00","$536,928.00","$1,677.90","$56,618.07"
SFO - MSY,54952417609,SFO-MSY-STL 1,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/54952417609,https://www.airlines-manager.com/aircraft/show/98075267,13:00,22:29,320,"$591,162.00","$536,928.00","$1,677.90","$56,618.07"
SFO - MSY,54965848688,SFO-MSY-STL 3,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/54965848688,https://www.airlines-manager.com/aircraft/show/98075265,21:15,6:44,320,"$591,162.00","$536,928.00","$1,677.90","$56,618.07"
SFO - MSY,54971692222,SFO-MSY-STL 5,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/54971692222,https://www.airlines-manager.com/aircraft/show/98075263,23:15,8:44,320,"$591,162.00","$536,928.00","$1,677.90","$56,618.07"
SFO - NRT,54930654689,SFO 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/54930654689,https://www.airlines-manager.com/aircraft/show/85806656,0:00,20:29,932,"$3,433,419.00","$3,108,763.00","$3,335.58","$151,770.37"
SFO - NRT,54930654690,SFO 84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/54930654690,https://www.airlines-manager.com/aircraft/show/86776210,4:15,0:44,932,"$3,433,419.00","$3,108,763.00","$3,335.58","$151,770.37"
SFO - OGG,54930655255,SFO-OGG-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/54930655255,https://www.airlines-manager.com/aircraft/show/92773477,2:30,13:44,310,"$694,716.00","$642,154.00","$2,071.46","$57,165.04"
SFO - OGG,54952417637,SFO-OGG-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/54952417637,https://www.airlines-manager.com/aircraft/show/92773481,13:30,0:44,310,"$694,716.00","$642,154.00","$2,071.46","$57,165.04"
SFO - OGG,54956618046,SFO-OGG-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/54956618046,https://www.airlines-manager.com/aircraft/show/92773480,15:30,2:44,310,"$694,716.00","$642,154.00","$2,071.46","$57,165.04"
SFO - OGG,54969516341,SFO-OGG-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/54969516341,https://www.airlines-manager.com/aircraft/show/92773479,21:30,8:44,310,"$694,716.00","$642,154.00","$2,071.46","$57,165.04"
SFO - OGG,54971692235,SFO-OGG-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/54971692235,https://www.airlines-manager.com/aircraft/show/92773478,23:30,10:44,310,"$694,716.00","$642,154.00","$2,071.46","$57,165.04"
SFO - OKC,54930654879,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/54930654879,https://www.airlines-manager.com/aircraft/show/107160380,0:30,7:59,320,"$474,286.00","$430,044.00","$1,343.89","$57,466.90"
SFO - OKC,54937424090,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/54937424090,https://www.airlines-manager.com/aircraft/show/107160379,8:00,15:29,320,"$474,286.00","$430,044.00","$1,343.89","$57,466.90"
SFO - OKC,54961494039,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/54961494039,https://www.airlines-manager.com/aircraft/show/107160378,17:00,0:29,320,"474,286$","430,044$","$1,343.89","$57,466.90"
SFO - OKC,54961494040,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/54961494040,https://www.airlines-manager.com/aircraft/show/107132310,18:30,1:59,112,"$224,021.00","$197,878.00","$1,766.77","$26,442.49"
SFO - OKC,54965848505,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/54965848505,https://www.airlines-manager.com/aircraft/show/107160381,19:30,2:59,320,"$474,286.00","$430,044.00","$1,343.89","$57,466.90"
SFO - OMA,54930654986,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/54930654986,https://www.airlines-manager.com/aircraft/show/88239553,1:00,8:44,320,"$482,863.00","$437,791.00","$1,368.10","$56,610.91"
SFO - OMA,54930654987,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/54930654987,https://www.airlines-manager.com/aircraft/show/105223003,1:00,8:44,198,"$365,184.00","$332,849.00","$1,681.06","$43,040.82"
SFO - OMA,54930654988,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/54930654988,https://www.airlines-manager.com/aircraft/show/88239557,2:45,10:29,320,"$482,863.00","$437,791.00","$1,368.10","$56,610.91"
SFO - OMA,54937424055,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/54937424055,https://www.airlines-manager.com/aircraft/show/88239555,7:15,14:59,320,"$482,863.00","$437,791.00","$1,368.10","$56,610.91"
SFO - OMA,54956617988,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/54956617988,https://www.airlines-manager.com/aircraft/show/88239554,15:00,22:44,320,"482,863$","437,791$","$1,368.10","$56,610.91"
SFO - ONT,54930655462,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/54930655462,https://www.airlines-manager.com/aircraft/show/107160379,4:30,7:59,320,"179,764$","149,631$",$467.60,"$42,956.27"
SFO - ONT,54952417483,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/54952417483,https://www.airlines-manager.com/aircraft/show/107160378,13:00,16:29,320,"179,764$","149,631$",$467.60,"$42,956.27"
SFO - ONT,54956617999,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/54956617999,https://www.airlines-manager.com/aircraft/show/107132310,15:00,18:29,112,"82,970$","66,847$",$596.85,"$19,190.53"
SFO - ONT,54956618000,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/54956618000,https://www.airlines-manager.com/aircraft/show/107160381,16:00,19:29,320,"179,764$","149,631$",$467.60,"$42,956.27"
SFO - ONT,54965848659,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/54965848659,https://www.airlines-manager.com/aircraft/show/107160380,21:00,0:29,320,"$179,764.00","$149,631.00",$467.60,"$42,956.27"
SFO - ORD,54937423964,SFO-ORD-DTW 2,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/54937423964,https://www.airlines-manager.com/aircraft/show/101045333,6:00,14:59,400,"$756,958.00","$669,557.00","$1,673.89","$74,533.25"
SFO - ORD,54937423965,SFO-ORD-DTW 5,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/54937423965,https://www.airlines-manager.com/aircraft/show/101045330,7:30,16:29,400,"$756,958.00","$669,557.00","$1,673.89","$74,533.25"
SFO - ORD,54952417599,SFO-ORD-DTW 1,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/54952417599,https://www.airlines-manager.com/aircraft/show/101045334,13:00,21:59,400,"$756,958.00","$669,557.00","$1,673.89","$74,533.25"
SFO - ORD,54956618021,SFO-ORD-DTW 4,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/54956618021,https://www.airlines-manager.com/aircraft/show/101045331,15:00,23:59,400,"$756,958.00","$669,557.00","$1,673.89","$74,533.25"
SFO - ORD,54965848553,SFO-ORD-DTW 3,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/54965848553,https://www.airlines-manager.com/aircraft/show/101045332,20:00,4:59,400,"$756,958.00","$669,557.00","$1,673.89","$74,533.25"
SFO - ORF,54930655528,SFO-ORF-RIC 3,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/54930655528,https://www.airlines-manager.com/aircraft/show/108328836,5:30,17:29,310,"729,217$","673,105$","$2,171.31","$56,170.10"
SFO - ORF,54937424066,SFO-ORF-RIC 4,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/54937424066,https://www.airlines-manager.com/aircraft/show/108328837,7:30,19:29,310,"729,217$","673,105$","$2,171.31","$56,170.10"
SFO - ORF,54961494230,SFO-ORF-RIC 1,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/54961494230,https://www.airlines-manager.com/aircraft/show/108328834,18:00,5:59,310,"729,217$","673,105$","$2,171.31","$56,170.10"
SFO - ORF,54965848552,SFO-ORF-RIC 2,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/54965848552,https://www.airlines-manager.com/aircraft/show/108328835,20:00,7:59,310,"729,217$","673,105$","$2,171.31","$56,170.10"
SFO - ORF,54969516391,SFO-ORF-RIC 5 B,A319-100,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/54969516391,https://www.airlines-manager.com/aircraft/show/108328833,22:00,9:59,198,"545,378$","500,379$","$2,527.17","$41,756.24"
SFO - PBI,54930655454,SFO-PBI-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/54930655454,https://www.airlines-manager.com/aircraft/show/100301186,4:15,16:14,320,"730,653$","666,322$","$2,082.26","$55,604.06"
SFO - PBI,54937423985,SFO-PBI-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/54937423985,https://www.airlines-manager.com/aircraft/show/100301185,6:15,18:14,320,"730,653$","666,322$","$2,082.26","$55,604.06"
SFO - PBI,54961494046,SFO-PBI-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/54961494046,https://www.airlines-manager.com/aircraft/show/100301188,17:00,4:59,320,"730,653$","666,322$","$2,082.26","$55,604.06"
SFO - PBI,54961494047,SFO-PBI-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/54961494047,https://www.airlines-manager.com/aircraft/show/100301187,19:00,6:59,320,"730,653$","666,322$","$2,082.26","$55,604.06"
SFO - PBI,54965848663,SFO-PBI-RDU 5,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/54965848663,https://www.airlines-manager.com/aircraft/show/100301184,21:00,8:59,320,"730,653$","666,322$","$2,082.26","$55,604.06"
SFO - PDX,54930654740,SFO-MCO-MSP 5,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/54930654740,https://www.airlines-manager.com/aircraft/show/105367364,0:15,4:29,338,"271,208$","241,811$",$715.42,"$57,120.71"
SFO - PDX,54947196821,SFO-MCO-MSP 1,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/54947196821,https://www.airlines-manager.com/aircraft/show/105367368,10:45,14:59,338,"271,208$","241,811$",$715.42,"$57,120.71"
SFO - PDX,54952417423,SFO-MCO-MSP 4,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/54952417423,https://www.airlines-manager.com/aircraft/show/105367365,12:45,16:59,338,"271,208$","241,811$",$715.42,"$57,120.71"
SFO - PDX,54956617992,SFO-MCO-MSP 3,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/54956617992,https://www.airlines-manager.com/aircraft/show/105367366,15:00,19:14,338,"271,208$","241,811$",$715.42,"$57,120.71"
SFO - PDX,54971692233,SFO-MCO-MSP 2,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/54971692233,https://www.airlines-manager.com/aircraft/show/105367367,23:15,3:29,271,"239,460$","210,905$",$778.25,"$49,820.08"
SFO - PEK,54930654916,SFO 84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/54930654916,https://www.airlines-manager.com/aircraft/show/86776213,0:45,0:14,932,"3,795,557$","3,394,050$","$3,641.68","$144,530.16"
SFO - PEK,54961494026,SFO-PEK E,787-10,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/54961494026,https://www.airlines-manager.com/aircraft/show/106813006,17:00,15:59,648,"2,825,530$","2,590,954$","$3,998.39","$112,731.86"
SFO - PEK,54965848614,SFO 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/54965848614,https://www.airlines-manager.com/aircraft/show/85806656,20:30,19:59,932,"3,795,557$","3,394,050$","$3,641.68","$144,530.16"
SFO - PHL,54930654687,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/54930654687,https://www.airlines-manager.com/aircraft/show/92390871,0:00,11:44,320,"727,252$","654,700$","$2,045.94","$55,798.30"
SFO - PHL,54947196971,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/54947196971,https://www.airlines-manager.com/aircraft/show/92390872,12:00,23:44,320,"727,252$","654,700$","$2,045.94","$55,798.30"
SFO - PHL,54952417730,SFO-PHL-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/54952417730,https://www.airlines-manager.com/aircraft/show/97900730,14:00,1:59,198,"546,374$","493,982$","$2,494.86","$41,222.42"
SFO - PHL,54956617981,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/54956617981,https://www.airlines-manager.com/aircraft/show/92390869,15:00,2:44,320,"727,252$","654,700$","$2,045.94","$55,798.30"
SFO - PHL,54956617982,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/54956617982,https://www.airlines-manager.com/aircraft/show/92390870,15:45,3:29,320,"727,252$","654,700$","$2,045.94","$55,798.30"
SFO - PHL,54965848498,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/54965848498,https://www.airlines-manager.com/aircraft/show/92390873,19:15,6:59,320,"727,252$","654,700$","$2,045.94","$55,798.30"
SFO - PHX,54930655056,SFO-BOS-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/54930655056,https://www.airlines-manager.com/aircraft/show/104901564,1:30,5:59,338,"321,843$","283,785$",$839.60,"$63,297.77"
SFO - PHX,54930655057,SFO-BOS-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/54930655057,https://www.airlines-manager.com/aircraft/show/104870960,2:30,6:59,338,"321,843$","283,785$",$839.60,"$63,297.77"
SFO - PHX,54930655058,SFO-BOS-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/54930655058,https://www.airlines-manager.com/aircraft/show/104874465,4:15,8:44,338,"321,843$","283,785$",$839.60,"$63,297.77"
SFO - PHX,54947196986,SFO-BOS-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/54947196986,https://www.airlines-manager.com/aircraft/show/104901544,12:00,16:29,338,"321,843$","283,785$",$839.60,"$63,297.77"
SFO - PHX,54956618120,SFO-BOS-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/54956618120,https://www.airlines-manager.com/aircraft/show/104864961,16:00,20:29,338,"321,843$","283,785$",$839.60,"$63,297.77"
SFO - PIT,54930655022,SFO-MEM-PIT 3,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/54930655022,https://www.airlines-manager.com/aircraft/show/98788935,1:15,11:59,310,"673,591$","618,435$","$1,994.95","$57,618.17"
SFO - PIT,54930655023,SFO-MEM-PIT 5,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/54930655023,https://www.airlines-manager.com/aircraft/show/98788933,4:15,14:59,310,"673,591$","618,435$","$1,994.95","$57,618.17"
SFO - PIT,54952417603,SFO-MEM-PIT 2,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/54952417603,https://www.airlines-manager.com/aircraft/show/98788936,13:00,23:44,310,"673,591$","618,435$","$1,994.95","$57,618.17"
SFO - PIT,54956618093,SFO-MEM-PIT 4,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/54956618093,https://www.airlines-manager.com/aircraft/show/98788934,16:00,2:44,310,"673,591$","618,435$","$1,994.95","$57,618.17"
SFO - PIT,54961494347,SFO-MEM-PIT 6,ERJ-175,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/54961494347,https://www.airlines-manager.com/aircraft/show/98675305,19:00,5:44,112,"315,839$","278,820$","$2,489.46","$25,977.02"
SFO - PIT,54969516409,SFO-MEM-PIT 1,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/54969516409,https://www.airlines-manager.com/aircraft/show/98788937,22:15,8:59,310,"673,591$","618,435$","$1,994.95","$57,618.17"
SFO - PSP,54930655450,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/54930655450,https://www.airlines-manager.com/aircraft/show/114912264,4:15,7:59,310,"199,494$","174,696$",$563.54,"$46,793.57"
SFO - PSP,54947196951,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/54947196951,https://www.airlines-manager.com/aircraft/show/114912267,11:45,15:29,310,"199,494$","174,696$",$563.54,"$46,793.57"
SFO - PSP,54952417629,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/54952417629,https://www.airlines-manager.com/aircraft/show/114912306,13:15,16:59,112,"92,098$","76,487$",$682.92,"$20,487.59"
SFO - PSP,54956617967,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/54956617967,https://www.airlines-manager.com/aircraft/show/114912268,15:00,18:44,310,"199,494$","174,696$",$563.54,"$46,793.57"
SFO - PSP,54965848672,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/54965848672,https://www.airlines-manager.com/aircraft/show/114912263,21:00,0:44,277,"186,989$","162,571$",$586.90,"$43,545.80"
SFO - PVD,54930654728,SFO-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/54930654728,https://www.airlines-manager.com/aircraft/show/112650105,0:00,12:29,310,"759,776$","702,109$","$2,264.87","$56,243.71"
SFO - PVD,54930654729,SFO-PVD-BUF 5,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/54930654729,https://www.airlines-manager.com/aircraft/show/112650104,5:00,17:29,310,"759,776$","702,109$","$2,264.87","$56,243.71"
SFO - PVD,54952417468,SFO-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/54952417468,https://www.airlines-manager.com/aircraft/show/112650108,13:00,1:29,310,"759,776$","702,109$","$2,264.87","$56,243.71"
SFO - PVD,54961494048,SFO-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/54961494048,https://www.airlines-manager.com/aircraft/show/112650107,17:00,5:29,310,"759,776$","702,109$","$2,264.87","$56,243.71"
SFO - PVD,54961494049,SFO-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/54961494049,https://www.airlines-manager.com/aircraft/show/112650106,19:00,7:29,310,"759,776$","702,109$","$2,264.87","$56,243.71"
SFO - PWM,54930654830,SFO-KOA-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/54930654830,https://www.airlines-manager.com/aircraft/show/112650091,0:15,12:59,198,"574,433$","528,236$","$2,667.86","$41,484.50"
SFO - PWM,54930654831,SFO-KOA-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/54930654831,https://www.airlines-manager.com/aircraft/show/112650103,4:15,16:59,310,"767,544$","709,944$","$2,290.14","$55,754.76"
SFO - PWM,54937424053,SFO-KOA-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/54937424053,https://www.airlines-manager.com/aircraft/show/112650102,7:15,19:59,310,"767,544$","709,944$","$2,290.14","$55,754.76"
SFO - PWM,54952417774,SFO-KOA-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/54952417774,https://www.airlines-manager.com/aircraft/show/112650101,14:00,2:44,310,"767,544$","709,944$","$2,290.14","$55,754.76"
SFO - PWM,54956618082,SFO-KOA-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/54956618082,https://www.airlines-manager.com/aircraft/show/112650100,16:00,4:44,310,"767,544$","709,944$","$2,290.14","$55,754.76"
SFO - RAP,54930655478,SFO-FAR-BIL 1,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/54930655478,https://www.airlines-manager.com/aircraft/show/117782584,4:30,10:59,310,"397,901$","363,608$","$1,172.93","$56,083.50"
SFO - RAP,54942362978,SFO-FAR-BIL 4,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/54942362978,https://www.airlines-manager.com/aircraft/show/117782587,8:30,14:59,310,"397,901$","363,608$","$1,172.93","$56,083.50"
SFO - RAP,54956617984,SFO-FAR-BIL 3,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/54956617984,https://www.airlines-manager.com/aircraft/show/117782586,15:00,21:29,310,"397,901$","363,608$","$1,172.93","$56,083.50"
SFO - RAP,54965848636,SFO-FAR-BIL 2,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/54965848636,https://www.airlines-manager.com/aircraft/show/117782585,20:45,3:14,285,"378,982$","345,442$","$1,212.08","$53,281.54"
SFO - RDM,54930655021,SFO-MAF-FCA 5,ERJ-175,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/54930655021,https://www.airlines-manager.com/aircraft/show/119652600,1:15,5:14,112,"102,475$","87,285$",$779.33,"$21,912.55"
SFO - RDM,54937423956,SFO-MAF-FCA 1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/54937423956,https://www.airlines-manager.com/aircraft/show/120056761,6:00,9:59,272,"198,353$","179,676$",$660.57,"$45,106.95"
SFO - RDM,54952417592,SFO-MAF-FCA 4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/54952417592,https://www.airlines-manager.com/aircraft/show/120056758,13:00,16:59,272,"198,353$","179,676$",$660.57,"$45,106.95"
SFO - RDM,54961494235,SFO-MAF-FCA 3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/54961494235,https://www.airlines-manager.com/aircraft/show/120056759,18:00,21:59,272,"198,353$","179,676$",$660.57,"$45,106.95"
SFO - RDM,54971692232,SFO-MAF-FCA 2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/54971692232,https://www.airlines-manager.com/aircraft/show/120056760,23:15,3:14,272,"198,353$","179,676$",$660.57,"$45,106.95"
SFO - RDU,54930655515,SFO-PBI-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/54930655515,https://www.airlines-manager.com/aircraft/show/100301188,5:00,16:14,320,"709,519$","646,796$","$2,021.24","$57,578.28"
SFO - RDU,54937424043,SFO-PBI-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/54937424043,https://www.airlines-manager.com/aircraft/show/100301187,7:00,18:14,320,"709,519$","646,796$","$2,021.24","$57,578.28"
SFO - RDU,54942363033,SFO-PBI-RDU 5,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/54942363033,https://www.airlines-manager.com/aircraft/show/100301184,9:00,20:14,320,"709,519$","646,796$","$2,021.24","$57,578.28"
SFO - RDU,54961494053,SFO-PBI-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/54961494053,https://www.airlines-manager.com/aircraft/show/100301186,17:00,4:14,320,"709,519$","646,796$","$2,021.24","$57,578.28"
SFO - RDU,54961494054,SFO-PBI-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/54961494054,https://www.airlines-manager.com/aircraft/show/100301185,19:00,6:14,320,"709,519$","646,796$","$2,021.24","$57,578.28"
SFO - RIC,54937423954,SFO-ORF-RIC 1,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/54937423954,https://www.airlines-manager.com/aircraft/show/108328834,6:00,17:29,310,"723,392$","668,358$","$2,155.99","$58,202.44"
SFO - RIC,54937423955,SFO-ORF-RIC 2,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/54937423955,https://www.airlines-manager.com/aircraft/show/108328835,8:00,19:29,310,"723,392$","668,358$","$2,155.99","$58,202.44"
SFO - RIC,54942363121,SFO-ORF-RIC 5 B,A319-100,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/54942363121,https://www.airlines-manager.com/aircraft/show/108328833,10:00,21:29,198,"542,563$","498,431$","$2,517.33","$43,404.73"
SFO - RIC,54961494231,SFO-ORF-RIC 3,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/54961494231,https://www.airlines-manager.com/aircraft/show/108328836,18:00,5:29,310,"723,392$","668,358$","$2,155.99","$58,202.44"
SFO - RIC,54965848558,SFO-ORF-RIC 4,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/54965848558,https://www.airlines-manager.com/aircraft/show/108328837,20:00,7:29,310,"723,392$","668,358$","$2,155.99","$58,202.44"
SFO - RNO,54930655449,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/54930655449,https://www.airlines-manager.com/aircraft/show/88239554,4:15,6:59,320,"118,943$","92,623$",$289.45,"$33,886.46"
SFO - RNO,54952417786,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/54952417786,https://www.airlines-manager.com/aircraft/show/105223003,14:15,16:59,198,"90,039$","72,187$",$364.58,"$26,409.88"
SFO - RNO,54952417787,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/54952417787,https://www.airlines-manager.com/aircraft/show/88239553,14:15,16:59,320,"118,943$","92,623$",$289.45,"$33,886.46"
SFO - RNO,54956618074,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/54956618074,https://www.airlines-manager.com/aircraft/show/88239557,16:00,18:44,320,"118,943$","92,623$",$289.45,"$33,886.46"
SFO - RNO,54965848627,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/54965848627,https://www.airlines-manager.com/aircraft/show/88239555,20:30,23:14,320,"118,943$","92,623$",$289.45,"$33,886.46"
SFO - ROC,54930654665,SFO-ROC-COS 2,A321neo,https://www.airlines-manager.com/network/showline/50555363,https://www.airlines-manager.com/network/showflight/54930654665,https://www.airlines-manager.com/aircraft/show/120112475,0:00,11:14,338,"767,646$","717,662$","$2,123.26","$63,886.82"
SFO - ROC,54937424015,SFO-ROC-COS 4,A321neo,https://www.airlines-manager.com/network/showline/50555363,https://www.airlines-manager.com/network/showflight/54937424015,https://www.airlines-manager.com/aircraft/show/120051490,6:45,17:59,338,"767,646$","717,662$","$2,123.26","$63,886.82"
SFO - ROC,54956617998,SFO-ROC-COS 1,A321neo,https://www.airlines-manager.com/network/showline/50555363,https://www.airlines-manager.com/network/showflight/54956617998,https://www.airlines-manager.com/aircraft/show/120112476,15:00,2:14,338,"767,646$","717,662$","$2,123.26","$63,886.82"
SFO - ROC,54965848599,SFO-ROC-COS 3,A321neo,https://www.airlines-manager.com/network/showline/50555363,https://www.airlines-manager.com/network/showflight/54965848599,https://www.airlines-manager.com/aircraft/show/120112474,20:15,7:29,338,"767,646$","717,662$","$2,123.26","$63,886.82"
SFO - RSW,54930655519,SFO-RSW-BDL 3,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/54930655519,https://www.airlines-manager.com/aircraft/show/84915100,5:15,16:59,320,"726,988$","662,174$","$2,069.29","$56,435.28"
SFO - RSW,54937424060,SFO-RSW-BDL 4,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/54937424060,https://www.airlines-manager.com/aircraft/show/84915101,7:15,18:59,320,"726,988$","662,174$","$2,069.29","$56,435.28"
SFO - RSW,54961494057,SFO-RSW-BDL 1,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/54961494057,https://www.airlines-manager.com/aircraft/show/84915098,17:00,4:44,320,"726,988$","662,174$","$2,069.29","$56,435.28"
SFO - RSW,54961494058,SFO-RSW-BDL 2,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/54961494058,https://www.airlines-manager.com/aircraft/show/84915099,19:00,6:44,320,"726,988$","662,174$","$2,069.29","$56,435.28"
SFO - RSW,54965848664,SFO-RSW-BDL 5,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/54965848664,https://www.airlines-manager.com/aircraft/show/84915102,21:00,8:44,320,"726,988$","662,174$","$2,069.29","$56,435.28"
SFO - SAN,54937424096,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/54937424096,https://www.airlines-manager.com/aircraft/show/92390872,8:00,11:44,320,"216,450$","183,611$",$573.78,"$49,181.52"
SFO - SAN,54947196873,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/54947196873,https://www.airlines-manager.com/aircraft/show/92390869,11:00,14:44,320,"216,450$","183,611$",$573.78,"$49,181.52"
SFO - SAN,54947196874,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/54947196874,https://www.airlines-manager.com/aircraft/show/92390870,12:00,15:44,320,"216,450$","183,611$",$573.78,"$49,181.52"
SFO - SAN,54956618054,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/54956618054,https://www.airlines-manager.com/aircraft/show/92390873,15:30,19:14,320,"216,450$","183,611$",$573.78,"$49,181.52"
SFO - SAN,54965848589,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/54965848589,https://www.airlines-manager.com/aircraft/show/92390871,20:15,23:59,315,"214,407$","181,628$",$576.60,"$48,650.36"
SFO - SAT,54930654828,SFO-JAX-SAT 1,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/54930654828,https://www.airlines-manager.com/aircraft/show/86375568,0:15,8:14,310,"496,378$","455,108$","$1,468.09","$57,007.27"
SFO - SAT,54930654829,SFO-JAX-SAT 2,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/54930654829,https://www.airlines-manager.com/aircraft/show/86371267,2:15,10:14,310,"496,378$","455,108$","$1,468.09","$57,007.27"
SFO - SAT,54952417594,SFO-JAX-SAT 3,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/54952417594,https://www.airlines-manager.com/aircraft/show/86385102,13:00,20:59,310,"496,378$","455,108$","$1,468.09","$57,007.27"
SFO - SAT,54956618025,SFO-JAX-SAT 4,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/54956618025,https://www.airlines-manager.com/aircraft/show/86378760,15:00,22:59,310,"496,378$","455,108$","$1,468.09","$57,007.27"
SFO - SAT,54961494071,SFO-JAX-SAT 5,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/54961494071,https://www.airlines-manager.com/aircraft/show/86377315,17:15,1:14,310,"496,378$","455,108$","$1,468.09","$57,007.27"
SFO - SAV,54930655537,SFO-SAV-JAN 1,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/54930655537,https://www.airlines-manager.com/aircraft/show/114912265,5:45,16:59,310,"693,508$","640,203$","$2,065.17","$56,991.36"
SFO - SAV,54937424081,SFO-SAV-JAN 4,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/54937424081,https://www.airlines-manager.com/aircraft/show/114912270,7:45,18:59,310,"693,508$","640,203$","$2,065.17","$56,991.36"
SFO - SAV,54956618010,SFO-SAV-JAN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/54956618010,https://www.airlines-manager.com/aircraft/show/114917486,15:00,2:14,198,"521,067$","478,322$","$2,415.77","$42,580.59"
SFO - SAV,54961494346,SFO-SAV-JAN 3,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/54961494346,https://www.airlines-manager.com/aircraft/show/114912269,19:00,6:14,310,"693,508$","640,203$","$2,065.17","$56,991.36"
SFO - SAV,54965848617,SFO-SAV-JAN 2,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/54965848617,https://www.airlines-manager.com/aircraft/show/114912266,20:30,7:44,310,"693,508$","640,203$","$2,065.17","$56,991.36"
SFO - SDF,54930654998,SFO-SDF-LIT 2,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/54930654998,https://www.airlines-manager.com/aircraft/show/94886628,1:15,10:59,310,"611,784$","561,541$","$1,811.42","$57,692.57"
SFO - SDF,54930654999,SFO-SDF-LIT 4,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/54930654999,https://www.airlines-manager.com/aircraft/show/106453500,2:15,11:59,310,"611,784$","561,541$","$1,811.42","$57,692.57"
SFO - SDF,54952417716,SFO-SDF-LIT 1,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/54952417716,https://www.airlines-manager.com/aircraft/show/106453499,14:00,23:44,310,"611,784$","561,541$","$1,811.42","$57,692.57"
SFO - SDF,54956618140,SFO-SDF-LIT 3,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/54956618140,https://www.airlines-manager.com/aircraft/show/94886627,16:30,2:14,310,"611,784$","561,541$","$1,811.42","$57,692.57"
SFO - SDF,54961494198,SFO-SDF-LIT 5,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/54961494198,https://www.airlines-manager.com/aircraft/show/106453498,17:30,3:14,310,"611,784$","561,541$","$1,811.42","$57,692.57"
SFO - SEA,54930655274,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/54930655274,https://www.airlines-manager.com/aircraft/show/92390869,2:45,7:29,320,"300,138$","256,530$",$801.66,"$54,196.48"
SFO - SEA,54930655275,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/54930655275,https://www.airlines-manager.com/aircraft/show/92390870,3:30,8:14,320,"300,138$","256,530$",$801.66,"$54,196.48"
SFO - SEA,54930655276,SFO-PHL-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/54930655276,https://www.airlines-manager.com/aircraft/show/97900730,5:30,10:14,198,"228,859$","198,701$","$1,003.54","$41,979.08"
SFO - SEA,54937424044,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/54937424044,https://www.airlines-manager.com/aircraft/show/92390873,7:00,11:44,320,"300,138$","256,530$",$801.66,"$54,196.48"
SFO - SEA,54947196970,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/54947196970,https://www.airlines-manager.com/aircraft/show/92390871,12:00,16:44,320,"300,138$","256,530$",$801.66,"$54,196.48"
SFO - SEA,54971692265,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/54971692265,https://www.airlines-manager.com/aircraft/show/92390872,23:45,4:29,298,"287,684$","244,479$",$820.40,"$51,650.49"
SFO - SHA,54965848587,SFO 168B-4 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/54965848587,https://www.airlines-manager.com/aircraft/show/87933798,20:00,19:59,1046,"4,630,367$","4,294,834$","$4,105.96","$179,075.77"
SFO - SHA,54969516362,SFO 168A-4 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/54969516362,https://www.airlines-manager.com/aircraft/show/86817628,22:00,21:59,1046,"4,630,367$","4,294,834$","$4,105.96","$179,075.77"
SFO - SLC,54930654666,SFO-ORD-DTW 4,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/54930654666,https://www.airlines-manager.com/aircraft/show/101045331,0:00,4:29,400,"352,481$","311,580$",$778.95,"$69,497.40"
SFO - SLC,54930654667,SFO-ORD-DTW 2,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/54930654667,https://www.airlines-manager.com/aircraft/show/101045333,1:00,5:29,400,"352,481$","311,580$",$778.95,"$69,497.40"
SFO - SLC,54930654668,SFO-ORD-DTW 5,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/54930654668,https://www.airlines-manager.com/aircraft/show/101045330,3:00,7:29,400,"352,481$","311,580$",$778.95,"$69,497.40"
SFO - SLC,54937424087,SFO-ORD-DTW 1,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/54937424087,https://www.airlines-manager.com/aircraft/show/101045334,8:00,12:29,400,"352,481$","311,580$",$778.95,"$69,497.40"
SFO - SLC,54956618020,SFO-ORD-DTW 3,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/54956618020,https://www.airlines-manager.com/aircraft/show/101045332,15:00,19:29,216,"252,705$","214,728$",$994.11,"$47,894.72"
SFO - SMF,54942362998,SFO-SDF-LIT 1,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/54942362998,https://www.airlines-manager.com/aircraft/show/106453499,8:30,10:59,310,"82,768$","62,186$",$200.60,"$25,041.34"
SFO - SMF,54952417712,SFO-SDF-LIT 3,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/54952417712,https://www.airlines-manager.com/aircraft/show/94886627,14:00,16:29,310,"82,768$","62,186$",$200.60,"$25,041.34"
SFO - SMF,54956618009,SFO-SDF-LIT 5,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/54956618009,https://www.airlines-manager.com/aircraft/show/106453498,15:00,17:29,310,"82,768$","62,186$",$200.60,"$25,041.34"
SFO - SMF,54969516452,SFO-SDF-LIT 2,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/54969516452,https://www.airlines-manager.com/aircraft/show/94886628,22:45,1:14,310,"82,768$","62,186$",$200.60,"$25,041.34"
SFO - SMF,54971692272,SFO-SDF-LIT 4,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/54971692272,https://www.airlines-manager.com/aircraft/show/106453500,23:45,2:14,310,"82,768$","62,186$",$200.60,"$25,041.34"
SFO - STL,54937424008,SFO-MSY-STL 3,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/54937424008,https://www.airlines-manager.com/aircraft/show/98075265,6:45,15:29,320,"554,957$","501,203$","$1,566.26","$57,389.66"
SFO - STL,54942363016,SFO-MSY-STL 5,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/54942363016,https://www.airlines-manager.com/aircraft/show/98075263,8:45,17:29,320,"554,957$","501,203$","$1,566.26","$57,389.66"
SFO - STL,54952417469,SFO-MSY-STL 6,ERJ-175,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/54952417469,https://www.airlines-manager.com/aircraft/show/103534666,13:00,21:44,112,"261,292$","229,370$","$2,047.95","$26,263.74"
SFO - STL,54956618096,SFO-MSY-STL 2,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/54956618096,https://www.airlines-manager.com/aircraft/show/98075266,16:00,0:44,320,"554,957$","501,203$","$1,566.26","$57,389.66"
SFO - STL,54961494245,SFO-MSY-STL 4,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/54961494245,https://www.airlines-manager.com/aircraft/show/98075264,18:00,2:44,320,"554,957$","501,203$","$1,566.26","$57,389.66"
SFO - STL,54969516424,SFO-MSY-STL 1,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/54969516424,https://www.airlines-manager.com/aircraft/show/98075267,22:30,7:14,320,"554,957$","501,203$","$1,566.26","$57,389.66"
SFO - SYR,54930654711,SFO-GSO-SYR 2,737-900ER,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/54930654711,https://www.airlines-manager.com/aircraft/show/120056763,0:00,11:29,320,"711,383$","651,606$","$2,036.27","$56,743.63"
SFO - SYR,54947196966,SFO-GSO-SYR 3,737-900ER,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/54947196966,https://www.airlines-manager.com/aircraft/show/120056762,12:00,23:29,320,"711,383$","651,606$","$2,036.27","$56,743.63"
SFO - SYR,54952417445,SFO-GSO-SYR 4,737-900ER,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/54952417445,https://www.airlines-manager.com/aircraft/show/119550235,13:00,0:29,320,"711,383$","651,606$","$2,036.27","$56,743.63"
SFO - SYR,54961494295,SFO-GSO-SYR 5,A319-100,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/54961494295,https://www.airlines-manager.com/aircraft/show/120112473,18:30,5:59,198,"535,342$","491,597$","$2,482.81","$42,809.61"
SFO - SYR,54969516475,SFO-GSO-SYR 1,737-900ER,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/54969516475,https://www.airlines-manager.com/aircraft/show/120056764,23:00,10:29,320,"711,383$","651,606$","$2,036.27","$56,743.63"
SFO - TFU,54952417415,SFO 168B-3 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/54952417415,https://www.airlines-manager.com/aircraft/show/87566902,12:30,14:59,1046,"5,210,012$","4,802,353$","$4,591.16","$1,933,833.42"
SFO - TFU,54952417416,SFO 168A-3 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/54952417416,https://www.airlines-manager.com/aircraft/show/86483501,14:30,16:59,1046,"5,210,012$","4,802,353$","$4,591.16","$1,933,833.42"
SFO - TPA,54930654952,SFO-FLL-TPA 1,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/54930654952,https://www.airlines-manager.com/aircraft/show/97955544,1:00,12:14,320,"701,298$","635,247$","$1,985.15","$56,550.18"
SFO - TPA,54930654953,SFO-FLL-TPA 3,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/54930654953,https://www.airlines-manager.com/aircraft/show/97955542,5:00,16:14,320,"701,298$","635,247$","$1,985.15","$56,550.18"
SFO - TPA,54937424099,SFO-FLL-TPA 5,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/54937424099,https://www.airlines-manager.com/aircraft/show/97955540,8:00,19:14,320,"701,298$","635,247$","$1,985.15","$56,550.18"
SFO - TPA,54952417610,SFO-FLL-TPA 2,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/54952417610,https://www.airlines-manager.com/aircraft/show/97955543,13:00,0:14,320,"701,298$","635,247$","$1,985.15","$56,550.18"
SFO - TPA,54961494028,SFO-FLL-TPA 4,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/54961494028,https://www.airlines-manager.com/aircraft/show/97955541,17:00,4:14,320,"701,298$","635,247$","$1,985.15","$56,550.18"
SFO - TPA,54965848546,SFO-FLL-TPA 6 B,A319-100,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/54965848546,https://www.airlines-manager.com/aircraft/show/97900729,20:00,7:29,198,"529,365$","481,509$","$2,431.86","$41,931.12"
SFO - TPE,54965848586,SFO 168B-5 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/54965848586,https://www.airlines-manager.com/aircraft/show/87933799,20:00,21:14,1046,"4,755,660$","4,405,634$","$4,211.89","$3,572,135.68"
SFO - TPE,54969516368,SFO 168A-5 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/54969516368,https://www.airlines-manager.com/aircraft/show/86808589,22:00,23:14,1026,"4,692,068$","4,346,049$","$4,235.92","$3,523,823.51"
SFO - TUL,54930655499,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/54930655499,https://www.airlines-manager.com/aircraft/show/108410857,4:45,12:29,320,"491,543$","446,045$","$1,393.89","$57,678.23"
SFO - TUL,54937424037,SFO-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/54937424037,https://www.airlines-manager.com/aircraft/show/108466264,7:00,14:44,112,"232,110$","205,102$","$1,831.27","$26,521.81"
SFO - TUL,54956617996,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/54956617996,https://www.airlines-manager.com/aircraft/show/108410856,15:00,22:44,320,"491,543$","446,045$","$1,393.89","$57,678.23"
SFO - TUL,54956617997,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/54956617997,https://www.airlines-manager.com/aircraft/show/108410859,15:45,23:29,320,"491,543$","446,045$","$1,393.89","$57,678.23"
SFO - TUL,54965848640,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/54965848640,https://www.airlines-manager.com/aircraft/show/108410858,20:45,4:29,320,"491,543$","446,045$","$1,393.89","$57,678.23"
SFO - TUS,54937424093,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/54937424093,https://www.airlines-manager.com/aircraft/show/107160378,8:00,12:59,320,"318,002$","282,841$",$883.88,"$56,757.39"
SFO - TUS,54942363059,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/54942363059,https://www.airlines-manager.com/aircraft/show/107132310,9:30,14:29,112,"151,573$","131,806$","$1,176.84","$26,449.36"
SFO - TUS,54947196811,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/54947196811,https://www.airlines-manager.com/aircraft/show/107160381,10:30,15:29,320,"318,002$","282,841$",$883.88,"$56,757.39"
SFO - TUS,54956618114,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/54956618114,https://www.airlines-manager.com/aircraft/show/107160380,16:00,20:59,320,"318,002$","282,841$",$883.88,"$56,757.39"
SFO - TUS,54971692242,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/54971692242,https://www.airlines-manager.com/aircraft/show/107160379,23:30,4:29,320,"318,002$","282,841$",$883.88,"$56,757.39"
SFO - TYS,54930655536,SFO-TYS-MSN 2,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/54930655536,https://www.airlines-manager.com/aircraft/show/117782564,5:45,15:59,320,"639,914$","585,231$","$1,828.85","$57,188.70"
SFO - TYS,54937424075,SFO-TYS-MSN 1,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/54937424075,https://www.airlines-manager.com/aircraft/show/117782565,7:30,17:44,320,"639,914$","585,231$","$1,828.85","$57,188.70"
SFO - TYS,54956618109,SFO-TYS-MSN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/54956618109,https://www.airlines-manager.com/aircraft/show/117782582,16:00,2:14,198,"481,892$","442,053$","$2,232.59","$43,197.36"
SFO - TYS,54965848511,SFO-TYS-MSN 3,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/54965848511,https://www.airlines-manager.com/aircraft/show/117782563,19:30,5:44,320,"639,914$","585,231$","$1,828.85","$57,188.70"
SFO - TYS,54965848512,SFO-TYS-MSN 4,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/54965848512,https://www.airlines-manager.com/aircraft/show/117782562,20:45,6:59,320,"639,914$","585,231$","$1,828.85","$57,188.70"
SFO - YEG,54930655343,SFO-YEG-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/54930655343,https://www.airlines-manager.com/aircraft/show/117782560,3:30,9:59,320,"419,195$","376,577$","$1,176.80","$58,083.86"
SFO - YEG,54942362968,SFO-YEG-YYC 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/54942362968,https://www.airlines-manager.com/aircraft/show/117782581,8:15,14:59,198,"316,101$","285,829$","$1,443.58","$42,449.85"
SFO - YEG,54952417450,SFO-YEG-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/54952417450,https://www.airlines-manager.com/aircraft/show/117782561,13:00,19:29,320,"419,195$","376,577$","$1,176.80","$58,083.86"
SFO - YEG,54956617980,SFO-YEG-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/54956617980,https://www.airlines-manager.com/aircraft/show/116932364,15:00,21:29,320,"419,195$","376,577$","$1,176.80","$58,083.86"
SFO - YEG,54969516332,SFO-YEG-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/54969516332,https://www.airlines-manager.com/aircraft/show/117782559,21:30,3:59,320,"419,195$","376,577$","$1,176.80","$58,083.86"
SFO - YOW,54930654855,SFO-YOW-CUN 3,757-300,https://www.airlines-manager.com/network/showline/50555301,https://www.airlines-manager.com/network/showflight/54930654855,https://www.airlines-manager.com/aircraft/show/120056766,0:15,11:29,400,"930,546$","860,047$","$2,150.12","$76,562.05"
SFO - YOW,54930654856,SFO-YOW-CUN 4,757-300,https://www.airlines-manager.com/network/showline/50555301,https://www.airlines-manager.com/network/showflight/54930654856,https://www.airlines-manager.com/aircraft/show/120056765,1:15,12:29,400,"930,546$","860,047$","$2,150.12","$76,562.05"
SFO - YOW,54952417438,SFO-YOW-CUN 1,757-300,https://www.airlines-manager.com/network/showline/50555301,https://www.airlines-manager.com/network/showflight/54952417438,https://www.airlines-manager.com/aircraft/show/120056768,13:00,0:14,400,"930,546$","860,047$","$2,150.12","$76,562.05"
SFO - YOW,54952417439,SFO-YOW-CUN 2,757-300,https://www.airlines-manager.com/network/showline/50555301,https://www.airlines-manager.com/network/showflight/54952417439,https://www.airlines-manager.com/aircraft/show/120056767,14:00,1:14,400,"930,546$","860,047$","$2,150.12","$76,562.05"
SFO - YUL,54930654929,SFO-YYZ-YUL 1,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/54930654929,https://www.airlines-manager.com/aircraft/show/115413609,0:45,12:29,400,"922,307$","846,283$","$2,115.71","$72,126.39"
SFO - YUL,54937423969,SFO-YYZ-YUL 4,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/54937423969,https://www.airlines-manager.com/aircraft/show/115413612,6:00,17:44,400,"922,307$","846,283$","$2,115.71","$72,126.39"
SFO - YUL,54952417757,SFO-YYZ-YUL 2,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/54952417757,https://www.airlines-manager.com/aircraft/show/115413610,14:00,1:44,400,"922,307$","846,283$","$2,115.71","$72,126.39"
SFO - YUL,54956618163,SFO-YYZ-YUL 3,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/54956618163,https://www.airlines-manager.com/aircraft/show/115413611,16:45,4:29,400,"922,307$","846,283$","$2,115.71","$72,126.39"
SFO - YUL,54961494336,SFO-YYZ-YUL 5,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/54961494336,https://www.airlines-manager.com/aircraft/show/91126653,18:45,6:29,400,"922,307$","846,283$","$2,115.71","$72,126.39"
SFO - YVR,54930654941,SFO-MSY-STL 2,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/54930654941,https://www.airlines-manager.com/aircraft/show/98075266,0:45,5:59,320,"330,083$","289,120$",$903.50,"$55,245.86"
SFO - YVR,54930654942,SFO-MSY-STL 4,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/54930654942,https://www.airlines-manager.com/aircraft/show/98075264,2:45,7:59,320,"330,083$","289,120$",$903.50,"$55,245.86"
SFO - YVR,54937424050,SFO-MSY-STL 1,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/54937424050,https://www.airlines-manager.com/aircraft/show/98075267,7:15,12:29,320,"330,083$","289,120$",$903.50,"$55,245.86"
SFO - YVR,54956618095,SFO-MSY-STL 3,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/54956618095,https://www.airlines-manager.com/aircraft/show/98075265,16:00,21:14,320,"330,083$","289,120$",$903.50,"$55,245.86"
SFO - YVR,54961494243,SFO-MSY-STL 5,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/54961494243,https://www.airlines-manager.com/aircraft/show/98075263,18:00,23:14,320,"330,083$","289,120$",$903.50,"$55,245.86"
SFO - YVR,54969516361,SFO-MSY-STL 6,ERJ-175,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/54969516361,https://www.airlines-manager.com/aircraft/show/103534666,21:45,2:59,112,"156,483$","133,669$","$1,193.47","$25,541.85"
SFO - YYC,54930655375,SFO-YEG-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/54930655375,https://www.airlines-manager.com/aircraft/show/117782559,4:00,9:59,320,"385,106$","341,317$","$1,066.62","$57,044.62"
SFO - YYC,54952417449,SFO-YEG-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/54952417449,https://www.airlines-manager.com/aircraft/show/117782560,13:00,18:59,320,"385,106$","341,317$","$1,066.62","$57,044.62"
SFO - YYC,54956617979,SFO-YEG-YYC 5 B,A319-100,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/54956617979,https://www.airlines-manager.com/aircraft/show/117782581,15:00,20:59,198,"289,706$","258,886$","$1,307.51","$43,267.86"
SFO - YYC,54965848520,SFO-YEG-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/54965848520,https://www.airlines-manager.com/aircraft/show/117782561,19:30,1:29,320,"385,106$","341,317$","$1,066.62","$57,044.62"
SFO - YYC,54969516327,SFO-YEG-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/54969516327,https://www.airlines-manager.com/aircraft/show/116932364,21:30,3:29,320,"385,106$","341,317$","$1,066.62","$57,044.62"
SFO - YYZ,54930655074,SFO-YYZ-YUL 2,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/54930655074,https://www.airlines-manager.com/aircraft/show/115413610,1:45,12:29,400,"881,945$","803,825$","$2,009.56","$74,890.53"
SFO - YYZ,54937423970,SFO-YYZ-YUL 3,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/54937423970,https://www.airlines-manager.com/aircraft/show/115413611,6:00,16:44,400,"881,945$","803,825$","$2,009.56","$74,890.53"
SFO - YYZ,54937423971,SFO-YYZ-YUL 5,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/54937423971,https://www.airlines-manager.com/aircraft/show/91126653,8:00,18:44,400,"881,945$","803,825$","$2,009.56","$74,890.53"
SFO - YYZ,54952417758,SFO-YYZ-YUL 1,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/54952417758,https://www.airlines-manager.com/aircraft/show/115413609,14:00,0:44,400,"881,945$","803,825$","$2,009.56","$74,890.53"
SFO - YYZ,54961494215,SFO-YYZ-YUL 4,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/54961494215,https://www.airlines-manager.com/aircraft/show/115413612,17:45,4:29,400,"881,945$","803,825$","$2,009.56","$74,890.53"`;
