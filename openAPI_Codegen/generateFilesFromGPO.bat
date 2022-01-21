java -jar ./openAPI_Codegen/openapi-codegen-cli-5.0.0.jar ^
generate -i ./openAPI_Codegen/openapi-gpo.yaml -g typescript-axios   -o ./src/api/generated/gpo ^
--global-property=modelTests=false ^
--global-property=apiTests=false ^
--global-property=modelDocs=false ^
--global-property=apiDocs=false ^
--additional-properties=emitModelMethods=true,^
withInterfaces=true,^
modelPropertyNaming=camelCase,^
enumPropertyNaming=UPPERCASE,^
withSeparateModelsAndApi=true,modelPackage=specModels,apiPackage=specApi