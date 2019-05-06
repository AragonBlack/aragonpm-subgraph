import { Version } from "../types/schema";
import { Repo, NewVersion } from "../types/APMRegistry/templates/Repo/Repo";

export function handleNewVersion(event: NewVersion): void {
  let _version = Repo.bind(event.address).getByVersionId(
    event.params.versionId
  );
  let version = new Version(event.params.versionId.toHex());

  version.repository = event.address.toHex();
  version.version = event.params.semanticVersion.toString();
  version.contract = _version.value1;
  version.content = _version.value2.toString();

  version.save();
}
