// Import event types from the registrar contract ABI

import { Address } from "@graphprotocol/graph-ts";
import { Repository } from "../types/schema";
import { NewRepo } from "../types/APMRegistry/APMRegistry";
import { Repo } from "../types/APMRegistry/templates";

export function handleNewRepo(event: NewRepo): void {
  Repo.create(event.params.repo as Address);

  let repo = new Repository(event.params.repo.toHex());
  repo.appId = event.params.id;
  repo.name = event.params.name.toString();
  repo.address = event.params.repo;

  repo.save();
}
